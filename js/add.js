export default function(){
	var bookname= document.getElementById("bookname")
	var author= document.getElementById("author")
	var price= document.getElementById("price")
	if (bookname.value.length==0||author.value.length==0||price.value.length==0){
	    alert("The input box cannot be empty!")
	}else {
	
	    var json={
	        name:bookname.value,
	        author:author.value,
	        price:price.value
	    }
	    $.ajax({
	        type: "POST",
	        url: "http://www.cato.top:9912/book/add",
	        dataType: 'json',
	        data: JSON.stringify(json),
	        contentType : 'application/json',
	        success: function(data) {
	            if (data.code==200){
	                alert("You have successfully added the book!")
					window.location.href="list.html"
	            } else {
	                alert("You failed to add the book")
	            }
	
	        }
	    })
	}
}