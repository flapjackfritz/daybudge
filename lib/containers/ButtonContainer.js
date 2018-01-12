import { connect } from 'react-redux';
import { Button } from 'react-bootstrap';

const mapDispatchToProps = (dispatch) => {
  return {
    onClick: () => {
      dispatch({
        type: 'CLEAR_STORAGE'
      });
    }
  };
};

const ButtonContainer = connect(
  null,
  mapDispatchToProps
)(Button);

export default ButtonContainer;
