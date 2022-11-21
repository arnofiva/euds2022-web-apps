import BasemapGallery from "https://js.arcgis.com/4.25/@arcgis/core/widgets/BasemapGallery.js";
import Search from "https://js.arcgis.com/4.25/@arcgis/core/widgets/Search.js";
import Expand from "https://js.arcgis.com/4.25/@arcgis/core/widgets/Expand.js";
import Track from "https://js.arcgis.com/4.25/@arcgis/core/widgets/Track.js";
import WebScene from "https://js.arcgis.com/4.25/@arcgis/core/WebScene.js";
import SceneView from "https://js.arcgis.com/4.25/@arcgis/core/views/SceneView.js";

import esriConfig from "https://js.arcgis.com/4.25/@arcgis/core/config.js";


esriConfig.apiKey = "AAPK172864bc9b83465ca62bdb1118af560fije2SBSBx1VgYwU9-7VHnV2P4vTYU03PpxRXnMZIbbkiU1CHdegeNRA8j8lsqpjC";


const webScene = new WebScene({
  portalItem: {
    id: "0b6dbaf6640540cfa83a3ba4cf97fb3f"
  }
});

const view = new SceneView({
  map: webScene,
  container: "viewDiv",
  qualityMode: "high"
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

view.ui.add(
  new Track({
    view,
    useHeadingEnabled: true
  }),
  "top-right"
);
