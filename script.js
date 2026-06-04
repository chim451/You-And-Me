function checkPassword(){
const pass = document.getElementById("password").value;
if(pass === "0306"){
document.getElementById("login").style.display="none";
document.getElementById("app").classList.remove("hidden");
}else{
alert("Mauvais mot de passe");
}
}

/* 🎧 AUDIO */
function playAudio(file){
const audio = new Audio(file);
audio.play();
}

/* VOICE */
function openVoice(){
alert("Voice ouvert");

openModal(`
<div>
<div onclick="playAudio('audio/goodmorning.m4a')">Good morning</div>
<div onclick="playAudio('audio/missyou.m4a')">Miss you</div>
<div onclick="playAudio('audio/brave.m4a')">Brave</div>
<div onclick="playAudio('audio/sad.m4a')">Sad</div>
<div onclick="playAudio('audio/scared.m4a')">Scared</div>
<div onclick="playAudio('audio/goodnight.m4a')">Good night</div>
</div>
`);
}

/* MEMORY */
function openMemory(){
openModal(`
<div class="gallery">

<img src="memory/IMG_4170.jpeg">
<img src="memory/IMG_4171.jpeg">
<img src="memory/IMG_4172.jpeg">
<img src="memory/IMG_4173.jpeg">
<img src="memory/IMG_4174.jpeg">
<img src="memory/IMG_4175.jpeg">
<img src="memory/IMG_4176.png">
<img src="memory/IMG_4177.png">
<img src="memory/IMG_4178.png">
<img src="memory/IMG_4179.png">
<img src="memory/IMG_4183.jpeg">
<img src="memory/IMG_4184.jpeg">
<img src="memory/IMG_4185.jpeg">
<img src="memory/IMG_3775.jpeg">
<img src="memory/IMG_3755.jpeg">

<video src="memory/FA5660AD-E2BC-45A2-9F89-1F236D4B1008.mov" controls></video>
<video src="memory/AAD9E0F9-D1BC-40EC-A89C-B0AF0FB6BCED.mov" controls></video>
<video src="memory/9c862843ae564771b08459fc7f052d1.mov" controls></video>

</div>
`);
}

/* ELI */
function openEli(){
openModal(`
<iframe 
width="100%" 
height="400"
src="https://www.youtube.com/embed/c_NpIfy_c6M"
frameborder="0"
allowfullscreen>
</iframe>
`);
}

/* MODAL SYSTEM */
function openModal(content){
let modal = document.createElement("div");
modal.className = "modal";
modal.innerHTML = content;
modal.onclick = () => modal.remove();
document.body.appendChild(modal);
}
