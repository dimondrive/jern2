const imgs=document.getElementById('imgs');
const leftBtn=document.getElementById('left');
const rightBtn=document.getElementById('right');

const img = document.querySelectorAll('#imgs img');
console.log(img);
let indx=0;
console.log(indx);
let interval=setInterval(run,3000);

function run(){
    indx++;
    chanheImage();
}

function chanheImage(){
    if(indx>img.length-1){
        indx=0;
    }
    else if(indx<0){
        indx=img.length-1;
    }

    imgs.style.transform=`translateX(${-indx*250}px)`
}

function resetInterval(){
    clearInterval(interval);
    interval=setInterval(run,3000);
}
rightBtn.addEventListener('click',() => {
    indx++;
    resetInterval();
    chanheImage();
})
leftBtn.addEventListener('click',()=>{
    indx--;
    resetInterval();
    chanheImage();
})