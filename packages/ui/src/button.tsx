"use client";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

export function Button({
  children,
  className,
  type,
  ...props
}: ButtonProps): React.JSX.Element {
  return (
    // eslint-disable-next-line react/button-has-type -- The rule doesn't understand dynamic inputs
    <button className={className} type={type ?? "button"} {...props}>
      {children}
    </button>
  );
}
