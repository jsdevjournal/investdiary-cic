<script>
  import { onMount } from "svelte";
  export let options;

  let CanvasJS = window.CanvasJS;
  let chart;

  $: {
    if (chart) {
      chart.options = options;
      chart.render();
    }
  }

  onMount(async () => {
    chart = new CanvasJS.Chart("chartContainer", options);
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
