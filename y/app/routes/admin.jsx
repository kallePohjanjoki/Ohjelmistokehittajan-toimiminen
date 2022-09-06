

<form name="login" class="form">
        <p class="title">Client Dashboard</p>
        <p class="login-description">This dashboard allows you to manage your project and files</p>
        <input type="text" name="userid" placeholder="Username" class="text-field"/>
        <input type="password" name="pswrd" placeholder="Password" class="text-field"/>
        <input type="submit" class="button" onclick="check(this.form)" value="Login"/>
</form>



function check(form) { /*function to check userid & password*/
        /*the following code checkes whether the entered userid and password are matching*/
        if(form.userid.value == "admin" && form.pswrd.value == "admin") {
            window.open('admin2.jsx')/*opens the target page while Id & password matches*/
        }
        else {
            alert("Error Password or Username")/*displays error message*/
        }
    }

