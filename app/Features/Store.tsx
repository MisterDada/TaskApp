import { create } from "zustand";
import { persist } from "zustand/middleware";
import AsyncStorage from "@react-native-async-storage/async-storage";

export type Task = {
  id: number;
  title: string;
  completed: boolean;
};

export type CompletedTask = {
  id: number;
  title: string;
  completed: boolean;
};

type TaskStore = {
  tasks: Task[];
  addTask: (task: Task) => void;
  deleteTask: (id: number) => void;
  completeTask: (id: number) => void;
};

type CompletedTaskStore = {
  completedTasks: CompletedTask[];
  addCompletedTask: (task: CompletedTask) => void;
  deleteCompletedTask: (id: number) => void;
};

const useTaskStore = create<TaskStore>()(
  persist(
    (set) => ({
      tasks: [],
      addTask: (task) =>
        set((state) => ({
          tasks: [...state.tasks, { ...task, completed: false }],
        })),
      deleteTask: (id) =>
        set((state) => ({
          tasks: state.tasks.filter((task) => task.id !== id),
        })),
      completeTask: (id) =>
        set((state) => {
          const taskToComplete = state.tasks.find((task) => task.id === id);

          if (taskToComplete) {
            return {
              tasks: state.tasks.filter((task) => task.id !== id).map((task) =>
                task.id === taskToComplete.id
                  ? { ...task, completed: true }
                  : task,
                  console.log("Task completed:", taskToComplete)
              ),
            };
          }
          return state;
        }),
      }),
    {
      name: "task-storage", // 🧠 Key for storage
      storage: {
        getItem: async (name) => {
          const value = await AsyncStorage.getItem(name);
          return value ? JSON.parse(value) : null;
        },
        setItem: async (name, value) => {
          await AsyncStorage.setItem(name, JSON.stringify(value));
        },
        removeItem: async (name) => {
          await AsyncStorage.removeItem(name);
        }
      },
    }
  )
);

const useCompletedTaskStore = create<CompletedTaskStore>()(
  persist(
    (set) => ({
      completedTasks: [],
      addCompletedTask: (task) =>
        set((state) => ({
          completedTasks: [...state.completedTasks, { ...task, completed: true }],
        })),
      deleteCompletedTask: (id) =>
        set((state) => ({
          completedTasks: state.completedTasks.filter((task) => task.id !== id),
        })),
    }),
    {
      name: "completed-task-storage", // 🧠 Key for storage
      storage: {
        getItem: async (name) => {
          const value = await AsyncStorage.getItem(name);
          return value ? JSON.parse(value) : null;
        },
        setItem: async (name, value) => {
          await AsyncStorage.setItem(name, JSON.stringify(value));
        },
        removeItem: async (name) => {
          await AsyncStorage.removeItem(name);
        },
      },
    }
  )
);

export { useTaskStore, useCompletedTaskStore };