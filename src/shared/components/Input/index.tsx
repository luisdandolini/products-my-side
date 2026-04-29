interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

export default function Input({ label, className, ...props }: InputProps) {
  return (
    <>
      <label htmlFor={props.id} className="sr-only">
        {label}
      </label>
      <input {...props} className={className} />
    </>
  );
}
