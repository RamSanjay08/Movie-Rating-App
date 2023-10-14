
  //^ SignUp
  function signUp(e){
    e.preventDefault() //^ used to performs the keyword enter task
  let signupName = document.getElementById('name').value
  let signupPass = document.getElementById('pass').value
  let email = document.getElementById('email').value
  let mobileNumber = document.getElementById('number').value
  let button = document.getElementById('btn')

  if(signupName==="") {
    alert('Name is Required *')
    return false
  } 
  else if (signupName.length < 5) {
    alert('atleat pass 5 characters *')
    return false
  }
  else if (signupName.length > 20) {
  alert('character should be more than 20 *')
  return false
  }

  if(signupPass===""){
    alert("Password should not be empty")
    return false 
  }
  else if (/^(?=.*\d)(?=.*[a-zA-Z])[a-zA-Z0-9]{7,}$/.test(signupPass))
  return false

  if(email==="") {
    alert("email field should not be empty")
    return false
  }
  else if (!/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email)) {
    return false
  }

  if(mobileNumber==="") {
    alert("mobile field should not be empty")
    return false
  }
  
  else if (mobileNumber.length>10){
    alert("number must be 10 values")
    return false
  }

  else if (!/^[0-9]{10}$/.test(mobileNumber)){
    alert("mobile number must be number")
    return false
  }

  let data = {signupName,signupPass,email,mobileNumber}
  localStorage.setItem(signupName,JSON.stringify(data))
  alert("Register Successfully")
  window.location.href="./login.html"
} 


//^ Login
function login(l) {
  l.preventDefault()

  let loginName = document.getElementById("lname").value
  let loginPass = document.getElementById("lpass").value

  if(loginName===""){
    alert("username should not empty*")
    return false
  }
  else if (loginName.length < 5){
    alert("character must be 5 *")
    return false
  }
  else if (loginName.length > 20) { 
  alert("atleast pass 20 characters *")
  return false
  }

  if(loginPass ==="") {
    alert("password should not")
    return false
  } else if(/^(?=.*\d)(?=.*[a-zA-Z])[a-zA-Z0-9]{7,}$/.test(loginPass)) {
    alert("password required")
    return false
  }


  let user = JSON.parse(localStorage.getItem(loginName))
  if (user && user.signupName === loginName && user.signupPass === loginPass) {
    alert("login successfully")
    window.location.href="../movie-list/movie-list.html"
  } else 
  {
    alert("Invalid Credentails")
  }
  }