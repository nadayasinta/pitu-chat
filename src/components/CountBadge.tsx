import { Badge, BadgeProps } from "@chakra-ui/react";

import { FC } from "../types";

interface Props extends BadgeProps {
  count: number;
}

const CountBadge: FC<Props> = ({ count, ...props }) => {
  return (
    <>
      {!!count && (
        <Badge
          {...props}
          variant="solid"
          colorScheme="blue"
          fontWeight="normal"
          borderRadius="13px"
          minWidth="26px"
          p="1"
          textAlign="center"
        >
          {count}
        </Badge>
      )}
    </>
  );
};
export default CountBadge;
