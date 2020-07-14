using System;

namespace MVC
{
    public static class Views
    {
        public static class Administration
        {
            public static class Language
            {
                public const string LanguageIndex = "~/Modules/Administration/Language/LanguageIndex.cshtml";
            }

            public static class Role
            {
                public const string RoleIndex = "~/Modules/Administration/Role/RoleIndex.cshtml";
            }

            public static class Sergen
            {
                public const string SergenError = "~/Modules/Administration/Sergen/SergenError.cshtml";
                public const string SergenIndex = "~/Modules/Administration/Sergen/SergenIndex.cshtml";
            }

            public static class Translation
            {
                public const string TranslationIndex = "~/Modules/Administration/Translation/TranslationIndex.cshtml";
            }

            public static class User
            {
                public const string UserIndex = "~/Modules/Administration/User/UserIndex.cshtml";
            }

        }

        public static class Common
        {
            public static class Dashboard
            {
                public const string DashboardIndex = "~/Modules/Common/Dashboard/DashboardIndex.cshtml";
            }

            public static class ImportSource
            {
                public const string ImportSourceIndex = "~/Modules/Common/ImportSource/ImportSourceIndex.cshtml";
            }

            public static class ImportType
            {
                public const string ImportTypeIndex = "~/Modules/Common/ImportType/ImportTypeIndex.cshtml";
            }

            public static class ImportWizard
            {
                public const string ImportWizardIndex = "~/Modules/Common/ImportWizard/ImportWizardIndex.cshtml";
            }

            public static class Note
            {
                public const string NoteIndex = "~/Modules/Common/Note/NoteIndex.cshtml";
            }

            public static class Reporting
            {
                public const string ReportPage = "~/Modules/Common/Reporting/ReportPage.cshtml";
            }
        }

        public static class Errors
        {
            public const string AccessDenied = "~/Views/Errors/AccessDenied.cshtml";
            public const string ValidationError = "~/Views/Errors/ValidationError.cshtml";
        }

        public static class Membership
        {
            public static class Account
            {
                public const string AccountLogin = "~/Modules/Membership/Account/AccountLogin.cshtml";
                public const string AccountLogin_AdminLTE = "~/Modules/Membership/Account/AccountLogin.AdminLTE.cshtml";
                public static class ChangePassword
                {
                    public const string AccountChangePassword = "~/Modules/Membership/Account/ChangePassword/AccountChangePassword.cshtml";
                }

                public static class ForgotPassword
                {
                    public const string AccountForgotPassword = "~/Modules/Membership/Account/ForgotPassword/AccountForgotPassword.cshtml";
                    public const string AccountForgotPassword_AdminLTE = "~/Modules/Membership/Account/ForgotPassword/AccountForgotPassword.AdminLTE.cshtml";
                }

                public static class ResetPassword
                {
                    public const string AccountResetPassword = "~/Modules/Membership/Account/ResetPassword/AccountResetPassword.cshtml";
                    public const string AccountResetPassword_AdminLTE = "~/Modules/Membership/Account/ResetPassword/AccountResetPassword.AdminLTE.cshtml";
                    public const string AccountResetPasswordEmail = "~/Modules/Membership/Account/ResetPassword/AccountResetPasswordEmail.cshtml";
                }

                public static class SignUp
                {
                    public const string AccountActivateEmail = "~/Modules/Membership/Account/SignUp/AccountActivateEmail.cshtml";
                    public const string AccountSignUp = "~/Modules/Membership/Account/SignUp/AccountSignUp.cshtml";
                    public const string AccountSignUp_AdminLTE = "~/Modules/Membership/Account/SignUp/AccountSignUp.AdminLTE.cshtml";
                }
            }

        }

        public static class NorthWind
        {
            public static class Categories
            {
                public const string CategoriesIndex = "~/Modules/NorthWind/Categories/CategoriesIndex.cshtml";
            }

            public static class CategoryLang
            {
                public const string CategoryLangIndex = "~/Modules/NorthWind/CategoryLang/CategoryLangIndex.cshtml";
            }

            public static class CustomerDetails
            {
                public const string CustomerDetailsIndex = "~/Modules/NorthWind/CustomerDetails/CustomerDetailsIndex.cshtml";
            }

            public static class Customers
            {
                public const string CustomersIndex = "~/Modules/NorthWind/Customers/CustomersIndex.cshtml";
            }

            public static class Employees
            {
                public const string EmployeesIndex = "~/Modules/NorthWind/Employees/EmployeesIndex.cshtml";
            }

            public static class EmployeeTerritories
            {
                public const string EmployeeTerritoriesIndex = "~/Modules/NorthWind/EmployeeTerritories/EmployeeTerritoriesIndex.cshtml";
            }

            public static class Invoices
            {
                public const string InvoicesIndex = "~/Modules/NorthWind/Invoices/InvoicesIndex.cshtml";
            }

            public static class Notes
            {
                public const string NotesIndex = "~/Modules/NorthWind/Notes/NotesIndex.cshtml";
            }

            public static class OrderDetails
            {
                public const string OrderDetailsIndex = "~/Modules/NorthWind/OrderDetails/OrderDetailsIndex.cshtml";
            }

            public static class Orders
            {
                public const string OrdersIndex = "~/Modules/NorthWind/Orders/OrdersIndex.cshtml";
            }

            public static class ProductLang
            {
                public const string ProductLangIndex = "~/Modules/NorthWind/ProductLang/ProductLangIndex.cshtml";
            }

            public static class Products
            {
                public const string ProductsIndex = "~/Modules/NorthWind/Products/ProductsIndex.cshtml";
            }

            public static class ProductsbyCategory
            {
                public const string ProductsbyCategoryIndex = "~/Modules/NorthWind/ProductsbyCategory/ProductsbyCategoryIndex.cshtml";
            }

            public static class Region
            {
                public const string RegionIndex = "~/Modules/NorthWind/Region/RegionIndex.cshtml";
            }

            public static class Shippers
            {
                public const string ShippersIndex = "~/Modules/NorthWind/Shippers/ShippersIndex.cshtml";
            }

            public static class Suppliers
            {
                public const string SuppliersIndex = "~/Modules/NorthWind/Suppliers/SuppliersIndex.cshtml";
            }

            public static class Territories
            {
                public const string TerritoriesIndex = "~/Modules/NorthWind/Territories/TerritoriesIndex.cshtml";
            }
        }

        public static class Shared
        {
            public const string _Layout = "~/Views/Shared/_Layout.cshtml";
            public const string _LayoutHead = "~/Views/Shared/_LayoutHead.cshtml";
            public const string _LayoutNoNavigation = "~/Views/Shared/_LayoutNoNavigation.cshtml";
            public const string _LayoutSlim = "~/Views/Shared/_LayoutSlim.cshtml";
            public const string _LayoutSlimHead = "~/Views/Shared/_LayoutSlimHead.cshtml";
            public const string Error = "~/Views/Shared/Error.cshtml";
            public const string LeftNavigation = "~/Views/Shared/LeftNavigation.cshtml";
        }

    }
}
