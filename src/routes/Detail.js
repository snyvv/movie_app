import React from 'react';

class Detail extends React.Component {
  componenetDidMount() {
    const { location, history } = this.props;
    if (location.state === undefined) {
      history.push('/'); // REVIEW 강제로 Home 이동이 안됨 ㅜㅜ
    }
  }

  render() {
    const { location } = this.props;
    if (location.state) {
      return <span>{location.state.title}</span>;
    } else {
      return <span>잘못된 접근이다!!</span>;
    }
  }
}

export default Detail;