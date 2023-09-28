import { AddIcon, Button, ButtonIcon, ButtonText, CheckIcon, Checkbox, CheckboxIcon, CheckboxIndicator, CheckboxLabel, CloseIcon, Divider, HStack, Heading, Icon, Input, InputField, Modal, ModalBackdrop, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, Pressable, Text, Textarea, TextareaInput, VStack } from "@gluestack-ui/themed";
import { useState, ref, useRef, useReducer } from "react";
import TaskList from "../components/taskList";
import AddTask from "../components/addTask";

export default function Todo() {
    const [showModal, setShowModal] = useState(false);
    const [showTaskModal, setShowTaskModal] = useState(false);
    const ref = useRef(null);
    const [tasks, dispatch] = useReducer(
        tasksReducer,
        initialTasks
    );

    function handleAddTask(title) {
        dispatch({
            type: 'added',
            id: nextId++,
            title: title,
            description: " "
        });
    }

    function handleChangeTask(task) {
        dispatch({
            type: 'changed',
            task: task
        });
    }

    function handleDeleteTask(taskId) {
        dispatch({
            type: 'deleted',
            id: taskId
        });
    }

    return (
        <VStack
            width="100%"
            height="100%"
            alignContent="center"
            alignItems="center"
            p="$8" >
            <Heading size="2xl" fontWeight="bold" color="white" my="$2">To-do List</Heading>

            <AddTask onAddTask={handleAddTask} />

            <HStack
                width="100%"
                height="$10"
                alignItems="center"
                justifyContent="space-between"
                borderTopLeftRadius="$md"
                borderTopRightRadius="$md"
                bgColor="$coolGray800"
                p="$2"
                px="$4">
                <Text color="white">Task</Text>
                <Divider orientation="vertical" height="100%" />
                <Text
                    color="white"
                    display="none"
                    sx={{
                        "@lg": {
                            maxWidth: 480,
                        },
                        "@sm": {
                            maxWidth: 240,
                            display: "flex",
                        },
                    }}
                >
                    Description
                </Text>
                <Divider
                    orientation="vertical"
                    height="100%"
                    display="none"
                    sx={{
                        "@lg": {
                            maxWidth: 480,
                        },
                        "@sm": {
                            maxWidth: 240,
                            display: "flex",
                        },
                    }} />
                <Text color="white">Actions</Text>
            </HStack>

            <TaskList
                tasks={tasks}
                onChangeTask={handleChangeTask}
                onDeleteTask={handleDeleteTask}
            />

        </VStack>
    )
}

function tasksReducer(tasks, action) {
    switch (action.type) {
        case 'added': {
            console.log(action);
            return [...tasks, {
                id: action.id,
                title: action.title,
                done: false
            }];
        }
        case 'changed': {
            return tasks.map(t => {
                if (t.id === action.task.id) {
                    return action.task;
                } else {
                    return t;
                }
            });
        }
        case 'deleted': {
            return tasks.filter(t => t.id !== action.id);
        }
        default: {
            throw Error('Unknown action: ' + action.type);
        }
    }
}

let nextId = 3;
const initialTasks = [
    { id: 0, title: 'Learning React', description: 'Learn React basics, learn reducer hook...jdaskjdbjsadbksdbksjdbakjsbdaskjdbj', done: false },
    { id: 1, title: 'Walk the dog', description: '', done: false },
    { id: 2, title: 'Do the groceries', description: '-Milk, -Bread, -Eggs,... ', done: false }
];
