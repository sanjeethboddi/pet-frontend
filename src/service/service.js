import axios from 'axios';

export const url = "https://sanjeeth.me";

export async function login(username, password) {
                try {
                    let res = await axios({
                        method: 'POST',
                        url: url + '/auth/login',
                        data: {
                            username: username,
                            password: password
                            },
                        headers:{
                                'Content-Type': 'application/x-www-form-urlencoded'
                            },}
                            )
                 
                     return {data:res.data, status:res.status}
                 }
                 catch (err) {
                    return {data:err.response.data, status:err.response.status};
                 }
}

export async function register(username, password) {
    try {
        let res = await axios({
            method: 'POST',
            url: url + '/auth/signup',
            data: {
                username: username,
                password: password
                }})
     
         return {data:{}, status:res.status}
     }
     catch (err) {
        return {data:err.response.data, status:err.response.status};
     }
}

export async function createProfile(data) {
     const token = window.localStorage.getItem('token')
    try {
        let res = await axios({
            method: 'POST',
            url: url+'/profile/'+token,
            data, 
        })
     
         return {data:{}, status:res.status}
     }
     catch (err) {
        return {data:err.response.data, status:err.response.status};
     }
}

export async function updateProfile(data) {
    const token = window.localStorage.getItem('token')
    const uid = window.localStorage.getItem('uid')
   try {
       let res = await axios({
           method: 'PUT',
           url: url+'/profile/'+ uid +'/'+token,
           data, 
       })
    
        return {data:{}, status:res.status}
    }
    catch (err) {
       return {data:err.response.data, status:err.response.status};
    }
}

export async function createPost(data) {
    const token = window.localStorage.getItem('token')
   try {
       let res = await axios({
           method: 'POST',
           url: url+'/post/addPost/'+token +'?title=' + data.title,
           headers: {'Content-Type':'multipart/form-data'},
           data: { file: data.image }, 
       })
    
        return {data:{}, status:res.status}
    }
    catch (err) {
       return {data:err.response.data, status:err.response.status};
    }
}

export async function getProfile(uid) {
    const token = window.localStorage.getItem('token')
   try {
       let res = await axios({
           method: 'GET',
           url: url+'/profile/'+uid,
       })
    
        return {data:res.data, status:res.status}
    }
    catch (err) {
       return {data:err.response.data, status:err.response.status};
    }
}

export async function followUser(friendId) {
    const token = window.localStorage.getItem('token') 
    const uid = window.localStorage.getItem('uid')
   try {
       let res = await axios({
           method: 'PUT',
           url: url+'/graph/followUser/'+token,
           data: {
            uid: uid,
            uid2: friendId
           }, 
       })
    
        return {data:res.data, status:res.status}
    }
    catch (err) {
       return {data:err.response.data, status:err.response.status};
    }
}
export async function unfollowUser(friendId) {
    const token = window.localStorage.getItem('token') 
    const uid = window.localStorage.getItem('uid')
   try {
       let res = await axios({
           method: 'PUT',
           url: url+'/graph/unfollowUser/'+token,
           data: {
            uid: uid,
            uid2: friendId
           }, 
       })
    
        return {data:res.data, status:res.status}
    }
    catch (err) {
       return {data:err.response.data, status:err.response.status};
    }
}

export async function getFollowingList(){
    const uid = window.localStorage.getItem('uid')
   try {
       let res = await axios({
           method: 'GET',
           url: url+'/graph/getFollowingList/'+uid,
       })
    
        return {data:res.data, status:res.status}
    }
    catch (err) {
       return {data:err.response.data, status:err.response.status};
    }
}

export async function getFollowersList(){
    const uid = window.localStorage.getItem('uid')
   try {
       let res = await axios({
           method: 'GET',
           url: url+'/graph/getFollowersList/'+uid,
       })
    
        return {data:res.data, status:res.status}
    }
    catch (err) {
       return {data:err.response.data, status:err.response.status};
    }
}

export async function getUserFeed(){
    const token = window.localStorage.getItem('token') 
    const uid = window.localStorage.getItem('uid')
   try {
       let res = await axios({
           method: 'GET',
           url: url+'/feed/getFeedForUser/'+uid +'/' +token,
       })
        return {data:res.data, status:res.status}
    }
    catch (err) {
       return {data:err.response.data, status:err.response.status};
    }
}

export async function getPostData(data){
   try {
       let res = await axios({
           method: 'POST',
           url: url+'/post/getPosts',
           data,
       })
        return {data:res.data, status:res.status}
    }
    catch (err) {
       return {data:err.response.data, status:err.response.status};
    }
}

export async function getPostImage(postID){
    try {
        let res = await axios({
            method: 'GET',
            url: url+'/post/getPostImage?postID='+ postID,
        })
         return {data:res.data, status:res.status}
     }
     catch (err) {
        return {data:err.response.data, status:err.response.status};
     }
 }


 export async function verifyUserToken(token){
    try {
        let res = await axios({
            method: 'POST',
            url: url+'/auth/verify/'+token,
        })
         return {data:res.data, status:res.status}
     }
     catch (err) {
        return {data:err.response.data, status:err.response.status};
     }
 }

 export async function checkFollow(userProfileID){
    const uid = window.localStorage.getItem('uid')
    try {
        let res = await axios({
            method: 'GET',
            url: url+'/graph/checkFollow/'+uid+ '/'+userProfileID,
        })
         return {data:res.data, status:res.status}
     }
     catch (err) {
        return {data:err.response.data, status:err.response.status};
     }
 }



