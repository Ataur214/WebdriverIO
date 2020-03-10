 To Run the Project:
===================================

To run these scripts follow below steps:

1. First Go to Scripts folder where wdio.conf.js is located.
2. Then if you are running first time these scripts,Then you have to install all modules first and make
    sure node_modules folder is there. If not follow below steps.

    a. Open GitBash and go to package.json folder in gitbash commandline.
    b. Type npm install and wait to be installed all modules.

3. Now in gitbash commandline tool, Make sure you are still in the scripts folder
4. To run this scripts, follow the below steps

    a. For Staging or Test envinronment, type below line in the gitbash Commandline.
        SERVER=test npm run test

    b. For Production, type below line in the gitbash Commandline.
        SERVER=prod npm run prod

5. Once Finished, To Check the result, Type in the commandline tool

    a. npm run result

6. Once test is done. Make sure to close the driver from tasklist. For that, You can just click on
    "Close_Chrome_Driver.bat" which is located in the scripts folder.
	

*How to setup the project:
===================================
1. Create a directory
2. Go to created directory
3. Create a json file named package.json
4. Create node_modules folder
5. Generate configuration file
6. Create a specs folder
7. Create a basic js file to run the script

*Run Command to setup Project:
-----------------------------------
1. mkdir test
2. cd test
3. npm init -y
4. npm i --save-dev @wdio/cli
5. ./node_modules/.bin/wdio config



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
