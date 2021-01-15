window.onload = function () {
  var oWrapper = document.getElementById('imgs-wrapper');
  var aImgs = oWrapper.getElementsByTagName('img');

  function waterFall() {
    var nGap = 10;                                              // 图片间隙
    var nImgWidth = aImgs[0].offsetWidth;                       // 图片宽度
    var nClientWidth = getClient().width;                       // 可视区宽度
    var nColumns = parseInt(nClientWidth / (nImgWidth + nGap)); // 列数
    var aImgHeights = [];                     // 储存每列图片的总高度
    
    for (var i = 0; i < aImgs.length; i++) {
      var nImgHeight = aImgs[i].offsetHeight; // 当前图片的高度

      if (i < nColumns) {                     // 第一行图片
        aImgs[i].style.top = 0;
        aImgs[i].style.left = (nImgWidth + nGap) * i + 'px';
        aImgHeights.push(nImgHeight);
      } else {
        var nMinHeight = getMinNum(aImgHeights);         // 获取数组中最小高度
        var nMinIndex = aImgHeights.indexOf(nMinHeight); // 最小高度的索引
        var nImgLeft = aImgs[nMinIndex].offsetLeft;
        var nImgTop = aImgHeights[nMinIndex] + nGap;

        startMove(aImgs[i], {
          left: nImgLeft,
          top: nImgTop
        });

        // 添加新的图片后，更新数组中的最小高度
        aImgHeights[nMinIndex] = nMinHeight + nGap + nImgHeight;
      }
    }
  }

  // 初始化
  waterFall();

  // 进行防抖处理
  window.addEventListener('resize', debounce(waterFall, 300));

  // 模拟获取到的 Ajax 数据
  var newImgs = [
    './assets/1.jpg',
    './assets/2.jpg',
    './assets/3.jpg',
    './assets/4.jpg',
    './assets/5.jpg',
    './assets/6.jpg',
    './assets/7.jpg',
    './assets/8.jpg',
    './assets/9.jpg',
    './assets/10.jpg',
    './assets/11.jpg',
    './assets/12.jpg',
    './assets/13.jpg',
    './assets/14.jpg',
    './assets/15.jpg',
    './assets/16.jpg',
    './assets/17.jpg',
    './assets/18.jpg',
    './assets/19.jpg',
    './assets/20.jpg'
  ];
  var bFlag = false;

  // 懒加载
  window.onscroll = function() {
    if (bFlag) { return; }
    
    if (getClient().height + getScrollTop() >= aImgs[aImgs.length - 1].offsetTop) {
      bFlag = true;

      newImgs.forEach(function(item) {
        var oImg = document.createElement('img');
        oImg.src = item;
        oImg.alt = "new_img";
        oWrapper.appendChild(oImg);
      });
    }
    
    // 延迟加载，否则图片没加载出来时，获取不到图片的高度
    setTimeout(function() {
      waterFall();
    }, 1000);
  };
};