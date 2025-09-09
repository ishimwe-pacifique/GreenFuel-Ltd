import { type NextRequest, NextResponse } from "next/server"
import nodemailer from "nodemailer"

export async function POST(request: NextRequest) {
  try {
    const formData = await request.json()

    // Generate reference ID
    const referenceId = `GF-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "info1.greenfuel @gmail.com",
        pass: "nvmz ywdn jowe tzxc",
      },
    })

    const businessEmailTemplate = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f8f9fa;">
        <div style="background: linear-gradient(135deg, #16a34a, #059669); padding: 30px; border-radius: 12px; text-align: center; margin-bottom: 30px;">
          <h1 style="color: white; margin: 0; font-size: 28px; font-weight: bold;">🌱 Green Fuel</h1>
          <p style="color: #dcfce7; margin: 10px 0 0 0; font-size: 16px;">New Biodigester Quote Request</p>
        </div>
        
        <div style="background: white; padding: 30px; border-radius: 12px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
          <h2 style="color: #16a34a; margin-bottom: 20px; font-size: 20px;">📋 Request Details</h2>
          <p style="margin: 8px 0;"><strong>Reference ID:</strong> ${referenceId}</p>
          <p style="margin: 8px 0;"><strong>Date:</strong> ${new Date().toLocaleDateString()}</p>
          
          <h3 style="color: #16a34a; margin: 25px 0 15px 0; font-size: 18px;">🔋 Product Requested</h3>
          <p style="margin: 8px 0;"><strong>Product:</strong> ${formData.productName || "General Inquiry"}</p>
          
          <h3 style="color: #16a34a; margin: 25px 0 15px 0; font-size: 18px;">👤 Customer Information</h3>
          <p style="margin: 8px 0;"><strong>Name:</strong> ${formData.name}</p>
          <p style="margin: 8px 0;"><strong>Email:</strong> ${formData.email}</p>
          <p style="margin: 8px 0;"><strong>Phone:</strong> ${formData.phone}</p>
          <p style="margin: 8px 0;"><strong>Company:</strong> ${formData.company || "Not specified"}</p>
          
          <h3 style="color: #16a34a; margin: 25px 0 15px 0; font-size: 18px;">📋 Project Details</h3>
          <p style="margin: 8px 0;"><strong>Service Type:</strong> ${formData.serviceType}</p>
          <p style="margin: 8px 0;"><strong>Project Location:</strong> ${formData.projectLocation || "Not specified"}</p>
          <p style="margin: 8px 0;"><strong>Waste Type:</strong> ${formData.wasteType || "Not specified"}</p>
          <p style="margin: 8px 0;"><strong>Daily Waste Amount:</strong> ${formData.dailyWasteAmount || "Not specified"}</p>
          <p style="margin: 8px 0;"><strong>Budget Range:</strong> ${formData.budgetRange || "Not specified"}</p>
          <p style="margin: 8px 0;"><strong>Timeline:</strong> ${formData.timeline || "Not specified"}</p>
          
          ${
            formData.additionalNotes
              ? `
          <h3 style="color: #16a34a; margin: 25px 0 15px 0; font-size: 18px;">💬 Additional Notes</h3>
          <p style="margin: 8px 0; padding: 15px; background-color: #f0fdf4; border-left: 4px solid #16a34a; border-radius: 4px;">${formData.additionalNotes}</p>
          `
              : ""
          }
          
          <div style="background: linear-gradient(135deg, #dc2626, #b91c1c); padding: 20px; border-radius: 8px; margin-top: 30px; text-align: center;">
            <p style="color: white; margin: 0; font-weight: bold; font-size: 16px;">🚀 Follow up with this customer promptly!</p>
          </div>
        </div>
      </div>
    `

    const customerEmailTemplate = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f8f9fa;">
        <div style="background: linear-gradient(135deg, #16a34a, #059669); padding: 30px; border-radius: 12px; text-align: center; margin-bottom: 30px;">
          <h1 style="color: white; margin: 0; font-size: 28px; font-weight: bold;">🌱 Green Fuel</h1>
          <p style="color: #dcfce7; margin: 10px 0 0 0; font-size: 16px;">Sustainable Biodigester Solutions</p>
        </div>
        
        <div style="background: white; padding: 30px; border-radius: 12px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
          <h2 style="color: #16a34a; margin-bottom: 20px; font-size: 24px;">Thank You for Reaching Out! 🙏</h2>
          
          <p style="margin-bottom: 20px; font-size: 16px; line-height: 1.6;">
            Dear ${formData.name},
          </p>
          
          <p style="margin-bottom: 20px; font-size: 16px; line-height: 1.6;">
            Thank you for your interest in our biodigester solutions! We have received your request for 
            <strong>${formData.productName || "our biodigester products"}</strong> and our expert team is already reviewing your requirements.
          </p>
          
          <div style="background: #f0fdf4; padding: 20px; border-radius: 8px; border-left: 4px solid #16a34a; margin: 25px 0;">
            <h3 style="color: #16a34a; margin: 0 0 15px 0; font-size: 18px;">📋 Your Request Summary</h3>
            <p style="margin: 5px 0;"><strong>Reference ID:</strong> ${referenceId}</p>
            <p style="margin: 5px 0;"><strong>Product Interest:</strong> ${formData.productName || "General Inquiry"}</p>
            <p style="margin: 5px 0;"><strong>Service Type:</strong> ${formData.serviceType}</p>
            <p style="margin: 5px 0;"><strong>Project Location:</strong> ${formData.projectLocation || "To be discussed"}</p>
            <p style="margin: 5px 0;"><strong>Timeline:</strong> ${formData.timeline || "To be discussed"}</p>
          </div>
          
          <h3 style="color: #16a34a; margin: 25px 0 15px 0; font-size: 18px;">🚀 What Happens Next?</h3>
          <ul style="padding-left: 20px; line-height: 1.8;">
            <li><strong>Review:</strong> Our technical team will analyze your specific requirements</li>
            <li><strong>Custom Quote:</strong> We'll prepare a detailed proposal tailored to your needs</li>
            <li><strong>Follow-up:</strong> Expect a call from our expert within 24 hours</li>
            <li><strong>Site Assessment:</strong> If needed, we'll schedule a site visit for accurate sizing</li>
          </ul>
          
          <div style="background: linear-gradient(135deg, #16a34a, #059669); padding: 25px; border-radius: 8px; margin: 30px 0; text-align: center;">
            <h3 style="color: white; margin: 0 0 10px 0; font-size: 18px;">🌍 Why Choose Green Fuel?</h3>
            <p style="color: #dcfce7; margin: 0; line-height: 1.6;">
              We're committed to providing sustainable, efficient biodigester solutions that turn your organic waste into valuable biogas and fertilizer. Our team has helped hundreds of customers achieve energy independence while reducing their environmental footprint.
            </p>
          </div>
          
          <p style="margin: 25px 0; font-size: 16px; line-height: 1.6;">
            If you have any immediate questions, feel free to reply to this email or call us directly. We're here to help you find the perfect biodigester solution for your needs.
          </p>
          
          <p style="margin: 20px 0; font-size: 16px;">
            Best regards,<br>
            <strong>The Green Fuel Team</strong><br>
            <span style="color: #16a34a;">Sustainable Energy Solutions</span>
          </p>
          
          <div style="border-top: 2px solid #e5e7eb; padding-top: 20px; margin-top: 30px; text-align: center; color: #6b7280; font-size: 14px;">
            <p style="margin: 5px 0;">📧 info1.greenfuel @gmail.com</p>
            <p style="margin: 5px 0;">🌐 Building a Sustainable Future, One Biodigester at a Time</p>
          </div>
        </div>
      </div>
    `

    await transporter.sendMail({
      from: "info1.greenfuel @gmail.com",
      to: "info1.greenfuel @gmail.com",
      subject: `🌱 New Biodigester Quote Request - ${formData.productName || "General Inquiry"} - ${formData.name}`,
      html: businessEmailTemplate,
    })

    await transporter.sendMail({
      from: "info1.greenfuel @gmail.com",
      to: formData.email,
      subject: `Thank you for your interest in Green Fuel Biodigester Solutions - ${referenceId}`,
      html: customerEmailTemplate,
    })

    return NextResponse.json({
      success: true,
      message: "Booking request submitted successfully",
      referenceId,
    })
  } catch (error) {
    console.error("Error processing booking request:", error)
    return NextResponse.json({ success: false, message: "Failed to process booking request" }, { status: 500 })
  }
}
