<template>
    <div class="insuk">
        Insuk
        <span>{{ who }}</span><br/>
        <p></p>
        <button v-on:click="moveUser">할일 적기</button>
    </div>
</template>

<script>
    module.exports = { // This is important, I got errors when using `export default`
        data () {
            return {
                who: "World"
            }
        },
        mounted () {
            setTimeout(() => {
                console.log('We!!!!!! can use ES6 too!')
            }, 1000)
        },
        methods : {
            moveUser : function(event){
                location.href="/user";
            }
        }
    }
</script>

<style scoped lang="scss">
.insuk {
    color: green;
    span {
        color: orange;
    }
}
</style>