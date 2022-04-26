function getComputer () {
    const computer = Math.random();
    if ( computer < 0.33 ) return 'gajah';
    if ( computer >= 0.33 && computer < 0.66) return 'orang';
    else return 'semut';
}

function getResult (computer, player) {
    if ( player == computer) return 'DRAW!';
    if ( player == 'gajah') return (computer == 'orang') ? 'WIN!' : 'LOSE!';
    if ( player == 'orang') return (computer == 'gajah') ? 'LOSE!' : 'WIN!';
    if ( player == 'semut') return (computer == 'gajah') ? 'WIN!' : 'LOSE!';
}

function putarGambar() {
    const imgComputer = document.querySelector('.img-computer');
    const gambar = ['gajah','orang','semut'];
    let i = 0;
    const timeStart = new Date().getTime();
    setInterval(function() {
        if ( new Date().getTime()-timeStart>1500) {
            clearInterval;
            return;
        }
        imgComputer.setAttribute('src', 'img/' + gambar[i++] + '.png' );
        if (i == gambar.length) {
            i=0;
        }
    }, 100)
}

const playerGajah = document.querySelector('.gajah');
playerGajah.addEventListener('click', function() {
    const pilihanComputer = getComputer ();
    const pilihanPlayer = playerGajah.className;
    const result = getResult(pilihanComputer,pilihanPlayer);

    putarGambar();

    setTimeout(function() {
        const imgComputer = document.querySelector('.img-computer');
        imgComputer.setAttribute('src','img/' + pilihanComputer + '.png');
    
        const hasil = document.querySelector('.info');
        hasil.innerHTML = result;
    }, 1500)
})

const playerOrang = document.querySelector('.orang');
playerOrang.addEventListener('click', function() {
    const pilihanComputer = getComputer ();
    const pilihanPlayer = playerOrang.className;
    const result = getResult(pilihanComputer,pilihanPlayer);

    putarGambar();

    setTimeout(function() {
        const imgComputer = document.querySelector('.img-computer');
        imgComputer.setAttribute('src','img/' + pilihanComputer + '.png');
    
        const hasil = document.querySelector('.info');
        hasil.innerHTML = result;
    }, 1500)
})

const playerSemut = document.querySelector('.semut');
playerSemut.addEventListener('click', function() {
    const pilihanComputer = getComputer ();
    const pilihanPlayer = playerSemut.className;
    const result = getResult(pilihanComputer,pilihanPlayer);

    putarGambar();

    setTimeout(function() {
        const imgComputer = document.querySelector('.img-computer');
        imgComputer.setAttribute('src','img/' + pilihanComputer + '.png');
    
        const hasil = document.querySelector('.info');
        hasil.innerHTML = result;
    }, 1500)
})












