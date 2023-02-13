<template>
  <div id="app" class="container">
    <AddTask />
    <MyTask />
  </div>
</template>

<script>
import AddTask from '@/components/AddTask.vue'
import MyTask from '@/components/MyTask.vue'

export default {
  name: 'App',
  components: {
    AddTask,
    MyTask
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
