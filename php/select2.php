<?php
  $con = mysqli_connect("localhost","root","") or die("Localhost no disponible");
  $db = mysqli_select_db($con,"nova") or die("Base de dades no disponible");

  $segonSelect="SELECT 
  nova.bathrooms,COUNT(*) as loc from nova JOIN
    (SELECT DISTINCT nova.bathrooms 
      FROM nova) AS zips 
      ON nova.bathrooms=zips.bathrooms 
    GROUP by bathrooms
 ORDER BY loc DESC;";
   $respuesta = mysqli_query($con, $segonSelect);
   $dades2=array();
   while($row = mysqli_fetch_array($respuesta)){
      array_push($dades2,$row);
   }
   echo json_encode($dades2);
?>