
var CodeURL = "http://163.15.192.185/nas/index.php/CIFun/code";
$(document).ready(function()
{
	$("#share1").click(function(){
//		debug(sessionStorage["id"]);
		$.ajax({
			url:CodeURL,
			data: {id : sessionStorage["id"]},
			type:"POST",
			//傳送成功則跳出成功訊息
			success:function(data){
				//資料傳送成功後就會執行這個function內的程式，可以在這裡寫入要執行的程式
				$("#showcode").text(data);
				$("#share1").hide();
			},
			//傳送失敗則跳出失敗訊息      
			error:function(data){                                                                 
				//資料傳送失敗後就會執行這個function內的程式，可以在這裡寫入要執行的程式  
				alert("fail");
			}
		}); 
//				debug($("#share1").val());
//		$("#showcode").text('123');// = sessionStorage["id"];
	});
});
