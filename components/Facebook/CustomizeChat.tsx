import React from "react";
import { FacebookProvider, CustomChat } from "react-facebook";

export function FBChatScript() {
  return (
    <>
      <FacebookProvider appId="1031926270674334" chatSupport>
        <CustomChat pageId="102793352173146" minimized={false}/>
      </FacebookProvider>
    </>
  );
}
