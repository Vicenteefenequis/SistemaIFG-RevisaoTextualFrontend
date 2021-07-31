import { createContext, useCallback, useContext, useState } from "react";
import { apiRevisaoTextual } from "../config/api";

const key = "@RevisaoTextualVicenteWitney:";

const AuthContext = createContext(null);

export function AuthContextProvider({ children }) {
  const [user, setUser] = useState(() => {
    const sessionUser = sessionStorage.getItem(`${key}user`);
    if (!sessionUser) return null;
    const parsedSessionUser = JSON.parse(sessionUser);
    if (!parsedSessionUser) return null;
    return parsedSessionUser;
  });
  const [token, setToken] = useState(() => {
    const sessionToken = sessionStorage.getItem(`${key}token`);
    if (!sessionStorage) return null;
    const parsedSessionToken = JSON.parse(sessionToken);
    if (!parsedSessionToken) return null;
    const { expireAt, token } = parsedSessionToken;
    if (new Date().getTime() > expireAt) return null;
    apiRevisaoTextual.defaults.headers.common[
      "Authorization"
    ] = `Bearer ${token}`;
    return token;
  });

  const handleSignOut = useCallback(() => {
    sessionStorage.clear();
    setUser(null);
    setToken(null);
  }, []);

  const handleSignIn = useCallback(
    async (nomeUsuario, senha) => {
      try {
        const { data } = await apiRevisaoTextual.post("/auth", {
          nomeUsuario,
          senha,
        });
        sessionStorage.setItem(`${key}user`, JSON.stringify(data.user));
        sessionStorage.setItem(
          `${key}token`,
          JSON.stringify({
            expireAt: new Date().getTime() + 60 * 1000 * 15,
            token: data.accessToken,
          })
        );
        setUser(data.user);
        setToken(data.accessToken);
        apiRevisaoTextual.defaults.headers.common[
          "Authorization"
        ] = `Bearer ${data.accessToken}`;
      } catch (e) {
        alert("Falha ao realizar loguin : " + e.response.data.message);
        handleSignOut();
        throw new Error();
      }
    },
    [handleSignOut]
  );

  return (
    <AuthContext.Provider value={{ handleSignIn, token, user, handleSignOut }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  return context;
}
