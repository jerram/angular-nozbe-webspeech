<?php
echo '====================';
foreach (getallheaders() as $name => $value) {
    echo "<br>$name: $value\n";
}

var_dump($_COOKIE);

echo '====================';
