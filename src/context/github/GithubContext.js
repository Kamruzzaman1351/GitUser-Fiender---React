import { createContext, useReducer } from "react";
import githubReducer from "./GithubReducer";

const GithubContext = createContext();
const githubToken = process.env.REACT_APP_GITHUB_TOKEN;
const githubUrl = process.env.REACT_APP_GITHUB_URL;

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
    // Featch User and Repos
    const getUserAndRepos = async(login) => {
        setLoading();
        const userResponse = await fetch(`${githubUrl}/users/${login}`, {
            headers:{
                Authorization: `token ${githubToken}`
            }
        });
        const reposResponse = await fetch(`${githubUrl}/users/${login}/repos`, {
            headers:{
                Authorization: `token ${githubToken}`
            }
        });
        if(userResponse.status === 404 || reposResponse.status === 404) {
            window.location = "/notfound";
        } else {
            const userDate = await userResponse.json();
            const reposDate = await reposResponse.json();
            dispatch({
                type: "GET_USER_AND_REPOS",
                payload: {userDate,reposDate}
            })

        }
    }
    const setLoading = () => {dispatch({type: "SET_LOADING"})};
    const clearUser = () => {dispatch({type:"CLEAR_USER"})}

    return <GithubContext.Provider value={{
        users: state.users,
        loading: state.loading,
        user: state.user,
        repos: state.repos,
        getUsers,
        clearUser,
        getUserAndRepos,
    }}>
        { children }
    </GithubContext.Provider>
}

export default GithubContext