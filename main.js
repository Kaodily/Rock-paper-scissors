const score = document.querySelector('.game_score')
const paperImg = document.querySelector('.paper-img')
const scissorsImg = document.querySelector('.scissors-img')
const rockImg = document.querySelector('.rock-img')
const paper = document.querySelector('.paper-gradient')
const scissors = document.querySelector('.scissors-gradient')
const rock = document.querySelector('.rock-gradient')
const section = document.querySelector('.section')
const images = document.querySelectorAll('.img')
const paragraph = document.querySelector('.p_tag')
const popup = document.querySelector('.popup')
const arr = ['http://127.0.0.1:5500/images/icon-scissors.svg','http://127.0.0.1:5500/images/icon-paper.svg','http://127.0.0.1:5500/images/icon-rock.svg']



images.forEach(image => {
    const random = Math.floor(Math.random() * arr.length) 
    image.addEventListener('click', () => {
        paperImg.src = image.src;
        if (paperImg.src == 'http://127.0.0.1:5500/images/icon-scissors.svg') {
            paper.style.border = '10px solid hsl(39, 89%, 49%)'
            styled()

        } else if (paperImg.src == 'http://127.0.0.1:5500/images/icon-rock.svg') {
            paper.style.border = ' 10px solid hsl(349, 71%, 52%)'
            styled()
            
        } else {
            paper.style.border = '10px solid  hsl(230, 89%, 62%)'
            styled()

        }
        setTimeout(() => {
            popup.style.display = 'none'
            scissorsImg.src = arr[random]  
            scissors.style.display = 'flex'
            if (scissorsImg.src == 'http://127.0.0.1:5500/images/icon-scissors.svg') {
                scissors.style.border = '10px solid hsl(39, 89%, 49%)'
    
            } else if (scissorsImg.src == 'http://127.0.0.1:5500/images/icon-rock.svg') {
                scissors.style.border = ' 10px solid hsl(349, 71%, 52%)'
                
            } else {
                scissors.style.border = '10px solid  hsl(230, 89%, 62%)'
            }
        },1000)
    })
})
const styled = () => {
            rock.style.display = 'none'
            section.style.backgroundImage = 'none'
            paragraph.style.display = 'block'
            scissors.style.display = 'none'
            popup.style.display='block'
}
