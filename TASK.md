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

**Quellen, nach Brauchbarkeit geordnet** (am 23.09.2026 einzeln getestet):

| Markt | Quelle | Form |
|---|---|---|
| Penny | `penny.at/angebote` | Text, direkter Web-Abruf, oft Tage im Voraus |
| Billa + Billa Plus | Flugblatt-PDF, Link „als PDF downloaden" auf `billa.at/unsere-aktionen/flugblatt` | **PDF mit Textebene**, direkter Web-Abruf, vollständig |
| Billa, Zweitquelle | `shop.billa.at/aktionen` | Text, wechselt aber erst Donnerstag früh |
| Spar + Eurospar | `spar.at/produktwelt/<kategorie>?inAngebot=true` | Text mit „statt"-Preis, lädt per JavaScript → **nur im Browser lesbar**, nicht per Web-Abruf |
| Interspar | `interspar.at/shop/lebensmittel/search/?query=*&hitsPerPage=80&page=1&filter=is-on-promotion:true` | Text, ebenfalls nur im Browser; rund 900 Treffer, aber ohne Normalpreis in der Liste |
| Lidl | `lidl.at/l/de/flugblatt/…` | Produktnamen lesbar, **Preise nur im Bild** — hier bleibt nur Ablesen |

Die Spar-Produktwelt kennt eine Marktauswahl; damit lassen sich regionale Aktionen für
Kärnten einblenden. Die Kategorie-Slugs stehen in der Navigation der Produktwelt.

Getestet und verworfen: eine öffentliche Schnittstelle bei marktguru gibt es nicht (404),
der issuu-Reader hinter dem Penny-Flugblatt antwortet mit 403, und die Aggregatoren
(marktguru, aktionsfinder, kimbino, prospektmaschine, flugblattangebote, rabattkompass,
aktionsradar) zeigen dieselben Bildseiten; ihre Textlisten enthalten einen Bruchteil der
Artikel und selten Normalpreise. Eine offene Datenquelle für österreichische Flugblätter
existiert nicht.

Die Billa-PDFs erscheinen in der Ausgabe Wien; regionale Abweichungen für Kärnten sind
möglich und gehören in die Anmerkung.

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
