import axios from "axios"

export function _getUsers (){
    return axios.post('https://api.tranhai.net/api/manufacturer/_search', {
        Page: 1,
        PageSize: 10,
      })};