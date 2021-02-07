// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (!license) {
    return '';
  }

  return `
  [![License: ${license}](https://img.shields.io/badge/License-${license}-blue.svg)](https://opensource.org/licenses/${license})
  `
}

// // TODO: Create a function that returns the license link
// // If there is no license, return an empty string
// function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (!license) {
    return '';
  }

  return `
  ## License
  ${license}
  `
}

// TODO: Create a function to generate markdown for README
const generateMarkdown = data => {

  const { license } = data;
  
  return `
# ${data.title}

## Table of Contents
* [Description](#description)
* [Intallation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Questions](#questions)

## Description
${data.desc}

## Installation
${data.install}

## Usage
${data.use}

## Languages
${data.languages}

${renderLicenseSection(license)}
${renderLicenseBadge(license)}

## Contributing
${data.contribute}

## Tests
${data.test}

## Questions
If you have any further questions about this application / repository feel free to contact me at: 
* [GitHub](https://github.com/${data.github})
* E-Mail: ${data.email}
`;
}

module.exports = generateMarkdown;
