
# Unity3D-React-Boilerplate
![enter image description here](https://lh3.googleusercontent.com/bCHwvLd87csFVIUVL_n6dJVh4eHB8yfNXfruyyQHyLcIpGto02edFrzR7xTH5B60964SyTIBilo "Example project picture")


👽✨🌊

- Example project / tutorial for hosting Unity3D WebGL build as a static webpage on Heroku (using create-react-app).
-  **Test [here](https://unity3d-react-boilerplate.herokuapp.com/).**

👽✨🌊

## How to recreate
1. [Initial project setup](#initial-project-setup)
2. [Build Unity project for WebGL](#build-unity-project-for-webgl)
3. [Integrate Unity build into your react webapp](#integrate-unity-build-into-your-react-webapp)
4. [Two-way communication](#dash-two-way-communication)

## 1. Initial project setup
:milky_way: Follow the *Quick Start* on this repo: [Heroku Buildpack for create-react-app](https://github.com/mars/create-react-app-buildpack#user-content-quick-start)
 With just a few easy steps  you end with a static, frontend-only web site hosted on Heroku.

To update the site by pushing changes to heroku remote:

    $ yarn build 
    $ git commit -m "wow :o"
    $ git push heroku master
To open it:

    `$ heroku open`

> Wait what?? And just like that I have hosted a webpage? :cake: :wine_glass:

Your `package.json` should look something like this (no babel, no webpack config :see_no_evil:):
```json
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
```
## 2. Build Unity project for WebGL
:ocean: [Unity documentation concerning WebGL development](https://docs.unity3d.com/Manual/webgl-gettingstarted.html)

:droplet: Your build settings should look something like on the picture below, please pay special attention to:
 - Setting build platform for WebGL
 - WebGL Memory Size
	 - Can be set to quite low value when using WebAssembly
 - Compression Format
	 - Safari doesn't support Brotli compression, it doesn't support fullscreen and curosor hiding neither. If you expect many Safari-only users to visit your Unity project on the web, then you need to carefully plan around some issues [eg. no WebGL 2.0, no Brotli compression](https://docs.unity3d.com/Manual/webgl-browsercompatibility.html).
 - WebAssembly 
	 - Just 'tick' this option for the [magic to happen](https://blogs.unity3d.com/2018/08/15/webassembly-is-here/).
	 - Since Unity 2018.1 its no longer considered 'experimental' :unicorn:

![nay who needs image descriptions](https://lh3.googleusercontent.com/pGRf6tiQlR2MT5rdERBieRW8vbRqd8d_HDEuoHyIMY7Y6EhnmedZJlnFEfnrdqpIh2JgIrFn61Fu "heeey<3")

- :mag_right: Once building is finished, you should be most interested with a directory containing those files:

![enter image description here](https://lh3.googleusercontent.com/8RPc5jCsz49qIKGjSb-6uhIqgycsVlguKvMGjzH7A9oLtbJVgtU99vhz09ZLy7xVNVuHL3bXIm5Y "cool stuff")

> *You could most certainly use a better build name though. "DefaultWebGL", really? :hear_no_evil:

## 3. Integrate Unity build into your react webapp

**a:cherry_blossom:.** Add [react-unity-webgl](https://github.com/jeffreylanters/react-unity-webgl) into your project, *it's just so cool.*

**b:tulip:.** Copy entire Unity build folder (mentioned above) into your `public` webapp folder.

**c:hibiscus:.** Follow [Quick Start](https://github.com/jeffreylanters/react-unity-webgl/wiki/Quick-Start-Guide) guide (it's really *quick*) and for 

The most important part is loading
```js
import React from "react";
import Unity, { UnityContent } from "react-unity-webgl";

export class App extends React.Component {
  constructor(props) {
    super(props);
    this.unityContent = new UnityContent(
      "MyGame/DefaultWebGL.json",
      "MyGame/UnityLoader.js"
    );
  }
  render() {
    return <Unity unityContent={this.unityContent} />;
  }
}
```
**And thats all there is!** With barely 5 lines of code your Unity build is imported and served in your React app. Isn't that cool? :o

For more info about UnityContent check out [Mr. Lanters' github wiki](https://github.com/jeffreylanters/react-unity-webgl/wiki/Unity-Content) (and don't forget to star his amazing repo :tada:).

**d:blossom:.**  After these easy steps you should be ready to test your Unity webapp by simply running `$ npm run start` command in your console. Uploading to Heroku is just as easy using 

> If you cloned my project you would have to use [yarn](https://github.com/yarnpkg/yarn) instead:  
> `$ yarn start`

:warning: If your Unity project runs only locally and doesn't load on heroku hosting service, check if your `.gitignore` doesn't mention `/build` directory (this may happen if you created your git repo with Unity .gitignore preset).

## 4. :dash: Two-way communication
Now to the fun stuff!
#### :blue_book: React to Unity communication
1. #### :seedling: **Calling** Unity method with no parameters
You can now evoke any public method in your Unity project by sending a message to `unityContent` specifying a GameObject holding a C# script with that method.
```javascript
this.unity.send(
   "FlyCube", // GameObject name
   "Randomize" // Public method name
);
```
2. #### :ear_of_rice: **Calling** Unity method with a single parameter
:warning: This may only be a (single!) number or a string

```javascript
this.props.unityContent.send(
   "PlayArea",
   "SpawnCube",
   10
);
```
:warning: You cannot directly use template literals when passing a string. Write it first to a variable, then pass it instead. 
 ```javascript
 let  mouseCoords  =  `${this.state.pageX}  ${this.state.pageY};
 
 if(this.state.isLoaded  ===  true) {
    this.unityContent.send(
       "TextDisplayer",
       "UpdateDoubleMousePosition",
       mouseCoords
    );
 };
 ```

3. #### :palm_tree: **Calling** :phone: a method with more than one parameter - possible workaround.

As mentioned above GameObject.SendMessage(), here as `this.unityContent.send(...)`,  may only pass as value one argument that can be either a number or a string.
 
One possible workaround is passing multiple values in a string and then parsing it inside Unity method 
> #### Though I wouldn't do that in a method 'ticked' many many times per second :hear_no_evil:

In above :warning: about template literals we passed two numeric coords inside `mouseCoords` string variable to a method `UpdateDoubleMousePosition` inside `TextDisplayer` GameObject. To interpret that string as two separate numbers in C#:
```c
public void UpdateDoubleMousePosition(string mouseCoords)
{
   string[] coords = mouseCoords.Split(' ');

   int[] coordsNumerical = new int[2];
   
   for(int i = 0; i < coords.Length; i++)
   {
      coordsNumerical[i] = Int32.Parse(coords[i]);
   }
   
   TextY.text = coords[0];
   TextX.text = coords[1];
}
```

#### :blue_book: Unity to React communication

pre. Creating .jslib plugin

4 steps for every single call
1. creating javscript event handler
2. adding a 'function frame' to jslib
3. importing the 'function frame' in a unity c# script
4. calling that function




> Written with [StackEdit](https://stackedit.io/).
