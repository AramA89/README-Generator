// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  const badge = {
    Boost: '[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)]',
    IBM: '[![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)]',
    MIT: '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]',
    Apache: '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)]'
  }
  return badge[license];
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  const link = {
    Boost: '(https://www.boost.org/LICENSE_1_0.txt)',
    IBM: '(https://opensource.org/licenses/IPL-1.0)',
    MIT: '(https://opensource.org/licenses/MIT)',
    Apache: '(https://opensource.org/licenses/Apache-2.0)'
  }
  return link[license];
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license = '') {
    return  ('Get license details at' + renderLicenseLink(license))
  }
  else {
    return license;
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}

  # ${renderLicenseBadge(data.badge)}
  # ${renderLicenseLink(data.link)}
  # ${renderLicenseSection}

  ## Table Of Contents
  * [Project Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  * [Contribution](#contribution)
  * [Test](#test)
  * [Mock Up](#mockupimg)
  * [Deployed URL](#deployedURL)
  * [GitHub Repository](#github)
  
  ## Description
  # ${data.description}

  ## Installation
  # ${data.installation}

  ## Usage
  # ${data.usage}

  ## Contribution
  # ${data.conrtibution}

  ## Test
  # ${data.test}

  ## Mock Up
  # ${data.mockupimg}

  ## Deployed URL
  # ${data.deployedURL}

  ## GitHub Repository
  # ${data.github}


`;
}

module.exports = generateMarkdown;
