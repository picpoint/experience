<?php

$data_json = json_encode($_POST['data_form'], JSON_UNESCAPED_UNICODE);
echo $data_json;

?>