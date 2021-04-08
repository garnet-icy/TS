var title = 'show progress';
var $contentText = document.getElementById('progressNum');
var $contentBg = document.getElementById('content');
$contentText.innerHTML = 0;
function setProgress() {
    $contentBg.setAttribute('style', "width:" + $contentText.innerHTML + "%");
    $contentText.innerHTML = Number($contentText.innerHTML) + 0.1;
}
// console.log($contentText.getAttribute())
setInterval(function () {
    setProgress();
}, 1000);
