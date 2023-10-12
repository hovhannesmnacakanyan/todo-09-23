interface IInputProps {
  type?: "text" | "textarea";
  label: string;
  placeholder?: string;
  value: string;
  onChange: (value: string) => void;
}

export const Input = ({
  type = "text",
  label,
  placeholder,
  value,
  onChange,
}: IInputProps) => {
  return (
    <label>
      {label}
      <input
        onChange={(event) => onChange(event.target.value)}
        placeholder={placeholder}
        type={type}
        value={value}
      />
    </label>
  );
};
