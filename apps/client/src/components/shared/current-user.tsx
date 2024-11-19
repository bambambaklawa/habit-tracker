import { createContext, useState, useContext, useEffect } from "react";

const CurrentUserContext = createContext(null);

export const useCurrentUser = () => useContext(CurrentUserContext);

export const CurrentUserProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [currentUser, setCurrentUser] = useState(null);

  const createUser = async () => {
    try {
      const response = await fetch("http://localhost:8080/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: "testUser",
          password: "testPassword",
          email: "test@example.com",
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to create user");
      }

      const data = await response.json();
      const userId = data.userData.id;
      setCurrentUser(userId);
    } catch (error) {
      console.error("Error creating user:", error);
    }
  };

  useEffect(() => {
    createUser();
  }, []);

  return (
    <CurrentUserContext.Provider value={{ currentUser, setCurrentUser }}>
      {children}
    </CurrentUserContext.Provider>
  );
};
