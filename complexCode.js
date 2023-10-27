/* 
* Filename: complexCode.js 
* Description: This code demonstrates a complex implementation of a customer management system in JavaScript.
* It includes various functionalities like adding and searching customers, managing orders, and generating reports.
*/

// Customer class
class Customer {
  constructor(id, name, email, address) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.address = address;
    this.orders = [];
  }

  addOrder(order) {
    this.orders.push(order);
  }
}

// Order class
class Order {
  constructor(id, date, items) {
    this.id = id;
    this.date = date;
    this.items = items;
  }
}

// Customer Management System class
class CustomerManagementSystem {
  constructor() {
    this.customers = [];
  }

  addCustomer(customer) {
    this.customers.push(customer);
  }

  searchCustomerByEmail(email) {
    return this.customers.find((customer) => customer.email === email);
  }

  generateReport() {
    let report = "CUSTOMER REPORT\n";

    this.customers.forEach((customer) => {
      report += `\nCustomer ID: ${customer.id}`;
      report += `\nName: ${customer.name}`;
      report += `\nEmail: ${customer.email}`;
      report += `\nAddress: ${customer.address}`;

      report += `\nOrders:`;
      customer.orders.forEach((order) => {
        report += `\n  Order ID: ${order.id}`;
        report += `\n  Date: ${order.date}`;
        report += `\n  Items: ${order.items.join(", ")}`;
        report += "\n";
      });

      report += "\n-------------------------\n";
    });

    return report;
  }
}

// Usage example

const cms = new CustomerManagementSystem();

// Adding customers
const customer1 = new Customer(1, "John Doe", "john.doe@example.com", "123 Main St");
const customer2 = new Customer(2, "Jane Smith", "jane.smith@example.com", "456 Broad Ave");
cms.addCustomer(customer1);
cms.addCustomer(customer2);

// Adding orders
const order1 = new Order(1, "2021-01-01", ["Product A", "Product B"]);
const order2 = new Order(2, "2021-02-01", ["Product C"]);
customer1.addOrder(order1);
customer2.addOrder(order2);

// Searching for a customer
const searchedCustomer = cms.searchCustomerByEmail("jane.smith@example.com");

if (searchedCustomer) {
  console.log("Customer found:");
  console.log(searchedCustomer);
} else {
  console.log("Customer not found.");
}

// Generating a report
const report = cms.generateReport();
console.log(report);
