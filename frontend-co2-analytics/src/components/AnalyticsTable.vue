<template>
  <table class="table">
    <thead class="thead-dark">
      <tr>
        <th scope="col">#</th>
        <th scope="col">Shipment ID</th>
        <th scope="col">Weight (kg)</th>
        <th scope="col">Distance (km)</th>
        <th scope="col">Pickup Time</th>
        <th scope="col">Drop Off Time</th>
        <th scope="col">CO2 Emission</th>
      </tr>
    </thead>
    <tbody>
      <tr :key="analytic.id" v-for="(analytic, index) in analytics">
        <th scope="row">{{index + 1}}</th>
        <td>{{analytic.shipment_id}}</td>
        <td>{{analytic.weight_kg}}</td>
        <td>{{analytic.distance_km}}</td>
        <td>{{analytic.pickup_time}}</td>
        <td>{{analytic.dropoff_time}}</td>
        <td>{{analytic.co2_emission}}</td>
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
};
</script>