import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate checking local storage or API
    const storedUser = localStorage.getItem('xulo_user');
    if (storedUser) {
      try {
        setUser(JSON.parse(storedUser));
      } catch (error) {
        console.error("Failed to parse user data:", error);
        localStorage.removeItem('xulo_user');
      }
    }
    setLoading(false);
  }, []);

  const login = async (email, password) => {
    // Mock Login Logic
    // In a real app, this would be an API call
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (email === 'admin@xulo.com' && password === 'admin') {
          const userData = {
            id: '1',
            name: 'Super Admin',
            email: 'admin@xulo.com',
            role: 'super_admin',
            avatar: 'https://ui-avatars.com/api/?name=Super+Admin&background=random'
          };
          setUser(userData);
          localStorage.setItem('xulo_user', JSON.stringify(userData));
          resolve(userData);
        } else if (email === 'teacher@xulo.com' && password === 'teacher') {
          const userData = {
            id: '2',
            name: 'John Teacher',
            email: 'teacher@xulo.com',
            role: 'teacher',
            avatar: 'https://ui-avatars.com/api/?name=John+Teacher&background=random'
          };
          setUser(userData);
          localStorage.setItem('xulo_user', JSON.stringify(userData));
          resolve(userData);
        } else {
          reject(new Error('Invalid credentials'));
        }
      }, 1000);
    });
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('xulo_user');
  };

  const value = {
    user,
    login,
    logout,
    loading
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};
