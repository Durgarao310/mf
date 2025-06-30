import React, { useState } from 'react';
import styled from 'styled-components';
import Input from '../Input';
import TextArea from '../TextArea';
import Select from '../Select';
import Checkbox from '../Checkbox';
import { Radio, RadioGroup } from '../Radio';
import Switch from '../Switch';
import Button from '../Button';

const FormDemoContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: ${({ theme }) => theme.spacing.xl};
  font-family: ${({ theme }) => theme.typography.fontFamily};
`;

const FormHeader = styled.div`
  text-align: center;
  margin-bottom: ${({ theme }) => theme.spacing.xl};
`;

const FormTitle = styled.h1`
  font-size: ${({ theme }) => theme.typography.fontSize.xl};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  color: ${({ theme }) => theme.colors.onSurface};
  margin: 0 0 ${({ theme }) => theme.spacing.sm} 0;
`;

const FormDescription = styled.p`
  font-size: ${({ theme }) => theme.typography.fontSize.base};
  color: ${({ theme }) => theme.colors.onSurfaceVariant};
  margin: 0;
`;

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.xl};
`;

const FormSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.lg};
  padding: ${({ theme }) => theme.spacing.lg};
  border: 1px solid ${({ theme }) => theme.colors.outlineVariant};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  background-color: ${({ theme }) => theme.colors.surface};
  box-shadow: ${({ theme }) => theme.shadows.elevation1};
`;

const SectionTitle = styled.h2`
  font-size: ${({ theme }) => theme.typography.fontSize.lg};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  color: ${({ theme }) => theme.colors.primary};
  margin: 0 0 ${({ theme }) => theme.spacing.md} 0;
  border-bottom: 2px solid ${({ theme }) => theme.colors.primary};
  padding-bottom: ${({ theme }) => theme.spacing.xs};
`;

const FormRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${({ theme }) => theme.spacing.lg};

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const SkillsSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.md};
`;

const SectionLabel = styled.label`
  font-family: ${({ theme }) => theme.typography.fontFamily};
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  color: ${({ theme }) => theme.colors.onSurface};
  margin-bottom: ${({ theme }) => theme.spacing.xs};
  display: block;
`;

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: ${({ theme }) => theme.spacing.sm};
`;

const SwitchesSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.md};
`;

const ButtonSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.sm};
`;

const ButtonGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: ${({ theme }) => theme.spacing.sm};
  
  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

const FormActions = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: ${({ theme }) => theme.spacing.md};
  padding-top: ${({ theme }) => theme.spacing.lg};
  border-top: 1px solid ${({ theme }) => theme.colors.outlineVariant};

  @media (max-width: 480px) {
    flex-direction: column;
  }
`;

interface FormData {
  name: string;
  email: string;
  phone: string;
  country: string;
  message: string;
  newsletter: boolean;
  theme: string;
  notifications: boolean;
  experience: string;
  skills: string[];
}

const FormDemo: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    country: '',
    message: '',
    newsletter: false,
    theme: 'light',
    notifications: true,
    experience: '',
    skills: []
  });

  const [errors, setErrors] = useState<Partial<FormData>>({});

  const countryOptions = [
    { value: 'us', label: 'United States' },
    { value: 'ca', label: 'Canada' },
    { value: 'uk', label: 'United Kingdom' },
    { value: 'de', label: 'Germany' },
    { value: 'fr', label: 'France' },
    { value: 'jp', label: 'Japan' },
    { value: 'au', label: 'Australia' },
    { value: 'in', label: 'India' }
  ];

  const themeOptions = [
    { value: 'light', label: 'Light Theme' },
    { value: 'dark', label: 'Dark Theme' },
    { value: 'auto', label: 'Auto (System)' }
  ];

  const experienceOptions = [
    { value: 'beginner', label: 'Beginner (0-1 years)' },
    { value: 'intermediate', label: 'Intermediate (2-5 years)' },
    { value: 'senior', label: 'Senior (5+ years)' },
    { value: 'expert', label: 'Expert (10+ years)' }
  ];

  const skillOptions = [
    { value: 'react', label: 'React' },
    { value: 'typescript', label: 'TypeScript' },
    { value: 'nodejs', label: 'Node.js' },
    { value: 'python', label: 'Python' },
    { value: 'design', label: 'UI/UX Design' },
    { value: 'testing', label: 'Testing' }
  ];

  const validateForm = () => {
    const newErrors: Partial<FormData> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }

    if (!formData.country) {
      newErrors.country = 'Please select a country';
    }

    if (!formData.experience) {
      newErrors.experience = 'Please select your experience level';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      console.log('Form submitted:', formData);
      alert('Form submitted successfully! Check console for data.');
    }
  };

  const handleSkillChange = (skill: string, checked: boolean) => {
    setFormData(prev => ({
      ...prev,
      skills: checked 
        ? [...prev.skills, skill]
        : prev.skills.filter(s => s !== skill)
    }));
  };

  return (
    <FormDemoContainer>
      <FormHeader>
        <FormTitle>Material Design Form Components</FormTitle>
        <FormDescription>A comprehensive showcase of form components following Material Design principles</FormDescription>
      </FormHeader>

      <FormContainer onSubmit={handleSubmit}>
        <FormSection>
          <SectionTitle>Personal Information</SectionTitle>
          
          <FormRow>
            <Input
              label="Full Name"
              placeholder="Enter your full name"
              value={formData.name}
              onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
              error={!!errors.name}
              errorMessage={errors.name}
              required
              startIcon={
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              }
            />

            <Input
              label="Email Address"
              type="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
              error={!!errors.email}
              errorMessage={errors.email}
              required
              startIcon={
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="L22 6L12 13L2 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              }
            />
          </FormRow>

          <FormRow>
            <Input
              label="Phone Number"
              type="tel"
              placeholder="+1 (555) 000-0000"
              value={formData.phone}
              onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
              helperText="Optional: Include country code"
              startIcon={
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path d="M22 16.92V19.92C22 20.4728 21.7893 21.0031 21.4142 21.3932C21.0391 21.7833 20.5304 21.9968 20 22C19.11 22 18.0701 21.17 16.8802 19.52C15.6902 17.87 14.35 15.4 12.86 12.12C9.89005 5.56 7.12005 1.72 6.12005 0.92C5.61005 0.52 5.12005 0.32 4.65005 0.32C4.30005 0.32 3.98005 0.42 3.70005 0.62L1.19005 2.38C0.740052 2.69 0.590052 3.23 0.740052 3.98C1.16005 6.68 3.05005 12.44 8.82005 18.23C14.5701 23.99 20.33 25.88 23.03 26.3C23.78 26.45 24.32 26.3 24.63 25.85L26.39 23.34C26.59 23.06 26.69 22.74 26.69 22.39C26.69 21.92 26.49 21.43 26.09 20.92C25.29 19.92 21.45 17.15 14.89 14.18C11.61 12.69 9.14005 11.35 7.49005 10.16C5.84005 8.97 5.01005 7.93 5.01005 7.04V7.04C5.01005 6.51 5.22005 5.98 5.61005 5.61C5.99005 5.23 6.52005 5.02 7.05005 5.02H10.05C10.32 5.02 10.58 5.11 10.79 5.29C10.99 5.47 11.12 5.72 11.16 6L11.4601 8.76005C11.4901 9.13005 11.4 9.5 11.2 9.82005L9.69005 12.1501C10.08 13.01 11.39 15.92 12.85 17.32C14.31 18.72 17.21 20.03 18.07 20.42L20.4 18.91C20.72 18.71 21.09 18.62 21.46 18.65L24.22 18.95C24.5 18.99 24.75 19.12 24.93 19.32C25.11 19.53 25.2 19.79 25.2 20.06V23.06Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              }
            />

            <Select
              label="Country"
              placeholder="Select your country"
              options={countryOptions}
              value={formData.country}
              onChange={(value) => setFormData(prev => ({ ...prev, country: value as string }))}
              error={!!errors.country}
              errorMessage={errors.country}
              required
            />
          </FormRow>
        </FormSection>

        <FormSection>
          <SectionTitle>Experience & Preferences</SectionTitle>
          
          <RadioGroup
            name="experience"
            label="Experience Level"
            options={experienceOptions}
            value={formData.experience}
            onChange={(value) => setFormData(prev => ({ ...prev, experience: value as string }))}
            error={!!errors.experience}
            errorMessage={errors.experience}
            required
          />

          <SkillsSection>
            <SectionLabel>Skills (Select all that apply)</SectionLabel>
            <SkillsGrid>
              {skillOptions.map((skill) => (
                <Checkbox
                  key={skill.value}
                  label={skill.label}
                  checked={formData.skills.includes(skill.value)}
                  onChange={(checked) => handleSkillChange(skill.value, checked)}
                />
              ))}
            </SkillsGrid>
          </SkillsSection>

          <RadioGroup
            name="theme"
            label="Preferred Theme"
            options={themeOptions}
            value={formData.theme}
            onChange={(value) => setFormData(prev => ({ ...prev, theme: value as string }))}
            className="horizontal"
          />
        </FormSection>

        <FormSection>
          <SectionTitle>Settings & Message</SectionTitle>
          
          <SwitchesSection>
            <Switch
              label="Email Notifications"
              checked={formData.notifications}
              onChange={(checked) => setFormData(prev => ({ ...prev, notifications: checked }))}
              helperText="Receive updates and announcements via email"
            />

            <Switch
              label="Newsletter Subscription"
              checked={formData.newsletter}
              onChange={(checked) => setFormData(prev => ({ ...prev, newsletter: checked }))}
              helperText="Get our weekly newsletter with tips and updates"
              size="small"
            />
          </SwitchesSection>

          <TextArea
            label="Message"
            placeholder="Tell us about yourself, your goals, or any questions you have..."
            value={formData.message}
            onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
            helperText="Optional: Share any additional information"
            minRows={4}
            maxRows={8}
          />
        </FormSection>

        <FormSection>
          <SectionTitle>Button Showcase</SectionTitle>
          
          <ButtonSection>
            <SectionLabel>Material Design 3 Button Variants</SectionLabel>
            <ButtonGrid>
              <Button
                variant="filled"
                onClick={() => console.log('Filled clicked')}
              >
                Filled Button
              </Button>
              <Button
                variant="elevated"
                onClick={() => console.log('Elevated clicked')}
              >
                Elevated Button
              </Button>
              <Button
                variant="tonal"
                onClick={() => console.log('Tonal clicked')}
              >
                Tonal Button
              </Button>
              <Button
                variant="outlined"
                onClick={() => console.log('Outlined clicked')}
              >
                Outlined Button
              </Button>
              <Button
                variant="text"
                onClick={() => console.log('Text clicked')}
              >
                Text Button
              </Button>
            </ButtonGrid>
          </ButtonSection>

          <ButtonSection>
            <SectionLabel>Button Sizes</SectionLabel>
            <ButtonGrid>
              <Button
                variant="filled"
                size="small"
                onClick={() => console.log('Small clicked')}
              >
                Small Button
              </Button>
              <Button
                variant="filled"
                size="medium"
                onClick={() => console.log('Medium clicked')}
              >
                Medium Button
              </Button>
              <Button
                variant="filled"
                size="large"
                onClick={() => console.log('Large clicked')}
              >
                Large Button
              </Button>
            </ButtonGrid>
          </ButtonSection>

          <ButtonSection>
            <SectionLabel>Buttons with Icons</SectionLabel>
            <ButtonGrid>
              <Button
                variant="filled"
                leadingIcon={
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                    <path d="M12 2L13.09 8.26L20 9L13.09 9.74L12 16L10.91 9.74L4 9L10.91 8.26L12 2Z" fill="currentColor"/>
                  </svg>
                }
                onClick={() => console.log('Leading icon clicked')}
              >
                Leading Icon
              </Button>
              <Button
                variant="outlined"
                trailingIcon={
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                    <path d="M8.59 16.59L13.17 12L8.59 7.41L10 6L16 12L10 18L8.59 16.59Z" fill="currentColor"/>
                  </svg>
                }
                onClick={() => console.log('Trailing icon clicked')}
              >
                Trailing Icon
              </Button>
              <Button
                variant="filled"
                leadingIcon={
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                    <path d="M19 13H13V19H11V13H5V11H11V5H13V11H19V13Z" fill="currentColor"/>
                  </svg>
                }
                onClick={() => console.log('Icon only clicked')}
                aria-label="Add item"
              >
                {/* Icon only - no text content */}
              </Button>
            </ButtonGrid>
          </ButtonSection>

          <ButtonSection>
            <SectionLabel>Button States</SectionLabel>
            <ButtonGrid>
              <Button
                variant="filled"
                onClick={() => console.log('Normal clicked')}
              >
                Normal State
              </Button>
              <Button
                variant="filled"
                isLoading={true}
                onClick={() => console.log('Loading clicked')}
              >
                Loading...
              </Button>
              <Button
                variant="filled"
                disabled={true}
                onClick={() => console.log('Disabled clicked')}
              >
                Disabled Button
              </Button>
            </ButtonGrid>
          </ButtonSection>

          <ButtonSection>
            <SectionLabel>Full Width Button</SectionLabel>
            <Button
              variant="filled"
              fullWidth={true}
              onClick={() => console.log('Full width clicked')}
            >
              Full Width Button
            </Button>
          </ButtonSection>
        </FormSection>

        <FormActions>
          <Button
            variant="outlined"
            onClick={() => {
              setFormData({
                name: '',
                email: '',
                phone: '',
                country: '',
                message: '',
                newsletter: false,
                theme: 'light',
                notifications: true,
                experience: '',
                skills: []
              });
              setErrors({});
            }}
          >
            Reset Form
          </Button>
          
          <Button
            variant="filled"
            onClick={() => {}}
          >
            Submit Form
          </Button>
        </FormActions>
      </FormContainer>
    </FormDemoContainer>
  );
};

export default FormDemo;
