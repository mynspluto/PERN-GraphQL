import { Box, Button } from '@chakra-ui/react';
import { Form, Formik } from 'formik';
import React from 'react'
import { InputField } from '../components/InputField';
import { Wrapper } from '../components/Wrapper';

interface hiProps {

}

const hi: React.FC<hiProps> = ({}) => {
    return (
      
      <div>
        <div>123</div>
        {({isSubmitting}) => (
          <div>
          456
          </div>
        )}
        {()=>789}
      </div>
      
      
    );
}

export default hi;