<template>
    <v-card class=" d-flex flex-column mx-auto mt-3 outlined rounded" width="600px" rounded="lg">
        <div class="mx-auto font-weight-bold body-2">נוכחות | יום {{todayDay,}} {{ todayDate }}</div>
        <v-divider></v-divider>
        <div class="px-4 pb-6 pt-2">
            <div class="font-weight-bold">נוכחים</div>
            <div class="indigo--text text--accent-4 text-h6">{{ this.atUnit }}</div>
            <div>
                <v-progress-linear
                   v-model="presence"
                   background-opacity="0.2"
                   color="blue lighten-2"
                   height="20px"
                   top
                   rounded
                >
                   {{ presence }}%
                </v-progress-linear>
            </div>
            <div class="float-left subtitle-1 indigo--text text--darken-4">{{ this.unitTotal }}</div>

        </div>
        <v-divider></v-divider>
        <div class="px-4 pb-1 pt-2 font-weight-bold">לא נוכחים</div>
        <v-list class="d-flex">
            <v-list-item  v-for="(status, index) in this.statuses" :key="index">
                <v-list-item-content :class="{'text--secondary': unknownStatus(status)}">
                    <v-list-item-title class="text-center weight-bold text-h6  indigo--text text--darken-4" v-text="status.value"></v-list-item-title>
                    <v-list-item-subtitle class="text-center" v-text="status.name"></v-list-item-subtitle>
                </v-list-item-content>
                <v-divider v-if="index < (statuses.length - 1)" vertical inset></v-divider>
            </v-list-item>
        </v-list>
          
       
    </v-card>


</template>

<script>
import { getDoch1Unit, getDoch1General } from '@/axiosMenager/requests.mjs';
import formatDate from '../mixins/formatDate';

export default {
    name: 'generalCard',
    data () {
        return {
            statuses: [
                {}
            ]
        }
    },
    created () {
        getDoch1General().then(({atBaseSoldiers, totalSoldiers}) => {
            this.presence = parseInt(atBaseSoldiers / totalSoldiers * 100);
        })
    },
    methods: {
        unknownStatus(status) {
            return status.name == "טרם הוזן";
        }
    },
    mixins: [formatDate],
    computed: {
        currentUnit () {
            return this.$store.state.currentUnit;
        },
        atUnit () {
            const atUnit = this.statuses.find(status => status.name == "ביחידה");
            return typeof atUnit != "undefined" && "value" in atUnit ? atUnit.value : 2;
        },
        unitTotal () {
            return this.statuses.reduce( 
                       (totalSoldiers, currentStatus) => totalSoldiers + currentStatus.value,
                       this.statuses[0].value
                    );
        },
        presence () {
            return parseInt(this.atUnit / this.unitTotal * 100);
        },
        todayDate () {
            return this.formatMongoDate(new Date())
        },
        todayDay () {
            const daysChars = ["א", "ב", "'ג", "'ד", "ה", "ו", "ש"];
            const today = new Date();
            return daysChars[today.getDay()];
        }
        
    },

    watch: {
      async currentUnit(unit) {
        const {soldiers} = await getDoch1Unit(unit);
        this.statuses = soldiers;
      }
    },
}
</script>