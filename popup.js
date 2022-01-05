// 新标签打开网页
$('#open_url_new_tab').click(() => {
	chrome.tabs.getSelected(null, function(tab)
	{
		chrome.tabs.create({url: 'https://www.8090.la/8090/?url=' + tab.url});
	});
});


