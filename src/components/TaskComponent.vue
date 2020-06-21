<template>
  <div class="taskBlock">
    <h1 class="taskTitle">{{ data.name }}</h1>
    <p>{{ data.description }}</p>
    <p class="taskDate">Закончить до <time>{{ data.time }} {{ data.date }}</time></p>
  </div>
</template>

<script>
export default {
  props: ['data'],
  data(){
    return {
      
    }
  }
}
</script>

<style scoped>
.taskBlock{
    margin: 30px;
    border-radius: 10px;
    padding: 15px;
    background: #effcde;
    width: 350px;
    cursor: pointer;
}
.taskTitle{
    margin: 0;
    font-size: 20px;
}
.taskDate{
    margin-bottom: 0;
    font-size: 12px;
    text-decoration: underline;
}
</style>
