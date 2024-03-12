import React from 'react'
const currentDate = new Date();
function Footer() {
  return (
    <footer>
      <p>Copyright @ {currentDate.getFullYear()}</p>
    </footer>
  )
}

export default Footer
