import { UserLoginForm } from 'presentation/atomic-component/molecule/form';
import type { FC } from 'react';

export const AuthContent: FC = () => {
  return (
    <div
      className={
        'flex flex-col gap-4 p-12 rounded mx-auto h-full justify-center items-center border '
      }
    >
      <div className={'hidden laptop:flex flex-col gap-2 text-center'}>
        <h2 className={'font-semibold text-4xl'}>Login</h2>
        <p>Entre com sua conta</p>
      </div>

      <div className={'flex flex-col w-full px-5 tablet:max-w-[600px] laptop:mt-9'}>
        <UserLoginForm />
      </div>
    </div>
  );
};
