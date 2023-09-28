<?php

?>

<div class="adminHolder" data-type="adminHolder">
    <div class="adminHolder--leftNav" data-type="adminHolder--leftNav">
        <div class="adminHolder--leftNav--templatesList" data-type="adminHolder--leftNav--templatesList">
            <ul>
                <?php
                // define('TEMPLATESPATH', '../wp-content/plugins/YaraCompanion/pages/sectionTemplates/');
                $tamplatesDIR = YARA_PP_PATH . 'YaraCompanion/assets/pages/sectionTemplates/';
                //echo $tamplatesDIR;
                foreach (glob($tamplatesDIR . '*.php') as $filename) {
                    include($tamplatesDIR . basename($filename));
                }
                ?>
            </ul>
        </div>
    </div>
    <div class="adminHolder--mainContent" data-type="adminHolder--mainContent">
        <main>
           
        </main>
    </div>
    <div class="adminHolder--footer" data-type="adminHolder--footer">
        ADMIN FOOTER
    </div>
    <div class="mainGalleryHolder mainGalleryHolder--hidden" id="mainGalleryHolder">
        <div class="mainGalleryHolder__topNavigation">
            Main top navigation
        </div>
        <div class="mainGalleryHolder__scroller">
            <ul>
                <?php
                define('IMAGEPATH', '../wp-content/themes/Yara/assets/images/adm_images/');
                foreach (glob(IMAGEPATH . '*.webp') as $filename) {
                    //$imag[] =  basename($filename);
                    echo '<li><img src="' . IMAGEPATH . basename($filename) . '" alt="my image" /></li>';
                }
                //print_r($imag);
                ?>
                <li class="--sellected">
                    <img src="assets/images/abB002.webp" alt="my image" />
                </li>
            </ul>
        </div>
        <div class="mainGalleryHolder__bottomNavigation">
            <div class="button button-dark" id="gallerySaveResult">Save</div>
        </div>
    </div>
</div>