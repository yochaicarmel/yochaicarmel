<template>
    <v-container>
       <h1>הפקודים שלי</h1>
       <Doch1General/>
    </v-container>    
</template>
  
<script>  
import Doch1General from './Doch1/Doch1General.vue';
export default {
    name: 'GeneralView',
    components: {
        Doch1General
    }
}
</script>
  