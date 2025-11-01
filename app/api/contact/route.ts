import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(request: NextRequest) {
  try {
    const formData = await request.json()

    // Create transporter using Gmail SMTP
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 465,
      secure: true,
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
      tls: {
        rejectUnauthorized: false
      }
    })

    // Email to business
    const businessEmailHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #16a34a;">New Contact Form Message</h2>
        
        <div style="background: #f0fdf4; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3 style="color: #15803d; margin-top: 0;">Contact Information</h3>
          <p><strong>Name:</strong> ${formData.firstName} ${formData.lastName}</p>
          <p><strong>Email:</strong> ${formData.email}</p>
          <p><strong>Phone:</strong> ${formData.phone}</p>
          ${formData.service ? `<p><strong>Service Needed:</strong> ${formData.service}</p>` : ''}
        </div>

        ${formData.message ? `
        <div style="background: #f0fdf4; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3 style="color: #15803d; margin-top: 0;">Message</h3>
          <p>${formData.message}</p>
        </div>
        ` : ''}
      </div>
    `

    // Email to customer
    const customerEmailHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #16a34a;">Thank you for contacting Green Fuel!</h2>
        
        <p>Dear ${formData.firstName},</p>
        
        <p>We have received your message and our team will get back to you within 24 hours.</p>
        
        <div style="background: #f0fdf4; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3 style="color: #15803d; margin-top: 0;">Your Message Summary</h3>
          ${formData.service ? `<p><strong>Service Needed:</strong> ${formData.service}</p>` : ''}
          <p><strong>Reference ID:</strong> GF-${Date.now().toString().slice(-6)}</p>
        </div>
        
        <p>Best regards,<br>Green Fuel Team</p>
      </div>
    `

    // Send email to business
    await transporter.sendMail({
      from: process.env.GMAIL_USER,
      to: process.env.BUSINESS_EMAIL,
      subject: `New Contact Message from ${formData.firstName} ${formData.lastName}`,
      html: businessEmailHtml,
    })

    // Send confirmation email to customer
    await transporter.sendMail({
      from: process.env.GMAIL_USER,
      to: formData.email,
      subject: 'Green Fuel - Message Received',
      html: customerEmailHtml,
    })

    return NextResponse.json({ success: true, message: 'Message sent successfully' })
  } catch (error) {
    console.error('Error sending email:', error)
    return NextResponse.json({ success: false, message: 'Failed to send message' }, { status: 500 })
  }
}