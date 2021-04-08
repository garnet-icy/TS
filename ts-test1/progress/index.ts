let title:string = 'show progress'
let $contentText:any = document.getElementById('progressNum')
let $contentBg:any = document.getElementById('content');
$contentText.innerHTML = 0

function setProgress() {
  $contentBg.setAttribute('style',`width:${$contentText.innerHTML}%`);
  $contentText.innerHTML=Number($contentText.innerHTML)+0.1;
}
// console.log($contentText.getAttribute())
setInterval(function () {
  setProgress();
}, 1000);

class ProgressBar {
  constructor(progress:number) {
    this.progress = progress
  }
  stop():void{

  }
}