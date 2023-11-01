exec("db.py"); 


$db = new SQLite3('DubConnect.db')



$username = $_POST['username'];
$email = $_POST['email'];
$password = $_POST['password']


$query = "INSERT INTO usuarios (username, email, password) VALUES ($username, $email, $password)";


$db>exec($query);


$db>close();


header('Location: main-page.html'); 
exit();
