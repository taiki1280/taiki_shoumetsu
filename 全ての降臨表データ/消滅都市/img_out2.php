<!DOCTYPE html>
<html>

<head>
  <meta charset="utf-8">
  <title>画像をある分だけ表示する</title>
</head>


<body>
  <h1>aaa</h1>
  <?php
  //ディレクトリ名
  $dir_path = "降臨一覧";
  if (is_dir($dir_path)) {
    if (is_readable($dir_path)) { // ? ファイルが読み込み可能かどうか
      $ch_dir = dir($dir_path); //ディレクトリクラス
      //ディレクトリ内の画像を一覧表示
      while (false !== ($file_name = $ch_dir->read())) {
        $ln_path = $ch_dir->path . "/" . $file_name;
        if (@getimagesize($ln_path)) { //画像かどうか？
          echo "<a href = \"imgview.php?d=" . urlencode(mb_convert_encoding($ln_path, "UTF-8")) . "\" target = \"_blank\" >";
          echo "<img src = \"" . $ln_path . "\" width=\"100%\"></a> ";
        }
      }
      $ch_dir->close();
    } else {
      echo "<p>" . htmlspecialchars($dir_path) . "　は読み込みが許可されていません。";
    }
  } else {
    echo 'DIR 画像がないよ';
  }


  ?>
</body>

</html>