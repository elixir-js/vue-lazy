import lazyload from './lazyloading';
import { version } from '../package.json';

lazyload.version = version;
lazyload.install = function (Vue) {
    // eslint-disable-next-line no-undef
    Vue.component(Slider.name, Slider);
};

export default lazyload;
