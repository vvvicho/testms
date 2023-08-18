console.log("HELLO");

let resizeProgress = 0, scrollProgress = 0;
let mobileOpenCloseButton = document.getElementById("mobileOpenCloseButton");
let desktopNav = document.getElementById("desktopNav");

if(desktopNav){
    desktopNav.onmouseleave = function(){
        desktopNav.setAttribute("data-status", "0");
        mobileOpenCloseButton.setAttribute("data-status", "0");
    }
}


if(mobileOpenCloseButton){
    mobileOpenCloseButton.onclick = function(){
        console.log(this.getAttribute("data-status"));
        if(this.getAttribute("data-status") == "0"){
            this.setAttribute("data-status", "1");
            desktopNav.setAttribute("data-status", "1");
        }else {
            this.setAttribute("data-status", "0");
            desktopNav.setAttribute("data-status", "0");
        }
    }
}

const assetsPATH = "../HTML/assets";


function navigationWatcher(){
    let generaldivigation = document.getElementById("generaldivigation");

    if(generaldivigation){
        let atfarmLogo = document.getElementById("atfarmLogo"); 
        
        //let lightAtfarmLogoSRC = assetsPATH + "/images/atfarmLogoLight.webp";
        //let darkAtfarmLogoSRC = assetsPATH + "/images/atfarmLogoBlue.webp";
        console.log("Navigation exist");
        console.log(window.scrollY);
        console.log(atfarmLogo.src);
        if(window.scrollY < 21){
            console.log("APPLY DARk STYLE");
            generaldivigation.classList.remove("generaldivigation--lightTheme");
            //atfarmLogo.src = lightAtfarmLogoSRC;
        }else {
            console.log("APPLY WHITe STYLE");

            generaldivigation.classList.add("generaldivigation--lightTheme");
           // atfarmLogo.src = darkAtfarmLogoSRC;

            //generaldivigation--lightTheme
        }

    }else {
        console.log("Navigation Missing")
    }




}


window.onresize = function () {
    if (!resizeProgress) {
        resizeProgress = 1;
        console.log("RESIZE");
        setTimeout(() => {
            resizeProgress = 0;
        }, 20);
    }
}


window.onscroll = function () {
    if (!scrollProgress) {
        scrollProgress = 1;
    console.log("SCROLL");
    navigationWatcher();
    setTimeout(() => {
        scrollProgress = 0;
    }, 20);
    }
}


//on document ready check it 
navigationWatcher();