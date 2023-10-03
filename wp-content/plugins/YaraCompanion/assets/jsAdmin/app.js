console.log(advanced_script_vars.pluginDirUrl);

let isPageEditor = document.querySelector("body").classList.contains("post-type-page");
isPageEditor ? console.log("isPageEditor") : console.log("iit is not sPageEditor");

let findAbutton;
let findContentHolder;
let yaraPageEditorHead = document.createElement("div");
yaraPageEditorHead.id = "yaraPageEditorHead";
yaraPageEditorHead.classList.add("yaraPageEditorHead");
yaraPageEditorHead.innerHTML = 
`
<div class="generaldivigation" id="generaldivigation">
<div class="logoHolder">
            <h1>
                <a href="javascript:;"><img src="https://evonsm.test/wp-content/themes/Yara/assets/images/YaraLogo.webp?v=25" width="48" height="48" alt="Yara Digital Products"></a>
            </h1>
            <h2>
                <a href="javascript:;"><img src="https://evonsm.test/wp-content/themes/Yara/assets/images/pixel.png?v=45" id="atfarmLogo" width="162" height="48" alt="Atfarm"></a>
            </h2>
        </div>      
        <div class="navLeftButtons">            
            <div class="button button-dark" id='yaraLoadPageBuilder'>Yara Builder</div>
        </div>
    </div>
`;

//"YARA HEAD <div id='yaraLoadPageBuilder'> LOAD THE BUILDER </div>";

let yaraPageEditorHolder = document.createElement("div");
yaraPageEditorHolder.id = "yaraPageEditorHolder";
yaraPageEditorHolder.classList.add("yaraPageEditorHolder", "hidden");
yaraPageEditorHolder.onclick = null;
yaraPageEditorHolder.style.zIndex = getMaxZIndex() + 100;
document.querySelector("body").appendChild(yaraPageEditorHolder);

let adminHolder = document.createElement("div");
adminHolder.setAttribute("data-type", "adminHolder");
adminHolder.classList.add("adminHolder");
adminHolder.innerHTML = `
<form method="post" class="hidden" style="display:'none'">
    <input id="image-url" type="text" name="image" />
    <input id="upload-button" type="button" class="button" value="Upload Image" />
    <input type="submit" value="Submit" />
</form>
<div class="adminHolder--leftNav" data-type="adminHolder--leftNav">LEFT NAV</div>
<div class="adminHolder--mainContent" data-type="adminHolder--mainContent">
<main></main>
<div class="adminHolder--footer" data-type="adminHolder--footer">
<div class="adminHolder--footer--saveButton button button-dark">SAVE TEMPLATE</div>
</div>
</div>`;


yaraPageEditorHolder.appendChild(adminHolder);

let adminFooterHTML = 
`
<div class="adminHolder--footer" data-type="adminHolder--footer">
<div class="adminHolder--footer--saveButton button button-dark">SAVE TEMPLATE</div>
</div>
`;

jQuery(document).ready(function($){

    var mediaUploader;
  
    $('#upload-button').click(function(e) {
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
      }, multiple: false });
  
      // When a file is selected, grab the URL and set it as the text field's value
      mediaUploader.on('select', function() {
        attachment = mediaUploader.state().get('selection').first().toJSON();
        $('#image-url').val(attachment.url);
        isBgImage ? objectToUpdateSRC.setAttribute("style", "background-image:url('" + attachment.url + "')") :
        objectToUpdateSRC.setAttribute("src", attachment.url);
        yaraPageEditorHolder.classList.remove("hidden");
      });
      // Open the uploader dialog
      mediaUploader.open();
    });
  
  });

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
        imported.src = advanced_script_vars.pluginDirUrl + "assets/jsAdmin/pageBuilder.js";
        imported.id = "YaraPageBuilderScripts";
        imported.onload = function () {console.log("EXTERNAL IS LOADED")};
        document.head.appendChild(imported);
    }
}

function moveHTMLtoCustomFields(){
    console.log("SAVE TO THE CUSTOM FIELDS FROM");
    let editedHTML = document.querySelector(".adminHolder--mainContent").innerHTML;
    let headerItems = document.querySelectorAll(".adminHolder--mainContent headeritem");
    let prepareNewHTML = "";

    let mainItems = document.querySelectorAll(".adminHolder--mainContent main sectionitem");


    headerItems.forEach(async (item) => {
        console.log(item);
        prepareNewHTML += item.innerHTML;
    });

    prepareNewHTML += "<main>";

    mainItems.forEach(async (item) => {
        console.log(item);
        prepareNewHTML += item.innerHTML;
    });

    prepareNewHTML += "</main>";

    console.log(prepareNewHTML);



    // get all head items






    // get all main items




    myPageInnerHTMLholderID.innerHTML = prepareNewHTML;
    myPageInnerHTML = prepareNewHTML;
    yaraPageEditorHolder.classList.add("hidden");


}

function replaceStr(str) {
    return str        
        .replace(/&lt;/g, "<")
        .replace(/&gt;/g, ">");
  }


function yaraLoadPageBuilderScripts(){
    console.log("OPEN PAGE BUILDER SCRIPT");
    getBuilderScripts();

    yaraPageEditorHolder.classList.remove("hidden");

    const xhttp = new XMLHttpRequest();
    xhttp.onload = function () {
        document.querySelector(".adminHolder--leftNav").innerHTML = this.response;
        //load pafr builder;        
        document.querySelector(".adminHolder--footer--saveButton").onclick = () => { moveHTMLtoCustomFields() };
        if(myPageInnerHTML){
            document.querySelector(".adminHolder--mainContent").innerHTML = replaceStr(myPageInnerHTML) + adminFooterHTML;


            //find yaraHead

            let yaraHeadHTML = document.querySelector(".adminHolder--mainContent .yaraHead");

            if(yaraHeadHTML){
                let newYaraHeadHTML = document.createElement("headeritem");
                newYaraHeadHTML.classList.add("normal");               
                yaraHeadHTML.parentNode.insertBefore(newYaraHeadHTML, yaraHeadHTML.nextSibling);

                let clone = yaraHeadHTML.cloneNode(true);
                newYaraHeadHTML.appendChild(clone);

                //sectionToEdit = clone;
                //insertMySection(newYaraHeadHTML);

                newYaraHeadHTML.onclick = function () {
                    prapareForEditing(newYaraHeadHTML, newYaraHeadHTML);
                }

                document.querySelector("#yaraHeroSingle").setAttribute("data-used","1");

                yaraHeadHTML.remove();

                //setForEditing

            }

            let yaraContentSections = document.querySelectorAll(".adminHolder--mainContent .section");

            yaraContentSections.forEach(async (item) => {
                console.log(item);
                //<sectionitem class="normal">
                let newYaraSectionHTML = document.createElement("sectionitem");
                newYaraSectionHTML.classList.add("normal");   
                item.parentNode.insertBefore(newYaraSectionHTML, item.nextSibling);

                let clone = item.cloneNode(true);  
                newYaraSectionHTML.appendChild(clone);

                newYaraSectionHTML.onclick = function () {
                    prapareForEditing(newYaraSectionHTML, newYaraSectionHTML);
                }

                item.remove();

            });








            // edit later            
            document.querySelector(".adminHolder--footer--saveButton").onclick = () => { moveHTMLtoCustomFields() };
        }
    }
    xhttp.open("POST", advanced_script_vars.pluginDirUrl + "assets/pages/templatesLoader.php");
    xhttp.send();

}


function checkCustomFields() {
    let holder = document.querySelector("#postcustomstuff #list-table");
    let htmlExist = holder.querySelector("[value='customContent']");

    if (htmlExist) {

        console.log("HTML EXIST");

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

    }

    setTimeout(() => {
        //get custom html ID
        let dropdownID = document.querySelector("#list-table #the-list input[value='customContent']").getAttribute("id");
        console.log("dropdown id");
        console.log(dropdownID);

        let htmlContainerID = dropdownID.replace("-key", "-value");
        let htmlContainer = document.querySelector("#" + htmlContainerID);

        console.log("htmlContainer.value");
        //console.log(htmlContainer.innerHTML);

        if(htmlContainer.innerHTML){
            console.log("HAVE HTML INSIDE"); 

        }else {
            console.log("NO!!!! HTML INSIDE");
           // htmlContainer.innerHTML = `<main></main>`;
        }
        myPageInnerHTML = htmlContainer.innerHTML;
        let taraPageBuilderLoadBTTN = document.querySelector("#yaraLoadPageBuilder");
        taraPageBuilderLoadBTTN.onclick = () => { yaraLoadPageBuilderScripts() };
        myPageInnerHTMLholderID = htmlContainer;
    }, 500);





}


if (isPageEditor) {
    
    window.onload = function () {
        findContentHolder = document.querySelector(".editor-styles-wrapper");
        if (findContentHolder) {
            findContentHolder.parentNode.insertBefore(yaraPageEditorHead, findContentHolder);
            checkCustomFields();
            // insertPageBuilder();
            //check for HTML;            
        }
    }
}




/*


function checkIfCustomHTMLexist(){
    let holder = document.querySelector("#postcustomstuff #list-table");
    let htmlExist = holder.querySelector("[value='customContent']");


    if(htmlExist){
        console.log("HAVE HTML");
        console.log(htmlExist.getAttribute("id"));
        
    }else {
        console.log("NOPE! HAVE HTML");
        let dropdown = document.querySelector("#list-table #the-list");

        if(dropdown.querySelector("option[value='customContent']")){
            console.log("EXIST CREATED");
            dropdown.querySelector("option[value='customContent']").selected = 'selected';



            //metavalue  meta-119-key  meta-119-value

            let dropdownContent = document.querySelector("#newmeta #metavalue");
            let htmlContainerID = dropdownContent.replace("-key", "-value");


            console.log("dropdownContent");
            console.log(dropdownContent);
            console.log(htmlContainerID);
            let previousHTMLcontent = document.querySelector("#" + htmlContainerID ).innerHTML;
            console.log(previousHTMLcontent);
           // let addNewButton = document.querySelector("#newmetaleft #metavalue");  

            let newHTMLcontent = document.querySelector(".adminHolder .adminHolder--mainContent");
            console.log(newHTMLcontent);
            dropdownContent.innerHTML = newHTMLcontent.innerHTML;
            addNewButton.click();
            //enternew






        }else {
            console.log("NOT!!!! EXIST");
        }
        console.log(dropdown);

        // button id = enternew
    }
}



function moveHTMLtoCustomFields() {
    console.log("move HTML");
    yaraPageEditorHolder.classList.add("hidden");


    checkIfCustomHTMLexist();






}



function getMaxZIndex() {
    return Math.max(
        ...Array.from(document.querySelectorAll('body *'), el =>
            parseFloat(window.getComputedStyle(el).zIndex),
        ).filter(zIndex => !Number.isNaN(zIndex)),
        0,
    );
}

function getBuilderScripts() {
    if (!document.querySelector("#YaraPageBuilderScripts")) {
        let imported = document.createElement("script");
        imported.src = advanced_script_vars.pluginDirUrl + "assets/jsAdmin/pageBuilder.js";
        imported.id = "YaraPageBuilderScripts";
        document.head.appendChild(imported);
    }
}

let holder = document.querySelector("#postcustomstuff #list-table");
let htmlExist = holder.querySelector("[value='customContent']");
let dropDownID, htmlContainerID, existingHTML;


function yaraLoadPageBuilderScripts() {
    console.log("Load the scripts...");

    holder = document.querySelector("#postcustomstuff #list-table");
    htmlExist = holder.querySelector("[value='customContent']");
    


    if(htmlExist){
        console.log("HAVE on load HTML");
        console.log(htmlExist.getAttribute("id"));
        dropDownID = htmlExist.getAttribute("id");
        htmlContainerID = dropDownID.replace("-key", "-value");
        console.log(htmlContainerID);
        existingHTML = document.querySelector("#" + htmlContainerID).innerHTML;
        console.log(existingHTML);
       // let currentContent = 
        document.querySelector(".adminHolder--mainContent").innerHTML = existingHTML;
    }


    yaraPageEditorHolder.classList.remove("hidden");

    const xhttp = new XMLHttpRequest();
    xhttp.onload = function () {
        document.querySelector(".adminHolder--leftNav").innerHTML = this.response;
        //load pafr builder;
        getBuilderScripts();
    }
    xhttp.open("POST", advanced_script_vars.pluginDirUrl + "assets/pages/templatesLoader.php");
    xhttp.send();
}

function insertPageBuilder() {
    document.querySelector("body").appendChild(yaraPageEditorHolder);
    let taraPageBuilderLoadBTTN = document.querySelector("#yaraLoadPageBuilder");
    taraPageBuilderLoadBTTN.onclick = () => { yaraLoadPageBuilderScripts() };
    yaraPageEditorHolder.appendChild(adminHolder);
    document.querySelector(".adminHolder--footer--saveButton").onclick = () => { moveHTMLtoCustomFields() };
}

if (isPageEditor) {
    window.onload = function () {
        findContentHolder = document.querySelector(".editor-styles-wrapper");
        if (findContentHolder) {
            findContentHolder.parentNode.insertBefore(yaraPageEditorHead, findContentHolder);
            insertPageBuilder();
        }
    }
}*/