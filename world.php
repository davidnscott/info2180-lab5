<?php header('Access-Control-Allow-Origin: *'); ?>
<?php
$host = 'localhost';
$username = 'lab5_user';
$password = 'password123';
$dbname = 'world';

$conn = new PDO("mysql:host=$host;dbname=$dbname;charset=utf8mb4", $username, $password);
$country = filter_input(INPUT_GET,'country',FILTER_SANITIZE_STRING);
$stmt = $conn->query("SELECT * FROM countries WHERE name LIKE '%$country%'");

$results = $stmt->fetchAll(PDO::FETCH_ASSOC);
?>
<table>
	<tr>
		<th>Name</th>
		<th>Contintent</th>
		<th>Independece</th>
		<th>Head of State</th>
	</tr>
<?php foreach ($results as $row): ?>
	<tr>
		<th><?= $row['name']; ?></th>
		<th><?= $row['continent']; ?></th>
		<th><?= $row['independence_year']; ?></th>
		<th><?= $row['head_of_state']; ?></th>
	</tr>
<?php endforeach; ?>
</table>
