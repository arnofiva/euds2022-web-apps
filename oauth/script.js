import BuildingExplorer from "https://js.arcgis.com/4.25/@arcgis/core/widgets/BuildingExplorer.js";
import WebScene from "https://js.arcgis.com/4.25/@arcgis/core/WebScene.js";
import SceneView from "https://js.arcgis.com/4.25/@arcgis/core/views/SceneView.js";

import IdentityManager from "https://js.arcgis.com/4.25/@arcgis/core/identity/IdentityManager.js";
import OAuthInfo from "https://js.arcgis.com/4.25/@arcgis/core/identity/OAuthInfo.js";

IdentityManager.registerOAuthInfos([
  new OAuthInfo({
    appId: "SSFsEgcHbBQWuQzo",
    popup: true,
    popupCallbackUrl: `${document.location.origin}${document.location.pathname}oauth-callback-api.html`,
  }),
]);

window.setOAuthResponseHash = (responseHash) => {
  IdentityManager.setOAuthResponseHash(responseHash);
};

const webScene = new WebScene({
  portalItem: {
    id: "74ea934f47de4e99807d260d4e69d9df"
  }
});

const view = new SceneView({
  map: webScene,
  container: "viewDiv"
});


view.when(() => {
  // get the BuildingSceneLayer from the webscene
  webScene.allLayers.forEach((layer) => {
    if (layer.title === "Esri Building E Demo") {
      // explore components in the layer using the BuildingExplorer widget
      const buildingExplorer = new BuildingExplorer({
        view: view,
        layers: [layer]
      });
      view.ui.add(buildingExplorer, "top-right");
    }
  });
});