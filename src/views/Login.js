import './Login.css'



export default function Login(props){
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
                    <input type="text" placeholder="비밀번호"/>
                </div>
            </div>
            <div id="login-request">
                <input type="button" className="keepgoingwithid" value="이메일로 계속하기" onClick={function(){
                    document.getElementById("pw").style.display = "block"
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

