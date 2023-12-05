import React, { useState } from "react";
import MonacoEditor from "react-monaco-editor";
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

  const editorOptions: any = {
    minimap: { enabled: false }, // 禁用代码预览
    lineNumbers: "off",
    scrollbar: {
      verticalScrollbarSize: 0,
      vertical: "hidden", // 隐藏垂直滚动条
    },
    padding: { top: 0, bottom: 0, left: 0, right: 100 }, // 设置 padding 为 0
  };

  return (
    <div className="homepage-code-editor">
      <div className="editor-html">
        <div className="top">
          <li></li>
          <li></li>
          <li></li>
        </div>
        <MonacoEditor
          language="html"
          theme="vs-dark"
          value={code}
          options={editorOptions}
          onChange={handleEditorChange}
        />
      </div>
      <div className="preview" dangerouslySetInnerHTML={{ __html: code }}></div>
    </div>
  );
};
export default HomepageCodeEditor;
