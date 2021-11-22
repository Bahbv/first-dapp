<template>
    <button @click="buttonClicked" class="cursor-pointer relative w-full rounded-md border border-gray-300 bg-white pl-3 pr-3 py-2 text-left focus:outline-none focus:shadow-outline-blue focus:border-green-400 transition sm:text-sm sm:leading-5 text-center">
        {{isConnected ? 'Disconnect' : 'Connect'}}
    </button>
</template>

<script>
import { mapState } from 'vuex'
export default {
  methods: {
    buttonClicked() {
        if ( this.$store.state.connection.connected == false){
            // TODO Connect here..
            this.$store.commit('connection/isConnected', true);
        } else {
           // TODO Disconnect here..
           this.$store.commit('connection/isConnected', false);
        }
    }
  },
  // Map the state
  computed: {
    ...mapState({
      isConnected: state => state.connection.connected,
    })
  },
}
</script>

<style scoped>
    button {
        min-width: 110px;
        max-width: 110px;
    }
</style>
