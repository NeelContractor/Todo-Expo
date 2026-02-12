import { useState } from "react";
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { Todo } from "../../hooks/useCreateTodos";

type Props = {
    todos: Todo[];
    addTodo: (text: string) => void;
};

export default function CreateTodo({ addTodo }: Props) {
    const [text, setText] = useState("");

    const handleAddTodo = () => {
        if (text.trim()) {
            addTodo(text.trim());
            setText("");
        }
    };

    return (
        <View style={s.container}>
            <View style={s.header}>
                <Text style={s.tabHeader}>Create New Todo</Text>
                <Text style={s.subtitle}>Add a new task to your list</Text>
            </View>

            <View style={s.inputContainer}>
                <TextInput 
                    value={text}
                    onChangeText={setText}
                    placeholder="What needs to be done?"
                    placeholderTextColor="#64748B"
                    style={s.inputBox}
                />
            </View>

            <TouchableOpacity 
                style={[s.addTodoBtn, !text.trim() && s.addTodoBtnDisabled]}
                onPress={handleAddTodo}
                disabled={!text.trim()}
            >
                <Text style={s.addTodoBtnText}>
                Add Todo
                </Text>
            </TouchableOpacity>
        </View>
    );
}

const s = StyleSheet.create({
    container: {
        flex: 1,
        padding: 24,
        backgroundColor: "#0F172A",
    },
    header: {
        marginBottom: 32,
    },
    tabHeader: { 
        fontWeight: "bold",
        fontSize: 32,
        color: "#F1F5F9",
        marginBottom: 8,
    },
    subtitle: {
        fontSize: 16,
        color: "#64748B",
    },
    inputContainer: {
        marginBottom: 24,
    },
    inputBox: { 
        borderWidth: 2, 
        borderColor: "#334155",
        backgroundColor: "#1E293B",
        color: "#F1F5F9",
        fontSize: 16,
        paddingHorizontal: 16,
        paddingVertical: 14,
        borderRadius: 12,
    },
    addTodoBtn: {
        backgroundColor: "#3B82F6",
        paddingVertical: 16,
        borderRadius: 12,
        alignItems: "center",
        shadowColor: "#3B82F6",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 8,
        elevation: 4,
    },
    addTodoBtnDisabled: {
        backgroundColor: "#334155",
        shadowOpacity: 0,
    },
    addTodoBtnText: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#FFFFFF",
    },
});