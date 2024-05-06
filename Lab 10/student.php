<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Student Details</title>

<style>
    body {
        font-family: Arial, sans-serif;
        background-color: #f0f0f0;
        margin: 0;
        padding: 20px;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
    }

    .container {
        width: 400px;
    }

    .student {
        background-color: #fff;
        border: 1px solid #ccc;
        border-radius: 5px;
        padding: 10px;
        margin-bottom: 20px;
    }

    .student p {
        margin: 0;
        padding: 5px 0;
    }

    .student p strong {
        font-weight: bold;
    }

</style>

</head>

<body>
    <div class="container">
        <h2>Student Details</h2>
        <?php
        class Student {
            public $RollNo;
            public $Name;
            public $Branch;
            public $Year;

            // Constructor
            public function __construct($RollNo, $Name, $Branch, $Year) {
                $this->RollNo = $RollNo;
                $this->Name = $Name;
                $this->Branch = $Branch;
                $this->Year = $Year;
            }
            public function displayDetails() {
                echo "<div class='student'>";
                echo "<p><strong>Roll No:</strong> " . $this->RollNo . "</p>";
                echo "<p><strong>Name:</strong> " . $this->Name . "</p>";
                echo "<p><strong>Branch:</strong> " . $this->Branch . "</p>";
                echo "<p><strong>Year:</strong> " . $this->Year . "</p>";
                echo "</div>";
            }
        }
        $student1 = new Student(345737, "Huzaifa Haider", "Computer Science", 4);
        $student2 = new Student(344694, "Hammad Shahab", "Computer Science", 4);
        $student3 = new Student(350236, "Ali Azhar", "Computer Science", 4);

        echo "<div>";
        echo "<h3>Details of Student 1:</h3>";
        $student1->displayDetails();

        echo "<h3>Details of Student 2:</h3>";
        $student2->displayDetails();

        echo "<h3>Details of Student 3:</h3>";
        $student3->displayDetails();
        echo "</div>";
        ?>

        <p style="display: flex; justify-content: center; "> <a href="index.html">Lab 10</a></p>
    </div>
</body>
</html>
