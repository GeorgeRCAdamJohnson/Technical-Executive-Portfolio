import React from 'react';
import styled from 'styled-components';
import { resumeData } from '../data/resumeData';

const FooterContainer = styled.footer`
  background: var(--bg-dark);
  color: var(--text-light);
  margin-top: auto;
  position: relative;
  width: 100%;
  
  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: var(--spacing-xl) var(--spacing-md);
  width: 100%;
  
  @media (max-width: 768px) {
    max-width: 100%;
    padding: var(--spacing-lg) var(--spacing-sm);
  }
`;

const FooterGrid = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  gap: var(--spacing-xl);
  margin-bottom: var(--spacing-lg);
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: var(--spacing-lg);
  }
`;

const FooterSection = styled.div`
  h3 {
    color: var(--accent-color);
    margin-bottom: var(--spacing-md);
    font-size: var(--font-size-lg);
  }
  
  p {
    margin-bottom: var(--spacing-sm);
    line-height: 1.6;
    color: var(--light-gray);
  }
`;

const ContactList = styled.ul`
  list-style: none;
  padding: 0;
  
  li {
    margin-bottom: var(--spacing-sm);
    display: flex;
    align-items: center;
    gap: var(--spacing-sm);
    
    i {
      width: 20px;
      color: var(--accent-color);
    }
    
    a {
      color: var(--light-gray);
      text-decoration: none;
      transition: var(--transition-normal);
      
      &:hover {
        color: var(--accent-color);
      }
    }
  }
`;

const QuickLinks = styled.ul`
  list-style: none;
  padding: 0;
  
  li {
    margin-bottom: var(--spacing-sm);
    
    a {
      color: var(--light-gray);
      text-decoration: none;
      transition: var(--transition-normal);
      
      &:hover {
        color: var(--accent-color);
      }
    }
  }
`;

const FooterBottom = styled.div`
  border-top: 1px solid var(--primary-color);
  padding-top: var(--spacing-lg);
  text-align: center;
  color: var(--medium-gray);
  font-size: var(--font-size-sm);
`;

const SocialLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: var(--spacing-md);
  margin-bottom: var(--spacing-md);
  
  a {
    color: var(--medium-gray);
    font-size: var(--font-size-xl);
    transition: var(--transition-normal);
    
    &:hover {
      color: var(--accent-color);
      transform: translateY(-2px);
    }
  }
`;

const Footer: React.FC = () => {
  const { personalInfo } = resumeData;
  
  return (
    <FooterContainer>
      <FooterContent>
        <FooterGrid>
          <FooterSection>
            <h3>About {personalInfo.name}</h3>
            <p>
              <strong>Career Focus:</strong> Seeking VP/Director roles where I can mentor teams, 
              drive strategic decisions, and build high-performing organizations across diverse 
              technology stacks—not limited to any single platform or vendor ecosystem.
            </p>
            <p>
              <strong>Leadership Philosophy:</strong> Experienced in hiring exceptional talent 
              and maintaining high-quality standards while fostering growth and innovation. 
              Looking for challenging, cross-functional opportunities that leverage my full 
              enterprise transformation skillset.
            </p>
            <p>
              <strong>Personal Interests:</strong> Passionate about Film, Art, and Animation. 
              Love spending time with family and helping my daughter learn and grow.
            </p>
          </FooterSection>
          
          <FooterSection>
            <h3>Contact Information</h3>
            <ContactList>
              <li>
                <i className="fas fa-envelope"></i>
                <a href={`mailto:${personalInfo.email}`}>{personalInfo.email}</a>
              </li>
              <li>
                <i className="fab fa-linkedin"></i>
                <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer">
                  LinkedIn Profile
                </a>
              </li>
              <li>
                <i className="fab fa-github"></i>
                <a href="https://github.com/GeorgeRCAdamJohnson" target="_blank" rel="noopener noreferrer">
                  GitHub Portfolio
                </a>
              </li>
              <li>
                <i className="fas fa-map-marker-alt"></i>
                <span>{personalInfo.location}</span>
              </li>
            </ContactList>
          </FooterSection>
          
          <FooterSection>
            <h3>Quick Links</h3>
            <QuickLinks>
              <li><a href="/">Home</a></li>
              <li><a href="/executive-profile">Executive Profile</a></li>
              <li><a href="/projects">Projects Portfolio</a></li>
              <li><a href="/leadership">Leadership Experience</a></li>
              <li><a href="/ai-innovation">AI Innovation</a></li>
              <li><a href="/technical-leadership">Technical Leadership</a></li>
            </QuickLinks>
          </FooterSection>
        </FooterGrid>
        
        <FooterBottom>
          <SocialLinks>
            <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="https://github.com/GeorgeRCAdamJohnson" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-github"></i>
            </a>
            <a href={`mailto:${personalInfo.email}`}>
              <i className="fas fa-envelope"></i>
            </a>
          </SocialLinks>
          
          <p>
            © {new Date().getFullYear()} {personalInfo.name}. Technical Executive Portfolio.
          </p>
          <p>
            Built with React + TypeScript • Showcasing 15+ years of technical leadership
          </p>
        </FooterBottom>
      </FooterContent>
    </FooterContainer>
  );
};

export default Footer;