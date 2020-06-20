<template>
  <div id="app">
    <MenuLeft/>
    <Chat v-if="isChat" />
    <Project v-if="isProject"/>
    <CreateProject v-if="isCreateProject"/>
  </div>
</template>

<script>
import MenuLeft from './components/MenuLeftComponent.vue'
import Chat from './components/ChatComponent.vue'
import Project from './components/ProjectComponent.vue'
import CreateProject from './components/CreateProjectComponent.vue'
import store from './vuex/store.js'

export default {
  name: 'App',
  components: {
    MenuLeft,
    Chat,
    Project,
    CreateProject
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
      return store.state.isCreateProject
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
