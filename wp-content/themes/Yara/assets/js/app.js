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

function contentSlide(direction, objID){
    console.log(direction, objID);

    let allDataHolder = document.querySelector('[data-related-id="' + objID + '"]');
    let currentSliderSection = document.getElementById(objID);
    let currentSidePosition = Number(allDataHolder.getAttribute("data-slider-position"));
    console.log(allDataHolder);

    let newPosition = currentSidePosition + direction;
    console.log()
    let allData = allDataHolder.querySelectorAll('i');


    if(newPosition < 0){
        console.log("FIRST ITEM");
        return;


    }else if(newPosition < allData.length){
        console.log("SLIDE NEXT ITEM");
        allDataHolder.setAttribute("data-slider-position", newPosition);


        let getExistingOnjData = allData.item(newPosition).getAttribute("data-slidedata");

        decodeBaseTemplate = getExistingOnjData.replace(/_@@/g, '"');
        baseTemplateToData = JSON.parse(decodeBaseTemplate);
        console.log("DATA DECODE EXISTING OBJECT");
        console.log(baseTemplateToData);

        currentSliderSection.querySelector("h3").innerHTML = baseTemplateToData.h3;
        currentSliderSection.querySelector("h4").innerHTML = baseTemplateToData.h4;
        currentSliderSection.querySelector("img").setAttribute("src", baseTemplateToData.img),
        currentSliderSection.querySelector("p").innerHTML = baseTemplateToData.p;
        currentSliderSection.querySelector(".articleContent .button").innerHTML = baseTemplateToData.button;



    }else {
        console.log("LAST ITEM");
        return;

    }

}


//on document ready check it 
navigationWatcher();