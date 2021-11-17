import * as React from 'react';
import * as ReactNavigation from 'react-navigation';
import {connect} from 'react-redux';
import {RootState} from '../Reducers';
import AppNavigation from './AppNavigation';

export interface StateProps {
  nav: any;
}

type Props = StateProps;

class ReduxNavigation extends React.Component<Props> {
  public render() {
    return <AppNavigation />;
  }
}

const mapStateToProps = (state: RootState): StateProps => ({nav: state.nav});
export default connect(mapStateToProps)(ReduxNavigation);