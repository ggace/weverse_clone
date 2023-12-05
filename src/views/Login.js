import './Login.css'



export default function Login(props){
    let i = 0;
    return (
        <div id="login">

            <div id="top">
                <div className="top-element weverse-account">weverse account</div>
                <div className="top-element">X</div>
            </div>
            <div>
                <h2 id="instruction">위버스 계정으로<br /> 로그인이나 회원가입해주세요</h2>
            </div>

            <div id="login-form">
                <div id="id">
                    <p>이메일</p>
                    <input type="text" placeholder="your@email.com"/>
                </div>
                <div id="pw">
                    <p>비밀번호</p>
                    <input type="password" placeholder="비밀번호"/>
                </div>
            </div>
            <div id="login-request">
                <input type="button" className="keepgoingwithid" value="이메일로 계속하기" onClick={function(){
                    if(i === 0){
                        document.getElementById("pw").style.display = "block";
                        document.getElementsByClassName("keepgoingwithid")[0].value = "로그인";
                        i++;
                    }
                    else{
                        let user_id = document.querySelector("#id input").value
                        let user_pw = document.querySelector("#pw input").value
                        fetch("http://192.168.35.218:81/User/Login?user_id=" + user_id + "&user_pw="+user_pw)
                        .then(res => res.text())
                        .then((data) => {

                            if(data === "success" || data === "already exist"){
                                alert("환영합니다.")
                                window.location.reload();
                            }
                            else if(data=== "not exist"){
                                alert("해당 회원이 존재하지 않습니다.")
                            }
                            else {
                                alert("서버에서 오류가 발생했습니다.\n잠시후 다시 시도해주세요")
                            }
                        })
                    }
                    
                    
                }}/>
                <p>비밀번호를 잊어버리셨나요?</p>
            </div>

            <div id="seperate">
                <div></div>
                <p>혹은</p>
                <div></div>
                
            </div>

            <div id="other-login">
                <div>m</div>
                <div>g</div>
                <div>a</div>
            </div>
            

        </div>
        

    )
}

