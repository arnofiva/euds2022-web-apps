import GroupLayer from "https://js.arcgis.com/4.25/@arcgis/core/layers/GroupLayer.js";
import BasemapGallery from "https://js.arcgis.com/4.25/@arcgis/core/widgets/BasemapGallery.js";
import Search from "https://js.arcgis.com/4.25/@arcgis/core/widgets/Search.js";
import Expand from "https://js.arcgis.com/4.25/@arcgis/core/widgets/Expand.js";
import WebMap from "https://js.arcgis.com/4.25/@arcgis/core/WebMap.js";
import MapView from "https://js.arcgis.com/4.25/@arcgis/core/views/MapView.js";

const webmap = new WebMap({
  portalItem: {
    id: "5b208b2bc4dd487c8e76c69db817f3a3"
  }
});

const view = new MapView({
  map: webmap,
  container: "viewDiv"
});

view.ui.add(
  new Expand({
    content: new Search({ view }),
    group: "tools"
  }),
  "top-right"
);

view.ui.add(
  new Expand({
    content: new BasemapGallery({ view }),
    group: "tools"
  }),
  "top-right"
);