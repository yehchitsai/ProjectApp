
var CodeURL = "http://163.15.192.185/nas/index.php/CIFun/code";
$(document).ready(function()
{
	$("#share1").click(function(){
//		debug(sessionStorage["id"]);
		$.ajax({
			url:CodeURL,
			data: {id : sessionStorage["id"]},
			type:"POST",
			//�ǰe���\�h���X���\�T��
			success:function(data){
				//��ƶǰe���\��N�|����o��function�����{���A�i�H�b�o�̼g�J�n���檺�{��
				$("#showcode").text(data);
				$("#share1").hide();
			},
			//�ǰe���ѫh���X���ѰT��      
			error:function(data){                                                                 
				//��ƶǰe���ѫ�N�|����o��function�����{���A�i�H�b�o�̼g�J�n���檺�{��  
				alert("fail");
			}
		}); 
//				debug($("#share1").val());
//		$("#showcode").text('123');// = sessionStorage["id"];
	});
});
