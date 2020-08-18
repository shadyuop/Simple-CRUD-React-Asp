import api from './api';

export const ACTION_TYPES = {
    CREATE: 'CREATE',
    UPDATE: 'UPDATE',
    DELETE: 'DELETE',
    FETCH_ALL: 'FETCH_ALL'

};

export const fetchall = () => dispatch =>
    {
        //get api request
        dispatch({
            type: ACTION_TYPES.FETCH_ALL,
            payload: []
        })
    }
