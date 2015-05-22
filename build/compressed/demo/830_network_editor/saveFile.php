<?php
  $fileContent = str_replace("\\\"", "\"", $_POST["content"]);
  $fileName    = "./xml/".$_POST["xml"];
  $fh = fopen($fileName, "w");
  fwrite($fh, $fileContent);
  fclose($fh);
  print $fileContent;
?>