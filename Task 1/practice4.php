<table border = "1">
<?php
	echo "<tr>";
	echo "<td></td>";
	for ($i = 1; $i <= $_POST['size']; $i++) {
		echo "<td>$i</td>";
	}
	echo "</tr>";
	for ($i = 1; $i <= $_POST['size']; $i++) {
		echo "<tr>";
		for ($j = 0; $j <= $_POST['size']; $j++) {
			if ($j == 0) {
				echo "<td>$i</td>";
			}
			else {
				$k = $i*$j;
				echo "<td>$k</td>";
			}
		}
		echo "</tr>";
	}
?>
