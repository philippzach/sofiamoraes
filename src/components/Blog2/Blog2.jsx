import React from 'react';
import Tachyons from 'tachyons';
import styles from './Blog2.module.scss';
import header from './pics/header.png';
import square from './pics/square.png';

const Blog2 = () => (
  <div>
    <article className="ph4 ph5-ns pt4 pt5-ns mb6">
      <p className="tr ">April 17</p>
      <img className="mw-100 pb3" src={header} />
      <div className="cf">
        <header className="fn-m fl-ns w-50-ns pr4-ns pb3">
          <h1 className="f2-m lh-title fw9 mb3 mt0 pt3 bt bw2">The Art of Color Correction in Instagram Times</h1>
          <h2 className="f3-m mid-gray lh-title">An excerpt from the Form of the Book by Jan Tschichold</h2>
          <time className="f6-m ttu tracked gray">Sometime before 1967</time>
        </header>
        <div className="fn-m fl-ns w-50-ns">
          <p className="f5-m lh-copy measure mt0-ns">
            TYPOGRAPHY, even when poorly executed, can never be taken for granted; nor is it ever accidental. Indeed,
            beauti- fully typeset pages are always the result of long experience. Now and then they even attain the rank
            who constantly ponders matters of readability and legibility, it is difficult to determine whether something
            can be read with ease, but the average reader will rebel at once when the type is too small or otherwise
            irritates the eye; both are signs of a certain illegibility already.
          </p>
          <p className="f5-m lh-copy measure">
            All typography consists of letters. These appear either in the form of a smoothly running sentence or as an
            assembly of lines, which may even have contrasting shapes. Good typog- raphy begins, and this is no minor
            too wide or too compressed, will spoil almost any typeface.
          </p>
          <div className="cf">
            <div className="fl w-50 pa2">
              <img src={square} />
            </div>
            <div className="fl w-50 pa2">
              <img src={square} />
            </div>
            <div className="fl w-50 pa2">
              <img src={square} />
            </div>
            <div className="fl w-50 pa2">
              <img src={square} />
            </div>
          </div>
          <blockquote className="athelas ml0 mt0 pl4 black-90 bl bw2">
            <p className="f5 f4-m f3-l lh-copy measure mt0">
              Discipline in typography is a prime virtue. Individuality must be secured by means that are rational.
            </p>
            <cite className="f6 ttu tracked fs-normal">―Stanley Morison</cite>
          </blockquote>
          <img src={header} className="mw-100" />
          <p className="f5 lh-copy measure">
            All typography consists of letters. These appear either in the form of a smoothly running sentence or as an
            assembly of lines, which may even have contrasting shapes. Good typog- raphy begins, and this is no minor
            too wide or too compressed, will spoil almost any typeface.
          </p>
        </div>
      </div>
    </article>
  </div>
);

export default Blog2;
