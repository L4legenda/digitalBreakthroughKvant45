<template>
    <div class="MenuBlock">
      <input placeholder="Поиск" class="SearchBlock"/>
      <div class="ButtonsBlock">
          <button :class="{activate : type == 'chat'}" @click="clickChat">Чаты</button>
          <button :class="{activate : type == 'project'}" @click="type = 'project'">Проекты</button>
      </div>
      <ListChat v-if="type == 'chat' "/>
      <ListProject v-if="type == 'project' "/>

      <button class="CreateProject" @click="viewCreateProject()" >Создать проект</button>
  </div>
</template>

<script>
import ListChat from './ListChatComponent.vue';
import ListProject from './ListProjectComponent.vue';
import store from '../vuex/store.js'

export default {
  data(){
    return {
      type: "chat"
    }
  },
  components: {
    ListChat,
    ListProject
  },
  methods: {
    viewCreateProject(){
      store.commit('showIsCreateProject');
    },
    clickChat(){
      this.type = 'chat';
    }
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.MenuBlock{
    width: 300px;
    height: 100vh;
    box-shadow: 0.1px 0 1px #00000080;
    position: relative;
}
.SearchBlock{
    box-sizing: border-box;
    width: 100%;
    display: block;
    border: none;
    padding: 15px 25px;
    background: #00000010;
    
}
.ButtonsBlock{
    display: flex;
    box-shadow: 0 1px 0.1px #00000030;
}
.ButtonsBlock > button{
    width: 100%;
    padding: 10px;
    border: none;
    background: none;
    font-weight: bold;
    cursor: pointer;
}

.ButtonsBlock > button:hover{
    background: #00000012;
}
.activate{
    background: #41a0da !important;
    color: #fff;
}
.activate:hover{
    background: #4fb3f0 !important;
}
.CreateProject{
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 50px;
    background: #4fb3f0;
    border: 0;
    cursor: pointer;
    font-size: 16px;
    color: #e8e8e8;
}
</style>
