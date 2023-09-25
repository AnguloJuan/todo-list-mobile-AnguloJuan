import { Button, Checkbox, CloseIcon, HStack, Heading, Icon, Input, InputField, Modal, ModalBackdrop, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, VStack, Text, ButtonText, CheckIcon, Toast, ToastTitle, ToastDescription, Pressable, useToast, CheckboxIndicator, CheckboxIcon, CheckboxLabel, ButtonIcon } from '@gluestack-ui/themed';
import { useState, ref, useRef } from 'react';

export default function TaskList({
    tasks,
    onChangeTask,
    onDeleteTask
}) {
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
    const [title, setTitle] = useState(task.title);
    const [description, setDescription] = useState(task.description);
    const ref = useRef(null);
    const toast = useToast();

    return (
        <>
            <Checkbox
                size="md"
                isChecked={task.done}
                onChange={e => {
                    console.log(e);
                    onChange({
                        ...task,
                        done: e
                    });
                }}
                sx={{
                    ":checked": {
                        title: {
                            title: "line-through",
                        }
                    }
                }}>
                <CheckboxIndicator mr="$2">
                    <CheckboxIcon as={CheckIcon} />
                </CheckboxIndicator>
                <CheckboxLabel color="white">{task.title}</CheckboxLabel>
            </Checkbox>

            <Button mx="$0.5" minWidth={"$1/3"} color="white" variant="link" ref={ref} onPress={() => setShowTaskModal(true)}>{task.description}</Button>

            <Button size="sm" variant="solid" action="negative" alignSelf="flex-end" onPress={() => onDelete(task.id)}>
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
                                if (document.getElementById('title').value === '') {
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
                                    text: document.getElementById('title').value,
                                    description: document.getElementById('description').value
                                });
                                setShowTaskModal(false);
                            }}
                        >
                            <ButtonText>Save</ButtonText>
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    );
}