import TagManager from "react-gtm-module";
import getGtmArgs from "./skeleton";

export const chooseLink = (action) => {
  TagManager.dataLayer(
    getGtmArgs(action, "Seleccionar link", "", `Click en ${action}`)
  );
};
