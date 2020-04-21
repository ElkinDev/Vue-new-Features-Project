<template>
  <v-row justify="center">

 <v-container fluid>
 
    <v-data-iterator
      :items="items"
      :items-per-page.sync="itemsPerPage"
      :page="page"
      :search="search"
      :sort-by="sortBy.toLowerCase()"
      :sort-desc="sortDesc"
      hide-default-footer
    >
      <template v-slot:header>
        <v-toolbar
          Light
          color=""
          class="mb-1"
        >
          <v-text-field
            v-model="search"
            clearable
            flat
            hide-details
            label="Search"
          ></v-text-field>
          <template>
            <v-spacer></v-spacer>
            <v-select
              v-model="sortBy"
              flat
              hide-details
              :items="keys"
              label="Sort by"
            ></v-select>
      
          </template>
        </v-toolbar>
         <v-col cols="12" md="12" >
        <v-chip-group
          v-model="filters"
          column
          multiple
              >
            <v-chip filter outlined>All</v-chip>
            <v-chip filter outlined>Elevator</v-chip>
            <v-chip filter outlined>Washer / Dryer</v-chip>
            <v-chip filter outlined>Fireplace</v-chip>
            <v-chip filter outlined>Wheelchair access</v-chip>
            <v-chip filter outlined>Dogs ok</v-chip>
            <v-chip filter outlined>Cats ok</v-chip>
        </v-chip-group>
    </v-col>

      </template>

      <template v-slot:default="props">
        <v-row>
          <v-col
            v-for="item in props.items"
            :key="item.name"
            cols="12"
            sm="6"
            md="4"
            lg="3"
          >
            <v-card>
              <v-card-title class="subheading font-weight-bold">{{ item.name }}</v-card-title>

              <v-divider></v-divider>

              <v-list dense>
                <v-list-item
                  v-for="(key, index) in filteredKeys"
                  :key="index"
                >
                  <v-list-item-content :class="{ 'blue--text': sortBy === key }">{{ key }}:</v-list-item-content>
                  <v-list-item-content class="align-end" :class="{ 'blue--text': sortBy === key }">{{ item[key.toLowerCase()] }}</v-list-item-content>
                </v-list-item>
              </v-list>
            </v-card>
          </v-col>
        </v-row>
      </template>

      <template v-slot:footer>
        <v-row class="mt-2" align="center" justify="center">
          <span class="grey--text">Items per page</span>
          <v-menu offset-y>
            <template v-slot:activator="{ on }">
              <v-btn
                dark
                text
                color="primary"
                class="ml-2"
                v-on="on"
              >
                {{ itemsPerPage }}
                <v-icon>mdi-chevron-down</v-icon>
              </v-btn>
            </template>
            <v-list>
              <v-list-item
                v-for="(number, index) in itemsPerPageArray"
                :key="index"
                @click="updateItemsPerPage(number)"
              >
                <v-list-item-title>{{ number }}</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>

          <v-spacer></v-spacer>

          <span
            class="mr-4
            grey--text"
          >
            Page {{ page }} of {{ numberOfPages }}
          </span>
          <v-btn
            fab
            dark
            color="blue darken-3"
            class="mr-1"
            @click="formerPage"
          >
            <v-icon>mdi-chevron-left</v-icon>
          </v-btn>
          <v-btn
            fab
            dark
            color="blue darken-3"
            class="ml-1"
            @click="nextPage"
          >
            <v-icon>mdi-chevron-right</v-icon>
          </v-btn>
        </v-row>
      </template>
    </v-data-iterator>
  </v-container>



    <v-col cols="4" md="4" >
      <v-card class="mx-auto" max-width="344">
        <v-list-item>
          <v-list-item-avatar color="grey"></v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title class="title">Event 1</v-list-item-title>
            <v-list-item-subtitle>by Kurt Wagner</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>

        <v-img
          src="https://cdn.vuetifyjs.com/images/cards/mountain.jpg"
          height="80"
        ></v-img>

        <v-card-text>
          Visit ten places on our planet.
        </v-card-text>

        <v-card-actions>
          <v-btn
            text
            color="deep-blue accent-2"
          >
            Options
          </v-btn>
         
          <v-spacer></v-spacer>
          <v-btn icon>
            <v-icon>mdi-delete</v-icon>
          </v-btn>
          <v-btn icon>
            <v-icon>mdi-arrow-right</v-icon>
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>

  export default {
    name: 'eventList',
  data () {
    return {
          filters: [1, 4],



          itemsPerPageArray: [4, 8, 12],
        search: '',
        filter: {},
        sortDesc: false,
        page: 1,
        itemsPerPage: 4,
        sortBy: 'name',
        keys: [
          'Name',
          'Calories',
        ],
        items: [
          {
            name: 'Frozen Yogurt',
            calories: 159,

          },
          {
            name: 'Ice cream sandwich',
            calories: 237,

          },
          {
            name: 'Eclair',
            calories: 262,

          },
          {
            name: 'Cupcake',
            calories: 305,

          },
          {
            name: 'Gingerbread',
            calories: 356,

          },
          {
            name: 'Jelly bean',
            calories: 375,

          },
          {
            name: 'Lollipop',
            calories: 392,
      
          },
          {
            name: 'Honeycomb',
            calories: 408,
            
          },
          {
            name: 'Donut',
            calories: 452,
        
          },
          {
            name: 'KitKat',
            calories: 518,
            
          },
        ],

    }
  },
    computed: {
      numberOfPages () {
        return Math.ceil(this.items.length / this.itemsPerPage)
      },
      filteredKeys () {
        return this.keys.filter(key => key !== `Name`)
      },
    },
    methods: {
      nextPage () {
        if (this.page + 1 <= this.numberOfPages) this.page += 1
      },
      formerPage () {
        if (this.page - 1 >= 1) this.page -= 1
      },
      updateItemsPerPage (number) {
        this.itemsPerPage = number
      },
    },
  }
</script>
