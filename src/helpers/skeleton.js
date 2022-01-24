const getGtmArgs = (action, category, label = "", event = "trackEvent") => {
  return {
    gtmId: "GTM-P8BTDWM",
    dataLayer: {
      event: event,
      eventCategory: category,
      eventAction: action,
      eventLabel: label,
    },
  };
};

export default getGtmArgs;
