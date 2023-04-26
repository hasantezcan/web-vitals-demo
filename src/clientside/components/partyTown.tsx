import { Partytown } from "@builder.io/partytown/react";

export function PartyTownHead() {
  return (
    <>
      <Partytown
        debug={true}
        forward={["dataLayer.push"]}
        // lib={"/public/~partytown/"}
      />
    </>
  );
}
