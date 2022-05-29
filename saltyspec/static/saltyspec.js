var resultProcedure = [];

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
		// clearTimeout(timer);
		timer = setTimeout(callback, ms);
	};
})();

function handleProcedure(procedure) {
	resultProcedure = [];
	let lines = procedure.split('\n');
	for (let i = 0; i < lines.length; i++) {
		if (lines[i]) {
			if (lines[i].includes(':') && lines[i].trim().slice(-1) == ':' && lines[i + 1].includes('"')) {
				let line = lines[i].replace(':', '').trim();
				resultProcedure.push("Mengisi input " + line);
				i++;
			} else if (lines[i].includes(':') && lines[i].trim().slice(-1) == ':' && (lines[i + 1].includes('[') || lines[i + 2].includes('['))) {
				let line = lines[i].replace(':', '').trim();
				resultProcedure.push("Memilih value pada checkbox " + line);
				i++;
			} else if (lines[i].includes(':') && lines[i].trim().slice(-1) == ':' && (lines[i + 1].includes('(') || lines[i + 2].includes('('))) {
				let line = lines[i].replace(':', '').trim();
				resultProcedure.push("Memilih value pada radiobutton " + line);
				i++;
			} else if (lines[i].includes(':') && lines[i].trim().slice(-1) == ':' && (lines[i + 1].includes('^') || lines[i + 2].includes('^'))) {
				let line = lines[i].replace(':', '').trim();
				resultProcedure.push("Memilih value pada dropdown " + line);
				i++;
			} else if (lines[i].includes('[') && lines[i].trim().slice(-1) == ']') {
				let line = lines[i].replace('[', '').replace(']', '').trim();
				resultProcedure.push("Menekan tombol " + line);
			}
		}
	}
}

function handleResult(resultString, status) {
	let procedure = [...resultProcedure];
	let success = resultString.split('\n').filter((line) => {
		return line.trim().length > 0
	});
	let successMsg = []
	let format = /[`@#$%^&*()_+\-=\[\]{};:"\\|<>\/?~]/;
	success.forEach(element => {
		if (!format.test(element)) {
			successMsg.push(element)
		}
	});
	let successString = successMsg.join(' ')
	procedure.push("Muncul pesan " + successString)
	if (status) {
		$('#mainScenario').empty();
		procedure.forEach((line, idx) => {
			$('#mainScenario').append(`${idx + 1}. ${line} <br>`)
		})
	} else {
		$('#alternativeScenario').empty();
		procedure.forEach((line, idx) => {
			$('#alternativeScenario').append(`${idx + 1}. ${line} <br>`)
		})
	}
}


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
		handleProcedure(formString)
	}

	// Success
	let procedureSuccess = /!procedure _success()([\S\s]*?)!endprocedure/g;
	let matchSuccess = procedureSuccess.exec(syntax);
	if (matchSuccess != null) {
		successString = matchSuccess[0]
		successString = successString.replace('!procedure _success()\n', "").replace('!endprocedure', "")
		handleResult(successString, true)
	}

	// Fail
	let procedureError = /!procedure _error()([\S\s]*?)!endprocedure/g;
	let matchError = procedureError.exec(syntax);
	if (matchError != null) {
		errorString = matchError[0]
		errorString = errorString.replace('!procedure _error()\n', "").replace('!endprocedure', "")
		handleResult(errorString, false)
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