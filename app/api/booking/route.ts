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
        <h2 style="color: #16a34a;">New ${formData.serviceType} Request</h2>
        
        <div style="background: #f0fdf4; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3 style="color: #15803d; margin-top: 0;">Contact Information</h3>
          <p><strong>Name:</strong> ${formData.name}</p>
          <p><strong>Email:</strong> ${formData.email}</p>
          <p><strong>Phone:</strong> ${formData.phone}</p>
          ${formData.company ? `<p><strong>Company:</strong> ${formData.company}</p>` : ''}
        </div>

        <div style="background: #f0fdf4; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3 style="color: #15803d; margin-top: 0;">Project Details</h3>
          ${formData.productName ? `<p><strong>Product:</strong> ${formData.productName}</p>` : ''}
          <p><strong>Location:</strong> ${formData.projectLocation}</p>
          ${formData.wasteType ? `<p><strong>Waste Type:</strong> ${formData.wasteType}</p>` : ''}
          ${formData.dailyWasteAmount ? `<p><strong>Daily Waste Amount:</strong> ${formData.dailyWasteAmount}</p>` : ''}
          ${formData.budgetRange ? `<p><strong>Budget Range:</strong> ${formData.budgetRange}</p>` : ''}
          ${formData.timeline ? `<p><strong>Timeline:</strong> ${formData.timeline}</p>` : ''}
        </div>

        ${formData.additionalNotes ? `
        <div style="background: #f0fdf4; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3 style="color: #15803d; margin-top: 0;">Additional Notes</h3>
          <p>${formData.additionalNotes}</p>
        </div>
        ` : ''}
      </div>
    `

    // Email to customer
    const customerEmailHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #16a34a;">Thank you for your interest in Green Fuel!</h2>
        
        <p>Dear ${formData.name},</p>
        
        <p>We have received your ${formData.serviceType.toLowerCase()} request and our team will contact you within 24 hours.</p>
        
        <div style="background: #f0fdf4; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3 style="color: #15803d; margin-top: 0;">Your Request Summary</h3>
          <p><strong>Service Type:</strong> ${formData.serviceType}</p>
          ${formData.productName ? `<p><strong>Product:</strong> ${formData.productName}</p>` : ''}
          <p><strong>Location:</strong> ${formData.projectLocation}</p>
          <p><strong>Reference ID:</strong> BD-${Date.now().toString().slice(-6)}</p>
        </div>
        
        <p>Best regards,<br>Green Fuel Team</p>
      </div>
    `

    // Send email to business
    await transporter.sendMail({
      from: process.env.GMAIL_USER,
      to: process.env.BUSINESS_EMAIL,
      subject: `New ${formData.serviceType} Request from ${formData.name}`,
      html: businessEmailHtml,
    })

    // Send confirmation email to customer
    await transporter.sendMail({
      from: process.env.GMAIL_USER,
      to: formData.email,
      subject: 'Green Fuel - Request Confirmation',
      html: customerEmailHtml,
    })

    return NextResponse.json({ success: true, message: 'Request submitted successfully' })
  } catch (error) {
    console.error('Error sending email:', error)
    return NextResponse.json({ success: false, message: 'Failed to submit request' }, { status: 500 })
  }
}