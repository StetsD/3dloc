export default class Map{
	constructor(){

    }

    geolocation(){
        if(navigator.geolocation){
            navigator.geolocation.getCurrentPosition(position=>{
                var pos = {
                    lat: position.coords.latitude,
                    lng: position.coords.longitude
                };
                this.map.setCenter(pos);
            }, ()=>{
                console.log('blocked client')
            });
        }else{
            console.log('blocked client')
        }

        return this;
    }

    init(){
        window.initMap = () => {
            this.map = new google.maps.Map(document.getElementById('map'), {
                center: {lat: -34.397, lng: 150.644},
                zoom: 10,
				scrollwheel: false
            });
        }
        return this;
    }
}
