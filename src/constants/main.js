export const DEFAULT_IFRAME_SRC = 'https://testing.payment-widget.ott.yandex.ru/';
export const LOCAL_IFRAME_SRC_VARIABLE = 'iframeSrc';

export const VIEWPORT_TYPES = {
    DESKTOP: 'DESKTOP',
    MOBILE_PORTRAIT: 'MOBILE_PORTRAIT',
    MOBILE_LANDSCAPE: 'MOBILE_LANDSCAPE',
};

export const VIEWPORTS = {
    [VIEWPORT_TYPES.DESKTOP]: {
        width: 1024,
        height: 768,
    },
    [VIEWPORT_TYPES.MOBILE_PORTRAIT]: {
        width: 375,
        height: 680,
    },
    [VIEWPORT_TYPES.MOBILE_LANDSCAPE]: {
        width: 680,
        height: 375,
    }
};