import React from 'react'
import {Formik, Form, } from 'formik'
import { FormControl, FormErrorMessage, FormLabel } from '@chakra-ui/form-control';
import { Input } from '@chakra-ui/input';
import { Wrapper } from '../components/Wrapper';
import { InputField } from '../components/InputField';
import { Box, Button } from '@chakra-ui/react';
import { useMutation } from 'urql';
import { useRegisterMutation } from '../generated/graphql';
import { toErrorMap } from '../util/toErrorMap';

interface registerProps {}

const register: React.FC<registerProps> = ({}) => {
  const [, register] = useRegisterMutation();
  return (
    <Wrapper variant="small">
      
      <Formik 
        initialValues={{ username: "", password: ""}}
        onSubmit={async (values, {setErrors}) => {
         
          const response = await register(values)
          if(response.data?.register.errors) {
            setErrors(toErrorMap(response.data.register.errors))
          }
        }}
        
      >
        
        {(props) => (
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
              isLoading={props.isSubmitting}
              colorScheme="teal"
              onClick={()=>{console.log('props: ' + JSON.stringify(props))}}
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