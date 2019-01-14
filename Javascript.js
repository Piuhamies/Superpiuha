	var img = document.getElementById('cmd_line');

var interval = window.setInterval(function() {
    if(img.style.visibility == 'hidden'){
        img.style.visibility = 'visible';
    }else{
        img.style.visibility = 'hidden';
    }
	}, 1000);
	var message = 0;
	var cars = [Moi mit&auml kuuluu, T&aumllle sivulle pit&aumls varmaan laittaa jotain j&aumlrkev&auml&auml, En m&auml keksi n&aumlit&auml enemp&auml&auml, Minecraft viittaukset, Mikkisofta, Css3, Html5, Arvatkaa kauan t&aumln sivun tekemiseen meni, T&auml&auml sivu tarvii oikeesti lis&auml&auml interaktiivisuutta];
	message = Math.floor((Math.random()  9));
	var x = document.getElementById(teksti)
	x.innerHTML = cars[message];