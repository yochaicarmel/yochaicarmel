<template>
    <v-container>
        <v-card width="602px" tile flat class="pb-2 px-1 grey lighten-3 mt-4 mx-auto">
            <div v-if="currentUnit != 'שחר'"  class="mx-auto">
                <img class="mx-1 unit-logo" src="../assets/logoCompass.png"/>
                <span class="d-block mr-11 text-h3 indigo--text text--darken-4">{{ currentUnit }}</span>
            </div>
            <div v-else >
                <img class=" mr-1 unit-logo" src="../assets/logoShahar.png"/>
                <span class="d-block mr-12 text-h3 blue--text text--darken-4">{{ currentUnit }}</span>
            </div>
            <Doch1Unit/>
        </v-card>
    </v-container>    
</template>
  
<script>
import Doch1Unit from './Doch1/Doch1Unit.vue';
export default {
    name: 'UnitView',
    computed: {
        currentUnit () {
            return this.$store.state.currentUnit;
        },
        
    },
    components: {
        Doch1Unit
    }
}
</script>

<style>
.unit-logo {
    position: absolute;
    width: 40px;
    top: 8px;
}
</style>