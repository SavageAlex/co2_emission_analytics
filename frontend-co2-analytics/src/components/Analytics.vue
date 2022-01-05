<template>
  <div>
    <h1 class="text-center">Analytics</h1>
    <div class="row">
      <div class="col p-3 mx-auto">
        <Datepicker
          v-model="dates"
          @update:modelValue="fetchData"
          :enableTimePicker="false"
          :monthChangeOnScroll="false"
          twoCalendars
          twoCalendarsSolo
          range
          placeholder="Pick 'Drop Off' Date Range"
        />
      </div>
    </div>

    <div class="row">
      <div class="col p-3 mx-auto">
        <AnalyticsTable
          :loading="loading"
          :analytics="analytics"
          :key="componentKey"
        />
      </div>
    </div>
  </div>
</template>

<script>
import AnalyticsTable from "./AnalyticsTable.vue";

import Datepicker from "vue3-date-time-picker";
import "vue3-date-time-picker/dist/main.css";

import AnalyticsDataService from "../services/AnalyticsDataService";

export default {
  name: "Analytics",
  components: { AnalyticsTable, Datepicker },
  data() {
    return {
      analytics: [],
      dates: [],
      componentKey: 0,
      loading: false,
    };
  },
  methods: {
    fetchData() {
      this.loading = true;
      var params = { startDate: this.dates[0], endDate: this.dates[1] };
      AnalyticsDataService.findAllByDate(params)
        .then((response) => {
          this.componentKey += 1;
          this.analytics = response.data;
          this.loading = false;
        })
        .catch((e) => {
          console.log(e);
          this.loading = false;
        });
    },
  },
};
</script>