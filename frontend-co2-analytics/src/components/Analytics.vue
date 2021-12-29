<template>
  <div class="container">
    <h1>Analytics</h1>
    <Datepicker
      v-model="dates"
      @update:modelValue="fetchData"
      :enableTimePicker="false"
      :monthChangeOnScroll="false"
      dark
      inline
      range
    ></Datepicker>
    <AnalyticsTable :analytics="analytics" />
  </div>
</template>

<script>
import AnalyticsTable from "./AnalyticsTable.vue";

import Datepicker from "vue3-date-time-picker";
import "vue3-date-time-picker/dist/main.css";

import AnalyticsDataService from "../services/AnalyticsDataService"

export default {
  name: "Analytics",
  components: { AnalyticsTable, Datepicker },
  data() {
    return {
      analytics: [],
      dates: [],
    };
  },
  methods: {
      fetchData() {
          var params = {"startDate": this.dates[0], "endDate": this.dates[1]}
          AnalyticsDataService.findAllByDate(params)
          .then((response) => {
              this.analytics = response.data
          })
          .catch(e => {
              console.log(e)
          })
      }
  }
};
</script>