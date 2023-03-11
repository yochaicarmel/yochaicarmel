<template>
    <v-card class=" d-flex flex-column mx-auto mt-3 outlined rounded" width="600px" rounded="lg">
        <v-card-title class="mx-auto">דוח 1</v-card-title>
        <v-divider></v-divider>
        <div class="px-3 pb-6 pt-2">
            <div class="font-weight-bold">נוכחים</div>
            <div>
                <v-progress-linear
                   v-model="presence"
                   background-opacity="0.2"
                   color="blue lighten-2"
                   height="20px"
                   top
                   rounded
                >
                   {{ this.presence }}%
                </v-progress-linear>
            </div>
        </div>
        <v-divider></v-divider>
        <div class="px-3 pb-12 pt-2 font-weight-bold">לא נוכחים</div>
    </v-card>

</template>

<script>
import { getDoch1Unit, getDoch1General } from '@/axiosMenager/requests.mjs';
import formatDate from '../mixins/formatDate';

export default {
    name: 'generalCard',
    data () {
        return {
            presence: 0,
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
    mixins: [formatDate],
}
</script>