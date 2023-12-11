import { FipeItem } from "@/contexts/fipe";
import { Autocomplete, TextField } from "@mui/material";

interface InputProps {
  label: string;
  loading: boolean;
  options: FipeItem[];
  onChange: (value: string) => void;
}

const Input = ({ label, loading, options, onChange }: InputProps) => {
  return (
    <Autocomplete
      fullWidth
      options={options}
      loading={loading}
      onChange={(_, value) => onChange(value?.codigo || '') }
      getOptionLabel={({ nome }) => nome}
      renderInput={(params) => <TextField label={label} {...params} />}
    />
  )
}

export default Input;