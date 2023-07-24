<template>
  <div>
    <GmapMap
        :zoom="14"    
        :center="center"
        style="width:100%;  height: 600px;"
      >
      <GmapMarker
        :key="index"
        v-for="(m, index) in locationMarkers"
        :position="m.position"
        :clickable="true"
        :icon="'https://developers.google.com/maps/documentation/javascript/examples/full/images/info-i_maps.png'"
        url
      ></GmapMarker>
    </GmapMap>
  </div>
   
</template>
<script src="https://maps.googleapis.com/maps/api/js?key=YOUR API KEY"></script>
<script>
var seoul = { lat: 37.5642135, lng: 127.0016985 };
export default {
  name: "AddGoogleMap",
  data() {
    return {
      center: seoul,
      locationMarkers: [
        {
          position: seoul
        }
      ],
      locPlaces: [],
      existingPlace: null
    };
  }, 
};
</script>

<style>
/* .gm-style img {
  background: #000;
} */
</style>