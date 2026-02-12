import { FlatList, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Todo } from "../../hooks/useCreateTodos";
import { Ionicons } from "@expo/vector-icons";
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

type Props = {
    todos: Todo[];
    toggleTodo: (index: number) => void;
    deleteTodo: (index: number) => void;
};

export default function Home({ todos, toggleTodo, deleteTodo }: Props) {
    return (
        <View style={s.container}>
            <View style={s.header}>
                <Text style={s.tabHeader}>My Todos</Text>
                <Text style={s.subtitle}>
                    {todos.length} {todos.length === 1 ? 'task' : 'tasks'}
                </Text>
            </View>
            
            {todos.length === 0 ? (
                <View style={s.emptyState}>
                    <MaterialCommunityIcons
                        name="playlist-edit" 
                        size={100} 
                        style={s.listIcon}
                    />
                    <Text style={s.emptyTitle}>No todos yet</Text>
                    <Text style={s.emptySubtitle}>Create your first task to get started</Text>
                </View>
            ) : (
                <FlatList 
                    data={todos}
                    keyExtractor={(_, index) => index.toString()}
                    contentContainerStyle={s.listContent}
                    renderItem={({ item, index }) => (
                        <View style={s.todoRow}>
                            <TouchableOpacity 
                                onPress={() => toggleTodo(index)}
                                style={s.todoContent}
                            >
                                <View style={[s.checkbox, item.completed && s.checkboxCompleted]}>
                                    {item.completed && <Text style={s.checkmark}>✓</Text>}
                                </View>
                                <Text style={[s.todoText, item.completed && s.completed]}>
                                    {item.title}
                                </Text>
                            </TouchableOpacity>

                            <TouchableOpacity 
                                onPress={() => deleteTodo(index)}
                                style={s.deleteBtn}
                            >
                                <Ionicons
                                    name="trash-bin" 
                                    size={20} 
                                    style={s.binBtn}
                                />
                            </TouchableOpacity>
                        </View>
                    )}
                />
            )}
        </View>
    );
}

const s = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 24,
        paddingTop: 16,
        backgroundColor: "#0F172A",
    },
    header: {
        marginBottom: 24,
    },
    tabHeader: { 
        fontWeight: "bold",
        fontSize: 32,
        color: "#F1F5F9",
        marginBottom: 4,
    },
    subtitle: {
        fontSize: 16,
        color: "#64748B",
    },
    listContent: {
        paddingBottom: 16,
    },
    todoRow: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: 12,
        backgroundColor: "#1E293B",
        paddingHorizontal: 16,
        paddingVertical: 14,
        borderRadius: 12,
        borderWidth: 1,
        borderColor: "#334155",
    },
    todoContent: {
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        gap: 12,
    },
    checkbox: {
        width: 24,
        height: 24,
        borderRadius: 6,
        borderWidth: 2,
        borderColor: "#64748B",
        alignItems: "center",
        justifyContent: "center",
    },
    checkboxCompleted: {
        backgroundColor: "#3B82F6",
        borderColor: "#3B82F6",
    },
    checkmark: {
        color: "#FFFFFF",
        fontSize: 14,
        fontWeight: "bold",
    },
    todoText: {
        flex: 1,
        fontSize: 16,
        color: "#F1F5F9",
    },
    completed: {
        textDecorationLine: "line-through",
        color: "#64748B",
    },
    deleteBtn: {
        padding: 8,
    },
    delete: {
        fontSize: 20,
    },
    emptyState: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        paddingBottom: 80,
    },
    emptyText: {
        fontSize: 64,
        marginBottom: 16,
    },
    emptyTitle: {
        fontSize: 20,
        fontWeight: "bold",
        color: "#F1F5F9",
        marginBottom: 8,
    },
    emptySubtitle: {
        fontSize: 16,
        color: "#64748B",
    },
    binBtn: {
        color: "#DDF2FD"
    },
    listIcon: {
        color: "#DDF2FD",
        justifyContent: "center"
    }
});