<template>
  <div>
<v-navigation-drawer
          v-model="drawer"
          :color="color"
          :expand-on-hover="expandOnHover"
          :mini-variant="miniVariant"
          :right="right"
          :src="bg"
          absolute
          dark
         :permanent="permanent"
        >
          <v-list
            dense
            nav
            class="py-0"
          >
            <v-list-item two-line :class="miniVariant && 'px-0'">
              <v-list-item-avatar>
                <img src="https://elkinmendoza.com/img/macBack.04c884db.jpg">
              </v-list-item-avatar>
  
              <v-list-item-content>
                <v-list-item-title>Application</v-list-item-title>
                <v-list-item-subtitle>Subtext</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
  
            <v-divider></v-divider>
            
            <v-list-item
              v-for="item in items"
              :key="item.title"
              link
              :to="`/${item.link}`"
            >
              <v-list-item-icon>
                <v-icon>{{ item.icon }}</v-icon>
              </v-list-item-icon>
  
              <v-list-item-content>
                <v-list-item-title>{{ item.title }}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-navigation-drawer>
  </div>
</template>

<script>

  export default {
    name: 'menudrawer',
  data () {
    return {
      drawer: true,
      items: [
        { title: 'Dashboard', icon: 'mdi-view-dashboard', link:'' },
        { title: 'Events', icon: 'mdi-movie', link:'events' },
        { title: 'Events', icon: 'mdi-event', link:'newEvent' },
        
        { title: 'Calendar', icon: 'mdi-calendar' ,link:'calendar' },
        { title: 'Rating List', icon: 'mdi-star' ,link:'ratingList' },
        { title: 'users', icon: 'mdi-account-circle-outline' ,link:'user' },
        { title: 'Photos', icon: 'mdi-image', link:'photos' },
        { title: 'Variables', icon: 'mdi-help-box',link:'variables' },
        { title: 'Elements Guide', icon: 'mdi-help-box', link:'elements' },
      ],
      color: 'primary',
      colors: [
        'primary',
        'blue',
        'success',
        'red',
        'teal',
      ],
      miniVariant: true,
      expandOnHover: true,
      background: true,
      floating:true,
      right: false,
      permanent:true,

    }
  },
  computed: {
    bg () {
      return this.background ? 'https://cdn.vuetifyjs.com/images/backgrounds/bg-2.jpg' : undefined
    },
  },
  }
</script>
