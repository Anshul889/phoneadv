import React from 'react';
import { connect } from 'react-redux';
import { fetchContacts } from '../actions';
import history from '../history';

class Welcome extends React.Component {
  componentDidMount(){
    this.props.fetchContacts()
    .then(history.push('/numberlist'))
  }

  render(){
    return(
    <div></div>
    )
  }
}

export default connect(null, { fetchContacts })(Welcome);
