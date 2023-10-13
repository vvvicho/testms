<?php
/*
define('WP_DEBUG', true);
define('WP_DEBUG_LOG', true);
define('WP_DEBUG_DISPLAY', true);
@ini_set('display_errors', E_ALL);
*/


$tamplatesDIR = dirname(__FILE__) . '/sectionTemplates_ver1/';
$Vdata = "";
foreach (glob($tamplatesDIR . '*.php') as $filename) {
    $Vdata .= file_get_contents($tamplatesDIR . basename($filename));
}
?>
<div class="adminHolder--leftNav--templatesList" data-type="adminHolder--leftNav--templatesList">
    <ul>
        <?php echo ($Vdata); ?>
    </ul>

    <ul>
        PAGES
        <?php
        $parse_uri = explode('wp-content', $_SERVER['SCRIPT_FILENAME']);
        require($parse_uri[0] . 'wp-load.php');
        
        global $blog_id;
        $curentBlog = $blog_id;
        //local
        //$mainBlog = 3;
        // live uk id = 6
        $mainBlog = 6;

        switch_to_blog($mainBlog);
        
        $pages = get_pages(array(
            'post_type' => 'page',
            'fields' => 'ids',
            'nopaging' => true,
            'meta_key' => '_wp_page_template',
            'meta_value' => 'yaraPageBuilder.php'
        
        ));
        
        foreach ($pages as $page) {
            $mykey_values = get_post_custom_values('customContent', $page->ID);
        ?>
            <li class="adminHolder--leftNav--templatesList--button" data-pageID="<?php echo $page->ID ?>" onClick="insertMyPage(this)" data-type="page done">
                <figure>
                    <span><?php echo $page->post_title ?></span>
                </figure>
                <templateHidden data-repeat="0" data-head="1" data-used="0">
                    <?php 
                        foreach ($mykey_values as $key => $value) {
                            echo " $value ";
                        }
                    ?>
                </templateHidden>
            </li>
        <?php
        }
        switch_to_blog($curentBlog);
        ?>         
    </ul>
</div>