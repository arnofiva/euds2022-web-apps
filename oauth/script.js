import BasemapGallery from "https://js.arcgis.com/4.25/@arcgis/core/widgets/BasemapGallery.js";
import Search from "https://js.arcgis.com/4.25/@arcgis/core/widgets/Search.js";
import Expand from "https://js.arcgis.com/4.25/@arcgis/core/widgets/Expand.js";
import WebScene from "https://js.arcgis.com/4.25/@arcgis/core/WebScene.js";
import SceneView from "https://js.arcgis.com/4.25/@arcgis/core/views/SceneView.js";

import IdentityManager from "https://js.arcgis.com/4.25/@arcgis/core/identity/IdentityManager";
import OAuthInfo from "https://js.arcgis.com/4.25/@arcgis/core/identity/OAuthInfo";

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