import React from 'react';
import { styled } from 'styled-components';

const Root = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  padding: 48px 40px;
  border: 1px solid #ccc;
  border-radius: 4px;

  & .title {
    font-size: 32px;
    text-align: center;
    margin-bottom: 30px;
    font-weight: 500;
  }

  & .field,
  & > button {
    width: 400px;
    height: 55px;
    font-size: 18px;
  }

  & .field {
    input {
      width: 100%;
      height: 100%;
      outline: none;
      border: none;
      border: 1px solid #ccc;
      border-radius: 4px;
      padding-left: 10px;
    }
    &:not(:first-child) {
      margin-top: 12px;
    }
  }

  & > button {
    margin-top: 32px;
    outline: none;
    background: none;
    border: none;
    color: #fff;
    background: rgb(0, 98, 231);
    cursor: pointer;

    &:disabled {
      color: rgb(187, 192, 205);
      background: rgb(236, 238, 242);
      cursor: not-allowed;
    }
  }

  & .error {
    margin-top: 12px;
    color: red;
    font-size: 14px;
  }
`;

const FormComp = ({
  name,
  btnId,
  field,
  error,
  onChange,
  onSubmit,
}: {
  name: string;
  btnId: string;
  field: { email: string; password: string };
  error: { email: string; password: string; cond: boolean };
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (e: any) => void;
}) => {
  return (
    <Root>
      <Form onSubmit={onSubmit}>
        <h2 className="title">{name}</h2>
        <div className="field">
          <input
            type="text"
            name="email"
            data-testid="email-input"
            onChange={onChange}
            value={field.email}
            placeholder="이메일"
          />
        </div>
        {error.email && <p className="error">{error.email}</p>}
        <div className="field">
          <input
            type="password"
            name="password"
            data-testid="password-input"
            onChange={onChange}
            value={field.password}
            placeholder="비밀번호"
          />
        </div>
        {error.password && <p className="error">{error.password}</p>}
        <button data-testid={btnId}>{name}</button>
      </Form>
    </Root>
  );
};

export default FormComp;
