//*******************************************************************************
//FURO-D Contents Templage JS : 2016.02.02

//Comment : (1) Contents 정리.
//(2)
//(3)  
//*******************************************************************************


//window.external.ChangeLanguage("english");
window.external.ChangeLanguage("english");
SetVolume(0.7);
//------------------------------------------------------------------------------
//Service Contents Call : Main Screen에서 선택한 Service Contents를 호출함.
//------------------------------------------------------------------------------
function FC_ContentsCall(strContentsName, strLanguage)
{
	//window.external.PlayBehavior("Yes01");
	//[퓨처로봇 소개 서비스]---


	if(strContentsName == "sanseo-advantage")   
	{
		
		if(strLanguage=="En") { PlaySpeech("Sanseo Advantage");  }
		
		location.href = "Contents/sanseo-advantage/sanseo-advantage.htm";
	}
	if(strContentsName == "Coupons")   
	{
		location.href = "Contents/Coupons/Coupons.htm";
	}


if(strContentsName == "DecemberSavings")   
	{
		
		//if(strLanguage=="En") { PlaySpeech("Welcome to Amegan Quiz.");  }
		
		location.href = "Contents/DecemberSavings/DecemberSavings.htm";
	}
	if(strContentsName == "TryIt")   
	{
		
		if(strLanguage=="En") { //PlaySpeech("Sanseo Advantage");  
	}
		
		location.href = "Contents/TryIt/TryIt.htm";
	}

   
	if(strContentsName == "RobotAvatar")   
	{
		
		//if(strLanguage=="Kr") { PlaySpeech('로봇 얼굴에 내 얼굴을 넣어보세요.');  }
		//if(strLanguage=="En") { PlaySpeech('Try replacing robot avatar with your face.');  }
		//if(strLanguage=="Cn") { PlaySpeech('试着用你的脸替换的机器人化身。');  }
		//if(strLanguage=="Jp") { PlaySpeech('あなたの顔にロボットアバターを交換してみてください。');  }
		location.href = "Contents/RobotAvatar/index.htm";
	}

	//[포토 프린트 서비스]---
	if(strContentsName == "PhotoPrinting")   
	{
		if(strLanguage=="Kr") { PlaySpeech("사진을 촬영하고 인쇄해 드립니다.");  }
		if(strLanguage=="En") { PlaySpeech("Try to take your photo and print.");  }
		if(strLanguage=="Cn") { PlaySpeech("尽量把你的照片和打印。"); }
		if(strLanguage=="Jp") { PlaySpeech("あなたの写真や印刷を取るようにしてください。");  }
		location.href = "Contents/PhotoPrinting/PhotoPrinting.htm";
	}

	//[음성인식 서비스]---
	if(strContentsName == "VoiceRecognition")   
	{
		if(strLanguage=="Kr") { PlaySpeech('음성인식 서비스 입니다.');  }
		if(strLanguage=="En") { PlaySpeech('This is for multi-language voice recognition service.');  }
		if(strLanguage=="Cn") { PlaySpeech('这是为多语言语音识别服务。');  }
		if(strLanguage=="Jp") { PlaySpeech('これは、多言語音声認識サービスのためのものである。');  }
		location.href = "Contents/voiceRecognition/voiceRecognition.htm";
	}

	//[로봇제어 서비스]---
	if(strContentsName == "RobotRemote")   
	{
		if(strLanguage=="Kr") { PlaySpeech('로봇 원격 조정 서비스 입니다.');  }
		if(strLanguage=="En") { PlaySpeech('This is for Robot Remote control service.');  }
		if(strLanguage=="Cn") { PlaySpeech('这是机器人远程控制服务。');  }
		if(strLanguage=="Jp") { PlaySpeech('これはロボットのリモートコントロールサービス用です。');  }
		location.href = "Contents/Rms/Rms.htm";
	}

	//[음성인식 서비스]---
	if(strContentsName == "RobotDance")   
	{
		//if(strLanguage=="Kr") { PlaySpeech('로봇 댄스 입니다.');  }
		//if(strLanguage=="En") { PlaySpeech('This is for introducing robot dance service.');  }
		//if(strLanguage=="Cn") { PlaySpeech('这是用于将机器人舞蹈服务。');  }
		//if(strLanguage=="Jp") { PlaySpeech('これは、ロボットダンスのサービスを導入するためである。');  }
		location.href = "Contents/RobotDance/RobotDance.htm";
	}

}



//------------------------------------------------------------
//Language Change. : Kr, En, Cn, Jp 
//------------------------------------------------------------
function FC_ChangeLanguage(strLanguage)
{
	ChangeLanguage("english");
	writeCookie("CurrentLanguage", "english", 30);
}


//------------------------------------------------------------------------------
//AdMoive Index 기억 : 서비스 이동 후, Paly 되고 있었던 Movie를 Play 하기 위함.
//------------------------------------------------------------------------------
function FC_ChangeAdMovie(strIdx)
{
	writeCookie("CurrentMovie", strIdx, 30);
}


//------------------------------------------------------------------------------
//AdMoive Index 기억 : 서비스 이동 후, Paly 되고 있었던 Movie를 Play 하기 위함.(Index로 관리함)
//------------------------------------------------------------------------------
function FC_ReadSelectedMovie()
{
	var tmpIdx = readCookie("CurrentMovie");	
	video(tmpIdx);
	FC_ChangeAdMovieHtml(tmpIdx);
}


//------------------------------------------------------------------------------
//Selected Language 기억 : 서비스 이동 후, 복귀 시, 선택된 Language를 선택하기 위함.
//( Kr, En, Cn, Jp )
//------------------------------------------------------------------------------
function FC_ReadSelectedLanguage()
{
	return readCookie("CurrentLanguage");
}

//------------------------------------------------------------------------------
//FC_LoadConfigView : 관리자 설정 페이지로 이동함.
//------------------------------------------------------------------------------
function FC_LoadConfigView()
{
	location.href = "Config/Config.htm";
}

function OnUserApproached()
{	
	//window.external.RobotDanceStart(false);
	SetVolume(0.7);
	//PlaySpeech("Happy Holidays from Ingersoll Auto Group.");
	PlaySpeech("Test");
	alert("I see you");
	//PlaySpeech("Press any button on the screen to begin.");
}

function OnUserDisappeared()
{
    alert("I can't see you");
	//setTimeout(dancing(),60000);
	//function dancing(){
	//	window.external.RobotDanceStart(true);
	//}
	/*var ran = Math.random()*3;
	var langCnt = Math.floor(ran);

	FC_ChangeLanguage("english");
	if(langCnt == 1 )	    PlaySpeech("Please, don't go away.");
	else if(langCnt == 2 )	PlaySpeech("Bye bye.");
	else if(langCnt == 3 )	PlaySpeech("Where you go?");
	else if(langCnt == 4 )  PlaySpeech("I miss you.");

	window.external.StartFaceTracking(false);
	//location.href = "IdlePage/IdlePage.htm";*/
}




//---------------------------------------------------------------------------//
//-- Cookie Control ---------------------------------------------------------//
//---------------------------------------------------------------------------//
var CookieDay = 30;			//save duration.(Unity : Day)
function writeCookie(name, value, days)
{
	var expires = "";
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
	//erase particular cookie
	writeCookie(name, "", -1); //소멸일자 (-1일)를 소멸시켜 쿠키를 삭제함
}
//-[End Cookie Control]------------------------------------------------------//
function OnJoystickControlled(strPara)
{
	var btn_info = strPara.split(',')[4];
	
	if(btn_info[0] == '1')	PlaySpeech("Don’t be shy, come up and say hello.");
	if(btn_info[1] == '1')	PlaySpeech("Hello, my name is Tracey, I love being at the Mall, how are you?");
	if(btn_info[2] == '1')	PlaySpeech("Tell me what you want for the holidays, and I’ll put in the good word to Santa.");
	if(btn_info[3] == '1')	PlaySpeech("Please come over to me and I'll give you a special coupon.");
		
}