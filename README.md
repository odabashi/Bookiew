# <h1 align="center"> Bookiew </h1>
<p align="center"> 
    <img
        src="./client/src/assets/logos/logo.png"
        raw=true
        alt="Bookiew_Logo"
        style="width: 128px; height: 128px" />
</p>

<p align="center"> 
    Bookiew v1.0 is now available! 😄
    <br>
    <a href="#english">🇬🇧 English</a> | <a href="#deutsch">🇩🇪 Deutsch</a>
</p>


# <a name="english" id="english">🇬🇧 English Version</a>


## 🌟 Project Overview
The development of recent decades shows that we can obtain information very easily and quickly from everywhere, especially through billions of sources on the internet. Nevertheless, there is still fear about the accuracy of information and knowledge presented there, as websites hardly indicate the academic references from which the information can be obtained. Therefore, reading academic literature, regardless of the field, is a must to acquire the right trustworthy knowledge. But now another problem arises: there is a very large number of literature in various fields, and people do not know which of them to read.

Bookiew is an innovative web application designed to solve the information credibility challenge in the digital age. By creating a collaborative platform for book reviews, we address two critical needs:

1. **Reliable Information Discovery**: Curate trustworthy book insights beyond surface-level descriptions
2. **Community-Driven Knowledge Sharing**: Enable readers to contribute and benefit from structured, peer-reviewed book summaries


## 🚀 Key Features
- **Concise Book Reviews**: Users can add brief, insightful reviews for books across various domains
- **Interactive Feedback System**: Rate and comment on reviews
- **Single Review Per Book Policy**: Ensures quality over quantity
- **Author Engagement**: Writers can gain insights from reader feedback

## 💻 Tech Stack

### Frontend
- **Framework**: React.js
- **Styling**: HTML5, CSS3
- **Testing**: React-Testing-Library, Jest

### Backend
- **Runtime**: Node.js
- **Framework**: Express.js
- **Database**: MySQL
- **API Testing**: Postman

## 📦 Version
**Current Version**: 1.0 🎉

## 👥 Team Structure
| **Role** | **Responsible** |
|---|---|
| Frontend Developer | Abdurrahman ODABAŞI |
| Backend Developer | Fatma Tuğçe AKGÜL, Mahasin ELDERVİŞ, Sena Nur YILMAZ |
| DevOps & QA | Betül BEIDAS, Nazlı ARAKI |


## 🤝 Contributing
Your insights and contributions are invaluable to Bookiew's growth! Whether you've found a bug, have a feature suggestion, or want to improve our codebase, we warmly invite you to open an issue or create a pull request – together, we can make this project even better.

# <a name="deutsch" id="deutsch">🇩🇪 Deutsche Version</a>

## 🌟 Projektübersicht
Die Entwicklung der letzten Jahrzehnte zeigt, dass wir Informationen sehr einfach und schnell von überall her erhalten können, insbesondere durch Milliarden von Quellen im Internet. Dennoch gibt es immer noch Befürchtungen hinsichtlich der Richtigkeit der dort präsentierten Informationen und des Wissens, da auf den Websites kaum die akademischen Referenzen angegeben sind, aus denen die Informationen bezogen werden können. Deswegen ist es ein Muss, die akademischen Literaturen zu lesen, egal zu welchem Bereich gehören, um sich das richtige, vertrauenswürdige Wissen anzueignen. Nun stellt sich aber ein anderes Problem: Es gibt eine sehr große Anzahl an Literatur in verschiedenen Bereichen, und die Menschen wissen nicht, welche davon sie lesen sollen.

Bookiew ist eine innovative Webanwendung, die entwickelt wurde, um das Problem der Glaubwürdigkeit von Informationen im digitalen Zeitalter zu lösen. Durch die Schaffung einer kollaborativen Plattform für Buchrezensionen gehen wir auf zwei kritische Bedürfnisse ein:

1. **Zuverlässige Informationsentdeckung**: Kuratieren vertrauenswürdiger Bucheinblicke jenseits oberflächlicher Beschreibungen
2. **Community-gesteuerter Wissensaustausch**: Ermöglicht den Lesern, strukturierte, von Fachleuten geprüfte Buchzusammenfassungen beizusteuern und davon zu profitieren

## 🚀 Hauptmerkmale
- **Klare Buchbesprechungen**: Benutzer können kurze, aufschlussreiche Rezensionen für Bücher aus verschiedenen Bereichen hinzufügen
- **Interaktives Feedback-System**: Bewertungen und Kommentare zu Rezensionen
- **Richtlinie von "Eine Rezension pro Buch"**: Sorgt für Qualität statt Quantität
- **Autorenengagement**: Autoren können aus dem Feedback der Leser Erkenntnisse gewinnen
  
## 💻 Technologie-Stack

### Frontend
- **Framework**: React.js
- **Styling**: HTML5, CSS3
- **Testing**: React-Testing-Library, Jest

### Backend
- **Laufzeitumgebung**: Node.js
- **Framework**: Express.js
- **Datenbank**: MySQL
- **API-Testing**: Postman
  
## 📦 Versionshinweise
**Aktuelle Version**: 1.0 🎉

## 👥 Teamstruktur
| **Rolle** | **Verantwortliche** |
|---|---|
| Frontend-Entwickler | Abdurrahman ODABAŞI |
| Backend-Entwickler | Fatma Tuğçe AKGÜL, Mahasin ELDERVİŞ, Sena Nur YILMAZ |
| DevOps & Qualitätssicherung | Betül BEIDAS, Nazlı ARAKI |

## 🤝 Mitwirken
Deine Erkenntnisse und Beiträge sind von unschätzbarem Wert für das Wachstum von Bookiew! Egal, ob du einen Fehler gefunden hast, einen Vorschlag für eine Funktion hast oder unsere Codebasis verbessern möchtest, wir laden dich herzlich ein, einen Issue zu eröffnen oder einen Pull Request zu erstellen - gemeinsam können wir dieses Projekt noch besser machen.

# Installation

## Important Notice
Before you can run the project, you must download and install NodeJS on your machine! 
<br><br>
You can download NodeJS from <a href="https://nodejs.org/en/download/">the official website</a>.
<br><br>
Note that `npm` is also installed, so if you are going to use it, you are through with the preliminary steps.

To use `yarn`, install it as described on the <a href="https://yarnpkg.com/getting-started/install">Yarn official website</a>.

To use `pnpm`, open the built-in Terminal and type:
```sh
npm install --g pnpm
```
Learn more from the <a href="https://pnpm.io/installation">pnpm official website</a>.
<br>

## Clone the Repository:

After you have downloaded NodeJs and one of the package managers on your machine, you are ready to clone this repository (e.g. from Github Desktop).

## Installation of dependencies:

To Install all dependencies listed in a `package.json` file, move into the project folder, 
```sh
cd 'directoryOfProject'
cd ./client/
```

then open the built-in Terminal and type one of the following commands:

```sh
npm install
```

```sh
yarn install
```

```sh
pnpm install
```

## Running the App:

Once you have installed all the required dependencies, you can run the app in the development mode by typing one of the following commands in the built-in Terminal:

```sh
npm start
```
```sh
yarn start
```
```sh
pnpm start
```

## Viewing the App:

Open [http://localhost:3000](http://localhost:3000) to view the app in the browser.

Notice that the page will reload if you make edits. You will also see any errors (if exist) in the console.


## Running the Server:

Firstly all dependencies listed in a `package.json` file on Server should be installed, for that move into the server folder, 
```sh
cd 'directoryOfProject'
cd ./server/
```

then open the built-in Terminal and type one of the following commands:

```sh
npm install
```

```sh
yarn install
```

```sh
pnpm install
```

Once you have installed all the required dependencies, you can run the server in the development mode by typing one of the following commands (Generated Scripts) in the built-in Terminal:

```sh
npm start
```
```sh
yarn start
```
```sh
pnpm start
```


## Build the application:
To build the application run the following command: 

```sh
cd ./client/ && CI='' npm run build

// OR 

cd ./client/ && CI='' yarn build
```
After the building is done, you can run the built application by running the following command: 

```sh
cd ../server && npm start 

// OR 

cd ../server && yarn start 
```
The application will be running on [http://localhost:4000](http://localhost:4000). 
