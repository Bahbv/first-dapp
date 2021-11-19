<template>
  <div class="space-y-1">

    <div class="relative" v-click-outside="closeDropdown">
      <span class="inline-block w-full rounded-md shadow-sm">
        <button type="button" @click="openDropdown" aria-haspopup="listbox" aria-expanded="true" aria-labelledby="listbox-label" class="cursor-pointer relative w-full rounded-md border border-gray-300 bg-white pl-3 pr-10 py-2 text-left focus:outline-none focus:shadow-outline-green focus:border-green-400 transition ease-in-out duration-150 sm:text-sm sm:leading-5">
          <div class="flex items-center space-x-3">
            <img :src="require(`~/assets/img/network/${network.img}`)" alt="" class="flex-shrink-0 h-6 w-6 rounded-full" />
            <span class="block truncate">
               {{ network.name }}
            </span>
          </div>
          <span class="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
            <svg class="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="none" stroke="currentColor">
              <path d="M7 7l3-3 3 3m0 6l-3 3-3-3" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </span>
        </button>
      </span>

      <!-- Select popover, show/hide based on select state. -->
      <div v-show="isOpen" class="absolute mt-1 w-full rounded-md bg-white shadow-lg">
        <ul tabindex="-1" role="listbox" aria-labelledby="listbox-label" aria-activedescendant="listbox-item-3" class="max-h-56 rounded-md py-1 text-base leading-6 shadow-xs overflow-auto focus:outline-none focus:outline-none focus:shadow-outline-green focus:border-green-400 sm:text-sm sm:leading-5">

          <li tabindex="0" @click="select(n)" id="listbox-item-0" role="option" v-for="n in networks" v-bind:key="n.id" class="text-gray-900 cursor-default select-none relative py-2 pl-3 pr-9  cursor-pointer hover:text-white hover:bg-green-400 focus:outline-none focus:text-white focus:bg-green-400">
            <div class="flex items-center space-x-3">
              <img :src="require(`~/assets/img/network/${n.img}`)" alt="" class="flex-shrink-0 h-6 w-6 rounded-full" />
              <span class="block truncate" v-bind:class="{ 'font-normal' : !isSelected(n) , 'font-semibold' : isSelected(n)}">
                {{ n.name }}
              </span>
            </div>

            <!--
              Checkmark, only display for selected option.
              Highlighted: "text-white", Not Highlighted: "text-indigo-600"
            -->
            <span v-show="isSelected(n)" class="absolute inset-y-0 right-0 flex items-center pr-4">
              <svg class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
              </svg>
            </span>
          </li>

        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import ClickOutside from 'vue-click-outside'
export default {
  data() {
    return {
      'isOpen' : false
    }
  },
  methods: {
    isSelected(value) {
      return this.$store.state.networks.network === value;
    },
    closeDropdown() {
      this.isOpen = false;
    },
    openDropdown() {
      this.isOpen = true;
    },
    select(value) {
      this.isOpen = false;
      this.$store.commit('networks/setNetwork', value);
    }
  },
  // Outside click
  directives: {
    ClickOutside
  },
  // Map the state
  computed: {
    ...mapState({
      networks: state => state.networks.list,
      network: state => state.networks.network
    })
  },
}
</script>

<style scoped>
    button {
        max-width: 170px;
        min-width: 170px;
    }
</style>
