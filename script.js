// Initializing Variables   


let seekbar = document.getElementById('seekbar');
let progressBar = document.getElementById('progress');
let play = document.getElementById('play');
let pause = document.getElementById('pause');
let audioElement = new Audio('/Resources/Mp3/As Subhu Bada Min Tala Atihi.mp3');
let current_Time = document.getElementById('currenttime');
let tot_duration = document.getElementById('duration');
let title = document.getElementById('title');
let Naat_khuwan = document.getElementById('Naat_khuwan');
let previous = document.getElementById('previous');
let img = document.getElementById('img');
let forward = document.getElementById('forward');
let play_circled = document.getElementsByClassName('play_circled');
let pause_circled = document.getElementsByClassName('pause_circled');



// --------------Hamburger Menu---------------//





let hamburger = document.querySelector('#hamb')
let gif = document.querySelector('.cross')
let container = document.querySelector('.container')
let option = document.getElementById('option')


// Handeling Hamburger

hamburger.addEventListener('click', () =>{
    container.classList.toggle('hidden')
    hamburger.classList.toggle('hidden')
    option.classList.toggle('hidden')
    gif.classList.toggle('hidden')
})

gif.addEventListener('click', () =>{
    option.classList.add('hidden');
    container.classList.remove('hidden');
    hamburger.classList.remove('hidden');
    gif.classList.add('hidden')
})

// Naat List Hamburger

let Naat_Hamb = document.getElementById('Naat_Hamb');
let naatplayer = document.getElementById('naatplayer');
let naatlist = document.getElementById('naatlist');
let back = document.getElementById('back');


Naat_Hamb.addEventListener('click', ()=>{
    naatplayer.classList.add('hidden');
    naatlist.classList.remove('hidden');
})
back.addEventListener('click', ()=>{
    naatlist.classList.add('hidden');
    naatplayer.classList.remove('hidden');
})




// Play/Pause section

play.addEventListener('click', () =>{
    if (audioElement.paused || audioElement.currentTime<=0) {
        audioElement.play();
        play.classList.add('hidden')
        pause.classList.remove('hidden')
    }
    else{
        audioElement.pause();
        play.classList.remove('hidden')
        pause.classList.add('hidden')
    }
})
pause.addEventListener('click', () =>{
    if (audioElement.paused || audioElement.currentTime<=0) {
        audioElement.play();
        play.classList.add('hidden')
        pause.classList.remove('hidden')
    }
    else{
        audioElement.pause();
        play.classList.remove('hidden')
        pause.classList.add('hidden')
    }
})


audioElement.addEventListener('timeupdate', (event)=>{
    // console.log('timeupdate')
    const {currentTime, duration } = event.srcElement;
    // console.log(currentTime);
    // console.log(duration);
    
    let progressBar_time = (currentTime / duration) * 100;
    // console.log(progressBar_time);
    progressBar.style.width = `${progressBar_time}%`
    
    
    // Working on CurrentTime 
    
    let min_currentTime = Math.floor(currentTime / 60);
    let sec_currentTime = Math.floor(currentTime % 60);
    
    if(sec_currentTime < 10){
        sec_currentTime = `0${sec_currentTime}`;
    }
    
    let total_time = `${min_currentTime}:${sec_currentTime}`;
    current_Time.textContent = `${total_time}`;


    // Working On Duration

    let min_duration = Math.floor(duration / 60);
    let sec_duration = Math.floor(duration % 60);
    
    if(sec_duration < 10){
        sec_duration = `0${sec_duration}`;
    }
    let total_duration = `${min_duration}:${sec_duration}`;

    if(duration){
        tot_duration.textContent = `${total_duration}`;
    }

    
})


// -------------Working Seeking Audio-------------//


seekbar.addEventListener('click', (event) =>{
    // console.log(event)
    let duration=audioElement.duration;
    
    let client_progress=(event.offsetX / event.srcElement.clientWidth)*duration;
    // console.log(client_progress)  
    
    audioElement.currentTime=client_progress;
})




// --------------When Naat Ends------------ //


audioElement.addEventListener("ended", () => 
{
    play.classList.remove('hidden')
    pause.classList.add('hidden')
    
});


// ---------Working On Previous & Forward---------- //

// -------------Naats----------//



let Naats = [
    {
        Name: "As Subhu Bada Min Tala Atihi",
        Naat_khuwan: "Waheed Zafar Qasmi"
    },
    {
        Name: "Hasbi Rabbi Jallallah",
        Naat_khuwan: "Ahmad Raza Qadri"
    },
    {
        Name: "Faslon Ko Takalluf",
        Naat_khuwan: "Waheed Zafar Qasmi"
    },
    {
        Name: "Jaga Ji Lagane Ki Dunya Nahi Hai",
        Naat_khuwan: "Junaid Jamshed"
    },
    {
        Name: "Woh Nabiyon Mein Rehmat",
        Naat_khuwan: "Waheed Zafar Qasmi"
    },
    {
        Name: "Ya Elahi Har Jagga Teri",
        Naat_khuwan: "Owais Raza Qadri"
    },
];

let loadNaat = (Naats) => {
    title.textContent = Naats.Name;
    Naat_khuwan.textContent = Naats.Naat_khuwan;
    audioElement.src = "/Resources/Mp3/" + Naats.Name + ".mp3";
    img.src = "/Resources/Naat Khuwan/"+ Naats.Naat_khuwan + ".png";
    audioElement.play()
    play.classList.add('hidden');
    pause.classList.remove('hidden');
},

NaatIndex = 0;

forward.addEventListener('click', () => {
    NaatIndex = (NaatIndex + 1) % Naats.length;
    loadNaat(Naats[NaatIndex]);
})

previous.addEventListener('click', () => {
    play.classList.remove('hidden');
    pause.classList.add('hidden');
    NaatIndex = (NaatIndex - 1) % Naats.length;
    loadNaat(Naats[NaatIndex]);
})


// When Click On Naat List



naat_1.addEventListener('click', ()=>{
    // play_circled[0].classList.add('hidden');
    // pause_circled[0].classList.remove('hidden');
    title.textContent = "As Subhu Bada Min Tala Atihi" ;
    Naat_khuwan.textContent = "Waheed Zafar Qasmi";
    audioElement.src = "/Resources/Mp3/As Subhu Bada Min Tala Atihi.mp3";
    img.src = "/Resources/Naat Khuwan/Waheed Zafar Qasmi.png";
    audioElement.play();
    play.classList.add('hidden');
    pause.classList.remove('hidden');

})
naat_2.addEventListener('click', ()=>{
    // play_circled[1].classList.add('hidden');
    // pause_circled[1].classList.remove('hidden');
    title.textContent = "Hasbi Rabbi Jallallah" ;
    Naat_khuwan.textContent = "Ahmad Raza Qadri";
    audioElement.src = "/Resources/Mp3/Hasbi Rabbi Jallallah.mp3";
    img.src = "/Resources/Naat Khuwan/Ahmad Raza Qadri.png";
    audioElement.play();
    play.classList.add('hidden');
    pause.classList.remove('hidden');
})
naat_3.addEventListener('click', ()=>{
    // play_circled[2].classList.add('hidden');
    // pause_circled[2].classList.remove('hidden');
    title.textContent = "Faslon Ko Takalluf" ;
    Naat_khuwan.textContent = "Waheed Zafar Qasmi";
    audioElement.src = "/Resources/Mp3/Faslon Ko Takalluf.mp3";
    img.src = "/Resources/Naat Khuwan/Waheed Zafar Qasmi.png";
    audioElement.play();
    play.classList.add('hidden');
    pause.classList.remove('hidden');
})
naat_4.addEventListener('click', ()=>{
    // play_circled[3].classList.add('hidden');
    // pause_circled[3].classList.remove('hidden');
    title.textContent = "Jaga Ji Lagane Ki Dunya Nahi Hai" ;
    Naat_khuwan.textContent = "Junaid Jamshed";
    audioElement.src = "/Resources/Mp3/Jaga Ji Lagane Ki Dunya Nahi Hai.mp3";
    img.src = "/Resources/Naat Khuwan/Junaid Jamshed.png";
    audioElement.play();
    play.classList.add('hidden');
    pause.classList.remove('hidden');
})
naat_5.addEventListener('click', ()=>{
    // play_circled[4].classList.add('hidden');
    // pause_circled[4].classList.remove('hidden');
    title.textContent = "Woh Nabiyon Mein Rehmat" ;
    Naat_khuwan.textContent = "Waheed Zafar Qasmi";
    audioElement.src = "/Resources/Mp3/Woh Nabiyon Mein Rehmat.mp3";
    img.src = "/Resources/Naat Khuwan/Waheed Zafar Qasmi.png";
    audioElement.play();
    play.classList.add('hidden');
    pause.classList.remove('hidden');
})
naat_6.addEventListener('click', ()=>{
    // play_circled[5].classList.add('hidden');
    // pause_circled[5].classList.remove('hidden');
    title.textContent = "Ya Elahi Har Jagga Teri" ;
    Naat_khuwan.textContent = "Owais Raza Qadri";
    audioElement.src = "/Resources/Mp3/Ya Elahi Har Jagga Teri.mp3";
    img.src = "/Resources/Naat Khuwan/Owais Raza Qadri.png";
    audioElement.play();
    play.classList.add('hidden');
    pause.classList.remove('hidden');
})