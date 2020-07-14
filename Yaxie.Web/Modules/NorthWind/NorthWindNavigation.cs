﻿using Serenity.Navigation;
using MyPages = Yaxie.NorthWind.Pages;

[assembly: NavigationLink(int.MaxValue, "NorthWind/Customers", typeof(MyPages.CustomersController), icon: null)]
[assembly: NavigationLink(int.MaxValue, "NorthWind/Products", typeof(MyPages.ProductsController), icon: null)]
[assembly: NavigationLink(int.MaxValue, "NorthWind/Orders", typeof(MyPages.OrdersController), icon: null)]
[assembly: NavigationLink(int.MaxValue, "NorthWind/Invoices", typeof(MyPages.InvoicesController), icon: null)]
[assembly: NavigationLink(int.MaxValue, "NorthWind/Order Details", typeof(MyPages.OrderDetailsController), icon: null)]
[assembly: NavigationLink(int.MaxValue, "NorthWind/Categories", typeof(MyPages.CategoriesController), icon: null)]
[assembly: NavigationLink(int.MaxValue, "NorthWind/Category Lang", typeof(MyPages.CategoryLangController), icon: null)]
[assembly: NavigationLink(int.MaxValue, "NorthWind/Customer Details", typeof(MyPages.CustomerDetailsController), icon: null)]
[assembly: NavigationLink(int.MaxValue, "NorthWind/Employees", typeof(MyPages.EmployeesController), icon: null)]
[assembly: NavigationLink(int.MaxValue, "NorthWind/Employee Territories", typeof(MyPages.EmployeeTerritoriesController), icon: null)]
[assembly: NavigationLink(int.MaxValue, "NorthWind/Notes", typeof(MyPages.NotesController), icon: null)]
[assembly: NavigationLink(int.MaxValue, "NorthWind/Product Lang", typeof(MyPages.ProductLangController), icon: null)]
[assembly: NavigationLink(int.MaxValue, "NorthWind/Productsby Category", typeof(MyPages.ProductsbyCategoryController), icon: null)]
[assembly: NavigationLink(int.MaxValue, "NorthWind/Region", typeof(MyPages.RegionController), icon: null)]
[assembly: NavigationLink(int.MaxValue, "NorthWind/Shippers", typeof(MyPages.ShippersController), icon: null)]
[assembly: NavigationLink(int.MaxValue, "NorthWind/Suppliers", typeof(MyPages.SuppliersController), icon: null)]
[assembly: NavigationLink(int.MaxValue, "NorthWind/Territories", typeof(MyPages.TerritoriesController), icon: null)]