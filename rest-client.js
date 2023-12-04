const vue = Vue.createApp({
    data() {
        return {
            gameInModal: {name: null},
            games: [
                /*{id: 1, name: "Wither 3", price: 29.99},
                {id: 2, name: "Cyberpunk 2077", price: 59.99},
                {id: 3, name: "Minecraft", price: 49.99}*/
            ]
        }
    }, 
    async created(){
        this.games = await (await fetch ('http://localhost:8080/games')).json();
    },
    methods: {
        getGame: async function (id){
            this.gameInModal = await(await fetch(`http://localhost:8080/games/${id}`)).json()
            let gameInfoModal = new bootstrap.Modal(document.getElementById('gameInfoModal', {}))
            gameInfoModal.show()
        }
    }
})
.mount('#app')