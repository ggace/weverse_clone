import './Post.css'
import { Navigate } from 'react-router-dom';

function Post(props) {

    var imgs;
    
    if(props.post_info.img_count == 0){
        imgs = <div style={{"width": "100%"}}></div>
    }
    else if(props.post_info.img_count == 1){
        imgs = (<div style={{"width": "100%"}}>
            <img src={props.post_info.first_img_source} width="100%" alt="" />
        </div>)
    }
    else if(props.post_info.img_count > 1){
        imgs = (<div style={{"width": "100%", "display": "flex"}}>
            <img src={props.post_info.first_img_source} width="50%" alt="" />
            <div style={{"display":"flex","width": "50%", "backgroundColor": "#5f5f5f", color: "white", "alignItems":"center", "justifyContent": "center", "fontSize": "50px"}}>+</div>
        </div>)
    }

    return(
        <section id="post" className={props.post_info.id + " post"}>
            <div style={{'display':'flex', 'alignItems': 'center'}}>
                <img id="profile-img" src={props.post_info.profileImg} alt="" />
                <div>
                    <p id="profile-name">{props.post_info.profileName}</p>
                    <p id="post-date">{props.post_info.date}</p>
                </div>
            </div>
            <div>
                <p id="post-content">{props.post_info.postContent}</p>
            </div>

            {imgs}
            
            <div id="interaction" style={{'display': "flex"}}>
                <div id="post-like">🤍</div>
                <div id="post-reply">💬</div>
            </div>
            
            
        </section>
    )
}

export default Post;