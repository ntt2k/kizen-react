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
        <BigStats chartData={chartData} />
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
      id: 'btc',
      label: 'Bitcoin (BTC)',
      value: '15,281',
      percentage: '2.4%',
      increase: false,
      decrease: true,
      chartLabels: [null, null, null, null, null, null, null],
      attrs: { md: '4', sm: '6' },
      datasets: [
        {
          label: 'Bitcoin (BTC)',
          fill: 'start',
          borderWidth: 1.5,
          borderColor: 'rgb(255,65,105)',
          backgroundColor: 'rgba(255,65,105,0.1)',
          pointBackgroundColor: '#ffffff',
          pointHoverBackgroundColor: 'rgb(0,123,255)',
          pointRadius: 0,
          pointHoverRadius: 3,
          data: [
            15000,
            18000,
            13200,
            11800,
            12400,
            13200,
            12300,
            16500,
            15900,
            12000,
            17500,
            19400,
            14200,
            12000,
            10600,
            12500,
            9820,
            12800,
            12102,
            11200,
            13200,
            13202,
            14000,
            12800,
            13200,
            13200,
            13400,
            12910,
            13100,
            14250
          ]
        }
      ]
    },
    {
      id: 'bch',
      label: 'Bitcoin Cash (BCH)',
      value: '4800',
      percentage: '3.8%',
      increase: false,
      decrease: true,
      chartLabels: [null, null, null, null, null, null, null],
      attrs: { md: '4', sm: '6' },
      datasets: [
        {
          label: 'Bitcoin Cash (BCH)',
          fill: 'start',
          borderWidth: 1.5,
          borderColor: 'rgb(255,180,0)',
          backgroundColor: 'rgba(255,180,0,0.1)',
          pointBackgroundColor: '#ffffff',
          pointHoverBackgroundColor: 'rgba(255,65,105,1)',
          pointRadius: 0,
          pointHoverRadius: 2,
          pointBorderColor: 'rgba(255,65,105,1)',
          data: [
            980,
            1200,
            640,
            360,
            480,
            640,
            460,
            1000,
            980,
            1100,
            1050,
            880,
            840,
            940,
            920,
            900,
            840,
            700,
            1024,
            840,
            940,
            1104,
            1280,
            2400,
            1200,
            5800,
            2400,
            2220,
            2000,
            1800
          ]
        }
      ]
    },
    {
      id: 'eth',
      label: 'Ethereum (ETH)',
      value: '4,790',
      percentage: '10.7%',
      increase: true,
      chartLabels: [null, null, null, null, null, null, null],
      attrs: { md: '6', sm: '6' },
      datasets: [
        {
          label: 'Ethereum (ETH)',
          fill: 'start',
          borderWidth: 1.5,
          borderColor: 'rgb(0,123,255)',
          backgroundColor: 'rgb(0,123,255,0.1)',
          pointBackgroundColor: '#ffffff',
          pointHoverBackgroundColor: 'rgb(0,123,255)',
          pointRadius: 0,
          pointHoverRadius: 3,
          data: [
            500,
            800,
            320,
            180,
            240,
            320,
            230,
            650,
            590,
            1200,
            750,
            940,
            1420,
            1200,
            960,
            1450,
            1820,
            2800,
            2102,
            1920,
            3920,
            3202,
            3140,
            2800,
            3200,
            3200,
            3400,
            2910,
            3100,
            4250
          ]
        }
      ]
    },
    {
      id: 'ltc',
      label: 'Litecoin (LTC)',
      value: '1182',
      percentage: '5.4%',
      increase: true,
      chartLabels: [null, null, null, null, null, null, null],
      attrs: { md: '6', sm: '6' },
      datasets: [
        {
          label: 'Litecoin (LTC)',
          fill: 'start',
          borderWidth: 1.5,
          borderColor: 'rgb(23,198,113)',
          backgroundColor: 'rgba(23,198,113,0.1)',
          pointBackgroundColor: '#ffffff',
          pointHoverBackgroundColor: 'rgba(255,65,105,1)',
          pointRadius: 0,
          pointHoverRadius: 2,
          pointBorderColor: 'rgba(255,65,105,1)',
          data: [
            380,
            430,
            120,
            230,
            410,
            740,
            472,
            219,
            391,
            229,
            400,
            203,
            301,
            380,
            291,
            620,
            700,
            300,
            630,
            402,
            320,
            380,
            289,
            410,
            300,
            530,
            630,
            720,
            780,
            1200
          ]
        }
      ]
    }
  ]
};

export default Dashboard;
