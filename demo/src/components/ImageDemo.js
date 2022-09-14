import React, { Component } from "react";
import { Pannellum } from "../../../src";
// import { getImage } from "../utils/changeToBlob";
import myImage from "../images/alma.jpg";
import myImage2 from "../images/milan.jpg";

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
            image={getImage(imageUrl)}
            pitch={10}
            yaw={this.state.yaww}
            hfov={120}
            autoLoad
            author={this.state.author}
            title=""
          >
            <Pannellum.Hotspot
              type="info"
              pitch={11}
              yaw={-167}
              text="Info Hotspot Text 3"
              URL="https://github.com/farminf"
            />

            <Pannellum.Hotspot
              type="custom"
              pitch={31}
              yaw={150}
              handleClick={(evt, args) => this.hanldeClickImage(evt, args)}
              handleClickArg={{ name: "test" }}
            />
          </Pannellum>
        </div>
      </div>
    );
  }
}
