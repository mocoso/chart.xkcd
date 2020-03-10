import chartXkcd from '../src';

const svgHighLowAndVariable = document.querySelector('.high-low-and-variable');
new chartXkcd.Line(svgHighLowAndVariable, {
  title: 'Made up graph of pace of delivery over time',
  xLabel: 'Time',
  yLabel: 'Pace of delivery',
  data: {
    labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19'],
    datasets: [{
      label: 'Higher Quality Codebase',
      data: [8.1, 8.0, 8, 8.05, 8.1, 8.0, 7.9, 7.95, 8, 7.9, 7.8, 7.95, 8.1, 8.05, 8, 7.95, 7.9, 7.95, 8],
    }, {
      label: 'Lower Quality Codebase',
      data: [12, 10.4, 9.3, 7.8, 6.8, 5.8, 5.2, 4.2, 3.6, 3.2, 2.9, 2.5, 2.2, 1.8, 1.5, 1.4, 1.3, 1.1, 1],
    }, {
      label: 'Variable Quality Codebase',
      data: [11, 10.2, 9.4, 8.2, 8.1, 4.3, 4.4, 2.1, 5.3, 4.8, 5.1, 5.0, 4.7, 4.8, 4.5, 4.6, 4.2, 4.0, 3.9],
    }],
  },
  options: {
    legendPosition: chartXkcd.config.positionType.upRight,
    dataColors: ['rgb(34, 152, 215)', 'rgb(221, 69, 40)', 'rgb(34, 215, 152)']
  },
});

const svgHighAndLow = document.querySelector('.high-and-low');
new chartXkcd.Line(svgHighAndLow, {
  title: 'Made up graph of pace of delivery over time',
  xLabel: 'Time',
  yLabel: 'Pace of delivery',
  data: {
    labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'],
    datasets: [{
      label: 'Higher Quality Codebase',
      data: [8.1, 8, 8.1, 7.9, 8, 7.8, 8.1, 8, 7.9, 8],
    }, {
      label: 'Lower Quality Codebase',
      data: [12, 9.3, 6.8, 5.2, 3.6, 2.9, 2.2, 1.5, 1.3, 1],
    }],
  },
  options: {
    legendPosition: chartXkcd.config.positionType.upRight,
    dataColors: ['rgb(34, 152, 215)', 'rgb(221, 69, 40)']
  },
});

const svgLow = document.querySelector('.low');
new chartXkcd.Line(svgLow, {
  title: 'Made up graph of pace of delivery over time',
  xLabel: 'Time',
  yLabel: 'Pace of delivery',
  data: {
    labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'],
    datasets: [{
      label: 'Lower Quality Codebase',
      data: [12, 9.3, 6.8, 5.2, 3.6, 2.9, 2.2, 1.5, 1.3, 1],
    }],
  },
  options: {
    legendPosition: chartXkcd.config.positionType.upRight,
    dataColors: ['rgb(221, 69, 40)']
  },
});
