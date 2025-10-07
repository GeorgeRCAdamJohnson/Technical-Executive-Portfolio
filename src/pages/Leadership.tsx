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

const LeadershipGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: var(--spacing-xl);
  margin-bottom: var(--spacing-xxl);
`;

const LeadershipCard = styled.div`
  background: var(--white);
  border-radius: var(--radius-lg);
  padding: var(--spacing-xl);
  box-shadow: var(--shadow-md);
  text-align: center;
  transition: var(--transition-normal);
  
  &:hover {
    transform: translateY(-8px);
    box-shadow: var(--shadow-xl);
  }
`;

const LeadershipIcon = styled.div`
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

const LeadershipTitle = styled.h3`
  font-size: var(--font-size-xl);
  margin-bottom: var(--spacing-sm);
  color: var(--primary-color);
`;

const LeadershipDescription = styled.p`
  color: var(--text-secondary);
  line-height: 1.6;
  margin-bottom: var(--spacing-md);
`;

const LeadershipMetric = styled.div`
  font-size: var(--font-size-lg);
  font-weight: 700;
  color: var(--accent-color);
`;

const ExperienceTimeline = styled.div`
  position: relative;
  max-width: 800px;
  margin: 0 auto;
  
  &::before {
    content: '';
    position: absolute;
    left: 30px;
    top: 0;
    bottom: 0;
    width: 3px;
    background: var(--accent-gradient);
  }
`;

const TimelineItem = styled.div<{ $index: number }>`
  position: relative;
  margin-bottom: var(--spacing-xxl);
  display: flex;
  align-items: flex-start;
  padding-left: var(--spacing-xxl);
`;

const TimelineContent = styled.div`
  flex: 1;
`;

const TimelineCard = styled.div`
  background: var(--white);
  border-radius: var(--radius-lg);
  padding: var(--spacing-xl);
  box-shadow: var(--shadow-md);
  transition: var(--transition-normal);
  
  &:hover {
    box-shadow: var(--shadow-lg);
  }
`;

const TimelineIcon = styled.div`
  width: 60px;
  height: 60px;
  background: var(--accent-gradient);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--white);
  font-size: var(--font-size-lg);
  position: absolute;
  left: 0;
  top: 0;
  z-index: 1;
  border: 4px solid var(--white);
`;

const TimelineRole = styled.h3`
  font-size: var(--font-size-xl);
  margin-bottom: var(--spacing-xs);
  color: var(--primary-color);
`;

const TimelineCompany = styled.h4`
  font-size: var(--font-size-lg);
  color: var(--secondary-color);
  margin-bottom: var(--spacing-xs);
`;

const TimelineDuration = styled.div`
  font-size: var(--font-size-sm);
  color: var(--text-muted);
  font-weight: 600;
  margin-bottom: var(--spacing-md);
`;

const TimelineDescription = styled.p`
  color: var(--text-secondary);
  line-height: 1.6;
  margin-bottom: var(--spacing-md);
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
  font-size: var(--font-size-sm);
  
  &::before {
    content: '👥';
    position: absolute;
    left: 0;
    top: 0;
  }
`;

const SkillsSection = styled.div`
  margin-top: var(--spacing-xxl);
`;

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: var(--spacing-lg);
`;

const SkillCategory = styled.div`
  background: var(--white);
  border-radius: var(--radius-lg);
  padding: var(--spacing-xl);
  box-shadow: var(--shadow-md);
`;

const SkillCategoryTitle = styled.h3`
  font-size: var(--font-size-lg);
  margin-bottom: var(--spacing-lg);
  color: var(--primary-color);
  text-align: center;
`;

const SkillItem = styled.div`
  margin-bottom: var(--spacing-md);
`;

const SkillName = styled.div`
  font-weight: 600;
  margin-bottom: var(--spacing-xs);
  color: var(--text-primary);
`;

const SkillBar = styled.div`
  background: var(--bg-secondary);
  border-radius: var(--radius-sm);
  height: 8px;
  overflow: hidden;
`;

const SkillLevel = styled.div<{ $level: number }>`
  height: 100%;
  background: var(--accent-gradient);
  width: ${props => props.$level}%;
  border-radius: var(--radius-sm);
  transition: width 1s ease-in-out;
`;

const TestimonialsSection = styled.div`
  margin-top: var(--spacing-xxl);
`;

const TestimonialsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: var(--spacing-xl);
  margin-top: var(--spacing-xl);
`;

const TestimonialCard = styled.div`
  background: var(--white);
  border-radius: var(--radius-lg);
  padding: var(--spacing-xl);
  box-shadow: var(--shadow-md);
  position: relative;
  transition: var(--transition-normal);
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: var(--shadow-lg);
  }
  
  &::before {
    content: '"';
    position: absolute;
    top: var(--spacing-md);
    left: var(--spacing-md);
    font-size: 3rem;
    color: var(--accent-color);
    opacity: 0.3;
    font-family: serif;
    line-height: 1;
  }
`;

const TestimonialText = styled.p`
  color: var(--text-secondary);
  line-height: 1.6;
  margin-bottom: var(--spacing-lg);
  padding-top: var(--spacing-md);
  font-style: italic;
`;

const TestimonialAuthor = styled.div`
  border-top: 1px solid var(--bg-secondary);
  padding-top: var(--spacing-md);
`;

const AuthorName = styled.div`
  font-weight: 700;
  color: var(--primary-color);
  margin-bottom: var(--spacing-xs);
`;

const AuthorTitle = styled.div`
  font-size: var(--font-size-sm);
  color: var(--text-muted);
  margin-bottom: var(--spacing-xs);
`;

const AuthorCompany = styled.div`
  font-size: var(--font-size-sm);
  color: var(--secondary-color);
  font-weight: 600;
`;

const Leadership: React.FC = () => {
  const leadershipHighlights = [
    {
      icon: 'users',
      title: 'Team Leadership',
      description: 'Successfully led distributed teams across multiple U.S. states, fostering collaboration and high performance.',
      metric: '50+ Team Members'
    },
    {
      icon: 'chart-line',
      title: 'Strategic Planning',
      description: 'Developed and executed strategic roadmaps for enterprise transformations and technology initiatives.',
      metric: '$50M+ Portfolio'
    },
    {
      icon: 'handshake',
      title: 'Stakeholder Management',
      description: 'Built strong relationships with executives, vendors, and cross-functional teams to drive alignment.',
      metric: '15+ Years Experience'
    },
    {
      icon: 'lightbulb',
      title: 'Innovation Driver',
      description: 'Championed cutting-edge solutions including AI deployment and enterprise modernization initiatives.',
      metric: '6+ Major Projects'
    }
  ];

  const leadershipSkills = {
    'Strategic Leadership': [
      { name: 'Vision & Strategy Development', level: 95 },
      { name: 'Executive Communication', level: 92 },
      { name: 'Change Management', level: 90 },
      { name: 'Business Transformation', level: 88 }
    ],
    'Team Development': [
      { name: 'Team Building & Mentoring', level: 94 },
      { name: 'Performance Management', level: 91 },
      { name: 'Talent Development', level: 89 },
      { name: 'Cross-functional Collaboration', level: 93 }
    ],
    'Operational Excellence': [
      { name: 'Process Optimization', level: 92 },
      { name: 'Risk Management', level: 87 },
      { name: 'Budget & Resource Management', level: 89 },
      { name: 'Vendor Management', level: 94 }
    ]
  };

  const testimonials = [
    {
      text: "Adam is an amazing asset, I had the pleasure of working with Adam for over a year. He successfully managed DevOps team and owned a lot of respect in the team. I have noticed that he is able to organize and attend multiple successive meetings and stay focused with great attention to detail. Adam has the most extreme talent of taking quick notes in the meetings which I like the most. I was particularly impressed by his natural ability to perfectly handle the communication between the teams effortlessly. As a project manager for the DevOps team, Adam has earned my highest recommendation.",
      author: "Dheeraj Gudipati",
      title: "Principal Cloud Engineer",
      company: "Premera Blue Cross"
    },
    {
      text: "Adam is an excellent resource and absolute pleasure to work with. He is missed not only by his team but the teams we collaborated with. Often his role is referred by his name, (so and so is the new Adam), as he set a high standard for the role with excellent communication and follow up. Adam was very personable and respected by his team, which encouraged better performance and collaboration. If only we could hire him back. He is a valuable asset and has my full endorsement and recommendation.",
      author: "Jon Pastore",
      title: "Systems Engineer V",
      company: "Microsoft"
    },
    {
      text: "I hired and managed Adam on Booxie, and he was a tremendous asset whom I quickly promoted. Adam did tremendous work under great pressure on a very hectic startup project. Adam is fast, organized, self-motivated, a good communicator, and a strong team player. I would heartily recommend Adam for any project manager or producer role without reservation.",
      author: "Chris Maka",
      title: "Game Designer",
      company: "Broadsword Online Games"
    },
    {
      text: "Adam's work ethic is inspiring. Adam leads by being self-motivated, complete, and innovative. He constantly distinguished himself from our peers at WB Games by completing complex and challenging testing tasks at a very high level and on time. Adam is a team player who knows how to assist and inspire those around him. Additionally, he is an excellent teacher who does not hesitate to offer guidance and training to those who are fortunate enough to work with him.",
      author: "Aaron Sooter",
      title: "Software Engineer",
      company: "Legal+Plus Software Group"
    },
    {
      text: "With very little notice, supervision, or assistance, Adam jumped in and competently handled localization on Guardians of Middle-earth. Localization management is always an extremely difficult and thankless job, but Adam took care of it with tireless enthusiasm. He worked with external loc testing very well, and made sure that our internal team and the external teams always had everything they needed. He communicated fantastically with internal developers to make sure that all loc needs were in place.",
      author: "Ruth Tomandl",
      title: "Technical Program Manager",
      company: "Semi-retired (Consulting)"
    },
    {
      text: "Adam is not only a smart and energetic perfectionist but also an inspiring manager. Adam is detail oriented, passionate and hardworking, he is able to find creative solutions to complex technical issues quickly and efficiently. Thanks to his interpersonal skills he has great relations with both company clients and junior testers.",
      author: "Christopher Perry",
      title: "IT Generalist",
      company: "Warner Bros. Games"
    }
  ];

  return (
    <PageContainer>
      <HeroSection>
        <Container>
          <HeroContent>
            <HeroTitle>Leadership Excellence</HeroTitle>
            <HeroSubtitle>Driving Teams, Transforming Organizations</HeroSubtitle>
            <HeroDescription>
              Proven track record of leading high-performing teams, managing complex transformations, 
              and delivering strategic initiatives that drive organizational success and innovation.
            </HeroDescription>
          </HeroContent>
        </Container>
      </HeroSection>

      <Section>
        <Container>
          <SectionTitle>Leadership Capabilities</SectionTitle>
          <LeadershipGrid>
            {leadershipHighlights.map((highlight) => (
              <LeadershipCard key={highlight.title}>
                <LeadershipIcon>
                  <i className={`fas fa-${highlight.icon}`}></i>
                </LeadershipIcon>
                <LeadershipTitle>{highlight.title}</LeadershipTitle>
                <LeadershipDescription>{highlight.description}</LeadershipDescription>
                <LeadershipMetric>{highlight.metric}</LeadershipMetric>
              </LeadershipCard>
            ))}
          </LeadershipGrid>
        </Container>
      </Section>

      <Section>
        <Container>
          <SectionTitle>Leadership Journey</SectionTitle>
          <ExperienceTimeline>
            {resumeData.experience.map((exp, index) => (
              <TimelineItem key={exp.id} $index={index}>
                <TimelineIcon>
                  <i className={`fas fa-${exp.icon}`}></i>
                </TimelineIcon>
                <TimelineContent>
                  <TimelineCard>
                    <TimelineRole>{exp.title}</TimelineRole>
                    <TimelineCompany>{exp.company}</TimelineCompany>
                    <TimelineDuration>{exp.duration}</TimelineDuration>
                    <TimelineDescription>{exp.description}</TimelineDescription>
                    <AchievementsList>
                      {exp.achievements.slice(0, 3).map((achievement) => (
                        <AchievementItem key={achievement}>{achievement}</AchievementItem>
                      ))}
                    </AchievementsList>
                  </TimelineCard>
                </TimelineContent>
              </TimelineItem>
            ))}
          </ExperienceTimeline>
        </Container>
      </Section>

      <Section>
        <Container>
          <SectionTitle>Leadership Competencies</SectionTitle>
          <SkillsSection>
            <SkillsGrid>
              {Object.entries(leadershipSkills).map(([category, skills]) => (
                <SkillCategory key={category}>
                  <SkillCategoryTitle>{category}</SkillCategoryTitle>
                  {skills.map((skill) => (
                    <SkillItem key={skill.name}>
                      <SkillName>{skill.name}</SkillName>
                      <SkillBar>
                        <SkillLevel $level={skill.level} />
                      </SkillBar>
                    </SkillItem>
                  ))}
                </SkillCategory>
              ))}
            </SkillsGrid>
          </SkillsSection>
        </Container>
      </Section>

      <Section>
        <Container>
          <SectionTitle>Leadership Testimonials</SectionTitle>
          <TestimonialsSection>
            <TestimonialsGrid>
              {testimonials.map((testimonial) => (
                <TestimonialCard key={testimonial.author}>
                  <TestimonialText>
                    {testimonial.text}
                  </TestimonialText>
                  <TestimonialAuthor>
                    <AuthorName>{testimonial.author}</AuthorName>
                    <AuthorTitle>{testimonial.title}</AuthorTitle>
                    <AuthorCompany>{testimonial.company}</AuthorCompany>
                  </TestimonialAuthor>
                </TestimonialCard>
              ))}
            </TestimonialsGrid>
          </TestimonialsSection>
        </Container>
      </Section>
    </PageContainer>
  );
};

export default Leadership;