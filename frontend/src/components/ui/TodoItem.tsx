import {cn} from "../../lib/utils";
import {Check, Trash2} from "lucide-react";

export interface TodoItemProps {
  id: string;
  title: string;
  completed: boolean;
  onToggle?: (id: string) => void;
  onDelete?: (id: string) => void;
}

function TodoItem({id, title, completed, onToggle, onDelete}: TodoItemProps) {
  return (
    <div
      className={cn(
        "group flex items-center gap-4 rounded-lg border border-border bg-card/50 p-4",
        "hover:bg-card hover:border-border/80 transition-all duration-200",
        completed && "opacity-60",
      )}
    >
      {/* Checkbox */}
      <button
        onClick={() => onToggle?.(id)}
        className={cn(
          "flex h-5 w-5 shrink-0 items-center justify-center rounded-md border-2 transition-all duration-200",
          completed
            ? "border-primary bg-primary text-primary-foreground"
            : "border-muted-foreground/40 hover:border-primary",
        )}
        aria-label={completed ? "Mark as incomplete" : "Mark as complete"}
      >
        {completed && <Check className="h-3 w-3" />}
      </button>

      {/* Title */}
      <span
        className={cn(
          "flex-1 text-sm text-foreground transition-all duration-200",
          completed && "line-through text-muted-foreground",
        )}
      >
        {title}
      </span>

      {/* Delete button */}
      <button
        onClick={() => onDelete?.(id)}
        className={cn(
          "flex h-8 w-8 items-center justify-center rounded-md text-muted-foreground",
          "opacity-0 group-hover:opacity-100 hover:bg-destructive/10 hover:text-destructive",
          "transition-all duration-200",
        )}
        aria-label="Delete todo"
      >
        <Trash2 className="h-4 w-4" />
      </button>
    </div>
  );
}

export {TodoItem};
