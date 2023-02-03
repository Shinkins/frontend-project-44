function eventGate() {
    let random = getRandomNumber()
    switch(random) {
        case 1:
            console.log('+')
            break;
        case 2:
            console.log('-')
            break;
        
        default:
            console.log('*')
            break;
    };
};

function getRandomNumber() {
    let randomNumber = 0;
    const min = 1;
    const max = 4;
    return randomNumber = Math.floor(Math.random() * (max - min)) + min;
}

eventGate();