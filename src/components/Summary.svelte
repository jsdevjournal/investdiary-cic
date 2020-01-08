<script>
  import { getLastElement, numeralFormat } from "../helpers/data";
  import { Badge } from "sveltestrap";

  export let data;
  export let config = {};

  const formatCurrency = numeralFormat("$0,0");

</script>

<style>

</style>

<table>
  <tbody>
    <tr>
      <td style="min-width: 200px;"><Badge style={`background-color: ${config.color1};`} >Initial deposit</Badge></td>
      <td>
        {formatCurrency((getLastElement(data[0] && data[0].dataPoints) || {}).y)}
      </td>
    </tr>
    <tr>
      <td><Badge style={`background-color: ${config.color2};`} >Regular deposits</Badge></td>
      <td>
        {formatCurrency((getLastElement(data[1] && data[1].dataPoints) || {}).y)}
      </td>
    </tr>
    <tr>
      <td><Badge style={`background-color: ${config.color3};`} >Total interest</Badge></td>
      <td>
        {formatCurrency((getLastElement(data[2] && data[2].dataPoints) || {}).y)}
      </td>
    </tr>
    <tr>
      <td>Total saving:</td>
      <td>
        {formatCurrency((getLastElement(data[3] && data[3].dataPoints) || {}).y)}
      </td>
    </tr>
  </tbody>
</table>
