import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import shortid from 'shortid';
import { CardBody } from 'shards-react';
import { CardStyled, LabelStyled, ValueStyled, PercentageStyled } from '../../styles/Card';
import Chart from './chart';

class SmallStats extends React.Component {
  constructor(props) {
    super(props);

    this.canvasRef = React.createRef();
  }

  componentDidMount() {
    const chartOptions = {
      ...{
        maintainAspectRatio: true,
        responsive: true,
        legend: {
          display: false
        },
        tooltips: {
          enabled: false,
          custom: false
        },
        elements: {
          point: {
            radius: 0
          },
          line: {
            tension: 0.33
          }
        },
        scales: {
          xAxes: [
            {
              gridLines: false,
              ticks: {
                display: false
              }
            }
          ],
          yAxes: [
            {
              gridLines: false,
              scaleLabel: false,
              ticks: {
                display: false,
                isplay: false,
                // Avoid getting the graph line cut of at the top of the canvas.
                // Chart.js bug link: https://github.com/chartjs/Chart.js/issues/4790
                suggestedMax: Math.max(...this.props.chartData[0].data) + 1
              }
            }
          ]
        }
      },
      ...this.props.chartOptions
    };

    const chartConfig = {
      ...{
        type: 'line',
        data: {
          ...{
            labels: this.props.chartLabels
          },
          ...{
            datasets: this.props.chartData
          }
        },
        options: chartOptions
      },
      ...this.props.chartConfig
    };

    new Chart(this.canvasRef.current, chartConfig);
  }

  render() {
    const { label, value, percentage, increase } = this.props;

    const cardBodyClasses = classNames('p-0', 'd-flex');
    const innerWrapperClasses = classNames('d-flex', 'flex-column', 'm-auto');
    const dataFieldClasses = classNames('stats-small__data', 'text-center');
    const labelClasses = classNames('stats-small__label', 'text-uppercase');
    const valueClasses = classNames('stats-small__value', 'count', 'my-3');
    const innerDataFieldClasses = classNames(
      'stats-small__data',
      'text-right',
      'align-items-center'
    );

    const percentageClasses = classNames(
      'stats-small__percentage',
      `stats-small__percentage--${increase ? 'increase' : 'decrease'}`
    );

    return (
      <CardStyled small>
        <CardBody className={cardBodyClasses}>
          <div className={innerWrapperClasses}>
            <div className={dataFieldClasses}>
              <LabelStyled className={labelClasses}>{label}</LabelStyled>
              <ValueStyled className={valueClasses}>{value}</ValueStyled>
            </div>
            <div className={innerDataFieldClasses}>
              <PercentageStyled className={percentageClasses}>{percentage}</PercentageStyled>
            </div>
          </div>
          <canvas
            height="120"
            ref={this.canvasRef}
            className={`stats-small-${shortid()}`}
          />
        </CardBody>
      </CardStyled>
    );
  }
}

SmallStats.propTypes = {
  /**
   * The Small Stats variation.
   */
  variation: PropTypes.string,
  /**
   * The label.
   */
  label: PropTypes.string,
  /**
   * The value.
   */
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  /**
   * The percentage number or string.
   */
  percentage: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  /**
   * Whether is a value increase, or not.
   */
  increase: PropTypes.bool,
  /**
   * The Chart.js configuration object.
   */
  chartConfig: PropTypes.object,
  /**
   * The Chart.js options object.
   */
  chartOptions: PropTypes.object,
  /**
   * The chart data.
   */
  chartData: PropTypes.array.isRequired,
  /**
   * The chart labels.
   */
  chartLabels: PropTypes.array
};

SmallStats.defaultProps = {
  increase: true,
  percentage: 0,
  value: 0,
  label: 'Label',
  chartOptions: Object.create(null),
  chartConfig: Object.create(null),
  chartData: [],
  chartLabels: []
};

export default SmallStats;
