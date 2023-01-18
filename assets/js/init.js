const sounds = [
    {
        name: "Good evening, find enough to eat today?",
        sound: new Howl({
            src: ["assets/sounds-ocb/enough-to-eat-today.mp3"],
            html5: true
        })
    },
    {
        name: "Well that's great, would you care for ham or beef?",
        sound: new Howl({
            src: ["assets/sounds-ocb/care-for-ham-or-beef.mp3"],
            html5: true
        })
    },
    {
        name: "Alllllllright",
        sound: new Howl({
            src: ["assets/sounds-ocb/alllllllright.mp3"],
            html5: true
        })
    },
    {
        name: "Good evening!",
        sound: new Howl({
            src: ["assets/sounds-ocb/good-evening.mp3"],
            html5: true
        })
    },
    {
        name: "Hi, how are you?",
        sound: new Howl({
            src: ["assets/sounds-ocb/hi-how-are-you.mp3"],
            html5: true
        })
    },
    {
        name: "Is it still hot out there?",
        sound: new Howl({
            src: ["assets/sounds-ocb/is-it-still-hot-out-there.mp3"],
            html5: true
        })
    },
    {
        name: "Did you catch the game last night?",
        sound: new Howl({
            src: ["assets/sounds-ocb/game-last-night.mp3"],
            html5: true
        })
    },
    {
        name: "Have you tried the lasagna? It's my favorite!",
        sound: new Howl({
            src: ["assets/sounds-ocb/lasagna.mp3"],
            html5: true
        })
    },
    {
        name: "What grade are you in at school?",
        sound: new Howl({
            src: ["assets/sounds-ocb/grade-at-school.mp3"],
            html5: true
        })
    },
    {
        name: "Have you decided what dessert you're gonna have?",
        sound: new Howl({
            src: ["assets/sounds-ocb/dessert.mp3"],
            html5: true
        })
    },
    {
        name: "Do you like hot fudge sundaes?",
        sound: new Howl({
            src: ["assets/sounds-ocb/hot-fudge-sundaes.mp3"],
            html5: true
        })
    },
    {
        name: "I'd be glad to carve you that",
        sound: new Howl({
            src: ["assets/sounds-ocb/glad-to-carve-you-that.mp3"],
            html5: true
        })
    },
    {
        name: "Thinner slices are more tender though",
        sound: new Howl({
            src: ["assets/sounds-ocb/thinner-slices-are-more-tender.mp3"],
            html5: true
        })
    },
    {
        name: "Would that be alright?",
        sound: new Howl({
            src: ["assets/sounds-ocb/would-that-be-alright.mp3"],
            html5: true
        })
    },
    {
        name: "You can always come back up for more",
        sound: new Howl({
            src: ["assets/sounds-ocb/come-back-for-more.mp3"],
            html5: true
        })
    },
    {
        name: "How's that for ya?",
        sound: new Howl({
            src: ["assets/sounds-ocb/hows-that-for-ya.mp3"],
            html5: true
        })
    },
]

const buttonList = document.querySelector('#button-list');

for (let sound of sounds) {
    const newButton = document.createElement('button')
    newButton.innerText = sound.name;
    sound.sound.on('end', () => {
        newButton.classList.remove('playing');
    })
    newButton.addEventListener('click', (e) => {
        e.preventDefault();
        newButton.classList.add('playing');
        sound.sound.play();
    })
    buttonList.append(newButton);
}