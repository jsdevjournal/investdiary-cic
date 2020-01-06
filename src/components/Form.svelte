<script>
  import {
    Card,
    CardBody,
    CardHeader,
    CardTitle,
    Col,
    Container,
    Row,
    Button,
    Form,
    FormGroup,
    FormText,
    Input,
    Label
  } from "sveltestrap";
  import CleaveInput from "./CleaveInput.svelte";

  let initialDeposit;
  let regularDeposit;
  let depositFrequency;
  let compoundFrequency;
  let years;
  let interest;
</script>

<style>

</style>

<Form>
  <FormGroup>
    <Label for="initialDeposit">Initial deposit</Label>
    <CleaveInput
      name="initialDeposit"
      id="initialDeposit"
      prefix="$"
      bind:value={initialDeposit} />
  </FormGroup>
  <FormGroup>
    <Label for="regularDeposit">Regular deposit</Label>
    <CleaveInput
      name="regularDeposit"
      id="regularDeposit"
      prefix="$"
      bind:value={regularDeposit} />
  </FormGroup>
  <FormGroup>
    <Label for="depositFrequency">Deposit frequency</Label>
    <select
      type="select"
      name="depositFrequency"
      id="depositFrequency"
      bind:value={depositFrequency}>
      <option value="monthly">Monthly</option>
      <option value="annually">Annually</option>
    </select>
  </FormGroup>
  <FormGroup>
    <Label for="compoundFrequency">Compound frequency</Label>
    <select
      type="select"
      name="compoundFrequency"
      id="compoundFrequency"
      bind:value={compoundFrequency}>
      <option value="monthly">Monthly</option>
      <option value="annually">Annually</option>
    </select>
  </FormGroup>
  <FormGroup>
    <Label for="years">Number of years</Label>
    <CleaveInput name="years" id="years" bind:value={years} />
  </FormGroup>
  <FormGroup>
    <Label for="interest">Interest rate (%)</Label>
    <CleaveInput name="interest" id="interest" bind:value={interest} />
  </FormGroup>
</Form>
