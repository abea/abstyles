(function (w) {
  var sw = document.body.clientWidth,
      sh = document.body.clientHeight;

  //Update dimensions on resize
  $(w).resize(function () {
    sw = document.body.clientWidth;
    sh = document.body.clientHeight;

		//updateAds();
  });
})(this);
