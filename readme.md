# Quick Scan 


This project contains the front-end React Native application for the Quick Scan project. 
Quick Scan is an application designed to help Capgemini conduct inspections of stores. This application allows for 
conducting a survey that then calculates scores on certain attributes like reachability, customer service, etc.
These scores are then used to generate a document that is readable for the human eye.

This entire tutorial was written with Ubuntu 20.04 as operating system. This means terminal commands and the like assume
that Linux is being used.


# Technologies used

- The project is built on React-Native, using Expo as platform. 

- The application was built in `TypeScript`, which is a Typed version of `JavaScript`. 
These types help with error handling and keeping the entire app running smooth.

- The application uses `Redux` to store data locally. Redux allows for a persistent storage that can store things like authentication
hashes, data that is compiled before sending it  to the API, local settings, etc.

- Navigation is done with `React Navigation`. This library allows for easy navigation between screens, and for
sending data back and forth between them. This means  the main .app file is a navigation overview.  

- There is a connection to a Flask Python back-end through an API, this allows for querying all relevant data and storing it.
This backend also does password verification. These actions are done by using `fetch`

- Most components were built by me, using real world examples. 

# Expo

Expo is a platform that allows you to develop react-native apps in a relatively easy fashion. It offers a complete CLI that 
lets you install packages in a compatible manner, and it is easy to run your app to test. 
To use Expo you have to have `npm` or `yarn` on your computer.  Please refer to their respective tutorials to install these.
Yarn is recommended because it is what Expo also uses.
After having one of these package managers installed to your device you need to install the `expo-cli`:
`npm install --global expo-cli` or `yarn global add expo-cli`.
After installing Expo you have the basics set up. This package manages everything for you, and if you need to install more packages in the future please use `expo install`. This uses `yarn`, but checks whether packages are compatible with Expo and your project.

## Running

By simply running `expo start` your application can be started. This will launch a web server that allows you to load the app  to your mobile device. When you run this command Expo will open a browser window  that displays your status. It also displays a QR code, IP address for the server, as well as some buttons that allow you to run in emulators or changes settings.

Expo offers their application [here.](https://play.google.com/store/apps/details?id=host.exp.exponent&hl=en&gl=US)
This application can use your IP or scan a QR code to then run your app. This system lets you avoid building the app to test.
It does not require anything other than a compatible Android phone. 

If you do not have a compatible Android phone you need to install Android Studio to run an Android emulator.
There is a tutorial by Google [here.](https://developer.android.com/studio/run/emulator)
Special things to keep in mind when using the emulator are:

- You do not have to create an Android studio project, only an emulator
- You can run the Expo app on the emulator by simply clicking 'run on Android emulator' on the aforementioned browser window. In my case I boot the emulator before clicking this button. 
- When clicking this button Expo will install their app onto the device, then run via the QR/IP method just as if you were to run on a real device.
- KVM is highly recommended. KVM is a hardware acceleration system that will make it much easier to run the emulator and will thus greatly improve performance. Please reference the Android Studio guide for your operating system and specific computer/laptop to learn how to configure it. Not every device is compatible with KVM and the emulator can be run without it in that scenario, it will just be much slower.


# Project structure

As mentioned earlier: The application is built in React-Native. It uses a structure that was modelled after tutorials for React Navigation as best as possible, but is sometimes messy with component separation and  things like that. This is my first React-Native project and things changed a lot as programming went on.

This is the basic structure:
- the `App.tsx` file is the heart of the app. Every screen is referenced here with  React Navigation, and it imports all these screens from their respective files.
- There is a `components` folder containing: 
 - Random components like the navigation bar, buttons, etc.
 - A component for every page in the application.
 - Functions that are used multiple times and were separated from these pages.
 - The `styles.tsx` file that contains all style elements that return regularly.

## Redux
Redux is integrated into the project but currently not used anymore. It is situated in the `/store/reducers/` folders. I highly recommend reading into Redux yourself because me repeating their huge documentation is a futile effort, but these are the basics:

Redux is a local storage that allows you to send variables to a stack and get them from this stack.  It works using things called Slices. These Slices add actions to the aforementioned stack of things that then do things like remove/add variables to storage, make changes to these stored variables, etc.. The only current Reducer is this:

```ts

import { createSlice } from '@reduxjs/toolkit'
import { rootState } from '../../store'

// Type for this slice: It has one variable: todoList, a list of strings.
interface todoState {
    todoList: string[]
}

// initial state for this slice: An empty list
const initialState: todoState = {
    todoList : []
}

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: { 
		// This slice has two actions: Save and remove, doing exactly what they say.
		// They take a current state and then do something with it, pushing  to and logging the new state.
		// In this case they take a list of strings, the todoList, and then push this to the stack in the Redux store.
        save: (state, action) => {
            state.todoList.push(action.payload)
            console.log(state.todoList)
        },
		// Same but remove from the store instead.
        remove: (state, action) => {
            state.todoList.splice(action.payload)
            console.log(state.todoList)
        }
    }
})

// these actions are then exported. If we want to save something to the Redux storage we can then:
// call the todoSlice.save(mycoolarrayofstrings) action with a certain object fitting the earlier types. 
export const { save, remove } = todoSlice.actions;

// This exports a select, allowing us to read from the state the item that this  slice has stored.
export const selectTodoList = (state: rootState) => state.todos.todoList;

//Finally we export the whole thing to call it in the root reducer.
export default todoSlice.reducer;
```

