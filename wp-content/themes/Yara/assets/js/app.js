let resizeProgress = 0, scrollProgress = 0;
let mobileOpenCloseButton = document.getElementById("mobileOpenCloseButton");
let desktopNav = document.getElementById("desktopNav");
desktopNav.setAttribute("data-status", "0");

if(desktopNav){
    desktopNav.onmouseleave = function(){
        desktopNav.setAttribute("data-status", "0");
        mobileOpenCloseButton.setAttribute("data-status", "0");
    }
}


if(mobileOpenCloseButton){
    mobileOpenCloseButton.onclick = function(){    
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


        if(window.scrollY < 21){          
            generaldivigation.classList.remove("generaldivigation--lightTheme");          
        }else {         

            generaldivigation.classList.add("generaldivigation--lightTheme");
        }

    }else {
        console.log("Navigation Missing")
    }




}


window.onresize = function () {
    if (!resizeProgress) {
        resizeProgress = 1; 
        setTimeout(() => {
            resizeProgress = 0;
        }, 20);
    }
}


window.onscroll = function () {
    if (!scrollProgress) {
        scrollProgress = 1;
    navigationWatcher();
    setTimeout(() => {
        scrollProgress = 0;
    }, 20);
    }
}


//on document ready check it 
navigationWatcher();