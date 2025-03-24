import React, { ReactNode } from "react";
import { Sidebar } from "@/components/navigation/Sidebar";
import { Header } from "@/components/navigation/Header";

type MainLayoutProps = {
  children: ReactNode;
  title: string;
  currentPath: string;
};

export function ArchivistLayout({ children, title, currentPath }: MainLayoutProps) {
  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar currentPath={currentPath} />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header title={title} />
        <main className="flex-1 overflow-y-auto p-6">
          {children}
        </main>
      </div>
    </div>
  );
}