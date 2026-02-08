import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './src/components/Layout';
import Home from './src/pages/Home';
import PrivacyPolicy from './src/pages/PrivacyPolicy';
import TermsOfUse from './src/pages/TermsOfUse';
import Disclaimer from './src/pages/Disclaimer';
import ContactUs from './src/pages/ContactUs';
import About from './src/pages/About';
import Blog from './src/pages/Blog';
import BlogPost from './src/pages/BlogPost';

import ScrollToAnchor from './src/components/ScrollToAnchor';

const App = () => {
  return (
    <BrowserRouter>
      <ScrollToAnchor />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="privacy" element={<PrivacyPolicy />} />
          <Route path="terms" element={<TermsOfUse />} />
          <Route path="disclaimer" element={<Disclaimer />} />
          <Route path="contact" element={<ContactUs />} />
          <Route path="about" element={<About />} />
          <Route path="blog" element={<Blog />} />
          <Route path="blog/:slug" element={<BlogPost />} />
          {/* Catch all redirect to Home */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;