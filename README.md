## Vue lazy image

```ecmascript 6
npm install vue-lazzy-image 
```

## How use lib

```ecmascript 6
import lazyload from 'vue-lazzy-image'

...

directives: {
  lazyload,
},
```

## Template

```ecmascript 6
<img
  v-lazyload
  src="image_link"
  class="class_name"
  alt="alt_name"
/>
```
