function returnINPUTtype(data, type) {
    data = data.replace(/\s+/g, ' ');
    if (type == "textarea") {
        return `<textarea rows="4" cols="50">${data}</textarea>`;
    } else {
        return `<input type="${type}" value="${data}">`;
    }
}

let gallerHolder = document.getElementById("mainGalleryHolder");
let sellectedImage = "";
let isBgImage = 0;
let allImagesContainers = "";// gallerHolder.querySelectorAll(".mainGalleryHolder__scroller ul li");
let gallerySaveResult = document.getElementById("gallerySaveResult");
let objectToUpdateSRC;

function updateSellectedImage() {
    isBgImage ? objectToUpdateSRC.setAttribute("style", "background-image:url('" + sellectedImage + "')") :
        objectToUpdateSRC.setAttribute("src", sellectedImage);
    hideGalleryImages();
}

//gallerySaveResult.onclick = () => { updateSellectedImage() };

function clearAllImagesStatus() {
    allImagesContainers.forEach(async (item) => {
        item.classList.remove("--sellected");
    });
}

function showGalleryImages() {
    console.log("IMAGES EDITOR HERE");
    sellectedImage = "";
    document.querySelector("#upload-button").click();
    // clearAllImagesStatus();
    // gallerHolder.classList.remove("mainGalleryHolder--hidden");
}

function hideGalleryImages() {
    gallerHolder.classList.add("mainGalleryHolder--hidden");
}

function sellectAnImage(obj) {
    sellectedImage = obj.querySelector("img").getAttribute("src");
    clearAllImagesStatus();
    obj.classList.add("--sellected");
}

//allImagesContainers.forEach(async (item) => { item.onclick = () => { sellectAnImage(item) } });
let headerItems = [], sectionItems = [], footerItems = [];

function scrollToTop(xLocation) {


    document.querySelector(".adminHolder--mainContent").scrollTop = xLocation;
}

function saveTextBox(obj) {
    obj.onclick = null;
    obj.querySelector('input') ?
        obj.innerHTML = obj.querySelector('input').value :
        obj.innerHTML = obj.querySelector('textarea').value;
    setTimeout(() => { obj.onclick = function () { editTextBox(this) } }, 200);
}
function iconbuilder(icon) {
    return `<div class='adminTools icon icon--${icon}'></div>`;
}

function editTextBox(obj) {
    let saveIconHTTML = iconbuilder("save");
    let deleteIiconHTML = cloneIconHTML = "";
    let objATT = obj.getAttribute("data-edit");
    obj.onclick = null;
    objATT.includes("duplicate") ? cloneIconHTML = iconbuilder("clone") : 0;
    objATT.includes("delete") ? deleteIiconHTML = iconbuilder("delete") : 0;
    obj.innerHTML = returnINPUTtype(obj.innerHTML, "textarea") + "<iconPannel class='adminTools'>" + saveIconHTTML + cloneIconHTML + deleteIiconHTML + "</iconPannel>";
    obj.querySelector(".icon--save").onclick = () => { saveTextBox(obj) };
    objATT.includes("delete") ? obj.querySelector(".icon--delete").onclick = () => { obj.remove() } : 0;
    if (objATT.includes("duplicate")) {
        obj.querySelector(".icon--clone").onclick = function () {
            let newElement = obj.cloneNode(true);
            obj.parentNode.insertBefore(newElement, obj.nextSibling);
            saveTextBox(newElement);
            newElement.onclick = () => { editTextBox(newElement) }
        }
    }
}

function duplicateItem(obj) {

    let newElement = obj.cloneNode(true);
    obj.parentNode.insertBefore(newElement, obj.nextSibling);
    newElement.querySelectorAll(".adminTools, .adminBgEdit").forEach(async (item) => {
        item.remove();
    });
    prapareForEditing(newElement, 0);

    let allColorsIcons = "";
    allBGcolors.forEach(async (color) => {
        allColorsIcons += `<li class="sectionBGcolor" data-color="${color.color}" data-style="${color.style}"><div style="background-color: ${color.color};"></div></li>`
    });



    let iconsPannel = document.createElement("iconPannel");
    iconsPannel.classList.add("adminTools");
    iconsPannel.innerHTML = `${iconbuilder("clone")}${iconbuilder("delete")}<div class="objectBGcolors"><ul>${allColorsIcons}</ul></div>`;

    newElement.appendChild(iconsPannel);

    iconsPannel.querySelector(".icon--delete").onclick = () => {
        newElement.remove();
    }
    iconsPannel.querySelector(".icon--clone").onclick = () => {
        duplicateItem(newElement);
    }

    console.log("BWEGIN ITEM COLORS2");
    iconsPannel.querySelectorAll(".objectBGcolors ul li").forEach(async (colorIcon) => {

        colorIcon.onclick = () => {
            setBgItemColor(newElement, colorIcon);
        }
    });




}

function saveButtonSettings(obj) {
    obj.onclick = null;
    let buttonTitle = obj.querySelector("input").value;
    buttonTitle = buttonTitle.replace(/\s+/g, ' ');
    let buttonTarget = obj.querySelector("select").value;
    buttonTarget = buttonTarget.replace(/\s+/g, ' ');
    let buttonLink = obj.querySelector("textarea").value;
    buttonLink = buttonLink.replace(/\s+/g, ' ');
    obj.innerHTML = `<datalink data-href="${buttonLink}" target="${buttonTarget}">${buttonTitle}</datalink>`;
    setTimeout(() => { obj.onclick = function () { buttonSetUp(this) } }, 200);
}

function buttonSetUp(obj) {
    obj.onclick = null;
    let saveIconHTTML = iconbuilder("save");
    let deleteIiconHTML = "";
    let objATT = obj.getAttribute("data-edit");
    !obj.querySelector("datalink") ? obj.innerHTML = `<datalink data-href="https://google.com" target="">${obj.innerHTML}</datalink>` : 0;
    obj.querySelector("datalink").getAttribute("target") ? isBlank = 1 : isBlank = 0;
    objATT.includes("delete") ? deleteIiconHTML = iconbuilder("delete") : 0;
    obj.innerHTML = `<label>Button Text:</label>
        <input type="text" value="${obj.querySelector("datalink").innerHTML}"/></br>
        <label>Button Target:</label>
        <select>
        <option value="">Self</option>
        <option value="_blank">New Window</option>
        </select></br>
        <label>Button Link:</label>
        <textarea rows="2" cols="30">${obj.querySelector("datalink").getAttribute("data-href")}</textarea>
        <iconPannel class='adminTools'>${saveIconHTTML} ${deleteIiconHTML}</iconPannel>`;
    isBlank ? obj.querySelector("select option[value='_blank']").selected = 'selected' : 0;
    obj.querySelector(".icon--save").onclick = () => { saveButtonSettings(obj) };
    objATT.includes("delete") ? obj.querySelector(".icon--delete").onclick = () => { obj.remove() } : 0;
}

function saveSectionSettings(obj, sectionToEdit) {
    obj.querySelector("adminfooter").remove();
    obj.classList.add("normal");
    obj.querySelectorAll(".icon--save").forEach(async (element) => {
        element.click();
    })
    showHideElements(1);
    setTimeout(() => {
        obj.querySelectorAll(".swapPositionPannel .icon--edit").onclick = function () {
            prapareForEditing(this, sectionToEdit);
        }
    }, 200);
    sectionToEdit.HTML = obj.innerHTML;
}

function showHideElements(state) {
    if (!state) {
        let allElements = document.querySelectorAll(".adminHolder .normal, .swapPositionPannel, .adminHolder--leftNav, .adminHolder--footer");
        allElements.forEach(async (element) => {
            element.classList.add("hidden");
        });

        // document.querySelector(".adminHolder--leftNav").classList.add("hidden");
        // document.querySelector(".adminHolder--footer").classList.add("hidden");
        document.querySelector(".adminHolder--mainContent").classList.add("removeMargin");

        //icons and pannels 
        // adminBgEdit ,sectionBGcolor


    } else {
        let allEditableItems = document.querySelector(".adminHolder--mainContent").querySelectorAll('[data-edit="background"],[data-edit*="text"],[data-edit*="button"],[data-edit*="image"],[data-edit*="ltr"],[data-edit*="duplicateItem"]');
        allEditableItems.forEach(async (item) => {
            item.onclick = null;
            if (item.getAttribute("data-edit") == "background" || item.getAttribute("data-edit").includes("image") || item.getAttribute("data-edit").includes("duplicateItem")) {
                let allIcons = item.querySelectorAll(".adminBgEdit, .adminTools");
                allIcons.forEach(async (icon) => {
                    icon.remove();
                });
            }
        });
        let alladminPannels = document.querySelectorAll(".adminBgEdit, .sectionBGcolor, .collorsPannel");
        alladminPannels.forEach(async (element) => {
            element.remove();
        });
        document.querySelector(".swapPositionPannel").classList.remove("hidden");
        document.querySelector(".adminHolder--leftNav").classList.remove("hidden");
        document.querySelector(".adminHolder--footer").classList.remove("hidden");
        document.querySelector(".adminHolder--mainContent").classList.remove("removeMargin");
        let allElements = document.querySelectorAll(".adminHolder .hidden");
        allElements.forEach(async (element) => {
            element.classList.remove("hidden");
        });
    }
}

function savepSpetial(obj) {
    console.log("SAVE SPETIAL");
    obj.onclick = null;
    obj.removeAttribute("style");
    let title = obj.querySelector("input").value;
    title = title.replace(/\s+/g, ' ');
    let content = obj.querySelector("textarea").value;
    content = content.replace(/\s+/g, ' ');
    obj.innerHTML = `<span><strong>${title}</strong></br><i>${content}</i></span>`;
    setTimeout(() => { obj.onclick = function () { editpSpetial(this) } }, 200);
}

icosFlagsList = ["bg", "dk", "de", "ee", "uk", "es", "fr", "lv", "lt", "no", "pl", "pt", "ro", "fi", "se", "ua", "ar", "mx", "br", "cf", "za", "it"];
//icosFlagsList = ["bg", "dk", "de" ,      "uk", "it", "fr", "uk", "it", "fr"];

function returnFlagsList() {
    let flagsList = "";
    icosFlagsList.forEach(async (flag) => {
        flagsList += `<li data-icon="${flag}" class="flafIcons flafIcons--${flag}"></li>`;
    });
    return `<ul class="flagListHolder">${flagsList}</ul>`;
}

function editpSpetial(obj) {
    console.log("EDIT SPETIAL");
    obj.onclick = null;
    let saveIconHTTML = iconbuilder("save");
    let deleteIiconHTML = "";
    let objATT = obj.getAttribute("data-edit");
    objATT.includes("delete") ? deleteIiconHTML = iconbuilder("delete") : 0;
    obj.style.display = "block";
    obj.innerHTML = `${returnFlagsList()}
    <label>Title:</label>
    <input type="text" value='${obj.querySelector("span strong").innerHTML}'/></br>
    <label>Content:</label>
    <textarea rows="2" cols="30">${obj.querySelector("span i").innerHTML}</textarea>
    <iconPannel class='adminTools'>${saveIconHTTML} ${deleteIiconHTML}</iconPannel>`;
    obj.querySelector(".icon--save").onclick = () => { savepSpetial(obj) };
    obj.querySelectorAll(".flagListHolder li").forEach(async (flag) => {
        flag.onclick = () => { obj.removeAttribute("class"); obj.classList.add("flafIcons", "flafIcons--" + flag.getAttribute("data-icon"), "spParagraf") };
    });
    objATT.includes("delete") ? obj.querySelector(".icon--delete").onclick = () => { obj.remove() } : 0;
}

let allBGcolors =
    [
        { style: "bgColors--sectionLNormal", color: "#FFFFFF" },
        { style: "bgColors--sectionLight", color: "#F3F6F9" },
        { style: "galleryItem--bgColorYello", color: "#f1f2de" },
        { style: "galleryItem--bgColorWhite", color: "#FFFFFF" }
    ]
    ;

function swapNodes(node1, node2) {
    const afterNode2 = node2.nextElementSibling;
    const parent = node2.parentNode;
    node1.replaceWith(node2);
    parent.insertBefore(node1, afterNode2);
}

function swapNodePositions(obj, direction) {
    let objectIndex = Array.prototype.slice.call(obj.parentElement.children).indexOf(obj);
    if (objectIndex > 0 && !direction) {
        swapNodes(obj.parentElement.children[objectIndex - 1], obj.parentElement.children[objectIndex]);
    } else if ((objectIndex + 1) < obj.parentElement.children.length && direction) {
        swapNodes(obj.parentElement.children[objectIndex], obj.parentElement.children[objectIndex + 1]);
    }
}

function returnRandom(int) {
    let x = Math.floor((Math.random() * int) + 1);
    return x;
}



function setBgItemColor(obj, colorHolder) {

    allBGcolors.forEach(async (color) => {
        obj.classList.remove(color.style)
    });
    obj.classList.add(colorHolder.getAttribute("data-style"));
}


function sliderContentBuilder(direction, objID, saveState) {

    let allDataHolder = document.querySelector('[data-related-id="' + objID + '"]');
    let currentSliderSection = document.getElementById(objID);
    let currentSidePosition = Number(allDataHolder.getAttribute("data-slider-position"));

    let newPosition = currentSidePosition + direction;
    let allData = allDataHolder.querySelectorAll('i');

    let baseTemplate = allDataHolder.querySelector("strong").getAttribute("data-slidedata-template");

    //baseTemplate = baseTemplate.replace(/_@@/g, '"');
    //let baseTemplateToData = JSON.parse(baseTemplate);

    console.log("BASE TEMPLATE: " + baseTemplate);
    console.log("BASE TEMPLATE: TO DATA ");
    // console.log(baseTemplateToData);

    console.log("CURRENT SECTION");
    console.log(currentSliderSection);
    console.log(currentSliderSection.querySelector("h3").innerHTML);
    console.log(currentSliderSection.querySelector("h4").innerHTML);
    console.log(currentSliderSection.querySelector("img").getAttribute("src"));

    let currentObjData = {
        h3: currentSliderSection.querySelector("h3").innerHTML,
        h4: currentSliderSection.querySelector("h4").innerHTML,
        img: currentSliderSection.querySelector("img").getAttribute("src"),
        p: currentSliderSection.querySelector("p").innerHTML,
        button: currentSliderSection.querySelector(".articleContent .button").innerHTML,
    };


    console.log("PREPARE CURRENT OBJECT FOR SAVE");
    console.log(currentObjData);

    currentObjData = JSON.stringify(currentObjData);
    currentObjData = currentObjData.replace(/["']/g, "_@@");

    console.log("CURRENT OBJECT AFTER ESKAPE");
    console.log(currentObjData);


    // if (updatecontent) {
    allData.item(currentSidePosition).setAttribute("data-slidedata", currentObjData);
    // }









    console.log(allData);


    console.log(currentSidePosition);
    console.log("PRINT 1st child");
    console.log(allData.item(0));


    if (saveState == 1) {
        newPosition = 0;
        currentSliderSection.querySelector(".articleNavigation .icons-navLeft").setAttribute("onclick", "contentSlide(-1," + objID + ")");
        currentSliderSection.querySelector(".articleNavigation .icons-navRight").setAttribute("onclick", "contentSlide(1," + objID + ")")
    }


    if (newPosition < 0) {
        console.log("do nothing it is 1st item");
        newPosition = 0;
        document.querySelector(".slideCounter").innerHTML = newPosition + 1;
        return;
    }

    console.log("CREATE NEW ITEM");
    console.log(allData.length);
    console.log(newPosition);

    let decodeBaseTemplate, baseTemplateToData;

    if (newPosition > (allData.length - 1)) {


        let newDataItemHolder = document.createElement("i");
        newDataItemHolder.classList.add("sliderDataHolder");
        newDataItemHolder.setAttribute("data-slidedata", baseTemplate);
        allDataHolder.appendChild(newDataItemHolder);

        decodeBaseTemplate = baseTemplate.replace(/_@@/g, '"');
        baseTemplateToData = JSON.parse(decodeBaseTemplate);
        console.log("DATA DECODE BASE");
        console.log(baseTemplateToData);

        currentSliderSection.querySelector("h3").innerHTML = baseTemplateToData.h3;
        currentSliderSection.querySelector("h4").innerHTML = baseTemplateToData.h4;
        currentSliderSection.querySelector("img").setAttribute("src", baseTemplateToData.img),
            currentSliderSection.querySelector("p").innerHTML = baseTemplateToData.p;
        currentSliderSection.querySelector(".articleContent .button").innerHTML = baseTemplateToData.button;


        allDataHolder.setAttribute("data-slider-position", newPosition);
        document.querySelector(".slideCounter").innerHTML = newPosition + 1;
    } else {
        console.log("show curent existing item");
        allDataHolder.setAttribute("data-slider-position", newPosition);
        document.querySelector(".slideCounter").innerHTML = newPosition + 1;

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


    }
    console.log("NEW POSITION: " + newPosition);



    console.log(direction, objID);

    allData.forEach(async (item, index) => {
        console.log(item);
    });

}




function prapareForEditing(obj, sectionToEdit) {
    obj.classList.remove("normal");
    obj.onclick = null;


    showHideElements(0);
    if (obj.querySelector(".section")) {
        let collorsPannel = document.createElement("div");
        collorsPannel.classList.add("collorsPannel");
        let allColorsIcons = "";
        allBGcolors.forEach(async (color) => {
            allColorsIcons += `<li class="sectionBGcolor" data-color="${color.color}" data-style="${color.style}"><div style="background-color: ${color.color};"></div></li>`
        });
        collorsPannel.innerHTML = `<ul>${allColorsIcons}</uk>`;
        obj.appendChild(collorsPannel);
        collorsPannel.querySelectorAll(".sectionBGcolor").forEach(async (color) => {
            color.onclick = () => {
                allBGcolors.forEach(async (color) => {
                    obj.querySelector(".section").classList.remove(color.style)
                });
                obj.querySelector(".section").classList.add(color.getAttribute("data-style"));
            }
        });
    }


    let checkCallToAction = obj.querySelector('[data-callToAction="contentSlider"]'); //
    let objSectionID;
    console.log("CALL TO ACTION", checkCallToAction);

    if (checkCallToAction) {
        let idBuilder = returnRandom(100) + Date.now();
        console.log("The NEW ID is: " + idBuilder);

        objSectionID = checkCallToAction.getAttribute("id");

        if (objSectionID) {
            console.log("has an id: " + objSectionID);

        } else {
            objSectionID = idBuilder;
            console.log("set NEW id: " + objSectionID);
            checkCallToAction.setAttribute("id", objSectionID);

            //data-slider-dataholder="1"
        }
        let objDataHolder = checkCallToAction.querySelector('[data-slider-dataholder="1"]');
        objDataHolder.setAttribute("data-Related-id", objSectionID);

        let leftContentSliderButton = checkCallToAction.querySelector('.articleNavigation .icons-navLeft');
        let righttContentSliderButton = checkCallToAction.querySelector('.articleNavigation .icons-navRight');


        leftContentSliderButton.onclick = () => {
            sliderContentBuilder(-1, objSectionID);
        }
        righttContentSliderButton.onclick = () => {
            sliderContentBuilder(1, objSectionID);
        }

    }





    let swapPositions = obj.querySelector('[data-edit*="ltr"]');
    if (swapPositions) {
        swapPositions.classList.add("adminRelative");
        let swapIcon = document.createElement("div");
        swapIcon.classList.add("icon", "icon--ltr", "adminBgEdit");
        swapIcon.onclick = () => { swapPositions.classList.contains('ltr') ? swapPositions.classList.remove('ltr') : swapPositions.classList.add('ltr') }
        swapPositions.appendChild(swapIcon);
    }

    let alltexts = obj.querySelectorAll('[data-edit*="text"]');
    alltexts.forEach(async (text) => { text.onclick = () => { editTextBox(text) } });



    //duplicateItem

    let allduplicateItem = obj.querySelectorAll('[data-edit*="duplicateItem"]');
    let allColorsIcons = "";
    allBGcolors.forEach(async (color) => {
        allColorsIcons += `<li class="sectionBGcolor" data-color="${color.color}" data-style="${color.style}"><div style="background-color: ${color.color};"></div></li>`
    });




    allduplicateItem.forEach(async (item) => {
        item.classList.add("adminRelative");
        let iconsPannel = document.createElement("iconPannel");
        iconsPannel.classList.add("adminTools", "clonePannel");
        iconsPannel.innerHTML = `${iconbuilder("clone")}${iconbuilder("delete")}<div class="objectBGcolors"><ul>${allColorsIcons}</ul></div>`;
        item.appendChild(iconsPannel);
        iconsPannel.querySelector(".icon--delete").onclick = () => {
            item.remove();
        }
        iconsPannel.querySelector(".icon--clone").onclick = () => {
            duplicateItem(item);
        }
        console.log("BWEGIN ITEM COLORS");
        iconsPannel.querySelectorAll(".objectBGcolors ul li").forEach(async (colorIcon) => {

            colorIcon.onclick = () => {
                setBgItemColor(item, colorIcon);
            }

        });
    });

    let allbgImages = obj.querySelectorAll('[data-edit="background"]');
    allbgImages.forEach(async (image) => {
        image.classList.add("adminRelative");
        let imageEditIcon = document.createElement("div");
        imageEditIcon.classList.add("icon", "icon--edit", "adminBgEdit");
        imageEditIcon.onclick = () => {
            isBgImage = 1;
            objectToUpdateSRC = image;
            showGalleryImages();
        }
        image.appendChild(imageEditIcon);
    });

    let allpSpetial = obj.querySelectorAll('[data-edit*="pSpetial"]');
    allpSpetial.forEach(async (text) => { text.onclick = () => { editpSpetial(text) } });

    //data-edit="pSpetial"



    let allImages = obj.querySelectorAll('[data-edit*="image"]');
    allImages.forEach(async (image) => {
        image.classList.add("adminRelative");
        let imageEditIcon = document.createElement("div");
        imageEditIcon.classList.add("icon", "icon--edit", "adminBgEdit");
        imageEditIcon.onclick = function () {
            isBgImage = 0;
            objectToUpdateSRC = image.querySelector("img");
            showGalleryImages();
        }
        image.appendChild(imageEditIcon);
        if (image.getAttribute('data-edit').includes("delete")) {
            let imageDeleteIcon = document.createElement("div");
            imageDeleteIcon.classList.add("icon", "icon--delete", "adminBgEdit");
            imageDeleteIcon.style.left = "55px";
            imageDeleteIcon.onclick = function () {
                image.remove()
            }
            image.appendChild(imageDeleteIcon);
        }
    });

    let allButtons = obj.querySelectorAll('[data-edit*="button"]');
    allButtons.forEach(async (button) => {
        button.onclick = function () {
            buttonSetUp(button);
        }
    });

    if (sectionToEdit) {
        let letSectionAdminFooter = document.createElement("ADMINFOOTER");
        let callToActionButtonsSet = "";

        if (checkCallToAction) {
            callToActionButtonsSet =`
                <div class="button slideCounter button-light" data-edit="button" style="float:left; margin-right:10px">1</div>
                <div class="button button-delete-slide button-light" data-edit="button" style="float:left">Delete Slider Item</div>            
            `


        }


        letSectionAdminFooter.innerHTML = `
        <div class="button button-save button-dark" data-edit="button">Save Section</div>       
        ${callToActionButtonsSet}
        <div class="button button-delete button-light" data-edit="button" style="float:right">Delete Section</div>`;
        obj.appendChild(letSectionAdminFooter);
        let sectionSaveButton = obj.querySelector("adminfooter .button-save");
        sectionSaveButton.onclick = function () {
            if (checkCallToAction) {
                console.log("SAVE THE THINKY SECTION");
                sliderContentBuilder(-10, objSectionID, 1);
            }
            saveSectionSettings(obj, sectionToEdit);
        }

        let sliderDeleteButton = obj.querySelector("adminfooter .button-delete-slide");

        sliderDeleteButton.onclick = function () {
            if (checkCallToAction) {


                console.log("DELETE SLIDE ITEM");

                let currentSliderID = obj.querySelector(".section").getAttribute("id");

                let allDataHolder = document.querySelector('[data-related-id="' + currentSliderID + '"]');
                let currentSliderSection = document.getElementById(currentSliderID);
                let currentSidePosition = Number(allDataHolder.getAttribute("data-slider-position"));
                let allData = allDataHolder.querySelectorAll('i');


                let curentSlideItem = allData.item(currentSidePosition);
                if (curentSlideItem) {
                    console.log(currentSidePosition, " object exists", curentSlideItem);
                    if (currentSidePosition > 0) {
                        allData.item(currentSidePosition).remove();


                        newPosition = 0;

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

                        document.querySelector(".slideCounter").innerHTML = newPosition + 1;
                        allDataHolder.setAttribute("data-slider-position", "0");
                        currentSidePosition = 0;





                    }
                } else {
                    console.log(currentSidePosition, " object NOT! exists", curentSlideItem);
                }





                console.log(currentSliderID);




                // sliderContentBuilder(-10, objSectionID, 1);

            }


        }



        let sectionDeleteButton = obj.querySelector("adminfooter .button-delete");
        sectionDeleteButton.onclick = function () {
            saveSectionSettings(obj, sectionToEdit);
            obj.remove();
        }
    }
}


function getOffset(el) {
    var rect = el.getBoundingClientRect();
    return {
        left: rect.left + window.scrollX,
        top: rect.top + window.scrollY
    };
}

function insertMySection(obj) {
    let template = obj.querySelector('templateHidden');
    let mainSectionsHolder = document.querySelector('main');
    let templateType = template.getAttribute('data-head');
    let templateRepeat = template.getAttribute('data-repeat');
    let templateUsed = template.getAttribute('data-used');
    let dataObject = {};
    if (templateType == "1" && templateUsed == "0") {
        scrollToTop(0);
        dataObject = {};
        let headerItem = document.createElement("HEADERITEM");
        headerItem.classList.add("normal");
        headerItem.innerHTML = template.innerHTML;
        mainSectionsHolder.parentElement.insertBefore(headerItem, mainSectionsHolder.parentElement.children[0]);
        dataObject.Name = "Hero Section";
        dataObject.item = headerItem;
        dataObject.HTML = template.innerHTML;
        headerItems.push(dataObject);
        let thisObject = headerItems[headerItems.length - 1].item;
        let sectionToEdit = headerItems[headerItems.length - 1];
        //thisObject.onclick = function () {
        //    prapareForEditing(thisObject, sectionToEdit);
        //}

        let swapPositionPannel = document.createElement("div");
        swapPositionPannel.classList.add("swapPositionPannel");
        swapPositionPannel.innerHTML = iconbuilder("edit");
        thisObject.appendChild(swapPositionPannel);

        swapPositionPannel.querySelector(".icon--edit").onclick = () => {
            prapareForEditing(thisObject, sectionToEdit);
        }



        template.setAttribute('data-used', '1');
    } else if (templateType == "0") {
        dataObject = {};
        let sectionItem = document.createElement("SECTIONITEM");
        sectionItem.classList.add("normal");
        sectionItem.innerHTML = template.innerHTML;
        mainSectionsHolder.appendChild(sectionItem);
        dataObject.Name = "Content Section";
        dataObject.item = sectionItem;
        dataObject.HTML = template.innerHTML;
        sectionItems.push(dataObject);
        let thisObject = sectionItems[sectionItems.length - 1].item;
        let sectionToEdit = sectionItems[sectionItems.length - 1];
        // thisObject.onclick = function () {
        // prapareForEditing(thisObject, sectionToEdit);
        // }


        let swapPositionPannel = document.createElement("div");
        swapPositionPannel.classList.add("swapPositionPannel");
        swapPositionPannel.innerHTML = iconbuilder("up") + iconbuilder("down") + iconbuilder("edit");
        thisObject.appendChild(swapPositionPannel);


        swapPositionPannel.querySelector(".icon--edit").onclick = () => {
            prapareForEditing(thisObject, sectionToEdit);
        }

        swapPositionPannel.querySelector(".icon--up").onclick = () => {
            console.log("SWAP POSITIONS");
            swapNodePositions(thisObject, 0);
        }
        swapPositionPannel.querySelector(".icon--down").onclick = () => {
            console.log("SWAP POSITIONS");
            swapNodePositions(thisObject, 1);
        }



        setTimeout(() => {
            scrollToTop(getOffset(sectionItem).top);
        }, 200);
    }
}