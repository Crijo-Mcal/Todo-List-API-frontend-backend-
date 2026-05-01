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
import {useLogin} from "../hooks/useLogin";

function LoginPage() {
  const {login, error} = useLogin();

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleSutmit = async (): Promise<void> => {
    await login(email, password);
  };

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

        {/* CARD TIDAK DIUBAH SAMA SEKALI */}
        <Card>
          <CardHeader className="text-center">
            <CardTitle>Welcome back</CardTitle>
            <CardDescription>
              Sign in to your account to continue
            </CardDescription>
          </CardHeader>

          <CardContent className="space-y-4">
            <Input
              error={error?.email}
              id="email"
              type="email"
              label="Email"
              placeholder="Enter your email"
              autoComplete="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <Input
              error={error?.password}
              id="password"
              type="password"
              label="Password"
              placeholder="Enter your password"
              autoComplete="current-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </CardContent>

          <CardFooter className="flex-col gap-4">
            <Button onClick={handleSutmit} className="w-full" size="lg">
              Sign in
            </Button>
          </CardFooter>
        </Card>

        <p className="mt-6 text-center text-sm text-muted-foreground">
          Don&apos;t have an account?{" "}
          <Link to="/signup" className="text-primary hover:underline">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
}

export default LoginPage;
