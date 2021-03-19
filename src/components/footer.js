import React from "react";
import { List, ListInlineItem } from "reactstrap";
import styled from "styled-components";

const Footer = styled.div`
  left: 0;
  bottom: 0;
  width: 100%;
  margin-left: 1vw;
`;
const ListInlineItem1 = styled(ListInlineItem)`
  border-bottom: 1px solid black;
`;
function NavComponent() {
  return (
    <Footer>
      <List type="inline">
        <ListInlineItem1>
          <a
            href="https://www.linkedin.com/in/azfarul-matin-b73880165/"
            style={{ textDecoration: "none", color: "black" }}
          >
            Linkedin
          </a>
        </ListInlineItem1>
        <ListInlineItem1>
          <a
            href="https://www.instagram.com/darthfarul/"
            style={{ textDecoration: "none", color: "black" }}
          >
            Instagram
          </a>
        </ListInlineItem1>
        <ListInlineItem1>
          <a
            href="mailto:azfarulmatin@gmail.com"
            style={{ textDecoration: "none", color: "black" }}
          >
            Email
          </a>
        </ListInlineItem1>
        <ListInlineItem>
          Developed By
          <a
            href="https://www.instagram.com/jonathannnleee/"
            style={{
              textDecoration: "none",
              color: "black",
              borderBottom: "1px solid black",
              marginLeft: "2px",
            }}
          >
            @Jonathannnleee
          </a>
        </ListInlineItem>
      </List>
    </Footer>
  );
}

export default NavComponent;
