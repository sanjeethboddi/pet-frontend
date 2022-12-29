import axios from 'axios';

const url = "https://2976-2601-441-4200-d9a0-10da-6d62-ae9a-4d95.ngrok.io";
const auth_service = url+"/auth";
export async function login(username, password) {
                try {
                    let res = await axios({
                        method: 'POST',
                        url: auth_service + '/login',
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
            url: auth_service+'/signup',
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
           url: url+'/graph/getFollowingList/'+uid,
       })
    
        return {data:res.data, status:res.status}
    }
    catch (err) {
       return {data:err.response.data, status:err.response.status};
    }
}


