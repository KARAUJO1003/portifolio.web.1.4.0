import React from "react";

export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex flex-col min-h-screen container mx-auto px-4 py-8">
      {children}
    </div>
  );
}
