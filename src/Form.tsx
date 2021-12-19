import { yupResolver } from "@hookform/resolvers/yup";
import React from "react";
import { DeepPartial, FormProvider,  SubmitHandler, UnpackNestedValue, useForm } from "react-hook-form";
type FormProps<TFormValues> = {
  onSubmit: SubmitHandler<TFormValues>;
  children: React.ReactNode;
  validationSchema: any;
  defaultValues?: UnpackNestedValue<DeepPartial<TFormValues>>
};

export const Form = <TFormValues extends Record<string, any> = Record<string, any>>({
  onSubmit,
  children,
  validationSchema,
  defaultValues
}: FormProps<TFormValues>) => {
  const methods = useForm<TFormValues>({
    resolver: yupResolver(validationSchema),
    defaultValues: defaultValues
  });
  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>{children}</form>
    </FormProvider>
  );
};
