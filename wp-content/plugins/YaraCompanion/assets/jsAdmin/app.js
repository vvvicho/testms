let allEditableItems = document.querySelectorAll('[data-type="edit-headline"],[data-type="edit-paragraf"],[data-type="edit-imageHolder"],[data-type="edit-button"]');
//edit-paragraf edit-imageHolder edit-button


function returnINPUTtype(data, type) {
    data = data.replace(/\s+/g, ' ');

    if (type == "textarea") {
        return `<textarea rows="4" cols="50">${data}</textarea>`;
    } else {
        return `<input type="${type}" value="${data}">`;
    }


}

function returnTextArea(data) {
    data = data.replace(/\s+/g, ' ');
    return `<textarea rows="4" cols="50">${data}</textarea>`;
}


function makeVissible(headLine, controllButton) {
    controllButton.onclick = null;
    controllButton.classList.add("used");
    headLine.removeAttribute('data-status');
}


function editHeadline(headLine, type, contentBlock) {
    let currentContentisEdited = headLine.querySelector('editcontent input');
    if (type === 0) {
        if (currentContentisEdited) {
            return;
        } else {
            let currentContent = headLine.querySelector('editcontent').innerHTML;
            headLine.querySelector('editcontent').innerHTML = returnINPUTtype(currentContent, "text");
        }
    } else if (type === 1) {
        if (currentContentisEdited) {
            headLine.querySelector('editcontent').innerHTML = currentContentisEdited.value;
        }
    } else if (type === 3) {
        let controllButton = contentBlock.querySelector('[data-button="' + headLine.nodeName.toLowerCase() + 'controller"]');
        headLine.setAttribute('data-status', 'noContent');
        controllButton.classList.remove("used");
        controllButton.onclick = function () {
            makeVissible(headLine, this);
        }
    }
}
// 8888888888888888888888888


function editImage(headLine, type, contentBlock) {

    if (type === 0) {

        console.log(headLine);
        objectToUpdateSRC = headLine.querySelector("editcontent img");
        console.log(objectToUpdateSRC);
        showGalleryImages();
    } else if (type === 1) {

    } else if (type === 2) {
        let controllButton = contentBlock.querySelector('.img_1');

        console.log("Hide image");
        console.log(controllButton);


        headLine.setAttribute('data-status', 'noContent');
        controllButton.classList.remove("used");
        controllButton.onclick = function () {
            makeVissible(headLine, this);
        }

        console.log("Hide image");

    }





    console.log(headLine);
    console.log(type);




}



function editParagraf(headLine, type) {
    console.log("EDIT PARAGRAF");
    let currentContentisEdited = headLine.querySelector('editcontent textarea');
    if (type === 0) {
        if (currentContentisEdited) {
            return;
        } else {
            let additionalHeadLine = headLine.querySelector('editcontent strong');
            if (additionalHeadLine) {
                console.log("sub title exist");
                let currentContentHeadLine = headLine.querySelector('editcontent strong').innerHTML;
                let currentContent = headLine.querySelector('editcontent').innerHTML;
                currentContent = currentContent.replace(/<.*>/, '');
                headLine.querySelector('editcontent').innerHTML = returnINPUTtype(currentContentHeadLine, "text") + returnTextArea(currentContent);
            } else {
                let currentContent = headLine.querySelector('editcontent').innerHTML;
                headLine.querySelector('editcontent').innerHTML = returnTextArea(currentContent);
            }
        }
    } else if (type === 1) {
        if (currentContentisEdited) {
            let additionalHeadLine = headLine.querySelector('editcontent input');
            if (additionalHeadLine) {
                console.log("sub title exist for save");
                headLine.querySelector('editcontent').innerHTML = "<strong>" + headLine.querySelector('editcontent input').value + "</strong>" + currentContentisEdited.value;

            } else {
                headLine.querySelector('editcontent').innerHTML = currentContentisEdited.value;
            }


        }
    } else if (type === 2) {
        let allParagrafe = headLine.parentElement.querySelectorAll("P");

        if (allParagrafe.length > 1) {
            headLine.remove();
        }



    }
}

let headlineEditPannelHTML =
    `
<editpannel>
<ul>
    <li class="icon icon--edit" data-type="edit-headline-edit"></li>    
    <li class="icon icon--save" data-type="edit-headline-save"></li>
    <li class="icon icon--delete" data-type="edit-headline-delete"></li>
</ul>
</editpannel>
`;
let paragrafEditPannelHTML =
    `
<editpannel>
<ul>
    <li class="icon icon--edit" data-type="edit-paragraf-edit"></li>    
    <li class="icon icon--save" data-type="edit-paragraf-save"></li>
    <li class="icon icon--sp" data-type="edit-paragraf-sp"></li>
    <li data-type="edit-paragraf-insert"></li>
    <li class="icon icon--delete" data-type="edit-paragraf-delete"></li>
</ul>
</editpannel>
`;


let imageEditPannelHTML =
    `
<editpannel>
<ul>
    <li class="icon icon--edit" data-type="edit-image-edit"></li>    
    <li class="icon icon--save" data-type="edit-image-save"></li>
    <li data-type="edit-image-insert"></li>
    <li class="icon icon--delete" data-type="edit-image-delete"></li>
</ul>
</editpannel>
`;

let flagsList =
    `
<ul class=flagListHolder>
    <li data-icon="uk" class="flafIcons flafIcons--uk"></li>
    <li data-icon="it" class="flafIcons flafIcons--it"></li>
    <li data-icon="fr" class="flafIcons flafIcons--fr"></li>
    <li data-icon="uk" class="flafIcons flafIcons--uk"></li>
    <li data-icon="uk" class="flafIcons flafIcons--uk"></li>
    <li data-icon="uk" class="flafIcons flafIcons--uk"></li>
</ul>



`;





let headlineEditPanneINPUTfield =
    `
<input type="text" value="">
`;

let paragrafEditPannelINPUTfield =
    `
<textarea rows="4" cols="50">
`;

//<editcontent>





function duplicateItem(obj) {

    if (obj.parentElement.nodeName == "P") {

        let newParagraf = document.createElement("P");
        newParagraf.setAttribute("data-type", "edit-paragraf");
        newParagraf.classList.add("editableHeadLine");

        newParagraf.innerHTML = paragrafEditPannelHTML + "<editcontent>" + "add content" + "</editcontent><addButton onClick='duplicateItem(this)'> + Insert </addButton>";

        obj.parentElement.parentNode.insertBefore(newParagraf, obj.parentElement.nextSibling);



        newParagraf.querySelector('[data-type="edit-paragraf-edit"]').onclick = function () {
            editParagraf(newParagraf, 0);
        }
        newParagraf.querySelector('[data-type="edit-paragraf-save"]').onclick = function () {
            editParagraf(newParagraf, 1);
        }
        newParagraf.querySelector('[data-type="edit-paragraf-delete"]').onclick = function () {
            editParagraf(newParagraf, 2);
        }

    }



}


function spParagrafIconSet(paragraf, iconHolder) {


    console.log("HERE");
    console.log(paragraf);
    console.log(iconHolder);


    let currentIcon = paragraf.getAttribute('data-icon');
    let newIcon = iconHolder.getAttribute('data-icon');

    paragraf.classList.remove("flafIcons--" + currentIcon);
    paragraf.classList.add("flafIcons--" + newIcon);

    paragraf.setAttribute('data-icon', newIcon);





}





allEditableItems.forEach(async (item) => {
    //sum = await sumFunction(sum, rating);

    item.classList.add("editableHeadLine");
    if (item.getAttribute("data-type") == "edit-headline") {
        item.innerHTML = headlineEditPannelHTML + "<editcontent>" + item.innerHTML + "</editcontent>";
        item.querySelector('[data-type="edit-headline-edit"]').onclick = function () {
            editHeadline(item, 0);
        }
        item.querySelector('[data-type="edit-headline-save"]').onclick = function () {
            editHeadline(item, 1);
        }
        item.querySelector('[data-type="edit-headline-delete"]').onclick = function () {
            editHeadline(item, 3, contentBlock001);
        }
    } else if (item.getAttribute("data-type") == "edit-paragraf") {



        item.innerHTML = paragrafEditPannelHTML + "<editcontent>" + item.innerHTML + "</editcontent><addButton onClick='duplicateItem(this)'> + Insert </addButton>";

        console.log("tetstet");
        console.log(item);

        if (item.classList.contains("spParagraf")) {
            console.log("sp P");
            item.querySelector('[data-type="edit-paragraf-sp"]').style.display = "block";

            item.querySelector('[data-type="edit-paragraf-sp"]').innerHTML = flagsList;


            let allFlagsList = item.querySelector('[data-type="edit-paragraf-sp"]').querySelectorAll('ul li');

            allFlagsList.forEach(async (listItem) => {
                console.log(listItem);

                listItem.onclick = () => {
                    spParagrafIconSet(item, listItem);

                }


            });







        }


        item.querySelector('[data-type="edit-paragraf-edit"]').onclick = function () {
            editParagraf(item, 0);
        }
        item.querySelector('[data-type="edit-paragraf-save"]').onclick = function () {
            editParagraf(item, 1);
        }
        item.querySelector('[data-type="edit-paragraf-delete"]').onclick = function () {
            editParagraf(item, 2);
        }


    } else if (item.getAttribute("data-type") == "edit-imageHolder") {

        console.log("an image");



        item.innerHTML = imageEditPannelHTML + "<editcontent>" + item.innerHTML + "</editcontent>";

        if (item.classList.contains("mandatory")) {
            item.querySelector('[data-type="edit-image-delete"]').style.display = "none";

        }


        item.querySelector('[data-type="edit-image-edit"]').onclick = function () {
            editImage(item, 0);
        }
        item.querySelector('[data-type="edit-image-save"]').onclick = function () {
            editImage(item, 1);
        }
        item.querySelector('[data-type="edit-image-delete"]').onclick = function () {
            editImage(item, 2, contentBlock001);
        }


    }

    /*
    headLine.onclick = function () {
        editHeadline(this);
    }
    */
});


/* GALLERY */

let gallerHolder = document.getElementById("mainGalleryHolder");
let sellectedImage = "";
let isBgImage = 0;
let allImagesContainers = gallerHolder.querySelectorAll(".mainGalleryHolder__scroller ul li");
let gallerySaveResult = document.getElementById("gallerySaveResult");
let objectToUpdateSRC;

function updateSellectedImage() {

    if (isBgImage) {
        console.log("SET BACKGROUND");
        objectToUpdateSRC.setAttribute("style", "background-image:url('" + sellectedImage + "');");
    } else {
        objectToUpdateSRC.setAttribute("src", sellectedImage);
    }

    hideGalleryImages();


}




gallerySaveResult.onclick = function () {
    updateSellectedImage();
}

function clearAllImagesStatus() {
    allImagesContainers.forEach(async (item) => {
        item.classList.remove("--sellected");
    });
}


function showGalleryImages() {
    sellectedImage = "";
    clearAllImagesStatus();
    console.log("SHOW GALLERY");
    gallerHolder.classList.remove("mainGalleryHolder--hidden");


}

function hideGalleryImages() {
    gallerHolder.classList.add("mainGalleryHolder--hidden");
}


function sellectAnImage(obj) {

    sellectedImage = obj.querySelector("img").getAttribute("src");
    clearAllImagesStatus();
    obj.classList.add("--sellected");

}

allImagesContainers.forEach(async (item) => {
    item.onclick = () => {
        sellectAnImage(item);
    }
});






let templates = [];

templates[0] =
{
    name: 'Main Navigation',
    type: 'navigation',
    menuAction: 'button',
    imgPath: 'mainNav',
    HTMLcode: `<div class="generaldivigation" id="generaldivigation">
    <div class="logoHolder">
        <h1>
            <a href="yaraHome.html"><img src="../wp-content/themes/Yara/assets/images/YaraLogo.webp?v=2" width="48"
                    height="48" alt="Yara Digital Products"></a>
        </h1>
        <h2>
            <a href="yaraHome.html"><img src="../wp-content/themes/Yara/assets/images/pixel.png?v=4" id="atfarmLogo"
                    width="162" height="48" alt="Atfarm"></a>
        </h2>
    </div>
    <nav>
        <ul class="mobileNavHolder">
            <li id="mobileSearchButton" class="mobileNav icons icons-searchW"></li>
            <li id="mobileOpenCloseButton" data-status="0" class="mobileNav icons icons-openW"></li>
        </ul>
        <ul id="desktopNav" class="desktopNav" data-status="0">
            <li class="--subnav">
                <a href="yaraSolutions.html">Solutions</a>
                <ul>
                    <li class="subListTitle">Explore Solutions</li>
                    <li><a>Crop Satellite Monitoring</a></li>
                    <li><a>Nutrition Plan</a></li>
                    <li><a>N-Tester BT</a></li>
                    <li><a>Variable N-Rate Application</a></li>
                    <li><a>Mobile App</a></li>
                    <li><a>N-Photo Analysis</a></li>
                    <li><a>N-Uptake</a></li>
                </ul>
            </li>
            <li>
                <a>Blog</a>
            </li>
            <li>
                <a>About</a>
            </li>
            <li>
                <a>Contacts</a>
            </li>
        </ul>
    </nav>
    <div class="navLeftButtons">
        <div id="desktopSearchButton" class="desktopSearchButton icons icons-searchW"></div>
        <div class="button button-light">Login</div>
        <div class="button button-dark">Sign up</div>
    </div>
</div>`
}

templates[1] =
{
    name: 'Hero Section',
    type: 'initSection',
    menuAction: 'button',
    imgPath: 'hero',
    HTMLcode: `            <div class="yaraHead">
    <div class="titleBlock">
        <div>
            <p>
                <strong>Monitor crop growth</strong><br>
                <strong>anywhere, anytime</strong><br>
                Discover the areas of high potential and crop variability on your fields in 1 click.
            </p>
            <div class="button button-dark">Learn more</div>
        </div>
        <div class="icon-chevron"></div>
    </div>
</div>`
}

templates[2] =
{
    name: 'content',
    type: 'contentBlock',
    menuAction: 'button',
    imgPath: 'content',
    HTMLcode: `                    <div data-type="contentBlock" class="section bgColors--sectionLight">
    <div class="warper">
        <div class="item_12">
            <h3 data-type="edit-headline">H3 Head Line
            </h3>
        </div>
        <figure data-type="edit-imageHolder" class="item_7">
            <editpannel>
                1234
            </editpannel>
            <img src="../wp-content/themes/Yara/assets/imagesAdmin/placeHolders/img_677_508.png" width="677"
                height="508" alt="my image">
        </figure>
        <div class="articleInfo articleInfo--qrCode item_5">
            <div class="articleContent">
                <figure data-type="edit-imageHolder">
                    <editpannel>
                        1234
                    </editpannel>
                    <img src="../wp-content/themes/Yara/assets/imagesAdmin/placeHolders/img_271_271.png" width="271"
                        height="271" alt="my image">
                </figure>

                <h4 data-type="edit-headline">H4 Head Line</h4>

                <p data-type="edit-paragraf">
                    Multiple Paragraph content holder Lorem ipsum dolor sit amet, consectetur
                    adipisicing elit. Enim officiis consequatur placeat praesentium expedita quod
                    sunt! Sint est nisi molestias soluta et, laborum quos quae perferendis suscipit
                    totam natus iusto?
                </p>
                <p data-type="edit-paragraf">
                    Multiple Paragraph content holder Lorem ipsum dolor sit amet, consectetur
                    adipisicing elit. Enim officiis consequatur placeat praesentium expedita quod
                    sunt! Sint est nisi molestias soluta et, laborum quos quae perferendis suscipit
                    totam natus iusto?
                </p>
                <ul>
                    <li>List Item
                    </li>
                    <li>List Item
                    </li>
                </ul>
                <p data-type="edit-paragraf" data-icon="uk" class="flafIcons flafIcons--uk">A special paragraph
                    with an icon</p>
                <div class="button button-dark">
                    <div data-type="edit-button" class="">
                        <editpannel>
                            1234
                        </editpannel>
                        Button
                    </div>
                </div>
            </div>
            <!--div class="item_12 articleNavigation">
<div class="icons icons-navLeft"></div>
<div class="icons icons-navRight"></div>
</div-->
        </div>
    </div>
</div>`
}
templates[3] =
{
    name: 'Gallery',
    type: 'galleryBlock',
    menuAction: 'button',
    imgPath: 'gallery2',
    HTMLcode: `<section id="imagesList_A" class="bgColors--sectionLight">
    <div class="warper warper--boxGallery">
        <div class="item_4 galleryItem">
            <figure>
                <img src="../wp-content/themes/Yara/assets/imagesAdmin/placeHolders/img_335_250.png" width="335" height="250" alt="my image">
            </figure>
            <div>
                <h4>H4 Title</h4>
                <p>Paragraf Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi eius quis praesentium et magni autem delectus voluptatibus explicabo accusantium veniam ea, quia quam velit temporibus nisi rem. Perferendis, accusantium incidunt.</p>
                <p>Paragraf Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi eius quis praesentium et magni autem delectus voluptatibus explicabo</p>
            </div>
        </div>
        <div class="item_4 galleryItem">
            <figure>
                <img src="../wp-content/themes/Yara/assets/imagesAdmin/placeHolders/img_335_250.png" width="335" height="250" alt="my image">
            </figure>
            <div>

                <h4>H4 Title</h4>
                <p>Paragraf Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi eius quis praesentium et magni autem delectus voluptatibus explicabo accusantium veniam ea, quia quam velit temporibus nisi rem. Perferendis, accusantium incidunt.</p>
                <p>Paragraf Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi eius quis praesentium et magni autem delectus voluptatibus explicabo accusantium veniam ea, quia quam velit temporibus nisi rem. Perferendis, accusantium incidunt.</p>

            </div>

        </div>
        <div class="item_4 galleryItem">
            <figure>
                <img src="../wp-content/themes/Yara/assets/imagesAdmin/placeHolders/img_335_250.png" width="335" height="250" alt="my image">
            </figure>
            <div>
                <h4>H4 Title</h4>
                <p>Paragraf Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi eius quis praesentium et magni autem delectus voluptatibus explicabo accusantium veniam ea, quia quam velit temporibus nisi rem. Perferendis, accusantium incidunt.</p>
            </div>
        </div>
        <!--div class="item_12 box box--bgColor--blue twoColMid">
            <div>
                <h4>Track progress and problems</h4>
                <p>APowerful biomass maps that help you monitor crop health, field variability, and
                    detect
                    problem areas on your fields from anywhere, anytime. </p>
            </div>
            <div>
                <h4>Advanced technology</h4>
                <p>Atfarm uses Yara’s N-Sensor vegetation index to generate biomass maps to help you
                    understand your fields better. </p>
            </div>
        </div-->
        <div class="item_12 buttonHolder">
            <div class="button button-dark">
                Section Button
            </div>
        </div>
    </div>
</section>`
}

templates[4] =
{
    name: 'Gallery',
    type: 'galleryBlock',
    menuAction: 'button',
    imgPath: 'gallery3',
    HTMLcode: `                <section class="bgColors--sectionLNormal">
    <div class="warper warper--gallery warper--gallery--five">
        <h3 class="item_5">H3 Headline</h3>
        <div class="galleryItem">
            <figure>
                <img src="../wp-content/themes/Yara/assets/imagesAdmin/placeHolders/img_208_278.png" width="208" height="278" alt="my image">
                <figcaption>Image Details</figcaption>
            </figure>
        </div>
        <div class="galleryItem">
            <figure>
                <img src="../wp-content/themes/Yara/assets/imagesAdmin/placeHolders/img_208_278.png" width="208" height="278" alt="my image">
                <figcaption>Image Details</figcaption>
            </figure>
        </div>
        <div class="galleryItem">
            <figure>
                <img src="../wp-content/themes/Yara/assets/imagesAdmin/placeHolders/img_208_278.png" width="208" height="278" alt="my image">
                <figcaption>Image Details</figcaption>
            </figure>
        </div>
        <div class="galleryItem">
            <figure>
                <img src="../wp-content/themes/Yara/assets/imagesAdmin/placeHolders/img_208_278.png" width="208" height="278" alt="my image">
                <figcaption>Image Details</figcaption>
            </figure>
        </div>
        <div class="galleryItem">
            <figure>
                <img src="../wp-content/themes/Yara/assets/imagesAdmin/placeHolders/img_208_278.png" width="208" height="278" alt="my image">
                <figcaption>Image Details</figcaption>
            </figure>
        </div>
        <div class="item_5 buttonHolder">
            <div class="button button-dark">
                Section Button
            </div>
        </div>
    </div>
</section>`
}

templates[5] =
{
    name: 'Slider',
    type: 'sliderBlock',
    menuAction: 'button',
    imgPath: 'slider',
    HTMLcode: `                <section id="contentSlider" class="bgColors--sectionLNormal">
    <div class="warper">
        <h3 class="item_12">H3 Head Line</h3>
        <div class="slider item_12">
            <ul>
                <li>
                    <figure>
                        <img src="../wp-content/themes/Yara/assets/imagesAdmin/placeHolders/img_315_315.png" width="315" height="315" alt="my image">                                                 
                    </figure>
                    <p>Turn your N-Tester BT on by holding the On/Off button until the LED on top turns blue.</p>
                </li>
                <li>
                    <figure>
                        <img src="../wp-content/themes/Yara/assets/imagesAdmin/placeHolders/img_315_315.png" width="315" height="315" alt="my image">                                                 
                    </figure>
                    <p>“Atfarm is very simple to use, taking just 10 mins to load all my field boundaries over
                        the 2200 hectares of farming.</p>
                    <p>I like to use satellite imagery to scout for any management issues.</p>
                    <p>The maps are a very visual way of picking out differences in growth and development to
                        help prioritise decisions.”</p>
                    <p class="flag--uk">Jorin Grimsdale, Farmer, UK</p>
                </li>
                <li>
                    <figure>
                        <img src="../wp-content/themes/Yara/assets/imagesAdmin/placeHolders/img_315_315.png" width="315" height="315" alt="my image">                                                 
                    </figure>
                    <p>“Atfarm is very simple to use, taking just 10 mins to load all my field boundaries over
                        the 2200 hectares of farming.</p>
                    <p>I like to use satellite imagery to scout for any management issues.</p>
                    <p>The maps are a very visual way of picking out differences in growth and development to
                        help prioritise decisions.”</p>
                    <p class="flag--uk">Jorin Grimsdale, Farmer, UK</p>
                </li>         
            </ul>
        </div>
        <div class="item_12 articleNavigation">
            <div class="icons icons-navLeft"></div>
            <div class="icons icons-navRight"></div>
        </div>
        <div class="item_12 buttonHolder">
            <div class="button button-dark">
                Section button
            </div>
        </div>
    </div>
</section>`
}


function insertTemplate(obj, HTMLcode) {
    //blockconstructor
    let contentHolder = document.querySelector('main');
    let blockconstructor = document.createElement("blockconstructor");
    blockconstructor.innerHTML = HTMLcode;
    contentHolder.appendChild(blockconstructor);

}





function adminLEfNavBuilder() {
    let leftNavigationHolder = document.querySelector('[data-type="adminHolder--leftNav"] ul');

    templates.forEach(async (template, key) => {
        let li = document.createElement("LI");
        li.setAttribute('class', 'adminHolder--leftNav--templatesList--button');
        li.setAttribute('data-type', 'templateHolder');
        li.setAttribute('data-type', `${template.type}`);
        li.onclick = () => insertTemplate(li, template.HTMLcode);
        li.innerHTML =
            `
            <figure>
            <img src="../wp-content/themes/Yara/assets/imagesAdmin/${template.imgPath}.png" alt="my image">
            <span>${template.name}</span>
            </figure>
        `;

        // leftNavigationHolder.appendChild(li);


        /*
        li.onmouseover = () => showHint(li);
        li.onmouseout = () => clearHint();

*/


    });


}

/*
                    <li class="adminHolder--leftNav--templatesList--button" 
                    data-type="templateHolder"
                        data-template="content">
                        <figure>
                            <img src="../wp-content/themes/Yara/assets/imagesAdmin/content.png" alt="my image">
                            <span>content</span>
                        </figure>
                    </li>

*/


adminLEfNavBuilder()


let headerItems = [];
let sectionItems = [];
let footerItems = [];
//let focusedTemplate;


function scrollToTop(xLocation) {
    window.scrollTo({
        top: xLocation,
        behavior: 'smooth'
    })
}

function saveTextBox(obj) {

    obj.onclick = null;
    let newHTML;
    if (!obj.querySelector('input')) {
        newHTML = obj.querySelector('textarea').value;
    } else {
        newHTML = obj.querySelector('input').value;
    }

    obj.innerHTML = newHTML;
    // obj.onclick  = function () { editTextBox(this)};


    setTimeout(() => {
        obj.onclick = function () {
            editTextBox(this);
        }
    }, 200);






}


function editTextBox(obj) {
    console.log("EDIT TEXTBOX");
    console.log(obj);
    let saveIconHTTML = "<div class='icon icon--save'></div>";
    let deleteIiconHTML = "";
    let cloneIconHTML = "";

    if (obj.getAttribute("data-edit").includes("duplicate")) {
        cloneIconHTML = "<div class='icon icon--clone'></div>";
    }

    if (obj.getAttribute("data-edit").includes("delete")) {
        deleteIiconHTML = "<div class='icon icon--delete'></div>";
    }
    // returnINPUTtype(data, type);
    obj.onclick = null;
    obj.innerHTML = returnINPUTtype(obj.innerHTML, "textarea") + saveIconHTTML + cloneIconHTML + deleteIiconHTML;

    //add save action
    let objSaveButton = obj.querySelector(".icon--save");
    objSaveButton.onclick = function () {
        saveTextBox(obj);
    }

    if (obj.getAttribute("data-edit").includes("delete")) {
        let objDeleteButton = obj.querySelector(".icon--delete");
        objDeleteButton.onclick = function () {
            obj.remove();
        }
    }

    if (obj.getAttribute("data-edit").includes("duplicate")) {
        let objCloneButton = obj.querySelector(".icon--clone");
        objCloneButton.onclick = function () {
            let newElement = obj.cloneNode(true);
            obj.parentNode.insertBefore(newElement, obj.nextSibling);
            saveTextBox(newElement);
            newElement.onclick = function () {
                editTextBox(newElement);
            }

        }
    }


    //let new_element = element.cloneNode(true);
}


function changeNgImage(obj) {

    isBgImage = 1;
    objectToUpdateSRC = obj;
    showGalleryImages();
    console.log(obj);


}

function changeIMGImage(obj) {

    isBgImage = 0;
    objectToUpdateSRC = obj.querySelector("img");
    showGalleryImages();
    console.log(obj);


}



function saveButtonSettings(obj) {
    console.log("SAVE");
    console.log(obj);
    obj.onclick = null;
    let buttonTitle = obj.querySelector("input").value;
    buttonTitle = buttonTitle.replace(/\s+/g, ' ');
    let buttonTarget = obj.querySelector("select").value;
    buttonTarget = buttonTarget.replace(/\s+/g, ' ');
    let buttonLink = obj.querySelector("textarea").value;
    buttonLink = buttonLink.replace(/\s+/g, ' ');
    console.log(buttonLink);
    obj.innerHTML = `
    <datalink data-href="${buttonLink}" target="${buttonTarget}">${buttonTitle}</datalink>
    `;

    setTimeout(() => {
        obj.onclick = function () {
            buttonSetUp(this);
        }
    }, 200);

}


function buttonSetUp(obj) {
    console.log("click");
    console.log(obj);
    obj.onclick = null;
    let haveAlink = obj.querySelector("a");

    let saveIconHTTML = "<div class='icon icon--save'></div>";
    let deleteIiconHTML = "";

    if (obj.getAttribute("data-edit").includes("delete")) {
        deleteIiconHTML = "<div class='icon icon--delete'></div>";
    }


    if (haveAlink) {

    } else {
        obj.innerHTML = `<label>Button Text:</label>
        <input type="text"/></br>
        <label>Button Target:</label>
        <select>
        <option value="">Self</option>
        <option value="_blank">New Window</option>
        </select></br>
        <label>Button Link:</label>
        <textarea rows="2" cols="30"></textarea>
        ${saveIconHTTML} ${deleteIiconHTML}`;
    }
    let objSaveButton = obj.querySelector(".icon--save");
    objSaveButton.onclick = function () {
        saveButtonSettings(obj);
    }
    if (obj.getAttribute("data-edit").includes("delete")) {
        let objDeleteButton = obj.querySelector(".icon--delete");
        objDeleteButton.onclick = function () {
            obj.remove();
        }
    }

}

function saveSectionSettings(obj, sectionToEdit) {


    console.log("SAVE");


    //remove button

    obj.querySelector("adminfooter").remove();
    let allEditableItems = obj.querySelectorAll('[data-edit="background"],[data-edit*="text"],[data-edit*="button"],[data-edit*="image"]');
    allEditableItems.forEach(async (item) => {

        item.onclick = null;
        console.log(item);


        if (item.getAttribute("data-edit") == "background" || item.getAttribute("data-edit").includes("image") ) {
           
            let allIcons = item.querySelectorAll(".adminBgEdit");
            allIcons.forEach(async (icon) => {
                icon.remove();
            });
        }


    });

    obj.classList.add("normal");
    document.querySelector(".adminHolder--leftNav").classList.remove("hidden");
    document.querySelector(".adminHolder--footer").classList.remove("hidden");
    document.querySelector(".adminHolder--mainContent").classList.remove("removeMargin");

    let allElements = document.querySelectorAll(".adminHolder .hidden");

    allElements.forEach(async (element) => {

        element.classList.remove("hidden");

    });

    setTimeout(() => {
        obj.onclick = function () {
            console.log("12345667777");
            prapareForEditing(this, sectionToEdit);
        }
    }, 200);



    sectionToEdit.HTML = obj.innerHTML;





    //focusedTemplate.HTML 



    //focusedTemplate = null;



    //edit-paragraf edit-imageHolder edit-button






    console.log(obj);


}

function prapareForEditing(obj, sectionToEdit) {
    //let obj = element.item;

    obj.classList.remove("normal");
    obj.onclick = null;



    //hideall elements
    let allElements = document.querySelectorAll(".adminHolder .normal");
    console.log(allElements);

    allElements.forEach(async (element) => {

        element.classList.add("hidden");

    });

    document.querySelector(".adminHolder--leftNav").classList.add("hidden");
    document.querySelector(".adminHolder--footer").classList.add("hidden");
    document.querySelector(".adminHolder--mainContent").classList.add("removeMargin");





    let alltexts = obj.querySelectorAll('[data-edit*="text"]');

    alltexts.forEach(async (text) => {
        text.onclick = function () {
            editTextBox(text);
        }
    });


    let allbgImages = obj.querySelectorAll('[data-edit="background"]');

    allbgImages.forEach(async (image) => {
        image.classList.add("adminRelative");
        let imageEditIcon = document.createElement("div");
        imageEditIcon.classList.add("icon", "icon--edit", "adminBgEdit");
        imageEditIcon.onclick = function () {
            changeNgImage(image);
        }
        image.appendChild(imageEditIcon);
    });

    let allImages = obj.querySelectorAll('[data-edit*="image"]');

    allImages.forEach(async (image) => {
        image.classList.add("adminRelative");
        let imageEditIcon = document.createElement("div");
        imageEditIcon.classList.add("icon", "icon--edit", "adminBgEdit");
        imageEditIcon.onclick = function () {
            changeIMGImage(image);
        }
        image.appendChild(imageEditIcon);


        if(image.getAttribute('data-edit').includes("delete")){
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
        console.log(button);
        button.onclick = function () {
            buttonSetUp(button);
        }
    });



    let letSectionAdminFooter = document.createElement("ADMINFOOTER");
    letSectionAdminFooter.innerHTML = '<div class="button button-dark" data-edit="button">Save Section</div>';

    obj.appendChild(letSectionAdminFooter);


    let sectionSaveButton = obj.querySelector("adminfooter .button");

    sectionSaveButton.onclick = function () {
        saveSectionSettings(obj, sectionToEdit);
    }











}


function insertMySection(obj) {
    let template = obj.querySelector('templateHidden');//.innerHTML;
    let mainSectionsHolder = document.querySelector('main');
    let templateType = template.getAttribute('data-head');
    let templateRepeat = template.getAttribute('data-repeat');
    let templateUsed = template.getAttribute('data-used');
    let dataObject = {};
    if (templateType == "1" && templateUsed == "0") {
        console.log("insert template");
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


        console.log("length");
        console.log(headerItems.length - 1);
        console.log(headerItems[headerItems.length - 1]);

        let thisObject = headerItems[headerItems.length - 1].item;
        let sectionToEdit = headerItems[headerItems.length - 1];

        // thisObject.addEventListener('click', prapareForEditing.bind(thisObject,sectionToEdit), false);
        //thisObject.obj = thisObject;
        //thisObject.target = sectionToEdit;

        /*

        thisObject.addEventListener("click", function() {
            prapareForEditing(thisObject);
            focusedTemplate =sectionToEdit;
        }, false);*/



        thisObject.onclick = function () {

            prapareForEditing(thisObject, sectionToEdit);
        }





        //headerItem.onclick = function () { }



        console.log(dataObject);
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






        console.log(sectionItems);
        setTimeout(() => {
            scrollToTop(mainSectionsHolder.getBoundingClientRect().top - 150);
        }, 200);
    }
}