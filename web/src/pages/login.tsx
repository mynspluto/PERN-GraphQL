import React from 'react'
import {Formik, Form, } from 'formik'
import { FormControl, FormErrorMessage, FormLabel } from '@chakra-ui/form-control';
import { Input } from '@chakra-ui/input';
import { Wrapper } from '../components/Wrapper';
import { InputField } from '../components/InputField';
import { Box, Button } from '@chakra-ui/react';
import { useMutation } from 'urql';
import { useLoginMutation, useRegisterMutation } from '../generated/graphql';
import { toErrorMap } from '../util/toErrorMap';
import { useRouter } from 'next/router';
import { withUrqlClient } from 'next-urql';
import { createUrqlClient } from '../util/createUrqlClient';


const login: React.FC<{}> = ({}) => {
  const router = useRouter();
  const [, login] = useLoginMutation();
  
  return (
    <Wrapper variant="small">
      
      <Formik 
        initialValues={{ username: "", password: ""}}
        onSubmit={async (values, {setErrors}) => {
         
          const response = await login({ options: values})
          if(response.data?.login.errors) {
            setErrors(toErrorMap(response.data.login.errors))
          } else if(response.data?.login.user) {
            router.push("/");
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
                login
            </Button>
             
          </Form>
          </div>
        )}
      </Formik>
    </Wrapper>
  )
};

export default withUrqlClient(createUrqlClient)(login);