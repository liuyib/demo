window.onload = function() {
  var name = document.querySelector("#gh-name");
  var repo = document.querySelector("#gh-repo");
  var bran = document.querySelector("#gh-bran");
  var path = document.querySelector("#gh-path");
  var result = document.querySelector("#result");

  var n = "";
  var r = "";
  var b = "";
  var p = "";

  name.oninput = function() {
    n = this.value;
  };
  repo.oninput = function() {
    r = this.value;
  };
  bran.oninput = function() {
    b = this.value;
  };
  path.oninput = function() {
    p = this.value;
  };
  document.oninput = function() {
    var str = `https://cdn.jsdelivr.net/gh/${n}/${r}@${b}${p}`;
    result.value = str;
  };
};
