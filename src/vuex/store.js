import Vue from 'vue'
import Vuex from 'vuex';

Vue.use(Vuex);
const store = new Vuex.Store({
	state: {
		isCreateProject: false,
		isCreateTask: false,
		

		isSelectProject: false,
		isSelectChat: true,
		

		SelectChatId: -1,
		SelectProjectId: -1,

		taskBoard: {
			vision: false,
			title: "",
			date: "",
			description: ""
		},

		projectList: [
		],
		chatList: [
			{
				name: "Илья Большаков",
				img: "https://st2.depositphotos.com/4431055/7495/i/450/depositphotos_74950191-stock-photo-men-latin-american-and-hispanic.jpg",
				status: "Онлайн",
				message: [
					{
						text: "У меня есть крутая идея по Хакатону!",
						user: "other"

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
		showIsCreateTask(state){
			state.isCreateTask = true;
		},
		hiddenIsCreateTask(state){
			state.isCreateTask = false;
		},
		createProject(state, data){
			state.projectList.push({
				name: "Проект - " + data.name,
				img: data.img,
				description: data.description,
				theme: data.theme,
				date: data.date,
				taskList: []
			});
			state.chatList.push({
				name: "Чат - " + data.name,
				img: data.img,
				message: []
			});
		},
		createTaskBoard(state, data){
			state.taskBoard = {
				vision: data.vision,
				title: data.title,
				date: data.date,
				description: data.description
			};
		},
		createTask(state, data){
			const project = state.SelectProjectId;
			console.log(project);
			const length = state.projectList[project].taskList.length - 1;
			console.log(data.date);
			state.projectList[project].taskList.push({
				name: "Задача " + (length + 2) + ": " + data.name,
				img: data.img,
				description: data.description,
				theme: data.theme,
				date: data.date
			});
		},
		selectChat(state, type){
			if(type){
				state.isSelectProject = false;
				state.SelectChatId = -1;
			}
			state.isSelectChat = type
			
		},
		selectProject(state, type){
			if(type){
				state.isSelectChat = false;
				state.SelectProjectId = -1;
			}
			state.isSelectProject = type
			
		},
		SelectChatId(state, id){
			state.SelectChatId = id;
		},
		SelectProjectId(state, id){
			state.SelectProjectId = id;
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