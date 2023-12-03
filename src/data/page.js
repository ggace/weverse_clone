
import Artist from './../views/Artist.js';
import Feed from './../views/Feed.js'

var PAGES = {
    FEED : 100001,
    ARTIST: 100002,
    MEDIA: 100003,
    LIVE: 100004,
};

var current_page = PAGES.FEED

function setCurrentPage(page){
    current_page = page
}

export var current_page; 
export default setCurrentPage;
export var PAGES;


export function getPage(){
    if(current_page == PAGES.FEED){
        
        return <Feed />
    }
    else if(current_page == PAGES.ARTIST){
        return <Artist />
    }
    else if(current_page == PAGES.MEDIA){
        return <Feed />
    }
    else if(current_page == PAGES.LIVE){
        return <Feed />
    }
};