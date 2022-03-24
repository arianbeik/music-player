const songProgress = document.querySelector('.songProgress')
const playSongButt = document.querySelector('.playSong')
const playSongColored = document.querySelector('.playSong_Colored')
const playSongButt_Icon = document.querySelector('.playSongICon')
const audio = document.querySelector('.audio')

playSongButt.addEventListener('click',playSong)
function playSong(){
    if(playSongButt_Icon.classList.contains('fa-play')) playingSong()
    else pausedSong()
}
function playingSong(){
    playSongButt_Icon.classList.add('fa-pause')
    playSongButt_Icon.classList.remove('fa-play')
    playSongColored.style.animationPlayState = 'running'
    audio.play()
}
function pausedSong(){
    playSongButt_Icon.classList.remove('fa-pause')
    playSongButt_Icon.classList.add('fa-play')
    playSongColored.style.animationPlayState = 'paused'
    audio.pause()
}
function updateProgress(e){
    const { duration , currentTime} = e.srcElement;
    const progressPercent = (currentTime / duration) * 228
    songProgress.style.width = `${progressPercent}`;
}

audio.addEventListener('timeupdate', updateProgress)
audio.addEventListener('ended', pausedSong)