  <template>
    <v-app>
    

    <menuvbar v-bind:title="Headtitle" app>
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
      <h4>
      {{Headtitle}} 



      
      </h4>
        <nestingcp v-bind:cards="cards"> 
        </nestingcp> 
        <hr>
  
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
  import nestingcp from './components/nestingcp';

  export default {
    name: 'App',

    components: {
      menuvbar,
      menudrawer,
      nestingcp,
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
      ],
      Headtitle:'Movie Rating Dashboard '
    }),
  };
  </script>
