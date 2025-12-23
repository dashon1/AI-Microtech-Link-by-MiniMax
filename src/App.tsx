import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import ServicesPage from './pages/ServicesPage'
import ProductsPage from './pages/ProductsPage'
import AppsGalleryPage from './pages/AppsGalleryPage'
import AboutPage from './pages/AboutPage'
import FloridaPage from './pages/FloridaPage'
import ContactPage from './pages/ContactPage'
import SantaSignupPage from './pages/SantaSignupPage'
import AdminPage from './pages/AdminPage'
import AppFormPage from './pages/AppFormPage'
import AppDetailPage from './pages/AppDetailPage'
import SignUpPage from './pages/SignUpPage'
import { AppProvider } from './context/AppContext'

function App() {
  return (
    <AppProvider>
      <Router>
        <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-gray-900 transition-colors duration-200">
          <Header />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/products" element={<ProductsPage />} />
              <Route path="/apps" element={<AppsGalleryPage />} />
              <Route path="/apps/:id" element={<AppDetailPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/florida" element={<FloridaPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/santa-signup" element={<SantaSignupPage />} />
              <Route path="/signup" element={<SignUpPage />} />

              {/* Admin Routes */}
              <Route path="/admin" element={<AdminPage />} />
              <Route path="/admin/new" element={<AppFormPage />} />
              <Route path="/admin/edit/:id" element={<AppFormPage />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </AppProvider>
  )
}

export default App
