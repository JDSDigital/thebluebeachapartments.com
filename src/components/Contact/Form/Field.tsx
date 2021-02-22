import React from "react";
import { InputLabel, TextField } from "@material-ui/core";

type Props = {
  id: string;
  label: string;
  disabled: boolean;
  onChange: (event: any) => void;
  value: string;
};

const Field = ({ id, label, disabled, onChange, value }: Props) => (
  <>
    <TextField
      fullWidth
      placeholder={label}
      disabled={disabled}
      id={id}
      size="small"
      variant="filled"
      onChange={onChange}
      value={value}
      className="mt-3 mb-3"
    />
  </>
);

export default Field;
