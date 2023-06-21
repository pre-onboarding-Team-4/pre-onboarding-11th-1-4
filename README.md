# 1. 이름: 김다인

# 2. 프로젝트의 실행 방법
- ### git clone
  ```
  git clone https://github.com/od-log/wanted-pre-onboarding-frontend.git
  ```
- ### 설치
  ```
  npm install
  ```
- ### 실행
   ```
   npm start
   ```

# 3. 파일 구조
```
📦 src
   ├─ apis
   │  ├─ AuthApis.js
   │  └─ ToDoApi.js
   ├─ components
   │  ├─ Header.js
   │  ├─ ToDoItems.js
   │  └─ ToDoList.js
   ├─ css
   │  ├─ Auth.css
   │  ├─ Header.css
   │  └─ ToDo.css
   ├─ pages
   │  ├─ LoginPage.js
   │  ├─ SignUpPage.js
   │  └─ ToDoPage.js
   ├─ index.css
   ├─ index.js
   ├─ App.css
   ├─ App.js
   ├─ App.test.js
   ├─ reportWebVitals.js
   └─ setupTests.js
```

# 4. 기능
  ### [ 회원가입 & 로그인 ]
  - **이메일 유효성 검사 기능(@포함)**
  - **비밀번호 유효성 검사 기능(8자 이상)**
  - **로그인 여부에 따른 리다이렉트 구현**
    - 토큰이 있을 때) 회원가입 -> TODO, 로그인 -> TODO
    - 토큰이 없을 때) TODO -> 로그인
  - **회원가입 성공 시 "/signin" 경로 이동**
  - **로그인 성공 시 JWT는 응답받아 로컬 스토리지에 저장 후 "/todo" 경로로 이동**
 
  ### [ TODO ]
  - **목록 기능**
    - 접속 시 목록 보여주기
      
  - **추가 기능**
    - 입력 input 내용 목록에 추가하기
    - 새로고침 시에도 추가한 내용이 그대로 목록에 남아있기
      
  - **완료 여부 수정**
    
  - **수정 기능**
    - 수정 버튼 클릭 시 수정 모드 활성화
    - 내용 및 완료 여부 수정 후 클릭 시 내용 업데이트 
    - 취소 버튼 넣기
      - 클릭 시 원래대로
      - 수정 모드 비활성화
        
  - **삭제 기능**
    - 클릭 시 해당 내용 삭제

# 5. 배포 링크
https://ekdls1218.github.io/wanted-pre-onboarding-frontend/signup
