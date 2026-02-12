import { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import Home from './components/screens/Home';
import CreateTodo from './components/screens/CreateTodo';
import { useCreateTodos } from './hooks/useCreateTodos';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function App() {
  const [activeTab, setActiveTab] = useState<"main" | "create">("main");
  const todoHook = useCreateTodos();

  return (
    <SafeAreaProvider>
      <SafeAreaView style={s.safe} edges={['top']}>
        <View style={s.content}>
          {activeTab === "main" ? (
            <Home {...todoHook} />
          ) : (
            <CreateTodo {...todoHook} />
          )}
        </View>

        <View style={s.toggleTabBtn}>
          {/* Get All Todos Tab */}
          <TouchableOpacity 
            onPress={() => setActiveTab("main")}
            style={[s.tabButton, activeTab === "main" && s.activeTab]}
          >
            <Ionicons 
              name="list" 
              size={20} 
              color={activeTab === "main" ? "#FFFFFF" : "#94A3B8"} 
            />
            <Text style={[s.tabLabel, activeTab === "main" && s.activeTabLabel]}>
              Todos
            </Text>
          </TouchableOpacity>
          
          {/* Create Todo Tab */}
          <TouchableOpacity 
            onPress={() => setActiveTab("create")}
            style={[s.tabButton, activeTab === "create" && s.activeTab]}
          >
            <Ionicons 
              name="add-circle" 
              size={20} 
              color={activeTab === "create" ? "#FFFFFF" : "#94A3B8"} 
            />
            <Text style={[s.tabLabel, activeTab === "create" && s.activeTabLabel]}>
              Create
            </Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const s = StyleSheet.create({
  safe: { 
    flex: 1, 
    backgroundColor: "#0F172A" 
  },
  content: {
    flex: 1,
  },
  toggleTabBtn: {
    flexDirection: "row",
    backgroundColor: "#1E293B",
    borderTopWidth: 1,
    borderTopColor: "#334155",
    paddingVertical: 12,
    paddingHorizontal: 16,
    justifyContent: "space-around",
    gap: 12,
  },
  tabButton: {
    flex: 1,
    flexDirection: "row",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "transparent",
    gap: 8,
  },
  activeTab: {
    backgroundColor: "#3B82F6",
  },
  tabLabel: {
    color: "#94A3B8",
    fontSize: 14,
    fontWeight: "600",
  },
  activeTabLabel: {
    color: "#FFFFFF",
  },
});