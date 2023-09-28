<?php

/**
 * Section Name: Content
 * Data Tape: template content
 * Version: 1.0.0
 * Author: Yara Team
 * Author URI: https://yara.com
 */
?>

<li class="adminHolder--leftNav--templatesList--button" onClick="insertMySection(this)" data-type="template content">
    <figure>
        <img src="<?php echo (YARA_CC_PATH . 'assets/imagesAdmin/content.png'); ?>" alt="section content">
        <span>Content Section</span>
    </figure>
    <templateHidden data-repeat="1" data-head="0" data-used="0">
        <div class="bgColors--sectionLight section" data-edit="ltr">
            <div class="warper">
                <div class="item_12">
                    <h3 data-edit="text delete">H3 Head Line</h3>
                </div>
                <figure class="item_7" data-edit="image">
                    <img src="<?php echo (YARA_CC_PATH . 'assets/imagesAdmin/placeHolders/img_677_508.png'); ?>" width="677" height="508" alt="my image" class="fade-in">
                </figure>
                <div class="articleInfo articleInfo--qrCode item_5">
                    <div class="articleContent">
                        <figure  data-edit="image delete">
                            <img src="<?php echo (YARA_CC_PATH . 'assets/imagesAdmin/placeHolders/img_271_271.png'); ?>" width="271" height="271" alt="my image">
                        </figure>
                        <h4 class="fade-in" data-edit="text delete">H4 Head Line</h4>
                        <p class="fade-in" data-edit="text duplicate delete">Paragraf Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi eius quis praesentium et magni autem delectus voluptatibus explicabo accusantium veniam ea, quia quam velit temporibus nisi rem. Perferendis, accusantium incidunt.</p>
                        <p class="fade-in" data-edit="text duplicate delete">Paragraf Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi eius quis praesentium et magni autem delectus voluptatibus explicabo accusantium veniam ea, quia quam velit temporibus nisi rem. Perferendis, accusantium incidunt.</p>
                        <ul>
                            <li data-edit="text duplicate delete">List Item
                            </li>
                            <li data-edit="text duplicate delete">List Item
                            </li>
                        </ul>
                        <p data-icon="uk" class="flafIcons flafIcons--uk spParagraf">
                            <strong data-edit="text delete">paragraf Title</strong>
                            <i data-edit="text delete">A special paragraph
                            with an icon</i>
                        </p>
                        <div class="button button-dark fade-in" data-edit="button delete">
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
    </templateHidden>
</li>