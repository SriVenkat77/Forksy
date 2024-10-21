const Address = require("../models/adress.model");
const Order = require("../models/order.model");
const OrderItem = require("../models/orderItem.model");
const Restaurant = require("../models/restaurant.model");
const cartService = require("./cart.service");
const paymentService = require("./payment.service");

module.exports = {
  // async createOrder(order, user) {
  //   try {
  //     const address = order.deliveryAddress;
  //     let savedAddress;
  //     if (address?._id) {
  //       const isAddressExist = await Address.findById(address?._id);
  //       if (isAddressExist) {
  //         savedAddress = isAddressExist;
  //       } else {
  //         const shippingAddress = new Address(order.deliveryAddress);
  //         savedAddress = await shippingAddress.save();
  //       }
  //     } else {
  //       // If no _id, treat it as a new address and save it
  //       const shippingAddress = new Address(order.deliveryAddress);
  //       savedAddress = await shippingAddress.save();
  //     }
  //     console.log({ user });

  //     if (!user.addresses.includes(savedAddress?._id)) {
  //       user.addresses.push(savedAddress._id);
  //       await user.save();
  //     }

  //     const restaurant = await Restaurant.findById(order.restaurantId);
  //     if (!restaurant) {
  //       throw new Error(`Restaurant not found with ID ${order.restaurantId}`);
  //     }

  //     const cart = await cartService.findCartByUserId(user._id);

  //     if (!cart) {
  //       throw new Error("cart not found");
  //     }
  //     const orderItems = [];

  //     for (const cartItem of cart.items) {
  //       const orderItem = new OrderItem({
  //         food: cartItem.food,
  //         ingredients: cartItem.ingredients,
  //         quantity: cartItem.quantity,
  //         totalPrice: cartItem.food.price * cartItem.quantity,
  //       });
  //       const savedOrderItem = await orderItem.save();
  //       orderItems.push(savedOrderItem._id);
  //     }

  //     const totalPrice = await cartService.calculateCartTotals(cart);

  //     const createdOrder = new Order({
  //       customer: user._id,
  //       deliveryAddress: savedAddress._id,
  //       createdAt: new Date(),
  //       orderStatus: "PENDING",
  //       totalAmount: totalPrice,
  //       restaurant: restaurant._id,
  //       items: orderItems,
  //     });
  //     const savedOrder = await createdOrder.save();

  //     restaurant.orders.push(savedOrder._id);
  //     await restaurant.save();

  //     // TODO: Update customerPhone
  //     const prepareUser = {
  //       customerEmail: user.email,
  //       customerPhone: "9876543210",
  //     };

  //     const paymentResponse = await paymentService.generatePaymentLink(
  //       savedOrder?._doc,
  //       prepareUser
  //     );
  //     console.log({ paymentResponse });
  //     return paymentResponse;
  //     // return savedOrder;
  //   } catch (error) {
  //     throw new Error(`Failed to create order: ${error.message}`);
  //   }
  // },

  // async createOrder(order, user) {
  //   try {
  //     const address = order.deliveryAddress;
  //     let savedAddress;

  //     // Check if the address exists for the user, and if not, save it as a new address.

  //     console.log({ address });

  //     if (address?._id) {
  //       // Fetch the address from the database and ensure it belongs to the user.
  //       const isAddressExist = await Address.findById(address?._id);
  //       console.log({ isAddressExist });

  //       if (isAddressExist) {
  //         savedAddress = isAddressExist;
  //       } else {
  //         // If address not found or doesn't belong to user, treat it as a new address
  //         const shippingAddress = new Address({
  //           ...order.deliveryAddress,
  //           r,
  //         });
  //         savedAddress = await shippingAddress.save();
  //       }
  //     } else {
  //       // If no _id, treat it as a new address and associate it with the user
  //       const shippingAddress = new Address({
  //         ...order.deliveryAddress,
  //       });
  //       savedAddress = await shippingAddress.save();
  //       console.log(`First`);
  //     }

  //     console.log({ user });

  //     // Add address to user's addresses if it's not already present
  //     const isAddressAlreadyAdded = user.addresses.some(
  //       (address) => address?._id.toString() === savedAddress?._id.toString()
  //     );

  //     console.log({ addresses: user.addresses });

  //     if (!isAddressAlreadyAdded) {
  //       console.log("address not present in user");

  //       user.addresses.push(savedAddress._id);
  //       await user.save();
  //     }

  //     const restaurant = await Restaurant.findById(order.restaurantId);
  //     if (!restaurant) {
  //       throw new Error(`Restaurant not found with ID ${order.restaurantId}`);
  //     }

  //     const cart = await cartService.findCartByUserId(user._id);
  //     if (!cart) {
  //       throw new Error("cart not found");
  //     }

  //     // Create order items from cart
  //     const orderItems = [];
  //     for (const cartItem of cart.items) {
  //       const orderItem = new OrderItem({
  //         food: cartItem.food,
  //         ingredients: cartItem.ingredients,
  //         quantity: cartItem.quantity,
  //         totalPrice: cartItem.food.price * cartItem.quantity,
  //       });
  //       const savedOrderItem = await orderItem.save();
  //       orderItems.push(savedOrderItem._id);
  //     }

  //     // Calculate total price of the order
  //     const totalPrice = await cartService.calculateCartTotals(cart);

  //     // Create and save the new order
  //     const createdOrder = new Order({
  //       customer: user._id,
  //       deliveryAddress: savedAddress._id,
  //       createdAt: new Date(),
  //       orderStatus: "PENDING",
  //       totalAmount: totalPrice,
  //       restaurant: restaurant._id,
  //       items: orderItems,
  //     });
  //     const savedOrder = await createdOrder.save();

  //     // Associate the order with the restaurant and save the restaurant
  //     restaurant.orders.push(savedOrder._id);
  //     await restaurant.save();

  //     // Prepare user data for payment (TODO: Update customerPhone with actual data)
  //     const prepareUser = {
  //       customerEmail: user.email,
  //       customerPhone: user.phone || "9876543210", // Use real phone if available
  //     };

  //     // Generate the payment link
  //     const paymentResponse = await paymentService.generatePaymentLink(
  //       savedOrder._doc,
  //       prepareUser
  //     );

  //     console.log({ paymentResponse });
  //     return paymentResponse;
  //   } catch (error) {
  //     throw new Error(`Failed to create order: ${error.message}`);
  //   }
  // },

  async createOrder(order, user) {
    try {
      const address = order.deliveryAddress;
      let savedAddress;
      if (address?._id) {
        const isAddressExist = await Address.findById(address?._id);
        if (isAddressExist) {
          savedAddress = isAddressExist;
        } else {
          const shippingAddress = new Address(order.deliveryAddress);
          savedAddress = await shippingAddress.save();
        }
      } else {
        const shippingAddress = new Address(order.deliveryAddress);
        savedAddress = await shippingAddress.save();
      }
      console.log({ user });

      // if (!user.addresses.includes(savedAddress?._id)) {
      //   user.addresses.push(savedAddress._id);
      //   await user.save();
      // }

      // Add address to user's addresses if it's not already present
      const isAddressAlreadyAdded = user.addresses.some(
        (address) => address?._id.toString() === savedAddress?._id.toString()
      );

      console.log({ addresses: user.addresses });

      if (!isAddressAlreadyAdded) {
        console.log("address not present in user");

        user.addresses.push(savedAddress._id);
        await user.save();
      }

      const restaurant = await Restaurant.findById(order.restaurantId);
      if (!restaurant) {
        throw new Error(`Restaurant not found with ID ${order.restaurantId}`);
      }

      const cart = await cartService.findCartByUserId(user._id);

      if (!cart) {
        throw new Error("cart not found");
      }
      const orderItems = [];

      for (const cartItem of cart.items) {
        const orderItem = new OrderItem({
          food: cartItem.food,
          ingredients: cartItem.ingredients,
          quantity: cartItem.quantity,
          totalPrice: cartItem.food.price * cartItem.quantity,
        });
        const savedOrderItem = await orderItem.save();
        orderItems.push(savedOrderItem._id);
      }

      const totalPrice = await cartService.calculateCartTotals(cart);

      const createdOrder = new Order({
        customer: user._id,
        deliveryAddress: savedAddress._id,
        createdAt: new Date(),
        orderStatus: "PENDING",
        totalAmount: totalPrice,
        restaurant: restaurant._id,
        items: orderItems,
      });
      const savedOrder = await createdOrder.save();
      console.log({ savedOrder });

      restaurant.orders.push(savedOrder._id);
      const savedRestaurant = await restaurant.save();
      console.log({ savedRestaurant });

      // TODO: Update customerPhone
      const prepareUser = {
        customerEmail: user.email,
        customerPhone: "9876543210",
      };

      const paymentResponse = await paymentService.generatePaymentLink(
        savedOrder?._doc,
        prepareUser
      );
      console.log({ paymentResponse });
      return paymentResponse;
      // return savedOrder;
    } catch (error) {
      throw new Error(`Failed to create order: ${error.message}`);
    }
  },

  async cancelOrder(orderId) {
    try {
      await Order.findByIdAndDelete(orderId);
    } catch (error) {
      throw new Error(
        `Failed to cancel order with ID ${orderId}: ${error.message}`
      );
    }
  },

  async findOrderById(orderId) {
    try {
      const order = await Order.findById(orderId);
      if (!order) {
        throw new Error(`Order not found with ID ${orderId}`);
      }
      return order;
    } catch (error) {
      throw new Error(
        `Failed to find order with ID ${orderId}: ${error.message}`
      );
    }
  },

  async getUserOrders(userId) {
    try {
      const orders = await Order.find({ customer: userId }).populate({
        path: "items",
        populate: { path: "food" },
      });
      return orders;
    } catch (error) {
      throw new Error(`Failed to get user orders: ${error.message}`);
    }
  },

  async getOrdersOfRestaurant(restaurantId, orderStatus) {
    try {
      let orders = await Order.find({ restaurant: restaurantId }).populate([
        {
          path: "items",
          populate: { path: "food" },
        },
        "customer",
      ]);
      if (orderStatus) {
        orders = orders.filter((order) => order.orderStatus === orderStatus);
      }
      return orders;
    } catch (error) {
      throw new Error(
        `Failed to get orders of restaurant with ID ${restaurantId}: ${error.message}`
      );
    }
  },

  async updateOrder(orderId, orderStatus) {
    try {
      const validStatuses = [
        "OUT_FOR_DELIVERY",
        "DELIVERED",
        "COMPLETED",
        "PENDING",
      ];
      if (!validStatuses.includes(orderStatus)) {
        throw new Error("Please select a valid order status");
      }

      const order = await Order.findById(orderId).populate({
        path: "items",
        populate: { path: "food" },
      });
      if (!order) {
        throw new Error(`Order not found with ID ${orderId}`);
      }

      order.orderStatus = orderStatus;
      await order.save();

      // Send notification
      // await NotificationService.sendOrderStatusNotification(order);

      return order;
    } catch (error) {
      throw new Error(
        `Failed to update order with ID ${orderId}: ${error.message}`
      );
    }
  },
};
