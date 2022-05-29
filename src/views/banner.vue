<template lang="pug">
div
    div(class='banner')
        logo
        div(class='social')
            div(class='networks')
                a(href='https://github.com/gonendo' target='_blank')
                    img(class='socialicon' src='../assets/img/github.png' alt='Gonendo\'s Github account')
                a(href='https://youtube.com/gonendo' target='_blank')
                    img(class='socialicon' src='../assets/img/youtube.png' alt='Gonendo\'s Youtube channel')
                a(href='http://www.linkedin.com/in/brice-andriantafika-898944176' target='_blank')
                    img(class='socialicon' src='../assets/img/linkedin.png' alt='Brice Andriantafika on Linkedin')
</template>
<script>
import LogoComponent from './logo.vue'

export default {
    data: function(){
        return{}
    },
    components: {
        'logo' : LogoComponent
    }
}
</script>
<style lang="stylus" scoped>
.banner
    background -webkit-linear-gradient(left, #12418c 70%, #4bacd8)
    background -moz-linear-gradient(left, #12418c 70%, #4bacd8)
    background -o-linear-gradient(left, #12418c 70%, #4bacd8)
    background -ms-linear-gradient(left, #12418c 70%, #4bacd8)
    background linear-gradient(to right, #12418c 70%, #4bacd8)
    height 300px
    display grid
    @media (min-width 601px)
        grid-template-columns 50% 1fr
    @media (max-width 600px)
        grid-template-rows repeat(2, 1fr)
        justify-items center

.social
    @media (min-width 601px)
        margin-top 205px
    @media (max-width 600px)
        margin-top 55px
    height 100px

.networks
    @media (min-width 601px)
        position absolute
        right 70px
    width 220px
    display grid
    grid-template-columns repeat(3, 1fr)
    grid-column-gap 10px
    justify-content space-evenly

.socialicon
    opacity 0.8

.socialicon:hover
    opacity 1
</style>