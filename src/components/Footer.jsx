import React from "react";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <p style={{color:"#534e52"}}>Copyright ⓒ {year}</p>
      <p style={{color:"#534e52"}}>Hussain Ahmad</p>
    </footer>
  );
}

export default Footer;
