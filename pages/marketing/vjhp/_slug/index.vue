<template>
  <div>
    <!-- <loginHeaderSection
      :login_header_text = "post.attributes.login_header_section.login_header_text" /> -->
    <section2 />
  </div>
</template>

<script>
import loginHeaderSection from '~/components/templates/vjhp/loginHeaderSection.vue'
import headerSection from '~/components/templates/vjhp/headerSection.vue'
import section2 from '~/components/templates/vjhp/section2.vue'
import gamesBrick from '~/components/templates/vjhp/gamesBrick.vue'
import section4 from '~/components/templates/vjhp/section4.vue'
import section5 from '~/components/templates/vjhp/section5.vue'
import testimonialSection from '~/components/templates/vjhp/testimonialSection.vue'
import section7 from '~/components/templates/vjhp/section7.vue'
import footerSection from '~/components/templates/vjhp/footerSection.vue'

export default {
  components: {
    loginHeaderSection,
    headerSection,
    section2,
    gamesBrick,
    section4,
    section5,
    testimonialSection,
    section7,
    footerSection
  },
  async asyncData ({ params }) {
    try {
      const post = await import('~/assets/content/landing-page/marketing/vjhp/'+ params.slug +'.md')
      return {
        post
      }
    } catch (error) {
      return false
    }
  }
}
</script>