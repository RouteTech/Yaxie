namespace Yaxie.NorthWind {
    export interface EmployeesRow {
        EmployeeId?: number;
        LastName?: string;
        FirstName?: string;
        Title?: string;
        TitleOfCourtesy?: string;
        BirthDate?: string;
        HireDate?: string;
        Address?: string;
        City?: string;
        Region?: string;
        PostalCode?: string;
        Country?: string;
        HomePhone?: string;
        Extension?: string;
        Photo?: number[];
        Notes?: string;
        ReportsTo?: number;
        PhotoPath?: string;
        ReportsToLastName?: string;
        ReportsToFirstName?: string;
        ReportsToTitle?: string;
        ReportsToTitleOfCourtesy?: string;
        ReportsToBirthDate?: string;
        ReportsToHireDate?: string;
        ReportsToAddress?: string;
        ReportsToCity?: string;
        ReportsToRegion?: string;
        ReportsToPostalCode?: string;
        ReportsToCountry?: string;
        ReportsToHomePhone?: string;
        ReportsToExtension?: string;
        ReportsToPhoto?: number[];
        ReportsToNotes?: string;
        ReportsTo1?: number;
        ReportsToPhotoPath?: string;
    }

    export namespace EmployeesRow {
        export const idProperty = 'EmployeeId';
        export const nameProperty = 'LastName';
        export const localTextPrefix = 'NorthWind.Employees';
        export const deletePermission = 'Administration:General';
        export const insertPermission = 'Administration:General';
        export const readPermission = 'Administration:General';
        export const updatePermission = 'Administration:General';

        export declare const enum Fields {
            EmployeeId = "EmployeeId",
            LastName = "LastName",
            FirstName = "FirstName",
            Title = "Title",
            TitleOfCourtesy = "TitleOfCourtesy",
            BirthDate = "BirthDate",
            HireDate = "HireDate",
            Address = "Address",
            City = "City",
            Region = "Region",
            PostalCode = "PostalCode",
            Country = "Country",
            HomePhone = "HomePhone",
            Extension = "Extension",
            Photo = "Photo",
            Notes = "Notes",
            ReportsTo = "ReportsTo",
            PhotoPath = "PhotoPath",
            ReportsToLastName = "ReportsToLastName",
            ReportsToFirstName = "ReportsToFirstName",
            ReportsToTitle = "ReportsToTitle",
            ReportsToTitleOfCourtesy = "ReportsToTitleOfCourtesy",
            ReportsToBirthDate = "ReportsToBirthDate",
            ReportsToHireDate = "ReportsToHireDate",
            ReportsToAddress = "ReportsToAddress",
            ReportsToCity = "ReportsToCity",
            ReportsToRegion = "ReportsToRegion",
            ReportsToPostalCode = "ReportsToPostalCode",
            ReportsToCountry = "ReportsToCountry",
            ReportsToHomePhone = "ReportsToHomePhone",
            ReportsToExtension = "ReportsToExtension",
            ReportsToPhoto = "ReportsToPhoto",
            ReportsToNotes = "ReportsToNotes",
            ReportsTo1 = "ReportsTo1",
            ReportsToPhotoPath = "ReportsToPhotoPath"
        }
    }
}
