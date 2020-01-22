<?php
      error_reporting(E_ALL);
      ini_set("display_errors", 1);
      /*
      echo $_FILES["uploaded_file"]['name']."</br>";
      echo $_FILES["uploaded_file"]['type']."</br>";
      echo $_FILES["uploaded_file"]['size']."</br>" ;
      echo $_FILES["uploaded_file"]['tmp_name']."</br>";
      */
      $error = checkerrors($_FILES["uploaded_file"]['error']);
      //echo var_dump($_FILES);
      if($error[0]){
        $is_uploaded = move_uploaded_file($_FILES["uploaded_file"]['tmp_name'],"/var/www/html/upload_con_php/x/".basename($_FILES["uploaded_file"]['name']));
        if($is_uploaded):
            echo "el archivo fue subido con exito";
        else:
            echo "el archivo no a podido ser subido ";
        endif;
      }else{
          echo $error[1];
      }

      function checkerrors($error)
      {
          switch ($error) {
              case UPLOAD_ERR_OK:
                  return array(true,"file was upload succesfully");
                  break;
              case UPLOAD_ERR_INI_SIZE:
                  return array(false,"an error occurs: size error");
                  break;
              case UPLOAD_ERR_FORM_SIZE:
                  return array(false,"an error occurs: do not size specified form values");
                  break;
              case UPLOAD_ERR_PARTIAL:
                  return array(false,"an error occurs: file is partialy uplaoded ");
                  break;
              case UPLOAD_ERR_NO_FILE:
                  return array(false,"an error occurs: file does not uploaded");
                  break;
              case UPLOAD_ERR_NO_TMP_DIR:
                  return array(false,"an error occurs: no tmp file directory ");
                  break;
              case UPLOAD_ERR_CANT_WRITE:
                  return array(false,"an error occurs: cant write check file permissons ");
                  break;
              case UPLOAD_ERR_EXTENSION:
                  return array(false,"an error occurs: PHP extension denied it");
                  break;
          }
      }
 ?>
