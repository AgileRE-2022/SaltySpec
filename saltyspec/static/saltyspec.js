let compress = (s) => {
	s = unescape(encodeURIComponent(s));
	var arr = [];
	for (var i = 0; i < s.length; i++)
		arr.push(s.charCodeAt(i));
	var compressor = new Zopfli.RawDeflate(arr);
	var compressed = compressor.compress();
	return encode64_(compressed);
}

let setPreview = () => {
	let saltSyntax = $('#saltSyntax').val();
	$('#saltPreview').attr('src', 'http://www.plantuml.com/plantuml/png/' + compress(saltSyntax))
}

let delay = (function () {
	let timer = 0;
	return function (callback, ms) {
		clearTimeout(timer);
		timer = setTimeout(callback, ms);
	};
})();

let setUseSpec = function () {
	let syntax = $('#saltSyntax').val();

	// Title
	let titleRegex = /title\s(.*)\n/g;
	let matchTitle = titleRegex.exec(syntax);
	if (matchTitle != null) {
		$('#useCaseName').html(matchTitle[1]);
	}

	// Procedure
	let procedureForm = /!procedure _form()([\S\s]*?)!endprocedure/g;
	let matchProcedure = procedureForm.exec(syntax);
	if (matchProcedure != null) {
		formString = matchProcedure[0]
		formString = formString.replace('!procedure _form()\n', "").replace('!endprocedure', "")
		alert(formString)
	}

	let procedureSuccess = /!procedure _success()([\S\s]*?)!endprocedure/g;
	let matchSuccess = procedureSuccess.exec(syntax);
	if (matchSuccess != null) {
		successString = matchSuccess[0]
		successString = successString.replace('!procedure _success()\n', "").replace('!endprocedure', "")
		alert(successString)
	}

	let procedureError = /!procedure _error()([\S\s]*?)!endprocedure/g;
	let matchError = procedureError.exec(syntax);
	if (matchError != null) {
		errorString = matchError[0]
		errorString = errorString.replace('!procedure _error()\n', "").replace('!endprocedure', "")
		alert(errorString)
	}
}

$(document).ready(() => {
	$('#actorSource').on('input', () => {
		$('#actor').html($('#actorSource').val());
	});
	$('#descriptionSource').on('input', () => {
		$('#description').html($('#descriptionSource').val());
	});
	$('#initialConditionSource').on('input', () => {
		$('#initialCondition').html($('#initialConditionSource').val());
	});
	$('#finalConditionSource').on('input', () => {
		$('#finalCondition').html($('#finalConditionSource').val());
	});
	$('#saltSyntax').on('keyup', () => {
		delay(function () {
			setPreview();
			setUseSpec();
		}, 1000);
	});
});