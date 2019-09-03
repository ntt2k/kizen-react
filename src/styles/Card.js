import React from 'react';
import styled from 'styled-components';
import { Card, CardBody } from 'shards-react';

export const CardStyled = styled(Card)`
  min-height: 8.7rem;
  overflow: hidden !important;

  canvas {
    position: absolute;
    bottom: 0;
  }

  &__data {
    flex: 1;
    display: flex;
    justify-content: center;
    flex-flow: column;
    max-width: 50%;
    z-index: 1;
  }

  &__label {
    font-size: 0.625rem;
    letter-spacing: 0.0625rem;
    color: #818EA3;
  }

  &__value {
    /* font-family: $small-stats-value-font-family; */
    font-size: 1.5rem;
    font-weight: 500;
  }

  &__percentage {
    position: relative;
    display: table;
    margin-left: auto;
    padding-left: 0.9375rem;

    &--increase,
    &--decrease {
      font-size: 0.75rem;

      &::before {
        content: "";
        width: 0.75rem;
        height: 0.375rem;
        position: absolute;
        left: 0;
        top: 50%;
        transform: translateY(-50%);
        background-position: center center;
        background-repeat: no-repeat;
      }
    }

    &--increase {
      color: theme-color('success');
      &::before {
        background-image: url(data:image/svg+xml;base64,PHN2ZyBmaWxsPSIjMTdjNjcxIiBoZWlnaHQ9IjI0IiB2aWV3Qm94PSIwIDAgMjQgMjQiIHdpZHRoPSIyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4gPHBhdGggZD0iTTcgMTRsNS01IDUgNXoiLz4gPHBhdGggZD0iTTAgMGgyNHYyNEgweiIgZmlsbD0ibm9uZSIvPiA8L3N2Zz4=);
      }
    }

    &--decrease {
      color: theme-color('danger');
      &::before {
        background-image: url(data:image/svg+xml;base64,PHN2ZyBmaWxsPSIjYzQxODNjIiBoZWlnaHQ9IjI0IiB2aWV3Qm94PSIwIDAgMjQgMjQiIHdpZHRoPSIyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4gICAgPHBhdGggZD0iTTcgMTBsNSA1IDUtNXoiLz4gICAgPHBhdGggZD0iTTAgMGgyNHYyNEgweiIgZmlsbD0ibm9uZSIvPjwvc3ZnPg==);
      }
    }
`;

export const LabelStyled = styled.span`
  font-size: 0.75rem;
  letter-spacing: 0.0625rem;
  color: #818ea3;
`;

export const ValueStyled = styled.h6`
  font-size: 2.0625rem;
  font-family: Roboto, -apple-system, BlinkMacSystemFont, 'Segoe UI',
    'Helvetica Neue', Arial, sans-serif;
  font-weight: 500;
  color: #3d5170;
`;

export const PercentageStyled = styled.span`
  &.stats-small__percentage {
    position: relative;
    display: table;
    margin: 0 auto;
    padding-left: 1rem;
    font-size: 0.75rem;

    ::before {
      content: '';
      width: 0.75rem;
      height: 0.375rem;
      position: absolute;
      left: 0;
      top: 50%;
      transform: translateY(-50%);
      background-position: center center;
      background-repeat: no-repeat;
    }
  }

  &.stats-small__percentage--increase {
    color: #17c671;
  }
  &.stats-small__percentage--increase::before {
    background-image: url(data:image/svg+xml;base64,PHN2ZyBmaWxsPSIjMTdjNjcxIiBoZWlnaHQ9IjI0IiB2aWV3Qm94PSIwIDAgMjQgMjQiIHdpZHRoPSIyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4gPHBhdGggZD0iTTcgMTRsNS01IDUgNXoiLz4gPHBhdGggZD0iTTAgMGgyNHYyNEgweiIgZmlsbD0ibm9uZSIvPiA8L3N2Zz4=);
  }
  &.stats-small__percentage--decrease {
    color: #c4183c;
  }
  &.stats-small__percentage--decrease::before {
    background-image: url(data:image/svg+xml;base64,PHN2ZyBmaWxsPSIjYzQxODNjIiBoZWlnaHQ9IjI0IiB2aWV3Qm94PSIwIDAgMjQgMjQiIHdpZHRoPSIyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4gICAgPHBhdGggZD0iTTcgMTBsNSA1IDUtNXoiLz4gICAgPHBhdGggZD0iTTAgMGgyNHYyNEgweiIgZmlsbD0ibm9uZSIvPjwvc3ZnPg==);
  }
`;
