import { createContext, useReducer } from "react";
import githubReducer from "./GithubReducer";
import axios from "axios";
const GithubContext = createContext();
const githubToken = process.env.REACT_APP_GITHUB_TOKEN;
const githubUrl = process.env.REACT_APP_GITHUB_URL;
const github = axios.create({
    baseURL: githubUrl,
    headers: { Authorization: `token ${githubToken}`}
})
export const GithubProvider = ({ children }) => {
    const initialState = {
        users: [],
        loading: false,
        user: {},
        repos: [],
    };
    const [state, dispatch] = useReducer(githubReducer, initialState);
    // Fetch Github Users
    const getUsers = async(login) => {
        setLoading();
        const users = await github(`/search/users?q=${login}`);
        dispatch({
            type: "GET_USERS",
            payload: users.data.items,
        })
    };
    // Featch User and Repos
    const getUserAndRepos = async(login) => {
        setLoading();
        try {
            const [user, userRepos] = await Promise.all([
                github(`/users/${login}`),
                github(`/users/${login}/repos`)
            ]);
            dispatch({
                type: "GET_USER_AND_REPOS",
                payload: {user: user.data, repos: userRepos.data}
            })            
        } catch (error) {
            window.location = "/notfound";
        }
        
    }
    const setLoading = () => {dispatch({type: "SET_LOADING"})};
    const clearUser = () => {dispatch({type:"CLEAR_USER"})}

    return <GithubContext.Provider value={{
        ...state,
        getUsers,
        clearUser,
        getUserAndRepos,
    }}>
        { children }
    </GithubContext.Provider>
}

export default GithubContext