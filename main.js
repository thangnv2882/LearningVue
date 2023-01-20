var vueInstance = new Vue({
  el: '#app',
  data: {
    content: "Content Page"
  },
  methods: {
    say: function(name) {
      return "Hello " + name;
    }
  }
})

setTimeout(() => {
  vueInstance.content = "Content Update"
}, 3000)