// Create session
QB.createSession(QBUser, function(err, result){
	if (err) {
		console.log('Something went wrong: ' + err);
	} else {
		console.log('Session created with id ' + result.id);

		// Get Survey Question from Cusmom Objects
		getSurveyQuestion();

		// Show loader animation while content is loading
		$('#processLoader').delay(250).fadeOut(750);
	}
});

// Get Survey Question from Cusmom Objects
function getSurveyQuestion() {
	// Add sort by orderand SDK type for filter
	var filter = {sort_desc: 'order', type: typeSDK};
	// Get Survey Question by class with filter
	QB.data.list(QUESTIONS_CLASS_NAME, filter, function(err, result){
		if (err) {
			console.log(err);
		} else {
			console.log(result);
			// Add header for content
			$('.co_form').append('<h2 class="co_main_h">Product feedback survey</h2>');

			// Cycle, which shows Survey Questions
			for (var i=0; i < result.items.length; i++) {
				var item = result.items[result.items.length-i-1];
				showSurveyQuestion(item.question, item.answers, item.has_alternative_answer, i);
			}

			// Adds a buttom "NEXT" which show popup window confirmation
			$('.co_form').append('<button id="co_next" type="button" value="NEXT" class="btn btn-lg col-xs-4 col-xs-offset-4"'+
													 ' data-toggle="modal" data-target=".bs-example-modal-md">NEXT</button>');

			$('.co_main_h').delay(1001).fadeIn(1000);
			$('.co_survey').delay(1001).fadeIn(1000);
			$('#co_next').delay(1001).fadeIn(1000);
			// Remove the check from the choices, if the alternative text
			$('.co_text_answer.for_other').on("click", function() {
				var childArr = $(this).siblings('div.co_checkbox');
				for (var i=childArr.length; i > 0; i--) {
					var childIs = childArr[childArr.length-i];
					$(childIs).children('input')[0].checked = false;
				}
			});
		}
	});
}

// It makes an HTML form for Survey Question
function showSurveyQuestion(question, answers, alternative, j) {
	var surveyHtml = $('<div class="co_survey"></div>'),
			questionHtml = $('<h4 class="co_quest_h"></h4>');

	$('.co_form').append(surveyHtml);
	questionHtml.html(j+1+'. '+question);
	surveyHtml.append(questionHtml);

	// Show answers
	if (answers) {
		for (var i=answers.length; i > 0; i--) {
			var answer = answers[answers.length-i],
					checkboxHtml = $('<div class="co_checkbox"><input id="co_switch_'+i+j+
													 '" type="radio" class="co_switch" name="co_switch_'+j+'"></div>'),
					checkHtml = $('<label for="co_switch_'+i+j+'" class="co_check"></label>');

			checkHtml.html(answer);
			checkboxHtml.append(checkHtml);
			surveyHtml.append(checkboxHtml);
		}
	}
	// Add textarea if Survey Question has alternative answer
	if (alternative === true) {
		var textHtml = $('<textarea class="co_text_answer" placeholder="Enter text"></textarea>');
		if (answers) {
			surveyHtml.append('<h5 class="co_other_h">Other</h5>');
			surveyHtml.append(textHtml.addClass('for_other'));
		} else {
			surveyHtml.append(textHtml);
		}
	}
}

// Submit Survey Answer
function submitSurveyAnswer() {
	var coName = $('#co_name').val().trim(),
			coEmail = $('#co_email').val().trim();

	// Not to send if the fields are empty
	if (coName === '' && coEmail === '') {
		$('#co_name').focus();
	} else if (coName === '') {
		$('#co_name').focus();
	} else if (coEmail === '') {
		$('#co_email').focus();
	} else {
		var answerArray = [];

		// Building array from answers
		$('.co_survey').each(function(i, elem) {
			var selectedString = $(elem).children('div.co_checkbox').children('input.co_switch:checked').next('label.co_check').text(),
					writtenString = $(elem).children('textarea.co_text_answer').val();

			answerString = (writtenString === undefined || '') ? selectedString : (selectedString === '') ? writtenString : selectedString;
			answerArray.push(answerString);
		});

		// Sends the information for create Survey Answer
		$('.co_main_h').fadeOut(1000);
		$('.co_survey').fadeOut(1000);
		$('#co_next').fadeOut(1000);
		$('#processLoader').fadeIn(1000);
		createSurveyAnswer(coName, coEmail, answerArray);

		// Close popup and show loader animation while sending information
		$('#co_submit').attr('data-dismiss', 'modal');
	}
}

// Create Survey Answer
function createSurveyAnswer(coName, coEmail, answerArray) {
	// Creating data to send parameters
	var newData = {
		type:      typeSDK,
		full_name: coName,
		email:     coEmail,
		answer:    answerArray
	};

	// Create recorde in "SurveyAnswer" class
	QB.data.create(ANSWERS_CLASS_NAME, newData, function(err, res){
		if (err) {
			console.log(err);
		} else {
			console.log(res);
			// Remove loading animation and show "Thank You!"
			$('#processLoader').delay(250).fadeOut(750);
			$('.co_finish').delay(2000).fadeIn(1500);
		}
	});
}
