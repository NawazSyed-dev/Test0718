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
            'large-rollout': {
                title: 'Large Rollout',
                subtitle: 'Large scale deployment and rollout services for US operations',
                faqs: [
                    {
                        question: 'What qualifies as a large rollout deployment?',
                        answer: 'Large rollouts typically involve 50+ locations, multi-state deployments, or enterprise-wide implementations. These require specialized project management, dedicated resources, and custom deployment schedules.'
                    },
                    {
                        question: 'How do I initiate a large rollout project?',
                        answer: 'Contact your enterprise account manager or call 1-800-ENTERPRISE. We\'ll assign a dedicated project manager and create a custom deployment plan with timeline, resources, and milestone tracking.'
                    },
                    {
                        question: 'What additional services are included in large rollouts?',
                        answer: 'Large rollouts include: dedicated project management, custom staging and configuration, coordinated logistics, on-site training programs, 24/7 deployment support, and post-deployment optimization.'
                    },
                    {
                        question: 'How are large rollout timelines managed?',
                        answer: 'We create detailed project timelines with phased deployments, milestone checkpoints, and contingency planning. Regular status meetings and real-time project dashboards keep all stakeholders informed.'
                    },
                    {
                        question: 'What support is available during large rollouts?',
                        answer: 'Dedicated support includes: enterprise project manager, technical lead engineer, logistics coordinator, training specialist, and 24/7 escalation hotline. War room support available for critical deployment phases.'
                    }
                ]
            },
            'order-terminal': {
                title: 'Order a Terminal',
                subtitle: 'Place new orders for POS terminals and hardware',
                faqs: [
                    {
                        question: 'How do I place a new terminal order?',
                        answer: 'Orders can be placed through the enterprise portal, by calling 1-800-ORDER-POS, or through your dedicated account manager. Provide site details, terminal specifications, and preferred delivery timeline.'
                    },
                    {
                        question: 'What information is required for terminal orders?',
                        answer: 'Required information includes: merchant ID, site address, terminal model, configuration requirements, delivery contact, installation preferences, and any special requirements or accessories.'
                    },
                    {
                        question: 'What are the available terminal models?',
                        answer: 'Available models include: Terminal Pro X1 (full-service), Compact Station C2 (small business), Mobile Unit M3 (portable), Kitchen Display K4 (restaurant), and Custom Enterprise configurations.'
                    },
                    {
                        question: 'How long does terminal delivery take?',
                        answer: 'Standard delivery is 5-7 business days. Express delivery (2-3 days) and overnight options available. Custom configurations may require 10-14 days. Installation can be scheduled concurrent with delivery.'
                    },
                    {
                        question: 'Can I track my terminal order?',
                        answer: 'Yes, all orders are trackable through the customer portal using your order number. Real-time updates include order processing, shipping, and delivery status with SMS/email notifications.'
                    }
                ]
            },
            'replacement': {
                title: 'Replacement',
                subtitle: 'Request replacement for damaged or faulty equipment',
                faqs: [
                    {
                        question: 'How do I request equipment replacement?',
                        answer: 'Report equipment issues through the support portal, call 1-800-REPLACE, or contact your account manager. Provide serial number, issue description, and urgency level for fastest processing.'
                    },
                    {
                        question: 'What is covered under replacement warranty?',
                        answer: 'Warranty covers manufacturing defects, hardware failures, and normal wear issues. Coverage includes parts, labor, and shipping. Damage from misuse, accidents, or environmental factors may incur charges.'
                    },
                    {
                        question: 'How quickly can I get a replacement?',
                        answer: 'Critical replacements: 24-48 hours. Standard replacements: 3-5 business days. Advance replacement available for critical systems - new unit ships before defective unit return.'
                    },
                    {
                        question: 'What happens to the defective equipment?',
                        answer: 'Defective units must be returned within 10 business days using provided prepaid shipping labels. Failure to return may result in charges. Returned units are refurbished or recycled responsibly.'
                    },
                    {
                        question: 'Is there a cost for replacement services?',
                        answer: 'Warranty replacements are free including shipping and labor. Out-of-warranty replacements incur hardware costs plus service fees. Extended warranty plans available to minimize replacement costs.'
                    }
                ]
            },
            'recovery': {
                title: 'Recovery',
                subtitle: 'Equipment recovery and return procedures',
                faqs: [
                    {
                        question: 'When is equipment recovery required?',
                        answer: 'Recovery is required for: lease terminations, merchant closures, equipment upgrades, warranty replacements, and end-of-contract returns. Recovery ensures proper asset management and data security.'
                    },
                    {
                        question: 'How do I schedule equipment recovery?',
                        answer: 'Schedule recovery through the customer portal, call 1-800-RECOVERY, or contact your account manager. Provide equipment list, pickup address, and preferred scheduling window.'
                    },
                    {
                        question: 'What preparation is needed for recovery?',
                        answer: 'Preparation includes: data backup and wipe, equipment cleaning, cable organization, original packaging if available, and ensuring site access for pickup team.'
                    },
                    {
                        question: 'Are there charges for equipment recovery?',
                        answer: 'Standard recovery is included in service agreements. Rush recovery, special handling, or failed pickup attempts may incur additional charges. Detailed pricing available from your account manager.'
                    },
                    {
                        question: 'What happens if equipment is not returned?',
                        answer: 'Unreturned equipment may result in charges equal to replacement cost. Grace periods apply for legitimate delays. Contact customer service immediately if return issues arise.'
                    }
                ]
            },
            'edit-merchant': {
                title: 'Edit Merchant',
                subtitle: 'Update merchant information and settings',
                faqs: [
                    {
                        question: 'How do I update merchant information?',
                        answer: 'Merchant updates can be made through the merchant portal, by calling 1-800-MERCHANT, or through your account manager. Changes require verification and may need supporting documentation.'
                    },
                    {
                        question: 'What merchant information can be updated?',
                        answer: 'Updatable information includes: business name, address, contact details, banking information, processing settings, user access, and notification preferences. Some changes require approval processes.'
                    },
                    {
                        question: 'How long do merchant updates take to process?',
                        answer: 'Simple updates (contact info): Immediate. Address changes: 1-2 business days. Banking/processing changes: 3-5 business days for verification and approval. Critical updates can be expedited.'
                    },
                    {
                        question: 'What documentation is required for updates?',
                        answer: 'Required documentation varies by change type: business license for name changes, utility bills for address changes, bank statements for banking updates, and authorization forms for processing changes.'
                    },
                    {
                        question: 'Can I make bulk merchant updates?',
                        answer: 'Yes, bulk updates available for enterprise accounts with multiple locations. Use the bulk update portal or contact your account manager for assistance with large-scale merchant information changes.'
                    }
                ]
            },
            'edit-order': {
                title: 'Edit Order',
                subtitle: 'Modify existing orders and specifications',
                faqs: [
                    {
                        question: 'Can I modify an existing order?',
                        answer: 'Orders can be modified up to 24 hours before shipping. Contact customer service at 1-800-EDIT-ORDER or use the online portal. Some modifications may affect pricing and delivery timeline.'
                    },
                    {
                        question: 'What order details can be changed?',
                        answer: 'Modifiable details include: delivery address, contact information, installation preferences, accessory additions, and delivery timing. Hardware model changes may require order cancellation and resubmission.'
                    },
                    {
                        question: 'Are there fees for order modifications?',
                        answer: 'Simple modifications (address, contact) are free. Hardware changes, expedited shipping, or custom configuration changes may incur additional fees. Fee schedule available from customer service.'
                    },
                    {
                        question: 'How do I cancel an order?',
                        answer: 'Orders can be cancelled up to 24 hours before shipping without penalty. Contact customer service immediately. Custom orders or orders in production may incur cancellation fees.'
                    },
                    {
                        question: 'What if I need to change an order after shipping?',
                        answer: 'After shipping, contact customer service immediately. Options include: delivery redirection (if possible), return and reorder, or field modification upon delivery. Additional charges may apply.'
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
    
    // Handle global contacts
    if (region === 'global' && category === 'contacts') {
        return {
            title: 'Global Contacts',
            subtitle: 'Contact information and support channels for all regions',
            faqs: [
                {
                    question: 'What are the main contact numbers for each region?',
                    answer: 'United States: 1-800-POS-MAIN | Canada: 1-800-POS-CANADA | Global Enterprise: 1-800-ENTERPRISE | Emergency Support: Available 24/7 for both regions with appropriate regional routing.'
                },
                {
                    question: 'How do I reach technical support?',
                    answer: 'US Technical Support: 1-800-POS-HELP | Canadian Technical Support: 1-800-SUPPORT-CA | Email: support@posdeployment.com (US), support-ca@posdeployment.com (Canada) | Live Chat: Available through respective regional portals.'
                },
                {
                    question: 'What are the regional office locations?',
                    answer: 'US Offices: New York, Chicago, Dallas, Denver, Los Angeles | Canadian Offices: Toronto, Montreal, Vancouver, Calgary, Winnipeg | Each office provides local support in appropriate languages.'
                },
                {
                    question: 'How do I contact enterprise sales?',
                    answer: 'Enterprise Sales: 1-800-ENTERPRISE (Global) | US Sales: 1-800-POS-SALES | Canadian Sales: 1-800-SALES-CA | Email: enterprise@posdeployment.com | Dedicated enterprise account managers available.'
                },
                {
                    question: 'What emergency support is available?',
                    answer: 'Emergency Hotlines: US: 1-800-EMERGENCY | Canada: 1-800-EMERGENCY-CA | Available 24/7/365 | Bilingual support for Canadian customers | Escalation to regional operations centers within 15 minutes.'
                },
                {
                    question: 'How do I provide feedback or suggestions?',
                    answer: 'Feedback Channels: US: feedback@posdeployment.com | Canada: feedback-ca@posdeployment.com | Customer portals for both regions | Quarterly satisfaction surveys | Monthly product development review meetings.'
                }
            ]
        };
    }
    
    return data[region][category];
}