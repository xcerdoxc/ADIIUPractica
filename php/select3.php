<?php
  $con = mysqli_connect("localhost","root","") or die("Localhost no disponible");
  $db = mysqli_select_db($con,"nova") or die("Base de dades no disponible");
  
  $select="SELECT nova.sqft_above FROM nova WHERE nova.floors=1;";
   $respuesta = mysqli_query($con, $select);
   $dades=array();
   while($row = mysqli_fetch_array($respuesta)){
      array_push($dades,$row);
   }
 echo json_encode($dades);
 
 
?>
 