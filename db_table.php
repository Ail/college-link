<?php
$servername = "127.0.0.1";
$username = "root";
$password = "";
$dbname = "wda";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$sql = "SELECT ID, Name, Email, Message FROM form";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    echo "<table border='1'><tr><th>ID</th><th>Name</th><th>Email</th><th>Message</th></tr>";
    // output data of each row
    while($row = $result->fetch_assoc()) {
        echo "<tr><td>" . $row["ID"]. "</td><td>" . $row["Name"]. "</td><td>" . $row["Email"]. "</td><td>" . $row["Message"]."</td><tr>";
    }
    echo "</table>";
} else {
    echo "0 results";
}
$conn->close();
?>
