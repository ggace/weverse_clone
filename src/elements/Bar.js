import './Bar.css'

import {PAGES} from './../data/page.js'
import {current_page} from '../data/page.js'
import setCurrentPage from '../data/page.js'

import {useState} from "react"

import {temp} from './../page/IndexPage.js'

function Bar(props){
    

    let [classes, changeClass] = useState(["a", "a", "a", "a"]);
    let [stucked, changeStucked] = useState([""]);

    function setBarClass(current_page, PAGES){

        classes[0] = "";
        classes[1] = "";
        classes[2] = "";
        classes[3] = "";

        
        if(current_page == PAGES.FEED){
            classes[0] = "current"
        }
        else if(current_page == PAGES.ARTIST){
            classes[1] = "current"
        }
        else if(current_page == PAGES.MEDIA){
            classes[2] = "current"
        }
        else if(current_page == PAGES.LIVE){
            classes[3] = "current"
        }

        
        
        
    }

    function setStucked() {
        if(current_page != PAGES.FEED){
            stucked[0] = "top-stuck"
        }
        else{
            stucked = ""
        }
        changeStucked([...stucked])
    }

    function setPage(page){
        setCurrentPage(page)
        setStucked();
        setBarClass(page, PAGES)

        changeClass([...classes])
        temp["current_page"] = page
    }

    setBarClass(current_page, PAGES);

    
    
    

    return (
        <section id="bar-wrapper" className={"sticky " + stucked} style={{'display': 'flex', "justifyContent": 'center'}}>
            <div id="bar" >
                <span onClick={() => setPage(PAGES.FEED)} className={"bar-element "+ classes[0]}>Feed</span>
                <span onClick={() => setPage(PAGES.ARTIST)} className={"bar-element "+ classes[1]}>Artist</span>
                <span onClick={() => setPage(PAGES.MEDIA)} className={"bar-element "+ classes[2]}>Media</span>
                <span onClick={() => setPage(PAGES.LIVE)} className={"bar-element "+ classes[3]}>LIVE</span>
            </div>


        </section>
    );
}

window.onload = function(){
    const el = document.querySelectorAll('.sticky');
    const observer = new IntersectionObserver( ([e]) => {
        e.target.classList.toggle('stuck', e.intersectionRatio < 1)
    }, { threshold: [1] });
    el.forEach(element => observer.observe(element));
}

export default Bar