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
    document.querySelector(".adminHolder--mainContent").scrollTo({ top: xLocation, behavior: 'smooth' })
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
    console.log("dupe item");
    let newElement = obj.cloneNode(true);
    obj.parentNode.insertBefore(newElement, obj.nextSibling);
    newElement.querySelectorAll(".adminTools, .adminBgEdit").forEach(async (item) => {
        item.remove();
    });
    prapareForEditing(newElement, 0);

    let iconsPannel = document.createElement("iconPannel");
    iconsPannel.classList.add("adminTools");
    iconsPannel.innerHTML = `${iconbuilder("clone")}${iconbuilder("delete")}`;
    newElement.appendChild(iconsPannel);

    iconsPannel.querySelector(".icon--delete").onclick = () => {
        newElement.remove();
    }
    iconsPannel.querySelector(".icon--clone").onclick = () => {
        duplicateItem(newElement);
    }
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
    showHideElements(1);
    setTimeout(() => {
        obj.onclick = function () {
            prapareForEditing(this, sectionToEdit);
        }
    }, 200);
    sectionToEdit.HTML = obj.innerHTML;
}

function showHideElements(state) {
    if (!state) {
        let allElements = document.querySelectorAll(".adminHolder .normal");
        allElements.forEach(async (element) => {
            element.classList.add("hidden");
        });
        document.querySelector(".adminHolder--leftNav").classList.add("hidden");
        document.querySelector(".adminHolder--footer").classList.add("hidden");
        document.querySelector(".adminHolder--mainContent").classList.add("removeMargin");
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

icosFlagsList = ["uk", "it", "fr", "uk", "it", "fr"];

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

function prapareForEditing(obj, sectionToEdit) {
    obj.classList.remove("normal");
    obj.onclick = null;
    showHideElements(0);
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
    allduplicateItem.forEach(async (item) => {
        item.classList.add("adminRelative");
        let iconsPannel = document.createElement("iconPannel");
        iconsPannel.classList.add("adminTools");
        iconsPannel.innerHTML = `${iconbuilder("clone")}${iconbuilder("delete")}`;
        item.appendChild(iconsPannel);
        iconsPannel.querySelector(".icon--delete").onclick = () => {
            item.remove();
        }
        iconsPannel.querySelector(".icon--clone").onclick = () => {
            duplicateItem(item);
        }
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
        letSectionAdminFooter.innerHTML = '<div class="button button-dark" data-edit="button">Save Section</div>';
        obj.appendChild(letSectionAdminFooter);
        let sectionSaveButton = obj.querySelector("adminfooter .button");
        sectionSaveButton.onclick = function () {
            saveSectionSettings(obj, sectionToEdit);
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
        thisObject.onclick = function () {
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
        thisObject.onclick = function () {
            prapareForEditing(thisObject, sectionToEdit);
        }
        setTimeout(() => {
            scrollToTop(getOffset(sectionItem).top);
        }, 200);
    }
}