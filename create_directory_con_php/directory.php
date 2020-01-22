<?php
  error_reporting(E_ALL);
  ini_set("display_errors", 1);

  $path = $_SERVER['DOCUMENT_ROOT']."/create_directory_con_php/".$_POST['name'];

  if(file_exists($path)){
    echo "la carpeta a crear ya existe<br/>";
    echo "<a href=\"index.php\"> <- back</a>";
  }else{

    if(create_directory($path)){
      header("Location: index.php");
    }else{
      echo "no pudo crear la carpeta</br>";
      echo $path."</br>";
    }
  }

  function create_directory($path){
    $result = mkdir($path);
    if(!$result):
      return false;
    else:
      return true;
    endif;
  }

?>
