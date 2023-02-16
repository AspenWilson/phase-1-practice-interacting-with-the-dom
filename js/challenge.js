const stopWatch = document.getElementById('counter')
const plus = document.getElementById('plus');
const minus = document.getElementById('minus');
const pause= document.getElementById('pause');
const resume = document.getElementById('resume')
const heart = document.getElementById('heart')
const submit = document.getElementById('submit')
const form = document.getElementById('comment-form')
const likesList = document.querySelector('.likes')
let sec = 0
let paused = false

// event listeners
plus.addEventListener('click',plusButton);
minus.addEventListener('click', minusButton);
pause.addEventListener('click', pauseTimer);
heart.addEventListener('click', likeFunction);
form.addEventListener('submit',comments)


//timer functions and event listeners
let master = setInterval(watchTime,1000);

function watchTime() {
   ++sec;
   const secondsCount = Math.floor(sec);
   stopWatch.innerHTML = secondsCount;
}
function plusButton () {
    sec++;
    stopWatch.innerHTML = sec;
}
function minusButton () {
    sec--;
    stopWatch.innerHTML = sec;
}

// pause and resume the timer

function pauseTimer(e) {
    paused= !paused;
    e.target.textContent = paused ? 'resume' : 'pause'
    const buttons = [
        plus,minus,heart,submit
    ]
    buttons.forEach(button => button.disabled = paused ? true : false)
    if(paused === true) {
        clearInterval(master)
    } else {
        setInterval(watchTime,1000);
    }
}


//likes function
function likeFunction () {
    const myNumber = stopWatch.innerText;
    const mergeLi = document.getElementById(`number-${myNumber}`)
    if(mergeLi) {
        const likesList = mergeLi.querySelector('span')
        ++likesList.textContent
        if(likesList.textContent=='2'){
            mergeLi.append('s')
        }
    }
    else{
    const li = document.createElement ('li');
    li.id= `number-${myNumber}`;
    const msg = `${myNumber} has been liked <span>1</span> time`;
    li.innerHTML = msg;
    likesList.append(li);
    }
}

//comments function
function comments (comment) {
    comment.preventDefault()
    const p = document.createElement('p');
    p.textContent =(comment.target['comment-input'].value)
    document.getElementById('list').appendChild(p)
}
