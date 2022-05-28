<template lang="pug">
div(class='logo')
    pre.logo-text {{title}}
</template>
<script>
export default {
    created() {
        jQuery.get('assets/fonts/list.txt', (data) => {
            var fonts = data.split("\n")
            var font_url = "assets/fonts/" + fonts[Math.floor(Math.random() * (fonts.length-1))]
            
            var fontStyle = document.createElement('style')
            fontStyle.appendChild(document.createTextNode("\
                @font-face {\
                    font-family: 'RandomFont';\
                    src: url('" + font_url + "');\
                }\
            "))
            document.head.appendChild(fontStyle)
            
            this.title = "Gonendo's Website"
        })
    },
    data() {
        return{
            title : this.title,
        }
    }
}
</script>
<style lang="stylus" scoped>
.logo
    @media (min-width 601px)
        height 300px
    @media (max-width 600px)
        height 150px
    display flex
    flex-direction column
    justify-content center
.logo-text
    font-family "RandomFont"
    font-size 3em
    font-weight bold
    color white
    text-shadow 2px 2px 4px #000000
    @media (min-width 601px)
        margin-left 70px
    @media (max-width 600px)
        text-align center
</style>