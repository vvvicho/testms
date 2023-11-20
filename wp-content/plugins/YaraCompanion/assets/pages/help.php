<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Yara Companion Help</title>
</head>

<body>
    <?php

    $helpImagesPath = YARA_CC_PATH . 'assets/imagesHelp/';


    ?>

    <div class="yaraHelpContainer">
        <section data-type="giude" data-type="choose a project">
            <h3><a id="step1"></a>1. Choose a project</h3>
            <div class="informationData flex flex--x2">
                <figure>
                    <img src="<?php echo $helpImagesPath . "projectSellect.png"; ?>">
                </figure>
                <ul class="helpSteps numbers">
                    <li>1. From the top left corner of the system select <b>“My Sites”</b>.</li>
                    <li>2. Select a project you want to work on.</li>
                    <li>3. After you select a <b>“Dashboard”</b>, the system will load the necessary tools to work with your chosen project.</li>
                    <li>Тhe name of the project you selected will be written next to the <b>“My Sites”</b> button.</li>
                </ul>
            </div>
        </section>
        <section data-type="giude" data-type="Create New Page">
            <h3><a id="step2"></a>2. Create New Page</h3>
            <div class="informationData flex flex--x2">
                <figure>
                    <img src="<?php echo $helpImagesPath . "newPage_step_01.png"; ?>">
                </figure>
                <ul class="helpSteps numbers">
                    <li>1. From the menu on the left, select <b>"Pages"</b></li>
                    <li>2. Then select <b>"Add New"</b></li>
                </ul>
            </div>
        </section>
        <section data-type="giude" data-type="Create New Page">
            <h4><a id="step21"></a><b>2.1</b> Setting up the Yara Companion plugin</h4>
            <div class="informationData flex flex--x2img">
                <figure>
                    <img src="<?php echo $helpImagesPath . "newPage_step_01a_cf_missing.png"; ?>">
                    <figcaption>Case A</figcaption>
                </figure>
                <figure>
                    <img src="<?php echo $helpImagesPath . "newPage_step_01b_cf_on.png"; ?>">
                    <figcaption>Case B</figcaption>
                </figure>
            </div>
            <div class="informationData flex flex--x2">
                <ul class="helpSteps numbers">
                    <li>The pictures above show a case in which the plugin is not yet set up in <b>Case A</b> and plugin is properly setup <b>Case B</b></li>
                    <li>
                        If you don't see the YARA logo at the top of the screen and the custom fields section at the bottom of the screen. Please follow the instructions below. </br>In other cases skip the next step and go to next one.
                        </br></br></br>
                    </li>
                </ul>
            </div>
            <div class="informationData flex flex--x2">
                <figure>
                    <img src="<?php echo $helpImagesPath . "newPage_step_02_cf_setup.png"; ?>">
                </figure>
                <figure>
                    <img src="<?php echo $helpImagesPath . "newPage_step_03_cf_setup.png"; ?>">
                </figure>
                <ul class="helpSteps numbers">
                    <li>1. From the top right corner of the app, select the three dots icon which will open a settings panel</li>
                    <li>2. Then select <b>"Preferences"</b></li>
                    <li>3. A preferences panel will appear on the screen select <b>"Panels"</b></li>
                    <li>4. Enable <b>"Custom Fields"</b></li>
                    <li>5. Save the settings by pressing the <b>"Show & Reload Page"</b> button</li>
                    <li>After completing these steps your screen should look like <b>"Case B"</b> above</li>
                </ul>
            </div>
            <h4><a id="step22"></a><b>2.2</b> Create a page</h4>
            <div class="informationData flex flex--x2">
                <figure>
                    <img src="<?php echo $helpImagesPath . "newPage_step_04_create.png"; ?>">
                </figure>
                <ul class="helpSteps numbers">
                    <li>1. Choose a title for your page</li>
                    <li>2. (a,b) Due to the fact that the page is under development, please change the visibility to <b>private</b>. So it will be visible only to page administrators.</br></br>
                        When the page is ready and approved you can always change the status of the page to <b>public</b>
                    </li>
                    <li>3. Press the <b>"Publish"</b> button</li>
                    <li>4. After publishing the page, a <b>"View Page"</b> button will appear in the lower left corner of the screen, <b>press it</b>.</li>
                </ul>
            </div>
            <h4><a id="step23"></a><b>2.3</b> View a published page</h4>
            <div class="informationData flex flex--x2">
                <figure>
                    <img src="<?php echo $helpImagesPath . "newPage_step_05_view.png"; ?>">
                </figure>
                <ul class="helpSteps numbers">
                    <li>We have not added any content, the page will appear empty, as in the image on the left</li>
                    <li>While you are logged in as an administrator in the system, at the top of the screen you will be able to use an <b>administrative panel</b></li>
                    <li>1. If you press <b>"Edit Page"</b> you will return to the previous screen where you can continue working on the newly created page.</li>
                    <li>2. Let's select button 2 from the top left corner of the page to return to the main menu of the application</li>
                </ul>
            </div>
        </section>
        <section data-type="giude" data-type="Selecting an already created page">
            <h3><a id="step3"></a>3. Selecting an already created page</h3>
            <div class="informationData flex flex--x2">
                <figure>
                    <img src="<?php echo $helpImagesPath . "sellectPagesList_06.png"; ?>">
                </figure>
                <figure>
                    <img src="<?php echo $helpImagesPath . "allPagesList_07.png"; ?>">
                </figure>
                <ul class="helpSteps numbers">
                    <li>1. From the menu on the left, select <b>"Pages"</b></li>
                    <li>2. A list of all created pages will appear on the screen. Let's select <b>"My New Page"</b>.</li>
                </ul>
            </div>
        </section>
        <section data-type="giude" data-type="Selecting an already created page">
            <h3>
                <bug>Duplicated custom fields bug</bug>
            </h3>
            <div class="informationData flex flex--x2">
                <figure>
                    <img src="<?php echo $helpImagesPath . "pageBug_08.png"; ?>">
                </figure>
                <ul class="helpSteps numbers">
                    <li>1. After opening the page, if two fields with the name <b>"customContent"</b> exist in custom fields, delete the second field</li>
                    <li>2. Use <b>"Update"</b> button</b>.</li>
                    <li>This bug will be fixed in version 1.12.3</br>
                        <i>Note! This bug is observed only on newly created pages. Once deleted, the duplicate field does not appear again</i>
                    </li>
                </ul>
            </div>
        </section>
        <section data-type="giude" data-type="Selecting an already created page">
            <h3><a id="step4"></a>4. Create content using the <b>Yara Companion</b> plugin</h3>
            <div class="informationData flex flex--x2">
                <figure>
                    <img src="<?php echo $helpImagesPath . "sellectTemplate_09.png"; ?>">
                </figure>
                <ul class="helpSteps numbers">
                    <li>1. To work properly, the plugin needs the appropriate template</li>
                    <li>2. From the drop-down menu, select <b>"Yara Page Builder"</b></li>
                    <li>3. Update the page</li>
                    <li>4. Click on <b>"Yara Builder"</b> button</li>
                </ul>
            </div>
            <h4><a id="step41"></a><b>4.1</b> Create Hero Header Section</h4>
            <div class="informationData flex flex--x2">
                <figure>
                    <img src="<?php echo $helpImagesPath . "createHero_10.png"; ?>">
                </figure>
                <ul class="helpSteps numbers">
                    <li>When creating a new page by pressing the <b>"Yara Builder"</b> button, the usable sections will appear on the left and the right field will be empty. In the right field you will be able to see in real time how your new page will look like
                    </li>
                    <li>1. Let's Select our <b>"HERO SECTION"</b> by clicking on it</br></br>
                        <i>Note! Keep in mind that you can have only one <b>"HERO SECTION"</b> per page.</i>
                    </li>
                </ul>
            </div>
            <h4><a id="step42"></a><b>4.2</b> Save Template</h4>
            <div class="informationData flex flex--x2">
                <figure>
                    <img src="<?php echo $helpImagesPath . "saveHero_11.png"; ?>">
                </figure>
                <ul class="helpSteps numbers">
                    <li>By selecting a section on the left side of the screen, the system will automatically display the section you selected on the right side of the screen.</br></br>
                        <i>Note! If you have already selected several sections, remember that each newly selected section will appear at the bottom of the page</i>
                    </li>
                    <li>1. Let's ignore the redaction options of our selected section for the moment and save our template by pressing the <b>"SAVE TEMPLATE"</b> button</li>
                </ul>
            </div>
            <h4><a id="step43"></a><b>4.3</b> Update / Publish page</h4>
            <div class="informationData flex flex--x2">
                <figure>
                    <img src="<?php echo $helpImagesPath . "updateTemplate_12.png"; ?>">
                </figure>
                <ul class="helpSteps numbers">
                    <li>1. Use the <b>"Update / Publish"</b> button in the top right corner of the app to publish your changes</br></br>
                        <i>Because we changed the visibility of the page to private, these changes will only be visible to Site Administrators, but not to users.</br>
                            hint: <a href="#step22">How to change the status of a page to published or private</a>
                        </i>
                    </li>
                    <li>2. See what our page looks like by clicking the <b>"View page"</b> button</li>
                </ul>
            </div>
            <h4><a id="step44"></a><b>4.4</b> Page Preview</h4>
            <div class="informationData flex flex--x2">
                <figure>
                    <img src="<?php echo $helpImagesPath . "heroHeadPreview_13.png"; ?>">
                </figure>
                <ul class="helpSteps numbers">
                    <li><i>If your page doesn't look like the image on the left, check that you've selected the correct template</br>
                            hint: <a href="#step4">How to choose a page template</a> Point 4 Steps 1 and 2.
                        </i></li>
                    <li>1. Let's continue editing our page by selecting <b>"Edit Page"</b> from the admin panel</br>
                        Then, to continue editing already created content, press the Yara <b>"Builder button"</b></br>
                        hint: <a href="#step4">As shown in point 4 step 4</a>
                    </li>
                </ul>
            </div>
            <h4><a id="step45"></a><b>4.5</b> Edit a page</h4>
            <div class="informationData flex flex--x2">
                <figure>
                    <img src="<?php echo $helpImagesPath . "heroHeadPreview_13.png"; ?>">
                </figure>
                <ul class="helpSteps numbers">
                    <li><i>If your page doesn't look like the image on the left, check that you've selected the correct template</br>
                            hint: <a href="#step4">How to choose a page template</a> Point 4 Steps 1 and 2.
                        </i></li>
                    <li>1. Let's continue editing our page by selecting <b>"Edit Page"</b> from the admin panel</br>
                        Then, to continue editing already created content, press the Yara <b>"Builder button"</b></br>
                        hint: <a href="#step4">As shown in point 4 step 4</a>
                    </li>
                </ul>
            </div>
            <h4><a id="step46"></a><b>4.6</b> Edit a section</h4>
            <div class="informationData flex flex--x2">
                <figure>
                    <img src="<?php echo $helpImagesPath . "editSection_14.png"; ?>">
                </figure>
                <ul class="helpSteps numbers">
                    <li>1. In the lower right corner of each added section, there is an <b>"edit icon"</b> to start editing any section first press the <b>"edit icon"</b></li>
                    <li>1. Let's continue editing our page by selecting <b>"Edit Page"</b> from the admin panel</br>
                        Then, to continue editing already created content, press the Yara <b>"Builder button"</b></br>
                        hint: <a href="#step4">As shown in point 4 step 4</a>
                    </li>
                </ul>
            </div>
        </section>
    </div>

</body>

</html>