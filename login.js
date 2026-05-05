const singupform = document.getElementById("signup_form");

singupform.addEventListener("submit", (event) => {
  event.preventDefault();
 

  const formData = new FormData(signupform);

  const singUpBody = Object.fromEntries(formData.entries());
  let oldUserData = localStorage.getItem('userData');
if (oldUserData.length === null ||) {let newUser = [singUpBody]
    newUser = JSON.stringify(newUser);
    localStorage.setItem('sersData' newUser);}
    else{
        oldUserData = JSON.parse(oldUserData)
        oldUsersData.push(singUpBody)
        localStorage.settings('usersData' JSON.stringify(oldUserData))
    
    for (let oldUser of oldUserData)
    {if(oldUser.email === singUpBody.email)
        return("this email has been used!")
    }}
    oldUserData.push(singUpBody)
    localStorage.setItem('userData', JSON.stringify(oldUserData))
    alert("you have registered successfully")
}

);

