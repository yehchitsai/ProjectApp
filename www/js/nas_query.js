host = 'http://mars.kh.usc.edu.tw';
//var NASURL = "http://mars.kh.usc.edu.tw/nas/index.php/query";
var NASURL = "http://163.15.192.185/nas/index.php/query";
$(document).ready(function(){

	$("#li_search").click(function(){
		var url = $(this).attr("value");
		href_load(url);
	});
	
    $("#search").click(function(){
        select();
    });
	
	$("#callAjaxForm").submit(function(){

        select();
		return false;
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
			$td1 = "<td> " + data[$i].proj_members + "&nbsp;" + 
			data[$i].p_date + "<br><a href = '" + host + "/nas/index.php/nas_directory?sid=" + data[$i].p_leader_number + "' >" + data[$i].p_name + "</a><hr></td>";
			$tr += $td1+"</tr>";
	  
			$("#result").append($tr);
		}
	}
}
function select()
{
	switch(parseInt($("#sel_tw22").val()))
    {
		case 0:
			var request = $.ajax({

				url: NASURL,
				type: "POST",	
				cache: false,
				crossDomain: true,
				success: onSuccess,
				error: onError,			
				data: {
					action:"keyword",
					k_value:$("#inp_tw20").val()
				},
				contentType: "application/x-www-form-urlencoded; charset=utf-8",
				dataType: "html"
			});
			break;
		case 1:
			var request = $.ajax({
				//url: $host + "/nas/Controls/query.php",
				url: NASURL,
				type: "POST",	
				cache: false,
				crossDomain: true,
				success: onSuccess,
				error: onError,			
				data: {
					action:"teacher",
					p_adviser:$("#inp_tw20").val()
				},
				contentType: "application/x-www-form-urlencoded; charset=utf-8",
				dataType: "html"
			});
			break;		
		case 2:
			var request = $.ajax({
				url: NASURL,
				//url: $host + "/nas/Controls/query.php",
				type: "POST",	
				cache: false,
				crossDomain: true,
				success: onSuccess,
				error: onError,			
				data: {
					action:"project",
					p_name:$("#inp_tw20").val()
				},
				contentType: "application/x-www-form-urlencoded; charset=utf-8",
				dataType: "html"
			});
			break;	
		case 3:
			var request = $.ajax({
				url: NASURL,
				//url: $host + "/nas/Controls/query.php",
				type: "POST",	
				cache: false,
				crossDomain: true,
				success: onSuccess,
				error: onError,			
				data: {
					action:"enter_year",
					 k_value:$("#inp_tw20").val()
				},
				contentType: "application/x-www-form-urlencoded; charset=utf-8",
				dataType: "html"
			});
			break;
		case 4:
			var request = $.ajax({
				url: NASURL,
				//url: $host + "/nas/Controls/query.php",
				type: "POST",	
				cache: false,
				crossDomain: true,
				success: onSuccess,
				error: onError,			
				data: {
					action:"student",
					 k_value:$("#inp_tw20").val()
				},
				contentType: "application/x-www-form-urlencoded; charset=utf-8",
				dataType: "html"
			});
			break;
	}
}