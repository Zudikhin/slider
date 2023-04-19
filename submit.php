<?php


	/* Logs */

	$time = date('Y-m-d H:i:s');
	$data = empty($_REQUEST) ? false : var_export($_REQUEST, true);
	
	file_put_contents("_submits.log", "\n\n$time\n$data", LOCK_EX | FILE_APPEND);


	/* Mail Send */

	$name = empty($_POST['name']) ? false : addslashes(trim($_POST['name']));
	$email = empty($_POST['email']) ? false : addslashes(trim($_POST['email']));
	$phone = empty($_POST['phone']) ? false : addslashes(trim($_POST['phone']));
	
	if ($phone) {
		//$to = 'info@gsiconsult.ru';
		$to = 'gsiconsult@yandex.ru';
		$subject = 'Новая заявка gsiconsult.ru'; 
		
		$message = '<html><body><table border=0 cellpadding=2 cellspacing=0>';
			
		if ($name)
			$message .= '<tr>
				<td>Клиент: </td>
				<td><b>' . $name . '</b></td>
			</tr>'; 
		
		$message .= '<tr>
			<td>Телефон: </td>
			<td><a href="tel:' . $phone . '">' . $phone . '</a></td>
		</tr>'; 

		if ($email)
			$message .= '<tr>
				<td>E-Mail: </td>
				<td><a href="mailto:' . $email . '">' . $email . '</a></td>
			</tr>'; 
		
		$message .= '</table></body></html>'; 

		$headers  = "Content-type: text/html; charset=utf-8\r\n";
		mail($to, $subject, $message, $headers);
	}
	
	//header('Location: https://gsiconsult.ru/thanks/');
	//die;
	
	header('Content-Type: application/json; charset=utf-8');
	
	// if ($result)
	exit(json_encode(['success' => true]));
	// else
		// exit(json_encode(['error' => 'Ошибка при отправке данных, попробуйте повторить запрос!']));

?>