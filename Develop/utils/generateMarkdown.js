// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
const generateMarkdown = data => {
  return `# ${data.title}
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
  ## License
  ${data.license}
  ## Contributing
  ${data.contribute}
  ## Questions
  * [GitHub](https://github.com/${data.github})
  * E-Mail: ${data.email}
`;
}

module.exports = generateMarkdown;
