
var PageName = '销售管理';
var PageId = 'p0db28e236d964c09b96ec3db34c46fd9'
var PageUrl = '销售管理.html'
document.title = '销售管理';

if (top.location != self.location)
{
	if (parent.HandleMainFrameChanged) {
		parent.HandleMainFrameChanged();
	}
}

if (window.OnLoad) OnLoad();
