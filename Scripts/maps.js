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

  //Arizona
  const FlagstaffAZ = new AdvancedMarkerElement({
    map,
    position: { lat: 35.1983, lng: -111.6513  },
  });
  
  const PhoenixAZ = new AdvancedMarkerElement({
    map,
    position: { lat: 33.4484, lng: -112.0740  },
  });

  const TusconAZ = new AdvancedMarkerElement({
    map,
    position: { lat: 32.2540, lng: -110.9742  },
  });

  //Arkansas
  const LittleRockAR = new AdvancedMarkerElement({
    map,
    position: { lat: 34.7445, lng: -92.2880  },
  });

  //California
  const BakersfieldCA = new AdvancedMarkerElement({
    map,
    position: { lat: 35.3733, lng: -119.0187  },
  });

  const EurekaCA = new AdvancedMarkerElement({
    map,
    position: { lat: 40.8021, lng: -124.1637  },
  });

  const FremontCA = new AdvancedMarkerElement({
    map,
    position: { lat: 37.5485, lng: -121.9886  },
  });

  const FresnoCA = new AdvancedMarkerElement({
    map,
    position: { lat: 36.7378, lng: -119.7871  },
  });

  const LosAngelesCA = new AdvancedMarkerElement({
    map,
    position: { lat: 34.0549, lng: -118.2426  },
  });

  const SacramentoCA = new AdvancedMarkerElement({
    map,
    position: { lat: 38.5781, lng: -121.4944  },
  });

  const SanDiegoCA = new AdvancedMarkerElement({
    map,
    position: { lat: 32.7157, lng: -117.1611  },
  });

  const SanFranciscoCA = new AdvancedMarkerElement({
    map,
    position: { lat: 37.7749, lng: -122.4194  },
  });

  const SanJoseCA = new AdvancedMarkerElement({
    map,
    position: { lat: 37.3387, lng: -121.8853  },
  });

  const SantaBarbaraCA = new AdvancedMarkerElement({
    map,
    position: { lat: 34.4208, lng: -119.6982  },
  });

  const StocktonCA = new AdvancedMarkerElement({
    map,
    position: { lat: 37.9577, lng: -121.2908  },
  });

  //Colorado
  const BoulderCO = new AdvancedMarkerElement({
    map,
    position: { lat: 40.0150, lng: -105.2705  },
  });

  const DenverCO = new AdvancedMarkerElement({
    map,
    position: { lat: 39.7392, lng: -104.9903  },
  });

  const GrandJunctionCO = new AdvancedMarkerElement({
    map,
    position: { lat: 39.0639, lng: -108.5506  },
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

  //Idaho
  const BoiseID = new AdvancedMarkerElement({
    map,
    position: { lat: 43.6150, lng: -116.2023  },
  });

  const PocatelloID = new AdvancedMarkerElement({
    map,
    position: { lat: 42.8621, lng: -112.4506  },
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

  // Montana
  const BozemanMT = new AdvancedMarkerElement({
    map,
    position: { lat: 45.6793, lng: -111.0373  },
  });

  const MissoulaMT = new AdvancedMarkerElement({
    map,
    position: { lat: 46.8721, lng: -113.9940  },
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

  // Nevada
  const LasVegasNV = new AdvancedMarkerElement({
    map,
    position: { lat: 36.1716, lng: -115.1391  },
  });

  const RenoNV = new AdvancedMarkerElement({
    map,
    position: { lat: 39.5299, lng: -119.8143  },
  });

  // New Jersey
  const NewarkNJ = new AdvancedMarkerElement({
    map,
    position: { lat: 40.7356, lng: -74.1722  },
  });

  // New Mexico
  const AlbuquerqueNM = new AdvancedMarkerElement({
    map,
    position: { lat: 35.0844, lng: -106.6504  },
  });
  
  const SantaFeNM = new AdvancedMarkerElement({
    map,
    position: { lat: 35.6870, lng: -105.9378  },
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

  //Oregon
  const EugeneOR = new AdvancedMarkerElement({
    map,
    position: { lat: 44.0521, lng: -123.0868  },
  });
  
  const PortlandOR = new AdvancedMarkerElement({
    map,
    position: { lat: 45.5152, lng: -122.6784  },
  });

  const SalemOR = new AdvancedMarkerElement({
    map,
    position: { lat: 44.9429, lng: -123.0351  },
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

  //South Dakota
  const PierreSD = new AdvancedMarkerElement({
    map,
    position: { lat: 44.3668, lng: -100.3538  },
  });

  const RapidCitySD = new AdvancedMarkerElement({
    map,
    position: { lat: 44.0805, lng: -103.2310  },
  });
  
  const SiouxFallsSD = new AdvancedMarkerElement({
    map,
    position: { lat: 43.5460, lng: -96.7313  },
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

  //Texas
  const AustinTX = new AdvancedMarkerElement({
    map,
    position: { lat: 30.2672, lng: -97.7431  },
  });

  const CorpusChristiTX = new AdvancedMarkerElement({
    map,
    position: { lat: 27.8006, lng: -97.3964  },
  });

  const DallasTX = new AdvancedMarkerElement({
    map,
    position: { lat: 32.7767, lng: -96.7970  },
  });

  const ElPasoTX = new AdvancedMarkerElement({
    map,
    position: { lat: 31.7619, lng: -106.4850  },
  });

  const FortWorthTX = new AdvancedMarkerElement({
    map,
    position: { lat: 32.7555, lng: -97.3308  },
  });

  const GalvestonTX = new AdvancedMarkerElement({
    map,
    position: { lat: 29.3013, lng: -94.7977  },
  });

  const HoustonTX = new AdvancedMarkerElement({
    map,
    position: { lat: 29.7601, lng: -95.3701  },
  });

  const LubbockTX = new AdvancedMarkerElement({
    map,
    position: { lat: 33.5778, lng: -101.8553  },
  });

  const SanAntonioTX = new AdvancedMarkerElement({
    map,
    position: { lat: 29.4252, lng: -98.4946  },
  });

  //Utah
  const SaltLakeCiyUT = new AdvancedMarkerElement({
    map,
    position: { lat: 40.7608, lng: -111.8910  },
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

  //Washington
  const SeattleWA = new AdvancedMarkerElement({
    map,
    position: { lat: 47.6061, lng: -122.3328  },
  });

  const SpokaneWA = new AdvancedMarkerElement({
    map,
    position: { lat: 47.6580, lng: -117.4235  },
  });

  const TacomaWA = new AdvancedMarkerElement({
    map,
    position: { lat: 47.2529, lng: -122.4443 },
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

  //Wyoming
  const CheyenneWY = new AdvancedMarkerElement({
    map,
    position: { lat: 41.1400, lng: -104.8202  },
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