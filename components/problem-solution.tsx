import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { AlertTriangle, CheckCircle, Leaf, Users, Heart, Zap, Clock } from "lucide-react";

export default function ProblemSolution() {
  return (
    <div className="py-20 bg-white relative overflow-hidden">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-5">
        <div 
          className="absolute top-0 left-0 w-full h-full"
          style={{
            backgroundImage: "radial-gradient(circle at 2px 2px, rgb(34, 197, 94) 1px, transparent 0)",
            backgroundSize: "48px 48px"
          }}
        />
      </div>

      {/* Floating Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-1/4 w-72 h-72 bg-green-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-40 left-1/4 w-96 h-96 bg-green-600/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Problem Section */}
        <div className="mb-32">
          <div className="text-center mb-16">
            {/* <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-green-50 to-green-100 rounded-2xl mb-6 shadow-lg transform hover:scale-110 transition-transform duration-300">
              <AlertTriangle className="h-10 w-10 text-black" strokeWidth={2.5} />
            </div> */}
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-green-600 mb-6 tracking-tight">
              The Problem
            </h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-transparent via-green-500 to-transparent mx-auto mb-6" />
            <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed font-medium">
              Across Africa, many households still depend on traditional cooking fuels that harm both the user and the planet. These fuels produce dangerous indoor air pollution, leading to serious health issues and contributing to climate change. Despite the high cost and impact of traditional fuels like charcoal, and firewood clean and affordable alternatives remain out of reach for most families—especially in places like Rwanda
            </p>
          </div>

          {/* Problem Content and Image Side by Side */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-14">
            <div className="space-y-8">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-xl shadow-lg border-2 border-gray-100 hover:border-green-500 transition-all">
                  <div className="text-4xl font-black text-black mb-2">850M</div>
                  <p className="text-gray-600 font-medium">Million People Lack access to Affordable, reliable, and Clean Cooking Energy</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-lg border-2 border-gray-100 hover:border-green-500 transition-all">
                  <div className="text-4xl font-black text-black mb-2">700K</div>
                  <p className="text-gray-600 font-medium">Annual Premature death resulting from indoor air pollution</p>
                </div>
              </div>
               <Card className="group border-2 border-gray-100 bg-white hover:border-green-500 transition-all duration-500 overflow-hidden hover:shadow-2xl transform hover:-translate-y-2">
              <CardContent className="p-8 text-center relative">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-green-400 to-green-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                <div className="text-5xl font-black text-black mb-3">40%</div>
                <p className="text-gray-600 font-semibold text-lg">of Rwanda’s Air Pollution Comes from improper waste management</p>
              </CardContent>
            </Card>
            </div>
            <div className="relative rounded-3xl overflow-hidden shadow-2xl group">
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent z-10" />
              <img
                src="/beforegreenergy.jpg"
                alt="Woman cooking with traditional biomass fuel surrounded by harmful smoke"
                className="w-full h-[500px] object-cover transform group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute bottom-0 left-0 right-0 p-8 z-20">
                <p className="text-white text-lg md:text-xl font-bold leading-relaxed">
                  Millions suffer from indoor air pollution caused by traditional cooking Fuels
                </p>
              </div>
            </div>
          </div>
{/* 
          <Card className="bg-gradient-to-br from-gray-50 to-white border-2 border-gray-200 shadow-xl">
            <CardContent className="p-10 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-green-500/5 rounded-full -mr-32 -mt-32" />
              <p className="text-gray-700 leading-relaxed text-center text-lg font-medium relative z-10">
                These fuels produce dangerous indoor air pollution, leading to serious health issues and contributing to climate change. 
                Despite the high cost and impact of traditional fuels like charcoal and firewood, clean and affordable alternatives 
                remain out of reach for most families—especially in places like Rwanda.
              </p>
            </CardContent>
          </Card> */}
        </div>

        {/* Solution Section */}
        <div>
          <div className="text-center mb-16">
            {/* <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-green-400 to-green-600 rounded-2xl mb-6 shadow-lg transform hover:scale-110 transition-transform duration-300">
              <CheckCircle className="h-10 w-10 text-white" strokeWidth={2.5} />
            </div> */}
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-green-600 mb-6 tracking-tight">
            Solution
            </h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-transparent via-green-500 to-transparent mx-auto mb-6" />
            <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed font-medium">
              Green Fuel aims to reduce biomass fuels consumption in Rwanda. We do this through the installation of smart digesters that turn biodegradable wastes into cooking gas.
            </p>
          </div>

          {/* Solution Content and Image Side by Side */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-14">
            <div className="space-y-8 order-2 lg:order-1">
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-green-50 to-white p-6 rounded-xl shadow-lg border-2 border-green-100 hover:border-green-500 transition-all">
                  <Leaf className="h-8 w-8 text-green-600 mb-4" />
                  <h3 className="text-xl font-bold text-black mb-2">Eco-friendly</h3>
                  <p className="text-gray-600">70% less biomass consumption</p>
                </div>
                <div className="bg-gradient-to-br from-green-50 to-white p-6 rounded-xl shadow-lg border-2 border-green-100 hover:border-green-500 transition-all">
                  <Heart className="h-8 w-8 text-green-600 mb-4" />
                  <h3 className="text-xl font-bold text-black mb-2">Healthy</h3>
                  <p className="text-gray-600">Zero harmful emissions</p>
                </div>
              </div>
              {/* <Card className="bg-gradient-to-br from-green-50 to-white border-2 border-gray-200 shadow-xl">
                <CardContent className="p-8">
                  <p className="text-gray-700 leading-relaxed text-lg font-medium">
                    Our smart digesters transform biodegradable waste into clean, efficient cooking gas, 
                    providing an affordable and sustainable solution for Rwandan households.
                  </p>
                </CardContent>
              </Card> */}
            </div>
            <div className="relative rounded-3xl overflow-hidden shadow-2xl group bg-black order-1 lg:order-2">
              <div className="absolute inset-0 bg-gradient-to-t from-green-900/50 via-transparent to-transparent z-10" />
              <img
                src="/bg1.jpg"
                alt="Clean blue gas flame from biogas digester - zero smoke emission"
                className="w-full h-[500px] object-cover transform group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute bottom-0 left-0 right-0 p-8 z-20">
                <p className="text-white text-lg md:text-xl font-bold leading-relaxed">
                  Clean, efficient cooking gas with zero harmful emissions
                </p>
              </div>
              <div className="absolute top-6 right-6 z-20">
                <div className="bg-green-500 text-white px-6 py-2 rounded-full font-bold text-sm shadow-lg">
                  Zero Smoke
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            {/* <Card className="group border-2 border-gray-100 bg-white hover:border-green-500 transition-all duration-500 transform hover:-translate-y-3 hover:shadow-2xl overflow-hidden">
              <CardContent className="p-10 text-center relative">
                <div className="absolute inset-0 bg-gradient-to-br from-green-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="bg-white border-2 border-gray-200 group-hover:border-green-500 rounded-2xl w-20 h-20 flex items-center justify-center mx-auto mb-6 transition-all duration-500 shadow-lg relative z-10">
                  <Leaf className="h-9 w-9 text-black" strokeWidth={2.5} />
                </div>
                <h3 className="text-2xl font-black text-black mb-4 relative z-10">Eco-friendly</h3>
                <p className="text-gray-600 leading-relaxed text-base font-medium relative z-10">
                  Reduce 70% biomass consumption and production and slashes emissions
                </p>
              </CardContent>
            </Card> */}

            <Card className="group border-2 border-gray-100 bg-white hover:border-green-500 transition-all duration-500 transform hover:-translate-y-3 hover:shadow-2xl overflow-hidden">
              <CardContent className="p-10 text-center relative">
                <div className="absolute inset-0 bg-gradient-to-br from-green-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="bg-white border-2 border-gray-200 group-hover:border-green-500 rounded-2xl w-20 h-20 flex items-center justify-center mx-auto mb-6 transition-all duration-500 shadow-lg relative z-10">
                  <Zap className="h-9 w-9 text-black" strokeWidth={2.5} />
                </div>
                <h3 className="text-2xl font-black text-black mb-4 relative z-10">Clean Energy</h3>
                <p className="text-gray-600 leading-relaxed text-base font-medium relative z-10">
                  Clean gas made from biodegradable waste
                </p>
              </CardContent>
            </Card>

            <Card className="group border-2 border-gray-100 bg-white hover:border-green-500 transition-all duration-500 transform hover:-translate-y-3 hover:shadow-2xl overflow-hidden">
              <CardContent className="p-10 text-center relative">
                <div className="absolute inset-0 bg-gradient-to-br from-green-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="bg-white border-2 border-gray-200 group-hover:border-green-500 rounded-2xl w-20 h-20 flex items-center justify-center mx-auto mb-6 transition-all duration-500 shadow-lg relative z-10">
                  <Users className="h-9 w-9 text-black" strokeWidth={2.5} />
                </div>
                <h3 className="text-2xl font-black text-black mb-4 relative z-10">Community Empowerment</h3>
                <p className="text-gray-600 leading-relaxed text-base font-medium relative z-10">
                  Locally made, affordable, reliable cooking energy access that also creates jobs
                </p>
              </CardContent>
            </Card>

            {/* <Card className="group border-2 border-gray-100 bg-white hover:border-green-500 transition-all duration-500 transform hover:-translate-y-3 hover:shadow-2xl overflow-hidden">
              <CardContent className="p-10 text-center relative">
                <div className="absolute inset-0 bg-gradient-to-br from-green-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="bg-white border-2 border-gray-200 group-hover:border-green-500 rounded-2xl w-20 h-20 flex items-center justify-center mx-auto mb-6 transition-all duration-500 shadow-lg relative z-10">
                  <Heart className="h-9 w-9 text-black" strokeWidth={2.5} />
                </div>
                <h3 className="text-2xl font-black text-black mb-4 relative z-10">Health</h3>
                <p className="text-gray-600 leading-relaxed text-base font-medium relative z-10">
                  No harmful smoke emission from our gas flame
                </p>
              </CardContent>
            </Card> */}

            <Card className="group border-2 border-gray-100 bg-white hover:border-green-500 transition-all duration-500 transform hover:-translate-y-3 hover:shadow-2xl overflow-hidden md:col-span-2 lg:col-span-1">
              <CardContent className="p-10 text-center relative">
                <div className="absolute inset-0 bg-gradient-to-br from-green-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="bg-white border-2 border-gray-200 group-hover:border-green-500 rounded-2xl w-20 h-20 flex items-center justify-center mx-auto mb-6 transition-all duration-500 shadow-lg relative z-10">
                  <Clock className="h-9 w-9 text-black" strokeWidth={2.5} />
                </div>
                <h3 className="text-2xl font-black text-black mb-4 relative z-10">Fast & Convenient</h3>
                <p className="text-gray-600 leading-relaxed text-base font-medium relative z-10">
                  Instant flame with high calorific value
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}