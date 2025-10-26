"use client";

import { ThemeProvider } from "@/providers/ThemeProvider";
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import HeroSplit from '@/components/sections/hero/HeroSplit';
import SplitAbout from '@/components/sections/about/SplitAbout';
import FeatureCardTwo from '@/components/sections/feature/FeatureCardTwo';
import TeamCardThree from '@/components/sections/team/TeamCardThree';
import PricingCardThree from '@/components/sections/pricing/PricingCardThree';
import MetricCardOne from '@/components/sections/metrics/MetricCardOne';
import TestimonialCardOne from '@/components/sections/testimonial/TestimonialCardOne';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import ContactSplitForm from '@/components/sections/contact/ContactSplitForm';
import FooterBase from '@/components/sections/footer/FooterBase';
import { Award, Users, Target, Lightbulb, Trophy, Briefcase, Code, Palette, Zap, DollarSign, Star, TrendingUp, CheckCircle, Heart, MessageSquare, Building2, Linkedin, Twitter, Github, Dribbble } from "lucide-react";

export default function Home() {
  return (
    <ThemeProvider
      defaultButtonVariant="icon-arrow"
      defaultTextAnimation="reveal-blur"
      borderRadius="sharp"
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingOverlay
          navItems={[
            { name: "About", id: "about" },
            { name: "Services", id: "services" },
            { name: "Team", id: "team" },
            { name: "Pricing", id: "pricing" },
            { name: "Contact", id: "contact" }
          ]}
          brandName="Agency Pro"
          button={{
            text: "Get Started",
            href: "contact"
          }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroSplit
          title="Transform Your Business with Expert Agency Solutions"
          description="We deliver exceptional digital marketing, web development, and branding services that drive real results for growing businesses."
          tag="Premium Agency"
          tagIcon={Award}
          buttons={[
            {
              text: "Start Your Project",
              href: "contact"
            },
            {
              text: "View Our Work",
              href: "https://portfolio.example.com"
            }
          ]}
          imageSrc="https://images.pexels.com/photos/7661185/pexels-photo-7661185.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          imageAlt="Modern creative agency workspace"
          imagePosition="right"
        />
      </div>

      <div id="about" data-section="about">
        <SplitAbout
          title="About Our Agency"
          description="We're a full-service digital agency with over 8 years of experience helping businesses grow through innovative strategies and exceptional execution."
          tag="Our Story"
          tagIcon={Users}
          bulletPoints={[
            {
              title: "Strategic Excellence",
              description: "Data-driven strategies that deliver measurable results and sustainable growth",
              icon: Target
            },
            {
              title: "Creative Innovation",
              description: "Award-winning creative solutions that capture attention and drive engagement",
              icon: Lightbulb
            },
            {
              title: "Expert Team",
              description: "Seasoned professionals with deep expertise across all digital disciplines",
              icon: Users
            },
            {
              title: "Proven Results",
              description: "Track record of delivering successful projects for 200+ satisfied clients",
              icon: Trophy
            }
          ]}
          imageSrc="https://images.pexels.com/photos/5716001/pexels-photo-5716001.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          imageAlt="Digital strategy planning session"
          imagePosition="right"
        />
      </div>

      <div id="services" data-section="services">
        <FeatureCardTwo
          title="Our Services"
          description="Comprehensive digital solutions tailored to your business needs"
          tag="What We Do"
          tagIcon={Briefcase}
          features={[
            {
              title: "Digital Strategy",
              description: "Comprehensive digital strategies that align with your business goals and drive sustainable growth",
              icon: Target,
              button: {
                text: "Learn More",
                href: "https://services.example.com/strategy"
              }
            },
            {
              title: "Web Development",
              description: "Custom websites and web applications built with cutting-edge technology and best practices",
              icon: Code,
              button: {
                text: "View Portfolio",
                href: "https://portfolio.example.com/web"
              }
            },
            {
              title: "Brand Design",
              description: "Complete brand identity packages that make your business memorable and distinctive",
              icon: Palette,
              button: {
                text: "See Examples",
                href: "https://portfolio.example.com/branding"
              }
            },
            {
              title: "Marketing Automation",
              description: "Streamlined marketing processes that nurture leads and convert prospects into customers",
              icon: Zap,
              button: {
                text: "Get Started",
                href: "contact"
              }
            }
          ]}
          layout="default"
        />
      </div>

      <div id="team" data-section="team">
        <TeamCardThree
          title="Meet Our Expert Team"
          description="Talented professionals dedicated to your success"
          tag="Our Team"
          tagIcon={Users}
          members={[
            {
              id: "1",
              name: "Sarah Johnson",
              role: "Creative Director",
              imageSrc: "https://images.pexels.com/photos/789822/pexels-photo-789822.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Sarah Johnson, Creative Director",
              socialLinks: [
                {
                  icon: Linkedin,
                  url: "https://linkedin.com/in/sarahjohnson"
                },
                {
                  icon: Twitter,
                  url: "https://twitter.com/sarahj"
                }
              ]
            },
            {
              id: "2",
              name: "Mike Chen",
              role: "Lead Developer",
              imageSrc: "https://images.pexels.com/photos/7653460/pexels-photo-7653460.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Mike Chen, Lead Developer",
              socialLinks: [
                {
                  icon: Github,
                  url: "https://github.com/mikechen"
                },
                {
                  icon: Linkedin,
                  url: "https://linkedin.com/in/mikechen"
                }
              ]
            },
            {
              id: "3",
              name: "Emily Rodriguez",
              role: "UX Designer",
              imageSrc: "https://images.pexels.com/photos/7776140/pexels-photo-7776140.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Emily Rodriguez, UX Designer",
              socialLinks: [
                {
                  icon: Dribbble,
                  url: "https://dribbble.com/emilyrodriguez"
                },
                {
                  icon: Linkedin,
                  url: "https://linkedin.com/in/emilyrodriguez"
                }
              ]
            },
            {
              id: "4",
              name: "David Kim",
              role: "Marketing Strategist",
              imageSrc: "https://images.pexels.com/photos/6930545/pexels-photo-6930545.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "David Kim, Marketing Strategist",
              socialLinks: [
                {
                  icon: Twitter,
                  url: "https://twitter.com/davidkim"
                },
                {
                  icon: Linkedin,
                  url: "https://linkedin.com/in/davidkim"
                }
              ]
            }
          ]}
          layout="default"
        />
      </div>

      <div id="pricing" data-section="pricing">
        <PricingCardThree
          title="Choose Your Package"
          description="Flexible pricing options to match your business needs and budget"
          tag="Pricing"
          tagIcon={DollarSign}
          plans={[
            {
              id: "1",
              name: "Starter Package",
              price: "$2,500/mo",
              buttons: [
                {
                  text: "Get Started",
                  href: "contact"
                },
                {
                  text: "Learn More",
                  href: "https://pricing.example.com/starter"
                }
              ],
              features: [
                "Monthly strategy consultation",
                "Basic website maintenance",
                "Social media management",
                "Email support",
                "Monthly analytics report"
              ]
            },
            {
              id: "2",
              badge: "Most Popular",
              badgeIcon: Star,
              name: "Professional Package",
              price: "$5,000/mo",
              buttons: [
                {
                  text: "Get Started",
                  href: "contact"
                },
                {
                  text: "Schedule Demo",
                  href: "https://calendar.example.com/demo"
                }
              ],
              features: [
                "Bi-weekly strategy sessions",
                "Custom web development",
                "Advanced marketing automation",
                "Priority phone & email support",
                "Detailed performance reporting",
                "Brand development support"
              ]
            },
            {
              id: "3",
              name: "Enterprise Package",
              price: "$10,000/mo",
              buttons: [
                {
                  text: "Contact Sales",
                  href: "contact"
                },
                {
                  text: "Custom Quote",
                  href: "https://contact.example.com/enterprise"
                }
              ],
              features: [
                "Weekly strategy sessions",
                "Full-service development team",
                "Complete marketing suite",
                "24/7 dedicated support",
                "Real-time analytics dashboard",
                "Complete brand management",
                "Custom integrations"
              ]
            }
          ]}
          layout="default"
        />
      </div>

      <div id="metrics" data-section="metrics">
        <MetricCardOne
          title="Our Track Record"
          description="Numbers that demonstrate our commitment to excellence and client success"
          tag="Results"
          tagIcon={TrendingUp}
          metrics={[
            {
              id: "1",
              value: "200+",
              title: "Projects",
              description: "Successfully completed projects across various industries",
              icon: CheckCircle
            },
            {
              id: "2",
              value: "98%",
              title: "Satisfaction",
              description: "Client satisfaction rate based on project completion surveys",
              icon: Heart
            },
            {
              id: "3",
              value: "8",
              title: "Years",
              description: "Years of experience delivering exceptional digital solutions",
              icon: Award
            },
            {
              id: "4",
              value: "150%",
              title: "Growth",
              description: "Average ROI improvement for our clients within first year",
              icon: TrendingUp
            }
          ]}
          layout="default"
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardOne
          title="What Our Clients Say"
          description="Hear from business leaders who have transformed their companies with our help"
          tag="Testimonials"
          tagIcon={MessageSquare}
          testimonials={[
            {
              id: "1",
              name: "Jennifer Martinez",
              role: "CEO, TechStart Inc",
              company: "Technology Startup",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/789822/pexels-photo-789822.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Jennifer Martinez, CEO of TechStart Inc"
            },
            {
              id: "2",
              name: "Robert Thompson",
              role: "Founder, GrowthCo",
              company: "E-commerce Platform",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/6893921/pexels-photo-6893921.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Robert Thompson, Founder of GrowthCo"
            },
            {
              id: "3",
              name: "Lisa Chen",
              role: "Marketing Director",
              company: "RetailMax Solutions",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/7710229/pexels-photo-7710229.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Lisa Chen, Marketing Director at RetailMax"
            },
            {
              id: "4",
              name: "Michael Davis",
              role: "VP Operations",
              company: "Innovation Labs",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/7552374/pexels-photo-7552374.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Michael Davis, VP Operations at Innovation Labs"
            }
          ]}
          layout="default"
        />
      </div>

      <div id="social-proof" data-section="social-proof">
        <SocialProofOne
          title="Trusted by Industry Leaders"
          description="Join hundreds of successful companies that trust our expertise"
          tag="Our Clients"
          tagIcon={Building2}
          logos={[
            "https://images.pexels.com/photos/9949424/pexels-photo-9949424.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/10142683/pexels-photo-10142683.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/9949426/pexels-photo-9949426.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/9949424/pexels-photo-9949424.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/267399/pexels-photo-267399.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/4009409/pexels-photo-4009409.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/9949424/pexels-photo-9949424.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          ]}
          speed={45}
          showCard={true}
          layout="default"
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactSplitForm
          title="Ready to Start Your Project?"
          description="Get in touch with our team to discuss your goals and learn how we can help transform your business."
          inputs={[
            {
              name: "name",
              type: "text",
              placeholder: "Full Name",
              required: true
            },
            {
              name: "email",
              type: "email",
              placeholder: "Business Email",
              required: true
            },
            {
              name: "company",
              type: "text",
              placeholder: "Company Name",
              required: true
            },
            {
              name: "budget",
              type: "text",
              placeholder: "Project Budget Range",
              required: false
            }
          ]}
          textarea={{
            name: "message",
            placeholder: "Tell us about your project goals and requirements...",
            rows: 5,
            required: true
          }}
          imageSrc="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          imageAlt="Professional team collaboration meeting"
          mediaPosition="right"
          buttonText="Send Message"
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterBase
          columns={[
            {
              title: "Services",
              items: [
                {
                  label: "Digital Strategy",
                  href: "https://services.example.com/strategy"
                },
                {
                  label: "Web Development",
                  href: "https://services.example.com/development"
                },
                {
                  label: "Brand Design",
                  href: "https://services.example.com/branding"
                },
                {
                  label: "Marketing",
                  href: "https://services.example.com/marketing"
                }
              ]
            },
            {
              title: "Company",
              items: [
                {
                  label: "About Us",
                  href: "about"
                },
                {
                  label: "Our Team",
                  href: "team"
                },
                {
                  label: "Careers",
                  href: "https://careers.example.com"
                },
                {
                  label: "Contact",
                  href: "contact"
                }
              ]
            },
            {
              title: "Resources",
              items: [
                {
                  label: "Blog",
                  href: "https://blog.example.com"
                },
                {
                  label: "Case Studies",
                  href: "https://portfolio.example.com"
                },
                {
                  label: "Resources",
                  href: "https://resources.example.com"
                },
                {
                  label: "Support",
                  href: "https://support.example.com"
                }
              ]
            }
          ]}
          copyrightText="© 2025 | Agency Pro"
          logoWidth={140}
          logoHeight={45}
        />
      </div>
    </ThemeProvider>
  );
}