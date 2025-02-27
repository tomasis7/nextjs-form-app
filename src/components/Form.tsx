import { useState } from "react";
import { useForm } from "react-hook-form";
import { useUserStore } from "../store/userStore";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import InputField from "./InputField";
import PasswordField from "./PasswordField";
import SubmitButton from "./SubmitButton";
import { useNavigate } from "react-router-dom";

const schema = yup.object().shape({  
  name: yup.string().required("Namn är obligatoriskt"),
  email: yup.string().email("Ogiltig e-post").required("E-post är obligatoriskt"),
  password: yup.string().min(6, "Lösenordet måste vara minst 6 tecken").required("Lösenord är obligatoriskt"),
});

const Form = () => {
  const { addUser } = useUserStore();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { register, handleSubmit, reset, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data: any) => {  
    setLoading(true)
    try {
      await addUser(data);
      alert("Registrering lyckades!");
      reset();
      navigate("/profile");
    } catch (error) {
      alert("Något gick fel!");
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <InputField label="Namn" name="name" register={register} error={errors.name?.message} />
      <InputField label="E-post" name="email" register={register} error={errors.email?.message} />
      <PasswordField name="password" register={register} error={errors.password?.message} />
      <SubmitButton text={loading ? "Skickar..." : "Registrera"} />
    </form>
  );
};

export default Form;
