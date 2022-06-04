let MenuMedia = window.matchMedia("(max-width: 560px)");
myFunction(MenuMedia);
MenuMedia.addListener(myFunction);

function myFunction(MenuMedia) {
    if (MenuMedia.matches) {
      document.querySelector('.menu').innerHTML = `
        <div class="mob-menu-opener" onclick="MobMenu()">
            <img src="./images/icons/mob-menu.svg" alt="">
        </div>
        <nav class="mob-menu">
            <img class="mob-close" src="./images/icons/close.svg" alt="close">
            <ul>
                <li><a href="#header"><img src="./images/icons/home.svg" alt=""> Գլխավոր</a></li>
                <li><a href="#games"><img src="./images/icons/game.svg" alt=""> Խաղեր</a></li>
                <li><a href="https://thecodefatherofficial.github.io/main/" target="_blank"><img src="./images/logos/logoblack.png" alt=""> TheCodeFather</a></li>
            </ul>
        </nav>
        
        <div class="card-code">
            <div class="input">
                <img src="./images/icons/enter.svg" alt="" onclick="MenuInputing()">
                <input type="text" name="" id="" placeholder="Ադամանդե կոդը" maxlength="6">
            </div>
        </div>`;

        document.querySelector('.mob-menu-opener').addEventListener("click", function(){
            document.querySelector('.mob-menu').classList.toggle('active')
        })

        document.querySelector('.mob-close').addEventListener("click", function(){
            document.querySelector('.mob-menu').classList.remove('active')
        })

        window.addEventListener("scroll", function(){
            document.querySelector('.mob-menu').classList.remove('active')
        })
    } else {
        document.querySelector('.menu').innerHTML = `
        <div class="menu_logo">
                <img src="./images/logos/tcf-games-logo.png" alt="">
            </div>
            <ul class="menu_main">
                <div class="container">
                    <li><a href="#header"><img src="./images/icons/home.svg" alt=""> Գլխավոր</a></li>
                    <li><a href="#games"><img src="./images/icons/game.svg" alt=""> Խաղեր</a></li>
                    <li><a href="https://thecodefatherofficial.github.io/main/" target="_blank"><img src="./images/logos/logoblack.png" alt=""> TheCodeFather</a></li>

                    <div class="card-code">
                        <label for="">Մուտքագրեք ձեր ադամանդե կոդը</label>
                        <div class="input">
                            <img src="./images/icons/enter.svg" alt="" onclick="MenuInputing()">
                            <input type="text" name="" id="" placeholder="KVBDIO" maxlength="6">
                        </div>
                    </div>
                </div>
            </ul>`
    }
  }