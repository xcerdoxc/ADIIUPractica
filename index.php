<!doctype html>
<html lang="en">

<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="description" content="">
  <meta name="author" content="Mark Otto, Jacob Thornton, and Bootstrap contributors">
  <meta name="generator" content="Hugo 0.104.2">
  <title>Album example · Bootstrap v5.2</title>

  <link rel="canonical" href="https://getbootstrap.com/docs/5.2/examples/album/">
  <link href="dist/css/bootstrap.min.css" rel="stylesheet">
  <link rel="stylesheet" href="/style.css">
  <script src="https://code.highcharts.com/highcharts.js"></script>
  <script src="https://code.highcharts.com/highcharts-more.js"></script>
  <script src="https://code.highcharts.com/modules/exporting.js"></script>
  <script src="https://code.highcharts.com/modules/export-data.js"></script>
  <script src="https://code.highcharts.com/modules/accessibility.js"></script>
  <!---
      Añadir jquery
    -->
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
  $json1 = json_encode($dades);
  $file = 'json/selectBarres.json';
  file_put_contents($file, $json1 );

  $segonSelect="SELECT 
    nova.zipcode,COUNT(*) as loc from nova JOIN
      (SELECT DISTINCT nova.zipcode 
        FROM nova) AS zips 
        ON nova.zipcode=zips.zipcode 
      GROUP by zipcode
   ORDER BY loc DESC;";
   $respuesta = mysqli_query($con, $segonSelect);
   $dades2=array();
   while($row = mysqli_fetch_array($respuesta)){
      array_push($dades2,$row);
   }
   $json2 = json_encode($dades2);
   $file = 'json/selectPiechart.json';
   file_put_contents($file, $json2);
?>
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
  <script src="./javascript/grap.js"></script>
</head>

  <header>
    <!----
  <div class="collapse bg-dark" id="navbarHeader">
    <div class="container">
      <div class="row">
        <div class="col-sm-8 col-md-7 py-4">
          <h4 class="text-white">About</h4>
          <p class="text-muted">Add some information about the album below, the author, or any other background context. Make it a few sentences long so folks can pick up some informative tidbits. Then, link them off to some social networking sites or contact information.</p>
        </div>
        <div class="col-sm-4 offset-md-1 py-4">
          <h4 class="text-white">Contact</h4>
          <ul class="list-unstyled">
            <li><a href="#" class="text-white">Follow on Twitter</a></li>
            <li><a href="#" class="text-white">Like on Facebook</a></li>
            <li><a href="#" class="text-white">Email me</a></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
-->
    <div class="navbar navbar-dark bg-dark shadow-sm">
      <div class="container">
        <a href="#" class="navbar-brand d-flex align-items-center">
          <strong>House Sample United States</strong>
        </a>
        <div>
          <a class="navbar-brand" href="https://www.uib.es/es/">
            UIB
          </a>
          <a class="navbar-brand" href="https://www.kaggle.com/datasets/xiscocerdo/house-dataset">
            Data
          </a>
        </div>

      </div>
    </div>
  </header>

  <main>

    <section class="py-5 text-center container">
      <div class="row py-lg-5">
        <div class="col-lg-6 col-md-8 mx-auto">
          <h1 class="fw-light">Data Base Example</h1>
          <p class="lead text-muted">Something short and leading about the collection below—its contents, the creator,
            etc. Make it short and sweet, but not too short so folks don’t simply skip over it entirely.</p>
          <!----
        <p>
          <a href="https://www.uib.es/es/" class="btn btn-primary my-2">Main call to action</a>
          <a href="#" class="btn btn-secondary my-2">Secondary action</a>
        </p>
        --->
        </div>
      </div>
    </section>

    <div class="album py-5 bg-light">
      <div class="container">

        <div class="row row-cols-1 row-cols-sm-2  g-2">
          <div class="col">
            <div class="card shadow-sm">
              <div class="card-body">
                <figure class="highcharts-figure">
                  <div id="container"></div>
                  <p class="highcharts-description">
                    Bar chart showing horizontal columns. This chart type is often
                    beneficial for smaller screens, as the user can scroll through the data
                    vertically, and axis labels are easy to read.
                  </p>
                </figure>
              </div>
            </div>
          </div>

          <div class="col">
            <div class="card shadow-sm">
              <div class="card-body">
                <figure class="highcharts-figure">
                  <div id="container2"></div>
                  <p class="highcharts-description">
                    Bar chart showing horizontal columns. This chart type is often
                    beneficial for smaller screens, as the user can scroll through the data
                    vertically, and axis labels are easy to read.
                  </p>
                </figure>
              </div>
            </div>
          </div>

          <div class="col">
            <div class="card shadow-sm">

              <div class="card-body">
                <figure class="highcharts-figure">
                  <div id="container3"></div>
                  <p class="highcharts-description">
                    Bar chart showing horizontal columns. This chart type is often
                    beneficial for smaller screens, as the user can scroll through the data
                    vertically, and axis labels are easy to read.
                  </p>
                </figure>
              </div>
            </div>
          </div>

        </div>
      </div>

    </div>
  </main>

  <footer class="text-muted py-5">
    <div class="container">
      <p class="float-end mb-1">
        <a href="#">Back to top</a>
      </p>
    </div>

  </footer>

  <script src="dist/js/bootstrap.bundle.min.js"></script>

  <!--- 
      Scrips d'execució
    -->
</body>


<script>
  document.addEventListener("DOMContentLoaded", function () { barresCol() })
  document.addEventListener("DOMContentLoaded", function () { pieChar() })
  document.addEventListener("DOMContentLoaded", function () { box() })
</script>

</html>