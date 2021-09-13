import {createStore} from 'vuex'
import bio from "@/store/modules/bio"
import openSource from "@/store/modules/openSource";
import projects from "@/store/modules/projects";

console.log(openSource.state.projects[1]);
export default createStore({
    state: {
        bio:bio.state.info,
        openSource:openSource.state.projects,
        projects:projects.state.projects,
    },
    mutations: {},
    actions: {},
    modules: {}
})
