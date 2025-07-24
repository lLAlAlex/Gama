"use client"

import { motion } from "framer-motion"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { HelpCircle } from "lucide-react"

export default function FAQSection() {
  const faqs = [
    {
      question: "What is Gama and how does it work?",
      answer:
        "Gama is an augmented reality mobile application that lets you explore Indonesian cultural landmarks and collect traditional artifacts. Using your phone's camera and GPS, you can discover hidden cultural treasures at real-world locations, learn about Indonesian heritage, and craft authentic traditional items.",
    },
    {
      question: "Is Gama free to play?",
      answer:
        "Yes! Gama is free to download and play. We offer optional in-app purchases for premium features like exclusive artifact collections, advanced crafting materials, and special expedition passes, but the core experience is completely free.",
    },
    {
      question: "Do I need to visit physical locations to play?",
      answer:
        "While the full experience is designed for visiting real Indonesian landmarks, we also offer virtual exploration modes for users who cannot travel. However, visiting actual locations provides the most immersive and rewarding experience with exclusive content and rare artifacts.",
    },
    {
      question: "What devices are compatible with Gama?",
      answer:
        "Gama is available for iOS (iPhone 8 and newer) and Android (Android 7.0 and newer) devices. Your device needs to support ARCore (Android) or ARKit (iOS) for the full augmented reality experience. Most modern smartphones are compatible.",
    },
    {
      question: "How accurate is the cultural and historical information?",
      answer:
        "All content in Gama is carefully researched and verified by Indonesian cultural experts, historians, and archaeologists. We work closely with museums, cultural institutions, and local communities to ensure authenticity and respect for Indonesian heritage.",
    },
    {
      question: "Can I play Gama with friends and family?",
      answer:
        "Gama features multiplayer modes where you can explore with friends, share discoveries, compete in cultural challenges, and collaborate on artifact crafting projects. You can also join local community groups and participate in cultural events.",
    },
    {
      question: "Is my personal data safe with Gama?",
      answer:
        "Yes, we take privacy seriously. Gama only collects necessary data for gameplay (location for AR features, progress data) and follows strict data protection guidelines. We never share personal information with third parties without your consent.",
    },
    {
      question: "How often is new content added to the app?",
      answer:
        "We regularly update Gama with new landmarks, artifacts, cultural stories, and seasonal events. Major content updates are released monthly, with smaller updates and bug fixes released as needed. Special cultural celebrations and festivals often feature limited-time content.",
    },
    {
      question: "Can I contribute to Gama's cultural content?",
      answer:
        "We welcome community contributions! You can submit suggestions for new landmarks, share cultural stories, and even contribute photographs (with proper permissions). We have a community review process to ensure all contributions meet our quality and accuracy standards.",
    },
    {
      question: "What should I do if I encounter technical issues?",
      answer:
        "If you experience any technical problems, please contact our support team through the in-app help center or email us at support@gama-app.com. We typically respond within 24 hours and are committed to resolving issues quickly.",
    },
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-red-50 via-white to-red-100">
      <div className="container px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-red-500 to-red-600 text-white rounded-2xl mb-6">
            <HelpCircle className="h-8 w-8" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-red-600 to-red-800 bg-clip-text text-transparent">
              Frequently Asked Questions
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Got questions about Gama? We've got answers! Find everything you need to know about exploring Indonesian
            culture through our app.
          </p>
        </motion.div>

        <motion.div
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
              >
                <AccordionItem
                  value={`item-${index}`}
                  className="bg-white/80 backdrop-blur-sm border border-red-100 rounded-xl px-6 hover:shadow-lg transition-all duration-300"
                >
                  <AccordionTrigger className="text-left font-semibold text-gray-800 hover:text-red-600 py-6">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 leading-relaxed pb-6">{faq.answer}</AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </motion.div>

        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-red-100 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Still Have Questions?</h3>
            <p className="text-gray-600 mb-6">
              Our friendly support team is here to help you with any questions about Gama.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                className="bg-gradient-to-r from-red-600 to-red-700 text-white px-6 py-3 rounded-xl font-medium hover:from-red-700 hover:to-red-800 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Contact Support
              </motion.button>
              <motion.button
                className="border border-red-200 text-red-600 px-6 py-3 rounded-xl font-medium hover:bg-red-50 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Join Community
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
