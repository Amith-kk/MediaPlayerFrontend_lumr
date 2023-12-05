import { commonAPI } from "./commonAPI"
import { serverURL } from "./serviceURL"




//upload video

export const uploadVideo = async(reqBody)=>{ 
    //return the response to Add.jsx component
    return await commonAPI('POST',`${serverURL}/video`,reqBody)
}

//get all uploaded videos

export const getAllVideos = async()=>{
    //return the response to View.jsx component
    return await commonAPI('GET',`${serverURL}/video`,"")
}

//to delete a video

export const deleteAVideo = async(id)=>{
    return await commonAPI('DELETE',`${serverURL}/video/${id}`,{})
}

//api to add history

export const addToHistory = async(videoDetails)=>{ 
    return await commonAPI('POST',`${serverURL}/history`,videoDetails)
}

//API to get history from json-server

export const getAllHistory = async()=>{
    return await commonAPI('GET',`${serverURL}/history`,'')
}

//api call to delete history
export const deleteAVideoHistory = async(id)=>{
    return await commonAPI('DELETE',`${serverURL}/history/${id}`,{})
}

//api to add category to json-server
export const addAllCategory = async(body)=>{ 
    return await commonAPI('POST',`${serverURL}/category`,body)
}

// api to get all categories from json-server
export const getAllCategories = async()=>{
    return await commonAPI('GET',`${serverURL}/category`,'')
}

// api to delete category from json-server
export const deletecategory = async(id)=>{
    return await commonAPI('DELETE',`${serverURL}/category/${id}`,{})
}

//api to get a particular video from localhost/video
export const getAVideo = async(id)=>{
    return await commonAPI('GET',`${serverURL}/video/${id}`,"")
}

//api to update the category with new videos
export const updateCategory = async(id,body)=>{
   return await commonAPI('PUT',`${serverURL}/category/${id}`,body)
}