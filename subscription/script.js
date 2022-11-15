import BasemapGallery from "https://js.arcgis.com/4.25/@arcgis/core/widgets/BasemapGallery.js";
import Search from "https://js.arcgis.com/4.25/@arcgis/core/widgets/Search.js";
import Expand from "https://js.arcgis.com/4.25/@arcgis/core/widgets/Expand.js";
import WebScene from "https://js.arcgis.com/4.25/@arcgis/core/WebScene.js";
import MapView from "https://js.arcgis.com/4.25/@arcgis/core/views/SceneView.js";

const webScene = new WebScene({
  portalItem: {
    id: "0b6dbaf6640540cfa83a3ba4cf97fb3f"
  }
});

const view = new MapView({
  map: webScene,
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