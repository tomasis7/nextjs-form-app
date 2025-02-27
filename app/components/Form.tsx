'use client';

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useUserStore } from "../../lib/store";
import InputField from "./InputField";
import PasswordField from "./PasswordField";
import SubmitButton from "./SubmitButton";
import styled from "styled-components";

const FormContainer = styled.form`
  background-color: #f9f9f9;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  
  @media (prefers-color-scheme: dark) {
    background-color: #1a1a1a;
  }
`;

const schema = yup.object().shape({
  name: yup.string().required("Namn är obligatoriskt"),
  email: yup.string().email("Ogiltig e-post").required("E-post är obligatoriskt"),
  password: yup.string().min(6, "Lösenordet måste vara minst 6 tecken").required("Lösenord är obligatoriskt"),
});

export default function Form() {
  const { addUser } = useUserStore();
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  
  const { register, handleSubmit, reset, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data: any) => {
    setLoading(true);
    try {
      await addUser(data);
      alert("Registrering lyckades!");
      reset();
      router.push("/profile");
    } catch (error) {
      alert("Något gick fel!");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <FormContainer onSubmit={handleSubmit(onSubmit)}>
      <InputField label="Namn" name="name" register={register} error={errors.name?.message} />
      <InputField label="E-post" name="email" register={register} error={errors.email?.message} />
      <PasswordField name="password" register={register} error={errors.password?.message} />
      <SubmitButton text={loading ? "Skickar..." : "Registrera"} disabled={loading} />
    </FormContainer>
  );
}