import chartXkcd from '../src';

const svgHighAndLow = document.querySelector('.high-and-low');
new chartXkcd.Line(svgHighAndLow, {
  title: 'Made up graph of pace of delivery over time',
  xLabel: 'Time',
  yLabel: 'Pace of delivery',
  data: {
    labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'],
    datasets: [{
      label: 'High Quality Codebase',
      data: [8.1, 8, 8.1, 7.9, 8, 7.8, 8.1, 8, 7.9, 8],
    }, {
      label: 'Low Quality Codebase',
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
      label: 'Low Quality Codebase',
      data: [12, 9.3, 6.8, 5.2, 3.6, 2.9, 2.2, 1.5, 1.3, 1],
    }],
  },
  options: {
    legendPosition: chartXkcd.config.positionType.upRight,
    dataColors: ['rgb(221, 69, 40)']
  },
});
