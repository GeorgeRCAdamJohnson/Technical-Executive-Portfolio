import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';

const NavContainer = styled.nav`
  background: var(--bg-primary);
  box-shadow: var(--shadow-md);
  position: sticky;
  top: 0;
  z-index: var(--z-sticky);
  backdrop-filter: blur(10px);
  width: 100%;
  transition: var(--transition-normal);
  
  @media (max-width: 768px) {
    backdrop-filter: blur(5px);
  }
`;

const NavContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 var(--spacing-md);
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 70px;
  width: 100%;
  
  @media (max-width: 768px) {
    max-width: 100%;
    padding: 0 var(--spacing-sm);
    height: 60px;
  }
  
  @media (max-width: 480px) {
    height: 56px;
    padding: 0 var(--spacing-xs);
  }
`;

const NavLogo = styled.div`
  h2 {
    margin: 0;
    color: var(--primary-color);
    font-size: var(--font-size-2xl);
  }
`;

const NavSubtitle = styled.span`
  font-size: var(--font-size-sm);
  color: var(--text-secondary);
  font-weight: 400;
`;

const NavMenu = styled.ul<{ $isOpen?: boolean }>`
  display: flex;
  list-style: none;
  align-items: center;
  gap: var(--spacing-lg);
  
  @media (max-width: 768px) {
    display: ${props => props.$isOpen ? 'flex' : 'none'};
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background: var(--bg-primary);
    flex-direction: column;
    padding: var(--spacing-lg);
    box-shadow: var(--shadow-lg);
  }
`;

const NavLink = styled(Link)<{ $isActive?: boolean }>`
  display: flex;
  align-items: center;
  gap: var(--spacing-xs);
  padding: var(--spacing-sm) var(--spacing-md);
  border-radius: var(--radius-md);
  transition: var(--transition-fast);
  font-weight: 500;
  color: var(--text-primary);
  text-decoration: none;
  
  ${props => props.$isActive && `
    background-color: var(--accent-color);
    color: var(--white);
  `}
  
  &:hover {
    background-color: var(--accent-color);
    color: var(--white);
    text-decoration: none;
  }
  
  i {
    font-size: var(--font-size-sm);
  }
`;

const DropdownContainer = styled.li`
  position: relative;
`;

const DropdownMenu = styled.ul<{ $isOpen?: boolean }>`
  position: absolute;
  top: 100%;
  left: 0;
  background: var(--bg-primary);
  border-radius: var(--radius-md);
  box-shadow: var(--shadow-lg);
  min-width: 280px;
  opacity: ${props => props.$isOpen ? 1 : 0};
  visibility: ${props => props.$isOpen ? 'visible' : 'hidden'};
  transform: translateY(${props => props.$isOpen ? '0' : '-10px'});
  transition: var(--transition-normal);
  list-style: none;
  padding: var(--spacing-sm) 0;
  z-index: var(--z-dropdown);
  border: 1px solid var(--bg-secondary);
`;

const DropdownLink = styled(Link)`
  display: flex;
  flex-direction: column;
  padding: var(--spacing-sm) var(--spacing-md);
  color: var(--text-primary);
  text-decoration: none;
  transition: var(--transition-fast);
  border-bottom: 1px solid var(--bg-secondary);
  
  &:last-child {
    border-bottom: none;
  }
  
  &:hover {
    background-color: var(--bg-secondary);
    text-decoration: none;
  }
  
  .dropdown-title {
    font-weight: 600;
    margin-bottom: var(--spacing-xs);
  }
  
  .dropdown-desc {
    font-size: var(--font-size-xs);
    color: var(--text-secondary);
    line-height: 1.3;
  }
`;

const NavToggle = styled.button`
  display: none;
  flex-direction: column;
  cursor: pointer;
  gap: 4px;
  background: none;
  border: none;
  padding: var(--spacing-sm);
  
  @media (max-width: 768px) {
    display: flex;
  }
  
  span {
    width: 25px;
    height: 3px;
    background-color: var(--primary-color);
    transition: var(--transition-fast);
  }
`;

const Navigation: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProjectsOpen, setIsProjectsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const projectMenuItems = [
    { 
      path: '/ai-innovation', 
      label: 'AI Innovation Portfolio',
      description: 'Moveworks AI deployment & enterprise AI solutions'
    },
    { 
      path: '/sci-fi-form-builder', 
      label: 'Sci-Fi Form Builder',
      description: 'Next-gen React form builder with futuristic UI'
    },
    { 
      path: '/ai-art-evolution', 
      label: 'AI Art Evolution Platform',
      description: 'Interactive platform showcasing AI art progression'
    },
    { 
      path: '/forge-form-builder', 
      label: 'Forge Form Builder',
      description: 'Atlassian Forge app for dynamic form creation'
    },
    { 
      path: '/technical-leadership', 
      label: 'Technical Leadership',
      description: 'Blue Origin migration & enterprise architecture'
    },
  ];

  return (
    <NavContainer>
      <NavContent>
        <NavLogo>
          <h2>Adam Johnson</h2>
          <NavSubtitle>Technical Executive</NavSubtitle>
        </NavLogo>
        
        <NavMenu $isOpen={isMenuOpen}>
          <li>
            <NavLink to="/" $isActive={isActive('/')}>
              <i className="fas fa-home"></i> Home
            </NavLink>
          </li>
          
          <li>
            <NavLink to="/executive-profile" $isActive={isActive('/executive-profile')}>
              <i className="fas fa-user-tie"></i> Executive Profile
            </NavLink>
          </li>
          
          <DropdownContainer
            onMouseEnter={() => setIsProjectsOpen(true)}
            onMouseLeave={() => setIsProjectsOpen(false)}
          >
            <NavLink 
              to="/projects" 
              $isActive={location.pathname.startsWith('/projects') || location.pathname.includes('-innovation') || location.pathname.includes('-builder') || location.pathname.includes('-leadership')}
            >
              <i className="fas fa-project-diagram"></i> Projects <i className="fas fa-chevron-down"></i>
            </NavLink>
            <DropdownMenu $isOpen={isProjectsOpen}>
              {projectMenuItems.map((item) => (
                <li key={item.path}>
                  <DropdownLink to={item.path}>
                    <div className="dropdown-title">{item.label}</div>
                    <div className="dropdown-desc">{item.description}</div>
                  </DropdownLink>
                </li>
              ))}
            </DropdownMenu>
          </DropdownContainer>
          
          <li>
            <NavLink to="/leadership" $isActive={isActive('/leadership')}>
              <i className="fas fa-users"></i> Leadership
            </NavLink>
          </li>
        </NavMenu>
        
        <NavToggle onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </NavToggle>
      </NavContent>
    </NavContainer>
  );
};

export default Navigation;