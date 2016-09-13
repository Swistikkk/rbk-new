<?php

$recepient = "info@consulmotors.ru director@fmfin.ru victor.trocenko@gmail.com gromi2k@yandex.ru oberemkovictor@gmail.com";
$sitename = "Medic";

$name = trim($_POST["name"]);
$phone = trim($_POST["phone"]);
$message = "Имя: $name \nТелефон: $phone \n;

$pagetitle = "Новая заявка с сайта \"$sitename\"";
mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");
