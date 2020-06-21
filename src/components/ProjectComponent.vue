<template>
  <div class="ChatBlock">
        <header class="ChatHeader">
            <h1 class="ChatTitle">{{ projectInfo.name }}</h1>
            <p class="ChatDescript">{{ projectInfo.description }}</p>
        </header>
          <div 
          v-for="(item, key) in projectInfo.tasklist" 
          :key="key" 
          @click="createTaskBoard(item)">
            <Task :data="item" />
          </div>
        <div class="BottomMenuChat">
          <button 
            class="ButtonBottomChat" 
            @click="showCreateTask">
           Добавить задачу 
          </button>
        </div>
    </div>
</template>

<script>
import Task from './TaskComponent.vue';
import store from '../vuex/store.js'
export default {
  data(){
    return {
    }
  },
  methods: {
    showCreateTask(){
      store.commit('showIsCreateTask');
    },
    createTaskBoard(data){
      store.commit('createTaskBoard', {
        vision: true,
        title: data.name,
        date: data.date,
        description: data.description
      });
    }
  },
  components: {
    Task
  },
  computed: {
    isSelectProject(){
      return store.state.isSelectProject
    },
    projectInfo(){
      const project = store.state.projectList[store.state.SelectProjectId];
      if(store.state.SelectProjectId >= 0){
        return {
          name : project.name,
          description: project.description,
          theme: project.theme,
          date: project.date,
          tasklist : project.taskList
        }
      }else{
        return {
          name: "Проекты",

        }
      }   
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
