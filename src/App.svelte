<script>
  import Canvas from "./components/Canvas.svelte";
  import Form from "./components/Form.svelte";
  import Summary from "./components/Summary.svelte";
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

  const config = {
    color1: "#A5668B",
    color2: "#BDADEA",
    color3: "#F2D7EE"
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

  h3 {
    margin: 12px 0;
  }

  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }
</style>

<main>
  <h1>Compound interest calculator</h1>
  <h3>เครื่องคำนวณผลตอบแทนทบต้น</h3>
</main>
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
          <h3>Results</h3>
        </Row>
        <Row>
          <Summary bind:data={chartOptions.data} />
        </Row>
      </Col>
    </Row>
  </CardBody>
</Card>
