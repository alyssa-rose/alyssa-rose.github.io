<?php
if($_POST["message"]) {
    mail("alyssa.s.rose5@gmail.com", "Form to email message", $_POST["message"], "From: an@email.address");
}
?>
