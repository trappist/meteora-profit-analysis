import { Input } from "@nextui-org/react";
import { useContext } from "react";

import { AppState } from "@/pages/_app";

export const RpcInput = () => {
  const { rpc, connection, updateRpc } = useContext(AppState);

  return (
    <Input
      className="m-4 p-4"
      isInvalid={connection == undefined}
      label="RPC"
      value={rpc}
      onChange={(event) => updateRpc(event.target.value)}
    />
  );
};
