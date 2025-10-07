import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useLocation } from 'react-router-dom';
import { projects } from '../data/resumeData';

const PageContainer = styled.div`
  min-height: calc(100vh - 70px);
  background: var(--bg-primary);
`;

const HeroSection = styled.section`
  background: var(--bg-gradient);
  min-height: 80vh;
  display: flex;
  align-items: center;
  position: relative;
  overflow: hidden;
  color: var(--white);

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse"><path d="M 10 0 L 0 0 0 10" fill="none" stroke="rgba(255,255,255,0.1)" stroke-width="1"/></pattern></defs><rect width="100" height="100" fill="url(%23grid)"/></svg>');
    opacity: 0.3;
  }
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 var(--spacing-md);
  position: relative;
  z-index: 1;
  width: 100%;
  
  @media (max-width: 768px) {
    max-width: 100%;
    padding: 0 var(--spacing-sm);
  }
`;

const HeroContent = styled.div`
  text-align: center;
  max-width: 800px;
  margin: 0 auto;
`;

const HeroTitle = styled.h1`
  font-size: clamp(2.5rem, 5vw, 4rem);
  line-height: 1.1;
  margin-bottom: var(--spacing-md);
  font-weight: 700;
  color: var(--white);
`;

const HeroSubtitle = styled.p`
  font-size: var(--font-size-xl);
  margin-bottom: var(--spacing-lg);
  opacity: 0.9;
  color: var(--white);
`;

const HeroDescription = styled.p`
  font-size: var(--font-size-lg);
  opacity: 0.8;
  line-height: 1.6;
  color: var(--white);
`;

const Section = styled.section`
  padding: var(--spacing-xxl) 0;
  
  &:nth-child(even) {
    background: var(--bg-secondary);
  }
`;

const SectionTitle = styled.h2`
  font-size: var(--font-size-3xl);
  text-align: center;
  margin-bottom: var(--spacing-xl);
  color: var(--primary-color);
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: var(--spacing-md);
  margin-bottom: var(--spacing-xxl);
  flex-wrap: wrap;
`;

const FilterButton = styled.button<{ $active?: boolean }>`
  padding: var(--spacing-sm) var(--spacing-lg);
  border: 2px solid var(--primary-color);
  border-radius: var(--radius-md);
  background: ${props => props.$active ? 'var(--primary-color)' : 'transparent'};
  color: ${props => props.$active ? 'var(--white)' : 'var(--primary-color)'};
  font-weight: 600;
  cursor: pointer;
  transition: var(--transition-normal);
  
  &:hover {
    background: var(--primary-color);
    color: var(--white);
    transform: translateY(-2px);
  }
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: var(--spacing-xl);
  margin-top: var(--spacing-xl);
`;

const ProjectCard = styled.div`
  background: var(--white);
  border-radius: var(--radius-lg);
  overflow: hidden;
  box-shadow: var(--shadow-md);
  transition: var(--transition-normal);
  position: relative;
  
  &:hover {
    transform: translateY(-8px);
    box-shadow: var(--shadow-xl);
  }
`;

const ProjectHeader = styled.div`
  background: var(--accent-gradient);
  padding: var(--spacing-xl);
  color: var(--white);
  position: relative;
`;

const ProjectIcon = styled.div`
  width: 60px;
  height: 60px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: var(--radius-lg);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: var(--font-size-xl);
  margin-bottom: var(--spacing-md);
`;

const ProjectTitle = styled.h3`
  font-size: var(--font-size-xl);
  margin-bottom: var(--spacing-sm);
  font-weight: 700;
`;

const ProjectSubtitle = styled.p`
  font-size: var(--font-size-sm);
  opacity: 0.95;
  margin-bottom: var(--spacing-md);
  color: var(--white);
  font-weight: 500;
`;

const ProjectStatus = styled.div<{ $status: string }>`
  position: absolute;
  top: var(--spacing-md);
  right: var(--spacing-md);
  padding: var(--spacing-xs) var(--spacing-sm);
  border-radius: var(--radius-sm);
  font-size: var(--font-size-xs);
  font-weight: 600;
  text-transform: uppercase;
  
  ${props => {
    switch (props.$status) {
      case 'live':
        return 'background: var(--success-color); color: var(--white);';
      case 'development':
        return 'background: var(--warning-color); color: var(--white);';
      case 'completed':
        return 'background: var(--info-color); color: var(--white);';
      default:
        return 'background: var(--medium-gray); color: var(--white);';
    }
  }}
`;

const ProjectBody = styled.div`
  padding: var(--spacing-xl);
`;

const ProjectDescription = styled.p`
  color: var(--text-secondary);
  line-height: 1.6;
  margin-bottom: var(--spacing-lg);
`;

const TechStack = styled.div`
  margin-bottom: var(--spacing-lg);
`;

const TechLabel = styled.h4`
  font-size: var(--font-size-sm);
  color: var(--primary-color);
  margin-bottom: var(--spacing-sm);
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
`;

const TechList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: var(--spacing-xs);
`;

const TechTag = styled.span`
  background: var(--bg-secondary);
  color: var(--text-primary);
  padding: var(--spacing-xs) var(--spacing-sm);
  border-radius: var(--radius-sm);
  font-size: var(--font-size-xs);
  font-weight: 500;
`;

const AchievementsList = styled.div`
  margin-bottom: var(--spacing-lg);
`;

const AchievementItem = styled.div`
  display: flex;
  align-items: flex-start;
  gap: var(--spacing-sm);
  margin-bottom: var(--spacing-sm);
  
  &::before {
    content: '🎯';
    font-size: var(--font-size-sm);
    margin-top: 2px;
  }
`;

const AchievementText = styled.span`
  color: var(--text-secondary);
  font-size: var(--font-size-sm);
  line-height: 1.4;
`;

const ProjectFooter = styled.div`
  padding: var(--spacing-md) var(--spacing-xl);
  background: var(--bg-secondary);
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ProjectLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: var(--spacing-xs);
  color: var(--primary-color);
  text-decoration: none;
  font-weight: 600;
  font-size: var(--font-size-sm);
  transition: var(--transition-fast);
  
  &:hover {
    color: var(--primary-dark);
    transform: translateX(3px);
  }
`;

const CategoryBadge = styled.span<{ $category: string }>`
  padding: var(--spacing-xs) var(--spacing-sm);
  border-radius: var(--radius-sm);
  font-size: var(--font-size-xs);
  font-weight: 600;
  text-transform: uppercase;
  
  ${props => {
    switch (props.$category) {
      case 'ai':
        return 'background: #667eea; color: var(--white);';
      case 'enterprise':
        return 'background: #f093fb; color: var(--white);';
      case 'innovation':
        return 'background: #4facfe; color: var(--white);';
      default:
        return 'background: var(--medium-gray); color: var(--white);';
    }
  }}
`;

const StatsSection = styled.div`
  text-align: center;
  margin-bottom: var(--spacing-xxl);
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: var(--spacing-lg);
  max-width: 800px;
  margin: 0 auto;
`;

const StatCard = styled.div`
  background: var(--white);
  padding: var(--spacing-xl);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-md);
  transition: var(--transition-normal);
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: var(--shadow-lg);
  }
`;

const StatNumber = styled.div`
  font-size: var(--font-size-3xl);
  font-weight: 700;
  color: var(--primary-color);
  margin-bottom: var(--spacing-sm);
`;

const StatLabel = styled.div`
  font-size: var(--font-size-sm);
  color: var(--text-secondary);
  font-weight: 600;
`;

const Projects: React.FC = () => {
  const location = useLocation();
  const [activeFilter, setActiveFilter] = useState<string>('all');
  
  useEffect(() => {
    // Map URL paths to project IDs or categories
    const urlToFilter: { [key: string]: string } = {
      '/ai-innovation': 'ai',
      '/sci-fi-form-builder': 'sci-fi-form-builder',
      '/ai-art-evolution': 'ai-art-evolution', 
      '/forge-form-builder': 'forge-form-builder',
      '/technical-leadership': 'technical-leadership',
      '/agentic-ai': 'agentic-ai'
    };
    
    const filterFromUrl = urlToFilter[location.pathname];
    if (filterFromUrl) {
      setActiveFilter(filterFromUrl);
    }
  }, [location.pathname]);
  
  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'ai', label: 'AI Innovation' },
    { id: 'enterprise', label: 'Enterprise Solutions' },
    { id: 'innovation', label: 'Innovation Projects' }
  ];

  const filteredProjects = (() => {
    if (activeFilter === 'all') return projects;
    
    // Check if filter is a specific project ID
    const specificProject = projects.find(p => p.id === activeFilter);
    if (specificProject) return [specificProject];
    
    // Otherwise filter by category
    return projects.filter(project => project.category === activeFilter);
  })();

  const getPageContent = () => {
    const specificProject = projects.find(p => p.id === activeFilter);
    if (specificProject) {
      return {
        title: specificProject.title,
        subtitle: 'Featured Project Spotlight',
        description: `Deep dive into ${specificProject.title}: ${specificProject.description}`
      };
    }
    
    switch (activeFilter) {
      case 'ai':
        return {
          title: 'AI Innovation Portfolio',
          subtitle: 'Artificial Intelligence & Machine Learning',
          description: 'Advanced AI implementations and intelligent automation solutions driving business transformation.'
        };
      case 'enterprise':
        return {
          title: 'Enterprise Solutions',
          subtitle: 'Large-Scale Business Applications',
          description: 'Mission-critical enterprise systems and infrastructure solutions for complex organizations.'
        };
      case 'innovation':
        return {
          title: 'Innovation Projects',
          subtitle: 'Cutting-Edge Technology Initiatives',
          description: 'Forward-thinking projects that push the boundaries of technology and business processes.'
        };
      default:
        return {
          title: 'Project Portfolio',
          subtitle: 'Innovation Through Technology Leadership',
          description: 'A comprehensive showcase of enterprise transformations, AI implementations, and innovative solutions that drive business value and operational excellence.'
        };
    }
  };

  const pageContent = getPageContent();
  
  const statsData = [
    { number: projects.length, label: 'Total Projects' },
    { number: projects.filter(p => p.status === 'live').length, label: 'Live Projects' },
    { number: projects.filter(p => p.category === 'ai').length, label: 'AI Projects' },
    { number: projects.filter(p => p.category === 'enterprise').length, label: 'Enterprise Solutions' }
  ];

  return (
    <PageContainer>
      <HeroSection>
        <Container>
          <HeroContent>
            <HeroTitle>{pageContent.title}</HeroTitle>
            <HeroSubtitle>{pageContent.subtitle}</HeroSubtitle>
            <HeroDescription>
              {pageContent.description}
            </HeroDescription>
          </HeroContent>
        </Container>
      </HeroSection>

      <Section>
        <Container>
          <StatsSection>
            <SectionTitle>Portfolio Overview</SectionTitle>
            <StatsGrid>
              {statsData.map((stat) => (
                <StatCard key={stat.label}>
                  <StatNumber>{stat.number}</StatNumber>
                  <StatLabel>{stat.label}</StatLabel>
                </StatCard>
              ))}
            </StatsGrid>
          </StatsSection>
        </Container>
      </Section>

      <Section>
        <Container>
          <SectionTitle>Featured Projects</SectionTitle>
          
          <FilterContainer>
            {categories.map((category) => (
              <FilterButton
                key={category.id}
                $active={activeFilter === category.id}
                onClick={() => setActiveFilter(category.id)}
              >
                {category.label}
              </FilterButton>
            ))}
          </FilterContainer>

          <ProjectsGrid>
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id}>
                <ProjectHeader>
                  <ProjectStatus $status={project.status}>
                    {project.status}
                  </ProjectStatus>
                  <ProjectIcon>
                    <i className={`fas fa-${project.icon}`}></i>
                  </ProjectIcon>
                  <ProjectTitle>{project.title}</ProjectTitle>
                  <ProjectSubtitle>{project.subtitle}</ProjectSubtitle>
                </ProjectHeader>

                <ProjectBody>
                  <ProjectDescription>{project.description}</ProjectDescription>

                  <TechStack>
                    <TechLabel>Technology Stack</TechLabel>
                    <TechList>
                      {project.technologies.map((tech) => (
                        <TechTag key={tech}>{tech}</TechTag>
                      ))}
                    </TechList>
                  </TechStack>

                  <AchievementsList>
                    <TechLabel>Key Achievements</TechLabel>
                    {project.achievements.slice(0, 3).map((achievement) => (
                      <AchievementItem key={achievement}>
                        <AchievementText>{achievement}</AchievementText>
                      </AchievementItem>
                    ))}
                  </AchievementsList>
                </ProjectBody>

                <ProjectFooter>
                  <CategoryBadge $category={project.category}>
                    {project.category}
                  </CategoryBadge>
                  {project.liveUrl && (
                    <ProjectLink href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <i className="fas fa-external-link-alt"></i>
                      {' '}View Live Demo
                    </ProjectLink>
                  )}
                </ProjectFooter>
              </ProjectCard>
            ))}
          </ProjectsGrid>
        </Container>
      </Section>
    </PageContainer>
  );
};

export default Projects;