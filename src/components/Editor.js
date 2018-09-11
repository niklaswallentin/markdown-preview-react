import React, { Component } from "react";

class Editor extends Component {
  updateInput(e) {
    this.props.updateMarkdown(e.target.value);
  }
  render() {
    return (
      <div className="Editor">
        <h2>Editor</h2>
        <textarea
          value={this.props.markdown}
          name=""
          id=""
          style={{
            minWidth: "100%",
            height: "90%",
            border: "0px",
            padding: "2rem",
            fontSize: "16px",
            boxSizing: "border-box",
            resize: "none"
          }}
          onChange={this.updateInput.bind(this)}
        />
      </div>
    );
  }
}

export default Editor;
