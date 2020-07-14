using Serenity.Navigation;
using MyPages = Yaxie.Common.Pages;
[assembly: NavigationLink(int.MaxValue, "Common/Import Type", typeof(MyPages.ImportTypeController), icon: null)]
[assembly: NavigationLink(int.MaxValue, "Common/Import Wizard", typeof(MyPages.ImportWizardController), icon: null)]
[assembly: NavigationLink(int.MaxValue, "Common/Note", typeof(MyPages.NoteController), icon: null)]
[assembly: NavigationLink(int.MaxValue, "Common/Import Source", typeof(MyPages.ImportSourceController), icon: null)]