
//login javascript
var objPeople = [
	{ 
		email: "chirag@gmail.com",
		password: "joshi"
	},
	{ 
		email: "junaid@gmail.com",
		password: "rizvi"
	},
	{ 
		email: "mikhail@gmail.com",
		password: "pak"
	},
	{ 
		email: "praveen@gmail.com",
		password: "sudharsanan"
	},
	{ 
		email: "taylar@gmail.com",
		password: "oats"
	}

]

function getinfo() {
	var email = document.getElementById('email').value
	var password = document.getElementById('password').value

	for(var i = 0; i < objPeople.length; i++) {
		if(email == objPeople[i].email && password == objPeople[i].password) {
			console.log(email + " is logged in!!!")
			return
		}
	}
	console.log("incorrect email or password")
	
}



//comment javascript

function render(data){
	var html = '<div id="comentBox"><div class="item"><span>'+data.name+'</span><p>'+data.body+'</p></div><div class="clear"></div></div>'; 
	$("#container").append(html);
}

$(document).ready(function(){
	var coment = [];
	
	if(!localStorage.comentdata){
		localStorage.comentdata = [];
	}else{
		coment = JSON.parse(localStorage.comentdata);
	}
    
    	for(var i=0;i<coment.length;i++){
			render(coment[i]);
		}

	$('#addcoment').click(function(){
		var addobj = {
			"name": $('#name').val(),
			"body": $('#body').val()
		};

		coment.push(addobj);
		localStorage.comentdata = JSON.stringify(coment);
		render(addobj);
		$('#name').val('');
		$('#body').val('');
	});
});


		

// bottom to top
        let btntotop = document.querySelector("#btntotop");
        
        btntotop.addEventListener("click", function () {
            window.scrollTo({
                left: 0,
                top: 0,
                behavior: "smooth"
            });
        });
        



