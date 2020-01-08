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
    Input
  } from "sveltestrap";
  import { transformFormData, getLastElement } from "./helpers/data";
  import Canvas from "./components/Canvas.svelte";
  import Form from "./components/Form.svelte";
  import Summary from "./components/Summary.svelte";

  const config = {
    color1: "#1d4d4f",
    color2: "#357376",
    color3: "#6ba8a9"
  } 
  let data;
  let chartOptions = {
    animationEnabled: true,
    theme: "light2",
    toolTip: {
      shared: true
    },
    axisX: {
      title: "Years",
      interval: 1,
    },
    axisY:{
      title: "Savings",
    },
    data: transformFormData({}, config)
  };

  $: {
    chartOptions.data = transformFormData(data, config);
  }
</script>

<style>
  main {
    text-align: center;
    padding: 1em;
    max-width: 240px;
    margin: 0 auto;
  }

  h1 {
    color: #00b7ff;
    text-transform: uppercase;
    font-size: 3em;
    font-weight: 100;
  }

  h4 {
    margin: 12px 0;
  }

  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }
</style>

<Card>
  <CardBody>
    <Row>
      <Col xs="12" md="4">
        <Form onValueChanged={value => (data = value)} />
      </Col>
      <Col xs="12" md="8">
        <Row>
          <Canvas options={chartOptions} />
        </Row>
        <Row>
          <h4>Results</h4>
        </Row>
        <Row>
          <Summary bind:data={chartOptions.data} {config} />
        </Row>
      </Col>
    </Row>
  </CardBody>
</Card>
