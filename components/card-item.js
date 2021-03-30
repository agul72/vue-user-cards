const template = `
  
  <div 
    class="card-container"
    @mouseover="onMouseOver"
    @mouseleave="onMouseLeave"
  >
      <div>
        <div>
            <img :src="user.picture.large">
        </div>
        <div class="gender">{{ user.gender }}</div>
      </div>
      <div class="name-container">
          <div class="user-name">
            {{ user.name.first }} {{ user.name.last }}
          </div>
      </div>  
      <div 
        class="modal"
        :class="{hidden: isModalHidden}"        
        @click="onClick"
      >
        {{ modalText }}
      </div>
      
  </div>`

export default {
    template,

    data() {
        return {
            isModalHidden: true,
            isPhoneHidden: true,

        }
    },
    name: 'CardItem',

    props: {
        user: Object,
    },

    computed: {
        modalText () {
            return this.isPhoneHidden
                ? "Click me"
                : `Phone: ${this.user.phone}`
        }
    },

    methods: {
      onClick() {
          this.isPhoneHidden = !this.isPhoneHidden;
      },

      onMouseOver() {
          this.isModalHidden = false;
      },

      onMouseLeave() {
          this.isModalHidden = true;
      }
    },
}
