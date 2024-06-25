let path = 'timeline';
const patients = [
  { healthCardNum:"0000000001",firstName:"John",lastName:"Doe",initial:"F",address:"4521 Central Street, Yarmouth",province:"NS",
    postalCode:"B5A 3H1",gender:"M",daytimePhone:"902-881-6975",eveningPhone:"902-604-3221",familyPhysicianName:"Dr. Simon Hooper",
    dateOfBirth:"1937-06-18",age:"86",height:"5'11\"",weight:"206 lbs",surgical:"Hip replacement, Knee replacement",medical:"Diabetes, Sleep Apnea",
    allergies:"Penicillin and related antibiotics",medications:"Ozempic, Modafinil",treatments:"Physiotherapy",previousSurgeon:"Dr. Bertha Hebert",
    alreadySent:"Yes",alreadySentName:"Dr. Myles Adkins",physicianNum:"CAMD-4544-8948",
    sin:"123 456 789",maritalStatus:"Married",smoking:"Smoker, 12 Years, 10 / Day",
    entries: [
      { name: 'Jadiance (empagliflozin)', start: 66, value: 20, type: 'medication' },
      { name: 'Heart Disease', start: 66, value: 20, type: 'condition' },
      //{ name: 'High Blood Pressure', start: 46, value: 16, type: 'condition' },
      { name: 'Metformin', start: 41, value: 45, type: 'medication' },
      { name: 'Diabetes', start: 41, value: 45, type: 'condition' },
      { name: 'Obesity', start: 33, value: 53, type: 'condition' }
      //{ name: 'Lisinopril', start: 41, value: 17, type: 'medication' },
      //{ name: 'Hydralazine', start: 58, value: 28, type: 'medication' },
      
    ],
    events: [
      { encounterId: '1000001', text: '', xVal: 680, yVal: 49, url: '' },
      { encounterId: '1000001', text: '', xVal: 592, yVal: 131, url: '' },
      { encounterId: '1000001', text: '', xVal: 423, yVal: 131, url: '' },
      { encounterId: '1000001', text: '', xVal: 340, yVal: 172, url: '' },
      //{ encounterId: '1000001', text: '', xVal: 423, yVal: 114, url: '' },
      //{ encounterId: '1000001', text: '', xVal: 475, yVal: 114, url: '' },
    ]
  },
  { healthCardNum:"0000000002",firstName:"Angelica",lastName:"Mack",initial:"H",address:"571 Granville St, Halifax",province:"NS",
    postalCode:"B3K 5L2",gender:"F",daytimePhone:"902-440-3896",eveningPhone:"902-667-1460",familyPhysicianName:"Dr. Lucy Sweeney",
    dateOfBirth:"1937-03-16",age:"86",height:"5'4\"",weight:"150 lbs",surgical:"Knee replacement",medical:"Sleep Apnea",
    allergies:"",medications:"Modafinil",treatments:"Physiotherapy",previousSurgeon:"Dr. Rosanne Munoz",
    alreadySent:"Yes",alreadySentName:"Dr. Jennifer Hogan",physicianNum:"CAMD-9442-4369",
    sin:"111 222 333",maritalStatus:"Single",smoking:"Former Smoker, Quit 6 Years Ago",
    conditions: [
      { name: 'Dimentia', start: 66, value: 24 },
      { name: 'Diabetes', start: 46, value: 44 },
      { name: 'High Blood Pressure', start: 38, value: 17 }
    ],
    medications: [
      { name: 'Statins', start: 32, value: 23 },
      { name: 'Metformin', start: 45, value: 45 },
      { name: 'Ozempic', start: 48, value: 42 }
    ],
    events: [
      { encounterId: '1000001', text: 'MRI', xVal: 680, yVal: -3, url: './img/dimensia1.jpg' },
      { encounterId: '1000001', text: 'MRI', xVal: 790, yVal: -3, url: './img/dimensia2.jpg' },
      { encounterId: '1000001', text: 'MRI', xVal: 880, yVal: -3, url: './img/dimensia3.jpg' },
      { encounterId: '1000001', text: 'MRI', xVal: 918, yVal: -3, url: './img/dimensia4.jpg' }
    ]
  },
];

const physicians = [
  {physicianWcbNum:"CAMD-4544-8948",physicianName:"Dr. Jennifer Hogan",physicianPhoneNum:"902-250-630",physicianAddress:"6420 Quinpool Rd, Halifax, NS B3L1A8"},
  {physicianWcbNum:"CAMD-9442-4369",physicianName:"Dr. Emery Castillo",physicianPhoneNum:"902-206-7188",physicianAddress:"670 Maple Ave, Kentville, NS B4N7T1"},
  {physicianWcbNum:"CAMD-2372-4923",physicianName:"Dr. Rosanne Munoz",physicianPhoneNum:"902-296-2665",physicianAddress:"739 Addison Rd, Tantallon, NS B3Z2K1"},
  {physicianWcbNum:"CAMD-2269-2237",physicianName:"Dr. Bertha Hebert",physicianPhoneNum:"902-357-7432",physicianAddress:"9646 James Dr, Lakeside, NS B3T4Y1"},
  {physicianWcbNum:"CAMD-3950-4709",physicianName:"Dr. Myles Adkins",physicianPhoneNum:"902-869-6924",physicianAddress:"7014 Meadow Lane, Waverley, NS B2R2J1"},
]

const summaries = [
  {
    encounterId: "1000001",
    hospitalId: "123456789",
    hospitalName: "QEII Health Sciences Centre",
    admissionDate: "02/01/2024",
    dischargeDate: "02/05/2024",
    course: "<p>During the course of hospitalization, the patient exhibited polydipsia, polyuria, and an inexplicably fluctuating glycemic index, prompting an intricate battery of diagnostic assessments. An initial hemoglobin A1c measurement notably exceeded the upper quintile of the standard reference range, corroborating with a persistent hyperglycemic state interspersed with episodes of nocturnal hypoglycemia. Subsequent endocrinological evaluations delineated a panorama of metabolic dysregulation consistent with type 2 diabetes mellitus, further complicated by an insidious onset of peripheral neuropathy as evidenced by diminished bilateral pedal sensation and attenuated reflexes. Nutritional consults underscored the necessity of immediate and drastic lifestyle modification, synergistically complemented by pharmacologic intervention aimed at meticulous glycemic control and mitigating impending sequelae of protracted hyperglycemia.</p>",
    primaryDiagnosis: "Type 2 Diabetes Mellitus Secondary Diagnosis",
    secondaryDiagnosis: "Peripheral Neuropathy Procedures: Nutritional and Diabetic Education Sessions",
    condition: "<p>The patient's condition at discharge was stable with blood glucose levels trending towards normoglycemia. The patient has been advised to monitor blood glucose levels regularly.</p><span class='discharge-text-header'>Prescribed Medications:</span><ul><li>Metformin 500 mg orally twice a day</li><li>Lisinopril 10 mg orally once a day for nephroprotection</li><li>Simvastatin 20 mg orally at bedtime for lipid control</li></ul>",
    instructions: "<p>The patient is instructed to adhere to a diabetic diet, engage in regular physical activity, and monitor blood glucose levels at home. The importance of foot care and regular screening for diabetic complications has been emphasized. The patient should be aware of hypoglycemia symptoms and seek immediate care if severe hypoglycemia or hyperglycemic symptoms occur.</p>",
    appointments: "<p>A follow-up appointment with the primary care physician is scheduled for 02/19/2024. The patient is also scheduled to meet a diabetes educator on 02/12/2024. For any concerns or emergencies, the patient can contact the Endocrinology department.</p>",
    summary: "<p>Hospitalized for type 2 diabetes and peripheral neuropathy, underwent complex assessments and education. Prescribed Metformin, Lisinopril, and Simvastatin, he was advised to monitor glucose, follow a diabetic diet, and attend follow-up appointments. He must watch for hypoglycemia and contact his healthcare team for concerns.</p>",
    raw: "Patient Name: John Doe Date of Birth: 01/01/1965 Hospital ID: 123456789 Admission Date: 02/01/2024 Discharge Date: 02/05/2024 During the course of hospitalization, the patient exhibited polydipsia, polyuria, and an inexplicably fluctuating glycemic index, prompting an intricate battery of diagnostic assessments. An initial hemoglobin A1c measurement notably exceeded the upper quintile of the standard reference range, corroborating with a persistent hyperglycemic state interspersed with episodes of nocturnal hypoglycemia. Subsequent endocrinological evaluations delineated a panorama of metabolic dysregulation consistent with type 2 diabetes mellitus, further complicated by an insidious onset of peripheral neuropathy as evidenced by diminished bilateral pedal sensation and attenuated reflexes. Nutritional consults underscored the necessity of immediate and drastic lifestyle modification, synergistically complemented by pharmacologic intervention aimed at meticulous glycemic control and mitigating impending sequelae of protracted hyperglycemia.	Primary Diagnosis: Type 2 Diabetes Mellitus Secondary Diagnosis: Peripheral Neuropathy Procedures: Nutritional and Diabetic Education Sessions	\"The patient's condition at discharge was stable with blood glucose levels trending towards normoglycemia. The patient has been advised to monitor blood glucose levels regularly.  Prescribed Medications:  Metformin 500 mg orally twice a day Lisinopril 10 mg orally once a day for nephroprotection Simvastatin 20 mg orally at bedtime for lipid contro\"	The patient is instructed to adhere to a diabetic diet, engage in regular physical activity, and monitor blood glucose levels at home. The importance of foot care and regular screening for diabetic complications has been emphasized. The patient should be aware of hypoglycemia symptoms and seek immediate care if severe hypoglycemia or hyperglycemic symptoms occur.	A follow-up appointment with the primary care physician is scheduled for 02/19/2024. The patient is also scheduled to -meet a diabetes educator on 02/12/2024. For any concerns or emergencies, the patient can contact the Endocrinology department at .-	John Doe, hospitalized for type 2 diabetes and peripheral neuropathy, underwent complex assessments and education. Prescribed Metformin, Lisinopril, and Simvastatin, he was advised to monitor glucose, follow a diabetic diet, and attend follow-up appointments. He must watch for hypoglycemia and contact his healthcare team for concerns."
  },
  {
    encounterId: "1000002",
    hospitalId: "987654321",
    hospitalName: "Dartmouth General Hospital",
    admissionDate: "03/15/2023",
    dischargeDate: "03/16/2023",
    course: "<p>During the course of hospitalization, the diagnosing physician was Dr. Smith. The patient had symptoms of severe headache, dizziness, and blurred vision. Vitals on admission showed elevated blood pressure (200/120 mmHg), heart rate (88 bpm), breathing rate (16/min) and temperature 98.6°F. The patient has a history of Type 2 Diabetes, well-controlled on Metformin. There was no history of hypertension prior to admission. Lab workup included CBC, CMP, lipid panel, TSH, and HbA1c and were within normal limits except for elevated LDL and HbA1c at 7.2%. EKG showed LVH, no acute ischemic changes. The patient was admitted to the cardiology unit for further evaluation and management of newly diagnosed hypertension. Initial management focused on acute blood pressure reduction. IV labetalol was initiated, titrated to effect, achieving target blood pressure <140/90 mmHg within 24 hours. Oral antihypertensive regimen started on hospital day 2, including Amlodipine 5 mg daily and Lisinopril 20 mg daily. The patient also started on Atorvastatin 20 mg daily for dyslipidemia. The patient responded well to the regimen, with subsequent BP readings stabilizing at ~130/80 mmHg. Dietary consult was provided, focusing on DASH diet for hypertension and continued dietary management of Type 2 Diabetes. The patient was educated on importance of salt restriction, weight loss, regular aerobic exercise, and adherence to medication regimen. The patient demonstrated understanding of lifestyle modifications and medication regimen.</p>",
    primaryDiagnosis: "Hypertension (HTN)",
    secondaryDiagnosis: "Type 2 Diabetes Mellitus (T2DM), Dyslipidemia, Left Ventricular Hypertrophy (LVH)",
    condition: "<p>The patient's condition at discharge was stable</p><span class='discharge-text-header'>Prescribed Medications:</span><ul><li>Amlodipine 5 mg PO daily</li><li>Lisinopril 20 mg PO daily</li><li>Atorvastatin 20 mg PO at HS</li><li>Metformin 500 mg PO BID</li><li>ASA 81 mg PO daily for CV prophylaxis</li></ul>",
    instructions: "<p>The patient is instructed to follow up with the primary care physician (PCP) in 1 week for Blood Pressure and Blood Glucose monitoring. Referral to cardiology for Hypertension management and endocrinology for Type 2 Diabetes management. The patient also is scheduled for outpatient dietary counseling and education session.</p>",
    appointments: "<p>The patient is discharged in stable condition w/ close outpatient follow-up arranged. The patient and family educated on signs and symptoms of potential complications, including stroke, MI, and DKA. Urgency of adhering to lifestyle modifications and medication regimen emphasized to prevent complications associated w/ HTN and T2DM.</p>",
    summary: "<p>John Doe was hospitalized for newly diagnosed hypertension, managed with IV labetalol followed by oral Amlodipine and Lisinopril. Discharged on a comprehensive regimen including antihypertensives, statins, and diabetes management. Advised on lifestyle modifications, diet, and regular monitoring. Follow-up with primary care and specialists scheduled for ongoing management and monitoring of blood pressure and blood glucose.</p>",
    raw: "3/15/2023 Diagnosing Physician: Dr. Smith Pt. presented to the ED w/ severe HA, dizziness, and blurred vision. Vitals on admission showed elevated BP (200/120 mmHg), HR 88 bpm, RR 16/min, Temp 98.6°F. Pt. has a hx of T2DM, well-controlled on Metformin. No hx of HTN prior to admission. Lab workup incl. CBC, CMP, lipid panel, TSH, and HbA1c within normal limits except for elevated LDL and HbA1c at 7.2%. EKG showed LVH, no acute ischemic changes. Pt. was admitted to the cardiology unit for further eval and mgmt of newly diagnosed HTN. Initial mgmt focused on acute BP reduction. IV labetalol was initiated, titrated to effect, achieving target BP <140/90 mmHg within 24 hrs. Oral antihypertensive regimen started on hospital day 2, incl. Amlodipine 5 mg daily and Lisinopril 20 mg daily. Pt. also started on Atorvastatin 20 mg daily for dyslipidemia. Pt. responded well to the regimen, w/ subsequent BP readings stabilizing at ~130/80 mmHg. Dietary consult was provided, focusing on DASH diet for HTN and continued dietary mgmt of T2DM. Pt. educated on importance of Na restriction, weight loss, regular aerobic exercise, and adherence to medication regimen. Pt. demonstrated understanding of lifestyle modifications and medication regimen.\"	Primary: Hypertension (HTN), Secondary: Type 2 Diabetes Mellitus (T2DM), Dyslipidemia, Left Ventricular Hypertrophy (LVH)	Amlodipine 5 mg PO daily, Lisinopril 20 mg PO daily, Atorvastatin 20 mg PO at HS,Metformin 500 mg PO BID,ASA 81 mg PO daily for CV prophylaxis	Pt. to follow up w/ primary care physician (PCP) in 1 wk for BP and BG monitoring. Referral to cardiology for HTN mgmt and endocrinology for T2DM mgmt. Pt. also scheduled for outpatient dietary counseling and DM education session.	Pt. discharged in stable condition w/ close outpatient follow-up arranged. Pt. and family educated on signs and symptoms of potential complications, including stroke, MI, and DKA. Urgency of adhering to lifestyle modifications and medication regimen emphasized to prevent complications associated w/ HTN and T2DM.	John Doe was hospitalized for newly diagnosed hypertension, managed with IV labetalol followed by oral Amlodipine and Lisinopril. Discharged on a comprehensive regimen including antihypertensives, statins, and diabetes management. Advised on lifestyle modifications, diet, and regular monitoring. Follow-up with primary care and specialists scheduled for ongoing management and monitoring of blood pressure and blood glucose."
  },
  {
    encounterId: "1000003",
    hospitalId: "987654321",
    hospitalName: "Dartmouth General Hospital",
    admissionDate: "06/15/2022",
    dischargeDate: "06/20/2022",
    course: "<p>John Doe was admitted with complaints of persistent headaches and episodes of dizziness. Initial evaluation revealed elevated blood pressure readings consistently above 160/100 mmHg. The patient's medical history includes Type 2 Diabetes Mellitus, well-controlled on Metformin, and a recent diagnosis of hypertension. Despite previous outpatient management, his blood pressure remained inadequately controlled, prompting hospitalization for further evaluation and management. Complete Blood Count (CBC), Comprehensive Metabolic Panel (CMP), and Lipid Profile were within normal limits except for borderline elevated LDL cholesterol. Renal function tests and urine albumin to creatinine ratio indicated no evidence of nephropathy. Echocardiogram revealed left ventricular hypertrophy, likely secondary to longstanding hypertension. 24-hour ambulatory blood pressure monitoring confirmed the diagnosis of sustained hypertension. Management: Intensive blood pressure management was initiated using a combination of ACE inhibitors (Lisinopril), Calcium Channel Blockers (Amlodipine), and a thiazide diuretic (Hydrochlorothiazide). Blood pressure targets were gradually achieved over the course of hospitalization. Dietary and lifestyle modifications were reinforced, emphasizing the DASH diet, sodium restriction, regular physical activity, and weight management.</p>",
    primaryDiagnosis: "Hypertension, poorly controlled",
    secondaryDiagnosis: "Type 2 Diabetes Mellitus, Hyperlipidemia, Left Ventricular Hypertrophy ",
    condition: "<p>The patient's condition at discharge was stable</p><span class='discharge-text-header'>Prescribed Medications:</span><ul><li>Lisinopril 20 mg daily</li><li>Amlodipine 10 mg daily</li><li>Hydrochlorothiazide 25 mg daily</li><li>Metformin 500 mg twice daily</li><li>Atorvastatin 20 mg nightly</li></ul>",
    instructions: "<p>John is scheduled for a follow-up appointment with his primary care physician in two weeks for blood pressure reassessment and medication adjustment if needed. He is also referred to a cardiologist for evaluation of left ventricular hypertrophy and a dietitian for nutritional counseling. Instructions for Patient: John has been advised to monitor his blood pressure twice daily and record the readings. He should adhere strictly to his medication regimen and dietary recommendations. He has been educated on the signs of hypotension, hyperglycemia, and symptoms warranting immediate medical attention, such as chest pain or severe headache.	</p>",
    appointments: "<p>Follow up Appointment: Type: Primary Care Follow-Up Physician: Dr. Emily Thompson Location: Main Street Medical Clinic, 123 Main Street, Suite 100, Hometown, HT 12345 Date: 07/05/2024 Time: 10:00 AM Purpose: To reassess blood pressure, review medication effectiveness, and adjust treatment plan as necessary. Blood pressure log review and diabetes management update. Preparation for Appointment: Bring blood pressure log with twice-daily readings since discharge. List of current medications, including any over-the-counter medications or supplements. Any new or worsening symptoms. Questions or concerns about your health, medications, or treatment plan.	</p>",
    summary: "<p>John Doe was hospitalized for poorly controlled hypertension and discharged with a comprehensive plan for blood pressure management, including medication adjustments, lifestyle modifications, and follow-up appointments to ensure optimal control and prevent complications.</p>",
    raw: "Name: John Doe Date of Birth: 01/01/1965 Hospital ID: 987654321 Admission Date: 06/15/2022 Discharge Date: 06/20/2022 Attending Physician: Dr. Emily Thompson Hospital Course: John Doe was admitted with complaints of persistent headaches and episodes of dizziness. Initial evaluation revealed elevated blood pressure readings consistently above 160/100 mmHg. The patient's medical history includes Type 2 Diabetes Mellitus, well-controlled on Metformin, and a recent diagnosis of hypertension. Despite previous outpatient management, his blood pressure remained inadequately controlled, prompting hospitalization for further evaluation and management.	Complete Blood Count (CBC), Comprehensive Metabolic Panel (CMP), and Lipid Profile were within normal limits except for borderline elevated LDL cholesterol. Renal function tests and urine albumin to creatinine ratio indicated no evidence of nephropathy. Echocardiogram revealed left ventricular hypertrophy, likely secondary to longstanding hypertension. 24-hour ambulatory blood pressure monitoring confirmed the diagnosis of sustained hypertension. Management: Intensive blood pressure management was initiated using a combination of ACE inhibitors (Lisinopril), Calcium Channel Blockers (Amlodipine), and a thiazide diuretic (Hydrochlorothiazide). Blood pressure targets were gradually achieved over the course of hospitalization. Dietary and lifestyle modifications were reinforced, emphasizing the DASH diet, sodium restriction, regular physical activity, and weight management.	Discharge Diagnoses: 1. Hypertension, poorly controlled 2. Type 2 Diabetes Mellitus stable 3. Hyperlipidemia 4. Left Ventricular Hypertrophy Medications at Discharge: Lisinopril 20 mg daily, Amlodipine 10 mg daily, Hydrochlorothiazide 25 mg daily, Metformin 500 mg twice daily, Atorvastatin 20 mg nightly	John is scheduled for a follow-up appointment with his primary care physician in two weeks for blood pressure reassessment and medication adjustment if needed. He is also referred to a cardiologist for evaluation of left ventricular hypertrophy and a dietitian for nutritional counseling. Instructions for Patient: John has been advised to monitor his blood pressure twice daily and record the readings. He should adhere strictly to his medication regimen and dietary recommendations. He has been educated on the signs of hypotension, hyperglycemia, and symptoms warranting immediate medical attention, such as chest pain or severe headache.	Follow up Appointment: Type: Primary Care Follow-Up Physician: Dr. Emily Thompson Location: Main Street Medical Clinic, 123 Main Street, Suite 100, Hometown, HT 12345 Date: 07/05/2024 Time: 10:00 AM Purpose: To reassess blood pressure, review medication effectiveness, and adjust treatment plan as necessary. Blood pressure log review and diabetes management update. Preparation for Appointment: Bring blood pressure log with twice-daily readings since discharge. List of current medications, including any over-the-counter medications or supplements. Any new or worsening symptoms. Questions or concerns about your health, medications, or treatment plan. John Doe was hospitalized for poorly controlled hypertension and discharged with a comprehensive plan for blood pressure management, including medication adjustments, lifestyle modifications, and follow-up appointments to ensure optimal control and prevent complications."
  },
  {
    encounterId: "1000004",
    hospitalId: "987654321",
    hospitalName: "Dartmouth General Hospital",
    admissionDate: "09/10/2019",
    dischargeDate: "09/15/2019",
    course: "<p>John Doe was admitted with signs of severe hypoglycemia, including confusion, sweating, and tremors. On admission, his blood glucose level was critically low at 48 mg/dL. John has a history of Type 2 Diabetes Mellitus (T2DM), well-controlled on Metformin, and recently diagnosed hypertension for which he started taking Lisinopril, Amlodipine, and Hydrochlorothiazide. Upon review, it was determined that the addition of Hydrochlorothiazide potentially exacerbated his T2DM control by inducing significant changes in blood glucose levels. The patient was stabilized with IV dextrose and his hypoglycemia resolved without sequelae. An extensive review of his medication regimen was conducted to prevent future episodes. Repeated blood glucose monitoring showed stabilization of blood glucose levels after IV dextrose administration. HbA1c was checked and reported as 7.5%, indicating a need for closer diabetes management. Renal function tests and electrolytes were monitored closely due to the medication adjustment, showing normal kidney function. Continuous glucose monitoring (CGM) was initiated during the stay to better understand the glycemic pattern. Management: The decision was made to discontinue Hydrochlorothiazide and adjust his hypertension management to avoid further complications with his diabetes. The medical team also optimized his diabetes treatment by adjusting the dose of Metformin and introducing a low dose of a long-acting insulin to improve glycemic control.</p>",
    primaryDiagnosis: "Hypoglycemia, secondary to drug interaction",
    secondaryDiagnosis: "Hypertension, Type 2 Diabetes Mellitus, Hyperlipidemia",
    condition: "<p>The patient's condition at discharge was stable</p><span class='discharge-text-header'>Prescribed Medications:</span><ul><li>Lisinopril 20 mg daily</li><li>Amlodipine 10 mg daily</li><li>Metformin 1000 mg twice daily</li><li>Insulin Glargine 10 units at bedtime</li><li>Atorvastatin 20 mg nightly</li></ul>",
    instructions: "<p>John is scheduled for a follow-up appointment with his endocrinologist in one week to evaluate the effectiveness of the new diabetes treatment regimen and adjust as necessary. He will also meet with his cardiologist in two weeks to assess blood pressure control and discuss any potential adjustments.</p>",
    appointments: "<p>Follow up with Emily Thompson scheduled for 10/11/2019</p>",
    summary: "<p>John Doe experienced a significant hypoglycemic event due to a possible drug interaction between his hypertension and diabetes medications. He was stabilized and discharged with adjustments to both his hypertension and diabetes management plans, including discontinuation of Hydrochlorothiazide, dose adjustment of Metformin, and introduction of insulin therapy. Close follow-up with endocrinology and cardiology is arranged to monitor his condition and medication effects.</p>",
    raw: "Patient Information: Name: John Doe Date of Birth: 01/01/1965 Hospital ID: 987654321 Admission Date: 09/10/2019 Discharge Date: 09/15/2019 Attending Physician: Dr. Sarah Lee Hospital Course: John Doe was admitted with signs of severe hypoglycemia, including confusion, sweating, and tremors. On admission, his blood glucose level was critically low at 48 mg/dL. John has a history of Type 2 Diabetes Mellitus (T2DM), well-controlled on Metformin, and recently diagnosed hypertension for which he started taking Lisinopril, Amlodipine, and Hydrochlorothiazide. Upon review, it was determined that the addition of Hydrochlorothiazide potentially exacerbated his T2DM control by inducing significant changes in blood glucose levels. The patient was stabilized with IV dextrose and his hypoglycemia resolved without sequelae. An extensive review of his medication regimen was conducted to prevent future episodes.	Repeated blood glucose monitoring showed stabilization of blood glucose levels after IV dextrose administration. HbA1c was checked and reported as 7.5%, indicating a need for closer diabetes management. Renal function tests and electrolytes were monitored closely due to the medication adjustment, showing normal kidney function. Continuous glucose monitoring (CGM) was initiated during the stay to better understand the glycemic pattern. Management: The decision was made to discontinue Hydrochlorothiazide and adjust his hypertension management to avoid further complications with his diabetes. The medical team also optimized his diabetes treatment by adjusting the dose of Metformin and introducing a low dose of a long-acting insulin to improve glycemic control.	Discharge Diagnoses: 1. Hypoglycemia, secondary to drug interaction 2. Hypertension, ongoing management 3. Type 2 Diabetes Mellitus, adjustment of therapy 4. Hyperlipidemia, stable Medications at Discharge: Lisinopril 20 mg daily, Amlodipine 10 mg daily, Metformin 1000 mg twice daily, Insulin Glargine 10 units at bedtime, Atorvastatin 20 mg nightly John is scheduled for a follow-up appointment with his endocrinologist in one week to evaluate the effectiveness of the new diabetes treatment regimen and adjust as necessary. He will also meet with his cardiologist in two weeks to assess blood pressure control and discuss any potential adjustments.	Follow up with Emily Thompson scheduled for 8/11/2024	John Doe experienced a significant hypoglycemic event due to a possible drug interaction between his hypertension and diabetes medications. He was stabilized and discharged with adjustments to both his hypertension and diabetes management plans, including discontinuation of Hydrochlorothiazide, dose adjustment of Metformin, and introduction of insulin therapy. Close follow-up with endocrinology and cardiology is arranged to monitor his condition and medication effects."
  },
  {
    encounterId: "1000005",
    hospitalId: "987654321",
    hospitalName: "Dartmouth General Hospital",
    admissionDate: "12/01/2017",
    dischargeDate: "12/06/2017",
    course: "<p>John Doe was admitted with chest pain and shortness of breath. Initial assessments included an EKG showing abnormal rhythms and an elevated troponin level, indicative of an acute myocardial infarction (AMI). John's history of Type 2 Diabetes Mellitus and hypertension added complexity to his cardiovascular risk profile. An urgent cardiac catheterization confirmed the presence of significant coronary artery disease (CAD), with one major artery showing 70% stenosis. EKG: Demonstrated ST-segment elevation in anterior leads. Troponin: Elevated, peaking at 4 ng/mL. Echocardiogram: Revealed reduced left ventricular ejection fraction (LVEF) at 40%, indicating impaired cardiac function. Cardiac Catheterization: Identified significant stenosis in the left anterior descending (LAD) artery. Management: John underwent successful percutaneous coronary intervention (PCI) with stent placement in the LAD artery. Post-procedure, his chest pain resolved, and cardiac function stabilized. He was started on dual antiplatelet therapy with Aspirin and Clopidogrel, along with high-intensity statin therapy for cholesterol management. His existing medications for diabetes and hypertension were reviewed and adjusted to optimize cardiovascular risk reduction.</p>",
    primaryDiagnosis: "Acute Myocardial Infarction",
    secondaryDiagnosis: "Coronary Artery Disease, Type 2 Diabetes Mellitus, Hypertension",
    condition: "<p>The patient's condition at discharge was stable</p><span class='discharge-text-header'>Prescribed Medications:</span><ul><li>Aspirin 81 mg daily</li><li>Clopidogrel 75 mg daily</li><li>Atorvastatin 80 mg nightly</li><li>Lisinopril 20 mg daily</li><li>Metformin 1000 mg twice daily</li><li>Amlodipine 10 mg daily</li><li>Insulin Glargine, dose adjusted as per glucose monitoring</li></ul>",
    instructions: "<p>John is scheduled for a follow-up with his cardiologist in two weeks to assess his recovery post-PCI and to adjust his cardiac medications as needed. An appointment with his endocrinologist is also scheduled to ensure optimal management of his diabetes in the context of his recent cardiac event. Further, he will participate in a cardiac rehabilitation program to aid in his recovery and improve his cardiovascular health. Instructions for Patient: John has been advised to monitor for signs of chest pain, shortness of breath, or any other cardiac symptoms and to seek immediate medical attention if these occur. He should adhere strictly to his medication regimen, especially the dual antiplatelet therapy to prevent stent thrombosis. Lifestyle modifications including diet, exercise, and smoking cessation (if applicable) were emphasized to reduce cardiovascular risk.</p>",
    appointments: "<p>Follow up with Emily Thompson scheduled for 12/16/2017</p>",
    summary: "<p>John Doe was admitted for an acute myocardial infarction and underwent PCI with stent placement for significant CAD. He was discharged with a comprehensive cardiac care plan, including medication adjustments and follow-up care with both a cardiologist and endocrinologist to manage his heart disease and associated risk factors effectively.</p>",
    raw: "Name: John Doe, Date of Birth: 01/01/1965, Hospital ID: 987654321, Admission Date: 12/01/2017, Discharge Date: 12/06/2017, Attending Physician: Dr. Alexander Hamilton Hospital Course: John Doe was admitted with chest pain and shortness of breath. Initial assessments included an EKG showing abnormal rhythms and an elevated troponin level, indicative of an acute myocardial infarction (AMI). John's history of Type 2 Diabetes Mellitus and hypertension added complexity to his cardiovascular risk profile. An urgent cardiac catheterization confirmed the presence of significant coronary artery disease (CAD), with one major artery showing 70% stenosis.	EKG: Demonstrated ST-segment elevation in anterior leads. Troponin: Elevated, peaking at 4 ng/mL. Echocardiogram: Revealed reduced left ventricular ejection fraction (LVEF) at 40%, indicating impaired cardiac function. Cardiac Catheterization: Identified significant stenosis in the left anterior descending (LAD) artery. Management: John underwent successful percutaneous coronary intervention (PCI) with stent placement in the LAD artery. Post-procedure, his chest pain resolved, and cardiac function stabilized. He was started on dual antiplatelet therapy with Aspirin and Clopidogrel, along with high-intensity statin therapy for cholesterol management. His existing medications for diabetes and hypertension were reviewed and adjusted to optimize cardiovascular risk reduction.	Discharge Diagnoses: 1.Acute Myocardial Infarction 2.Coronary Artery Disease 3. Type 2 Diabetes Mellitus, stable 4. Hypertension, ongoing management Medications at Discharge: Aspirin 81 mg daily, Clopidogrel 75 mg daily, Atorvastatin 80 mg nightly, Lisinopril 20 mg daily, Metformin 1000 mg twice daily, Amlodipine 10 mg daily, Insulin Glargine, dose adjusted as per glucose monitoring	John is scheduled for a follow-up with his cardiologist in two weeks to assess his recovery post-PCI and to adjust his cardiac medications as needed. An appointment with his endocrinologist is also scheduled to ensure optimal management of his diabetes in the context of his recent cardiac event. Further, he will participate in a cardiac rehabilitation program to aid in his recovery and improve his cardiovascular health. Instructions for Patient: John has been advised to monitor for signs of chest pain, shortness of breath, or any other cardiac symptoms and to seek immediate medical attention if these occur. He should adhere strictly to his medication regimen, especially the dual antiplatelet therapy to prevent stent thrombosis. Lifestyle modifications including diet, exercise, and smoking cessation (if applicable) were emphasized to reduce cardiovascular risk.	Follow up with Emily Thompson scheduled for 10/11/2024	John Doe was admitted for an acute myocardial infarction and underwent PCI with stent placement for significant CAD. He was discharged with a comprehensive cardiac care plan, including medication adjustments and follow-up care with both a cardiologist and endocrinologist to manage his heart disease and associated risk factors effectively."
  }
];

const bilateralLocations = ["Shoulder","Elbow","Hand","Wrist","Carpal Tunnel","Lower","Hip","Knee","Ankle","Foot"];

let patient = {};

function loadEncounter(encId) {
  const encounter = summaries.find(({encounterId}) => (encounterId === encId));
  $('#discharge-name').html(patient.firstName + ' ' + patient.lastName);
  $('#discharge-gender').html(patient.gender);
  $('#discharge-birth-date').html(patient.dateOfBirth);
  $('#discharge-health-card-num').html(patient.healthCardNum);
  $('#discharge-hospital-id').html(encounter.hospitalId);
  $('#discharge-hospital-name').html(encounter.hospitalName);
  $('#discharge-admission-date').html(encounter.admissionDate);
  $('#discharge-discharge-date').html(encounter.dischargeDate);
  $('#discharge-course').html(encounter.course);
  $('#discharge-primary-diagnosis').html(encounter.primaryDiagnosis);
  $('#discharge-secondary-diagnosis').html(encounter.secondaryDiagnosis);
  $('#discharge-condition').html(encounter.condition);
  $('#discharge-instructions').html(encounter.instructions);
  $('#discharge-appointments').html(encounter.appointments);
  $('#discharge-summary').html(encounter.summary);
}

$(document).ready(() => {
  patient = patients[0];
  $('#chart-patient-name').html(patient.firstName + ' ' + patient.initial + ' ' + patient.lastName);
  $('#chart-patient-age').html(patient.age);
  $('#chart-patient-gender').html(patient.gender);
  $('#chart-patient-health-card-num').html(patient.healthCardNum);
  $('#chart-patient-physician').html(physicians[0].physicianName);
  
  new Def.Autocompleter.Search('diagnosis', 'https://clinicaltables.nlm.nih.gov/api/icd9cm_dx/v3/search', {tableFormat: true, valueCols: [1], colHeaders: ['Code', 'Name']});

  $('#surgery-form').submit((e) => {
    e.preventDefault();
    $('.error').remove();
    let error = false;
    if (validateHealthCard()) error = true;
    if (validateRequired('#diagnosis')) error = true;
    if (validateRequired('#injury-date')) error = true;
    if (!error) {
      $('#form-display').hide();
      $('#result-display').show();
    }

    const healthCard = $('#health-card-num').val().replace(/\D/g,'');
    const wcbClaimNum = new Date().getTime();
    patient = patients.find(({healthCardNum}) => (healthCardNum === healthCard));
    $('#data-health-card-num').html(patient.healthCardNum);
    $('#data-first-name').html(patient.firstName);
    $('#data-last-name').html(patient.lastName);
    $('#data-initial').html(patient.initial);
    $('#data-address').html(patient.address);
    $('#data-province').html(patient.province);
    $('#data-postal-code').html(patient.postalCode);
    $('#data-gender').html(patient.gender);
    $('#data-daytime-phone-num').html(patient.daytimePhone);
    $('#data-evening-phone-num').html(patient.eveningPhone);
    $('#data-family-physician-name').html(patient.familyPhysicianName);
    $('#data-birth-date').html(patient.dateOfBirth);
    $('#data-height').html(patient.height);
    $('#data-weight').html(patient.weight);
    $('#data-surgical').html(patient.surgical);
    $('#data-medical').html(patient.medical);
    $('#data-allergies').html(patient.allergies);
    $('#data-medications').html(patient.medications);
    $('#data-treatments').html(patient.treatments);
    $('#data-previous-surgeon').html(patient.previousSurgeon);
    $('#data-already-sent').html((patient.alreadySent === 'Yes') ? 'Yes - referral sent to: ' + patient.alreadySentName : 'No');

    $('#data-employer-name').html(($('#employer-name').val()) ? $('#employer-name').val() : '&nbsp;');
    $('#data-wcb-claim-num').html(wcbClaimNum);
    $('#data-injury-date').html($('#injury-date').val());
    $('#data-diagnosis').html($('#diagnosis').val());
    $('#data-injury-mechanism').html($('#injury-mechanism').val());
    $('#data-department').html($('input[name="department"]:checked').val());
    $('#data-location').html(($('#location').val()?.length) ? $('#location').val().join(', ') : '');
    $('#data-side').html($('input[name="side"]:checked').val());
    $('#data-clinical-findings').html(($('#clinical-findings').val()?.length) ? $('#clinical-findings').val().join(', ') : '');
    $('#data-investigations').html(($('#investigations').val()?.length) ? $('#investigations').val().join(', ') : '');
    if ($('#clinical-findings').val().includes('Other') && $('#clinical-findings-other').val()) {
      $('#data-clinical-findings').html($('#data-clinical-findings').html() + ': ' + $('#clinical-findings-other').val())
    }
    if ($('#investigations').val().includes('Other') && $('#investigations-other').val()) {
      $('#data-investigations').html($('#data-investigations').html() + ': ' + $('#investigations-other').val())
    }
    $('#chart-patient-name').html(patient.firstName + ' ' + patient.initial + ' ' + patient.lastName);
    $('#chart-patient-age').html(patient.age);
    $('#chart-patient-gender').html(patient.gender);
    $('#chart-patient-health-card-num').html(patient.healthCardNum);

    $('#wcb-claim-num').html(wcbClaimNum);
    $('#wcb-health-card-num').html(patient.healthCardNum);
    $('#wcb-first-name').html(patient.firstName);
    $('#wcb-last-name').html(patient.lastName);
    $('#wcb-initial').html(patient.initial);
    $('#wcb-address').html(patient.address + ', ' + patient.province);
    $('#wcb-postal-code').html(patient.postalCode);
    $('#wcb-gender').html(patient.gender);
    $('#wcb-telephone-num').html(patient.daytimePhone);
    $('#wcb-family-physician').html(patient.familyPhysicianName);
    $('#wcb-birth-date').html(patient.dateOfBirth);
    $('#wcb-employer-name').html($('#employer-name').val());
    $('#wcb-injury-date').html($('#injury-date').val());
    $('#wcb-diagnosis').html($('#diagnosis').val());
    $('#wcb-sin').html(patient.sin);
    $('#wcb-marital-status').html(patient.maritalStatus);
    $('#wcb-smoking').html(patient.smoking);
    $('#wcb-cause').html($('#injury-mechanism').val());

    const date = new Date();
    const month = (date.getUTCMonth() + 1).toString().padStart(2,'0');
    const day = (date.getUTCDate()).toString().padStart(2,'0');
    const year = date.getUTCFullYear();
    const today = year + '-' + month + '-' + day;
    const physician = physicians.find(({physicianWcbNum}) => (physicianWcbNum == patient.physicianNum));
    if (physician) {      
      $('#data-physician-phone-num').html(physician.physicianPhoneNum);
      $('#data-physician-name').html(physician.physicianName);
      $('#data-physician-date').html(today);
      $('#data-physician-address').html(physician.physicianAddress);
      $('#data-physician-wcb-num').html(patient.physicianNum);
      $('#chart-patient-physician').html(physician.physicianName);
    }
  });
  
  // index options
  $('#index-option-timeline').on('click', () => {
    path = 'timeline';
    $('#index-display').hide();
    $('#chart-patient').show();
    $('#chart-display').show();
    $('#breadcrumb-chart').show();
    $('#breadcrumb-chart-result').hide();
    $('#chart-graphic').empty();
    drawChart();
    window.scrollTo(0, 0);
  });

  $('#index-option-discharge').on('click', () => {
    path = 'discharge';
    $('#index-display').hide();
    $('#raw-display').show();
    window.scrollTo(0, 0);
  });

  $('#index-option-form').on('click', () => {
    path = 'form';
    $('#index-display').hide();
    $('#form-display').show();
    window.scrollTo(0, 0);
  });

  // breadcrumb actions
  $('.button-home').on('click', () => {
    $('.display').hide();
    $('#index-display').show();
    window.scrollTo(0, 0);
  });

  $('.button-chart').on('click', () => {
    $('.display').hide();
    $('#chart-display').show();
    window.scrollTo(0, 0);
  });

  $('.button-form-entry').on('click', () => {
    $('.display').hide();
    $('#form-display').show();
    window.scrollTo(0, 0);
  });

  $('.button-form-result').on('click', () => {
    $('.display').hide();
    $('#result-display').show();
    window.scrollTo(0, 0);
  });

  $('.button-discharge').on('click', () => {
    $('.display').hide();
    $('#raw-display').show();
    window.scrollTo(0, 0);
  });

  // print actions
  $('#button-print-form').on('click', () => {
    window.print();
  });

  $('#button-print-wcb').on('click', () => {
    window.print();
  });

  $('#button-print-discharge').on('click', () => {
    window.print();
  });

  // parse button
  $('#button-parse-discharge').on('click', () => {
    const encId = $('#encounter').val();
    loadEncounter(encId);
    $('#raw-display').hide();
    $('#discharge-display').show();
    $('#discharge-path').show();
    $('#timeline-path').hide();
    $('#form-path').hide();
    window.scrollTo(0, 0);
  });

  // chart button
  $('#button-chart').on('click', () => {    
    $('#result-display').hide();
    $('#chart-patient').show();
    $('#chart-display').show();
    $('#breadcrumb-chart').hide();
    $('#breadcrumb-chart-result').show();
    $('#chart-graphic').empty();
    drawChart();
    window.scrollTo(0, 0);
  });

  // wcb button
  $('#button-wcb').on('click', () => {
    $('#result-display').hide();
    $('#wcb-display').show();
    window.scrollTo(0, 0);
  });

  $('#alert-button').on('click', () => {
    $('#alert-button').hide();
    $('#alert-message-box').show();
  });

  $('#alert-button-close').on('click', () => {
    $('#alert-button').show();
    $('#alert-message-box').hide();
  });

  $('input').on('change', () => {
    $('.error').remove();
  });

  $('#health-card-num').on('change', () => {
    validateHealthCard();
  });

  $('#diagnosis').on('change', () => {
    diagnosisChanged();
  });

  $('#encounter').on('change', function() {
    const encId = this.value;
    const encounter = summaries.find(({encounterId}) => (encounterId === encId));
    $('#button-parse-discharge').show();
    $('#summary-raw').html(encounter.raw);
    $('#summary-raw').show();
  });

  $('#injury-date').datepicker({dateFormat: 'yy-mm-dd' });

  $('#side').hide();
  $('#general-other').hide();
  $('#location').chosen().change(() => {
    $('#side').hide();
    $('#general-other').hide();
    const val = $('#location').chosen().val();
    if (val && bilateralLocations.some(v => val.includes(v))) {
      $('#side').show();
    }
    if (val.includes('Other')) {
      $('#general-other').show();
    }
  });

  $('#clinical-findings-other').hide();
  $('#clinical-findings').chosen().change(() => {
    $('#clinical-findings-other').hide();
    const val = $('#clinical-findings').chosen().val();
    if (val.includes('Other')) {
      $('#clinical-findings-other').show();
    }
  });

  $('#investigations-other').hide();
  $('#investigations').chosen().change(() => {
    $('#investigations-other').hide();
    const val = $('#investigations').chosen().val();
    if (val.includes('Other')) {
      $('#investigations-other').show();
    }
  });

  $('#form-display').hide();

  //setInterval(diagnosisChanged, 1000);

  function diagnosisChanged() {
    const diagnosis = $('#diagnosis').val().toLowerCase();
    if (diagnosis.length > 3) {
      const matches = [];
      $("#location > optgroup > option").each((i, el) => {
        const val = el.value.toLowerCase();
        if (val !== 'other') {
          if (diagnosis.indexOf(val) >= 0 ) {
            matches.push(el.value);
            if (bilateralLocations.some(v => el.value.includes(v))) {
              $('#side').show();
            }
          }
        }
      });
      $('#location').val(matches);
      $('#location').trigger('chosen:updated');
      $('#general-other').hide();  
    }
  }

  function validateHealthCard() {
    let message = '';
    const healthCard = $('#health-card-num').val()
    if (!healthCard) {
      message = 'This field is required';
    } else if (healthCard.replace(/\D/g,'').length !== 10) {
      message = 'Invalid Healthcard #';
    } else {
      const patient = patients.find(({healthCardNum}) => (healthCardNum === healthCard));
      if (!patient) {
        message = 'Client Does Not Exists in the System';
      }
    }
    if (message) {
      $('#health-card-num').after('<span class="error">' + message + '</span>');
    }
    return '';
  }

  function validateRequired(fieldId) {
    if ($(fieldId).val().length < 1) {
      const message = 'This field is required';
      $(fieldId).after('<span class="error">' + message + '</span>');
      return message;
    } else {
      return '';
    }
  }
});


