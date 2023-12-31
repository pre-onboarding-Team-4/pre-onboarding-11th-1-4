import axios from 'axios';

const instance = axios.create({
  baseURL: `${process.env.REACT_APP_API_END_POINT}/todos`,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const getTodoList = async () => {
  const response = await instance.get('/');

  return {
    todoList: response.data,
    message: '성공적으로 조회했습니다.',
  };
};

export const createTodo = async (data) => {
  const response = await instance.post('/', { todo: data });

  return {
    data: response.data,
    message: '성공적으로 추가했습니다.',
  };
};

export const updateTodo = async (id, { todo, isCompleted }) => {
  await instance.put(`/${id}`, {
    todo,
    isCompleted,
  });

  return {
    message: '성공적으로 수정했습니다.',
  };
};

export const deleteTodo = async (id) => {
  await instance.delete(`/${id}`);

  return {
    message: '성공적으로 삭제했습니다.',
  };
};

instance.interceptors.request.use(
  (config) => {
    const accessToken = localStorage.getItem('access_token');
    const newConfig = config;
    if (accessToken !== undefined) {
      newConfig.headers.Authorization = `Bearer ${accessToken}`;
    }
    return newConfig;
  },
  (error) => {
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    const { data } = error.response;
    if (!data.message) {
      return Promise.reject(new Error('알 수 없는 에러가 발생했습니다.'));
    }
    return Promise.reject(new Error(data.message));
  }
);
