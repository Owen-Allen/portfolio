"use client"

import { Button, FormControl, FormErrorMessage, FormLabel, Input, Textarea, Center, useToast } from '@chakra-ui/react'
import { AnyAaaaRecord } from 'dns'
import React, { useState } from 'react'



export default function EmailForm() {
    const toast = useToast()
    const [emailEmpty, setEmailEmpty] = useState(false)
    const [messageEmpty, setMessageEmpty] = useState(false)

    // This is how its done in the docs, a bit odd eh
    // https://chakra-ui.com/docs/components/form-control#error-message 
    // const emailError = emailEmpty
    // const messageError = emailEmpty


    const handleSubmit = async (e: any) => {
        e.preventDefault();

        setEmailEmpty(e.target.email.value == "")
        setMessageEmpty(e.target.message.value == "")

        if (e.target.email.value == "" || e.target.message.value == "") {
            console.log('SHJOULD RETURN')
            return
        }

        // Display loading toast
        const loadingToastId = toast({
            title: 'Sending...',
            status: 'info',
            duration: null, // null duration means it won't automatically close
            isClosable: false,
        });

        try {
            let data = {
                name: e.target.name.value,
                email: e.target.email.value,
                message: e.target.message.value
            };

            let response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            });

            // Check the response status
            if (response.ok) {
                // Display success toast
                toast({
                    title: 'Message Sent!',
                    description: 'Your message has been sent successfully. Thanks for reaching out!',
                    status: 'success',
                    duration: 5000,
                    isClosable: true,
                });
                e.target.reset();
            } else if (response.status == 400) {
                // Display error toast
                toast({
                    title: 'Error',
                    description: 'There was an error sending your message.Please try again, or try contacting me another way.',
                    status: 'error',
                    duration: 5000,
                    isClosable: true,
                });
            }
        } catch (error) {
            console.error('Error:', error);
            // Display error toast
            toast({
                title: 'Error',
                description: 'An unexpected error occurred. Please try again, or try contacting me another way.',
                status: 'error',
                duration: 5000,
                isClosable: true,
            });
        } finally {
            // Close the loading toast
            toast.close(loadingToastId);
        }
    };

    return (
        <form name="contact-form" className="mt-4 w-72 sm:w-3/4" onSubmit={(e) => handleSubmit(e)}>
            <FormControl mb={6} isInvalid={false}>
                <FormLabel htmlFor='name'>Name</FormLabel>
                <Input
                    id='name'
                    placeholder='Alice'
                />
            </FormControl>

            <FormControl isRequired={true} mb={emailEmpty ? 0 : 6} isInvalid={emailEmpty}>
                <FormLabel htmlFor='email'>Email</FormLabel>
                <Input
                    id='email'
                    placeholder='alice@email.com'
                />
                <FormErrorMessage>
                    Don't forget your email!
                </FormErrorMessage>
            </FormControl>

            <FormControl isRequired={true} mb={messageEmpty ? 0 : 6} isInvalid={messageEmpty}>
                <FormLabel htmlFor='message'>Message</FormLabel>
                <Textarea
                    id='message'
                    placeholder='Hi Bob!'
                    size='md'
                />
                <FormErrorMessage>
                    Don't forget the message!
                </FormErrorMessage>
            </FormControl>
            <Center>
                <Button mt={4} type='submit' >
                    Submit
                </Button>
            </Center>
        </form>
    )
}
