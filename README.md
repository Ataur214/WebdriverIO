How to set up the project
===================================
1. Create a directory
2. Go to created directory
3. Create a json file named package.json
4. Create node_modules folder
5. Generate configuration file
6. Create a specs folder
7. Create a basic js file to run the script

Run Command:
---------------
mkdir test
cd test
npm init -y
npm i --save-dev @wdio/cli
./node_modules/.bin/wdio config



How to add Allure Report
=====================================
1. Add dependies on package.json  "@wdio/allure-reporter": "^5.0.0"
2. Add change in wdio.conf.js file on reporters :  [['allure', {
        outputDir: 'allure-results',
        disableWebdriverStepsReporting: true,
        disableWebdriverScreenshotsReporting: true,
    }]],

3. Add on scripts : "result":"allure generate --clean && allure open"
4. Then produce result : npm run result
