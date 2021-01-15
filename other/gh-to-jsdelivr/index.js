document.addEventListener("DOMContentLoaded", function () {
  var source = document.querySelector(".source");
  var output = document.querySelector(".output");

  source.addEventListener("input", function () {
    var origin = source.value;
    var k = origin.split(/\//gim);

    // The file path exists after the seventh '/'
    // e.g.
    //       12          3      4    5    6      7
    //       ↓↓          ↓      ↓    ↓    ↓      ↓
    // https://github.com/liuyib/demo/blob/master/other/gh-to-jsdelivr/index.js
    //                                           ╰─────────────┬──────────────╯
    //                                                     file path
    var path = [...k.slice(7)].join("/");
    var result = `https://cdn.jsdelivr.net/gh/${k[3]}/${k[4]}/${path}`;

    output.value = result;
  });
});
