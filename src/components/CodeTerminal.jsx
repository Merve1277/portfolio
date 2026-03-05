import { useState, useEffect } from 'react';
import { useLang } from '../i18n/LanguageContext';
import './CodeTerminal.css';

function CodeTerminal() {
  const { t, lang } = useLang();
  const [text, setText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  const codeLines = t.terminal.lines;

  useEffect(() => {
    setText('');
    setCurrentIndex(0);
  }, [lang]);

  useEffect(() => {
    if (currentIndex < codeLines.length) {
      const timeout = setTimeout(() => {
        setText(prev => prev + codeLines[currentIndex] + '\n');
        setCurrentIndex(prev => prev + 1);
      }, 800);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, codeLines]);

  return (
    <div className="code-terminal">
      <div className="terminal-header">
        <div className="terminal-buttons">
          <span className="btn red"></span>
          <span className="btn yellow"></span>
          <span className="btn green"></span>
        </div>
        <div className="terminal-title">merve@macbook ~ zsh</div>
      </div>
      <div className="terminal-body">
        <pre>{text}<span className="cursor">_</span></pre>
      </div>
    </div>
  );
}

export default CodeTerminal;
