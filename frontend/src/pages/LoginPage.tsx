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

function LoginPage() {
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
            <CardTitle>Welcome back</CardTitle>
            <CardDescription>
              Sign in to your account to continue
            </CardDescription>
          </CardHeader>

          <CardContent className="space-y-4">
            <Input
              id="email"
              type="email"
              label="Email"
              placeholder="Enter your email"
              autoComplete="email"
            />
            <Input
              id="password"
              type="password"
              label="Password"
              placeholder="Enter your password"
              autoComplete="current-password"
            />

            <div className="flex items-center justify-between"></div>
          </CardContent>

          <CardFooter className="flex-col gap-4">
            <Link to="/dashboard" className="w-full">
              <Button className="w-full" size="lg">
                Sign in
              </Button>
            </Link>
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
