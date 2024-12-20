Simple Note Taker
====
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

Description
---
By Weng Fei Fung. Simple note taking app in the web browser that lets you save, view, and delete notes. Deploys on an Express server. The notes are stored in a db.json file.

Where to go from here: This is a good point to develop a full note-taking SaaS app like Evernote.com or Upnote.com. You may want to use Firebase Authentication SDK to offload some of the heavy lifting of user signups and login, getting user authenticated, then getting their user UID to associate the user to their notes in your chosen database. You may want to add AI APIs (Eg. Text summarizer, Outline, via OpenAI's API's).

See my notes on
- Firebase Authentication: https://wengindustry.com/app/devbrain/?open=Firebase,%20Firestore%20PRIMER%20-%20Authentication%20Process
- Adding AI APIs: https://wengindustry.com/app/devbrain/?open=LangChain%20Quick%20Guide
- Using MySQL: https://wengindustry.com/app/devbrain/?open=Fundamental%20-%20SQL%20Statements
- Using MongoDB: https://wengindustry.com/app/devbrain/?open=Choosing%20MongoDB%20Shell%20vs%20Mongo%20Native%20Driver%20for%20Node%20vs%20Mongoose

Table of Contents
---
- [Description](#description)
- [Demo](#demo)
- [Screenshots](#screenshots)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contribution](#contribution)
- [Tests](#tests)
- [Questions](#questions)

Demo
---
[Try it out](https://wengindustries.com/app/note-taking/)

Screenshots
---
![Screenrecording](README/demo.gif)

Installation
---
Deploy on heroku, your own web server, or localhost.

Web server:
```
nohup node ./server.js > /dev/null 2>&1 &
```

Localhost:
```
npm start
```

Usage
---
Visit / for the front page. /notes will list all notes.

### Localhost
Port will be 3001 on localhost: `localhost:3001` or your preferred port (Create a `.env` file with `PORT` variable)

License
---
[MIT License](https://opensource.org/licenses/MIT)

Contribution
---
If contributing, please make sure to create Jest Tests and Classes.

Tests
---
```
npm test
```

Questions
---
- Where can I see more of your repositories?
	- Visit [Siphon880gh's Repositories](https://github.com/Siphon880gh)


- Where can I reach you?
	- You can reach me with additional questions at <a href='mailto:weng.f.fung@gmail.com'>weng.f.fung@gmail.com</a>.
	- If interested in [hiring me](https://www.linkedin.com/in/weng-fung/).