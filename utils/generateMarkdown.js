// TODO: Create a function to generate markdown for README
function renderLicenseBadge(license) {
  if (license !== 'None') {
    return `[![License](https://img.shields.io/badge/License-${license}-blue.svg)](https://opensource.org/licenses/${license})`;
  }
  return '';
}
function renderLicenseLink(license) {
  if (license !== 'None') {
    return `\n* [License](https://opensource.org/licenses/${license})\n`;
  }
  return '';
}
function renderLicenseSection(license) {
  if (license !== 'None') {
    return `## License

This project is licensed under the ${license} license.`;
  }
  return '';
}

function generateMarkdown(data) {
  console.log('data: ', data);
  const { License } = data;
  return `# ${data.title}
  ${renderLicenseBadge(data.License)}
# Description

${data.description}

# Table of Contents

* [Installation](#installation)
* [Licenses](#License)



[${data.github}](https://github.com/${data.github}/${data.title}/)
# [shield](https://shields.io/)
## Description 

${data.description}

## Installation

\`\`\`
${data.installation}
\`\`\`


## License
${data.License}
${renderLicenseLink(License)}

If you have any questions about the repo, open an issue or contact me directly at ${
    data.email
  }. You can find more of my work at [${data.github}](https://github.com/${
    data.github
  }/).

`;
}

module.exports = generateMarkdown;
