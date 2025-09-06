"use client"

import type React from "react"

import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, X, Send, User, MapPin, MessageSquare } from "lucide-react"

interface BookingFormProps {
  isOpen: boolean
  onClose: () => void
  selectedProduct?: {
    id: number
    name: string
    price: string
    capacity: string
  } | null
}

export function BookingForm({ isOpen, onClose, selectedProduct }: BookingFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    serviceType: "quote",
    productName: selectedProduct?.name || "",
    projectLocation: "",
    wasteType: "",
    dailyWasteAmount: "",
    budgetRange: "",
    timeline: "",
    additionalNotes: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch("/api/booking", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          productName: selectedProduct?.name || formData.productName,
        }),
      })

      const result = await response.json()

      if (result.success) {
        setIsSubmitting(false)
        setIsSubmitted(true)

        // Reset form after 3 seconds
        setTimeout(() => {
          setIsSubmitted(false)
          setFormData({
            name: "",
            email: "",
            phone: "",
            company: "",
            serviceType: "quote",
            productName: "",
            projectLocation: "",
            wasteType: "",
            dailyWasteAmount: "",
            budgetRange: "",
            timeline: "",
            additionalNotes: "",
          })
          onClose()
        }, 3000)
      } else {
        throw new Error(result.message || "Failed to submit request")
      }
    } catch (error) {
      console.error("Error submitting form:", error)
      setIsSubmitting(false)
      alert("There was an error submitting your request. Please try again.")
    }
  }

  if (isSubmitted) {
    return (
      <Dialog open={isOpen} onOpenChange={onClose}>
        <DialogContent className="sm:max-w-md">
          <div className="text-center py-8">
            <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
              <CheckCircle className="h-8 w-8 text-green-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Request Submitted!</h3>
            <p className="text-gray-600 mb-4">
              Thank you for your interest in our biodigester solutions. Check your email for confirmation and our team
              will contact you within 24 hours.
            </p>
            <Badge className="bg-green-100 text-green-800 px-3 py-1">
              Reference ID: BD-{Date.now().toString().slice(-6)}
            </Badge>
          </div>
        </DialogContent>
      </Dialog>
    )
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <div className="flex items-center justify-between">
            <DialogTitle className="text-2xl font-bold bg-gradient-to-r from-green-700 to-emerald-600 bg-clip-text text-transparent">
              {selectedProduct ? `Get Quote for ${selectedProduct.name}` : "Request a Quote"}
            </DialogTitle>
            <Button variant="ghost" size="sm" onClick={onClose} className="h-8 w-8 p-0 hover:bg-gray-100">
              <X className="h-4 w-4" />
            </Button>
          </div>
          {selectedProduct && (
            <Card className="mt-4 bg-gradient-to-r from-green-50 to-emerald-50 border-green-200">
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-semibold text-green-800">{selectedProduct.name}</h4>
                    <p className="text-sm text-green-600">Capacity: {selectedProduct.capacity}</p>
                  </div>
                  <Badge className="bg-green-600 text-white">{selectedProduct.price}</Badge>
                </div>
              </CardContent>
            </Card>
          )}
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-6 mt-6">
          {/* Service Type Selection */}
          <div className="grid grid-cols-2 gap-4">
            <Button
              type="button"
              variant={formData.serviceType === "Quote Request" ? "default" : "outline"}
              onClick={() => handleInputChange("serviceType", "Quote Request")}
              className={formData.serviceType === "Quote Request" ? "bg-green-600 hover:bg-green-700" : ""}
            >
              Get Quote
            </Button>
            <Button
              type="button"
              variant={formData.serviceType === "Consultation" ? "default" : "outline"}
              onClick={() => handleInputChange("serviceType", "Consultation")}
              className={formData.serviceType === "Consultation" ? "bg-green-600 hover:bg-green-700" : ""}
            >
              Schedule Consultation
            </Button>
          </div>

          {/* Personal Information */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-800 flex items-center">
              <User className="h-5 w-5 mr-2 text-green-600" />
              Personal Information
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="name" className="text-sm font-medium text-gray-700">
                  Full Name *
                </Label>
                <Input
                  id="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => handleInputChange("name", e.target.value)}
                  className="mt-1"
                  placeholder="Enter your full name"
                />
              </div>

              <div>
                <Label htmlFor="email" className="text-sm font-medium text-gray-700">
                  Email Address *
                </Label>
                <Input
                  id="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  className="mt-1"
                  placeholder="your.email@example.com"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="phone" className="text-sm font-medium text-gray-700">
                  Phone Number *
                </Label>
                <Input
                  id="phone"
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => handleInputChange("phone", e.target.value)}
                  className="mt-1"
                  placeholder="+1 (555) 123-4567"
                />
              </div>

              <div>
                <Label htmlFor="company" className="text-sm font-medium text-gray-700">
                  Company/Organization
                </Label>
                <Input
                  id="company"
                  type="text"
                  value={formData.company}
                  onChange={(e) => handleInputChange("company", e.target.value)}
                  className="mt-1"
                  placeholder="Optional"
                />
              </div>
            </div>
          </div>

          {/* Project Details */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-800 flex items-center">
              <MapPin className="h-5 w-5 mr-2 text-green-600" />
              Project Details
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="projectLocation" className="text-sm font-medium text-gray-700">
                  Project Location *
                </Label>
                <Input
                  id="projectLocation"
                  type="text"
                  required
                  value={formData.projectLocation}
                  onChange={(e) => handleInputChange("projectLocation", e.target.value)}
                  className="mt-1"
                  placeholder="City, State/Province"
                />
              </div>

              <div>
                <Label htmlFor="wasteType" className="text-sm font-medium text-gray-700">
                  Waste Type
                </Label>
                <Select value={formData.wasteType} onValueChange={(value) => handleInputChange("wasteType", value)}>
                  <SelectTrigger className="mt-1">
                    <SelectValue placeholder="Select waste type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="household">Household Organic Waste</SelectItem>
                    <SelectItem value="agricultural">Agricultural Waste</SelectItem>
                    <SelectItem value="commercial">Commercial Food Waste</SelectItem>
                    <SelectItem value="mixed">Mixed Organic Waste</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="dailyWasteAmount" className="text-sm font-medium text-gray-700">
                  Daily Waste Amount
                </Label>
                <Select
                  value={formData.dailyWasteAmount}
                  onValueChange={(value) => handleInputChange("dailyWasteAmount", value)}
                >
                  <SelectTrigger className="mt-1">
                    <SelectValue placeholder="Select daily amount" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="under-10kg">Under 10kg per day</SelectItem>
                    <SelectItem value="10-25kg">10-25kg per day</SelectItem>
                    <SelectItem value="25-50kg">25-50kg per day</SelectItem>
                    <SelectItem value="50-100kg">50-100kg per day</SelectItem>
                    <SelectItem value="over-100kg">Over 100kg per day</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="budgetRange" className="text-sm font-medium text-gray-700">
                  Budget Range
                </Label>
                <Select value={formData.budgetRange} onValueChange={(value) => handleInputChange("budgetRange", value)}>
                  <SelectTrigger className="mt-1">
                    <SelectValue placeholder="Select budget range" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="under-5k">Under $5,000</SelectItem>
                    <SelectItem value="5k-10k">$5,000 - $10,000</SelectItem>
                    <SelectItem value="10k-20k">$10,000 - $20,000</SelectItem>
                    <SelectItem value="20k-50k">$20,000 - $50,000</SelectItem>
                    <SelectItem value="50k+">$50,000+</SelectItem>
                    <SelectItem value="flexible">Flexible</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div>
              <Label htmlFor="timeline" className="text-sm font-medium text-gray-700">
                Project Timeline
              </Label>
              <Select value={formData.timeline} onValueChange={(value) => handleInputChange("timeline", value)}>
                <SelectTrigger className="mt-1">
                  <SelectValue placeholder="Select timeline" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="asap">As soon as possible</SelectItem>
                  <SelectItem value="1-3months">1-3 months</SelectItem>
                  <SelectItem value="3-6months">3-6 months</SelectItem>
                  <SelectItem value="6-12months">6-12 months</SelectItem>
                  <SelectItem value="flexible">Flexible</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Additional Information */}
          <div>
            <Label htmlFor="additionalNotes" className="text-sm font-medium text-gray-700 flex items-center">
              <MessageSquare className="h-4 w-4 mr-2 text-green-600" />
              Additional Notes
            </Label>
            <Textarea
              id="additionalNotes"
              value={formData.additionalNotes}
              onChange={(e) => handleInputChange("additionalNotes", e.target.value)}
              className="mt-1"
              rows={4}
              placeholder="Tell us about your specific needs, current waste management situation, or any questions you have..."
            />
          </div>

          {/* Submit Button */}
          <div className="flex gap-4 pt-4">
            <Button type="button" variant="outline" onClick={onClose} className="flex-1 bg-transparent">
              Cancel
            </Button>
            <Button
              type="submit"
              disabled={isSubmitting}
              className="flex-1 bg-gradient-to-r from-green-600 to-emerald-700 hover:from-green-700 hover:to-emerald-800"
            >
              {isSubmitting ? (
                <div className="flex items-center">
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                  Submitting...
                </div>
              ) : (
                <div className="flex items-center">
                  <Send className="h-4 w-4 mr-2" />
                  Submit Request
                </div>
              )}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  )
}
