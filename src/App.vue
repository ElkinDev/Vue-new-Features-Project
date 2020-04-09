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
      <v-col cols="3">
      <menudrawer app>
    
    </menudrawer>

      </v-col>

      <v-col cols="9" md="8">
  Duis ut nostrud aliquip pariatur commodo et.Enim ullamco eiusmod ipsum ad.Laborum reprehenderit sunt irure ad quis dolore cupidatat in sint magna occaecat commodo enim.

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
      //
    }),
  };
  </script>
