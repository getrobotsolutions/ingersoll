//*******************************************************************************
//   FURO-D Robot Dance Contents Templage JS : 2016.02.02  
//                         
//   Comment : (1) 
//             (2)
//             (3)  
//*******************************************************************************


//-- Main Contents로 돌아감. 
function GoHome()
{
	location.href = "../../maincontents.htm";
}


//-- Dance / Behavior 를 플레이함.
function FC_DancePlay()
{
	window.external.RobotDanceStart(true);	

}
SetVolume(0.5);

//-- Dance / Behavior 를 정지함.
function FC_DanceStop()
{
	window.external.RobotDanceStart(false);
}


function OnRobotDanceStart()
{
	//debugLog("onRobotDanceStart() event");
}

function OnRobotDanceStop()
{
	App.JC_DanceStop();
}


function OnUserApproached()
{	
	//PlaySpeech("Welcome to the Amgen booth.");
	//PlaySpeech("Hi, welcome to ICC, Fresh Technology for Good Food.");
}

function OnUserDisappeared()
{
	//location.href = "../../maincontents.htm";
}