import CoreLazyLoading from './lazyloading';
import { version } from '../package.json';

CoreLazyLoading.version = version;
CoreLazyLoading.install = function (Vue) {
    // eslint-disable-next-line no-undef
    Vue.component(CoreLazyLoading.name, CoreLazyLoading);
};

export default CoreLazyLoading;
