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
    let allDataHolder = document.querySelector('[data-related-id="' + objID + '"]');
    let currentSliderSection = document.getElementById(objID);
    let currentSidePosition = Number(allDataHolder.getAttribute("data-slider-position"));
    let newPosition = currentSidePosition + direction;
    let allData = allDataHolder.querySelectorAll('i');

    if(newPosition < 0){
        console.log("FIRST ITEM"); 
        return;
    }else if(newPosition < allData.length){       
        allDataHolder.setAttribute("data-slider-position", newPosition);
        let getExistingOnjData = allData.item(newPosition).getAttribute("data-slidedata");
        decodeBaseTemplate = getExistingOnjData.replace(/_@@/g, '"');
        baseTemplateToData = JSON.parse(decodeBaseTemplate);

        currentSliderSection.querySelectorAll(".fade-in").forEach(async (item) => {
            item.classList.remove("fade-in");
            item.classList.add("fade-out");
        });

        setTimeout(() => {
            currentSliderSection.querySelector("h3").innerHTML = baseTemplateToData.h3;
            currentSliderSection.querySelector("h4").innerHTML = baseTemplateToData.h4;
            currentSliderSection.querySelector("img").setAttribute("src", baseTemplateToData.img),
            currentSliderSection.querySelector("p").innerHTML = baseTemplateToData.p;
            currentSliderSection.querySelector(".articleContent .button").innerHTML = baseTemplateToData.button;

            currentSliderSection.querySelector("img").onload = function (){
                currentSliderSection.querySelectorAll(".fade-out").forEach(async (item) => {                
                    item.classList.remove("fade-out");
                    item.classList.add("fade-in"); 
                });

            }

  

        }, 520);

    }else {
        console.log("LAST ITEM");
        return;
    }
}

function listSlide(direction, objID){
    console.log("direction: ", direction," id: ", objID);
    let contentSlider = document.getElementById(objID).querySelector(".slider");
    let contentSliderItemsHolder = contentSlider.querySelector("ul");

    console.log(direction);
    let containerWidth = contentSlider.offsetWidth;
    let containerItemsHolderWidth = contentSliderItemsHolder.offsetWidth;
    let itemWidth = contentSliderItemsHolder.querySelector("li").offsetWidth;
    console.log(containerWidth + " , " + containerItemsHolderWidth);
    var rect = contentSliderItemsHolder.getBoundingClientRect();
    console.log(contentSlider.scrollLeft, rect.y, rect.bottom, itemWidth);
    let step = itemWidth;
    let newPosition = (contentSlider.scrollLeft + (step * direction));
    contentSlider.scrollLeft = newPosition;  
    console.log("newPosition: ", newPosition)






}


//on document ready check it 
navigationWatcher();