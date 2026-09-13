"use client";

import { useEffect } from "react";
import { RotateCcw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function AppError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <Card className="mx-auto max-w-lg">
      <CardHeader>
        <CardTitle className="text-base">Что-то слома́лось — something went wrong</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="text-sm text-muted-foreground">
          This page hit an unexpected error. Your progress is safe — try again,
          or head back to the dashboard and pick up where you left off.
        </p>
        <div className="flex gap-2">
          <Button onClick={reset}>
            <RotateCcw className="size-4" /> Try again
          </Button>
          <Button variant="outline" onClick={() => (window.location.href = "/dashboard")}>
            Go to dashboard
          </Button>
        </div>
        {error.digest ? (
          <p className="text-xs text-muted-foreground/70">Error ID: {error.digest}</p>
        ) : null}
      </CardContent>
    </Card>
  );
}
