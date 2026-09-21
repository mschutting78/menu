# Einkaufswochen

Statische Seite für die wöchentliche Aktionsrecherche: Angebote, Wochenmenü mit Rezepten
und abhakbare Einkaufsliste. Läuft auf GitHub Pages, ohne Build und ohne Abhängigkeiten.

## Aufbau

```
index.html            Landingpage, listet alle Durchläufe aus data/runs.json
woche.html            Detailansicht, lädt data/<id>.json über ?w=<id>
assets/style.css      gemeinsames Stylesheet
data/runs.json        Archivindex
data/2026-09-24.json  ein Durchlauf
```

Die HTML-Dateien enthalten keine Inhalte. Für einen neuen Durchlauf werden nur
zwei Dateien angefasst: eine neue `data/<id>.json` anlegen, einen Eintrag in
`data/runs.json` ergänzen.

`<id>` ist immer das Startdatum der Gültigkeit im Format `JJJJ-MM-TT`. Bei zwei
Durchläufen pro Woche entstehen so zwei Einträge, zum Beispiel `2026-09-24`
(Donnerstagsaktionen) und `2026-09-28` (Montagsaktionen von Hofer und Lidl).

## Menüregeln

Leitlinien für jeden neuen Durchlauf, gelten für `menu.days[]`:

- **Mindestens zwei Gerichte pro Woche ohne Fleisch.** Fisch zählt nicht als
  fleischlos im Sinne dieser Regel, ist aber als dritte Variante willkommen.
- **Kindgerecht.** Keine Innereien, keine scharfen Gerichte, keine ungewohnten
  Zutaten. Vertraute Hausmannskost bevorzugen; Süßspeisen als Hauptgericht
  (Kaiserschmarrn, Grießschmarrn, Palatschinken) sind ausdrücklich erwünscht.
- Vier Portionen, siehe `menu.servings`.
- Jede Zutat auf der Einkaufsliste soll in mindestens einem Gericht oder in der
  Jause vorkommen — sonst verfälscht sie die Summe.

## Lokal ansehen

Direktes Öffnen per Doppelklick funktioniert nicht — der Browser blockiert das
Nachladen der JSON-Dateien von `file://`. Stattdessen im Projektordner:

```
python -m http.server 8000
```

Dann `http://localhost:8000` aufrufen. Auf GitHub Pages läuft es ohne Zusatz.

## Schema data/runs.json

```json
{ "runs": [
  { "id": "2026-09-24", "title": "24. bis 30. September",
    "from": "2026-09-24", "to": "2026-09-30",
    "dealCount": 20, "bestSaving": 56, "markets": ["Penny", "Spar"] }
]}
```

Die Sortierung übernimmt die Seite, neueste `id` steht oben und bekommt das
Kennzeichen "aktuell".

## Schema data/<id>.json

Alle Felder außer `id` und `title` sind optional; fehlende Abschnitte werden
einfach nicht gerendert.

| Feld | Bedeutung |
|---|---|
| `id`, `title`, `region`, `created` | Kopfdaten |
| `sources` | Liste der Quellen, erscheint im Fuß |
| `notes` | Anmerkung zur Erhebung, erscheint im Fuß |
| `status[]` | `market`, `state` (`ok`, `partial`, `missing`), `note` |
| `deals[]` | siehe unten |
| `dealsNote`, `flatPrices` | Fließtext über und unter der Tabelle |
| `menu` | `title`, `from`, `to`, `servings`, `note`, `reuse`, `days[]` |
| `menu.days[]` | `day`, `title`, `minutes`, `ingredients[]`, `deals[]`, `steps[]` |
| `shopping[]` | `market`, `note`, `items[]` mit `name`, `qty`, `eur` |
| `pantry[]` | Vorratsartikel als Strings |

Ein Angebot:

```json
{ "product": "Kornspitz", "unit": "75 g", "market": "Penny",
  "price": 0.37, "regular": 0.75,
  "validFrom": "2026-09-28", "validUntil": "2026-09-30",
  "untilSaturday": false, "category": "Brot & Gebäck" }
```

- Die Ersparnis in Prozent wird aus `price` und `regular` gerechnet, nicht gespeichert.
  Fehlt `regular`, steht in der Spalte ein Strich und die Zeile rutscht ans Ende.
- `untilSaturday: false` blendet die Zeile aus, wenn der Filter "nur was noch am
  Samstag gilt" aktiv ist. Ohne das Feld gilt die Zeile als samstags gültig.
- `validFrom` nur setzen, wenn die Aktion später startet als die Woche.
- `category` speist den Kategoriefilter. Einheitliche Schreibweise verwenden,
  sonst entstehen doppelte Einträge im Auswahlfeld.

## Am Handy

Unter 46 rem Breite stellt sich die Angebotstabelle auf Karten um — eine Karte je
Angebot, Spaltennamen kommen aus `data-label` in `woche.html`. Die Summenzeile der
Einkaufsliste klebt dann am unteren Rand, damit beim Scrollen durch die Liste immer
sichtbar bleibt, was noch offen ist. "Liste gesamt" wird dort ausgeblendet.

## Abhaken

Der Zustand der Einkaufsliste liegt in `localStorage` unter `einkauf:<id>`,
also pro Durchlauf und pro Gerät getrennt. Er wandert nicht zwischen Geräten
und geht beim Leeren der Browserdaten verloren.

## Preise

Alle Werte sind Richtwerte aus Flugblatt-Aggregatoren, keine Kassenpreise.
Vor dem Einkauf gegenprüfen.
