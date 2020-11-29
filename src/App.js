import logo from './logo.svg';
import './App.css';
import React from "react";
import ReactDOM from "react-dom";
import marked from "marked"

marked.setOptions({
  breaks: true
});

const renderer = new marked.Renderer();

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      input: placeholder,
      editorMaximized: false,
      previewMaximized : false
    }
    this.expandText = this.expandText.bind(this);
    this.expandEditor = this.expandEditor.bind(this);
    this.expandPreview = this.expandPreview.bind(this);
  }
    expandText(event){
      this.setState(()=>({
        input: event.target.value
      }));
      // document.getElementById("txt-preview").innerHTML=(marked(this.state.input));
    }
    expandEditor(){
      // var editors = document.getElementsByClassName("editor");
      // console.log(editors);
      // editors.map(val =>{
      //   if(this.state.editorMaximized){
      //     val.classList.remove("maximized");
      //   }else{
      //     val.classList.add("maximized");
      //   }
      // })
      this.setState(state =>({
        editorMaximized : !state.editorMaximized
      }));
    }
    expandPreview(){
      // if(this.state.editorMaximized){
      //   document.getElementsByClassName("preview").classList.remove("maximized");
      // }else{
      //   document.getElementsByClassName("preview").classList.add("maximized");
      // }
      this.setState(state =>({
        previewMaximized : !state.previewMaximized
      }));

    }
    // markText(){
    //   document.getElementById("preview").html(marked(this.state.input));
    // }
    render(){

        if(this.state.editorMaximized == false && this.state.previewMaximized == false){
          return(
            <div className="App">
              <div className="editor">
                  <div className="tool-bar" >
                    <img src={logo} className="App-logo" alt="react logo" />
                    <h4 className="desc">Editor</h4>
                    <img src="expand.png" className="nav-img" alt="expand" onClick = {this.expandEditor}/>
                  </div>
                  <textarea name="name" className="txt-editor" rows ="12" onChange={this.expandText} value={this.state.input}>
                  </textarea>
              </div>
              <div className="preview">
                <div className="tool-bar">
                  <img src={logo} className="App-logo" alt="react logo" />
                  <h4 className="desc">Preview</h4>
                  <img src="expand.png" className="nav-img" alt="expand" onClick = {this.expandPreview}/>
                </div>
                <div className="txt-preview" dangerouslySetInnerHTML={{ __html: marked(this.state.input, { renderer: renderer })}}></div>
              </div>
          </div>);
        }else if(this.state.editorMaximized == true){
          return(
            <div className="App">
              <div className="editor expand" >
                  <div className="tool-bar">
                    <img src={logo} className="App-logo" alt="react logo" />
                    <h4 className="desc">Editor</h4>
                    <img src="minimize.png" className="nav-img" alt="compress" onClick = {this.expandEditor}/>
                  </div>
                  <textarea name="name" rows="12" className="txt-editor" onChange={this.expandText} value={this.state.input}>
                    #Welcome to React editor
                  </textarea>
            </div>
            </div>
          );
        }else{
          return(
            <div className="App">
              <div className="preview expand">
                <div className="tool-bar">
                  <img src={logo} className="App-logo" alt="react logo" />
                  <h4 className="desc">Preview</h4>
                  <img src="minimize.png" className="nav-img" alt="compress" onClick = {this.expandPreview}/>
                </div>
                <div className="txt-preview" dangerouslySetInnerHTML={{ __html: marked(this.state.input, { renderer: renderer })}}></div>
              </div>
            </div>
        );
        }}
}

// class Preview extends React.Component{
//   constructor(props){
//     super(props);
//   }
//   render(){
//     return(
//       <div id="preview">
//         <div className="tool-bar">
//           <img src={logo} className="App-logo" alt="react logo" />
//           <img src="minimize.png" className="nav-img" alt="compress" onClick = {this.expandPreview}/>
//         </div>
//         <div className="txt-preview" dangerouslySetInnerHTML={{ __html: marked(this.state.input, { renderer: renderer })}}></div>
//       </div>
//     )
//   }
// }


const placeholder = `# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:

Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`

You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.com), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | -------------
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbererd lists too.
1. Use just 1s if you want!
1. And last but not least, let's not forget embedded images:

![React Logo w/ Text](https://goo.gl/Umyytc)
`;


export default App;
