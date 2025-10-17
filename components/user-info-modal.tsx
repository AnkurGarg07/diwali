"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function UserInfoModal() {
  const [isOpen, setIsOpen] = useState(false)
  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")

  useEffect(() => {
    // Check if user info was already submitted
    const userSubmitted = localStorage.getItem("diwali_user_submitted")
    if (!userSubmitted) {
      setIsOpen(true)
    }
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")

    // Validate inputs
    if (!name.trim()) {
      setError("Please enter your name")
      return
    }
    if (!phone.trim() || phone.length < 10) {
      setError("Please enter a valid phone number")
      return
    }

    setIsLoading(true)

    try {
      const response = await fetch("/api/send-user-info", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, phone }),
      })

      if (!response.ok) {
        throw new Error("Failed to submit information")
      }

      // Mark as submitted in localStorage
      localStorage.setItem("diwali_user_submitted", "true")
      setIsOpen(false)
    } catch (err) {
      setError("Failed to send information. Please try again.")
      console.error("[v0] Error submitting user info:", err)
    } finally {
      setIsLoading(false)
    }
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-xl max-w-md w-full p-6 border-2 border-amber-500">
        {/* Header */}
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-amber-900 mb-2">Diwali Special Offer!</h2>
          <p className="text-gray-600">Get exclusive deals on premium phones</p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Your Name</label>
            <Input
              type="text"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full"
              disabled={isLoading}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
            <Input
              type="tel"
              placeholder="Enter your phone number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full"
              disabled={isLoading}
            />
          </div>

          {error && (
            <div className="bg-red-50 border border-red-200 text-red-700 px-3 py-2 rounded text-sm">{error}</div>
          )}

          <Button
            type="submit"
            disabled={isLoading}
            className="w-full bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white font-semibold py-2 rounded-lg transition-all"
          >
            {isLoading ? "Sending..." : "Get Exclusive Offers"}
          </Button>
        </form>

        <p className="text-xs text-gray-500 text-center mt-4">We'll send you exclusive Diwali offers on your phone</p>
      </div>
    </div>
  )
}
