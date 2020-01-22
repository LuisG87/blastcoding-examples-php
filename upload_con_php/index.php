<html>
  <head>
    <title>Upload file with php</title>
    <link rel="stylesheet" href="cdnjs.cloudflare.com/ajax/libs/pure/1.0.1/pure-min.css" type="text/css">
    <link rel="stylesheet" href="https://unpkg.com/purecss@1.0.1/build/forms-min.css" type="text/css">
  </head>
  <body>
    <h1>upload files with php</h1>
    <h2>This is a fileupload example</h2>
    <form class="pure-form pure-form-aligned" enctype="multipart/form-data" action="upload.php" method="post">
        <fieldset>
            <div class="pure-control-group">
                <label for="name">Filename</label>
                <input id="name" name="name" type="text" placeholder="ex: casa" required>
            </div>

            <div class="pure-control-group">
                <label for="file">File: </label>
                <input id="file" name="uploaded_file" type="file" placeholder="file" required>
            </div>


            <div class="pure-controls">
                <button type="submit" class="pure-button pure-button-primary">Submit</button>
            </div>
        </fieldset>
    </form>
  </body>
</html>
