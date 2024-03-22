import frappe
import os
from frappe.utils.pdf import get_pdf

@frappe.whitelist(allow_guest=True)
def generate_invoice():
    cart = {
        'Samsung Galaxy S20': 10,
        'iPhone 13': 80
    }

    html = '<h1>Invoice from Star Electronics e-Store!</h1>'

    # Add items to PDF HTML
    html += '<ol>'
    for item, qty in cart.items():
        html += f'<li>{item} - {qty}</li>'
    html += '</ol>'

    pdf_content = get_pdf(html)

    
    frappe.response.filename = "test.pdf"
    frappe.response.filecontent = pdf_content
    frappe.response.type = "download"
    frappe.response.display_content_as = "attachment"
    