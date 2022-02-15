
const navExpand = () => {
    const nav1 = document.getElementById("nav-1");
    const nav2 = document.getElementById("nav-2");
    const nav3 = document.getElementById("nav-3");
    const nav4 = document.getElementById("nav-4");
    const nav5 = document.getElementById("nav-5");
    const nav6 = document.getElementById("nav-6");
    const nav7 = document.getElementById("nav-7");
    const nav8 = document.getElementById("nav-8");
    const navBlock1 = document.getElementById("nav-block-1");
    const navBlock2 = document.getElementById("nav-block-2");
    const navBlock3 = document.getElementById("nav-block-3");
    const navBlock4 = document.getElementById("nav-block-4");
    const navBlock5 = document.getElementById("nav-block-5");
    const navBlock6 = document.getElementById("nav-block-6");
    const navBlock7 = document.getElementById("nav-block-7");
    const navBlock8 = document.getElementById("nav-block-8");
    const navList = [nav1, nav2, nav3, nav4, nav5, nav6, nav7, nav8]
    const navBlockList = [navBlock1, navBlock2, navBlock3, navBlock4, navBlock5, navBlock6, navBlock7, navBlock8]

    navList[0].addEventListener('click', () => {
        for (let i = 0; i <= 7; i++) {
            if (i != 0) {
                navBlockList[i].classList.remove("nav-block-visible");
                navList[i].classList.remove("nav-item-active");
            } else {
                navBlockList[0].classList.toggle("nav-block-visible");
                navList[0].classList.toggle("nav-item-active");
            }
        }
    })
    navList[1].addEventListener('click', () => {
        for (let i = 0; i <= 7; i++) {
            if (i != 1) {
                navBlockList[i].classList.remove("nav-block-visible");
                navList[i].classList.remove("nav-item-active");
            } else {
                navBlockList[1].classList.toggle("nav-block-visible");
                navList[1].classList.toggle("nav-item-active");
            }
        }
    })
    navList[2].addEventListener('click', () => {
        for (let i = 0; i <= 7; i++) {
            if (i != 2) {
                navBlockList[i].classList.remove("nav-block-visible");
                navList[i].classList.remove("nav-item-active");
            } else {
                navBlockList[2].classList.toggle("nav-block-visible");
                navList[2].classList.toggle("nav-item-active");
            }
        }
    })
    navList[3].addEventListener('click', () => {
        for (let i = 0; i <= 7; i++) {
            if (i != 3) {
                navBlockList[i].classList.remove("nav-block-visible");
                navList[i].classList.remove("nav-item-active");
            } else {
                navBlockList[3].classList.toggle("nav-block-visible");
                navList[3].classList.toggle("nav-item-active");
            }
        }
    })
    navList[4].addEventListener('click', () => {
        for (let i = 0; i <= 7; i++) {
            if (i != 4) {
                navBlockList[i].classList.remove("nav-block-visible");
                navList[i].classList.remove("nav-item-active");
            } else {
                navBlockList[4].classList.toggle("nav-block-visible");
                navList[4].classList.toggle("nav-item-active");
            }
        }
    })
    navList[5].addEventListener('click', () => {
        for (let i = 0; i <= 7; i++) {
            if (i != 5) {
                navBlockList[i].classList.remove("nav-block-visible");
                navList[i].classList.remove("nav-item-active");
            } else {
                navBlockList[5].classList.toggle("nav-block-visible");
                navList[5].classList.toggle("nav-item-active");
            }
        }
    })
    navList[6].addEventListener('click', () => {
        for (let i = 0; i <= 7; i++) {
            if (i != 6) {
                navBlockList[i].classList.remove("nav-block-visible");
                navList[i].classList.remove("nav-item-active");
            } else {
                navBlockList[6].classList.toggle("nav-block-visible");
                navList[6].classList.toggle("nav-item-active");
            }
        }
    })
    navList[7].addEventListener('click', () => {
        for (let i = 0; i <= 7; i++) {
            if (i != 7) {
                navBlockList[i].classList.remove("nav-block-visible");
                navList[i].classList.remove("nav-item-active");
            } else {
                navBlockList[7].classList.toggle("nav-block-visible");
            }
        }
    })
}

navExpand();

// function myFunction() {
//     var element = document.querySelector(".nav-item");
//     var navBlock = document.querySelector(".nav-block");
//     navBlock.classList.toggle("nav-block-visible");
// }