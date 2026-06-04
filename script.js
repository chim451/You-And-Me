function login(){
if(document.getElementById("password").value==="0306"){
document.getElementById("login").style.display="none";
document.getElementById("app").classList.remove("hidden");
}
}

/* NAVIGATION PROPRE */
function openScreen(screen){
document.getElementById("home").classList.add("hidden");
document.getElementById(screen).classList.remove("hidden");
}

function backHome(){
document.querySelectorAll(".screen").forEach(s=>s.classList.add("hidden"));
document.getElementById("home").classList.remove("hidden");
}

/* AUDIO */
function play(file){
new Audio(file).play();
}
