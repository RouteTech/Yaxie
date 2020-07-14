
using Serenity.Extensibility;
using System.ComponentModel;

namespace Yaxie.Administration
{
    [NestedPermissionKeys]
    [DisplayName("Administration")]
    public class PermissionKeys
    {
        [Description("User, Role Management and Permissions")]
        public const string Security = "Administration:Security";

        [Description("Languages and Translations")]
        public const string Translation = "Administration:Translation";

        [Description("Common Read")]
        public const string  Read = "Common:Read";

        [Description("Common Modify")]
        public const string Modify = "Common:Modify";

        [Description("Common Update")]
        public const string Update = "Common:Update";

        [Description("Common Insert")]
        public const string Insert = "Common:Insert";

        [Description("Common Delete")]
        public const string Delete = "Common:Delete";
    }
}
