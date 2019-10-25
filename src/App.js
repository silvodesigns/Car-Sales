import React from 'react';
import { connect } from 'react-redux';



import Header from './components/Header';
import AddedFeatures from './components/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeatures';
import Total from './components/Total';
import { ADD_FEATURE , REMOVE_FEATURE} from './actions';
import { valueToNode } from '@babel/types';

const App = (props) => {

  
  console.log(props);

  const removeFeature = item => {
    // dispatch an action here to remove an item
        props.dispatch({type: REMOVE_FEATURE, payload: item})
  
  };

  const buyItem = item => {
    // dipsatch an action here to add an item
    props.dispatch({type: ADD_FEATURE, payload: item})
  };

  return (
    <div className="boxes">
      <div className="box">
        <Header  />
        <AddedFeatures removeFeature={removeFeature}  />
      </div>
      <div className="box">
        <AdditionalFeatures buyItem={buyItem}/>
        <Total  />
      </div>
    </div>
  );
};

function mapStateToProps(state){
  return{
    state: state
  }

}

export default connect(mapStateToProps)(App);
