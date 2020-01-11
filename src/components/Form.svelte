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
  import store from "../store";

  let internalForm = {
    initialDeposit: undefined,
    regularDeposit: undefined,
    depositFrequency: "monthly",
    compoundFrequency: "monthly",
    years: 10,
    interest: 5.0
  };
  let externalForm = { ...internalForm };
  const setValueChange = key => e => {
    internalForm = {
      ...internalForm,
      [key]: e.target.value
    };
    externalForm = {
      ...externalForm,
      [key]: e.target.rawValue || e.target.value
    };
    store.dispatch({
      type: "update",
      payload: externalForm,
    });
  };
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
      placeholder="$0"
      value={internalForm.initialDeposit}
      onValueChanged={setValueChange('initialDeposit')} />
  </FormGroup>
  <FormGroup>
    <Label for="regularDeposit">Regular deposits</Label>
    <CleaveInput
      name="regularDeposit"
      id="regularDeposit"
      prefix="$"
      placeholder="$0"
      value={internalForm.regularDeposit}
      onValueChanged={setValueChange('regularDeposit')} />
  </FormGroup>
  <FormGroup>
    <Label for="depositFrequency">Deposit frequency</Label>
    <select
      type="select"
      name="depositFrequency"
      id="depositFrequency"
      value={internalForm.depositFrequency}
      on:change={setValueChange('depositFrequency')}>
      <option value="monthly">Monthly</option>
      <option value="annually">Annually</option>
    </select>
  </FormGroup>
  <!-- <FormGroup>
    <Label for="compoundFrequency">Compound frequency</Label>
    <select
      type="select"
      name="compoundFrequency"
      id="compoundFrequency"
      value={internalForm.compoundFrequency}
      on:change={setValueChange('compoundFrequency')}>
      <option value="monthly">Monthly</option>
      <option value="annually">Annually</option>
    </select>
  </FormGroup> -->
  <FormGroup>
    <Label for="years">Number of years</Label>
    <CleaveInput
      name="years"
      id="years"
      numeralIntegerScale={2}
      value={internalForm.years}
      onValueChanged={setValueChange('years')} />
  </FormGroup>
  <FormGroup>
    <Label for="interest">Interest rate (%)</Label>
    <CleaveInput
      name="interest"
      id="interest"
      numeralIntegerScale={2}
      value={internalForm.interest}
      onValueChanged={setValueChange('interest')} />
  </FormGroup>
</Form>
