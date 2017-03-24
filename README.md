# aurelia-in-action
Samples progression steps to learn Aurelia

To be able to use this tutorial you need to have an installed Nodejs ecosystem

For each step don't forget to execute an 'npm install' at the root level of the webapplication (where the index.html is located)

## Step 1 - Initialisation

It's a project created from the Aurelia CLI 

type:
 - npm install
 - run au run --watch
 - open a browser and navigate to http://localhost:9000/

*N.B: the base config is here enhanced with a support for wallaby*    
 - npm install wallaby-webpack --save-dev
 - npm install wallaby --save-dev
 - npm install electron --save-dev
    
## Step 2 - Create basic pages with routing and security

create new pages/module
  home
  registration
  login
  
  First create and test the router with basic navigation
  Add Security Level on home route  
  Discus of the missing test the difficulty to write it first 
  In unit test we just test the config we never test that we redirect to the expected existing module / page
  It's more a regressions test the value is not maximum. 
  
Step 3
   Integration with Materializecss
   
   We need to build and amd lib from  a plain old js lib
   - npm install materialize-css --save
   - Added two files in step3/aurelia_project/tasks
      material-css-to-amd.js
      materialize-css.js
      
   - type: ./node_modules/.bin/r.js -o aurelia_project/tasks/material-css-to-amd.js

   - modify aurelia_project/aurelia.json to add the materialize-css
   - declare the lib in src/resources/index.js => 'materialize-css/css/materialize.css'
   - add font processing => aurelia_project/tasks/build.js

Step 4
    - type: ./node_modules/.bin/r.js -o aurelia_project/tasks/material-css-to-amd.js
      
    Add registration Form with binding

Step 5
    - type: ./node_modules/.bin/r.js -o aurelia_project/tasks/material-css-to-amd.js
    
    Add validation  
    npm install --save aurelia-validation
    {
        "name": "aurelia-validation",
        "path": "../node_modules/aurelia-validation/dist/amd",
        "main": "aurelia-validation"
    }
    
    add .plugin('aurelia-validation') in main.js
    
    add password validation library:  
    npm install zxcvbn --save
    
    add in aurelia.json
    {
        "name": "zxcvbn",
        "path": "../node_modules/zxcvbn/dist",
        "main": "zxcvbn"
    }
    
    
Step 6
- type: ./node_modules/.bin/r.js -o aurelia_project/tasks/material-css-to-amd.js

    Create custom Element
    
Step 7

- type: ./node_modules/.bin/r.js -o aurelia_project/tasks/material-css-to-amd.js

    I18n

npm install aurelia-i18n --save
npm install i18next i18next-xhr-backend --save

 aurelia_project/aurelia.json:
 {
   "name": "i18next",
   "path": "../node_modules/i18next/dist/umd",
   "main": "i18next"
 },
 {
   "name": "aurelia-i18n",
   "path": "../node_modules/aurelia-i18n/dist/amd",
   "main": "aurelia-i18n"
 },
 {
   "name": "i18next-xhr-backend",
   "path": "../node_modules/i18next-xhr-backend/dist/umd",
   "main": "i18nextXHRBackend"
 }
    
    
Step 8
    Event Aggregator / View Port    
    
Step 8
    Functional Testing
    
    
    

Add better testing option => Testatoo (Selenium) to focus on functional test => Write first approach
With the home show the View Ports usage