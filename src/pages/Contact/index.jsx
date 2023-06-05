import React from 'react'
import {useForm} from 'react-hook-form'
import InputSection from '../../components/Input'
import { yupResolver } from '@hookform/resolvers/yup';
import { ContactMain } from './index.styles';
import { schema } from '../../utils/schema/contactSchema';
import Button from '../../components/Button';

const Contact = () => {
  const {register, handleSubmit, formState:{errors}} = useForm({resolver: yupResolver(schema)})
 
  const onSubmit = (data) => {console.log(data)}
  return (
    <ContactMain>
      <h1>Contact</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <InputSection id="fullName" hookData="fullName" errors={errors} hookFunction={register} placeholder="Full Name"  inputType="input"/>
        <InputSection id="email" hookData="email" errors={errors} hookFunction={register} placeholder="Email" inputType="input"/>
        <InputSection id="subject" hookData="subject" errors={errors} hookFunction={register} placeholder="Subject"  inputType="input"/>
        <InputSection id="body" hookData="body" errors={errors} hookFunction={register} placeholder="Body" inputType="textarea"/>
        <div className='submit'><Button  type="submit" text="Send"/></div>
      </form>
    </ContactMain>
  )
}

export default Contact