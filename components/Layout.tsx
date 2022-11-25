import React, { ReactNode } from "react";
import Nav from "./Nav";

interface Props {
    children?: ReactNode;
}

const Layout = ({ children }: Props) => {
    return (
        <div className="content">
            <Nav />
            {children}
        </div>
    );
};

export default Layout;
