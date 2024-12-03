// Initialize and add the map
let map;

async function initMap() {
  // CENTERED ON D.C.
  const position = { lat: 38.889805, lng: -77.009056 };
  // Request needed libraries.
  //@ts-ignore
  const { Map } = await google.maps.importLibrary("maps");
  const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");

  // The map, centered at Uluru
  map = new Map(document.getElementById("map"), {
    zoom: 6,
    center: position,
    mapId: "DEMO_MAP_ID",
  });

  // The marker, positioned at Uluru
  const marker = new AdvancedMarkerElement({
    map: map,
    position: position,
    title: "Uluru",
  });
}

initMap();

// A marker with a with a URL pointing to a PNG.
const beachFlagImg = document.createElement("img");

beachFlagImg.src =
  "https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png";

const beachFlagMarkerView = new AdvancedMarkerElement({
  map,
  position: { lat: 37.434, lng: -122.082 },
  content: beachFlagImg,
  title: "A marker using a custom PNG Image",
});