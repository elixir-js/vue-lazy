## Vue lazy image

```ecmascript 6
npm install vue-lazzy-image 
```

## How use lib

```ecmascript 6
import CoreLazyLoading from 'vue-lazzy-image'

...

components: {
  CoreLazyLoading,
},
```

## Template

```ecmascript 6
<CoreLazyLoading>
  <img
    src="image_link"
    class="class_name"
    alt="alt_name"
  />
</CoreLazyLoading>
```

## Options

```ecmascript 6
<CoreLazyLoading :placeholder="{ class: 'className', style: 'height: 200px;' }">
  <img
    src="image_link"
    class="class_name"
    alt="alt_name"
  />
</CoreLazyLoading>
```

### Visible Skeleton

```ecmascript 6
<CoreLazyLoading :placeholder="{ class: 'className', style: 'height: 200px;' }" :skeleton="false">
  <img
    src="image_link"
    class="class_name"
    alt="alt_name"
  />
</CoreLazyLoading>
```
