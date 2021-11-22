<template>
    <div class="w-full container mx-auto p-6">

		<div class="w-full flex items-center justify-between">
			<a class="flex items-center text-green-400 no-underline hover:no-underline font-bold text-2xl lg:text-4xl"  href="#">
				 DAPP
			</a>

			<div class="flex w-1/2 justify-end content-center grid grid-flow-col gap-2">
                <switchNetwork/>
                <connectButton/>
			</div>

		</div>

	</div>
</template>

<script>
export default {
  // Fill the networks
  // FIXME:Shouldt be in the component i think..?
  async fetch() {
    const networkList = [
      {id: 0, name:'BSC Mainnet', img:'bsc-mainnet.png'},
      {id: 1, name:'BSC Testnet', img:'bsc-testnet.png'}
    ];
    this.$store.commit('networks/setNetwork', networkList[0]);
    this.$store.commit('networks/setList', networkList);
  }
}
</script>
