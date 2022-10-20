const fs = require("fs");

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}
  
  ${data.badge}

  ## Table Of Contents
  * [Project Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contribution](#contribution)
  * [Test](#test)
  * [Mock Up](#mockupimg)
  * [Deployed URL](#deployedURL)
  * [GitHub Repository](#github)
  * [Contact]($email)
  
  ## Description
  ${data.description}

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## License
  ${data.license}

  ## Contribution
  ${data.contribution}

  ## Test
  ${data.test}

  ## Mock Up
  ${data.mockupimg}

  ## Deployed URL
  ${data.deployedURL}

  ## GitHub Repository
  ${data.github}

  ## Contact
  For any additional questions.
  ${data.email}

`;
}

function writeFile (data) {
  return new Promise((resolve, reject) => {
    fs.writeFile("./sampleREADME.md", generateMarkdown(data), (err) => {
      if (err) {
        reject(err);
        return;
      }
      resolve({ ok: true, message: "Successfull sampleREADME.md created!"});
    });
  });
};

  module.exports = {
    writeFile,
  };