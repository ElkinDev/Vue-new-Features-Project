<template>
    <div>
      <v-row  justify="center">
          <v-col cols="8" md="8">
              <v-form ref="form" v-on:submit.prevent="onSubmit" v-model="valid" :lazy-validation="lazy" >

        <slot name="inputsForm"></slot>
     
      <v-btn
        :disabled="!valid"
        color="success"
        class="mr-4"
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


    </v-form>
          </v-col>
         </v-row>
        

    </div>
</template>

<script>
  export default {
    name: 'formHelp',
     props:{
        permission:{
            type:Boolean,
            required:true,  
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
    }),
    methods:{

       
        validate () {
        if(this.$refs.form.validate()){
            alert('form filled out')

        }else{
            alert('try again')

        }

      },
      reset () {
        this.$refs.form.reset()
      },
      resetValidation () {
        this.$refs.form.resetValidation()
      },
    },
    computed: {
    fn1 () {
      return true;
    },
    created:{
    }
  },
  }
</script>
