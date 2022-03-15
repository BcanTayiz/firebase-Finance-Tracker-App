import React from 'react'

import styles from './Navbar.module.css'
import {Link} from 'react-router-dom'

export default function Navbar() {
  return (
    <div className={styles.navbar}>
    <nav>
        <section>
        <div className={styles.title}>My Money </div>

        <div><Link to="/login">Login</Link></div>
        <div><Link to="/signup">Signup</Link></div>
            
        </section>
    </nav>
  </div>
  )
}
