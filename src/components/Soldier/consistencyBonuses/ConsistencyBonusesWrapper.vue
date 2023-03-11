<template>
    <Popup alert-text="מענקי התמדה הם מענקים הניתנים במועדים שונים במהלך שירות הסדיר והקבע" title="מענקי התמדה">
        <template v-slot:activator="{on, attrs}">
            <div v-on="on" v-bind="attrs">
                <ConsistencyBonuses @bonuses="setPopupItems"></ConsistencyBonuses>
            </div>
        </template>
        <v-timeline dense>
            <template v-for="(item, key) in items">
                <v-timeline-item v-if="received(item) == 'blue'" small color="blue" :style="timelineSpace(key)">
                    today <span class="text-caption">({{formatMongoDate(item.date)}})</span>
                </v-timeline-item>
                <v-timeline-item v-else small :color="received(item)" :style="timelineSpace(key)">
                   {{formatMongoDate(item.date)}}
                </v-timeline-item>
            </template>
        </v-timeline>
    </Popup>
</template>

<script>
import ConsistencyBonuses from './ConsistencyBonuses.vue';
import Popup from '../Popup.vue';
import formatDate from '@/components/mixins/formatDate';


export default {
    name: "consistencyBonusesWrapper",
    components: {
        Popup,
        ConsistencyBonuses
    },
    data () {
        return {
            items: {}
        }
    },
    mixins: [formatDate],
    methods: {
        setPopupItems(bonuses) {
            const items = bonuses;
            const today = new Date();
            today.setHours(0,0,0,0);
            items.push({date: today.toJSON()});
            this.items = items.sort((timeLineItem,next) => this.createDate(timeLineItem) - this.createDate(next)
            );
        },
        received(item) {
            const today = new Date();
            today.setHours(0,0,0,0)
            if (today.getTime() === this.createDate(item).getTime()) return 'blue'
            return new Date() > this.createDate(item) ? 'green' : 'red';
        },
        createDate(item) {
            const date = new Date(item.date);
            date.setHours(0,0,0,0);
            return date
        },
        space(date, next) {
            const years = (next.getFullYear() - date.getFullYear()) * 12;
            const month = next.getMonth() - date.getMonth();
            return (years + month) * 2; 
        },
        timelineSpace(key) {
            if(key == this.items.length - 1) return 'padding-bottom: 8px;';
            const date = this.createDate(this.items[key]);
            const next = this.createDate(this.items[key + 1]);
            const space = this.space(date, next)
            return `padding-bottom: ${space}px;`
        },
    },
}

</script>