  <template>
    <v-app >
    

    <menuvbar v-bind:title="Headtitle" v-on:changeTitle="updateTitle($event)" app>
      <!-- -->
    </menuvbar>

    <!-- Sizes your content based upon application components -->
    <v-content>
            <v-transition name="fade">

<v-progress-linear
        :active="loading"
        :indeterminate="loading"
        absolute
        top
        color="deep-purple accent-4"
      ></v-progress-linear>
        </v-transition>

      <v-spacer></v-spacer>

      <!-- Provides the application the proper gutter -->
      <v-container fluid>
        <v-row>

          <v-col cols="3">
                <menudrawer app>
              
              </menudrawer>
          </v-col>

          <v-col cols="8" md="8" flex-direction="center">
    
            <router-view>
            
            </router-view>
          </v-col>
        </v-row>

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
    methods:{
      sendto(){

      }
    },

    data: () => ({
      loading: false,

    }),
    computed(){
      this.loading = true
    },
    watch: {
      loading (val) {
        if (!val) return
        setTimeout(() => (this.loading = false), 3000)
      },
    },
  };
  </script>
