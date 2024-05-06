<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Welcome</title>
<style>
    body {
        font-family: Arial, sans-serif;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
        margin: 0;
        background-color: #f0f0f0;
    }

    .welcome-container {
        width: 300px;
        padding: 20px;
        border: 1px solid #ccc;
        border-radius: 5px;
        background-color: #fff;
    }

    h2 {
        text-align: center;
        margin-bottom: 20px;
    }
</style>
</head>
<body>
    <div class="welcome-container">
        <?php
        if ($_SERVER["REQUEST_METHOD"] == "POST") {
            $city = $_POST["city"];
            echo "<h2>Welcome to $city</h2>";
        }
        ?>
    </div>
</body>
</html>
