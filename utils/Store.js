import { createContext, useReducer } from "react";

export const Store = createContext();
const initalState = {
    darkMode: false
}
function reducer(state, action) {
    switch (action.type) {
        case 'DARK_MODE_ON':
            return { ...state, darkMode: true};
        case 'DARK_MODE_OFF':
            return { ...state, darkMOde: false};
        default:
            return state;
    }
}

export function StoreProvider(props) {
    const [state, dispatch] = useReducer(reducer, initalState);
    const value = {state, dispatch};
    return <Store.Provider value={value}>{props.children}</Store.Provider>
}