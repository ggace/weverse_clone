
import Artist from '../views/Artist.js';
import Feed from '../views/Feed.js'



function setCurrentView(view){
    current_view = view
}


export default setCurrentView;
export var VIEWS = {
    FEED : 100001,
    ARTIST: 100002,
    MEDIA: 100003,
    LIVE: 100004,
};
export var current_view = VIEWS.FEED; 

export function getView(){
    if(current_view == VIEWS.FEED){
        
        return <Feed />
    }
    else if(current_view == VIEWS.ARTIST){
        return <Artist />
    }
    else if(current_view == VIEWS.MEDIA){
        return <Feed />
    }
    else if(current_view == VIEWS.LIVE){
        return <Feed />
    }
};