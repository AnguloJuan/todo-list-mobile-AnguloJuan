import { AddIcon, Button, ButtonIcon, ButtonText, CheckIcon, Checkbox, CheckboxIcon, CheckboxIndicator, CheckboxLabel, CloseIcon, Divider, HStack, Heading, Icon, Input, InputField, Modal, ModalBackdrop, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, Pressable, Text, Textarea, TextareaInput, VStack } from "@gluestack-ui/themed";
import { useState, ref, useRef } from "react";

export default function Todo() {
    const [tasks, setTasks] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [showTaskModal, setShowTaskModal] = useState(false);
    const ref = useRef(null)
    return (
        <VStack
            width="100%"
            height="100%"
            alignContent="center"
            alignItems="center"
            p="$8" >
            <Heading size="2xl" fontWeight="bold" color="white" my="$2">To-do List</Heading>

            <Button
                onPress={() => setShowModal(true)}
                ref={ref}
                size="md"
                variant="solid"
                action="positive"
                alignSelf="flex-start"
                my="$4">
                <ButtonText>Add</ButtonText>
                <ButtonIcon as={AddIcon} />
            </Button>

            <Modal
                isOpen={showModal}
                onClose={() => {
                    setShowModal(false)
                }}
                finalFocusRef={ref}
                size="md"
                scrollBehavior="inside"
            >
                <ModalBackdrop />
                <ModalContent bgColor="$coolGray700">
                    <ModalHeader>
                        <Heading size="lg" color="white">Add a new task</Heading>
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
                            <InputField color="white" placeholder="Task title" />
                        </Input>
                        <Text mt="$4" mb="$2" color="white">Task description</Text>
                        <Textarea variant="outline" size="md" sx={{
                            ":focus": {
                                borderColor: "$blue500"
                            }
                        }}>
                            <TextareaInput color="white" placeholder="Task description" />
                        </Textarea>
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
                                setShowModal(false)
                            }}
                        >
                            <ButtonText color="white">Cancel</ButtonText>
                        </Button>
                        <Button
                            size="sm"
                            action="positive"
                            borderWidth="$0"
                            onPress={() => {
                                setShowModal(false)
                            }}
                        >
                            <ButtonText>Add</ButtonText>
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>

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
                <Text color="white">Description</Text>
                <Divider orientation="vertical" height="100%" />
                <Text color="white">Actions</Text>
            </HStack>

            <Pressable bgColor="$coolGray700" width="100%" p="$3"
                sx={{
                    ":hover": {
                        bgColor: "$coolGray600"
                    }
                }}>
                <HStack width="100%" alignItems="center" justifyContent="space-between">
                    <Checkbox size="md" sx={{
                        ":checked": {
                            _text: {
                                textDecorationLine: "line-through",
                            }
                        }
                    }}>
                        <CheckboxIndicator mr="$2">
                            <CheckboxIcon as={CheckIcon} />
                        </CheckboxIndicator>
                        <CheckboxLabel color="white">Tarea 1</CheckboxLabel>
                    </Checkbox>
                    <Button mx="$1" color="white" variant="link" ref={ref} onPress={() => setShowTaskModal(true)}>Description</Button>
                    <Button size="sm" variant="solid" action="negative" alignSelf="flex-end">
                        <ButtonIcon as={CloseIcon} />
                    </Button>
                </HStack>
            </Pressable>


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
                        <Heading size="lg" color="white">Task</Heading>
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
                            <InputField color="white" placeholder="Task title" />
                        </Input>
                        <Text mt="$4" mb="$2" color="white">Task description</Text>
                        <Textarea variant="outline" size="md" sx={{
                            ":focus": {
                                borderColor: "$blue500"
                            }
                        }}>
                            <TextareaInput color="white" placeholder="Task description" />
                        </Textarea>
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
                                setShowTaskModal(false)
                            }}
                        >
                            <ButtonText>Save</ButtonText>
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </VStack>
    )
}