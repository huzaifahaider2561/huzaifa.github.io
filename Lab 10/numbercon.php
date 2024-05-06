<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Decimal to Binary Converter</title>
<style>
    body {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
        margin: 0;
        background-color: #f0f0f0;
    }

    form {
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

    label {
        display: block;
        margin-bottom: 10px;
    }

    input[type="number"] {
        width: calc(100% - 22px);
        padding: 10px;
        margin-bottom: 15px;
        border: 1px solid #ccc;
        border-radius: 3px;
    }

    button[type="button"] {
        width: 100%;
        padding: 10px;
        background-color: #4caf50;
        color: white;
        border: none;
        border-radius: 3px;
        cursor: pointer;
    }

    button[type="button"]:hover {
        background-color: #45a049;
    }

    #binaryResult {
        margin-top: 15px;
        text-align: center;
    }
</style>
<script>
function convertToBinary() {
    var decimalNumber = document.getElementById("decimalNumber").value;
    var binaryNumber = (+decimalNumber).toString(2); // Convert decimal to binary

    document.getElementById("binaryResult").innerHTML = "Binary Equivalent: " + binaryNumber;
}
</script>
</head>
<body>
    <form>
        <h2>Decimal to Binary Converter</h2>
        <div>
            <label for="decimalNumber">Enter Decimal Number:</label>
            <input type="number" id="decimalNumber" name="decimalNumber" min="0" required>
        </div>
        <button type="button" onclick="convertToBinary()">Convert to Binary</button>
        <div>
            <br><label for="binary Number">Result:</label>
        </div>
        <div id="binaryResult"> </div>
        <br><p style="display: flex; justify-content: center; "> <a href="index.html">Lab 10</a></p>
    </form>
    
</body>
</html>
