let eidNo = document.getElementById('idNo');
let eidYes = document.getElementById('idYes');
let pbh = function pbClickHandler(){
  document.getElementById('result').innerText = `You\`ve said ${this.getAttribute('caption')}`;
};
eidNo.addEventListener("click", pbh);
eidYes.addEventListener("click", pbh);


