<template>
  <div class="taskBoardBlock">
    <h2 class="taskBoardTitle"><i class="fa fa-th-large" aria-hidden="true"></i> 
      {{getTitle}}
    </h2>
    <div class="close" @click="close()"><i class="fa fa-times" aria-hidden="true"></i></div>

    <div class="taskBoardMain">
      
    
    <div class="taskBoardContentBlock">

      <div class="taskBoardGroup">
        <p>Участники</p>
        <div>
          <img src="../assets/testImg.jpg" alt="">
        </div>
      </div>
      
    
    

      <div class="taskBoardDeadline">
        <p>Срок</p>
        <input type="checkbox">
        <label> {{ getDate }} </label>
      </div>

      <h2 class="taskBoardDescTitle"> <i class="fa fa-align-left" aria-hidden="true"></i> Описание</h2>
      <p class="taskBoardDescription">{{ getDescription }}</p>
    </div>

    <div class="taskBoardMenu">
        <button><i class="fa fa-user" aria-hidden="true"></i>Присоединиться</button>
        <h3>Добавить на карточку</h3>
        <button><i class="fa fa-users" aria-hidden="true"></i>Участники</button>
        <button><i class="fa fa-tag" aria-hidden="true"></i>Метки</button>
        <button><i class="fa fa-check-square-o" aria-hidden="true"></i>Чек-лист</button>
        <button><i class="fa fa-clock-o" aria-hidden="true"></i>Срок</button>
        <button><i class="fa fa-paperclip" aria-hidden="true"></i>Вложение</button>
      </div>
    </div>
  </div>
</template>

<script>
import store from '../vuex/store.js'

export default {
  data(){
    return {
      
    }
  },
  methods: {
    close(){
      store.commit('createTaskBoard', {
        vision: false
      });
    }
  },
  computed: {
    isVision(){
      return store.state.taskBoard.vision
    },
    getTitle(){
      return store.state.taskBoard.title
    },
    getDate(){
      return store.state.taskBoard.date
    },
    getDescription(){
      return store.state.taskBoard.description
    }
  }
}
</script>

<style scoped>

.taskBoardBlock{
  width: 750px;
  min-height: 500px;
  background: #f4f5f7;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  border-radius: 10px;
  padding: 15px 25px;
}
.taskBoardTitle{
  margin: 0;
  font-size: 22px;
}
.taskBoardMain{
  display: grid;
  grid-template-columns: 3fr 1fr;

}
.taskBoardGroup{
  margin-top: 50px;
}
.taskBoardGroup > p{
  font-size: 14px;
  color: #4d4d4d;
  margin-bottom: 5px;
  text-transform: uppercase;
  font-weight: bold;
}
.taskBoardGroup > div{
  margin-left: 10px;
}
.taskBoardGroup img{
  width: 32px;
  height: 32px;
  border-radius: 50%;
}
.taskBoardDeadline{
  margin-top: 30px;
}
.taskBoardDeadline > p{
  font-size: 14px;
  color: #4d4d4d;
  margin-bottom: 5px;
  text-transform: uppercase;
  font-weight: bold;
}

.taskBoardDeadline > label{
  text-decoration: underline;
}

.taskBoardDeadline > input{
  margin-left: 10px;
}

.taskBoardDescTitle{
  margin-top: 30px;
  font-size: 18px;
  color: #1e1e1e;
  margin-bottom: 5px;
  text-transform: uppercase;
  font-weight: bold;
}

.taskBoardMenu > button{
  background: #ddddddd1;
  border: none;
  border-radius: 4px;
  padding: 6px 15px;
  width: 100%;
  margin: 4px 0;
  cursor: pointer;
  text-align: left;
  font-size: 14px;
}

.taskBoardMenu h3{
  font-size: 14px;
  color: #4d4d4d;
}

.taskBoardMenu i{
  margin-right: 10px;
}

.close{
  position: absolute;
  right: 14px;
  top: 10px;
  font-size: 18px;
  cursor: pointer;
}
</style>
