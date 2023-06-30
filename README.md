## 📝 TODO 애플리케이션

원티드 프론트엔드 인턴십 1주차 과제

## 팀원

| [@Dain Kim](https://github.com/ekdls1218) | [@guen9310](https://github.com/guen9310) | [@JYROH](https://github.com/ghgt1) | [@Hyeondoonge](https://github.com/Hyeondoonge) | [@JBS](https://github.com/JB-JS) | [@Sangeun Hwang](https://github.com/hsejsx) |
| ----------------------------------------- | ---------------------------------------- | ---------------------------------- | ---------------------------------------------- | -------------------------------- | ------------------------------------------- |
| 김다인                                    | 권부근                                   | 노준영                             | 신현정                                         | 정범수                           | 황상은                                      |

## 실행 방법

1. 먼저 다음 명령어를 사용해서 로컬 환경으로 복사본을 가져옵니다.

```
git clone https://github.com/pre-onboarding-Team-4/pre-onboarding-11th-1-4.git
```

2. 가져온 복사본으로 이동합니다.

```
cd pre-onboarding-11th-1-4
```

3. 가져온 프로젝트의 종속성을 설치하세요.

```
npm install
```

4. 이 프로젝트는 '.env'를 사용합니다. 다음 단계를 따라 .env를 설정해 주세요.

```
1. 루트 디렉토리에 '.env'파일을 생성 합니다.
2. 텍스트 편집기로 '.env' 파일을 엽니다.
3. '.env' 파일에 다음 변수와 해당하는 값을 입력하세요.

REACT_APP_API_END_POINT='https://www.pre-onboarding-selection-task.shop'
```

5. 설치가 완료되었고, .env 설정이 완료 되었다면 다음 명령어로 프로젝트를 실행할 수 있습니다.

```
npm start
```

## 배포 링크

[바로가기](https://pre-onboarding-11th-1-4.netlify.app/)

## 기술 스택

<img src="https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=React&logoColor=black"/> <img src="https://img.shields.io/badge/Javascript-F7DF1E?style=flat-square&logo=javascript&logoColor=black"/> <img src="https://img.shields.io/badge/styled components-DB7093?style=flat-square&logo=styled-components&logoColor=white"/> <img src="https://img.shields.io/badge/Axios-5A29E4?style=flat-square&logo=axios&logoColor=white"/> <img src="https://img.shields.io/badge/React Router-CA4245?style=flat-square&logo=reactrouter&logoColor=white"/> <img src="https://img.shields.io/badge/ESLint-4B32C3?style=flat-square&logo=eslint&logoColor=white"/> <img src="https://img.shields.io/badge/Prettier-F7B93E?style=flat-square&logo=prettier&logoColor=black"/> <img src="https://img.shields.io/badge/Husky-red?style=flat-square&logo=&logoColor=black"/> <img src="https://img.shields.io/badge/Netlify-00C7B7?style=flat-square&logo=&logoColor=black"/>

## 팀규칙

### 1. 커밋 컨벤션

```
- feat: 새로운 기능 추가
- fix: 버그 수정
- docs: 문서 수정
- style: 코드 포맷팅, 세미콜론 누락, 코드 변경이 없는 경우
- refactor: 코드 리펙토링
- test: 테스트 코드, 리펙토링 테스트 코드 추가
- chore: 빌드 업무 수정, 패키지 매니저 수정
- design: 스타일 작업
```

### 2. 파일/폴더 구조

```
📦src
 ┣ 📂apis
 ┃ ┣ 📜auth.js
 ┃ ┗ 📜todo.js
 ┣ 📂components
 ┃ ┣ 📜AuthForm.jsx
 ┃ ┣ 📜Toast.jsx
 ┃ ┣ 📜ToastList.jsx
 ┃ ┣ 📜TodoForm.jsx
 ┃ ┣ 📜TodoHeader.jsx
 ┃ ┣ 📜TodoItem.jsx
 ┃ ┗ 📜TodoList.jsx
 ┣ 📂hooks
 ┃ ┗ 📜useToast.js
 ┣ 📂pages
 ┃ ┣ 📜NotFound.jsx
 ┃ ┣ 📜SignIn.jsx
 ┃ ┣ 📜SignUp.jsx
 ┃ ┗ 📜Todo.jsx
 ┣ 📜App.jsx
 ┣ 📜GlobalStyle.jsx
 ┣ 📜index.jsx
 ┣ 📜router.jsx
 ┗ 📜ToastContext.jsx
```

### 3. Style 컨벤션

```
- Styled-Component를 활용한 스타일링
- style.js를 따로가져가지 않고, 각 jsx 컴포넌트 하단부에 스타일 작성
```

## 서비스 소개

### 1. 기능

- 회원가입
- 로그인 기능
- Todo: 추가, 수정/취소, 삭제 기능
- 직접 만든 Toast UI를 활용한 사용자 피드백
- 토큰 유무에 따른 리다이렉트 기능

| 로그인                   | 회원가입                 |
| ------------------------ | ------------------------ |
| ![Alt text](https://github.com/pre-onboarding-Team-4/pre-onboarding-11th-1-4/assets/35508595/88758c6d-e310-4179-bd44-ea971d483847) | ![Alt text](https://github.com/pre-onboarding-Team-4/pre-onboarding-11th-1-4/assets/35508595/fdfb8618-3870-4f08-844b-a84ea53c9094) |

| 회원가입(유효성검사)     | Image 2                  |
| ------------------------ | ------------------------ |
| ![Alt text](https://github.com/pre-onboarding-Team-4/pre-onboarding-11th-1-4/assets/35508595/c37daaa5-ec66-4840-ac66-88376bb93ea9) | ![Alt text](https://github.com/pre-onboarding-Team-4/pre-onboarding-11th-1-4/assets/35508595/992995a5-51de-4e78-9a17-913ca8f60c9e) |

### 2. Best Practice

> 모든 팀원들이 참여하여 중심 기능을 구현하는 최선의 방법들을 선정했습니다.

---

📌 Todo 컴포넌트 Best Practice 선정

- useReducer를 활용한 Todo 상태 관리

❓선정이유

```javascript
//리듀서 선언
function todoReducer(state, action) {
  switch (action.type) {
    case 'CREATE':
      return state.concat(action.todo);
    case 'TOGGLE':
      return state.map((todo) =>
        todo.id === action.id ? { ...todo, isCompleted: !todo.isCompleted } : todo
      );
    case 'UPDATE':
      return state.map((todo) =>
        todo.id === action.payload.id ? { ...todo, ...action.payload } : todo
      );
    case 'GET':
      return [...action.todos];
    case 'DELETE':
      return state.filter((todo) => todo.id !== action.id);
    default:
      return [];
  }
}

//리듀서 사용
const createToast = useToast();
const [state, dispatch] = useReducer(todoReducer, []);

const getTodos = async () => {
  try {
    const { todoList, message } = await getTodoList();

    dispatch({ type: 'GET', todos: todoList });
    createToast({ message, type: 'success' });
  } catch (error) {
    createToast({ message: error.message, type: 'warn' });
  }
};
```

- Todo라는 상태를 반복되는 여러번의 state로 관리하는 것은 비효율적이었습니다.
- 기존의 구현 방식은 여러번의 setState가 남발되었고 코드도 상당 부분 중복됐었습니다.
- 따라서 하나의 `useReducer`를 활용한 Todo 관리가 효율적이라는 결론에 도달했고 미리 만들어둔 dispatch type에 따라서 간단하게 setState를 수행할 수 있었습니다.

---

📌 Route Best Practice 선정

- loader를 활용한 Route단에서의 권한 미들웨어 처리

❓선정이유

- 이번 과제에 있어서 권한(토큰의 유무)에 따라서 리다이렉트 처리를 하는 것이 핵심이었습니다.
- 대부분의 팀원들은 다음과 같이 작업했었습니다.

```javascript
useEffect(() => {
  if (!localStorage.getItem('accessToken')) {
    navigate('/signin');
  } else {
    getTodoList();
  }
}, []);
```

- 특정 페이지에 컴포넌트(페이지)가 마운트됐을때 권한을 확인하고, 리다이렉트를 시키는 로직이었습니다.
- 그러나 해당 로직은 몇가지 문제가 존재합니다
  - useEffect의 실행 타이밍은 컴포넌트 렌더링 이후이다. 따라서 불필요한 컴포넌트 렌더링이 이루어진다
  - useEffect로 처리를 안해도, 불필요하게 해당 파일을 load하고 읽는 과정이 소모된다.
- 따라서 저희는 페이지 라우팅 이전에 이런 권한 체크의 필요성을 느꼈고 `React-Router-Dom v6`의 `loader`라는 기능을 활용하여 라우트 단계에서의 권한 처리를 수행하였습니다.

```javascript
const privateMiddleware = () => {
  const jwt = localStorage.getItem('access_token');
  if (jwt) {
    return true;
  }
  return redirect('/signin');
};

const publicMiddleware = () => {
  const jwt = localStorage.getItem('access_token');
  if (jwt) {
    return redirect('/todo');
  }
  return true;
};

const route = [
  {
    path: '',
    loader: () => redirect('/signin'),
    errorElement: <NotFound />,
  },
  {
    path: '/todo',
    element: <Todo />,
    loader: privateMiddleware,
  },
  {
    path: '/signin',
    element: <SignIn />,
    loader: publicMiddleware,
  },
  {
    path: '/signup',
    element: <SignUp />,
    loader: publicMiddleware,
  },
];
```

- `loader`는 컴포넌트가 생성전에 특정 작업을 수행하게 해줍니다. 따라서 컴포넌트 접근 전에 권한 체크를 `privateMiddleware`와 `publicMiddleware`로 수행하여 불필요한 컴포넌트 로드와 렌더링을 사전에 차단하였습니다.

---

📌 Toast UI Best Practice 선정

- `Context API`를 활용한 전역 Toast UI 배열 상태 관리

❓선정이유

- 팀원들은 모두 특정 동작(api 호출이나 localStorage 비우기)에 대한 유저 피드백이 있으면 좋겠다는 의견이 있었습니다.
- 사전과제 진행시 Toast UI 라이브러리를 사용한 팀원도 있었고 직접 만든 팀원도 있었습니다.
- 이번 기회에 제대로 Toast UI를 만들어보면 좋겠다는 의견이 나왔고 개발에 착수했었습니다.

```javascript
// Toast 선언
export default function Toast({ children }: { children: ReactNode }) {
  return createPortal(
    <Styled.Toast>{children}</Styled.Toast>,
    document.getElementById('toast') as HTMLElement
  );
}

// Toast 사용(각 컴포넌트에서 다음과 같이 호출)
const [toast, setToast] = useState({ message: '', index: 0 });
setToast((toast) => ({ message: result.message, index: toast.index + 1 }));
```

- 기존에 개발된 Toast에는 여러가지 문제가 있었습니다.
- Portal을 이용한 root와의 분리작업은 좋았으나

  - Toast를 최대 한개만 호출 가능하고
  - Toast를 쓰려는 컴포넌트에서 매번 State 생성과 setToast작업이 필요하다는 점이었습니다.

- 따라서 이부분에 개선점을 두고 작업하였습니다

```javascript
export const ToastContext = createContext(null);

export default function ToastsContextProvier({ children }) {
  const [toasts, setToasts] = useState([]);
  const data = useMemo(() => [toasts, setToasts], [toasts]);

  return (
    <ToastContext.Provider value={data}>
      {children}
      {createPortal(
        <ToastList>
          {toasts.map(({ message, type }, idx) => (
            <Toast type={type} key={idx}>
              {message}
            </Toast>
          ))}
        </ToastList>,
        document.getElementById('toast')
      )}
    </ToastContext.Provider>
  );
}
```

- 우선 여러개의 Toast를 다루기 위해 배열로 상태를 관리하였습니다. 이 배열은 `ToastContext.jsx`에서 전역 관리하여 각 페이지에서 무분별하게 state를 생성, 관리하지 않게 수정하였습니다.
- 해당 작업을 진행하기 위해 `Context API`를 활용하였습니다.
- 이상태에서 Toast를 사용하려면 Context로부터 배열을 꺼내고, 추가하는 작업이 필요했습니다.
  - 이 작업은 Toast가 필요한 모든 파일에서 반복될 것이기에, custom hook을 활용하여 추상화하기로 했습니다.

```javascript
export default function useToast() {
  const toastContext = useContext(ToastContext);

  if (!toastContext) throw new Error('Toast provider를 추가해주세요');

  const [toasts, setToasts] = toastContext;

  const createToast = (toast) => {
    setToasts([...toasts, toast]);
  };

  return createToast;
}
```

- 위와 같은 `useToast`훅을 생성하여 커스텀 훅으로 편하게 사용 가능하도록 작업하였습니다.

---

📌 Axios 사용 Best Practice 선정

- axios instance와 interceptor를 활용한 공통 헤더 설정, 에러 처리

❓선정이유

- 팀내에서 api를 대부분 axios를 활용하여 구성하였었습니다.
- 이때 반복되는 api header 설정이 많았는데 이를 최소화하기 위한 axios instance와 interceptor의 활용이 좋아보였습니다.

```javascript
const instance = axios.create({
  baseURL: `${process.env.REACT_APP_API_END_POINT}/todos`,
  headers: {
    'Content-Type': 'application/json',
  },
});

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
```

- axios instance를 생성하여 baseUrl과 content-type을 공통적으로 명시해줬습니다.
- request interceptor를 활용하여 access_token을 동적으로 주입하였습니다.
  - 이를 통해 api호출시의 안전장치와 auth인증을 컴포넌트로부터 분리할 수 있었습니다.
- 또한 response interceptor에서는 error를 공통적으로 가로채서 api에 전역적으로 방어로직을 추가할 수 있었습니다.

---

📌 제어컴포넌트 vs 비제어 컴포넌트

- state를 활용한 제어 컴포넌트 방식 사용

❓선정이유

- 로그인/회원가입 Input 기능 구현 중 과연 Input 상태관리가 필요한 가에 대한 궁금증이 팀내에 존재하였습니다.
- state를 활용한 제어 컴포넌트와 DOM ref를 활용한 비제어 컴포넌트 중 어떤 방식이 좋은가에 대한 의논이 생기게 되었습니다.
- 우선 비제어 컴포넌트 이용시, 상태관리 없이 코드를 더 간결하게 작성할 수 있는 이점이 있었습니다. 상태 관리 없이 submit 단계에서의 DOM ref를 통하여 값을 불러오기만 하면 됐기 때문입니다.

```javascript
// 비제어 컴포넌트 활용
 const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const $input = event.target as AuthFormEventTarget;
    const email = $input.email.value;
    const password = $input.password.value;

    const res = await Api.signIn({ email, password });
    if ('message' in res) {
      setToast((toast) => ({ message: res.message, index: toast.index + 1 }));
    } else {
      localStorage.setItem('access_token', res.access_token);
      naviagte(TODO_URL);
    }
  };
```

- 그러나 요구사항을 분석해본 결과 이메일, 비밀번호 field의 유효성을 검사하여 에러를 출력하거나, button의 활성화 상태를 변경하는 작업이 필요했습니다.
- 그리고 이 작업은 필드 값들을 상태를 이용해 관리하면 쉽게 구현할 수 있었습니다.
- 즉 실시간으로 검증이 필요한(validation)값들을 다룰때 제어 컴포넌트가 훨씬 유리하다는 결론에 도달하였고 useState를 이용한 `onChange`상태관리를 사용하였습니다.

```javascript
// 제어 컴포넌트 활용
const [auth, setAuth] = useState({
  email: '',
  pw: '',
});

const emailOnChange = (e) => {
  const emailInput = {
    ...auth,
    [e.target.name]: e.target.value,
  };
  setAuth(emailInput);
};
```
