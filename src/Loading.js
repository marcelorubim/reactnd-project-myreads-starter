import React from 'react'
import ReactLoading from 'react-loading'
import PropTypes from 'prop-types';


function Loading(props){
    return props.isLoading && <ReactLoading type='spin' color='green' height='50px' width='50px' delay={0} />
}
export default Loading

Loading.propTypes = {
    isLoading: PropTypes.bool.isRequired
  };