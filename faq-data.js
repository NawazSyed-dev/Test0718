// FAQ data for different regions and categories
function getFAQData(region, category) {
    const data = {
        us: {
            'orders-operations': {
                title: 'Orders and Operations',
                subtitle: 'Order management and operational procedures for US deployments',
                faqs: [
                    {
                        question: 'How do I place a new order for POS hardware?',
                        answer: 'Orders can be placed through the online portal, by calling 1-800-POS-ORDER, or through your assigned account manager. Include site details, equipment specifications, and preferred delivery dates.'
                    },
                    {
                        question: 'What is the typical lead time for orders?',
                        answer: 'Standard orders have a 5-7 business day lead time. Custom configurations may require 10-14 business days. Rush orders available with 24-48 hour delivery for additional fees.'
                    },
                    {
                        question: 'How do I modify or cancel an existing order?',
                        answer: 'Orders can be modified up to 24 hours before shipping. Contact customer service at 1-800-POS-HELP or use the online portal to request changes. Cancellation fees may apply for custom orders.'
                    },
                    {
                        question: 'What operational procedures should I follow for deployments?',
                        answer: 'Follow the deployment checklist: site survey, equipment verification, installation scheduling, testing procedures, and staff training. Document all steps for compliance and future reference.'
                    },
                    {
                        question: 'How do I escalate operational issues?',
                        answer: 'Use the escalation matrix: Level 1 - Site technician, Level 2 - Regional manager, Level 3 - Operations director. Critical issues can be escalated directly to the 24/7 operations center.'
                    }
                ]
            },
            'product-supply': {
                title: 'Product and Supply',
                subtitle: 'Product information and supply chain management for US operations',
                faqs: [
                    {
                        question: 'What POS hardware models are available?',
                        answer: 'Current product line includes: Terminal Pro X1, Compact Station C2, Mobile Unit M3, and Kitchen Display K4. Each model has multiple configuration options for different business needs.'
                    },
                    {
                        question: 'How do I check product availability?',
                        answer: 'Real-time inventory is available through the supply portal. Check stock levels by region and model. Set up automated alerts for low inventory or new product releases.'
                    },
                    {
                        question: 'What accessories and peripherals are supported?',
                        answer: 'Supported accessories include: receipt printers, barcode scanners, cash drawers, customer displays, and payment terminals. All accessories are tested for compatibility with our hardware.'
                    },
                    {
                        question: 'How do I request product specifications?',
                        answer: 'Detailed specifications are available in the product catalog. For custom requirements, contact the product team at products@posdeployment.com or through your account manager.'
                    },
                    {
                        question: 'What is the warranty coverage for products?',
                        answer: 'Standard warranty is 3 years parts and labor. Extended warranty options available up to 5 years. Warranty includes on-site service and advance replacement for critical components.'
                    }
                ]
            },
            'procedures-guidelines': {
                title: 'Procedures and Guidelines',
                subtitle: 'Standard operating procedures and guidelines for US operations',
                faqs: [
                    {
                        question: 'What are the standard deployment procedures?',
                        answer: 'Follow the 5-phase deployment process: Planning, Site Preparation, Installation, Testing, and Go-Live. Each phase has specific checkpoints and approval requirements.'
                    },
                    {
                        question: 'How do I access the latest procedure documentation?',
                        answer: 'Current procedures are available in the knowledge base portal. Subscribe to updates for automatic notifications of procedure changes. Mobile app provides offline access to critical procedures.'
                    },
                    {
                        question: 'What safety guidelines must be followed?',
                        answer: 'All technicians must follow OSHA safety standards, use proper PPE, and complete safety training annually. Site-specific safety requirements must be reviewed before each deployment.'
                    },
                    {
                        question: 'How do I report procedure violations or safety incidents?',
                        answer: 'Report incidents immediately through the safety hotline 1-800-SAFETY-1 or online incident portal. All reports are confidential and investigated within 24 hours.'
                    },
                    {
                        question: 'What quality assurance procedures are required?',
                        answer: 'Complete QA checklist for each installation, perform functional testing, and obtain customer sign-off. Random quality audits are conducted monthly to ensure compliance.'
                    }
                ]
            },
            'service-standards': {
                title: 'Service Standards and Ops Hours',
                subtitle: 'Service level standards and operational hours for US operations',
                faqs: [
                    {
                        question: 'What are the standard service level agreements?',
                        answer: 'Standard SLA: 4-hour response for critical issues, 8-hour response for high priority, 24-hour for medium priority. On-site service within 24 hours for hardware failures.'
                    },
                    {
                        question: 'What are the operational hours for different services?',
                        answer: 'Phone support: 24/7 for critical issues, 6 AM - 10 PM EST for general support. On-site service: Monday-Friday 8 AM - 6 PM local time. Emergency service available 24/7.'
                    },
                    {
                        question: 'How do I request after-hours service?',
                        answer: 'After-hours service available for critical issues through emergency hotline 1-800-EMERGENCY. Additional charges apply for after-hours and weekend service calls.'
                    },
                    {
                        question: 'What performance metrics are tracked?',
                        answer: 'Key metrics include: response time, resolution time, first-call resolution rate, customer satisfaction scores, and system uptime. Monthly performance reports available through customer portal.'
                    },
                    {
                        question: 'How do I escalate service issues?',
                        answer: 'Service escalation path: Technician → Team Lead → Service Manager → Regional Director. Use escalation hotline 1-800-ESCALATE for immediate management attention.'
                    }
                ]
            },
            'orders-tracking': {
                title: 'Orders Tracking',
                subtitle: 'Track and monitor order status and delivery for US operations',
                faqs: [
                    {
                        question: 'How do I track my order status?',
                        answer: 'Track orders through the online portal using your order number. Real-time updates include: order confirmation, processing, shipping, and delivery. SMS and email notifications available.'
                    },
                    {
                        question: 'What shipping options are available?',
                        answer: 'Shipping options include: Standard (5-7 days), Express (2-3 days), Overnight, and White Glove delivery with installation. Tracking numbers provided for all shipments.'
                    },
                    {
                        question: 'How do I change delivery address or schedule?',
                        answer: 'Delivery changes can be made up to 24 hours before scheduled delivery. Contact logistics at 1-800-DELIVERY or use the online portal to reschedule or redirect shipments.'
                    },
                    {
                        question: 'What happens if I miss a delivery?',
                        answer: 'Missed deliveries are automatically rescheduled for the next business day. Three delivery attempts are made before returning to depot. Contact logistics to arrange pickup or alternate delivery.'
                    },
                    {
                        question: 'How do I report damaged or missing items?',
                        answer: 'Report damage or missing items within 24 hours of delivery. Use the online claims portal or call 1-800-CLAIMS. Photos of damage required for processing replacement orders.'
                    }
                ]
            },
            contacts: {
                title: 'Contacts',
                subtitle: 'Contact information and support channels for US operations',
                faqs: [
                    {
                        question: 'Who is my primary account manager?',
                        answer: 'Your account manager information is available in the customer portal. For immediate assistance, call the main number 1-800-POS-MAIN and provide your account number for direct transfer.'
                    },
                    {
                        question: 'What are the main contact numbers?',
                        answer: 'Main: 1-800-POS-MAIN, Orders: 1-800-POS-ORDER, Support: 1-800-POS-HELP, Emergency: 1-800-EMERGENCY, Sales: 1-800-POS-SALES. All lines available 24/7 except sales (business hours).'
                    },
                    {
                        question: 'How do I reach technical support?',
                        answer: 'Technical Support: 1-800-POS-HELP, Email: support@posdeployment.com, Live Chat: Available through customer portal 6 AM - 10 PM EST. Emergency technical support available 24/7.'
                    },
                    {
                        question: 'What regional offices are available?',
                        answer: 'Regional offices in New York, Chicago, Dallas, Denver, and Los Angeles. Each office provides local support and on-site services. Contact main number for regional office direct numbers.'
                    },
                    {
                        question: 'How do I provide feedback or suggestions?',
                        answer: 'Feedback welcome through customer portal, email feedback@posdeployment.com, or quarterly customer surveys. Suggestions are reviewed monthly by the product development team.'
                    }
                ]
            }
        },
        canada: {
            'orders-operations': {
                title: 'Orders and Operations',
                subtitle: 'Order management and operational procedures for Canadian deployments',
                faqs: [
                    {
                        question: 'How do I place orders in Canada?',
                        answer: 'Orders can be placed through the Canadian portal, by calling 1-800-POS-CANADA, or through your assigned account manager. Include GST/HST information and provincial requirements.'
                    },
                    {
                        question: 'What are the lead times for Canadian orders?',
                        answer: 'Standard orders: 7-10 business days including customs clearance. Quebec orders may require additional 2-3 days for French documentation. Rush orders available with premium shipping.'
                    },
                    {
                        question: 'How do I handle customs and duties?',
                        answer: 'All customs duties and brokerage fees are included in Canadian pricing. Provide accurate business registration numbers for proper customs clearance and tax exemptions.'
                    },
                    {
                        question: 'What operational procedures apply in Canada?',
                        answer: 'Follow Canadian deployment procedures including provincial compliance checks, bilingual documentation requirements, and CSA electrical standards verification.'
                    },
                    {
                        question: 'How do I escalate issues in Canada?',
                        answer: 'Canadian escalation: Site technician → Regional manager → Canadian operations director. Bilingual support available. Critical issues escalated to Toronto operations center.'
                    }
                ]
            },
            'product-supply': {
                title: 'Product and Supply',
                subtitle: 'Product information and supply chain management for Canadian operations',
                faqs: [
                    {
                        question: 'What products are available in Canada?',
                        answer: 'Full product line available with CSA certification. All models include bilingual documentation and French language support. Quebec-specific configurations available.'
                    },
                    {
                        question: 'How do I check Canadian inventory?',
                        answer: 'Canadian inventory tracked separately from US stock. Check availability through Canadian portal or call 1-800-INVENTORY-CA. Regional warehouses in Toronto, Calgary, and Vancouver.'
                    },
                    {
                        question: 'What accessories are certified for Canada?',
                        answer: 'All accessories have IC (Industry Canada) certification and CSA approval where required. Bilingual labeling and documentation included with all accessories.'
                    },
                    {
                        question: 'How do I get French product documentation?',
                        answer: 'French documentation available for all products through the Canadian portal. Quebec customers receive French documentation by default. Technical translations certified by professional translators.'
                    },
                    {
                        question: 'What warranty applies in Canada?',
                        answer: 'Canadian warranty: 3 years parts and labor, compliant with provincial consumer protection laws. Extended warranty available. Service provided by certified Canadian technicians.'
                    }
                ]
            },
            'procedures-guidelines': {
                title: 'Procedures and Guidelines',
                subtitle: 'Standard operating procedures and guidelines for Canadian operations',
                faqs: [
                    {
                        question: 'What are Canadian deployment procedures?',
                        answer: 'Canadian procedures include provincial compliance verification, bilingual documentation requirements, CSA electrical standards, and Health Canada regulations where applicable.'
                    },
                    {
                        question: 'How do I access Canadian procedure documentation?',
                        answer: 'Canadian procedures available in both English and French through the Canadian knowledge portal. Mobile app provides offline access to critical procedures and emergency contacts.'
                    },
                    {
                        question: 'What safety standards apply in Canada?',
                        answer: 'Follow provincial occupational health and safety standards, CSA electrical safety requirements, and federal workplace safety regulations. Annual safety training required for all technicians.'
                    },
                    {
                        question: 'How do I report safety incidents in Canada?',
                        answer: 'Report incidents through Canadian safety hotline 1-800-SAFETY-CA or online portal. Provincial workplace safety authorities notified as required. Bilingual incident reporting available.'
                    },
                    {
                        question: 'What quality standards are required?',
                        answer: 'Canadian quality standards include CSA compliance verification, bilingual documentation review, and provincial regulatory compliance checks. Monthly quality audits conducted.'
                    }
                ]
            },
            'service-standards': {
                title: 'Service Standards and Ops Hours',
                subtitle: 'Service level standards and operational hours for Canadian operations',
                faqs: [
                    {
                        question: 'What are Canadian service level agreements?',
                        answer: 'Canadian SLA: 4-hour response for critical issues, 8-hour for high priority, 24-hour for medium priority. On-site service within 24 hours in major cities, 48 hours in remote areas.'
                    },
                    {
                        question: 'What are Canadian operational hours?',
                        answer: 'Phone support: 24/7 for critical issues, 6 AM - 10 PM EST/PST for general support. On-site service: Monday-Friday 8 AM - 6 PM local time across all time zones.'
                    },
                    {
                        question: 'Is bilingual support available?',
                        answer: 'Full bilingual support available 24/7. French-first support for Quebec customers. All service documentation and communications available in both official languages.'
                    },
                    {
                        question: 'What performance metrics are tracked in Canada?',
                        answer: 'Metrics include response time, resolution time, customer satisfaction, and compliance with provincial service standards. Quarterly performance reports available in both languages.'
                    },
                    {
                        question: 'How do I escalate service issues in Canada?',
                        answer: 'Canadian escalation: Technician → Team Lead → Service Manager → Canadian Regional Director. Bilingual escalation support available through 1-800-ESCALATE-CA.'
                    }
                ]
            },
            'orders-tracking': {
                title: 'Orders Tracking',
                subtitle: 'Track and monitor order status and delivery for Canadian operations',
                faqs: [
                    {
                        question: 'How do I track orders in Canada?',
                        answer: 'Track orders through Canadian portal using order number. Updates include customs clearance status, provincial tax processing, and delivery scheduling. Bilingual tracking available.'
                    },
                    {
                        question: 'What shipping options are available in Canada?',
                        answer: 'Shipping options: Standard (7-10 days), Express (3-5 days), Overnight to major cities, and White Glove delivery. All shipping includes customs clearance and duty payments.'
                    },
                    {
                        question: 'How do I change delivery details in Canada?',
                        answer: 'Delivery changes available up to 24 hours before delivery. Contact Canadian logistics at 1-800-DELIVERY-CA. Additional customs processing may be required for address changes.'
                    },
                    {
                        question: 'What happens with missed deliveries in Canada?',
                        answer: 'Missed deliveries rescheduled for next business day. Three attempts made before returning to Canadian depot. Pickup available from regional distribution centers.'
                    },
                    {
                        question: 'How do I report issues with Canadian deliveries?',
                        answer: 'Report delivery issues within 24 hours through Canadian claims portal or call 1-800-CLAIMS-CA. Bilingual claims processing available. Photos required for damage claims.'
                    }
                ]
            },
            contacts: {
                title: 'Contacts',
                subtitle: 'Contact information and support channels for Canadian operations',
                faqs: [
                    {
                        question: 'Who is my Canadian account manager?',
                        answer: 'Canadian account manager information available in customer portal. For immediate assistance, call 1-800-POS-CANADA and provide account number for direct transfer to your manager.'
                    },
                    {
                        question: 'What are the main Canadian contact numbers?',
                        answer: 'Main: 1-800-POS-CANADA, Orders: 1-800-ORDER-CA, Support: 1-800-SUPPORT-CA, Emergency: 1-800-EMERGENCY-CA, Sales: 1-800-SALES-CA. Bilingual service on all lines.'
                    },
                    {
                        question: 'How do I reach Canadian technical support?',
                        answer: 'Technical Support: 1-800-SUPPORT-CA, Email: support-ca@posdeployment.com, Live Chat: Available through Canadian portal 6 AM - 10 PM EST/PST. Emergency support 24/7.'
                    },
                    {
                        question: 'What Canadian regional offices are available?',
                        answer: 'Regional offices in Toronto, Montreal, Vancouver, Calgary, and Winnipeg. Each provides local support in both official languages. Contact main number for regional direct lines.'
                    },
                    {
                        question: 'How do I provide feedback in Canada?',
                        answer: 'Feedback welcome through Canadian customer portal, email feedback-ca@posdeployment.com, or quarterly surveys. Bilingual feedback processing and response available.'
                    }
                ]
            }
        }
    };
    
    return data[region][category];
}