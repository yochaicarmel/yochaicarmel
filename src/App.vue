<script src="http://localhost:8098"></script>
<template>
  <v-app>
    <v-app-bar
      app
      dense
      flat
      color="white"
    >
      <span class="subtitle-1 font-weight-bold mr-2">תינוקות</span>
      <v-spacer></v-spacer>
      <v-icon small right>mdi-baby-face</v-icon>
      <span class="text-caption ml-16">יוחאי כרמל</span >

    </v-app-bar>

    <v-main>
      <v-row no-gutters class="background-grey">
        <v-col cols="auto" class="pa-0">
          <Tree class="mt-1" @select="select"></Tree>
        </v-col>
        <v-col class="pa-0" >
          <router-view/>
        </v-col>
      </v-row>
    </v-main>
  </v-app>
</template>

<script>
import Tree from './components/Tree/Tree.vue';

export default {
  name: 'App',
  
  data () {
    return {

    }
  },

  methods: {
    convertName (name) {
      return name === "מצפן" ? 'מצפ"ן' : name
    },
    select (selected) {
      if (selected) {
        if (selected.otype === "SO") {
          this.$store.commit("setCurrentUnit", this.convertName(selected.name));
        }
        else {
          this.$store.commit("setCurrentSoldier", selected.id );
        }
      }
      
    }
  },
  
  components: {
    Tree
  }
};
</script>

<style>
.background-grey{
  background-color: #f5f5f5;
}
</style>
