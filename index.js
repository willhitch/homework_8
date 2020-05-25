const inquirer = require("inquirer");
const fs = require("fs");

const questions = [
  {
    type: "input",
    name: "title",
    message: "What is your the name of your Project?",
  },
  {
    type: "input",
    name: "description",
    message: "Describe your project",
  },
  {
    type: "input",
    name: "contents",
    message:
      "List the contents of your README.md? (start each list item with a space)",
  },
  {
    type: "input",
    name: "installation",
    message: "Instalation Steps",
  },
  {
    type: "input",
    name: "usage",
    message: "What is the use for your App?",
  },
  {
    type: "list",
    name: "license",
    choices: [
      "Apache 2.0",
      "GPL",
      "LGPL",
      "MIT",
      "Mozilla Public License 2.0",
      "Common Development and Distribution License",
      "Eclipse Public License version 2.0",
    ],
  },
  {
    type: "input",
    name: "contributors",
    message: "Who made the application?",
  },
  {
    type: "input",
    name: "tests",
    message: "How can you test your app?",
  },
  {
    type: "input",
    name: "githubUsername",
    message: "What is your Git Hub username?",
  },
  {
    type: "input",
    name: "githubRepo",
    message: "What is the link to your Git Hub Repository?",
  },
];

function init() {
  inquirer.prompt(questions).then((data) => {
    const contents = data.contents.split(" ").join("\n *  ");

    fs.appendFileSync("README.md", `# ${data.title} \n`);
    fs.appendFileSync(
      "README.md",
      `## Description \n >${data.description}\n  `
    );
    fs.appendFileSync("README.md", `## Table of Contents \n ${contents} \n`);
    fs.appendFileSync(
      "README.md",
      `## Installation \n ${data.installation} \n`
    );
    fs.appendFileSync("README.md", `## Usage \n ${data.usage} \n`);
    fs.appendFileSync("README.md", `## License: ${data.license} \n`);
    fs.appendFileSync(
      "README.md",
      `## Contributors \n ${data.contributors} \n`
    );
    fs.appendFileSync("README.md", `## Tests \n ${data.tests} \n`);
    fs.appendFileSync(
      "README.md",
      `### Git Hub \n ${data.githubUsername} \n *  ${data.githubRepo} \n`
    );
  });
}

init();
