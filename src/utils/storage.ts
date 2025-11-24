import AsyncStorage from "@react-native-async-storage/async-storage";

export const storage = {
  async set<T = unknown>(key: string, value: T): Promise<void> {
    try {
      const json = JSON.stringify(value);
      await AsyncStorage.setItem(key, json);
    } catch (error) {
      console.log("[storage.set] Error saving", key, error);
      throw error;
    }
  },

  async get<T = unknown>(key: string): Promise<T | null> {
    try {
      const json = await AsyncStorage.getItem(key);
      if (json == null) return null;

      return JSON.parse(json) as T;
    } catch (error) {
      console.log("[storage.get] Error reading", key, error);
      throw error;
    }
  },

  async remove(key: string): Promise<void> {
    try {
      await AsyncStorage.removeItem(key);
    } catch (error) {
      console.log("[storage.remove] Error removing", key, error);
      throw error;
    }
  },

  async clear(): Promise<void> {
    try {
      await AsyncStorage.clear();
    } catch (error) {
      console.log("[storage.clear] Error clearing storage", error);
      throw error;
    }
  },
};
