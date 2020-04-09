<template>
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

      <v-row centered class="text-center grey light-gray ">
    <v-btn
      :loading="loading3"
      :disabled="loading3"
      color="blue-grey"
      class="ma-2 white--text"
      @click="removing = 'loading3'"
    >
      Remove
      <v-icon right dark>mdi-cloud-upload</v-icon>
    </v-btn>

      </v-row>
 
      </v-container>
</template>

<script>
  export default {
    name: 'nestingcp',
    props:{
        cards:{
            type:Array,
            required:true,  
        }
    },

    data: () => ({
      removing: null,
        loading3: false,
    }), 
    methods:{
    deleteCard(){
            
        return this.cards.pop();
    }
    },
    watch: {
      removing () {
        const l = this.removing
        this[l] = !this[l]

        if(this.deleteCard()){
                    
                this[l] = false
        }
       

        this.removing = null
      },
    },
    computed:{
        
    }
  }
</script>

<style scoped>
.custom-loader {
    animation: loader 1s infinite;
    display: flex;
  }
  @-moz-keyframes loader {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
  }
  @-webkit-keyframes loader {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
  }
  @-o-keyframes loader {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
  }
  @keyframes loader {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
  }
</style>
