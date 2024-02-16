import type { FC } from 'react';

import { HeyLensSignup } from '@hey/abis';
import { HEY_LENS_SIGNUP } from '@hey/data/constants';
import { useReadContract } from 'wagmi';

import NumberedStat from '../UI/NumberedStat';

const ProfilesCreated: FC = () => {
  const { data } = useReadContract({
    abi: HeyLensSignup,
    address: HEY_LENS_SIGNUP,
    functionName: 'profilesCreated',
    query: { refetchInterval: 2000 }
  });

  return (
    <NumberedStat
      count={data?.toString() || '0'}
      name={`Profiles Created`}
      suffix="Profiles"
    />
  );
};

export default ProfilesCreated;