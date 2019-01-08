<template lang="pug">
    div
        div(class='banner')
            div(class='banner-greeting')
                p.banner-greeting-text Welcome to Gonendo's website
            div(class='social')
                div(class='networks')
                    a(href='https://github.com/gonendo' target='_blank')
                        img(class='socialicon' src='https://static.none.dog/files/img/github.png' alt='Gonendo\'s Github account')
                    a(href='https://youtube.com/gonendo' target='_blank')
                        img(class='socialicon' src='https://static.none.dog/files/img/youtube.png' alt='Gonendo\'s Youtube channel')
                    a(href='http://www.linkedin.com/in/brice-andriantafika-898944176' target='_blank')
                        img(class='socialicon' src='https://static.none.dog/files/img/linkedin.png' alt='Brice Andriantafika on Linkedin')
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
    grid-template-columns: 50% 50%

.banner-greeting
    height: 300px
    display: flex
    flex-direction: column
    justify-content: center

.banner-greeting-text
    font-size: 2.5em
    font-weight: bold
    color: white
    margin-left: 70px

.social
    margin-top: 200px
    height: 100px

.networks
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