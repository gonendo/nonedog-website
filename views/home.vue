<template lang="pug">
div
    banner
    div(class='content')
        h1 Hello there !
        p.
            I'm Brice Andriantafika aka Gonendo, this is my personal website. I'll share 
            here all the projects i've been working on. You'll also get access to my
            different social networks accounts.
    footer-component
</template>
<script>
import BannerComponent from './banner.vue'
import FooterComponent from './footer.vue'
export default {
    data: function(){
        return{}
    },
    components: {
        'banner' : BannerComponent,
        'footer-component' : FooterComponent
    }
}
</script>
<style lang="stylus">
body
    margin: 0
    padding: 0
    font-size: 100%

p,h1
    font-family: 'Source Code Pro', monospace

.content
    margin: 70px 70px 70px 70px
    width: 50%
</style>