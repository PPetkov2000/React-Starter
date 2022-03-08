module.exports = `import api from "../utils/api-instance"
import {
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
  USER_REGISTER_FAIL,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAIL,
  USER_LOGOUT,
  USER_LIST_REQUEST,
  USER_LIST_SUCCESS,
  USER_LIST_FAIL,
  USER_LIST_RESET,
  USER_DETAILS_REQUEST,
  USER_DETAILS_SUCCESS,
  USER_DETAILS_FAIL,
  USER_DETAILS_RESET,
  USER_UPDATE_REQUEST,
  USER_UPDATE_SUCCESS,
  USER_UPDATE_FAIL,
  USER_DELETE_REQUEST,
  USER_DELETE_SUCCESS,
  USER_DELETE_FAIL,
  USER_UPDATE_PROFILE_REQUEST,
  USER_UPDATE_PROFILE_SUCCESS,
  USER_UPDATE_PROFILE_FAIL,
} from "../constants/userConstants"
import actionsErrorHandler from "../utils/actionsErrorHandler"

export const register = (username, email, password, confirmPassword) => async (dispatch) => {
    try {
      dispatch({ type: USER_REGISTER_REQUEST })
      const { data } = await api.post("/api/users/register", { username, email, password, confirmPassword })
      dispatch({ type: USER_REGISTER_SUCCESS, payload: data })
      dispatch({ type: USER_LOGIN_SUCCESS, payload: data })
      localStorage.setItem("userInfo", JSON.stringify(data))
    } catch (error) {
      dispatch({ type: USER_REGISTER_FAIL, payload: actionsErrorHandler(error) })
    }
  }

export const login = (email, password) => async (dispatch) => {
  try {
    dispatch({ type: USER_LOGIN_REQUEST })
    const { data } = await api.post("/api/users/login", { email, password })
    dispatch({ type: USER_LOGIN_SUCCESS, payload: data })
    localStorage.setItem("userInfo", JSON.stringify(data))
  } catch (error) {
    dispatch({ type: USER_LOGIN_FAIL, payload: actionsErrorHandler(error) })
  }
}

export const logout = () => (dispatch) => {
  localStorage.removeItem("userInfo")
  dispatch({ type: USER_LOGOUT })
  dispatch({ type: USER_DETAILS_RESET })
  dispatch({ type: USER_LIST_RESET })
  document.location.href = "/login"
}

export const listUsers = (pageNumber = "") => async (dispatch) => {
    try {
      dispatch({ type: USER_LIST_REQUEST })
      const { data } = await api.get(\`/api/users?pageNumber=\${pageNumber}\`)
      dispatch({ type: USER_LIST_SUCCESS, payload: data })
    } catch (error) {
      dispatch({ type: USER_LIST_FAIL, payload: actionsErrorHandler(error) })
    }
  }

export const getUserDetails = (userId) => async (dispatch) => {
  try {
    dispatch({ type: USER_DETAILS_REQUEST })
    const { data } = await api.get(\`/api/users/\${userId}\`)
    dispatch({ type: USER_DETAILS_SUCCESS, payload: data })
  } catch (error) {
    dispatch({ type: USER_DETAILS_FAIL, payload: actionsErrorHandler(error) })
  }
}

export const updateUser = (user) => async (dispatch) => {
  try {
    dispatch({ type: USER_UPDATE_REQUEST })
    const { data } = await api.put(\`/api/users/\${user._id}\`, user)
    dispatch({ type: USER_UPDATE_SUCCESS })
    dispatch({ type: USER_DETAILS_SUCCESS, payload: data })
    dispatch({ type: USER_DETAILS_RESET })
  } catch (error) {
    dispatch({ type: USER_UPDATE_FAIL, payload: actionsErrorHandler(error) })
  }
}

export const deleteUser = (userId) => async (dispatch) => {
  try {
    dispatch({ type: USER_DELETE_REQUEST })
    await api.delete(\`/api/users/\${userId}\`)
    dispatch({ type: USER_DELETE_SUCCESS })
  } catch (error) {
    dispatch({ type: USER_DELETE_FAIL, payload: actionsErrorHandler(error) })
  }
}

export const updateUserProfile = (user) => async (dispatch) => {
  try {
    dispatch({ type: USER_UPDATE_PROFILE_REQUEST })
    const { data } = await api.put(\`/api/users/profile\`, user)
    dispatch({ type: USER_UPDATE_PROFILE_SUCCESS, payload: data })
    dispatch({ type: USER_LOGIN_SUCCESS, payload: data })
    localStorage.setItem("userInfo", JSON.stringify(data))
  } catch (error) {
    dispatch({ type: USER_UPDATE_PROFILE_FAIL, payload: actionsErrorHandler(error) })
  }
}
`