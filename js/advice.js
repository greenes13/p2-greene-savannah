var adviceWrapper = document.querySelectorAll('#suggestion-wrapper p span');

var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      var apiResult = JSON.parse(this.responseText);
      console.log(apiResult)
// CODE
        var adviceName = document.createTextNode(apiResult.slip.advice);
        adviceWrapper[0].appendChild(adviceName);
  }
};
xmlhttp.open('GET', 'https://api.adviceslip.com/advice', true);
xmlhttp.send();
