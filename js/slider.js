var temp;
// создать фунцию-класс, на вход sSelector
function Gallery(sSelector) {
		// console.log('Hello,wrold!');

	var g = this;
		g.gallery 		= $(sSelector);
		g.pictures		= g.gallery.find('.carousel-pic');
		g.items			= g.gallery.find('.item');
		g.arrow			= g.gallery.find('.carousel-control');
		// g.arrowNext		= g.gallery.find('.b-preview__arrow');

		g.current		= 0;
		g.max			= g.pictures.length;
		console.log("max", g.max);
		console.log(g.items);

	//отобразить большое фото с подписью
	 g.showImage = function() {
	 	var curreintItem = g.items[g.current];
	 	console.log("curreintItem = ", curreintItem);
	 	$(curreintItem).removeClass('active1');
	 	console.log("CurrentItem", curreintItem);	 	
	 	// $("div").removeClass("active");
	 	var iShift = $(this).data("slide");
	 	console.log("iShift = ", iShift);
	 	g.current += iShift;
	 	console.log("g.current = ", g.current);
	 	if (g.current >= g.max) 
	 		{g.current = 0} 
	 	else if (g.current < 0) 
	 		{g.current = g.max - 1}
	 	//вызываем метод display Для отображения большой картинки, на вход подаём
	 	//объект картинки, которую нужно отобразить; его 
	 	//считываем по номеру текущей картинки
	 	//pictures - список картинок, current - номер картинки, которую нужно отобразить
	 	//eq - метод jQuerry, который получает объект картинки для отображения среди списка 
	 	//картинок на основании порядкового номера картинки
	 	 // g.items[g.current]
	 	 g.display();

	 	// g.display(
	 	// 	g.gallery.find('.b-picture:eq('+g.current+')'));
	 }

	 //получение пути большого фото
	 g.display = function() {
	 	//var 
	 		// smallImage = oPicture.find('.b-picture__image')
	 		// ,bigImageSrc = smallImage.attr('src').replace('small_','')
	 		//;
	 	// console.log(bigImageSrc);
	 	// g.previewImage.attr('src', bigImageSrc);
	 	//подпись к фото
	 	// g.previewText.html(smallImage.attr('alt'));
	 	// console.log(g.items[g.current]);
	 	//g.items.removeClass('active1');

	 	console.log(g.items[g.current]);
	 	$(g.items[g.current]).addClass('active1')
	 	// g.items.addClass('active');
	 	// g.maxPlace.html(g.max);
	 	// g.currentPlace.html(g.current+1);
	 }

	//При щелчке по стрелке предыдущая
	g.arrow.click(g.showImage);
}