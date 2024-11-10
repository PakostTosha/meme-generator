import React, { Component } from "react";
// import TemplateComponent from "./TemplateComponent";

class MemeGenerator extends Component {
  constructor() {
    super();
    this.state = {
      topText: "",
      bottomText: "",
      randomImg: "",
      allMemeImgs: [],
      isClicked: false,
    };

    this.changeHandler = this.changeHandler.bind(this);
    this.submitHandler = this.submitHandler.bind(this);
  }

  componentDidMount() {
    const _URL = "https://api.imgflip.com/get_memes";
    fetch(_URL)
      .then((response) => response.json())
      .then((response) => {
        const { memes } = response.data;
        this.setState({ allMemeImgs: memes });
      });
  }

  changeHandler(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  }

  submitHandler(event) {
    event.preventDefault();
    const randomNumber = Math.floor(
      Math.random() * this.state.allMemeImgs.length
    );
    this.setState({
      randomImg: this.state.allMemeImgs[randomNumber].url,
      // isClicked: true,
    });

    console.log(this.state);
  }

  render() {
    return (
      <div>
        <form className="meme-form" onSubmit={this.submitHandler}>
          <input
            name="topText"
            type="text"
            onChange={this.changeHandler}
            placeholder="TopText"
            value={this.state.topText}
          />
          <input
            name="bottomText"
            type="text"
            onChange={this.changeHandler}
            placeholder="BottomText"
            value={this.state.bottomText}
          />
          <button style={{ cursor: "pointer" }}>Gen</button>
        </form>
        {this.state.topText &&
          this.state.bottomText &&
          this.state.randomImg && (
            <div className="meme">
              <h2 className="top">{this.state.topText}</h2>
              <img
                align="center"
                src={this.state.randomImg}
                alt="Meme"
                style={{ maxHeight: "700px"}}
              />
              <h2 className="bottom">{this.state.bottomText}</h2>
            </div>
          )}
      </div>
    );
  }
}

export default MemeGenerator;
