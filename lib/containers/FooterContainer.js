import { connect } from 'react-redux';
import Footer from '../components/Footer';

const mapStateToProps = (state) => ({
  newDayStartedDate: state.newDayStartedDate
});

const mapDispatchToProps = (dispatch) => {
  return {
    onClearStorageButtonClick: () => { dispatch({type: 'CLEAR_STORAGE'}); },
    onStartNewDayButtonClick: () => { dispatch({type: 'START_NEW_DAY'}); },
  };
};

const FooterContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Footer);

export default FooterContainer;
