import React from 'react';
import Modal from './Modal';
import { connect } from 'react-redux';
import { fetchContact, deleteContact } from '../actions';
import history from '../history';

class ContactDelete extends React.Component {
  componentDidMount() {
    this.props.fetchContact(this.props.match.params.name);
  }

  renderActions() {
    const { name } = this.props.match.params;
    return (
      <>
        <button onClick={() => this.props.deleteContact(name)}className="ui button negative">Delete</button>
        <button onClick={() => history.push('/')} className="ui button">Cancel</button>
      </>
    );
  }

  renderContent() {
    if (!this.props.number){
      return 'Are you sure you want to delete this contact?'
    }
      return `Are you sure want to delete ${this.props.number.name}`
  }

  render() {
    return (
        <Modal
          title="Delete Contact"
          content={this.renderContent()}
          actions={this.renderActions()}
          onDismiss={() => history.push('/')}
          />
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    number : state.numbers[ownProps.match.params.name]};
};

export default connect(mapStateToProps, {fetchContact, deleteContact})(ContactDelete);
