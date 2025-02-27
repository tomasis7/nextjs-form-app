'use client';

import { create } from 'zustand';

interface User {
  id: string;
  name: string;
  email: string;
  password: string;
}

interface UserState {
  users: User[];
  fetchUsers: () => Promise<void>;
  addUser: (user: User) => Promise<void>;
  updateUser: (id: string, updatedUser: Partial<User>) => Promise<void>;
  deleteUser: (id: string) => Promise<void>;
}

const API_URL = "https://json-server-vercel-three-beige.vercel.app/users";

export const useUserStore = create<UserState>((set) => ({
  users: [],

  fetchUsers: async () => {
    try {
      const response = await fetch(API_URL);
      const data = await response.json();
      set({ users: data });
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  },

  addUser: async (user) => {
    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(user),
      });
      const newUser = await response.json();
      set((state) => ({ users: [...state.users, newUser] }));
    } catch (error) {
      console.error("Error adding user:", error);
    }
  },

  updateUser: async (id, updatedUser) => {
    try {
      const response = await fetch(`${API_URL}/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updatedUser),
      });
      const updated = await response.json();
      set((state) => ({
        users: state.users.map((user) => (user.id === id ? updated : user)),
      }));
    } catch (error) {
      console.error("Error updating user:", error);
    }
  },

  deleteUser: async (id) => {
    try {
      await fetch(`${API_URL}/${id}`, {
        method: "DELETE",
      });
      set((state) => ({
        users: state.users.filter((user) => user.id !== id),
      }));
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  },
}));