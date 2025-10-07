import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import { Link } from 'react-router-dom';
import { projects } from '../data/resumeData';

// Animations for discovery elements
const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const pulse = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(1.05); }
  100% { transform: scale(1); }
`;

const typing = keyframes`
  from { width: 0; }
  to { width: 100%; }
`;

const blink = keyframes`
  50% { border-color: transparent; }
`;

const AchievementNotification = styled.div<{ $visible: boolean }>`
  position: fixed;
  top: 20px;
  right: 20px;
  background: linear-gradient(135deg, var(--success-color) 0%, #2ecc71 100%);
  color: var(--white);
  padding: var(--spacing-md);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-xl);
  transform: translateX(${props => props.$visible ? '0' : '400px'});
  opacity: ${props => props.$visible ? '1' : '0'};
  transition: all 0.5s ease;
  z-index: 10000;
  min-width: 300px;
  border: 2px solid rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(10px);

  @media (max-width: 768px) {
    right: 10px;
    min-width: 250px;
    padding: var(--spacing-sm);
  }

  .trophy-icon {
    font-size: 2rem;
    text-align: center;
    margin-bottom: var(--spacing-sm);
    animation: ${bounce} 2s infinite;
  }

  .achievement-text {
    text-align: center;
    font-weight: 600;
    font-size: var(--font-size-sm);
  }
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

const HeroContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 var(--spacing-md);
  display: grid;
  grid-template-columns: 1fr auto;
  gap: var(--spacing-xxl);
  align-items: center;
  position: relative;
  z-index: 1;
  width: 100%;

  @media (max-width: 768px) {
    max-width: 100%;
    padding: 0 var(--spacing-sm);
    grid-template-columns: 1fr;
    text-align: center;
    gap: var(--spacing-xl);
  }
`;

const HeroContent = styled.div``;

const HeroTitle = styled.h1`
  font-size: clamp(2rem, 5vw, 4rem);
  line-height: 1.1;
  margin-bottom: var(--spacing-lg);
  color: var(--white);
  
  .typing-text {
    border-right: 3px solid var(--white);
    animation: ${typing} 3s steps(40, end), ${blink} 0.75s step-end infinite;
    white-space: nowrap;
    overflow: hidden;
    width: 100%;
  }
`;

const HeroGreeting = styled.span`
  display: block;
  font-size: 0.6em;
  opacity: 0.9;
  font-weight: 400;
  animation: ${fadeInUp} 1s ease-out;
`;

const HeroName = styled.span`
  display: block;
  font-weight: 700;
  background: linear-gradient(45deg, #fff, #f0f0f0);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  animation: ${fadeInUp} 1s ease-out 0.5s both;
`;

const HeroRole = styled.span`
  display: block;
  font-size: 0.7em;
  color: rgba(255, 255, 255, 0.9);
  font-weight: 500;
  animation: ${fadeInUp} 1s ease-out 1s both;
`;

const HeroDescription = styled.p`
  font-size: var(--font-size-lg);
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: var(--spacing-xl);
  line-height: 1.6;
`;

const HeroCTA = styled.div`
  display: flex;
  gap: var(--spacing-md);
  flex-wrap: wrap;

  @media (max-width: 768px) {
    justify-content: center;
  }
`;

const Button = styled(Link)<{ $variant?: 'primary' | 'secondary' }>`
  display: inline-flex;
  align-items: center;
  gap: var(--spacing-xs);
  padding: var(--spacing-md) var(--spacing-lg);
  border-radius: var(--radius-md);
  font-weight: 600;
  text-decoration: none;
  transition: var(--transition-normal);
  cursor: pointer;
  border: none;
  font-size: var(--font-size-base);
  line-height: 1;
  
  ${props => props.$variant === 'primary' ? `
    background-color: var(--secondary-color);
    color: var(--white);
    
    &:hover {
      background-color: var(--secondary-dark);
      transform: translateY(-2px);
      box-shadow: var(--shadow-lg);
      text-decoration: none;
    }
  ` : `
    background-color: transparent;
    color: var(--white);
    border: 2px solid var(--white);
    
    &:hover {
      background-color: var(--white);
      color: var(--primary-color);
      text-decoration: none;
    }
  `}
`;

const HeroStats = styled.div`
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border-radius: var(--radius-xl);
  padding: var(--spacing-lg);
  border: 1px solid rgba(255, 255, 255, 0.2);
  position: relative;
  cursor: pointer;
  transition: var(--transition-normal);
  min-width: 200px;
  flex-shrink: 0;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
    background: rgba(255, 255, 255, 0.15);
  }
`;

const StatItem = styled.div<{ $delay?: number }>`
  text-align: center;
  margin-bottom: var(--spacing-md);
  opacity: 0;
  animation: ${fadeInUp} 0.8s ease-out ${props => (props.$delay || 0) * 0.3}s both;
  transition: var(--transition-normal);
  
  &:last-child {
    margin-bottom: 0;
  }
  
  &:hover {
    transform: scale(1.1);
  }
`;

const StatNumber = styled.div<{ $isAnimating?: boolean }>`
  font-size: var(--font-size-3xl);
  font-weight: 700;
  color: var(--white);
  display: block;
  transition: var(--transition-normal);
  
  ${props => props.$isAnimating && `
    background: linear-gradient(
      90deg,
      var(--white) 0%,
      var(--secondary-light) 50%,
      var(--white) 100%
    );
    background-size: 200px 100%;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  `}
`;

const StatLabel = styled.div`
  font-size: var(--font-size-sm);
  color: rgba(255, 255, 255, 0.8);
  margin-top: var(--spacing-xs);
`;

const Section = styled.section<{ $bgAlt?: boolean }>`
  padding: var(--spacing-xxl) 0;
  ${props => props.$bgAlt && 'background-color: var(--bg-secondary);'}
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 var(--spacing-md);
  width: 100%;
  
  @media (max-width: 768px) {
    max-width: 100%;
    padding: 0 var(--spacing-sm);
  }
`;

const SectionTitle = styled.h2`
  text-align: center;
  margin-bottom: var(--spacing-xl);
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 60px;
    height: 3px;
    background: var(--accent-gradient);
    border-radius: var(--radius-sm);
  }
`;

const ExecutiveGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: var(--spacing-lg);
  margin-top: var(--spacing-xl);
`;

const ExecutiveCard = styled.div<{ $index?: number }>`
  background: var(--bg-primary);
  border-radius: var(--radius-lg);
  padding: var(--spacing-xl);
  box-shadow: var(--shadow-md);
  transition: var(--transition-normal);
  border: 1px solid rgba(0, 0, 0, 0.05);
  opacity: 0;
  animation: ${fadeInUp} 0.8s ease-out ${props => (props.$index || 0) * 0.2}s both;
  position: relative;
  overflow: hidden;
  cursor: pointer;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(102, 126, 234, 0.1),
      transparent
    );
    transition: var(--transition-slow);
  }
  
  &:hover {
    transform: translateY(-8px);
    box-shadow: var(--shadow-xl);
    border-color: var(--accent-color);
  }
  
  &:hover::before {
    left: 100%;
  }
  
  &:hover .discover-hint {
    opacity: 1;
    transform: translateY(0);
  }
`;

const CardIcon = styled.div`
  width: 60px;
  height: 60px;
  background: var(--accent-gradient);
  border-radius: var(--radius-lg);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: var(--spacing-md);
  color: var(--white);
  font-size: var(--font-size-2xl);
  transition: var(--transition-normal);
  
  .card:hover & {
    animation: ${pulse} 1.5s infinite;
  }
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: var(--spacing-lg);
  margin-top: var(--spacing-xl);
`;

const ProjectCard = styled.div<{ $featured?: boolean }>`
  background: var(--bg-primary);
  border-radius: var(--radius-lg);
  padding: var(--spacing-xl);
  padding-top: ${props => props.$featured ? 'calc(var(--spacing-xl) + 40px)' : 'var(--spacing-xl)'};
  box-shadow: var(--shadow-md);
  transition: all var(--transition-normal);
  border: 1px solid rgba(0, 0, 0, 0.05);
  position: relative;
  overflow: hidden;
  min-height: 400px;
  display: flex;
  flex-direction: column;
  
  ${props => props.$featured && `
    border: 2px solid var(--accent-color);
    
    &::before {
      content: '⭐ Featured Project';
      position: absolute;
      top: var(--spacing-sm);
      left: var(--spacing-md);
      right: var(--spacing-md);
      background: var(--accent-gradient);
      color: var(--white);
      padding: var(--spacing-xs) var(--spacing-sm);
      border-radius: var(--radius-sm);
      font-size: var(--font-size-xs);
      font-weight: 600;
      text-align: center;
      z-index: 2;
    }
  `}
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: var(--shadow-xl);
    border-color: var(--accent-color);
  }
  
  &:hover .hidden-details {
    opacity: 1;
    max-height: 150px;
  }
`;

const HiddenDetails = styled.div`
  opacity: 0;
  max-height: 0;
  overflow: hidden;
  transition: all 0.3s ease-in-out;
  background: var(--bg-secondary);
  padding: 0 var(--spacing-md);
  margin: var(--spacing-md) calc(-1 * var(--spacing-md)) 0;
  border-radius: var(--radius-md);
  flex-shrink: 0;
  
  h4 {
    margin: var(--spacing-sm) 0 var(--spacing-xs);
    color: var(--primary-color);
    font-size: var(--font-size-sm);
  }
  
  ul {
    list-style: none;
    padding: 0;
    margin: 0 0 var(--spacing-sm);
  }
  
  li {
    padding: var(--spacing-xs) 0;
    font-size: var(--font-size-sm);
    color: var(--text-secondary);
    position: relative;
    padding-left: var(--spacing-md);
    
    &::before {
      content: '▸';
      position: absolute;
      left: 0;
      color: var(--accent-color);
    }
  }
`;

const AchievementNotification = styled.div<{ $visible: boolean }>`
  position: fixed;
  top: 20px;
  right: 20px;
  background: linear-gradient(135deg, #10b981, #059669);
  color: white;
  padding: var(--spacing-md) var(--spacing-lg);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-lg);
  transform: ${props => props.$visible ? 'translateX(0)' : 'translateX(calc(100% + 40px))'};
  transition: transform 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55);
  z-index: 1000;
  display: flex;
  align-items: center;
  gap: var(--spacing-sm);
  max-width: 300px;
  word-wrap: break-word;
  
  .trophy-icon {
    font-size: 1.2rem;
    animation: ${props => props.$visible ? 'bounce 0.6s ease-in-out' : 'none'};
    flex-shrink: 0;
  }
  
  @keyframes bounce {
    0%, 20%, 60%, 100% { transform: translateY(0); }
    40% { transform: translateY(-10px); }
    80% { transform: translateY(-5px); }
  }
  
  .achievement-text {
    font-weight: 600;
    font-size: 0.9rem;
    line-height: 1.3;
  }
  
  @media (max-width: 768px) {
    right: 10px;
    top: 10px;
    max-width: calc(100vw - 40px);
    padding: var(--spacing-sm) var(--spacing-md);
    
    .achievement-text {
      font-size: 0.8rem;
    }
  }
`;

const ProjectHeader = styled.div`
  display: flex;
  align-items: flex-start;
  gap: var(--spacing-md);
  margin-bottom: var(--spacing-md);
`;

const ProjectIcon = styled.div`
  width: 50px;
  height: 50px;
  background: var(--accent-gradient);
  border-radius: var(--radius-lg);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--white);
  font-size: var(--font-size-lg);
  flex-shrink: 0;
`;

const ProjectMeta = styled.div`
  flex: 1;
  
  h3 {
    margin-bottom: var(--spacing-xs);
    color: var(--primary-color);
    font-size: var(--font-size-lg);
    font-weight: 600;
    line-height: 1.3;
  }
`;

const ProjectTech = styled.span`
  font-size: var(--font-size-sm);
  color: var(--text-muted);
  font-weight: 500;
`;

const ProjectDescription = styled.p`
  color: var(--text-secondary);
  margin: var(--spacing-md) 0;
  line-height: 1.6;
  flex-grow: 1;
`;

const ProjectAchievements = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: var(--spacing-xs);
  margin-bottom: var(--spacing-lg);
`;

const AchievementTag = styled.span`
  background: var(--accent-color);
  color: var(--white);
  padding: var(--spacing-xs) var(--spacing-sm);
  border-radius: var(--radius-sm);
  font-size: var(--font-size-xs);
  font-weight: 600;
`;

const Home: React.FC = () => {
  const [isStatsAnimating, setIsStatsAnimating] = useState(false);
  const [visibleProjects, setVisibleProjects] = useState(2);
  const [showAchievement, setShowAchievement] = useState(false);
  const [achievementText, setAchievementText] = useState('');
  const featuredProjects = projects.slice(0, 4);
  
  useEffect(() => {
    const timer = setTimeout(() => setIsStatsAnimating(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  const handleStatsClick = () => {
    // Navigate to executive profile with smooth scroll
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const showAchievementNotification = (text: string) => {
    setAchievementText(text);
    setShowAchievement(true);
    setTimeout(() => setShowAchievement(false), 3000);
  };

  const loadMoreProjects = () => {
    const newVisibleCount = Math.min(visibleProjects + 2, featuredProjects.length);
    setVisibleProjects(newVisibleCount);
    
    if (newVisibleCount === featuredProjects.length) {
      showAchievementNotification('🎯 Explorer! You\'ve discovered all featured projects!');
    } else {
      showAchievementNotification('🔍 Curious Mind! More projects unlocked!');
    }
  };

  return (
    <>
      <AchievementNotification $visible={showAchievement}>
        <div className="trophy-icon">🏆</div>
        <div className="achievement-text">{achievementText}</div>
      </AchievementNotification>

      <HeroSection>
        <HeroContainer>
          <HeroContent>
            <HeroTitle>
              <HeroGreeting>Welcome to</HeroGreeting>
              <HeroName>Adam Johnson's</HeroName>
              <HeroRole className="typing-text">Technical Executive Portfolio</HeroRole>
            </HeroTitle>
            <HeroDescription>
              Visionary technology leader with 15+ years of experience driving enterprise transformation across 
              application engineering, AI deployment, and software lifecycle governance. Currently leading the 
              largest Atlassian Government Cloud migration in company history at Blue Origin.
              <br /><br />
              <strong>Seeking challenging opportunities</strong> to mentor teams, make impactful decisions, and 
              apply my diverse skills beyond just Atlassian. Experienced in hiring high quality teams while 
              maintaining a high quality bar. Passionate about exploring and growing my skillset, plus 
              Film, Art, Animation, and spending quality time with family.
            </HeroDescription>
            <HeroCTA>
              <Button to="/executive-profile" $variant="primary">
                <i className="fas fa-user-tie"></i> View Executive Profile
              </Button>
              <Button to="#projects" $variant="secondary">
                <i className="fas fa-project-diagram"></i> Explore Projects
              </Button>
            </HeroCTA>
          </HeroContent>
          <HeroStats onClick={handleStatsClick}>
            <StatItem $delay={0}>
              <StatNumber $isAnimating={isStatsAnimating}>15+</StatNumber>
              <StatLabel>Years Experience</StatLabel>
            </StatItem>
            <StatItem $delay={1}>
              <StatNumber $isAnimating={isStatsAnimating}>6+</StatNumber>
              <StatLabel>Major Projects</StatLabel>
            </StatItem>
            <StatItem $delay={2}>
              <StatNumber $isAnimating={isStatsAnimating}>50+</StatNumber>
              <StatLabel>Team Members Led</StatLabel>
            </StatItem>
          </HeroStats>
        </HeroContainer>
      </HeroSection>

      <Section id="executive-summary">
        <Container>
          <SectionTitle>Executive Summary</SectionTitle>
          <ExecutiveGrid>
            <ExecutiveCard className="card" $index={0}>
              <CardIcon>
                <i className="fas fa-brain"></i>
              </CardIcon>
              <h3>Strategic Vision</h3>
              <p>Leading the largest Atlassian Government Cloud migration in company history at Blue Origin, with expertise in enterprise application strategy and vendor governance across multimillion-dollar portfolios.</p>
            </ExecutiveCard>
            <ExecutiveCard className="card" $index={1}>
              <CardIcon>
                <i className="fas fa-users-cog"></i>
              </CardIcon>
              <h3>Team Leadership</h3>
              <p>Experienced in leading distributed teams across multiple U.S. states, mentoring high-performing teams, and advising executives on application strategy and innovation initiatives.</p>
            </ExecutiveCard>
            <ExecutiveCard className="card" $index={2}>
              <CardIcon>
                <i className="fas fa-rocket"></i>
              </CardIcon>
              <h3>Innovation Driver</h3>
              <p>Spearheaded deployment of Moveworks AI for HR and IT, built comprehensive Application Catalog frameworks, and managed critical enterprise platforms including Coupa, Costpoint, and the full Atlassian suite.</p>
            </ExecutiveCard>
          </ExecutiveGrid>
        </Container>
      </Section>

      <Section id="projects" $bgAlt>
        <Container>
          <SectionTitle>Featured Projects</SectionTitle>
          <ProjectsGrid>
            {featuredProjects.slice(0, visibleProjects).map((project, index) => (
              <ProjectCard key={project.id} $featured={index === 0}>
                <ProjectHeader>
                  <ProjectIcon>
                    <i className={`fas fa-${project.icon}`}></i>
                  </ProjectIcon>
                  <ProjectMeta>
                    <h3>{project.title}</h3>
                    <ProjectTech>{project.technologies.join(' | ')}</ProjectTech>
                  </ProjectMeta>
                </ProjectHeader>
                <ProjectDescription>{project.description}</ProjectDescription>
                <ProjectAchievements>
                  {project.achievements.slice(0, 3).map((achievement) => (
                    <AchievementTag key={achievement}>{achievement}</AchievementTag>
                  ))}
                </ProjectAchievements>
                
                <HiddenDetails className="hidden-details">
                  <h4>🎯 Business Impact</h4>
                  <ul>
                    <li>Strategic cost optimization and efficiency gains</li>
                    <li>Executive-level technical decision making</li>
                    <li>Innovation leadership and team development</li>
                  </ul>
                  <h4>🔧 Technical Excellence</h4>
                  <ul>
                    <li>Modern architecture and best practices</li>
                    <li>Scalable, maintainable solutions</li>
                    <li>Performance optimization and monitoring</li>
                  </ul>
                </HiddenDetails>
              </ProjectCard>
            ))}
          </ProjectsGrid>
          
          {visibleProjects < featuredProjects.length && (
            <div style={{ textAlign: 'center', marginTop: 'var(--spacing-xl)' }}>
              <button 
                onClick={loadMoreProjects}
                style={{
                  background: 'var(--primary-color)',
                  color: 'white',
                  border: 'none',
                  borderRadius: 'var(--radius-md)',
                  padding: 'var(--spacing-md) var(--spacing-lg)',
                  fontSize: '1rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                  transition: 'var(--transition-normal)',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 'var(--spacing-sm)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'var(--primary-dark)';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'var(--primary-color)';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <i className="fas fa-plus"></i> Discover More Projects
              </button>
            </div>
          )}
        </Container>
      </Section>
    </>
  );
};

export default Home;