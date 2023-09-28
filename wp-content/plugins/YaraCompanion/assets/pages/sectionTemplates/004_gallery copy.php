<?php

/**
 * Section Name: Gallery
 * Data Tape: template gallery
 * Version: 1.0.0
 * Author: Yara Team
 * Author URI: https://yara.com
 */
?>

<li class="adminHolder--leftNav--templatesList--button" onClick="insertMySection(this)" data-type="template gallery">
    <figure>
        <img src="<?php echo (YARA_CC_PATH . 'assets/imagesAdmin/new.png'); ?>" alt="section content">
        <span>Gallery Section</span>
    </figure>
    <templateHidden data-repeat="1" data-head="0" data-used="0">
        <div class="bgColors--sectionLight section">
            <h4 data-edit="text delete">new head line</h4>

        </div>
    </templateHidden>
</li>