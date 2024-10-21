import React, { useState } from 'react';
import { Box, Divider, Typography, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import InfoIcon from "@mui/icons-material/Info";
import { useMediaQuery } from "@mui/material";



const menu = [
  { title: "FAQs", icon: <HelpOutlineIcon />, section: "faqs" },
  { title: "General Issues", icon: <InfoIcon />, section: "generalIssues" },
  { title: "Contact Information", icon: <PhoneIcon />, section: "contactInfo" },
  { title: "Customer Care", icon: <EmailIcon />, section: "customerCare" },
];
const Support = () => {
  const [activeSection, setActiveSection] = useState(null);
  const isSmallScreen = useMediaQuery("(max-width:1080px)");
  
  const handleNavigate = (item) => {
    if (item.section) {
      setActiveSection(item.section);
    } 
  };

  return (
    <div className={`lg:flex ${isSmallScreen ? 'flex-col' : 'flex-row'} h-[100vh]`}>
   
      <div className={`w-[70vw] lg:w-[20vw] h-[100vh] flex flex-col justify-center bg-[#2E8B57] ${isSmallScreen ? 'w-full' : 'w-[20vw]'}`}>
        <div className="w-full h-full flex flex-col justify-start space-y-2 p-5">
          {menu.map((item, i) => (
            <React.Fragment key={i}>
              <div
                onClick={() => handleNavigate(item)}
                className="flex items-center cursor-pointer hover:bg-gray-200 p-2 rounded"
              >
                {item.icon}
                <span className="ml-2">{item.title}</span>
              </div>
              {i !== menu.length - 1 && <Divider />}
            </React.Fragment>
          ))}
        </div>
      </div>
      
      {/* Divider for larger screens */}
      {!isSmallScreen && <Divider orientation="vertical" flexItem />}
      
      {/* Main Content */}
      <div className="w-full lg:w-[80%] p-5">
        <MainContent activeSection={activeSection} />
      </div>
    </div>
  );
};

const MainContent = ({ activeSection }) => {
  return (
    <div>
      <h1 className="text-3xl font-semibold mb-5">Help and Support</h1><br />
      {activeSection === 'faqs' && <FAQs />}
      {activeSection === 'generalIssues' && <GeneralIssues />}
      {activeSection === 'contactInfo' && <ContactInfo />}
      {activeSection === 'customerCare' && <CustomerCare />}
    </div>
  );
};

const FAQs = () => {
  const faqData = [
    {
      question: 'What is the return policy?',
      answer: 'You can return any item within 30 days of purchase, provided that the item is unused, undamaged, and in its original packaging. Please contact our customer support team to initiate a return, and they will guide you through the process.',
    },
    {
      question: 'How can I track my order?',
      answer: 'You can track your order through the tracking link sent to your email upon dispatch. Additionally, you can log in to your account on our website to view the current status of your order and the estimated delivery time.',
    },
    {
      question: 'What payment methods are accepted?',
      answer: 'We accept various payment methods including credit/debit cards, PayPal, and bank transfers. Additionally, some of our partners offer installment options through third-party financial services.',
    },
    {
      question: 'Can I change my shipping address after placing an order?',
      answer: 'Yes, you can change your shipping address within 24 hours of placing your order. After that, changes may not be possible as your order may already be in the process of dispatch. Please contact our customer support team for assistance.',
    },
    {
      question: 'Do you offer international shipping?',
      answer: 'Yes, we offer international shipping to most countries. Shipping fees and delivery times vary depending on the destination. Please refer to our shipping policy for more details.',
    },
    {
      question: 'How do I reset my account password?',
      answer: 'To reset your password, go to the login page and click "Forgot Password." Follow the instructions sent to your registered email to reset your password. If you encounter any issues, feel free to reach out to our customer care team for assistance.',
    },
  ];
  

  return (
    <Box mb={4}>
      <Typography variant="h6" className="font-bold mb-3">FAQs</Typography><br />
      {faqData.map((faq, index) => (
        <Accordion key={index} sx={{ backgroundColor: 'white' }}>
          <AccordionSummary expandIcon={<ExpandMoreIcon sx={{ color: 'green' }} />}>
            <Typography>{faq.question}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>{faq.answer}</Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </Box>
  );
};

const GeneralIssues = () => {
  const issuesData = [
    {
      issue: 'Issue with payment processing.',
      description: 'If your payment is not going through, please verify that your card details are correct and that you have sufficient balance. Sometimes, temporary issues with the payment gateway might cause a delay, so we recommend trying again after a few minutes.',
    },
    {
      issue: 'Order not received.',
      description: 'If your order has not been delivered within the expected time frame, please track the order using the link provided in your confirmation email. If there are any issues, contact customer support for assistance.',
    },
    {
      issue: 'Items missing from my order.',
      description: 'If any items are missing from your order, please contact our customer service team immediately. We will investigate the issue and either send the missing items or offer a refund as per your preference.',
    },
    {
      issue: 'Product arrived damaged or defective.',
      description: 'We apologize if your product arrived damaged or defective. Please contact our customer care team with photos of the damaged product, and we will arrange a replacement or issue a refund.',
    },
    {
      issue: 'Can’t log into my account.',
      description: 'If you are having trouble logging into your account, please ensure you are using the correct email and password. If you have forgotten your password, use the "Forgot Password" link to reset it. Contact our support team if the issue persists.',
    },
    {
      issue: 'Promo code not working.',
      description: 'If your promo code is not working, please double-check its expiration date and terms of use. Some codes may be applicable only to specific products or categories. Contact our support team if you believe the code should work but isn’t being accepted.',
    },
  ];
  

  return (
    <Box mb={4}>
      <Typography variant="h6" className="font-bold mb-3">General Issues</Typography><br />
      {issuesData.map((issue, index) => (
        <Accordion key={index} sx={{ backgroundColor: 'white' }}>
          <AccordionSummary expandIcon={<ExpandMoreIcon sx={{ color: 'green' }} />}>
            <Typography>{issue.issue}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>{issue.description}</Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </Box>
  );
};

const ContactInfo = () => {
  return (
    <Box mb={4}>
      <Typography variant="h6" className="font-bold mb-3">Contact Information</Typography><br />
      <Typography>Email: support@forksy.com</Typography> 
      <Typography>Phone: 123-456-7890</Typography>
      <Typography>Office Hours: Monday - Friday, 9 AM - 5 PM </Typography>
      <Typography>Address: 123 Gandhipuram, Coimbatore, Tamilnadu, India - 640106</Typography>
      <Typography>For urgent matters, please call our 24/7 support hotline at 987-654-3210.</Typography>
      <Typography>Social Media: Follow us on Twitter, Facebook, and Instagram for the latest updates and support.</Typography>
    </Box>
  );
};

const CustomerCare = () => {
  return (
    <Box mb={4}>
      <Typography variant="h6" className="font-bold mb-3">Customer Care</Typography><br />
      <Typography>
        Our customer care team is here to help with any issues you may face. We aim to respond to all inquiries within 24 hours. You can reach us via phone, email, or social media for support.
      </Typography>
      <Typography>
        For product returns, exchanges, or inquiries about your order, please provide your order number and details about the issue so that we can assist you promptly.
      </Typography>
      <Typography>
        We also offer a live chat service on our website during business hours for real-time assistance. For urgent issues, feel free to call our customer care hotline 987-654-3210, available 24/7.
      </Typography>
    </Box>
  );
};

export default Support;
