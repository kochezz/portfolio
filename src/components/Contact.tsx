import React, { useRef, useState } from 'react';
import '../assets/styles/Contact.scss';
import emailjs from '@emailjs/browser';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import TextField from '@mui/material/TextField';
import Alert from '@mui/material/Alert';

function Contact() {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [message, setMessage] = useState<string>('');

  const [nameError, setNameError] = useState<boolean>(false);
  const [emailError, setEmailError] = useState<boolean>(false);
  const [messageError, setMessageError] = useState<boolean>(false);
  
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const form = useRef<HTMLFormElement>();

  const isValidEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const sendEmail = async (e: React.FormEvent) => {
    e.preventDefault();
    
    setSubmitStatus('idle');
    
    const isNameValid = name.trim() !== '';
    const isEmailValid = email.trim() !== '' && isValidEmail(email);
    const isMessageValid = message.trim() !== '';

    setNameError(!isNameValid);
    setEmailError(!isEmailValid);
    setMessageError(!isMessageValid);

    if (!isNameValid || !isEmailValid || !isMessageValid) {
      return;
    }

    setIsSubmitting(true);

    try {
      // EmailJS Integration - sends to Gmail
      const result = await emailjs.sendForm(
        'service_l9gmwci',
        'template_5oreu2m',
        form.current!,
        '0PYaWxpG6RR69_Cpe'
      );
      
      // Clear form on success
      setName('');
      setEmail('');
      setMessage('');
      setSubmitStatus('success');
      
    } catch (error) {
      console.error('Error sending email:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  // Styling that ensures form visibility including labels
  const textFieldStyle = {
    '& .MuiOutlinedInput-root': {
      backgroundColor: 'white',
      color: '#333',
      '& input': {
        color: '#333',
        backgroundColor: 'white',
      },
      '& textarea': {
        color: '#333',
        backgroundColor: 'white',
      },
      '& fieldset': {
        borderColor: 'rgba(0, 0, 0, 0.23)',
        borderWidth: '1px',
      },
      '&:hover fieldset': {
        borderColor: 'rgba(0, 0, 0, 0.87)',
      },
      '&.Mui-focused fieldset': {
        borderColor: '#5000ca',
        borderWidth: '2px',
      },
    },
    '& .MuiInputLabel-root': {
      color: '#333 !important',
      fontSize: '1rem',
      '&.Mui-focused': {
        color: '#5000ca !important',
      },
      '&.MuiInputLabel-shrink': {
        color: '#333 !important',
        backgroundColor: 'white',
        padding: '0 4px',
      },
    },
    '& .MuiFormHelperText-root': {
      color: 'rgba(0, 0, 0, 0.6)',
      '&.Mui-error': {
        color: '#f44336',
      },
    },
  };

  return (
    <div id="contact">
      <div className="items-container">
        <div className="contact_wrapper">
          <h1>Get In Touch</h1>
          <p>I'd love to hear from you! Whether you have a project idea, a question, or just want to connect — feel free to reach out.</p>

          {submitStatus === 'success' && (
            <Alert severity="success" sx={{ mb: 2 }}>
              ✅ Message sent successfully! I'll get back to you soon.
            </Alert>
          )}
          {submitStatus === 'error' && (
            <Alert severity="error" sx={{ mb: 2 }}>
              ❌ Failed to send message. Please try again or email me directly at chenechoz@gmail.com
            </Alert>
          )}

          <Box
            ref={form}
            component="form"
            onSubmit={sendEmail}
            noValidate
            autoComplete="off"
            className='contact-form'
          >
            <div className='form-flex'>
              <TextField
                required
                id="name-field"
                name="user_name"
                label="Your Name"
                placeholder="Enter your name"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                  if (nameError) setNameError(false);
                }}
                error={nameError}
                helperText={nameError ? "Please enter your name" : ""}
                disabled={isSubmitting}
                sx={textFieldStyle}
                InputProps={{
                  style: {
                    backgroundColor: 'white',
                    color: '#333',
                  }
                }}
                inputProps={{
                  style: {
                    backgroundColor: 'white',
                    color: '#333',
                  }
                }}
              />
              <TextField
                required
                id="email-field"
                name="user_email"
                label="Email Address"
                placeholder="Enter your email address"
                type="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  if (emailError) setEmailError(false);
                }}
                error={emailError}
                helperText={emailError ? "Please enter a valid email" : ""}
                disabled={isSubmitting}
                sx={textFieldStyle}
                InputProps={{
                  style: {
                    backgroundColor: 'white',
                    color: '#333',
                  }
                }}
                inputProps={{
                  style: {
                    backgroundColor: 'white',
                    color: '#333',
                  }
                }}
              />
            </div>
            
            <TextField
              required
              id="message-field"
              name="message"
              label="Message"
              placeholder="Write your message here..."
              multiline
              rows={10}
              className="body-form"
              value={message}
              onChange={(e) => {
                setMessage(e.target.value);
                if (messageError) setMessageError(false);
              }}
              error={messageError}
              helperText={messageError ? "Please enter a message" : ""}
              disabled={isSubmitting}
              sx={textFieldStyle}
              InputProps={{
                style: {
                  backgroundColor: 'white',
                  color: '#333',
                }
              }}
              inputProps={{
                style: {
                  backgroundColor: 'white',
                  color: '#333',
                }
              }}
            />
            
            <Button 
              type="submit"
              variant="contained" 
              endIcon={<SendIcon />}
              disabled={isSubmitting}
              sx={{
                float: 'right',
                backgroundColor: 'white',
                color: '#050f0b',
                border: '1px solid #ccc',
                '&:hover': {
                  backgroundColor: '#5000ca',
                  color: 'white',
                },
                '&:disabled': {
                  opacity: 0.6,
                }
              }}
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </Button>
          </Box>
          
          <div className="direct-contact">
            <p>Or email me directly at: <a href="mailto:chenechoz@gmail.com">chenechoz@gmail.com</a></p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;