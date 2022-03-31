document.getElementById('first').style.backgroundColor = 'green'
document.querySelector('.second').style.backgroundColor = 'yellow'
document.querySelector('.rest').style.backgroundColor = 'red'



var div = document.getElementById("year");

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function changeColor() {
    div.style.color = getRandomColor();
}

setInterval(changeColor, 1000);


