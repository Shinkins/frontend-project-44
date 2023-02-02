function eventGate(randomNumber) {
    switch(randomNumber) {
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
    const max = 2;
    return randomNumber = Math.floor(Math.random() * (max - min)) + min;
  }

eventGate();