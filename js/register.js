export default function(){
	if (username.value.length>=6 && password.value.length>=6){
	    if (password.value == password2.value){
	
	
	        $.ajax({
	            type: "GET",
	            url: "http://www.cato.top:9912/user/findName/"+username.value,
	            dataType: 'json',
	            contentType : 'application/json',
	            success: function(data) {
	                if (data.code==200){
	                    var json={
	                        username:username.value,
	                        password:password.value
	                    }
	
	                    $.ajax({
	                        type: "POST",
	                        url: "http://www.cato.top:9912/user/register",
	                        dataType: 'json',
	                        data: JSON.stringify(json),
	                        contentType : 'application/json',
	                        success: function(data) {
	                            // // data = jQuery.parseJSON(data);  //dataType指明了返回数据为json类型，故不需要再反序列化
	                            window.location.href="login.html";
	
	                            alert("You have successfully signed up!")
	                        }
	                    })
	                }else {
	                    alert("This username has already been used!")
	                }
	
	            }
	        })
	
	
	
	    }else {
	        alert("Your password and confirmation password do not match.")
	    }
	} else {
	    alert("Your username or password must have six or more characters.")
	}
}