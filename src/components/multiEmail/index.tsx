import { useState } from 'react';
import { ReactMultiEmail } from 'react-multi-email';
import './style.css';

export default function MultiEmail() {
  const [emails, setEmails] = useState([]);
  const [focused, setFocused] = useState(false);

  const emailChange = (_emails: any) => {
    setEmails(_emails.target.emails);
  }
  return (
    <div className="multiEmail">
      <ReactMultiEmail
        placeholder={
          <>
            <span>입력/등록/삭제</span><span style={{ color: '#1890ff' }}>이메일 형식 폼</span>
          </>
        }
        emails={emails}
        onChange={emailChange}
        autoFocus={true}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        onKeyDown={evt => {
          console.log(evt);
        }}
        onKeyUp={evt => {
          console.log(evt);
        }}
        getLabel={(
          email: string,
          index: number,
          removeEmail: (index: number) => void
        ) => {
          return (
            <div data-tag key={index}>
              {email}
              <span data-tag-handle onClick={() => removeEmail(index)}>
                ×
              </span>
            </div>
          );
        }}
      />
    </div>
  );
}
