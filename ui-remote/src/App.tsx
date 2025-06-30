import styled from 'styled-components'
import { ThemeProvider, GlobalStyles } from './theme'
import FormDemo from "./components/FormDemo"
import ThemeToggle from "./components/ThemeToggle"

const AppContainer = styled.div`
  min-height: 100vh;
  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.onSurface};
  transition: ${({ theme }) => theme.transitions.base};
`;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${({ theme }) => theme.spacing.lg};
  border-bottom: 1px solid ${({ theme }) => theme.colors.outlineVariant};
  background-color: ${({ theme }) => theme.colors.surface};
`;

const Nav = styled.nav`
  display: flex;
  gap: ${({ theme }) => theme.spacing.md};
`;

const NavButton = styled.button<{ $active?: boolean }>`
  padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.md};
  border: none;
  border-radius: ${({ theme }) => theme.borderRadius.md};
  background-color: ${({ $active, theme }) => 
    $active ? theme.colors.primary100 : 'transparent'};
  color: ${({ $active, theme }) => 
    $active ? theme.colors.primary : theme.colors.onSurface};
  cursor: pointer;
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  transition: ${({ theme }) => theme.transitions.base};

  &:hover {
    background-color: ${({ $active, theme }) => 
      $active ? theme.colors.primary100 : theme.colors.surfaceVariant};
  }
`;

const Main = styled.main`
  padding: ${({ theme }) => theme.spacing.lg};
`;

function AppContent() {
	return (
		<>
			<GlobalStyles />
			<AppContainer>
				<Header>
					<Nav>
						<NavButton $active={true}>
							Form Demo
						</NavButton>
					</Nav>
					<ThemeToggle />
				</Header>
				<Main>
					<FormDemo />
				</Main>
			</AppContainer>
		</>
	)
}

export default function App() {
	return (
		<ThemeProvider defaultMode="light">
			<AppContent />
		</ThemeProvider>
	)
}
