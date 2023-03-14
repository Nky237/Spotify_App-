import { createContext, useState } from "react";

export const UserState = createContext(null);

export const UserContext = ({ children }) => {
	const [userDetails, setUserDetails] = useState(null);

	return (
		<UserState.Provider value={{ userDetails, setUserDetails }}>
			{children}
		</UserState.Provider>
	);
};
