/* === EXAMPLE WITH 1 EMOJI === */

// let cucumbers = [];
// document.querySelectorAll(".let-rain").forEach(li=>{
//     li.addEventListener("click", e=> {
//         for (let i = 0; i < 100; i++) {
//             cucumbers.push(new Cucumber());
//             cucumbers[i].drawCucumber();
//         }
//         // after 5s remove cucumber-divs
//         setTimeout(() => {
//             document.querySelectorAll(".cucumber").forEach(cucumber=>{
//                 cucumber.remove();
//             })
//         }, 5000);
//     })
// })

// // blueprint for cucumbers
// class Cucumber {
//     constructor() {
//         // value between 0 and window-width
//         this.x = Math.floor(Math.random() * window.innerWidth);
//         // value between -16 (starting point) and -316 (max)
//         this.y = Math.floor(Math.random() * ((-16) - (-316) + 1)) + (-316);
//     }

//     drawCucumber() {
//         let cucumber = document.createElement("div");
//         cucumber.innerText = "🥒";
//         cucumber.classList.add("cucumber");
//         cucumber.setAttribute("style", `left: ${this.x}px; top: ${this.y}px;`);
//         document.body.appendChild(cucumber);
//     }
// }

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
            // console.log(document.querySelectorAll(`.${clickId}`))
            document.querySelectorAll(`.${clickId}`).forEach(e => {
                e.remove()
                // emojis = []
            })
        }, 8000);
    })
})

class Emoji {
    constructor(type, clickId) {
        this.type = type
        this.clickId = clickId
        this.x = Math.floor(Math.random() * window.innerWidth)
        this.y = Math.floor(Math.random() * ((-200) - (-2200) + 1) + (-2200))
    }

    drawEmoji() {
        const emoji = document.createElement('div')
        emoji.classList.add('emoji')
        emoji.classList.add(this.clickId)
        emoji.setAttribute('style', `left: ${this.x}px; top: ${this.y}px;`)

        switch (this.type) {
            case '🎵':
                emoji.innerText = '🎵'
                break;
            case '☕️':
                emoji.innerText = '☕️'
                break;
            case '🍿':
                emoji.innerText = '🍿'
                break;
            case '🏝':
                emoji.innerText = '🏝'
                break;
            case '🎹':
                emoji.innerText = '🎹'
                break;
            case '🏂':
                emoji.innerText = '🏂'
                break;
            case '👯‍♀️👨‍👩‍👧':
                emoji.innerText = '👯‍♀️👨‍👩‍👧'
                break;
            case '🥒':
                emoji.innerText = '🥒'
                break;
            case '😒':
                emoji.innerText = '😒'
                break;
            case '🕷':
                emoji.innerText = '🕷'
                break;
            case '🥵':
                emoji.innerText = '🥵'
                break;
            default:
                emoji.innerText = '🤷🏻‍♀️'
                break;
        }

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

