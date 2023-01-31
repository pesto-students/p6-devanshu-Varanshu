import { createStore } from "redux";

const flipReducer = (currentState = false, action) => {
    switch (action.type) {
        case "FLIP": {
            return { open: !currentState.open };
        }

        default:
            return currentState;
    }
};

export const store = createStore(flipReducer);
