import React from "react";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
type FormProps<TFormValues> = {
  onSubmit: SubmitHandler<TFormValues>;
  children: React.ReactNode;
};

export const Form = <TFormValues extends Record<string, any> = Record<string, any>>({
  onSubmit,
  children,
}: FormProps<TFormValues>) => {
  const methods = useForm<TFormValues>();
  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>{children}</form>
    </FormProvider>
  );
};
