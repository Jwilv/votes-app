import { createContext } from "react";
import { useSocket } from "../hooks/useSocket";


export const SocketContext = createContext();

export const SocketProvider = ({ children }) => {

    const { socket, online } = useSocket('http://localhost:5050');

    <SocketContext.Provider value={{ socket, online }}>
        {
            children
        }
    </SocketContext.Provider>
}