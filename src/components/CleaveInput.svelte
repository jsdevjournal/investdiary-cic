<script>
  import { Input } from "sveltestrap";
  import { onMount } from "svelte";
  import Cleave from "cleave.js";

  export let value;
  export let id = "input";
  export let prefix;

  onMount(() => {
    new Cleave(`#${id}`, {
      prefix,
      numeral: true,
      onValueChanged(e) {
        console.log(e);
      }
    });
  });
</script>

<style>

</style>

<Input {...$$props} {id} bind:value />
