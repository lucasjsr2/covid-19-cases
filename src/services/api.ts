import axios from 'axios';
import { StateData } from '../types';

const BASE_URL = 'https://covid19-brazil-api.now.sh/api/report/v2';

export async function fetchCovidData(): Promise<StateData[]> {
  const { data } = await axios.get<{ data: StateData[] }>(BASE_URL);
  return data.data;
}
