import React, { Component } from 'react';
import Link from 'gatsby-link';
import Logo from '../Logo/Logo';
import Navbar from '../Navbar/Navbar';
import { push as Menu } from 'react-burger-menu';
import config from '../../../config/SiteConfig';
import styles from './Navigation.module.scss';
import star from './star.svg';

export default class Navigation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menuOpen: false,
    };
    this.handleStateChange = this.handleStateChange.bind(this);
  }

  handleStateChange(state) {
    this.setState({ menuOpen: state.isOpen });
  }

  closeMenu() {
    this.setState({ menuOpen: false });
  }
  render() {
    return (
      <header className={styles.header}>
        <Logo />
        <Navbar />
        <div className={styles.navphone}>
          <Menu
            right
            isOpen={this.state.menuOpen}
            onStateChange={this.handleStateChange}
            width="100%"
            customBurgerIcon={<img src={star} />}
            customCrossIcon={false}
          >
            <ul className={styles.list}>
              <Link to="/about" activeClassName="active" onClick={() => this.closeMenu()}>
                <li className={styles.item}>About</li>
              </Link>

              <Link to="/blogex2" activeClassName="active" onClick={() => this.closeMenu()}>
                <li className={styles.item}>Blog</li>
              </Link>

              <Link to="/hireme" activeClassName="active" onClick={() => this.closeMenu()}>
                <li className={styles.item}>Hire Me</li>
              </Link>
            </ul>
          </Menu>
        </div>
      </header>
    );
  }
}

/*
<header>
  <nav>
    <Link to="/about">
      About
    </Link>
    <Link to="/blog">
      Blog
    </Link>
    <Link to="/hireme">
      Hire Me
    </Link>
  </nav>
</header>
      
*/
