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
      
    }),
    computed:{

    }
  }
</script>
