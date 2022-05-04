function compress(s) {
	//UTF8
	s = unescape(encodeURIComponent(s));
	var arr = [];
	for (var i = 0; i < s.length; i++)
		arr.push(s.charCodeAt(i));	
	var compressor = new Zopfli.RawDeflate(arr);
	var compressed = compressor.compress();
	return encode64_(compressed);
}

function setPreview() {
    let saltSyntax = document.getElementById('saltSyntax').value;
    let preview = document.getElementById('saltPreview');
    // alert(compress(saltSyntax, false));
    preview.setAttribute('src', 'http://www.plantuml.com/plantuml/png/' + compress(saltSyntax));

}