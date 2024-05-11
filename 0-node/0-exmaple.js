import { configureStore } from '@reduxjs/toolkit';

/*
 * There is a single state object for the entire application 
 *  represented as a javascript object.
 */
const DEFAULT_STATE = {
    firstName: '',
    lastName: '',
    ageInDogYears: 0,
};

/*
 * The reducer function is a pure function that takes the 
 * current state and an action and returns a new state.
 */
const reducer = (state = DEFAULT_STATE, action) => {
    console.log("Action:", action);
    const newState = JSON.parse(JSON.stringify(state)); // Deep Copy to avoid mutating current state

    switch (action.type) {
        case 'SET_FIRST_NAME':
            newState.firstName = action.payload.firstName;
            break;
        case 'SET_LAST_NAME':
            newState.lastName = action.payload.lastName;
            break;
        case 'SET_AGE':
            newState.ageInDogYears = action.payload.age * 7;
            break;
    }

    return newState;
}

/*
 * The store holds the state and the reducer. It is the single 
 * source of truth for state in the application.
 */
const store = configureStore({ reducer });
store.subscribe(() => console.log("New State:", JSON.stringify(store.getState(), null, 2))); // Log store to console on change for debugginh
console.log("Initial State:", store.getState());

/*
 * State is immutable. The only way to change state is to dispatch
 * an action. Actions are plain javascript objects with a type and
 * a payload.
 */
// TODO - Dispatch Actions here
// store.dispatch({ 
//     type: "FOO/BAR", 
//     payload: {
//          bar: "baz" 
//     } 
// });

