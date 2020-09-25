# Resume Parser

A Simple NodeJs library to parse Resume / CV to JSON.

This library parse through CVs / Resumes in the word (.doc or .docx) / RTF / TXT / PDF / HTML format to extract the necessary information in a predefined JSON format. If the CVs / Resumes contain any social media profile links then the solution should also parse the public social profile web-pages and organize the data in JSON format (e.g. Linkedin public profile, Github, etc.)


## Usage

```
const parser = require("./src");
require("dotenv").config();

const file = process.env.FILE;

parser(file)
  .then((data) => console.log(data))
  .catch((error) => {
    console.log(error);
  });
```

