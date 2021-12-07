export default function(){

	if (username.value.length>=6 && password.value.length>=6){
	    var json={
	        username:username.value,
	        password:password.value
	    }
	    $.ajax({
	        type: "POST",
	        url: "http://www.cato.top:9912/user/login",
	        dataType: 'json',
					 xhrFields: {
					   withCredentials: true //the cookies will be sent to the server running in a different domain
					 },
	        data: JSON.stringify(json),
	        contentType : 'application/json',
	        success: function(data) {
	            if (data.code==200){   //服务器端判断，成功匹配则返回code200，不成功则为code为404
	                window.location.href="list.html?username="+username.value
	                alert("You have successfully logged in!")
	            } else {
	                alert("Wrong username or password!")
	            }
	
	        }
	    })
	
	} else {
	    alert("Your username or password must have six or more characters.")
	}
}