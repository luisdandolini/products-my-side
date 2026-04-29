type ButtonProps = React.ComponentProps<"button"> & {
  children: React.ReactNode;
  className?: string;
};

export default function Button({ children, className, ...props }: ButtonProps) {
  return (
    <button {...props} className={className}>
      {children}
    </button>
  );
}
