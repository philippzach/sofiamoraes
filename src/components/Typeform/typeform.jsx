import React from 'react';
import * as typeformEmbed from '@typeform/embed';

class Typeform extends React.Component {
  constructor(props) {
    super(props);
    this.el = null;
  }

  componentDidMount() {
    if (this.el) {
      typeformEmbed.makeWidget(this.el, 'https://sofiamoraesm.typeform.com/to/J3yixU', {
        opacity: 0,
      });
    }
  }

  render() {
    return <div ref={el => (this.el = el)} style={{ width: '100%', height: '650px'}} />;
  }
}

export default Typeform;
