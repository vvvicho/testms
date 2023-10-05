<?php

/**
 * The header.
 *
 * This is the template that displays all of the <head> section and everything up until main.
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package WordPress
 * @subpackage Twenty_Twenty_One
 * @since Twenty Twenty-One 1.0
 */

?>
<!doctype html>
<html <?php language_attributes(); ?> <?php // twentytwentyone_the_html_classes(); 
                                        ?>>

<head>
    <meta charset="<?php bloginfo('charset'); ?>" />
    <meta name="viewport" content="width=device-width, initial-scale=1" /> 
    <?php wp_head(); ?>
</head>

<body <?php body_class('yaraHome'); ?>>
    <?php wp_body_open(); ?>

    <div class="generaldivigation" id="generaldivigation">
        <div class="logoHolder">
            <h1>
                <a href="<?php echo (get_home_url()); ?>"><img src="<?php echo (get_template_directory_uri()) ?>/assets/images/YaraLogo.webp?v=25" width="48" height="48" alt="Yara Digital Products"></a>
            </h1>
            <h2>
                <a href="<?php echo (get_home_url()); ?>"><img src="<?php echo (get_template_directory_uri()) ?>/assets/images/pixel.png?v=45" id="atfarmLogo" width="162" height="48" alt="Atfarm"></a>
            </h2>
        </div>
        <nav>
        <ul class="mobileNavHolder">
            <li id="mobileSearchButton" class="mobileNav icons icons-searchW"></li>
            <li id="mobileOpenCloseButton" data-status="0" class="mobileNav icons icons-openW"></li>
        </ul>
        <?php
        wp_nav_menu(array(
            '

        theme_location'     => "header_navigation",
            'depth'         => 2,
            'container'     => '',
            'menu_class'    => 'desktopNav',
            'menu_id'       => 'desktopNav'

        ));


        ?>
        </nav>
        <!--nav>
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
        </nav -->
        <div class="navLeftButtons">
            <div id="desktopSearchButton" class="desktopSearchButton icons icons-searchW"></div>
            <div class="button button-light">Login</div>
            <div class="button button-dark">Sign up</div>
        </div>
    </div>
    <?php

/*
    wp_nav_menu(array(
        '

theme_location'    => "header_navigation",
        'depth'            => 2,
        'container'     => 'nav',
        'menu_class'    => 'desktopNav'

    ));*/

/*
wp_nav_menu( array(
	'menu'				=> "Header Navigation", // (int|string|WP_Term) Desired menu. Accepts a menu ID, slug, name, or object.
	'menu_class'		=> "", // (string) CSS class to use for the ul element which forms the menu. Default 'menu'.
	'menu_id'			=> "", // (string) The ID that is applied to the ul element which forms the menu. Default is the menu slug, incremented.
	'container'			=> "", // (string) Whether to wrap the ul, and what to wrap it with. Default 'div'.
	'container_class'	=> "", // (string) Class that is applied to the container. Default 'menu-{menu slug}-container'.
	'container_id'		=> "", // (string) The ID that is applied to the container.
	'fallback_cb'		=> "", // (callable|bool) If the menu doesn't exists, a callback function will fire. Default is 'wp_page_menu'. Set to false for no fallback.
	'before'			=> "", // (string) Text before the link markup.
	'after'				=> "", // (string) Text after the link markup.
	'link_before'		=> "", // (string) Text before the link text.
	'link_after'		=> "", // (string) Text after the link text.
	'echo'				=> "", // (bool) Whether to echo the menu or return it. Default true.
	'depth'				=> "", // (int) How many levels of the hierarchy are to be included. 0 means all. Default 0.
	'walker'			=> "", // (object) Instance of a custom walker class.
	'theme_location'	=> "main_menu", // (string) Theme location to be used. Must be registered with register_nav_menu() in order to be selectable by the user.
	'items_wrap'		=> "", // (string) How the list items should be wrapped. Default is a ul with an id and class. Uses printf() format with numbered placeholders.
	'item_spacing'		=> "", // (string) Whether to preserve whitespace within the menu's HTML. Accepts 'preserve' or 'discard'. Default 'preserve'.
) );*/