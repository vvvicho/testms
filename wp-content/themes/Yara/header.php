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
<html <?php  language_attributes(); ?> <?php // twentytwentyone_the_html_classes(); ?>>
<head>
	<meta charset="<?php bloginfo( 'charset' ); ?>" />
	<meta name="viewport" content="width=device-width, initial-scale=1" />
	<?php wp_head(); ?>
</head>

<body <?php body_class('yaraHome'); ?>>
<?php wp_body_open(); ?>

<div class="generaldivigation" id="generaldivigation">
        <div class="logoHolder">
            <h1>
                <a href="yaraHome.html"><img src="<?php echo(get_template_directory_uri()) ?>/assets/images/YaraLogo.webp?v=25" width="48" height="48"
                        alt="Yara Digital Products"></a>
            </h1>
            <h2>
                <a href="yaraHome.html"><img src="<?php echo(get_template_directory_uri()) ?>/assets/images/pixel.png?v=45" id="atfarmLogo" width="162"
                        height="48" alt="Atfarm"></a>
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
    </div>