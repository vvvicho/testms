console.log(advanced_script_vars.pluginDirUrl);
console.log(advanced_script_vars.yaraPreventCache);
console.log(advanced_script_vars.activeTheme);



let isPageEditor = document.querySelector("body").classList.contains("post-type-page");
isPageEditor ? console.log("isPageEditor") : console.log("iit is not sPageEditor");

let findAbutton;
let findContentHolder;
let yaraPageEditorHead = document.createElement("div");
let themeURL = advanced_script_vars.activeTheme;

yaraPageEditorHead.id = "yaraPageEditorHead";
yaraPageEditorHead.classList.add("yaraPageEditorHead");
yaraPageEditorHead.innerHTML =
    `
<div class="generaldivigation" id="generaldivigation">
<div class="logoHolder">
            <h1>
                <a href="javascript:;"><img src="${themeURL}/assets/images/YaraLogo.webp?v=25" width="48" height="48" alt="Yara Digital Products"></a>
            </h1>
            <h2>
                <a href="javascript:;"><img src=${themeURL}/assets/images/pixel.png?v=45" id="atfarmLogo" width="162" height="48" alt="Atfarm"></a>
            </h2>
        </div>      
        <div class="navLeftButtons">            
            <div class="button button-dark" id='yaraLoadPageBuilder'>Yara Builder</div>
        </div>
    </div>
`;

let yaraPageEditorHolder = document.createElement("div");
yaraPageEditorHolder.id = "yaraPageEditorHolder";
yaraPageEditorHolder.classList.add("yaraPageEditorHolder", "hidden");
yaraPageEditorHolder.onclick = null;
yaraPageEditorHolder.style.zIndex = getMaxZIndex() + 100;


//document.querySelector("body").appendChild(yaraPageEditorHolder);



let adminHolder = document.createElement("div");
adminHolder.setAttribute("data-type", "adminHolder");
adminHolder.classList.add("adminHolder");
adminHolder.innerHTML = `
<form method="post" class="hidden" style="display:none">
    <input id="image-url" type="text" name="image" />
    <input id="upload-button" type="button" class="button" value="Upload Image" />
    <input type="submit" value="Submit" />
</form>
<div class="adminHolder--leftNav" data-type="adminHolder--leftNav">LEFT NAV</div>
<div class="adminHolder--mainContent" data-type="adminHolder--mainContent">
<main></main>
<div class="adminHolder--footer" data-type="adminHolder--footer">
<div class="adminHolder--footer--saveButton button button-dark">? CLOSE PAGE BUILDER</div>
</div>
</div>`;


// yaraPageEditorHolder.appendChild(adminHolder);



let adminFooterHTML =
    `
<div class="adminHolder--footer" data-type="adminHolder--footer">
<div class="adminHolder--footer--saveButton button button-dark">CLOSE PAGE BUILDER</div>
</div>
`;


//jQuery(document).ready(function ($) {

/*
var mediaUploader;
$('#upload-button').click(function (e) {
    e.preventDefault();
    yaraPageEditorHolder.classList.add("hidden");
    // If the uploader object has already been created, reopen the dialog
    if (mediaUploader) {
        mediaUploader.open();
        return;
    }
    // Extend the wp.media object
    mediaUploader = wp.media.frames.file_frame = wp.media({
        title: 'Choose Image',
        button: {
            text: 'Choose Image'
        }, multiple: false
    });

    // When a file is selected, grab the URL and set it as the text field's value
    mediaUploader.on('select', function () {
        attachment = mediaUploader.state().get('selection').first().toJSON();
        $('#image-url').val(attachment.url);
        isBgImage ? objectToUpdateSRC.setAttribute("style", "background-image:url('" + attachment.url + "')") :
            objectToUpdateSRC.setAttribute("src", attachment.url);
        yaraPageEditorHolder.classList.remove("hidden");
    });
    // Open the uploader dialog
    mediaUploader.open();
});
*/

//});

function getMaxZIndex() {
    return Math.max(
        ...Array.from(document.querySelectorAll('body *'), el =>
            parseFloat(window.getComputedStyle(el).zIndex),
        ).filter(zIndex => !Number.isNaN(zIndex)),
        0,
    );
}

let myPageInnerHTML = "";
let myPageInnerHTMLholderID = "";

function getBuilderScripts() {
    if (!document.querySelector("#YaraPageBuilderScripts")) {
        let imported = document.createElement("script");
        imported.src = advanced_script_vars.pluginDirUrl + "assets/jsAdmin/pageBuilder.js?ver=" + advanced_script_vars.yaraPreventCache;
        imported.id = "YaraPageBuilderScripts";
        imported.onload = function () { console.log("EXTERNAL IS LOADED") };
        document.head.appendChild(imported);
    }
}

function moveHTMLtoCustomFields(saveState) {
    console.log("SAVE TO THE CUSTOM FIELDS FROM");







    let editedHTML = document.querySelector(".adminHolder--mainContent").innerHTML;

    let createNewBox = document.createElement("div");
    //createNewBox.style.display = "none";
    createNewBox.innerHTML = editedHTML;
    createNewBox.id = "tmpBoxHolder";
    document.querySelector(".adminHolder--mainContent").appendChild(createNewBox);


    let headerItems = document.querySelectorAll("#tmpBoxHolder headeritem");
    let prepareNewHTML = "";
    let mainItems = document.querySelectorAll("#tmpBoxHolder main sectionitem");
    let alladminPannels = document.querySelectorAll("#tmpBoxHolder .swapPositionPannel");


    alladminPannels.forEach(async (element) => {
        element.remove();
    });
    headerItems.forEach(async (item) => {
        prepareNewHTML += item.innerHTML;
    });
    prepareNewHTML += "<main>";

    mainItems.forEach(async (item) => {
        prepareNewHTML += item.innerHTML;
    });
    prepareNewHTML += "</main>";

    myPageInnerHTMLholderID.innerHTML = prepareNewHTML;

    console.log(saveState);

    if (saveState == "1") {
        yaraPageEditorHolder.classList.add("hidden");
        let taraPageBuilderLoadBTTN = document.querySelector("#yaraLoadPageBuilder");
        taraPageBuilderLoadBTTN.onclick = () => { yaraPageEditorHolder.classList.remove("hidden") };
    }

    customFupdateButton.click();
    setTimeout(() => {
        checkCustomFields();
    }, 250);
    createNewBox.remove();



    /*
    
        let headerItems = document.querySelectorAll(".adminHolder--mainContent headeritem");
        let prepareNewHTML = "";
        let mainItems = document.querySelectorAll(".adminHolder--mainContent main sectionitem");
        let alladminPannels = document.querySelectorAll(".swapPositionPannel");
    
        alladminPannels.forEach(async (element) => {
            element.remove();
        });
        headerItems.forEach(async (item) => {
            prepareNewHTML += item.innerHTML;
        });
    
        prepareNewHTML += "<main>";
    
        mainItems.forEach(async (item) => {
            prepareNewHTML += item.innerHTML;
        });
        prepareNewHTML += "</main>";
    
        myPageInnerHTMLholderID.innerHTML = prepareNewHTML;
        myPageInnerHTML = prepareNewHTML;
        yaraPageEditorHolder.classList.add("hidden");
    */

}

function replaceStr(str) {
    return str
        .replace(/&lt;/g, "<")
        .replace(/&gt;/g, ">");
}


function anIconbuilder(icon) {
    return `<div class='adminTools icon icon--${icon}'></div>`;
}


function yaraLoadPageBuilderScripts() {
    console.log("OPEN PAGE BUILDER SCRIPT");
    getBuilderScripts();

    yaraPageEditorHolder.classList.remove("hidden");

    const xhttp = new XMLHttpRequest();
    xhttp.onload = function () {
        document.querySelector(".adminHolder--leftNav").innerHTML = this.response;
        //load pafr builder;        
        document.querySelector(".adminHolder--footer--saveButton").onclick = () => { moveHTMLtoCustomFields("1") };
        if (myPageInnerHTML) {
            document.querySelector(".adminHolder--mainContent").innerHTML = replaceStr(myPageInnerHTML) + adminFooterHTML;

            let yaraHeadHTML = document.querySelector(".adminHolder--mainContent .yaraHead");

            if (yaraHeadHTML) {
                let newYaraHeadHTML = document.createElement("headeritem");
                newYaraHeadHTML.classList.add("normal");
                yaraHeadHTML.parentNode.insertBefore(newYaraHeadHTML, yaraHeadHTML.nextSibling);

                let clone = yaraHeadHTML.cloneNode(true);
                newYaraHeadHTML.appendChild(clone);

                let swapPositionPannel = document.createElement("div");
                swapPositionPannel.classList.add("swapPositionPannel");
                swapPositionPannel.innerHTML = anIconbuilder("edit");
                newYaraHeadHTML.appendChild(swapPositionPannel);

                swapPositionPannel.querySelector(".icon--edit").onclick = () => {
                    prapareForEditing(newYaraHeadHTML, newYaraHeadHTML);
                }

                document.querySelector("#yaraHeroSingle").setAttribute("data-used", "1");
                yaraHeadHTML.remove();

            }

            let yaraContentSections = document.querySelectorAll(".adminHolder--mainContent .section");


            yaraContentSections.forEach(async (item) => {

                let newYaraSectionHTML = document.createElement("sectionitem");
                newYaraSectionHTML.classList.add("normal");
                item.parentNode.insertBefore(newYaraSectionHTML, item.nextSibling);

                let clone = item.cloneNode(true);
                newYaraSectionHTML.appendChild(clone);


                let swapPositionPannel = document.createElement("div");
                swapPositionPannel.classList.add("swapPositionPannel");
                swapPositionPannel.innerHTML = anIconbuilder("up") + anIconbuilder("down") + anIconbuilder("edit");
                newYaraSectionHTML.appendChild(swapPositionPannel);


                swapPositionPannel.querySelector(".icon--edit").onclick = () => {
                    prapareForEditing(newYaraSectionHTML, newYaraSectionHTML);
                }

                swapPositionPannel.querySelector(".icon--up").onclick = () => {
                    console.log("SWAP POSITIONS");
                    swapNodePositions(newYaraSectionHTML, 0);
                }
                swapPositionPannel.querySelector(".icon--down").onclick = () => {
                    console.log("SWAP POSITIONS");
                    swapNodePositions(newYaraSectionHTML, 1);
                }
                item.remove();
            });

            // edit later            
            document.querySelector(".adminHolder--footer--saveButton").onclick = () => { moveHTMLtoCustomFields("1") };
        }
    }
    xhttp.open("POST", advanced_script_vars.pluginDirUrl + "assets/pages/templatesLoader.php");
    xhttp.send();

}

let customFupdateButton;

function checkCustomFields() {
    let holder = document.querySelector("#postcustomstuff #list-table");
    let htmlExist = holder.querySelector("[value='customContent']");


    if (htmlExist) {

        console.log("HTML EXIST");
        setTimeout(() => {
            //get custom html ID
            let dropdownID = document.querySelector("#list-table #the-list input[value='customContent']").getAttribute("id");
            let htmlContainerID = dropdownID.replace("-key", "-value");
            let htmlContainerUpdateID = dropdownID.replace("-key", "-submit");
            let htmlContainer = document.querySelector("#" + htmlContainerID);
            customFupdateButton  = document.querySelector("#" + htmlContainerUpdateID);

            if (htmlContainer.innerHTML) {
                console.log("HAVE HTML INSIDE");

            } else {
                console.log("NO!!!! HTML INSIDE");
                htmlContainer.innerHTML = `<main></main>`;
            }
            myPageInnerHTML = htmlContainer.innerHTML;
            let taraPageBuilderLoadBTTN = document.querySelector("#yaraLoadPageBuilder");
            taraPageBuilderLoadBTTN.onclick = () => { yaraLoadPageBuilderScripts() };
            myPageInnerHTMLholderID = htmlContainer;
        }, 300);

    } else {
        console.log("HTML NOT EXIST");
        let checkIfOptionExist = document.querySelector("#newmeta #metakeyselect option[value='customContent']");
        if (checkIfOptionExist) {
            console.log("OPTION EXIST EXIST");
            checkIfOptionExist.selected = 'selected';
            document.querySelector("#newmeta-submit").click();
            // checkCustomFields();
        } else {
            console.log("OPTION NOT EXIST");
            document.querySelector("#newmeta #metakeyinput").value = "customContent";
            document.querySelector("#newmeta-submit").click();
            // checkCustomFields();                  
        }
        setTimeout(() => {
            checkCustomFields();
        }, 300);
    }
}


//window.onload = function () {
function loadYaraBuilderSettings() {
    if (isPageEditor) {
        document.querySelector("body").appendChild(yaraPageEditorHolder);
        yaraPageEditorHolder.appendChild(adminHolder);

        (function ($) {
            var mediaUploader;
            $('#upload-button').click(function (e) {
                e.preventDefault();
                yaraPageEditorHolder.classList.add("hidden");
                // If the uploader object has already been created, reopen the dialog
                if (mediaUploader) {
                    mediaUploader.open();
                    return;
                }
                // Extend the wp.media object
                mediaUploader = wp.media.frames.file_frame = wp.media({
                    title: 'Choose Image',
                    button: {
                        text: 'Choose Image'
                    }, multiple: false
                });

                console.log("mediaUploader");
                console.log(mediaUploader);



                // When a file is selected, grab the URL and set it as the text field's value
                mediaUploader.on('select', function () {
                    attachment = mediaUploader.state().get('selection').first().toJSON();
                    $('#image-url').val(attachment.url);
                    isBgImage ? objectToUpdateSRC.setAttribute("style", "background-image:url('" + attachment.url + "')") :
                        objectToUpdateSRC.setAttribute("src", attachment.url);
                    //yaraPageEditorHolder.classList.remove("hidden");
                });
                // Open the uploader dialog

                mediaUploader.on('close', function () {
                    yaraPageEditorHolder.classList.remove("hidden");
                });


                mediaUploader.open();
                // mediaUploader["$el"][0].style.zIndex = getMaxZIndex() + 10000;
            });
        })(jQuery);

        findContentHolder = document.querySelector(".editor-styles-wrapper");

        if (findContentHolder) {
            findContentHolder.parentNode.insertBefore(yaraPageEditorHead, findContentHolder);
            setTimeout(() => {
                checkCustomFields();
            }, 300);
        }
    }
}


function confirmObjectsLoaded() {
    findContentHolder = document.querySelector(".editor-styles-wrapper");
    if (findContentHolder) {
        clearInterval(objectsObserver);
        loadYaraBuilderSettings();
    } else {
        currentTryCount++;
        if (currentTryCount > maxTryCount) {
            clearInterval(objectsObserver);
            console.log("OBJ FALSE!!! TO MANY ATTEMPTS")
        }
    }

}
let maxTryCount = 15;
let currentTryCount = 0;
let objectsObserver;
window.onload = function () {
    objectsObserver = setInterval(confirmObjectsLoaded, 300);

}



