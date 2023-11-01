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
        <img src="/wp-content/plugins/YaraCompanion/assets/imagesAdmin/content.png" alt="section content">
        <span>Content +Slider Section</span>
    </figure>
    <templateHidden data-repeat="1" data-head="0" data-used="0">
        <div class="bgColors--sectionLight section" data-edit="ltr" data-callToAction="contentSlider">
            <div class="warper">
                <div class="item_12">
                    <h3 class="fade-in" data-edit="text">H3 Head Line</h3>
                </div>
                <figure class="item_7" data-edit="image">
                    <img src="/wp-content/plugins/YaraCompanion/assets/imagesAdmin/placeHolders/img_677_508.png" width="677" height="508" alt="my image" class="fade-in">
                </figure>
                <div class="articleInfo articleInfo item_5"> 
                    <div class="articleContent">
                        <h4 class="fade-in" data-edit="text delete">H4 Head Line</h4>
                        <div class="fade-in pHolder">
                            <p data-edit="text duplicate delete">Paragraf Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi eius quis praesentium et magni autem delectus voluptatibus explicabo accusantium veniam ea, quia quam velit temporibus nisi rem. Perferendis, accusantium incidunt.
                            </p>
                            <p data-icon="uk" class="flafIcons flafIcons--uk spParagraf" data-edit="pSpetial delete">
                                <span><strong>paragraf Title</strong></br>
                                    <i>A special paragraph with an icon</i></span>
                            </p>
                        </div>
                        <ul class="fade-in">
                            <li data-edit="text duplicate delete">List Item</li>
                        </ul>
                        <div class="button button-dark fade-in" data-edit="button">
                            <datalink data-href="https://google.com" target="">Button</datalink>
                        </div>
                    </div>
                </div>
                <div class='item_12 articleNavigation'>
                    <div class='icons icons-navLeft' onclick="contentSlide(-1,this)"></div>
                    <div class='icons icons-navRight' onclick="contentSlide(1,this)"></div>
                </div>
            </div>
            <div data-slider-dataHolder="1" data-slider-position="0">
                <strong data-slideData-template="{_@@h3_@@:_@@new H3 Head Line_@@,_@@h4_@@:_@@new H4 Head Line_@@,_@@img_@@:_@@/wp-content/plugins/YaraCompanion/assets/imagesAdmin/placeHolders/img_677_508.png_@@,_@@p_@@:_@@<p data-edit=\_@@text duplicate delete\_@@>Paragraf Lorem, ipsum dolor sit amet consectetur</p><p data-icon=\_@@uk\_@@ class=\_@@flafIcons flafIcons--uk spParagraf\_@@ data-edit=\_@@pSpetial delete\_@@><span><strong>paragraf Title</strong></br><i>A special paragraph with an icon</i></span></p>_@@, _@@ul_@@: _@@<li data-edit=\_@@text duplicate delete\_@@>List Item</li>_@@,   _@@button_@@:_@@<datalink data-href=\_@@https://google.com\_@@ target=\_@@\_@@>Button</datalink>_@@}"></strong>
                <i data-slideData=''> 123 5 </i>
            </div>
        </div>
        </div>
    </templateHidden>
</li>