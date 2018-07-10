# Unity3D-React-Boilerplate
Boilerplate for Unity3D WebGL builds (on WebAssembly) using basic Create React App

## What I wanna do here
Prepare an easy to use boilerplate for Unity WebGL builds in react. Which also shows you step by step how to do it on your own.
 - [x] Prepare basic webproject: Running Create React App
 - [ ] Make basic unity WebGL build
 - [ ] Implement crucial repo for this project: [react-unity-webgl](https://github.com/jeffreylanters/react-unity-webgl)
 - [ ] Introducing basic communication between React and Unity build
 - [ ] Hosting on Heroku

## How to recreate
#### 1. Initial project setup
:milky_way: Follow this repo: [Heroku Buildpack for create-react-app](https://github.com/mars/create-react-app-buildpack)
 With just a few easy steps  you end with a static, frontend-only web site hosted on Heroku.
 Easygoing heroku buildpack, look through it's readme, interesting stuff.

Simple site updating with commiting and pushing changes to heroku remote(?):

    $ git push heroku master
Opening the website:

    $ heroku open


Your `package.json` should look something like this (no babel, no webpack :see_no_evil:):

    {
      "name": "unity3d-react-boilerplate",
      "version": "0.1.0",
      "private": true,
      "dependencies": {
        "react": "^16.4.1",
        "react-dom": "^16.4.1",
        "react-scripts": "1.1.4"
      },
      "scripts": {
        "start": "react-scripts start",
        "build": "react-scripts build",
        "test": "react-scripts test --env=jsdom",
        "eject": "react-scripts eject"
      }
    }

#### 2. Build Unity project for WebGL

 Make sure you set your project build to something as follows
 Pay special attention to:
 - Setting build platform for WebGL
 - () WebGL Memory Size
 - (todo, write more) Compression Format
 - (same?) WebAssembly

![nay who needs image descriptions](https://lh3.googleusercontent.com/pGRf6tiQlR2MT5rdERBieRW8vbRqd8d_HDEuoHyIMY7Y6EhnmedZJlnFEfnrdqpIh2JgIrFn61Fu "asd")


> Written with [StackEdit](https://stackedit.io/).
