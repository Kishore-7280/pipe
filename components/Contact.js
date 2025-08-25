function Contact() {
  try {
    return (
      <section id="contact" className="py-20 bg-[var(--bg-light)]" data-name="contact" data-file="components/Contact.js">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 fade-in">
            <h2 className="text-4xl font-bold text-[var(--text-dark)] mb-4">
              Contact Us
            </h2>
            <p className="text-lg text-[var(--text-light)] max-w-2xl mx-auto">
              Get in touch with our team for inquiries, quotes, or technical support
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="slide-in-left">
              <div className="bg-white rounded-xl shadow-lg p-8">
                <h3 className="text-2xl font-bold text-[var(--text-dark)] mb-8">Get In Touch</h3>
                
                <div className="space-y-6">
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-[var(--primary-color)] rounded-lg flex items-center justify-center mr-4">
                      <div className="icon-mail text-xl text-white"></div>
                    </div>
                    <div>
                      <div className="font-semibold text-[var(--text-dark)]">Email</div>
                      <div className="text-[var(--text-light)]">info@pipemaster.com</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-[var(--secondary-color)] rounded-lg flex items-center justify-center mr-4">
                      <div className="icon-phone text-xl text-white"></div>
                    </div>
                    <div>
                      <div className="font-semibold text-[var(--text-dark)]">Phone</div>
                      <div className="text-[var(--text-light)]">+1 (555) 123-4567</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-[var(--accent-color)] rounded-lg flex items-center justify-center mr-4">
                      <div className="icon-map-pin text-xl text-white"></div>
                    </div>
                    <div>
                      <div className="font-semibold text-[var(--text-dark)]">Address</div>
                      <div className="text-[var(--text-light)]">
                        123 Industrial Boulevard<br />
                        Manufacturing District<br />
                        New York, NY 10001
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-8 border-t">
                  <h4 className="font-semibold text-[var(--text-dark)] mb-4">Business Hours</h4>
                  <div className="space-y-2 text-[var(--text-light)]">
                    <div className="flex justify-between">
                      <span>Monday - Friday:</span>
                      <span>8:00 AM - 6:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Saturday:</span>
                      <span>9:00 AM - 4:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Sunday:</span>
                      <span>Closed</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Google Maps */}
            <div className="slide-in-right">
              <div className="bg-white rounded-xl shadow-lg overflow-hidden h-full">
                <div className="p-6 border-b">
                  <h3 className="text-xl font-bold text-[var(--text-dark)]">Our Location</h3>
                </div>
                <div className="h-96">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.9476519598093!2d-73.99225688459394!3d40.74844097932881!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b3117469%3A0xd134e199a405a163!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1642678901234!5m2!1sen!2sus"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="PipeMaster Industries Location"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error('Contact component error:', error);
    return null;
  }
}