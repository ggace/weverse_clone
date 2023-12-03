import React, { useState } from 'react';
import ReactDomServer from 'react-dom/server';

import Post from './../elements/Post.js'

function Arist(props) {
    

    fetch("http://192.168.35.218:81/Post/GetArtistPosts")
    .then(response => response.json())
    .then((data)=>{
        let posts = document.getElementById("posts");
        posts.innerHTML = ""
        for(let i = 0; i< data.length; i++){
            let post = <Post post_info={{'profileImg':data[i].user_profile_img,'profileName':data[i].user_nickname, 'date': data[i].date, 'postContent': data[i].content.replaceAll("<br/>", "\n"), "img_count": data[i].img_count, "first_img_source": data[i].first_img_source, "id":data[i].id}}></Post>
            posts.innerHTML += ReactDomServer.renderToString(post)
        }
        
        let post_elements = document.getElementsByClassName("post");

        for(let i = 0; i < post_elements.length; i++){
            post_elements[i].addEventListener("click", function(){
                window.location.replace("./detail?id=" + post_elements[i].classList[0])
            });
        }
        
        
    })
    .catch((err) => {
        console.log(err)
    })

    
    return(
        <section id="posts" style={{'display':'flex', 'justifyContent': 'center', 'flexDirection': 'column', 'marginTop':"135px"}}>
            fail to access server
        </section>
    ) 
    
    
}

export default Arist;