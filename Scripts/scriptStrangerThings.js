var bannerEleven = window.document.getElementById('elevenImage')
var bannerWill = window.document.getElementById('willImage')
var bannerDustin = window.document.getElementById('dustinImage')
var bannerLucas = window.document.getElementById('lucasImage')
var bannerMake = window.document.getElementById('mikeImage')

function open(){
	this.style.width = "650px"
	this.style.borderRadius = "20px"
}

function close(){
	this.style.width = "70px"
	this.style.borderRadius = "60px"
}

function openClose(){
	if(this.offsetWidth === 70){
		this.style.width = "650px"
		this.style.borderRadius = "20px"
	}else{
		this.style.width = "70px"
		this.style.borderRadius = "60px"
	}
}

bannerEleven.addEventListener("mouseenter" , open)
bannerEleven.addEventListener("mouseout" , close)
bannerEleven.addEventListener("click" , openClose)

bannerWill.addEventListener("mouseenter" , open)
bannerWill.addEventListener("mouseout" , close)
bannerWill.addEventListener("click" , openClose)

bannerDustin.addEventListener("mouseenter" , open)
bannerDustin.addEventListener("mouseout" , close)
bannerDustin.addEventListener("click" , openClose)

bannerLucas.addEventListener("mouseenter" , open)
bannerLucas.addEventListener("mouseout" , close)
bannerLucas.addEventListener("click" , openClose)

bannerMake.addEventListener("mouseenter" , open)
bannerMake.addEventListener("mouseout" , close)
bannerMake.addEventListener("click" , openClose)

