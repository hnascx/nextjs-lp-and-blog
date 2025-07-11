"use client"

import { useEffect } from "react"

export const ErrorComponent = () => {
  useEffect(() => {
    throw new Error("Componente lançando um erro")
  }, [])

  return (
    <div>
      <h2>ErrorComponent</h2>
    </div>
  )
}
