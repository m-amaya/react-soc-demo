import { Logo } from './Logo';
import { ProjectField } from './ProjectField';
import { SidebarContainer } from './Sidebar.styled';
import { SidebarNav } from './SidebarNav';

export function Sidebar() {
  return (
    <SidebarContainer bg="gray.900" color="fg.inverted">
      <Logo />
      <ProjectField />
      <SidebarNav />
    </SidebarContainer>
  );
}
