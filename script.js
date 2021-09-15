let digitalElement = document.querySelector('.digital');
let sElement = document.querySelector('.p_s');
let mElement = document.querySelector('.p_m');
let hElement = document.querySelector('.p_h');

function updateClock() {
    let now = new Date();
    let hour = now.getHours();
    let minute = now.getMinutes();
    let second = now.getSeconds();

    digitalElement.innerHTML = `${fixZero(hour)}:${fixZero(minute)}:${fixZero(second)}`;

    let sdeg = ((360/60)*second)-90;
    let mdeg = ((360/60)*minute)-90;
    let hdeg = ((360/12)*hour)-90;

    sElement.style.transform = `rotate(${sdeg}deg)`;
    mElement.style.transform = `rotate(${mdeg}deg)`;
    hElement.style.transform = `rotate(${hdeg}deg)`;
}

function fixZero(time){
    if(time < 10){
        return '0'+time;
    }else{
        return time;
    }
}

setInterval(updateClock, 1000);
updateClock()
