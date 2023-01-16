import React, { Component } from "react";

export default class index extends Component {
  constructor(props: {}) {
    super(props);
  }
  static getDerivedStateFromProps() {}
  static getSnapshotBeforeUpdate() {}
  static getDerivedStateFromError() {}
  shouldComponentUpdate() {
    return true;
  }
  componentDidMount() {}
  // componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {}
  // componentDidUpdate(prevProps: Readonly<{}>, prevState: Readonly<{}>, snapshot?: any): void {}
  componentWillUnmount() {}
  render() {
    return <div>index</div>;
  }
}
// 16.4之前
// 创建时
// constructor()
// componentWillMount()
// componentDidMount()

// 更新时
// componentWillReceiveProps() (props更新)
// shouldComponentUpdate()
// componentWillUpdate ()
// render()
// componentDidUpdate()

// 卸载时
// componentWillUnmount()

// 16.4之后
// 创建时
// constructor()
// static getDerivedStateFromProps()
// render()
// componentDidMount()

// 更新时
// static getDerivedStateFromProps()
// shouldComponentUpdate()
// render()
// getSnapshotBeforeUpdate()
// componentDidUpdate()

// 卸载时
// componentWillUnmount()

// static getDerivedStateFromError()
// componentDidCatch()
