var QBApp = {
  appId: 29010,
  authKey: 'H47xCdepZ2GW5P9',
  authSecret: 'NEgn2agFPuUnUOz'
};

var QBUser = {
	login: "SurveyCO",
	password: "SurveyCO"
};

QB.init(QBApp.appId, QBApp.authKey, QBApp.authSecret, true);

// Variants SDK types for Survey Question
var iosType =     'iOSSDK',
		androidType = 'AndroidSDK',
		jsType =      'JSSDK';
// Choose SDK type to load Survey Question
var typeSDK      = jsType;
// Choose class to load Survey Question
var QUESTIONS_CLASS_NAME = "SurveyQuestion";
// Choose class to upload Survey Answer
var ANSWERS_CLASS_NAME  = "SurveyAnswer";
