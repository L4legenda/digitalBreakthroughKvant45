<template>
    <div>
      <div 
      :key="key" 
      v-for="(item, key) in projectlist" 
      class="UserBlock" 
      :class="{activity : (isProjectId == key) && isSelectProject}"
      @click="selectProject(key)">
          <img :src="item.img" :alt="item.name" class="img"/>
          <div class="ContantBlock">
            <h2 class="title">{{ item.name }}</h2>
          </div>
      </div>
    </div>
</template>

<script>
import store from '../vuex/store.js';

export default {
    data() {
        return{
            
        }
    },
    computed: {
        projectlist(){
            return store.state.projectList
        },
        isSelectProject(){
            return store.state.isSelectProject;
        },
        isProjectId(){
            return store.state.SelectProjectId;
        }
    },
    methods : {
        selectProject(key){
            store.commit('selectProject', true);
            store.commit('SelectProjectId', key);

        }
  }
}
</script>

<style scoped>
.UserBlock{
    display: flex;
    margin: 5px 0px;
    cursor: pointer;
    padding: 8px 10px;
}
.UserBlock:hover{
    background: #00000012;
}
.ContantBlock{
    padding: 5px;
}
.img{
    width: 64px;
    height: 64px;
    border-radius: 50%;
    margin-right: 6px;
    box-shadow: 0 0 3px #00000090;
}
.title{
    margin: 0;
    font-size: 16px;
    margin-bottom: 10px;
}
.lastMessage{
    margin: 0;
}
.activity{
  background: #0424a2cf  !important; 
  color: #fff;
}
.activity:hover{
  background: #0424a29c !important;
}
</style>
