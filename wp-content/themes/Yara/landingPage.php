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



foreach ($dbQuery as $key => $blog) {
    switch_to_blog($blog->blog_id);
    $option = 'blogname'; //moderation_keys

    // echo get_option( 'blogname') . ' ';
    // echo get_option( 'blogdescription') . ' ';
    // echo get_option( 'siteurl') . '<br />';

    $blogData = explode(" ", get_option('blogdescription'));
    //  print_r( $blogData);

    if(count($blogData) < 3) {
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
                    <h4>Europe</h4>
                    <?php
                    echo $europeHTML;
                    ?>
                    <li>
                        <a href="#">
                            <p data-icon="uk" class="flafIcons flafIcons--uk spParagraf">
                                <span>
                                    <strong>Dr Alastair Leake</strong>
                                    <i>Director of Policy at </i>
                                </span>
                            </p>
                        </a>
                    </li>
                    <li>
                        <p data-icon="uk" class="flafIcons flafIcons--uk spParagraf">
                            <span>
                                <strong>Dr Alastair Leake</strong>
                                <i>Director of Policy at </i>
                            </span>
                        </p>
                    </li>
                    <li>
                        <p data-icon="uk" class="flafIcons flafIcons--uk spParagraf">
                            <span>
                                <strong>Dr Alastair Leake</strong>
                                <i>Director of Policy at </i>
                            </span>
                        </p>
                    </li>
                    <li>
                        <p data-icon="uk" class="flafIcons flafIcons--uk spParagraf">
                            <span>
                                <strong>Dr Alastair Leake</strong>
                                <i>Director of Policy at </i>
                            </span>
                        </p>
                    </li>
                    <li>
                        <p data-icon="uk" class="flafIcons flafIcons--uk spParagraf">
                            <span>
                                <strong>Dr Alastair Leake</strong>
                                <i>Director of Policy at </i>
                            </span>
                        </p>
                    </li>
                    <li>
                        <p data-icon="uk" class="flafIcons flafIcons--uk spParagraf">
                            <span>
                                <strong>Dr Alastair Leake</strong>
                                <i>Director of Policy at </i>
                            </span>
                        </p>
                    </li>
                    <li>
                        <p data-icon="uk" class="flafIcons flafIcons--uk spParagraf">
                            <span>
                                <strong>Dr Alastair Leake</strong>
                                <i>Director of Policy at </i>
                            </span>
                        </p>
                    </li>
                    <li>
                        <p data-icon="uk" class="flafIcons flafIcons--uk spParagraf">
                            <span>
                                <strong>Dr Alastair Leake</strong>
                                <i>Director of Policy at </i>
                            </span>
                        </p>
                    </li>
                    <li>
                        <p data-icon="uk" class="flafIcons flafIcons--uk spParagraf">
                            <span>
                                <strong>Dr Alastair Leake</strong>
                                <i>Director of Policy at </i>
                            </span>
                        </p>
                    </li>
                    <li>
                        <p data-icon="uk" class="flafIcons flafIcons--uk spParagraf">
                            <span>
                                <strong>Dr Alastair Leake</strong>
                                <i>Director of Policy at </i>
                            </span>
                        </p>
                    </li>
                    <li>
                        <p data-icon="uk" class="flafIcons flafIcons--uk spParagraf">
                            <span>
                                <strong>Dr Alastair Leake</strong>
                                <i>Director of Policy at </i>
                            </span>
                        </p>
                    </li>
                    <li>
                        <p data-icon="uk" class="flafIcons flafIcons--uk spParagraf">
                            <span>
                                <strong>Dr Alastair Leake</strong>
                                <i>Director of Policy at </i>
                            </span>
                        </p>
                    </li>
                    <li>
                        <p data-icon="uk" class="flafIcons flafIcons--uk spParagraf">
                            <span>
                                <strong>Dr Alastair Leake</strong>
                                <i>Director of Policy at </i>
                            </span>
                        </p>
                    </li>
                    <li>
                        <p data-icon="uk" class="flafIcons flafIcons--uk spParagraf">
                            <span>
                                <strong>Dr Alastair Leake</strong>
                                <i>Director of Policy at </i>
                            </span>
                        </p>
                    </li>
                    <li>
                        <p data-icon="uk" class="flafIcons flafIcons--uk spParagraf">
                            <span>
                                <strong>Dr Alastair Leake</strong>
                                <i>Director of Policy at </i>
                            </span>
                        </p>
                    </li>
                </ul>
                <ul class="item_4 --col1">
                    <h4>Europe</h4>

                    <li>
                        <p data-icon="uk" class="flafIcons flafIcons--uk spParagraf">
                            <span>
                                <strong>Dr Alastair Leake</strong>
                                <i>Director of Policy at </i>
                            </span>
                        </p>
                    </li>
                    <li>
                        <p data-icon="uk" class="flafIcons flafIcons--uk spParagraf">
                            <span>
                                <strong>Dr Alastair Leake</strong>
                                <i>Director of Policy at </i>
                            </span>
                        </p>
                    </li>
                    <li>
                        <p data-icon="uk" class="flafIcons flafIcons--uk spParagraf">
                            <span>
                                <strong>Dr Alastair Leake</strong>
                                <i>Director of Policy at </i>
                            </span>
                        </p>
                    </li>
                    <h4>Europe</h4>
                    <li>
                        <p data-icon="uk" class="flafIcons flafIcons--uk spParagraf">
                            <span>
                                <strong>Dr Alastair Leake</strong>
                                <i>Director of Policy at </i>
                            </span>
                        </p>
                    </li>
                    <li>
                        <p data-icon="uk" class="flafIcons flafIcons--uk spParagraf">
                            <span>
                                <strong>Dr Alastair Leake</strong>
                                <i>Director of Policy at </i>
                            </span>
                        </p>
                    </li>
                    <li>
                        <p data-icon="uk" class="flafIcons flafIcons--uk spParagraf">
                            <span>
                                <strong>Dr Alastair Leake</strong>
                                <i>Director of Policy at </i>
                            </span>
                        </p>
                    </li>
                    <li>
                        <p data-icon="uk" class="flafIcons flafIcons--uk spParagraf">
                            <span>
                                <strong>Dr Alastair Leake</strong>
                                <i>Director of Policy at </i>
                            </span>
                        </p>
                    </li>
                    <li>
                        <p data-icon="uk" class="flafIcons flafIcons--uk spParagraf">
                            <span>
                                <strong>Dr Alastair Leake</strong>
                                <i>Director of Policy at </i>
                            </span>
                        </p>
                    </li>
                    <li>
                        <p data-icon="uk" class="flafIcons flafIcons--uk spParagraf">
                            <span>
                                <strong>Dr Alastair Leake</strong>
                                <i>Director of Policy at </i>
                            </span>
                        </p>
                    </li>
                    <li>
                        <p data-icon="uk" class="flafIcons flafIcons--uk spParagraf">
                            <span>
                                <strong>Dr Alastair Leake</strong>
                                <i>Director of Policy at </i>
                            </span>
                        </p>
                    </li>
                    <li>
                        <p data-icon="uk" class="flafIcons flafIcons--uk spParagraf">
                            <span>
                                <strong>Dr Alastair Leake</strong>
                                <i>Director of Policy at </i>
                            </span>
                        </p>
                    </li>
                    <li>
                        <p data-icon="uk" class="flafIcons flafIcons--uk spParagraf">
                            <span>
                                <strong>Dr Alastair Leake</strong>
                                <i>Director of Policy at </i>
                            </span>
                        </p>
                    </li>
                    <li>
                        <p data-icon="uk" class="flafIcons flafIcons--uk spParagraf">
                            <span>
                                <strong>Dr Alastair Leake</strong>
                                <i>Director of Policy at </i>
                            </span>
                        </p>
                    </li>
                    <li>
                        <p data-icon="uk" class="flafIcons flafIcons--uk spParagraf">
                            <span>
                                <strong>Dr Alastair Leake</strong>
                                <i>Director of Policy at </i>
                            </span>
                        </p>
                    </li>
                    <li>
                        <p data-icon="uk" class="flafIcons flafIcons--uk spParagraf">
                            <span>
                                <strong>Dr Alastair Leake</strong>
                                <i>Director of Policy at </i>
                            </span>
                        </p>
                    </li>
                </ul>
            </div>
        </div>
    </div>

</main>






<?php
get_footer();
