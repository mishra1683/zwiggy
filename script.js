function validate() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    if(username != 'admin' || password != '0009') {
        alert("Incorrect Username / Password");
    }
    else
    {
        alert("Congratulations! You have successfullly logged in!");
    }
}