<?php

/**
 * Functions and definitions
 */

add_action('init', 'smartwp_disable_emojis');

function smartwp_disable_emojis()
{
	remove_action('wp_head', 'print_emoji_detection_script', 7);
	remove_action('admin_print_scripts', 'print_emoji_detection_script');
	remove_action('wp_print_styles', 'print_emoji_styles');
	remove_filter('the_content_feed', 'wp_staticize_emoji');
	remove_action('admin_print_styles', 'print_emoji_styles');
	remove_filter('comment_text_rss', 'wp_staticize_emoji');
	remove_filter('wp_mail', 'wp_staticize_emoji_for_email');
	add_filter('tiny_mce_plugins', 'disable_emojis_tinymce');
}

function disable_emojis_tinymce($plugins)
{
	if (is_array($plugins)) {
		return array_diff($plugins, array('wpemoji'));
	} else {
		return array();
	}
}

//REMOVE GUTENBERG BLOCK LIBRARY CSS FROM LOADING ON FRONTEND
function remove_wp_block_library_css()
{
	wp_dequeue_style('wp-block-library');
	wp_dequeue_style('wp-block-library-theme');
	wp_dequeue_style('wc-block-style'); // REMOVE WOOCOMMERCE BLOCK CSS
	wp_dequeue_style('global-styles'); // REMOVE THEME.JSON
}
add_action('wp_enqueue_scripts', 'remove_wp_block_library_css', 100);

add_action( 'wp_enqueue_scripts', function() {
    wp_dequeue_style( 'classic-theme-styles' );
}, 20 );

function yara_enqueue_scripts() {

    wp_enqueue_script( 'app-functions', get_stylesheet_directory_uri() . '/assets/js/app.js', [], '6.8.3', true );
    // Enqueue slider css file
    wp_enqueue_style( 'main-css', get_template_directory_uri() . '/style.css', [], '1.0.0' );
	//wp_enqueue_style( 'yaraGlobal-css', get_template_directory_uri() . '/assets/scss/yaraGlobal.css', [], '1.0.0' );	
    // Enqueue slider js file
    //wp_enqueue_script( 'figaro-child-slider', get_stylesheet_directory_uri() . '/assets/js/slider.js', [], '0.0.1', true );
}

add_action( 'wp_enqueue_scripts', 'yara_enqueue_scripts' );
