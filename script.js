// with fetch
fetch(`https://api.allorigins.win/get?url=${encodeURIComponent('vscode.dev')}`)
.then(response => {
	if (response.ok) return response.json()
	throw new Error('Network response was not ok.')
})
.then(data => console.log(data.contents));

// with JQuery
$.getJSON('http://api.allorigins.win/get?url=vscode.dev&callback=?', function (data) {
	$('#output').html(data.contents);
});