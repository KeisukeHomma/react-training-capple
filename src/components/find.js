import React, { Component } from 'react';
import styled from 'styled-components'
import Opening from './components/opening';

export default class Find extends Component {
  render() {
    return (
      <React.Fragment>
        <Opening isPaused={false} isStopped={false} />
        <Container>
          <Header>
            <div>←</div>
            <HeaderTitle>アウトドアが好き</HeaderTitle>
            <HeaderCard>
              <span>■</span>
              <p>255</p>
            </HeaderCard>
          </Header>
          <Card>
            <p>name</p>
            <p>age・place</p>
            <CardImageList>
              <CardImage></CardImage>
              <CardImage></CardImage>
            </CardImageList>
            <CardApeal>
              美容関係の仕事をしています
            </CardApeal>
          </Card>
          <ButtonGroup>
            <Like></Like>
            <SuperLike></SuperLike>
            <UnLike></UnLike>
          </ButtonGroup>
        </Container>
      </React.Fragment>
    )
  }
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  padding: 0 16px;
`;

const HeaderCard = styled.div`
  display: flex;
  align-items: center;
`;

const HeaderTitle = styled.h1`
  flex: 1;
  font-size: 16px;
`;

const Card = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  margin: 0 16px 10px 16px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  border-radius: 16px;
  background: #ccc;
`;

const CardImageList = styled.ul`
  display: flex;
`;

const CardImage = styled.li`
  flex: 0 0 54px;
  height: 54px;
  border-radius: 50%;
  background: white;
`;

const CardApeal = styled.p`
  display: flex;
  align-items: center;
  height: 66px;
  margin: 0 12px 12px;
  background: white;
  border-radius: 12px;
`;

const ButtonGroup = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100px;
`;

const Like = styled.div`
  width: 69px;
  height: 69px;
  border-radius: 50%;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
`;

const SuperLike = styled.div`
  width: 52px;
  height: 52px;
  margin: 0 14px;
  border-radius: 50%;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
`;

const UnLike = styled.div`
  width: 69px;
  height: 69px;
  border-radius: 50%;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
`;
