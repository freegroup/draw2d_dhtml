<?php
  header('Content-type: text/xml');
  header("Expires: Mon, 26 Jul 1997 05:00:00 GMT");
  header("Cache-Control: no-cache");
  header("Pragma: no-cache");

  $fileName = "./xml/".$_GET["xml"];
  $content = file_get_contents($fileName);
  print $content;
?>