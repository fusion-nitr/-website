<?php 
include('database.php');
if(!isset($_SESSION)) 
    { 
        session_start(); 
    } 

$username = "";
$password = "";
$errors = array();
$_SESSION['success'] = "";

if(isset($_POST['login_user'])){
    $username = mysqli_real_escape_string($con, $_POST['username']);
    $password = mysqli_real_escape_string($con, $_POST['password']);
    if(empty($username)){
        array_push($errors, 'Username field is blank!');
    }
    else if(empty($password)){
        array_push($errors, 'Password field is blank!');
    }

    if(count($errors) == 0){
        $password = md5($password);
        $query = "SELECT * FROM USERS WHERE username = '$username' AND password = '$password'";
        $results = mysqli_query($con, $query);

        if (mysqli_num_rows($results) == 1) {
            $_SESSION['username'] = $username;
            $_SESSION['success'] = $username . ", You are now logged in";
            header('location: adminpanel.php');
        }else {
            array_push($errors, "Invalid Credentials");
        }
    }
}


?>