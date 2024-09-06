import React from 'react'
import { Link } from 'react-router-dom'

const ColorList = ({colors}) => {
  
    return (
        <div>
            <div>
                <h1>Welcome to the color factory.</h1>
                <div><Link to={'/colors/new'}>Add a color</Link></div>
            </div>
            <div>
                <h1>Please select a color!</h1>
                <ul>
                    {colors.map(color => <li key={color.name}><Link to={`/colors/${color.name.toLowerCase()}`}>{color.name}</Link></li>)}
                </ul>
            </div>
        </div>
    )
}

export default ColorList