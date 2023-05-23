import React from "react";

class Demo extends React.Component {
  constructor(props) {
    super(props);
    console.log("constructor setState", super.setState.toString());
    console.log("constructor forceUpdate", super.forceUpdate.toString());
  }
  state = { a: 1 };

  // getSnapshotBeforeUpdate(...rest) {
  //   console.log('getSnapshotBeforeUpdate: ', rest, this);
  //   return null;
  // }
  // componentDidUpdate(...rest) {
  //   console.log('componentDidUpdate: ', rest);
  // }
  onClick = () => {
    this.setState(
      (prevState, c, b) => {
        console.log(" c, b: ", c, b);
        return { a: prevState.a + 1 };
      },
      (...arg) => console.log(arg),
    );

    /* 一次render  最后一次的覆盖
      this.setState({ a: this.state.a + 1 });
      this.setState({ a: this.state.a + 1 });
      this.setState({ a: this.state.a + 2 });
    */
    /* 一次render  a + 3 三次的累加
      this.setState((prevState) => ({ a: prevState.a + 1 }));
      this.setState((prevState) => ({ a: prevState.a + 1 }));
      this.setState((prevState) => ({ a: prevState.a + 1 }));
    */

    Promise.resolve().then(() => {
      this.forceUpdate();
      this.forceUpdate();
      this.forceUpdate();
      /* 三次 render a + 3 三次的累加
        this.setState((prevState) => ({ a: prevState.a + 1 }));
        this.setState((prevState) => ({ a: prevState.a + 1 }));
        this.setState((prevState) => ({ a: prevState.a + 1 }));
      */
      /* 三次 render a + 3 三次的累加
        this.setState({ a: this.state.a + 1 });
        this.setState({ a: this.state.a + 1 });
        this.setState({ a: this.state.a + 1 });
      */
    });
  };
  render() {
    console.log("rennder");
    return <button onClick={this.onClick}>按钮{this.state.a}</button>;
  }
}

export default Demo;
