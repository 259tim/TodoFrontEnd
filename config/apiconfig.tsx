import Constants from "expo-constants";

const { manifest } = Constants;

// This is done because the API is currently hosted locally. This grabs the IP from the expo constants.
// I tried connecting to the IP directly, doing various other things, but only this works.

const api = `http://${manifest.debuggerHost.split(':').shift()}:5000`;

export default api;