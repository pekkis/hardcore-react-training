import axios from './axios';

export default {
  all: () => axios.get('/person').then(r => r.data),
}
