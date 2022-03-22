import React, { useState, useRef } from 'react';
import { Link } from "react-router-dom";
import {
    ProSidebar,
    Menu,
    MenuItem,
    SidebarHeader,
    SidebarFooter,
    SidebarContent,
} from "react-pro-sidebar";
import 'react-pro-sidebar/dist/css/styles.css';
import './SideBar.css';

import { ThreeBarsIcon , ChevronLeftIcon } from "@primer/octicons-react";

const SideBar = (props) => {

    const [menuCollapse, setMenuCollapse] = useState(false);

    const menuClicked = () => {
        menuCollapse ? setMenuCollapse(false) : setMenuCollapse(true);
    };

    const menuIconSize = 30;
    return (
        <div className='SideBar'>
            <ProSidebar collapsed={menuCollapse} collapsedWidth={menuIconSize}>
                <SidebarHeader >
                    <div onClick={menuClicked}>
                        {menuCollapse ? (
                            <ThreeBarsIcon size={menuIconSize}/>
                        ) : (
                            <ChevronLeftIcon  size={menuIconSize}/>
                        )}
                    </div>
                    <div>
                        <p>{menuCollapse ? "" : "Show Case"}</p>
                    </div>
                </SidebarHeader>
                <SidebarContent>
                    <Menu iconShape="square">
                        <MenuItem >Home</MenuItem>
                        <MenuItem>Search</MenuItem>
                        <MenuItem>Add Post</MenuItem>
                    </Menu>
                </SidebarContent>
            </ProSidebar>
        </div>
    );
    
};

export default SideBar;