<template>
  <div class="CreateProjectBlock">
      <div>
          <label>Название проекта</label>
          <input v-model="data.name" placeholder="Название проекта"/>
      </div>
      <div>
          <label>Описание проекта</label>
          <textarea v-model="data.description" placeholder="Описание проекта"/>
      </div>
      <div>
          <label>Тематика проекта</label>
          <select v-model="data.theme"> 
              <option>Тема 1</option>
              <option>Тема 2</option>
              <option>Тема 3</option>
              <option>Тема 4</option>
          </select>
      </div>
      <div>
          <label>Дедлайн проекта</label>
          <input v-model="data.date" type="date"/>
      </div>

      <div class="createProjectBottomMenu">
          <button class="btnClose" @click="hiddenCreateProject()">Отмета</button>
          <button class="btnNext" @click="createProject()">Создать</button>
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
        description: "",
        theme: 1,
        date: ""
      }
    }
  },
  methods: {
    hiddenCreateProject(){
      store.commit('hiddenIsCreateProject');
    },
    createProject(){
      store.commit('createProject', {
        name: this.data.name,
        description: this.data.description,
        theme: this.data.theme,
        date: this.data.date,
        img: "https://st2.depositphotos.com/4431055/7495/i/450/depositphotos_74950191-stock-photo-men-latin-american-and-hispanic.jpg"
      });
      store.commit('hiddenIsCreateProject');
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.CreateProjectBlock{
    width: 500px;
    min-height: 500px;
    background: #fff;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    border-radius: 10px;
    padding: 15px 25px;
    
}
.CreateProjectBlock > div{
    margin-bottom: 20px;
}
.CreateProjectBlock > div > label{
    display: block;
    margin-bottom: 10px;
}
.CreateProjectBlock > div > input{
    width: 100%;
    padding: 10px 15px;
    box-sizing: border-box;
}
.CreateProjectBlock > div > textarea{
    width: 100%;
    padding: 10px 15px;
    box-sizing: border-box;
    resize: none;
}
.CreateProjectBlock > div > select{
    width: 100%;
    padding: 10px 15px;
    box-sizing: border-box;
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
