<template>
  <div class="taskBlock" draggable="true">
    <h1 class="taskTitle">{{ data.title }}</h1>
    <p>{{ data.descript }}</p>
    <p class="taskDate">Закончить до <time>{{ data.time }} {{ data.date }}</time></p>
  </div>
</template>

<script>
export default {
  props: ['data'],
  data(){
    return {
      TaskTest : [
        {
          title: "Задача 1: Парам парам",
          descript: "Описание",
          time: "23:00",
          date: "21.06.2020"
        },
        {
          title: "Задача 2: Парам парам",
          descript: "Описание",
          time: "23:00",
          date: "21.06.2020"
        },
        {
          title: "Задача 3: Парам парам",
          descript: "Описание",
          time: "23:00",
          date: "21.06.2020"
        },
        {
          title: "Задача 4: Парам парам",
          descript: "Описание",
          time: "23:00",
          date: "21.06.2020"
        }
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.taskBlock{
    margin: 30px;
    border-radius: 10px;
    padding: 15px;
    background: #effcde;
    width: 350px;
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
