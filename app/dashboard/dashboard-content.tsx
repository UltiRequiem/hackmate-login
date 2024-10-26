'use client';

import { signOut } from 'next-auth/react';
import { LogOut } from 'lucide-react';

export default function DashboardContent({ user }: { user: any }) {
  return (
    <div className="min-h-screen bg-base-200 p-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold">Welcome back, {user.name || user.email}</h1>
            <p className="text-gray-500 mt-2">Here's what's happening with your account today.</p>

          </div>
          <button
            className="btn btn-ghost text-error"
            onClick={() => signOut()}
          >
            <LogOut className="mr-2 h-4 w-4" />
            Sign out
          </button>
        </div>

        <div className="card bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title">Your Dashboard</h2>
            <p>This is your personalized dashboard. Start customizing it by adding your content and features.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
