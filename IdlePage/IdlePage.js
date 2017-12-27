//*******************************************************************************
//   FURO-D Contents Templage JS : 2016.02.02

//   Comment : (1) Contents 정리.
//             (2)
//             (3)  
//*******************************************************************************


function OnUserApproached()
{
	Home();
}

function Home()
{
	
	location.href = "../maincontents.htm";
}

var Music01 = "Music/IdleDanceMusics_humming_02.mp3";
var Music01_dur = 3000;
var Music02 = "Music/IdleDanceMusics01_Piano01_51.mp3";
var Music02_dur = 51000;
var Music03 = "Music/IdleDanceMusics02_Forest_YuhkiKuramoto_45.mp3";
var Music03_dur = 45000;
var Music04 = "Music/IdleDanceMusics03_ByJun_36.mp3";
var Music04_dur = 36000;
var Music05 = "Music/IdleDanceMusics04_GeorgeWinston_JoyDecember_50.mp3";
var Music05_dur = 50000;
var Music06 = "Music/IdleDanceMusics05_FlyingPetals_29.mp3";
var Music06_dur = 29000;

var TTS = "Thank you for visiting us";



var StateScheduleTimer;
var SLEEP_TIME;
var state = 0;
function StartScenario()
{
	switch(state)
	{
		case 0 :
			SLEEP_TIME = 1000;
			NONE();
			break;
		case 1:		//FENCE TIME
			clearTimeout(musicTimer);
			SLEEP_TIME = 226000;
			MOBILE();
			break;
		case 2:		
			SLEEP_TIME = 6000;
			TALK();
			break;
	}

	state++;
	if(state == 3)	state = 0;

	StateScheduleTimer = setTimeout("StartScenario();",SLEEP_TIME);	
}

function StopScenario()
{
	clearTimeout(StateScheduleTimer);
}


function NONE()
{
}

function MOBILE()
{
	musicCnt = 0;
	PlayMusic();
}

function TALK()
{
	ChangeLanguage("English");
	PlaySpeech(TTS);
}



var musicTimer;
var musicCnt = 0;
function PlayMusic()
{
	var dur;

	switch(musicCnt)
	{
		case 0:
			AudioPlay(Music02,0.5);
			dur = Music02_dur;	
			break;
		case 1:
			AudioPlay(Music01,0.5);
			dur = Music01_dur;	
			break;


		case 2:
			AudioPlay(Music03,0.5);
			dur = Music03_dur;	
			break;
		case 3:
			AudioPlay(Music01,0.5);
			dur = Music01_dur;	
			break;


		case 4:
			AudioPlay(Music04,0.5);
			dur = Music04_dur;	
			break;
		case 5:
			AudioPlay(Music01,0.5);
			dur = Music01_dur;	
			break;


		case 6:
			AudioPlay(Music05,0.5);
			dur = Music05_dur;	
			break;

		case 7:
			AudioPlay(Music01,0.5);
			dur = Music01_dur;	
			break;


		case 8:
			AudioPlay(Music06,0.5);
			dur = Music06_dur;	
			break;

		case 9:
			AudioPlay(Music01,0.5);
			dur = Music01_dur;	
			break;
	}
	musicCnt++;
	musicTimer = setTimeout("PlayMusic();",dur);
}



//Audio Play
var player = new Audio('');

function AudioPlay(url, volume){
    if(window.HTMLAudioElement){
		player.pause();
        player = new Audio('');

        if(player.canPlayType('audio/mp3')){
            player.src = url;
        }

		player.volume = volume;
        player.play();

    } 
}

function AudioStop()
{
	player.pause();
}


