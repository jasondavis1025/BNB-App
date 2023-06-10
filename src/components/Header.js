import React from 'react'

const Header = (props) => {
  return (
    <header className="header">
        <h1>{props.title}</h1>
        <div className='headersList'>
            {props.headerList.map((item) => {
                return <div id={item.id} className="headerItem">{item.title}</div>
            })}
        </div>
    </header>
  )
}

Header.defaultProps = {
    title: "Opal's Cottage",
}

export default Header