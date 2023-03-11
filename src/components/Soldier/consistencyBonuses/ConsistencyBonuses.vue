<template>
    <v-card tile flat class="pa-2 grey lighten-3">
        <v-card
          outlined
          rounded="lg"
          width="230px"
          height="190px"
          elevation="1"
        >
          <h3 class="text-center">מענקי התמדה</h3>
          <v-divider></v-divider>
          <v-carousel prev-icon="mdi-menu-left" next-icon="mdi-menu-right" height="160px" hide-delimiters continuous v-model="bonusNum">
            <v-carousel-item v-for="(bonus, key) in bonuses" :key="key">
                  <v-row no-gutters no-wrap justify="center" class="text-center" style="height:100%;" >
                      <div class="mt-auto carusel-item-wrapper" >
                          <div class=" d-flex consis-icon rounded-circle mx-auto">
                              <v-icon class="mx-auto">mdi-account-cash-outline</v-icon>
                              <v-avatar v-if="received(bonus)" class="consis-float-avatar" color="green darken-1" size="22">
                                  <v-icon x-small color="white">mdi-check</v-icon>
                              </v-avatar>
                              <v-avatar v-else class="consis-float-avatar" color="orange darken-1" size="22">
                                  <v-icon x-small color="white">mdi-alert</v-icon>
                                </v-avatar>
                          </div>
                          <div class="body-1 font-weight-bold text-center">מענק {{ bonus.number }}</div>
                          <div class="text-center text-caption font-weight-bold">{{ formatMongoDate(bonus.date) }}</div>
                          <div v-if="received(bonus)" class="grey lighten-2 ">
                            <span class=" d-block body-1 font-weight-bold py-2 mt-1 px-2 card-footer">מענק התקבל</span>
                          </div>
                          <div v-else class="grey lighten-2 text-caption font-weight-bold py-1 mt-1 px-2 card-footer">יש לחתום הערכת שירות על מנת לקבל מענק זה</div>
                      </div>
                  </v-row>
                
            </v-carousel-item>
          </v-carousel>
        </v-card>
    </v-card>
</template>
<script>
import formatDate from '../../mixins/formatDate';
import { getBonuses } from '@/axiosMenager/requests.mjs';
export default {
    name: 'ConsistencyBonuses',
    data () {
        return {
            bonusNum: 0,
            bonuses: [{}]
        }
    },
    methods: {
        received(bonus) {
            return new Date() > new Date(bonus.date)
        },
    },
    mixins: [formatDate],
    computed: {
        currentSoldier () {
            return this.$store.state.currentSoldier;
        },
    },

    watch: {
      async currentSoldier(soldier) {
        const {bonuses} = await getBonuses(soldier);
        this.bonuses = bonuses;
        this.$emit('bonuses', bonuses);
      },
     
    },
}
</script>
<style scoped >
.consis-icon {
    border:solid;
    border-color: #AAB7B8;
    width: 50px;
    height: 50px;
}

.consis-float-avatar {
    position: absolute;
    bottom: 78px;
    right: 128px;
}

.carusel-item-wrapper {
    width: 100%;
}

.card-footer {
    line-height: 0.7rem !important;
    height: 30px;
}

</style>