<template>
  <div class="CreateTaskBlock">
      <div>
        <label>Название задачи</label>
        <input v-model="data.name" placeholder="Название проекта"/>
      </div>
      <div>
        <label>Описание задачи</label>
        <textarea v-model="data.description" placeholder="Описание проекта"/>
      </div>
      <div>
          <label>Дедлайн проекта</label>
          <input v-model="data.date" type="date"/>
      </div>
      <div class="createProjectBottomMenu">
          <button class="btnClose" @click="hiddenCreateTask()">Отмета</button>
          <button class="btnNext" @click="createTask()">Создать</button>
      </div>
  </div>
</template>

<script>
import store from '../vuex/store.js';

export default {
  data(){
    return {
      data: {
        name: "",
        description: ""
      }
    }
  },
  components: {
  },
  computed: {
  },
  methods: {
    hiddenCreateTask(){
      store.commit('hiddenIsCreateTask');
    },
    createTask(){
      store.commit('createTask', {
        name: this.data.name,
        description: this.data.description,
        date: this.data.date
      });
      store.commit('hiddenIsCreateTask');
    }
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.CreateTaskBlock{
    width: 500px;
    min-height: 200px;
    background: #fff;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    border-radius: 10px;
    padding: 15px 25px;
}
.CreateTaskBlock > div{
    margin-bottom: 20px;
}
.CreateTaskBlock > div > label{
    display: block;
    margin-bottom: 10px;
}
.CreateTaskBlock > div > input{
    width: 100%;
    padding: 10px 15px;
    box-sizing: border-box;
}
.CreateTaskBlock > div > textarea{
    width: 100%;
    padding: 10px 15px;
    box-sizing: border-box;
    resize: none;
}
.btnClose{
    background: #ddd;
    border: 1px solid #c8c5c5;
    padding: 6px 25px;
    border-radius: 5px;
    color: #3e3e3e;
    cursor: pointer;
}
.btnNext{
    margin-left: auto;
    background: #e9eaec;
    border: 1px solid #c8c5c5;
    padding: 6px 25px;
    border-radius: 5px;
    color: #3e3e3e;
    cursor: pointer;
}
.createProjectBottomMenu{
    display: flex;
    margin-top: 55px;
}
</style>
