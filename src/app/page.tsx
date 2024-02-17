import { twMerge } from 'tailwind-merge';

export default function Home() {
  const classes = 'bg-violet-700';
  return (
    <main
      className={twMerge(
        'flex min-h-screen flex-col items-center justify-between p-24 bg-gray',
        classes
      )}
    >
      <h1>PlanB</h1>
    </main>
  );
}
