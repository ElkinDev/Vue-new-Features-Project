<template>
<div>
    <v-app-bar
    >
      <v-app-bar-nav-icon></v-app-bar-nav-icon>

      <v-toolbar-title @click="changeTitle"> {{title}}</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-heart</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>

      <v-menu
        left
        bottom
      >
        <template v-slot:activator="{ on }">
          <v-btn icon v-on="on">
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>
        </template>

        <v-list>
          <v-list-item
            v-for="n in 5"
            :key="n"
            @click="() => {}"
          >
            <v-list-item-title>Option {{ n }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>

</div>
</template>

<script>
import {bus} from '../main';
  export default {
    name: 'menuvbar',
     props:{
        title:{
            type:String,
            required:true,  
        }
    },
    data: () => ({
      
    }),
    methods:{
    changeTitle: function(){
        //this.$emit('changeTitle','New Title 1')
        bus.$emit('changeTitle','lo que me salga de los cojones')
    }
    },
     computed: {
    bg () {
      return this.background ? 'https://cdn.vuetifyjs.com/images/backgrounds/bg-2.jpg' : undefined
    },
  },
  }
</script>
