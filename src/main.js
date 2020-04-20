import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import 'roboto-fontface/css/roboto/roboto-fontface.css'
import '@mdi/font/css/materialdesignicons.css'
import VueRouter from 'vue-router'
import EventForm from './components/newEventForm';
import eventList from './components/eventlist';
import eventDetails from './components/eventdetail';
import eventCalendar from './components/eventCalendar';
import keywordsList from './components/keywords';
import userList from './components/user';

Vue.use(VueRouter)



var router = new VueRouter({
  routes: [
    // dynamic segments start with a colon
    { path: "/",},
    { path: '/newEvent', component: EventForm },
    { path: '/events', component: eventList },
    { path: '/event/:id', component: eventDetails,
    children: [
      // UserHome will be rendered inside User's <router-view>
      // when /user/:id is matched
      { path: '', component: eventDetails },

      // ...other sub routes
    ]
    
    },
    { path: '/calendar', component: eventCalendar },
    { path: '/keywords', component: keywordsList },
    { path: '/user', component: userList },

  ]
})

Vue.config.productionTip = false
export const bus= new Vue();

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
