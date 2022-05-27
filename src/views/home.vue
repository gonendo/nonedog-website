<template lang="pug">
div
    banner
    div(class='content')
        div(class='header')
            div
                h2.greeting Hello there !
                p.
                    This is my personal website. I'll share 
                    here all the projects i've been working on. You'll also get access to my
                    different social networks accounts.
            div
                profile(name='Brice Andriantafika' 
                avatar='https://www.gravatar.com/avatar/f30b1f8e04c0a59caa4e724f9e4eb674'
                mail="shikigami@gmail.com"
                hobbies="Programming, Video games, Listening to music")
    footer-component
</template>
<script>
import BannerComponent from './banner.vue'
import FooterComponent from './footer.vue'
import ProfileComponent from './profile.vue'

export default {
    data: function(){
        return{}
    },
    components: {
        'banner' : BannerComponent,
        'footer-component' : FooterComponent,
        'profile' : ProfileComponent
    }
}
</script>
<style lang="stylus">
body
    margin: 0
    padding: 0
    font-size: 100%
    min-width: 400px
    background #000

p,h2
    font-family: 'Source Code Pro', monospace
    color: #fff

.content
    margin: 70px 70px 70px 70px

.header
    display: grid
    justify-items: center
    @media (min-width: 601px)
        grid-template-columns: 70% 1fr
    @media (max-width: 600px)
        grid-template-rows: 200px 1fr

.greeting
    margin: 0
</style>