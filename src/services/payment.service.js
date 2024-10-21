

const Razorpay = require("razorpay");

const razorpay = new Razorpay({
  key_id: "rzp_test_OHocZsZ2Gi3LDY",
  key_secret: "qBYM2EsFCDH7TRYyIaqY3d9U",
});

module.exports = {
  async generatePaymentLink(order, user) {
    try {
      
      console.log({ user, order });

      const options = {
         amount: Math.round(order.totalAmount * 100), // amount in paise
      
        currency: "INR",
        receipt: `receipt_${order._id}`,
        payment_capture: 1, // Auto-capture payment
        notes: {
          description: "Pizza Burger",
        },
      };

      const payment = await razorpay.orders.create(options);

      console.log("Payment Order:", payment);

      // Generate a payment link 
      const paymentLinkOptions = {
         amount: Math.round(order.totalAmount * 100), 
        
        currency: "INR",
        accept_partial: false,
        customer: {
          contact: user.customerPhone, // customer phone
          email: user.customerEmail, // customer email
        },
        notify: {
          sms: true,
          email: true,
        },
        reminder_enable: true,
        notes: {
          description: "Pizza Burger",
        },
        callback_url: `http://localhost:3000/payment/success/${order._id}`,
        callback_method: "get",
      };

      // Check amount is correctly passed
      console.log("Payment Link Options:", paymentLinkOptions);

      const paymentLink = await razorpay.paymentLink.create(paymentLinkOptions);

      console.log("Payment Link:", paymentLink);

      return { payment_url: paymentLink.short_url };
    } catch (error) {
      console.error("Failed to create order:", error);
      throw new Error(
        `Failed to generate payment link: ${error.message || error}`
      );
    }
  },
};
