import logo from '../logo.svg';

import './IndexPage.css';

import Header from '../elements/Header.js'
import MemberInfo from '../elements/MemberInfo.js'
import Bar from '../elements/Bar.js'
import ArtistAction from '../elements/ArtistAction.js'
import Login from '../views/Login.js'

import {current_page, getPage} from '../data/page.js'

import {useState} from 'react'
import ReactDomServer from 'react-dom/server';

var temp = {'current_page': current_page}

function IndexPage() {
  let pageSource = getPage()
  
  let member_count = 482227
  let notice = "fromis_9 아티스트 권익 침해 관련 법적 대응 관련"
  let comment = "1111";

  let [trigger, changeTrigger] = useState([true]);
  

  Object.defineProperty(temp, "current_page", {
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
    let page = document.getElementsByClassName("page")[0]
    if(data == "false"){
      page.innerHTML = ""
      page.innerHTML += ReactDomServer.renderToString(<Login />)
    }
  })

  return (
    <div className="page" style={{'width': '100%', 'height': '100%'}}>
      
      <Header />
      
      <MemberInfo member_count={member_count} notice={notice}/>
      
      <Bar />

      <ArtistAction comment={comment} artistName={"하영"}/>
      
      {pageSource}
    </div>
  );
}

export default IndexPage;

export var temp;