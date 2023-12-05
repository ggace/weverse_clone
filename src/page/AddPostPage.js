import './AddPostPage.css'


function AddPostPage(props) {
    return (
        <div id="page">
            <div id="header" style={{"paddingLeft": "10px", "paddingRight": "10px", "paddingTop": "10px", "paddingBottom": "10px", "backgroundColor": "white", "width": "calc(100% - 20px)"}}>
                <div  id="header-left">
                    <div className="header-element" onClick={()=>window.location.replace("./")}>X</div>
                    <div className="header-element">포스트 쓰기</div>
                </div>
                
                <div  id="header-right">
                    <div className="header-element">
                        <p id="register" onClick={()=> {
                            let content = document.getElementById("textInput").value
                            fetch("http://192.168.35.218:81/Post/InsertPost?content="+content)
                            .then(res => res.text())
                            .then((data) => {
                                if(data === "success" || data === "already exist"){
                                    alert("등록되었습니다.")
                                    window.location.replace("/");
                                }
                                else if(data=== "not exist"){
                                    alert("해당 회원이 존재하지 않습니다.")
                                }
                                else {
                                    alert("서버에서 오류가 발생했습니다.\n잠시후 다시 시도해주세요")
                                }
                            })
                        }}>등록</p>
                    </div>
                </div>
            </div>

            <section id="" style={{"marginTop": "50px"}}>
                <textarea name="" id="textInput" placeholder="위버스에 남겨보세요." onChange={() => {
                    let input = document.getElementById("textInput")
                    let register = document.getElementById("register")
                    if(input.value !== "") {
                        register.style.color = "black"
                    }
                    else {
                        register.style.color = "gray"
                    }
                }}></textarea>
                
                
            </section>

            
        </div>
    )
}

export default AddPostPage;