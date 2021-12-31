import React from 'react';
import ChatIcon from '@material-ui/icons/Chat';
import SidePanelItem from 'components/common/SidePanel/SidePanelItem';

export default () => (
  <SidePanelItem
    Icon={ChatIcon}
    title="Contact Admin"
    description="Contact the queue admin for queries"
  />
);
