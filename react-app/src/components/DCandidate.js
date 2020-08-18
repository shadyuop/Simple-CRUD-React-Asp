import React, {useState, useEffect} from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions/dCandidate';

const DCandidate = (props) => {

    // const [x, setX] = useState(0)
    // setX(5)

    useEffect(() => {
        props.fetchAllDCandidates()
    }); //hook alternative to componentDidMount, second parameter to access life cycle when certin state changes


    return  (<div>from DCandidtes</div>);
}
 
const mapStateToProps = state => ({    
        dCandidateList: state.dCandidate.list
    })

const mapActionToProps = {
    fetchAllDCandidates: actions.fetchall
}
export default connect(mapStateToProps,mapActionToProps)(DCandidate);