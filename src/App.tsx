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
import { TechHub } from './pages/services/TechHub';
import { OracleFusionEBS } from './pages/services/OracleFusionEBS';
import { CloudDatabase } from './pages/services/CloudDatabase';
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
        
        <Route
          path="/news/"
          element={
          <PageStub
            title="MPC in the News"
            description="Company announcements, industry recognition, new office openings, and updates from our teams across India, UAE, Singapore, Australia, and the UK."
            canonicalPath="/news/"
            breadcrumb={[
            {
              label: 'News'
            }]
            } />

          } />
        
        <Route path="/careers/" element={<Careers />} />
        <Route path="/contact/" element={<Contact />} />

        {/* Services */}
        <Route path="/services/" element={<Services />} />
        <Route path="/services/oracle-fusion-ebs/" element={<OracleFusionEBS />} />
        <Route path="/services/hcm/" element={<HCM />} />
        <Route path="/services/erp-oracle-cloud/" element={<ERP />} />
        <Route path="/services/java-technologies/" element={<Java />} />
        <Route path="/services/devops/" element={<DevOps />} />
        <Route
          path="/services/business-process-consulting/"
          element={<BPC />} />
        
        <Route
          path="/services/health-check-as-a-service/"
          element={<HCaaS />} />
        
        <Route path="/services/adoption-as-a-service/" element={<AaaS />} />
        <Route path="/services/ai-coe/" element={<TechHub />} />
        <Route path="/services/cloud-database/" element={<CloudDatabase />} />
        <Route path="/services/cx-analytics/" element={<CxAnalytics />} />
        <Route path="/services/security-zero-trust/" element={<SecurityZeroTrust />} />
        <Route path="/services/treasury-management/" element={<TreasuryManagement />} />
        <Route
          path="/services/mpc-tech-hub/"
          element={<Navigate to="/services/ai-coe/" replace />}
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
          path="/resources/whitepapers/"
          element={
          <PageStub
            title="Whitepapers & Guides"
            description="Download in-depth Oracle Cloud and AI transformation guides from MPC's expert consultants."
            canonicalPath="/resources/whitepapers/"
            breadcrumb={[
            {
              label: 'Resources',
              to: '/resources/'
            },
            {
              label: 'Whitepapers'
            }]
            } />

          } />
        
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