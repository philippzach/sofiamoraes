import React from "react"
//import Tachyons from 'tachyons';
import styles from "./Blog1.module.scss"
import img1 from "./pics/0003.jpg"

const Blog1 = () => (
  <div className={styles.background}>
    <div className={styles.container}>
      <main className="cf">
        <div className="fl w-100 w-two-thirds-ns pa2">
          <div className="aspect-ratio aspect-ratio--1x1">
            <img
              src={img1}
              className="db bg-center cover aspect-ratio--object"
            />
          </div>
        </div>
        <div className="fl w-100 w-third-ns pa2">
          <div className="aspect-ratio aspect-ratio--1x1">
            <h2>The art of color correction in Instagram times</h2>
            <p>Mar 10 | Photography</p>
          </div>
        </div>
        <div className="fl w-100 w-third-ns pa2">
          <div className="aspect-ratio aspect-ratio--1x1">
            <img
              src={img1}
              className="db bg-center cover aspect-ratio--object"
            />
          </div>
        </div>
      </main>
      <main className="cf">
        <div className="fl w-100 w-third-ns pa2">
          <div className="aspect-ratio aspect-ratio--1x1">
            <img
              src={img1}
              className="db bg-center cover aspect-ratio--object"
            />
          </div>
        </div>
        <div className="fl w-100 w-third-ns pa2">
          <div className="aspect-ratio aspect-ratio--1x1">
            <img
              src={img1}
              className="db bg-center cover aspect-ratio--object"
            />
          </div>
        </div>
        <div className="fl w-100 w-third-ns pa2">
          <div className="aspect-ratio aspect-ratio--1x1">
            <img
              src={img1}
              className="db bg-center cover aspect-ratio--object"
            />
          </div>
        </div>
        <div className="fl w-100 w-third-ns pa2">
          <div className="aspect-ratio aspect-ratio--1x1">
            <img
              src={img1}
              className="db bg-center cover aspect-ratio--object"
            />
          </div>
        </div>
        <div className="fl w-100 w-third-ns pa2">
          <div className="aspect-ratio aspect-ratio--1x1">
            <img
              src={img1}
              className="db bg-center cover aspect-ratio--object"
            />
          </div>
        </div>
        <div className="fl w-100 w-third-ns pa2">
          <div className="aspect-ratio aspect-ratio--1x1">
            <img
              src={img1}
              className="db bg-center cover aspect-ratio--object"
            />
          </div>
        </div>
      </main>
    </div>
  </div>
)

export default Blog1
