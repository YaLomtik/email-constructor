import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { PropsWithChildren } from "react";

const quaeryClient = new QueryClient();

export function Provider({ children }: PropsWithChildren) {
  return (
    <QueryClientProvider client={quaeryClient}>{children}</QueryClientProvider>
  );
}
