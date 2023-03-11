<template>
  <General/>
</template>
  
<script>
import General from '@/components/General.vue'; 
export default {
    name: 'general',
    components: {
        General,
    },
    created () {
        /// איתחול הסטור בערך שרירותי לשימוש כוולידציה
        this.$store.commit("setCurrentSoldier", 1111 )
    }
}
</script>
  