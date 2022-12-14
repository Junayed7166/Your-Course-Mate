<!DOCTYPE html>
<html>
    <head>
        <title>Home Page</title>
        <link rel="stylesheet" href="/styles.css"/>
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    </head>
    <body>

        <div class="slideshow-container">

            <div class="mySlides">
              <div class="numbertext"> </div>
              <img src="book.jpg" style="width:100%">
              <div class="text"> </div>
            </div>
            
            <div class="mySlides">
              <div class="numbertext"> </div>
              <img src="content.jpg" style="width:100%">
              <div class="text"> </div>
            </div>
            
            <div class="mySlides">
              <div class="numbertext"> </div>
              <img src="student.jpg" style="width:100%">
              <div class="text"> </div>
            </div>

            <br>
            <div style="text-align:center">
              <span class="dot"></span> 
              <span class="dot"></span> 
              <span class="dot"></span> 
            </div>
            
          </div>

        <div class="mainBody">
            <div class="first">
              <h1 class="ml5">
                <span class="text-wrapper">
                  <span class="line line1"></span>
                  <span class="letters letters-left">Your Course</span>
                   
                  <span class="letters letters-right">Mate</span>
                  <span class="line line2"></span>
                </span>
              </h1>
              
              <script src="https://cdnjs.cloudflare.com/ajax/libs/animejs/2.0.2/anime.min.js"></script>
        </div>
           
        <div class="container">
          <div class="image">
              <img src="data.jpg">
              <h2>Data Structure</h2>
              <h4 id="code">203</h4>
              <a href="/203">Details</a>
          </div>

          <div class="image">
              <img src="algorithm.jpg">
              <h2>Algorithm</h2>
              <h4 id="code">211</h4>
              <a href="/211">Details</a>
          </div>

          <div class="image">
            <img src="java.jpg">
            <h2>Object Oriented Programming</h2>
            <h4 id="code">213</h4>
            <a href="/213">Details</a>
        </div>

        </div>
             

            <div class="catagories">
                <span><b> Course Categories </b></span>
                <button id="foundation"> Foundation </button>
                <button id="major"> Major </button>
                <button id="minor"> Minor </button>
            </div>

            <div class="search-container">
                <form action="/action_page.php">
                  <input type="text" placeholder="Search Courses....." name="search">
                  <button type="submit"><i class="fa fa-search"></i></button>
                </form>
            </div>
              
            <div class="threeButtons">
              <button id="allCourses"><a href="/CourseNameAndCode" >All Courses</a> </button>
                
            </div>
            
            <div class="threeButtons">
                <button id="tutorsPoint"><a href="/Allinstractor">Tutors Point</a></button>
            </div>
            
            <div class="threeButtons">
              <button id="makeRoutine"><a href="/Routine" >Make Your Semester Routine</a></button>
            </div>

            <div class="instractorButton">
              <p>Start Teaching Today !</p>
              <p>Best students from around the university teach hundreds of students on this platform. We provide the tools and skills to teach what you love.</p>
              <button id="insBtn"><a href="/instractor">Become An Instractor</a> </button>
          </div>

        </div>

        <script>
            var slideIndex = 0;
            showSlides();
            
            function showSlides() {
              var i;
              var slides = document.getElementsByClassName("mySlides");
              var dots = document.getElementsByClassName("dot");
              for (i = 0; i < slides.length; i++) {
                slides[i].style.display = "none";  
              }
              slideIndex++;
              if (slideIndex > slides.length) {slideIndex = 1}    
              for (i = 0; i < dots.length; i++) {
                dots[i].className = dots[i].className.replace(" active", "");
              }
              slides[slideIndex-1].style.display = "block";  
              dots[slideIndex-1].className += " active";
              setTimeout(showSlides, 2000); // Change image every 2 seconds
            }

//Your course mate ...
              anime.timeline({loop: true})
              .add({
              targets: '.ml5 .line',
              opacity: [0.5,1],
              scaleX: [0, 1],
              easing: "easeInOutExpo",
                duration: 700
              }).add({
              targets: '.ml5 .line',
              duration: 600,
              easing: "easeOutExpo",
              translateY: (el, i) => (-0.625 + 0.625*2*i) + "em"
              }).add({
              targets: '.ml5 .ampersand',
              opacity: [0,1],
              scaleY: [0.5, 1],
              easing: "easeOutExpo",
              duration: 600,
              offset: '-=600'
            }).add({
              targets: '.ml5 .letters-left',
              opacity: [0,1],
              translateX: ["0.5em", 0],
              easing: "easeOutExpo",
              duration: 600,
              offset: '-=300'
            }).add({
              targets: '.ml5 .letters-right',
              opacity: [0,1],
              translateX: ["-0.5em", 0],
              easing: "easeOutExpo",
              duration: 600,
              offset: '-=600'
            }).add({
              targets: '.ml5',
              opacity: 0,
              duration: 1000,
              easing: "easeOutExpo",
              delay: 1000
            });


        </script>

    </body>
</html>
