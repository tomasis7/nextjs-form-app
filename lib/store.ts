












































































}));  },    }      console.error("Error deleting user:", error);    } catch (error) {      }));        users: state.users.filter((user) => user.id !== id),      set((state) => ({      });        method: "DELETE",      await fetch(`${API_URL}/${id}`, {    try {  deleteUser: async (id) => {  },    }      console.error("Error updating user:", error);    } catch (error) {      }));        users: state.users.map((user) => (user.id === id ? updated : user)),      set((state) => ({      const updated = await response.json();      });        body: JSON.stringify(updatedUser),        headers: { "Content-Type": "application/json" },        method: "PATCH",      const response = await fetch(`${API_URL}/${id}`, {    try {  updateUser: async (id, updatedUser) => {  },    }      console.error("Error adding user:", error);    } catch (error) {      set((state) => ({ users: [...state.users, newUser] }));      const newUser = await response.json();      });        body: JSON.stringify(user),        headers: { "Content-Type": "application/json" },        method: "POST",      const response = await fetch(API_URL, {    try {  addUser: async (user) => {  },    }      console.error("Error fetching users:", error);    } catch (error) {      set({ users: data });      const data = await response.json();      const response = await fetch(API_URL);    try {  fetchUsers: async () => {  users: [],export const useUserStore = create<UserState>((set) => ({const API_URL = "https://json-server-vercel-three-beige.vercel.app/users";}  deleteUser: (id: string) => Promise<void>;  updateUser: (id: string, updatedUser: Partial<User>) => Promise<void>;  addUser: (user: User) => Promise<void>;  fetchUsers: () => Promise<void>;  users: User[];interface UserState {}  password: string;  email: string;  name: string;  id: string;interface User {import { create } from 'zustand';'use client';