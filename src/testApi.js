const BASE_URL = 'https://www.pre-onboarding-selection-task.shop';

const apis = {
  async signIn() {
    const res = await fetch(`${BASE_URL}/auth/signin`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: 'test@test1234',
        password: 'test1234',
      }),
    });

    return res.json();
  },
  async fetchTodos() {
    const { access_token: accessToken } = await apis.signIn();

    const res = await fetch(`${BASE_URL}/todos`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
        'Content-Type': 'application/json',
      },
    });

    const todos = await res.json();

    return todos;
  },
  async createTodo(todo) {
    const { access_token: accessToken } = await apis.signIn();

    const res = await fetch(`${BASE_URL}/todos`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${accessToken}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ todo }),
    });

    const todos = await res.json();

    return todos;
  },
  async updateTodo({ id, todo, isCompleted }) {
    const { access_token: accessToken } = await apis.signIn();

    const res = await fetch(`${BASE_URL}/todos/${id}`, {
      method: 'PUT',
      headers: {
        Authorization: `Bearer ${accessToken}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ todo, isCompleted }),
    });

    const todos = await res.json();

    return todos;
  },
  async deleteTodo(id) {
    const { access_token: accessToken } = await apis.signIn();

    const res = await fetch(`${BASE_URL}/todos/${id}`, {
      method: 'DELETE',
      headers: {
        Authorization: `Bearer ${accessToken}`,
        'Content-Type': 'application/json',
      },
    });

    return res;
  },
};

export default apis;
