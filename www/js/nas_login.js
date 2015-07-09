var NASURL = "http://163.15.192.185/nas/index.php/rest_auth";
//var NASURL = "http://" + $(location).attr('host')+ "/nas/index.php/rest_auth";

$(document).ready(function(){
	var qry_str='/teacher/format/json';
	$(document).ready(function(){	
		$("#login").click(function(){
			if($("#username").val() == "" && $("#psw").val() == "" ){
				alert( "�п�J������!!");
			} else {
				window.sessionStorage["id"] = $("#username").val();
				var request = $.ajax({
					url: NASURL+qry_str,
					type: "POST",	
					cache: false,
					crossDomain: true,
					success: onSuccess,
					error: onError,			
					data: {
						user_id:$("#username").val(),
						password:$("#psw").val()
					},
					contentType: "application/x-www-form-urlencoded; charset=utf-8",
					dataType: "html"
				});				

			}
		});	//http://127.0.0.1/nas/index.php/RESTAPI/auth/format/json
		$("#select").change(function(){
			$("#id").show();
			switch($("#select").val())
			{
				case '1':
					qry_str="/teacher/format/json";
					break;
				case '2':
					qry_str="/student/format/json";
					break;
				case '3':
					$("#id").hide();
					qry_str="/employer/format/json";
					break;
			}
		});
	});
		
	$("#li_search").click(function(){
		var url = $(this).attr("value");
		href_load(url);
	});
	
	$("#callAjaxForm").submit(function(){
//		alert("#callAjaxForm");
        select();
		return false;
    });
	
 	
});
function debug(a)
{
	console.log(a);
}

function href_load(url) { //�ѨM�L�k�����ϥ�href�ݩʪ����D
	location.href= url;
}

function onError(data, status)
{alert(status);
	alert(data);
	
} 

function onSuccess(data, status)
{
	data = jQuery.parseJSON(data);

	if(data.auth =='success'){
		switch($("#select").val())
		{
			case '1':
				url_str="teacher_query.html";
				break;
			case '2':
				url_str="student_query.html";
				break;
			case '3':
				window.sessionStorage["id"] = data.id;
				url_str="employer_query.html";
				break;
		}
		window.location = url_str;
//		href_load('search.html');
	} else {
		alert("login fail");
	}
	debug(data);
}
