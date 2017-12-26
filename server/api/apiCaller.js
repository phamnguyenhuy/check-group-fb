import React, { Component } from 'react';
import axios from 'axios';
import * as Types from '../const/api';
const apiCaller = (endPoint , method, fields = null, limit = null) => {
    return axios({
        method,
        url:`${Types.endPoint}${endPoint}`,
        params: {
            'access_token': Types.token,
            fields: fields,
            limit: limit
        }
    })
    .catch(err => {
        console.log(err);
    })
}
export default apiCaller;
