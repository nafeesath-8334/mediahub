// import { "https://projectbackend-9w6i.onrender.com/" } from "./"https://projectbackend-9w6i.onrender.com/""
import { commonApi } from "./commonApi"



export const register = async (body) => {
    return await commonApi("POST", `${"https://projectbackend-9w6i.onrender.com/"}register`, body)
}
export const login = async (body) => {
    return await commonApi("POST", `${"https://projectbackend-9w6i.onrender.com/"}login`, body)
}
export const addFolder = async (data,headers) => {
    return await commonApi("POST", `${"https://projectbackend-9w6i.onrender.com/"}addFolder`, data,headers)
}
export const getFolder = async (userId,) => {
    console.log("USERID",userId);
    
    return await commonApi("GET", `${"https://projectbackend-9w6i.onrender.com/"}getFolder/${userId}`, "")
}
 export const addBokmrks = async (userId,data) => {

console.log("Sending addbookmark request with:", { userId, folderId: data.folderId });

  return await commonApi("POST", `${"https://projectbackend-9w6i.onrender.com/"}addBokmrks/${userId}`,data);
};
export const getBokmrks = async (userId) => {
    console.log("USERID",userId);
    
    return await commonApi("GET", `${"https://projectbackend-9w6i.onrender.com/"}getBokmrks/${userId}`, "")
}
export const getUser = async (userId) => {
    console.log("USERID",userId);
    
    return await commonApi("GET", `${"https://projectbackend-9w6i.onrender.com/"}getUser/${userId}`, "")
}
export const editUser = async (userId, userData, headers) => {
    console.log(userData)
    console.log(userId)
    return await commonApi("PUT", `${"https://projectbackend-9w6i.onrender.com/"}editUser/${userId}`, userData, headers);
}
export const editFolder = async (body) => {
    return await commonApi("POST", `${"https://projectbackend-9w6i.onrender.com/"}editFolder`, body)
}

export const getforgotpswd = async (data) => {

    console.log(data)
    return await commonApi("POST", `${"https://projectbackend-9w6i.onrender.com/"}forgotPassword/`, data);
}
export const resetPassword = async (token, data) => {
    return await commonApi("POST", `${"https://projectbackend-9w6i.onrender.com/"}resetPassword/${token}`, data);
}
export const deleteFolder= async (body) => {
    return await commonApi("DELETE", `${"https://projectbackend-9w6i.onrender.com/"}deleteFolder`,body);
};
export const editBokmark = async (bookmarkId, bookmarkData, headers) => {
  return await commonApi("PUT", `${"https://projectbackend-9w6i.onrender.com/"}editBokmrk/${bookmarkId}`, bookmarkData, headers);
}

export const deleteBokmrk = async (body) => {
  return await commonApi("DELETE", `${"https://projectbackend-9w6i.onrender.com/"}deleteBokmrk`,body);
};


