import { createContext, useReducer } from "react";
import AlertReducer from "./AlertReducer";

const AlertContext = createContext();


export const AlertProvider = ({children}) => {
    const initial = null;
    const [state, dispatch] = useReducer(AlertReducer, initial);
    const showAlert = (msg, type) => {
        dispatch({
            type: "SHOW_ALERT",
            payload: {msg, type}
        });
        setTimeout(() => {dispatch({type: "HIDE_ALERT"})},3000)
    }
    return <AlertContext.Provider value={{
        alert:state,
        showAlert,
    }}>
        {children}
    </AlertContext.Provider>
}

export default AlertContext