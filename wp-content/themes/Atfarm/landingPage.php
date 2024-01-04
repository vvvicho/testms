<?php

/**
 * Template Name: Yara Landing Page
 */


get_header();

?>



<?php

global $wpdb;
$dbQuery = $wpdb->get_results("SELECT blog_id, domain, path FROM $wpdb->blogs WHERE archived = '0' AND deleted = '0' AND spam = '0' ORDER BY blog_id");


$europeHTML = '';
$americasHTML = '';
$africaHTML = '';



foreach ($dbQuery as $key => $blog) {
    switch_to_blog($blog->blog_id);
    $option = 'blogname'; //moderation_keys

    // echo get_option( 'blogname') . ' ';
    // echo get_option( 'blogdescription') . ' ';
    // echo get_option( 'siteurl') . '<br />';
    //echo (string)(count(explode(" ",get_option('blogdescription')))-1);

    $blogData = explode(" ", get_option('blogdescription'));
    //  print_r( $blogData);

    //echo count($blogData) . " : " . get_option('blogdescription') . "</br>";


    if (count($blogData) > 3) {
        $replaceNspaces = count($blogData) - 3;
        $newString = preg_replace('/ /', '___',  get_option('blogdescription'), $replaceNspaces);
        reset($blogData);
        $blogData = explode(" ", $newString);
        $blogData[0] = preg_replace('/___/', ' ',  $blogData[0]);
    }





    //preg_replace('/,/', '',  $str, 1);

    if (count($blogData) < 3) {
        $newString = get_option('blogdescription') . " Null Null";
        $blogData = explode(" ", $newString);
    }


    if ($blogData[1] == 'Europe') {

        $europeHTML .=
            '
        <li>
            <a href="' . get_option('siteurl') . '">
                <p class="flafIcons flafIcons--' . strtolower($blogData[2])  . '">
                    <span>
                        <strong>' . $blogData[0] . '</strong>
                        <i>' . get_option('blogname') . '</i>
                    </span>
                </p>
            </a>
        </li>
        ';
    } else if ($blogData[1] == 'Americas') {
        $americasHTML .=
            '
        <li>
            <a href="' . get_option('siteurl') . '">
                <p class="flafIcons flafIcons--' . strtolower($blogData[2])  . '">
                    <span>
                        <strong>' . $blogData[0] . '</strong>
                        <i>' . get_option('blogname') . '</i>
                    </span>
                </p>
            </a>
        </li>
        ';
    }  else if ($blogData[1] == 'Africa') {
        $africaHTML .=
            '
        <li>
            <a href="' . get_option('siteurl') . '">
                <p class="flafIcons flafIcons--' . strtolower($blogData[2])  . '">
                    <span>
                        <strong>' . $blogData[0] . '</strong>
                        <i>' . get_option('blogname') . '</i>
                    </span>
                </p>
            </a>
        </li>
        ';
    }



   

    restore_current_blog();
}


?>

<main>
    <div class="bgColors--sectionLight section landingPageContainer">
        <div class="landingPageContainer--holder">
            <div class="warper">
                <h3 class="item_12">Select country</h3>
                <ul class="item_8 --col2">
                    <li class="title">Europe</li>
                    <?php
                    echo $europeHTML;
                    ?>
                </ul>
                <ul class="item_4 --col1">
                    <li class="title">Americas</li>
                    <?php
                    echo $americasHTML;
                    ?>
                    <li class="title">Africa</li>
                    <?php echo $africaHTML ?>                    
                </ul>
            </div>
        </div>
    </div>

</main>






<?php
get_footer();
