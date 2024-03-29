const getRandomNum = () => {
    return Math.round(Math.random() * 255)
}

let repeat = true;
const currentColor = document.getElementById('currentColor');
const timeout = () => {
    if (repeat === true) {
        const changeColor = setTimeout(() => {
            if (repeat === true) {
                const red = getRandomNum();
                const green = getRandomNum();
                const blue = getRandomNum();
                document.body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
                currentColor.style.color = `rgb(${red}, ${green}, ${blue})`
                currentColor.textContent = `RED (${red})`
                currentColor.textContent += `\r\nGREEN (${green})`
                currentColor.textContent += `\r\nBLUE (${blue})\r\n`
                if (red * 0.299 + green * 0.587 + blue * 0.114 > 186) {
                    document.getElementById('currentColor').style.color = '#000000';
                } else {
                    document.getElementById('currentColor').style.color = '#ffffff';
                }
                timeout()
            }

        }, 1500)
    }

}

const startStopButton = document.getElementById('startStop');
startStopButton.addEventListener('click', () => {
    if (!repeat) {
        console.log('test')
        repeat = !repeat
        timeout();
        return;
    }
    repeat = !repeat

})
timeout();