/* eslint-disable global-require */
/* eslint-disable no-param-reassign */

/**
 * Data image default
 * {Object}
 * */
const imageDefault = {
    src: require('./assets/img/img_skeleton.png'),
    style: 'height: 170px',
    class: 's-image',
};

const errorImageDefault = {
    ...imageDefault,
    // TODO: src should be changed to another image in the future
};
/**
 * Observer options default
 * {Object}
 * */
const observerDefault = {
    root: null,
    threshold: 1,
};

export default {
    name: 'CoreLazyLoading',

    props: {
        placeholderImage: {
            type: Object,
            default: () => {
                return imageDefault;
            },
        },

        errorImage: {
            type: Object,
            default: () => {
                return errorImageDefault;
            },
        },

        options: {
            type: Object,
            default: () => {
                return observerDefault;
            },
        },
    },

    data() {
        return {
            firstStepToLoad: true,
            image: {
                class: '',
                src: '',
            },
        };
    },

    mounted() {
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
                class: this.$el.getAttribute('class'),
            };

            this.changeElementAttribute(
                ['class', 'style', 'src'],
                [
                    this.placeholderImage.class,
                    this.placeholderImage.style,
                    this.placeholderImage.src,
                ],
            );
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

        // TODO: onError there should be an image from props or default
        /**
         * Event on error image
         * @returns {null}
         * */
        onErrorImage() {
            this.changeElementAttribute(
                ['class', 'style', 'src'],
                [this.image.class, '', this.errorImage.src],
            );
        },
        /**
         * Method to check intersecting event
         * @params {Array, Observer} entries, observer
         * @returns {null}
         * */
        checkIsIntersecting(entries, observer) {
            entries.forEach((entry) => {
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
        },
    },

    render() {
        return this.$slots.default;
    },
};
