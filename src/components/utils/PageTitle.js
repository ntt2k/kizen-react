import React from "react";
import styled from "styled-components";
import classNames from "classnames";
import PropTypes from "prop-types";
import { Col } from "shards-react";

const Subtitle = styled.span`
  letter-spacing: .125rem;
  color: #818ea3;
  font-size: 0.85rem;
`;

const Title = styled.h3`
  font-size: 1.625rem;
  font-weight: 500;
  color: #3d5170;
  line-height: 1;
  margin: 0;
  padding: 0;
`;

const PageTitle = ({ title, subtitle, className, ...attrs }) => {
  const classes = classNames(
    className,
    "text-center",
    "text-md-left",
    "mb-sm-0"
  );

  return (
    <Col xs="12" sm="4" className={classes} { ...attrs }>
      <Subtitle>{subtitle}</Subtitle>
      <Title>{title}</Title>
    </Col>
  )
};

PageTitle.propTypes = {
  /**
   * The page title.
   */
  title: PropTypes.string,
  /**
   * The page subtitle.
   */
  subtitle: PropTypes.string
};

export default PageTitle;
