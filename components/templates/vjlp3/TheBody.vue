<template>
  <div v-html="promo_content" />
</template> 

<script>
export default {
  name: 'Content',
  props: {
    promo_content: {
      type: String,
      required: true
    }
  }
};
</script>

<style>
#bf-game-slider .slick-slider {
  margin: 10px 0;
}
#bf-usps .row {
  margin: 0;
}
</style>