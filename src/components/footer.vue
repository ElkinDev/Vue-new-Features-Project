<template>
  <div>
   <v-footer
      gray
      padless
    >
      <v-card
        class="flex"
        flat
        tile
      >
      
  
        <v-card-text class="py-2 dark--text text-center">
          {{ new Date().getFullYear() }} — <strong>Vuetify</strong>
        </v-card-text>
      </v-card>
    </v-footer> 
  </div>
</template>

<script>
  export default {
    name: 'footerbar',
  data () {
    return{
        icons: [
      'fab fa-facebook',
      'fab fa-twitter',
      'fab fa-google-plus',
      'fab fa-linkedin',
      'fab fa-instagram',
    ],
    }
  }
  }
</script>
