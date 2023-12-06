import React, { useState } from "react";
import "./index.scss";
const HomepageCodeEditor = () => {
  const [code, setCode] = useState(
    "<!DOCTYPE html>\n" +
      '<html lang="en">\n' +
      "<head>\n" +
      '  <meta charset="UTF-8">\n' +
      '  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n' +
      "  <title>AGoodBook</title>\n" +
      "  <style>\n" +
      "    h1 {\n" +
      "      display: flex;\n" +
      "      justify-content: center;\n" +
      "      align-items: center;\n" +
      "      height: 100%;\n" +
      "    }\n" +
      "  </style>\n" +
      "</head>\n" +
      "<body>\n" +
      "  <h1>Hello World !</h1>\n" +
      "</body>\n" +
      "</html>",
  );

  const handleEditorChange = (newCode: string) => {
    setCode(newCode);
  };

  return (
    <div className="homepage-code-editor">
      <div className="editor-html">
        <div className="top">
          <li></li>
          <li></li>
          <li></li>
        </div>
        <textarea
          className="textarea-code"
          onChange={(e) => handleEditorChange(e.target.value)}
        >
          {code}
        </textarea>
      </div>
      <div className="preview" dangerouslySetInnerHTML={{ __html: code }}></div>
    </div>
  );
};

export default HomepageCodeEditor;
