import axios from 'axios';
import config from '../../config.client';

export default axios.create({
  baseURL: config.api,
});
