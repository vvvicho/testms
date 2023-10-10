<?php

/**
 * The template for displaying the footer *
 * Contains the closing of the #content div and all content after.
 */

?>

<footer>
    <div class="footer--items">
        <!--ul>
                <li class="list--title">
                    Social media
                </li>
                <li>Facebook</li>
                <li>Linkedin</li>
            </ul-->



        <ul>
            <li class="list--title">
                About us
            </li>
            <?php
            wp_nav_menu(array(
                'menu'          => "Footer About Us",
                'depth'         => 1,
                'container' => false,   
                'items_wrap' => '%3$s'       
            ));
            ?>

            <!--li>Privacy Policy</li>
                <li>Terms and Conditions</li-->
        </ul>
        <ul>
            <li>
                © Atfarm <?php echo date("Y"); ?> All rights reserved
            </li>
        </ul>
    </div>
</footer>
<?php wp_footer(); ?>

</body>

</html>