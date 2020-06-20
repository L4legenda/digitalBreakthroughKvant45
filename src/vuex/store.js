import Vue from 'vue'
import Vuex from 'vuex';

Vue.use(Vuex);
const store = new Vuex.Store({
	state: {
		isCreateProject: false,
		isSelectChat: true,
		SelectChatId: -1,
		projectList: [
			{
				name: "Test Name 1 Project",
				img: "https://st2.depositphotos.com/4431055/7495/i/450/depositphotos_74950191-stock-photo-men-latin-american-and-hispanic.jpg",
				
			}
		],
		chatList: [
			{
				name: "Test Name 1 Chat",
				img: "https://st2.depositphotos.com/4431055/7495/i/450/depositphotos_74950191-stock-photo-men-latin-american-and-hispanic.jpg",
				status: "Онлайн",
				message: [
					{
						text: "Test",
						user: "me"

					}
				]
			}
		],

	},
	mutations: {
		showIsCreateProject(state){
			state.isCreateProject = true;
		},
		hiddenIsCreateProject(state){
			state.isCreateProject = false;
		},
		createProject(state, data){
			state.projectList.push({
				name: "Проект - " + data.name,
				img: data.img,
				lastMessage: ""
			});
			state.chatList.push({
				name: "Чат - " + data.name,
				img: data.img,
				lastMessage: ""
			});
		},
		selectChat(state){
			state.isSelectChat = true
		},
		SelectChatId(state, id){
			state.SelectChatId = id;
		},
		addMessageChat(state, mess){
			if(state.SelectChatId >= 0){
				state.chatList[state.SelectChatId].message.push({
					text: mess,
					user: "me"
				});
			}
			
		}
	}
});

export default store;