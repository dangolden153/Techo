import React from 'react'
import { CodeBlock, dracula} from 'react-code-blocks'


const Codeblock = ({code, language, showLineNumbers}) => {
    return (
        <CodeBlock
        text={code}
        language={language}
        showLineNumbers={showLineNumbers}
        theme={dracula}
      />
    )
}

export default Codeblock
