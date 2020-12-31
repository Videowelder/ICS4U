var handle = document.getElementsByClassName("title")
var win = document.getElementById("Main")
var pane = document.getElementById("Sub")

var x;
var y;

for (var h of handle) {
	h.addEventListener('mousedown', (event) => {
		if (win.style.maxWidth){
			var [X,Y] = getloc(event)
			x = X - win.offsetLeft
			y = Y - win.offsetTop
			document.addEventListener('mousemove', handleWindowMove)
		}
	});
	h.addEventListener('mouseup', () => {
		if (win.style.maxWidth){
			document.removeEventListener('mousemove', handleWindowMove)
			x = win.style.left
			y = win.style.top
		}
	});
}

function handleWindowMove(event) {
	var [X,Y] = getloc(event);
	win.style.top = (Y - y) + "px";
	win.style.left = (X - x) + "px";
}

function getloc(event){
	event = event || window.event;
	return [event.pageX < document.body.clientWidth ? event.pageX : document.body.clientWidth,event.pageY < document.body.clientHeight ? event.pageY : document.body.clientHeight];
}

function ToggleDisp(){
	if (!pane.style.display){
		win.style.paddingBottom = "0px";
		pane.style.display = "none";
		win.style.height = "unset";
	}else{
		win.style.paddingBottom = "4px";
		pane.style.display = win.style.height = null;
	}
}

function ToggleFls(){
	if (!win.style.maxWidth){
		win.style.maxWidth = "1000px";
		win.style.maxHeight = "480px";
		win.style.top = y;
		win.style.left = x;
	}else{
		win.style.maxWidth = win.style.maxHeight = null;
		win.style.top = win.style.left = "0px";
	}
}

function Close() {
	win.remove();
}