module.exports = `import React from "react"

const Message = ({ variant = "primary", children }) => {
  return (
    <div className={\`alert-\${variant}\`}>
      <h3>{children}</h3>
    </div>
  )
}

export default Message
`
