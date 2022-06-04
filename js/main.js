window.addEventListener("scroll", function(){
    document.querySelector('.menu').classList.toggle('active', scrollY > 200);
})

window.addEventListener("load", function(){
    let PreBtn = document.querySelectorAll('.btn');

    for (elem of PreBtn) {
        elem.innerHTML = `<button>Խաղալ <img src="./images/icons/premium.svg"> </button>`
    }

    let PrePin = document.querySelectorAll('.premium-pin');

    for (elem of PrePin) {
        elem.innerHTML = `<img class="pre-pin" src="./images/icons/premium-pin.svg">`
    }
})

function MenuInputing(){
    let MenuInput = document.querySelector('.card-code input').value;

    if (MenuInput == 'XYLFDP') {
        let PrePin = document.querySelectorAll('.premium-pin');
        for (elem of PrePin) {
            elem.style.display = 'none'
        }

        let GameBtnNone = document.querySelectorAll('.btn');
        for (elem of GameBtnNone) {
            elem.style.display = 'none'
        }
    
        let GameBtn = document.querySelectorAll('.content_items_item > a');
        for (elem of GameBtn) {
            elem.style.display = 'block'
        }
    
        let RemoveClass = document.querySelectorAll('.content_items_item');
        for (elem of RemoveClass) {
            elem.classList.remove('premium')
        }

        let MenuInput = document.querySelector('.card-code input')

        MenuInput.classList.add('green')
        document.querySelector('.card-code').classList.remove('wrong')

    }else{
        document.querySelector('.card-code').classList.toggle('wrong')
    }
}


window.addEventListener("load", function(){

    let GameBtn = document.querySelectorAll('.btn');
    for (elem of GameBtn) {
        elem.addEventListener("click", function(){
            document.querySelector('.pop-up_premium').style.display = 'flex'
        })
    }
})

document.querySelector('#close').addEventListener("click", function(){
    document.querySelector('.pop-up_premium').style.display = 'none'
})


function PreInput(){
    let PopUpInput = document.querySelector('.pop-up_premium_content > .input > input').value;

    if (PopUpInput == 'SGROVE') {

        let PrePin = document.querySelector('.flexbox > .premium-pin');
        PrePin.style.display = 'none'

        let GameBtnNone = document.querySelector('.flexbox > .content_items_item_content > .btn');
        GameBtnNone.style.display = 'none'
    
        let GameBtn = document.querySelector('.flexbox > .content_items_item_content > a');
        GameBtn.style.display = 'block'
    
        let RemoveClass = document.querySelector('.flexbox');
        RemoveClass.classList.remove('premium')

        let MenuInput = document.querySelector('.pop-up_premium_content > .input input')

        MenuInput.classList.add('green')

        document.querySelector('.pop-up_premium_content > .input').classList.remove('wrong')

        document.querySelector('.pop-up_premium_content > p').innerHTML = `
        Վերջ արդեն կարող եք խաղալ ձեր խաղը․ սեղմեք փակելու կոճակին և խաղացեք`

    }else if (PopUpInput == 'EXFLOZ') {

        let PrePin = document.querySelector('.js-memory > .premium-pin');
        PrePin.style.display = 'none'

        let GameBtnNone = document.querySelector('.js-memory > .content_items_item_content > .btn');
        GameBtnNone.style.display = 'none'
    
        let GameBtn = document.querySelector('.js-memory > .content_items_item_content > a');
        GameBtn.style.display = 'block'
    
        let RemoveClass = document.querySelector('.js-memory');
        RemoveClass.classList.remove('premium')

        let MenuInput = document.querySelector('.pop-up_premium_content > .input input')

        MenuInput.classList.add('green')

        document.querySelector('.pop-up_premium_content > .input').classList.remove('wrong')

        document.querySelector('.pop-up_premium_content > p').innerHTML = `
        Վերջ արդեն կարող եք խաղալ ձեր խաղը․ սեղմեք փակելու կոճակին և խաղացեք`
    }else{
        document.querySelector('.pop-up_premium_content > .input').classList.toggle('wrong')
    }
}