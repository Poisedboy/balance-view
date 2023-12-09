'use client'
import { NextUIProvider } from "@nextui-org/system"

export const NextProvider = ({children}: any) => {
    return (
        <NextUIProvider>
            {children}
        </NextUIProvider>
    )
}