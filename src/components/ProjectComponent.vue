<template>
  <div class="ChatBlock">
        <header class="ChatHeader" v-if="isSelectChat">
            <h1 class="ChatTitle">{{  }}</h1>
            <p class="ChatDescript">Описание проекта...</p>
        </header>
          <div v-for="(item, key) in TaskTest" :key="key">
            <Task :data="item" />
          </div>
        <div class="BottomMenuChat" v-if="isSelectChat">
          <input type="text" placeholder="Сообщение" class="ButtonTextChat">
          
        </div>
    </div>
</template>

<script>
import Task from './TaskComponent.vue';
import store from '../vuex/store.js'
export default {
  data(){
    return {
      TaskTest : [
      // {
      //   title: "Задача 1: Парам парам",
      //   descript: "Описание",
      //   time: "23:00",
      //   date: "21.06.2020"
      // }
      ]
    }
  },
  components: {
    Task
  },
  computed: {
    isSelectChat(){
      return store.state.isSelectChat
    }
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.ChatTitle{
    margin: 0;
    font-size: 20px;
}
.ChatBlock{
    width: calc(100% - 300px);
    background: url(../assets/backgroundChat.jpg);
    position: relative;
}
.ChatHeader{
    background: #fff;
    padding: 10px 15px;
}
.ChatDescript{
    margin: 7px 0;
}
.BottomMenuChat{
    position: absolute;
    bottom: 0;
    left: 0;
    background: #fff;
    width: 100%;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
}
.ButtonBottomChat{
    font-size: 20px;
    background: none;
    border: none;
    color: #41a0da;
    cursor: pointer;
}
.ButtonTextChat{
  width: 100%;
  display: block;
  box-sizing: border-box;
  height: 100%;
  padding: 10px 25px;
}
</style>
