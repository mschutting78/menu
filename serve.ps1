# Winziger statischer Webserver ohne Installation.
# Wird von start.cmd aufgerufen, wenn kein Python vorhanden ist.
param([int]$Port = 8000)

$root = $PSScriptRoot
$types = @{
  ".html" = "text/html; charset=utf-8"
  ".css"  = "text/css; charset=utf-8"
  ".js"   = "text/javascript; charset=utf-8"
  ".json" = "application/json; charset=utf-8"
  ".md"   = "text/plain; charset=utf-8"
  ".svg"  = "image/svg+xml"
  ".png"  = "image/png"
  ".jpg"  = "image/jpeg"
  ".jpeg" = "image/jpeg"
  ".ico"  = "image/x-icon"
  ".webp" = "image/webp"
}

$listener = New-Object System.Net.Sockets.TcpListener([System.Net.IPAddress]::Any, $Port)
try { $listener.Start() }
catch { Write-Host "Port $Port ist belegt. start.cmd schliessen oder anderen Port waehlen."; exit 1 }

Write-Host ""
Write-Host "  Am PC:     http://localhost:$Port"
Get-NetIPAddress -AddressFamily IPv4 -ErrorAction SilentlyContinue |
  Where-Object { $_.IPAddress -notlike "127.*" -and $_.IPAddress -notlike "169.254.*" } |
  ForEach-Object { Write-Host "  Am Handy:  http://$($_.IPAddress):$Port" }
Write-Host ""
Write-Host "  Beenden mit Strg+C"
Write-Host ""

$rootFull = [System.IO.Path]::GetFullPath($root)

while ($true) {
  $client = $listener.AcceptTcpClient()
  try {
    $stream = $client.GetStream()
    $stream.ReadTimeout = 4000
    $reader = New-Object System.IO.StreamReader($stream)
    $line = $reader.ReadLine()
    if ([string]::IsNullOrWhiteSpace($line)) { continue }

    $target = ($line -split " ")[1]
    $path = [System.Uri]::UnescapeDataString(($target -split "\?")[0])
    if ($path -eq "/" -or $path -eq "") { $path = "/index.html" }
    $candidate = Join-Path $root ($path.TrimStart("/") -replace "/", "\")
    $full = [System.IO.Path]::GetFullPath($candidate)

    if ($full.StartsWith($rootFull) -and (Test-Path -LiteralPath $full -PathType Leaf)) {
      $bytes = [System.IO.File]::ReadAllBytes($full)
      $ext = [System.IO.Path]::GetExtension($full).ToLower()
      $ct = $types[$ext]
      if (-not $ct) { $ct = "application/octet-stream" }
      $head = "HTTP/1.1 200 OK`r`nContent-Type: $ct`r`nContent-Length: $($bytes.Length)`r`nCache-Control: no-store`r`nConnection: close`r`n`r`n"
      Write-Host ("  200  " + $path)
    } else {
      $bytes = [System.Text.Encoding]::UTF8.GetBytes("404 - nicht gefunden: $path")
      $head = "HTTP/1.1 404 Not Found`r`nContent-Type: text/plain; charset=utf-8`r`nContent-Length: $($bytes.Length)`r`nConnection: close`r`n`r`n"
      Write-Host ("  404  " + $path)
    }

    $hb = [System.Text.Encoding]::ASCII.GetBytes($head)
    $stream.Write($hb, 0, $hb.Length)
    $stream.Write($bytes, 0, $bytes.Length)
    $stream.Flush()
  } catch {
    # abgebrochene Verbindung - naechster Request
  } finally {
    $client.Close()
  }
}
