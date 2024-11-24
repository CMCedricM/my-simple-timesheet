import { Session } from "@supabase/supabase-js";
import { supabase } from "@/lib/supabase";
import {
  useContext,
  useState,
  useEffect,
  createContext,
  ReactNode,
} from "react";

interface AuthProviderProps {
  children: ReactNode;
}

const AuthContext = createContext<Session | null>(null);

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [session, setSession] = useState<Session | null>(null);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });
  }, []);

  return (
    <AuthContext.Provider value={session}> {children} </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
