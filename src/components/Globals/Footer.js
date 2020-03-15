import React from 'react'

export default function Footer () {
  return (
    <footer className="footer py-3">
    <div className="container">
      <div className="row">
        <div className="col-10 mw-auto col-md-6 text-yellow text-center text-capitalize">
          <h3>
            Developed by Abderrahmenlh &copy;{new Date().getFullYear().toString()}
          </h3>
        </div>
      </div>
    </div>
    </footer>
  )
}
