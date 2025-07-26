import { useState } from "react";
import type { ResponseDTO } from "@/utils/apiTypes";
import type { LoginResponseData } from "@/pages/user/types";
import { login } from "@/pages/user/userService";




const LoginTest = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [result, setResult] = useState<ResponseDTO<LoginResponseData> | null>(null);

  const handleLogin = async () => {
    const response = await login(email, password);
    setResult(response);
  };

  return (
    <div>
      <h2>login test</h2>
      <div>
        <label>
          이메일:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
      </div>
      <div>
        <label>
          비밀번호:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
      </div>
      <button onClick={handleLogin}>
        로그인 요청 보내기
      </button>

      {result && (
        <pre>
          {JSON.stringify(result, null, 2)}
        </pre>
      )}

    </div>
  );
};

export default LoginTest;