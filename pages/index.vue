<template>
  <div class="h-screen pb-14 bg-right bg-cover bg-home">

	  <mainHeader></mainHeader>

	<!--Main-->
	<div class="container pt-24 md:pt-48 px-6 mx-auto flex flex-wrap flex-col md:flex-row items-center">

		<!--Left Col-->
		<div class="flex flex-col w-full xl:w-2/5 justify-center lg:items-start overflow-y-hidden">
			<h1 class="my-4 text-3xl md:text-5xl text-green-700 font-bold leading-tight text-center md:text-left slide-in-bottom-h1">First DAPP that connects to your wallet!</h1>
			<p class="leading-normal text-base md:text-2xl mb-8 text-center md:text-left slide-in-bottom-subtitle">For now its just show you your BNB balance.</p>

			<p class="text-green-500 font-bold pb-8 lg:pb-3 text-center md:text-left fade-in">Your BNB balance:</p>
			<div class="flex w-full justify-center md:justify-start pb-3 lg:pb-0 fade-in">
				kek
			</div>

		</div>

		<!--Right Col-->
		<div class="w-full xl:w-3/5 py-6 overflow-y-hidden">
			<img class="w-5/6 mx-auto lg:mr-0 slide-in-bottom" src="~/assets/svg/devices.svg">
		</div>

		<!--Footer-->
		<div class="w-full pt-16 pb-6 text-sm text-center md:text-left fade-in">
			<a class="text-gray-500 no-underline hover:no-underline" href="#">&copy; BahbV 2021</a>
		</div>

	</div>


</div>

</template>

<script>
export default {
  head: {
    title: 'Web3 Connect button',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'Connect with your web3 Wallet'
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  }
}
</script>


<style>
.-bg-home {
  background-image:url('~/assets/svg/bg.svg');
}
</style>
