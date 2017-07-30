class Map{
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
                console.log('gMap blocked client')
            });
        }else{
            console.log('gMap blocked client')
        }

        return this;
    }

    init(){
        window.initMap = () => {
            let mapElem = document.getElementById('map');
            if(mapElem){
                this.map = new google.maps.Map(mapElem, {
                    center: {lat: -34.397, lng: 150.644},
                    zoom: 10,
    				scrollwheel: false
                });
            }
            return this;
        }
        return this;
    }
}

let map = new Map();

export default map;
