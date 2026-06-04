function checkPassword(){
const pass = document.getElementById("password").value;
if(pass === "0306"){
document.getElementById("login").style.display="none";
document.getElementById("app").classList.remove("hidden");
}else{
alert("mauvais mot de passe");
}
}

function openModal(content){
document.getElementById("modal").classList.remove("hidden");
document.getElementById("modalContent").innerHTML = content;
}

function closeModal(){
document.getElementById("modal").classList.add("hidden");
}

function noop(){}

/* VOICE */
function openVoice(){
openModal(`
<div>
<p onclick="play('audio/brave.m4a')">Brave</p>
<p onclick="play('audio/sad.m4a')">Sad</p>
<p onclick="play('audio/scared.m4a')">Scared</p>
</div>
`);
}

function play(file){
new Audio(file).play();
}

/* MEMORY */
function openMemory(){
openModal(`<div>Galerie Memory ici</div>`);
}

/* ELI FIX (PLUS DE DOUBLE VIDEO) */
let eliOpened = false;

function openEli(){
if(eliOpened) return;
eliOpened = true;

openModal(`
<iframe width="100%" height="400"
src="https://www.youtube.com/embed/c_NpIfy_c6M"
allowfullscreen></iframe>
`);

setTimeout(()=> eliOpened = false, 1000);
}
