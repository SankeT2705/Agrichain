import React from 'react'

function Navbar() {
  return (
  <div className='container-flex' >
 <nav class="navbar navbar-expand-lg menuWrapper hover shadow">
  <div class="container-fluid">
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav text-light">
        <li class="nav-item">
          <a class="nav-link active text-light" aria-current="page" href="/">HOME</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active text-light" href="/">ABOUT US</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active text-light" href="/">CONTACT</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active text-light hover" href="/">LOGIN</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar