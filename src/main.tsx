 import { StrictMode, useEffect, useState } from "react";
 import { createRoot } from "react-dom/client";
 import "./index.css";
 import App from "./App.tsx";


const data =   {
        "widget_id": "834f63f6-8039-46d1-b3a8-045fa95c4fa7",
        "name": "Premium Pricing Widget",
        "settings": {
            "id": 1,
            "multiple_tables_mode": true,
            "language": {
                "id": 1,
                "language": "en"
            },
            "tables": [
                {
                    "id": 1,
                    "name": "Cloud Hosting Plans",
                    "caption": "Choose your perfect hosting solution",
                    "head_title": "Features Comparison",
                    "head_features": [
                        {
                            "id": 1,
                            "text": "Storage",
                            "hint": "High speed SSD"
                        },
                        {
                            "id": 2,
                            "text": "Bandwidth",
                            "hint": "Monthly transfer"
                        },
                        {
                            "id": 3,
                            "text": "Domains",
                            "hint": "Included domains"
                        },
                        {
                            "id": 4,
                            "text": "SSL",
                            "hint": "Free certificates"
                        },
                        {
                            "id": 5,
                            "text": "Backups",
                            "hint": "Daily backups"
                        },
                        {
                            "id": 6,
                            "text": "Database",
                            "hint": "MySQL included"
                        },
                        {
                            "id": 7,
                            "text": "Email",
                            "hint": "Accounts included"
                        },
                        {
                            "id": 8,
                            "text": "Support",
                            "hint": "24/7 availability"
                        }
                    ],
                    "columns": [
                        {
                            "id": 1,
                            "picture": "http://127.0.0.1:8000/media/widget/images/download_vTiDl4m.png",
                            "title": "Starter",
                            "title_caption": "Ideal for small projects",
                            "price_caption": "From $9.99/mo",
                            "features": [
                                {
                                    "id": 1,
                                    "text": "20GB SSD",
                                    "icon": "http://127.0.0.1:8000/media/widget/images/check-mark_nIU7DbP.svg"
                                },
                                {
                                    "id": 2,
                                    "text": "2TB Bandwidth",
                                    "icon": "http://127.0.0.1:8000/media/widget/images/check-mark_D7RykED.svg"
                                },
                                {
                                    "id": 3,
                                    "text": "1 Domain",
                                    "icon": "http://127.0.0.1:8000/media/widget/images/check-mark_sqpIzmK.svg"
                                },
                                {
                                    "id": 4,
                                    "text": "Free SSL",
                                    "icon": "http://127.0.0.1:8000/media/widget/images/check-mark_uSBowBs.svg"
                                },
                                {
                                    "id": 5,
                                    "text": "Daily Backups",
                                    "icon": "http://127.0.0.1:8000/media/widget/images/check-mark_1dmiMes.svg"
                                },
                                {
                                    "id": 6,
                                    "text": "1 Database",
                                    "icon": "http://127.0.0.1:8000/media/widget/images/check-mark_O1zK83V.svg"
                                },
                                {
                                    "id": 7,
                                    "text": "5 Email Accounts",
                                    "icon": "http://127.0.0.1:8000/media/widget/images/check-mark_oCEHRXp.svg"
                                },
                                {
                                    "id": 8,
                                    "text": "Basic Support",
                                    "icon": "http://127.0.0.1:8000/media/widget/images/check-mark_yqCoRAw.svg"
                                }
                            ],
                            "button_text": "Start Trial",
                            "button_caption": "No credit card needed",
                            "button_link": {
                                "id": 1,
                                "type": "URL",
                                "value": "/starter",
                                "raw_value": "/starter",
                                "target": "_blank"
                            },
                            "price": {
                                "id": 1,
                                "pricing_model": "subscription",
                                "price": "9.99",
                                "currency": "USD",
                                "min_price": null,
                                "max_price": null,
                                "period": "monthly",
                                "unit": "mo",
                                "custom_price": null
                            },
                            "old_price": {
                                "id": 1,
                                "enabled": true,
                                "price": "12.99",
                                "min_price": null,
                                "max_price": null,
                                "custom_price": "12.99"
                            },
                            "primary_color": "#3B82F6",
                            "highlight_label": "Popular"
                        },
                        {
                            "id": 2,
                            "picture": "http://127.0.0.1:8000/media/widget/images/download_qGCEqix.png",
                            "title": "Professional",
                            "title_caption": "Growing businesses",
                            "price_caption": "From $49.99/mo",
                            "features": [
                                {
                                    "id": 9,
                                    "text": "100GB SSD",
                                    "icon": "http://127.0.0.1:8000/media/widget/images/check-mark_qdBI8EN.svg"
                                },
                                {
                                    "id": 10,
                                    "text": "10TB Bandwidth",
                                    "icon": "http://127.0.0.1:8000/media/widget/images/check-mark_ubxBRPL.svg"
                                },
                                {
                                    "id": 11,
                                    "text": "5 Domains",
                                    "icon": "http://127.0.0.1:8000/media/widget/images/check-mark_irDLlzF.svg"
                                },
                                {
                                    "id": 12,
                                    "text": "Wildcard SSL",
                                    "icon": "http://127.0.0.1:8000/media/widget/images/check-mark_YFCIajR.svg"
                                },
                                {
                                    "id": 13,
                                    "text": "Hourly Backups",
                                    "icon": "http://127.0.0.1:8000/media/widget/images/check-mark_t0lGcyP.svg"
                                },
                                {
                                    "id": 14,
                                    "text": "10 Databases",
                                    "icon": "http://127.0.0.1:8000/media/widget/images/check-mark_No1h504.svg"
                                },
                                {
                                    "id": 15,
                                    "text": "Unlimited Emails",
                                    "icon": "http://127.0.0.1:8000/media/widget/images/check-mark_DG623xM.svg"
                                },
                                {
                                    "id": 16,
                                    "text": "Priority Support",
                                    "icon": "http://127.0.0.1:8000/media/widget/images/check-mark_Mv85K7p.svg"
                                }
                            ],
                            "button_text": "Get Started",
                            "button_caption": "30-day guarantee",
                            "button_link": {
                                "id": 2,
                                "type": "URL",
                                "value": "https://example.com/",
                                "raw_value": "https://example.com/",
                                "target": "_self"
                            },
                            "price": {
                                "id": 2,
                                "pricing_model": "subscription",
                                "price": "49.99",
                                "currency": "USD",
                                "min_price": null,
                                "max_price": null,
                                "period": "monthly",
                                "unit": "mo",
                                "custom_price": null
                            },
                            "old_price": {
                                "id": 2,
                                "enabled": true,
                                "price": "59.99",
                                "min_price": null,
                                "max_price": null,
                                "custom_price": "59.99"
                            },
                            "primary_color": "#10B981",
                            "highlight_label": "Best Value"
                        },
                        {
                            "id": 3,
                            "picture": "http://127.0.0.1:8000/media/widget/images/download_hfqef5J.png",
                            "title": "Enterprise",
                            "title_caption": "Large scale solutions",
                            "price_caption": "Custom Pricing",
                            "features": [
                                {
                                    "id": 17,
                                    "text": "1TB SSD",
                                    "icon": "http://127.0.0.1:8000/media/widget/images/check-mark_ZELQrYd.svg"
                                },
                                {
                                    "id": 18,
                                    "text": "Unlimited Bandwidth",
                                    "icon": "http://127.0.0.1:8000/media/widget/images/check-mark_BRdN7iZ.svg"
                                },
                                {
                                    "id": 19,
                                    "text": "50 Domains",
                                    "icon": "http://127.0.0.1:8000/media/widget/images/check-mark_aSjQwv9.svg"
                                },
                                {
                                    "id": 20,
                                    "text": "Advanced SSL",
                                    "icon": "http://127.0.0.1:8000/media/widget/images/check-mark_fmYshJc.svg"
                                },
                                {
                                    "id": 21,
                                    "text": "Real-time Backups",
                                    "icon": "http://127.0.0.1:8000/media/widget/images/check-mark_I2jQ6IW.svg"
                                },
                                {
                                    "id": 22,
                                    "text": "Unlimited DBs",
                                    "icon": "http://127.0.0.1:8000/media/widget/images/check-mark_SsWe9cJ.svg"
                                },
                                {
                                    "id": 23,
                                    "text": "Enterprise Email",
                                    "icon": "http://127.0.0.1:8000/media/widget/images/check-mark_w5G2hit.svg"
                                },
                                {
                                    "id": 24,
                                    "text": "24/7 Premium Support",
                                    "icon": "http://127.0.0.1:8000/media/widget/images/check-mark_tsVQpWc.svg"
                                }
                            ],
                            "button_text": "Contact Sales",
                            "button_caption": "Tailored solutions",
                            "button_link": {
                                "id": 3,
                                "type": "URL",
                                "value": "/enterprise",
                                "raw_value": "/enterprise",
                                "target": "_blank"
                            },
                            "price": {
                                "id": 3,
                                "pricing_model": "subscription",
                                "price": "99.00",
                                "currency": "USD",
                                "min_price": null,
                                "max_price": null,
                                "period": "monthly",
                                "unit": "mo",
                                "custom_price": null
                            },
                            "old_price": {
                                "id": 3,
                                "enabled": true,
                                "price": "100.00",
                                "min_price": null,
                                "max_price": null,
                                "custom_price": "Request Quote"
                            },
                            "primary_color": "#8B5CF6",
                            "highlight_label": "Premium"
                        }
                    ],
                    "visible": true
                },
                {
                    "id": 2,
                    "name": "Enterprise Solutions",
                    "caption": "Enterprise-grade infrastructure",
                    "head_title": "Feature Comparison",
                    "head_features": [
                        {
                            "id": 9,
                            "text": "CPU Cores",
                            "hint": "Processing power"
                        },
                        {
                            "id": 10,
                            "text": "RAM",
                            "hint": "Memory allocation"
                        },
                        {
                            "id": 11,
                            "text": "Storage",
                            "hint": "SSD storage"
                        },
                        {
                            "id": 12,
                            "text": "Bandwidth",
                            "hint": "Network capacity"
                        },
                        {
                            "id": 13,
                            "text": "SLA",
                            "hint": "Uptime guarantee"
                        },
                        {
                            "id": 14,
                            "text": "Security",
                            "hint": "Certifications"
                        },
                        {
                            "id": 15,
                            "text": "Support",
                            "hint": "Response time"
                        },
                        {
                            "id": 16,
                            "text": "Customization",
                            "hint": "Configuration options"
                        }
                    ],
                    "columns": [
                        {
                            "id": 4,
                            "picture": "http://127.0.0.1:8000/media/widget/images/download_wJ1hLe8.png",
                            "title": "Basic",
                            "title_caption": "Entry-level enterprise",
                            "price_caption": "From $299/mo",
                            "features": [
                                {
                                    "id": 25,
                                    "text": "4 Cores",
                                    "icon": "http://127.0.0.1:8000/media/widget/images/check-mark_FJZHLwU.svg"
                                },
                                {
                                    "id": 26,
                                    "text": "16GB RAM",
                                    "icon": "http://127.0.0.1:8000/media/widget/images/check-mark_qd1MYOS.svg"
                                },
                                {
                                    "id": 27,
                                    "text": "500GB SSD",
                                    "icon": "http://127.0.0.1:8000/media/widget/images/check-mark_8sFQog5.svg"
                                },
                                {
                                    "id": 28,
                                    "text": "10TB Bandwidth",
                                    "icon": "http://127.0.0.1:8000/media/widget/images/check-mark_fcrublk.svg"
                                },
                                {
                                    "id": 29,
                                    "text": "99.9% SLA",
                                    "icon": "http://127.0.0.1:8000/media/widget/images/check-mark_tXan0oM.svg"
                                },
                                {
                                    "id": 30,
                                    "text": "ISO 27001",
                                    "icon": "http://127.0.0.1:8000/media/widget/images/check-mark_D47x3Om.svg"
                                },
                                {
                                    "id": 31,
                                    "text": "24/7 Support",
                                    "icon": "http://127.0.0.1:8000/media/widget/images/check-mark_pnpTNdA.svg"
                                },
                                {
                                    "id": 32,
                                    "text": "Basic Config",
                                    "icon": "http://127.0.0.1:8000/media/widget/images/check-mark_MBzfh3t.svg"
                                }
                            ],
                            "button_text": "Start Now",
                            "button_caption": "Monthly billing",
                            "button_link": {
                                "id": 4,
                                "type": "URL",
                                "value": "https://example.com/",
                                "raw_value": "https://example.com/",
                                "target": "_blank"
                            },
                            "price": {
                                "id": 4,
                                "pricing_model": "subscription",
                                "price": "299.00",
                                "currency": "USD",
                                "min_price": null,
                                "max_price": null,
                                "period": "monthly",
                                "unit": "mo",
                                "custom_price": null
                            },
                            "old_price": {
                                "id": 4,
                                "enabled": true,
                                "price": "349.00",
                                "min_price": null,
                                "max_price": null,
                                "custom_price": "349"
                            },
                            "primary_color": "#3B82F6",
                            "highlight_label": "Starter"
                        },
                        {
                            "id": 5,
                            "picture": "http://127.0.0.1:8000/media/widget/images/download_wB4F2jK.png",
                            "title": "Advanced",
                            "title_caption": "Mid-sized enterprises",
                            "price_caption": "From $599/mo",
                            "features": [
                                {
                                    "id": 33,
                                    "text": "8 Cores",
                                    "icon": "http://127.0.0.1:8000/media/widget/images/check-mark_2YgCCYK.svg"
                                },
                                {
                                    "id": 34,
                                    "text": "32GB RAM",
                                    "icon": "http://127.0.0.1:8000/media/widget/images/check-mark_XiBM6Wm.svg"
                                },
                                {
                                    "id": 35,
                                    "text": "1TB SSD",
                                    "icon": "http://127.0.0.1:8000/media/widget/images/check-mark_BS9D1GW.svg"
                                },
                                {
                                    "id": 36,
                                    "text": "20TB Bandwidth",
                                    "icon": "http://127.0.0.1:8000/media/widget/images/check-mark_qVECLti.svg"
                                },
                                {
                                    "id": 37,
                                    "text": "99.95% SLA",
                                    "icon": "http://127.0.0.1:8000/media/widget/images/check-mark_RkLcoUZ.svg"
                                },
                                {
                                    "id": 38,
                                    "text": "SOC 2",
                                    "icon": "http://127.0.0.1:8000/media/widget/images/check-mark_kDiOOKj.svg"
                                },
                                {
                                    "id": 39,
                                    "text": "1hr Response",
                                    "icon": "http://127.0.0.1:8000/media/widget/images/check-mark_29gBfMN.svg"
                                },
                                {
                                    "id": 40,
                                    "text": "Advanced Config",
                                    "icon": "http://127.0.0.1:8000/media/widget/images/check-mark_S6Jc7zG.svg"
                                }
                            ],
                            "button_text": "Get Quote",
                            "button_caption": "Volume discounts",
                            "button_link": {
                                "id": 5,
                                "type": "URL",
                                "value": "https://example.com/",
                                "raw_value": "https://example.com/",
                                "target": "_self"
                            },
                            "price": {
                                "id": 5,
                                "pricing_model": "subscription",
                                "price": "599.00",
                                "currency": "USD",
                                "min_price": null,
                                "max_price": null,
                                "period": "monthly",
                                "unit": "mo",
                                "custom_price": null
                            },
                            "old_price": {
                                "id": 5,
                                "enabled": true,
                                "price": "699.00",
                                "min_price": null,
                                "max_price": null,
                                "custom_price": "699"
                            },
                            "primary_color": "#10B981",
                            "highlight_label": "Popular"
                        },
                        {
                            "id": 6,
                            "picture": "http://127.0.0.1:8000/media/widget/images/download_IRGDgw2.png",
                            "title": "Premium",
                            "title_caption": "Large enterprises",
                            "price_caption": "From $999/mo",
                            "features": [
                                {
                                    "id": 41,
                                    "text": "16 Cores",
                                    "icon": "http://127.0.0.1:8000/media/widget/images/check-mark_InmUmR2.svg"
                                },
                                {
                                    "id": 42,
                                    "text": "64GB RAM",
                                    "icon": "http://127.0.0.1:8000/media/widget/images/check-mark_ZYD44hI.svg"
                                },
                                {
                                    "id": 43,
                                    "text": "2TB SSD",
                                    "icon": "http://127.0.0.1:8000/media/widget/images/check-mark_p1DHPcC.svg"
                                },
                                {
                                    "id": 44,
                                    "text": "50TB Bandwidth",
                                    "icon": "http://127.0.0.1:8000/media/widget/images/check-mark_aDJOMyT.svg"
                                },
                                {
                                    "id": 45,
                                    "text": "99.99% SLA",
                                    "icon": "http://127.0.0.1:8000/media/widget/images/check-mark_wyVMVMz.svg"
                                },
                                {
                                    "id": 46,
                                    "text": "PCI DSS",
                                    "icon": "http://127.0.0.1:8000/media/widget/images/check-mark_AZoHGLE.svg"
                                },
                                {
                                    "id": 47,
                                    "text": "30min Response",
                                    "icon": "http://127.0.0.1:8000/media/widget/images/check-mark_kr5sOrC.svg"
                                },
                                {
                                    "id": 48,
                                    "text": "Full Customization",
                                    "icon": "http://127.0.0.1:8000/media/widget/images/check-mark_ZlBMMvH.svg"
                                }
                            ],
                            "button_text": "Contact Sales",
                            "button_caption": "Custom solutions",
                            "button_link": {
                                "id": 6,
                                "type": "URL",
                                "value": "https://example.com/",
                                "raw_value": "https://example.com/",
                                "target": "_blank"
                            },
                            "price": {
                                "id": 6,
                                "pricing_model": "subscription",
                                "price": "999.00",
                                "currency": "USD",
                                "min_price": null,
                                "max_price": null,
                                "period": "monthly",
                                "unit": "mo",
                                "custom_price": null
                            },
                            "old_price": {
                                "id": 6,
                                "enabled": true,
                                "price": "1199.00",
                                "min_price": null,
                                "max_price": null,
                                "custom_price": "1199"
                            },
                            "primary_color": "#F59E0B",
                            "highlight_label": "Recommended"
                        },
                        {
                            "id": 7,
                            "picture": "http://127.0.0.1:8000/media/widget/images/download_vpSdIH1.png",
                            "title": "Custom",
                            "title_caption": "Fully tailored solutions",
                            "price_caption": "Contact for pricing",
                            "features": [
                                {
                                    "id": 49,
                                    "text": "32+ Cores",
                                    "icon": "http://127.0.0.1:8000/media/widget/images/check-mark_kgkghBe.svg"
                                },
                                {
                                    "id": 50,
                                    "text": "128GB+ RAM",
                                    "icon": "http://127.0.0.1:8000/media/widget/images/check-mark_6b8PGgY.svg"
                                },
                                {
                                    "id": 51,
                                    "text": "5TB+ SSD",
                                    "icon": "http://127.0.0.1:8000/media/widget/images/check-mark_5M4jsJe.svg"
                                },
                                {
                                    "id": 52,
                                    "text": "100TB+ Bandwidth",
                                    "icon": "http://127.0.0.1:8000/media/widget/images/check-mark_xHHpIpG.svg"
                                },
                                {
                                    "id": 53,
                                    "text": "99.999% SLA",
                                    "icon": "http://127.0.0.1:8000/media/widget/images/check-mark_NIpc2Xu.svg"
                                },
                                {
                                    "id": 54,
                                    "text": "FedRAMP",
                                    "icon": "http://127.0.0.1:8000/media/widget/images/check-mark_1GkFwin.svg"
                                },
                                {
                                    "id": 55,
                                    "text": "15min Response",
                                    "icon": "http://127.0.0.1:8000/media/widget/images/check-mark_L7aWJa8.svg"
                                },
                                {
                                    "id": 56,
                                    "text": "Dedicated Engineer",
                                    "icon": "http://127.0.0.1:8000/media/widget/images/check-mark_bXGUc83.svg"
                                }
                            ],
                            "button_text": "Consult Now",
                            "button_caption": "Enterprise SLA",
                            "button_link": {
                                "id": 7,
                                "type": "URL",
                                "value": "https://example.com/",
                                "raw_value": "https://example.com/",
                                "target": "_blank"
                            },
                            "price": {
                                "id": 7,
                                "pricing_model": "custom",
                                "price": "100.00",
                                "currency": "USD",
                                "min_price": null,
                                "max_price": null,
                                "period": "monthly",
                                "unit": "mo",
                                "custom_price": null
                            },
                            "old_price": {
                                "id": 7,
                                "enabled": true,
                                "price": "120.00",
                                "min_price": null,
                                "max_price": null,
                                "custom_price": "Custom Quote"
                            },
                            "primary_color": "#EF4444",
                            "highlight_label": "Elite"
                        }
                    ],
                    "visible": true
                }
            ],
            "layout": "classic_table",
            "width": {
                "id": 1,
                "auto": true,
                "custom_value": 1000
            },
            "show_widget_title": true,
            "widget_title": "Cloud Hosting & Enterprise Packages",
            "widget_title_caption": "All plans include 24/7 support",
            "widget_title_color": "#1F2937",
            "widget_title_caption_color": "#6B7280",
            "widget_title_link_color": "#3B82F6",
            "widget_title_alignment": "center",
            "widget_title_text_style": {
                "id": 1,
                "font_size": 24,
                "font_weight": "bold",
                "font_style": "normal"
            },
            "widget_title_caption_font_size": "16",
            "column_style": "style2",
            "primary_color": "#3B82F6",
            "secondary_color": "#FFFFFF",
            "font": null,
            "toggle_color": "#3B82F6",
            "column_corner_radius": 12,
            "carousel_arrow_background_color": "#000",
            "carousel_arrow_color": "#FF5733",
            "carousel_arrow_background_color_on_hover": "#333",
            "carousel_arrow_color_on_hover": "#FFC300",
            "carousel_arrow_size": 24,
            "head_text_color": "#1F2937",
            "head_background_color": "#F3F4F6",
            "head_features_font_size": 16,
            "head_title_font": {
                "id": 1,
                "font_size": 24,
                "font_weight": "bold",
                "font_style": "normal"
            },
            "show_title": true,
            "title_alignment": "center",
            "title_text_color": "#222",
            "title_caption_color": "#555",
            "title_font": {
                "id": 1,
                "font_size": 24,
                "font_weight": "600",
                "font_style": "italic"
            },
            "title_caption_font": {
                "id": 1,
                "font_size": 18,
                "font_weight": "bold",
                "font_style": "italic"
            },
            "show_features": true,
            "features_style": "divided",
            "features_align": "center",
            "features_font_size": 18,
            "features_icon_color": "#3B82F6",
            "features_text_color": "#333",
            "show_price": true,
            "price_caption_color": "#4B5563",
            "discount_text_color": null,
            "discount_font": {
                "id": 1,
                "font_size": 24,
                "font_weight": "bold",
                "font_style": "normal",
                "text_transform": null
            },
            "old_price_color": null,
            "old_price_font": {
                "id": 1,
                "font_size": 24,
                "font_weight": "bold",
                "font_style": "normal"
            },
            "discount": {
                "id": 1,
                "enabled": true,
                "custom_label": "15% OFF"
            },
            "price_caption_font": {
                "id": 1,
                "font_size": 16,
                "font_weight": "bold",
                "font_style": "italic"
            },
            "price_align": "center",
            "price_color": "#1F2937",
            "price_font": {
                "id": 1,
                "font_size": 22,
                "font_weight": "bold",
                "font_style": "normal"
            },
            "show_picture": true,
            "picture_aspect_ratio": "0.500000",
            "show_button": true,
            "button": {
                "id": 1,
                "text": "Choose Plan",
                "mode": "filled",
                "color": "#3B82F6",
                "label_color": "#FFFFFF",
                "caption_color": "#6B7280",
                "border_radius": 10,
                "horizontal_padding": 20,
                "vertical_padding": 10,
                "full_width": true,
                "size": 14,
                "font": {
                    "id": 1,
                    "font_size": 16,
                    "font_weight": "bold"
                }
            },
            "button_alignment": "center",
            "highlight_style_type": "ribbon",
            "highlight_background_color": "#3B82F6",
            "highlight_text_color": "#FFFFFF",
            "default_table": null
        },
        "created_at": "2025-02-08T12:49:21.340570Z"
    }







createRoot(document.getElementById("root")!).render(
   <StrictMode>
     <App data={data} />
   </StrictMode>
 );
