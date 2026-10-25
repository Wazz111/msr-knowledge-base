# MSR Knowledge Base

![CI](https://github.com/Wazz111/msr-knowledge-base/actions/workflows/ci.yml/badge.svg)

## Project Overview

The MSR Knowledge Base is a simple web application developed for COIS 3060H – Software Processes at Trent University.

The purpose of this project is to help new PhD students and researchers learn about Mining Software Repositories (MSR), including research data sources, collection methods, analysis techniques, and publication venues.

## Website

**Live Website:** https://wazz111.github.io/msr-knowledge-base/

## Features

The website provides four navigation sections:

1. **Data Sources:** Information about GitHub, Stack Overflow, JIRA, App Stores, Travis CI/Jenkins, Mailing Lists, and npm Registry.
2. **Collection Methods:** A section for methods used to collect software repository data.
3. **Analysis Methods:** A section for techniques used to analyze research data.
4. **Publication Venues:** A section for software engineering conferences and journals.

Currently, the website includes working navigation and a completed Data Sources table. The other sections contain introductory content and will be expanded in future milestones.

## Technologies Used

- HTML5 – Website structure
- CSS3 – Styling and layout
- JavaScript – Interactive navigation
- GitHub – Version control and project management
- Node.js – Automated testing
- GitHub Actions – Continuous integration and deployment
- GitHub Pages – Website hosting

## Project Milestones

### Milestone 1: Page Structure & Navigation

**Status: Completed**

- Created the basic HTML structure.
- Added four navigation buttons.
- Implemented JavaScript tab switching.
- Applied CSS styling.
- Added Data Sources content.

### Milestone 2: Data Sources Content

**Status: Partially completed**

- Added all seven requested data sources.
- Included data types and descriptions.
- Future work includes improving the presentation and usability of the content.

### Milestone 3: Collection Methods Content

**Status: Planned**

- Add REST APIs and GraphQL.
- Add web scraping using Selenium and BeautifulSoup.
- Include database dumps and manual downloads.
- Describe the advantages and disadvantages of each method.

## Additional Future Work

- Complete the Analysis Methods section.
- Add publication conferences and journals.
- Improve responsive design and accessibility.
- Expand automated testing.

## Testing

Four automated tests were created to check:

1. The presence of the four navigation sections.
2. The seven required data sources.
3. The Data Sources table structure.
4. JavaScript tab-switching functionality.

Tests can be run using:

`node --test tests/test.js`

The tests are automatically executed by GitHub Actions whenever changes are pushed or pull requests are created.

## CI/CD Pipeline

The project uses GitHub Actions for continuous integration and deployment.

- **CI workflow:** `.github/workflows/ci.yml`
- **Deployment workflow:** `.github/workflows/deploy.yml`

The CI workflow executes the automated tests.

The deployment workflow publishes the website using GitHub Pages whenever changes are pushed to the main branch.

## Repository Structure

- `docs/requirements.md` – Requirements and user stories
- `src/index.html` – Main webpage
- `src/style.css` – Website styling
- `src/script.js` – Tab navigation
- `tests/test.js` – Automated tests
- `.github/workflows/ci.yml` – Continuous integration
- `.github/workflows/deploy.yml` – Automatic deployment
- `README.md` – Project documentation

## Running the Website Locally

1. Download or clone the repository.
2. Open the `src` folder.
3. Open `index.html` in a web browser.
4. Use the navigation tabs to explore the website.

## Conclusion

This project demonstrates software engineering practices including requirements analysis, project planning, version control, branching, pull requests, automated testing, continuous integration, deployment, and documentation.
