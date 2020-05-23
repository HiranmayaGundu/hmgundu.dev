/* eslint-disable @typescript-eslint/camelcase */
export const GA_TRACKING_ID = "UA-167400081-1";

export const pageview = (url) => {
  window.gtag("config", GA_TRACKING_ID, {
    page_path: url,
  });
};

export const event = ({ action, category, label, value }) => {
  window.gtag("event", action, {
    event_category: category,
    event_label: label,
    value: value,
  });
};

export const sendToGoogleAnalytics = ({ id, name, label, value }) => {
  window.gtag("event", name, {
    event_category:
      label === "web-vital" ? "Web Vitals" : "Next.js custom metric",
    event_label: id,
    value: Math.round(name === "CLS" ? value * 1000 : value),
    non_interaction: true,
  });
};
