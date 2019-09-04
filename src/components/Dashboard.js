import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

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

const mapStateToProps = (state) => ({
  chartData: state.chartData
});

export default connect(mapStateToProps)(Dashboard);
