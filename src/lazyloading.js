/* eslint-disable global-require */
/* eslint-disable no-param-reassign */

/**
 * Data image default
 * {Object}
 * */
const imageDefault = {
  src: require('./assets/img/img_skeleton.png'),
  class: 's-image'
};
/**
 * Observer options default
 * {Object}
 * */
const observerDefault = {
  root: null,
  threshold: 0.01
};

export default {
  name: 'CoreLazyLoading',
  props: {
    placeholder: {
      type: Object,
      default: () => {
        return imageDefault;
      }
    },
    skeleton: {
      type: Boolean,
      default: true,
    },
    options: {
      type: Object,
      default: () => {
        return observerDefault;
      }
    }
  },

  data() {
    return {
      observer: {},
      firstStepToLoad: true,
      placeholderImage: {},
      image: {
        class: '',
        src: ''
      }
    };
  },

  render() {
    return this.$slots.default;
  },

  mounted() {
    this.placeholderImage = this.placeholder

    // skeleton check to enable
    if (!this.skeleton) {
      this.placeholderImage = '';
    } else {
      this.placeholderImage.src = require('./assets/img/img_skeleton.png');
      this.placeholderImage.style = 'filter: blur(0.1vw);';
      this.placeholderImage.class += ' ' + imageDefault.class
    }

    this.setImageData();
    this.$el.onload = this.onLoadImage;
    this.$el.onerror = this.onErrorImage;
    const observer = new IntersectionObserver(this.checkIsIntersecting, this.options);
    observer.observe(this.$el);
  },

  methods: {
    /**
     * Start data to component
     * @returns {null}
     * */
    setImageData() {
      this.image = {
        src: this.$el.getAttribute('src'),
        class: this.$el.getAttribute('class')
      };
      this.changeElementAttribute(['class', 'src', 'style'], [this.placeholderImage.class, this.placeholderImage.src, this.placeholderImage.style ? this.placeholderImage.style : '']);
    },

    /**
     * Load image from finish observer
     * @returns {null}
     * */
    loadImage() {
      this.$el.src = this.image.src;
      this.firstStepToLoad = false;
    },

    /**
     * Event on load image
     * @returns {null}
     * */
    onLoadImage() {
      if (!this.firstStepToLoad) {
        this.changeElementAttribute(['class', 'style'], [this.image.class, '']);
      }
    },

    /**
     * Event on error image
     * @returns {null}
     * */
    onErrorImage() {
      this.changeElementAttribute(['class', 'style', 'src'], [this.image.class, '', require('./assets/img/photo.png')]);
    },

    /**
     * Method to check intersecting event
     * @params {Array, Observer} entries, observer
     * @returns {null}
     * */
    checkIsIntersecting(entries, observer) {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.loadImage();
          observer.unobserve(this.$el);
        }
      });
    },

    /**
     * Method to change element
     * @params {Array, Array} keys, values
     * @returns {null}
     * */
    changeElementAttribute(keys, values) {
      keys.forEach((item, index) => {
        this.$el.setAttribute(item, values[index]);
      });
    }

  }
}
