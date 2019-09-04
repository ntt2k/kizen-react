import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardHeader, CardBody } from 'shards-react';
import Chart from './chart';

class BigStats extends React.Component {
  constructor(props) {
    super(props);

    this.canvasRef = React.createRef();
  }

  componentDidMount() {
    const chartOptions = {
      ...{
        responsive: true,
        legend: {
          position: 'top'
        },
        elements: {
          line: {
            // A higher value makes the line look skewed at this ratio.
            tension: 0.3
          },
          point: {
            radius: 0
          }
        },
        scales: {
          xAxes: [
            {
              gridLines: false,
              ticks: {
                callback(tick, index) {
                  // Jump every 7 values on the X axis labels to avoid clutter.
                  return index % 7 !== 0 ? '' : tick;
                }
              }
            }
          ],
          yAxes: [
            {
              ticks: {
                suggestedMax: 45,
                callback(tick) {
                  if (tick === 0) {
                    return tick;
                  }
                  // Format the amounts using Ks for thousands.
                  return tick > 999 ? `${(tick / 1000).toFixed(1)}K` : tick;
                }
              }
            }
          ]
        },
        hover: {
          mode: 'nearest',
          intersect: false
        },
        tooltips: {
          custom: false,
          mode: 'nearest',
          intersect: false
        }
      }
    };

    const formattedChartData = {
      labels: Array.from(new Array(30), (_, i) => (i === 0 ? 1 : i)),
      datasets: this.props.chartData.map(i => i.datasets ? i.datasets[0] : {})
    };

    const CryptoBigChart = new Chart(this.canvasRef.current, {
      type: 'LineWithLine',
      options: chartOptions,
      data: formattedChartData
    });

    const buoMeta = CryptoBigChart.getDatasetMeta(0);
    buoMeta.data[0]._model.radius = 0;
    buoMeta.data[formattedChartData.datasets[0].data.length - 1]._model.radius = 0;

    // Render the chart.
    CryptoBigChart.render();
  }

  render() {
    return (
      <Card small className="h-100">
        <CardHeader className="border-bottom">
          <h6 className="m-0">Cryptocurrency</h6>
        </CardHeader>
        <CardBody className="pt-0">
          <canvas
            height="120"
            ref={this.canvasRef}
            style={{ maxWidth: '100% !important' }}
          />
        </CardBody>
      </Card>
    );
  }
}

BigStats.propTypes = {
  /**
   * The chart dataset.
   */
  chartData: PropTypes.array
};

export default BigStats;
