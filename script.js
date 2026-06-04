function checkPassword(){
if(document.getElementById("password").value==="0306"){
document.getElementById("login").style.display="none";
document.getElementById("app").classList.remove("hidden");
}
}

function openVoice(){
document.getElementById("home").classList.add("hidden");
document.getElementById("voice").classList.remove("hidden");
}

function backHome(){
document.getElementById("voice").classList.add("hidden");
document.getElementById("home").classList.remove("hidden");
}

function play(file){
new Audio(file).play();
}

function openMemory(){
window.location.href="#";
}

function openEli(){
window.open("https://youtube.com/shorts/c_NpIfy_c6M","_blank");
}
