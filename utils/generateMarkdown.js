// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== "none"){
    return `![GitHub license](https://img.shields.io/badge/license-${license}-blue.svg)`;
  }
  return"";
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== "none"){
    return `## License \n\n ${license}`;
  }
  return"";
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
${renderLicenseBadge(data.license)}
# ${data.title}

## Description

${data.description}

## Installation

${data.installation}

## Usage

${data.usage}

## Contribution Guidelines

${data.contribution}

## Tests

${data.tests}

## Questions

Contact me by my email or github if you have additional questions
${data.email}
https://github.com/${data.username}

${renderLicenseSection(data.license)}`;
}

module.exports = generateMarkdown;
