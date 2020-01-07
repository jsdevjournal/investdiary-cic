<script>
  import { Input } from "sveltestrap";
  import { onMount } from "svelte";
  import Cleave from "cleave.js";

  export let value;
  export let id = "input";
  export let prefix;
  export let numeralIntegerScale;
  export let onValueChanged = () => {};

  onMount(() => {
    new Cleave(`#${id}`, {
      prefix,
      numeralIntegerScale,
      numeral: true,
      numeralPositiveOnly: true,
      noImmediatePrefix: true,
      rawValueTrimPrefix: true,
      onValueChanged,
    });
  });
</script>

<style>

</style>

<Input {...$$props} {id} bind:value />
