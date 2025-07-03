import { baseUrl } from "./baseurl"
import { commonApi } from "./commonApi"



export const register = async (body) => {
    return await commonApi("POST", `${baseUrl}register`, body)
}
export const login = async (body) => {
    return await commonApi("POST", `${baseUrl}login`, body)
}

