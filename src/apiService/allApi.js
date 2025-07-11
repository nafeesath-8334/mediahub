import { baseUrl } from "./baseurl"
import { commonApi } from "./commonApi"



export const register = async (body) => {
    return await commonApi("POST", `${baseUrl}register`, body)
}
export const login = async (body) => {
    return await commonApi("POST", `${baseUrl}login`, body)
}
export const addFolder = async (data) => {
    return await commonApi("POST", `${baseUrl}addFolder`, data,"")
}
export const getFolder = async (userId) => {
    console.log("USERID",userId);
    
    return await commonApi("GET", `${baseUrl}getFolder/${userId}`,"")
}
 export const addBokmrks = async (userId,data) => {

console.log("Sending addbookmark request with:", { userId, folderId: data.folderId });

  return await commonApi("POST", `${baseUrl}addBokmrks/${userId}`,data,"");
};
export const getBokmrks = async (userId) => {
    console.log("USERID",userId);
    
    return await commonApi("GET", `${baseUrl}getBokmrks/${userId}`,"")
}
export const getUser = async (userId) => {
    console.log("USERID",userId);
    
    return await commonApi("GET", `${baseUrl}getUser/${userId}`, "")
}
export const editUserDetails = async (userId, userData, headers) => {
    console.log(userData)
    console.log(userId)
    return await commonApi("PUT", `${baseUrl}editUserDetails/${userId}`, userData, headers);
}
export const editFolder = async (body) => {
    return await commonApi("POST", `${baseUrl}editFolder`, body)
}

export const getforgotpswd = async (data) => {

    console.log(data)
    return await commonApi("POST", `${baseUrl}forgotPassword/`, data);
}
export const resetPassword = async (token, data) => {
    return await commonApi("POST", `${baseUrl}resetPassword/${token}`, data);
}
export const deleteFolder= async (body) => {
    return await commonApi("DELETE", `${baseUrl}deleteFolder`,body);
};