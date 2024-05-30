import { PropsWithChildren, useEffect, useState } from "react";

import { Navbar } from "@/components";

export const MainLayout = ({ children }: PropsWithChildren) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="bg-background">
      <Navbar />
      <main className="px-6 overflow-x-hidden pb-16">
        <div className="container mx-auto max-w-5xl mt-10">{children}</div>
      </main>
    </div>
  );
};
