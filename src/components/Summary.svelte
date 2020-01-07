<script>
  import { getLastElement } from "../helpers/data";
  import numeral from "numeral";

  export let data;

</script>

<style>

</style>

<table>
  <tbody>
    <tr>
      <td style="min-width: 200px;">Initial deposit:</td>
      <td>
        {numeral((getLastElement(data[0] && data[0].dataPoints) || {}).y).format("$0,0")}
      </td>
    </tr>
    <tr>
      <td>Regular deposits:</td>
      <td>
        {numeral((getLastElement(data[1] && data[1].dataPoints) || {}).y).format("$0,0")}
      </td>
    </tr>
    <tr>
      <td>Total interest:</td>
      <td>
        {numeral((getLastElement(data[2] && data[2].dataPoints) || {}).y).format("$0,0")}
      </td>
    </tr>
    <tr>
      <td>Total saving:</td>
      <td>
        {numeral((getLastElement(data[3] && data[3].dataPoints) || {}).y).format("$0,0")}
      </td>
    </tr>
  </tbody>
</table>
