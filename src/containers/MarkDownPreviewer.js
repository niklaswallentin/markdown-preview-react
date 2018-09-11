import React, { Component } from "react";
import marked from "marked";

import Editor from "../components/Editor";
import Preview from "../components/Preview";

let defaultMarkdown =
  "# This is a Heading 1\n\n## This is a Heading 2\n\n[this is a link](https://www.google.se)\n\n1. This is a ordered list item.\n2. This is also that.\n\n**The following is some unordered list items.**\n\n* This.\n* This is the way.\n* This is the way I wanna live.\n\nAnd `here is that inline code` that you love so much.\n\n```\nYes, you can of course create blocks\nof code as well.\n```\n\n> This is a quote.\nquotes are awesome examples of the power of markdown editors.\n\n*What better way to end than a self portrait of portrait of you!\n\n![Portrait of you](https://cdn.vox-cdn.com/thumbor/Or0rhkc1ciDqjrKv73IEXGHtna0=/0x0:666x444/1200x800/filters:focal(273x193:379x299)/cdn.vox-cdn.com/uploads/chorus_image/image/59384673/Macaca_nigra_self-portrait__rotated_and_cropped_.0.jpg)";

class MarkDownPreviewer extends Component {
  constructor() {
    super();
    this.state = {
      markdown: "",
      parsedMarkdown: ""
    };

    this.updateMarkdown = this.updateMarkdown.bind(this);
  }

  componentWillMount() {
    let defaultMarkdownParsed = marked(defaultMarkdown);
    this.setState({
      markdown: defaultMarkdown,
      parsedMarkdown: defaultMarkdownParsed
    });
  }

  updateMarkdown(input) {
    let parsedMarkdown = marked(input);
    console.log(parsedMarkdown);
    this.setState({
      markdown: input,
      parsedMarkdown
    });
  }

  render() {
    return (
      <div className="MarkDownPreviewer">
        <Editor
          markdown={this.state.markdown}
          updateMarkdown={this.updateMarkdown}
        />
        <Preview markdown={this.state.parsedMarkdown} />
      </div>
    );
  }
}

export default MarkDownPreviewer;
