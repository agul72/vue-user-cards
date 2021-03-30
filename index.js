import Cards from './components/cards.js'

const App = {
  el: 'main',

  components: {
    'app-cards': Cards,
  },
}

window.addEventListener('load', () => {
  new Vue(App)
})
