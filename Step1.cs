using System;
using FluentMigrator;
using FluentMigrator.Runner.Extensions;

namespace Yaxie
{
	[Migration(1)]
	public class Step1 : FluentMigrator.Migration
	{
		public override void Up()
		{
			#region Create Schemas
			#endregion

			#region Create Tables
			Create.Table("Categories").InSchema("dbo")
				.WithColumn("CategoryID").AsInt32().Identity().NotNullable().PrimaryKey()
				.WithColumn("CategoryName").AsString(15).NotNullable()
				.WithColumn("Description").AsCustom("NTEXT").Nullable()
				.WithColumn("Picture").AsCustom("IMAGE").Nullable();

			Create.Table("CategoryLang").InSchema("dbo")
				.WithColumn("ID").AsInt32().Identity().NotNullable().PrimaryKey()
				.WithColumn("CategoryID").AsInt32().NotNullable()
				.WithColumn("LanguageID").AsInt32().NotNullable()
				.WithColumn("CategoryName").AsString(15).Nullable()
				.WithColumn("Description").AsString(Int32.MaxValue).Nullable();

			Create.Table("CustomerCustomerDemo").InSchema("dbo")
				.WithColumn("ID").AsInt32().Identity().NotNullable()
				.WithColumn("CustomerID").AsString(5).NotNullable().PrimaryKey()
				.WithColumn("CustomerTypeID").AsString(10).NotNullable().PrimaryKey();

			Create.Table("CustomerDemographics").InSchema("dbo")
				.WithColumn("ID").AsInt32().Identity().NotNullable()
				.WithColumn("CustomerTypeID").AsString(10).NotNullable().PrimaryKey()
				.WithColumn("CustomerDesc").AsCustom("NTEXT").Nullable();

			Create.Table("CustomerDetails").InSchema("dbo")
				.WithColumn("ID").AsInt32().NotNullable().PrimaryKey()
				.WithColumn("LastContactDate").AsDateTime().Nullable()
				.WithColumn("LastContactedBy").AsInt32().Nullable()
				.WithColumn("Email").AsString(100).Nullable()
				.WithColumn("SendBulletin").AsBoolean().NotNullable();

			Create.Table("CustomerRepresentatives").InSchema("dbo")
				.WithColumn("RepresentativeID").AsInt32().Identity().NotNullable().PrimaryKey()
				.WithColumn("CustomerID").AsInt32().NotNullable()
				.WithColumn("EmployeeID").AsInt32().NotNullable();

			Create.Table("Customers").InSchema("dbo")
				.WithColumn("CustomerID").AsString(5).NotNullable().PrimaryKey()
				.WithColumn("CompanyName").AsString(40).NotNullable()
				.WithColumn("ContactName").AsString(30).Nullable()
				.WithColumn("ContactTitle").AsString(30).Nullable()
				.WithColumn("Address").AsString(60).Nullable()
				.WithColumn("City").AsString(15).Nullable()
				.WithColumn("Region").AsString(15).Nullable()
				.WithColumn("PostalCode").AsString(10).Nullable()
				.WithColumn("Country").AsString(15).Nullable()
				.WithColumn("Phone").AsString(24).Nullable()
				.WithColumn("Fax").AsString(24).Nullable()
				.WithColumn("ID").AsInt32().Identity().NotNullable();

			Create.Table("DragDropSample").InSchema("dbo")
				.WithColumn("Id").AsInt32().Identity().NotNullable().PrimaryKey()
				.WithColumn("ParentId").AsInt32().Nullable()
				.WithColumn("Title").AsString(100).NotNullable();

			Create.Table("Employees").InSchema("dbo")
				.WithColumn("EmployeeID").AsInt32().Identity().NotNullable().PrimaryKey()
				.WithColumn("LastName").AsString(20).NotNullable()
				.WithColumn("FirstName").AsString(10).NotNullable()
				.WithColumn("Title").AsString(30).Nullable()
				.WithColumn("TitleOfCourtesy").AsString(25).Nullable()
				.WithColumn("BirthDate").AsDateTime().Nullable()
				.WithColumn("HireDate").AsDateTime().Nullable()
				.WithColumn("Address").AsString(60).Nullable()
				.WithColumn("City").AsString(15).Nullable()
				.WithColumn("Region").AsString(15).Nullable()
				.WithColumn("PostalCode").AsString(10).Nullable()
				.WithColumn("Country").AsString(15).Nullable()
				.WithColumn("HomePhone").AsString(24).Nullable()
				.WithColumn("Extension").AsString(4).Nullable()
				.WithColumn("Photo").AsCustom("IMAGE").Nullable()
				.WithColumn("Notes").AsCustom("NTEXT").Nullable()
				.WithColumn("ReportsTo").AsInt32().Nullable()
				.WithColumn("PhotoPath").AsString(255).Nullable();

			Create.Table("EmployeeTerritories").InSchema("dbo")
				.WithColumn("EmployeeID").AsInt32().NotNullable().PrimaryKey()
				.WithColumn("TerritoryID").AsString(20).NotNullable().PrimaryKey();

			Create.Table("Notes").InSchema("dbo")
				.WithColumn("NoteID").AsInt64().Identity().NotNullable().PrimaryKey()
				.WithColumn("EntityType").AsString(100).NotNullable()
				.WithColumn("EntityID").AsInt64().NotNullable()
				.WithColumn("Text").AsString(Int32.MaxValue).NotNullable()
				.WithColumn("InsertUserId").AsInt32().NotNullable()
				.WithColumn("InsertDate").AsDateTime().NotNullable();

			Create.Table("Order Details").InSchema("dbo")
				.WithColumn("OrderID").AsInt32().NotNullable().PrimaryKey()
				.WithColumn("ProductID").AsInt32().NotNullable().PrimaryKey()
				.WithColumn("UnitPrice").AsCurrency().NotNullable()
				.WithColumn("Quantity").AsInt16().NotNullable()
				.WithColumn("Discount").AsFloat().NotNullable()
				.WithColumn("DetailID").AsInt32().Identity().NotNullable();

			Create.Table("Orders").InSchema("dbo")
				.WithColumn("OrderID").AsInt32().Identity().NotNullable().PrimaryKey()
				.WithColumn("CustomerID").AsString(5).Nullable()
				.WithColumn("EmployeeID").AsInt32().Nullable()
				.WithColumn("OrderDate").AsDateTime().Nullable()
				.WithColumn("RequiredDate").AsDateTime().Nullable()
				.WithColumn("ShippedDate").AsDateTime().Nullable()
				.WithColumn("ShipVia").AsInt32().Nullable()
				.WithColumn("Freight").AsCurrency().Nullable()
				.WithColumn("ShipName").AsString(40).Nullable()
				.WithColumn("ShipAddress").AsString(60).Nullable()
				.WithColumn("ShipCity").AsString(15).Nullable()
				.WithColumn("ShipRegion").AsString(15).Nullable()
				.WithColumn("ShipPostalCode").AsString(10).Nullable()
				.WithColumn("ShipCountry").AsString(15).Nullable();

			Create.Table("ProductLang").InSchema("dbo")
				.WithColumn("ID").AsInt32().Identity().NotNullable().PrimaryKey()
				.WithColumn("ProductID").AsInt32().NotNullable()
				.WithColumn("LanguageID").AsInt32().NotNullable()
				.WithColumn("ProductName").AsString(40).Nullable();

			Create.Table("ProductLog").InSchema("dbo")
				.WithColumn("ProductLogID").AsInt64().Identity().NotNullable().PrimaryKey()
				.WithColumn("OperationType").AsInt16().NotNullable()
				.WithColumn("ChangingUserId").AsInt32().Nullable()
				.WithColumn("ValidFrom").AsDateTime().NotNullable()
				.WithColumn("ValidUntil").AsDateTime().NotNullable()
				.WithColumn("ProductID").AsInt32().NotNullable()
				.WithColumn("ProductName").AsString(40).Nullable()
				.WithColumn("ProductImage").AsString(100).Nullable()
				.WithColumn("Discontinued").AsBoolean().Nullable()
				.WithColumn("SupplierID").AsInt32().Nullable()
				.WithColumn("CategoryID").AsInt32().Nullable()
				.WithColumn("QuantityPerUnit").AsString(20).Nullable()
				.WithColumn("UnitPrice").AsCurrency().Nullable()
				.WithColumn("UnitsInStock").AsInt16().Nullable()
				.WithColumn("UnitsOnOrder").AsInt16().Nullable()
				.WithColumn("ReorderLevel").AsInt16().Nullable();

			Create.Table("Products").InSchema("dbo")
				.WithColumn("ProductID").AsInt32().Identity().NotNullable().PrimaryKey()
				.WithColumn("ProductName").AsString(40).NotNullable()
				.WithColumn("SupplierID").AsInt32().Nullable()
				.WithColumn("CategoryID").AsInt32().Nullable()
				.WithColumn("QuantityPerUnit").AsString(20).Nullable()
				.WithColumn("UnitPrice").AsCurrency().Nullable()
				.WithColumn("UnitsInStock").AsInt16().Nullable()
				.WithColumn("UnitsOnOrder").AsInt16().Nullable()
				.WithColumn("ReorderLevel").AsInt16().Nullable()
				.WithColumn("Discontinued").AsBoolean().NotNullable()
				.WithColumn("ProductImage").AsString(100).Nullable();

			Create.Table("Region").InSchema("dbo")
				.WithColumn("RegionID").AsInt32().NotNullable().PrimaryKey()
				.WithColumn("RegionDescription").AsString(50).NotNullable();

			Create.Table("Shippers").InSchema("dbo")
				.WithColumn("ShipperID").AsInt32().Identity().NotNullable().PrimaryKey()
				.WithColumn("CompanyName").AsString(40).NotNullable()
				.WithColumn("Phone").AsString(24).Nullable();

			Create.Table("Suppliers").InSchema("dbo")
				.WithColumn("SupplierID").AsInt32().Identity().NotNullable().PrimaryKey()
				.WithColumn("CompanyName").AsString(40).NotNullable()
				.WithColumn("ContactName").AsString(30).Nullable()
				.WithColumn("ContactTitle").AsString(30).Nullable()
				.WithColumn("Address").AsString(60).Nullable()
				.WithColumn("City").AsString(15).Nullable()
				.WithColumn("Region").AsString(15).Nullable()
				.WithColumn("PostalCode").AsString(10).Nullable()
				.WithColumn("Country").AsString(15).Nullable()
				.WithColumn("Phone").AsString(24).Nullable()
				.WithColumn("Fax").AsString(24).Nullable()
				.WithColumn("HomePage").AsCustom("NTEXT").Nullable();

			Create.Table("Territories").InSchema("dbo")
				.WithColumn("TerritoryID").AsString(20).NotNullable().PrimaryKey()
				.WithColumn("TerritoryDescription").AsString(50).NotNullable()
				.WithColumn("RegionID").AsInt32().NotNullable()
				.WithColumn("ID").AsInt32().Identity().NotNullable();
			#endregion

			#region Create Foreign Keys
			Create.ForeignKey("FK_CustomerCustomerDemo")
				.FromTable("CustomerCustomerDemo").InSchema("dbo").ForeignColumns("CustomerTypeID")
				.ToTable("CustomerDemographics").InSchema("dbo").PrimaryColumns("CustomerTypeID");

			Create.ForeignKey("FK_CustomerCustomerDemo_Customers")
				.FromTable("CustomerCustomerDemo").InSchema("dbo").ForeignColumns("CustomerID")
				.ToTable("Customers").InSchema("dbo").PrimaryColumns("CustomerID");

			Create.ForeignKey("FK_CustomerDetails_LastContactedBy")
				.FromTable("CustomerDetails").InSchema("dbo").ForeignColumns("LastContactedBy")
				.ToTable("Employees").InSchema("dbo").PrimaryColumns("EmployeeID");

			Create.ForeignKey("FK_Employees_Employees")
				.FromTable("Employees").InSchema("dbo").ForeignColumns("ReportsTo")
				.ToTable("Employees").InSchema("dbo").PrimaryColumns("EmployeeID");

			Create.ForeignKey("FK_EmployeeTerritories_Employees")
				.FromTable("EmployeeTerritories").InSchema("dbo").ForeignColumns("EmployeeID")
				.ToTable("Employees").InSchema("dbo").PrimaryColumns("EmployeeID");

			Create.ForeignKey("FK_EmployeeTerritories_Territories")
				.FromTable("EmployeeTerritories").InSchema("dbo").ForeignColumns("TerritoryID")
				.ToTable("Territories").InSchema("dbo").PrimaryColumns("TerritoryID");

			Create.ForeignKey("FK_Order_Details_Orders")
				.FromTable("Order Details").InSchema("dbo").ForeignColumns("OrderID")
				.ToTable("Orders").InSchema("dbo").PrimaryColumns("OrderID");

			Create.ForeignKey("FK_Order_Details_Products")
				.FromTable("Order Details").InSchema("dbo").ForeignColumns("ProductID")
				.ToTable("Products").InSchema("dbo").PrimaryColumns("ProductID");

			Create.ForeignKey("FK_Orders_Customers")
				.FromTable("Orders").InSchema("dbo").ForeignColumns("CustomerID")
				.ToTable("Customers").InSchema("dbo").PrimaryColumns("CustomerID");

			Create.ForeignKey("FK_Orders_Employees")
				.FromTable("Orders").InSchema("dbo").ForeignColumns("EmployeeID")
				.ToTable("Employees").InSchema("dbo").PrimaryColumns("EmployeeID");

			Create.ForeignKey("FK_Orders_Shippers")
				.FromTable("Orders").InSchema("dbo").ForeignColumns("ShipVia")
				.ToTable("Shippers").InSchema("dbo").PrimaryColumns("ShipperID");

			Create.ForeignKey("FK_Products_Categories")
				.FromTable("Products").InSchema("dbo").ForeignColumns("CategoryID")
				.ToTable("Categories").InSchema("dbo").PrimaryColumns("CategoryID");

			Create.ForeignKey("FK_Products_Suppliers")
				.FromTable("Products").InSchema("dbo").ForeignColumns("SupplierID")
				.ToTable("Suppliers").InSchema("dbo").PrimaryColumns("SupplierID");

			Create.ForeignKey("FK_Territories_Region")
				.FromTable("Territories").InSchema("dbo").ForeignColumns("RegionID")
				.ToTable("Region").InSchema("dbo").PrimaryColumns("RegionID");
			#endregion

			#region Create Unique Constraints
			#endregion

			#region Create Indexes
			Create.Index("CategoryName")
				.OnTable("Categories").InSchema("dbo")
				.OnColumn("CategoryName").Ascending()
				.WithOptions()
				.NonClustered();

			Create.Index("City")
				.OnTable("Customers").InSchema("dbo")
				.OnColumn("City").Ascending()
				.WithOptions()
				.NonClustered();

			Create.Index("CompanyName")
				.OnTable("Customers").InSchema("dbo")
				.OnColumn("CompanyName").Ascending()
				.WithOptions()
				.NonClustered();

			Create.Index("PostalCode")
				.OnTable("Customers").InSchema("dbo")
				.OnColumn("PostalCode").Ascending()
				.WithOptions()
				.NonClustered();

			Create.Index("Region")
				.OnTable("Customers").InSchema("dbo")
				.OnColumn("Region").Ascending()
				.WithOptions()
				.NonClustered();

			Create.Index("LastName")
				.OnTable("Employees").InSchema("dbo")
				.OnColumn("LastName").Ascending()
				.WithOptions()
				.NonClustered();

			Create.Index("PostalCode")
				.OnTable("Employees").InSchema("dbo")
				.OnColumn("PostalCode").Ascending()
				.WithOptions()
				.NonClustered();

			Create.Index("OrderID")
				.OnTable("Order Details").InSchema("dbo")
				.OnColumn("OrderID").Ascending()
				.WithOptions()
				.NonClustered();

			Create.Index("OrdersOrder_Details")
				.OnTable("Order Details").InSchema("dbo")
				.OnColumn("OrderID").Ascending()
				.WithOptions()
				.NonClustered();

			Create.Index("ProductID")
				.OnTable("Order Details").InSchema("dbo")
				.OnColumn("ProductID").Ascending()
				.WithOptions()
				.NonClustered();

			Create.Index("ProductsOrder_Details")
				.OnTable("Order Details").InSchema("dbo")
				.OnColumn("ProductID").Ascending()
				.WithOptions()
				.NonClustered();

			Create.Index("CustomerID")
				.OnTable("Orders").InSchema("dbo")
				.OnColumn("CustomerID").Ascending()
				.WithOptions()
				.NonClustered();

			Create.Index("CustomersOrders")
				.OnTable("Orders").InSchema("dbo")
				.OnColumn("CustomerID").Ascending()
				.WithOptions()
				.NonClustered();

			Create.Index("EmployeeID")
				.OnTable("Orders").InSchema("dbo")
				.OnColumn("EmployeeID").Ascending()
				.WithOptions()
				.NonClustered();

			Create.Index("EmployeesOrders")
				.OnTable("Orders").InSchema("dbo")
				.OnColumn("EmployeeID").Ascending()
				.WithOptions()
				.NonClustered();

			Create.Index("OrderDate")
				.OnTable("Orders").InSchema("dbo")
				.OnColumn("OrderDate").Ascending()
				.WithOptions()
				.NonClustered();

			Create.Index("ShippedDate")
				.OnTable("Orders").InSchema("dbo")
				.OnColumn("ShippedDate").Ascending()
				.WithOptions()
				.NonClustered();

			Create.Index("ShippersOrders")
				.OnTable("Orders").InSchema("dbo")
				.OnColumn("ShipVia").Ascending()
				.WithOptions()
				.NonClustered();

			Create.Index("ShipPostalCode")
				.OnTable("Orders").InSchema("dbo")
				.OnColumn("ShipPostalCode").Ascending()
				.WithOptions()
				.NonClustered();

			Create.Index("CategoriesProducts")
				.OnTable("Products").InSchema("dbo")
				.OnColumn("CategoryID").Ascending()
				.WithOptions()
				.NonClustered();

			Create.Index("CategoryID")
				.OnTable("Products").InSchema("dbo")
				.OnColumn("CategoryID").Ascending()
				.WithOptions()
				.NonClustered();

			Create.Index("ProductName")
				.OnTable("Products").InSchema("dbo")
				.OnColumn("ProductName").Ascending()
				.WithOptions()
				.NonClustered();

			Create.Index("SupplierID")
				.OnTable("Products").InSchema("dbo")
				.OnColumn("SupplierID").Ascending()
				.WithOptions()
				.NonClustered();

			Create.Index("SuppliersProducts")
				.OnTable("Products").InSchema("dbo")
				.OnColumn("SupplierID").Ascending()
				.WithOptions()
				.NonClustered();

			Create.Index("CompanyName")
				.OnTable("Suppliers").InSchema("dbo")
				.OnColumn("CompanyName").Ascending()
				.WithOptions()
				.NonClustered();

			Create.Index("PostalCode")
				.OnTable("Suppliers").InSchema("dbo")
				.OnColumn("PostalCode").Ascending()
				.WithOptions()
				.NonClustered();
			#endregion
		}

		public override void Down()
		{
			#region Delete Unique Constraints
			#endregion

			#region Delete Foreign Keys
			Delete.ForeignKey("FK_CustomerCustomerDemo").OnTable("CustomerCustomerDemo").InSchema("dbo");
			Delete.ForeignKey("FK_CustomerCustomerDemo_Customers").OnTable("CustomerCustomerDemo").InSchema("dbo");
			Delete.ForeignKey("FK_CustomerDetails_LastContactedBy").OnTable("CustomerDetails").InSchema("dbo");
			Delete.ForeignKey("FK_Employees_Employees").OnTable("Employees").InSchema("dbo");
			Delete.ForeignKey("FK_EmployeeTerritories_Employees").OnTable("EmployeeTerritories").InSchema("dbo");
			Delete.ForeignKey("FK_EmployeeTerritories_Territories").OnTable("EmployeeTerritories").InSchema("dbo");
			Delete.ForeignKey("FK_Order_Details_Orders").OnTable("Order Details").InSchema("dbo");
			Delete.ForeignKey("FK_Order_Details_Products").OnTable("Order Details").InSchema("dbo");
			Delete.ForeignKey("FK_Orders_Customers").OnTable("Orders").InSchema("dbo");
			Delete.ForeignKey("FK_Orders_Employees").OnTable("Orders").InSchema("dbo");
			Delete.ForeignKey("FK_Orders_Shippers").OnTable("Orders").InSchema("dbo");
			Delete.ForeignKey("FK_Products_Categories").OnTable("Products").InSchema("dbo");
			Delete.ForeignKey("FK_Products_Suppliers").OnTable("Products").InSchema("dbo");
			Delete.ForeignKey("FK_Territories_Region").OnTable("Territories").InSchema("dbo");
			#endregion

			#region Delete Tables
			Delete.Table("Categories").InSchema("dbo");
			Delete.Table("CategoryLang").InSchema("dbo");
			Delete.Table("CustomerCustomerDemo").InSchema("dbo");
			Delete.Table("CustomerDemographics").InSchema("dbo");
			Delete.Table("CustomerDetails").InSchema("dbo");
			Delete.Table("CustomerRepresentatives").InSchema("dbo");
			Delete.Table("Customers").InSchema("dbo");
			Delete.Table("DragDropSample").InSchema("dbo");
			Delete.Table("Employees").InSchema("dbo");
			Delete.Table("EmployeeTerritories").InSchema("dbo");
			Delete.Table("Notes").InSchema("dbo");
			Delete.Table("Order Details").InSchema("dbo");
			Delete.Table("Orders").InSchema("dbo");
			Delete.Table("ProductLang").InSchema("dbo");
			Delete.Table("ProductLog").InSchema("dbo");
			Delete.Table("Products").InSchema("dbo");
			Delete.Table("Region").InSchema("dbo");
			Delete.Table("Shippers").InSchema("dbo");
			Delete.Table("Suppliers").InSchema("dbo");
			Delete.Table("Territories").InSchema("dbo");
			#endregion

			#region Delete Schemas
			#endregion
		}

	}
}
