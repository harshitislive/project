const colors = ['red' , 'blue' , 'black' , 'green' , 'purple' , 'yellow' , 'crimson' , 'pink'];

let i = 0;

box = document.getElementById('box');
btn = document.getElementById('btn');

function change () {
    if(i!=7) {
        i++;   
    }
    else{
        i = 0;   
    }
    btn.innerHTML = 'Change ' + i;
    box.style.backgroundColor = colors[i];
}
