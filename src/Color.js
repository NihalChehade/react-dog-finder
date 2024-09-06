import React, {useEffect} from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom'

const Color = ({ colors }) => {
  const { name } = useParams()


  const navigate = useNavigate();

  const foundColor = colors.find(c => c.name.toLowerCase() === name.toLowerCase());
  // Use useEffect to handle redirection after rendering
  useEffect(() => {
    if (!foundColor) {
      // Redirect to /colors if the color is not found
      navigate("/colors", { replace: true });
    }
  }, [foundColor, navigate]);

  // If the color is not found, don't render anything (as the redirect will happen)
  if (!foundColor) return null;


  return (
    <div style={{ backgroundColor: foundColor.value, height: "100vh" }}>
      <h1>ThIS IS {foundColor.name.toUpperCase()}.</h1>
      <h1>ISN'T IT BEAUTIFUL?</h1>
      <footer><Link to={'/colors'}>GO BACK</Link></footer>
    </div>
  )
}

export default Color