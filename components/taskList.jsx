import { Button, Checkbox, CloseIcon, HStack, Heading, Icon, Input, InputField, Modal, ModalBackdrop, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, VStack, Text, ButtonText, CheckIcon, Toast, ToastTitle, ToastDescription, Pressable, useToast, CheckboxIndicator, CheckboxIcon, CheckboxLabel, ButtonIcon } from '@gluestack-ui/themed';
import { useState, ref, useRef } from 'react';

export default function TaskList({
    tasks,
    onChangeTask,
    onDeleteTask
}) {
    const [showTaskModal, setShowTaskModal] = useState(false);

    return (
        <VStack width="100%">
            {tasks.map(task => (

                <Pressable
                    bgColor="$coolGray700"
                    width="100%"
                    p="$3"
                    sx={{
                        ":hover": {
                            bgColor: "$coolGray600"
                        }
                    }}
                    key={task.id}>
                    <HStack width="100%" alignItems="center" justifyContent="space-between">
                        <Task
                            task={task}
                            onChange={onChangeTask}
                            onDelete={onDeleteTask}

                        />
                    </HStack>
                </Pressable>
            ))
            }
        </VStack >
    );
}

function Task({ task, onChange, onDelete }) {
    const [showTaskModal, setShowTaskModal] = useState(false);
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [title, setTitle] = useState(task.title);
    const [description, setDescription] = useState(task.description || '');
    const ref = useRef(null);
    const toast = useToast();

    return (
        <>
            <HStack>
                <Checkbox
                    size="md"
                    isChecked={task.done}
                    onChange={e => {
                        console.log(e);
                        onChange({
                            ...task,
                            done: e
                        },
                            onDelete(task.id),
                        );
                    }}>
                    <CheckboxIndicator mr="$2">
                        <CheckboxIcon as={CheckIcon} />
                    </CheckboxIndicator>
                </Checkbox >
                <Button
                    size="md"
                    fontSize={16}
                    color="white"
                    variant="link"
                    overflow='hidden'
                    ref={ref}
                    onPress={() => setShowTaskModal(true)}
                >
                    {task.title}
                </Button>
            </HStack>

            <Button
                mx="$0.5"
                display="none"
                color="white"
                variant="link"
                overflow='hidden'
                sx={{
                    "@lg": {
                        maxWidth: 480,
                    },
                    "@sm": {
                        maxWidth: 240,
                        display: "flex",
                    },
                }}
                ref={ref}
                onPress={() => setShowTaskModal(true)}
            >
                {task.description}
            </Button>

            <Button size="sm" variant="solid" action="negative" onPress={() => setShowDeleteModal(true)}>
                <ButtonIcon as={CloseIcon} />
            </Button>


            <Modal
                isOpen={showTaskModal}
                onClose={() => {
                    setShowTaskModal(false)
                }}
                finalFocusRef={ref}
                size="md"
                scrollBehavior="inside"
            >
                <ModalBackdrop />
                <ModalContent bgColor="$coolGray700">
                    <ModalHeader>
                        <Heading size="lg" color="white">{task.title}</Heading>
                        <ModalCloseButton stroke={"$wihte"} bgColor="$coolGray600">
                            <Icon as={CloseIcon} stroke="white" />
                        </ModalCloseButton>
                    </ModalHeader>
                    <ModalBody color="white">
                        <Text mb="$2" color="white">Task title</Text>
                        <Input
                            variant="outline"
                            size="md"
                            sx={{
                                ":focus": {
                                    borderColor: "$blue500"
                                }
                            }}
                        >
                            <InputField id='title' color="white" placeholder="Task title" value={title} onChange={
                                e => {
                                    setTitle(e.target.value);
                                }
                            } />
                        </Input>
                        <Text mt="$4" mb="$2" color="white">Task description</Text>
                        <Input variant="outline" size="md" sx={{
                            ":focus": {
                                borderColor: "$blue500"
                            }
                        }}>
                            <InputField id='description' color="white" placeholder="Task description" value={description} onChange={
                                e => {
                                    setDescription(e.target.value);
                                }
                            } />
                        </Input>
                    </ModalBody>
                    <ModalFooter>
                        <Button
                            variant="outline"
                            size="sm"
                            action="secondary"
                            mr="$3"
                            sx={{
                                ":hover": {
                                    bgColor: "$coolGray600"
                                }
                            }}
                            onPress={() => {
                                setShowTaskModal(false)
                            }}
                        >
                            <ButtonText color="white">Cancel</ButtonText>
                        </Button>
                        <Button
                            size="sm"
                            action="positive"
                            borderWidth="$0"
                            onPress={() => {
                                if (title === '') {
                                    toast.show({
                                        placement: "top",
                                        render: ({ id }) => {
                                            return (
                                                <Toast nativeId={id} action="error" variant="accent">
                                                    <VStack space="xs">
                                                        <ToastTitle>Error</ToastTitle>
                                                        <ToastDescription>
                                                            Task title cannot be empty
                                                        </ToastDescription>
                                                    </VStack>
                                                </Toast>
                                            )
                                        },
                                    })
                                    return;
                                }
                                onChange({
                                    ...task,
                                    title: title,
                                    description: description
                                });
                                setShowTaskModal(false);
                            }}
                        >
                            <ButtonText>Save</ButtonText>
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>

            <Modal
                isOpen={showDeleteModal}
                onClose={() => {
                    setShowDeleteModal(false)
                }}
                finalFocusRef={ref}
                size="md"
                scrollBehavior="inside"
            >
                <ModalBackdrop />
                <ModalContent bgColor="$coolGray700">
                    <ModalHeader>
                        <Heading size="lg" color="white">Warning</Heading>
                        <ModalCloseButton stroke={"$wihte"} bgColor="$coolGray600">
                            <Icon as={CloseIcon} stroke="white" />
                        </ModalCloseButton>
                    </ModalHeader>
                    <ModalBody color="white">
                        <Text mb="$2" color="white">
                            Are you sure you want to delete this task?
                            This action cannot be undone.
                        </Text>
                    </ModalBody>
                    <ModalFooter>
                        <Button
                            variant="outline"
                            size="sm"
                            action="secondary"
                            mr="$3"
                            sx={{
                                ":hover": {
                                    bgColor: "$coolGray600"
                                }
                            }}
                            onPress={() => {
                                setShowDeleteModal(false)
                            }}
                        >
                            <ButtonText color="white">Cancel</ButtonText>
                        </Button>
                        <Button
                            size="sm"
                            action="positive"
                            borderWidth="$0"
                            onPress={() => {
                                onDelete(task.id);
                                toast.show({
                                    placement: "top",
                                    render: ({ id }) => {
                                        return (
                                            <Toast nativeId={id} action="success" variant="accent">
                                                <VStack space="xs">
                                                    <ToastTitle>Deleted</ToastTitle>
                                                    <ToastDescription>
                                                        Task deleted successfully
                                                    </ToastDescription>
                                                </VStack>
                                            </Toast>
                                        )
                                    },
                                })
                                setShowDeleteModal(false);
                            }}
                        >
                            <ButtonText>Delete</ButtonText>
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    );
}