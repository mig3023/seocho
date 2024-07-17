/* eslint-disable @next/next/no-img-element */
import LabelInput from '@/components/LabelInput';
import { auth } from '@/lib/auth';
import Image from 'next/image';
import { redirect } from 'next/navigation';

export default async function MyPage() {
  const session = await auth();
  console.log('🚀  session:', session);
  if (!session || !session.user) return redirect('/api/auth/signin');

  const {
    user: { name, email, image },
  } = session;

  return (
    <div className='flex flex-col mx-auto max-w-md'>
      <h1 className='text-3xl text-green-500 my-10'>My Profile</h1>
      <div className='flex gap-5'>
        <img
          src={image || ''}
          alt={name || ''}
          width={100}
          height={100}
          className='hover:opacity-50'
        />
        <div className='flex flex-col'>
          <LabelInput label='Nickname' value={name || ''} />
          <LabelInput label='Email' value={email || ''} />
        </div>
      </div>
      <hr className='mt-10' />
      <pre className='text-sm text-slate-400'>
        {JSON.stringify(session, null, '  ')}
      </pre>
    </div>
  );
}