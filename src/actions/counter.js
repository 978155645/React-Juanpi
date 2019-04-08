import axios from 'axios';

export const increase = () => {
  return {
    type: 'INCREASE'
  };
};

export const decrease = () => {
  return {
    type: 'DECREASE'
  };
};

export const getListData = data => {
  return {
    type: 'GETLISTS',
    payload: data
  };
};

export function fetchList(params = { page: 1 }) {
  return dispatch => {
    var url = `http://localhost:3000/product?_page=${params.page}&_limit=5&_order=desc&_sort=id`;
    return axios({
      url: url,
      method: 'get'
    }).then(res => {
      var total = res.headers['x-total-count'];
      var lists = res.data;
      var data = {
        total,
        lists
      };
      dispatch(getListData(data));
    });
  };
}
