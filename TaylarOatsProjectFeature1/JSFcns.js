function myFunction() {
    var n = document.getElementById("name").value;
    var e = document.getElementById("emaill").value;
    var p = document.getElementById("numb").value;

    if (n === "") {
      alert("Please Enter Your Name");
    } else if (e === "") {
      alert("Please Enter Your Email");
    } else if (p === "") {
      alert("Please Enter Your Phone Number");
    } else {
      var popup = document.getElementById("myPopup");
      popup.classList.toggle("show");
    }
}

function FileFunction() {
  var x = document.getElementById("portFile");
  var y = document.getElementById("zanyFile");
  x.disabled = true;

  var fn = document.getElementById("fname").value;
  var ln = document.getElementById("lname").value;
  var c = document.getElementById("contactM").value;
  var h = document.getElementById("hobby").value;
  var g = document.getElementById("goal").value;

  if (fn === "") {
    alert("Please Enter Your First Name");
  } else if (ln === "") {
    alert("Please Enter Your Last Name");
  } else if (c === "") {
    alert("Please Enter Your Contact Information");
  } else if (h === "") {
    alert("Please Tell Us About Your Hobbies");
  } else if (g === "") {
    alert("Please Tell Us About Your Goals");
  } else {
    var popup = document.getElementById("myPopup");
    popup.classList.toggle("show");
  }
}

function maps_yorkdale() {
  window.open("https://yorkdale.com/","_blank","toolbar=yes,scrollbars=yes,resizable=yes,top=500,left=500,width=400,width=400,height=400");
}

function maps_eaton() {
  window.open("https://www.cfshops.com/toronto-eaton-centre.html","_blank","toolbar=yes,scrollbars=yes,resizable=yes,top=500,left=500,width=400,width=400,height=400");
}

function maps_vancouver() {
  window.open("https://www.cfshops.com/pacific-centre.html","_blank","toolbar=yes,scrollbars=yes,resizable=yes,top=500,left=500,width=400,width=400,height=400");
}

function maps_NYC() {
  window.open("https://bfplny.com/","_blank","toolbar=yes,scrollbars=yes,resizable=yes,top=500,left=500,width=400,width=400,height=400");
}

function maps_boston() {
  window.open("https://www.prudentialcenter.com/","_blank","toolbar=yes,scrollbars=yes,resizable=yes,top=500,left=500,width=400,width=400,height=400");
}
function maps_london() {
  window.open("https://uk.westfield.com/london?utm_source=RET%2019WL&utm_medium=WEB&utm_campaign=GOO","_blank","toolbar=yes,scrollbars=yes,resizable=yes,top=500,left=500,width=400,width=400,height=400");
}
function maps_calgary() {
  window.open("https://www.cfshops.com/chinook-centre.html?cid=lis_chi_en_hp_gb","_blank","toolbar=yes,scrollbars=yes,resizable=yes,top=500,left=500,width=400,width=400,height=400");
}
function maps_chicago() {
  window.open("https://www.shopwatertower.com/en.html","_blank","toolbar=yes,scrollbars=yes,resizable=yes,top=500,left=500,width=400,width=400,height=400");
}
function maps_montreal() {
  window.open("https://www.centreeatondemontreal.com/en/","_blank","toolbar=yes,scrollbars=yes,resizable=yes,top=500,left=500,width=400,width=400,height=400");
}