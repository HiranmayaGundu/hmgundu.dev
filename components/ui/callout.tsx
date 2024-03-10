interface CalloutVariant {
  variant?: "info" | "warning" | "danger";
}

const NeWCallout = ({
  variant = "info",
  ...rest
}: React.HTMLAttributes<HTMLDivElement> & CalloutVariant) => {
  return (
    <aside className="bg-amber-300 border-l-4 border-amber-400 p-4" {...rest} />
  );
};

export default NeWCallout;
