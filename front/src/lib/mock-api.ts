"use client"

import { QueryClient } from "@tanstack/react-query"
import { mockApi } from "@/data/portfolio-data"

// Create a client
export const queryClient = new QueryClient()

// Mock axios instance (not strictly needed for this static example, but good for structure)
export const axiosMock = {
  get: async (url: string, params?: any) => {
    await new Promise((resolve) => setTimeout(resolve, 100)) // Simulate network delay
    if (url === "/projects") return { data: mockApi.projects.getAll() }
    if (url.startsWith("/projects/")) return { data: mockApi.projects.getById(url.split("/")[2]) }
    if (url === "/skills") return { data: mockApi.skills.getAll() }
    if (url.startsWith("/skills/")) return { data: mockApi.skills.getById(url.split("/")[2]) }
    return { data: null }
  },
  post: async (url: string, data: any) => {
    await new Promise((resolve) => setTimeout(resolve, 100))
    if (url === "/projects") return { data: mockApi.projects.create(data) }
    if (url === "/skills") return { data: mockApi.skills.create(data) }
    return { data: null }
  },
  put: async (url: string, data: any) => {
    await new Promise((resolve) => setTimeout(resolve, 100))
    if (url.startsWith("/projects/")) return { data: mockApi.projects.update(url.split("/")[2], data) }
    if (url.startsWith("/skills/")) return { data: mockApi.skills.update(url.split("/")[2], data) }
    return { data: null }
  },
  delete: async (url: string) => {
    await new Promise((resolve) => setTimeout(resolve, 100))
    if (url.startsWith("/projects/")) return { data: mockApi.projects.delete(url.split("/")[2]) }
    if (url.startsWith("/skills/")) return { data: mockApi.skills.delete(url.split("/")[2]) }
    return { data: null }
  },
}
