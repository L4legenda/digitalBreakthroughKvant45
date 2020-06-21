<template>
  <div class="ChatBlock">
        <header class="ChatHeader">
            <h1 class="ChatTitle">{{ userInfo.name }}</h1>
            <p class="ChatDescript">{{ userInfo.status }}</p>
        </header>
        <div class="boardChat">
          <div 
            :key='key' 
            v-for="(item, key) in userInfo.messages"
            :class="[{ meMessContainer : item.user == 'me' }, { otherMessContainer : item.user == 'other' }]"
          >
            <p 
            class="mess"
            
            >
              {{ item.text }}
            </p>
          </div>
          
        </div>
        <div class="BottomMenuChat" v-if="isSelectChat && isChatId >= 0">
          <input 
            type="text" 
            v-model="message" 
            v-on:keyup.enter="sendMessage()" 
            placeholder="Сообщение" 
            class="ButtonTextChat">
        </div>
    </div>
</template>

<script>
import store from '../vuex/store.js'
export default {
  data(){
    return {
      message: ""
    }
  },
  components: {

  },
  methods: {
    sendMessage(){
      store.commit( 'addMessageChat', this.message );
      this.message = "";
    },
  },
  computed: {
    isSelectChat(){
      return store.state.isSelectChat
    },
    isChatId(){
      return store.state.SelectChatId
    },
    
    userInfo(){
      const user = store.state.chatList[store.state.SelectChatId];
      if(store.state.SelectChatId >= 0){
        return {
          name : user.name,
          status: user.status,
          messages: user.message
        }
      }else{
        return {
          name: "Чат"
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
.boardChat{
  position: absolute;
  bottom: 55px;
  left: 0px;
  width: 100%;
}
.meMessContainer{
  display: flex;
  justify-content: flex-end;
  margin-right: 45px;
}
.otherMessContainer{
  display: flex;
  justify-content: flex-start;
  margin-left: 45px;
}
.mess{
  background: #fff;
  padding: 15px 25px;
  border-radius: 5px;
}

</style>
