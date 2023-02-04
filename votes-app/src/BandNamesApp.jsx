import React from 'react'
import { HomePage } from './HomePage'
import { SocketProvider } from './context/SocketContext'

export const BandNamesApp = () => {
    return (
        <SocketProvider>
            <HomePage />
        </SocketProvider>
    )
}
