// Initialize and add the map
let map;

async function initMap() {
  // CENTERED ON D.C.
  const position = { lat: 40.6993, lng: -99.0817};
  // Request needed libraries.
  //@ts-ignore
  const { Map } = await google.maps.importLibrary("maps");
  const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");

  // Map Initial Zoom Level
  map = new Map(document.getElementById("map"), {
    zoom: 4,
    center: position,
    mapId: "DEMO_MAP_ID",
  });

  // Map Markers
  
  //Alabama
  const MontgomeryAL = new AdvancedMarkerElement({
    map,
    position: { lat: 32.3792, lng: -86.3077  },
  });

  //Arkansas
  const LittleRockAR = new AdvancedMarkerElement({
    map,
    position: { lat: 34.7445, lng: -92.2880  },
  });

  //Florida

  const JacksonvilleFL = new AdvancedMarkerElement({
    map,
    position: { lat: 30.3322, lng: -81.6557  },
  });

  const MiamiFL = new AdvancedMarkerElement({
    map,
    position: { lat: 25.7617, lng: -80.1918  },
  });

  const TallahasseeFL = new AdvancedMarkerElement({
    map,
    position: { lat: 30.4382, lng: -84.2806  },
  });

  //Georgia
  const AtlantaGA = new AdvancedMarkerElement({
    map,
    position: { lat: 33.7501, lng: -84.3885  },
  });

  const SavannahGA = new AdvancedMarkerElement({
    map,
    position: { lat: 32.0809, lng: -81.0912  },
  });
  
  //Illinois
  const ChicagoIL = new AdvancedMarkerElement({
    map,
    position: { lat: 41.8781, lng: -87.6298  },
  });

  const SpringfieldIL = new AdvancedMarkerElement({
    map,
    position: { lat: 39.7817, lng: -89.6501  },
  });

  //Indiana
  const IndianapolisIN = new AdvancedMarkerElement({
    map,
    position: { lat: 39.7691, lng: -86.1580  },
  });

  //Iowa
  const DesMoinesIA = new AdvancedMarkerElement({
    map,
    position: { lat: 41.5868, lng: -93.6250  },
  });

  // Kansas
  const TopekaKS = new AdvancedMarkerElement({
    map,
    position: { lat: 39.0473, lng: -95.6752  },
  });
  
  // Kentucky
  const LexingtonKY = new AdvancedMarkerElement({
    map,
    position: { lat: 38.0389, lng: -84.5153  },
  });

  const LouisvilleKY = new AdvancedMarkerElement({
    map,
    position: { lat: 38.2469, lng: -85.7664  },
  });

  // Louisiana
  const BatonRougeLA = new AdvancedMarkerElement({
    map,
    position: { lat: 30.4515, lng: -91.1871  },
  });

  const NewOrleansLA = new AdvancedMarkerElement({
    map,
    position: { lat: 29.9509, lng: -90.0758  },
  });

  // Maine
  const BarHarborME = new AdvancedMarkerElement({
    map,
    position: { lat: 44.3876, lng: -68.2043  },
  });

  // Massachusetts
  const BostonMA = new AdvancedMarkerElement({
    map,
    position: { lat: 42.3601, lng: -71.0589  },
  });

  const SpringfieldMA = new AdvancedMarkerElement({
    map,
    position: { lat: 42.3601, lng: -71.0589  },
  });

  // Michigan
  const DetroitMI = new AdvancedMarkerElement({
    map,
    position: { lat: 42.3314, lng: -83.0458  },
  });

  const LansingMI = new AdvancedMarkerElement({
    map,
    position: { lat: 42.7325, lng: -84.5555  },
  });

  // Minnesota
  const DuluthMN = new AdvancedMarkerElement({
    map,
    position: { lat: 46.7867, lng: -92.1005  },
  });

  const MinneapolisMN = new AdvancedMarkerElement({
    map,
    position: { lat: 44.9778, lng: -93.2650  },
  });
  
  // Mississippi
  const JacksonMS = new AdvancedMarkerElement({
    map,
    position: { lat: 32.2981, lng: -90.1806  },
  });

  //Missouri
  const JeffersonCityMO = new AdvancedMarkerElement({
    map,
    position: { lat: 38.5767, lng: -92.1735  },
  });

  const KansasCityMO = new AdvancedMarkerElement({
    map,
    position: { lat: 39.0997, lng: -94.5786  },
  });

  const StLouisMO = new AdvancedMarkerElement({
    map,
    position: { lat: 38.6270, lng: -90.1994  },
  });

  // Nebraska
  const LincolnNE = new AdvancedMarkerElement({
    map,
    position: { lat: 40.8137, lng: -96.7026  },
  });
  
  const OmahaNE = new AdvancedMarkerElement({
    map,
    position: { lat: 41.2565, lng: -95.9345  },
  });

  // New Jersey
  const NewarkNJ = new AdvancedMarkerElement({
    map,
    position: { lat: 40.7356, lng: -74.1722  },
  });

  // New York
  const AlbanyNY = new AdvancedMarkerElement({
    map,
    position: { lat: 42.6526, lng: -73.7562  },
  });
  
  const NewYorkNY = new AdvancedMarkerElement({
    map,
    position: { lat: 40.7128, lng: -74.0060  },
  });

  //North Carolina
  const CharlotteNC = new AdvancedMarkerElement({
    map,
    position: { lat: 35.2271, lng: -80.8431  },
  });

  const RaleighNC = new AdvancedMarkerElement({
    map,
    position: { lat: 35.7796, lng: -78.6382  },
  });

  //North Dakota
  const BismarckND = new AdvancedMarkerElement({
    map,
    position: { lat: 46.8042, lng: -100.7878  },
  });

  //Ohio
  const CincinnatiOH = new AdvancedMarkerElement({
    map,
    position: { lat: 39.1031, lng: -84.5120  },
  });

  const ClevelandOH = new AdvancedMarkerElement({
    map,
    position: { lat: 41.4993, lng: -81.6944  },
  });

  const ColumbusOH = new AdvancedMarkerElement({
    map,
    position: { lat: 39.9612, lng: -82.9988  },
  });

  //Oklahoma
  const OklahomaCityOK = new AdvancedMarkerElement({
    map,
    position: { lat: 35.4676, lng: -97.5164  },
  });

  const TulsaOK = new AdvancedMarkerElement({
    map,
    position: { lat: 36.1540, lng: -95.9928  },
  });

  //Pennsylvania
  const HarrisburgPA = new AdvancedMarkerElement({
    map,
    position: { lat: 40.2732, lng: -76.8867  },
  });

  const PhiladelphiaPA = new AdvancedMarkerElement({
    map,
    position: { lat: 39.9526, lng: -75.1652  },
  });
  
  const PittsburghPA = new AdvancedMarkerElement({
    map,
    position: { lat: 40.4406, lng: -79.9959  },
  });

  //South Carolina
  const ColumbiaSC = new AdvancedMarkerElement({
    map,
    position: { lat: 34.0008, lng: -81.0351  },
  });

  //Tennessee
  const KnoxvilleTN = new AdvancedMarkerElement({
    map,
    position: { lat: 35.9606, lng: -83.9207  },
  });

  const MemphisTN = new AdvancedMarkerElement({
    map,
    position: { lat: 35.1495, lng: -90.0490  },
  });

  const NashvilleTN = new AdvancedMarkerElement({
    map,
    position: { lat: 36.1627, lng: -86.7816  },
  });

  //Vermont
  const MontpelierVT = new AdvancedMarkerElement({
    map,
    position: { lat: 44.2601, lng: -72.5754  },
  });
  
  //Virginia
  const RichmondVA = new AdvancedMarkerElement({
    map,
    position: { lat: 37.5407, lng: -77.4360  },
  });

  //Washington DC
  const WashingtonDC = new AdvancedMarkerElement({
    map,
    position: { lat: 38.9072, lng: -77.0369  },
  });

  //Wisconsin
  const MilwaukeeWI = new AdvancedMarkerElement({
    map,
    position: { lat: 43.0389, lng: -87.9065  },
  });

  //West Virginia
  const CharlestonWV = new AdvancedMarkerElement({
    map,
    position: { lat: 38.3498, lng: -81.6326  },
  });
  
  const MorgantownWV = new AdvancedMarkerElement({
    map,
    position: { lat: 39.6295, lng: -79.9559  },
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