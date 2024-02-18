import { Team } from '@/modules';
import { Card } from '@/modules/Team/components';
import { twMerge } from 'tailwind-merge';

export default function Home() {
  const classes = 'bg-stone-900';
  return (
    <main
      className={twMerge(
        'flex min-h-screen flex-col items-center justify-between p-24 bg-gray',
        classes
      )}
    >
      <h1>PlanB</h1>
      <Team />
    </main>
  );
}
