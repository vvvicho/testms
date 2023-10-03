<?php
$tamplatesDIR = dirname(__FILE__) . '/sectionTemplates_ver1/';
foreach (glob($tamplatesDIR . '*.php') as $filename) {
    $Vdata .= file_get_contents($tamplatesDIR . basename($filename));
}
?>
<div class="adminHolder--leftNav--templatesList" data-type="adminHolder--leftNav--templatesList">
<ul>
<?php echo ($Vdata); ?>
</ul>
</div>