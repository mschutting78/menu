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

**Quellen, nach Brauchbarkeit geordnet** (Stand 23.09.2026 geprüft):

| Markt | Quelle | Form |
|---|---|---|
| Penny | `penny.at/angebote` | Text, direkt auswertbar, oft Tage im Voraus |
| Billa | `shop.billa.at/aktionen` | Text mit Aktions- und Normalpreis, wechselt Donnerstag |
| Spar | `spar.at/aktionen/kaernten` → Flugblatt öffnen | nur Bildseiten, im Browser durchblättern und ablesen |
| Lidl | `lidl.at/c/flugblatt/…` | nur Bildseiten; `rabattkompass.at` liefert Text ohne Normalpreise |

Eine offene Schnittstelle für österreichische Flugblätter gibt es nicht. Die Aggregatoren
(marktguru, aktionsfinder, kimbino, prospektmaschine, flugblattangebote, rabattkompass,
aktionsradar) zeigen die Flugblätter ebenfalls als Bilder; ihre Textseiten enthalten nur
einen Bruchteil der Artikel und selten Normalpreise. Für Spar und Lidl bleibt daher das
Ablesen aus dem Blätterkatalog. Dabei die großen Preisangaben nehmen und das
Kleingedruckte nur, wenn es eindeutig lesbar ist.

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
