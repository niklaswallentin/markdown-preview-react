import React from "react";
function handleHtml(html) {
  return { __html: JSON.stringify(html) };
}
const Preview = ({ markdown }) => (
  <div className="Preview" dangerouslySetInnerHTML={{ __html: markdown }} />
);

export default Preview;
