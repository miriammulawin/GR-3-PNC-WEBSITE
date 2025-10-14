import { useState } from 'react'
import online from './assets/online.jpg'
import step2 from './assets/step2.jpg'
import step3 from './assets/step3.jpg'
import './index.css'

function Admission() {
  // --- Existing form states ---
  const [formData, setFormData] = useState({
    lastName: '',
    firstName: '',
    middleName: '',
    suffix: '',
    dateOfBirth: '',
    placeOfBirth: '',
    sex: '',
    civilStatus: '',
    nationality: '',
    religion: '',
    email: '',
    contactNumber: '',
    address: '',
    city: '',
    province: '',
    zipCode: '',
    lastSchoolAttended: '',
    schoolAddress: '',
    yearGraduated: '',
    programChoice: '',
    isCabuyeno: false,
    votersIdNumber: '',
    parentName: '',
    parentContactNumber: '',
    parentCertificateNumber: ''
  })

  const [currentStep, setCurrentStep] = useState(1)
  const [submitted, setSubmitted] = useState(false)

  // --- Added for admission steps section ---
  const [selectedDiv, setSelectedDiv] = useState(1)
  const handleDivClick = (divNumber) => setSelectedDiv(divNumber)

  const renderContent = () => {
    switch (selectedDiv) {
      case 1:
        return <img src={online} alt="Step 1" className="rounded-lg shadow-2xl" />
      case 2:
        return <img src={step2} alt="Step 2" className="rounded-lg shadow-2xl" />
      case 3:
        return <img src={step3} alt="Step 3" className="rounded-lg shadow-2xl" />
      default:
        return null
    }
  }

  // --- Form logic ---
  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }))
  }

  const downloadAsHTML = () => {
    const esc = (str) => String(str ?? '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;')
    const formattedDate = formData.dateOfBirth ? new Date(formData.dateOfBirth).toLocaleDateString() : ''

    const cabuyenoSection = formData.isCabuyeno ? `\n    <div class="section">\n        <div class="section-title">CABUYEÑO APPLICANT INFO</div>\n        <div class="field"><span class="label">Parent Name:</span><span class="value">${esc(formData.parentName)}</span></div>\n        <div class="field"><span class="label">Parent Contact:</span><span class="value">${esc(formData.parentContactNumber)}</span></div>\n        <div class="field"><span class="label">Certificate Number:</span><span class="value">${esc(formData.parentCertificateNumber)}</span></div>\n    </div>` : ''

    const htmlContent = `<!doctype html>\n<html lang="en">\n<head>\n    <meta charset="utf-8"/>\n    <meta name="viewport" content="width=device-width,initial-scale=1"/>\n    <title>PNC Admission Application</title>\n    <style>\n        body { font-family: Arial, sans-serif; max-width: 800px; margin: 40px auto; padding: 20px; line-height: 1.6; }\n        .header { text-align: center; border-bottom: 3px solid #166534; padding-bottom: 20px; margin-bottom: 30px; }\n        h1 { color: #166534; margin: 10px 0; }\n        .section { margin: 30px 0; border: 1px solid #ddd; padding: 20px; border-radius: 5px; }\n        .section-title { color: #166534; font-size: 18px; font-weight: bold; border-bottom: 2px solid #166534; padding-bottom: 10px; margin-bottom: 15px; }\n        .field { margin: 10px 0; padding: 8px 0; }\n        .label { font-weight: bold; color: #333; }\n        .value { color: #555; margin-left: 10px; }\n        .checklist { list-style: none; padding-left: 0; }\n        .checklist li { padding: 8px 0; border-bottom: 1px solid #eee; }\n        .footer { margin-top: 40px; padding-top: 20px; border-top: 2px solid #ddd; text-align: center; color: #666; font-size: 14px; }\n    </style>\n</head>\n<body>\n    <div class="header">\n        <h1>UNIVERSITY OF CABUYAO</h1>\n        <p>(PAMANTASAN NG CABUYAO)</p>\n        <h2>ADMISSION APPLICATION FORM</h2>\n        <p>PNC:SDAS-FO-34</p>\n    </div>\n    <div class="section">\n        <div class="section-title">PERSONAL INFORMATION</div>\n        <div class="field"><span class="label">Last Name:</span><span class="value">${esc(formData.lastName)}</span></div>\n        <div class="field"><span class="label">First Name:</span><span class="value">${esc(formData.firstName)}</span></div>\n        <div class="field"><span class="label">Middle Name:</span><span class="value">${esc(formData.middleName)}</span></div>\n        <div class="field"><span class="label">Suffix:</span><span class="value">${esc(formData.suffix)}</span></div>\n        <div class="field"><span class="label">Date of Birth:</span><span class="value">${esc(formattedDate)}</span></div>\n        <div class="field"><span class="label">Place of Birth:</span><span class="value">${esc(formData.placeOfBirth)}</span></div>\n        <div class="field"><span class="label">Sex:</span><span class="value">${esc(formData.sex)}</span></div>\n        <div class="field"><span class="label">Civil Status:</span><span class="value">${esc(formData.civilStatus)}</span></div>\n        <div class="field"><span class="label">Nationality:</span><span class="value">${esc(formData.nationality)}</span></div>\n        <div class="field"><span class="label">Religion:</span><span class="value">${esc(formData.religion)}</span></div>\n    </div>\n    <div class="section">\n        <div class="section-title">CONTACT INFORMATION</div>\n        <div class="field"><span class="label">Email:</span><span class="value">${esc(formData.email)}</span></div>\n        <div class="field"><span class="label">Contact Number:</span><span class="value">${esc(formData.contactNumber)}</span></div>\n        <div class="field"><span class="label">Address:</span><span class="value">${esc(formData.address)}</span></div>\n        <div class="field"><span class="label">City:</span><span class="value">${esc(formData.city)}</span></div>\n        <div class="field"><span class="label">Province:</span><span class="value">${esc(formData.province)}</span></div>\n        <div class="field"><span class="label">Zip Code:</span><span class="value">${esc(formData.zipCode)}</span></div>\n    </div>\n    ${cabuyenoSection}\n    <div class="section">\n        <div class="section-title">ACADEMIC INFORMATION</div>\n        <div class="field"><span class="label">Last School:</span><span class="value">${esc(formData.lastSchoolAttended)}</span></div>\n        <div class="field"><span class="label">School Address:</span><span class="value">${esc(formData.schoolAddress)}</span></div>\n        <div class="field"><span class="label">Year Graduated:</span><span class="value">${esc(formData.yearGraduated)}</span></div>\n        <div class="field"><span class="label">Program Choice:</span><span class="value">${esc(formData.programChoice)}</span></div>\n    </div>\n    <div class="section">\n        <div class="section-title">REQUIREMENTS CHECKLIST</div>\n        <ul class="checklist">\n            <li>☐ Affidavit of Undertaking (PNC:SDAS-FO-35)</li>\n            <li>☐ Certificate of Enrollment</li>\n            <li>☐ PSA Birth Certificate (Original)</li>\n            <li>☐ Voter's Certificate/Stub</li>\n            <li>☐ 2 pcs 2x2 and 4 pcs 1x1 pictures</li>\n            <li>☐ White folder and plastic envelope</li>\n        </ul>\n    </div>\n    <div class="footer">\n        <p><strong>For queries:</strong> admission@pnc.edu.ph</p>\n        <p>Date: ${esc(new Date().toLocaleDateString())}</p>\n    </div>\n</body>\n</html>`

    const blob = new Blob([htmlContent], { type: 'text/html' })
    const url = URL.createObjectURL(blob)
    const link = document.createElement('a')
    link.href = url
    const safeLast = esc(formData.lastName).replace(/[^a-zA-Z0-9_-]/g, '_')
    const safeFirst = esc(formData.firstName).replace(/[^a-zA-Z0-9_-]/g, '_')
    link.download = `PNC_Application_${safeLast}_${safeFirst}.html`
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
    URL.revokeObjectURL(url)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  const nextStep = () => setCurrentStep(prev => Math.min(prev + 1, 4))
  const prevStep = () => setCurrentStep(prev => Math.max(prev - 1, 1))

  if (submitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 to-green-100 p-8">
        <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-xl p-8 text-center">
          <div className="text-green-600 text-6xl mb-4">✓</div>
          <h2 className="text-3xl font-bold text-green-800 mb-4">Application Form Completed!</h2>
          <p className="text-gray-600 mb-6">
            Your application form has been generated. Download it and submit with all required documents to the Admissions Department.
          </p>
          <button
            onClick={downloadAsHTML}
            className="px-8 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-semibold mb-6"
          >
            📥 Download Application Form
          </button>
          <div className="bg-green-50 border-l-4 border-green-600 p-4 text-left">
            <h3 className="font-bold text-green-800 mb-2">Next Steps:</h3>
            <ol className="list-decimal list-inside space-y-2 text-gray-700 text-sm">
              <li>Download and print your application form</li>
              <li>Prepare all required documents</li>
              <li>Submit to Admissions Department (starts Jan 08, 2024)</li>
              <li>Wait for assessment examination schedule</li>
            </ol>
          </div>
          <p className="text-sm text-gray-600 mt-4">
            For inquiries: <span className="font-semibold text-green-700">admission@pnc.edu.ph</span>
          </p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-green-100 p-4 md:p-8">
      {/* --- ADMISSION STEPS SECTION --- */}
      <div className="flex flex-col justify-center items-center mb-12">
        <h1 className="rounded-2xl bg-green-800 p-6 md:p-10 w-fit text-center text-3xl md:text-5xl font-semibold text-white mt-10">
          Application For College Admission is Now Open!
        </h1>

        <div className="flex flex-col md:flex-row w-full md:w-auto bg-[#d4edda] mt-8 p-6 md:p-10 gap-5 rounded-md border-green-800 border-2">
          <div className="flex flex-col gap-2">
            <div
              className={`w-60 h-15 cursor-pointer p-2 ${selectedDiv === 1 ? 'font-bold text-green-800' : 'text-gray-700'}`}
              onClick={() => handleDivClick(1)}
            >
              Step 1: Online Registration
            </div>
            <div
              className={`w-60 h-15 cursor-pointer p-2 ${selectedDiv === 2 ? 'font-bold text-green-800' : 'text-gray-700'}`}
              onClick={() => handleDivClick(2)}
            >
              Step 2: Submission of Initial Requirements
            </div>
            <div
              className={`w-60 h-15 cursor-pointer p-2 ${selectedDiv === 3 ? 'font-bold text-green-800' : 'text-gray-700'}`}
              onClick={() => handleDivClick(3)}
            >
              Step 3: Assessment Exam
            </div>
          </div>

          <div className="flex justify-center items-center w-full md:w-[480px]">
            {renderContent()}
          </div>
        </div>
      </div>

      {/* --- ORIGINAL FORM SECTION BELOW --- */}
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-t-lg shadow-lg p-6 mb-0">
          <div className="text-center mb-4">
            <h1 className="text-3xl font-bold text-green-800">University of Cabuyao</h1>
            <p className="text-sm text-gray-600">(PAMANTASAN NG CABUYAO)</p>
            <h2 className="text-xl font-semibold text-green-700 mt-4">ADMISSION APPLICATION FORM</h2>
            <p className="text-sm text-gray-600">PNC:SDAS-FO-34</p>
          </div>

          <div className="flex justify-between items-center mt-6">
            {[1, 2, 3, 4].map((step) => (
              <div key={step} className="flex items-center flex-1">
                <div
                  className={`flex items-center justify-center w-10 h-10 rounded-full ${
                    currentStep >= step ? 'bg-green-600 text-white' : 'bg-gray-300 text-gray-600'
                  } font-semibold`}
                >
                  {step}
                </div>
                {step < 4 && (
                  <div className={`flex-1 h-1 mx-2 ${currentStep > step ? 'bg-green-600' : 'bg-gray-300'}`} />
                )}
              </div>
            ))}
          </div>

          <div className="flex justify-between mt-2 text-xs text-gray-600">
            <span>Personal</span>
            <span>Contact</span>
            <span>Academic</span>
            <span>Review</span>
          </div>
        </div>
        
        <div className="bg-white rounded-b-lg shadow-lg p-8">
          {currentStep === 1 && (
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-green-800 mb-4">Personal Information</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Last Name *</label>
                  <input type="text" name="lastName" value={formData.lastName} onChange={handleInputChange} required className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">First Name *</label>
                  <input type="text" name="firstName" value={formData.firstName} onChange={handleInputChange} required className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Middle Name</label>
                  <input type="text" name="middleName" value={formData.middleName} onChange={handleInputChange} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Suffix</label>
                  <input type="text" name="suffix" value={formData.suffix} onChange={handleInputChange} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Date of Birth *</label>
                  <input type="date" name="dateOfBirth" value={formData.dateOfBirth} onChange={handleInputChange} required className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Place of Birth *</label>
                  <input type="text" name="placeOfBirth" value={formData.placeOfBirth} onChange={handleInputChange} required className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Sex *</label>
                  <select name="sex" value={formData.sex} onChange={handleInputChange} required className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500">
                    <option value="">Select</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Civil Status *</label>
                  <select name="civilStatus" value={formData.civilStatus} onChange={handleInputChange} required className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500">
                    <option value="">Select</option>
                    <option value="Single">Single</option>
                    <option value="Married">Married</option>
                    <option value="Widowed">Widowed</option>
                    <option value="Separated">Separated</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Nationality *</label>
                  <input type="text" name="nationality" value={formData.nationality} onChange={handleInputChange} required className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Religion</label>
                  <input type="text" name="religion" value={formData.religion} onChange={handleInputChange} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500" />
                </div>
              </div>
            </div>
          )}

          {currentStep === 2 && (
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-green-800 mb-4">Contact Information</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email Address *</label>
                  <input type="email" name="email" value={formData.email} onChange={handleInputChange} required className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Contact Number *</label>
                  <input type="tel" name="contactNumber" value={formData.contactNumber} onChange={handleInputChange} required placeholder="+63" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Complete Address *</label>
                <input type="text" name="address" value={formData.address} onChange={handleInputChange} required placeholder="House No., Street, Barangay" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500" />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">City/Municipality *</label>
                  <input type="text" name="city" value={formData.city} onChange={handleInputChange} required className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Province *</label>
                  <input type="text" name="province" value={formData.province} onChange={handleInputChange} required className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Zip Code *</label>
                  <input type="text" name="zipCode" value={formData.zipCode} onChange={handleInputChange} required className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500" />
                </div>
              </div>
              <div className="border-t pt-4 mt-6">
                <div className="flex items-center mb-4">
                  <input type="checkbox" name="isCabuyeno" checked={formData.isCabuyeno} onChange={handleInputChange} className="w-4 h-4 text-green-600 border-gray-300 rounded focus:ring-green-500" />
                  <label className="ml-2 text-sm font-medium text-gray-700">I am a Cabuyeño applicant (under 17 years old)</label>
                </div>
                {formData.isCabuyeno && (
                  <div className="space-y-4 ml-6 bg-green-50 p-4 rounded-md">
                    <p className="text-sm text-gray-600 italic">Note: Submit parent's Certificate of Registration</p>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Parent/Guardian Name</label>
                      <input type="text" name="parentName" value={formData.parentName} onChange={handleInputChange} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Parent Contact</label>
                      <input type="tel" name="parentContactNumber" value={formData.parentContactNumber} onChange={handleInputChange} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Certificate Number</label>
                      <input type="text" name="parentCertificateNumber" value={formData.parentCertificateNumber} onChange={handleInputChange} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500" />
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}

          {currentStep === 3 && (
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-green-800 mb-4">Academic Information</h3>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Last School Attended *</label>
                <input type="text" name="lastSchoolAttended" value={formData.lastSchoolAttended} onChange={handleInputChange} required className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">School Address *</label>
                <input type="text" name="schoolAddress" value={formData.schoolAddress} onChange={handleInputChange} required className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Year Graduated *</label>
                <input type="text" name="yearGraduated" value={formData.yearGraduated} onChange={handleInputChange} required placeholder="YYYY" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Program/Course Choice *</label>
                <select name="programChoice" value={formData.programChoice} onChange={handleInputChange} required className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500">
                  <option value="">Select Program</option>
                  <option value="BS Computer Science">BS Computer Science</option>
                  <option value="BS Information Technology">BS Information Technology</option>
                  <option value="BS Business Administration">BS Business Administration</option>
                  <option value="BS Accountancy">BS Accountancy</option>
                  <option value="BS Civil Engineering">BS Civil Engineering</option>
                  <option value="Bachelor of Elementary Education">Bachelor of Elementary Education</option>
                  <option value="Bachelor of Secondary Education">Bachelor of Secondary Education</option>
                </select>
              </div>
            </div>
          )}

          {currentStep === 4 && (
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-green-800 mb-4">Review Your Information</h3>
              <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                <div className="space-y-2 text-sm">
                  <p><strong>Name:</strong> {formData.firstName} {formData.middleName} {formData.lastName} {formData.suffix}</p>
                  <p><strong>Email:</strong> {formData.email}</p>
                  <p><strong>Contact:</strong> {formData.contactNumber}</p>
                  <p><strong>Address:</strong> {formData.address}, {formData.city}, {formData.province}</p>
                  <p><strong>Program:</strong> {formData.programChoice}</p>
                  <p><strong>Last School:</strong> {formData.lastSchoolAttended}</p>
                </div>
              </div>
              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
                <p className="text-sm text-yellow-800"><strong>Important:</strong> Ensure all required documents are prepared for submission</p>
              </div>
            </div>
          )}

          <div className="flex justify-between mt-8 pt-6 border-t">
            {currentStep > 1 && (
              <button type="button" onClick={prevStep} className="px-6 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 transition-colors">Previous</button>
            )}
            {currentStep < 4 ? (
              <button type="button" onClick={nextStep} className="ml-auto px-6 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors">Next</button>
            ) : (
              <button type="button" onClick={handleSubmit} className="ml-auto px-8 py-2 bg-green-700 text-white rounded-md hover:bg-green-800 transition-colors font-semibold">Generate Form</button>
            )}
          </div>
        </div>

        <div className="mt-6 text-center text-sm text-gray-600">
          <p>For queries: <span className="font-semibold text-green-700">admission@pnc.edu.ph</span></p>
        </div>
      </div>
    </div>
  )
}

export default Admission