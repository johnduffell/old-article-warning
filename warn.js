
var articleBody = document.getElementsByClassName('tonal__standfirst')[0];

var headline = document.getElementsByClassName('js-score')[0];

var dateTime = document.getElementsByClassName('js-wpd')[0];
var millis = parseInt(dateTime.getAttribute('data-timestamp').trim())

var date = new Date(millis);

var ONE_MONTH = 28 * 24 * 60 * 60 * 1000;
var tooOld = millis < (new Date().getTime() - ONE_MONTH);

var monthNames = [ "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December" ];

var month = monthNames[date.getMonth()];


var keywordList = document.getElementsByClassName('keyword-list')[0];
// var keyword = keywordList.getElementsByClassName('button--tag')[0];


var warning=document.createElement("div");
warning.style.backgroundColor="rgb(255, 220, 155)";
warning.style.position="relative";
warning.style.border='0.2em dotted orange';
warning.style.padding='0.5em';
warning.style.margin='1em 4em';

var fromTheText=document.createTextNode("From theguardian.com archives...");
var fromThe = document.createElement("div");
fromThe.appendChild(fromTheText);

fromThe.style['font-size'] = 'smaller';

var whenText=document.createTextNode(month + ' ' + date.getFullYear());
var when = document.createElement("div");
when.appendChild(whenText);

when.style['font-weight'] = 'bold';
when.style['font-size'] = 'xx-large';
when.style.padding = '0em 3.5em';


// var latestText=document.createTextNode("For the latest news, try these:");
// var latest = document.createElement("div");
// latest.appendChild(latestText);
// 
// var more = document.createElement("div");
// more.className = 'submeta';
// more.appendChild(keywordList);


var imgURL = chrome.extension.getURL("delete45.png");
var calendar = document.createElement("img");
calendar.src = imgURL;
calendar.style.width = '64px';
calendar.style.height = '64px';
calendar.style.float = 'left';
calendar.style.margin = '0em 1em';


warning.appendChild(calendar);
warning.appendChild(fromThe);
warning.appendChild(when);
// warning.appendChild(latest);
// warning.appendChild(more);


if (tooOld) {
headline.style['padding-bottom'] = '0rem';

articleBody.insertBefore(warning, articleBody.firstChild);
}
