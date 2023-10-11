import { Image, Text, VStack } from '@gluestack-ui/themed';
import React from 'react';

const HeadLogo = (params,) => {
    const { title } = params;
    return (
        <VStack w={"$full"} maxWidth={384} alignItems="center">
            <Image w={112} height={112}
                source={"./assets/Tech-Background-PNG.png"}
                alt="To-do"
            />
            <Text
                mt={40}
                fontSize={24}
                lineHeight={32}
                fontWeight='$bold'
                textAlign='center'
                color='$white'>
                {title}
            </Text>
        </VStack>
    );
};

export default HeadLogo;
