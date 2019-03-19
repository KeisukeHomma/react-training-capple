import * as React from 'react';
import Lottie from 'react-lottie';
import * as animationData from '../logo.json';

// interface Props {
//   isStopped: boolean;
//   isPaused: boolean;
// }

class Opening extends React.Component {
// class Opening extends React.Component<Props> {
  // constructor(props: any) {
  //   super(props);
  //   this.state = {isStopped: false, isPaused: false};
  // }

  // public state: Props = {
  //   isStopped: false,
  //   isPaused: false
  // };

  render() {
    // const buttonStyle = {
    //   display: 'block',
    //   margin: '10px auto'
    // };

    const defaultOptions = {
      autoplay: true,
      animationData: animationData,
      loop: true,
      rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice'
      }
    };

    return <div>
      <Lottie options={defaultOptions}
              height={400}
              width={400}
              isStopped={this.props.isStopped}
              isPaused={this.props.isPaused}/>
      {/* <button style={buttonStyle} onClick={() => this.setState({isStopped: true})}>stop</button>
      <button style={buttonStyle} onClick={() => this.setState({isStopped: false})}>play</button>
      <button style={buttonStyle} onClick={() => this.setState({isPaused: !this.state.isPaused})}>pause</button> */}
    </div>
  }
}

export default Opening;
