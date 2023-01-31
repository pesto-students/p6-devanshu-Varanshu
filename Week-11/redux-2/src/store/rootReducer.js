import { createStore } from 'redux'

const initState = {
    steps: 0
}

const rootReducer = (state = initState, action) => {
    console.log(action.type);
    switch (action.type) {
        case "ADD":
            return {
                steps: ++state.steps
            }
            break;
        case "RESET":
        default:
            return {
                steps: 0
            }
    }
}

export const store = createStore(rootReducer)