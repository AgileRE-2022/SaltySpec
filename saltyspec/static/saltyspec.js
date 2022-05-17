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
	let saltSyntax = document.getElementById('saltSyntax').value;
	let preview = document.getElementById('saltPreview');
	preview.setAttribute('src', 'http://www.plantuml.com/plantuml/png/' + compress(saltSyntax));
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
	$('#saltSyntax').on('input', () => {
		setPreview();
	});
});