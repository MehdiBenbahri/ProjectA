import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import { FaBed, FaUser, FaHandsHoldingChild, FaMagnifyingGlassChart, FaTicket, FaEarthAsia, FaTruck, FaToolbox, FaNewspaper, FaReceipt, FaSuitcase, FaCalendarDays, FaPuzzlePiece, FaCartArrowDown, FaClipboardCheck   } from "react-icons/fa6";
import "./sidebar.css"
import { sidebarCollasped } from '../../layouts/layout-state';
import { useStore } from '@nanostores/react';
import { useEffect, useState } from 'react';

const SideBar = () => {

    const $sidebarCollasped = useStore(sidebarCollasped);

    useEffect(() => {
        if (window.localStorage.getItem('sidebar-state')){
            sidebarCollasped.set(window.localStorage.getItem('sidebar-state') === "true");
        }
    },[])

    return (
        <Sidebar collapsed={$sidebarCollasped} className='h-full shadow-sm'>
            <Menu>
                <MenuItem icon={<FaEarthAsia />}> 
                    Dashboard 
                </MenuItem>
                <SubMenu icon={<FaClipboardCheck />} label="Métier" open={true} className='ps-submenu'>
                    <MenuItem href='/products' icon={<FaPuzzlePiece />}> 
                        Produits
                    </MenuItem>
                    <MenuItem icon={<FaCartArrowDown />}> 
                        Commandes
                    </MenuItem>
                    <MenuItem icon={<FaCalendarDays />}> 
                        Agenda 
                    </MenuItem>
                </SubMenu>
                <SubMenu icon={<FaHandsHoldingChild />} label="Relations" open={true} className='ps-submenu'>
                    <MenuItem icon={<FaUser />} > 
                        Clients
                    </MenuItem>
                    <MenuItem icon={<FaBed />}> 
                        Prospects
                    </MenuItem>
                    <MenuItem icon={<FaMagnifyingGlassChart />}> 
                        Opportunités
                    </MenuItem>
                    <MenuItem icon={<FaToolbox />}> 
                        SAV
                    </MenuItem>
                    <MenuItem icon={<FaTruck />}> 
                        Livraison
                    </MenuItem>
                </SubMenu>
                <SubMenu icon={<FaTicket />} label="Ventes" open={true} className='ps-submenu'>
                    <MenuItem icon={<FaNewspaper />}> 
                        Devis
                    </MenuItem>
                    <MenuItem icon={<FaReceipt />}> 
                        Factures
                    </MenuItem>
                    
                    <MenuItem icon={<FaSuitcase />}> 
                        Comptabilités
                    </MenuItem>
                </SubMenu>
                
            </Menu>
        </Sidebar>
    );
  };
  export default SideBar;
  