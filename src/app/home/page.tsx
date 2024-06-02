"use client";
import React from "react";
import { useAuth } from "@/context/index";
import AuthGuard from "@/components/AuthGuard";

const Home: React.FC = () => {
  const { currentUser } = useAuth();
  return (
    <AuthGuard>
      <div className="container mx-auto py-10 min-h-screen">
        <div className="max-w-lg mx-auto border border-gray-300 p-6 rounded-md shadow-md">
          <h1 className="text-3xl font-semibold text-center mb-6">
            Welcome To Our Home{" "}
            {currentUser && currentUser.email ? currentUser.email : ""}
          </h1>
        </div>
      </div>
    </AuthGuard>
  );
};

export default Home;
