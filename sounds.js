let more = document.querySelector('.cat_pics');
let audio = document.getElementsByTagName('audio');

more.addEventListener('mouseenter', () => {
    audio[0].play()
    console.log(more,audio)
});



