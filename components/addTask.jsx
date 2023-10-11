import {
  AddIcon,
  Button,
  ButtonIcon,
  ButtonText,
  HStack,
  Input,
  InputField,
  Toast,
  ToastDescription,
  ToastTitle,
  VStack,
  useToast,
} from "@gluestack-ui/themed";
import { useState } from "react";

export default function AddTask({ onAddTask }) {
  const [title, setTitle] = useState("");
  const toast = useToast();
  return (
    <HStack alignItems="center" gap="$2">
      <Input
        variant="outline"
        size="md"
        sx={{
          ":focus": {
            borderColor: "$blue500",
          },
        }}
      >
        <InputField
          id="title"
          color="white"
          placeholder="Task title"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
      </Input>
      <Button
        size="md"
        variant="solid"
        action="positive"
        alignSelf="flex-start"
        my="$4"
        onPress={() => {
          if (title === "") {
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
                );
              },
            });
            return;
          }
          setTitle("");
          onAddTask(title);
          toast.show({
            placement: "top",
            render: ({ id }) => {
              return (
                <Toast nativeId={id} action="success" variant="accent">
                  <VStack space="xs">
                    <ToastTitle>Task added</ToastTitle>
                    <ToastDescription>
                      {title} added successfully
                    </ToastDescription>
                  </VStack>
                </Toast>
              );
            },
          });
        }}
      >
        <ButtonText>Add</ButtonText>
        <ButtonIcon as={AddIcon} />
      </Button>
    </HStack>
  );
}
