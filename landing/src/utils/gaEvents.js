// src/utils/gaEvents.js
import ReactGA from "react-ga4";

export const trackEvent = ({ category, action, label }) => {
  ReactGA.event({
    category,
    action,
    label,
  });
};
