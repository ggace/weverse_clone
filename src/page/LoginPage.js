import Login from '../views/Login.js';

function LoginPage(){
    fetch("http://192.168.35.218:81/User/IsLogin")
    .then((response)=> response.text())
    .then((data) => {
        if(data != "false"){
            window.location.replace("/")
        }
    })
    return <Login />
}

export default LoginPage;