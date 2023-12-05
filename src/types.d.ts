declare module "monaco-editor" {
  export = monaco;
}

declare namespace monaco {
  namespace editor {
    function defineTheme(
      themeName: string,
      themeData: monaco.editor.IStandaloneThemeData,
    ): void;

    function setTheme(themeName: string): void;
  }
}
