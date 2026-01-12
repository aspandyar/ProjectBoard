import { ProjectProvider } from '../context/ProjectContext';
import App from '../components/App';

export default function Home() {
  return (
    <ProjectProvider>
      <App />
    </ProjectProvider>
  );
}
