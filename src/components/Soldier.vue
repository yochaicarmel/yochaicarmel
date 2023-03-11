<template>
    <v-container>
        <v-row justify="center">   
          <SoldierID/>
        </v-row>     
        <v-row class="d-flex justify-space-around">
           <ConsistencyBonusesWrapper/>
            <Gmosh/>
        </v-row>
    </v-container>
</template>
<script>
import SoldierID from './Soldier/SoldierID/SoldierID.vue';
import ConsistencyBonuses from './Soldier/consistencyBonuses/ConsistencyBonuses.vue';
import Gmosh from './Soldier/Gmush/Gmosh.vue';
import Popup from './Soldier/Popup.vue'
import ConsistencyBonusesWrapper from './Soldier/consistencyBonuses/ConsistencyBonusesWrapper.vue';

export default {
    name: 'SoldierView',
    components: {
        SoldierID,
        ConsistencyBonuses,
        ConsistencyBonusesWrapper,
        Gmosh,
        Popup
    }
   
}
</script>