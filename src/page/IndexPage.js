import logo from '../logo.svg';

import './IndexPage.css';

import Header from '../elements/Header.js'
import MemberInfo from '../elements/MemberInfo.js'
import Bar from '../elements/Bar.js'
import ArtistAction from '../elements/ArtistAction.js'

import {current_view, getView} from '../data/view.js'

import {useState} from 'react'

var temp = {'current_view': current_view}

function IndexPage() {
  let viewSource = getView()
  
  let member_count = 482227
  let notice = "fromis_9 아티스트 권익 침해 관련 법적 대응 관련"
  let comment = "1111";

  let [trigger, changeTrigger] = useState([true]);
  

  Object.defineProperty(temp, "current_view", {
    get() {
      return this.someProperty;
    },
    set(newValue) {
      changeTrigger([...trigger])
      this.someProperty = newValue;
    },
  });

  fetch("http://192.168.35.218:81/User/IsLogin")
  .then((response)=> response.text())
  .then((data) => {
    
    if(data === "false"){
      window.location.replace("/login")
    }
  })

  return (
    <div className="page" style={{'width': '100%', 'height': '100%'}}>
      <div id="add" onClick={(e)=>{popUpAdd()}}>+</div>
      <div id="write" onClick={()=>{window.location.replace("/addPost")}}>✏️</div>

      <div id="overlay" onClick={popOffAdd}></div>

      
      <Header />
      
      <MemberInfo member_count={member_count} notice={notice}/>
      
      <Bar />

      <ArtistAction comment={comment} artistName={"하영"}/>
      
      {viewSource}

      
      
      
      
    </div>
  );

  function popUpAdd(){
    let add = document.getElementById("add");
    let write = document.getElementById("write")
    let overlay = document.getElementById("overlay")
    
    
    if(getComputedStyle(overlay).display === "none" || overlay.style.display === "none"){
      add.style.transform = "rotate(45deg)"
      overlay.style.display = "block"
      write.style.display = "block"
    }
    else if(overlay.style.display === "block"){
      add.style.transform = "rotate(0deg)"
      overlay.style.display = "none"
      write.style.display = "none"
    }
    
  }
  function popOffAdd(){
    let add = document.getElementById("add");
    let write = document.getElementById("write")
    let overlay = document.getElementById("overlay")
    
    add.style.transform = "rotate(0deg)"
    overlay.style.display = "none"
    write.style.display = "none"
  }
}

export default IndexPage;

export var temp;