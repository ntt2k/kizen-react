import React, { useState } from 'react';
import styled from 'styled-components'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { Container, Row, Col } from 'shards-react';
import Switch from 'react-switch';
import PageTitle from './utils/PageTitle';

const SwitchLabelStyled = styled.span`
  margin-left: 0.5rem;
  position: relative;
  top: -0.35rem;
`;

const Settings = ({ chartData }) => {
  const [active, setActive] = useState(true);

  return (
    <Container fluid className="main-content-container px-4">
      {/* Page Header */}
      <Row noGutters className="page-header py-4">
        <PageTitle title="Settings" className="text-sm-left mb-3" />
      </Row>

      {/* Small Stats Blocks */}
      <Row>
        {chartData.map((chart, idx) => (
          <Col sm="12" md="6" lg="3" className="mb-4" key={idx}>
            <Switch
              height={24}
              width={52}
              checked={active}
              onChange={() => setActive(!active)}
            />
            <SwitchLabelStyled>{chart.label}</SwitchLabelStyled>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

Settings.propTypes = {
  chartData: PropTypes.array
};

const mapStateToProps = (state) => ({
  chartData: state.chartData
});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Settings);
