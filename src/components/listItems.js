import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PeopleIcon from '@mui/icons-material/People';
import BarChartIcon from '@mui/icons-material/BarChart';
import LayersIcon from '@mui/icons-material/Layers';
import AssignmentIcon from '@mui/icons-material/Assignment';
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import PaymentIcon from '@mui/icons-material/Payment';
import PointOfSaleIcon from '@mui/icons-material/PointOfSale';
import InventoryIcon from '@mui/icons-material/Inventory';
import InventoryOutlinedIcon from '@mui/icons-material/InventoryOutlined';
import AssessmentIcon from '@mui/icons-material/Assessment';
import ExitToAppOutlinedIcon from '@mui/icons-material/ExitToAppOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import { Link } from '@mui/material';

export const mainListItems = (
  <React.Fragment>
    <Link href="/" underline="none" Style="color: rgba(0, 0, 0, 0.87)">
      <ListItemButton>
        <ListItemIcon>
          <DashboardIcon />
        </ListItemIcon>
        <ListItemText primary="Home" />
      </ListItemButton>
    </Link>
    <Link href="/patients" underline="none" Style="color: rgba(0, 0, 0, 0.87)">
      <ListItemButton>
        <ListItemIcon>
          <PeopleIcon />
        </ListItemIcon>
        <ListItemText primary="Patients" />
      </ListItemButton>
    </Link>
    <Link href="/timesheet" underline="none" Style="color: rgba(0, 0, 0, 0.87)">
      <ListItemButton>
        <ListItemIcon>
          <AccessTimeFilledIcon />
        </ListItemIcon>
        <ListItemText primary="Timesheet" />
      </ListItemButton>
      </Link>
    <Link href="/logistics" underline="none" Style="color: rgba(0, 0, 0, 0.87)">
      <ListItemButton>
        <ListItemIcon>
          <LayersIcon />
        </ListItemIcon>
        <ListItemText primary="Logistics" />
      </ListItemButton>
    </Link>
    <Link href="/reports" underline="none" Style="color: rgba(0, 0, 0, 0.87)">
      <ListItemButton>
        <ListItemIcon>
          <AssignmentIcon />
        </ListItemIcon>
        <ListItemText primary="X-Ray Reports" />
      </ListItemButton>
    </Link>
    <Link href="/supply" underline="none" Style="color: rgba(0, 0, 0, 0.87)">
      <ListItemButton>
        <ListItemIcon>
          <InventoryIcon />
        </ListItemIcon>
        <ListItemText primary="Supply Inventory" />
      </ListItemButton>
    </Link>
    <Link href="/sales" underline="none" Style="color: rgba(0, 0, 0, 0.87)">
      <ListItemButton>
        <ListItemIcon>
          <InventoryOutlinedIcon />
        </ListItemIcon>
        <ListItemText primary="Sales Inventory" />
      </ListItemButton>
    </Link>
    <Link href="/pos" underline="none" Style="color: rgba(0, 0, 0, 0.87)">
      <ListItemButton>
        <ListItemIcon>
          <PointOfSaleIcon />
        </ListItemIcon>
        <ListItemText primary="Point of Sale (POS)" />
      </ListItemButton>
    </Link>
    <Link href="/payments" underline="none" Style="color: rgba(0, 0, 0, 0.87)">
      <ListItemButton>
        <ListItemIcon>
          <PaymentIcon />
        </ListItemIcon>
        <ListItemText primary="Payments" />
      </ListItemButton>
    </Link>
  </React.Fragment>
);

export const secondaryListItems = (
  <React.Fragment>
    {/* <ListSubheader component="div" inset>
      Saved reports
    </ListSubheader> */}
    <Link href="/profile" underline="none" Style="color: rgba(0, 0, 0, 0.87)">
      <ListItemButton>
        <ListItemIcon>
          <AccountCircleOutlinedIcon />
        </ListItemIcon>
        <ListItemText primary="Profile" />
      </ListItemButton>
    </Link>
    <Link href="/logout" underline="none" Style="color: rgba(0, 0, 0, 0.87)">
      <ListItemButton>
        <ListItemIcon>
          <ExitToAppOutlinedIcon />
        </ListItemIcon>
        <ListItemText primary="Logout" />
      </ListItemButton>
    </Link>
    
  </React.Fragment>
);