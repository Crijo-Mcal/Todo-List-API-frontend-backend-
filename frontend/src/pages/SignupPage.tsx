import {Link} from "react-router-dom";
import {Input} from "../components/ui/Input";
import {Button} from "../components/ui/Button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "../components/ui/Card";
import {CheckSquare} from "lucide-react";
import {useState} from "react";
import {useSingUp} from "../hooks/useSingUp";

function SignupPage() {
  const {err, resister} = useSingUp();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [name, setName] = useState<string>("");

  function handleSubmit() {
    resister(name, email, password);
  }

  return (
    <div className="flex min-h-screen items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="mb-8 flex items-center justify-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
            <CheckSquare className="h-5 w-5 text-primary-foreground" />
          </div>
          <span className="text-xl font-semibold text-foreground">
            TaskFlow
          </span>
        </div>

        <Card>
          <CardHeader className="text-center">
            <CardTitle>Create an account</CardTitle>
            <CardDescription>Get started with TaskFlow today</CardDescription>
          </CardHeader>

          <CardContent className="space-y-4">
            <Input
              error={err?.name}
              id="name"
              type="text"
              label="Full name"
              placeholder="Enter your name"
              autoComplete="name"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <Input
              error={err?.email}
              id="email"
              type="email"
              label="Email"
              placeholder="Enter your email"
              autoComplete="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Input
              error={err?.password}
              id="password"
              type="password"
              label="Password"
              placeholder="Create a password"
              autoComplete="new-password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <p className="text-xs text-muted-foreground">
              Password must be at least 8 characters long
            </p>
          </CardContent>

          <CardFooter className="flex-col gap-4">
            <Button onClick={handleSubmit} className="w-full" size="lg">
              Create account
            </Button>

            <p className="text-center text-xs text-muted-foreground">
              By creating an account, you agree to our{" "}
              <button className="text-primary hover:underline">
                Terms of Service
              </button>{" "}
              and{" "}
              <button className="text-primary hover:underline">
                Privacy Policy
              </button>
            </p>
          </CardFooter>
        </Card>

        <p className="mt-6 text-center text-sm text-muted-foreground">
          Already have an account?{" "}
          <Link to="/login" className="text-primary hover:underline">
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
}

export default SignupPage;
