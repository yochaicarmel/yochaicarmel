<template>
    <v-card
      class="d-flex my-5"
      color="grey darken-4"
      dark
      width="400px"
    >
      <div class="d-flex justify-self-end in-card-root">
         <v-avatar class="my-auto mr-4" right><img src="https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/avatars/da/da47e99e815aea448f5cf002766f1eeffb78e294.jpg" alt=""></v-avatar>
         <div color="grey darken-4" class="pl-16 py-3">
            <div class="d-flex flex-column pr-3">
               <p class="body-1 my-0"> <span class="grey--text text--darken-2">{{ ids.rank }}</span> {{ ids.name }}</p>
               <p class="my-0 font-weight-light subtitle-2">{{ currentSoldier }}</p>
            </div>
         </div>
         <v-divider vertical class="mr-auto"></v-divider>
         <div class="d-flex flex-column caption justify-center align-self-start font-weight-light py-4">
               <div class="mx-5 mt-1">
                   <v-icon x-small color="grey darken-2" style="transform: rotate(270deg)">mdi-calendar-account</v-icon>
                   <span> {{this.formatMongoDate(this.ids.birth) }}</span>
               </div>
               <div class="mx-5">
                   <v-icon x-small color="grey darken-2">mdi-badge-account</v-icon>
                   <span> {{ ids.profile }}</span>
               </div>
               <div class="mx-5 mb-1">
                   <v-icon x-small color="grey darken-2" style="transform: rotate(270deg)">mdi-phone</v-icon>
                   <span> {{ ids.tel }}</span>
               </div>   
         </div>
      </div>
      
          
      
       

    
      
    </v-card>
</template>

<script>
import formatDate from '../../mixins/formatDate';
import { getIDS } from '@/axiosMenager/requests.mjs';
export default {
    name: 'SoldierID',
    data () {
        return {
            id: "",
            ids: {
                name: ' משה כהן פרל',
                rank: "סרן",
                birth: '2.3.1266',
                profile: 82,
                tel: 44444444444

            }
        }
    },
    mixins: [formatDate],
    computed: {
        currentSoldier () {
            return this.$store.state.currentSoldier;
        },
    },

    watch: {
      async currentSoldier(soldier) {
        const {_id, ids} = await getIDS(soldier);
        this.id = _id
        this.ids = ids;
      }
    },

}
</script>

<style scoped>

.in-card-root {
    width: 100% !important;
}
</style>

