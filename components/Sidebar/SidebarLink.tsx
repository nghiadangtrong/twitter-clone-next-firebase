import React from 'react';

interface SidebarLinkProps {
  text: string,
  Icon: React.ReactType,
  active?: boolean,
}

const SidebarLink: React.FC<SidebarLinkProps> = (props: SidebarLinkProps) => {
  let { Icon, text, active } = props;
  return (
    <div>
      <Icon className="dfdf" />
    </div>
  )
}

export default SidebarLink;
