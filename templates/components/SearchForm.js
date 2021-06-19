module.exports = `import React, { useState } from "react"
import { useHistory } from "react-router-dom"

const SearchForm = () => {
  const [keyword, setKeyword] = useState("")
  const history = useHistory()

  const searchHandler = (e) => {
    e.preventDefault()
    history.push(\`/search/\${keyword}\`)
    setKeyword("")
  }

  return (
    <form className={classes.search} onSubmit={searchHandler}>
      <input placeholder="Search..." value={keyword} onChange={(e) => setKeyword(e.target.value)} />
      <button type="submit">Search</button>
    </form>
  )
}

export default SearchForm
`