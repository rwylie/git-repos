<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <ul>
      <li><a href="http://sayhellophotography.com/" target="_blank">Photography Shop</a></li>
      <li><a href="https://sayhellophotography.teachable.com/p/lovely-light-photography-for-bloggers/" target="_blank">Online Workshop</a></li>
      <br>
      <li><a href="/#/es">Go to Spain!</a></li>
    </ul>
  <button v-on:click="count++">Increase the count!</button>
  <button v-on:click="count--">Decrease the count!</button>
  <div> {{count}} </div>
  </div>


</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Let\'s get Creative!',
      count: 0
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
