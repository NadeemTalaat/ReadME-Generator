function renderLicenseBadge(license) {
  switch (license) {
    case "MIT":
      return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]";
      break;

    case "Apache":
      return "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)]";
      break;

    case "Mozilla":
      return "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)]";
      break;

    case "Unilicense":
      return "[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)]";
      break;

    case "GNU":
      return "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)]";
      break;

    default:
      return "";
  }
}

function renderLicenseLink(license) {
  switch (license) {
    case "MIT":
      return "(https://opensource.org/licenses/MIT)";
      break;

    case "Apache":
      return "(https://opensource.org/licenses/Apache-2.0)";
      break;

    case "Mozilla":
      return "(https://opensource.org/licenses/MPL-2.0)";
      break;

    case "Unilicense":
      return "(http://unlicense.org/)";
      break;

    case "GNU":
      return "(https://www.gnu.org/licenses/gpl-3.0)";
      break;

    default:
      return "";
  }
}

// If there is no license, return an empty string
function renderLicenseSection(license) {
  return renderLicenseBadge(license) + renderLicenseLink(license);
}

function generateMarkdown(data) {
  return `# ${data.title}

  ${renderLicenseSection(data.license)}

## Description
${data.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Tests](#tests)
- [License](#license)
- [Questions](#questions)

## Installation
${data.installation}

## Usage
${data.usage}

## Contributing
${data.contributing}

## Tests
${data.tests}

## License
${data.license}

## Questions
For any questions, please reach out via:
- [GitHub](https://www.github.com/${data.username})
- [Email](mailto:${data.email})`;
}

module.exports = generateMarkdown;
