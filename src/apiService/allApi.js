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
