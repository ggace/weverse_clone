import './MemberInfo.css'

function MemberInfo(props){
    
    return (
        <section id="member-info">
            <img id="header-img" src="https://www.nbnnews.co.kr/news/photo/202306/769799_777813_242.jpg"/>
            <section id="artist-info">
                <div id="member_count">{props.member_count} members</div>
                <h1>fromis_9</h1>
                <div id="notice">[NOTICE] {props.notice}</div>
            </section>
            
        </section>
        
    );
}

export default MemberInfo;