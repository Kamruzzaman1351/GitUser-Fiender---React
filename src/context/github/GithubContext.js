import { createContext, useReducer } from "react";
import githubReducer from "./GithubReducer";

const GithubContext = createContext();
const githubToken = process.env.REACT_APP_GITHUB_TOKEN;
const githubUrl = process.env.REACT_APP_GITHUB_URL;

export const GithubProvider = ({ children }) => {
    const initialState = {
        users: [],
        loading: false,
    };
    const [state, dispatch] = useReducer(githubReducer, initialState);
    // Fetch Github Users
    const getUsers = async(login) => {
        setLoading()
        const response = await fetch(`${githubUrl}/search/users?q=${login}`, {
            headers: {
                Authorization: `token ${githubToken}`
            }
        });
        const data = await response.json();
        dispatch({
            type: "GET_USERS",
            payload: data.items,
        })
    };
    const setLoading = () => {dispatch({type: "SET_LOADING"})};
    const clearUser = () => {dispatch({type:"CLEAR_USER"})}
    return <GithubContext.Provider value={{
        users: state.users,
        loading: state.loading,
        getUsers,
        clearUser,
    }}>
        { children }
    </GithubContext.Provider>
}

export default GithubContext