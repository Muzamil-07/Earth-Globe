import { Button } from "../ui/button";

interface commonBtnProps {
  children: React.ReactNode;
  className?: string;
  icon?: string | React.ReactNode;
}

export default function CommonBtn({ className, children, icon }: commonBtnProps) {
  return (
    <Button
      className={`${className} flex items-center justify-center gap-2 rounded-full py-5 px-5`}
    >
      {children}
      {icon && (
        <span className="text-base font-normal" aria-hidden="true">
          {icon}
        </span>
      )}
    </Button>
  );
}
