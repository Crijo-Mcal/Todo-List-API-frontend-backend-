import {useState} from "react";
import {Link} from "react-router-dom";
import {Input} from "../components/ui/Input";
import {Button} from "../components/ui/Button";
import {TodoItem} from "../components/ui/TodoItem";
import {
  CheckSquare,
  Plus,
  Home,
  Calendar,
  Settings,
  LogOut,
  Menu,
  X,
  ListTodo,
  Star,
} from "lucide-react";
import {cn} from "../lib/utils";

// Sample todo data for UI demonstration
const sampleTodos = [
  {id: "1", title: "Review project requirements", completed: true},
  {id: "2", title: "Design dashboard wireframes", completed: true},
  {id: "3", title: "Implement authentication flow", completed: false},
  {id: "4", title: "Write unit tests for components", completed: false},
  {id: "5", title: "Deploy to production", completed: false},
];

function DashboardPage() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [todos, setTodos] = useState(sampleTodos);
  const [newTodo, setNewTodo] = useState("");

  const handleToggle = (id: string) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? {...todo, completed: !todo.completed} : todo,
      ),
    );
  };

  const handleDelete = (id: string) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const handleAddTodo = () => {
    if (newTodo.trim()) {
      setTodos([
        ...todos,
        {id: Date.now().toString(), title: newTodo.trim(), completed: false},
      ]);
      setNewTodo("");
    }
  };

  const completedCount = todos.filter((t) => t.completed).length;
  const totalCount = todos.length;

  return (
    <div className="flex min-h-screen">
      {/* Mobile sidebar overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-40 bg-background/80 backdrop-blur-sm lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={cn(
          "fixed inset-y-0 left-0 z-50 flex w-64 flex-col border-r border-border bg-card transition-transform duration-300 lg:static lg:translate-x-0",
          sidebarOpen ? "translate-x-0" : "-translate-x-full",
        )}
      >
        {/* Sidebar header */}
        <div className="flex h-16 items-center justify-between border-b border-border px-4">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
              <CheckSquare className="h-4 w-4 text-primary-foreground" />
            </div>
            <span className="font-semibold text-foreground">TaskFlow</span>
          </div>
          <button
            onClick={() => setSidebarOpen(false)}
            className="lg:hidden text-muted-foreground hover:text-foreground"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 space-y-1 p-4">
          <NavItem icon={Home} label="Dashboard" active />
          <NavItem icon={ListTodo} label="All Tasks" />
          <NavItem icon={Star} label="Important" />
          <NavItem icon={Calendar} label="Calendar" />
          <NavItem icon={Settings} label="Settings" />
        </nav>

        {/* User profile section */}
        <div className="border-t border-border p-4">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
              <span className="text-sm font-medium">JD</span>
            </div>
            <div className="flex-1 min-w-0">
              <p className="truncate text-sm font-medium text-foreground">
                John Doe
              </p>
              <p className="truncate text-xs text-muted-foreground">
                john@example.com
              </p>
            </div>
            <Link
              to="/login"
              className="flex h-8 w-8 items-center justify-center rounded-md text-muted-foreground hover:bg-secondary hover:text-foreground transition-colors"
              title="Logout"
            >
              <LogOut className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </aside>

      {/* Main content */}
      <main className="flex-1">
        {/* Top header */}
        <header className="sticky top-0 z-30 flex h-16 items-center gap-4 border-b border-border bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60 px-4 lg:px-6">
          <button
            onClick={() => setSidebarOpen(true)}
            className="lg:hidden text-muted-foreground hover:text-foreground"
          >
            <Menu className="h-5 w-5" />
          </button>

          <div className="flex-1">
            <h1 className="text-lg font-semibold text-foreground">Dashboard</h1>
            <p className="text-sm text-muted-foreground">
              Welcome back, John! Here&apos;s your task overview.
            </p>
          </div>

          {/* Stats badge */}
          <div className="hidden sm:flex items-center gap-2 rounded-lg bg-secondary px-3 py-1.5">
            <span className="text-sm text-muted-foreground">Completed:</span>
            <span className="text-sm font-medium text-foreground">
              {completedCount}/{totalCount}
            </span>
          </div>
        </header>

        {/* Content area */}
        <div className="p-4 lg:p-6">
          <div className="mx-auto max-w-3xl space-y-6">
            {/* Add todo section */}
            <div className="flex gap-3">
              <div className="flex-1">
                <Input
                  id="new-todo"
                  type="text"
                  placeholder="Add a new task..."
                  value={newTodo}
                  onChange={(e) => setNewTodo(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleAddTodo()}
                />
              </div>
              <Button onClick={handleAddTodo} size="md">
                <Plus className="h-4 w-4 mr-2" />
                Add Task
              </Button>
            </div>

            {/* Todo list */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <h2 className="text-sm font-medium text-muted-foreground">
                  Your Tasks
                </h2>
                <span className="text-xs text-muted-foreground">
                  {todos.filter((t) => !t.completed).length} remaining
                </span>
              </div>

              {todos.length === 0 ? (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-secondary mb-4">
                    <ListTodo className="h-8 w-8 text-muted-foreground" />
                  </div>
                  <h3 className="text-lg font-medium text-foreground">
                    No tasks yet
                  </h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    Add your first task to get started
                  </p>
                </div>
              ) : (
                <div className="space-y-2">
                  {todos.map((todo) => (
                    <TodoItem
                      key={todo.id}
                      {...todo}
                      onToggle={handleToggle}
                      onDelete={handleDelete}
                    />
                  ))}
                </div>
              )}
            </div>

            {/* Progress card */}
            {todos.length > 0 && (
              <div className="rounded-xl border border-border bg-card p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-sm font-medium text-foreground">
                    Progress
                  </h3>
                  <span className="text-2xl font-bold text-primary">
                    {Math.round((completedCount / totalCount) * 100)}%
                  </span>
                </div>
                <div className="h-2 overflow-hidden rounded-full bg-secondary">
                  <div
                    className="h-full rounded-full bg-primary transition-all duration-500"
                    style={{width: `${(completedCount / totalCount) * 100}%`}}
                  />
                </div>
                <p className="mt-3 text-sm text-muted-foreground">
                  You&apos;ve completed {completedCount} out of {totalCount}{" "}
                  tasks. Keep it up!
                </p>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}

// Navigation item component
interface NavItemProps {
  icon: React.ElementType;
  label: string;
  active?: boolean;
}

function NavItem({icon: Icon, label, active}: NavItemProps) {
  return (
    <button
      className={cn(
        "flex w-full items-center gap-3 rounded-lg px-3 py-2 text-sm transition-colors",
        active
          ? "bg-primary/10 text-primary font-medium"
          : "text-muted-foreground hover:bg-secondary hover:text-foreground",
      )}
    >
      <Icon className="h-4 w-4" />
      {label}
    </button>
  );
}

export default DashboardPage;
