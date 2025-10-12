import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// Email validation helper
function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// Create transporter
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, mobile, company, message, budget } = body;

    // Validation
    if (!name || !email || !mobile || !message) {
      return NextResponse.json(
        { error: 'Please fill in all required fields' },
        { status: 400 }
      );
    }

    if (!isValidEmail(email)) {
      return NextResponse.json(
        { error: 'Please provide a valid email address' },
        { status: 400 }
      );
    }

    // Send emails in background (don't wait for completion)
    // This allows immediate response to user
    setImmediate(async () => {
      await sendEmails(name, email, mobile, company, message, budget);
    });

    // Return success immediately
    return NextResponse.json(
      {
        success: true,
        message: 'Thank you! Your message has been received. If you don\'t receive a confirmation email within 5 minutes, please call directly at +91 9339813998.',
      },
      { status: 200 }
    );
  } catch (error: unknown) {
    console.error('Email API error:', error);
    return NextResponse.json(
      { error: 'An error occurred while processing your request.' },
      { status: 500 }
    );
  }
}

// Async function to send emails in background
async function sendEmails(
  name: string,
  email: string,
  mobile: string,
  company: string,
  message: string,
  budget: string
) {
  try {
    // Email content for you (owner)
    const ownerEmailHtml = `
      <!DOCTYPE html>
      <html>
        <head>
          <style>
            body {
              font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
              line-height: 1.6;
              color: #333;
              max-width: 600px;
              margin: 0 auto;
              padding: 20px;
            }
            .header {
              background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
              color: white;
              padding: 30px;
              border-radius: 10px 10px 0 0;
              text-align: center;
            }
            .content {
              background: #f8f9fa;
              padding: 30px;
              border-radius: 0 0 10px 10px;
            }
            .field {
              margin-bottom: 20px;
              background: white;
              padding: 15px;
              border-radius: 8px;
              border-left: 4px solid #667eea;
            }
            .label {
              font-weight: 600;
              color: #667eea;
              font-size: 12px;
              text-transform: uppercase;
              letter-spacing: 0.5px;
              margin-bottom: 5px;
            }
            .value {
              color: #333;
              font-size: 16px;
            }
            .message-box {
              background: white;
              padding: 20px;
              border-radius: 8px;
              border: 1px solid #e0e0e0;
              margin-top: 10px;
            }
            .footer {
              text-align: center;
              margin-top: 30px;
              color: #666;
              font-size: 12px;
            }
          </style>
        </head>
        <body>
          <div class="header">
            <h1 style="margin: 0; font-size: 24px;">🎉 New Project Inquiry!</h1>
            <p style="margin: 10px 0 0 0; opacity: 0.9;">Someone wants to work with you</p>
          </div>
          <div class="content">
            <div class="field">
              <div class="label">Full Name</div>
              <div class="value">${name}</div>
            </div>
            
            <div class="field">
              <div class="label">Email Address</div>
              <div class="value">${email}</div>
            </div>
            
            <div class="field">
              <div class="label">Mobile Number</div>
              <div class="value">${mobile}</div>
            </div>
            
            ${company ? `
            <div class="field">
              <div class="label">Company</div>
              <div class="value">${company}</div>
            </div>
            ` : ''}
            
            ${budget ? `
            <div class="field">
              <div class="label">Budget Range</div>
              <div class="value">₹${budget}</div>
            </div>
            ` : ''}
            
            <div class="field">
              <div class="label">Project Details</div>
              <div class="message-box">${message}</div>
            </div>
          </div>
          <div class="footer">
            <p>This email was sent from your portfolio contact form</p>
          </div>
        </body>
      </html>
    `;

    // Email content for client (confirmation)
    const clientEmailHtml = `
      <!DOCTYPE html>
      <html>
        <head>
          <style>
            body {
              font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
              line-height: 1.6;
              color: #333;
              max-width: 600px;
              margin: 0 auto;
              padding: 20px;
            }
            .header {
              background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
              color: white;
              padding: 30px;
              border-radius: 10px 10px 0 0;
              text-align: center;
            }
            .content {
              background: #f8f9fa;
              padding: 30px;
              border-radius: 0 0 10px 10px;
            }
            .greeting {
              font-size: 18px;
              margin-bottom: 20px;
              color: #333;
            }
            .message {
              background: white;
              padding: 20px;
              border-radius: 8px;
              border-left: 4px solid #667eea;
              margin: 20px 0;
            }
            .footer {
              text-align: center;
              margin-top: 30px;
              color: #666;
              font-size: 12px;
            }
            .button {
              display: inline-block;
              padding: 12px 30px;
              background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
              color: white;
              text-decoration: none;
              border-radius: 6px;
              margin-top: 20px;
            }
          </style>
        </head>
        <body>
          <div class="header">
            <h1 style="margin: 0; font-size: 24px;">✉️ Thank You for Reaching Out!</h1>
          </div>
          <div class="content">
            <div class="greeting">
              <strong>Hi ${name},</strong>
            </div>
            
            <div class="message">
              <p>Thank you for your interest in working together! I've received your project inquiry and I'm excited to learn more about it.</p>
              
              <p>I'll review your requirements and get back to you within 24-48 hours. In the meantime, feel free to check out my portfolio to see more of my work.</p>
              
              <p><strong>Your Submission Details:</strong></p>
              <ul style="list-style: none; padding: 0;">
                <li>📧 Email: ${email}</li>
                <li>📱 Mobile: ${mobile}</li>
                ${company ? `<li>🏢 Company: ${company}</li>` : ''}
                ${budget ? `<li>💰 Budget: ₹${budget}</li>` : ''}
              </ul>
            </div>
            
            <p style="margin-top: 30px;">
              <strong>Best regards,</strong><br>
              Buddhadeb Koner<br>
              <span style="color: #667eea;">Web Developer & Designer</span>
            </p>
          </div>
          <div class="footer">
            <p>This is an automated confirmation email</p>
          </div>
        </body>
      </html>
    `;

    let clientEmailSent = false;
    let clientEmailError: string | null = null;

    // Try to send email to client
    try {
      await transporter.sendMail({
        from: `"Buddhadeb Koner" <${process.env.EMAIL_FROM}>`,
        to: email,
        subject: 'Thank you for reaching out! 🎉',
        html: clientEmailHtml,
      });
      clientEmailSent = true;
    } catch (error: unknown) {
      console.error('Failed to send email to client:', error);
      clientEmailError = error instanceof Error ? error.message : 'Unknown error';
    }

    // Send email to owner (you) - always attempt this
    const ownerEmailContent = clientEmailSent
      ? ownerEmailHtml
      : `
        <!DOCTYPE html>
        <html>
          <head>
            <style>
              body {
                font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
                line-height: 1.6;
                color: #333;
                max-width: 600px;
                margin: 0 auto;
                padding: 20px;
              }
              .header {
                background: linear-gradient(135deg, #dc2626 0%, #991b1b 100%);
                color: white;
                padding: 30px;
                border-radius: 10px 10px 0 0;
                text-align: center;
              }
              .warning {
                background: #fef2f2;
                border: 2px solid #dc2626;
                padding: 15px;
                border-radius: 8px;
                margin: 20px 0;
              }
              .content {
                background: #f8f9fa;
                padding: 30px;
                border-radius: 0 0 10px 10px;
              }
              .field {
                margin-bottom: 20px;
                background: white;
                padding: 15px;
                border-radius: 8px;
                border-left: 4px solid #667eea;
              }
              .label {
                font-weight: 600;
                color: #667eea;
                font-size: 12px;
                text-transform: uppercase;
                letter-spacing: 0.5px;
                margin-bottom: 5px;
              }
              .value {
                color: #333;
                font-size: 16px;
              }
              .message-box {
                background: white;
                padding: 20px;
                border-radius: 8px;
                border: 1px solid #e0e0e0;
                margin-top: 10px;
              }
            </style>
          </head>
          <body>
            <div class="header">
              <h1 style="margin: 0; font-size: 24px;">⚠️ New Inquiry - Email Delivery Failed</h1>
              <p style="margin: 10px 0 0 0; opacity: 0.9;">Someone tried to reach out but confirmation email failed</p>
            </div>
            <div class="content">
              <div class="warning">
                <strong>⚠️ Warning:</strong> Failed to send confirmation email to client.<br>
                <strong>Reason:</strong> ${clientEmailError || 'Invalid or unreachable email address'}
              </div>
              
              ${ownerEmailHtml.split('<div class="content">')[1].split('</div>')[0]}
              
              <p style="margin-top: 20px; color: #dc2626; font-weight: 600;">
                ⚠️ Please contact the client directly using their mobile number: ${mobile}
              </p>
            </div>
          </body>
        </html>
      `;

    try {
      await transporter.sendMail({
        from: `"Portfolio Contact Form" <${process.env.EMAIL_FROM}>`,
        to: process.env.EMAIL_TO,
        subject: clientEmailSent
          ? `New Project Inquiry from ${name}`
          : `⚠️ New Inquiry - Email Failed to ${email}`,
        html: ownerEmailContent,
      });
    } catch (error: unknown) {
      console.error('Failed to send email to owner:', error);
    }
  } catch (error: unknown) {
    console.error('Background email sending error:', error);
  }
}
