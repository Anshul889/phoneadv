import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchContacts } from '../actions';

class Welcome extends React.Component {
    componentDidMount(){
      this.props.fetchContacts();
    }

  render(){
    return(
    <div>Click here to start using the app <Link to="/numberlist">Start</Link></div>
    )
  }
}

export default connect(null, { fetchContacts })(Welcome);
