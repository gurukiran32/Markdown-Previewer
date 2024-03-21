import React, {useState} from 'react';
import { marked } from 'marked';

const MarkdownPreviewer = () => {
    const [markdown, setMarkdown] = useState('');
    const [fullScreen, setFullScreen] = useState('');
  
    const handleChange = (e) => {
      setMarkdown(e.target.value);
    };
  
    const toggleFullScreen = (area) => {
      setFullScreen(fullScreen === area ? '' : area);
    };
  
    return (
      <div className={`markdown-previewer ${fullScreen}`}>
        <div className="editorArea">
          <div className="toolbar">
            <a href="#" onClick={() => toggleFullScreen('editor')}>Toggle Full Screen</a>
          </div>
          <textarea 
            id="editor" 
            value={markdown} 
            onChange={handleChange} 
            style={{
              width: fullScreen === 'editor' ? '100%' : '300px', 
              height: fullScreen === 'editor' ? '100vh' : '250px'
            }}
          />
        </div>
        <div className="preview-container">
          <div className="toolbar">
            <a href="#" onClick={() => toggleFullScreen('previewer')}>Toggle Full Screen</a>
          </div>
          <div 
            id="preview" 
            dangerouslySetInnerHTML={{__html: marked(markdown)}}
            style={{
              display: fullScreen === 'previewer' ? 'block' : 'none'
            }}
          ></div>
        </div>
      </div>
    );
};

export default MarkdownPreviewer;