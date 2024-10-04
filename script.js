function conc() {
  document.getElementById("Orignal").innerHTML =
    '"Muhammad" + " " + " "Imtiaz"';
  document.getElementById("output").innerHTML = "Muhammad Imtiaz";
  document.getElementById("output").style.textAlign = "center";
}

function alert_n() {
  let first_name = prompt("Enter your First Name : ");
  let sec_name = prompt("Enter your Last name : ");
  let full_n = first_name + sec_name;
  document.getElementById("Orignal").innerHTML =
    "let full_n = first_name + sec_name;";
  document.getElementById("output").innerHTML = full_n;
  document.getElementById("output").style.textAlign = "center";
}

function get_n() {
  let first_num = +prompt("Enter first Number ");
  let sec_num = +prompt("Enter your second Number");
  if (first_num === sec_num) {
    document.getElementById("Orignal").innerHTML = "Number1 == number2";
    document.getElementById("output").innerHTML =
      "Yes! number are equal Condition is True";
    document.getElementById("output").style.textAlign = "center";
  } else {
    document.getElementById("Orignal").innerHTML = "Number1 !== number2";
    document.getElementById("output").innerHTML =
      "oops! number are  not equal Condition is False";
    document.getElementById("output").style.textAlign = "center";
  }
}
function marks() {
  let mark = +prompt("Enter Your Marks: ");
  if (mark < 33) {
    document.getElementById("Orignal").innerHTML = "marks < 33";
    document.getElementById("output").innerHTML =
      "Oops! You are Fail<span style='font-size:30px;'>😭</span>";
    document.getElementById("output").style.textAlign = "center";
  } else if (33 <= mark && mark <= 60) {
    document.getElementById("Orignal").innerHTML = "marks <= 60";
    document.getElementById("output").innerHTML = "Your Grade is C";
    document.getElementById("output").style.textAlign = "center";
  } else if (60 < mark && mark <= 80) {
    document.getElementById("Orignal").innerHTML = "marks <= 80";
    document.getElementById("output").innerHTML = "Your Grade is B";
    document.getElementById("output").style.textAlign = "center";
  } else if (81 <= mark && mark <= 90) {
    document.getElementById("Orignal").innerHTML = "marks <= 90";
    document.getElementById("output").innerHTML =
      "Congratulations! Your Grade is A";
    document.getElementById("output").style.textAlign = "center";
  } else if (91 <= mark && mark <= 100) {
    document.getElementById("Orignal").innerHTML = "marks <= 100";
    document.getElementById("output").innerHTML =
      "Congratulations! Your Grade is A+";
    document.getElementById("output").style.textAlign = "center";
  } else {
    document.getElementById("Orignal").innerHTML = "marks > 100";
    document.getElementById("output").innerHTML =
      "Oops! You entered marks more than 100";
    document.getElementById("output").style.textAlign = "center";
  }
}

// Testing Sets Of Conditions

function tst() {
  let Age = +prompt("Enter your age");
  let Weight = +prompt("Enter your weight");

  if (Age < 18 && Weight < 50) {
    document.getElementById("output").innerHTML = "You are a teenage. ";
  } else if (Age > 18 && Age <= 40 && Weight > 50 && Weight < 70) {
    document.getElementById("output").innerHTML = "You are a Young man.";
  } else {
    document.getElementById("output").innerHTML = "You Are an Old & Fatty.";
  }
  document.getElementById("output").style.textAlign = "center";
}

// If Statement Nested

document.getElementById("ifStatementsNested").onclick = function () {
  let Age = +prompt("Enter Your Age");

  if (Age >= 18) {
    let Weight = +prompt("Enter Your Weight");

    if (Weight <= 70) {
      document.getElementById("output").innerHTML = "You are a Young man.";
    } else {
      document.getElementById("output").innerHTML = "You Are an Old & Fatty.";
    }
  } else {
    document.getElementById("output").innerHTML = "You are a teenage.";
  }
  document.getElementById("output").style.textAlign = "center";
};

//   Login

document.getElementById("login").onclick = function () {
  let Username = prompt("Enter your Username");
  let Password = prompt("Enter your Password");

  if (Username == "Imtiaz" && Password == "2222") {
    document.getElementById("output").innerHTML = "You are Logged In!";
  } else {
    document.getElementById("output").innerHTML =
      "Try Username = Imtiaz & Password = 2222 ";
  }
  document.getElementById("output").style.textAlign = "center";
};

// clear orignal statement
function clrbtn() {
  document.getElementById("Orignal").innerHTML = "";
}

function clrbtn2() {
  document.getElementById("output").innerHTML = "";
  // document.getElementById("output").innerHTML = "";
  
}
