host = 'http://mars.kh.usc.edu.tw';
//var NASURL = "http://mars.kh.usc.edu.tw/nas/index.php/query";
var NASURL = "http://127.0.0.1/nas/index.php/query";
$(document).ready(function(){
	debug(sessionStorage["id"]);
	var request = $.ajax({
		url: NASURL,
		type: "POST",	
		cache: false,
		crossDomain: true,
		success: onSuccess,
		error: onError,			
		data: {
			action:"student",
			k_value:window.sessionStorage["id"]
		},
		contentType: "application/x-www-form-urlencoded; charset=utf-8",
		dataType: "html"
	});

 	
});
function debug(a)
{
	console.log(a);
}

function onError(data, status)
{
	alert(data);
} 

function onSuccess(data, status)
{
	if($("#sel_tw22").attr("value") == "0")
		data = jQuery.parseJSON(data);
	else
		data = eval(data);
	debug(data);
	$("#result tr.qu").remove();
	for($i = 0; $i< data.length;$i++)
	{	
		{
			$tr = "<tr class= 'qu' >";
			$td1 = "<td> " + data[$i].p_adviser + "&nbsp;" + data[$i].p_date + "<br><a href = '" + host + "/nas_directory/" + data[$i].p_leader_number + "' >" + data[$i].p_name + "</a><hr></td>";
			$tr += $td1+"</tr>";
	  
			$("#result").append($tr);
		}
	}
}
