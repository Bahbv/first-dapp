<template>
    <div class="w-full container mx-auto p-6">

		<div class="w-full flex items-center justify-between">
			<a class="flex items-center text-green-400 no-underline hover:no-underline font-bold text-2xl lg:text-4xl"  href="#">
				 DAPP
			</a>

			<div class="flex w-1/2 justify-end content-center grid grid-flow-col gap-2">
                <switchNetwork :data="networks" v-model="selectedNetwork" v-on:valueSelect="onValueSelect"></switchNetwork>
                <connectButton/>
			</div>

		</div>

	</div>
</template>

<script>
export default {
  methods: {
    onValueSelect(value) {
      this.selectedNetwork = value;
    }
  },
  data() {
    return {
      selectedNetwork: 'BSC Mainnet',
      networks: [
        'BSC Mainnet',
        'BSC Testnet',
      ]
    }
  }
}
</script>