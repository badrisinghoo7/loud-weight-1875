import axios from "axios";
import { FETCH_FAILURE, FETCH_RQUEST,LOGIN_SUCCESS, SIGNUP_SUCCESS } from "../actionTypes";
const api="https://64b65d04df0839c97e156cc4.mockapi.io/users";

export const login = (email,password) => (dispatch) => {
  return (
    dispatch({type:FETCH_RQUEST}),
    axios.get(`https://64b65d04df0839c97e156cc4.mockapi.io/users?email=${email}&password=${password}`)
    .then(res => res.data )
    .catch(err=> {
      dispatch({type:FETCH_FAILURE});
    })
  )
};


export const signup = (user) => (dispatch) => {
  return (
    dispatch({type:FETCH_RQUEST}),
    axios.post(`${api}`,user)
    .then(res => dispatch({type:SIGNUP_SUCCESS}))
    .catch(err=> dispatch({type:FETCH_FAILURE}))
  )
};
