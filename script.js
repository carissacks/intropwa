window.onscroll = ()=>{
    if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
        document.getElementById("navbar").style.top = "0";
    } else {
        document.getElementById("navbar").style.top = "-70px";
    }
}

function showExp(){
    div= document.getElementById("exp");
    div.innerHTML=  "<h3>Experiences</h3>"+
                    "<ul>"+
                        "<li>Participant of Google Developer Kejar 2019</li>"+
                        "<li>Laboratory Assistant in University</li>"+
                        "<li>Organisations in University</li>"+
                    "</ul>"+
                    "<button id='btnHide' onclick='hideExp()'>Show less</button>";
}

function hideExp(){
    div= document.getElementById("exp");
    div.innerHTML=   "<button id='btnShow' onclick='showExp()'>Show more</button>";
}