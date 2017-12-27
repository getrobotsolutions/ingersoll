//*******************************************************************************
//   FURO-D Contents Templage JS : 2016.02.02

//   Comment : (1) Contents 정리.
//             (2)
//             (3)  
//*******************************************************************************



//------------------------------------------------------------------------------
// Service Contents Call : Main Screen에서 선택한 Service Contents를 호출함.
//------------------------------------------------------------------------------
function FC_ContentsCall(strContentsName, strLanguage)
{
	window.external.PlayBehavior("Yes01");
	//[퓨처로봇 소개 서비스]---
	if(strContentsName == "FutureRobot")   
	{
		if(strLanguage=="Kr") { PlaySpeech("SME 컨퍼런스를 소개해 드리겠습니다.");  }
		if(strLanguage=="En") { PlaySpeech("I will introduce the SME Conference.");  }
		if(strLanguage=="Cn") { PlaySpeech("给您介绍, 第19届资信商业大会"); }
		if(strLanguage=="Jp") { PlaySpeech("フューチャーロボット ご紹介します。");  }
		location.href = "Contents/ConferenceInfo/ConferenceInfo.htm";
	}

	if(strContentsName == "RobotAvatar")   
	{
		if(strLanguage=="Kr") { PlaySpeech('로봇 얼굴에 내 얼굴을 넣어보세요.');  }
		if(strLanguage=="En") { PlaySpeech('Try replacing robot avatar with your face.');  }
		if(strLanguage=="Cn") { PlaySpeech('试着用你的脸替换的机器人化身。');  }
		if(strLanguage=="Jp") { PlaySpeech('あなたの顔にロボットアバターを交換してみてください。');  }
		location.href = "Contents/RobotAvatar/RobotAvatar.htm";
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
		if(strLanguage=="Kr") { PlaySpeech('로봇 댄스 입니다.');  }
		if(strLanguage=="En") { PlaySpeech('This is for introducing robot dance service.');  }
		if(strLanguage=="Cn") { PlaySpeech('这是用于将机器人舞蹈服务。');  }
		if(strLanguage=="Jp") { PlaySpeech('これは、ロボットダンスのサービスを導入するためである。');  }
		location.href = "Contents/RobotDance/RobotDance.htm";
	}

	//[사람추종 서비스]---
	if(strContentsName == "HumanFollow")   
	{
		if(strLanguage=="Kr") { PlaySpeech('로봇이 사람을 따라가는 서비스 입니다.');  }
		if(strLanguage=="En") { PlaySpeech('This is for introducing following mode service.');  }
		if(strLanguage=="Cn") { PlaySpeech('这是用于引入以下模式服务。');  }
		if(strLanguage=="Jp") { PlaySpeech('これは、以下のモードサービスを導入するためである。');  }
		location.href = "Contents/HumanFollow/HumanFollow.htm";
	}

	//[얼굴추적 서비스]---
	if(strContentsName == "FaceTracking")   
	{
		if(strLanguage=="Kr") { PlaySpeech('사람의 얼굴을 인식하고 추적하는 서비스 입니다.');  }
		if(strLanguage=="En") { PlaySpeech('This is for introducing face tracking service.');  }
		if(strLanguage=="Cn") { PlaySpeech('这是引入人脸跟踪服务。');  }
		if(strLanguage=="Jp") { PlaySpeech('これは、顔追跡サービスを導入するためである。');  }
		location.href = "Contents/FaceTracking/FaceTracking.htm";
	}

	//[나도로봇 서비스]---
	if(strContentsName == "Game")   
	{
		if(strLanguage=="Kr") { PlaySpeech('가워바위보 게임입니다.');  }
		if(strLanguage=="En") { PlaySpeech('Lets try Rock-paper-scissors game');  }
		if(strLanguage=="Cn") { PlaySpeech('这是“石头剪子布”游戏 。');  }
		if(strLanguage=="Jp") { PlaySpeech('あなたの顔にロボットアバターを交換してみてください。');  }
		location.href = "Contents/RCPGame/RCPGame.htm";
	}


	//[티켓프린트 서비스]---
	if(strContentsName == "TicketPrinting")   
	{
		if(strLanguage=="Kr") { PlaySpeech('퓨로에 다양한 장치를 연결하여 티켓프린팅 서비스가 가능합니다..');  }
		if(strLanguage=="En") { PlaySpeech('Furo can print tickets and receipts for customers .');  }
		if(strLanguage=="Cn") { PlaySpeech('呋喃并可以打印票和收据');  }
		if(strLanguage=="Jp") { PlaySpeech('フランおよびチケットや領収書を印刷することができ');  }
		location.href = "Contents/TicketPrinting/TicketPrinting.htm";
	}
	
	//[visual Fencing]---
	if(strContentsName == "visualFence")   
	{
		if(strLanguage=="Kr") { PlaySpeech('펜스 주행을 시작합니다..');  }
		if(strLanguage=="En") { PlaySpeech('start visualfencing .');  }
		if(strLanguage=="Cn") { PlaySpeech('呋喃并可以打印票和收据');  }
		if(strLanguage=="Jp") { PlaySpeech('フランおよびチケットや領収書を印刷することができ');  }
		location.href = "Contents/visualFence/visualFence.htm";
	}
	
	//[map navigation]---
	if(strContentsName == "mapNavigation")   
	{
		if(strLanguage=="Kr") { PlaySpeech('네비게이션 지도를 볼 수 잇는 화면입니다..');  }
		if(strLanguage=="En") { PlaySpeech('start map navigation .');  }
		if(strLanguage=="Cn") { PlaySpeech('呋喃并可以打印票和收据');  }
		if(strLanguage=="Jp") { PlaySpeech('フランおよびチケットや領収書を印刷することができ');  }
		location.href = "Contents/mapNavigation/mapNavigation.htm";
	}
}



//------------------------------------------------------------
// Language Change. : Kr, En, Cn, Jp 
//------------------------------------------------------------
function FC_ChangeLanguage(strLanguage)
{
	ChangeLanguage(strLanguage);
	writeCookie("CurrentLanguage", strLanguage, 30);
}


//------------------------------------------------------------------------------
// AdMoive Index 기억 : 서비스 이동 후, Paly 되고 있었던 Movie를 Play 하기 위함.
//------------------------------------------------------------------------------
function FC_ChangeAdMovie(strIdx)
{
	writeCookie("CurrentMovie", strIdx, 30);
}


//------------------------------------------------------------------------------
// AdMoive Index 기억 : 서비스 이동 후, Paly 되고 있었던 Movie를 Play 하기 위함.(Index로 관리함)
//------------------------------------------------------------------------------
function FC_ReadSelectedMovie()
{
	var tmpIdx = readCookie("CurrentMovie");
	video(tmpIdx);
	FC_ChangeAdMovieHtml(tmpIdx);
}


//------------------------------------------------------------------------------
// Selected Language 기억 : 서비스 이동 후, 복귀 시, 선택된 Language를 선택하기 위함.
//							( Kr, En, Cn, Jp )
//------------------------------------------------------------------------------
function FC_ReadSelectedLanguage()
{
	return readCookie("CurrentLanguage");
}

//------------------------------------------------------------------------------
// FC_LoadConfigView : 관리자 설정 페이지로 이동함.
//------------------------------------------------------------------------------
function FC_LoadConfigView()
{
	location.href = "Config/Config.htm";
}


function OnUserDisappeared()
{
var ran = Math.random()*3;
	var langCnt = Math.floor(ran);

	FC_ChangeLanguage("english");
	if(langCnt == 1 )	    PlaySpeech("Please, don't go away.");
	else if(langCnt == 2 )	PlaySpeech("Bye bye.");
	else if(langCnt == 3 )	PlaySpeech("Where you go?");
	else if(langCnt == 4 )  PlaySpeech("I miss you.");
	
	window.external.StartFaceTracking(false);
	location.href = "IdlePage/IdlePage.htm";
}




//---------------------------------------------------------------------------//
//-- Cookie Control ---------------------------------------------------------//
//---------------------------------------------------------------------------//
var CookieDay = 30;			//쿠키로 저장하는 기간.(Unity : Day)
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
