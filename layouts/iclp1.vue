<template>
  <div>
    <nuxt />
  </div>
</template>

<script>
  export default {
    head() {
      return {
        link: [
          { rel: 'shortcut icon', href: '/marketing/ic-favicon.ico', type: 'image/x-icon' }, 
          { rel: 'stylesheet', href: 'https://fonts.googleapis.com/icon?family=Material+Icons' },
          { rel: 'stylesheet', href: '/marketing/styles/vjlp-core/bootstrap.min.css' },
          { rel: 'stylesheet', href: '/marketing/styles/vjlp-core/fonts.css' },
          { rel: 'stylesheet', href: '/marketing/styles/vjlp-core/animate.min.css' },
          { rel: 'stylesheet', href: '/marketing/styles/vjlp-core/hover-min.css' },
          { rel: 'stylesheet', href: '/marketing/styles/vjlp-core/slick.css' },
          { rel: 'stylesheet', href: 'https://files.vjpromo.com/bannerflow/lp2/css/core.css' },
          { rel: 'stylesheet', href: 'https://files.vjpromo.com/bannerflow/lp2/brand_icjp/css/brand.css' },
          { rel: 'stylesheet', href: 'https://files.vjpromo.com/bannerflow/lp2/css/responsive.css' },
          { defer: true, rel: 'stylesheet', href: '/marketing/styles/iclp1/flicker.css' },
        ], 
        script: [
          { src: 'https://files.vjpromo.com/bannerflow/lp-core/js/jquery-1.11.3.min.js' },
          { defer: true, src: 'https://files.vjpromo.com/bannerflow/lp2/brand_icjp/js/before.js' },
        ]
      }
    }
  }
</script>