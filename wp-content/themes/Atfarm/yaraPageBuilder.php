<?php

/**
 * Template Name: Yara Page Builder
 */

get_header();

/* Start the Loop */
//while ( have_posts() ) :
//echo('the loop has been');
//$pagePost = the_post();	
//print_r($pagePost);
/*?> 
	<h2><?php the_title(); ?></h2>
	<?php*/
//the_content();
$mykey_values = get_post_custom_values('customContent'); 

foreach ($mykey_values as $key => $value) {

		$patterns = array();
		$patterns[0] = '/datalink/i';
		$patterns[1] = '/data-href/i';

		$replacements = array();
		$replacements[0] = 'a';
		$replacements[1] = 'href';

    $newValue =  preg_replace($patterns, $replacements, $value);
	echo "$newValue ";
}

get_footer();
