import { redirect } from 'next/navigation';
import { getServerSession } from 'next-auth/next';

export default async function MainPage() {
  const session = await getServerSession();

  if (!session?.user) {
    redirect('/login');
  }

  redirect('/dashboard')
}