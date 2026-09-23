# Aufgabentext für den Wochenlauf

Diesen Text in eine neue Unterhaltung kopieren. Solange der Lauf manuell erfolgt,
einfach einfügen; später wird daraus die wiederkehrende Aufgabe (Donnerstag früh)
im privaten Account.

---

Führe den wöchentlichen Aktionslauf für die Einkaufswochen-Site durch.

**Projektordner:** `C:\Claude\Menu` (Ordnerzugriff anfordern, falls nicht verbunden).
Lies zuerst `README.md` im Projektordner — dort stehen das JSON-Schema und die
Menüregeln. Die halte dich strikt ein.

**Zeitpunkt.** Donnerstag früh, nicht früher. Erprobt am 23.09.2026: Mittwoch abends
war das Billa-Flugblatt für den Folgetag zwar angekündigt, aber inhaltlich noch nicht
veröffentlicht, und vom SPAR-Flugblatt KW 39 waren nur einzelne Getränke-Highlights
lesbar. Penny und Lidl stehen dagegen schon Tage vorher bereit. Ein zweiter Lauf am
Montag lohnt nur, wenn Märkte mit Wochenstart Montag dazukommen.

**Recherche.** Wochenaktionen für Kärnten:

- **Penny** ist der Hauptmarkt, vollständig auswerten.
- **Billa / Billa Plus** und **Spar / Eurospar Kärnten** als Zweitmärkte.
- **Lidl** nur aufnehmen, wenn ein Artikel dort deutlich günstiger ist als bei den
  anderen, oder wenn er sonst nirgends im Angebot ist.

Brauchbare Quellen: penny.at/angebote, billa.at/aktionen, spar.at/aktionen/kaernten,
rabattkompass.at, flugblattangebote.at, marktguru.at, aktionsradar.at. Die Spar-Flugblätter
für Kärnten liegen meist nur als Bild-PDF vor und lassen sich per Web-Abruf nicht auslesen.

**Preise niemals schätzen oder aus der Vorwoche übernehmen.** Was nicht belegbar ist,
kommt nicht in die Datei. Stattdessen den Markt in `status[]` auf `partial` oder `missing`
setzen und im `note` sagen, warum.

**Ausgabe.** Eine Datei `data/<id>.json` nach dem Schema im README, `<id>` ist das
Startdatum der Gültigkeit im Format JJJJ-MM-TT. Gibt es diese Datei schon, wird sie
ergänzt statt ein zweiter Eintrag angelegt — dann bitte auch die betroffenen Einträge
in `status[]` aktualisieren.

Dann `data/runs.json` nachziehen: `dealCount`, `bestSaving`, `markets`.

**Menü und Einkaufsliste** nach den Menüregeln im README: vier Portionen, mindestens
zwei Gerichte ohne Fleisch, kindgerecht, und jede Zutat auf der Einkaufsliste muss in
einem Gericht oder in der Jause vorkommen.

**Prüfen.** Beide JSON-Dateien auf gültige Syntax prüfen, bevor du fertig meldest.

**Veröffentlichen.** Das kann ich nicht selbst — `publish.cmd` ist eine Windows-Datei und
der Push braucht meine GitHub-Anmeldung. Sag mir am Ende, dass ich `publish.cmd` im
Projektordner doppelklicken soll.

**Bericht im Chat**, kurz: welche Märkte ausgewertet wurden und welche nicht, was sich
gegenüber dem letzten Lauf geändert hat, die Summe der Einkaufsliste und die auffälligsten
Preisunterschiede zwischen den Märkten.
