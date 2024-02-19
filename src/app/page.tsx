import { Hero } from '@/modules';
import { twMerge } from 'tailwind-merge';

export default function Home() {
  const classes = '';
  return (
    <main className={twMerge('', classes)}>
      <Hero />
    </main>
  );
}
