## Vue Lazzy Image Component

```sh
npm install vue-lazzy-image
```

## How to use lib

```javascript
import CoreLazyLoading from 'vue-lazzy-image'
...
components: {
  CoreLazyLoading,
},
```

## Template

```javascript
<CoreLazyLoading>
    <img src="your_image_link" class="your_class_name" alt="your_alt_name" />
</CoreLazyLoading>
```

## Component props

Parameters, which you can pass to `vue-lazzy-image` component.

| Property      |   Type    |                                                                  Description                                                                  |
| ------------- | :-------: | :-------------------------------------------------------------------------------------------------------------------------------------------: |
| `skeleton`    | `boolean` |                                                          Visibility of your skeleton                                                          |
| `placeholder` | `object`  | The placeholder which will be provided has `src` and `class` in its properties. The placeholder will be the image before loading the main one |
| `options`     | `object`  |                                  Options of IntersctionObserver constructor for your images' parent element                                   |

## Options

```javascript
<CoreLazyLoading :placeholder="{ class: 'className', style: 'height: 200px;' }">
  <img
    src="your_image_link"
    class="your_class_name"
    alt="your_alt_name"
  />
</CoreLazyLoading>
```

### Visible Skeleton

```javascript
<CoreLazyLoading :placeholder="{ class: 'className', style: 'height: 200px;' }" :skeleton="false">
  <img
    src="your_image_link"
    class="your_class_name"
    alt="your_alt_name"
  />
</CoreLazyLoading>
```
