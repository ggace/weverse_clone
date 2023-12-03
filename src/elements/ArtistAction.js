import './ArtistAction.css'

function ArtistAction(props){
    return (
        <div id="artist-reply-wrapper">
            <div id="artist">
                <img  src="https://i.namu.wiki/i/Nb08H0-I6gxFT1qgNsib_s-d-4Oni8GKT5IAdWC82bY6H-IMY-hR0_rvFUlb_HGPa_ctw8oSbjqJvurEF7oL3AXqZkDWdTOC9tKRbQblWLEAdBUQY0fKEI6Ptuf5JHHnMYxN9m32p06o10wYQErgYg.webp" alt="" />
                <div id="artist-name">{props.artistName}</div>
            </div>
            
            <div id="artist-reply">{props.comment}</div>
        </div>
    );
}

export default ArtistAction