var MapsApi = 'AIzaSyAIKRtRPp6NYT7x8oJ0wf53GwM4c47LYwA';

var map;
function initMap() {
    var location ={lat: 51.1783629, lng: -115.5707694};
   var map = new google.maps.Map(document.getElementById('banff-map'), {
        center: {lat: 51.1783629, lng: -115.5707694},
        zoom: 9,
        scrollwheel: false



    });
    var marker = new google.maps.Marker({
        position: location ,
        map: map,
        title: 'Banff,AB'
    });

    

    var info ='Rocky Mountain peaks, turquoise glacial lakes, a picture-perfect mountain town and village,'
        info +='abundant wildlife and scenic drives come together in Banff National Park - Canada’s first national park'
        info += 'and the flagship of the nation’s park system. Over three million visitors a year make the pilgrimage to the park for a variety of activities including hiking,' 
        info += 'biking, skiing and camping in some of the world’s most breathtaking mountain scenery.'
    
    var infowindow = new google.maps.InfoWindow({
        content: info
    });

    marker.addListener('click', function() {
        infowindow.open(map, marker);
    });

}        