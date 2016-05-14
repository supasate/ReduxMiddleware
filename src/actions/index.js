import { FETCH_USERS } from './types';

const fetchUsers = () => {
  return {
    type: FETCH_USERS,
    payload: [
      { name: 'Jane' },
      { name: 'Alex' },
      { name: 'Jim' }
    ]
  }
};

export {
  fetchUsers,
};
