const { useState } = React;

const defaultMarkdown = `# MATRIX HAS YOU...
## :D
[Link](https://www.google.com)
\`Code\`
\`\`\`javascript
// Js
console.log("Hello world");
\`\`\`
- List 1
- List 2
> Cite
**Random text**
![Image](https://via.placeholder.com/150)
`;

function App() {
  const [markdown, setMarkdown] = useState(defaultMarkdown);

  const handleChange = (e) => setMarkdown(e.target.value);

  return (
    <div className="container">
      <h1 className="mb-4 text-center">Markdown Previewer</h1>
      <div className="row g-4">
        <div className="col-md-6">
          <h5>Editor</h5>
          <textarea id="editor" value={markdown} onChange={handleChange}></textarea>
        </div>
        <div className="col-md-6">
          <h5>Preview</h5>
          <div id="preview" dangerouslySetInnerHTML={{ __html: marked.parse(markdown) }}></div>
        </div>
      </div>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
