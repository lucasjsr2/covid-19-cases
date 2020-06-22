import axios from 'axios';

export async function getDataCovid() {
  return axios.get('https://covid19-brazil-api.now.sh/api/report/v1');
}