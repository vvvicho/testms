<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/documentation/article/editing-wp-config-php/
 *
 * @package WordPress
 */



$multiSiteDomain = 'yara.test';

if (file_exists(dirname(__FILE__) . '/wp-config-local.php')) {
	// IMPORTANT: ensure your local config does not include wp-settings.php
	$multiSiteDomain = 'yara.test';
	require_once dirname(__FILE__) . '/wp-config-local.php';
} else {

	// ** Database settings - You can get this info from your web host ** //
	/** The name of the database for WordPress */
	define( 'DB_NAME', 'testms' );

	/** Database username */
	define( 'DB_USER', 'testms' );

	/** Database password */
	define( 'DB_PASSWORD', 'AMYU2mWWEbv400H' );


}







/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'd&QU,!_`YUtv@r*~TA{LwK`Iv%PXYKICRRx?Y.T=u<}ztK%)<W4yDt&M)~!0g-Mx' );
define( 'SECURE_AUTH_KEY',  'tPC2>Bwebt1HtzKpj*NnJcK3hO*)MM)-ZU@PTAcK9F!CtQjtk?V*oA]3nUnp^*SS' );
define( 'LOGGED_IN_KEY',    'q#gPi?]:zc_ c[X/XA?T!09+)GzQe#6!JKy#5W|JIQ<+d[mC_^my{X--dA#OuDmT' );
define( 'NONCE_KEY',        'b/O1~S4Jcl;l9)AuStcu2PmanRy>Osx~vk!_Qc/XL]0]OI_jaEw[m^6hDM_?DXqu' );
define( 'AUTH_SALT',        '#3XdaC7uWN)j4GmAAhN)/{D2N1}tm-EL`xBD#4#F:}^hmi^<^]`DR;XkX~u_I]lT' );
define( 'SECURE_AUTH_SALT', '-M>Xg-=VJYa#/3s*lEhJ_n-b`R-g(Zp<8kKzn@!5P0)bK0c-uqWSB5iE!`OE}WE$' );
define( 'LOGGED_IN_SALT',   '}t;&]v;3^K0#fa1sYpD(u_0}]_Fc^~Oq?BUqGNEXL?i-yqOc~|k9Z_OA6YdD1vkt' );
define( 'NONCE_SALT',       '3`D_g/xfRw)8jKVz3]`Phw)|Boe5bR23sCd^!?/Jf}>@^lqOO.Cb(c=#3LiLaP3)' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'AMZZ_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/documentation/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */

define( 'WP_ALLOW_MULTISITE', true );
define( 'MULTISITE', true );
define( 'SUBDOMAIN_INSTALL', true );
define( 'DOMAIN_CURRENT_SITE', $multiSiteDomain  );
define( 'PATH_CURRENT_SITE', '/' );
define( 'SITE_ID_CURRENT_SITE', 1 );
define( 'BLOG_ID_CURRENT_SITE', 1 );

/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
