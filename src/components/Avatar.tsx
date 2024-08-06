import { Avatar as BaseAvatar, AvatarProps } from "@chakra-ui/react";

import { FC } from "../types";

const Avatar: FC<AvatarProps> = (props) => {
  return (
    <BaseAvatar
      {...props}
      src={`https://api.dicebear.com/9.x/open-peeps/svg?seed=${props.name}&backgroundType=gradientLinear&backgroundColor=b6e3f4,c0aede,d1d4f9,ffd5dc,ffdfbf&accessories=sunglasses,glasses,glasses2&accessoriesProbability=60`}
    />
  );
};

export default Avatar;
