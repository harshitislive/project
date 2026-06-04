var task = document.getElementById('task');
var btn = document.getElementById('btn');
var time = document.getElementById('time');

var tasktitle = document.getElementById('tasktitle');
var timer = document.getElementById('timer');

var timeLeft = 0;
var timeText = "00:00";

function start () {
    tasktitle.innerHTML = task.value;
    timeLeft = parseInt(time.value)*60;
    
    const myInterval = setInterval(() => {
        timeLeft--;
        
        let minutes = Math.floor(timeLeft / 60).toString().padStart(2, '0');
        let seconds = (timeLeft % 60).toString().padStart(2, '0');

        timeText = minutes + ":" + seconds;

        timer.innerHTML = timeText;

        if (timeLeft === 0) {
            clearInterval(myInterval); 
            alert("Timer Over");
        }
    }, 1000);
}