import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Contact } from './pages/Contact';
import { Services } from './pages/Services';
import { HCM } from './pages/services/HCM';
import { ERP } from './pages/services/ERP';
import { Java } from './pages/services/Java';
import { DevOps } from './pages/services/DevOps';
import { BPC } from './pages/services/BPC';
import { HCaaS } from './pages/services/HCaaS';
import { AaaS } from './pages/services/AaaS';
import { SCM } from './pages/solutions/SCM';
import { EPM } from './pages/solutions/EPM';
import { Unifier } from './pages/solutions/Unifier';
import { Tech } from './pages/solutions/Tech';
import { ApplicationDevelopment } from './pages/solutions/ApplicationDevelopment';
import { DatabaseMigration } from './pages/solutions/DatabaseMigration';
import { CloudManagement } from './pages/solutions/CloudManagement';
import { PowerBI } from './pages/solutions/PowerBI';
import { Salesforce } from './pages/solutions/Salesforce';
import { ServiceNow } from './pages/solutions/ServiceNow';
import { CybersecurityZeroTrustStrategy } from './pages/solutions/CybersecurityZeroTrustStrategy';
import { ApplicationCloudSecurity } from './pages/solutions/ApplicationCloudSecurity';
import { InfrastructureManagedOperations } from './pages/solutions/InfrastructureManagedOperations';
import { IBSFintech } from './pages/solutions/IBSFintech';
import { TreasuryOperations } from './pages/solutions/TreasuryOperations';
import { FinancialCloseAssistant } from './pages/solutions/FinancialCloseAssistant';
import { PurchaseOrderLifecycleAnalyzer } from './pages/solutions/PurchaseOrderLifecycleAnalyzer';
import { CVScreeningAgent } from './pages/solutions/CVScreeningAgent';
import { HROnboardingAssistant } from './pages/solutions/HROnboardingAssistant';
import { HRProbationAssistAgent } from './pages/solutions/HRProbationAssistAgent';
import { PayrollIssueAnalyzerAgent } from './pages/solutions/PayrollIssueAnalyzerAgent';
import { TechHub } from './pages/services/TechHub';
import { OracleFusionEBS } from './pages/services/OracleFusionEBS';
import { CloudDigitalTransformation } from './pages/services/CloudDigitalTransformation';
import { CxAnalytics } from './pages/services/CxAnalytics';
import { SecurityZeroTrust } from './pages/services/SecurityZeroTrust';
import { TreasuryManagement } from './pages/services/TreasuryManagement';
import { Industries } from './pages/Industries';
import { Resources } from './pages/Resources';
import { CaseStudies } from './pages/CaseStudies';
import { Careers } from './pages/Careers';
import { Leadership } from './pages/Leadership';
import { Values } from './pages/Values';
import { PageStub } from './components/layout/PageStub';
export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />

        {/* Company */}
        <Route path="/about/" element={<About />} />
        <Route path="/leadership/" element={<Leadership />} />
        <Route path="/values/" element={<Values />} />
        <Route path="/team/" element={<Navigate to="/leadership/" replace />} />

        <Route path="/careers/" element={<Careers />} />
        <Route path="/contact/" element={<Contact />} />

        {/* Services */}
        <Route path="/services/" element={<Services />} />
        <Route path="/services/oracle-fusion-ebs/" element={<OracleFusionEBS />} />
        <Route path="/services/ai-coe/" element={<TechHub />} />
        <Route
          path="/services/cloud-digital-transformation/"
          element={<CloudDigitalTransformation />}
        />
        <Route
          path="/services/cloud-database/"
          element={<Navigate to="/services/cloud-digital-transformation/" replace />}
        />
        <Route path="/services/cx-analytics/" element={<CxAnalytics />} />
        <Route path="/services/security-zero-trust/" element={<SecurityZeroTrust />} />
        <Route path="/services/treasury-management/" element={<TreasuryManagement />} />
        <Route
          path="/services/mpc-tech-hub/"
          element={<Navigate to="/services/ai-coe/" replace />}
        />

        {/* Solutions */}
        <Route path="/solutions/hcm/" element={<HCM />} />
        <Route path="/solutions/erp-oracle-cloud/" element={<ERP />} />
        <Route path="/solutions/java-technologies/" element={<Java />} />
        <Route path="/solutions/devops/" element={<DevOps />} />
        <Route path="/solutions/business-process-consulting/" element={<BPC />} />
        <Route path="/solutions/health-check-as-a-service/" element={<HCaaS />} />
        <Route path="/solutions/adoption-as-a-service/" element={<AaaS />} />
        <Route path="/solutions/scm/" element={<SCM />} />
        <Route path="/solutions/epm/" element={<EPM />} />
        <Route path="/solutions/unifier/" element={<Unifier />} />
        <Route path="/solutions/tech/" element={<Tech />} />
        <Route path="/solutions/application-development/" element={<ApplicationDevelopment />} />
        <Route path="/solutions/database-migration/" element={<DatabaseMigration />} />
        <Route path="/solutions/cloud-management/" element={<CloudManagement />} />
        <Route path="/solutions/power-bi/" element={<PowerBI />} />
        <Route path="/solutions/salesforce/" element={<Salesforce />} />
        <Route path="/solutions/servicenow/" element={<ServiceNow />} />
        <Route path="/solutions/cybersecurity-zero-trust-strategy/" element={<CybersecurityZeroTrustStrategy />} />
        <Route path="/solutions/application-cloud-security/" element={<ApplicationCloudSecurity />} />
        <Route path="/solutions/infrastructure-managed-operations/" element={<InfrastructureManagedOperations />} />
        <Route path="/solutions/ibs-fintech/" element={<IBSFintech />} />
        <Route path="/solutions/treasury-operations/" element={<TreasuryOperations />} />
        <Route
          path="/solutions/financial-close-assistant/"
          element={<FinancialCloseAssistant />}
        />
        <Route
          path="/solutions/purchase-order-lifecycle-analyzer/"
          element={<PurchaseOrderLifecycleAnalyzer />}
        />
        <Route
          path="/solutions/cv-screening-agent/"
          element={<CVScreeningAgent />}
        />
        <Route
          path="/solutions/hr-onboarding-assistant/"
          element={<HROnboardingAssistant />}
        />
        <Route
          path="/solutions/hr-probation-assist-agent/"
          element={<HRProbationAssistAgent />}
        />
        <Route
          path="/solutions/payroll-issue-analyzer-agent/"
          element={<PayrollIssueAnalyzerAgent />}
        />

        {/* Legacy solution redirects */}
        <Route path="/services/hcm/" element={<Navigate to="/solutions/hcm/" replace />} />
        <Route
          path="/services/erp-oracle-cloud/"
          element={<Navigate to="/solutions/erp-oracle-cloud/" replace />}
        />
        <Route
          path="/services/java-technologies/"
          element={<Navigate to="/solutions/java-technologies/" replace />}
        />
        <Route path="/services/devops/" element={<Navigate to="/solutions/devops/" replace />} />
        <Route
          path="/services/business-process-consulting/"
          element={<Navigate to="/solutions/business-process-consulting/" replace />}
        />
        <Route
          path="/services/health-check-as-a-service/"
          element={<Navigate to="/solutions/health-check-as-a-service/" replace />}
        />
        <Route
          path="/services/adoption-as-a-service/"
          element={<Navigate to="/solutions/adoption-as-a-service/" replace />}
        />

        {/* Industries */}
        <Route path="/industries/" element={<Industries />} />

        {/* Resources */}
        <Route path="/resources/" element={<Resources />} />
        <Route
          path="/resources/thought-leadership/"
          element={
          <PageStub
            title="Thought Leadership"
            description="Strategic perspectives on Oracle Cloud, AI, and enterprise transformation — from practitioners who build these systems every day."
            canonicalPath="/resources/thought-leadership/"
            breadcrumb={[
            {
              label: 'Resources',
              to: '/resources/'
            },
            {
              label: 'Thought Leadership'
            }]
            } />

          } />
        
        <Route path="/resources/case-studies/" element={<CaseStudies />} />

        <Route
          path="/resources/blog/"
          element={
          <PageStub
            title="The MPC Blog"
            description="Practical thinking on Oracle Cloud, AI, DevOps, and enterprise technology — written by consultants who build these systems."
            canonicalPath="/resources/blog/"
            breadcrumb={[
            {
              label: 'Resources',
              to: '/resources/'
            },
            {
              label: 'Blog'
            }]
            } />

          } />
        

        <Route
          path="*"
          element={
          <PageStub
            title="Page Not Found"
            description="The page you were looking for doesn't exist. Head back to the home page or pick a service from the menu."
            canonicalPath="/404/"
            noindex
            breadcrumb={[
            {
              label: '404'
            }]
            } />

          } />
        
      </Routes>
    </BrowserRouter>);

}