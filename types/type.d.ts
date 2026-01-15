import React from "react";

export type ImageProvider = {
  [key: {}]: string;
};

export type InputProps = {
  label?: string;
  placeholder?: string;
  errorSign?: boolean;
  lefticons?: React.ReactNode;
  sucess?: boolean;
  className: string;
  righticons?: React.ReactNode;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type: string;
  id: string;
  name: string;
  defaultValue?: string | undefined;
};
