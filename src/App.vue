<template>
  <div id="app">
    <MenuLeft/>
    <Chat v-if="isChat" />
    <Project v-if="isProject"/>
    <CreateProject v-if="isCreateProject"/>
    <CreateTask v-if="isCreateTask"/>
    <TaskBoard v-if="isTaskBoard"/>
  </div>
</template>

<script>
import MenuLeft from './components/MenuLeftComponent.vue'
import Chat from './components/ChatComponent.vue'
import Project from './components/ProjectComponent.vue'
import CreateProject from './components/CreateProjectComponent.vue'
import CreateTask from './components/CreateTaskComponent.vue'
import TaskBoard from './components/TaskBoardComponent.vue'
import store from './vuex/store.js'

export default {
  name: 'App',
  components: {
    MenuLeft,
    Chat,
    Project,
    CreateProject,
    CreateTask,
    TaskBoard
  },
  data(){
    return {
      
    }
  },
  computed: {
    isCreateProject(){
      return store.state.isCreateProject
    },
    isChat(){
      return store.state.isSelectChat
    },
    isProject(){
      return store.state.isSelectProject
    },
    isCreateTask(){
      return store.state.isCreateTask
    },
    isTaskBoard(){
      return store.state.taskBoard.vision
    }
  }
}
</script>

<style>
body, html{
  margin: 0;
  padding: 0;
  font-family: Arial;
}
#app{
  margin: 0;
  padding: 0;
  display: flex;
}
</style>
