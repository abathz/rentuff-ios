# React Native Boilerplate
This repo is react native boilerplate and still **EXPERIMENTAL**

  * React
  * React-Native
  * Redux
  * ESLint using [Standard Javascript Style](https://standardjs.com/)

In order to run the application:

1. Install node modules

   npm: `$ npm install`

   yarn: `$ yarn install`

2. Change value from `app.json` and `/src/index.js`

   
   ```json
   // app.json
   // Change "YOUR_APP_NAME" with name of the app you will develop
   {
     "name": "YOUR_APP_NAME",
     "displayName": "YOUR_APP_NAME"
   }
   ```

   ```javascript
   // /src/index.js
   // Change "YOUR_APP_NAME" with name of the app you will develop
   
   AppRegistry.registerComponent('YOUR_APP_NAME', () => Apps)
   ```

3. Generate iOS and Android folder and native code
   
   ```
   $ npm run eject
   ```

4. Builds your app and starts it
   
   For run it in iOS(Simulator)
   ```
   $ npm run ios
   ```
   for run it in Android(Emulator/Connected device)
   ```
   $ npm run android
   ```

This repo is still testing by me and experimental, so if you want to colaborate with this repo, you can fork this repo and i will really appreciate to make this repo useful for everyone.

Cheers up! :)
