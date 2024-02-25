import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import { FaBed, FaUser, FaHandsHoldingChild, FaMagnifyingGlassChart, FaTicket, FaNewspaper, FaReceipt, FaSuitcase, FaCalendarDays, FaPuzzlePiece, FaCartArrowDown, FaClipboardCheck   } from "react-icons/fa6";
import "./sidebar.css"
import { sidebarCollasped } from '../../layouts/layout-state';
import { useStore } from '@nanostores/react';

const SideBar = () => {

    const $sidebarCollasped = useStore(sidebarCollasped);

    return (
        <Sidebar collapsed={$sidebarCollasped} className='h-full shadow-sm'>
            <Menu>
                <MenuItem icon={<FaCalendarDays />}> Agenda </MenuItem>
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
                <SubMenu icon={<FaClipboardCheck />} label="Métier" open={true} className='ps-submenu'>
                    <MenuItem icon={<FaPuzzlePiece />}> 
                        Produits
                    </MenuItem>
                    <MenuItem icon={<FaCartArrowDown />}> 
                        Commandes
                    </MenuItem>
                </SubMenu>
            </Menu>
        </Sidebar>
    );
  };
  export default SideBar;
  