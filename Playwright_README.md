# PlaywrightFramework - Setup

<br>

### Markdown Installer

Before we start installing all the dependacies for Playwright, i've added in this section for installing Markdown. The layout of Markdown makes it easier for the "readme" to be followed and understood

##### Installing the Markdown extenstion.

- Searrch and download the markdown installer from the extenstions view.
  <img src="Readme_Imagaes/Markkdown Notes.png" alt="Sample Image" width="400" height="300">

<br>

##### Creating a new Markdown document

- Under your project, create a new file and save it as a .md format

<br>

##### Onpen the Markdown Preview tab

- On your keyboard, press keys Ctrl+Shift+V
- You can now click on the markdown preview tab and movwe it in to a side by side view with the markdown editor

  Markdown Preview Enhanced

<br>

---

<br>

2. We use Visual Studio Code as our code editor. Download the correct version for your machine here: https://code.visualstudio.com/download

Additional extensions that should be installed:
Playwright Test for VSCode
_ Run Playwright Test tests in Visual Studio Code
SQLRools
_ Connecting users to many of the most commonly used databases
Prettier - Code formatter
_ Code formatter using prettier
ESLint
_ Integrates ESLint JavaScript into VS Code

Next, under File > Preferences > Settings:
_ Set Default Formatter to Prettier – Code formatter
_ Enable Format On Save

3. Install dependencies in VS code

   - in VS code open a terminal and run:

     - npm install

   - To be able to run the code across different environments run:

     - npm i dotenv --save-dev
     - npm i cross-env --save-dev

   - Next, add .env.uat and .env.preprod files to the root directory and populate them with the data held in the relevant file in LastPass under the Playwright-QA directory.
