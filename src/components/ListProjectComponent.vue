<template>
    <div>
      <div :key="key" v-for="(item, key) in projectlist" class="UserBlock">
          <img :src="item.img" :alt="item.name" class="img"/>
          <div class="ContantBlock">
            <h2 class="title">{{ item.name }}</h2>
            <p class="lastMessage">{{ item.lastMessage }}</p>
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
        }
    }
}
</script>

<style scoped>
.UserBlock{
    display: flex;
    margin: 15px 5px;
    cursor: pointer;
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
</style>
