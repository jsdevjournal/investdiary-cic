<script>
  import Canvas from "./components/Canvas.svelte";
  import Form from "./components/Form.svelte";
  import {
    Card,
    CardBody,
    CardHeader,
    CardTitle,
    Col,
    Container,
    Row,
    Button,
    Input,
  } from "sveltestrap";
  export let name;
</script>

<style>
  main {
    text-align: center;
    padding: 1em;
    max-width: 240px;
    margin: 0 auto;
  }

  h1 {
    color: #ff3e00;
    text-transform: uppercase;
    font-size: 4em;
    font-weight: 100;
  }

  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }
</style>

<main>
  <h1>Hello {name}!</h1>
  <p>
    Visit the
    <a href="https://svelte.dev/tutorial">Svelte tutorial</a>
    to learn how to build Svelte apps.
  </p>
</main>
<Card>
  <CardBody>
    <Row>
      <Col xs="12" md="4">
        <Form />
      </Col>
      <Col xs="12" md="8">
        <Canvas />
      </Col>
    </Row>
  </CardBody>
</Card>
