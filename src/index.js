import lazyload from './lazyloading'
import { version } from '../package.json'

lazyload.version = version
Vue.directive('lazyload', lazyload)

export default lazyload