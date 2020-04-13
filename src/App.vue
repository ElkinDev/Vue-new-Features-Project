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
        <h4  v-if="!enableMovieS" v-on:click='showForm = !showForm'>
            {{Headtitle}} 
        </h4>
          
          <nestingcp v-if="!showForm && !enableMovieS"  v-bind:cards="cards" v-on:changeTitle="updateTitle($event)"> 
          </nestingcp> 
 

          <v-row >
            <v-col cols="6" md="6"  v-if="enableMovieS">
              <v-form ref="form"  v-model="valid" :lazy-validation="lazy" >
              <v-row >
                
                  <v-col cols="12" sm="12" md="12" >
                    <v-text-field
                      label="Event"
                      outlined
                      dense
                      v-model="Eventname"
                      :rules="nameRules"
                        required

                    ></v-text-field>
                  </v-col>
                  <v-col cols="6" sm="12" md="6">
                    <v-text-field
                      label="Speaker"
                      outlined
                      dense
                      v-model="speaker"
                      :rules="speakerRules"

                        required

                    ></v-text-field>
                  </v-col>
                  <v-col cols="6" sm="12" md="6">
                    <v-text-field
                      label="Supported by"
                      outlined
                      dense
                      v-model="support"
                      required
                      :rules="supportrRules"

                    ></v-text-field>
                  </v-col>
                  <v-col cols="6" sm="12" md="6">
                      <v-text-field
                        label="Category"
                        outlined
                        dense
                        v-model="category"
                        :rules="supportrRules"

                        required
                      ></v-text-field>
                  </v-col>

                  <v-col cols="6" sm="12" md="6">
                    <v-file-input 
                      accept="image/png, image/jpeg, image/bmp"
                      label="Main image"
                      outlined
                      counter               
                      prepend-icon="mdi-camera"
                      :rules="imagerules"
                      @change="processFile"
                      dense></v-file-input>

                  </v-col>

                <v-col cols="12"  sm="12" md="12">
                      <v-select  v-model="keyword"   @change="onChange()"  :items="keywords" chips  label="Keywords" multiple outlined></v-select>
                    </v-col>

                <v-col cols="12" sm="12">
                  <v-textarea
                    label="Description "
                    outlined
                    rows="2 "
                    shaped
                    v-model="description"
                    :rules="descriptionRules"
                    required

                  ></v-textarea>
                </v-col>

                  <v-checkbox
        v-model="checkbox"
        :rules="[v => !!v || 'You must agree to continue!']"
        label=" Do u agree?"
        required
      ></v-checkbox>

         <v-btn
        :disabled="!valid"
        color="success"
        class="mr-4 "
        @click="validate"
      >
        Submit
      </v-btn>

      <v-btn
        color="error"
        class="mr-4"
        @click="reset"
      >
        Reset Form
      </v-btn>

            </v-row>

            </v-form>
         

          </v-col>
          <v-col cols="6" md="6"  v-if="enableMovieS">

          <v-card
    :loading="loading"
    class="mx-auto my-1"
    max-width="374"
  >
    <v-img
      height="150"
      v-bind:lazy-src="image" v-bind:src="image"
      aspect-ratio="1"
    ></v-img>

    <v-card-title> {{ Eventname? Eventname:"Event's name"}}</v-card-title>

    <v-card-text>
      <v-row
        align="center"
        class="mx-0"
      >
        <v-rating
          :value="0"
          color="amber"
          dense
          half-increments
          readonly
          size="14"
        ></v-rating>

        <div class="grey--text ml-4">0 (0)</div>
      </v-row>

      <div class="my-0 subtitle-1">
        {{ speaker? speaker:"speaker"}} / by {{ support ? support:' Support'}}
      </div>

        <div class="my-3 ">
        {{category}} 
      </div>

      <div> {{ description ? description:'Fugiat cupidatat voluptate duis reprehenderit excepteur deserunt.'}} </div>
    </v-card-text>

    <v-divider class="mx-4"></v-divider>

    <v-card-title   class="mt-0">Keywords</v-card-title>

    <v-card-text class="mt-0">
      <v-chip-group
        v-model="selection"
        active-class="deep-purple accent-4 white--text"
        column
      >
        <v-chip v-for="chip in keyword" :key="chip">
        
        {{chip}}
        
        </v-chip>

      </v-chip-group>
    </v-card-text>

    <v-card-actions>
      <v-btn
        color="deep-primary  lighten-2"
        text
      >
        Submit event
      </v-btn>
    </v-card-actions>
  </v-card>
          </v-col>

          </v-row>

          
         
         
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
    methods:{
      updateTitle:function(upTitle){
        this.Headtitle=upTitle
      },
         validate () {
        if(this.$refs.form.validate()){
            alert('form filled out')

        }else{
          console.log(this.image)
        }

      },
      reset () {
        this.$refs.form.reset()
      },
      resetValidation () {
        this.$refs.form.resetValidation()
      },
      onChange() {
        console.log(this.keyword)
        },
        processFile(event) {
          this.loading=true
          if(event){
          console.log(event)

            if(event.size<2000000){
              let reader = new FileReader();
              reader.readAsDataURL(event);
              reader.onload=e=>{
                this.image= e.target.result;
                this.loading=false

              }
            }else{
              this.image="https://media.gettyimages.com/photos/full-frame-shot-of-gray-background-picture-id969661112?s=2048x2048"
            this.loading=false

            }
          }else{
            this.loading=false
              this.image="https://media.gettyimages.com/photos/full-frame-shot-of-gray-background-picture-id969661112?s=2048x2048"

          }
          
          
        }

    },

    data: () => ({
      selection:true,
      someData:null,
      showForm:true,
      loading:false,
      checkbox:true,
      image:"https://media.gettyimages.com/photos/full-frame-shot-of-gray-background-picture-id969661112?s=2048x2048",
      showsize:true,
      keyword:[],
      valid: true,
      enableMovieS:true,
      Eventname: '',
      speaker: '',
      support: '',
      category: '',
      description: '',
      name: '',
      nameRules: [
        v => !!v || 'required',
        v => (v && v.length <= 10) || ' must be less than 10 characters',
      ],
      speakerRules: [
        v => !!v || 'required',
      ],
       supportrRules: [
        v => !!v || 'required',
        v => (v && v.length <= 30) || ' must be less than 30 characters',
      ],
      categoryrRules: [
        v => !!v || 'required',
        v => (v && v.length <= 10) || ' must be less than 10 characters',
      ],
       descriptionRules: [
        v => !!v || 'required',
        v => (v && v.length >= 20) || ' must be less than 20 characters',
      ],
      imagerules: [
      value => !value || value.size < 2000000 || 'Footage size should be less than 2 MB!',
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
      lazy: true,
      Headtitle:'Movie Rating Dashboard ',

      keywords: ["Cine", "Drama", "Thiller", "Comedy"],
      valuek: ["Cine", "Drama", "Thiller", "Comedy"],
    }),
  };
  </script>
