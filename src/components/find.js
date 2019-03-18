import React, { Component } from 'react';
import styled from 'styled-components'

export default class Find extends Component {
  render() {
    return (
      <React.Fragment>
        <Header>
          <div>←</div>
          <HeaderTitle>アウトドアが好き</HeaderTitle>
          <div>
            <span>■</span>
            <p>255</p>
          </div>
        </Header>
        <Card>
          <p>name</p>
          <p>age・place</p>
          <ul>
            <li>写真</li>
            <li>写真</li>
          </ul>
          <p>
            apeal
          </p>
        </Card>

      </React.Fragment>
    )
  }
}

const Header = styled.div`
  display: flex;
  align-items: center;
  background: #ccc;
  p {
    color: red;
  }
`;

const HeaderTitle = styled.h1`
  flex: 1;
  font-size: 16px;
`;

const Card = styled.div`
  margin: 0 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
`;

