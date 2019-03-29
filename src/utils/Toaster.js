import Vue from 'vue';

export const infoToaster = (message) => Vue.prototype.$snotify.info(message, 'Info');

export const successToaster = (message) => Vue.prototype.$snotify.success(message, 'Success');

export const warningToaster = (message) => Vue.prototype.$snotify.warn(message, 'Warn');

export const errorToaster = (message) => Vue.prototype.$snotify.error(message, 'Error');
