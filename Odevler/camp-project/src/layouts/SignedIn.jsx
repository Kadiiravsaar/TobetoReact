import React from "react";
import { Dropdown, Image, Menu } from "semantic-ui-react";
export default function SignedIn({ signOut }) {
  return (
    <div>
      <Menu.Item>
        <Image
          avatar
          spaced="right"
          src="https://cdn-icons-png.flaticon.com/512/9131/9131529.png"
        />
        <Dropdown pointing="top right" text="Admin">
          <Dropdown.Menu>
            <Dropdown.Item text="Bilgilerim" icon="info" />
            <Dropdown.Item onClick={signOut} text="Out" icon="sign-out" />
          </Dropdown.Menu>
        </Dropdown>
      </Menu.Item>
    </div>
  );
}
