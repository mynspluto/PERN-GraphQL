import React from 'react'
import {Formik, Form, } from 'formik'
import { FormControl, FormErrorMessage, FormLabel } from '@chakra-ui/form-control';
import { Input } from '@chakra-ui/input';
import { Wrapper } from '../components/Wrapper';
import { InputField } from '../components/InputField';
import { Box, Button } from '@chakra-ui/react';

interface registerProps {}

const register: React.FC<registerProps> = ({}) => {
  return (
    <Wrapper variant="small">
      
      <Formik 
        initialValues={{ username: "", password: ""}}
        onSubmit={(values) => {
          console.log(values)
        }}
      >
        
        {({isSubmitting}) => (
          <div>
          <Form>
            <InputField
              name="username"
              placeholder="username"
              label="username"
            />
            <Box mt="4">
              <InputField
                name="password"
                placeholder="password"
                label="password"
                type="password"
              />
            </Box>
            <Button 
              mt={4}
              type='submit'
              isLoading={isSubmitting}
              colorScheme="teal"
              >
                register
            </Button>
             
          </Form>
          </div>
        )}
      </Formik>
    </Wrapper>
  )
};

export default register;