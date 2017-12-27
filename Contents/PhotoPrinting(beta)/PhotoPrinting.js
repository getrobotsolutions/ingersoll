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
	//window.external.StartCamViewer();
	refreshIntervalId = setInterval("test()", 33);		
}


function JSUnload() {	
	window.external.StopCamViewer();
}

function Home() {
	location.href = "../../maincontents.htm";
}

function test() {
	var img = '';//GetCaptureImage();
	var canvas = document.getElementById("camImage");
	var ctx = canvas.getContext("2d");
	var image = new Image();
	var image2= new Image();
	image2.src="Image/Pannel-outline.png";

	image.onload = function() {
		ctx.drawImage(image, 0, 0, 900, 610);
		ctx.drawImage(image2, 10, 10, 790, 540);
	}
	image.src = "data:image/gif;base64," + img ;
	//image.src=canvas.toDataURL();
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
	//PlaySpeech("Look at the lens on the top of the robot’s head.");
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
	//window.external.PauseCamViewer();

	var d = new Date();
	var fileName = d.getTime();	
	SaveImage(fileName);
}
var seedatetime="";
var imageFilePath;
function SaveImage(fileName)
{	

	var curPath = GetCurrentFolderPath();
	var directory = curPath + "/Photo/";
	var overlapImgPath = curPath + "/logo.png";
	
	imageFilePath = directory + fileName + ".jpg";
	//window.external.SaveImage(imageFilePath, overlapImgPath);

	var data = document.getElementById("camImage").toDataURL();
	//var canvas = document.getElementById("camImage");
	//var img    = canvas.toDataURL("image/png");
	var ci = document.getElementById("capturedImage");
//document.write('<img src="'+img+'"/>');	
ci.src=data;
	
var date = new Date();
var year = date.getFullYear();
var month = date.getMonth() + 1;      // "+ 1" becouse the 1st month is 0
var day = date.getDate();
var hour = date.getHours();
var minutes = date.getMinutes();
var secconds = date.getSeconds()

 seedatetime= month+ '-'+ day+ '-'+ year+ '-'+ hour+ '-'+ minutes+ '-'+ secconds+'.png';

	$.post("http://77.104.168.134/~tamoorka/photoprinting/saveimage.php", {
		imageData : data,
		fname:seedatetime
	}, function(data) {
		//window.location = data;
	});
}

function retake() {
	//var canvas = document.getElementById("camImage");
	//canvas.clearRect(0, 0, 800, 550);
	document.getElementById('email').style.display = "none";
	document.getElementById('retake').style.display = "none";
	document.getElementById('capture').style.display = "";
	document.getElementById('capture').src = "Image/start_btn_nor.png";
	document.getElementById('keyboard').style.display = "none";
	JSMain();
}

function email() {
	//window.location= "https://www.facebook.com/sharer/sharer.php?u=http%3A%2F%2F77.104.168.134%2F%7Etamoorka%2Fphotoprinting%2F"+seedatetime;
	//message = " ";
	//document.getElementById('address').innerHTML = message;
	//document.getElementById('keyboard').style.display = "";
}
function OnUserApproached()
{	
		//PlaySpeech("Hi, welcome to ICC, Fresh Technology for Good Food.");
}

function OnUserDisappeared()
{
	location.href = "../../maincontents.htm";
}

