import React, { Component } from "react";
import { Pannellum } from "../../../src";
import myImage from "../images/alma.jpg";
import myImage2 from "../images/milan.jpg";

// const img = getImage('https://zhangjianxin-1258826895.cos.ap-guangzhou.myqcloud.com/milan.jpg')

export default class ImageDemo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mediaPhoto: myImage,
      yaww: 180,
      test: false,
      author: "HanYiTech"
    };
    this.ref = React.createRef();
  }

  hanldeClickImage = (evt, args) => {
    console.log(args.name);
    this.setState({
      mediaPhoto: myImage2
    });
  };

  handleClick = () => {
    this.setState({
      mediaPhoto: myImage2,
      test: false
    });
  };

  render() {
    return (
      <div className="image_main">
        <div style={{ display: "flex", flexDirection: "row" }}>
          <button
            onClick={() =>
              this.setState(prevState => ({ yaww: prevState.yaww + 10 }))
            }
          >
            {" "}
            change yaw{" "}
          </button>
          <button
            onClick={() => {
              this.setState({ test: true, yaww: 100, mediaPhoto: myImage });
            }}
          >
            {" "}
            enable{" "}
          </button>
          <div>
            {this.state.test && (
              <button onClick={this.handleClick}> disable </button>
            )}
          </div>
        </div>
        <h2 className="section_title">Image Component</h2>
        <div className="pannellum_div">
          <Pannellum
            ref={this.ref}
            width="800px"
            height="400px"
            type='cubemap'
            image={this.state.mediaPhoto}
            pitch={10}
            yaw={this.state.yaww}
            hfov={120}
            autoLoad
            author={this.state.author}
            title=""
            autoRotate="1" // 自动旋转，可填转动角速度
            cubeMap={["https://img.alicdn.com/imgextra/i4/O1CN014TNffn1nlaTfA98Fg_!!6000000005130-0-tps-1500-1500.jpg",
                      "https://img.alicdn.com/imgextra/i3/O1CN01LsO1Bk20QbKpFTUQr_!!6000000006844-0-tps-1500-1500.jpg",
                      "https://img.alicdn.com/imgextra/i1/O1CN01sS5m781ya6JgLSaVk_!!6000000006594-0-tps-1500-1500.jpg",
                      "https://img.alicdn.com/imgextra/i3/O1CN01uTWCLc1XOCOuA92H0_!!6000000002913-0-tps-1500-1500.jpg",
                      "https://img.alicdn.com/imgextra/i4/O1CN016lU3YJ1JdrJuFTcWt_!!6000000001052-0-tps-1500-1500.jpg",
                      "https://img.alicdn.com/imgextra/i2/O1CN01nYe2Mn1ohkmBVyKpp_!!6000000005257-0-tps-1500-1500.jpg",]}
          >
            <Pannellum.Hotspot
              type="info"
              pitch={11}
              yaw={-167}
              text="Info Hotspot Text 3"
              URL="https://github.com/farminf"
            />
            {/* 这些可点击热点可以实现场景的转换 */}
            <Pannellum.Hotspot
              type="custom"
              pitch={0}
              yaw={110}
              handleClick={(evt, args) => this.hanldeClickImage(evt, args)}
              handleClickArg={{ name: "changeScene" }}
            />
          </Pannellum>
        </div>
      </div>
    );
  }
}
