import './Bar.css'

import {VIEWS} from './../data/view.js'
import {current_view} from '../data/view.js'
import setCurrentView from '../data/view.js'

import {useState} from "react"

import {temp} from './../page/IndexPage.js'

function Bar(props){
    

    let [classes, changeClass] = useState(["a", "a", "a", "a"]);
    let [stucked, changeStucked] = useState([""]);

    function setBarClass(current_view, VIEWS){

        classes[0] = "";
        classes[1] = "";
        classes[2] = "";
        classes[3] = "";

        
        if(current_view == VIEWS.FEED){
            classes[0] = "current"
        }
        else if(current_view == VIEWS.ARTIST){
            classes[1] = "current"
        }
        else if(current_view == VIEWS.MEDIA){
            classes[2] = "current"
        }
        else if(current_view == VIEWS.LIVE){
            classes[3] = "current"
        }

        
        
        
    }

    function setStucked() {
        if(current_view != VIEWS.FEED){
            stucked[0] = "top-stuck"
        }
        else{
            stucked = ""
        }
        changeStucked([...stucked])
    }

    function setView(view){
        setCurrentView(view)
        setStucked();
        setBarClass(view, VIEWS)

        changeClass([...classes])
        temp["current_view"] = view
    }

    setBarClass(current_view, VIEWS);

    
    
    

    return (
        <section id="bar-wrapper" className={"sticky " + stucked} style={{'display': 'flex', "justifyContent": 'center'}}>
            <div id="bar" >
                <span onClick={() => setView(VIEWS.FEED)} className={"bar-element "+ classes[0]}>Feed</span>
                <span onClick={() => setView(VIEWS.ARTIST)} className={"bar-element "+ classes[1]}>Artist</span>
                <span onClick={() => setView(VIEWS.MEDIA)} className={"bar-element "+ classes[2]}>Media</span>
                <span onClick={() => setView(VIEWS.LIVE)} className={"bar-element "+ classes[3]}>LIVE</span>
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