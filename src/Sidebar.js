import React from 'react'
import './Sidebar.css';
import SidebarOption from './SidebarOption';
import { Button, IconButton } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import InboxIcon from '@mui/icons-material/Inbox';
import StarIcon from '@mui/icons-material/Star';
import LabelImportantIcon from '@mui/icons-material/LabelImportant';
import DraftsIcon from '@mui/icons-material/Drafts';
import PersonIcon from '@mui/icons-material/Person';
import DuoIcon from '@mui/icons-material/Duo';
import CallIcon from '@mui/icons-material/Call';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import NearMeIcon from '@mui/icons-material/NearMe';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useDispatch } from 'react-redux';
import { openSendMessage } from './features/mailSlice';


function Sidebar() {
  const dispatch = useDispatch();

  return (
    <div className="sidebar">
      <Button
        startIcon={<AddIcon fontSize="large" />}
        className="sidebar__compose"
        onClick={() => dispatch(openSendMessage())}
      >
        Compose
      </Button>

      <SidebarOption Icon={InboxIcon} title="Inbox" number={63} selected={true} />
      <SidebarOption Icon={StarIcon} title="Starred" number={55} />
      <SidebarOption Icon={AccessTimeIcon} title="Snoozed" number={78} />
      <SidebarOption Icon={LabelImportantIcon} title="Important" number={10} />
      <SidebarOption Icon={NearMeIcon} title="Sent" number={10} />
      <SidebarOption Icon={DraftsIcon} title="Drafts" number={45} />
      <SidebarOption Icon={ExpandMoreIcon} title="More" number={45} />

      <div className="sidebar__footer">
        <div className="sidebar__footerIcons">
          <IconButton>
            <PersonIcon />
          </IconButton>
          <IconButton>
            <DuoIcon />
          </IconButton>
          <IconButton>
            <CallIcon />
          </IconButton>
        </div>
      </div>
    </div>
  );
}

export default Sidebar
