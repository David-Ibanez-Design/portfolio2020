import React from 'react'
import Highlight, { defaultProps } from 'prism-react-renderer'
import theme from 'prism-react-renderer/themes/nightOwl'
import style from './code-block.module.scss'

const CodeBlock = ({ children }) => {
  const { className: langClass, children: code } = children.props
  const language = langClass ? langClass.replace(/language-/, '') : ''

  return (
    <Highlight
      {...defaultProps}
      theme={theme}
      code={typeof code === 'string' ? code.trim() : ''}
      language={language || 'text'}
    >
      {({ className, style: inlineStyle, tokens, getLineProps, getTokenProps }) => (
        <pre className={`${className} ${style.pre}`} style={{ ...inlineStyle, background: '#192038' }}>
          {language && <span className={style.language}>{language}</span>}
          <code className={style.code}>
            {tokens.map((line, i) => (
              <div key={i} {...getLineProps({ line, key: i })} className={style.line}>
                {line.map((token, key) => (
                  <span key={key} {...getTokenProps({ token, key })} />
                ))}
              </div>
            ))}
          </code>
        </pre>
      )}
    </Highlight>
  )
}

export default CodeBlock
