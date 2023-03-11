<template>
      <v-card tile flat class="pa-2 grey lighten-3" >
        <v-card v-if="katzin"
          outlined
          rounded="lg"
          width="230px"
          height="190px"
          elevation="1"
          class="fill-height"
        >  
          
          <h3 class="text-center">גמו"ש</h3>
          <v-divider></v-divider>
          <Popup alert-text='גמול השתלמות הוא תוספת למשכורת שחייל מקבל במידה והשלים כמות מסוימת של שעות השתלמות העשרתיות ומקצועיות' title='גמו"ש א'>
            <template v-slot:activator="{on, attrs}">
              <div v-bind="attrs" v-on="on">
                <v-row v-if="getGmush[0]" justify="space-between" class="my-2 mx-2 px-1 py-0">
                  <div>
                    <div class="body-2">{{ gmushim[0].name }}</div>
                    <div class="text-caption font-weight-bold">{{ formatMongoDate(gmushim[0].startDate) }}</div>
                  </div>
                  <div>
                    <v-icon color="green" dense>mdi-check</v-icon>
                    <div class="text-caption">מקבל</div>
                  </div>
                </v-row>
                <v-row v-else justify="space-between" class="my-2 mx-2 px-1 py-3">
                  <div>
                    <div class="body-2">{{ gmushim[0].name }}</div>
                  </div>
                  <div>
                    <div class="text-caption font-weight-bold">השלים {{ gmushim[0].percentages }}%</div>
                  </div>
                </v-row>
              </div>
            </template>
            <div class="popup-center-content">
              <div v-if="getGmush[0]" class="text-center">
                <v-icon color="purpule" x-large class="py-3">mdi-party-popper</v-icon>
                <div class="mb-5"> מקבל גמו"ש א החל מ {{ formatMongoDate(gmushim[0].startDate) }}</div>
              </div>
              <div v-else>
                <v-data-table 
                  :headers="headers"
                  :items="courses"
                  hide-default-footer
                >
                  <template v-slot:top>
                    <div class="text-center text-h5">קורסים</div>
                    <v-data-footer disable-pagination="true">
                    </v-data-footer>
                  </template>
                  <template v-slot:item="{item}">
                    <tr>
                      <td>{{ item.name }}</td>
                      <td>{{ formatDate( item.date) }}</td>
                      <td>{{ item.hours }}</td>
                      <td>
                        <v-icon small @click="openDialog(item, 'editing')">mdi-pencil</v-icon>
                        <v-icon small @click="openDialog(item, 'deleteing')">mdi-delete</v-icon>
                      </td>
                    </tr>
                  </template>
                  <template v-slot:foot>
                    <v-btn small color="blue lighten-4 mb-2" depressed  @click="openDialog(initiateCourse(), 'adding')" >הוסף קורס</v-btn>
                  </template>
                </v-data-table>
              </div>
            </div>
          </Popup>
          <v-divider></v-divider>
          <Popup alert-text='גמול השתלמות הוא תוספת למשכורת שחייל מקבל במידה והשלים כמות מסוימת של שעות השתלמות העשרתיות ומקצועיות' title='גמו"ש ב'>
            <template v-slot:activator="{on, attrs}">
              <div v-bind="attrs" v-on="on">
                <v-row v-if="getGmush[1]" justify="space-between" class="my-2 mx-2 px-1 py-0">
                  <div>
                    <div class="body-2">{{ gmushim[1].name }}</div>
                    <div class="text-caption font-weight-bold">{{formatMongoDate(gmushim[1].startDate) }}</div>
                  </div>
                  <div>
                    <v-icon color="green" dense>mdi-check</v-icon>
                    <div class="text-caption">מקבל</div>
                  </div>
                </v-row>
                <v-row v-else justify="space-between" class="my-2 mx-2 px-1 py-3">
                  <div>
                    <div class="body-2">{{ gmushim[1].name }}</div>
                  </div>
                  <div>
                    <div class="text-caption font-weight-bold">{{ gmushim[1].percentages }}%</div>
                  </div>
                </v-row>
              </div>
            </template>
            <div class="popup-center-content">
              <div v-if="getGmush[1]" class="text-center">
                <v-icon color="purpule" x-large class="py-3">mdi-party-popper</v-icon>
                <div class="mb-5"> מקבל גמו"ש א החל מ {{ formatMongoDate(gmushim[1].startDate) }}</div>
              </div>
              <div v-else>
                <v-data-table 
                  :headers="headers"
                  :items="courses"
                  hide-default-footer
                >
                  <template v-slot:top>
                    <div class="text-center text-h5">קורסים</div>
                    <v-data-footer disable-pagination="true">
                    </v-data-footer>
                  </template>
                  <template v-slot:item="{item}">
                    <tr>
                      <td>{{ item.name }}</td>
                      <td>{{ formatDate( item.date) }}</td>
                      <td>{{ item.hours }}</td>
                      <td>
                        <v-icon small @click="openDialog(item, 'editing')">mdi-pencil</v-icon>
                        <v-icon small @click="openDialog(item, 'deleteing')">mdi-delete</v-icon>
                      </td>
                    </tr>
                  </template>
                  <template v-slot:foot>
                    <v-btn small color="blue lighten-4 mb-2" depressed  @click="openDialog(initiateCourse(), 'adding')" >הוסף קורס</v-btn>
                  </template>
                </v-data-table>
              </div>
            </div>
          </Popup>
          <h2 class=" text-center">עבור קצין</h2> 
        </v-card>
        <v-card 
          v-else
          outlined
          rounded="lg"
          width="230px"
          height="190px"
          elevation="1"
          class="fill-height text-center"
        >  
          <h3 class="my-2">גמו"ש</h3>
          <v-divider></v-divider>
          <Popup alert-text='גמול השתלמות הוא תוספת למשכורת שחייל מקבל במידה והשלים כמות מסוימת של שעות השתלמות העשרתיות ומקצועיות' title='גמו"ש א'>
            <template v-slot:activator="{on, attrs}">
              <div v-bind="attrs" v-on="on">
                <div class="my-3">
                  <div class="body-1">{{ gmushim[0].name }}</div>
                  <div v-if="getGmush[0]">
                    <div class="text-caption font-weight-bold">{{ formatMongoDate(gmushim[0].startDate) }}</div>
                    <v-icon color="green" dense>mdi-check</v-icon>
                    <div class="text-caption">מקבל</div>
                  </div>
                  <div v-else>
                    <div class="body-2 my-2 font-weight-bold">{{ gmushim[0].percentages }}%</div>
                    <v-icon color="orange" >mdi-progress-alert</v-icon>
                  </div>
                </div>
              </div>
            </template>
            <div class="popup-center-content">
              <div v-if="getGmush[0]" class="text-center">
                <v-icon color="purpule" x-large class="py-3">mdi-party-popper</v-icon>
                <div class="mb-5"> מקבל גמו"ש א החל מ {{ formatMongoDate(gmushim[0].startDate) }}</div>
              </div>
              <div v-else>
                <v-data-table 
                  :headers="headers"
                  :items="courses"
                  hide-default-footer
                >
                  <template v-slot:top>
                    <div class="text-center text-h5">קורסים</div>
                    <v-data-footer disable-pagination="true">
                    </v-data-footer>
                  </template>
                  <template v-slot:item="{item}">
                    <tr>
                      <td>{{ item.name }}</td>
                      <td>{{ formatDate( item.date) }}</td>
                      <td>{{ item.hours }}</td>
                      <td>
                        <v-icon small @click="openDialog(item, 'editing')">mdi-pencil</v-icon>
                        <v-icon small @click="openDialog(item, 'deleteing')">mdi-delete</v-icon>
                      </td>
                    </tr>
                  </template>
                  <template v-slot:foot>
                    <v-btn small color="blue lighten-4 mb-2" depressed  @click="openDialog(initiateCourse(), 'adding')" >הוסף קורס</v-btn>
                  </template>
                </v-data-table>
              </div>
            </div>
          </Popup>
          <h2 class="text-center">עבור נגד</h2> 
        </v-card>
        <DataTablePopup :dialog="dialog" :item="focusedCourse" :status="currentStatus"  @coursesUpdate="updateCourses" @cancel="dialog = false" ></DataTablePopup>
      </v-card>
</template>


<script>
import formatDate from '../../mixins/formatDate'
import { getGmushim, getCourses } from '@/axiosMenager/requests.mjs'
import Popup from '../Popup.vue'
import DataTablePopup from './DataTablePopup.vue'
export default {
  name: 'GmoshK',
  components: {
    Popup,
    DataTablePopup
  },
  data () {
    return {
      classiffication: "",
      gmushim: [{}, {}],
      courses: [{}, {}],
      headers: [
        { text: "שם", sortable: false, value: 'name' },
        { text: "תאריך", sortable: false, filterable: false, groupable: false, divider: false, value: 'date' },
        { text:"שעות", sortable: false, value: "hours" }
      ],
      dialog: false,
      currentStatus: "",
      focusedCourse: {
        name: '',
        date: '',
        hours: ''
      }
      
    }
  },
  mixins: [formatDate],
  methods: {
    formatDate (date) {
      const formatedDate = new Date(`${date}`);
      return `${formatedDate.getMonth() + 1}/${formatedDate.getDate()}/${formatedDate.getFullYear()}`;
    },
    openDialog(item, status) {
      if (item.date != '') item.date = this.formatDate(item.date);
      this.focusedCourse = item,
      this.currentStatus = status,
      this.dialog = true
    },
    initiateCourse() {
      return {
        name: '',
        date: '',
        hours: ''
      }
    },
    updateCourses(courses) {
      this.courses = courses;
      this.dialog = false
    },
   
  },
  computed: {
    currentSoldier () {
      return this.$store.state.currentSoldier
    },
    katzin () {
      return this.classiffication === "קצין"
    },
    getGmush () {
      return this.gmushim.map( gmush => "startDate" in gmush );
    },
  },
  watch: {
    async currentSoldier(soldier) {
      const { gmushim ,classiffication } = await getGmushim(soldier);
      const { courses } = await getCourses(soldier);
      this.classiffication = classiffication;
      this.gmushim = gmushim;
      this.courses = courses;
    }
  },
}
</script>

<style scoped>
.popup-center-content {
 display: flex;
 align-items: center;
 justify-content: center;
}
</style>