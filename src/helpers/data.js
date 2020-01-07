
export const compoundInterest = (interest) => (acc, addition) => {
  return acc + ((acc + addition) * interest / 100)
}

export const getLastElement = (array = []) => {
  return array.slice(-1)[0]
}

export const transformFormData = (data, config) => {
  if (!data) return [];

  const {
    initialDeposit = '0',
    regularDeposit = '0',
    depositFrequency = 'monthly',
    compoundFrequency = 'monthly',
    years = '10',
    interest = '5',
  } = data;

  const yearsArray = [...new Array(Number(years))].map((_, index) => index + 1);
  const _initialDeposit = Number(initialDeposit)
  const _regularDeposit = Number(regularDeposit)
  const _interest = Number(interest)

  const initialDepositDataPoints = yearsArray.map(year => ({
    y: Math.ceil(_initialDeposit),
    label: year,
  }));
  const regularDepositDataPoints = yearsArray.map(year => ({
    y: Math.ceil(_regularDeposit * year * (depositFrequency === 'annually' ? 1 : 12)),
    label: year,
  }));
  const subTotalDepositDataPoints = yearsArray.map((year, index) => ({
    y: Math.ceil(initialDepositDataPoints[index].y + regularDepositDataPoints[index].y),
    label: year,
  }));
  const interestDepositDataPoints = yearsArray.map((year, index) => ({
    y: Math.ceil(
      subTotalDepositDataPoints
        .slice(0, index)
        .map(item => item.y)
        .reduce(compoundInterest(_interest), compoundInterest(_interest)(0, _initialDeposit))
    ),
    label: year,
  }));
  const totalDepositDataPoints = yearsArray.map((year, index) => ({
    y: Math.ceil(initialDepositDataPoints[index].y + regularDepositDataPoints[index].y + interestDepositDataPoints[index].y),
    label: year,
  }));

  return [
    {
      type: "stackedColumn",
      color: config.color1,
      toolTipContent: "Initial deposit: ${y}",
      dataPoints: initialDepositDataPoints
    },
    {
      type: "stackedColumn",
      color: config.color2,
      toolTipContent: "Regular deposits: ${y}",
      dataPoints: regularDepositDataPoints
    },
    {
      type: "stackedColumn",
      color: config.color3,
      toolTipContent: "Total interest: ${y}",
      dataPoints: interestDepositDataPoints
    },
    {
      type: "column",
      fillOpacity: 0,
      toolTipContent: "<strong>Total: ${y}</strong>",
      dataPoints: totalDepositDataPoints
    }
  ]
}
