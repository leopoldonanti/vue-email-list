const app = new Vue({

  el: '#app',

  data:{

    email: [],


  },

  mounted(){

    for(let i=0; i<10; i++ ){
      axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
      .then(resp =>{
        console.log(resp)
        this.email.push(resp.data.response);
        console.log(this.email)
      })
      .catch(err =>{
        console.log(err)
      })
    }

  },

  methods:{

    
  }




})