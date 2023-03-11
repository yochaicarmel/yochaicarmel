<template>
  <div class="rightSearch">
    <v-card flat tile class="sideFilterCard">
      <div class="tree overflow-y-auto">
        <v-treeview
          :items="items"
          item-children="children"
          item-key="id"
          item-text="name"
          dense
          activatable
          color="indigo"
          transition
          selection-type="leaf"
          return-object
          v-model="selectedSoldiers"
          @update:active="onSoldierSelect"
        >
          <template v-slot:label="{ item }">
            <v-tooltip
              v-if="item.otype === 'P'"
              bottom
              color="white"
              content-class="tooltipStyle"
            >
              <template v-slot:activator="{ on }">
                <router-link :to="goToSoldier(item)">
                  <div v-on="on">
                    <div class="soliderName clickable">
                      {{ item.name }}
                    </div>
                  </div>
                </router-link>
              </template>
              <span class="tooltipText"> {{ item.minui }}</span>
            </v-tooltip>
            <div v-else class="clickable">
              <router-link :to="goToUnit(item)">
                <div class="header">
                  <div class="mySoldiers">
                    {{ item.name }}
                  </div>
                  <span class="leafAmount">({{ item.leafAmount }})</span>
                </div>
              </router-link>
            </div>
          </template>
        </v-treeview>
      </div>
    </v-card>
  </div>
</template>
<script>

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Tree",
  created() {
    this.setChildrenLength();
  },
  data () {
    return {
      items: [
        {
          id: 1,
          name: this.$i18n.t("units.shahar"),
          otype: "SO",
          leafAmount: 0,
          children: [
            {
              id: 1718,
              name: "צנדלר בינג",
              otype: "P",
              minui: "מפקד מחלקה",
              
            },
             { id: 5566, name: "מוניקה גלר", otype: "P", minui: "בודק תוכנה" },
             //{ id: 9221, name: "גואי טריביאני", otype: "P", minui: "מיישם" },
            {
              id: 1327,
              name: "באטמן",
              otype: "P",
              minui: "ראש״צ ליגת הצדק",
              
            },
          ],
          to: "/unit/shahar",
        },
        {
          id: 2,
          name: this.$i18n.t("units.compass"),
          otype: "SO",
          leafAmount: 0,
          children: [
            {
              id: 6936, 
              name: "רוס גלר", 
              otype: "P", 
              minui: "מפקד מחלקה"
            },
             //{ id: 9488, name: "רייצל גרין", otype: "P", minui: "בודק תוכנה" },
             //{ id: 1274, name: "פיבי בופה", otype: "P", minui: "תוכניתן" },
             //{ id: 8495, name: "גונתר סנטרל פארק", otype: "P", minui: "תוכניתן" },
            {
              id: 1455,
              name: "סופרמן",
              otype: "P",
              minui: "חבר בליגת הצדק",
              
            },
          ],
          to: "/unit/compass",
        },
      ],
      selectedSoldiers: undefined
    };
  },
  methods: {
    onSoldierSelect(chosenSoldier) {
      this.$emit("select", chosenSoldier[0]);
    },
    setChildrenLength() {
      this.items = this.items.map((item) => ({
        ...item,
        leafAmount: item.children.length,
      }));
    },
    getUnitName(unit) {
      return this.$t(`units.${unit}`);
    },
    goToSoldier({ id }) {
      return '/soldier/' + id
    },
    goToUnit({ name }) {
      return '/unit/' + name
    }
  },

    



};
</script>
<style scoped>
.tree {
  height: 40.5625rem;
  text-align: right;
}

.header {
  display: flex;
}

.tooltipText {
  font-size: 0.75rem;
  text-align: center;
  line-height: normal;
  font-weight: bold;
  padding: 0.8rem 0 0 1.25rem;
  color: #595a7f;
}

.rightSearch {
  height: 50.0625rem;
  margin-right: 0px;
}

.soldierName {
  font-weight: 700;
}

.mySoldiers {
  font-size: larger;
  font-weight: 700;
  color: #282949;
}

.clickable:hover {
  cursor: pointer;
}
a {
  text-decoration: none;
  color: #595a7f !important;
}

.tooltipStyle {
  opacity: 1 !important;
  text-align: center;
  border: 2px solid #f9f9f9;
  box-shadow: 0 2px 11px 2px rgba(0, 0, 0, 0.12);
}

.leafAmount {
  color: #282949;
  font-size: 0.625;
  align-self: center;
  margin-right: 0.2;
}

.sideFilterCard {
  width: 13.5rem;
  margin-right: 0.2rem;
  margin-top: 0.6rem;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1) !important;
  background-color: lightsteelblue;
  border-radius: 0.9375rem !important;
}

</style>
