<template>
  <div>
    <div 
    :key="key" v-for="(item, key) in chatlist" 
    :class="{activity : (isChatId == key) && isSelectChat}" 
    class="UserBlock" @click="selectChat(key)">
    
      <img :src="item.img" :alt="item.name" class="img"/>
      <div class="ContantBlock">
        <h2 class="title">{{ item.name }}</h2>
        <p class="lastMessage">{{ lastMessage(key).text }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import store from '../vuex/store.js';

export default {
  data(){
    return {
    }
  },
  computed: {
      chatlist(){
        return store.state.chatList
      },
      isSelectChat(){
        return store.state.isSelectChat;
      },
      isChatId(){
        return store.state.SelectChatId;
      }
      
  },
  methods : {
    selectChat(key){
      store.commit('selectChat', true);
      store.commit('SelectChatId', key);

    },
    lastMessage(key){
        const l = store.state.chatList[key].message.length - 1;
        if(l >= 0){
          return store.state.chatList[key].message[l];
        }else{
          return []
        }
        
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
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
    white-space: nowrap; /* Запрещаем перенос строк */
    overflow: hidden;
    text-overflow: ellipsis;
    width: 50%;
}
.activity{
  background: #0424a2cf  !important; 
  color: #fff;
}
.activity:hover{
  background: #0424a29c !important;
}
</style>
