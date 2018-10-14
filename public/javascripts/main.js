var Vue = require('vue/dist/vue.js');

Vue.component("insukWorld", require("./components/insukWorld.vue"));

const app = new Vue({
    el: "#app"
});