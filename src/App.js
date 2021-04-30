import React, {useState,useEffect} from 'react'
import data from "./data"
import Article from "./Article"

const getStorageTheme=()=>{
  let theme='light-theme'
  if(localStorage.getItem('theme')){
    theme=localStorage.getItem('theme')
  }
  return theme
}

function App(){
  const [theme, setTheme]=useState(getStorageTheme)

  const toggleTheme=()=>{
    if(theme==='light-theme'){
      setTheme('dark-theme')
    }
    else{
      setTheme('light-theme')
    }
  }

  useEffect(() => {
    document.documentElement.className=theme
    localStorage.setItem('theme',theme)
  },[theme])
  
  return(
    <main>
      <nav>
        <div className="nav-center">
          <h1>Quanta World</h1>
          <button className="btn" onClick={toggleTheme}>
            Switch to {theme==='light-theme'?'dark':'light'} theme
          </button>
        </div>
      </nav>
      <section className="articles">
        {data.map((item)=>{
          return(
            <div className="link-styler">
              <Article key={item.id} {...item} />
              <hr/>
            </div>
          )
        })}
      </section>
    </main>
  )
}


export default App