<?php
  $con = mysqli_connect("localhost","root","") or die("Localhost no disponible");
  $db = mysqli_select_db($con,"nova") or die("Base de dades no disponible");
  
  $primerSelect = "SELECT 
  nova.floors, COUNT(*)as numFl from nova JOIN
  (SELECT DISTINCT nova.floors FROM nova) 
  as floors on floors.floors=nova.floors 
  GROUP by floors
  ORDER by numFl DESC;";
  $respuesta = mysqli_query($con, $primerSelect);
  $dades=array();
  while($row = mysqli_fetch_array($respuesta)){
    array_push($dades,$row);
 }
  echo json_encode($dades);
?>
 