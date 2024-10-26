import { redirect } from 'next/navigation';
import { getServerSession } from 'next-auth/next';
import DashboardContent from './dashboard-content';

export default async function DashboardPage() {
  const session = await getServerSession();

  if (!session?.user) {
    redirect('/login');
  }

  return <DashboardContent user={session.user} />;
}