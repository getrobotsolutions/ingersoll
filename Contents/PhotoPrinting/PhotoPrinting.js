/****************************************************************************/


var strLang;
var message = "";
var refreshIntervalId;


/****************************************************************************/

/* doubleclick off */
$(document).ready(function(){
	$("*").dblclick(function(e){
        e.preventDefault();
	});
	$("#panel2").hide();
});

function JSMain() {		
	window.external.StartCamViewer();
	refreshIntervalId = setInterval("test()", 33);		
}


function JSUnload() {	
	window.external.StopCamViewer();
}

function Home() {
	location.href = "../../maincontents.htm";
}

function test() {
	var img = GetCaptureImage();
	var canvas = document.getElementById("camImage");
	var ctx = canvas.getContext("2d");
	var image = new Image();

	image.onload = function() {
		ctx.drawImage(this, 0, 0, 900, 610);
	}
	image.src = "data:image/gif;base64," + img;
}

function keyboard(strPara) {

	if (strPara == "bs") {
		message = message.slice(0, -1);
	}
	
	else {
		message += strPara;

	}

	document.getElementById('address').innerHTML = message;

}

function GetCurrentFolderPath() {
	var path = window.location.pathname;
	path = path.substring(1,path.lastIndexOf("/")+1);
	return path;
}

function OnSendEmailResult(boolPara) {

	if(boolPara == "True"){
		//alert('Success');
		$("#panel2").show();
	}
	else{
		alert('Failed');
	}
}

function send(strpara) {

	if (strpara == "1") {		
		var addr = "paul@usofficeplus.com";//"paul@usofficeplus.com ";		
		var subject = "Photo From Amgen Robot!";
		var body = "Email: "+ message;
		var mail_server = "smtp.gmail.com";
		var mail_addr_sender = "amgenrobot@gmail.com";
		var pswd = "@amgenrobot123";
		var port = 587;
		var ssl = "true";
		
		document.getElementById('keyboard').style.display = "none";
		window.external.SendEmail(addr, imageFilePath, subject, body,mail_server, mail_addr_sender, pswd, port, ssl);
	}

	if (strpara == "2") {
		message = " ";
		document.getElementById('address').innerHTML = message;
		document.getElementById('keyboard').style.display = "none";
	}

}

function capture() {
	PlaySpeech("Look at the lens on the top of the robot’s head.");
	document.getElementById('capture').src = "Image/start_btn_press.png";
	setTimeout('Timer1()', 500);
	setTimeout('Timer2()', 1500);
	setTimeout('Timer3()', 2500);
	setTimeout('Timer4()', 3500);
}

function Timer1() {
	document.getElementById('capture').style.display = "none";
	document.getElementById('number_img').style.display = "";
	document.getElementById('number_img').src = "Image/3.png";

}

function Timer2() {

	document.getElementById('number_img').src = "Image/2.png";

}

function Timer3() {

	document.getElementById('number_img').src = "Image/1.png";
}

function Timer4() {
	document.getElementById('email').style.display = "";
	document.getElementById('retake').style.display = "";
	document.getElementById('number_img').style.display = "none";
	clearInterval(refreshIntervalId);
	window.external.PauseCamViewer();

	var d = new Date();
	var fileName = d.getTime();	
	SaveImage(fileName);
}

var imageFilePath;
function SaveImage(fileName)
{	
	var curPath = GetCurrentFolderPath();
	var directory = curPath + "/Photo/";
	var overlapImgPath = curPath + "/logo.png";
	
	imageFilePath = directory + fileName + ".jpg";
	window.external.SaveImage(imageFilePath, overlapImgPath);
}

function retake() {
	document.getElementById('email').style.display = "none";
	document.getElementById('retake').style.display = "none";
	document.getElementById('capture').style.display = "";
	document.getElementById('capture').src = "Image/start_btn_nor.png";
	document.getElementById('keyboard').style.display = "none";
	//JSMain();
}

function email() {
	message = " ";
	document.getElementById('address').innerHTML = message;
	document.getElementById('keyboard').style.display = "";
}
function OnUserApproached()
{	
		//PlaySpeech("Hi, welcome to ICC, Fresh Technology for Good Food.");
}

function OnUserDisappeared()
{
	//location.href = "../../maincontents.htm";
}


