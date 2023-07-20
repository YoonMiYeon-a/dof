<template>
  <div>
    <gmap-map
        :zoom="14"    
        :center="center"
        style="width:100%;  height: 400px;"
      >
      <gmap-marker
        :key="index"
        v-for="(m, index) in markers"
        :position="m.position"
        :clickable="true"
        :draggable="true"
        @click="center=m.position"
      />
    </gmap-map>
    <GmapMap
      :center="{lat:10, lng:10}"
      :zoom="7"
      map-type-id="terrain"
      style="width: 500px; height: 300px"
    >
      <GmapMarker
        :key="index"
        v-for="(m, index) in markers"
        :position="m.position"
        :clickable="true"
        :draggable="true"
        @click="center=m.position"
      />
  </GmapMap>
  </div>
   
</template>
<script src="https://maps.googleapis.com/maps/api/js?key=YOUR API KEY"></script>
<script>
export default {
  name: "AddGoogleMap",
  data() {
    return {
      center: { lat: 37.5642135, lng: 127.0016985 },
      locationMarkers: [],
      locPlaces: [],
      existingPlace: null
    };
  }, 
};
</script>

<style>

</style>