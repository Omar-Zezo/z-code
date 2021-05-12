// start Preloader
let preloader = document.getElementById("preloader");
window.onload = function(){

        setTimeout(function(){
            preloader.classList.add("disapper")
        },100)
}
// end Preloader


//start set color from localStorage
let mainColor = localStorage.getItem("color")

if (mainColor !== null){
    document.documentElement.style.setProperty('--mainColor',localStorage.getItem("color"))

    document.querySelectorAll('.color-list li').forEach((item)=>{
        //remove class active from all color list

        item.classList.remove('selected')

        //add class active from all color list

        if (item.dataset.color === localStorage.getItem("color") )

        item.classList.add("selected")
    })

}
//end set color from localStorage

//start check dark mode on local storage
let allSpan = document.querySelectorAll('.dark-mode span');

if (localStorage.getItem("theme") !== null){

    document.body.classList.add(localStorage.getItem("theme"))

    allSpan.forEach((item)=>{

        //remove class active from all span
        item.classList.remove("active")

        //add class active
        if (item.classList[0] === localStorage.getItem("theme")){

            item.classList.add("active")
        }
    })
}
//end check dark mode on local storage

// start Change background randomly
// const landing = document.querySelector('.landing-page');
// let backgroundInterval; 

//     function changeBackground(){

//         backgroundInterval = setInterval(function(){
//             const number = Math.ceil(Math.random() * 3)
//             landing.style.background = `url('../imgs/${number}.jpg')`
//         },5000)
// }
// changeBackground()
// end Change background randomly

// start Box Settings
const settingsBoxIcon = document.querySelector('.settings-box i');
const settingsBox = document.querySelector('.settings-box');

settingsBoxIcon.addEventListener('click',function(){
    this.classList.toggle('fa-spin')
    settingsBox.classList.toggle('open')
})
// end Box Settings

// start Color Switcher
const colors = document.querySelectorAll('.color-list li')

colors.forEach(color=>{
    color.addEventListener('click', (e)=>{
        //Set Color on Root
        document.documentElement.style.setProperty('--mainColor',e.target.dataset.color)
        localStorage.setItem("color", e.target.dataset.color)
        //Remove Class Active from all items
        e.target.parentElement.querySelectorAll('.selected').forEach(element=>{
            element.classList.remove('selected')
        })
        //add active class
        e.target.classList.add('selected')
    })
})
// end Color Switcher

// start add class active to nav link
const links = document.querySelectorAll('header ul li a');
const linksList = Array.from(links)

linksList.forEach(link=>{

    link.addEventListener('click', (e)=>{
        linksList.forEach(ele=>{
            ele.classList.remove('active')
        })
        link.classList.add('active')
    })
})
// start add class active to nav link

// start animat our skills

let ourSkills = document.querySelector('.our-skills');
let progress = document.querySelectorAll('.our-skills span');

window.addEventListener("scroll",function (){

    let ourSkillsOffset = ourSkills.offsetTop;

    if (window.pageYOffset > (ourSkillsOffset + ourSkills.offsetHeight - window.innerHeight)){
        
        progress.forEach(item=>{

            item.style.width = item.dataset.progress
        })

    }
})
// start animat our skills

//start dark mode control
let darkControl = document.querySelectorAll('.dark-mode span');

darkControl.forEach(item=>{

    item.addEventListener('click',(e)=>{

        e.target.parentElement.querySelector('.active').classList.remove('active')
        e.target.classList.add('active')
        if (e.target.classList[0] === "dark" ){

            document.body.setAttribute("class","dark")
        }else{

            document.body.removeAttribute("class","dark")

        }
         //save changes on local storage
         localStorage.setItem("theme",e.target.classList[0])
    })
})
//start dark mode control

// start scroll to top
let scrollToTop = document.querySelector(".scroll");

window.onscroll = function (){

    if (window.pageYOffset > 500){

        scrollToTop.style.display = "block"
    }else{
        scrollToTop.style.display = "none"
    }
}

scrollToTop.addEventListener("click",()=>{

    window.scrollTo(0,0)
})
// end scroll to top

//start show cv
let cv = document.querySelector(".cv");

show = ()=>{cv.style.display = "block"}
// end show cv

// start welcom msg typer
function welcomeMsg(){

    let text  = document.getElementById("text")
    let innerText = "I am Omar Abd El-aziz Front end Developer"
    let counter = 0;
    

        TheTyper = setInterval(function(){

            text.textContent += innerText[counter]
            counter++
        
            if (text.innerHTML.length === innerText.length){
        
                clearInterval(TheTyper)
            }
        
        },120)
}

let powerOff = document.getElementById("power-off");

powerOff.addEventListener('click',function(){

    this.style.pointerEvents = "none"
    this.style.animation = "none"
    welcomeMsg()
    setTimeout(show,5000)
})
// end welcom msg typer

