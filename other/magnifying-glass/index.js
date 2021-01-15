window.onload = function () {
  var smallImg = document.getElementById("small_img");
  var largeImg = document.getElementById("large_img");
  var magnifyingGlass = document.getElementById("magnifying_glass");
  var smallImgWrapper = document.getElementById("small_img_wrapper");

  smallImgWrapper.onmouseover = function () {
    largeImg.style.display = "block";
    magnifyingGlass.style.display = "block";
  };
  smallImgWrapper.onmouseout = function () {
    largeImg.style.display = "none";
    magnifyingGlass.style.display = "none";
  };

  smallImgWrapper.onmousemove = function (ev) {
    var _event = ev || window.event;

    // 放大镜的移动范围
    var GLASS_MOVE_LEFT = 0;
    var GLASS_MOVE_TOP = 0;
    var GLASS_MOVE_RIGHT = 100;
    var GLASS_MOVE_BOTTOM = 100;

    // 放大的比例
    var oScaleSize = largeImg.offsetWidth / smallImg.offsetWidth;

    // 获取鼠标坐标
    var oGlassLeft = _event.clientX - smallImgWrapper.offsetLeft - 50;
    var oGlassTop = _event.clientY - smallImgWrapper.offsetTop - 50;

    // 限制放大镜移动
    if (oGlassLeft <= GLASS_MOVE_LEFT) {
      oGlassLeft = GLASS_MOVE_LEFT;
    } else if (oGlassLeft >= GLASS_MOVE_RIGHT) {
      oGlassLeft = GLASS_MOVE_RIGHT;
    }

    if (oGlassTop <= GLASS_MOVE_TOP) {
      oGlassTop = GLASS_MOVE_TOP;
    } else if (oGlassTop >= GLASS_MOVE_BOTTOM) {
      oGlassTop = GLASS_MOVE_BOTTOM;
    }

    // 大图片的坐标（由于前面限制了放大镜的移动，所以这里大图片移动时相应的受到限制）
    var oBigImgLeft = -oGlassLeft * oScaleSize;
    var oBigImgTop = -oGlassTop * oScaleSize;

    // 放大镜移动
    magnifyingGlass.style.left = oGlassLeft + "px";
    magnifyingGlass.style.top = oGlassTop + "px";

    // 大图片移动
    largeImg.style.left = oBigImgLeft + "px";
    largeImg.style.top = oBigImgTop + "px";
  };
};
