import { cn } from "@/lib/utils";
import { Info, AlertTriangle, AlertCircle } from "lucide-react";

interface CalloutVariant {
  variant?: "info" | "warning" | "danger";
}

const Callout = ({
  variant = "info",
  children,
  className,
  ...rest
}: React.HTMLAttributes<HTMLDivElement> & CalloutVariant) => {
  const classValue = cn(
    "border-l-4 p-4 flex flex-col gap-2",
    variant === "info" && "border-info",
    variant === "warning" && "border-warning",
    variant === "danger" && "border-danger",
    className,
  );
  return (
    <aside className={classValue} {...rest}>
      {variant === "info" && (
        <div className="flex gap-2 text-info items-center">
          <Info className="h-4 w-4" />
          <div className="font-bold text-lg">Note</div>
        </div>
      )}
      {variant === "warning" && (
        <div className="flex gap-2 text-warning items-center">
          <AlertTriangle className="h-4 w-4" />
          <div className="font-bold text-lg">Warning</div>
        </div>
      )}
      {variant === "danger" && (
        <div className="flex gap-2 text-danger items-center">
          <AlertCircle className="h-4 w-4" />
          <div className="font-bold text-lgg">Danger</div>
        </div>
      )}
      {children}
    </aside>
  );
};

export default Callout;
