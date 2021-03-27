# quiz-app-deploy (Full-Stack Quiz App)

This repo is for deploying the full-stack quiz-app 

- The hosted app ( https://saneeldaniel.github.io/quiz-app-deploy/ ) 

- The client app is built with React.JS, server with Node/Express.js, database - MongoDB (Atlas) 
  ( github repo: https://github.com/SaneelDaniel/quiz-app-client )

- The back-end REST-API is built with node.js and express.js, it has end points to fetch the QuizdData from a Mongoo Database 
  ( github repo: https://github.com/SaneelDaniel/quiz-app-back-end )
  


# Notes / Description

## Description
    -  The app is a basic full-stack web quiz-app, with multiple choice questions, scores, and answers. 

## Architecture

 - The app uses MVC architecture: 
                  
    - Model is hosted in a cloud Mongo Database cluster on Atlas (AWS server)
    - QuizSchema = ({ questionID: { type: Number, }, questionString: { type: String, }, choices: { type: Array, }, rightChoice: { type: String, }, });
    - View is built using React.JS (React Icons, & react-loader-spinner additional packages), and is hosted using gh-pages 
    - Controller is a REST End point that handles the client data requests, and manages the data flow

## Solution Focus/Trade-offs

- The solution foocuses on a having an efficient full-stack process flow: 

  - On the front-end it manages state and app data using React-Redux & Context Providers to ensure efficient state/data transmission
  - On the server, the app ensures security by managing the request types, and routing specific requests
  - The database selection was specific to NoSQL for the sake of simplicity of thee app, and the data it required.
 
- The Current model of the app is simple, yet efficient at solving the problem statement, and managing a single page application. But given more time, I would make it to manage multiple quizes, and user profiles, as well as history of attempts/user.
- Considering the time contraint, I have built the front-end model with simple/re-usable components, which can e tied together at any point to scale-up to the needs.
