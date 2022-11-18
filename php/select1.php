<?php
  $con = mysqli_connect("localhost","root","") or die("Localhost no disponible");
  $db = mysqli_select_db($con,"nova") or die("Base de dades no disponible");
  
  $Select = "SELECT 
  nova.floors,COUNT(CASE WHEN nova.floors=1 OR nova.floors=2 OR nova.floors=3 OR nova.floors=15 OR nova.floors= 25 THEN 1 END)
  as numFl from nova JOIN
    (SELECT DISTINCT nova.floors FROM nova) 
    as xd on xd.floors=nova.floors 
    GROUP by floors
  ORDER by numFl DESC;";
  $respuesta = mysqli_query($con, $Select);
  $dades=array();
  while($row = mysqli_fetch_array($respuesta)){
    array_push($dades,$row);
 }
  echo json_encode($dades);
?>
 