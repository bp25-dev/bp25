
# Admin Webapp Museum
## Installation
### Windows
Installation von NodeJS und npm:  [https://nodejs.org](https://nodejs.org)
- Wenn man Node.js herunterlädt, wird npm automatisch mitinstalliert

### Debian/ Ubuntu
Installation von NodeJS: \
`sudo apt install nodejs ` \
\
Installation von npm: \
`sudo apt install npm` 

--- 
 ## Getting started
 - Projekt clonen
 - In das lokale Verzeichnis wechseln, in dem der Code liegt
 - `npm install` (einmalig)
 - `npm start`
 
 Nun öffnet sich die Website in einem neuen Browser-Fenster. (läuft über _localhost_)

 ### Installation von weiteren Packages
Die benötigten Packages findet man in der _package.json_ Datei unter _dependencies_.
Man installiert sie nach folgendem Schema: \
`npm install [package-name]`

### Für Build Production
`npm run build`


---
## Aufbau Admin Webapp

Die Website besteht aus einer Login-Page einem Dashboard und neun weiteren Seiten.
Nachdem man sich erfolgreich eingeloggt hat, kommt man auf das Dashboard.
VOn hier hat man die Möglichkeit zu den vier Hauptseiten weiterzukommen:
- Touren
- Exponate
- Bildverknüpfungen (Abzeichen)
- Benutzer*innen

Desweiteren gibt es folgende Seiten:
- Code erstellen 
- Bildverknüpfungen (Profilbilder) 
- Feedback
- FAQ


Administator*innen haben Zugriff auf alle Seiten, normale User nicht. \
(Details in der Dokumentation)
