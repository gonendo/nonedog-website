<template lang="pug">
div
    div(class='banner')
        div(class='banner-greeting')
            p.banner-greeting-text Welcome to Gonendo's website
        div(class='social')
            div(class='networks')
                a(href='https://github.com/gonendo' target='_blank')
                    img(class='socialicon' src='../assets/github.png' alt='Gonendo\'s Github account')
                a(href='https://youtube.com/gonendo' target='_blank')
                    img(class='socialicon' src='../assets/youtube.png' alt='Gonendo\'s Youtube channel')
                a(href='http://www.linkedin.com/in/brice-andriantafika-898944176' target='_blank')
                    img(class='socialicon' src='../assets/linkedin.png' alt='Brice Andriantafika on Linkedin')
</template>
<script>
export default {
    data: function(){
        return{}
    }
}
</script>
<style lang="stylus" scoped>
.banner
    background: -webkit-linear-gradient(left, #12418c 70%, #4bacd8)
    background: -moz-linear-gradient(left, #12418c 70%, #4bacd8)
    background: -o-linear-gradient(left, #12418c 70%, #4bacd8)
    background: -ms-linear-gradient(left, #12418c 70%, #4bacd8)
    background: linear-gradient(to right, #12418c 70%, #4bacd8)
    height: 300px
    display: grid
    @media (min-width: 601px)
        grid-template-columns: 50% 1fr
    @media (max-width: 600px)
        grid-template-rows: repeat(2, 1fr)
        justify-items: center

.banner-greeting
    @media (min-width: 601px)
        height: 300px
    @media (max-width: 600px)
        height: 150px
    display: flex
    flex-direction: column
    justify-content: center

.banner-greeting-text
    font-size: 2.5em
    font-weight: bold
    color: white
    text-shadow: 2px 2px 4px #000000
    @media (min-width: 601px)
        margin-left: 70px
    @media (max-width: 600px)
        text-align: center

.social
    @media (min-width: 601px)
        margin-top: 200px
    @media (max-width: 600px)
        margin-top: 50px
    height: 100px

.networks
    @media (min-width: 601px)
        position: absolute
        right: 70px
    width: 220px
    display: grid
    grid-template-columns: repeat(3, 1fr)
    grid-column-gap: 10px
    justify-content: space-evenly

.socialicon
    opacity: 0.8

.socialicon:hover
    opacity: 1
</style>