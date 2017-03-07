import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router';
import styles from '../styles';

class Td extends React.Component {
  render() {
    return (
      <td>
        { this.props.value }
      </td>
    )
  }
}
class Tr extends React.Component {
  render() {
    return (
      <tr>
        { this.props.rows.map((index) => {
            return <Td key={ index } value={ index } />;
          }) }
      </tr>
    )
  }
}

class quotesTable extends React.Component {
  render() {
    return (
      <table>
        <thead>
          <tr>
            <td>合约ID</td>
            <td>最新价</td>
            <td>最高价</td>
            <td>最低价</td>
            <td>开盘价</td>
          </tr>
        </thead>
        <tbody>
          { this.props.datas.map((value, index) => {
              return <Tr key={ index } rows={ value } />;
            }) }
        </tbody>
      </table>
    )
  }
}

/*var MainContainer = require('./MainContainer');
function ConfirmBattle (props) {
  return props.isLoading === true
    ? <Loading/>
    : <MainContainer>
        <h1>Confirm Players</h1>
        <div className='col-sm-8 col-sm-offset-2'>
          <UserDetailsWrapper header='Player 1'>
            <UserDetails info={props.playersInfo[0]} />
          </UserDetailsWrapper>
          <UserDetailsWrapper header='Player 2'>
            <UserDetails info={props.playersInfo[1]} />
          </UserDetailsWrapper>
        </div>
        <div className='col-sm-8 col-sm-offset-2'>
          <div className='col-sm-12' style={styles.space}>
            <button type='button' className='btn btn-lg btn-success' onClick={props.onInitiateBattle}>Initiate Battle!</button>
          </div>
          <div className='col-sm-12' style={styles.space}>
            <Link to='/playerOne'>
              <button type='button' className='btn btn-lg btn-danger'>Reselect Players</button>
            </Link>
          </div>
        </div>
      </MainContainer>
}

ConfirmBattle.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  onInitiateBattle: PropTypes.func.isRequired,
  playersInfo: PropTypes.array.isRequired,
}*/

module.exports = quotesTable;