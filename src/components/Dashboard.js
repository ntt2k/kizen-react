import React from 'react';
import PropTypes from 'prop-types';
import { Container, Row, Col } from 'shards-react';

import PageTitle from './utils/PageTitle';
import SmallStats from './utils/SmallStats';
import BigStats from './utils/BigStats';

const Dashboard = ({ chartData }) => (
  <Container fluid className="main-content-container px-4">
    {/* Page Header */}
    <Row noGutters className="page-header py-4">
      <PageTitle
        subtitle="Dashboard"
        title="CoinTracker"
        className="text-sm-left mb-3"
      />
    </Row>

    {/* Small Stats Blocks */}
    <Row>
      {chartData.map((chart, idx) => (
        <Col sm="12" md="6" lg="3" className="mb-4" key={idx} {...chart.attrs}>
          <SmallStats
            id={`small-chart-${idx}`}
            chartData={chart.datasets}
            chartLabels={chart.chartLabels}
            label={chart.label}
            value={chart.value}
            percentage={chart.percentage}
            increase={chart.increase}
            decrease={chart.decrease}
          />
        </Col>
      ))}
    </Row>

    {/* Big Stats Blocks */}
    <Row>
      <Col lg="12" md="12" sm="12" className="mb-4">
        <BigStats />
      </Col>
    </Row>
  </Container>
);

Dashboard.propTypes = {
  chartData: PropTypes.array
};

Dashboard.defaultProps = {
  chartData: [
    {
      label: 'Bitcoin (BTC)',
      value: '17,281',
      percentage: '2.4%',
      increase: false,
      decrease: true,
      chartLabels: [null, null, null, null, null, null, null],
      attrs: { md: '4', sm: '6' },
      datasets: [
        {
          label: 'Today',
          fill: 'start',
          borderWidth: 1.5,
          backgroundColor: 'rgb(0,123,255,0.1)',
          borderColor: 'rgb(0,123,255)',
          data: [3, 2, 3, 2, 4, 5, 4]
        }
      ]
    },
    {
      label: 'Bitcoin Cash (BCH)',
      value: '8,147',
      percentage: '3.8%',
      increase: false,
      decrease: true,
      chartLabels: [null, null, null, null, null, null, null],
      attrs: { md: '4', sm: '6' },
      datasets: [
        {
          label: 'Today',
          fill: 'start',
          borderWidth: 1.5,
          backgroundColor: 'rgba(255,180,0,0.1)',
          borderColor: 'rgb(255,180,0)',
          data: [2, 3, 3, 3, 4, 3, 3]
        }
      ]
    },
    {
      label: 'Ethereum (ETH)',
      value: '2,390',
      percentage: '4.7%',
      increase: true,
      chartLabels: [null, null, null, null, null, null, null],
      attrs: { md: '6', sm: '6' },
      datasets: [
        {
          label: 'Today',
          fill: 'start',
          borderWidth: 1.5,
          backgroundColor: 'rgba(0, 184, 216, 0.1)',
          borderColor: 'rgb(0, 184, 216)',
          data: [1, 2, 1, 3, 5, 4, 7]
        }
      ]
    },
    {
      label: 'Litecoin (LTC)',
      value: '182',
      percentage: '12.4',
      increase: true,
      chartLabels: [null, null, null, null, null, null, null],
      attrs: { md: '6', sm: '6' },
      datasets: [
        {
          label: 'Today',
          fill: 'start',
          borderWidth: 1.5,
          backgroundColor: 'rgba(23,198,113,0.1)',
          borderColor: 'rgb(23,198,113)',
          data: [1, 2, 3, 3, 3, 4, 4]
        }
      ]
    }
  ]
};

export default Dashboard;
