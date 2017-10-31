<?php

// Create connection
$conn = mysqli_connect('127.0.0.1', 'root', '','wda');
// Check connection
if (!$conn) {
die("Connection failed: " . mysqli_connect_error());
}

$name = $_POST['name'];
$email = $_POST['email'];
$subject = $_POST['subject'];

$sql = "INSERT INTO form (name, email, message)
VALUES ('$name', '$email', '$subject')";
if (mysqli_query($conn, $sql)) {
echo "New record created successfully";
} else {
echo "Error: " . $sql . "<br>" . mysqli_error($conn);
}
mysqli_close($conn);
header("refresh:1; url=index.html");
?>
