import CardItem from './card-item.js'

const template = `
    <div class="container">
      <div v-for="user of users" >
        <app-cardItem 
            v-bind:user="user"
        >
        </app-cardItem>
      </div>
      <div 
        @click="addUser"
        class="card-container addNewButtonContainer">
        <div class="addNewButton">+</div>
      </div>
    </div>`

export default {

  template,

  components: {
    'app-cardItem': CardItem,
  },

  data () {
    return {
      users: []
    }
  },

  methods: {
    async getUser () {
      try {
        const response = await fetch('https://randomuser.me/api');
        const result = await response.json();
        return this.user = result.results[0];
      } catch (e) {
        console.log(e.message);
      }
    },
    addUser () {
      this.getUser().then(res => this.users.push(res))
    }
  },

  mounted () {
    for (let i = 0; i < 7; i++) {
      this.addUser();
    }
  }
}
