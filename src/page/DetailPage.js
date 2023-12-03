import getParam from '../source/getParam.js'

import ReactDomServer from 'react-dom/server';
import { Navigate } from 'react-router-dom';

function DetailPage() {

    let id = getParam(window.location, "id")


    fetch("http://192.168.35.218:81/Post/GetPost?id=" + id)
    .then(res => res.json())
    .then(data => {
        let profileImg = document.getElementById("profile-img");
        let profileName = document.getElementById("profile-name");
        let postDate = document.getElementById("post-date");
        let postContent = document.getElementById("post-content");
        let postImgs = document.getElementById("post-imgs");

        profileImg.src = data.user_profile_img;
        profileName.innerText = data.user_nickname;
        postDate.innerText = data.date;
        postContent.innerText = data.content.replaceAll("<br/>", "\n");

        for(let i = 0; i < data.imgs_source.length; i++){
            let img = <img src={data.imgs_source[i]} style={{"width": "100%", "borderRadius": "20px"}}></img>
            postImgs.innerHTML += ReactDomServer.renderToString(img);
        }
    })
    .catch((err)=> {
        console.log(err);
    })

    return (<div id="page">
        <div id="header" style={{"padding": "30px", "backgroundColor": "white", "width": "calc(100% - 60px)"}}>
            <div  id="header-left">
                <div className="header-element" onClick={()=>window.location.replace("./")}>&lt;</div>
                <div className="header-element">포스트</div>
            </div>
            
            <div  id="header-right">
                <div className="header-element" id="share">
                    <img src="https://w7.pngwing.com/pngs/239/213/png-transparent-share-icon-computer-icons-symbol-sharing-font-awesome-shares-miscellaneous-angle-text-thumbnail.png" alt="" />
                </div>
                
                <div className="header-element" id="plus">
                    <img src="https://cdn-icons-png.flaticon.com/512/7066/7066144.png" alt="" />
                </div>
            </div>
        </div>

        <section id="post" style={{"marginTop": "88px"}}>
            <div style={{'display':'flex', 'alignItems': 'center'}}>
                <img id="profile-img" alt="" />
                <div>
                    <p id="profile-name"></p>
                    <p id="post-date"></p>
                </div>
            </div>
            <div>
                <p id="post-content"></p>
            </div>

            <div id="post-imgs" style={{"width": "100%"}}></div>
            
            
        </section>

        
    </div>)
}

export default DetailPage