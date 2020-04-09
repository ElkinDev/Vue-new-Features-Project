  <template>
    <v-app>
    

    <menuvbar app>
      <!-- -->
    </menuvbar>

    <!-- Sizes your content based upon application components -->
    <v-content>

      <!-- Provides the application the proper gutter -->
      <v-container fluid>
        <v-row>
      <v-col cols="2">
      <menudrawer app>
    
    </menudrawer>

      </v-col>

      <v-col cols="9" md="9">
      <v-container class="grey lighten-5 text-center ">
          <v-row >
      <v-col
        v-for="(card, index) in cards"
        :key="card"
        cols="12"
        sm="4"
        @click="card.showdetail=!card.showdetail" 
      >
        <v-card
          class="pa-2"
          outlined
          tile
          
        >
          {{card.title}} - {{index+1}}
         <h4 v-show="card.showdetail">
          {{card.text}}
         
         </h4>
        </v-card>
      </v-col>
    </v-row>
 
      </v-container>

      </v-col>
        
        </v-row>

        <!-- If using vue-router -->
        <router-view></router-view>
      </v-container>
    </v-content>
        <!-- 

    <footerbar >
    </footerbar> 
    If using vue-router -->
  </v-app>
  </template>

  <script>
  import menuvbar from './components/menu';
  import menudrawer from './components/menudrawer';

  export default {
    name: 'App',

    components: {
      menuvbar,
      menudrawer,
    
    },

    data: () => ({
      cards:[
        {title:'Card',text:'Laboris adipisicing exercitation ut irure ea tempor.',showdetail:false},
        {title:'Card',text:'Laboris adipisicing exercitation ut irure ea tempor.',showdetail:false},
        {title:'Card',text:'Laboris adipisicing exercitation ut irure ea tempor.',showdetail:false},
        {title:'Card',text:'Laboris adipisicing exercitation ut irure ea tempor.',showdetail:false},
        {title:'Card',text:'Laboris adipisicing exercitation ut irure ea tempor.',showdetail:false},
        {title:'Card',text:'Laboris adipisicing exercitation ut irure ea tempor.',showdetail:false},
        {title:'Card',text:'Laboris adipisicing exercitation ut irure ea tempor.',showdetail:false},
        {title:'Card',text:'Laboris adipisicing exercitation ut irure ea tempor.',showdetail:false},
        {title:'Card',text:'Laboris adipisicing exercitation ut irure ea tempor.',showdetail:false},
      ]
    }),
  };
  </script>
