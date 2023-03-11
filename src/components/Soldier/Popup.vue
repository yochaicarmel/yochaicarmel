<template>
    <v-dialog class="overflow-y-visible" width="auto" height="auto" overlay-opacity="0.1" v-model="active">
        <template v-slot:activator="{on, attrs}">
            <slot v-bind:on="on" v-bind:attrs="attrs" name="activator"></slot>   
        </template>
        <v-card rounded="lg" class="mx-auto" min-width="350px" min-height="230px">
            <div class="px-2 py-1">
                <v-tooltip bottom nudge-left="20px" close-delay=13>
                    <template v-slot:activator="{on, attrs}">
                        <v-icon v-on="on" v-bind="attrs" small class="float-right my-1">mdi-alert-circle-outline</v-icon>
                    </template>
                    {{ this.alertText }}
                </v-tooltip>
                <v-icon @click="active = false" small class="float-left my-1" >mdi-close</v-icon>
                <div class="text-center">{{ this.title }}</div>
            </div>
            <v-divider></v-divider>
            <slot></slot>
        </v-card>
    </v-dialog>
</template>

<script>
export default {
    name: 'popup',
    data () {
        return {
            active: false,
        }
    },
    props: ['alertText', 'title']
}
</script>