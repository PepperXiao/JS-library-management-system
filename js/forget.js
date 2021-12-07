export default function(){
	if (username.value.length>=6 && password.value.length>=6){
	    if (password.value==password2.value){
	
	
	        $.ajax({
	            type: "GET",
	            url: "http://www.cato.top:9912/user/findName/"+username.value,
	            dataType: 'json',
	            contentType : 'application/json',
	            success: function(data) {
	                if (data.code==200){
	                    alert("This username doesn't exist!")
	
	
	                }else {
	                    var json={
	                        username:username.value,
	                        password:password.value
	                    }
	
	                    $.ajax({
	                        type: "POST",
	                        url: "http://www.cato.top:9912/user/update",
	                        dataType: 'json',
	                        data: JSON.stringify(json),
	                        contentType : 'application/json',
	                        success: function(data) {
	                            alert("You have successfully changed the password！")
	                            window.location.href="login.html";
	
	
	                        }
	                    })
	                }
	
	            }
	        })
	
	
	
	    }else {
	        alert("Wrong username or password!")
	    }
	} else {
	    alert("Your username or password must have six or more characters.")
	}
}