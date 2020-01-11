<script>
  import { transformFormData } from "../helpers/data";
  import { onMount, onDestroy } from "svelte";
  import store from "../store";

  export let config = {};

  let CanvasJS = window.CanvasJS;
  let chart;
  let chartOptions = {
    animationEnabled: true,
    theme: "light2",
    toolTip: {
      shared: true
    },
    axisX: {
      title: "Years",
      interval: 1
    },
    axisY: {
      title: "Savings"
    },
    data: transformFormData({}, config)
  };

  const unsubscribe = store.subscribe(value => {
    if (chart) {
      chart.options = {
        ...chartOptions,
        data: transformFormData(value, config)
      };
      chart.render();
    }
  });

  onDestroy(unsubscribe);

  onMount(async () => {
    chart = new CanvasJS.Chart("chartContainer", chartOptions);
    chart.render();
    return () => chart.destroy();
  });
</script>

<style scoped>
  .canvas {
    height: 320px;
    width: 100%;
  }
</style>

<div id="chartContainer" class="canvas" />
