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
function generateMarkdown(data) {
  return `# ${data.Title}
  https://github.com/${data.GithubUsername}/${data.Title}
  # Description
  ${data.Description}
  # Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributors](#contributors)
  * [TestCommands](#testcommands)
  * [Questions](#questions)

  # Installation
  The following neccesary dependencies must be installed to run the application properly: ${data.Installation}
  # Usage 
  In order to use this app, ${data.Usage}
  # License
  This project is licensed under the ${data.License} license.
  ![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)
  # Contribuitors
  Contribuitors: ${data.Contribuitors}
  # Test-Commands
  The following is needed to run the test: ${data.TestCommands}
  # Questions
  In case you have any questions, contact ${data.GithubUsername} trough Github.
`;
}

module.exports = generateMarkdown;
