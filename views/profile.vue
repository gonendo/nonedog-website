<template lang="pug">
    div(class='profile')
        div(class="avatarbg")
            img(class="avatar" :src="avatar" :alt="name + '\\'s avatar'")
        div
            p.bold {{name}}<br/><br/>
            p.bold contact:<br/>
            p {{mail}}<br/><br/>
            p.bold hobbies:<br/>
            p {{hobbies}}
</template>
<script>
export default {
    props: {
        name: String,
        avatar: String, 
        mail: String,
        hobbies: String
    },
    data: function(){
        return{}
    }
}
</script>
<style lang="stylus" scoped>
.profile
    font-size: 0.9em
    width: 200px
    border-color: #aaaaaa
    border-width: thin
    border-style: dashed
    display: grid
    grid-template-rows: 120px 1fr
    justify-items: center
    text-align: center

.avatarbg
    width: 200px
    background-color: #dddddd

.avatar
    margin-top: 10px
    border-radius: 50%

.bold
    font-weight: bold
</style>