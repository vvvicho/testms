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
	echo " $value ";
}
//get_template_part( 'template-parts/content/content-page' );

// If comments are open or there is at least one comment, load up the comment template.
//if ( comments_open() || get_comments_number() ) {
//comments_template();
//}
//endwhile; // End of the loop.



get_footer();
