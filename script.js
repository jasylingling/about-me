let emojis = []
document.querySelectorAll('.let-rain').forEach(li => {
    li.addEventListener('click', function () {
        let clickId = genCode()
        console.log(clickId)
        let data = this.dataset.emoji

        for (let i = 0; i < 100; i++) {
            emojis.push(new Emoji(data, clickId))
            emojis[i].drawEmoji()
        }
        emojis = []
        setTimeout(() => {
            document.querySelectorAll(`.${clickId}`).forEach(e => {
                e.remove()
            })
        }, 8000);
    })
})

class Emoji {
    constructor(type, clickId) {
        this.type = type
        this.clickId = clickId
        this.x = Math.floor(Math.random() * window.innerWidth)
        this.y = Math.floor(Math.random() * 2001 -2200)
    }

    drawEmoji() {
        const emoji = document.createElement('div')
        emoji.classList.add('emoji')
        emoji.classList.add(this.clickId)
        emoji.setAttribute('style', `left: ${this.x}px; top: ${this.y}px;`)

        emoji.innerText = ['🎵','☕️','🍿','🏝','🎹','🏂','👯‍♀️👨‍👩‍👧','🥒','😒','🕷','🥵','🦘'].includes(this.type) ? this.type : '🤷🏻‍♀️';

        document.body.appendChild(emoji)
    }
}

function genCode() {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';

    for (let i = 0; i < 5; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        result += characters.charAt(randomIndex);
    }

    return 'c' + result;
}

