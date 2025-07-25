"use client";

import type React from "react";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Mail,
  ArrowRight,
  ArrowLeft,
  CheckCircle,
  Globe,
  Shield,
} from "lucide-react";
import MoveLeft from "@/assets/move-left.svg"

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: [0.6, -0.05, 0.01, 0.99] },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export default function ForgotPasswordPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [emailSent, setEmailSent] = useState(false);
  const [email, setEmail] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate email sending process
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setIsLoading(false);
    setEmailSent(true);
  };

  return (
    <div className="min-h-screen py-16 bg-gradient-to-br from-red-50 via-white to-red-50 flex items-center justify-center p-4 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-r from-red-400/20 to-red-400/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-r from-red-400/20 to-rose-400/20 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-gradient-to-r from-cyan-400/20 to-red-400/20 rounded-full blur-3xl animate-pulse delay-2000" />
      </div>

      <div className="w-full max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* Left Side - Branding */}
        <motion.div
          className="hidden lg:block"
          initial="initial"
          animate="animate"
          variants={staggerContainer}
        >
          <motion.div variants={fadeInUp} className="text-center lg:text-left">
            <a
              href="/"
              className="flex items-center justify-center lg:justify-start space-x-3 mb-8"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-red-600 to-red-600 rounded-2xl flex items-center justify-center shadow-lg">
                <img src={MoveLeft} alt="arrow"></img>
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-red-600 to-red-600 bg-clip-text text-transparent">
                Back to Home
              </span>
            </a>

            <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-red-600 to-red-600 bg-clip-text text-transparent">
                Secure
              </span>
              <br />
              <span className="text-slate-700">Recovery</span>
            </h1>

            <p className="text-xl text-slate-600 mb-8 leading-relaxed">
              Don't worry! It happens to the best of us. We'll help you get back
              to exploring Indonesia's cultural treasures in no time.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-center space-x-3 text-slate-600">
                <div className="w-8 h-8 bg-gradient-to-r from-red-500 to-red-600 rounded-lg flex items-center justify-center">
                  <Shield className="w-4 h-4 text-white" />
                </div>
                <span>Secure password recovery process</span>
              </div>
              <div className="flex items-center space-x-3 text-slate-600">
                <div className="w-8 h-8 bg-gradient-to-r from-red-500 to-red-600 rounded-lg flex items-center justify-center">
                  <Mail className="w-4 h-4 text-white" />
                </div>
                <span>Email verification for account safety</span>
              </div>
              <div className="flex items-center space-x-3 text-slate-600">
                <div className="w-8 h-8 bg-gradient-to-r from-red-500 to-red-600 rounded-lg flex items-center justify-center">
                  <Globe className="w-4 h-4 text-white" />
                </div>
                <span>Quick access to your cultural journey</span>
              </div>
            </div>
          </motion.div>

          <motion.div variants={fadeInUp} className="relative">
            <img
              src="/Images/logo.png?height=400&width=500"
              alt="Secure Recovery"
              width={500}
              height={400}
              className="rounded-2xl shadow-2xl"
            />
            <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-r from-red-400 to-red-500 rounded-full flex items-center justify-center shadow-lg">
              <Shield className="w-8 h-8 text-white" />
            </div>
          </motion.div>
        </motion.div>

        {/* Right Side - Recovery Form */}
        <motion.div
          initial="initial"
          animate="animate"
          variants={fadeInUp}
          className="w-full max-w-md mx-auto lg:mx-0"
        >
          <Card className="border-0 shadow-2xl bg-white/80 backdrop-blur-lg">
            <CardHeader className="text-center pb-8">
              <div className="lg:hidden flex items-center justify-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-red-600 to-red-600 rounded-xl flex items-center justify-center">
                  <span className="text-white font-bold text-xl">G</span>
                </div>
                <span className="text-3xl font-bold bg-gradient-to-r from-red-600 to-red-600 bg-clip-text text-transparent">
                  Gama
                </span>
              </div>

              {!emailSent ? (
                <>
                  <CardTitle className="text-3xl font-bold text-slate-800 mb-2">
                    Forgot Password?
                  </CardTitle>
                  <p className="text-slate-600">
                    No worries! Enter your email address and we'll send you a
                    link to reset your password.
                  </p>
                </>
              ) : (
                <>
                  <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-3xl font-bold text-slate-800 mb-2">
                    Check Your Email
                  </CardTitle>
                  <p className="text-slate-600">
                    We've sent a password reset link to <strong>{email}</strong>
                  </p>
                </>
              )}
            </CardHeader>

            <CardContent className="space-y-6">
              {!emailSent ? (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label
                      htmlFor="email"
                      className="text-slate-700 font-medium"
                    >
                      Email Address
                    </Label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
                      <Input
                        id="email"
                        type="email"
                        placeholder="Enter your email address"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="pl-12 h-12 border-slate-200 focus:border-red-500 focus:ring-red-500 bg-white/50"
                        required
                      />
                    </div>
                  </div>

                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Button
                      type="submit"
                      className="w-full h-12 bg-gradient-to-r from-red-600 to-red-600 hover:from-red-700 hover:to-red-700 text-white font-medium rounded-xl shadow-lg"
                      disabled={isLoading}
                    >
                      {isLoading ? (
                        <div className="flex items-center space-x-2">
                          <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          <span>Sending reset link...</span>
                        </div>
                      ) : (
                        <div className="flex items-center space-x-2">
                          <span>Send Reset Link</span>
                          <ArrowRight className="w-5 h-5" />
                        </div>
                      )}
                    </Button>
                  </motion.div>
                </form>
              ) : (
                <div className="space-y-6">
                  <div className="bg-red-50 border border-red-200 rounded-xl p-4">
                    <p className="text-red-800 text-sm leading-relaxed">
                      <strong>What's next?</strong>
                      <br />
                      1. Check your email inbox (and spam folder)
                      <br />
                      2. Click the reset link in the email
                      <br />
                      3. Create a new secure password
                      <br />
                      4. Sign in and continue exploring!
                    </p>
                  </div>

                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Button
                      onClick={() => {
                        setEmailSent(false);
                        setEmail("");
                      }}
                      variant="outline"
                      className="w-full h-12 border-slate-200 hover:bg-slate-50"
                    >
                      <Mail className="w-5 h-5 mr-2" />
                      Resend Email
                    </Button>
                  </motion.div>
                </div>
              )}

              <div className="text-center">
                <a
                  href="/login"
                  className="inline-flex items-center space-x-2 text-red-600 hover:text-red-700 font-medium transition-colors"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>Back to Sign In</span>
                </a>
              </div>

              <div className="text-center pt-4 border-t border-slate-200">
                <p className="text-slate-600 text-sm">
                  Don't have an account?{" "}
                  <a
                    href="/register"
                    className="text-red-600 hover:text-red-700 font-medium"
                  >
                    Sign up here
                  </a>
                </p>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}
