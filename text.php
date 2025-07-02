<?php
$im = imagecreatetruecolor(122,122);
$black = imagecolorallocate($im,0,0,0);
$red = imagecolorallocate($im,255,0,0);
imagefill($im,0,0,$black);
$font = 1;
$text = 'LOL';
$text_width = imagefontwidth($font)*strlen($text);
$text_height = imagefontheight($font);
$x = (122 - $text_width)/2;
$y = (122 - $text_height)/2;
imagestring($im,$font,$x,$y,$text,$red);
header('Content-Type: image/gif');
imagegif($im);
imagedestroy($im);
?>
