import React from 'react';
import { useApp } from './context/AppContext';
import { Header } from './components/common/Header';
import { Sidebar } from './components/common/Sidebar';
import { HealthCheckModal } from './components/common/HealthCheckModal';
import { Toast } from './components/common/Toast';

// Pages
import { LandingPage } from './pages/LandingPage';
import { DashboardOverview } from './pages/DashboardOverview';
import { MaternalPostpartum } from './pages/MaternalPostpartum';
import { ChildHealth } from './pages/ChildHealth';
import { VaccinationScheduler } from './pages/VaccinationScheduler';
import { NutritionModule } from './pages/NutritionModule';
import { GamifiedMilestones } from './pages/GamifiedMilestones';
import { HealthPassport } from './pages/HealthPassport';
import { AlertCenter } from './pages/AlertCenter';
import { AshaDashboard } from './pages/AshaDashboard';
import { RiskTriage } from './pages/RiskTriage';
import { FamilyManagement } from './pages/FamilyManagement';
import { ImpactAnalytics } from './pages/ImpactAnalytics';
import { ArchitectureSection } from './pages/ArchitectureSection';
import { SecurityPrivacy } from './pages/SecurityPrivacy';
import { CompetitiveComparison } from './pages/CompetitiveComparison';

export const App: React.FC = () => {
  const { currentTab, isHighContrast, isLargeText } = useApp();

  // If on landing page, render full landing page layout
  if (currentTab === 'landing') {
    return (
      <div className={`${isHighContrast ? 'accessibility-high-contrast' : ''} ${isLargeText ? 'accessibility-large-text' : ''} min-h-screen bg-[#F8FAFC]`}>
        <LandingPage />
        <HealthCheckModal />
        <Toast />
      </div>
    );
  }

  return (
    <div className={`${isHighContrast ? 'accessibility-high-contrast' : ''} ${isLargeText ? 'accessibility-large-text' : ''} flex min-h-screen bg-[#F8FAFC] text-slate-900`}>
      {/* Sidebar Navigation */}
      <Sidebar />

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0 h-screen overflow-y-auto">
        <Header />

        <main className="flex-1 p-4 sm:p-6 lg:p-8 max-w-7xl w-full mx-auto">
          {currentTab === 'overview' && <DashboardOverview />}
          {currentTab === 'maternal' && <MaternalPostpartum />}
          {currentTab === 'child' && <ChildHealth />}
          {currentTab === 'vaccinations' && <VaccinationScheduler />}
          {currentTab === 'nutrition' && <NutritionModule />}
          {currentTab === 'hero' && <GamifiedMilestones />}
          {currentTab === 'passport' && <HealthPassport />}
          {currentTab === 'alerts' && <AlertCenter />}
          {currentTab === 'asha' && <AshaDashboard />}
          {currentTab === 'triage' && <RiskTriage />}
          {currentTab === 'family' && <FamilyManagement />}
          {currentTab === 'impact' && <ImpactAnalytics />}
          {currentTab === 'architecture' && <ArchitectureSection />}
          {currentTab === 'security' && <SecurityPrivacy />}
          {currentTab === 'comparison' && <CompetitiveComparison />}
        </main>
      </div>

      {/* Modals & Overlay Services */}
      <HealthCheckModal />
      <Toast />
    </div>
  );
};
