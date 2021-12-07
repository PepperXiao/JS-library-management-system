export default function(){
	
	
	function getDataRow(h){
	    var row = document.createElement('tr'); //创建行
	
	    var idCell = document.createElement('td'); //创建第一列id
	    // idCell.innerHTML = h.id; //填充数据
	    row.appendChild(idCell); //加入行 ，下面类似
	    var box = document.createElement('input');
	    box.setAttribute('type','checkbox');
	    box.setAttribute('name','uid')
	    idCell.appendChild(box)
	
	    var nameCell = document.createElement('td');//创建第二列name
	    nameCell.innerHTML = h.name;
	    row.appendChild(nameCell);
	
	    var authorCell = document.createElement('td');//创建第三列job
	    authorCell.innerHTML = h.author;
	    row.appendChild(authorCell);
	
	    var priceCell = document.createElement('td');//创建第四列job
	    priceCell.innerHTML = h.price;
	    row.appendChild(priceCell);
	
	    var timeCell = document.createElement('td');//创建第五列，操作列
	    timeCell.innerHTML = h.create_time;
	    row.appendChild(timeCell);
	
	
	    //到这里，json中的数据已经添加到表格中，下面为每行末尾添加删除按钮
	    var delCell = document.createElement('td');//创建第四列，操作列
	    row.appendChild(delCell);
	    var btnDel = document.createElement('input'); //创建一个input控件
	    btnDel.setAttribute('type','button'); //type="button"
	    btnDel.setAttribute('value','Delete');
	    btnDel.setAttribute('id',"id"+h.id)
	    //删除操作
	    btnDel.onclick=function(){
	        if(confirm("Are you SURE you want to delete this book?")){
	            //找到按钮所在行的节点，然后删掉这一行
	            this.parentNode.parentNode.parentNode.removeChild(this.parentNode.parentNode);
	            //btnDel - td - tr - tbody - 删除(tr)
	            //刷新网页还原。实际操作中，还要删除数据库中数据，实现真正删除
	            $.ajax({
	                type: "GET",
	                url: "http://www.cato.top:9912/book/delOne/"+btnDel.id.slice(2),
	                dataType: 'json',
	                contentType : 'application/json',
	                success: function(data) {
	
	                }
	            })
	
	        }
	    }
	    delCell.appendChild(btnDel); //把删除按钮加入td，别忘了
	    return row; //返回tr数据
	}
	
	
	
	// function method(id) {
	//     if(confirm("Are you SURE you want to delete this book？")){
	//         location.href="${pageContext.request.contextPath}/deleteServlet?id="+id;
	//     }
	// }
	window.onload=function() {
	    document.getElementById("search").onclick=function () {
	            let name = document.getElementById("search_text").value
	            $.ajax({
	                type: "GET",
	                url: "http://www.cato.top:9912/book/search?name=" + name,
	                dataType: 'json',
	                contentType : 'application/json',
	                success: function(d) {
	                    var tbody = document.getElementById('tbMain');
	                    tbody.innerHTML = ""
	                    for(var i = 0;i < d.data.length; i++){ //遍历一下json数据
	                        var trow = getDataRow(d.data[i]); //定义一个方法,返回tr数据
	                        tbody.appendChild(trow);
	                    }
	                }
	            })
	        
	
	    }
	
	    document.getElementById("exit").onclick=function () {
	
	        if (confirm("Are you SURE you want to logout?")) {
	            $.ajax({
	                type: "GET",
	                url: "http://www.cato.top:9912/user/exit",
	                dataType: 'json',
	                contentType : 'application/json',
	                success: function(d) {
	                    if (d.code==200){
	                        window.location.href="login.html";
	                    }
	                }
	            })
	        }
	
	    }
	
	
	
	    $.ajax({
	        type: "GET",
	        url: "http://www.cato.top:9912/book/all",
	        dataType: 'json',
	        contentType : 'application/json',
	        success: function(d) {
	
	            var tbody = document.getElementById('tbMain');
	            for(var i = 0;i < d.data.length; i++){ //遍历一下json数据
	                var trow = getDataRow(d.data[i]); //定义一个方法,返回tr数据
	                tbody.appendChild(trow);
	            }
	        }
	    })
	
	
	
	
	
	
	    // document.getElementById("delSelected").onclick = function () {
	    //     var flag = false;
	    //     var name = document.getElementsByName("uid");
	    //     for (var i = 0; i < name.length; i++) {
	    //         if (name[i].checked) {
	    //             flag = true
	    //             break;
	    //         }
	    //     }
	    //     if (flag == true) {
	    //         if (confirm("你确定要删除选中项吗？")) {
	    //             var uid = document.getElementsByName("uid");
	    //
	    //
	    //         }
	    //
	    //     }
	    // }
	
	    document.getElementById("first").onclick=function () {
	        var name = document.getElementsByName("uid");
	        for (var i = 0; i <name.length ; i++) {
	            name[i].checked=this.checked
	        }
	    }
	
	}
}