function login(){
if(document.getElementById("password").value==="0306"){
document.getElementById("login").style.display="none";
document.getElementById("app").classList.remove("hidden");
openApp("home");
}
}

/* NAV iOS STYLE */
function openApp(id){
document.querySelectorAll(".screen").forEach(s=>{
s.classList.remove("active");
});
document.getElementById(id).classList.add("active");
}

function back(){
openApp("home");
}

/* AUDIO */
function play(file){
let a=new Audio(file);
a.play();
}

/* MEMORY VIEW */
function openMedia(src){
document.getElementById("viewerImg").src=src;
document.getElementById("viewer").classList.remove("hidden");
}

function closeViewer(){
document.getElementById("viewer").classList.add("hidden");
}

/* VIDEO TAP (memory optional) */
function openVideo(el){
el.requestFullscreen?.();
}
