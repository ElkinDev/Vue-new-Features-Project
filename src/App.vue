  <template>
    <v-app >
    

    <menuvbar v-bind:title="Headtitle" v-on:changeTitle="updateTitle($event)" app>
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
      <h4 v-on:click='showForm = !showForm'>
          {{Headtitle}} 
      </h4>

        <nestingcp v-show="!showForm"  v-bind:cards="cards" v-on:changeTitle="updateTitle($event)"> 
        </nestingcp> 
          <hr>
          <hr>
          <formHelp v-show="showForm">
            <div slot="inputsForm">
             <v-text-field
        v-model="name"
        :counter="10"
        :rules="nameRules"
        label="Name"
        required
      ></v-text-field>

      <v-text-field
        v-model="email"
        :rules="emailRules"
        label="E-mail"
        required
      ></v-text-field>

      <v-select
        v-model="select"
        :items="items"
        :rules="[v => !!v || 'Item is required']"
        label="Item"
        required
      ></v-select>

      <v-checkbox
        v-model="checkbox"
        :rules="[v => !!v || 'You must agree to continue!']"
        label="Do you agree?"
        required
      ></v-checkbox>

            </div>
          </formHelp> 
         
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
  import formHelp from './components/formHelper';

  export default {
    name: 'App',

    components: {
      menuvbar,
      menudrawer,
      nestingcp,
      formHelp
    },
    methods:{
      updateTitle:function(upTitle){
        this.Headtitle=upTitle
      }
    },

    data: () => ({
      valid: true,
      name: '',
      nameRules: [
        v => !!v || 'Name is required',
        v => (v && v.length <= 10) || 'Name must be less than 10 characters',
      ],
      email: '',
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
      ],
      select: null,
      items: [
        'Item 1',
        'Item 2',
        'Item 3',
        'Item 4',
      ],
      checkbox: false,
      lazy: false,
      showForm:true,
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
