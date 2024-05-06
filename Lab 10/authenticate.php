<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $username = $_POST["username"];
    $password = $_POST["password"];

    if ($username === "Galgotias" && $password === "university") {
        header("Location: welcome.html"); 
    } else {
        header("Location: sorry.html");
        exit();
    }
}
?>
