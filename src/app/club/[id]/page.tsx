import { notFound } from 'next/navigation';

type Props = {
  params: {
    id: string;
  };
};

export default async function Page({ params }: Props) {
  const { id } = params;

  return (
    <div>
      <h1>클럽 ID: {id}</h1>
    </div>
  );
}
