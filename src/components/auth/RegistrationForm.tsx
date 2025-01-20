import React, { useState } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { UserRole } from '../../types/auth';
import { FaGoogle, FaLinkedin } from 'react-icons/fa';
import { ChevronRight, ChevronLeft, Upload, Check } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface RegistrationStep {
  title: string;
  isCompleted: boolean;
}

const RegistrationForm = () => {
  const { register } = useAuth();
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    firstName: '',
    lastName: '',
    role: '' as UserRole,
    graduationYear: '',
    department: '',
    studentId: '',
    company: '',
    position: '',
    documents: [] as File[],
  });

  const steps: RegistrationStep[] = [
    { title: 'Account Type', isCompleted: !!formData.role },
    { title: 'Basic Information', isCompleted: !!(formData.email && formData.password && formData.confirmPassword) },
    { title: 'Personal Details', isCompleted: !!(formData.firstName && formData.lastName) },
    { title: 'Role Details', isCompleted: formData.role === 'student' ? !!formData.studentId : !!formData.company },
    { title: 'Document Verification', isCompleted: formData.documents.length > 0 },
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFormData({ ...formData, documents: [...formData.documents, ...Array.from(e.target.files)] });
    }
  };

  const handleSocialLogin = async (provider: 'google' | 'linkedin') => {
    try {
      await register({
        email: `${provider}@example.com`,
        firstName: 'Demo',
        lastName: 'User',
        role: 'student'
      });
      navigate('/');
    } catch (error) {
      console.error('Social login failed:', error);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await register(formData);
      navigate('/');
    } catch (error) {
      console.error('Registration failed:', error);
    }
  };

  const renderStepIndicator = () => (
    <div className="mb-8">
      <div className="flex justify-between items-center">
        {steps.map((step, index) => (
          <React.Fragment key={step.title}>
            <div className="flex flex-col items-center">
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center ${
                  index === currentStep
                    ? 'bg-indigo-600 text-white'
                    : step.isCompleted
                    ? 'bg-green-500 text-white'
                    : 'bg-gray-200 text-gray-600'
                }`}
              >
                {step.isCompleted ? <Check className="w-4 h-4" /> : index + 1}
              </div>
              <span className="text-xs mt-1">{step.title}</span>
            </div>
            {index < steps.length - 1 && (
              <div className="flex-1 h-0.5 mx-2 bg-gray-200" />
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );

  const renderAccountTypeStep = () => (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Choose Account Type</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <button
          type="button"
          onClick={() => {
            setFormData({ ...formData, role: 'student' });
            setCurrentStep(1);
          }}
          className={`p-6 border rounded-lg text-left hover:border-indigo-500 transition-colors ${
            formData.role === 'student' ? 'border-indigo-500 bg-indigo-50' : ''
          }`}
        >
          <h3 className="text-lg font-semibold">Student</h3>
          <p className="text-gray-600">Current students or recent graduates</p>
        </button>
        <button
          type="button"
          onClick={() => {
            setFormData({ ...formData, role: 'alumni' });
            setCurrentStep(1);
          }}
          className={`p-6 border rounded-lg text-left hover:border-indigo-500 transition-colors ${
            formData.role === 'alumni' ? 'border-indigo-500 bg-indigo-50' : ''
          }`}
        >
          <h3 className="text-lg font-semibold">Alumni</h3>
          <p className="text-gray-600">Graduated professionals</p>
        </button>
      </div>
      <div className="mt-8">
        <p className="text-center text-gray-600 mb-4">Or sign up with</p>
        <div className="flex justify-center space-x-4">
          <button
            type="button"
            onClick={() => handleSocialLogin('google')}
            className="flex items-center px-6 py-2 border rounded-lg hover:bg-gray-50"
          >
            <FaGoogle className="mr-2" /> Google
          </button>
          <button
            type="button"
            onClick={() => handleSocialLogin('linkedin')}
            className="flex items-center px-6 py-2 border rounded-lg hover:bg-gray-50"
          >
            <FaLinkedin className="mr-2" /> LinkedIn
          </button>
        </div>
      </div>
    </div>
  );

  const renderBasicInfoStep = () => (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Basic Information</h2>
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Confirm Password</label>
          <input
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleInputChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            required
          />
        </div>
      </div>
    </div>
  );

  const renderPersonalDetailsStep = () => (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Personal Details</h2>
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">First Name</label>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleInputChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Last Name</label>
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleInputChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            required
          />
        </div>
      </div>
    </div>
  );

  const renderRoleDetailsStep = () => (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">
        {formData.role === 'student' ? 'Student Details' : 'Professional Details'}
      </h2>
      <div className="space-y-4">
        {formData.role === 'student' ? (
          <>
            <div>
              <label className="block text-sm font-medium text-gray-700">Student ID</label>
              <input
                type="text"
                name="studentId"
                value={formData.studentId}
                onChange={handleInputChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Department</label>
              <input
                type="text"
                name="department"
                value={formData.department}
                onChange={handleInputChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                required
              />
            </div>
          </>
        ) : (
          <>
            <div>
              <label className="block text-sm font-medium text-gray-700">Company</label>
              <input
                type="text"
                name="company"
                value={formData.company}
                onChange={handleInputChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Position</label>
              <input
                type="text"
                name="position"
                value={formData.position}
                onChange={handleInputChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                required
              />
            </div>
          </>
        )}
      </div>
    </div>
  );

  const renderDocumentVerificationStep = () => (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Document Verification</h2>
      <div className="space-y-4">
        <div className="border-2 border-dashed border-gray-300 rounded-lg p-6">
          <div className="text-center">
            <Upload className="mx-auto h-12 w-12 text-gray-400" />
            <div className="mt-4">
              <label
                htmlFor="file-upload"
                className="cursor-pointer rounded-md font-medium text-indigo-600 hover:text-indigo-500"
              >
                <span>Upload your documents</span>
                <input
                  id="file-upload"
                  name="file-upload"
                  type="file"
                  className="sr-only"
                  multiple
                  onChange={handleFileUpload}
                />
              </label>
            </div>
            <p className="text-xs text-gray-500">
              PDF, JPG, PNG up to 10MB
            </p>
          </div>
        </div>
        {formData.documents.length > 0 && (
          <div className="mt-4">
            <h4 className="text-sm font-medium text-gray-700">Uploaded documents:</h4>
            <ul className="mt-2 divide-y divide-gray-200">
              {formData.documents.map((file, index) => (
                <li key={index} className="py-2 flex items-center justify-between">
                  <span className="text-sm text-gray-600">{file.name}</span>
                  <Check className="h-5 w-5 text-green-500" />
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );

  const renderCurrentStep = () => {
    switch (currentStep) {
      case 0:
        return renderAccountTypeStep();
      case 1:
        return renderBasicInfoStep();
      case 2:
        return renderPersonalDetailsStep();
      case 3:
        return renderRoleDetailsStep();
      case 4:
        return renderDocumentVerificationStep();
      default:
        return null;
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      <form onSubmit={handleSubmit} className="space-y-8">
        {renderStepIndicator()}
        {renderCurrentStep()}
        <div className="flex justify-between mt-8">
          {currentStep > 0 && (
            <button
              type="button"
              onClick={() => setCurrentStep(currentStep - 1)}
              className="flex items-center px-4 py-2 border rounded-md hover:bg-gray-50"
            >
              <ChevronLeft className="w-5 h-5 mr-1" /> Previous
            </button>
          )}
          {currentStep < steps.length - 1 ? (
            <button
              type="button"
              onClick={() => setCurrentStep(currentStep + 1)}
              className="flex items-center px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 ml-auto"
            >
              Next <ChevronRight className="w-5 h-5 ml-1" />
            </button>
          ) : (
            <button
              type="submit"
              className="flex items-center px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 ml-auto"
            >
              Complete Registration <ChevronRight className="w-5 h-5 ml-1" />
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default RegistrationForm;
