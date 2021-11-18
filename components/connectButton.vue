<template>
    <button @click="buttonClicked" class="cursor-pointer relative w-full rounded-md border border-gray-300 bg-white pl-3 pr-3 py-2 text-left focus:outline-none focus:shadow-outline-blue focus:border-green-400 transition sm:text-sm sm:leading-5 text-center">
        {{isConnected ? 'Disconnect' : 'Connect'}}
    </button>
</template>

<script>
export default {
  data() {
    return {
      'isConnected' : false
    }
  },
  methods: {
    buttonClicked() {
        if (this.isConnected == false){
            this.isConnected = true;
        } else {
            this.isConnected = false;
        }
    }
  }
}
</script>

<style scoped>
    button {
        min-width: 110px;
        max-width: 110px;
    }
</style>