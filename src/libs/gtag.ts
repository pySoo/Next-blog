import { isDev } from './core';
import useRouteChange from './useRouteChange';

export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_ANALYTICS_ID;

export const pageview = (url: URL) => {
  if (GA_TRACKING_ID) {
    window.gtag('config', GA_TRACKING_ID, {
      page_path: url,
    });
  }
};

export const event = (
  action: Gtag.EventNames,
  { event_category, event_label, value }: Gtag.EventParams,
) => {
  window.gtag('event', action, {
    event_category,
    event_label,
    value,
  });
};

export const useGtag = () => {
  useRouteChange((url) => {
    if (isDev) return;

    pageview(url);
  });
};
