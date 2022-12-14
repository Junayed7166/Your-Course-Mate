<!DOCTYPE html>
<html>

<head>
    <title>Sign Up Form</title>
    <link rel="stylesheet" href="/styles.css" />
    <meta name="viewport" content="width=device-width, initial-scale=1">
</head>

<body>

    <video autoplay muted loop>
        <source src="video.mp4" type="video/mp4">
    </video>

        <div class="overlay">
            <div class="headFromSignUp">
                <h3>Your Course Mate</h3>
            </div>


            <div class="upper">
                <div class="emailAddress">
                    <input type="text" id="email" placeholder="Enter your email">
                </div>
                <div class="password">
                    <input type="password" id="password" placeholder="Enter your password">
                </div>
            </div>
                <div class="lowerPart">
    
                    <button onClick="login()" id="login"> Login </button>
                    <button id="createAccount"><a href="/SignUp ">Create Your Account</a></button>
                </div>

                <div class="forgetPasswordlower">
                    <button id="forgetPassword"><a href="#">Forget your password ?</a></button>
                </div>
            </div>

            <script
            src="https://code.jquery.com/jquery-3.5.1.min.js"
            integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0="
            crossorigin="anonymous">
            </script>
        

        <script>

                function login()
                    {
                        let id= $('#email').val()
                        let password = $('#password').val()

                        if (id=='admin' && password=='admin'){
                        window.location.href="/adminContent"
                        }else{
                            window.location.href="/index"
                        }
                    }
        </script>

</body>

</html>
