# Markdown-Blog
Repo for Markdown blog made with node.js backend and mongoDB as DB, where user can add, edit, delete a markdown blog



Software Installation:

1. This web-app is running on node.js backend before prrocedding towards installing dependencies first configure node and npm on your system, [download](https://nodejs.org/en/download/) and for installation and configuration refer [npm documentation](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm).

2. Download the community server of the mongoDB data base from [here](https://www.mongodb.com/try/download/community) and set up the environment with the delp of [documentation](http://mongodb.github.io/node-mongodb-native/3.4/quick-start/quick-start/).




Setting up working enviornment:

1. To initiate nodejs run followig command
  npm init

2. To set up mongoDB environment open powershell and pass command "mongod" and it will start        


Installing dependencies with the help of npm:

1. Firstly have to install express for backend framework 
  "npm install express"
2. install mongoose which willl help us to store data in mongoDB
  "npm i mongoose"
3. install ejs template engine 
  "npm i ejs"
4.install method-oveeride so that we can make "Delete" "Put" requrst from the router folder 
  "npm i method-override"
5.install marked library so that we can evaluate the markdown taken as a input by the form 
   "npm i marked"
6.install slugify so that while making get req on an article instead of id in the URL
   "npm i slugify"
7.install dompurify and JSDOM to sanitize the markdown coming a an input so that any user can't add malicious code in the input
  "npm i jsdom dompurify"
  
  

  
now run command "node server.js"


If there is no problem then in terminal it will output the port no. on which application is running by default it is port no. 600
So to access the webpage check this [url](http://localhost:600/)

