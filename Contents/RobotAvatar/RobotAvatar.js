//*******************************************************************************
//   FURO-S Robot Avatar Contents Templage JS : 2014.11.06  by Lee Won Yong
//                           Ver : 2014.11.04
//   Comment : (1) 
//             (2) 댄스를 시작할 때마다, ChangeLanguage를 하는 버그(?)가 있음. -> 임시조치함.
//             (3)  
//*******************************************************************************

//-------------------------------------------------------------------------------
// 2014.10.31 : Contents 구조 정리 - 이원용 수석
//              (1) ** FC : Flash Call...   
//                  ** JC : JS Call...  
//-------------------------------------------------------------------------------


// [ Variables Setting ] --------------------------------------------------------
var VERSION = "20141202";
var flagPictureAvatar = "false";
//var strLanguage = "Kr";

//window.external.InitPose();

//-- Main Contents로 돌아감. 
function GoHome()
{
	//if(flagPictureAvatar == "true")	DeleteRobotFace();	//사진 아바타 삭제
	location.href = "../../maincontents.htm";
}


//------------------------------------------------------------------------------
// FC_SetRobotFlagTrue : Flag 처리. --> 향후, 소스코드에서 	DeleteRobotFace() 호출시, 
//                                      사진 아바타가 아닐 경우 skip처리 필요함.
//------------------------------------------------------------------------------
function FC_SetRobotFlagTrue()
{
	flagPictureAvatar = "true";
}


//------------------------------------------------------------------------------
// AdMoive Index 기억 : 서비스 이동 후, Paly 되고 있었던 Movie를 Play 하기 위함.(Index로 관리함)
//------------------------------------------------------------------------------
function FC_ReadSelectedMovie()
{
	//var tmpIdx = readCookie("CurrentMovie");
	//App.JC_GetSelectedMovie(tmpIdx);
}


//------------------------------------------------------------------------------
// Selected Language 기억 : 서비스 이동 후, 복귀 시, 선택된 Language를 선택하기 위함.
//							( Kr, En, Cn, Jp )
//------------------------------------------------------------------------------
function FC_ReadSelectedLanguage()
{
	var tmpLanguage = readCookie("CurrentLanguage");
	App.JC_GetSelectedLanguage(tmpLanguage);
}


//------------------------------------------------------------------------------
// UF_CamKidMode / UF_CamAdultMode : 로봇의 얼굴을 아이 또는 어른에 맞춤.
//------------------------------------------------------------------------------
// 아이 모드
function FC_CamKidMode()
{
	SetHeadPitch(-40,100);
}
// 어른 모드
function FC_CamAdultMode()
{
	SetHeadPitch(10,100);
}


//---------------------------------------------------------------------------//
//-- Cookie Control ---------------------------------------------------------//
//---------------------------------------------------------------------------//
function writeCookie(name, value, days)
{
	var expires = "";
	
	//쿠키가 지속되는 날짜 수를 지정. 예) 30 = 30일
	if (days) 
	{
		var date = new Date();
		date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
		expires = "; expires=" + date.toGMTString();
	}
	document.cookie = name + "=" + value + expires + "; path=/";
}

function readCookie(name)
{
	var searchName = name + "=";
	var cookies = document.cookie.split(';');
	for (var i=0; i<cookies.length; i++) 
	{
		var c = cookies[i];
		while (c.charAt(0) == ' ')
		c = c.substring(1, c.length);
		if (c.indexOf(searchName) == 0)
		return c.substring(searchName.length, c.length);
	}
	return null;
}

function eraseCookie(name)
{
	//특정 쿠키를 삭제
	writeCookie(name, "", -1); //소멸일자 (-1일)를 소멸시켜 쿠키를 삭제함
}
//-[End Cookie Control]------------------------------------------------------//
function OnUserApproached()
{	
	//PlaySpeech("Welcome to the Amgen booth.");
	//PlaySpeech("Hi, welcome to ICC, Fresh Technology for Good Food.");
}

function OnUserDisappeared()
{
	location.href = "../../maincontents.htm";
}