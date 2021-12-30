<template>
  <table class="table table-striped table-hover table-sm">
    <thead class="thead-dark">
      <tr>
        <th scope="col">#</th>
        <th scope="col">Shipment ID</th>
        <th scope="col">Weight (kg)</th>
        <th scope="col">Distance (km)</th>
        <th scope="col">Pickup Time</th>
        <th scope="col">Drop Off Time</th>
        <th scope="col">CO2 Emission</th>
        <th scope="col">Type Of Calculations</th>
      </tr>
    </thead>
    <tbody>
      <tr :key="analytic.id" v-for="(analytic, index) in analytics">
        <th scope="row">{{ index + 1 }}</th>
        <td>{{ analytic.shipment_id }}</td>
        <td>{{ analytic.weight_kg }}</td>
        <td>{{ analytic.distance_km }}</td>
        <td>{{ formatDate(analytic.pickup_time) }}</td>
        <td>{{ formatDate(analytic.dropoff_time) }}</td>
        <td>{{ analytic.Emission.co2_emission }}</td>
        <td>{{ analytic.Emission.type_of_calculations }}</td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  name: "AnalyticsTable",
  props: {
    analytics: Array,
  },
  methods: {    
    formatDate(toFormat) {
      const d = new Date(toFormat);
      const date = d.toISOString().split("T")[0];
      const time = d.toTimeString().split(" ")[0];
      return `${date} ${time}`;
    },
  },
};
</script>