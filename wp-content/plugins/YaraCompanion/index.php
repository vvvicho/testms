<?php

/**
 * Plugin Name: Yara Companion
 * Plugin URI: 
 * Description: Page builder plugin
 * Version: 1.0.0
 * Author: Yara Team
 * Author URI: https://yara.com
 * Requires PHP: 7.2
 */

ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

defined('ABSPATH') || die;
define('YARA_CC_VERSION', '1.0.0');
define('YARA_CC_PATH', plugin_dir_url(__FILE__));
define('YARA_PP_PATH', plugin_dir_path(__DIR__));
//define('YARA_URI_PATH',get_site_url())





function yara_init()
{
    include(YARA_PP_PATH . 'YaraCompanion/assets/pages/pagesEditor.php');
}



function yara_companion_setup_menu()
{
    add_menu_page('Yara Companion', 'Yara Companion', 'manage_options', 'yara-plugin', 'yara_init');
}
add_action('admin_menu', 'yara_companion_setup_menu');

function yara_companion_functions()
{
    $yaraPreventCache = time();
    $yaraData['pluginDirUrl'] = YARA_CC_PATH;
    $yaraData['itemsData'] =  "123 dy data";
    $yaraData['yaraPreventCache'] =  $yaraPreventCache;
    wp_enqueue_style('yara-admin-style',  YARA_CC_PATH . 'assets/scssAdmin/main.css', false, $yaraPreventCache, 'all');
    wp_enqueue_style('yara-pagesMain-style',  get_site_url() . '/wp-content/themes/Yara/style.css', false, $yaraPreventCache, 'all');
   // wp_enqueue_style('yara-pagesComponents-style',  YARA_CC_PATH . '../../themes/Yara/assets/scss/yaraGlobal.css', false, '1.0', 'all');
   // wp_enqueue_script('advanced-page-script', YARA_CC_PATH . '../../themes/Yara/assets/js/app.js', NULL, '1.0.1', true);
    wp_enqueue_script('advanced-script', YARA_CC_PATH . 'assets/jsAdmin/app.js', NULL, $yaraPreventCache, true);
    wp_localize_script(
        'advanced-script',
        'advanced_script_vars',
        $yaraData
    );
}

add_action('admin_enqueue_scripts', 'yara_companion_functions');
