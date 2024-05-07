import commonAPI from "./commonAPI";
import SERVER_URL from "./server_url";

// adding videos
export const addVideoAPI = async (video)=>{
    return await commonAPI("POST",`${SERVER_URL}/allvVideos`,video)
}

// viewing videos
export const getVideoAPI = async ()=>{
    return await commonAPI("GET",`${SERVER_URL}/allvVideos`,"")
}

// removing video
export const removeVideoAPI = async (videoId)=>{
    return await commonAPI("DELETE",`${SERVER_URL}/allvVideos/${videoId}`,{})
}

// saving History
export const saveHistoryAPI = async (video)=>{
    return await commonAPI("POST",`${SERVER_URL}/history`,video)
}

// getting history
export const getVideoHistoryAPI = async ()=>{
    return await commonAPI("GET",`${SERVER_URL}/history`,"")
}

// remove history called by history component
export const removeVideoHistoryAPI = async (videoId)=>{
    return await commonAPI("DELETE",`${SERVER_URL}/history/${videoId}`,{})
}

// add category called by category component
export const addCategoryAPI = async (categoryDetails)=>{
    return await commonAPI("POST",`${SERVER_URL}/category`,categoryDetails)
}

// getting category called by category component
export const getCategoryAPI = async ()=>{
    return await commonAPI("GET",`${SERVER_URL}/category`,"")
}

// removing category called by category component
export const removeCategoryAPI = async (categoryId)=>{
    return await commonAPI("DELETE",`${SERVER_URL}/category/${categoryId}`,{})
}

// getting video from category after dragging
export const getAVideoAPI = async (videoId)=>{
    return await commonAPI("GET",`${SERVER_URL}/allvVideos/${videoId}`,"")
}

// update category called by category component
export const updateCategoryAPI=async(categoryId,categoryDetails)=>{
    return await commonAPI("PUT",`${SERVER_URL}/category/${categoryId}`,categoryDetails)
}

// getting a category called by category component
export const getSingleCategoryAPI = async (categoryId)=>{
    return await commonAPI("GET",`${SERVER_URL}/category/${categoryId}`,"")
}