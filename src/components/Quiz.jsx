import React from "react";

function Quiz({children}) {
  return (
    <section className="questions-box">
        {children}
    </section>
  )
}


export default Quiz