<template>
    <v-dialog v-model="dialog" width="auto">
        <v-card v-if="status != 'deleteing'" width="420px" class="mx-auto">
            <v-icon class="float-right mr-2 mt-2" depressed  @click="cancel">mdi-close</v-icon>
            <v-container class="fill-height" justify-center>
               <v-card-title>{{ title }}</v-card-title>
                <v-form v-model="formValid">
                    <v-row  class="" align="center">
                        <v-col cols="3">
                          <v-text-field :disabled="status == 'editing'" single-line v-model="item.name" label="שם"></v-text-field>
                        </v-col>
                        <v-col cols="3">
                          <v-text-field v-model="item.date" :rules="dateRules" label="תאריך" validate-on-blur></v-text-field>
                        </v-col>
                        <v-col cols="3">
                          <v-text-field :disabled="status == 'editing'" single-line v-model="item.hours" label="שעות" ></v-text-field>
                        </v-col>
                        <v-col cols="3">
                          <v-btn color="blue lighten-4" depressed  @click="update" >{{ applyText }}</v-btn>
                        </v-col>
                    </v-row>
                </v-form>
            </v-container>
        </v-card>
        <v-card v-else width="320px" class="mx-auto">
          <v-container class="fill-height" justify-center>
              <v-card-title style="word-break: break-word">אתה בטוח רוצה למחוק את קורס {{this.item.name}} מרשימת הקורסים של החייל?</v-card-title>
              <v-row  class="" align="center">
                   <v-col cols="3">
                     <v-btn color="blue lighten-4" depressed  @click="update" >מחק</v-btn>
                   </v-col>
                   <v-col cols="3">
                     <v-btn color="blue lighten-4" depressed  @click="cancel" >בטל</v-btn>
                   </v-col>
              </v-row>
          </v-container>
        </v-card>
    </v-dialog>
</template>
<script>
import { updateCourse, addCourse, deleteCourse } from '@/axiosMenager/requests.mjs';
export default {
    name: 'DataTablePopup',
    props: ['dialog', 'status', 'item'],
    data () {
        return {
            formValid: false,
            dateRules: [
                v => !!v || 'דרוש תאריך',
                v => /^\d{2}\/\d{2}\/\d{4}$/.test(v) || 'תאריך דרוש בפורמט dd/mm/yyyy',
            ],
        }
    },
    methods: {
        async update() {
            if (this.status == 'editing' && this.formValid) {
                const {courses} = await updateCourse(this.currentSoldier, this.item);
                this.$emit('coursesUpdate', courses);
            } else if (this.status == "adding" && this.formValid) {
                const {courses} = await addCourse(this.currentSoldier, this.item)
                this.$emit('coursesUpdate', courses);
            } else if( this.status == 'deleteing') {
                const {courses} = await deleteCourse(this.currentSoldier, this.item)
                this.$emit('coursesUpdate', courses)
            }
        
        },
        cancel() {
            this.$emit('cancel');
        }
    },
    computed: {
        title() {
            return this.status == 'editing' ? `עדכון תאריך קורס ${this.item.name}` : 'הוספת קורס חדש לרשימת הקורסים של החייל'
        },
        applyText() {
            return this.status == 'editing' ? 'עדכן' : "הוסף"
        },
        currentSoldier () {
            return this.$store.state.currentSoldier
        },
    },
}
</script>