import { yupResolver } from "@hookform/resolvers/yup";
import React from "react";
import { FormProvider,  SubmitHandler, useForm } from "react-hook-form";
type FormProps<TFormValues> = {
  onSubmit: SubmitHandler<TFormValues>;
  children: React.ReactNode;
  validationSchema: any;
};

export const Form = <TFormValues extends Record<string, any> = Record<string, any>>({
  onSubmit,
  children,
  validationSchema,
}: FormProps<TFormValues>) => {
  const methods = useForm<TFormValues>({
    resolver: yupResolver(validationSchema),
  });
  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>{children}</form>
    </FormProvider>
  );
};
