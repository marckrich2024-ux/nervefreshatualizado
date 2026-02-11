export const trackEvent = (eventName: string, params: any = {}) => {
    if (window.dataLayer) {
        window.dataLayer.push({
            event: eventName,
            ...params
        });
    } else {
        // console.log("GTM Event:", eventName, params);
    }
};

declare global {
    interface Window {
        dataLayer: any[];
    }
}
