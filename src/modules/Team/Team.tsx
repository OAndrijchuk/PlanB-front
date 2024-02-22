import { twMerge } from 'tailwind-merge';
import { Card } from './components';
import masters from '../Team/components/masters.json';
import { Master } from '@/types';

export const getStaticProps = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await res.json();

  if (!data) {
    return { notFound: true };
  }
  return { props: { contacts: data } };
};

const Team = () => {
  const classes = '';
  return (
    <div className="p-0 m-0">
      <h1 className="text-5xl font-caveat400 text-[56px] md: text-[72px]">
        Наші спеціалісти
      </h1>

      <ul
        className="flex items-center flex-col gap-2 mt-[72px] 
      md:flex-row gap-1
      xl:flex-row"
      >
        {masters.map((master: Master) => (
          <Card master={master} key={master.name} />
        ))}
      </ul>
    </div>
  );
};

export default Team;
