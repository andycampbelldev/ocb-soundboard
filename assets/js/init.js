const sax = [
    {
        name: "Kenny G - Champagne",
        sound: new Howl({
            src: ["assets/sounds-ocb/kenny-g-champagne.mp3"],
            loop: true,
        })
    }
]

const sounds = [
    {
        name: "Good evening, find enough to eat today?",
        sound: new Howl({
            src: ["assets/sounds-ocb/enough-to-eat-today.mp3"],
        })
    },
    {
        name: "Well that's great, would you care for ham or beef?",
        sound: new Howl({
            src: ["assets/sounds-ocb/care-for-ham-or-beef.mp3"],
        })
    },
    {
        name: "Alllllllright",
        sound: new Howl({
            src: ["assets/sounds-ocb/alllllllright.mp3"],
        })
    },
    {
        name: "Good evening!",
        sound: new Howl({
            src: ["assets/sounds-ocb/good-evening.mp3"],
        })
    },
    {
        name: "Hi, how are you?",
        sound: new Howl({
            src: ["assets/sounds-ocb/hi-how-are-you.mp3"],
        })
    },
    {
        name: "Is it still hot out there?",
        sound: new Howl({
            src: ["assets/sounds-ocb/is-it-still-hot-out-there.mp3"],
        })
    },
    {
        name: "Did you catch the game last night?",
        sound: new Howl({
            src: ["assets/sounds-ocb/game-last-night.mp3"],
        })
    },
    {
        name: "Have you tried the lasagna? It's my favorite!",
        sound: new Howl({
            src: ["assets/sounds-ocb/lasagna.mp3"],
        })
    },
    {
        name: "What grade are you in at school?",
        sound: new Howl({
            src: ["assets/sounds-ocb/grade-at-school.mp3"],
        })
    },
    {
        name: "Have you decided what dessert you're gonna have?",
        sound: new Howl({
            src: ["assets/sounds-ocb/dessert.mp3"],
        })
    },
    {
        name: "Do you like hot fudge sundaes?",
        sound: new Howl({
            src: ["assets/sounds-ocb/hot-fudge-sundaes.mp3"],
        })
    },
    {
        name: "I'd be glad to carve you that",
        sound: new Howl({
            src: ["assets/sounds-ocb/glad-to-carve-you-that.mp3"],
        })
    },
    {
        name: "Thinner slices are more tender though",
        sound: new Howl({
            src: ["assets/sounds-ocb/thinner-slices-are-more-tender.mp3"],
        })
    },
    {
        name: "Would that be alright?",
        sound: new Howl({
            src: ["assets/sounds-ocb/would-that-be-alright.mp3"],
        })
    },
    {
        name: "You can always come back up for more",
        sound: new Howl({
            src: ["assets/sounds-ocb/come-back-for-more.mp3"],
        })
    },
    {
        name: "How's that for ya?",
        sound: new Howl({
            src: ["assets/sounds-ocb/hows-that-for-ya.mp3"],
        })
    },
]

const buttonList = document.querySelector('#button-list');
const initAudio = document.querySelector('audio');

for (let sound of sax) {
    const newButton = document.createElement('button')
    newButton.innerHTML = `<i class="fas fa-music"></i><span>${sound.name}</span>`;
    newButton.id = 'music-button'
    newButton.addEventListener('click', (e) => {
        e.preventDefault();
        if (!sound.sound.playing()) {
            newButton.classList.add('playing');
            initAudio.play(); // to enable allow web audio to play on mobile devices that are muted
            sound.sound.play();
        } else {
            sound.sound.stop();
            newButton.classList.remove('playing');
        }
    })
    buttonList.append(newButton);
}

for (let sound of sounds) {
    const newButton = document.createElement('button')
    newButton.innerText = sound.name;
    sound.sound.on('end', () => {
        newButton.classList.remove('playing');
    })
    newButton.addEventListener('click', (e) => {
        e.preventDefault();
        initAudio.play(); // to enable allow web audio to play on mobile devices that are muted
        newButton.classList.add('playing');
        sound.sound.play();
    })
    buttonList.append(newButton);
}