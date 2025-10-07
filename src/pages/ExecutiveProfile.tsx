import React from 'react';
import styled from 'styled-components';
import { resumeData } from '../data/resumeData';

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
  margin-bottom: var(--spacing-xxl);
  color: var(--primary-color);
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: var(--spacing-xl);
  margin: var(--spacing-xxl) 0;
`;

const StatCard = styled.div`
  background: var(--white);
  padding: var(--spacing-xl);
  border-radius: var(--radius-lg);
  text-align: center;
  box-shadow: var(--shadow-md);
  transition: var(--transition-normal);
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: var(--shadow-lg);
  }
`;

const StatNumber = styled.div`
  font-size: var(--font-size-4xl);
  font-weight: 700;
  color: var(--primary-color);
  margin-bottom: var(--spacing-sm);
`;

const StatLabel = styled.div`
  font-size: var(--font-size-sm);
  color: var(--text-secondary);
  font-weight: 600;
`;

const ExperienceGrid = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-xl);
`;

const ExperienceCard = styled.div`
  background: var(--white);
  border-radius: var(--radius-lg);
  padding: var(--spacing-xl);
  box-shadow: var(--shadow-md);
  transition: var(--transition-normal);
  
  &:hover {
    box-shadow: var(--shadow-lg);
  }
`;

const ExperienceHeader = styled.div`
  display: flex;
  align-items: flex-start;
  gap: var(--spacing-lg);
  margin-bottom: var(--spacing-lg);
`;

const ExperienceIcon = styled.div`
  width: 60px;
  height: 60px;
  background: var(--accent-gradient);
  border-radius: var(--radius-lg);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--white);
  font-size: var(--font-size-xl);
  flex-shrink: 0;
`;

const ExperienceInfo = styled.div`
  flex: 1;
`;

const ExperienceTitle = styled.h3`
  font-size: var(--font-size-xl);
  margin-bottom: var(--spacing-xs);
  color: var(--primary-color);
`;

const ExperienceCompany = styled.h4`
  font-size: var(--font-size-lg);
  color: var(--secondary-color);
  margin-bottom: var(--spacing-xs);
`;

const ExperienceDuration = styled.div`
  font-size: var(--font-size-sm);
  color: var(--text-muted);
  font-weight: 600;
`;

const ExperienceDescription = styled.p`
  color: var(--text-secondary);
  line-height: 1.6;
  margin-bottom: var(--spacing-lg);
`;

const AchievementsList = styled.ul`
  list-style: none;
  padding: 0;
`;

const AchievementItem = styled.li`
  position: relative;
  padding-left: var(--spacing-lg);
  margin-bottom: var(--spacing-sm);
  color: var(--text-secondary);
  line-height: 1.5;
  
  &::before {
    content: '✓';
    position: absolute;
    left: 0;
    color: var(--success-color);
    font-weight: 700;
  }
`;

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: var(--spacing-xl);
`;

const SkillCategory = styled.div`
  background: var(--white);
  border-radius: var(--radius-lg);
  padding: var(--spacing-xl);
  box-shadow: var(--shadow-md);
`;

const SkillCategoryTitle = styled.h3`
  font-size: var(--font-size-xl);
  margin-bottom: var(--spacing-lg);
  color: var(--primary-color);
  text-align: center;
`;

const SkillsList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: var(--spacing-sm);
`;

const SkillTag = styled.span`
  background: var(--accent-color);
  color: var(--white);
  padding: var(--spacing-xs) var(--spacing-sm);
  border-radius: var(--radius-sm);
  font-size: var(--font-size-sm);
  font-weight: 600;
`;

const EducationGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: var(--spacing-xl);
`;

const EducationCard = styled.div`
  background: var(--white);
  border-radius: var(--radius-lg);
  padding: var(--spacing-xl);
  box-shadow: var(--shadow-md);
  text-align: center;
  transition: var(--transition-normal);
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: var(--shadow-lg);
  }
`;

const EducationIcon = styled.div`
  width: 80px;
  height: 80px;
  background: var(--accent-gradient);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--white);
  font-size: var(--font-size-2xl);
  margin: 0 auto var(--spacing-lg);
`;

const EducationDegree = styled.h3`
  font-size: var(--font-size-xl);
  margin-bottom: var(--spacing-sm);
  color: var(--primary-color);
`;

const EducationSchool = styled.h4`
  font-size: var(--font-size-lg);
  color: var(--secondary-color);
  margin-bottom: var(--spacing-sm);
`;

const EducationYear = styled.div`
  font-size: var(--font-size-sm);
  color: var(--text-muted);
  font-weight: 600;
`;

const ExecutiveProfile: React.FC = () => {
  return (
    <PageContainer>
      <HeroSection>
        <Container>
          <HeroContent>
            <HeroTitle>Executive Profile</HeroTitle>
            <HeroSubtitle>Strategic Technology Leader & Innovation Driver</HeroSubtitle>
            <HeroDescription>
              Accomplished technology executive with a proven track record of leading enterprise transformations, 
              managing multimillion-dollar portfolios, and driving innovation across complex technical ecosystems.
            </HeroDescription>
          </HeroContent>
        </Container>
      </HeroSection>

      <Section>
        <Container>
          <SectionTitle>Key Metrics</SectionTitle>
          <StatsGrid>
            <StatCard>
              <StatNumber>15+</StatNumber>
              <StatLabel>Years Experience</StatLabel>
            </StatCard>
            <StatCard>
              <StatNumber>$50M+</StatNumber>
              <StatLabel>Portfolio Value</StatLabel>
            </StatCard>
            <StatCard>
              <StatNumber>50+</StatNumber>
              <StatLabel>Team Members Led</StatLabel>
            </StatCard>
            <StatCard>
              <StatNumber>6+</StatNumber>
              <StatLabel>Major Migrations</StatLabel>
            </StatCard>
          </StatsGrid>
        </Container>
      </Section>

      <Section>
        <Container>
          <SectionTitle>Professional Experience</SectionTitle>
          <ExperienceGrid>
            {resumeData.experience.map((exp) => (
              <ExperienceCard key={exp.id}>
                <ExperienceHeader>
                  <ExperienceIcon>
                    <i className={`fas fa-${exp.icon}`}></i>
                  </ExperienceIcon>
                  <ExperienceInfo>
                    <ExperienceTitle>{exp.title}</ExperienceTitle>
                    <ExperienceCompany>{exp.company}</ExperienceCompany>
                    <ExperienceDuration>{exp.duration}</ExperienceDuration>
                  </ExperienceInfo>
                </ExperienceHeader>
                <ExperienceDescription>{exp.description}</ExperienceDescription>
                <AchievementsList>
                  {exp.achievements.map((achievement) => (
                    <AchievementItem key={achievement}>{achievement}</AchievementItem>
                  ))}
                </AchievementsList>
              </ExperienceCard>
            ))}
          </ExperienceGrid>
        </Container>
      </Section>

      <Section>
        <Container>
          <SectionTitle>Core Competencies</SectionTitle>
          <SkillsGrid>
            {['leadership', 'technical', 'process'].map((category) => {
              const categorySkills = resumeData.skills.filter(skill => skill.category === category);
              return (
                <SkillCategory key={category}>
                  <SkillCategoryTitle>
                    {category.charAt(0).toUpperCase() + category.slice(1)} Excellence
                  </SkillCategoryTitle>
                  <SkillsList>
                    {categorySkills.map((skill) => (
                      <SkillTag key={skill.name}>{skill.name}</SkillTag>
                    ))}
                  </SkillsList>
                </SkillCategory>
              );
            })}
          </SkillsGrid>
        </Container>
      </Section>

      <Section>
        <Container>
          <SectionTitle>Education</SectionTitle>
          <EducationGrid>
            {resumeData.education.map((edu) => (
              <EducationCard key={`${edu.degree}-${edu.institution}`}>
                <EducationIcon>
                  <i className="fas fa-graduation-cap"></i>
                </EducationIcon>
                <EducationDegree>{edu.degree}</EducationDegree>
                <EducationSchool>{edu.institution}</EducationSchool>
                <EducationYear>{edu.field}</EducationYear>
              </EducationCard>
            ))}
          </EducationGrid>
        </Container>
      </Section>
    </PageContainer>
  );
};

export default ExecutiveProfile;