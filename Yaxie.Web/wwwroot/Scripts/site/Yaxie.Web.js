var Yaxie;
(function (Yaxie) {
    var Administration;
    (function (Administration) {
        var LanguageForm = /** @class */ (function (_super) {
            __extends(LanguageForm, _super);
            function LanguageForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!LanguageForm.init) {
                    LanguageForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    Q.initFormType(LanguageForm, [
                        'LanguageId', w0,
                        'LanguageName', w0
                    ]);
                }
                return _this;
            }
            LanguageForm.formKey = 'Administration.Language';
            return LanguageForm;
        }(Serenity.PrefixedContext));
        Administration.LanguageForm = LanguageForm;
    })(Administration = Yaxie.Administration || (Yaxie.Administration = {}));
})(Yaxie || (Yaxie = {}));
var Yaxie;
(function (Yaxie) {
    var Administration;
    (function (Administration) {
        var LanguageRow;
        (function (LanguageRow) {
            LanguageRow.idProperty = 'Id';
            LanguageRow.nameProperty = 'LanguageName';
            LanguageRow.localTextPrefix = 'Administration.Language';
            LanguageRow.lookupKey = 'Administration.Language';
            function getLookup() {
                return Q.getLookup('Administration.Language');
            }
            LanguageRow.getLookup = getLookup;
            LanguageRow.deletePermission = 'Administration:Translation';
            LanguageRow.insertPermission = 'Administration:Translation';
            LanguageRow.readPermission = 'Administration:Translation';
            LanguageRow.updatePermission = 'Administration:Translation';
        })(LanguageRow = Administration.LanguageRow || (Administration.LanguageRow = {}));
    })(Administration = Yaxie.Administration || (Yaxie.Administration = {}));
})(Yaxie || (Yaxie = {}));
var Yaxie;
(function (Yaxie) {
    var Administration;
    (function (Administration) {
        var LanguageService;
        (function (LanguageService) {
            LanguageService.baseUrl = 'Administration/Language';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                LanguageService[x] = function (r, s, o) {
                    return Q.serviceRequest(LanguageService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(LanguageService = Administration.LanguageService || (Administration.LanguageService = {}));
    })(Administration = Yaxie.Administration || (Yaxie.Administration = {}));
})(Yaxie || (Yaxie = {}));
var Yaxie;
(function (Yaxie) {
    var Administration;
    (function (Administration) {
    })(Administration = Yaxie.Administration || (Yaxie.Administration = {}));
})(Yaxie || (Yaxie = {}));
var Yaxie;
(function (Yaxie) {
    var Administration;
    (function (Administration) {
        var RoleForm = /** @class */ (function (_super) {
            __extends(RoleForm, _super);
            function RoleForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!RoleForm.init) {
                    RoleForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    Q.initFormType(RoleForm, [
                        'RoleName', w0
                    ]);
                }
                return _this;
            }
            RoleForm.formKey = 'Administration.Role';
            return RoleForm;
        }(Serenity.PrefixedContext));
        Administration.RoleForm = RoleForm;
    })(Administration = Yaxie.Administration || (Yaxie.Administration = {}));
})(Yaxie || (Yaxie = {}));
var Yaxie;
(function (Yaxie) {
    var Administration;
    (function (Administration) {
        var RolePermissionRow;
        (function (RolePermissionRow) {
            RolePermissionRow.idProperty = 'RolePermissionId';
            RolePermissionRow.nameProperty = 'PermissionKey';
            RolePermissionRow.localTextPrefix = 'Administration.RolePermission';
            RolePermissionRow.deletePermission = 'Administration:Security';
            RolePermissionRow.insertPermission = 'Administration:Security';
            RolePermissionRow.readPermission = 'Administration:Security';
            RolePermissionRow.updatePermission = 'Administration:Security';
        })(RolePermissionRow = Administration.RolePermissionRow || (Administration.RolePermissionRow = {}));
    })(Administration = Yaxie.Administration || (Yaxie.Administration = {}));
})(Yaxie || (Yaxie = {}));
var Yaxie;
(function (Yaxie) {
    var Administration;
    (function (Administration) {
        var RolePermissionService;
        (function (RolePermissionService) {
            RolePermissionService.baseUrl = 'Administration/RolePermission';
            [
                'Update',
                'List'
            ].forEach(function (x) {
                RolePermissionService[x] = function (r, s, o) {
                    return Q.serviceRequest(RolePermissionService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(RolePermissionService = Administration.RolePermissionService || (Administration.RolePermissionService = {}));
    })(Administration = Yaxie.Administration || (Yaxie.Administration = {}));
})(Yaxie || (Yaxie = {}));
var Yaxie;
(function (Yaxie) {
    var Administration;
    (function (Administration) {
        var RoleRow;
        (function (RoleRow) {
            RoleRow.idProperty = 'RoleId';
            RoleRow.nameProperty = 'RoleName';
            RoleRow.localTextPrefix = 'Administration.Role';
            RoleRow.lookupKey = 'Administration.Role';
            function getLookup() {
                return Q.getLookup('Administration.Role');
            }
            RoleRow.getLookup = getLookup;
            RoleRow.deletePermission = 'Administration:Security';
            RoleRow.insertPermission = 'Administration:Security';
            RoleRow.readPermission = 'Administration:Security';
            RoleRow.updatePermission = 'Administration:Security';
        })(RoleRow = Administration.RoleRow || (Administration.RoleRow = {}));
    })(Administration = Yaxie.Administration || (Yaxie.Administration = {}));
})(Yaxie || (Yaxie = {}));
var Yaxie;
(function (Yaxie) {
    var Administration;
    (function (Administration) {
        var RoleService;
        (function (RoleService) {
            RoleService.baseUrl = 'Administration/Role';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                RoleService[x] = function (r, s, o) {
                    return Q.serviceRequest(RoleService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(RoleService = Administration.RoleService || (Administration.RoleService = {}));
    })(Administration = Yaxie.Administration || (Yaxie.Administration = {}));
})(Yaxie || (Yaxie = {}));
var Yaxie;
(function (Yaxie) {
    var Administration;
    (function (Administration) {
        var SergenService;
        (function (SergenService) {
            SergenService.baseUrl = 'Administration/Sergen';
            [
                'ListConnections',
                'ListTables',
                'Generate'
            ].forEach(function (x) {
                SergenService[x] = function (r, s, o) {
                    return Q.serviceRequest(SergenService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(SergenService = Administration.SergenService || (Administration.SergenService = {}));
    })(Administration = Yaxie.Administration || (Yaxie.Administration = {}));
})(Yaxie || (Yaxie = {}));
var Yaxie;
(function (Yaxie) {
    var Administration;
    (function (Administration) {
        var TranslationService;
        (function (TranslationService) {
            TranslationService.baseUrl = 'Administration/Translation';
            [
                'List',
                'Update'
            ].forEach(function (x) {
                TranslationService[x] = function (r, s, o) {
                    return Q.serviceRequest(TranslationService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(TranslationService = Administration.TranslationService || (Administration.TranslationService = {}));
    })(Administration = Yaxie.Administration || (Yaxie.Administration = {}));
})(Yaxie || (Yaxie = {}));
var Yaxie;
(function (Yaxie) {
    var Administration;
    (function (Administration) {
        var UserForm = /** @class */ (function (_super) {
            __extends(UserForm, _super);
            function UserForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!UserForm.init) {
                    UserForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = s.EmailEditor;
                    var w2 = s.ImageUploadEditor;
                    var w3 = s.PasswordEditor;
                    Q.initFormType(UserForm, [
                        'Username', w0,
                        'DisplayName', w0,
                        'Email', w1,
                        'UserImage', w2,
                        'Password', w3,
                        'PasswordConfirm', w3,
                        'Source', w0
                    ]);
                }
                return _this;
            }
            UserForm.formKey = 'Administration.User';
            return UserForm;
        }(Serenity.PrefixedContext));
        Administration.UserForm = UserForm;
    })(Administration = Yaxie.Administration || (Yaxie.Administration = {}));
})(Yaxie || (Yaxie = {}));
var Yaxie;
(function (Yaxie) {
    var Administration;
    (function (Administration) {
        var UserPermissionRow;
        (function (UserPermissionRow) {
            UserPermissionRow.idProperty = 'UserPermissionId';
            UserPermissionRow.nameProperty = 'PermissionKey';
            UserPermissionRow.localTextPrefix = 'Administration.UserPermission';
            UserPermissionRow.deletePermission = 'Administration:Security';
            UserPermissionRow.insertPermission = 'Administration:Security';
            UserPermissionRow.readPermission = 'Administration:Security';
            UserPermissionRow.updatePermission = 'Administration:Security';
        })(UserPermissionRow = Administration.UserPermissionRow || (Administration.UserPermissionRow = {}));
    })(Administration = Yaxie.Administration || (Yaxie.Administration = {}));
})(Yaxie || (Yaxie = {}));
var Yaxie;
(function (Yaxie) {
    var Administration;
    (function (Administration) {
        var UserPermissionService;
        (function (UserPermissionService) {
            UserPermissionService.baseUrl = 'Administration/UserPermission';
            [
                'Update',
                'List',
                'ListRolePermissions',
                'ListPermissionKeys'
            ].forEach(function (x) {
                UserPermissionService[x] = function (r, s, o) {
                    return Q.serviceRequest(UserPermissionService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(UserPermissionService = Administration.UserPermissionService || (Administration.UserPermissionService = {}));
    })(Administration = Yaxie.Administration || (Yaxie.Administration = {}));
})(Yaxie || (Yaxie = {}));
var Yaxie;
(function (Yaxie) {
    var Administration;
    (function (Administration) {
        var UserRoleRow;
        (function (UserRoleRow) {
            UserRoleRow.idProperty = 'UserRoleId';
            UserRoleRow.localTextPrefix = 'Administration.UserRole';
            UserRoleRow.deletePermission = 'Administration:Security';
            UserRoleRow.insertPermission = 'Administration:Security';
            UserRoleRow.readPermission = 'Administration:Security';
            UserRoleRow.updatePermission = 'Administration:Security';
        })(UserRoleRow = Administration.UserRoleRow || (Administration.UserRoleRow = {}));
    })(Administration = Yaxie.Administration || (Yaxie.Administration = {}));
})(Yaxie || (Yaxie = {}));
var Yaxie;
(function (Yaxie) {
    var Administration;
    (function (Administration) {
        var UserRoleService;
        (function (UserRoleService) {
            UserRoleService.baseUrl = 'Administration/UserRole';
            [
                'Update',
                'List'
            ].forEach(function (x) {
                UserRoleService[x] = function (r, s, o) {
                    return Q.serviceRequest(UserRoleService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(UserRoleService = Administration.UserRoleService || (Administration.UserRoleService = {}));
    })(Administration = Yaxie.Administration || (Yaxie.Administration = {}));
})(Yaxie || (Yaxie = {}));
var Yaxie;
(function (Yaxie) {
    var Administration;
    (function (Administration) {
        var UserRow;
        (function (UserRow) {
            UserRow.idProperty = 'UserId';
            UserRow.isActiveProperty = 'IsActive';
            UserRow.nameProperty = 'Username';
            UserRow.localTextPrefix = 'Administration.User';
            UserRow.lookupKey = 'Administration.User';
            function getLookup() {
                return Q.getLookup('Administration.User');
            }
            UserRow.getLookup = getLookup;
            UserRow.deletePermission = 'Administration:Security';
            UserRow.insertPermission = 'Administration:Security';
            UserRow.readPermission = 'Administration:Security';
            UserRow.updatePermission = 'Administration:Security';
        })(UserRow = Administration.UserRow || (Administration.UserRow = {}));
    })(Administration = Yaxie.Administration || (Yaxie.Administration = {}));
})(Yaxie || (Yaxie = {}));
var Yaxie;
(function (Yaxie) {
    var Administration;
    (function (Administration) {
        var UserService;
        (function (UserService) {
            UserService.baseUrl = 'Administration/User';
            [
                'Create',
                'Update',
                'Delete',
                'Undelete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                UserService[x] = function (r, s, o) {
                    return Q.serviceRequest(UserService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(UserService = Administration.UserService || (Administration.UserService = {}));
    })(Administration = Yaxie.Administration || (Yaxie.Administration = {}));
})(Yaxie || (Yaxie = {}));
var Yaxie;
(function (Yaxie) {
    var Common;
    (function (Common) {
        var ImportSourceForm = /** @class */ (function (_super) {
            __extends(ImportSourceForm, _super);
            function ImportSourceForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!ImportSourceForm.init) {
                    ImportSourceForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    Q.initFormType(ImportSourceForm, [
                        'Description', w0
                    ]);
                }
                return _this;
            }
            ImportSourceForm.formKey = 'Common.ImportSource';
            return ImportSourceForm;
        }(Serenity.PrefixedContext));
        Common.ImportSourceForm = ImportSourceForm;
    })(Common = Yaxie.Common || (Yaxie.Common = {}));
})(Yaxie || (Yaxie = {}));
var Yaxie;
(function (Yaxie) {
    var Common;
    (function (Common) {
        var ImportSourceRow;
        (function (ImportSourceRow) {
            ImportSourceRow.idProperty = 'ImportSourceId';
            ImportSourceRow.nameProperty = 'Description';
            ImportSourceRow.localTextPrefix = 'Common.ImportSource';
            ImportSourceRow.lookupKey = 'Common.ImportSource';
            function getLookup() {
                return Q.getLookup('Common.ImportSource');
            }
            ImportSourceRow.getLookup = getLookup;
            ImportSourceRow.deletePermission = 'Administration:General';
            ImportSourceRow.insertPermission = 'Administration:General';
            ImportSourceRow.readPermission = 'Administration:General';
            ImportSourceRow.updatePermission = 'Administration:General';
        })(ImportSourceRow = Common.ImportSourceRow || (Common.ImportSourceRow = {}));
    })(Common = Yaxie.Common || (Yaxie.Common = {}));
})(Yaxie || (Yaxie = {}));
var Yaxie;
(function (Yaxie) {
    var Common;
    (function (Common) {
        var ImportSourceService;
        (function (ImportSourceService) {
            ImportSourceService.baseUrl = 'Common/ImportSource';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                ImportSourceService[x] = function (r, s, o) {
                    return Q.serviceRequest(ImportSourceService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(ImportSourceService = Common.ImportSourceService || (Common.ImportSourceService = {}));
    })(Common = Yaxie.Common || (Yaxie.Common = {}));
})(Yaxie || (Yaxie = {}));
var Yaxie;
(function (Yaxie) {
    var Common;
    (function (Common) {
        var ImportTypeForm = /** @class */ (function (_super) {
            __extends(ImportTypeForm, _super);
            function ImportTypeForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!ImportTypeForm.init) {
                    ImportTypeForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    Q.initFormType(ImportTypeForm, [
                        'Description', w0
                    ]);
                }
                return _this;
            }
            ImportTypeForm.formKey = 'Common.ImportType';
            return ImportTypeForm;
        }(Serenity.PrefixedContext));
        Common.ImportTypeForm = ImportTypeForm;
    })(Common = Yaxie.Common || (Yaxie.Common = {}));
})(Yaxie || (Yaxie = {}));
var Yaxie;
(function (Yaxie) {
    var Common;
    (function (Common) {
        var ImportTypeRow;
        (function (ImportTypeRow) {
            ImportTypeRow.idProperty = 'ImportTypeId';
            ImportTypeRow.nameProperty = 'Description';
            ImportTypeRow.localTextPrefix = 'Common.ImportType';
            ImportTypeRow.lookupKey = 'Common.ImportType';
            function getLookup() {
                return Q.getLookup('Common.ImportType');
            }
            ImportTypeRow.getLookup = getLookup;
            ImportTypeRow.deletePermission = 'Administration:General';
            ImportTypeRow.insertPermission = 'Administration:General';
            ImportTypeRow.readPermission = 'Administration:General';
            ImportTypeRow.updatePermission = 'Administration:General';
        })(ImportTypeRow = Common.ImportTypeRow || (Common.ImportTypeRow = {}));
    })(Common = Yaxie.Common || (Yaxie.Common = {}));
})(Yaxie || (Yaxie = {}));
var Yaxie;
(function (Yaxie) {
    var Common;
    (function (Common) {
        var ImportTypeService;
        (function (ImportTypeService) {
            ImportTypeService.baseUrl = 'Common/ImportType';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                ImportTypeService[x] = function (r, s, o) {
                    return Q.serviceRequest(ImportTypeService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(ImportTypeService = Common.ImportTypeService || (Common.ImportTypeService = {}));
    })(Common = Yaxie.Common || (Yaxie.Common = {}));
})(Yaxie || (Yaxie = {}));
var Yaxie;
(function (Yaxie) {
    var Common;
    (function (Common) {
        var ImportWizardForm = /** @class */ (function (_super) {
            __extends(ImportWizardForm, _super);
            function ImportWizardForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!ImportWizardForm.init) {
                    ImportWizardForm.init = true;
                    var s = Serenity;
                    var w0 = s.IntegerEditor;
                    var w1 = s.StringEditor;
                    var w2 = s.LookupEditor;
                    var w3 = s.MultipleImageUploadEditor;
                    var w4 = s.RadioButtonEditor;
                    var w5 = s.BooleanEditor;
                    var w6 = s.TextAreaEditor;
                    var w7 = s.DateTimeEditor;
                    Q.initFormType(ImportWizardForm, [
                        'ImportWizardId', w0,
                        'Description', w1,
                        'ImportTypeId', w2,
                        'TargetDatabase', w2,
                        'ImportFileList', w3,
                        'StartAtRow', w0,
                        'EndAtRow', w0,
                        'FieldDelimiterId', w4,
                        'ImportSourceId', w2,
                        'RowErrorCount', w0,
                        'ColumnErrorCount', w0,
                        'KeyType', w1,
                        'KeyColumn', w0,
                        'MatchOnLabels', w5,
                        'MatchOnFieldNames', w5,
                        'FieldMatchDisplay', w6,
                        'FieldMatchList', w1,
                        'ArchiveFolder', w1,
                        'SourceDirectory', w1,
                        'LastRunDate', w7,
                        'ErrorList', w6
                    ]);
                }
                return _this;
            }
            ImportWizardForm.formKey = 'Common.ImportWizard';
            return ImportWizardForm;
        }(Serenity.PrefixedContext));
        Common.ImportWizardForm = ImportWizardForm;
    })(Common = Yaxie.Common || (Yaxie.Common = {}));
})(Yaxie || (Yaxie = {}));
var Yaxie;
(function (Yaxie) {
    var Common;
    (function (Common) {
        var ImportWizardRow;
        (function (ImportWizardRow) {
            ImportWizardRow.idProperty = 'ImportWizardId';
            ImportWizardRow.nameProperty = 'Description';
            ImportWizardRow.localTextPrefix = 'Common.ImportWizard';
            ImportWizardRow.lookupKey = 'Common.ImportWizard';
            function getLookup() {
                return Q.getLookup('Common.ImportWizard');
            }
            ImportWizardRow.getLookup = getLookup;
            ImportWizardRow.deletePermission = 'Administration:General';
            ImportWizardRow.insertPermission = 'Administration:General';
            ImportWizardRow.readPermission = 'Administration:General';
            ImportWizardRow.updatePermission = 'Administration:General';
        })(ImportWizardRow = Common.ImportWizardRow || (Common.ImportWizardRow = {}));
    })(Common = Yaxie.Common || (Yaxie.Common = {}));
})(Yaxie || (Yaxie = {}));
var Yaxie;
(function (Yaxie) {
    var Common;
    (function (Common) {
        var ImportWizardService;
        (function (ImportWizardService) {
            ImportWizardService.baseUrl = 'Common/ImportWizard';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List',
                'GetTableHeaders',
                'GetExcelColumnList',
                'SerializeList',
                'ExcelImport'
            ].forEach(function (x) {
                ImportWizardService[x] = function (r, s, o) {
                    return Q.serviceRequest(ImportWizardService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(ImportWizardService = Common.ImportWizardService || (Common.ImportWizardService = {}));
    })(Common = Yaxie.Common || (Yaxie.Common = {}));
})(Yaxie || (Yaxie = {}));
var Yaxie;
(function (Yaxie) {
    var Common;
    (function (Common) {
        var NoteForm = /** @class */ (function (_super) {
            __extends(NoteForm, _super);
            function NoteForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!NoteForm.init) {
                    NoteForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = s.IntegerEditor;
                    var w2 = s.DateEditor;
                    Q.initFormType(NoteForm, [
                        'EntityType', w0,
                        'EntityId', w0,
                        'NoteText', w0,
                        'InsertUserId', w1,
                        'InsertDate', w2,
                        'InsertUserDisplayName', w0
                    ]);
                }
                return _this;
            }
            NoteForm.formKey = 'Common.Note';
            return NoteForm;
        }(Serenity.PrefixedContext));
        Common.NoteForm = NoteForm;
    })(Common = Yaxie.Common || (Yaxie.Common = {}));
})(Yaxie || (Yaxie = {}));
var Yaxie;
(function (Yaxie) {
    var Common;
    (function (Common) {
        var NoteRow;
        (function (NoteRow) {
            NoteRow.idProperty = 'NoteId';
            NoteRow.nameProperty = 'EntityType';
            NoteRow.localTextPrefix = 'Common.Note';
            NoteRow.deletePermission = 'Administration:General';
            NoteRow.insertPermission = 'Administration:General';
            NoteRow.readPermission = 'Administration:General';
            NoteRow.updatePermission = 'Administration:General';
        })(NoteRow = Common.NoteRow || (Common.NoteRow = {}));
    })(Common = Yaxie.Common || (Yaxie.Common = {}));
})(Yaxie || (Yaxie = {}));
var Yaxie;
(function (Yaxie) {
    var Common;
    (function (Common) {
        var NoteService;
        (function (NoteService) {
            NoteService.baseUrl = 'Common/Note';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                NoteService[x] = function (r, s, o) {
                    return Q.serviceRequest(NoteService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(NoteService = Common.NoteService || (Common.NoteService = {}));
    })(Common = Yaxie.Common || (Yaxie.Common = {}));
})(Yaxie || (Yaxie = {}));
var Yaxie;
(function (Yaxie) {
    var Common;
    (function (Common) {
        var UserPreferenceRow;
        (function (UserPreferenceRow) {
            UserPreferenceRow.idProperty = 'UserPreferenceId';
            UserPreferenceRow.nameProperty = 'Name';
            UserPreferenceRow.localTextPrefix = 'Common.UserPreference';
            UserPreferenceRow.deletePermission = '';
            UserPreferenceRow.insertPermission = '';
            UserPreferenceRow.readPermission = '';
            UserPreferenceRow.updatePermission = '';
        })(UserPreferenceRow = Common.UserPreferenceRow || (Common.UserPreferenceRow = {}));
    })(Common = Yaxie.Common || (Yaxie.Common = {}));
})(Yaxie || (Yaxie = {}));
var Yaxie;
(function (Yaxie) {
    var Common;
    (function (Common) {
        var UserPreferenceService;
        (function (UserPreferenceService) {
            UserPreferenceService.baseUrl = 'Common/UserPreference';
            [
                'Update',
                'Retrieve'
            ].forEach(function (x) {
                UserPreferenceService[x] = function (r, s, o) {
                    return Q.serviceRequest(UserPreferenceService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(UserPreferenceService = Common.UserPreferenceService || (Common.UserPreferenceService = {}));
    })(Common = Yaxie.Common || (Yaxie.Common = {}));
})(Yaxie || (Yaxie = {}));
var Yaxie;
(function (Yaxie) {
    var Membership;
    (function (Membership) {
        var ChangePasswordForm = /** @class */ (function (_super) {
            __extends(ChangePasswordForm, _super);
            function ChangePasswordForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!ChangePasswordForm.init) {
                    ChangePasswordForm.init = true;
                    var s = Serenity;
                    var w0 = s.PasswordEditor;
                    Q.initFormType(ChangePasswordForm, [
                        'OldPassword', w0,
                        'NewPassword', w0,
                        'ConfirmPassword', w0
                    ]);
                }
                return _this;
            }
            ChangePasswordForm.formKey = 'Membership.ChangePassword';
            return ChangePasswordForm;
        }(Serenity.PrefixedContext));
        Membership.ChangePasswordForm = ChangePasswordForm;
    })(Membership = Yaxie.Membership || (Yaxie.Membership = {}));
})(Yaxie || (Yaxie = {}));
var Yaxie;
(function (Yaxie) {
    var Membership;
    (function (Membership) {
        var ForgotPasswordForm = /** @class */ (function (_super) {
            __extends(ForgotPasswordForm, _super);
            function ForgotPasswordForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!ForgotPasswordForm.init) {
                    ForgotPasswordForm.init = true;
                    var s = Serenity;
                    var w0 = s.EmailEditor;
                    Q.initFormType(ForgotPasswordForm, [
                        'Email', w0
                    ]);
                }
                return _this;
            }
            ForgotPasswordForm.formKey = 'Membership.ForgotPassword';
            return ForgotPasswordForm;
        }(Serenity.PrefixedContext));
        Membership.ForgotPasswordForm = ForgotPasswordForm;
    })(Membership = Yaxie.Membership || (Yaxie.Membership = {}));
})(Yaxie || (Yaxie = {}));
var Yaxie;
(function (Yaxie) {
    var Membership;
    (function (Membership) {
        var LoginForm = /** @class */ (function (_super) {
            __extends(LoginForm, _super);
            function LoginForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!LoginForm.init) {
                    LoginForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = s.PasswordEditor;
                    Q.initFormType(LoginForm, [
                        'Username', w0,
                        'Password', w1
                    ]);
                }
                return _this;
            }
            LoginForm.formKey = 'Membership.Login';
            return LoginForm;
        }(Serenity.PrefixedContext));
        Membership.LoginForm = LoginForm;
    })(Membership = Yaxie.Membership || (Yaxie.Membership = {}));
})(Yaxie || (Yaxie = {}));
var Yaxie;
(function (Yaxie) {
    var Membership;
    (function (Membership) {
        var ResetPasswordForm = /** @class */ (function (_super) {
            __extends(ResetPasswordForm, _super);
            function ResetPasswordForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!ResetPasswordForm.init) {
                    ResetPasswordForm.init = true;
                    var s = Serenity;
                    var w0 = s.PasswordEditor;
                    Q.initFormType(ResetPasswordForm, [
                        'NewPassword', w0,
                        'ConfirmPassword', w0
                    ]);
                }
                return _this;
            }
            ResetPasswordForm.formKey = 'Membership.ResetPassword';
            return ResetPasswordForm;
        }(Serenity.PrefixedContext));
        Membership.ResetPasswordForm = ResetPasswordForm;
    })(Membership = Yaxie.Membership || (Yaxie.Membership = {}));
})(Yaxie || (Yaxie = {}));
var Yaxie;
(function (Yaxie) {
    var Membership;
    (function (Membership) {
        var SignUpForm = /** @class */ (function (_super) {
            __extends(SignUpForm, _super);
            function SignUpForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!SignUpForm.init) {
                    SignUpForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = s.EmailEditor;
                    var w2 = s.PasswordEditor;
                    Q.initFormType(SignUpForm, [
                        'DisplayName', w0,
                        'Email', w1,
                        'ConfirmEmail', w1,
                        'Password', w2,
                        'ConfirmPassword', w2
                    ]);
                }
                return _this;
            }
            SignUpForm.formKey = 'Membership.SignUp';
            return SignUpForm;
        }(Serenity.PrefixedContext));
        Membership.SignUpForm = SignUpForm;
    })(Membership = Yaxie.Membership || (Yaxie.Membership = {}));
})(Yaxie || (Yaxie = {}));
var Yaxie;
(function (Yaxie) {
    var NorthWind;
    (function (NorthWind) {
        var CategoriesForm = /** @class */ (function (_super) {
            __extends(CategoriesForm, _super);
            function CategoriesForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!CategoriesForm.init) {
                    CategoriesForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    Q.initFormType(CategoriesForm, [
                        'CategoryName', w0,
                        'Description', w0,
                        'Picture', w0
                    ]);
                }
                return _this;
            }
            CategoriesForm.formKey = 'NorthWind.Categories';
            return CategoriesForm;
        }(Serenity.PrefixedContext));
        NorthWind.CategoriesForm = CategoriesForm;
    })(NorthWind = Yaxie.NorthWind || (Yaxie.NorthWind = {}));
})(Yaxie || (Yaxie = {}));
var Yaxie;
(function (Yaxie) {
    var NorthWind;
    (function (NorthWind) {
        var CategoriesRow;
        (function (CategoriesRow) {
            CategoriesRow.idProperty = 'CategoryId';
            CategoriesRow.nameProperty = 'CategoryName';
            CategoriesRow.localTextPrefix = 'NorthWind.Categories';
            CategoriesRow.deletePermission = 'Administration:General';
            CategoriesRow.insertPermission = 'Administration:General';
            CategoriesRow.readPermission = 'Administration:General';
            CategoriesRow.updatePermission = 'Administration:General';
        })(CategoriesRow = NorthWind.CategoriesRow || (NorthWind.CategoriesRow = {}));
    })(NorthWind = Yaxie.NorthWind || (Yaxie.NorthWind = {}));
})(Yaxie || (Yaxie = {}));
var Yaxie;
(function (Yaxie) {
    var NorthWind;
    (function (NorthWind) {
        var CategoriesService;
        (function (CategoriesService) {
            CategoriesService.baseUrl = 'NorthWind/Categories';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                CategoriesService[x] = function (r, s, o) {
                    return Q.serviceRequest(CategoriesService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(CategoriesService = NorthWind.CategoriesService || (NorthWind.CategoriesService = {}));
    })(NorthWind = Yaxie.NorthWind || (Yaxie.NorthWind = {}));
})(Yaxie || (Yaxie = {}));
var Yaxie;
(function (Yaxie) {
    var NorthWind;
    (function (NorthWind) {
        var CategoryLangForm = /** @class */ (function (_super) {
            __extends(CategoryLangForm, _super);
            function CategoryLangForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!CategoryLangForm.init) {
                    CategoryLangForm.init = true;
                    var s = Serenity;
                    var w0 = s.IntegerEditor;
                    var w1 = s.StringEditor;
                    Q.initFormType(CategoryLangForm, [
                        'CategoryId', w0,
                        'LanguageId', w0,
                        'CategoryName', w1,
                        'Description', w1
                    ]);
                }
                return _this;
            }
            CategoryLangForm.formKey = 'NorthWind.CategoryLang';
            return CategoryLangForm;
        }(Serenity.PrefixedContext));
        NorthWind.CategoryLangForm = CategoryLangForm;
    })(NorthWind = Yaxie.NorthWind || (Yaxie.NorthWind = {}));
})(Yaxie || (Yaxie = {}));
var Yaxie;
(function (Yaxie) {
    var NorthWind;
    (function (NorthWind) {
        var CategoryLangRow;
        (function (CategoryLangRow) {
            CategoryLangRow.idProperty = 'Id';
            CategoryLangRow.nameProperty = 'CategoryName';
            CategoryLangRow.localTextPrefix = 'NorthWind.CategoryLang';
            CategoryLangRow.deletePermission = 'Administration:General';
            CategoryLangRow.insertPermission = 'Administration:General';
            CategoryLangRow.readPermission = 'Administration:General';
            CategoryLangRow.updatePermission = 'Administration:General';
        })(CategoryLangRow = NorthWind.CategoryLangRow || (NorthWind.CategoryLangRow = {}));
    })(NorthWind = Yaxie.NorthWind || (Yaxie.NorthWind = {}));
})(Yaxie || (Yaxie = {}));
var Yaxie;
(function (Yaxie) {
    var NorthWind;
    (function (NorthWind) {
        var CategoryLangService;
        (function (CategoryLangService) {
            CategoryLangService.baseUrl = 'NorthWind/CategoryLang';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                CategoryLangService[x] = function (r, s, o) {
                    return Q.serviceRequest(CategoryLangService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(CategoryLangService = NorthWind.CategoryLangService || (NorthWind.CategoryLangService = {}));
    })(NorthWind = Yaxie.NorthWind || (Yaxie.NorthWind = {}));
})(Yaxie || (Yaxie = {}));
var Yaxie;
(function (Yaxie) {
    var NorthWind;
    (function (NorthWind) {
        var CustomerDetailsForm = /** @class */ (function (_super) {
            __extends(CustomerDetailsForm, _super);
            function CustomerDetailsForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!CustomerDetailsForm.init) {
                    CustomerDetailsForm.init = true;
                    var s = Serenity;
                    var w0 = s.DateEditor;
                    var w1 = s.IntegerEditor;
                    var w2 = s.StringEditor;
                    var w3 = s.BooleanEditor;
                    Q.initFormType(CustomerDetailsForm, [
                        'LastContactDate', w0,
                        'LastContactedBy', w1,
                        'Email', w2,
                        'SendBulletin', w3
                    ]);
                }
                return _this;
            }
            CustomerDetailsForm.formKey = 'NorthWind.CustomerDetails';
            return CustomerDetailsForm;
        }(Serenity.PrefixedContext));
        NorthWind.CustomerDetailsForm = CustomerDetailsForm;
    })(NorthWind = Yaxie.NorthWind || (Yaxie.NorthWind = {}));
})(Yaxie || (Yaxie = {}));
var Yaxie;
(function (Yaxie) {
    var NorthWind;
    (function (NorthWind) {
        var CustomerDetailsRow;
        (function (CustomerDetailsRow) {
            CustomerDetailsRow.idProperty = 'Id';
            CustomerDetailsRow.nameProperty = 'Email';
            CustomerDetailsRow.localTextPrefix = 'NorthWind.CustomerDetails';
            CustomerDetailsRow.deletePermission = 'Administration:General';
            CustomerDetailsRow.insertPermission = 'Administration:General';
            CustomerDetailsRow.readPermission = 'Administration:General';
            CustomerDetailsRow.updatePermission = 'Administration:General';
        })(CustomerDetailsRow = NorthWind.CustomerDetailsRow || (NorthWind.CustomerDetailsRow = {}));
    })(NorthWind = Yaxie.NorthWind || (Yaxie.NorthWind = {}));
})(Yaxie || (Yaxie = {}));
var Yaxie;
(function (Yaxie) {
    var NorthWind;
    (function (NorthWind) {
        var CustomerDetailsService;
        (function (CustomerDetailsService) {
            CustomerDetailsService.baseUrl = 'NorthWind/CustomerDetails';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                CustomerDetailsService[x] = function (r, s, o) {
                    return Q.serviceRequest(CustomerDetailsService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(CustomerDetailsService = NorthWind.CustomerDetailsService || (NorthWind.CustomerDetailsService = {}));
    })(NorthWind = Yaxie.NorthWind || (Yaxie.NorthWind = {}));
})(Yaxie || (Yaxie = {}));
var Yaxie;
(function (Yaxie) {
    var NorthWind;
    (function (NorthWind) {
        var CustomersForm = /** @class */ (function (_super) {
            __extends(CustomersForm, _super);
            function CustomersForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!CustomersForm.init) {
                    CustomersForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    Q.initFormType(CustomersForm, [
                        'CustomerId', w0,
                        'CompanyName', w0,
                        'ContactName', w0,
                        'ContactTitle', w0,
                        'Address', w0,
                        'City', w0,
                        'Region', w0,
                        'PostalCode', w0,
                        'Country', w0,
                        'Phone', w0,
                        'Fax', w0
                    ]);
                }
                return _this;
            }
            CustomersForm.formKey = 'NorthWind.Customers';
            return CustomersForm;
        }(Serenity.PrefixedContext));
        NorthWind.CustomersForm = CustomersForm;
    })(NorthWind = Yaxie.NorthWind || (Yaxie.NorthWind = {}));
})(Yaxie || (Yaxie = {}));
var Yaxie;
(function (Yaxie) {
    var NorthWind;
    (function (NorthWind) {
        var CustomersRow;
        (function (CustomersRow) {
            CustomersRow.idProperty = 'Id';
            CustomersRow.nameProperty = 'CustomerId';
            CustomersRow.localTextPrefix = 'NorthWind.Customers';
            CustomersRow.deletePermission = 'Administration:General';
            CustomersRow.insertPermission = 'Administration:General';
            CustomersRow.readPermission = 'Administration:General';
            CustomersRow.updatePermission = 'Administration:General';
        })(CustomersRow = NorthWind.CustomersRow || (NorthWind.CustomersRow = {}));
    })(NorthWind = Yaxie.NorthWind || (Yaxie.NorthWind = {}));
})(Yaxie || (Yaxie = {}));
var Yaxie;
(function (Yaxie) {
    var NorthWind;
    (function (NorthWind) {
        var CustomersService;
        (function (CustomersService) {
            CustomersService.baseUrl = 'NorthWind/Customers';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                CustomersService[x] = function (r, s, o) {
                    return Q.serviceRequest(CustomersService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(CustomersService = NorthWind.CustomersService || (NorthWind.CustomersService = {}));
    })(NorthWind = Yaxie.NorthWind || (Yaxie.NorthWind = {}));
})(Yaxie || (Yaxie = {}));
var Yaxie;
(function (Yaxie) {
    var NorthWind;
    (function (NorthWind) {
        var EmployeeTerritoriesForm = /** @class */ (function (_super) {
            __extends(EmployeeTerritoriesForm, _super);
            function EmployeeTerritoriesForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!EmployeeTerritoriesForm.init) {
                    EmployeeTerritoriesForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    Q.initFormType(EmployeeTerritoriesForm, [
                        'TerritoryId', w0
                    ]);
                }
                return _this;
            }
            EmployeeTerritoriesForm.formKey = 'NorthWind.EmployeeTerritories';
            return EmployeeTerritoriesForm;
        }(Serenity.PrefixedContext));
        NorthWind.EmployeeTerritoriesForm = EmployeeTerritoriesForm;
    })(NorthWind = Yaxie.NorthWind || (Yaxie.NorthWind = {}));
})(Yaxie || (Yaxie = {}));
var Yaxie;
(function (Yaxie) {
    var NorthWind;
    (function (NorthWind) {
        var EmployeeTerritoriesRow;
        (function (EmployeeTerritoriesRow) {
            EmployeeTerritoriesRow.idProperty = 'EmployeeId';
            EmployeeTerritoriesRow.nameProperty = 'TerritoryId';
            EmployeeTerritoriesRow.localTextPrefix = 'NorthWind.EmployeeTerritories';
            EmployeeTerritoriesRow.deletePermission = 'Administration:General';
            EmployeeTerritoriesRow.insertPermission = 'Administration:General';
            EmployeeTerritoriesRow.readPermission = 'Administration:General';
            EmployeeTerritoriesRow.updatePermission = 'Administration:General';
        })(EmployeeTerritoriesRow = NorthWind.EmployeeTerritoriesRow || (NorthWind.EmployeeTerritoriesRow = {}));
    })(NorthWind = Yaxie.NorthWind || (Yaxie.NorthWind = {}));
})(Yaxie || (Yaxie = {}));
var Yaxie;
(function (Yaxie) {
    var NorthWind;
    (function (NorthWind) {
        var EmployeeTerritoriesService;
        (function (EmployeeTerritoriesService) {
            EmployeeTerritoriesService.baseUrl = 'NorthWind/EmployeeTerritories';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                EmployeeTerritoriesService[x] = function (r, s, o) {
                    return Q.serviceRequest(EmployeeTerritoriesService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(EmployeeTerritoriesService = NorthWind.EmployeeTerritoriesService || (NorthWind.EmployeeTerritoriesService = {}));
    })(NorthWind = Yaxie.NorthWind || (Yaxie.NorthWind = {}));
})(Yaxie || (Yaxie = {}));
var Yaxie;
(function (Yaxie) {
    var NorthWind;
    (function (NorthWind) {
        var EmployeesForm = /** @class */ (function (_super) {
            __extends(EmployeesForm, _super);
            function EmployeesForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!EmployeesForm.init) {
                    EmployeesForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = s.DateEditor;
                    var w2 = s.IntegerEditor;
                    Q.initFormType(EmployeesForm, [
                        'LastName', w0,
                        'FirstName', w0,
                        'Title', w0,
                        'TitleOfCourtesy', w0,
                        'BirthDate', w1,
                        'HireDate', w1,
                        'Address', w0,
                        'City', w0,
                        'Region', w0,
                        'PostalCode', w0,
                        'Country', w0,
                        'HomePhone', w0,
                        'Extension', w0,
                        'Photo', w0,
                        'Notes', w0,
                        'ReportsTo', w2,
                        'PhotoPath', w0
                    ]);
                }
                return _this;
            }
            EmployeesForm.formKey = 'NorthWind.Employees';
            return EmployeesForm;
        }(Serenity.PrefixedContext));
        NorthWind.EmployeesForm = EmployeesForm;
    })(NorthWind = Yaxie.NorthWind || (Yaxie.NorthWind = {}));
})(Yaxie || (Yaxie = {}));
var Yaxie;
(function (Yaxie) {
    var NorthWind;
    (function (NorthWind) {
        var EmployeesRow;
        (function (EmployeesRow) {
            EmployeesRow.idProperty = 'EmployeeId';
            EmployeesRow.nameProperty = 'LastName';
            EmployeesRow.localTextPrefix = 'NorthWind.Employees';
            EmployeesRow.deletePermission = 'Administration:General';
            EmployeesRow.insertPermission = 'Administration:General';
            EmployeesRow.readPermission = 'Administration:General';
            EmployeesRow.updatePermission = 'Administration:General';
        })(EmployeesRow = NorthWind.EmployeesRow || (NorthWind.EmployeesRow = {}));
    })(NorthWind = Yaxie.NorthWind || (Yaxie.NorthWind = {}));
})(Yaxie || (Yaxie = {}));
var Yaxie;
(function (Yaxie) {
    var NorthWind;
    (function (NorthWind) {
        var EmployeesService;
        (function (EmployeesService) {
            EmployeesService.baseUrl = 'NorthWind/Employees';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                EmployeesService[x] = function (r, s, o) {
                    return Q.serviceRequest(EmployeesService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(EmployeesService = NorthWind.EmployeesService || (NorthWind.EmployeesService = {}));
    })(NorthWind = Yaxie.NorthWind || (Yaxie.NorthWind = {}));
})(Yaxie || (Yaxie = {}));
var Yaxie;
(function (Yaxie) {
    var NorthWind;
    (function (NorthWind) {
        var InvoicesForm = /** @class */ (function (_super) {
            __extends(InvoicesForm, _super);
            function InvoicesForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!InvoicesForm.init) {
                    InvoicesForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = s.IntegerEditor;
                    var w2 = s.DateEditor;
                    var w3 = s.DecimalEditor;
                    Q.initFormType(InvoicesForm, [
                        'ShipAddress', w0,
                        'ShipCity', w0,
                        'ShipRegion', w0,
                        'ShipPostalCode', w0,
                        'ShipCountry', w0,
                        'CustomerId', w0,
                        'CustomerName', w0,
                        'Address', w0,
                        'City', w0,
                        'Region', w0,
                        'PostalCode', w0,
                        'Country', w0,
                        'Salesperson', w0,
                        'OrderId', w1,
                        'OrderDate', w2,
                        'RequiredDate', w2,
                        'ShippedDate', w2,
                        'ShipperName', w0,
                        'ProductId', w1,
                        'ProductName', w0,
                        'UnitPrice', w3,
                        'Quantity', w1,
                        'Discount', w3,
                        'ExtendedPrice', w3,
                        'Freight', w3
                    ]);
                }
                return _this;
            }
            InvoicesForm.formKey = 'NorthWind.Invoices';
            return InvoicesForm;
        }(Serenity.PrefixedContext));
        NorthWind.InvoicesForm = InvoicesForm;
    })(NorthWind = Yaxie.NorthWind || (Yaxie.NorthWind = {}));
})(Yaxie || (Yaxie = {}));
var Yaxie;
(function (Yaxie) {
    var NorthWind;
    (function (NorthWind) {
        var InvoicesRow;
        (function (InvoicesRow) {
            InvoicesRow.idProperty = 'ShipName';
            InvoicesRow.nameProperty = 'ShipName';
            InvoicesRow.localTextPrefix = 'NorthWind.Invoices';
            InvoicesRow.deletePermission = 'Administration:General';
            InvoicesRow.insertPermission = 'Administration:General';
            InvoicesRow.readPermission = 'Administration:General';
            InvoicesRow.updatePermission = 'Administration:General';
        })(InvoicesRow = NorthWind.InvoicesRow || (NorthWind.InvoicesRow = {}));
    })(NorthWind = Yaxie.NorthWind || (Yaxie.NorthWind = {}));
})(Yaxie || (Yaxie = {}));
var Yaxie;
(function (Yaxie) {
    var NorthWind;
    (function (NorthWind) {
        var InvoicesService;
        (function (InvoicesService) {
            InvoicesService.baseUrl = 'NorthWind/Invoices';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                InvoicesService[x] = function (r, s, o) {
                    return Q.serviceRequest(InvoicesService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(InvoicesService = NorthWind.InvoicesService || (NorthWind.InvoicesService = {}));
    })(NorthWind = Yaxie.NorthWind || (Yaxie.NorthWind = {}));
})(Yaxie || (Yaxie = {}));
var Yaxie;
(function (Yaxie) {
    var NorthWind;
    (function (NorthWind) {
        var NotesForm = /** @class */ (function (_super) {
            __extends(NotesForm, _super);
            function NotesForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!NotesForm.init) {
                    NotesForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = s.IntegerEditor;
                    var w2 = s.DateEditor;
                    Q.initFormType(NotesForm, [
                        'EntityType', w0,
                        'EntityId', w0,
                        'Text', w0,
                        'InsertUserId', w1,
                        'InsertDate', w2
                    ]);
                }
                return _this;
            }
            NotesForm.formKey = 'NorthWind.Notes';
            return NotesForm;
        }(Serenity.PrefixedContext));
        NorthWind.NotesForm = NotesForm;
    })(NorthWind = Yaxie.NorthWind || (Yaxie.NorthWind = {}));
})(Yaxie || (Yaxie = {}));
var Yaxie;
(function (Yaxie) {
    var NorthWind;
    (function (NorthWind) {
        var NotesRow;
        (function (NotesRow) {
            NotesRow.idProperty = 'NoteId';
            NotesRow.nameProperty = 'EntityType';
            NotesRow.localTextPrefix = 'NorthWind.Notes';
            NotesRow.deletePermission = 'Administration:General';
            NotesRow.insertPermission = 'Administration:General';
            NotesRow.readPermission = 'Administration:General';
            NotesRow.updatePermission = 'Administration:General';
        })(NotesRow = NorthWind.NotesRow || (NorthWind.NotesRow = {}));
    })(NorthWind = Yaxie.NorthWind || (Yaxie.NorthWind = {}));
})(Yaxie || (Yaxie = {}));
var Yaxie;
(function (Yaxie) {
    var NorthWind;
    (function (NorthWind) {
        var NotesService;
        (function (NotesService) {
            NotesService.baseUrl = 'NorthWind/Notes';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                NotesService[x] = function (r, s, o) {
                    return Q.serviceRequest(NotesService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(NotesService = NorthWind.NotesService || (NorthWind.NotesService = {}));
    })(NorthWind = Yaxie.NorthWind || (Yaxie.NorthWind = {}));
})(Yaxie || (Yaxie = {}));
var Yaxie;
(function (Yaxie) {
    var NorthWind;
    (function (NorthWind) {
        var OrderDetailsForm = /** @class */ (function (_super) {
            __extends(OrderDetailsForm, _super);
            function OrderDetailsForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!OrderDetailsForm.init) {
                    OrderDetailsForm.init = true;
                    var s = Serenity;
                    var w0 = s.IntegerEditor;
                    var w1 = s.DecimalEditor;
                    Q.initFormType(OrderDetailsForm, [
                        'OrderId', w0,
                        'ProductId', w0,
                        'UnitPrice', w1,
                        'Quantity', w0,
                        'Discount', w1
                    ]);
                }
                return _this;
            }
            OrderDetailsForm.formKey = 'NorthWind.OrderDetails';
            return OrderDetailsForm;
        }(Serenity.PrefixedContext));
        NorthWind.OrderDetailsForm = OrderDetailsForm;
    })(NorthWind = Yaxie.NorthWind || (Yaxie.NorthWind = {}));
})(Yaxie || (Yaxie = {}));
var Yaxie;
(function (Yaxie) {
    var NorthWind;
    (function (NorthWind) {
        var OrderDetailsRow;
        (function (OrderDetailsRow) {
            OrderDetailsRow.idProperty = 'DetailId';
            OrderDetailsRow.localTextPrefix = 'NorthWind.OrderDetails';
            OrderDetailsRow.deletePermission = 'Administration:General';
            OrderDetailsRow.insertPermission = 'Administration:General';
            OrderDetailsRow.readPermission = 'Administration:General';
            OrderDetailsRow.updatePermission = 'Administration:General';
        })(OrderDetailsRow = NorthWind.OrderDetailsRow || (NorthWind.OrderDetailsRow = {}));
    })(NorthWind = Yaxie.NorthWind || (Yaxie.NorthWind = {}));
})(Yaxie || (Yaxie = {}));
var Yaxie;
(function (Yaxie) {
    var NorthWind;
    (function (NorthWind) {
        var OrderDetailsService;
        (function (OrderDetailsService) {
            OrderDetailsService.baseUrl = 'NorthWind/OrderDetails';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                OrderDetailsService[x] = function (r, s, o) {
                    return Q.serviceRequest(OrderDetailsService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(OrderDetailsService = NorthWind.OrderDetailsService || (NorthWind.OrderDetailsService = {}));
    })(NorthWind = Yaxie.NorthWind || (Yaxie.NorthWind = {}));
})(Yaxie || (Yaxie = {}));
var Yaxie;
(function (Yaxie) {
    var NorthWind;
    (function (NorthWind) {
        var OrdersForm = /** @class */ (function (_super) {
            __extends(OrdersForm, _super);
            function OrdersForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!OrdersForm.init) {
                    OrdersForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = s.IntegerEditor;
                    var w2 = s.DateEditor;
                    var w3 = s.DecimalEditor;
                    Q.initFormType(OrdersForm, [
                        'CustomerId', w0,
                        'EmployeeId', w1,
                        'OrderDate', w2,
                        'RequiredDate', w2,
                        'ShippedDate', w2,
                        'ShipVia', w1,
                        'Freight', w3,
                        'ShipName', w0,
                        'ShipAddress', w0,
                        'ShipCity', w0,
                        'ShipRegion', w0,
                        'ShipPostalCode', w0,
                        'ShipCountry', w0
                    ]);
                }
                return _this;
            }
            OrdersForm.formKey = 'NorthWind.Orders';
            return OrdersForm;
        }(Serenity.PrefixedContext));
        NorthWind.OrdersForm = OrdersForm;
    })(NorthWind = Yaxie.NorthWind || (Yaxie.NorthWind = {}));
})(Yaxie || (Yaxie = {}));
var Yaxie;
(function (Yaxie) {
    var NorthWind;
    (function (NorthWind) {
        var OrdersRow;
        (function (OrdersRow) {
            OrdersRow.idProperty = 'OrderId';
            OrdersRow.nameProperty = 'CustomerId';
            OrdersRow.localTextPrefix = 'NorthWind.Orders';
            OrdersRow.deletePermission = 'Administration:General';
            OrdersRow.insertPermission = 'Administration:General';
            OrdersRow.readPermission = 'Administration:General';
            OrdersRow.updatePermission = 'Administration:General';
        })(OrdersRow = NorthWind.OrdersRow || (NorthWind.OrdersRow = {}));
    })(NorthWind = Yaxie.NorthWind || (Yaxie.NorthWind = {}));
})(Yaxie || (Yaxie = {}));
var Yaxie;
(function (Yaxie) {
    var NorthWind;
    (function (NorthWind) {
        var OrdersService;
        (function (OrdersService) {
            OrdersService.baseUrl = 'NorthWind/Orders';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                OrdersService[x] = function (r, s, o) {
                    return Q.serviceRequest(OrdersService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(OrdersService = NorthWind.OrdersService || (NorthWind.OrdersService = {}));
    })(NorthWind = Yaxie.NorthWind || (Yaxie.NorthWind = {}));
})(Yaxie || (Yaxie = {}));
var Yaxie;
(function (Yaxie) {
    var NorthWind;
    (function (NorthWind) {
        var ProductLangForm = /** @class */ (function (_super) {
            __extends(ProductLangForm, _super);
            function ProductLangForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!ProductLangForm.init) {
                    ProductLangForm.init = true;
                    var s = Serenity;
                    var w0 = s.IntegerEditor;
                    var w1 = s.StringEditor;
                    Q.initFormType(ProductLangForm, [
                        'ProductId', w0,
                        'LanguageId', w0,
                        'ProductName', w1
                    ]);
                }
                return _this;
            }
            ProductLangForm.formKey = 'NorthWind.ProductLang';
            return ProductLangForm;
        }(Serenity.PrefixedContext));
        NorthWind.ProductLangForm = ProductLangForm;
    })(NorthWind = Yaxie.NorthWind || (Yaxie.NorthWind = {}));
})(Yaxie || (Yaxie = {}));
var Yaxie;
(function (Yaxie) {
    var NorthWind;
    (function (NorthWind) {
        var ProductLangRow;
        (function (ProductLangRow) {
            ProductLangRow.idProperty = 'Id';
            ProductLangRow.nameProperty = 'ProductName';
            ProductLangRow.localTextPrefix = 'NorthWind.ProductLang';
            ProductLangRow.deletePermission = 'Administration:General';
            ProductLangRow.insertPermission = 'Administration:General';
            ProductLangRow.readPermission = 'Administration:General';
            ProductLangRow.updatePermission = 'Administration:General';
        })(ProductLangRow = NorthWind.ProductLangRow || (NorthWind.ProductLangRow = {}));
    })(NorthWind = Yaxie.NorthWind || (Yaxie.NorthWind = {}));
})(Yaxie || (Yaxie = {}));
var Yaxie;
(function (Yaxie) {
    var NorthWind;
    (function (NorthWind) {
        var ProductLangService;
        (function (ProductLangService) {
            ProductLangService.baseUrl = 'NorthWind/ProductLang';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                ProductLangService[x] = function (r, s, o) {
                    return Q.serviceRequest(ProductLangService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(ProductLangService = NorthWind.ProductLangService || (NorthWind.ProductLangService = {}));
    })(NorthWind = Yaxie.NorthWind || (Yaxie.NorthWind = {}));
})(Yaxie || (Yaxie = {}));
var Yaxie;
(function (Yaxie) {
    var NorthWind;
    (function (NorthWind) {
        var ProductsForm = /** @class */ (function (_super) {
            __extends(ProductsForm, _super);
            function ProductsForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!ProductsForm.init) {
                    ProductsForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = s.IntegerEditor;
                    var w2 = s.DecimalEditor;
                    var w3 = s.BooleanEditor;
                    Q.initFormType(ProductsForm, [
                        'ProductName', w0,
                        'SupplierId', w1,
                        'CategoryId', w1,
                        'QuantityPerUnit', w0,
                        'UnitPrice', w2,
                        'UnitsInStock', w1,
                        'UnitsOnOrder', w1,
                        'ReorderLevel', w1,
                        'Discontinued', w3,
                        'ProductImage', w0
                    ]);
                }
                return _this;
            }
            ProductsForm.formKey = 'NorthWind.Products';
            return ProductsForm;
        }(Serenity.PrefixedContext));
        NorthWind.ProductsForm = ProductsForm;
    })(NorthWind = Yaxie.NorthWind || (Yaxie.NorthWind = {}));
})(Yaxie || (Yaxie = {}));
var Yaxie;
(function (Yaxie) {
    var NorthWind;
    (function (NorthWind) {
        var ProductsRow;
        (function (ProductsRow) {
            ProductsRow.idProperty = 'ProductId';
            ProductsRow.nameProperty = 'ProductName';
            ProductsRow.localTextPrefix = 'NorthWind.Products';
            ProductsRow.deletePermission = 'Administration:General';
            ProductsRow.insertPermission = 'Administration:General';
            ProductsRow.readPermission = 'Administration:General';
            ProductsRow.updatePermission = 'Administration:General';
        })(ProductsRow = NorthWind.ProductsRow || (NorthWind.ProductsRow = {}));
    })(NorthWind = Yaxie.NorthWind || (Yaxie.NorthWind = {}));
})(Yaxie || (Yaxie = {}));
var Yaxie;
(function (Yaxie) {
    var NorthWind;
    (function (NorthWind) {
        var ProductsService;
        (function (ProductsService) {
            ProductsService.baseUrl = 'NorthWind/Products';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                ProductsService[x] = function (r, s, o) {
                    return Q.serviceRequest(ProductsService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(ProductsService = NorthWind.ProductsService || (NorthWind.ProductsService = {}));
    })(NorthWind = Yaxie.NorthWind || (Yaxie.NorthWind = {}));
})(Yaxie || (Yaxie = {}));
var Yaxie;
(function (Yaxie) {
    var NorthWind;
    (function (NorthWind) {
        var ProductsbyCategoryForm = /** @class */ (function (_super) {
            __extends(ProductsbyCategoryForm, _super);
            function ProductsbyCategoryForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!ProductsbyCategoryForm.init) {
                    ProductsbyCategoryForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = s.IntegerEditor;
                    var w2 = s.BooleanEditor;
                    Q.initFormType(ProductsbyCategoryForm, [
                        'ProductName', w0,
                        'QuantityPerUnit', w0,
                        'UnitsInStock', w1,
                        'Discontinued', w2
                    ]);
                }
                return _this;
            }
            ProductsbyCategoryForm.formKey = 'NorthWind.ProductsbyCategory';
            return ProductsbyCategoryForm;
        }(Serenity.PrefixedContext));
        NorthWind.ProductsbyCategoryForm = ProductsbyCategoryForm;
    })(NorthWind = Yaxie.NorthWind || (Yaxie.NorthWind = {}));
})(Yaxie || (Yaxie = {}));
var Yaxie;
(function (Yaxie) {
    var NorthWind;
    (function (NorthWind) {
        var ProductsbyCategoryRow;
        (function (ProductsbyCategoryRow) {
            ProductsbyCategoryRow.idProperty = 'CategoryName';
            ProductsbyCategoryRow.nameProperty = 'CategoryName';
            ProductsbyCategoryRow.localTextPrefix = 'NorthWind.ProductsbyCategory';
            ProductsbyCategoryRow.deletePermission = 'Administration:General';
            ProductsbyCategoryRow.insertPermission = 'Administration:General';
            ProductsbyCategoryRow.readPermission = 'Administration:General';
            ProductsbyCategoryRow.updatePermission = 'Administration:General';
        })(ProductsbyCategoryRow = NorthWind.ProductsbyCategoryRow || (NorthWind.ProductsbyCategoryRow = {}));
    })(NorthWind = Yaxie.NorthWind || (Yaxie.NorthWind = {}));
})(Yaxie || (Yaxie = {}));
var Yaxie;
(function (Yaxie) {
    var NorthWind;
    (function (NorthWind) {
        var ProductsbyCategoryService;
        (function (ProductsbyCategoryService) {
            ProductsbyCategoryService.baseUrl = 'NorthWind/ProductsbyCategory';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                ProductsbyCategoryService[x] = function (r, s, o) {
                    return Q.serviceRequest(ProductsbyCategoryService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(ProductsbyCategoryService = NorthWind.ProductsbyCategoryService || (NorthWind.ProductsbyCategoryService = {}));
    })(NorthWind = Yaxie.NorthWind || (Yaxie.NorthWind = {}));
})(Yaxie || (Yaxie = {}));
var Yaxie;
(function (Yaxie) {
    var NorthWind;
    (function (NorthWind) {
        var RegionForm = /** @class */ (function (_super) {
            __extends(RegionForm, _super);
            function RegionForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!RegionForm.init) {
                    RegionForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    Q.initFormType(RegionForm, [
                        'RegionDescription', w0
                    ]);
                }
                return _this;
            }
            RegionForm.formKey = 'NorthWind.Region';
            return RegionForm;
        }(Serenity.PrefixedContext));
        NorthWind.RegionForm = RegionForm;
    })(NorthWind = Yaxie.NorthWind || (Yaxie.NorthWind = {}));
})(Yaxie || (Yaxie = {}));
var Yaxie;
(function (Yaxie) {
    var NorthWind;
    (function (NorthWind) {
        var RegionRow;
        (function (RegionRow) {
            RegionRow.idProperty = 'RegionId';
            RegionRow.nameProperty = 'RegionDescription';
            RegionRow.localTextPrefix = 'NorthWind.Region';
            RegionRow.deletePermission = 'Administration:General';
            RegionRow.insertPermission = 'Administration:General';
            RegionRow.readPermission = 'Administration:General';
            RegionRow.updatePermission = 'Administration:General';
        })(RegionRow = NorthWind.RegionRow || (NorthWind.RegionRow = {}));
    })(NorthWind = Yaxie.NorthWind || (Yaxie.NorthWind = {}));
})(Yaxie || (Yaxie = {}));
var Yaxie;
(function (Yaxie) {
    var NorthWind;
    (function (NorthWind) {
        var RegionService;
        (function (RegionService) {
            RegionService.baseUrl = 'NorthWind/Region';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                RegionService[x] = function (r, s, o) {
                    return Q.serviceRequest(RegionService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(RegionService = NorthWind.RegionService || (NorthWind.RegionService = {}));
    })(NorthWind = Yaxie.NorthWind || (Yaxie.NorthWind = {}));
})(Yaxie || (Yaxie = {}));
var Yaxie;
(function (Yaxie) {
    var NorthWind;
    (function (NorthWind) {
        var ShippersForm = /** @class */ (function (_super) {
            __extends(ShippersForm, _super);
            function ShippersForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!ShippersForm.init) {
                    ShippersForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    Q.initFormType(ShippersForm, [
                        'CompanyName', w0,
                        'Phone', w0
                    ]);
                }
                return _this;
            }
            ShippersForm.formKey = 'NorthWind.Shippers';
            return ShippersForm;
        }(Serenity.PrefixedContext));
        NorthWind.ShippersForm = ShippersForm;
    })(NorthWind = Yaxie.NorthWind || (Yaxie.NorthWind = {}));
})(Yaxie || (Yaxie = {}));
var Yaxie;
(function (Yaxie) {
    var NorthWind;
    (function (NorthWind) {
        var ShippersRow;
        (function (ShippersRow) {
            ShippersRow.idProperty = 'ShipperId';
            ShippersRow.nameProperty = 'CompanyName';
            ShippersRow.localTextPrefix = 'NorthWind.Shippers';
            ShippersRow.deletePermission = 'Administration:General';
            ShippersRow.insertPermission = 'Administration:General';
            ShippersRow.readPermission = 'Administration:General';
            ShippersRow.updatePermission = 'Administration:General';
        })(ShippersRow = NorthWind.ShippersRow || (NorthWind.ShippersRow = {}));
    })(NorthWind = Yaxie.NorthWind || (Yaxie.NorthWind = {}));
})(Yaxie || (Yaxie = {}));
var Yaxie;
(function (Yaxie) {
    var NorthWind;
    (function (NorthWind) {
        var ShippersService;
        (function (ShippersService) {
            ShippersService.baseUrl = 'NorthWind/Shippers';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                ShippersService[x] = function (r, s, o) {
                    return Q.serviceRequest(ShippersService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(ShippersService = NorthWind.ShippersService || (NorthWind.ShippersService = {}));
    })(NorthWind = Yaxie.NorthWind || (Yaxie.NorthWind = {}));
})(Yaxie || (Yaxie = {}));
var Yaxie;
(function (Yaxie) {
    var NorthWind;
    (function (NorthWind) {
        var SuppliersForm = /** @class */ (function (_super) {
            __extends(SuppliersForm, _super);
            function SuppliersForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!SuppliersForm.init) {
                    SuppliersForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    Q.initFormType(SuppliersForm, [
                        'CompanyName', w0,
                        'ContactName', w0,
                        'ContactTitle', w0,
                        'Address', w0,
                        'City', w0,
                        'Region', w0,
                        'PostalCode', w0,
                        'Country', w0,
                        'Phone', w0,
                        'Fax', w0,
                        'HomePage', w0
                    ]);
                }
                return _this;
            }
            SuppliersForm.formKey = 'NorthWind.Suppliers';
            return SuppliersForm;
        }(Serenity.PrefixedContext));
        NorthWind.SuppliersForm = SuppliersForm;
    })(NorthWind = Yaxie.NorthWind || (Yaxie.NorthWind = {}));
})(Yaxie || (Yaxie = {}));
var Yaxie;
(function (Yaxie) {
    var NorthWind;
    (function (NorthWind) {
        var SuppliersRow;
        (function (SuppliersRow) {
            SuppliersRow.idProperty = 'SupplierId';
            SuppliersRow.nameProperty = 'CompanyName';
            SuppliersRow.localTextPrefix = 'NorthWind.Suppliers';
            SuppliersRow.deletePermission = 'Administration:General';
            SuppliersRow.insertPermission = 'Administration:General';
            SuppliersRow.readPermission = 'Administration:General';
            SuppliersRow.updatePermission = 'Administration:General';
        })(SuppliersRow = NorthWind.SuppliersRow || (NorthWind.SuppliersRow = {}));
    })(NorthWind = Yaxie.NorthWind || (Yaxie.NorthWind = {}));
})(Yaxie || (Yaxie = {}));
var Yaxie;
(function (Yaxie) {
    var NorthWind;
    (function (NorthWind) {
        var SuppliersService;
        (function (SuppliersService) {
            SuppliersService.baseUrl = 'NorthWind/Suppliers';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                SuppliersService[x] = function (r, s, o) {
                    return Q.serviceRequest(SuppliersService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(SuppliersService = NorthWind.SuppliersService || (NorthWind.SuppliersService = {}));
    })(NorthWind = Yaxie.NorthWind || (Yaxie.NorthWind = {}));
})(Yaxie || (Yaxie = {}));
var Yaxie;
(function (Yaxie) {
    var NorthWind;
    (function (NorthWind) {
        var TerritoriesForm = /** @class */ (function (_super) {
            __extends(TerritoriesForm, _super);
            function TerritoriesForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!TerritoriesForm.init) {
                    TerritoriesForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = s.IntegerEditor;
                    Q.initFormType(TerritoriesForm, [
                        'TerritoryId', w0,
                        'TerritoryDescription', w0,
                        'RegionId', w1
                    ]);
                }
                return _this;
            }
            TerritoriesForm.formKey = 'NorthWind.Territories';
            return TerritoriesForm;
        }(Serenity.PrefixedContext));
        NorthWind.TerritoriesForm = TerritoriesForm;
    })(NorthWind = Yaxie.NorthWind || (Yaxie.NorthWind = {}));
})(Yaxie || (Yaxie = {}));
var Yaxie;
(function (Yaxie) {
    var NorthWind;
    (function (NorthWind) {
        var TerritoriesRow;
        (function (TerritoriesRow) {
            TerritoriesRow.idProperty = 'Id';
            TerritoriesRow.nameProperty = 'TerritoryId';
            TerritoriesRow.localTextPrefix = 'NorthWind.Territories';
            TerritoriesRow.deletePermission = 'Administration:General';
            TerritoriesRow.insertPermission = 'Administration:General';
            TerritoriesRow.readPermission = 'Administration:General';
            TerritoriesRow.updatePermission = 'Administration:General';
        })(TerritoriesRow = NorthWind.TerritoriesRow || (NorthWind.TerritoriesRow = {}));
    })(NorthWind = Yaxie.NorthWind || (Yaxie.NorthWind = {}));
})(Yaxie || (Yaxie = {}));
var Yaxie;
(function (Yaxie) {
    var NorthWind;
    (function (NorthWind) {
        var TerritoriesService;
        (function (TerritoriesService) {
            TerritoriesService.baseUrl = 'NorthWind/Territories';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                TerritoriesService[x] = function (r, s, o) {
                    return Q.serviceRequest(TerritoriesService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(TerritoriesService = NorthWind.TerritoriesService || (NorthWind.TerritoriesService = {}));
    })(NorthWind = Yaxie.NorthWind || (Yaxie.NorthWind = {}));
})(Yaxie || (Yaxie = {}));
var Yaxie;
(function (Yaxie) {
    var Texts;
    (function (Texts) {
        Yaxie['Texts'] = Q.proxyTexts(Texts, '', { Db: { Administration: { Language: { Id: 1, LanguageId: 1, LanguageName: 1 }, Role: { RoleId: 1, RoleName: 1 }, RolePermission: { PermissionKey: 1, RoleId: 1, RolePermissionId: 1, RoleRoleName: 1 }, Translation: { CustomText: 1, EntityPlural: 1, Key: 1, OverrideConfirmation: 1, SaveChangesButton: 1, SourceLanguage: 1, SourceText: 1, TargetLanguage: 1, TargetText: 1 }, User: { DisplayName: 1, Email: 1, InsertDate: 1, InsertUserId: 1, IsActive: 1, LastDirectoryUpdate: 1, Password: 1, PasswordConfirm: 1, PasswordHash: 1, PasswordSalt: 1, Source: 1, UpdateDate: 1, UpdateUserId: 1, UserId: 1, UserImage: 1, Username: 1 }, UserPermission: { Granted: 1, PermissionKey: 1, User: 1, UserId: 1, UserPermissionId: 1, Username: 1 }, UserRole: { RoleId: 1, User: 1, UserId: 1, UserRoleId: 1, Username: 1 } }, Common: { ImportSource: { Description: 1, ImportSourceId: 1 }, ImportType: { Description: 1, ImportTypeId: 1 }, ImportWizard: { ArchiveFolder: 1, ColumnErrorCount: 1, Description: 1, EndAtRow: 1, ErrorList: 1, FieldDelimiterId: 1, FieldMatchDisplay: 1, FieldMatchList: 1, ImportFileList: 1, ImportSourceId: 1, ImportTypeDescription: 1, ImportTypeId: 1, ImportWizardId: 1, KeyColumn: 1, KeyType: 1, LastRunDate: 1, MatchOnFieldNames: 1, MatchOnLabels: 1, NoteList: 1, RowErrorCount: 1, SourceDirectory: 1, StartAtRow: 1, TargetDatabase: 1 }, Note: { EntityId: 1, EntityType: 1, InsertDate: 1, InsertUserDisplayName: 1, InsertUserId: 1, NoteId: 1, NoteText: 1 }, UserPreference: { Name: 1, PreferenceType: 1, UserId: 1, UserPreferenceId: 1, Value: 1 } }, NorthWind: { Categories: { CategoryId: 1, CategoryName: 1, Description: 1, Picture: 1 }, CategoryLang: { CategoryId: 1, CategoryName: 1, Description: 1, Id: 1, LanguageId: 1 }, CustomerDetails: { Email: 1, Id: 1, LastContactDate: 1, LastContactedBy: 1, LastContactedByAddress: 1, LastContactedByBirthDate: 1, LastContactedByCity: 1, LastContactedByCountry: 1, LastContactedByExtension: 1, LastContactedByFirstName: 1, LastContactedByHireDate: 1, LastContactedByHomePhone: 1, LastContactedByLastName: 1, LastContactedByNotes: 1, LastContactedByPhoto: 1, LastContactedByPhotoPath: 1, LastContactedByPostalCode: 1, LastContactedByRegion: 1, LastContactedByReportsTo: 1, LastContactedByTitle: 1, LastContactedByTitleOfCourtesy: 1, SendBulletin: 1 }, Customers: { Address: 1, City: 1, CompanyName: 1, ContactName: 1, ContactTitle: 1, Country: 1, CustomerId: 1, Fax: 1, Id: 1, Phone: 1, PostalCode: 1, Region: 1 }, EmployeeTerritories: { EmployeeAddress: 1, EmployeeBirthDate: 1, EmployeeCity: 1, EmployeeCountry: 1, EmployeeExtension: 1, EmployeeFirstName: 1, EmployeeHireDate: 1, EmployeeHomePhone: 1, EmployeeId: 1, EmployeeLastName: 1, EmployeeNotes: 1, EmployeePhoto: 1, EmployeePhotoPath: 1, EmployeePostalCode: 1, EmployeeRegion: 1, EmployeeReportsTo: 1, EmployeeTitle: 1, EmployeeTitleOfCourtesy: 1, TerritoryId: 1, TerritoryId1: 1, TerritoryRegionId: 1, TerritoryTerritoryDescription: 1 }, Employees: { Address: 1, BirthDate: 1, City: 1, Country: 1, EmployeeId: 1, Extension: 1, FirstName: 1, HireDate: 1, HomePhone: 1, LastName: 1, Notes: 1, Photo: 1, PhotoPath: 1, PostalCode: 1, Region: 1, ReportsTo: 1, ReportsTo1: 1, ReportsToAddress: 1, ReportsToBirthDate: 1, ReportsToCity: 1, ReportsToCountry: 1, ReportsToExtension: 1, ReportsToFirstName: 1, ReportsToHireDate: 1, ReportsToHomePhone: 1, ReportsToLastName: 1, ReportsToNotes: 1, ReportsToPhoto: 1, ReportsToPhotoPath: 1, ReportsToPostalCode: 1, ReportsToRegion: 1, ReportsToTitle: 1, ReportsToTitleOfCourtesy: 1, Title: 1, TitleOfCourtesy: 1 }, Invoices: { Address: 1, City: 1, Country: 1, CustomerId: 1, CustomerName: 1, Discount: 1, ExtendedPrice: 1, Freight: 1, OrderDate: 1, OrderId: 1, PostalCode: 1, ProductId: 1, ProductName: 1, Quantity: 1, Region: 1, RequiredDate: 1, Salesperson: 1, ShipAddress: 1, ShipCity: 1, ShipCountry: 1, ShipName: 1, ShipPostalCode: 1, ShipRegion: 1, ShippedDate: 1, ShipperName: 1, UnitPrice: 1 }, Notes: { EntityId: 1, EntityType: 1, InsertDate: 1, InsertUserId: 1, NoteId: 1, Text: 1 }, OrderDetails: { DetailId: 1, Discount: 1, OrderCustomerId: 1, OrderEmployeeId: 1, OrderFreight: 1, OrderId: 1, OrderOrderDate: 1, OrderRequiredDate: 1, OrderShipAddress: 1, OrderShipCity: 1, OrderShipCountry: 1, OrderShipName: 1, OrderShipPostalCode: 1, OrderShipRegion: 1, OrderShipVia: 1, OrderShippedDate: 1, ProductCategoryId: 1, ProductDiscontinued: 1, ProductId: 1, ProductProductImage: 1, ProductProductName: 1, ProductQuantityPerUnit: 1, ProductReorderLevel: 1, ProductSupplierId: 1, ProductUnitPrice: 1, ProductUnitsInStock: 1, ProductUnitsOnOrder: 1, Quantity: 1, UnitPrice: 1 }, Orders: { CustomerAddress: 1, CustomerCity: 1, CustomerCompanyName: 1, CustomerContactName: 1, CustomerContactTitle: 1, CustomerCountry: 1, CustomerFax: 1, CustomerId: 1, CustomerId1: 1, CustomerPhone: 1, CustomerPostalCode: 1, CustomerRegion: 1, EmployeeAddress: 1, EmployeeBirthDate: 1, EmployeeCity: 1, EmployeeCountry: 1, EmployeeExtension: 1, EmployeeFirstName: 1, EmployeeHireDate: 1, EmployeeHomePhone: 1, EmployeeId: 1, EmployeeLastName: 1, EmployeeNotes: 1, EmployeePhoto: 1, EmployeePhotoPath: 1, EmployeePostalCode: 1, EmployeeRegion: 1, EmployeeReportsTo: 1, EmployeeTitle: 1, EmployeeTitleOfCourtesy: 1, Freight: 1, OrderDate: 1, OrderId: 1, RequiredDate: 1, ShipAddress: 1, ShipCity: 1, ShipCountry: 1, ShipName: 1, ShipPostalCode: 1, ShipRegion: 1, ShipVia: 1, ShipViaCompanyName: 1, ShipViaPhone: 1, ShippedDate: 1 }, ProductLang: { Id: 1, LanguageId: 1, ProductId: 1, ProductName: 1 }, Products: { CategoryCategoryName: 1, CategoryDescription: 1, CategoryId: 1, CategoryPicture: 1, Discontinued: 1, ProductId: 1, ProductImage: 1, ProductName: 1, QuantityPerUnit: 1, ReorderLevel: 1, SupplierAddress: 1, SupplierCity: 1, SupplierCompanyName: 1, SupplierContactName: 1, SupplierContactTitle: 1, SupplierCountry: 1, SupplierFax: 1, SupplierHomePage: 1, SupplierId: 1, SupplierPhone: 1, SupplierPostalCode: 1, SupplierRegion: 1, UnitPrice: 1, UnitsInStock: 1, UnitsOnOrder: 1 }, ProductsbyCategory: { CategoryName: 1, Discontinued: 1, ProductName: 1, QuantityPerUnit: 1, UnitsInStock: 1 }, Region: { RegionDescription: 1, RegionId: 1 }, Shippers: { CompanyName: 1, Phone: 1, ShipperId: 1 }, Suppliers: { Address: 1, City: 1, CompanyName: 1, ContactName: 1, ContactTitle: 1, Country: 1, Fax: 1, HomePage: 1, Phone: 1, PostalCode: 1, Region: 1, SupplierId: 1 }, Territories: { Id: 1, RegionId: 1, RegionRegionDescription: 1, TerritoryDescription: 1, TerritoryId: 1 } } }, Forms: { Membership: { ChangePassword: { FormTitle: 1, SubmitButton: 1, Success: 1 }, ForgotPassword: { BackToLogin: 1, FormInfo: 1, FormTitle: 1, SubmitButton: 1, Success: 1 }, Login: { FacebookButton: 1, ForgotPassword: 1, FormTitle: 1, GoogleButton: 1, OR: 1, RememberMe: 1, SignInButton: 1, SignUpButton: 1 }, ResetPassword: { BackToLogin: 1, EmailSubject: 1, FormTitle: 1, SubmitButton: 1, Success: 1 }, SignUp: { AcceptTerms: 1, ActivateEmailSubject: 1, ActivationCompleteMessage: 1, BackToLogin: 1, ConfirmEmail: 1, ConfirmPassword: 1, DisplayName: 1, Email: 1, FormInfo: 1, FormTitle: 1, Password: 1, SubmitButton: 1, Success: 1 } } }, Site: { AccessDenied: { ClickToChangeUser: 1, ClickToLogin: 1, LackPermissions: 1, NotLoggedIn: 1, PageTitle: 1 }, BasicProgressDialog: { CancelTitle: 1, PleaseWait: 1 }, BulkServiceAction: { AllHadErrorsFormat: 1, AllSuccessFormat: 1, ConfirmationFormat: 1, ErrorCount: 1, NothingToProcess: 1, SomeHadErrorsFormat: 1, SuccessCount: 1 }, Dashboard: { ContentDescription: 1 }, Layout: { FooterCopyright: 1, FooterInfo: 1, FooterRights: 1, GeneralSettings: 1, Language: 1, Theme: 1, ThemeBlack: 1, ThemeBlackLight: 1, ThemeBlue: 1, ThemeBlueLight: 1, ThemeGreen: 1, ThemeGreenLight: 1, ThemePurple: 1, ThemePurpleLight: 1, ThemeRed: 1, ThemeRedLight: 1, ThemeYellow: 1, ThemeYellowLight: 1 }, RolePermissionDialog: { DialogTitle: 1, EditButton: 1, SaveSuccess: 1 }, UserDialog: { EditPermissionsButton: 1, EditRolesButton: 1 }, UserPermissionDialog: { DialogTitle: 1, Grant: 1, Permission: 1, Revoke: 1, SaveSuccess: 1 }, UserRoleDialog: { DialogTitle: 1, SaveSuccess: 1 }, ValidationError: { Title: 1 } }, Validation: { AuthenticationError: 1, CantFindUserWithEmail: 1, CurrentPasswordMismatch: 1, DeleteForeignKeyError: 1, EmailConfirm: 1, EmailInUse: 1, InvalidActivateToken: 1, InvalidResetToken: 1, MinRequiredPasswordLength: 1, SavePrimaryKeyError: 1 } });
    })(Texts = Yaxie.Texts || (Yaxie.Texts = {}));
})(Yaxie || (Yaxie = {}));
var Yaxie;
(function (Yaxie) {
    var Administration;
    (function (Administration) {
        var LanguageDialog = /** @class */ (function (_super) {
            __extends(LanguageDialog, _super);
            function LanguageDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Administration.LanguageForm(_this.idPrefix);
                return _this;
            }
            LanguageDialog.prototype.getFormKey = function () { return Administration.LanguageForm.formKey; };
            LanguageDialog.prototype.getIdProperty = function () { return Administration.LanguageRow.idProperty; };
            LanguageDialog.prototype.getLocalTextPrefix = function () { return Administration.LanguageRow.localTextPrefix; };
            LanguageDialog.prototype.getNameProperty = function () { return Administration.LanguageRow.nameProperty; };
            LanguageDialog.prototype.getService = function () { return Administration.LanguageService.baseUrl; };
            LanguageDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], LanguageDialog);
            return LanguageDialog;
        }(Serenity.EntityDialog));
        Administration.LanguageDialog = LanguageDialog;
    })(Administration = Yaxie.Administration || (Yaxie.Administration = {}));
})(Yaxie || (Yaxie = {}));
var Yaxie;
(function (Yaxie) {
    var Administration;
    (function (Administration) {
        var LanguageGrid = /** @class */ (function (_super) {
            __extends(LanguageGrid, _super);
            function LanguageGrid(container) {
                return _super.call(this, container) || this;
            }
            LanguageGrid.prototype.getColumnsKey = function () { return "Administration.Language"; };
            LanguageGrid.prototype.getDialogType = function () { return Administration.LanguageDialog; };
            LanguageGrid.prototype.getIdProperty = function () { return Administration.LanguageRow.idProperty; };
            LanguageGrid.prototype.getLocalTextPrefix = function () { return Administration.LanguageRow.localTextPrefix; };
            LanguageGrid.prototype.getService = function () { return Administration.LanguageService.baseUrl; };
            LanguageGrid.prototype.getDefaultSortBy = function () {
                return ["LanguageName" /* LanguageName */];
            };
            LanguageGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], LanguageGrid);
            return LanguageGrid;
        }(Serenity.EntityGrid));
        Administration.LanguageGrid = LanguageGrid;
    })(Administration = Yaxie.Administration || (Yaxie.Administration = {}));
})(Yaxie || (Yaxie = {}));
var Yaxie;
(function (Yaxie) {
    var Administration;
    (function (Administration) {
        var RoleDialog = /** @class */ (function (_super) {
            __extends(RoleDialog, _super);
            function RoleDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Administration.RoleForm(_this.idPrefix);
                return _this;
            }
            RoleDialog.prototype.getFormKey = function () { return Administration.RoleForm.formKey; };
            RoleDialog.prototype.getIdProperty = function () { return Administration.RoleRow.idProperty; };
            RoleDialog.prototype.getLocalTextPrefix = function () { return Administration.RoleRow.localTextPrefix; };
            RoleDialog.prototype.getNameProperty = function () { return Administration.RoleRow.nameProperty; };
            RoleDialog.prototype.getService = function () { return Administration.RoleService.baseUrl; };
            RoleDialog.prototype.getToolbarButtons = function () {
                var _this = this;
                var buttons = _super.prototype.getToolbarButtons.call(this);
                buttons.push({
                    title: Q.text('Site.RolePermissionDialog.EditButton'),
                    cssClass: 'edit-permissions-button',
                    icon: 'fa-lock text-green',
                    onClick: function () {
                        new Administration.RolePermissionDialog({
                            roleID: _this.entity.RoleId,
                            title: _this.entity.RoleName
                        }).dialogOpen();
                    }
                });
                return buttons;
            };
            RoleDialog.prototype.updateInterface = function () {
                _super.prototype.updateInterface.call(this);
                this.toolbar.findButton("edit-permissions-button").toggleClass("disabled", this.isNewOrDeleted());
            };
            RoleDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], RoleDialog);
            return RoleDialog;
        }(Serenity.EntityDialog));
        Administration.RoleDialog = RoleDialog;
    })(Administration = Yaxie.Administration || (Yaxie.Administration = {}));
})(Yaxie || (Yaxie = {}));
var Yaxie;
(function (Yaxie) {
    var Administration;
    (function (Administration) {
        var RoleGrid = /** @class */ (function (_super) {
            __extends(RoleGrid, _super);
            function RoleGrid(container) {
                return _super.call(this, container) || this;
            }
            RoleGrid.prototype.getColumnsKey = function () { return "Administration.Role"; };
            RoleGrid.prototype.getDialogType = function () { return Administration.RoleDialog; };
            RoleGrid.prototype.getIdProperty = function () { return Administration.RoleRow.idProperty; };
            RoleGrid.prototype.getLocalTextPrefix = function () { return Administration.RoleRow.localTextPrefix; };
            RoleGrid.prototype.getService = function () { return Administration.RoleService.baseUrl; };
            RoleGrid.prototype.getDefaultSortBy = function () {
                return ["RoleName" /* RoleName */];
            };
            RoleGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], RoleGrid);
            return RoleGrid;
        }(Serenity.EntityGrid));
        Administration.RoleGrid = RoleGrid;
    })(Administration = Yaxie.Administration || (Yaxie.Administration = {}));
})(Yaxie || (Yaxie = {}));
var Yaxie;
(function (Yaxie) {
    var Administration;
    (function (Administration) {
        var RolePermissionDialog = /** @class */ (function (_super) {
            __extends(RolePermissionDialog, _super);
            function RolePermissionDialog(opt) {
                var _this = _super.call(this, opt) || this;
                _this.permissions = new Administration.PermissionCheckEditor(_this.byId('Permissions'), {
                    showRevoke: false
                });
                Administration.RolePermissionService.List({
                    RoleID: _this.options.roleID,
                    Module: null,
                    Submodule: null
                }, function (response) {
                    _this.permissions.value = response.Entities.map(function (x) { return ({ PermissionKey: x }); });
                });
                _this.permissions.implicitPermissions = Q.getRemoteData('Administration.ImplicitPermissions');
                return _this;
            }
            RolePermissionDialog.prototype.getDialogOptions = function () {
                var _this = this;
                var opt = _super.prototype.getDialogOptions.call(this);
                opt.buttons = [
                    {
                        text: Q.text('Dialogs.OkButton'),
                        click: function (e) {
                            Administration.RolePermissionService.Update({
                                RoleID: _this.options.roleID,
                                Permissions: _this.permissions.value.map(function (x) { return x.PermissionKey; }),
                                Module: null,
                                Submodule: null
                            }, function (response) {
                                _this.dialogClose();
                                window.setTimeout(function () { return Q.notifySuccess(Q.text('Site.RolePermissionDialog.SaveSuccess')); }, 0);
                            });
                        }
                    }, {
                        text: Q.text('Dialogs.CancelButton'),
                        click: function () { return _this.dialogClose(); }
                    }
                ];
                opt.title = Q.format(Q.text('Site.RolePermissionDialog.DialogTitle'), this.options.title);
                return opt;
            };
            RolePermissionDialog.prototype.getTemplate = function () {
                return '<div id="~_Permissions"></div>';
            };
            RolePermissionDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], RolePermissionDialog);
            return RolePermissionDialog;
        }(Serenity.TemplatedDialog));
        Administration.RolePermissionDialog = RolePermissionDialog;
    })(Administration = Yaxie.Administration || (Yaxie.Administration = {}));
})(Yaxie || (Yaxie = {}));
var Yaxie;
(function (Yaxie) {
    var Administration;
    (function (Administration) {
        var SergenPanel = /** @class */ (function (_super) {
            __extends(SergenPanel, _super);
            function SergenPanel(container) {
                var _this = _super.call(this, container) || this;
                var vm = new Vue({
                    el: $('<div/>').appendTo(_this.element)[0],
                    data: {
                        connection: "",
                        connections: [],
                        tables: [],
                        generate: {
                            Row: true,
                            Service: true,
                            UI: true
                        }
                    },
                    methods: {
                        generateCode: function (table) {
                            if (!table.Identifier) {
                                Q.notifyError("Identifier cannot be empty!");
                                return;
                            }
                            if (!table.Module) {
                                Q.notifyError("Module cannot be empty!");
                                return;
                            }
                            Administration.SergenService.Generate({
                                ConnectionKey: this.connection,
                                Table: table,
                                GenerateOptions: this.generate
                            }, function (r) {
                                Q.notifySuccess("Code for selected table is generated. You'll need to rebuild your project.");
                            });
                        }
                    },
                    watch: {
                        connection: function (val) {
                            if (!val || !val.length)
                                vm.tables = [];
                            else
                                Administration.SergenService.ListTables({
                                    ConnectionKey: val
                                }, function (response) { return vm.tables = response.Entities; });
                        }
                    },
                    template: Q.getTemplate('Administration.SergenPanel')
                });
                Administration.SergenService.ListConnections({}, function (response) { return vm.connections = response.Entities; });
                return _this;
            }
            return SergenPanel;
        }(Serenity.Widget));
        Administration.SergenPanel = SergenPanel;
    })(Administration = Yaxie.Administration || (Yaxie.Administration = {}));
})(Yaxie || (Yaxie = {}));
var Yaxie;
(function (Yaxie) {
    var Administration;
    (function (Administration) {
        var TranslationGrid = /** @class */ (function (_super) {
            __extends(TranslationGrid, _super);
            function TranslationGrid(container) {
                var _this = _super.call(this, container) || this;
                _this.element.on('keyup.' + _this.uniqueName + ' change.' + _this.uniqueName, 'input.custom-text', function (e) {
                    var value = Q.trimToNull($(e.target).val());
                    if (value === '') {
                        value = null;
                    }
                    _this.view.getItemById($(e.target).data('key')).CustomText = value;
                    _this.hasChanges = true;
                });
                return _this;
            }
            TranslationGrid.prototype.getIdProperty = function () { return "Key"; };
            TranslationGrid.prototype.getLocalTextPrefix = function () { return "Administration.Translation"; };
            TranslationGrid.prototype.getService = function () { return Administration.TranslationService.baseUrl; };
            TranslationGrid.prototype.onClick = function (e, row, cell) {
                var _this = this;
                _super.prototype.onClick.call(this, e, row, cell);
                if (e.isDefaultPrevented()) {
                    return;
                }
                var item = this.itemAt(row);
                var done;
                if ($(e.target).hasClass('source-text')) {
                    e.preventDefault();
                    done = function () {
                        item.CustomText = item.SourceText;
                        _this.view.updateItem(item.Key, item);
                        _this.hasChanges = true;
                    };
                    if (Q.isTrimmedEmpty(item.CustomText) ||
                        (Q.trimToEmpty(item.CustomText) === Q.trimToEmpty(item.SourceText))) {
                        done();
                        return;
                    }
                    Q.confirm(Q.text('Db.Administration.Translation.OverrideConfirmation'), done);
                    return;
                }
                if ($(e.target).hasClass('target-text')) {
                    e.preventDefault();
                    done = function () {
                        item.CustomText = item.TargetText;
                        _this.view.updateItem(item.Key, item);
                        _this.hasChanges = true;
                    };
                    if (Q.isTrimmedEmpty(item.CustomText) ||
                        (Q.trimToEmpty(item.CustomText) === Q.trimToEmpty(item.TargetText))) {
                        done();
                        return;
                    }
                    Q.confirm(Q.text('Db.Administration.Translation.OverrideConfirmation'), done);
                    return;
                }
            };
            TranslationGrid.prototype.getColumns = function () {
                var columns = [];
                columns.push({ field: 'Key', width: 300, sortable: false });
                columns.push({
                    field: 'SourceText',
                    width: 300,
                    sortable: false,
                    format: function (ctx) {
                        return Q.outerHtml($('<a/>')
                            .addClass('source-text')
                            .text(ctx.value || ''));
                    }
                });
                columns.push({
                    field: 'CustomText',
                    width: 300,
                    sortable: false,
                    format: function (ctx) { return Q.outerHtml($('<input/>')
                        .addClass('custom-text')
                        .attr('value', ctx.value)
                        .attr('type', 'text')
                        .attr('data-key', ctx.item.Key)); }
                });
                columns.push({
                    field: 'TargetText',
                    width: 300,
                    sortable: false,
                    format: function (ctx) { return Q.outerHtml($('<a/>')
                        .addClass('target-text')
                        .text(ctx.value || '')); }
                });
                return columns;
            };
            TranslationGrid.prototype.createToolbarExtensions = function () {
                var _this = this;
                _super.prototype.createToolbarExtensions.call(this);
                var opt = {
                    lookupKey: 'Administration.Language'
                };
                this.sourceLanguage = Serenity.Widget.create({
                    type: Serenity.LookupEditor,
                    element: function (el) { return el.appendTo(_this.toolbar.element).attr('placeholder', '--- ' +
                        Q.text('Db.Administration.Translation.SourceLanguage') + ' ---'); },
                    options: opt
                });
                this.sourceLanguage.changeSelect2(function (e) {
                    if (_this.hasChanges) {
                        _this.saveChanges(_this.targetLanguageKey).then(function () { return _this.refresh(); });
                    }
                    else {
                        _this.refresh();
                    }
                });
                this.targetLanguage = Serenity.Widget.create({
                    type: Serenity.LookupEditor,
                    element: function (el) { return el.appendTo(_this.toolbar.element).attr('placeholder', '--- ' +
                        Q.text('Db.Administration.Translation.TargetLanguage') + ' ---'); },
                    options: opt
                });
                this.targetLanguage.changeSelect2(function (e) {
                    if (_this.hasChanges) {
                        _this.saveChanges(_this.targetLanguageKey).then(function () { return _this.refresh(); });
                    }
                    else {
                        _this.refresh();
                    }
                });
            };
            TranslationGrid.prototype.saveChanges = function (language) {
                var _this = this;
                var translations = {};
                for (var _i = 0, _a = this.getItems(); _i < _a.length; _i++) {
                    var item = _a[_i];
                    translations[item.Key] = item.CustomText;
                }
                return Promise.resolve(Administration.TranslationService.Update({
                    TargetLanguageID: language,
                    Translations: translations
                })).then(function () {
                    _this.hasChanges = false;
                    language = Q.trimToNull(language) || 'invariant';
                    Q.notifySuccess('User translations in "' + language +
                        '" language are saved to "user.texts.' +
                        language + '.json" ' + 'file under "~/App_Data/texts/"', '');
                });
            };
            TranslationGrid.prototype.onViewSubmit = function () {
                var request = this.view.params;
                request.SourceLanguageID = this.sourceLanguage.value;
                this.targetLanguageKey = this.targetLanguage.value || '';
                request.TargetLanguageID = this.targetLanguageKey;
                this.hasChanges = false;
                return _super.prototype.onViewSubmit.call(this);
            };
            TranslationGrid.prototype.getButtons = function () {
                var _this = this;
                return [{
                        title: Q.text('Db.Administration.Translation.SaveChangesButton'),
                        onClick: function (e) { return _this.saveChanges(_this.targetLanguageKey).then(function () { return _this.refresh(); }); },
                        cssClass: 'apply-changes-button'
                    }];
            };
            TranslationGrid.prototype.createQuickSearchInput = function () {
                var _this = this;
                Serenity.GridUtils.addQuickSearchInputCustom(this.toolbar.element, function (field, searchText) {
                    _this.searchText = searchText;
                    _this.view.setItems(_this.view.getItems(), true);
                });
            };
            TranslationGrid.prototype.onViewFilter = function (item) {
                if (!_super.prototype.onViewFilter.call(this, item)) {
                    return false;
                }
                if (!this.searchText) {
                    return true;
                }
                var sd = Select2.util.stripDiacritics;
                var searching = sd(this.searchText).toLowerCase();
                function match(str) {
                    if (!str)
                        return false;
                    return str.toLowerCase().indexOf(searching) >= 0;
                }
                return Q.isEmptyOrNull(searching) || match(item.Key) || match(item.SourceText) ||
                    match(item.TargetText) || match(item.CustomText);
            };
            TranslationGrid.prototype.usePager = function () {
                return false;
            };
            TranslationGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], TranslationGrid);
            return TranslationGrid;
        }(Serenity.EntityGrid));
        Administration.TranslationGrid = TranslationGrid;
    })(Administration = Yaxie.Administration || (Yaxie.Administration = {}));
})(Yaxie || (Yaxie = {}));
var Yaxie;
(function (Yaxie) {
    var Administration;
    (function (Administration) {
        var UserDialog = /** @class */ (function (_super) {
            __extends(UserDialog, _super);
            function UserDialog() {
                var _this = _super.call(this) || this;
                _this.form = new Administration.UserForm(_this.idPrefix);
                _this.form.Password.addValidationRule(_this.uniqueName, function (e) {
                    if (_this.form.Password.value.length < 7)
                        return "Password must be at least 7 characters!";
                });
                _this.form.PasswordConfirm.addValidationRule(_this.uniqueName, function (e) {
                    if (_this.form.Password.value != _this.form.PasswordConfirm.value)
                        return "The passwords entered doesn't match!";
                });
                return _this;
            }
            UserDialog.prototype.getFormKey = function () { return Administration.UserForm.formKey; };
            UserDialog.prototype.getIdProperty = function () { return Administration.UserRow.idProperty; };
            UserDialog.prototype.getIsActiveProperty = function () { return Administration.UserRow.isActiveProperty; };
            UserDialog.prototype.getLocalTextPrefix = function () { return Administration.UserRow.localTextPrefix; };
            UserDialog.prototype.getNameProperty = function () { return Administration.UserRow.nameProperty; };
            UserDialog.prototype.getService = function () { return Administration.UserService.baseUrl; };
            UserDialog.prototype.getToolbarButtons = function () {
                var _this = this;
                var buttons = _super.prototype.getToolbarButtons.call(this);
                buttons.push({
                    title: Q.text('Site.UserDialog.EditRolesButton'),
                    cssClass: 'edit-roles-button',
                    icon: 'fa-users text-blue',
                    onClick: function () {
                        new Administration.UserRoleDialog({
                            userID: _this.entity.UserId,
                            username: _this.entity.Username
                        }).dialogOpen();
                    }
                });
                buttons.push({
                    title: Q.text('Site.UserDialog.EditPermissionsButton'),
                    cssClass: 'edit-permissions-button',
                    icon: 'fa-lock text-green',
                    onClick: function () {
                        new Administration.UserPermissionDialog({
                            userID: _this.entity.UserId,
                            username: _this.entity.Username
                        }).dialogOpen();
                    }
                });
                return buttons;
            };
            UserDialog.prototype.updateInterface = function () {
                _super.prototype.updateInterface.call(this);
                this.toolbar.findButton('edit-roles-button').toggleClass('disabled', this.isNewOrDeleted());
                this.toolbar.findButton("edit-permissions-button").toggleClass("disabled", this.isNewOrDeleted());
            };
            UserDialog.prototype.afterLoadEntity = function () {
                _super.prototype.afterLoadEntity.call(this);
                // these fields are only required in new record mode
                this.form.Password.element.toggleClass('required', this.isNew())
                    .closest('.field').find('sup').toggle(this.isNew());
                this.form.PasswordConfirm.element.toggleClass('required', this.isNew())
                    .closest('.field').find('sup').toggle(this.isNew());
            };
            UserDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], UserDialog);
            return UserDialog;
        }(Serenity.EntityDialog));
        Administration.UserDialog = UserDialog;
    })(Administration = Yaxie.Administration || (Yaxie.Administration = {}));
})(Yaxie || (Yaxie = {}));
var Yaxie;
(function (Yaxie) {
    var Administration;
    (function (Administration) {
        var UserGrid = /** @class */ (function (_super) {
            __extends(UserGrid, _super);
            function UserGrid(container) {
                return _super.call(this, container) || this;
            }
            UserGrid.prototype.getColumnsKey = function () { return "Administration.User"; };
            UserGrid.prototype.getDialogType = function () { return Administration.UserDialog; };
            UserGrid.prototype.getIdProperty = function () { return Administration.UserRow.idProperty; };
            UserGrid.prototype.getIsActiveProperty = function () { return Administration.UserRow.isActiveProperty; };
            UserGrid.prototype.getLocalTextPrefix = function () { return Administration.UserRow.localTextPrefix; };
            UserGrid.prototype.getService = function () { return Administration.UserService.baseUrl; };
            UserGrid.prototype.getDefaultSortBy = function () {
                return ["Username" /* Username */];
            };
            UserGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], UserGrid);
            return UserGrid;
        }(Serenity.EntityGrid));
        Administration.UserGrid = UserGrid;
    })(Administration = Yaxie.Administration || (Yaxie.Administration = {}));
})(Yaxie || (Yaxie = {}));
var Yaxie;
(function (Yaxie) {
    var Authorization;
    (function (Authorization) {
        Object.defineProperty(Authorization, 'userDefinition', {
            get: function () {
                return Q.getRemoteData('UserData');
            }
        });
        function hasPermission(permissionKey) {
            var ud = Authorization.userDefinition;
            return ud.Username === 'admin' || !!ud.Permissions[permissionKey];
        }
        Authorization.hasPermission = hasPermission;
    })(Authorization = Yaxie.Authorization || (Yaxie.Authorization = {}));
})(Yaxie || (Yaxie = {}));
var Yaxie;
(function (Yaxie) {
    var Administration;
    (function (Administration) {
        var PermissionCheckEditor = /** @class */ (function (_super) {
            __extends(PermissionCheckEditor, _super);
            function PermissionCheckEditor(container, opt) {
                var _this = _super.call(this, container, opt) || this;
                _this._rolePermissions = {};
                _this._implicitPermissions = {};
                var titleByKey = {};
                var permissionKeys = _this.getSortedGroupAndPermissionKeys(titleByKey);
                var items = permissionKeys.map(function (key) { return ({
                    Key: key,
                    ParentKey: _this.getParentKey(key),
                    Title: titleByKey[key],
                    GrantRevoke: null,
                    IsGroup: key.charAt(key.length - 1) === ':'
                }); });
                _this.byParentKey = Q.toGrouping(items, function (x) { return x.ParentKey; });
                _this.setItems(items);
                return _this;
            }
            PermissionCheckEditor.prototype.getIdProperty = function () { return "Key"; };
            PermissionCheckEditor.prototype.getItemGrantRevokeClass = function (item, grant) {
                if (!item.IsGroup) {
                    return ((item.GrantRevoke === grant) ? ' checked' : '');
                }
                var desc = this.getDescendants(item, true);
                var granted = desc.filter(function (x) { return x.GrantRevoke === grant; });
                if (!granted.length) {
                    return '';
                }
                if (desc.length === granted.length) {
                    return 'checked';
                }
                return 'checked partial';
            };
            PermissionCheckEditor.prototype.roleOrImplicit = function (key) {
                if (this._rolePermissions[key])
                    return true;
                for (var _i = 0, _a = Object.keys(this._rolePermissions); _i < _a.length; _i++) {
                    var k = _a[_i];
                    var d = this._implicitPermissions[k];
                    if (d && d[key])
                        return true;
                }
                for (var _b = 0, _c = Object.keys(this._implicitPermissions); _b < _c.length; _b++) {
                    var i = _c[_b];
                    var item = this.view.getItemById(i);
                    if (item && item.GrantRevoke == true) {
                        var d = this._implicitPermissions[i];
                        if (d && d[key])
                            return true;
                    }
                }
            };
            PermissionCheckEditor.prototype.getItemEffectiveClass = function (item) {
                var _this = this;
                if (item.IsGroup) {
                    var desc = this.getDescendants(item, true);
                    var grantCount = Q.count(desc, function (x) { return x.GrantRevoke === true ||
                        (x.GrantRevoke == null && _this.roleOrImplicit(x.Key)); });
                    if (grantCount === desc.length || desc.length === 0) {
                        return 'allow';
                    }
                    if (grantCount === 0) {
                        return 'deny';
                    }
                    return 'partial';
                }
                var granted = item.GrantRevoke === true ||
                    (item.GrantRevoke == null && this.roleOrImplicit(item.Key));
                return (granted ? ' allow' : ' deny');
            };
            PermissionCheckEditor.prototype.getColumns = function () {
                var _this = this;
                var columns = [{
                        name: Q.text('Site.UserPermissionDialog.Permission'),
                        field: 'Title',
                        format: Serenity.SlickFormatting.treeToggle(function () { return _this.view; }, function (x) { return x.Key; }, function (ctx) {
                            var item = ctx.item;
                            var klass = _this.getItemEffectiveClass(item);
                            return '<span class="effective-permission ' + klass + '">' + Q.htmlEncode(ctx.value) + '</span>';
                        }),
                        width: 495,
                        sortable: false
                    }, {
                        name: Q.text('Site.UserPermissionDialog.Grant'), field: 'Grant',
                        format: function (ctx) {
                            var item1 = ctx.item;
                            var klass1 = _this.getItemGrantRevokeClass(item1, true);
                            return "<span class='check-box grant no-float " + klass1 + "'></span>";
                        },
                        width: 65,
                        sortable: false,
                        headerCssClass: 'align-center',
                        cssClass: 'align-center'
                    }];
                if (this.options.showRevoke) {
                    columns.push({
                        name: Q.text('Site.UserPermissionDialog.Revoke'), field: 'Revoke',
                        format: function (ctx) {
                            var item2 = ctx.item;
                            var klass2 = _this.getItemGrantRevokeClass(item2, false);
                            return '<span class="check-box revoke no-float ' + klass2 + '"></span>';
                        },
                        width: 65,
                        sortable: false,
                        headerCssClass: 'align-center',
                        cssClass: 'align-center'
                    });
                }
                return columns;
            };
            PermissionCheckEditor.prototype.setItems = function (items) {
                Serenity.SlickTreeHelper.setIndents(items, function (x) { return x.Key; }, function (x) { return x.ParentKey; }, false);
                this.view.setItems(items, true);
            };
            PermissionCheckEditor.prototype.onViewSubmit = function () {
                return false;
            };
            PermissionCheckEditor.prototype.onViewFilter = function (item) {
                var _this = this;
                if (!_super.prototype.onViewFilter.call(this, item)) {
                    return false;
                }
                if (!Serenity.SlickTreeHelper.filterById(item, this.view, function (x) { return x.ParentKey; }))
                    return false;
                if (this.searchText) {
                    return this.matchContains(item) || item.IsGroup && Q.any(this.getDescendants(item, false), function (x) { return _this.matchContains(x); });
                }
                return true;
            };
            PermissionCheckEditor.prototype.matchContains = function (item) {
                return Select2.util.stripDiacritics(item.Title || '').toLowerCase().indexOf(this.searchText) >= 0;
            };
            PermissionCheckEditor.prototype.getDescendants = function (item, excludeGroups) {
                var result = [];
                var stack = [item];
                while (stack.length > 0) {
                    var i = stack.pop();
                    var children = this.byParentKey[i.Key];
                    if (!children)
                        continue;
                    for (var _i = 0, children_1 = children; _i < children_1.length; _i++) {
                        var child = children_1[_i];
                        if (!excludeGroups || !child.IsGroup) {
                            result.push(child);
                        }
                        stack.push(child);
                    }
                }
                return result;
            };
            PermissionCheckEditor.prototype.onClick = function (e, row, cell) {
                _super.prototype.onClick.call(this, e, row, cell);
                if (!e.isDefaultPrevented()) {
                    Serenity.SlickTreeHelper.toggleClick(e, row, cell, this.view, function (x) { return x.Key; });
                }
                if (e.isDefaultPrevented()) {
                    return;
                }
                var target = $(e.target);
                var grant = target.hasClass('grant');
                if (grant || target.hasClass('revoke')) {
                    e.preventDefault();
                    var item = this.itemAt(row);
                    var checkedOrPartial = target.hasClass('checked') || target.hasClass('partial');
                    if (checkedOrPartial) {
                        grant = null;
                    }
                    else {
                        grant = grant !== checkedOrPartial;
                    }
                    if (item.IsGroup) {
                        for (var _i = 0, _a = this.getDescendants(item, true); _i < _a.length; _i++) {
                            var d = _a[_i];
                            d.GrantRevoke = grant;
                        }
                    }
                    else
                        item.GrantRevoke = grant;
                    this.slickGrid.invalidate();
                }
            };
            PermissionCheckEditor.prototype.getParentKey = function (key) {
                if (key.charAt(key.length - 1) === ':') {
                    key = key.substr(0, key.length - 1);
                }
                var idx = key.lastIndexOf(':');
                if (idx >= 0) {
                    return key.substr(0, idx + 1);
                }
                return null;
            };
            PermissionCheckEditor.prototype.getButtons = function () {
                return [];
            };
            PermissionCheckEditor.prototype.createToolbarExtensions = function () {
                var _this = this;
                _super.prototype.createToolbarExtensions.call(this);
                Serenity.GridUtils.addQuickSearchInputCustom(this.toolbar.element, function (field, text) {
                    _this.searchText = Select2.util.stripDiacritics(Q.trimToNull(text) || '').toLowerCase();
                    _this.view.setItems(_this.view.getItems(), true);
                });
            };
            PermissionCheckEditor.prototype.getSortedGroupAndPermissionKeys = function (titleByKey) {
                var keys = Q.getRemoteData('Administration.PermissionKeys').Entities;
                var titleWithGroup = {};
                for (var _i = 0, keys_1 = keys; _i < keys_1.length; _i++) {
                    var k = keys_1[_i];
                    var s = k;
                    if (!s) {
                        continue;
                    }
                    if (s.charAt(s.length - 1) == ':') {
                        s = s.substr(0, s.length - 1);
                        if (s.length === 0) {
                            continue;
                        }
                    }
                    if (titleByKey[s]) {
                        continue;
                    }
                    titleByKey[s] = Q.coalesce(Q.tryGetText('Permission.' + s), s);
                    var parts = s.split(':');
                    var group = '';
                    var groupTitle = '';
                    for (var i = 0; i < parts.length - 1; i++) {
                        group = group + parts[i] + ':';
                        var txt = Q.tryGetText('Permission.' + group);
                        if (txt == null) {
                            txt = parts[i];
                        }
                        titleByKey[group] = txt;
                        groupTitle = groupTitle + titleByKey[group] + ':';
                        titleWithGroup[group] = groupTitle;
                    }
                    titleWithGroup[s] = groupTitle + titleByKey[s];
                }
                keys = Object.keys(titleByKey);
                keys = keys.sort(function (x, y) { return Q.turkishLocaleCompare(titleWithGroup[x], titleWithGroup[y]); });
                return keys;
            };
            Object.defineProperty(PermissionCheckEditor.prototype, "value", {
                get: function () {
                    var result = [];
                    for (var _i = 0, _a = this.view.getItems(); _i < _a.length; _i++) {
                        var item = _a[_i];
                        if (item.GrantRevoke != null && item.Key.charAt(item.Key.length - 1) != ':') {
                            result.push({ PermissionKey: item.Key, Granted: item.GrantRevoke });
                        }
                    }
                    return result;
                },
                set: function (value) {
                    for (var _i = 0, _a = this.view.getItems(); _i < _a.length; _i++) {
                        var item = _a[_i];
                        item.GrantRevoke = null;
                    }
                    if (value != null) {
                        for (var _b = 0, value_1 = value; _b < value_1.length; _b++) {
                            var row = value_1[_b];
                            var r = this.view.getItemById(row.PermissionKey);
                            if (r) {
                                r.GrantRevoke = Q.coalesce(row.Granted, true);
                            }
                        }
                    }
                    this.setItems(this.getItems());
                },
                enumerable: false,
                configurable: true
            });
            Object.defineProperty(PermissionCheckEditor.prototype, "rolePermissions", {
                get: function () {
                    return Object.keys(this._rolePermissions);
                },
                set: function (value) {
                    this._rolePermissions = {};
                    if (value) {
                        for (var _i = 0, value_2 = value; _i < value_2.length; _i++) {
                            var k = value_2[_i];
                            this._rolePermissions[k] = true;
                        }
                    }
                    this.setItems(this.getItems());
                },
                enumerable: false,
                configurable: true
            });
            Object.defineProperty(PermissionCheckEditor.prototype, "implicitPermissions", {
                set: function (value) {
                    this._implicitPermissions = {};
                    if (value) {
                        for (var _i = 0, _a = Object.keys(value); _i < _a.length; _i++) {
                            var k = _a[_i];
                            this._implicitPermissions[k] = this._implicitPermissions[k] || {};
                            var l = value[k];
                            if (l) {
                                for (var _b = 0, l_1 = l; _b < l_1.length; _b++) {
                                    var s = l_1[_b];
                                    this._implicitPermissions[k][s] = true;
                                }
                            }
                        }
                    }
                },
                enumerable: false,
                configurable: true
            });
            PermissionCheckEditor = __decorate([
                Serenity.Decorators.registerEditor([Serenity.IGetEditValue, Serenity.ISetEditValue])
            ], PermissionCheckEditor);
            return PermissionCheckEditor;
        }(Serenity.DataGrid));
        Administration.PermissionCheckEditor = PermissionCheckEditor;
    })(Administration = Yaxie.Administration || (Yaxie.Administration = {}));
})(Yaxie || (Yaxie = {}));
var Yaxie;
(function (Yaxie) {
    var Administration;
    (function (Administration) {
        var UserPermissionDialog = /** @class */ (function (_super) {
            __extends(UserPermissionDialog, _super);
            function UserPermissionDialog(opt) {
                var _this = _super.call(this, opt) || this;
                _this.permissions = new Administration.PermissionCheckEditor(_this.byId('Permissions'), {
                    showRevoke: true
                });
                Administration.UserPermissionService.List({
                    UserID: _this.options.userID,
                    Module: null,
                    Submodule: null
                }, function (response) {
                    _this.permissions.value = response.Entities;
                });
                Administration.UserPermissionService.ListRolePermissions({
                    UserID: _this.options.userID,
                    Module: null,
                    Submodule: null,
                }, function (response) {
                    _this.permissions.rolePermissions = response.Entities;
                });
                _this.permissions.implicitPermissions = Q.getRemoteData('Administration.ImplicitPermissions');
                return _this;
            }
            UserPermissionDialog.prototype.getDialogOptions = function () {
                var _this = this;
                var opt = _super.prototype.getDialogOptions.call(this);
                opt.buttons = [
                    {
                        text: Q.text('Dialogs.OkButton'),
                        click: function (e) {
                            Administration.UserPermissionService.Update({
                                UserID: _this.options.userID,
                                Permissions: _this.permissions.value,
                                Module: null,
                                Submodule: null
                            }, function (response) {
                                _this.dialogClose();
                                window.setTimeout(function () { return Q.notifySuccess(Q.text('Site.UserPermissionDialog.SaveSuccess')); }, 0);
                            });
                        }
                    }, {
                        text: Q.text('Dialogs.CancelButton'),
                        click: function () { return _this.dialogClose(); }
                    }
                ];
                opt.title = Q.format(Q.text('Site.UserPermissionDialog.DialogTitle'), this.options.username);
                return opt;
            };
            UserPermissionDialog.prototype.getTemplate = function () {
                return '<div id="~_Permissions"></div>';
            };
            UserPermissionDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], UserPermissionDialog);
            return UserPermissionDialog;
        }(Serenity.TemplatedDialog));
        Administration.UserPermissionDialog = UserPermissionDialog;
    })(Administration = Yaxie.Administration || (Yaxie.Administration = {}));
})(Yaxie || (Yaxie = {}));
var Yaxie;
(function (Yaxie) {
    var Administration;
    (function (Administration) {
        var RoleCheckEditor = /** @class */ (function (_super) {
            __extends(RoleCheckEditor, _super);
            function RoleCheckEditor(div) {
                return _super.call(this, div) || this;
            }
            RoleCheckEditor.prototype.createToolbarExtensions = function () {
                var _this = this;
                _super.prototype.createToolbarExtensions.call(this);
                Serenity.GridUtils.addQuickSearchInputCustom(this.toolbar.element, function (field, text) {
                    _this.searchText = Select2.util.stripDiacritics(text || '').toUpperCase();
                    _this.view.setItems(_this.view.getItems(), true);
                });
            };
            RoleCheckEditor.prototype.getButtons = function () {
                return [];
            };
            RoleCheckEditor.prototype.getTreeItems = function () {
                return Administration.RoleRow.getLookup().items.map(function (role) { return ({
                    id: role.RoleId.toString(),
                    text: role.RoleName
                }); });
            };
            RoleCheckEditor.prototype.onViewFilter = function (item) {
                return _super.prototype.onViewFilter.call(this, item) &&
                    (Q.isEmptyOrNull(this.searchText) ||
                        Select2.util.stripDiacritics(item.text || '')
                            .toUpperCase().indexOf(this.searchText) >= 0);
            };
            RoleCheckEditor = __decorate([
                Serenity.Decorators.registerEditor()
            ], RoleCheckEditor);
            return RoleCheckEditor;
        }(Serenity.CheckTreeEditor));
        Administration.RoleCheckEditor = RoleCheckEditor;
    })(Administration = Yaxie.Administration || (Yaxie.Administration = {}));
})(Yaxie || (Yaxie = {}));
var Yaxie;
(function (Yaxie) {
    var Administration;
    (function (Administration) {
        var UserRoleDialog = /** @class */ (function (_super) {
            __extends(UserRoleDialog, _super);
            function UserRoleDialog(opt) {
                var _this = _super.call(this, opt) || this;
                _this.permissions = new Administration.RoleCheckEditor(_this.byId('Roles'));
                Administration.UserRoleService.List({
                    UserID: _this.options.userID
                }, function (response) {
                    _this.permissions.value = response.Entities.map(function (x) { return x.toString(); });
                });
                return _this;
            }
            UserRoleDialog.prototype.getDialogOptions = function () {
                var _this = this;
                var opt = _super.prototype.getDialogOptions.call(this);
                opt.buttons = [{
                        text: Q.text('Dialogs.OkButton'),
                        click: function () {
                            Q.serviceRequest('Administration/UserRole/Update', {
                                UserID: _this.options.userID,
                                Roles: _this.permissions.value.map(function (x) { return parseInt(x, 10); })
                            }, function (response) {
                                _this.dialogClose();
                                Q.notifySuccess(Q.text('Site.UserRoleDialog.SaveSuccess'));
                            });
                        }
                    }, {
                        text: Q.text('Dialogs.CancelButton'),
                        click: function () { return _this.dialogClose(); }
                    }];
                opt.title = Q.format(Q.text('Site.UserRoleDialog.DialogTitle'), this.options.username);
                return opt;
            };
            UserRoleDialog.prototype.getTemplate = function () {
                return "<div id='~_Roles'></div>";
            };
            UserRoleDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], UserRoleDialog);
            return UserRoleDialog;
        }(Serenity.TemplatedDialog));
        Administration.UserRoleDialog = UserRoleDialog;
    })(Administration = Yaxie.Administration || (Yaxie.Administration = {}));
})(Yaxie || (Yaxie = {}));
var Yaxie;
(function (Yaxie) {
    var LanguageList;
    (function (LanguageList) {
        function getValue() {
            var result = [];
            for (var _i = 0, _a = Yaxie.Administration.LanguageRow.getLookup().items; _i < _a.length; _i++) {
                var k = _a[_i];
                if (k.LanguageId !== 'en') {
                    result.push([k.Id.toString(), k.LanguageName]);
                }
            }
            return result;
        }
        LanguageList.getValue = getValue;
    })(LanguageList = Yaxie.LanguageList || (Yaxie.LanguageList = {}));
})(Yaxie || (Yaxie = {}));
/// <reference path="../Common/Helpers/LanguageList.ts" />
var Yaxie;
(function (Yaxie) {
    var ScriptInitialization;
    (function (ScriptInitialization) {
        Q.Config.responsiveDialogs = true;
        Q.Config.rootNamespaces.push('Yaxie');
        Serenity.EntityDialog.defaultLanguageList = Yaxie.LanguageList.getValue;
        if ($.fn['colorbox']) {
            $.fn['colorbox'].settings.maxWidth = "95%";
            $.fn['colorbox'].settings.maxHeight = "95%";
        }
        window.onerror = Q.ErrorHandling.runtimeErrorHandler;
    })(ScriptInitialization = Yaxie.ScriptInitialization || (Yaxie.ScriptInitialization = {}));
})(Yaxie || (Yaxie = {}));
var Yaxie;
(function (Yaxie) {
    var BasicProgressDialog = /** @class */ (function (_super) {
        __extends(BasicProgressDialog, _super);
        function BasicProgressDialog() {
            var _this = _super.call(this) || this;
            _this.byId('ProgressBar').progressbar({
                max: 100,
                value: 0,
                change: function (e, v) {
                    _this.byId('ProgressLabel').text(_this.value + ' / ' + _this.max);
                }
            });
            return _this;
        }
        Object.defineProperty(BasicProgressDialog.prototype, "max", {
            get: function () {
                return this.byId('ProgressBar').progressbar().progressbar('option', 'max');
            },
            set: function (value) {
                this.byId('ProgressBar').progressbar().progressbar('option', 'max', value);
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(BasicProgressDialog.prototype, "value", {
            get: function () {
                return this.byId('ProgressBar').progressbar('value');
            },
            set: function (value) {
                this.byId('ProgressBar').progressbar().progressbar('value', value);
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(BasicProgressDialog.prototype, "title", {
            get: function () {
                return this.element.dialog().dialog('option', 'title');
            },
            set: function (value) {
                this.element.dialog().dialog('option', 'title', value);
            },
            enumerable: false,
            configurable: true
        });
        BasicProgressDialog.prototype.getDialogOptions = function () {
            var _this = this;
            var opt = _super.prototype.getDialogOptions.call(this);
            opt.title = Q.text('Site.BasicProgressDialog.PleaseWait');
            opt.width = 600;
            opt.buttons = [{
                    text: Q.text('Dialogs.CancelButton'),
                    click: function () {
                        _this.cancelled = true;
                        _this.element.closest('.ui-dialog')
                            .find('.ui-dialog-buttonpane .ui-button')
                            .attr('disabled', 'disabled')
                            .css('opacity', '0.5');
                        _this.element.dialog('option', 'title', Q.trimToNull(_this.cancelTitle) ||
                            Q.text('Site.BasicProgressDialog.CancelTitle'));
                    }
                }];
            return opt;
        };
        BasicProgressDialog.prototype.initDialog = function () {
            _super.prototype.initDialog.call(this);
            this.element.closest('.ui-dialog').find('.ui-dialog-titlebar-close').hide();
        };
        BasicProgressDialog.prototype.getTemplate = function () {
            return ("<div class='s-DialogContent s-BasicProgressDialogContent'>" +
                "<div id='~_StatusText' class='status-text' ></div>" +
                "<div id='~_ProgressBar' class='progress-bar'>" +
                "<div id='~_ProgressLabel' class='progress-label' ></div>" +
                "</div>" +
                "</div>");
        };
        return BasicProgressDialog;
    }(Serenity.TemplatedDialog));
    Yaxie.BasicProgressDialog = BasicProgressDialog;
})(Yaxie || (Yaxie = {}));
var Yaxie;
(function (Yaxie) {
    var Common;
    (function (Common) {
        var BulkServiceAction = /** @class */ (function () {
            function BulkServiceAction() {
            }
            BulkServiceAction.prototype.createProgressDialog = function () {
                this.progressDialog = new Yaxie.BasicProgressDialog();
                this.progressDialog.dialogOpen();
                this.progressDialog.max = this.keys.length;
                this.progressDialog.value = 0;
            };
            BulkServiceAction.prototype.getConfirmationFormat = function () {
                return Q.text('Site.BulkServiceAction.ConfirmationFormat');
            };
            BulkServiceAction.prototype.getConfirmationMessage = function (targetCount) {
                return Q.format(this.getConfirmationFormat(), targetCount);
            };
            BulkServiceAction.prototype.confirm = function (targetCount, action) {
                Q.confirm(this.getConfirmationMessage(targetCount), action);
            };
            BulkServiceAction.prototype.getNothingToProcessMessage = function () {
                return Q.text('Site.BulkServiceAction.NothingToProcess');
            };
            BulkServiceAction.prototype.nothingToProcess = function () {
                Q.notifyError(this.getNothingToProcessMessage());
            };
            BulkServiceAction.prototype.getParallelRequests = function () {
                return 1;
            };
            BulkServiceAction.prototype.getBatchSize = function () {
                return 1;
            };
            BulkServiceAction.prototype.startParallelExecution = function () {
                this.createProgressDialog();
                this.successCount = 0;
                this.errorCount = 0;
                this.pendingRequests = 0;
                this.completedRequests = 0;
                this.errorCount = 0;
                this.errorByKey = {};
                this.queue = this.keys.slice();
                this.queueIndex = 0;
                var parallelRequests = this.getParallelRequests();
                while (parallelRequests-- > 0) {
                    this.executeNextBatch();
                }
            };
            BulkServiceAction.prototype.serviceCallCleanup = function () {
                this.pendingRequests--;
                this.completedRequests++;
                var title = Q.text((this.progressDialog.cancelled ?
                    'Site.BasicProgressDialog.CancelTitle' : 'Site.BasicProgressDialog.PleaseWait'));
                title += ' (';
                if (this.successCount > 0) {
                    title += Q.format(Q.text('Site.BulkServiceAction.SuccessCount'), this.successCount);
                }
                if (this.errorCount > 0) {
                    if (this.successCount > 0) {
                        title += ', ';
                    }
                    title += Q.format(Q.text('Site.BulkServiceAction.ErrorCount'), this.errorCount);
                }
                this.progressDialog.title = title + ')';
                this.progressDialog.value = this.successCount + this.errorCount;
                if (!this.progressDialog.cancelled && this.progressDialog.value < this.keys.length) {
                    this.executeNextBatch();
                }
                else if (this.pendingRequests === 0) {
                    this.progressDialog.dialogClose();
                    this.showResults();
                    if (this.done) {
                        this.done();
                        this.done = null;
                    }
                }
            };
            BulkServiceAction.prototype.executeForBatch = function (batch) {
            };
            BulkServiceAction.prototype.executeNextBatch = function () {
                var batchSize = this.getBatchSize();
                var batch = [];
                while (true) {
                    if (batch.length >= batchSize) {
                        break;
                    }
                    if (this.queueIndex >= this.queue.length) {
                        break;
                    }
                    batch.push(this.queue[this.queueIndex++]);
                }
                if (batch.length > 0) {
                    this.pendingRequests++;
                    this.executeForBatch(batch);
                }
            };
            BulkServiceAction.prototype.getAllHadErrorsFormat = function () {
                return Q.text('Site.BulkServiceAction.AllHadErrorsFormat');
            };
            BulkServiceAction.prototype.showAllHadErrors = function () {
                Q.notifyError(Q.format(this.getAllHadErrorsFormat(), this.errorCount));
            };
            BulkServiceAction.prototype.getSomeHadErrorsFormat = function () {
                return Q.text('Site.BulkServiceAction.SomeHadErrorsFormat');
            };
            BulkServiceAction.prototype.showSomeHadErrors = function () {
                Q.notifyWarning(Q.format(this.getSomeHadErrorsFormat(), this.successCount, this.errorCount));
            };
            BulkServiceAction.prototype.getAllSuccessFormat = function () {
                return Q.text('Site.BulkServiceAction.AllSuccessFormat');
            };
            BulkServiceAction.prototype.showAllSuccess = function () {
                Q.notifySuccess(Q.format(this.getAllSuccessFormat(), this.successCount));
            };
            BulkServiceAction.prototype.showResults = function () {
                if (this.errorCount === 0 && this.successCount === 0) {
                    this.nothingToProcess();
                    return;
                }
                if (this.errorCount > 0 && this.successCount === 0) {
                    this.showAllHadErrors();
                    return;
                }
                if (this.errorCount > 0) {
                    this.showSomeHadErrors();
                    return;
                }
                this.showAllSuccess();
            };
            BulkServiceAction.prototype.execute = function (keys) {
                var _this = this;
                this.keys = keys;
                if (this.keys.length === 0) {
                    this.nothingToProcess();
                    return;
                }
                this.confirm(this.keys.length, function () { return _this.startParallelExecution(); });
            };
            BulkServiceAction.prototype.get_successCount = function () {
                return this.successCount;
            };
            BulkServiceAction.prototype.set_successCount = function (value) {
                this.successCount = value;
            };
            BulkServiceAction.prototype.get_errorCount = function () {
                return this.errorCount;
            };
            BulkServiceAction.prototype.set_errorCount = function (value) {
                this.errorCount = value;
            };
            return BulkServiceAction;
        }());
        Common.BulkServiceAction = BulkServiceAction;
    })(Common = Yaxie.Common || (Yaxie.Common = {}));
})(Yaxie || (Yaxie = {}));
var Yaxie;
(function (Yaxie) {
    var DialogUtils;
    (function (DialogUtils) {
        function pendingChangesConfirmation(element, hasPendingChanges) {
            element.on('dialogbeforeclose panelbeforeclose', function (e) {
                if (!Serenity.WX.hasOriginalEvent(e) || !hasPendingChanges()) {
                    return;
                }
                e.preventDefault();
                Q.confirm('You have pending changes. Save them?', function () { return element.find('div.save-and-close-button').click(); }, {
                    onNo: function () {
                        if (element.hasClass('ui-dialog-content'))
                            element.dialog('close');
                        else if (element.hasClass('s-Panel'))
                            Serenity.TemplatedDialog.closePanel(element);
                    }
                });
            });
        }
        DialogUtils.pendingChangesConfirmation = pendingChangesConfirmation;
    })(DialogUtils = Yaxie.DialogUtils || (Yaxie.DialogUtils = {}));
})(Yaxie || (Yaxie = {}));
var Yaxie;
(function (Yaxie) {
    var Common;
    (function (Common) {
        var EnumSelectFormatter = /** @class */ (function () {
            function EnumSelectFormatter() {
                this.allowClear = true;
            }
            EnumSelectFormatter.prototype.format = function (ctx) {
                var enumType = Serenity.EnumTypeRegistry.get(this.enumKey);
                var sb = "<select>";
                if (this.allowClear) {
                    sb += '<option value="">';
                    sb += Q.htmlEncode(this.emptyItemText || Q.text("Controls.SelectEditor.EmptyItemText"));
                    sb += '</option>';
                }
                for (var _i = 0, _a = Object.keys(enumType).filter(function (v) { return !isNaN(parseInt(v, 10)); }); _i < _a.length; _i++) {
                    var x = _a[_i];
                    sb += '<option value="' + x + '"';
                    if (x == ctx.value)
                        sb += " selected";
                    var name = enumType[x];
                    sb += ">";
                    sb += Q.htmlEncode(Q.tryGetText("Enums." + this.enumKey + "." + name) || name);
                    sb += "</option>";
                }
                sb += "</select>";
                return sb;
            };
            __decorate([
                Serenity.Decorators.option()
            ], EnumSelectFormatter.prototype, "enumKey", void 0);
            __decorate([
                Serenity.Decorators.option()
            ], EnumSelectFormatter.prototype, "allowClear", void 0);
            __decorate([
                Serenity.Decorators.option()
            ], EnumSelectFormatter.prototype, "emptyItemText", void 0);
            EnumSelectFormatter = __decorate([
                Serenity.Decorators.registerFormatter()
            ], EnumSelectFormatter);
            return EnumSelectFormatter;
        }());
        Common.EnumSelectFormatter = EnumSelectFormatter;
    })(Common = Yaxie.Common || (Yaxie.Common = {}));
})(Yaxie || (Yaxie = {}));
var Yaxie;
(function (Yaxie) {
    var Common;
    (function (Common) {
        var ExcelExportHelper;
        (function (ExcelExportHelper) {
            function createToolButton(options) {
                return {
                    hint: Q.coalesce(options.hint, 'Excel'),
                    title: Q.coalesce(options.title, ''),
                    cssClass: 'export-xlsx-button',
                    onClick: function () {
                        if (!options.onViewSubmit()) {
                            return;
                        }
                        var grid = options.grid;
                        var request = Q.deepClone(grid.getView().params);
                        request.Take = 0;
                        request.Skip = 0;
                        var sortBy = grid.getView().sortBy;
                        if (sortBy) {
                            request.Sort = sortBy;
                        }
                        request.IncludeColumns = [];
                        var columns = grid.getGrid().getColumns();
                        for (var _i = 0, columns_1 = columns; _i < columns_1.length; _i++) {
                            var column = columns_1[_i];
                            request.IncludeColumns.push(column.id || column.field);
                        }
                        Q.postToService({ service: options.service, request: request, target: '_blank' });
                    },
                    separator: options.separator
                };
            }
            ExcelExportHelper.createToolButton = createToolButton;
        })(ExcelExportHelper = Common.ExcelExportHelper || (Common.ExcelExportHelper = {}));
    })(Common = Yaxie.Common || (Yaxie.Common = {}));
})(Yaxie || (Yaxie = {}));
var Yaxie;
(function (Yaxie) {
    var Common;
    (function (Common) {
        var GridEditorBase = /** @class */ (function (_super) {
            __extends(GridEditorBase, _super);
            function GridEditorBase(container) {
                var _this = _super.call(this, container) || this;
                _this.nextId = 1;
                return _this;
            }
            GridEditorBase.prototype.getIdProperty = function () { return "__id"; };
            GridEditorBase.prototype.id = function (entity) {
                return entity[this.getIdProperty()];
            };
            GridEditorBase.prototype.getNextId = function () {
                return "`" + this.nextId++;
            };
            GridEditorBase.prototype.setNewId = function (entity) {
                entity[this.getIdProperty()] = this.getNextId();
            };
            GridEditorBase.prototype.save = function (opt, callback) {
                var _this = this;
                var request = opt.request;
                var row = Q.deepClone(request.Entity);
                var id = this.id(row);
                if (id == null) {
                    row[this.getIdProperty()] = this.getNextId();
                }
                if (!this.validateEntity(row, id)) {
                    return;
                }
                var items = this.view.getItems().slice();
                if (id == null) {
                    items.push(row);
                }
                else {
                    var index = Q.indexOf(items, function (x) { return _this.id(x) === id; });
                    items[index] = Q.deepClone({}, items[index], row);
                }
                this.setEntities(items);
                callback({});
            };
            GridEditorBase.prototype.deleteEntity = function (id) {
                this.view.deleteItem(id);
                return true;
            };
            GridEditorBase.prototype.validateEntity = function (row, id) {
                return true;
            };
            GridEditorBase.prototype.setEntities = function (items) {
                this.view.setItems(items, true);
            };
            GridEditorBase.prototype.getNewEntity = function () {
                return {};
            };
            GridEditorBase.prototype.getButtons = function () {
                var _this = this;
                var buttons = _super.prototype.getButtons.call(this);
                var addButton = Q.tryFirst(buttons, function (x) { return x.cssClass == 'add-button'; });
                if (addButton != null) {
                    addButton.onClick = function () {
                        _this.createEntityDialog(_this.getItemType(), function (dlg) {
                            var dialog = dlg;
                            dialog.onSave = function (opt, callback) { return _this.save(opt, callback); };
                            _this.transferDialogReadOnly(dialog);
                            dialog.loadEntityAndOpenDialog(_this.getNewEntity());
                        });
                    };
                }
                return buttons.filter(function (x) { return x.cssClass != "refresh-button"; });
            };
            GridEditorBase.prototype.editItem = function (entityOrId) {
                var _this = this;
                var id = entityOrId;
                var item = this.view.getItemById(id);
                this.createEntityDialog(this.getItemType(), function (dlg) {
                    var dialog = dlg;
                    dialog.onDelete = function (opt, callback) {
                        if (!_this.deleteEntity(id)) {
                            return;
                        }
                        callback({});
                    };
                    _this.transferDialogReadOnly(dialog);
                    dialog.onSave = function (opt, callback) { return _this.save(opt, callback); };
                    dialog.loadEntityAndOpenDialog(item);
                });
                ;
            };
            GridEditorBase.prototype.getEditValue = function (property, target) {
                target[property.name] = this.value;
            };
            GridEditorBase.prototype.setEditValue = function (source, property) {
                this.value = source[property.name];
            };
            Object.defineProperty(GridEditorBase.prototype, "value", {
                get: function () {
                    var p = this.getIdProperty();
                    return this.view.getItems().map(function (x) {
                        var y = Q.deepClone(x);
                        var id = y[p];
                        if (id && id.toString().charAt(0) == '`')
                            delete y[p];
                        return y;
                    });
                },
                set: function (value) {
                    var _this = this;
                    var p = this.getIdProperty();
                    this.view.setItems((value || []).map(function (x) {
                        var y = Q.deepClone(x);
                        if (y[p] == null)
                            y[p] = "`" + _this.getNextId();
                        return y;
                    }), true);
                },
                enumerable: false,
                configurable: true
            });
            GridEditorBase.prototype.getGridCanLoad = function () {
                return false;
            };
            GridEditorBase.prototype.usePager = function () {
                return false;
            };
            GridEditorBase.prototype.getInitialTitle = function () {
                return null;
            };
            GridEditorBase.prototype.createQuickSearchInput = function () {
            };
            GridEditorBase.prototype.enableDeleteColumn = function () {
                return false;
            };
            GridEditorBase.prototype.getColumns = function () {
                var columns = _super.prototype.getColumns.call(this);
                if (this.enableDeleteColumn()) {
                    columns.unshift({
                        field: 'Delete Row',
                        name: '',
                        format: function (ctx) { return '<a class="inline-action delete-row" title="delete">' +
                            '<i class="fa fa-trash-o text-red"></i></a>'; },
                        width: 24,
                        minWidth: 24,
                        maxWidth: 24
                    });
                }
                return columns;
            };
            GridEditorBase.prototype.onClick = function (e, row, cell) {
                var _this = this;
                _super.prototype.onClick.call(this, e, row, cell);
                if (e.isDefaultPrevented())
                    return;
                var item = this.itemAt(row);
                var target = $(e.target);
                // if user clicks "i" element, e.g. icon
                if (target.parent().hasClass('inline-action'))
                    target = target.parent();
                if (target.hasClass('inline-action')) {
                    e.preventDefault();
                    if (this.enableDeleteColumn()) {
                        if (target.hasClass('delete-row')) {
                            Q.confirm(Q.text('Controls.EntityDialog.DeleteConfirmation'), function () {
                                _this.deleteEntity(item[_this.getIdProperty()]);
                            });
                        }
                    }
                }
            };
            GridEditorBase = __decorate([
                Serenity.Decorators.registerClass([Serenity.IGetEditValue, Serenity.ISetEditValue]),
                Serenity.Decorators.editor(),
                Serenity.Decorators.element("<div/>")
            ], GridEditorBase);
            return GridEditorBase;
        }(Serenity.EntityGrid));
        Common.GridEditorBase = GridEditorBase;
    })(Common = Yaxie.Common || (Yaxie.Common = {}));
})(Yaxie || (Yaxie = {}));
var Yaxie;
(function (Yaxie) {
    var Common;
    (function (Common) {
        var GridEditorDialog = /** @class */ (function (_super) {
            __extends(GridEditorDialog, _super);
            function GridEditorDialog() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            GridEditorDialog.prototype.getIdProperty = function () { return "__id"; };
            GridEditorDialog.prototype.destroy = function () {
                this.onSave = null;
                this.onDelete = null;
                _super.prototype.destroy.call(this);
            };
            GridEditorDialog.prototype.updateInterface = function () {
                _super.prototype.updateInterface.call(this);
                // apply changes button doesn't work properly with in-memory grids yet
                if (this.applyChangesButton) {
                    this.applyChangesButton.hide();
                }
            };
            GridEditorDialog.prototype.saveHandler = function (options, callback) {
                this.onSave && this.onSave(options, callback);
            };
            GridEditorDialog.prototype.deleteHandler = function (options, callback) {
                this.onDelete && this.onDelete(options, callback);
            };
            GridEditorDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], GridEditorDialog);
            return GridEditorDialog;
        }(Serenity.EntityDialog));
        Common.GridEditorDialog = GridEditorDialog;
    })(Common = Yaxie.Common || (Yaxie.Common = {}));
})(Yaxie || (Yaxie = {}));
var Yaxie;
(function (Yaxie) {
    /**
     * This is an editor widget but it only displays a text, not edits it.
     *
     */
    var StaticTextBlock = /** @class */ (function (_super) {
        __extends(StaticTextBlock, _super);
        function StaticTextBlock(container, options) {
            var _this = _super.call(this, container, options) || this;
            // hide the caption label for this editor if in a form. ugly hack
            if (_this.options.hideLabel)
                _this.element.closest('.field').find('.caption').hide();
            _this.updateElementContent();
            return _this;
        }
        StaticTextBlock.prototype.updateElementContent = function () {
            var text = Q.coalesce(this.options.text, this.value);
            // if isLocalText is set, text is actually a local text key
            if (this.options.isLocalText)
                text = Q.text(text);
            // don't html encode if isHtml option is true
            if (this.options.isHtml)
                this.element.html(text);
            else
                this.element.text(text);
        };
        /**
         * By implementing ISetEditValue interface, we allow this editor to display its field value.
         * But only do this when our text content is not explicitly set in options
         */
        StaticTextBlock.prototype.setEditValue = function (source, property) {
            if (this.options.text == null) {
                this.value = Q.coalesce(this.options.text, source[property.name]);
                this.updateElementContent();
            }
        };
        StaticTextBlock = __decorate([
            Serenity.Decorators.element("<div/>"),
            Serenity.Decorators.registerEditor([Serenity.ISetEditValue])
        ], StaticTextBlock);
        return StaticTextBlock;
    }(Serenity.Widget));
    Yaxie.StaticTextBlock = StaticTextBlock;
})(Yaxie || (Yaxie = {}));
var Yaxie;
(function (Yaxie) {
    var Common;
    (function (Common) {
        var ImportSourceDialog = /** @class */ (function (_super) {
            __extends(ImportSourceDialog, _super);
            function ImportSourceDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Common.ImportSourceForm(_this.idPrefix);
                return _this;
            }
            ImportSourceDialog.prototype.getFormKey = function () { return Common.ImportSourceForm.formKey; };
            ImportSourceDialog.prototype.getIdProperty = function () { return Common.ImportSourceRow.idProperty; };
            ImportSourceDialog.prototype.getLocalTextPrefix = function () { return Common.ImportSourceRow.localTextPrefix; };
            ImportSourceDialog.prototype.getNameProperty = function () { return Common.ImportSourceRow.nameProperty; };
            ImportSourceDialog.prototype.getService = function () { return Common.ImportSourceService.baseUrl; };
            ImportSourceDialog.prototype.getDeletePermission = function () { return Common.ImportSourceRow.deletePermission; };
            ImportSourceDialog.prototype.getInsertPermission = function () { return Common.ImportSourceRow.insertPermission; };
            ImportSourceDialog.prototype.getUpdatePermission = function () { return Common.ImportSourceRow.updatePermission; };
            ImportSourceDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], ImportSourceDialog);
            return ImportSourceDialog;
        }(Serenity.EntityDialog));
        Common.ImportSourceDialog = ImportSourceDialog;
    })(Common = Yaxie.Common || (Yaxie.Common = {}));
})(Yaxie || (Yaxie = {}));
var Yaxie;
(function (Yaxie) {
    var Common;
    (function (Common) {
        var ImportSourceGrid = /** @class */ (function (_super) {
            __extends(ImportSourceGrid, _super);
            function ImportSourceGrid(container) {
                return _super.call(this, container) || this;
            }
            ImportSourceGrid.prototype.getColumnsKey = function () { return 'Common.ImportSource'; };
            ImportSourceGrid.prototype.getDialogType = function () { return Common.ImportSourceDialog; };
            ImportSourceGrid.prototype.getIdProperty = function () { return Common.ImportSourceRow.idProperty; };
            ImportSourceGrid.prototype.getInsertPermission = function () { return Common.ImportSourceRow.insertPermission; };
            ImportSourceGrid.prototype.getLocalTextPrefix = function () { return Common.ImportSourceRow.localTextPrefix; };
            ImportSourceGrid.prototype.getService = function () { return Common.ImportSourceService.baseUrl; };
            ImportSourceGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], ImportSourceGrid);
            return ImportSourceGrid;
        }(Serenity.EntityGrid));
        Common.ImportSourceGrid = ImportSourceGrid;
    })(Common = Yaxie.Common || (Yaxie.Common = {}));
})(Yaxie || (Yaxie = {}));
var Yaxie;
(function (Yaxie) {
    var Common;
    (function (Common) {
        var ImportTypeDialog = /** @class */ (function (_super) {
            __extends(ImportTypeDialog, _super);
            function ImportTypeDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Common.ImportTypeForm(_this.idPrefix);
                return _this;
            }
            ImportTypeDialog.prototype.getFormKey = function () { return Common.ImportTypeForm.formKey; };
            ImportTypeDialog.prototype.getIdProperty = function () { return Common.ImportTypeRow.idProperty; };
            ImportTypeDialog.prototype.getLocalTextPrefix = function () { return Common.ImportTypeRow.localTextPrefix; };
            ImportTypeDialog.prototype.getNameProperty = function () { return Common.ImportTypeRow.nameProperty; };
            ImportTypeDialog.prototype.getService = function () { return Common.ImportTypeService.baseUrl; };
            ImportTypeDialog.prototype.getDeletePermission = function () { return Common.ImportTypeRow.deletePermission; };
            ImportTypeDialog.prototype.getInsertPermission = function () { return Common.ImportTypeRow.insertPermission; };
            ImportTypeDialog.prototype.getUpdatePermission = function () { return Common.ImportTypeRow.updatePermission; };
            ImportTypeDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], ImportTypeDialog);
            return ImportTypeDialog;
        }(Serenity.EntityDialog));
        Common.ImportTypeDialog = ImportTypeDialog;
    })(Common = Yaxie.Common || (Yaxie.Common = {}));
})(Yaxie || (Yaxie = {}));
var Yaxie;
(function (Yaxie) {
    var Common;
    (function (Common) {
        var ImportTypeGrid = /** @class */ (function (_super) {
            __extends(ImportTypeGrid, _super);
            function ImportTypeGrid(container) {
                return _super.call(this, container) || this;
            }
            ImportTypeGrid.prototype.getColumnsKey = function () { return 'Common.ImportType'; };
            ImportTypeGrid.prototype.getDialogType = function () { return Common.ImportTypeDialog; };
            ImportTypeGrid.prototype.getIdProperty = function () { return Common.ImportTypeRow.idProperty; };
            ImportTypeGrid.prototype.getInsertPermission = function () { return Common.ImportTypeRow.insertPermission; };
            ImportTypeGrid.prototype.getLocalTextPrefix = function () { return Common.ImportTypeRow.localTextPrefix; };
            ImportTypeGrid.prototype.getService = function () { return Common.ImportTypeService.baseUrl; };
            ImportTypeGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], ImportTypeGrid);
            return ImportTypeGrid;
        }(Serenity.EntityGrid));
        Common.ImportTypeGrid = ImportTypeGrid;
    })(Common = Yaxie.Common || (Yaxie.Common = {}));
})(Yaxie || (Yaxie = {}));
var Yaxie;
(function (Yaxie) {
    var Common;
    (function (Common) {
        var ImportWizardDialog = /** @class */ (function (_super) {
            __extends(ImportWizardDialog, _super);
            function ImportWizardDialog() {
                var _this = _super.call(this) || this;
                _this.form = new Common.ImportWizardForm(_this.idPrefix);
                $('<a class="inplace-button inplace-action"><b><i class="fa fa-magic text-red"></i></b></a>')
                    .attr("title", "Match Excel Columns to Table Columns")
                    .insertBefore(_this.form.FieldMatchDisplay.element)
                    .click(function (e) {
                    var excelColumnList = [];
                    var dropColumnList = [];
                    var tableColumnList = [];
                    Yaxie.Common.ImportWizardService.GetExcelColumnList({
                        ImportFileList: _this.form.ImportFileList.value
                    }, function (response) {
                        excelColumnList = response.Entities;
                    }, {
                        async: false
                    });
                    Yaxie.Common.ImportWizardService.GetTableHeaders({
                        TableName: _this.form.TargetDatabase.value
                    }, function (response) {
                        tableColumnList = response.Entities;
                    }, {
                        async: false
                    });
                    var dialog = new Common.ImportWizardFieldMatchDialog(excelColumnList, tableColumnList);
                    dialog.element.on('dialogclose', function () {
                        var dropColumnElement = document.getElementById('dropcolumns').getElementsByTagName("li");
                        for (var i = 0; i < dropColumnElement.length; i++) {
                            _this.form.FieldMatchDisplay[i] = dropColumnElement[i].innerText;
                            dropColumnList[i] = dropColumnElement[i].innerText;
                        }
                        Yaxie.Common.ImportWizardService.SerializeList({
                            DropColumnList: dropColumnList,
                            TableName: _this.form.TargetDatabase.value
                        }, function (response) {
                            var fieldMatchJson = response.FieldMatchJson;
                            var fieldMatchList = response.FieldMatchList;
                            var fieldMatchDisplay = response.FieldMatchDisplay;
                            for (var i = 0; i < fieldMatchDisplay.length; i++) {
                                _this.form.FieldMatchDisplay.value = _this.form.FieldMatchDisplay.value + fieldMatchDisplay[i] + "\n";
                            }
                            _this.form.FieldMatchList.value = fieldMatchJson;
                        }, {
                            async: false
                        });
                        dialog = null;
                    });
                    dialog.dialogOpen();
                });
                _this.tabs.on('tabsactivate', function (e, i) {
                    _this.arrange();
                });
                _this.byId('NoteList').closest('.field').hide().end().appendTo(_this.byId('TabNotes'));
                Yaxie.DialogUtils.pendingChangesConfirmation(_this.element, function () { return _this.getSaveState() != _this.loadedState; });
                _this.tabs.bind('tabsactivate', function () { return _this.arrange(); });
                return _this;
            }
            ImportWizardDialog.prototype.getFormKey = function () { return Common.ImportWizardForm.formKey; };
            ImportWizardDialog.prototype.getIdProperty = function () { return Common.ImportWizardRow.idProperty; };
            ImportWizardDialog.prototype.getLocalTextPrefix = function () { return Common.ImportWizardRow.localTextPrefix; };
            ImportWizardDialog.prototype.getNameProperty = function () { return Common.ImportWizardRow.nameProperty; };
            ImportWizardDialog.prototype.getService = function () { return Common.ImportWizardService.baseUrl; };
            ImportWizardDialog.prototype.getDeletePermission = function () { return Common.ImportWizardRow.deletePermission; };
            ImportWizardDialog.prototype.getInsertPermission = function () { return Common.ImportWizardRow.insertPermission; };
            ImportWizardDialog.prototype.getUpdatePermission = function () { return Common.ImportWizardRow.updatePermission; };
            ImportWizardDialog.prototype.getToolbarButtons = function () {
                var _this = this;
                var buttons = _super.prototype.getToolbarButtons.call(this);
                buttons.push({
                    title: 'Execute Import',
                    cssClass: 'send-button',
                    onClick: function () {
                        if (!_this.form.ImportFileList) {
                            Q.alert("You must enter a valid file name before you can import it.");
                        }
                        Common.ImportWizardService.ExcelImport({
                            ImportWizardID: _this.getWizardID()
                        }, function (response) {
                            _this.dialogClose();
                        });
                    }
                });
                return buttons;
            };
            ImportWizardDialog.prototype.getWizardID = function () {
                return this.form.ImportWizardId.value;
            };
            ImportWizardDialog.prototype.getSaveState = function () {
                try {
                    return $.toJSON(this.getSaveEntity());
                }
                catch (e) {
                    return null;
                }
            };
            ImportWizardDialog = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.responsive(),
                Serenity.Decorators.maximizable()
            ], ImportWizardDialog);
            return ImportWizardDialog;
        }(Serenity.EntityDialog));
        Common.ImportWizardDialog = ImportWizardDialog;
    })(Common = Yaxie.Common || (Yaxie.Common = {}));
})(Yaxie || (Yaxie = {}));
var Yaxie;
(function (Yaxie) {
    var Common;
    (function (Common) {
        var ImportWizardFieldMatchDialog = /** @class */ (function (_super) {
            __extends(ImportWizardFieldMatchDialog, _super);
            function ImportWizardFieldMatchDialog(ExcelColumnList, TableColumnList) {
                var _this = _super.call(this) || this;
                _this.excelColumnList = [];
                _this.tableColumnList = [];
                _this.dropColumnList = [];
                _this.matchList = [];
                _this.excelColumnList = ExcelColumnList;
                _this.tableColumnList = TableColumnList;
                return _this;
            }
            ImportWizardFieldMatchDialog.prototype.onDialogOpen = function () {
                var _this = this;
                _super.prototype.onDialogOpen.call(this);
                var excelColumns = document.getElementById("excelcolumns");
                for (var i = 0; i < this.excelColumnList.length; i++) {
                    var liExcel = document.createElement("li");
                    var fieldName = this.excelColumnList[i];
                    liExcel.id = "Excel" + i;
                    liExcel.value = i;
                    liExcel.classList.add("draggable");
                    liExcel.classList.add("item");
                    liExcel.innerText = fieldName;
                    excelColumns.append(liExcel);
                }
                var dropDiv = document.getElementById("dropcolumns");
                for (var i = 0; i < this.tableColumnList.length; i++) {
                    var liDrop = document.createElement("li");
                    liDrop.id = "Drop" + i;
                    liDrop.value = i;
                    liDrop.classList.add("droppable");
                    liDrop.classList.add("item");
                    var found = this.excelColumnList.filter(function (col) {
                        return col === _this.tableColumnList[i].Name || col === _this.tableColumnList[i].Title;
                    });
                    if (found) {
                        liDrop.innerText = found[0];
                    }
                    else {
                        liDrop.innerText = "Drop Matching Field Here";
                    }
                    liDrop.draggable = true;
                    dropDiv.append(liDrop);
                }
                var tableDiv = document.getElementById("tablecolumns");
                for (var i = 0; i < this.tableColumnList.length; i++) {
                    var liTable = document.createElement("li");
                    liTable.id = "Table" + i;
                    liTable.value = i;
                    liTable.classList.add("item");
                    liTable.innerText = this.tableColumnList[i].Name + " : " + this.tableColumnList[i].Title + " (" + this.tableColumnList[i].Type + ") ";
                    tableDiv.append(liTable);
                }
                for (var i = 0; i < this.excelColumnList.length; i++) {
                    $("#" + "Excel" + i).draggable({
                        revert: "invalid",
                        helper: "clone"
                    });
                    $("#" + "Excel" + i).data('matchRow', { key: i, value: this.excelColumnList[i] });
                    $("#" + "Excel" + i).droppable({
                        drop: function (event, ui) {
                            $(this)
                                .addClass("ui-state-highlight")
                                .html("excel id " + ui.draggable.find('select').attr('id') + " dropped ");
                        }
                    });
                }
                for (var i = 0; i < this.tableColumnList.length; i++) {
                    $("#" + "Drop" + i).draggable();
                    $("#" + "Drop" + i).droppable({
                        drop: function (event, ui) {
                            var xx = ui.draggable.data('matchRow');
                            var cloneItem = ui.draggable.clone();
                            var excelColumnName = cloneItem.html();
                            var excelColumnNumber = cloneItem.val();
                            var tableColumnName = $(this).html();
                            var tableColumnNumber = $(this).val();
                            var message = "Excel Column " + excelColumnNumber + " : " + excelColumnName + " dropped on Table Column " + tableColumnNumber + " : " + tableColumnName;
                            //Q.alert(message);
                            $(this)
                                .addClass("ui-state-highlight")
                                .addClass('has-drop')
                                .html(cloneItem.html());
                        }
                    });
                }
            };
            ImportWizardFieldMatchDialog.prototype.arrange = function () {
                _super.prototype.arrange.call(this);
            };
            ImportWizardFieldMatchDialog.prototype.getDialogOptions = function () {
                var opt = _super.prototype.getDialogOptions.call(this);
                opt.title = 'Field Name';
                return opt;
            };
            ImportWizardFieldMatchDialog = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.responsive(),
                Serenity.Decorators.maximizable()
            ], ImportWizardFieldMatchDialog);
            return ImportWizardFieldMatchDialog;
        }(Serenity.TemplatedDialog));
        Common.ImportWizardFieldMatchDialog = ImportWizardFieldMatchDialog;
    })(Common = Yaxie.Common || (Yaxie.Common = {}));
})(Yaxie || (Yaxie = {}));
var Yaxie;
(function (Yaxie) {
    var Common;
    (function (Common) {
        var ImportWizardFieldMatchGrid = /** @class */ (function (_super) {
            __extends(ImportWizardFieldMatchGrid, _super);
            function ImportWizardFieldMatchGrid(container) {
                return _super.call(this, container) || this;
            }
            ImportWizardFieldMatchGrid.prototype.getColumnsKey = function () { return 'Common.ImportWizard'; };
            ImportWizardFieldMatchGrid.prototype.getDialogType = function () { return Common.ImportWizardDialog; };
            ImportWizardFieldMatchGrid.prototype.getIdProperty = function () { return Common.ImportWizardRow.idProperty; };
            ImportWizardFieldMatchGrid.prototype.getLocalTextPrefix = function () { return Common.ImportWizardRow.localTextPrefix; };
            ImportWizardFieldMatchGrid.prototype.getService = function () { return Common.ImportWizardService.baseUrl; };
            ImportWizardFieldMatchGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], ImportWizardFieldMatchGrid);
            return ImportWizardFieldMatchGrid;
        }(Serenity.EntityGrid));
        Common.ImportWizardFieldMatchGrid = ImportWizardFieldMatchGrid;
    })(Common = Yaxie.Common || (Yaxie.Common = {}));
})(Yaxie || (Yaxie = {}));
var Yaxie;
(function (Yaxie) {
    var Common;
    (function (Common) {
        var ImportWizardGrid = /** @class */ (function (_super) {
            __extends(ImportWizardGrid, _super);
            function ImportWizardGrid(container) {
                return _super.call(this, container) || this;
            }
            ImportWizardGrid.prototype.getColumnsKey = function () { return 'Common.ImportWizard'; };
            ImportWizardGrid.prototype.getDialogType = function () { return Common.ImportWizardDialog; };
            ImportWizardGrid.prototype.getIdProperty = function () { return Common.ImportWizardRow.idProperty; };
            ImportWizardGrid.prototype.getInsertPermission = function () { return Common.ImportWizardRow.insertPermission; };
            ImportWizardGrid.prototype.getLocalTextPrefix = function () { return Common.ImportWizardRow.localTextPrefix; };
            ImportWizardGrid.prototype.getService = function () { return Common.ImportWizardService.baseUrl; };
            ImportWizardGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], ImportWizardGrid);
            return ImportWizardGrid;
        }(Serenity.EntityGrid));
        Common.ImportWizardGrid = ImportWizardGrid;
    })(Common = Yaxie.Common || (Yaxie.Common = {}));
})(Yaxie || (Yaxie = {}));
var Yaxie;
(function (Yaxie) {
    var Common;
    (function (Common) {
        var LanguageSelection = /** @class */ (function (_super) {
            __extends(LanguageSelection, _super);
            function LanguageSelection(select, currentLanguage) {
                var _this = _super.call(this, select) || this;
                currentLanguage = Q.coalesce(currentLanguage, 'en');
                _this.change(function (e) {
                    var path = Q.Config.applicationPath;
                    if (path && path != '/' && Q.endsWith(path, '/'))
                        path = path.substr(0, path.length - 1);
                    $.cookie('LanguagePreference', select.val(), {
                        path: path,
                        expires: 365
                    });
                    window.location.reload(true);
                });
                Q.getLookupAsync('Administration.Language').then(function (x) {
                    if (!Q.any(x.items, function (z) { return z.LanguageId === currentLanguage; })) {
                        var idx = currentLanguage.lastIndexOf('-');
                        if (idx >= 0) {
                            currentLanguage = currentLanguage.substr(0, idx);
                            if (!Q.any(x.items, function (y) { return y.LanguageId === currentLanguage; })) {
                                currentLanguage = 'en';
                            }
                        }
                        else {
                            currentLanguage = 'en';
                        }
                    }
                    for (var _i = 0, _a = x.items; _i < _a.length; _i++) {
                        var l = _a[_i];
                        Q.addOption(select, l.LanguageId, l.LanguageName);
                    }
                    select.val(currentLanguage);
                });
                return _this;
            }
            return LanguageSelection;
        }(Serenity.Widget));
        Common.LanguageSelection = LanguageSelection;
    })(Common = Yaxie.Common || (Yaxie.Common = {}));
})(Yaxie || (Yaxie = {}));
var Yaxie;
(function (Yaxie) {
    var Common;
    (function (Common) {
        var SidebarSearch = /** @class */ (function (_super) {
            __extends(SidebarSearch, _super);
            function SidebarSearch(input, menuUL) {
                var _this = _super.call(this, input) || this;
                new Serenity.QuickSearchInput(input, {
                    onSearch: function (field, text, success) {
                        _this.updateMatchFlags(text);
                        success(true);
                    }
                });
                _this.menuUL = menuUL;
                return _this;
            }
            SidebarSearch.prototype.updateMatchFlags = function (text) {
                var liList = this.menuUL.find('li').removeClass('non-match');
                text = Q.trimToNull(text);
                if (text == null) {
                    liList.show();
                    liList.removeClass('expanded');
                    return;
                }
                var parts = text.replace(',', ' ').split(' ').filter(function (x) { return !Q.isTrimmedEmpty(x); });
                for (var i = 0; i < parts.length; i++) {
                    parts[i] = Q.trimToNull(Select2.util.stripDiacritics(parts[i]).toUpperCase());
                }
                var items = liList;
                items.each(function (idx, e) {
                    var x = $(e);
                    var title = Select2.util.stripDiacritics(Q.coalesce(x.text(), '').toUpperCase());
                    for (var _i = 0, parts_1 = parts; _i < parts_1.length; _i++) {
                        var p = parts_1[_i];
                        if (p != null && !(title.indexOf(p) !== -1)) {
                            x.addClass('non-match');
                            break;
                        }
                    }
                });
                var matchingItems = items.not('.non-match');
                var visibles = matchingItems.parents('li').add(matchingItems);
                var nonVisibles = liList.not(visibles);
                nonVisibles.hide().addClass('non-match');
                visibles.show();
                liList.addClass('expanded');
            };
            return SidebarSearch;
        }(Serenity.Widget));
        Common.SidebarSearch = SidebarSearch;
    })(Common = Yaxie.Common || (Yaxie.Common = {}));
})(Yaxie || (Yaxie = {}));
var Yaxie;
(function (Yaxie) {
    var Common;
    (function (Common) {
        var ThemeSelection = /** @class */ (function (_super) {
            __extends(ThemeSelection, _super);
            function ThemeSelection(select) {
                var _this = _super.call(this, select) || this;
                _this.change(function (e) {
                    var path = Q.Config.applicationPath;
                    if (path && path != '/' && Q.endsWith(path, '/'))
                        path = path.substr(0, path.length - 1);
                    $.cookie('ThemePreference', select.val(), {
                        path: path,
                        expires: 365
                    });
                    var theme = select.val() || '';
                    var darkSidebar = theme.indexOf('light') < 0;
                    $('body').removeClass('skin-' + _this.getCurrentTheme());
                    $('body').addClass('skin-' + theme)
                        .toggleClass('dark-sidebar', darkSidebar)
                        .toggleClass('light-sidebar', !darkSidebar);
                });
                Q.addOption(select, 'blue', Q.text('Site.Layout.ThemeBlue'));
                Q.addOption(select, 'blue-light', Q.text('Site.Layout.ThemeBlueLight'));
                Q.addOption(select, 'purple', Q.text('Site.Layout.ThemePurple'));
                Q.addOption(select, 'purple-light', Q.text('Site.Layout.ThemePurpleLight'));
                Q.addOption(select, 'red', Q.text('Site.Layout.ThemeRed'));
                Q.addOption(select, 'red-light', Q.text('Site.Layout.ThemeRedLight'));
                Q.addOption(select, 'green', Q.text('Site.Layout.ThemeGreen'));
                Q.addOption(select, 'green-light', Q.text('Site.Layout.ThemeGreenLight'));
                Q.addOption(select, 'yellow', Q.text('Site.Layout.ThemeYellow'));
                Q.addOption(select, 'yellow-light', Q.text('Site.Layout.ThemeYellowLight'));
                Q.addOption(select, 'black', Q.text('Site.Layout.ThemeBlack'));
                Q.addOption(select, 'black-light', Q.text('Site.Layout.ThemeBlackLight'));
                select.val(_this.getCurrentTheme());
                return _this;
            }
            ThemeSelection.prototype.getCurrentTheme = function () {
                var skinClass = Q.first(($('body').attr('class') || '').split(' '), function (x) { return Q.startsWith(x, 'skin-'); });
                if (skinClass) {
                    return skinClass.substr(5);
                }
                return 'blue';
            };
            return ThemeSelection;
        }(Serenity.Widget));
        Common.ThemeSelection = ThemeSelection;
    })(Common = Yaxie.Common || (Yaxie.Common = {}));
})(Yaxie || (Yaxie = {}));
var Yaxie;
(function (Yaxie) {
    var Common;
    (function (Common) {
        var NoteDialog = /** @class */ (function (_super) {
            __extends(NoteDialog, _super);
            function NoteDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Common.NoteForm(_this.idPrefix);
                return _this;
            }
            NoteDialog.prototype.getFormKey = function () { return Common.NoteForm.formKey; };
            NoteDialog.prototype.getIdProperty = function () { return Common.NoteRow.idProperty; };
            NoteDialog.prototype.getLocalTextPrefix = function () { return Common.NoteRow.localTextPrefix; };
            NoteDialog.prototype.getNameProperty = function () { return Common.NoteRow.nameProperty; };
            NoteDialog.prototype.getService = function () { return Common.NoteService.baseUrl; };
            NoteDialog.prototype.getDeletePermission = function () { return Common.NoteRow.deletePermission; };
            NoteDialog.prototype.getInsertPermission = function () { return Common.NoteRow.insertPermission; };
            NoteDialog.prototype.getUpdatePermission = function () { return Common.NoteRow.updatePermission; };
            NoteDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], NoteDialog);
            return NoteDialog;
        }(Serenity.EntityDialog));
        Common.NoteDialog = NoteDialog;
    })(Common = Yaxie.Common || (Yaxie.Common = {}));
})(Yaxie || (Yaxie = {}));
var Yaxie;
(function (Yaxie) {
    var Common;
    (function (Common) {
        var NoteGrid = /** @class */ (function (_super) {
            __extends(NoteGrid, _super);
            function NoteGrid(container) {
                return _super.call(this, container) || this;
            }
            NoteGrid.prototype.getColumnsKey = function () { return 'Common.Note'; };
            NoteGrid.prototype.getDialogType = function () { return Common.NoteDialog; };
            NoteGrid.prototype.getIdProperty = function () { return Common.NoteRow.idProperty; };
            NoteGrid.prototype.getInsertPermission = function () { return Common.NoteRow.insertPermission; };
            NoteGrid.prototype.getLocalTextPrefix = function () { return Common.NoteRow.localTextPrefix; };
            NoteGrid.prototype.getService = function () { return Common.NoteService.baseUrl; };
            NoteGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], NoteGrid);
            return NoteGrid;
        }(Serenity.EntityGrid));
        Common.NoteGrid = NoteGrid;
    })(Common = Yaxie.Common || (Yaxie.Common = {}));
})(Yaxie || (Yaxie = {}));
var Yaxie;
(function (Yaxie) {
    var Common;
    (function (Common) {
        var PdfExportHelper;
        (function (PdfExportHelper) {
            function toAutoTableColumns(srcColumns, columnStyles, columnTitles) {
                return srcColumns.map(function (src) {
                    var col = {
                        dataKey: src.id || src.field,
                        title: src.name || ''
                    };
                    if (columnTitles && columnTitles[col.dataKey] != null)
                        col.title = columnTitles[col.dataKey];
                    var style = {};
                    if ((src.cssClass || '').indexOf("align-right") >= 0)
                        style.halign = 'right';
                    else if ((src.cssClass || '').indexOf("align-center") >= 0)
                        style.halign = 'center';
                    columnStyles[col.dataKey] = style;
                    return col;
                });
            }
            function toAutoTableData(entities, keys, srcColumns) {
                var el = document.createElement('span');
                var row = 0;
                return entities.map(function (item) {
                    var dst = {};
                    for (var cell = 0; cell < srcColumns.length; cell++) {
                        var src = srcColumns[cell];
                        var fld = src.field || '';
                        var key = keys[cell];
                        var txt = void 0;
                        var html = void 0;
                        if (src.formatter) {
                            html = src.formatter(row, cell, item[fld], src, item);
                        }
                        else if (src.format) {
                            html = src.format({ row: row, cell: cell, item: item, value: item[fld] });
                        }
                        else {
                            dst[key] = item[fld];
                            continue;
                        }
                        if (!html || (html.indexOf('<') < 0 && html.indexOf('&') < 0))
                            dst[key] = html;
                        else {
                            el.innerHTML = html;
                            if (el.children.length == 1 &&
                                $(el.children[0]).is(":input")) {
                                dst[key] = $(el.children[0]).val();
                            }
                            else if (el.children.length == 1 &&
                                $(el.children).is('.check-box')) {
                                dst[key] = $(el.children).hasClass("checked") ? "X" : "";
                            }
                            else
                                dst[key] = el.textContent || '';
                        }
                    }
                    row++;
                    return dst;
                });
            }
            function exportToPdf(options) {
                var g = options.grid;
                if (!options.onViewSubmit())
                    return;
                includeAutoTable();
                var request = Q.deepClone(g.view.params);
                request.Take = 0;
                request.Skip = 0;
                var sortBy = g.view.sortBy;
                if (sortBy != null)
                    request.Sort = sortBy;
                var gridColumns = g.slickGrid.getColumns();
                gridColumns = gridColumns.filter(function (x) { return x.id !== "__select__"; });
                request.IncludeColumns = [];
                for (var _i = 0, gridColumns_1 = gridColumns; _i < gridColumns_1.length; _i++) {
                    var column = gridColumns_1[_i];
                    request.IncludeColumns.push(column.id || column.field);
                }
                Q.serviceCall({
                    url: g.view.url,
                    request: request,
                    onSuccess: function (response) {
                        var doc = new jsPDF('l', 'pt');
                        var srcColumns = gridColumns;
                        var columnStyles = {};
                        var columns = toAutoTableColumns(srcColumns, columnStyles, options.columnTitles);
                        var keys = columns.map(function (x) { return x.dataKey; });
                        var entities = response.Entities || [];
                        var data = toAutoTableData(entities, keys, srcColumns);
                        doc.setFontSize(options.titleFontSize || 10);
                        doc.setFontStyle('bold');
                        var reportTitle = options.reportTitle || g.getTitle() || "Report";
                        doc.autoTableText(reportTitle, doc.internal.pageSize.width / 2, options.titleTop || 25, { halign: 'center' });
                        var totalPagesExp = "{{T}}";
                        var pageNumbers = options.pageNumbers == null || options.pageNumbers;
                        var autoOptions = $.extend({
                            margin: { top: 25, left: 25, right: 25, bottom: pageNumbers ? 25 : 30 },
                            startY: 60,
                            styles: {
                                fontSize: 8,
                                overflow: 'linebreak',
                                cellPadding: 2,
                                valign: 'middle'
                            },
                            columnStyles: columnStyles
                        }, options.tableOptions);
                        if (pageNumbers) {
                            var footer = function (data) {
                                var str = data.pageCount;
                                // Total page number plugin only available in jspdf v1.0+
                                if (typeof doc.putTotalPages === 'function') {
                                    str = str + " / " + totalPagesExp;
                                }
                                doc.autoTableText(str, doc.internal.pageSize.width / 2, doc.internal.pageSize.height - autoOptions.margin.bottom, {
                                    halign: 'center'
                                });
                            };
                            autoOptions.afterPageContent = footer;
                        }
                        // Print header of page
                        if (options.printDateTimeHeader == null || options.printDateTimeHeader) {
                            var beforePage = function (data) {
                                doc.setFontStyle('normal');
                                doc.setFontSize(8);
                                // Date and time of the report
                                doc.autoTableText(Q.formatDate(new Date(), "dd-MM-yyyy HH:mm"), doc.internal.pageSize.width - autoOptions.margin.right, 13, {
                                    halign: 'right'
                                });
                            };
                            autoOptions.beforePageContent = beforePage;
                        }
                        doc.autoTable(columns, data, autoOptions);
                        if (typeof doc.putTotalPages === 'function') {
                            doc.putTotalPages(totalPagesExp);
                        }
                        if (!options.output || options.output == "file") {
                            var fileName = options.fileName || options.reportTitle || "{0}_{1}.pdf";
                            fileName = Q.format(fileName, g.getTitle() || "report", Q.formatDate(new Date(), "yyyyMMdd_HHmm"));
                            doc.save(fileName);
                            return;
                        }
                        if (options.autoPrint)
                            doc.autoPrint();
                        var output = options.output;
                        if (output == 'newwindow' || '_blank')
                            output = 'dataurlnewwindow';
                        else if (output == 'window')
                            output = 'datauri';
                        doc.output(output);
                    }
                });
            }
            PdfExportHelper.exportToPdf = exportToPdf;
            function createToolButton(options) {
                return {
                    title: options.title || '',
                    hint: options.hint || 'PDF',
                    cssClass: 'export-pdf-button',
                    onClick: function () { return exportToPdf(options); },
                    separator: options.separator
                };
            }
            PdfExportHelper.createToolButton = createToolButton;
            function includeJsPDF() {
                if (typeof jsPDF !== "undefined")
                    return;
                var script = $("jsPDFScript");
                if (script.length > 0)
                    return;
                $("<script/>")
                    .attr("type", "text/javascript")
                    .attr("id", "jsPDFScript")
                    .attr("src", Q.resolveUrl("~/Scripts/jspdf.min.js"))
                    .appendTo(document.head);
            }
            function includeAutoTable() {
                includeJsPDF();
                if (typeof jsPDF === "undefined" ||
                    typeof jsPDF.API == "undefined" ||
                    typeof jsPDF.API.autoTable !== "undefined")
                    return;
                var script = $("jsPDFAutoTableScript");
                if (script.length > 0)
                    return;
                $("<script/>")
                    .attr("type", "text/javascript")
                    .attr("id", "jsPDFAutoTableScript")
                    .attr("src", Q.resolveUrl("~/Scripts/jspdf.plugin.autotable.min.js"))
                    .appendTo(document.head);
            }
        })(PdfExportHelper = Common.PdfExportHelper || (Common.PdfExportHelper = {}));
    })(Common = Yaxie.Common || (Yaxie.Common = {}));
})(Yaxie || (Yaxie = {}));
var Yaxie;
(function (Yaxie) {
    var Common;
    (function (Common) {
        var ReportDialog = /** @class */ (function (_super) {
            __extends(ReportDialog, _super);
            function ReportDialog(options) {
                var _this = _super.call(this, options) || this;
                _this.updateInterface();
                _this.loadReport(_this.options.reportKey);
                return _this;
            }
            ReportDialog.prototype.getDialogButtons = function () {
                return null;
            };
            ReportDialog.prototype.createPropertyGrid = function () {
                this.propertyGrid && this.byId('PropertyGrid').html('').attr('class', '');
                this.propertyGrid = new Serenity.PropertyGrid(this.byId('PropertyGrid'), {
                    idPrefix: this.idPrefix,
                    useCategories: true,
                    items: this.report.Properties
                }).init(null);
            };
            ReportDialog.prototype.loadReport = function (reportKey) {
                var _this = this;
                Q.serviceCall({
                    url: Q.resolveUrl('~/Report/Retrieve'),
                    request: {
                        ReportKey: reportKey
                    },
                    onSuccess: function (response) {
                        _this.report = response;
                        _this.element.dialog().dialog('option', 'title', _this.report.Title);
                        _this.createPropertyGrid();
                        _this.propertyGrid.load(_this.report.InitialSettings || {});
                        _this.updateInterface();
                        _this.dialogOpen();
                    }
                });
            };
            ReportDialog.prototype.updateInterface = function () {
                this.toolbar.findButton('print-preview-button')
                    .toggle(this.report && !this.report.IsDataOnlyReport);
                this.toolbar.findButton('export-pdf-button')
                    .toggle(this.report && !this.report.IsDataOnlyReport);
                this.toolbar.findButton('export-xlsx-button')
                    .toggle(this.report && this.report.IsDataOnlyReport);
            };
            ReportDialog.prototype.executeReport = function (target, ext, download) {
                if (!this.validateForm()) {
                    return;
                }
                var opt = {};
                this.propertyGrid.save(opt);
                Common.ReportHelper.execute({
                    download: download,
                    reportKey: this.report.ReportKey,
                    extension: ext,
                    target: target,
                    params: opt
                });
            };
            ReportDialog.prototype.getToolbarButtons = function () {
                var _this = this;
                return [
                    {
                        title: 'Preview',
                        cssClass: 'print-preview-button',
                        onClick: function () { return _this.executeReport('_blank', null, false); }
                    },
                    {
                        title: 'PDF',
                        cssClass: 'export-pdf-button',
                        onClick: function () { return _this.executeReport('_blank', 'pdf', true); }
                    },
                    {
                        title: 'Excel',
                        cssClass: 'export-xlsx-button',
                        onClick: function () { return _this.executeReport('_blank', 'xlsx', true); }
                    }
                ];
            };
            return ReportDialog;
        }(Serenity.TemplatedDialog));
        Common.ReportDialog = ReportDialog;
    })(Common = Yaxie.Common || (Yaxie.Common = {}));
})(Yaxie || (Yaxie = {}));
var Yaxie;
(function (Yaxie) {
    var Common;
    (function (Common) {
        var ReportHelper;
        (function (ReportHelper) {
            function createToolButton(options) {
                return {
                    title: Q.coalesce(options.title, 'Report'),
                    cssClass: Q.coalesce(options.cssClass, 'print-button'),
                    icon: options.icon,
                    onClick: function () {
                        ReportHelper.execute(options);
                    }
                };
            }
            ReportHelper.createToolButton = createToolButton;
            function execute(options) {
                var opt = options.getParams ? options.getParams() : options.params;
                Q.postToUrl({
                    url: '~/Report/' + (options.download ? 'Download' : 'Render'),
                    params: {
                        key: options.reportKey,
                        ext: Q.coalesce(options.extension, 'pdf'),
                        opt: opt ? $.toJSON(opt) : ''
                    },
                    target: Q.coalesce(options.target, '_blank')
                });
            }
            ReportHelper.execute = execute;
        })(ReportHelper = Common.ReportHelper || (Common.ReportHelper = {}));
    })(Common = Yaxie.Common || (Yaxie.Common = {}));
})(Yaxie || (Yaxie = {}));
var Yaxie;
(function (Yaxie) {
    var Common;
    (function (Common) {
        var ReportPage = /** @class */ (function (_super) {
            __extends(ReportPage, _super);
            function ReportPage(element) {
                var _this = _super.call(this, element) || this;
                $('.report-link', element).click(function (e) { return _this.reportLinkClick(e); });
                $('div.line', element).click(function (e) { return _this.categoryClick(e); });
                new Serenity.QuickSearchInput($('.s-QuickSearchBar input', element), {
                    onSearch: function (field, text, done) {
                        _this.updateMatchFlags(text);
                        done(true);
                    }
                });
                return _this;
            }
            ReportPage.prototype.updateMatchFlags = function (text) {
                var liList = $('.report-list', this.element).find('li').removeClass('non-match');
                text = Q.trimToNull(text);
                if (!text) {
                    liList.children('ul').hide();
                    liList.show().removeClass('expanded');
                    return;
                }
                text = Select2.util.stripDiacritics(text).toUpperCase();
                var reportItems = liList.filter('.report-item');
                reportItems.each(function (ix, e) {
                    var x = $(e);
                    var title = Select2.util.stripDiacritics(Q.coalesce(x.text(), '').toUpperCase());
                    if (title.indexOf(text) < 0) {
                        x.addClass('non-match');
                    }
                });
                var matchingItems = reportItems.not('.non-match');
                var visibles = matchingItems.parents('li').add(matchingItems);
                var nonVisibles = liList.not(visibles);
                nonVisibles.hide().addClass('non-match');
                visibles.show();
                if (visibles.length <= 100) {
                    liList.children('ul').show();
                    liList.addClass('expanded');
                }
            };
            ReportPage.prototype.categoryClick = function (e) {
                var li = $(e.target).closest('li');
                if (li.hasClass('expanded')) {
                    li.find('ul').hide('fast');
                    li.removeClass('expanded');
                    li.find('li').removeClass('expanded');
                }
                else {
                    li.addClass('expanded');
                    li.children('ul').show('fast');
                    if (li.children('ul').children('li').length === 1 && !li.children('ul').children('li').hasClass('expanded')) {
                        li.children('ul').children('li').children('.line').click();
                    }
                }
            };
            ReportPage.prototype.reportLinkClick = function (e) {
                e.preventDefault();
                new Common.ReportDialog({
                    reportKey: $(e.target).data('key')
                }).dialogOpen();
            };
            return ReportPage;
        }(Serenity.Widget));
        Common.ReportPage = ReportPage;
    })(Common = Yaxie.Common || (Yaxie.Common = {}));
})(Yaxie || (Yaxie = {}));
var Yaxie;
(function (Yaxie) {
    var Common;
    (function (Common) {
        var UserPreferenceStorage = /** @class */ (function () {
            function UserPreferenceStorage() {
            }
            UserPreferenceStorage.prototype.getItem = function (key) {
                var value;
                Common.UserPreferenceService.Retrieve({
                    PreferenceType: "UserPreferenceStorage",
                    Name: key
                }, function (response) { return value = response.Value; }, {
                    async: false
                });
                return value;
            };
            UserPreferenceStorage.prototype.setItem = function (key, data) {
                Common.UserPreferenceService.Update({
                    PreferenceType: "UserPreferenceStorage",
                    Name: key,
                    Value: data
                });
            };
            return UserPreferenceStorage;
        }());
        Common.UserPreferenceStorage = UserPreferenceStorage;
    })(Common = Yaxie.Common || (Yaxie.Common = {}));
})(Yaxie || (Yaxie = {}));
var Yaxie;
(function (Yaxie) {
    var Membership;
    (function (Membership) {
        var LoginPanel = /** @class */ (function (_super) {
            __extends(LoginPanel, _super);
            function LoginPanel(container) {
                var _this = _super.call(this, container) || this;
                $.fn['vegas'] && $('body')['vegas']({
                    delay: 30000,
                    cover: true,
                    overlay: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAIAAAACAQMAAABIeJ9nAAAAA3NCSVQICAjb4U" +
                        "/gAAAABlBMVEX///8AAABVwtN+AAAAAnRSTlMA/1uRIrUAAAAJcEhZcwAAAsQAAALEAVuRnQsAAAAWdEVYdENyZWF0" +
                        "aW9uIFRpbWUAMDQvMTMvMTGrW0T6AAAAHHRFWHRTb2Z0d2FyZQBBZG9iZSBGaXJld29ya3MgQ1M1cbXjNgAAAAxJREFUCJljaGBgAAABhACBrONIPgAAAABJRU5ErkJggg==",
                    slides: [
                        { src: Q.resolveUrl("~/Content/site/slides/slide1.jpg"), transition: 'fade' },
                        { src: Q.resolveUrl("~/Content/site/slides/slide2.jpg"), transition: 'zoomOut' },
                        { src: Q.resolveUrl("~/Content/site/slides/slide3.jpg"), transition: 'swirlLeft' }
                    ]
                });
                _this.byId('LoginButton').click(function (e) {
                    e.preventDefault();
                    if (!_this.validateForm()) {
                        return;
                    }
                    var request = _this.getSaveEntity();
                    Q.serviceCall({
                        url: Q.resolveUrl('~/Account/Login'),
                        request: request,
                        onSuccess: function (response) {
                            _this.redirectToReturnUrl();
                        },
                        onError: function (response) {
                            if (response != null && response.Error != null && response.Error.Code == "RedirectUserTo") {
                                window.location.href = response.Error.Arguments;
                                return;
                            }
                            if (response != null && response.Error != null && !Q.isEmptyOrNull(response.Error.Message)) {
                                Q.notifyError(response.Error.Message);
                                $('#Password').focus();
                                return;
                            }
                            Q.ErrorHandling.showServiceError(response.Error);
                        }
                    });
                });
                return _this;
            }
            LoginPanel.prototype.getFormKey = function () { return Membership.LoginForm.formKey; };
            LoginPanel.prototype.redirectToReturnUrl = function () {
                var q = Q.parseQueryString();
                var returnUrl = q['returnUrl'] || q['ReturnUrl'];
                if (returnUrl) {
                    var hash = window.location.hash;
                    if (hash != null && hash != '#')
                        returnUrl += hash;
                    window.location.href = returnUrl;
                }
                else {
                    window.location.href = Q.resolveUrl('~/');
                }
            };
            LoginPanel.prototype.getTemplate = function () {
                return "\n<div class=\"flex-layout\">\n    <div class=\"logo\"></div>\n    <h3>" + Q.text("Forms.Membership.Login.FormTitle") + "</h3>\n    <form id=\"~_Form\" action=\"\">\n        <div class=\"s-Form\">\n            <div class=\"fieldset ui-widget ui-widget-content ui-corner-all\">\n                <div id=\"~_PropertyGrid\"></div>\n                <div class=\"clear\"></div>\n            </div>\n            <div class=\"buttons\">\n                <button id=\"~_LoginButton\" type=\"submit\" class=\"btn btn-primary\">\n                    " + Q.text("Forms.Membership.Login.SignInButton") + "\n                </button>\n            </div>\n            <div class=\"actions\">\n                <a href=\"" + Q.resolveUrl('~/Account/ForgotPassword') + "\"><i class=\"fa fa-angle-right\"></i>&nbsp;" + Q.text("Forms.Membership.Login.ForgotPassword") + "</a>\n                <a href=\"" + Q.resolveUrl('~/Account/SignUp') + "\"><i class=\"fa fa-angle-right\"></i>&nbsp;" + Q.text("Forms.Membership.Login.SignUpButton") + "</a>\n                <div class=\"clear\"></div>\n            </div>\n        </div>\n    </form>\n</div>\n";
            };
            LoginPanel = __decorate([
                Serenity.Decorators.registerClass()
            ], LoginPanel);
            return LoginPanel;
        }(Serenity.PropertyPanel));
        Membership.LoginPanel = LoginPanel;
    })(Membership = Yaxie.Membership || (Yaxie.Membership = {}));
})(Yaxie || (Yaxie = {}));
var Yaxie;
(function (Yaxie) {
    var Membership;
    (function (Membership) {
        var ChangePasswordPanel = /** @class */ (function (_super) {
            __extends(ChangePasswordPanel, _super);
            function ChangePasswordPanel(container) {
                var _this = _super.call(this, container) || this;
                _this.form = new Membership.ChangePasswordForm(_this.idPrefix);
                _this.form.NewPassword.addValidationRule(_this.uniqueName, function (e) {
                    if (_this.form.w('ConfirmPassword', Serenity.PasswordEditor).value.length < 7) {
                        return Q.format(Q.text('Validation.MinRequiredPasswordLength'), 7);
                    }
                });
                _this.form.ConfirmPassword.addValidationRule(_this.uniqueName, function (e) {
                    if (_this.form.ConfirmPassword.value !== _this.form.NewPassword.value) {
                        return Q.text('Validation.PasswordConfirm');
                    }
                });
                _this.byId('SubmitButton').click(function (e) {
                    e.preventDefault();
                    if (!_this.validateForm()) {
                        return;
                    }
                    var request = _this.getSaveEntity();
                    Q.serviceCall({
                        url: Q.resolveUrl('~/Account/ChangePassword'),
                        request: request,
                        onSuccess: function (response) {
                            Q.information(Q.text('Forms.Membership.ChangePassword.Success'), function () {
                                window.location.href = Q.resolveUrl('~/');
                            });
                        }
                    });
                });
                return _this;
            }
            ChangePasswordPanel.prototype.getFormKey = function () { return Membership.ChangePasswordForm.formKey; };
            ChangePasswordPanel = __decorate([
                Serenity.Decorators.registerClass()
            ], ChangePasswordPanel);
            return ChangePasswordPanel;
        }(Serenity.PropertyPanel));
        Membership.ChangePasswordPanel = ChangePasswordPanel;
    })(Membership = Yaxie.Membership || (Yaxie.Membership = {}));
})(Yaxie || (Yaxie = {}));
var Yaxie;
(function (Yaxie) {
    var Membership;
    (function (Membership) {
        var ForgotPasswordPanel = /** @class */ (function (_super) {
            __extends(ForgotPasswordPanel, _super);
            function ForgotPasswordPanel(container) {
                var _this = _super.call(this, container) || this;
                _this.form = new Membership.ForgotPasswordForm(_this.idPrefix);
                _this.byId('SubmitButton').click(function (e) {
                    e.preventDefault();
                    if (!_this.validateForm()) {
                        return;
                    }
                    var request = _this.getSaveEntity();
                    Q.serviceCall({
                        url: Q.resolveUrl('~/Account/ForgotPassword'),
                        request: request,
                        onSuccess: function (response) {
                            Q.information(Q.text('Forms.Membership.ForgotPassword.Success'), function () {
                                window.location.href = Q.resolveUrl('~/');
                            });
                        }
                    });
                });
                return _this;
            }
            ForgotPasswordPanel.prototype.getFormKey = function () { return Membership.ForgotPasswordForm.formKey; };
            ForgotPasswordPanel = __decorate([
                Serenity.Decorators.registerClass()
            ], ForgotPasswordPanel);
            return ForgotPasswordPanel;
        }(Serenity.PropertyPanel));
        Membership.ForgotPasswordPanel = ForgotPasswordPanel;
    })(Membership = Yaxie.Membership || (Yaxie.Membership = {}));
})(Yaxie || (Yaxie = {}));
var Yaxie;
(function (Yaxie) {
    var Membership;
    (function (Membership) {
        var ResetPasswordPanel = /** @class */ (function (_super) {
            __extends(ResetPasswordPanel, _super);
            function ResetPasswordPanel(container) {
                var _this = _super.call(this, container) || this;
                _this.form = new Membership.ResetPasswordForm(_this.idPrefix);
                _this.form.NewPassword.addValidationRule(_this.uniqueName, function (e) {
                    if (_this.form.ConfirmPassword.value.length < 7) {
                        return Q.format(Q.text('Validation.MinRequiredPasswordLength'), 7);
                    }
                });
                _this.form.ConfirmPassword.addValidationRule(_this.uniqueName, function (e) {
                    if (_this.form.ConfirmPassword.value !== _this.form.NewPassword.value) {
                        return Q.text('Validation.PasswordConfirm');
                    }
                });
                _this.byId('SubmitButton').click(function (e) {
                    e.preventDefault();
                    if (!_this.validateForm()) {
                        return;
                    }
                    var request = _this.getSaveEntity();
                    request.Token = _this.byId('Token').val();
                    Q.serviceCall({
                        url: Q.resolveUrl('~/Account/ResetPassword'),
                        request: request,
                        onSuccess: function (response) {
                            Q.information(Q.text('Forms.Membership.ResetPassword.Success'), function () {
                                window.location.href = Q.resolveUrl('~/Account/Login');
                            });
                        }
                    });
                });
                return _this;
            }
            ResetPasswordPanel.prototype.getFormKey = function () { return Membership.ResetPasswordForm.formKey; };
            ResetPasswordPanel = __decorate([
                Serenity.Decorators.registerClass()
            ], ResetPasswordPanel);
            return ResetPasswordPanel;
        }(Serenity.PropertyPanel));
        Membership.ResetPasswordPanel = ResetPasswordPanel;
    })(Membership = Yaxie.Membership || (Yaxie.Membership = {}));
})(Yaxie || (Yaxie = {}));
var Yaxie;
(function (Yaxie) {
    var Membership;
    (function (Membership) {
        var SignUpPanel = /** @class */ (function (_super) {
            __extends(SignUpPanel, _super);
            function SignUpPanel(container) {
                var _this = _super.call(this, container) || this;
                _this.form = new Membership.SignUpForm(_this.idPrefix);
                _this.form.ConfirmEmail.addValidationRule(_this.uniqueName, function (e) {
                    if (_this.form.ConfirmEmail.value !== _this.form.Email.value) {
                        return Q.text('Validation.EmailConfirm');
                    }
                });
                _this.form.ConfirmPassword.addValidationRule(_this.uniqueName, function (e) {
                    if (_this.form.ConfirmPassword.value !== _this.form.Password.value) {
                        return Q.text('Validation.PasswordConfirm');
                    }
                });
                _this.byId('SubmitButton').click(function (e) {
                    e.preventDefault();
                    if (!_this.validateForm()) {
                        return;
                    }
                    Q.serviceCall({
                        url: Q.resolveUrl('~/Account/SignUp'),
                        request: {
                            DisplayName: _this.form.DisplayName.value,
                            Email: _this.form.Email.value,
                            Password: _this.form.Password.value
                        },
                        onSuccess: function (response) {
                            Q.information(Q.text('Forms.Membership.SignUp.Success'), function () {
                                window.location.href = Q.resolveUrl('~/');
                            });
                        }
                    });
                });
                return _this;
            }
            SignUpPanel.prototype.getFormKey = function () { return Membership.SignUpForm.formKey; };
            SignUpPanel = __decorate([
                Serenity.Decorators.registerClass()
            ], SignUpPanel);
            return SignUpPanel;
        }(Serenity.PropertyPanel));
        Membership.SignUpPanel = SignUpPanel;
    })(Membership = Yaxie.Membership || (Yaxie.Membership = {}));
})(Yaxie || (Yaxie = {}));
var Yaxie;
(function (Yaxie) {
    var NorthWind;
    (function (NorthWind) {
        var CategoriesDialog = /** @class */ (function (_super) {
            __extends(CategoriesDialog, _super);
            function CategoriesDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new NorthWind.CategoriesForm(_this.idPrefix);
                return _this;
            }
            CategoriesDialog.prototype.getFormKey = function () { return NorthWind.CategoriesForm.formKey; };
            CategoriesDialog.prototype.getIdProperty = function () { return NorthWind.CategoriesRow.idProperty; };
            CategoriesDialog.prototype.getLocalTextPrefix = function () { return NorthWind.CategoriesRow.localTextPrefix; };
            CategoriesDialog.prototype.getNameProperty = function () { return NorthWind.CategoriesRow.nameProperty; };
            CategoriesDialog.prototype.getService = function () { return NorthWind.CategoriesService.baseUrl; };
            CategoriesDialog.prototype.getDeletePermission = function () { return NorthWind.CategoriesRow.deletePermission; };
            CategoriesDialog.prototype.getInsertPermission = function () { return NorthWind.CategoriesRow.insertPermission; };
            CategoriesDialog.prototype.getUpdatePermission = function () { return NorthWind.CategoriesRow.updatePermission; };
            CategoriesDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], CategoriesDialog);
            return CategoriesDialog;
        }(Serenity.EntityDialog));
        NorthWind.CategoriesDialog = CategoriesDialog;
    })(NorthWind = Yaxie.NorthWind || (Yaxie.NorthWind = {}));
})(Yaxie || (Yaxie = {}));
var Yaxie;
(function (Yaxie) {
    var NorthWind;
    (function (NorthWind) {
        var CategoriesGrid = /** @class */ (function (_super) {
            __extends(CategoriesGrid, _super);
            function CategoriesGrid(container) {
                return _super.call(this, container) || this;
            }
            CategoriesGrid.prototype.getColumnsKey = function () { return 'NorthWind.Categories'; };
            CategoriesGrid.prototype.getDialogType = function () { return NorthWind.CategoriesDialog; };
            CategoriesGrid.prototype.getIdProperty = function () { return NorthWind.CategoriesRow.idProperty; };
            CategoriesGrid.prototype.getInsertPermission = function () { return NorthWind.CategoriesRow.insertPermission; };
            CategoriesGrid.prototype.getLocalTextPrefix = function () { return NorthWind.CategoriesRow.localTextPrefix; };
            CategoriesGrid.prototype.getService = function () { return NorthWind.CategoriesService.baseUrl; };
            CategoriesGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], CategoriesGrid);
            return CategoriesGrid;
        }(Serenity.EntityGrid));
        NorthWind.CategoriesGrid = CategoriesGrid;
    })(NorthWind = Yaxie.NorthWind || (Yaxie.NorthWind = {}));
})(Yaxie || (Yaxie = {}));
var Yaxie;
(function (Yaxie) {
    var NorthWind;
    (function (NorthWind) {
        var CategoryLangDialog = /** @class */ (function (_super) {
            __extends(CategoryLangDialog, _super);
            function CategoryLangDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new NorthWind.CategoryLangForm(_this.idPrefix);
                return _this;
            }
            CategoryLangDialog.prototype.getFormKey = function () { return NorthWind.CategoryLangForm.formKey; };
            CategoryLangDialog.prototype.getIdProperty = function () { return NorthWind.CategoryLangRow.idProperty; };
            CategoryLangDialog.prototype.getLocalTextPrefix = function () { return NorthWind.CategoryLangRow.localTextPrefix; };
            CategoryLangDialog.prototype.getNameProperty = function () { return NorthWind.CategoryLangRow.nameProperty; };
            CategoryLangDialog.prototype.getService = function () { return NorthWind.CategoryLangService.baseUrl; };
            CategoryLangDialog.prototype.getDeletePermission = function () { return NorthWind.CategoryLangRow.deletePermission; };
            CategoryLangDialog.prototype.getInsertPermission = function () { return NorthWind.CategoryLangRow.insertPermission; };
            CategoryLangDialog.prototype.getUpdatePermission = function () { return NorthWind.CategoryLangRow.updatePermission; };
            CategoryLangDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], CategoryLangDialog);
            return CategoryLangDialog;
        }(Serenity.EntityDialog));
        NorthWind.CategoryLangDialog = CategoryLangDialog;
    })(NorthWind = Yaxie.NorthWind || (Yaxie.NorthWind = {}));
})(Yaxie || (Yaxie = {}));
var Yaxie;
(function (Yaxie) {
    var NorthWind;
    (function (NorthWind) {
        var CategoryLangGrid = /** @class */ (function (_super) {
            __extends(CategoryLangGrid, _super);
            function CategoryLangGrid(container) {
                return _super.call(this, container) || this;
            }
            CategoryLangGrid.prototype.getColumnsKey = function () { return 'NorthWind.CategoryLang'; };
            CategoryLangGrid.prototype.getDialogType = function () { return NorthWind.CategoryLangDialog; };
            CategoryLangGrid.prototype.getIdProperty = function () { return NorthWind.CategoryLangRow.idProperty; };
            CategoryLangGrid.prototype.getInsertPermission = function () { return NorthWind.CategoryLangRow.insertPermission; };
            CategoryLangGrid.prototype.getLocalTextPrefix = function () { return NorthWind.CategoryLangRow.localTextPrefix; };
            CategoryLangGrid.prototype.getService = function () { return NorthWind.CategoryLangService.baseUrl; };
            CategoryLangGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], CategoryLangGrid);
            return CategoryLangGrid;
        }(Serenity.EntityGrid));
        NorthWind.CategoryLangGrid = CategoryLangGrid;
    })(NorthWind = Yaxie.NorthWind || (Yaxie.NorthWind = {}));
})(Yaxie || (Yaxie = {}));
var Yaxie;
(function (Yaxie) {
    var NorthWind;
    (function (NorthWind) {
        var CustomerDetailsDialog = /** @class */ (function (_super) {
            __extends(CustomerDetailsDialog, _super);
            function CustomerDetailsDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new NorthWind.CustomerDetailsForm(_this.idPrefix);
                return _this;
            }
            CustomerDetailsDialog.prototype.getFormKey = function () { return NorthWind.CustomerDetailsForm.formKey; };
            CustomerDetailsDialog.prototype.getIdProperty = function () { return NorthWind.CustomerDetailsRow.idProperty; };
            CustomerDetailsDialog.prototype.getLocalTextPrefix = function () { return NorthWind.CustomerDetailsRow.localTextPrefix; };
            CustomerDetailsDialog.prototype.getNameProperty = function () { return NorthWind.CustomerDetailsRow.nameProperty; };
            CustomerDetailsDialog.prototype.getService = function () { return NorthWind.CustomerDetailsService.baseUrl; };
            CustomerDetailsDialog.prototype.getDeletePermission = function () { return NorthWind.CustomerDetailsRow.deletePermission; };
            CustomerDetailsDialog.prototype.getInsertPermission = function () { return NorthWind.CustomerDetailsRow.insertPermission; };
            CustomerDetailsDialog.prototype.getUpdatePermission = function () { return NorthWind.CustomerDetailsRow.updatePermission; };
            CustomerDetailsDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], CustomerDetailsDialog);
            return CustomerDetailsDialog;
        }(Serenity.EntityDialog));
        NorthWind.CustomerDetailsDialog = CustomerDetailsDialog;
    })(NorthWind = Yaxie.NorthWind || (Yaxie.NorthWind = {}));
})(Yaxie || (Yaxie = {}));
var Yaxie;
(function (Yaxie) {
    var NorthWind;
    (function (NorthWind) {
        var CustomerDetailsGrid = /** @class */ (function (_super) {
            __extends(CustomerDetailsGrid, _super);
            function CustomerDetailsGrid(container) {
                return _super.call(this, container) || this;
            }
            CustomerDetailsGrid.prototype.getColumnsKey = function () { return 'NorthWind.CustomerDetails'; };
            CustomerDetailsGrid.prototype.getDialogType = function () { return NorthWind.CustomerDetailsDialog; };
            CustomerDetailsGrid.prototype.getIdProperty = function () { return NorthWind.CustomerDetailsRow.idProperty; };
            CustomerDetailsGrid.prototype.getInsertPermission = function () { return NorthWind.CustomerDetailsRow.insertPermission; };
            CustomerDetailsGrid.prototype.getLocalTextPrefix = function () { return NorthWind.CustomerDetailsRow.localTextPrefix; };
            CustomerDetailsGrid.prototype.getService = function () { return NorthWind.CustomerDetailsService.baseUrl; };
            CustomerDetailsGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], CustomerDetailsGrid);
            return CustomerDetailsGrid;
        }(Serenity.EntityGrid));
        NorthWind.CustomerDetailsGrid = CustomerDetailsGrid;
    })(NorthWind = Yaxie.NorthWind || (Yaxie.NorthWind = {}));
})(Yaxie || (Yaxie = {}));
var Yaxie;
(function (Yaxie) {
    var NorthWind;
    (function (NorthWind) {
        var CustomersDialog = /** @class */ (function (_super) {
            __extends(CustomersDialog, _super);
            function CustomersDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new NorthWind.CustomersForm(_this.idPrefix);
                return _this;
            }
            CustomersDialog.prototype.getFormKey = function () { return NorthWind.CustomersForm.formKey; };
            CustomersDialog.prototype.getIdProperty = function () { return NorthWind.CustomersRow.idProperty; };
            CustomersDialog.prototype.getLocalTextPrefix = function () { return NorthWind.CustomersRow.localTextPrefix; };
            CustomersDialog.prototype.getNameProperty = function () { return NorthWind.CustomersRow.nameProperty; };
            CustomersDialog.prototype.getService = function () { return NorthWind.CustomersService.baseUrl; };
            CustomersDialog.prototype.getDeletePermission = function () { return NorthWind.CustomersRow.deletePermission; };
            CustomersDialog.prototype.getInsertPermission = function () { return NorthWind.CustomersRow.insertPermission; };
            CustomersDialog.prototype.getUpdatePermission = function () { return NorthWind.CustomersRow.updatePermission; };
            CustomersDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], CustomersDialog);
            return CustomersDialog;
        }(Serenity.EntityDialog));
        NorthWind.CustomersDialog = CustomersDialog;
    })(NorthWind = Yaxie.NorthWind || (Yaxie.NorthWind = {}));
})(Yaxie || (Yaxie = {}));
var Yaxie;
(function (Yaxie) {
    var NorthWind;
    (function (NorthWind) {
        var CustomersGrid = /** @class */ (function (_super) {
            __extends(CustomersGrid, _super);
            function CustomersGrid(container) {
                return _super.call(this, container) || this;
            }
            CustomersGrid.prototype.getColumnsKey = function () { return 'NorthWind.Customers'; };
            CustomersGrid.prototype.getDialogType = function () { return NorthWind.CustomersDialog; };
            CustomersGrid.prototype.getIdProperty = function () { return NorthWind.CustomersRow.idProperty; };
            CustomersGrid.prototype.getInsertPermission = function () { return NorthWind.CustomersRow.insertPermission; };
            CustomersGrid.prototype.getLocalTextPrefix = function () { return NorthWind.CustomersRow.localTextPrefix; };
            CustomersGrid.prototype.getService = function () { return NorthWind.CustomersService.baseUrl; };
            CustomersGrid.prototype.createToolbarExtensions = function () {
                _super.prototype.createToolbarExtensions.call(this);
                this.rowSelection = new Serenity.GridRowSelectionMixin(this);
            };
            CustomersGrid.prototype.getButtons = function () {
                var _this = this;
                var buttons = _super.prototype.getButtons.call(this);
                if (Yaxie.Authorization.hasPermission("Accounting:Excel")) {
                    buttons.push(Yaxie.Common.ExcelExportHelper.createToolButton({
                        grid: this,
                        service: NorthWind.CustomersService.baseUrl + '/ListExcel',
                        onViewSubmit: function () { return _this.onViewSubmit(); },
                        separator: true
                    }));
                }
                ;
                buttons.push({
                    title: 'Import from QuickBooks',
                    cssClass: 'send-button',
                    onClick: function () {
                        if (!_this.onViewSubmit()) {
                            return;
                        }
                        window.location.href = Q.resolveUrl("~/QuickBooks/QuickBooks") + '/QuickBooksLogin?function=import&entity=account';
                    }
                });
                buttons.push({
                    title: 'Export to QuickBooks',
                    cssClass: 'send-button',
                    onClick: function () {
                        if (!_this.onViewSubmit()) {
                            return;
                        }
                        var selected = _this.rowSelection.getSelectedKeys();
                        if (selected.length == 0) {
                            Q.warning(Q.text("Please select some records"));
                        }
                        else {
                            var keys = selected.toString();
                            window.location.replace('/QuickBooks/QuickBooks/QuickBooksLogin?function=export&entity=account&keys=' + keys);
                        }
                        _this.rowSelection.resetCheckedAndRefresh();
                    }
                });
                return buttons;
            };
            CustomersGrid.prototype.getColumns = function () {
                var _this = this;
                var columns = _super.prototype.getColumns.call(this);
                columns.splice(0, 0, Serenity.GridRowSelectionMixin.createSelectColumn(function () { return _this.rowSelection; }));
                return columns;
            };
            CustomersGrid.prototype.getViewOptions = function () {
                var opt = _super.prototype.getViewOptions.call(this);
                opt.rowsPerPage = 100;
                return opt;
            };
            CustomersGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], CustomersGrid);
            return CustomersGrid;
        }(Serenity.EntityGrid));
        NorthWind.CustomersGrid = CustomersGrid;
    })(NorthWind = Yaxie.NorthWind || (Yaxie.NorthWind = {}));
})(Yaxie || (Yaxie = {}));
var Yaxie;
(function (Yaxie) {
    var NorthWind;
    (function (NorthWind) {
        var EmployeeTerritoriesDialog = /** @class */ (function (_super) {
            __extends(EmployeeTerritoriesDialog, _super);
            function EmployeeTerritoriesDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new NorthWind.EmployeeTerritoriesForm(_this.idPrefix);
                return _this;
            }
            EmployeeTerritoriesDialog.prototype.getFormKey = function () { return NorthWind.EmployeeTerritoriesForm.formKey; };
            EmployeeTerritoriesDialog.prototype.getIdProperty = function () { return NorthWind.EmployeeTerritoriesRow.idProperty; };
            EmployeeTerritoriesDialog.prototype.getLocalTextPrefix = function () { return NorthWind.EmployeeTerritoriesRow.localTextPrefix; };
            EmployeeTerritoriesDialog.prototype.getNameProperty = function () { return NorthWind.EmployeeTerritoriesRow.nameProperty; };
            EmployeeTerritoriesDialog.prototype.getService = function () { return NorthWind.EmployeeTerritoriesService.baseUrl; };
            EmployeeTerritoriesDialog.prototype.getDeletePermission = function () { return NorthWind.EmployeeTerritoriesRow.deletePermission; };
            EmployeeTerritoriesDialog.prototype.getInsertPermission = function () { return NorthWind.EmployeeTerritoriesRow.insertPermission; };
            EmployeeTerritoriesDialog.prototype.getUpdatePermission = function () { return NorthWind.EmployeeTerritoriesRow.updatePermission; };
            EmployeeTerritoriesDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], EmployeeTerritoriesDialog);
            return EmployeeTerritoriesDialog;
        }(Serenity.EntityDialog));
        NorthWind.EmployeeTerritoriesDialog = EmployeeTerritoriesDialog;
    })(NorthWind = Yaxie.NorthWind || (Yaxie.NorthWind = {}));
})(Yaxie || (Yaxie = {}));
var Yaxie;
(function (Yaxie) {
    var NorthWind;
    (function (NorthWind) {
        var EmployeeTerritoriesGrid = /** @class */ (function (_super) {
            __extends(EmployeeTerritoriesGrid, _super);
            function EmployeeTerritoriesGrid(container) {
                return _super.call(this, container) || this;
            }
            EmployeeTerritoriesGrid.prototype.getColumnsKey = function () { return 'NorthWind.EmployeeTerritories'; };
            EmployeeTerritoriesGrid.prototype.getDialogType = function () { return NorthWind.EmployeeTerritoriesDialog; };
            EmployeeTerritoriesGrid.prototype.getIdProperty = function () { return NorthWind.EmployeeTerritoriesRow.idProperty; };
            EmployeeTerritoriesGrid.prototype.getInsertPermission = function () { return NorthWind.EmployeeTerritoriesRow.insertPermission; };
            EmployeeTerritoriesGrid.prototype.getLocalTextPrefix = function () { return NorthWind.EmployeeTerritoriesRow.localTextPrefix; };
            EmployeeTerritoriesGrid.prototype.getService = function () { return NorthWind.EmployeeTerritoriesService.baseUrl; };
            EmployeeTerritoriesGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], EmployeeTerritoriesGrid);
            return EmployeeTerritoriesGrid;
        }(Serenity.EntityGrid));
        NorthWind.EmployeeTerritoriesGrid = EmployeeTerritoriesGrid;
    })(NorthWind = Yaxie.NorthWind || (Yaxie.NorthWind = {}));
})(Yaxie || (Yaxie = {}));
var Yaxie;
(function (Yaxie) {
    var NorthWind;
    (function (NorthWind) {
        var EmployeesDialog = /** @class */ (function (_super) {
            __extends(EmployeesDialog, _super);
            function EmployeesDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new NorthWind.EmployeesForm(_this.idPrefix);
                return _this;
            }
            EmployeesDialog.prototype.getFormKey = function () { return NorthWind.EmployeesForm.formKey; };
            EmployeesDialog.prototype.getIdProperty = function () { return NorthWind.EmployeesRow.idProperty; };
            EmployeesDialog.prototype.getLocalTextPrefix = function () { return NorthWind.EmployeesRow.localTextPrefix; };
            EmployeesDialog.prototype.getNameProperty = function () { return NorthWind.EmployeesRow.nameProperty; };
            EmployeesDialog.prototype.getService = function () { return NorthWind.EmployeesService.baseUrl; };
            EmployeesDialog.prototype.getDeletePermission = function () { return NorthWind.EmployeesRow.deletePermission; };
            EmployeesDialog.prototype.getInsertPermission = function () { return NorthWind.EmployeesRow.insertPermission; };
            EmployeesDialog.prototype.getUpdatePermission = function () { return NorthWind.EmployeesRow.updatePermission; };
            EmployeesDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], EmployeesDialog);
            return EmployeesDialog;
        }(Serenity.EntityDialog));
        NorthWind.EmployeesDialog = EmployeesDialog;
    })(NorthWind = Yaxie.NorthWind || (Yaxie.NorthWind = {}));
})(Yaxie || (Yaxie = {}));
var Yaxie;
(function (Yaxie) {
    var NorthWind;
    (function (NorthWind) {
        var EmployeesGrid = /** @class */ (function (_super) {
            __extends(EmployeesGrid, _super);
            function EmployeesGrid(container) {
                return _super.call(this, container) || this;
            }
            EmployeesGrid.prototype.getColumnsKey = function () { return 'NorthWind.Employees'; };
            EmployeesGrid.prototype.getDialogType = function () { return NorthWind.EmployeesDialog; };
            EmployeesGrid.prototype.getIdProperty = function () { return NorthWind.EmployeesRow.idProperty; };
            EmployeesGrid.prototype.getInsertPermission = function () { return NorthWind.EmployeesRow.insertPermission; };
            EmployeesGrid.prototype.getLocalTextPrefix = function () { return NorthWind.EmployeesRow.localTextPrefix; };
            EmployeesGrid.prototype.getService = function () { return NorthWind.EmployeesService.baseUrl; };
            EmployeesGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], EmployeesGrid);
            return EmployeesGrid;
        }(Serenity.EntityGrid));
        NorthWind.EmployeesGrid = EmployeesGrid;
    })(NorthWind = Yaxie.NorthWind || (Yaxie.NorthWind = {}));
})(Yaxie || (Yaxie = {}));
var Yaxie;
(function (Yaxie) {
    var NorthWind;
    (function (NorthWind) {
        var InvoicesDialog = /** @class */ (function (_super) {
            __extends(InvoicesDialog, _super);
            function InvoicesDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new NorthWind.InvoicesForm(_this.idPrefix);
                return _this;
            }
            InvoicesDialog.prototype.getFormKey = function () { return NorthWind.InvoicesForm.formKey; };
            InvoicesDialog.prototype.getIdProperty = function () { return NorthWind.InvoicesRow.idProperty; };
            InvoicesDialog.prototype.getLocalTextPrefix = function () { return NorthWind.InvoicesRow.localTextPrefix; };
            InvoicesDialog.prototype.getNameProperty = function () { return NorthWind.InvoicesRow.nameProperty; };
            InvoicesDialog.prototype.getService = function () { return NorthWind.InvoicesService.baseUrl; };
            InvoicesDialog.prototype.getDeletePermission = function () { return NorthWind.InvoicesRow.deletePermission; };
            InvoicesDialog.prototype.getInsertPermission = function () { return NorthWind.InvoicesRow.insertPermission; };
            InvoicesDialog.prototype.getUpdatePermission = function () { return NorthWind.InvoicesRow.updatePermission; };
            InvoicesDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], InvoicesDialog);
            return InvoicesDialog;
        }(Serenity.EntityDialog));
        NorthWind.InvoicesDialog = InvoicesDialog;
    })(NorthWind = Yaxie.NorthWind || (Yaxie.NorthWind = {}));
})(Yaxie || (Yaxie = {}));
var Yaxie;
(function (Yaxie) {
    var NorthWind;
    (function (NorthWind) {
        var InvoicesGrid = /** @class */ (function (_super) {
            __extends(InvoicesGrid, _super);
            function InvoicesGrid(container) {
                return _super.call(this, container) || this;
            }
            InvoicesGrid.prototype.getColumnsKey = function () { return 'NorthWind.Invoices'; };
            InvoicesGrid.prototype.getDialogType = function () { return NorthWind.InvoicesDialog; };
            InvoicesGrid.prototype.getIdProperty = function () { return NorthWind.InvoicesRow.idProperty; };
            InvoicesGrid.prototype.getInsertPermission = function () { return NorthWind.InvoicesRow.insertPermission; };
            InvoicesGrid.prototype.getLocalTextPrefix = function () { return NorthWind.InvoicesRow.localTextPrefix; };
            InvoicesGrid.prototype.getService = function () { return NorthWind.InvoicesService.baseUrl; };
            InvoicesGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], InvoicesGrid);
            return InvoicesGrid;
        }(Serenity.EntityGrid));
        NorthWind.InvoicesGrid = InvoicesGrid;
    })(NorthWind = Yaxie.NorthWind || (Yaxie.NorthWind = {}));
})(Yaxie || (Yaxie = {}));
var Yaxie;
(function (Yaxie) {
    var NorthWind;
    (function (NorthWind) {
        var NotesDialog = /** @class */ (function (_super) {
            __extends(NotesDialog, _super);
            function NotesDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new NorthWind.NotesForm(_this.idPrefix);
                return _this;
            }
            NotesDialog.prototype.getFormKey = function () { return NorthWind.NotesForm.formKey; };
            NotesDialog.prototype.getIdProperty = function () { return NorthWind.NotesRow.idProperty; };
            NotesDialog.prototype.getLocalTextPrefix = function () { return NorthWind.NotesRow.localTextPrefix; };
            NotesDialog.prototype.getNameProperty = function () { return NorthWind.NotesRow.nameProperty; };
            NotesDialog.prototype.getService = function () { return NorthWind.NotesService.baseUrl; };
            NotesDialog.prototype.getDeletePermission = function () { return NorthWind.NotesRow.deletePermission; };
            NotesDialog.prototype.getInsertPermission = function () { return NorthWind.NotesRow.insertPermission; };
            NotesDialog.prototype.getUpdatePermission = function () { return NorthWind.NotesRow.updatePermission; };
            NotesDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], NotesDialog);
            return NotesDialog;
        }(Serenity.EntityDialog));
        NorthWind.NotesDialog = NotesDialog;
    })(NorthWind = Yaxie.NorthWind || (Yaxie.NorthWind = {}));
})(Yaxie || (Yaxie = {}));
var Yaxie;
(function (Yaxie) {
    var NorthWind;
    (function (NorthWind) {
        var NotesGrid = /** @class */ (function (_super) {
            __extends(NotesGrid, _super);
            function NotesGrid(container) {
                return _super.call(this, container) || this;
            }
            NotesGrid.prototype.getColumnsKey = function () { return 'NorthWind.Notes'; };
            NotesGrid.prototype.getDialogType = function () { return NorthWind.NotesDialog; };
            NotesGrid.prototype.getIdProperty = function () { return NorthWind.NotesRow.idProperty; };
            NotesGrid.prototype.getInsertPermission = function () { return NorthWind.NotesRow.insertPermission; };
            NotesGrid.prototype.getLocalTextPrefix = function () { return NorthWind.NotesRow.localTextPrefix; };
            NotesGrid.prototype.getService = function () { return NorthWind.NotesService.baseUrl; };
            NotesGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], NotesGrid);
            return NotesGrid;
        }(Serenity.EntityGrid));
        NorthWind.NotesGrid = NotesGrid;
    })(NorthWind = Yaxie.NorthWind || (Yaxie.NorthWind = {}));
})(Yaxie || (Yaxie = {}));
var Yaxie;
(function (Yaxie) {
    var NorthWind;
    (function (NorthWind) {
        var OrderDetailsDialog = /** @class */ (function (_super) {
            __extends(OrderDetailsDialog, _super);
            function OrderDetailsDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new NorthWind.OrderDetailsForm(_this.idPrefix);
                return _this;
            }
            OrderDetailsDialog.prototype.getFormKey = function () { return NorthWind.OrderDetailsForm.formKey; };
            OrderDetailsDialog.prototype.getIdProperty = function () { return NorthWind.OrderDetailsRow.idProperty; };
            OrderDetailsDialog.prototype.getLocalTextPrefix = function () { return NorthWind.OrderDetailsRow.localTextPrefix; };
            OrderDetailsDialog.prototype.getService = function () { return NorthWind.OrderDetailsService.baseUrl; };
            OrderDetailsDialog.prototype.getDeletePermission = function () { return NorthWind.OrderDetailsRow.deletePermission; };
            OrderDetailsDialog.prototype.getInsertPermission = function () { return NorthWind.OrderDetailsRow.insertPermission; };
            OrderDetailsDialog.prototype.getUpdatePermission = function () { return NorthWind.OrderDetailsRow.updatePermission; };
            OrderDetailsDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], OrderDetailsDialog);
            return OrderDetailsDialog;
        }(Serenity.EntityDialog));
        NorthWind.OrderDetailsDialog = OrderDetailsDialog;
    })(NorthWind = Yaxie.NorthWind || (Yaxie.NorthWind = {}));
})(Yaxie || (Yaxie = {}));
var Yaxie;
(function (Yaxie) {
    var NorthWind;
    (function (NorthWind) {
        var OrderDetailsGrid = /** @class */ (function (_super) {
            __extends(OrderDetailsGrid, _super);
            function OrderDetailsGrid(container) {
                return _super.call(this, container) || this;
            }
            OrderDetailsGrid.prototype.getColumnsKey = function () { return 'NorthWind.OrderDetails'; };
            OrderDetailsGrid.prototype.getDialogType = function () { return NorthWind.OrderDetailsDialog; };
            OrderDetailsGrid.prototype.getIdProperty = function () { return NorthWind.OrderDetailsRow.idProperty; };
            OrderDetailsGrid.prototype.getInsertPermission = function () { return NorthWind.OrderDetailsRow.insertPermission; };
            OrderDetailsGrid.prototype.getLocalTextPrefix = function () { return NorthWind.OrderDetailsRow.localTextPrefix; };
            OrderDetailsGrid.prototype.getService = function () { return NorthWind.OrderDetailsService.baseUrl; };
            OrderDetailsGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], OrderDetailsGrid);
            return OrderDetailsGrid;
        }(Serenity.EntityGrid));
        NorthWind.OrderDetailsGrid = OrderDetailsGrid;
    })(NorthWind = Yaxie.NorthWind || (Yaxie.NorthWind = {}));
})(Yaxie || (Yaxie = {}));
var Yaxie;
(function (Yaxie) {
    var NorthWind;
    (function (NorthWind) {
        var OrdersDialog = /** @class */ (function (_super) {
            __extends(OrdersDialog, _super);
            function OrdersDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new NorthWind.OrdersForm(_this.idPrefix);
                return _this;
            }
            OrdersDialog.prototype.getFormKey = function () { return NorthWind.OrdersForm.formKey; };
            OrdersDialog.prototype.getIdProperty = function () { return NorthWind.OrdersRow.idProperty; };
            OrdersDialog.prototype.getLocalTextPrefix = function () { return NorthWind.OrdersRow.localTextPrefix; };
            OrdersDialog.prototype.getNameProperty = function () { return NorthWind.OrdersRow.nameProperty; };
            OrdersDialog.prototype.getService = function () { return NorthWind.OrdersService.baseUrl; };
            OrdersDialog.prototype.getDeletePermission = function () { return NorthWind.OrdersRow.deletePermission; };
            OrdersDialog.prototype.getInsertPermission = function () { return NorthWind.OrdersRow.insertPermission; };
            OrdersDialog.prototype.getUpdatePermission = function () { return NorthWind.OrdersRow.updatePermission; };
            OrdersDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], OrdersDialog);
            return OrdersDialog;
        }(Serenity.EntityDialog));
        NorthWind.OrdersDialog = OrdersDialog;
    })(NorthWind = Yaxie.NorthWind || (Yaxie.NorthWind = {}));
})(Yaxie || (Yaxie = {}));
var Yaxie;
(function (Yaxie) {
    var NorthWind;
    (function (NorthWind) {
        var OrdersGrid = /** @class */ (function (_super) {
            __extends(OrdersGrid, _super);
            function OrdersGrid(container) {
                return _super.call(this, container) || this;
            }
            OrdersGrid.prototype.getColumnsKey = function () { return 'NorthWind.Orders'; };
            OrdersGrid.prototype.getDialogType = function () { return NorthWind.OrdersDialog; };
            OrdersGrid.prototype.getIdProperty = function () { return NorthWind.OrdersRow.idProperty; };
            OrdersGrid.prototype.getInsertPermission = function () { return NorthWind.OrdersRow.insertPermission; };
            OrdersGrid.prototype.getLocalTextPrefix = function () { return NorthWind.OrdersRow.localTextPrefix; };
            OrdersGrid.prototype.getService = function () { return NorthWind.OrdersService.baseUrl; };
            OrdersGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], OrdersGrid);
            return OrdersGrid;
        }(Serenity.EntityGrid));
        NorthWind.OrdersGrid = OrdersGrid;
    })(NorthWind = Yaxie.NorthWind || (Yaxie.NorthWind = {}));
})(Yaxie || (Yaxie = {}));
var Yaxie;
(function (Yaxie) {
    var NorthWind;
    (function (NorthWind) {
        var ProductLangDialog = /** @class */ (function (_super) {
            __extends(ProductLangDialog, _super);
            function ProductLangDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new NorthWind.ProductLangForm(_this.idPrefix);
                return _this;
            }
            ProductLangDialog.prototype.getFormKey = function () { return NorthWind.ProductLangForm.formKey; };
            ProductLangDialog.prototype.getIdProperty = function () { return NorthWind.ProductLangRow.idProperty; };
            ProductLangDialog.prototype.getLocalTextPrefix = function () { return NorthWind.ProductLangRow.localTextPrefix; };
            ProductLangDialog.prototype.getNameProperty = function () { return NorthWind.ProductLangRow.nameProperty; };
            ProductLangDialog.prototype.getService = function () { return NorthWind.ProductLangService.baseUrl; };
            ProductLangDialog.prototype.getDeletePermission = function () { return NorthWind.ProductLangRow.deletePermission; };
            ProductLangDialog.prototype.getInsertPermission = function () { return NorthWind.ProductLangRow.insertPermission; };
            ProductLangDialog.prototype.getUpdatePermission = function () { return NorthWind.ProductLangRow.updatePermission; };
            ProductLangDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], ProductLangDialog);
            return ProductLangDialog;
        }(Serenity.EntityDialog));
        NorthWind.ProductLangDialog = ProductLangDialog;
    })(NorthWind = Yaxie.NorthWind || (Yaxie.NorthWind = {}));
})(Yaxie || (Yaxie = {}));
var Yaxie;
(function (Yaxie) {
    var NorthWind;
    (function (NorthWind) {
        var ProductLangGrid = /** @class */ (function (_super) {
            __extends(ProductLangGrid, _super);
            function ProductLangGrid(container) {
                return _super.call(this, container) || this;
            }
            ProductLangGrid.prototype.getColumnsKey = function () { return 'NorthWind.ProductLang'; };
            ProductLangGrid.prototype.getDialogType = function () { return NorthWind.ProductLangDialog; };
            ProductLangGrid.prototype.getIdProperty = function () { return NorthWind.ProductLangRow.idProperty; };
            ProductLangGrid.prototype.getInsertPermission = function () { return NorthWind.ProductLangRow.insertPermission; };
            ProductLangGrid.prototype.getLocalTextPrefix = function () { return NorthWind.ProductLangRow.localTextPrefix; };
            ProductLangGrid.prototype.getService = function () { return NorthWind.ProductLangService.baseUrl; };
            ProductLangGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], ProductLangGrid);
            return ProductLangGrid;
        }(Serenity.EntityGrid));
        NorthWind.ProductLangGrid = ProductLangGrid;
    })(NorthWind = Yaxie.NorthWind || (Yaxie.NorthWind = {}));
})(Yaxie || (Yaxie = {}));
var Yaxie;
(function (Yaxie) {
    var NorthWind;
    (function (NorthWind) {
        var ProductsDialog = /** @class */ (function (_super) {
            __extends(ProductsDialog, _super);
            function ProductsDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new NorthWind.ProductsForm(_this.idPrefix);
                return _this;
            }
            ProductsDialog.prototype.getFormKey = function () { return NorthWind.ProductsForm.formKey; };
            ProductsDialog.prototype.getIdProperty = function () { return NorthWind.ProductsRow.idProperty; };
            ProductsDialog.prototype.getLocalTextPrefix = function () { return NorthWind.ProductsRow.localTextPrefix; };
            ProductsDialog.prototype.getNameProperty = function () { return NorthWind.ProductsRow.nameProperty; };
            ProductsDialog.prototype.getService = function () { return NorthWind.ProductsService.baseUrl; };
            ProductsDialog.prototype.getDeletePermission = function () { return NorthWind.ProductsRow.deletePermission; };
            ProductsDialog.prototype.getInsertPermission = function () { return NorthWind.ProductsRow.insertPermission; };
            ProductsDialog.prototype.getUpdatePermission = function () { return NorthWind.ProductsRow.updatePermission; };
            ProductsDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], ProductsDialog);
            return ProductsDialog;
        }(Serenity.EntityDialog));
        NorthWind.ProductsDialog = ProductsDialog;
    })(NorthWind = Yaxie.NorthWind || (Yaxie.NorthWind = {}));
})(Yaxie || (Yaxie = {}));
var Yaxie;
(function (Yaxie) {
    var NorthWind;
    (function (NorthWind) {
        var ProductsGrid = /** @class */ (function (_super) {
            __extends(ProductsGrid, _super);
            function ProductsGrid(container) {
                return _super.call(this, container) || this;
            }
            ProductsGrid.prototype.getColumnsKey = function () { return 'NorthWind.Products'; };
            ProductsGrid.prototype.getDialogType = function () { return NorthWind.ProductsDialog; };
            ProductsGrid.prototype.getIdProperty = function () { return NorthWind.ProductsRow.idProperty; };
            ProductsGrid.prototype.getInsertPermission = function () { return NorthWind.ProductsRow.insertPermission; };
            ProductsGrid.prototype.getLocalTextPrefix = function () { return NorthWind.ProductsRow.localTextPrefix; };
            ProductsGrid.prototype.getService = function () { return NorthWind.ProductsService.baseUrl; };
            ProductsGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], ProductsGrid);
            return ProductsGrid;
        }(Serenity.EntityGrid));
        NorthWind.ProductsGrid = ProductsGrid;
    })(NorthWind = Yaxie.NorthWind || (Yaxie.NorthWind = {}));
})(Yaxie || (Yaxie = {}));
var Yaxie;
(function (Yaxie) {
    var NorthWind;
    (function (NorthWind) {
        var ProductsbyCategoryDialog = /** @class */ (function (_super) {
            __extends(ProductsbyCategoryDialog, _super);
            function ProductsbyCategoryDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new NorthWind.ProductsbyCategoryForm(_this.idPrefix);
                return _this;
            }
            ProductsbyCategoryDialog.prototype.getFormKey = function () { return NorthWind.ProductsbyCategoryForm.formKey; };
            ProductsbyCategoryDialog.prototype.getIdProperty = function () { return NorthWind.ProductsbyCategoryRow.idProperty; };
            ProductsbyCategoryDialog.prototype.getLocalTextPrefix = function () { return NorthWind.ProductsbyCategoryRow.localTextPrefix; };
            ProductsbyCategoryDialog.prototype.getNameProperty = function () { return NorthWind.ProductsbyCategoryRow.nameProperty; };
            ProductsbyCategoryDialog.prototype.getService = function () { return NorthWind.ProductsbyCategoryService.baseUrl; };
            ProductsbyCategoryDialog.prototype.getDeletePermission = function () { return NorthWind.ProductsbyCategoryRow.deletePermission; };
            ProductsbyCategoryDialog.prototype.getInsertPermission = function () { return NorthWind.ProductsbyCategoryRow.insertPermission; };
            ProductsbyCategoryDialog.prototype.getUpdatePermission = function () { return NorthWind.ProductsbyCategoryRow.updatePermission; };
            ProductsbyCategoryDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], ProductsbyCategoryDialog);
            return ProductsbyCategoryDialog;
        }(Serenity.EntityDialog));
        NorthWind.ProductsbyCategoryDialog = ProductsbyCategoryDialog;
    })(NorthWind = Yaxie.NorthWind || (Yaxie.NorthWind = {}));
})(Yaxie || (Yaxie = {}));
var Yaxie;
(function (Yaxie) {
    var NorthWind;
    (function (NorthWind) {
        var ProductsbyCategoryGrid = /** @class */ (function (_super) {
            __extends(ProductsbyCategoryGrid, _super);
            function ProductsbyCategoryGrid(container) {
                return _super.call(this, container) || this;
            }
            ProductsbyCategoryGrid.prototype.getColumnsKey = function () { return 'NorthWind.ProductsbyCategory'; };
            ProductsbyCategoryGrid.prototype.getDialogType = function () { return NorthWind.ProductsbyCategoryDialog; };
            ProductsbyCategoryGrid.prototype.getIdProperty = function () { return NorthWind.ProductsbyCategoryRow.idProperty; };
            ProductsbyCategoryGrid.prototype.getInsertPermission = function () { return NorthWind.ProductsbyCategoryRow.insertPermission; };
            ProductsbyCategoryGrid.prototype.getLocalTextPrefix = function () { return NorthWind.ProductsbyCategoryRow.localTextPrefix; };
            ProductsbyCategoryGrid.prototype.getService = function () { return NorthWind.ProductsbyCategoryService.baseUrl; };
            ProductsbyCategoryGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], ProductsbyCategoryGrid);
            return ProductsbyCategoryGrid;
        }(Serenity.EntityGrid));
        NorthWind.ProductsbyCategoryGrid = ProductsbyCategoryGrid;
    })(NorthWind = Yaxie.NorthWind || (Yaxie.NorthWind = {}));
})(Yaxie || (Yaxie = {}));
var Yaxie;
(function (Yaxie) {
    var NorthWind;
    (function (NorthWind) {
        var RegionDialog = /** @class */ (function (_super) {
            __extends(RegionDialog, _super);
            function RegionDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new NorthWind.RegionForm(_this.idPrefix);
                return _this;
            }
            RegionDialog.prototype.getFormKey = function () { return NorthWind.RegionForm.formKey; };
            RegionDialog.prototype.getIdProperty = function () { return NorthWind.RegionRow.idProperty; };
            RegionDialog.prototype.getLocalTextPrefix = function () { return NorthWind.RegionRow.localTextPrefix; };
            RegionDialog.prototype.getNameProperty = function () { return NorthWind.RegionRow.nameProperty; };
            RegionDialog.prototype.getService = function () { return NorthWind.RegionService.baseUrl; };
            RegionDialog.prototype.getDeletePermission = function () { return NorthWind.RegionRow.deletePermission; };
            RegionDialog.prototype.getInsertPermission = function () { return NorthWind.RegionRow.insertPermission; };
            RegionDialog.prototype.getUpdatePermission = function () { return NorthWind.RegionRow.updatePermission; };
            RegionDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], RegionDialog);
            return RegionDialog;
        }(Serenity.EntityDialog));
        NorthWind.RegionDialog = RegionDialog;
    })(NorthWind = Yaxie.NorthWind || (Yaxie.NorthWind = {}));
})(Yaxie || (Yaxie = {}));
var Yaxie;
(function (Yaxie) {
    var NorthWind;
    (function (NorthWind) {
        var RegionGrid = /** @class */ (function (_super) {
            __extends(RegionGrid, _super);
            function RegionGrid(container) {
                return _super.call(this, container) || this;
            }
            RegionGrid.prototype.getColumnsKey = function () { return 'NorthWind.Region'; };
            RegionGrid.prototype.getDialogType = function () { return NorthWind.RegionDialog; };
            RegionGrid.prototype.getIdProperty = function () { return NorthWind.RegionRow.idProperty; };
            RegionGrid.prototype.getInsertPermission = function () { return NorthWind.RegionRow.insertPermission; };
            RegionGrid.prototype.getLocalTextPrefix = function () { return NorthWind.RegionRow.localTextPrefix; };
            RegionGrid.prototype.getService = function () { return NorthWind.RegionService.baseUrl; };
            RegionGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], RegionGrid);
            return RegionGrid;
        }(Serenity.EntityGrid));
        NorthWind.RegionGrid = RegionGrid;
    })(NorthWind = Yaxie.NorthWind || (Yaxie.NorthWind = {}));
})(Yaxie || (Yaxie = {}));
var Yaxie;
(function (Yaxie) {
    var NorthWind;
    (function (NorthWind) {
        var ShippersDialog = /** @class */ (function (_super) {
            __extends(ShippersDialog, _super);
            function ShippersDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new NorthWind.ShippersForm(_this.idPrefix);
                return _this;
            }
            ShippersDialog.prototype.getFormKey = function () { return NorthWind.ShippersForm.formKey; };
            ShippersDialog.prototype.getIdProperty = function () { return NorthWind.ShippersRow.idProperty; };
            ShippersDialog.prototype.getLocalTextPrefix = function () { return NorthWind.ShippersRow.localTextPrefix; };
            ShippersDialog.prototype.getNameProperty = function () { return NorthWind.ShippersRow.nameProperty; };
            ShippersDialog.prototype.getService = function () { return NorthWind.ShippersService.baseUrl; };
            ShippersDialog.prototype.getDeletePermission = function () { return NorthWind.ShippersRow.deletePermission; };
            ShippersDialog.prototype.getInsertPermission = function () { return NorthWind.ShippersRow.insertPermission; };
            ShippersDialog.prototype.getUpdatePermission = function () { return NorthWind.ShippersRow.updatePermission; };
            ShippersDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], ShippersDialog);
            return ShippersDialog;
        }(Serenity.EntityDialog));
        NorthWind.ShippersDialog = ShippersDialog;
    })(NorthWind = Yaxie.NorthWind || (Yaxie.NorthWind = {}));
})(Yaxie || (Yaxie = {}));
var Yaxie;
(function (Yaxie) {
    var NorthWind;
    (function (NorthWind) {
        var ShippersGrid = /** @class */ (function (_super) {
            __extends(ShippersGrid, _super);
            function ShippersGrid(container) {
                return _super.call(this, container) || this;
            }
            ShippersGrid.prototype.getColumnsKey = function () { return 'NorthWind.Shippers'; };
            ShippersGrid.prototype.getDialogType = function () { return NorthWind.ShippersDialog; };
            ShippersGrid.prototype.getIdProperty = function () { return NorthWind.ShippersRow.idProperty; };
            ShippersGrid.prototype.getInsertPermission = function () { return NorthWind.ShippersRow.insertPermission; };
            ShippersGrid.prototype.getLocalTextPrefix = function () { return NorthWind.ShippersRow.localTextPrefix; };
            ShippersGrid.prototype.getService = function () { return NorthWind.ShippersService.baseUrl; };
            ShippersGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], ShippersGrid);
            return ShippersGrid;
        }(Serenity.EntityGrid));
        NorthWind.ShippersGrid = ShippersGrid;
    })(NorthWind = Yaxie.NorthWind || (Yaxie.NorthWind = {}));
})(Yaxie || (Yaxie = {}));
var Yaxie;
(function (Yaxie) {
    var NorthWind;
    (function (NorthWind) {
        var SuppliersDialog = /** @class */ (function (_super) {
            __extends(SuppliersDialog, _super);
            function SuppliersDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new NorthWind.SuppliersForm(_this.idPrefix);
                return _this;
            }
            SuppliersDialog.prototype.getFormKey = function () { return NorthWind.SuppliersForm.formKey; };
            SuppliersDialog.prototype.getIdProperty = function () { return NorthWind.SuppliersRow.idProperty; };
            SuppliersDialog.prototype.getLocalTextPrefix = function () { return NorthWind.SuppliersRow.localTextPrefix; };
            SuppliersDialog.prototype.getNameProperty = function () { return NorthWind.SuppliersRow.nameProperty; };
            SuppliersDialog.prototype.getService = function () { return NorthWind.SuppliersService.baseUrl; };
            SuppliersDialog.prototype.getDeletePermission = function () { return NorthWind.SuppliersRow.deletePermission; };
            SuppliersDialog.prototype.getInsertPermission = function () { return NorthWind.SuppliersRow.insertPermission; };
            SuppliersDialog.prototype.getUpdatePermission = function () { return NorthWind.SuppliersRow.updatePermission; };
            SuppliersDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], SuppliersDialog);
            return SuppliersDialog;
        }(Serenity.EntityDialog));
        NorthWind.SuppliersDialog = SuppliersDialog;
    })(NorthWind = Yaxie.NorthWind || (Yaxie.NorthWind = {}));
})(Yaxie || (Yaxie = {}));
var Yaxie;
(function (Yaxie) {
    var NorthWind;
    (function (NorthWind) {
        var SuppliersGrid = /** @class */ (function (_super) {
            __extends(SuppliersGrid, _super);
            function SuppliersGrid(container) {
                return _super.call(this, container) || this;
            }
            SuppliersGrid.prototype.getColumnsKey = function () { return 'NorthWind.Suppliers'; };
            SuppliersGrid.prototype.getDialogType = function () { return NorthWind.SuppliersDialog; };
            SuppliersGrid.prototype.getIdProperty = function () { return NorthWind.SuppliersRow.idProperty; };
            SuppliersGrid.prototype.getInsertPermission = function () { return NorthWind.SuppliersRow.insertPermission; };
            SuppliersGrid.prototype.getLocalTextPrefix = function () { return NorthWind.SuppliersRow.localTextPrefix; };
            SuppliersGrid.prototype.getService = function () { return NorthWind.SuppliersService.baseUrl; };
            SuppliersGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], SuppliersGrid);
            return SuppliersGrid;
        }(Serenity.EntityGrid));
        NorthWind.SuppliersGrid = SuppliersGrid;
    })(NorthWind = Yaxie.NorthWind || (Yaxie.NorthWind = {}));
})(Yaxie || (Yaxie = {}));
var Yaxie;
(function (Yaxie) {
    var NorthWind;
    (function (NorthWind) {
        var TerritoriesDialog = /** @class */ (function (_super) {
            __extends(TerritoriesDialog, _super);
            function TerritoriesDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new NorthWind.TerritoriesForm(_this.idPrefix);
                return _this;
            }
            TerritoriesDialog.prototype.getFormKey = function () { return NorthWind.TerritoriesForm.formKey; };
            TerritoriesDialog.prototype.getIdProperty = function () { return NorthWind.TerritoriesRow.idProperty; };
            TerritoriesDialog.prototype.getLocalTextPrefix = function () { return NorthWind.TerritoriesRow.localTextPrefix; };
            TerritoriesDialog.prototype.getNameProperty = function () { return NorthWind.TerritoriesRow.nameProperty; };
            TerritoriesDialog.prototype.getService = function () { return NorthWind.TerritoriesService.baseUrl; };
            TerritoriesDialog.prototype.getDeletePermission = function () { return NorthWind.TerritoriesRow.deletePermission; };
            TerritoriesDialog.prototype.getInsertPermission = function () { return NorthWind.TerritoriesRow.insertPermission; };
            TerritoriesDialog.prototype.getUpdatePermission = function () { return NorthWind.TerritoriesRow.updatePermission; };
            TerritoriesDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], TerritoriesDialog);
            return TerritoriesDialog;
        }(Serenity.EntityDialog));
        NorthWind.TerritoriesDialog = TerritoriesDialog;
    })(NorthWind = Yaxie.NorthWind || (Yaxie.NorthWind = {}));
})(Yaxie || (Yaxie = {}));
var Yaxie;
(function (Yaxie) {
    var NorthWind;
    (function (NorthWind) {
        var TerritoriesGrid = /** @class */ (function (_super) {
            __extends(TerritoriesGrid, _super);
            function TerritoriesGrid(container) {
                return _super.call(this, container) || this;
            }
            TerritoriesGrid.prototype.getColumnsKey = function () { return 'NorthWind.Territories'; };
            TerritoriesGrid.prototype.getDialogType = function () { return NorthWind.TerritoriesDialog; };
            TerritoriesGrid.prototype.getIdProperty = function () { return NorthWind.TerritoriesRow.idProperty; };
            TerritoriesGrid.prototype.getInsertPermission = function () { return NorthWind.TerritoriesRow.insertPermission; };
            TerritoriesGrid.prototype.getLocalTextPrefix = function () { return NorthWind.TerritoriesRow.localTextPrefix; };
            TerritoriesGrid.prototype.getService = function () { return NorthWind.TerritoriesService.baseUrl; };
            TerritoriesGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], TerritoriesGrid);
            return TerritoriesGrid;
        }(Serenity.EntityGrid));
        NorthWind.TerritoriesGrid = TerritoriesGrid;
    })(NorthWind = Yaxie.NorthWind || (Yaxie.NorthWind = {}));
})(Yaxie || (Yaxie = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiWWF4aWUuV2ViLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vSW1wb3J0cy9TZXJ2ZXJUeXBpbmdzL0FkbWluaXN0cmF0aW9uLkxhbmd1YWdlQ29sdW1ucy50cyIsIi4uLy4uLy4uL0ltcG9ydHMvU2VydmVyVHlwaW5ncy9BZG1pbmlzdHJhdGlvbi5MYW5ndWFnZUZvcm0udHMiLCIuLi8uLi8uLi9JbXBvcnRzL1NlcnZlclR5cGluZ3MvQWRtaW5pc3RyYXRpb24uTGFuZ3VhZ2VSb3cudHMiLCIuLi8uLi8uLi9JbXBvcnRzL1NlcnZlclR5cGluZ3MvQWRtaW5pc3RyYXRpb24uTGFuZ3VhZ2VTZXJ2aWNlLnRzIiwiLi4vLi4vLi4vSW1wb3J0cy9TZXJ2ZXJUeXBpbmdzL0FkbWluaXN0cmF0aW9uLlBlcm1pc3Npb25LZXlzLnRzIiwiLi4vLi4vLi4vSW1wb3J0cy9TZXJ2ZXJUeXBpbmdzL0FkbWluaXN0cmF0aW9uLlJvbGVDb2x1bW5zLnRzIiwiLi4vLi4vLi4vSW1wb3J0cy9TZXJ2ZXJUeXBpbmdzL0FkbWluaXN0cmF0aW9uLlJvbGVGb3JtLnRzIiwiLi4vLi4vLi4vSW1wb3J0cy9TZXJ2ZXJUeXBpbmdzL0FkbWluaXN0cmF0aW9uLlJvbGVQZXJtaXNzaW9uTGlzdFJlcXVlc3QudHMiLCIuLi8uLi8uLi9JbXBvcnRzL1NlcnZlclR5cGluZ3MvQWRtaW5pc3RyYXRpb24uUm9sZVBlcm1pc3Npb25MaXN0UmVzcG9uc2UudHMiLCIuLi8uLi8uLi9JbXBvcnRzL1NlcnZlclR5cGluZ3MvQWRtaW5pc3RyYXRpb24uUm9sZVBlcm1pc3Npb25Sb3cudHMiLCIuLi8uLi8uLi9JbXBvcnRzL1NlcnZlclR5cGluZ3MvQWRtaW5pc3RyYXRpb24uUm9sZVBlcm1pc3Npb25TZXJ2aWNlLnRzIiwiLi4vLi4vLi4vSW1wb3J0cy9TZXJ2ZXJUeXBpbmdzL0FkbWluaXN0cmF0aW9uLlJvbGVQZXJtaXNzaW9uVXBkYXRlUmVxdWVzdC50cyIsIi4uLy4uLy4uL0ltcG9ydHMvU2VydmVyVHlwaW5ncy9BZG1pbmlzdHJhdGlvbi5Sb2xlUm93LnRzIiwiLi4vLi4vLi4vSW1wb3J0cy9TZXJ2ZXJUeXBpbmdzL0FkbWluaXN0cmF0aW9uLlJvbGVTZXJ2aWNlLnRzIiwiLi4vLi4vLi4vSW1wb3J0cy9TZXJ2ZXJUeXBpbmdzL0FkbWluaXN0cmF0aW9uLlNlcmdlbkNvbm5lY3Rpb24udHMiLCIuLi8uLi8uLi9JbXBvcnRzL1NlcnZlclR5cGluZ3MvQWRtaW5pc3RyYXRpb24uU2VyZ2VuR2VuZXJhdGVPcHRpb25zLnRzIiwiLi4vLi4vLi4vSW1wb3J0cy9TZXJ2ZXJUeXBpbmdzL0FkbWluaXN0cmF0aW9uLlNlcmdlbkdlbmVyYXRlUmVxdWVzdC50cyIsIi4uLy4uLy4uL0ltcG9ydHMvU2VydmVyVHlwaW5ncy9BZG1pbmlzdHJhdGlvbi5TZXJnZW5MaXN0VGFibGVzUmVxdWVzdC50cyIsIi4uLy4uLy4uL0ltcG9ydHMvU2VydmVyVHlwaW5ncy9BZG1pbmlzdHJhdGlvbi5TZXJnZW5TZXJ2aWNlLnRzIiwiLi4vLi4vLi4vSW1wb3J0cy9TZXJ2ZXJUeXBpbmdzL0FkbWluaXN0cmF0aW9uLlNlcmdlblRhYmxlLnRzIiwiLi4vLi4vLi4vSW1wb3J0cy9TZXJ2ZXJUeXBpbmdzL0FkbWluaXN0cmF0aW9uLlRyYW5zbGF0aW9uSXRlbS50cyIsIi4uLy4uLy4uL0ltcG9ydHMvU2VydmVyVHlwaW5ncy9BZG1pbmlzdHJhdGlvbi5UcmFuc2xhdGlvbkxpc3RSZXF1ZXN0LnRzIiwiLi4vLi4vLi4vSW1wb3J0cy9TZXJ2ZXJUeXBpbmdzL0FkbWluaXN0cmF0aW9uLlRyYW5zbGF0aW9uU2VydmljZS50cyIsIi4uLy4uLy4uL0ltcG9ydHMvU2VydmVyVHlwaW5ncy9BZG1pbmlzdHJhdGlvbi5UcmFuc2xhdGlvblVwZGF0ZVJlcXVlc3QudHMiLCIuLi8uLi8uLi9JbXBvcnRzL1NlcnZlclR5cGluZ3MvQWRtaW5pc3RyYXRpb24uVXNlckNvbHVtbnMudHMiLCIuLi8uLi8uLi9JbXBvcnRzL1NlcnZlclR5cGluZ3MvQWRtaW5pc3RyYXRpb24uVXNlckZvcm0udHMiLCIuLi8uLi8uLi9JbXBvcnRzL1NlcnZlclR5cGluZ3MvQWRtaW5pc3RyYXRpb24uVXNlclBlcm1pc3Npb25MaXN0UmVxdWVzdC50cyIsIi4uLy4uLy4uL0ltcG9ydHMvU2VydmVyVHlwaW5ncy9BZG1pbmlzdHJhdGlvbi5Vc2VyUGVybWlzc2lvblJvdy50cyIsIi4uLy4uLy4uL0ltcG9ydHMvU2VydmVyVHlwaW5ncy9BZG1pbmlzdHJhdGlvbi5Vc2VyUGVybWlzc2lvblNlcnZpY2UudHMiLCIuLi8uLi8uLi9JbXBvcnRzL1NlcnZlclR5cGluZ3MvQWRtaW5pc3RyYXRpb24uVXNlclBlcm1pc3Npb25VcGRhdGVSZXF1ZXN0LnRzIiwiLi4vLi4vLi4vSW1wb3J0cy9TZXJ2ZXJUeXBpbmdzL0FkbWluaXN0cmF0aW9uLlVzZXJSb2xlTGlzdFJlcXVlc3QudHMiLCIuLi8uLi8uLi9JbXBvcnRzL1NlcnZlclR5cGluZ3MvQWRtaW5pc3RyYXRpb24uVXNlclJvbGVMaXN0UmVzcG9uc2UudHMiLCIuLi8uLi8uLi9JbXBvcnRzL1NlcnZlclR5cGluZ3MvQWRtaW5pc3RyYXRpb24uVXNlclJvbGVSb3cudHMiLCIuLi8uLi8uLi9JbXBvcnRzL1NlcnZlclR5cGluZ3MvQWRtaW5pc3RyYXRpb24uVXNlclJvbGVTZXJ2aWNlLnRzIiwiLi4vLi4vLi4vSW1wb3J0cy9TZXJ2ZXJUeXBpbmdzL0FkbWluaXN0cmF0aW9uLlVzZXJSb2xlVXBkYXRlUmVxdWVzdC50cyIsIi4uLy4uLy4uL0ltcG9ydHMvU2VydmVyVHlwaW5ncy9BZG1pbmlzdHJhdGlvbi5Vc2VyUm93LnRzIiwiLi4vLi4vLi4vSW1wb3J0cy9TZXJ2ZXJUeXBpbmdzL0FkbWluaXN0cmF0aW9uLlVzZXJTZXJ2aWNlLnRzIiwiLi4vLi4vLi4vSW1wb3J0cy9TZXJ2ZXJUeXBpbmdzL0NvbW1vbi5GaWVsZE1hdGNoLnRzIiwiLi4vLi4vLi4vSW1wb3J0cy9TZXJ2ZXJUeXBpbmdzL0NvbW1vbi5HZXRFeGNlbENvbHVtbkxpc3RSZXF1ZXN0LnRzIiwiLi4vLi4vLi4vSW1wb3J0cy9TZXJ2ZXJUeXBpbmdzL0NvbW1vbi5HZXRUYWJsZUhlYWRlckxpc3RSZXF1ZXN0LnRzIiwiLi4vLi4vLi4vSW1wb3J0cy9TZXJ2ZXJUeXBpbmdzL0NvbW1vbi5JbXBvcnRTb3VyY2VDb2x1bW5zLnRzIiwiLi4vLi4vLi4vSW1wb3J0cy9TZXJ2ZXJUeXBpbmdzL0NvbW1vbi5JbXBvcnRTb3VyY2VGb3JtLnRzIiwiLi4vLi4vLi4vSW1wb3J0cy9TZXJ2ZXJUeXBpbmdzL0NvbW1vbi5JbXBvcnRTb3VyY2VSb3cudHMiLCIuLi8uLi8uLi9JbXBvcnRzL1NlcnZlclR5cGluZ3MvQ29tbW9uLkltcG9ydFNvdXJjZVNlcnZpY2UudHMiLCIuLi8uLi8uLi9JbXBvcnRzL1NlcnZlclR5cGluZ3MvQ29tbW9uLkltcG9ydFR5cGVDb2x1bW5zLnRzIiwiLi4vLi4vLi4vSW1wb3J0cy9TZXJ2ZXJUeXBpbmdzL0NvbW1vbi5JbXBvcnRUeXBlRm9ybS50cyIsIi4uLy4uLy4uL0ltcG9ydHMvU2VydmVyVHlwaW5ncy9Db21tb24uSW1wb3J0VHlwZVJvdy50cyIsIi4uLy4uLy4uL0ltcG9ydHMvU2VydmVyVHlwaW5ncy9Db21tb24uSW1wb3J0VHlwZVNlcnZpY2UudHMiLCIuLi8uLi8uLi9JbXBvcnRzL1NlcnZlclR5cGluZ3MvQ29tbW9uLkltcG9ydFdpemFyZENvbHVtbnMudHMiLCIuLi8uLi8uLi9JbXBvcnRzL1NlcnZlclR5cGluZ3MvQ29tbW9uLkltcG9ydFdpemFyZEZvcm0udHMiLCIuLi8uLi8uLi9JbXBvcnRzL1NlcnZlclR5cGluZ3MvQ29tbW9uLkltcG9ydFdpemFyZFJvdy50cyIsIi4uLy4uLy4uL0ltcG9ydHMvU2VydmVyVHlwaW5ncy9Db21tb24uSW1wb3J0V2l6YXJkU2VydmljZS50cyIsIi4uLy4uLy4uL0ltcG9ydHMvU2VydmVyVHlwaW5ncy9Db21tb24uTm90ZUNvbHVtbnMudHMiLCIuLi8uLi8uLi9JbXBvcnRzL1NlcnZlclR5cGluZ3MvQ29tbW9uLk5vdGVGb3JtLnRzIiwiLi4vLi4vLi4vSW1wb3J0cy9TZXJ2ZXJUeXBpbmdzL0NvbW1vbi5Ob3RlUm93LnRzIiwiLi4vLi4vLi4vSW1wb3J0cy9TZXJ2ZXJUeXBpbmdzL0NvbW1vbi5Ob3RlU2VydmljZS50cyIsIi4uLy4uLy4uL0ltcG9ydHMvU2VydmVyVHlwaW5ncy9Db21tb24uU2VyaWFsaXplTGlzdFJlcXVlc3QudHMiLCIuLi8uLi8uLi9JbXBvcnRzL1NlcnZlclR5cGluZ3MvQ29tbW9uLlNlcmlhbGl6ZUxpc3RSZXNwb25zZS50cyIsIi4uLy4uLy4uL0ltcG9ydHMvU2VydmVyVHlwaW5ncy9Db21tb24uVGFibGVGaWVsZEluZm8udHMiLCIuLi8uLi8uLi9JbXBvcnRzL1NlcnZlclR5cGluZ3MvQ29tbW9uLlVwbG9hZEZpbGVOYW1lcy50cyIsIi4uLy4uLy4uL0ltcG9ydHMvU2VydmVyVHlwaW5ncy9Db21tb24uVXNlclByZWZlcmVuY2VSZXRyaWV2ZVJlcXVlc3QudHMiLCIuLi8uLi8uLi9JbXBvcnRzL1NlcnZlclR5cGluZ3MvQ29tbW9uLlVzZXJQcmVmZXJlbmNlUmV0cmlldmVSZXNwb25zZS50cyIsIi4uLy4uLy4uL0ltcG9ydHMvU2VydmVyVHlwaW5ncy9Db21tb24uVXNlclByZWZlcmVuY2VSb3cudHMiLCIuLi8uLi8uLi9JbXBvcnRzL1NlcnZlclR5cGluZ3MvQ29tbW9uLlVzZXJQcmVmZXJlbmNlU2VydmljZS50cyIsIi4uLy4uLy4uL0ltcG9ydHMvU2VydmVyVHlwaW5ncy9Db21tb24uVXNlclByZWZlcmVuY2VVcGRhdGVSZXF1ZXN0LnRzIiwiLi4vLi4vLi4vSW1wb3J0cy9TZXJ2ZXJUeXBpbmdzL0V4Y2VsSW1wb3J0UmVxdWVzdC50cyIsIi4uLy4uLy4uL0ltcG9ydHMvU2VydmVyVHlwaW5ncy9FeGNlbEltcG9ydFJlc3BvbnNlLnRzIiwiLi4vLi4vLi4vSW1wb3J0cy9TZXJ2ZXJUeXBpbmdzL0dldE5leHROdW1iZXJSZXF1ZXN0LnRzIiwiLi4vLi4vLi4vSW1wb3J0cy9TZXJ2ZXJUeXBpbmdzL0dldE5leHROdW1iZXJSZXNwb25zZS50cyIsIi4uLy4uLy4uL0ltcG9ydHMvU2VydmVyVHlwaW5ncy9NZW1iZXJzaGlwLkNoYW5nZVBhc3N3b3JkRm9ybS50cyIsIi4uLy4uLy4uL0ltcG9ydHMvU2VydmVyVHlwaW5ncy9NZW1iZXJzaGlwLkNoYW5nZVBhc3N3b3JkUmVxdWVzdC50cyIsIi4uLy4uLy4uL0ltcG9ydHMvU2VydmVyVHlwaW5ncy9NZW1iZXJzaGlwLkZvcmdvdFBhc3N3b3JkRm9ybS50cyIsIi4uLy4uLy4uL0ltcG9ydHMvU2VydmVyVHlwaW5ncy9NZW1iZXJzaGlwLkZvcmdvdFBhc3N3b3JkUmVxdWVzdC50cyIsIi4uLy4uLy4uL0ltcG9ydHMvU2VydmVyVHlwaW5ncy9NZW1iZXJzaGlwLkxvZ2luRm9ybS50cyIsIi4uLy4uLy4uL0ltcG9ydHMvU2VydmVyVHlwaW5ncy9NZW1iZXJzaGlwLkxvZ2luUmVxdWVzdC50cyIsIi4uLy4uLy4uL0ltcG9ydHMvU2VydmVyVHlwaW5ncy9NZW1iZXJzaGlwLlJlc2V0UGFzc3dvcmRGb3JtLnRzIiwiLi4vLi4vLi4vSW1wb3J0cy9TZXJ2ZXJUeXBpbmdzL01lbWJlcnNoaXAuUmVzZXRQYXNzd29yZFJlcXVlc3QudHMiLCIuLi8uLi8uLi9JbXBvcnRzL1NlcnZlclR5cGluZ3MvTWVtYmVyc2hpcC5TaWduVXBGb3JtLnRzIiwiLi4vLi4vLi4vSW1wb3J0cy9TZXJ2ZXJUeXBpbmdzL01lbWJlcnNoaXAuU2lnblVwUmVxdWVzdC50cyIsIi4uLy4uLy4uL0ltcG9ydHMvU2VydmVyVHlwaW5ncy9Ob3J0aFdpbmQuQ2F0ZWdvcmllc0NvbHVtbnMudHMiLCIuLi8uLi8uLi9JbXBvcnRzL1NlcnZlclR5cGluZ3MvTm9ydGhXaW5kLkNhdGVnb3JpZXNGb3JtLnRzIiwiLi4vLi4vLi4vSW1wb3J0cy9TZXJ2ZXJUeXBpbmdzL05vcnRoV2luZC5DYXRlZ29yaWVzUm93LnRzIiwiLi4vLi4vLi4vSW1wb3J0cy9TZXJ2ZXJUeXBpbmdzL05vcnRoV2luZC5DYXRlZ29yaWVzU2VydmljZS50cyIsIi4uLy4uLy4uL0ltcG9ydHMvU2VydmVyVHlwaW5ncy9Ob3J0aFdpbmQuQ2F0ZWdvcnlMYW5nQ29sdW1ucy50cyIsIi4uLy4uLy4uL0ltcG9ydHMvU2VydmVyVHlwaW5ncy9Ob3J0aFdpbmQuQ2F0ZWdvcnlMYW5nRm9ybS50cyIsIi4uLy4uLy4uL0ltcG9ydHMvU2VydmVyVHlwaW5ncy9Ob3J0aFdpbmQuQ2F0ZWdvcnlMYW5nUm93LnRzIiwiLi4vLi4vLi4vSW1wb3J0cy9TZXJ2ZXJUeXBpbmdzL05vcnRoV2luZC5DYXRlZ29yeUxhbmdTZXJ2aWNlLnRzIiwiLi4vLi4vLi4vSW1wb3J0cy9TZXJ2ZXJUeXBpbmdzL05vcnRoV2luZC5DdXN0b21lckRldGFpbHNDb2x1bW5zLnRzIiwiLi4vLi4vLi4vSW1wb3J0cy9TZXJ2ZXJUeXBpbmdzL05vcnRoV2luZC5DdXN0b21lckRldGFpbHNGb3JtLnRzIiwiLi4vLi4vLi4vSW1wb3J0cy9TZXJ2ZXJUeXBpbmdzL05vcnRoV2luZC5DdXN0b21lckRldGFpbHNSb3cudHMiLCIuLi8uLi8uLi9JbXBvcnRzL1NlcnZlclR5cGluZ3MvTm9ydGhXaW5kLkN1c3RvbWVyRGV0YWlsc1NlcnZpY2UudHMiLCIuLi8uLi8uLi9JbXBvcnRzL1NlcnZlclR5cGluZ3MvTm9ydGhXaW5kLkN1c3RvbWVyc0NvbHVtbnMudHMiLCIuLi8uLi8uLi9JbXBvcnRzL1NlcnZlclR5cGluZ3MvTm9ydGhXaW5kLkN1c3RvbWVyc0Zvcm0udHMiLCIuLi8uLi8uLi9JbXBvcnRzL1NlcnZlclR5cGluZ3MvTm9ydGhXaW5kLkN1c3RvbWVyc1Jvdy50cyIsIi4uLy4uLy4uL0ltcG9ydHMvU2VydmVyVHlwaW5ncy9Ob3J0aFdpbmQuQ3VzdG9tZXJzU2VydmljZS50cyIsIi4uLy4uLy4uL0ltcG9ydHMvU2VydmVyVHlwaW5ncy9Ob3J0aFdpbmQuRW1wbG95ZWVUZXJyaXRvcmllc0NvbHVtbnMudHMiLCIuLi8uLi8uLi9JbXBvcnRzL1NlcnZlclR5cGluZ3MvTm9ydGhXaW5kLkVtcGxveWVlVGVycml0b3JpZXNGb3JtLnRzIiwiLi4vLi4vLi4vSW1wb3J0cy9TZXJ2ZXJUeXBpbmdzL05vcnRoV2luZC5FbXBsb3llZVRlcnJpdG9yaWVzUm93LnRzIiwiLi4vLi4vLi4vSW1wb3J0cy9TZXJ2ZXJUeXBpbmdzL05vcnRoV2luZC5FbXBsb3llZVRlcnJpdG9yaWVzU2VydmljZS50cyIsIi4uLy4uLy4uL0ltcG9ydHMvU2VydmVyVHlwaW5ncy9Ob3J0aFdpbmQuRW1wbG95ZWVzQ29sdW1ucy50cyIsIi4uLy4uLy4uL0ltcG9ydHMvU2VydmVyVHlwaW5ncy9Ob3J0aFdpbmQuRW1wbG95ZWVzRm9ybS50cyIsIi4uLy4uLy4uL0ltcG9ydHMvU2VydmVyVHlwaW5ncy9Ob3J0aFdpbmQuRW1wbG95ZWVzUm93LnRzIiwiLi4vLi4vLi4vSW1wb3J0cy9TZXJ2ZXJUeXBpbmdzL05vcnRoV2luZC5FbXBsb3llZXNTZXJ2aWNlLnRzIiwiLi4vLi4vLi4vSW1wb3J0cy9TZXJ2ZXJUeXBpbmdzL05vcnRoV2luZC5JbnZvaWNlc0NvbHVtbnMudHMiLCIuLi8uLi8uLi9JbXBvcnRzL1NlcnZlclR5cGluZ3MvTm9ydGhXaW5kLkludm9pY2VzRm9ybS50cyIsIi4uLy4uLy4uL0ltcG9ydHMvU2VydmVyVHlwaW5ncy9Ob3J0aFdpbmQuSW52b2ljZXNSb3cudHMiLCIuLi8uLi8uLi9JbXBvcnRzL1NlcnZlclR5cGluZ3MvTm9ydGhXaW5kLkludm9pY2VzU2VydmljZS50cyIsIi4uLy4uLy4uL0ltcG9ydHMvU2VydmVyVHlwaW5ncy9Ob3J0aFdpbmQuTm90ZXNDb2x1bW5zLnRzIiwiLi4vLi4vLi4vSW1wb3J0cy9TZXJ2ZXJUeXBpbmdzL05vcnRoV2luZC5Ob3Rlc0Zvcm0udHMiLCIuLi8uLi8uLi9JbXBvcnRzL1NlcnZlclR5cGluZ3MvTm9ydGhXaW5kLk5vdGVzUm93LnRzIiwiLi4vLi4vLi4vSW1wb3J0cy9TZXJ2ZXJUeXBpbmdzL05vcnRoV2luZC5Ob3Rlc1NlcnZpY2UudHMiLCIuLi8uLi8uLi9JbXBvcnRzL1NlcnZlclR5cGluZ3MvTm9ydGhXaW5kLk9yZGVyRGV0YWlsc0NvbHVtbnMudHMiLCIuLi8uLi8uLi9JbXBvcnRzL1NlcnZlclR5cGluZ3MvTm9ydGhXaW5kLk9yZGVyRGV0YWlsc0Zvcm0udHMiLCIuLi8uLi8uLi9JbXBvcnRzL1NlcnZlclR5cGluZ3MvTm9ydGhXaW5kLk9yZGVyRGV0YWlsc1Jvdy50cyIsIi4uLy4uLy4uL0ltcG9ydHMvU2VydmVyVHlwaW5ncy9Ob3J0aFdpbmQuT3JkZXJEZXRhaWxzU2VydmljZS50cyIsIi4uLy4uLy4uL0ltcG9ydHMvU2VydmVyVHlwaW5ncy9Ob3J0aFdpbmQuT3JkZXJzQ29sdW1ucy50cyIsIi4uLy4uLy4uL0ltcG9ydHMvU2VydmVyVHlwaW5ncy9Ob3J0aFdpbmQuT3JkZXJzRm9ybS50cyIsIi4uLy4uLy4uL0ltcG9ydHMvU2VydmVyVHlwaW5ncy9Ob3J0aFdpbmQuT3JkZXJzUm93LnRzIiwiLi4vLi4vLi4vSW1wb3J0cy9TZXJ2ZXJUeXBpbmdzL05vcnRoV2luZC5PcmRlcnNTZXJ2aWNlLnRzIiwiLi4vLi4vLi4vSW1wb3J0cy9TZXJ2ZXJUeXBpbmdzL05vcnRoV2luZC5Qcm9kdWN0TGFuZ0NvbHVtbnMudHMiLCIuLi8uLi8uLi9JbXBvcnRzL1NlcnZlclR5cGluZ3MvTm9ydGhXaW5kLlByb2R1Y3RMYW5nRm9ybS50cyIsIi4uLy4uLy4uL0ltcG9ydHMvU2VydmVyVHlwaW5ncy9Ob3J0aFdpbmQuUHJvZHVjdExhbmdSb3cudHMiLCIuLi8uLi8uLi9JbXBvcnRzL1NlcnZlclR5cGluZ3MvTm9ydGhXaW5kLlByb2R1Y3RMYW5nU2VydmljZS50cyIsIi4uLy4uLy4uL0ltcG9ydHMvU2VydmVyVHlwaW5ncy9Ob3J0aFdpbmQuUHJvZHVjdHNDb2x1bW5zLnRzIiwiLi4vLi4vLi4vSW1wb3J0cy9TZXJ2ZXJUeXBpbmdzL05vcnRoV2luZC5Qcm9kdWN0c0Zvcm0udHMiLCIuLi8uLi8uLi9JbXBvcnRzL1NlcnZlclR5cGluZ3MvTm9ydGhXaW5kLlByb2R1Y3RzUm93LnRzIiwiLi4vLi4vLi4vSW1wb3J0cy9TZXJ2ZXJUeXBpbmdzL05vcnRoV2luZC5Qcm9kdWN0c1NlcnZpY2UudHMiLCIuLi8uLi8uLi9JbXBvcnRzL1NlcnZlclR5cGluZ3MvTm9ydGhXaW5kLlByb2R1Y3RzYnlDYXRlZ29yeUNvbHVtbnMudHMiLCIuLi8uLi8uLi9JbXBvcnRzL1NlcnZlclR5cGluZ3MvTm9ydGhXaW5kLlByb2R1Y3RzYnlDYXRlZ29yeUZvcm0udHMiLCIuLi8uLi8uLi9JbXBvcnRzL1NlcnZlclR5cGluZ3MvTm9ydGhXaW5kLlByb2R1Y3RzYnlDYXRlZ29yeVJvdy50cyIsIi4uLy4uLy4uL0ltcG9ydHMvU2VydmVyVHlwaW5ncy9Ob3J0aFdpbmQuUHJvZHVjdHNieUNhdGVnb3J5U2VydmljZS50cyIsIi4uLy4uLy4uL0ltcG9ydHMvU2VydmVyVHlwaW5ncy9Ob3J0aFdpbmQuUmVnaW9uQ29sdW1ucy50cyIsIi4uLy4uLy4uL0ltcG9ydHMvU2VydmVyVHlwaW5ncy9Ob3J0aFdpbmQuUmVnaW9uRm9ybS50cyIsIi4uLy4uLy4uL0ltcG9ydHMvU2VydmVyVHlwaW5ncy9Ob3J0aFdpbmQuUmVnaW9uUm93LnRzIiwiLi4vLi4vLi4vSW1wb3J0cy9TZXJ2ZXJUeXBpbmdzL05vcnRoV2luZC5SZWdpb25TZXJ2aWNlLnRzIiwiLi4vLi4vLi4vSW1wb3J0cy9TZXJ2ZXJUeXBpbmdzL05vcnRoV2luZC5TaGlwcGVyc0NvbHVtbnMudHMiLCIuLi8uLi8uLi9JbXBvcnRzL1NlcnZlclR5cGluZ3MvTm9ydGhXaW5kLlNoaXBwZXJzRm9ybS50cyIsIi4uLy4uLy4uL0ltcG9ydHMvU2VydmVyVHlwaW5ncy9Ob3J0aFdpbmQuU2hpcHBlcnNSb3cudHMiLCIuLi8uLi8uLi9JbXBvcnRzL1NlcnZlclR5cGluZ3MvTm9ydGhXaW5kLlNoaXBwZXJzU2VydmljZS50cyIsIi4uLy4uLy4uL0ltcG9ydHMvU2VydmVyVHlwaW5ncy9Ob3J0aFdpbmQuU3VwcGxpZXJzQ29sdW1ucy50cyIsIi4uLy4uLy4uL0ltcG9ydHMvU2VydmVyVHlwaW5ncy9Ob3J0aFdpbmQuU3VwcGxpZXJzRm9ybS50cyIsIi4uLy4uLy4uL0ltcG9ydHMvU2VydmVyVHlwaW5ncy9Ob3J0aFdpbmQuU3VwcGxpZXJzUm93LnRzIiwiLi4vLi4vLi4vSW1wb3J0cy9TZXJ2ZXJUeXBpbmdzL05vcnRoV2luZC5TdXBwbGllcnNTZXJ2aWNlLnRzIiwiLi4vLi4vLi4vSW1wb3J0cy9TZXJ2ZXJUeXBpbmdzL05vcnRoV2luZC5UZXJyaXRvcmllc0NvbHVtbnMudHMiLCIuLi8uLi8uLi9JbXBvcnRzL1NlcnZlclR5cGluZ3MvTm9ydGhXaW5kLlRlcnJpdG9yaWVzRm9ybS50cyIsIi4uLy4uLy4uL0ltcG9ydHMvU2VydmVyVHlwaW5ncy9Ob3J0aFdpbmQuVGVycml0b3JpZXNSb3cudHMiLCIuLi8uLi8uLi9JbXBvcnRzL1NlcnZlclR5cGluZ3MvTm9ydGhXaW5kLlRlcnJpdG9yaWVzU2VydmljZS50cyIsIi4uLy4uLy4uL0ltcG9ydHMvU2VydmVyVHlwaW5ncy9TY3JpcHRVc2VyRGVmaW5pdGlvbi50cyIsIi4uLy4uLy4uL0ltcG9ydHMvU2VydmVyVHlwaW5ncy9UZXh0cy50cyIsIi4uLy4uLy4uL01vZHVsZXMvQWRtaW5pc3RyYXRpb24vTGFuZ3VhZ2UvTGFuZ3VhZ2VEaWFsb2cudHMiLCIuLi8uLi8uLi9Nb2R1bGVzL0FkbWluaXN0cmF0aW9uL0xhbmd1YWdlL0xhbmd1YWdlR3JpZC50cyIsIi4uLy4uLy4uL01vZHVsZXMvQWRtaW5pc3RyYXRpb24vUm9sZS9Sb2xlRGlhbG9nLnRzIiwiLi4vLi4vLi4vTW9kdWxlcy9BZG1pbmlzdHJhdGlvbi9Sb2xlL1JvbGVHcmlkLnRzIiwiLi4vLi4vLi4vTW9kdWxlcy9BZG1pbmlzdHJhdGlvbi9Sb2xlUGVybWlzc2lvbi9Sb2xlUGVybWlzc2lvbkRpYWxvZy50cyIsIi4uLy4uLy4uL01vZHVsZXMvQWRtaW5pc3RyYXRpb24vU2VyZ2VuL1NlcmdlblBhbmVsLnRzIiwiLi4vLi4vLi4vTW9kdWxlcy9BZG1pbmlzdHJhdGlvbi9UcmFuc2xhdGlvbi9UcmFuc2xhdGlvbkdyaWQudHMiLCIuLi8uLi8uLi9Nb2R1bGVzL0FkbWluaXN0cmF0aW9uL1VzZXIvVXNlckRpYWxvZy50cyIsIi4uLy4uLy4uL01vZHVsZXMvQWRtaW5pc3RyYXRpb24vVXNlci9Vc2VyR3JpZC50cyIsIi4uLy4uLy4uL01vZHVsZXMvQWRtaW5pc3RyYXRpb24vVXNlci9BdXRoZW50aWNhdGlvbi9BdXRob3JpemF0aW9uLnRzIiwiLi4vLi4vLi4vTW9kdWxlcy9BZG1pbmlzdHJhdGlvbi9Vc2VyUGVybWlzc2lvbi9QZXJtaXNzaW9uQ2hlY2tFZGl0b3IudHMiLCIuLi8uLi8uLi9Nb2R1bGVzL0FkbWluaXN0cmF0aW9uL1VzZXJQZXJtaXNzaW9uL1VzZXJQZXJtaXNzaW9uRGlhbG9nLnRzIiwiLi4vLi4vLi4vTW9kdWxlcy9BZG1pbmlzdHJhdGlvbi9Vc2VyUm9sZS9Sb2xlQ2hlY2tFZGl0b3IudHMiLCIuLi8uLi8uLi9Nb2R1bGVzL0FkbWluaXN0cmF0aW9uL1VzZXJSb2xlL1VzZXJSb2xlRGlhbG9nLnRzIiwiLi4vLi4vLi4vTW9kdWxlcy9Db21tb24vSGVscGVycy9MYW5ndWFnZUxpc3QudHMiLCIuLi8uLi8uLi9Nb2R1bGVzL0NvbW1vbi9TY3JpcHRJbml0aWFsaXphdGlvbi50cyIsIi4uLy4uLy4uL01vZHVsZXMvQ29tbW9uL0hlbHBlcnMvQmFzaWNQcm9ncmVzc0RpYWxvZy50cyIsIi4uLy4uLy4uL01vZHVsZXMvQ29tbW9uL0hlbHBlcnMvQnVsa1NlcnZpY2VBY3Rpb24udHMiLCIuLi8uLi8uLi9Nb2R1bGVzL0NvbW1vbi9IZWxwZXJzL0RpYWxvZ1V0aWxzLnRzIiwiLi4vLi4vLi4vTW9kdWxlcy9Db21tb24vSGVscGVycy9FbnVtU2VsZWN0Rm9ybWF0dGVyLnRzIiwiLi4vLi4vLi4vTW9kdWxlcy9Db21tb24vSGVscGVycy9FeGNlbEV4cG9ydEhlbHBlci50cyIsIi4uLy4uLy4uL01vZHVsZXMvQ29tbW9uL0hlbHBlcnMvR3JpZEVkaXRvckJhc2UudHMiLCIuLi8uLi8uLi9Nb2R1bGVzL0NvbW1vbi9IZWxwZXJzL0dyaWRFZGl0b3JEaWFsb2cudHMiLCIuLi8uLi8uLi9Nb2R1bGVzL0NvbW1vbi9IZWxwZXJzL1N0YXRpY1RleHRCbG9jay50cyIsIi4uLy4uLy4uL01vZHVsZXMvQ29tbW9uL0ltcG9ydFNvdXJjZS9JbXBvcnRTb3VyY2VEaWFsb2cudHMiLCIuLi8uLi8uLi9Nb2R1bGVzL0NvbW1vbi9JbXBvcnRTb3VyY2UvSW1wb3J0U291cmNlR3JpZC50cyIsIi4uLy4uLy4uL01vZHVsZXMvQ29tbW9uL0ltcG9ydFR5cGUvSW1wb3J0VHlwZURpYWxvZy50cyIsIi4uLy4uLy4uL01vZHVsZXMvQ29tbW9uL0ltcG9ydFR5cGUvSW1wb3J0VHlwZUdyaWQudHMiLCIuLi8uLi8uLi9Nb2R1bGVzL0NvbW1vbi9JbXBvcnRXaXphcmQvSW1wb3J0V2l6YXJkRGlhbG9nLnRzIiwiLi4vLi4vLi4vTW9kdWxlcy9Db21tb24vSW1wb3J0V2l6YXJkL0ltcG9ydFdpemFyZEZpZWxkTWF0Y2hEaWFsb2cudHMiLCIuLi8uLi8uLi9Nb2R1bGVzL0NvbW1vbi9JbXBvcnRXaXphcmQvSW1wb3J0V2l6YXJkRmllbGRNYXRjaEdyaWQudHMiLCIuLi8uLi8uLi9Nb2R1bGVzL0NvbW1vbi9JbXBvcnRXaXphcmQvSW1wb3J0V2l6YXJkR3JpZC50cyIsIi4uLy4uLy4uL01vZHVsZXMvQ29tbW9uL05hdmlnYXRpb24vTGFuZ3VhZ2VTZWxlY3Rpb24udHMiLCIuLi8uLi8uLi9Nb2R1bGVzL0NvbW1vbi9OYXZpZ2F0aW9uL1NpZGViYXJTZWFyY2gudHMiLCIuLi8uLi8uLi9Nb2R1bGVzL0NvbW1vbi9OYXZpZ2F0aW9uL1RoZW1lU2VsZWN0aW9uLnRzIiwiLi4vLi4vLi4vTW9kdWxlcy9Db21tb24vTm90ZS9Ob3RlRGlhbG9nLnRzIiwiLi4vLi4vLi4vTW9kdWxlcy9Db21tb24vTm90ZS9Ob3RlR3JpZC50cyIsIi4uLy4uLy4uL01vZHVsZXMvQ29tbW9uL1JlcG9ydGluZy9QZGZFeHBvcnRIZWxwZXIudHMiLCIuLi8uLi8uLi9Nb2R1bGVzL0NvbW1vbi9SZXBvcnRpbmcvUmVwb3J0RGlhbG9nLnRzIiwiLi4vLi4vLi4vTW9kdWxlcy9Db21tb24vUmVwb3J0aW5nL1JlcG9ydEhlbHBlci50cyIsIi4uLy4uLy4uL01vZHVsZXMvQ29tbW9uL1JlcG9ydGluZy9SZXBvcnRQYWdlLnRzIiwiLi4vLi4vLi4vTW9kdWxlcy9Db21tb24vVXNlclByZWZlcmVuY2UvVXNlclByZWZlcmVuY2VTdG9yYWdlLnRzIiwiLi4vLi4vLi4vTW9kdWxlcy9NZW1iZXJzaGlwL0FjY291bnQvTG9naW5QYW5lbC50cyIsIi4uLy4uLy4uL01vZHVsZXMvTWVtYmVyc2hpcC9BY2NvdW50L0NoYW5nZVBhc3N3b3JkL0NoYW5nZVBhc3N3b3JkUGFuZWwudHMiLCIuLi8uLi8uLi9Nb2R1bGVzL01lbWJlcnNoaXAvQWNjb3VudC9Gb3Jnb3RQYXNzd29yZC9Gb3Jnb3RQYXNzd29yZFBhbmVsLnRzIiwiLi4vLi4vLi4vTW9kdWxlcy9NZW1iZXJzaGlwL0FjY291bnQvUmVzZXRQYXNzd29yZC9SZXNldFBhc3N3b3JkUGFuZWwudHMiLCIuLi8uLi8uLi9Nb2R1bGVzL01lbWJlcnNoaXAvQWNjb3VudC9TaWduVXAvU2lnblVwUGFuZWwudHMiLCIuLi8uLi8uLi9Nb2R1bGVzL05vcnRoV2luZC9DYXRlZ29yaWVzL0NhdGVnb3JpZXNEaWFsb2cudHMiLCIuLi8uLi8uLi9Nb2R1bGVzL05vcnRoV2luZC9DYXRlZ29yaWVzL0NhdGVnb3JpZXNHcmlkLnRzIiwiLi4vLi4vLi4vTW9kdWxlcy9Ob3J0aFdpbmQvQ2F0ZWdvcnlMYW5nL0NhdGVnb3J5TGFuZ0RpYWxvZy50cyIsIi4uLy4uLy4uL01vZHVsZXMvTm9ydGhXaW5kL0NhdGVnb3J5TGFuZy9DYXRlZ29yeUxhbmdHcmlkLnRzIiwiLi4vLi4vLi4vTW9kdWxlcy9Ob3J0aFdpbmQvQ3VzdG9tZXJEZXRhaWxzL0N1c3RvbWVyRGV0YWlsc0RpYWxvZy50cyIsIi4uLy4uLy4uL01vZHVsZXMvTm9ydGhXaW5kL0N1c3RvbWVyRGV0YWlscy9DdXN0b21lckRldGFpbHNHcmlkLnRzIiwiLi4vLi4vLi4vTW9kdWxlcy9Ob3J0aFdpbmQvQ3VzdG9tZXJzL0N1c3RvbWVyc0RpYWxvZy50cyIsIi4uLy4uLy4uL01vZHVsZXMvTm9ydGhXaW5kL0N1c3RvbWVycy9DdXN0b21lcnNHcmlkLnRzIiwiLi4vLi4vLi4vTW9kdWxlcy9Ob3J0aFdpbmQvRW1wbG95ZWVUZXJyaXRvcmllcy9FbXBsb3llZVRlcnJpdG9yaWVzRGlhbG9nLnRzIiwiLi4vLi4vLi4vTW9kdWxlcy9Ob3J0aFdpbmQvRW1wbG95ZWVUZXJyaXRvcmllcy9FbXBsb3llZVRlcnJpdG9yaWVzR3JpZC50cyIsIi4uLy4uLy4uL01vZHVsZXMvTm9ydGhXaW5kL0VtcGxveWVlcy9FbXBsb3llZXNEaWFsb2cudHMiLCIuLi8uLi8uLi9Nb2R1bGVzL05vcnRoV2luZC9FbXBsb3llZXMvRW1wbG95ZWVzR3JpZC50cyIsIi4uLy4uLy4uL01vZHVsZXMvTm9ydGhXaW5kL0ludm9pY2VzL0ludm9pY2VzRGlhbG9nLnRzIiwiLi4vLi4vLi4vTW9kdWxlcy9Ob3J0aFdpbmQvSW52b2ljZXMvSW52b2ljZXNHcmlkLnRzIiwiLi4vLi4vLi4vTW9kdWxlcy9Ob3J0aFdpbmQvTm90ZXMvTm90ZXNEaWFsb2cudHMiLCIuLi8uLi8uLi9Nb2R1bGVzL05vcnRoV2luZC9Ob3Rlcy9Ob3Rlc0dyaWQudHMiLCIuLi8uLi8uLi9Nb2R1bGVzL05vcnRoV2luZC9PcmRlckRldGFpbHMvT3JkZXJEZXRhaWxzRGlhbG9nLnRzIiwiLi4vLi4vLi4vTW9kdWxlcy9Ob3J0aFdpbmQvT3JkZXJEZXRhaWxzL09yZGVyRGV0YWlsc0dyaWQudHMiLCIuLi8uLi8uLi9Nb2R1bGVzL05vcnRoV2luZC9PcmRlcnMvT3JkZXJzRGlhbG9nLnRzIiwiLi4vLi4vLi4vTW9kdWxlcy9Ob3J0aFdpbmQvT3JkZXJzL09yZGVyc0dyaWQudHMiLCIuLi8uLi8uLi9Nb2R1bGVzL05vcnRoV2luZC9Qcm9kdWN0TGFuZy9Qcm9kdWN0TGFuZ0RpYWxvZy50cyIsIi4uLy4uLy4uL01vZHVsZXMvTm9ydGhXaW5kL1Byb2R1Y3RMYW5nL1Byb2R1Y3RMYW5nR3JpZC50cyIsIi4uLy4uLy4uL01vZHVsZXMvTm9ydGhXaW5kL1Byb2R1Y3RzL1Byb2R1Y3RzRGlhbG9nLnRzIiwiLi4vLi4vLi4vTW9kdWxlcy9Ob3J0aFdpbmQvUHJvZHVjdHMvUHJvZHVjdHNHcmlkLnRzIiwiLi4vLi4vLi4vTW9kdWxlcy9Ob3J0aFdpbmQvUHJvZHVjdHNieUNhdGVnb3J5L1Byb2R1Y3RzYnlDYXRlZ29yeURpYWxvZy50cyIsIi4uLy4uLy4uL01vZHVsZXMvTm9ydGhXaW5kL1Byb2R1Y3RzYnlDYXRlZ29yeS9Qcm9kdWN0c2J5Q2F0ZWdvcnlHcmlkLnRzIiwiLi4vLi4vLi4vTW9kdWxlcy9Ob3J0aFdpbmQvUmVnaW9uL1JlZ2lvbkRpYWxvZy50cyIsIi4uLy4uLy4uL01vZHVsZXMvTm9ydGhXaW5kL1JlZ2lvbi9SZWdpb25HcmlkLnRzIiwiLi4vLi4vLi4vTW9kdWxlcy9Ob3J0aFdpbmQvU2hpcHBlcnMvU2hpcHBlcnNEaWFsb2cudHMiLCIuLi8uLi8uLi9Nb2R1bGVzL05vcnRoV2luZC9TaGlwcGVycy9TaGlwcGVyc0dyaWQudHMiLCIuLi8uLi8uLi9Nb2R1bGVzL05vcnRoV2luZC9TdXBwbGllcnMvU3VwcGxpZXJzRGlhbG9nLnRzIiwiLi4vLi4vLi4vTW9kdWxlcy9Ob3J0aFdpbmQvU3VwcGxpZXJzL1N1cHBsaWVyc0dyaWQudHMiLCIuLi8uLi8uLi9Nb2R1bGVzL05vcnRoV2luZC9UZXJyaXRvcmllcy9UZXJyaXRvcmllc0RpYWxvZy50cyIsIi4uLy4uLy4uL01vZHVsZXMvTm9ydGhXaW5kL1RlcnJpdG9yaWVzL1RlcnJpdG9yaWVzR3JpZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUNBQSxJQUFVLEtBQUssQ0EwQmQ7QUExQkQsV0FBVSxLQUFLO0lBQUMsSUFB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QkFBb0IsRUFBQyxDQUFDLEVBQUMsaUJBQWlCLEVBQUMsQ0FBQyxFQUFDLGNBQWMsRUFBQyxDQUFDLEVBQUMsVUFBVSxFQUFDLENBQUMsRUFBQyxjQUFjLEVBQUMsQ0FBQyxFQUFDLFVBQVUsRUFBQyxDQUFDLEVBQUMsRUFBQyxJQUFJLEVBQUMsRUFBQyxXQUFXLEVBQUMsQ0FBQyxFQUFDLEtBQUssRUFBQyxDQUFDLEVBQUMsVUFBVSxFQUFDLENBQUMsRUFBQyxZQUFZLEVBQUMsQ0FBQyxFQUFDLFFBQVEsRUFBQyxDQUFDLEVBQUMsbUJBQW1CLEVBQUMsQ0FBQyxFQUFDLFFBQVEsRUFBQyxDQUFDLEVBQUMsZUFBZSxFQUFDLENBQUMsRUFBQyxZQUFZLEVBQUMsQ0FBQyxFQUFDLFlBQVksRUFBQyxDQUFDLEVBQUMsTUFBTSxFQUFDLENBQUMsRUFBQyxVQUFVLEVBQUMsQ0FBQyxFQUFDLFlBQVksRUFBQyxDQUFDLEVBQUMsTUFBTSxFQUFDLENBQUMsRUFBQyxTQUFTLEVBQUMsQ0FBQyxFQUFDLFFBQVEsRUFBQyxDQUFDLEVBQUMsRUFBQyxjQUFjLEVBQUMsRUFBQyxPQUFPLEVBQUMsQ0FBQyxFQUFDLGFBQWEsRUFBQyxDQUFDLEVBQUMsSUFBSSxFQUFDLENBQUMsRUFBQyxNQUFNLEVBQUMsQ0FBQyxFQUFDLGdCQUFnQixFQUFDLENBQUMsRUFBQyxRQUFRLEVBQUMsQ0FBQyxFQUFDLEVBQUMsUUFBUSxFQUFDLEVBQUMsTUFBTSxFQUFDLENBQUMsRUFBQyxJQUFJLEVBQUMsQ0FBQyxFQUFDLE1BQU0sRUFBQyxDQUFDLEVBQUMsVUFBVSxFQUFDLENBQUMsRUFBQyxRQUFRLEVBQUMsQ0FBQyxFQUFDLEVBQUMsRUFBQyxNQUFNLEVBQUMsRUFBQyxZQUFZLEVBQUMsRUFBQyxXQUFXLEVBQUMsQ0FBQyxFQUFDLGNBQWMsRUFBQyxDQUFDLEVBQUMsRUFBQyxVQUFVLEVBQUMsRUFBQyxXQUFXLEVBQUMsQ0FBQyxFQUFDLFlBQVksRUFBQyxDQUFDLEVBQUMsRUFBQyxZQUFZLEVBQUMsRUFBQyxhQUFhLEVBQUMsQ0FB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QUFZLEVBQUMsQ0FBQyxFQUFDLGVBQWUsRUFBQyxDQUFDLEVBQUMsaUJBQWlCLEVBQUMsQ0FBQyxFQUFDLGlCQUFpQixFQUFDLENBQUMsRUFBQyxnQkFBZ0IsRUFBQyxDQUFDLEVBQUMsaUJBQWlCLEVBQUMsQ0FBQyxFQUFDLFVBQVUsRUFBQyxDQUFDLEVBQUMsZ0JBQWdCLEVBQUMsQ0FBQyxFQUFDLGFBQWEsRUFBQyxDQUFDLEVBQUMsYUFBYSxFQUFDLENBQUMsRUFBQyxpQkFBaUIsRUFBQyxDQUFDLEVBQUMsa0JBQWtCLEVBQUMsQ0FBQyxFQUFDLGNBQWMsRUFBQyxDQUFDLEVBQUMsaUJBQWlCLEVBQUMsQ0FBQyxFQUFDLGFBQWEsRUFBQyxDQUFDLEVBQUMsdUJBQXVCLEVBQUMsQ0FBQyxFQUFDLFdBQVcsRUFBQyxDQUFDLEVBQUMsWUFBWSxFQUFDLENBQUMsRUFBQyxpQkFBaUIsRUFBQyxDQUFDLEVBQUMsNkJBQTZCLEVBQUMsQ0FBQyxFQUFDLEVBQUMsU0FBUyxFQUFDLEVBQUMsT0FBTyxFQUFDLENBQUMsRUFBQyxTQUFTLEVBQUMsQ0FBQyxFQUFDLElBQUksRUFBQyxDQUFDLEVBQUMsT0FBTyxFQUFDLENBQUMsRUFBQyxVQUFVLEVBQUMsQ0FBQyxFQUFDLFNBQVMsRUFBQyxDQUFDLEVBQUMsU0FBUyxFQUFDLENBQUMsRUFBQyxRQUFRLEVBQUMsQ0FBQyxFQUFDLFNBQVMsRUFBQyxDQUFDLEVBQUMsUUFBUSxFQUFDLENBQUMsRUFBQyxLQUFLLEVBQUMsQ0FBQyxFQUFDLEtBQUssRUFBQyxDQUFDLEVBQUMsU0FBUyxFQUFDLENBQUMsRUFBQyxVQUFVLEVBQUMsQ0FBQyxFQUFDLE1BQU0sRUFBQyxDQUFDLEVBQUMsU0FBUyxFQUFDLENBQUMsRUFBQyxVQUFVLEVBQUMsQ0FBQyxFQUFDLGdCQUFnQixFQUFDLENBQUMsRUFBQyxrQkFBa0IsRUFBQyxDQUFDLEVBQUMsYUFBYSxFQUFDLENBQUMsRUFBQyxnQkFBZ0IsRUFBQyxDQUFDLEVBQUMsa0JBQWtCLEVBQUMsQ0FBQyxFQUFDLGtCQUFrQixFQUFDLENBQUMsRUFBQyxpQkFBaUIsRUFBQyxDQUFDLEVBQUMsa0JBQWtCLEVBQUMsQ0FBQyxFQUFDLGlCQUFpQixFQUFDLENBQUMsRUFBQyxjQUFjLEVBQUMsQ0FBQyxFQUFDLGNBQWMsRUFBQyxDQUFDLEVBQUMsa0JBQWtCLEVBQUMsQ0FBQyxFQUFDLG1CQUFtQixFQUFDLENBQUMsRUFBQyxlQUFlLEVBQUMsQ0FBQyxFQUFDLGNBQWMsRUFBQyxDQUFDLEVBQUMsd0JBQXdCLEVBQUMsQ0FBQyxFQUFDLEtBQUssRUFBQyxDQUFDLEVBQUMsZUFBZSxFQUFDLENBQUMsRUFBQyxFQUFDLFFBQVEsRUFBQyxFQUFDLE9BQU8sRUFBQyxDQUFDLEVBQUMsSUFBSSxFQUFDLENBQUMsRUFBQyxPQUFPLEVBQUMsQ0FBQyxFQUFDLFVBQVUsRUFBQyxDQUFDLEVBQUMsWUFBWSxFQUFDLENBQUMsRUFBQyxRQUFRLEVBQUMsQ0FBQyxFQUFDLGFBQWEsRUFBQyxDQUFDLEVBQUMsT0FBTyxFQUFDLENBQUMsRUFBQyxTQUFTLEVBQUMsQ0FBQyxFQUFDLE9BQU8sRUFBQyxDQUFDLEVBQUMsVUFBVSxFQUFDLENBQUMsRUFBQyxTQUFTLEVBQUMsQ0FBQyxFQUFDLFdBQVcsRUFBQyxDQUFDLEVBQUMsUUFBUSxFQUFDLENBQUMsRUFBQyxNQUFNLEVBQUMsQ0FBQyxFQUFDLFlBQVksRUFBQyxDQUFDLEVBQUMsV0FBVyxFQUFDLENBQUMsRUFBQyxXQUFXLEVBQUMsQ0FBQyxFQUFDLFFBQVEsRUFBQyxDQUFDLEVBQUMsV0FBVyxFQUFDLENBQUMsRUFBQyxRQUFRLEVBQUMsQ0FBQyxFQUFDLGNBQWMsRUFBQyxDQUFDLEVBQUMsVUFBVSxFQUFDLENBQUMsRUFBQyxXQUFXLEVBQUMsQ0FBQyxFQUFDLFdBQVcsRUFBQyxDQUFDLEVBQUMsU0FBUyxFQUFDLENBQUMsRUFBQyxFQUFDLEtBQUssRUFBQyxFQUFDLFFBQVEsRUFBQyxDQUFDLEVBQUMsVUFBVSxFQUFDLENBQUMsRUFBQyxVQUFVLEVBQUMsQ0FBQyxFQUFDLFlBQVksRUFBQyxDQUFDLEVBQUMsTUFBTSxFQUFDLENBQUMsRUFBQyxJQUFJLEVBQUMsQ0FBQyxFQUFDLEVBQUMsWUFBWSxFQUFDLEVBQUMsUUFBUSxFQUFDLENBQUMsRUFBQyxRQUFRLEVBQUMsQ0FBQyxFQUFDLGVBQWUsRUFBQyxDQUFDLEVBQUMsZUFBZSxFQUFDLENBQUMsRUFBQyxZQUFZLEVBQUMsQ0FBQyxFQUFDLE9BQU8sRUFBQyxDQUFDLEVBQUMsY0FBYyxFQUFDLENBQUMsRUFBQyxpQkFBaUIsRUFBQyxDQUFDLEVBQUMsZ0JBQWdCLEVBQUMsQ0FBQyxFQUFDLGFBQWEsRUFBQyxDQUFDLEVBQUMsZ0JBQWdCLEVBQUMsQ0FBQyxFQUFDLGFBQWEsRUFBQyxDQUFDLEVBQUMsbUJBQW1CLEVBQUMsQ0FBQyxFQUFDLGVBQWUsRUFBQyxDQUFDLEVBQUMsWUFBWSxFQUFDLENBQUMsRUFBQyxnQkFBZ0IsRUFBQyxDQUFDLEVBQUMsaUJBQWlCLEVBQUMsQ0FBQyxFQUFDLG1CQUFtQixFQUFDLENBQUMsRUFBQyxTQUFTLEVBQUMsQ0FBQyxFQUFDLG1CQUFtQixFQUFDLENBQUMsRUFBQyxrQkFBa0IsRUFBQyxDQUFDLEVBQUMsc0JBQXNCLEVBQUMsQ0FBQyxFQUFDLG1CQUFtQixFQUFDLENBQUMsRUFBQyxpQkFBaUIsRUFBQyxDQUFDLEVBQUMsZ0JBQWdCLEVBQUMsQ0FBQyxFQUFDLG1CQUFtQixFQUFDLENBQUMsRUFBQyxtQkFBbUIsRUFBQyxDQUFDLEVBQUMsUUFBUSxFQUFDLENBQUMsRUFBQyxTQUFTLEVBQUMsQ0FBQyxFQUFDLEVBQUMsTUFBTSxFQUFDLEVBQUMsZUFBZSxFQUFDLENBQUMsRUFBQyxZQUFZLEVBQUMsQ0FBQyxFQUFDLG1CQUFtQixFQUFDLENBQUMsRUFBQyxtQkFBbUIsRUFBQyxDQUFDLEVBQUMsb0JBQW9CLEVBQUMsQ0FBQyxFQUFDLGVBQWUsRUFBQyxDQUFDLEVBQUMsV0FBVyxFQUFDLENBQUMsRUFBQyxVQUFVLEVBQUMsQ0FBQyxFQUFDLFdBQVcsRUFBQyxDQUFDLEVBQUMsYUFBYSxFQUFDLENBQUMsRUFBQyxrQkFBa0IsRUFBQyxDQUFDLEVBQUMsY0FBYyxFQUFDLENBQUMsRUFBQyxlQUFlLEVBQUMsQ0FBQyxFQUFDLGlCQUFpQixFQUFDLENBQUMsRUFBQyxZQUFZLEVBQUMsQ0FBQyxFQUFDLGVBQWUsRUFBQyxDQUFDLEVBQUMsaUJBQWlCLEVBQUMsQ0FBQyxFQUFDLGlCQUFpQixFQUFDLENBQUMsRUFBQyxnQkFBZ0IsRUFBQyxDQUFDLEVBQUMsaUJBQWlCLEVBQUMsQ0FBQyxFQUFDLFVBQVUsRUFBQyxDQUFDLEVBQUMsZ0JBQWdCLEVBQUMsQ0FBQyxFQUFDLGFBQWEsRUFBQyxDQUFDLEVBQUMsYUFBYSxFQUFDLENBQUMsRUFBQyxpQkFBaUIsRUFBQyxDQUFDLEVBQUMsa0JBQWtCLEVBQUMsQ0FBQyxFQUFDLGNBQWMsRUFBQyxDQUFDLEVBQUMsaUJBQWlCLEVBQUMsQ0FBQyxFQUFDLGFBQWEsRUFBQyxDQUFDLEVBQUMsdUJBQXVCLEVBQUMsQ0FBQyxFQUFDLE9BQU8sRUFBQyxDQUFDLEVBQUMsU0FBUyxFQUFDLENBQUMsRUFBQyxPQUFPLEVBQUMsQ0FBQyxFQUFDLFlBQVksRUFBQyxDQUFDLEVBQUMsV0FBVyxFQUFDLENBQUMsRUFBQyxRQUFRLEVBQUMsQ0FBQyxFQUFDLFdBQVcsRUFBQyxDQUFDLEVBQUMsUUFBUSxFQUFDLENBQUMsRUFBQyxjQUFjLEVBQUMsQ0FBQyxFQUFDLFVBQVUsRUFBQyxDQUFDLEVBQUMsT0FBTyxFQUFDLENBQUMsRUFBQyxrQkFBa0IsRUFBQyxDQUFDLEVBQUMsWUFBWSxFQUFDLENBQUMsRUFBQyxXQUFXLEVBQUMsQ0FBQyxFQUFDLEVBQUMsV0FBVyxFQUFDLEVBQUMsRUFBRSxFQUFDLENBQUMsRUFBQyxVQUFVLEVBQUMsQ0FBQyxFQUFDLFNBQVMsRUFBQyxDQUFDLEVBQUMsV0FBVyxFQUFDLENBQUMsRUFBQyxFQUFDLFFBQVEsRUFBQyxFQUFDLG9CQUFvQixFQUFDLENBQUMsRUFBQyxtQkFBbUIsRUFBQyxDQUFDLEVBQUMsVUFBVSxFQUFDLENBQUMsRUFBQyxlQUFlLEVBQUMsQ0FBQyxFQUFDLFlBQVksRUFBQyxDQUFDLEVBQUMsU0FBUyxFQUFDLENBQUMsRUFBQyxZQUFZLEVBQUMsQ0FBQyxFQUFDLFdBQVcsRUFBQyxDQUFDLEVBQUMsZUFBZSxFQUFDLENBQUMsRUFBQyxZQUFZLEVBQUMsQ0FBQyxFQUFDLGVBQWUsRUFBQyxDQUFDLEVBQUMsWUFBWSxFQUFDLENBQUMsRUFBQyxtQkFBbUIsRUFBQyxDQUFDLEVBQUMsbUJBQW1CLEVBQUMsQ0FBQyxFQUFDLG9CQUFvQixFQUFDLENBQUMsRUFBQyxlQUFlLEVBQUMsQ0FBQyxFQUFDLFdBQVcsRUFBQyxDQUFDLEVBQUMsZ0JBQWdCLEVBQUMsQ0FBQyxFQUFDLFVBQVUsRUFBQyxDQUFDLEVBQUMsYUFBYSxFQUFDLENBQUMsRUFBQyxrQkFBa0IsRUFBQyxDQUFDLEVBQUMsY0FBYyxFQUFDLENBQUMsRUFBQyxTQUFTLEVBQUMsQ0FBQyxFQUFDLFlBQVksRUFBQyxDQUFDLEVBQUMsWUFBWSxFQUFDLENBQUMsRUFBQyxFQUFDLGtCQUFrQixFQUFDLEVBQUMsWUFBWSxFQUFDLENBQUMsRUFBQyxZQUFZLEVBQUMsQ0FBQyxFQUFDLFdBQVcsRUFBQyxDQUFDLEVBQUMsZUFBZSxFQUFDLENBQUMsRUFBQyxZQUFZLEVBQUMsQ0FBQyxFQUFDLEVBQUMsTUFBTSxFQUFDLEVBQUMsaUJBQWlCLEVBQUMsQ0FBQyxFQUFDLFFBQVEsRUFBQyxDQUFDLEVBQUMsRUFBQyxRQUFRLEVBQUMsRUFBQyxXQUFXLEVBQUMsQ0FBQyxFQUFDLEtBQUssRUFBQyxDQUFDLEVBQUMsU0FBUyxFQUFDLENBQUMsRUFBQyxFQUFDLFNBQVMsRUFBQyxFQUFDLE9BQU8sRUFBQyxDQUFDLEVBQUMsSUFBSSxFQUFDLENBQUMsRUFBQyxXQUFXLEVBQUMsQ0FBQyxFQUFDLFdBQVcsRUFBQyxDQUFDLEVBQUMsWUFBWSxFQUFDLENBQUMsRUFBQyxPQUFPLEVBQUMsQ0FBQyxFQUFDLEdBQUcsRUFBQyxDQUFDLEVBQUMsUUFBUSxFQUFDLENBQUMsRUFBQyxLQUFLLEVBQUMsQ0FBQyxFQUFDLFVBQVUsRUFBQyxDQUFDLEVBQUMsTUFBTSxFQUFDLENBQUMsRUFBQyxVQUFVLEVBQUMsQ0FBQyxFQUFDLEVBQUMsV0FBVyxFQUFDLEVBQUMsRUFBRSxFQUFDLENBQUMsRUFBQyxRQUFRLEVBQUMsQ0FBQyxFQUFDLHVCQUF1QixFQUFDLENBQUMsRUFBQyxvQkFBb0IsRUFBQyxDQUFDLEVBQUMsV0FBVyxFQUFDLENBQUMsRUFBQyxFQUFDLEVBQUMsRUFBQyxLQUFLLEVBQUMsRUFBQyxVQUFVLEVBQUMsRUFBQyxjQUFjLEVBQUMsRUFBQyxTQUFTLEVBQUMsQ0FBQyxFQUFDLFlBQVksRUFBQyxDQUFDLEVBQUMsT0FBTyxFQUFDLENBQUMsRUFBQyxFQUFDLGNBQWMsRUFBQyxFQUFDLFdBQVcsRUFBQyxDQUFDLEVBQUMsUUFBUSxFQUFDLENBQUMsRUFBQyxTQUFTLEVBQUMsQ0FBQyxFQUFDLFlBQVksRUFBQyxDQUFDLEVBQUMsT0FBTyxFQUFDLENBQUMsRUFBQyxFQUFDLEtBQUssRUFBQyxFQUFDLGNBQWMsRUFBQyxDQUFDLEVBQUMsY0FBYyxFQUFDLENBQUMsRUFBQyxTQUFTLEVBQUMsQ0FBQyxFQUFDLFlBQVksRUFBQyxDQUFDLEVBQUMsRUFBRSxFQUFDLENBQUMsRUFBQyxVQUFVLEVBQUMsQ0FBQyxFQUFDLFlBQVksRUFBQyxDQUFDLEVBQUMsWUFBWSxFQUFDLENBQUMsRUFBQyxFQUFDLGFBQWEsRUFBQyxFQUFDLFdBQVcsRUFBQyxDQUFDLEVBQUMsWUFBWSxFQUFDLENBQUMsRUFBQyxTQUFTLEVBQUMsQ0FBQyxFQUFDLFlBQVksRUFBQyxDQUFDLEVBQUMsT0FBTyxFQUFDLENBQUMsRUFBQyxFQUFDLE1BQU0sRUFBQyxFQUFDLFdBQVcsRUFBQyxDQUFDLEVBQUMsb0JBQW9CLEVBQUMsQ0FBQyxFQUFDLHlCQUF5QixFQUFDLENBQUMsRUFBQyxXQUFXLEVBQUMsQ0FBQyxFQUFDLFlBQVksRUFBQyxDQUFDLEVBQUMsZUFBZSxFQUFDLENBQUMsRUFBQyxXQUFXLEVBQUMsQ0FBQyxFQUFDLEtBQUssRUFBQyxDQUFDLEVBQUMsUUFBUSxFQUFDLENBQUMsRUFBQyxTQUFTLEVBQUMsQ0FBQyxFQUFDLFFBQVEsRUFBQyxDQUFDLEVBQUMsWUFBWSxFQUFDLENBQUMsRUFBQyxPQUFPLEVBQUMsQ0FBQyxFQUFDLEVBQUMsRUFBQyxFQUFDLElBQUksRUFBQyxFQUFDLFlBQVksRUFBQyxFQUFDLGlCQUFpQixFQUFDLENBQUMsRUFBQyxZQUFZLEVBQUMsQ0FBQyxFQUFDLGVBQWUsRUFBQyxDQUFDLEVBQUMsV0FBVyxFQUFDLENBQUMsRUFBQyxTQUFTLEVBQUMsQ0FBQyxFQUFDLEVBQUMsbUJBQW1CLEVBQUMsRUFBQyxXQUFXLEVBQUMsQ0FBQyxFQUFDLFVBQVUsRUFBQyxDQUFDLEVBQUMsRUFBQyxpQkFBaUIsRUFBQyxFQUFDLGtCQUFrQixFQUFDLENBQUMsRUFBQyxnQkFBZ0IsRUFBQyxDQUFDLEVBQUMsa0JBQWtCLEVBQUMsQ0FBQyxFQUFDLFVBQVUsRUFBQyxDQUFDLEVBQUMsZ0JBQWdCLEVBQUMsQ0FBQyxFQUFDLG1CQUFtQixFQUFDLENBQUMsRUFBQyxZQUFZLEVBQUMsQ0FBQyxFQUFDLEVBQUMsU0FBUyxFQUFDLEVBQUMsa0JBQWtCLEVBQUMsQ0FBQyxFQUFDLEVBQUMsTUFBTSxFQUFDLEVBQUMsZUFBZSxFQUFDLENBQUMsRUFBQyxVQUFVLEVBQUMsQ0FBQyxFQUFDLFlBQVksRUFBQyxDQUFDLEVBQUMsZUFBZSxFQUFDLENBQUMsRUFBQyxRQUFRLEVBQUMsQ0FBQyxFQUFDLEtBQUssRUFBQyxDQUFDLEVBQUMsVUFBVSxFQUFDLENBQUMsRUFBQyxlQUFlLEVBQUMsQ0FBQyxFQUFDLFNBQVMsRUFBQyxDQUFDLEVBQUMsY0FBYyxFQUFDLENBQUMsRUFBQyxVQUFVLEVBQUMsQ0FBQyxFQUFDLGVBQWUsRUFBQyxDQUFDLEVBQUMsV0FBVyxFQUFDLENBQUMsRUFBQyxnQkFBZ0IsRUFBQyxDQUFDLEVBQUMsUUFBUSxFQUFDLENBQUMsRUFBQyxhQUFhLEVBQUMsQ0FBQyxFQUFDLFdBQVcsRUFBQyxDQUFDLEVBQUMsZ0JBQWdC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LHVDQUFhLEdBQXZCLGNBQTRCLE9BQU8sdUJBQXVCLENBQUMsQ0FBQyxDQUFDO1lBQ25ELHVDQUFhLEdBQXZCLGNBQTRCLE9BQU8sVUFBQSxpQkFBaUIsQ0FBQyxDQUFDLENBQUM7WUFDN0MsdUNBQWEsR0FBdkIsY0FBNEIsT0FBTyxVQUFBLGNBQWMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO1lBQ3JELDZDQUFtQixHQUE3QixjQUFrQyxPQUFPLFVBQUEsY0FBYyxDQUFDLGdCQUFnQixDQUFDLENBQUMsQ0FBQztZQUNqRSw0Q0FBa0IsR0FBNUIsY0FBaUMsT0FBTyxVQUFBLGNBQWMsQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDO1lBQy9ELG9DQUFVLEdBQXBCLGNBQXlCLE9BQU8sVUFBQSxrQkFBa0IsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO1lBTnBELGVBQWU7Z0JBRDNCLFFBQVEsQ0FBQyxVQUFVLENBQUMsYUFBYSxFQUFFO2VBQ3ZCLGVBQWUsQ0FXM0I7WUFBRCxzQkFBQztTQUFBLEFBWEQsQ0FBcUMsUUFBUSxDQUFDLFVBQVUsR0FXdkQ7UUFYWSx5QkFBZSxrQkFXM0IsQ0FBQTtJQUNMLENBQUMsRUFmZSxTQUFTLEdBQVQsZUFBUyxLQUFULGVBQVMsUUFleEI7QUFBRCxDQUFDLEVBZlMsS0FBSyxLQUFMLEtBQUssUUFlZCIsInNvdXJjZXNDb250ZW50IjpbIm5hbWVzcGFjZSBZYXhpZS5BZG1pbmlzdHJhdGlvbiB7XHJcbn1cclxuXHJcbiIsIm5hbWVzcGFjZSBZYXhpZS5BZG1pbmlzdHJhdGlvbiB7XHJcbiAgICBleHBvcnQgaW50ZXJmYWNlIExhbmd1YWdlRm9ybSB7XHJcbiAgICAgICAgTGFuZ3VhZ2VJZDogU2VyZW5pdHkuU3RyaW5nRWRpdG9yO1xyXG4gICAgICAgIExhbmd1YWdlTmFtZTogU2VyZW5pdHkuU3RyaW5nRWRpdG9yO1xyXG4gICAgfVxyXG5cclxuICAgIGV4cG9ydCBjbGFzcyBMYW5ndWFnZUZvcm0gZXh0ZW5kcyBTZXJlbml0eS5QcmVmaXhlZENvbnRleHQge1xyXG4gICAgICAgIHN0YXRpYyBmb3JtS2V5ID0gJ0FkbWluaXN0cmF0aW9uLkxhbmd1YWdlJztcclxuICAgICAgICBwcml2YXRlIHN0YXRpYyBpbml0OiBib29sZWFuO1xyXG5cclxuICAgICAgICBjb25zdHJ1Y3RvcihwcmVmaXg6IHN0cmluZykge1xyXG4gICAgICAgICAgICBzdXBlcihwcmVmaXgpO1xyXG5cclxuICAgICAgICAgICAgaWYgKCFMYW5ndWFnZUZvcm0uaW5pdCkgIHtcclxuICAgICAgICAgICAgICAgIExhbmd1YWdlRm9ybS5pbml0ID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgcyA9IFNlcmVuaXR5O1xyXG4gICAgICAgICAgICAgICAgdmFyIHcwID0gcy5TdHJpbmdFZGl0b3I7XHJcblxyXG4gICAgICAgICAgICAgICAgUS5pbml0Rm9ybVR5cGUoTGFuZ3VhZ2VGb3JtLCBbXHJcbiAgICAgICAgICAgICAgICAgICAgJ0xhbmd1YWdlSWQnLCB3MCxcclxuICAgICAgICAgICAgICAgICAgICAnTGFuZ3VhZ2VOYW1lJywgdzBcclxuICAgICAgICAgICAgICAgIF0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsIm5hbWVzcGFjZSBZYXhpZS5BZG1pbmlzdHJhdGlvbiB7XHJcbiAgICBleHBvcnQgaW50ZXJmYWNlIExhbmd1YWdlUm93IHtcclxuICAgICAgICBJZD86IG51bWJlcjtcclxuICAgICAgICBMYW5ndWFnZUlkPzogc3RyaW5nO1xyXG4gICAgICAgIExhbmd1YWdlTmFtZT86IHN0cmluZztcclxuICAgIH1cclxuXHJcbiAgICBleHBvcnQgbmFtZXNwYWNlIExhbmd1YWdlUm93IHtcclxuICAgICAgICBleHBvcnQgY29uc3QgaWRQcm9wZXJ0eSA9ICdJZCc7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IG5hbWVQcm9wZXJ0eSA9ICdMYW5ndWFnZU5hbWUnO1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCBsb2NhbFRleHRQcmVmaXggPSAnQWRtaW5pc3RyYXRpb24uTGFuZ3VhZ2UnO1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCBsb29rdXBLZXkgPSAnQWRtaW5pc3RyYXRpb24uTGFuZ3VhZ2UnO1xyXG5cclxuICAgICAgICBleHBvcnQgZnVuY3Rpb24gZ2V0TG9va3VwKCk6IFEuTG9va3VwPExhbmd1YWdlUm93PiB7XHJcbiAgICAgICAgICAgIHJldHVybiBRLmdldExvb2t1cDxMYW5ndWFnZVJvdz4oJ0FkbWluaXN0cmF0aW9uLkxhbmd1YWdlJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGV4cG9ydCBjb25zdCBkZWxldGVQZXJtaXNzaW9uID0gJ0FkbWluaXN0cmF0aW9uOlRyYW5zbGF0aW9uJztcclxuICAgICAgICBleHBvcnQgY29uc3QgaW5zZXJ0UGVybWlzc2lvbiA9ICdBZG1pbmlzdHJhdGlvbjpUcmFuc2xhdGlvbic7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IHJlYWRQZXJtaXNzaW9uID0gJ0FkbWluaXN0cmF0aW9uOlRyYW5zbGF0aW9uJztcclxuICAgICAgICBleHBvcnQgY29uc3QgdXBkYXRlUGVybWlzc2lvbiA9ICdBZG1pbmlzdHJhdGlvbjpUcmFuc2xhdGlvbic7XHJcblxyXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGNvbnN0IGVudW0gRmllbGRzIHtcclxuICAgICAgICAgICAgSWQgPSBcIklkXCIsXHJcbiAgICAgICAgICAgIExhbmd1YWdlSWQgPSBcIkxhbmd1YWdlSWRcIixcclxuICAgICAgICAgICAgTGFuZ3VhZ2VOYW1lID0gXCJMYW5ndWFnZU5hbWVcIlxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCJuYW1lc3BhY2UgWWF4aWUuQWRtaW5pc3RyYXRpb24ge1xyXG4gICAgZXhwb3J0IG5hbWVzcGFjZSBMYW5ndWFnZVNlcnZpY2Uge1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCBiYXNlVXJsID0gJ0FkbWluaXN0cmF0aW9uL0xhbmd1YWdlJztcclxuXHJcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgZnVuY3Rpb24gQ3JlYXRlKHJlcXVlc3Q6IFNlcmVuaXR5LlNhdmVSZXF1ZXN0PExhbmd1YWdlUm93Piwgb25TdWNjZXNzPzogKHJlc3BvbnNlOiBTZXJlbml0eS5TYXZlUmVzcG9uc2UpID0+IHZvaWQsIG9wdD86IFEuU2VydmljZU9wdGlvbnM8YW55Pik6IEpRdWVyeVhIUjtcclxuICAgICAgICBleHBvcnQgZGVjbGFyZSBmdW5jdGlvbiBVcGRhdGUocmVxdWVzdDogU2VyZW5pdHkuU2F2ZVJlcXVlc3Q8TGFuZ3VhZ2VSb3c+LCBvblN1Y2Nlc3M/OiAocmVzcG9uc2U6IFNlcmVuaXR5LlNhdmVSZXNwb25zZSkgPT4gdm9pZCwgb3B0PzogUS5TZXJ2aWNlT3B0aW9uczxhbnk+KTogSlF1ZXJ5WEhSO1xyXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGZ1bmN0aW9uIERlbGV0ZShyZXF1ZXN0OiBTZXJlbml0eS5EZWxldGVSZXF1ZXN0LCBvblN1Y2Nlc3M/OiAocmVzcG9uc2U6IFNlcmVuaXR5LkRlbGV0ZVJlc3BvbnNlKSA9PiB2b2lkLCBvcHQ/OiBRLlNlcnZpY2VPcHRpb25zPGFueT4pOiBKUXVlcnlYSFI7XHJcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgZnVuY3Rpb24gUmV0cmlldmUocmVxdWVzdDogU2VyZW5pdHkuUmV0cmlldmVSZXF1ZXN0LCBvblN1Y2Nlc3M/OiAocmVzcG9uc2U6IFNlcmVuaXR5LlJldHJpZXZlUmVzcG9uc2U8TGFuZ3VhZ2VSb3c+KSA9PiB2b2lkLCBvcHQ/OiBRLlNlcnZpY2VPcHRpb25zPGFueT4pOiBKUXVlcnlYSFI7XHJcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgZnVuY3Rpb24gTGlzdChyZXF1ZXN0OiBTZXJlbml0eS5MaXN0UmVxdWVzdCwgb25TdWNjZXNzPzogKHJlc3BvbnNlOiBTZXJlbml0eS5MaXN0UmVzcG9uc2U8TGFuZ3VhZ2VSb3c+KSA9PiB2b2lkLCBvcHQ/OiBRLlNlcnZpY2VPcHRpb25zPGFueT4pOiBKUXVlcnlYSFI7XHJcblxyXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGNvbnN0IGVudW0gTWV0aG9kcyB7XHJcbiAgICAgICAgICAgIENyZWF0ZSA9IFwiQWRtaW5pc3RyYXRpb24vTGFuZ3VhZ2UvQ3JlYXRlXCIsXHJcbiAgICAgICAgICAgIFVwZGF0ZSA9IFwiQWRtaW5pc3RyYXRpb24vTGFuZ3VhZ2UvVXBkYXRlXCIsXHJcbiAgICAgICAgICAgIERlbGV0ZSA9IFwiQWRtaW5pc3RyYXRpb24vTGFuZ3VhZ2UvRGVsZXRlXCIsXHJcbiAgICAgICAgICAgIFJldHJpZXZlID0gXCJBZG1pbmlzdHJhdGlvbi9MYW5ndWFnZS9SZXRyaWV2ZVwiLFxyXG4gICAgICAgICAgICBMaXN0ID0gXCJBZG1pbmlzdHJhdGlvbi9MYW5ndWFnZS9MaXN0XCJcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIFtcclxuICAgICAgICAgICAgJ0NyZWF0ZScsIFxyXG4gICAgICAgICAgICAnVXBkYXRlJywgXHJcbiAgICAgICAgICAgICdEZWxldGUnLCBcclxuICAgICAgICAgICAgJ1JldHJpZXZlJywgXHJcbiAgICAgICAgICAgICdMaXN0J1xyXG4gICAgICAgIF0uZm9yRWFjaCh4ID0+IHtcclxuICAgICAgICAgICAgKDxhbnk+TGFuZ3VhZ2VTZXJ2aWNlKVt4XSA9IGZ1bmN0aW9uIChyLCBzLCBvKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gUS5zZXJ2aWNlUmVxdWVzdChiYXNlVXJsICsgJy8nICsgeCwgciwgcywgbyk7XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuIiwibmFtZXNwYWNlIFlheGllLkFkbWluaXN0cmF0aW9uIHtcclxuICAgIGRlY2xhcmUgbmFtZXNwYWNlIFBlcm1pc3Npb25LZXlzIHtcclxuICAgICAgICBleHBvcnQgY29uc3QgU2VjdXJpdHkgPSBcIkFkbWluaXN0cmF0aW9uOlNlY3VyaXR5XCI7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IFRyYW5zbGF0aW9uID0gXCJBZG1pbmlzdHJhdGlvbjpUcmFuc2xhdGlvblwiO1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCBSZWFkID0gXCJDb21tb246UmVhZFwiO1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCBNb2RpZnkgPSBcIkNvbW1vbjpNb2RpZnlcIjtcclxuICAgICAgICBleHBvcnQgY29uc3QgVXBkYXRlID0gXCJDb21tb246VXBkYXRlXCI7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IEluc2VydCA9IFwiQ29tbW9uOkluc2VydFwiO1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCBEZWxldGUgPSBcIkNvbW1vbjpEZWxldGVcIjtcclxuICAgIH1cclxufVxyXG4iLCJuYW1lc3BhY2UgWWF4aWUuQWRtaW5pc3RyYXRpb24ge1xyXG59XHJcblxyXG4iLCJuYW1lc3BhY2UgWWF4aWUuQWRtaW5pc3RyYXRpb24ge1xyXG4gICAgZXhwb3J0IGludGVyZmFjZSBSb2xlRm9ybSB7XHJcbiAgICAgICAgUm9sZU5hbWU6IFNlcmVuaXR5LlN0cmluZ0VkaXRvcjtcclxuICAgIH1cclxuXHJcbiAgICBleHBvcnQgY2xhc3MgUm9sZUZvcm0gZXh0ZW5kcyBTZXJlbml0eS5QcmVmaXhlZENvbnRleHQge1xyXG4gICAgICAgIHN0YXRpYyBmb3JtS2V5ID0gJ0FkbWluaXN0cmF0aW9uLlJvbGUnO1xyXG4gICAgICAgIHByaXZhdGUgc3RhdGljIGluaXQ6IGJvb2xlYW47XHJcblxyXG4gICAgICAgIGNvbnN0cnVjdG9yKHByZWZpeDogc3RyaW5nKSB7XHJcbiAgICAgICAgICAgIHN1cGVyKHByZWZpeCk7XHJcblxyXG4gICAgICAgICAgICBpZiAoIVJvbGVGb3JtLmluaXQpICB7XHJcbiAgICAgICAgICAgICAgICBSb2xlRm9ybS5pbml0ID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgcyA9IFNlcmVuaXR5O1xyXG4gICAgICAgICAgICAgICAgdmFyIHcwID0gcy5TdHJpbmdFZGl0b3I7XHJcblxyXG4gICAgICAgICAgICAgICAgUS5pbml0Rm9ybVR5cGUoUm9sZUZvcm0sIFtcclxuICAgICAgICAgICAgICAgICAgICAnUm9sZU5hbWUnLCB3MFxyXG4gICAgICAgICAgICAgICAgXSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwibmFtZXNwYWNlIFlheGllLkFkbWluaXN0cmF0aW9uIHtcclxuICAgIGV4cG9ydCBpbnRlcmZhY2UgUm9sZVBlcm1pc3Npb25MaXN0UmVxdWVzdCBleHRlbmRzIFNlcmVuaXR5LlNlcnZpY2VSZXF1ZXN0IHtcclxuICAgICAgICBSb2xlSUQ/OiBudW1iZXI7XHJcbiAgICAgICAgTW9kdWxlPzogc3RyaW5nO1xyXG4gICAgICAgIFN1Ym1vZHVsZT86IHN0cmluZztcclxuICAgIH1cclxufVxyXG5cclxuIiwibmFtZXNwYWNlIFlheGllLkFkbWluaXN0cmF0aW9uIHtcclxuICAgIGV4cG9ydCBpbnRlcmZhY2UgUm9sZVBlcm1pc3Npb25MaXN0UmVzcG9uc2UgZXh0ZW5kcyBTZXJlbml0eS5MaXN0UmVzcG9uc2U8c3RyaW5nPiB7XHJcbiAgICB9XHJcbn1cclxuXHJcbiIsIm5hbWVzcGFjZSBZYXhpZS5BZG1pbmlzdHJhdGlvbiB7XHJcbiAgICBleHBvcnQgaW50ZXJmYWNlIFJvbGVQZXJtaXNzaW9uUm93IHtcclxuICAgICAgICBSb2xlUGVybWlzc2lvbklkPzogbnVtYmVyO1xyXG4gICAgICAgIFJvbGVJZD86IG51bWJlcjtcclxuICAgICAgICBQZXJtaXNzaW9uS2V5Pzogc3RyaW5nO1xyXG4gICAgICAgIFJvbGVSb2xlTmFtZT86IHN0cmluZztcclxuICAgIH1cclxuXHJcbiAgICBleHBvcnQgbmFtZXNwYWNlIFJvbGVQZXJtaXNzaW9uUm93IHtcclxuICAgICAgICBleHBvcnQgY29uc3QgaWRQcm9wZXJ0eSA9ICdSb2xlUGVybWlzc2lvbklkJztcclxuICAgICAgICBleHBvcnQgY29uc3QgbmFtZVByb3BlcnR5ID0gJ1Blcm1pc3Npb25LZXknO1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCBsb2NhbFRleHRQcmVmaXggPSAnQWRtaW5pc3RyYXRpb24uUm9sZVBlcm1pc3Npb24nO1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCBkZWxldGVQZXJtaXNzaW9uID0gJ0FkbWluaXN0cmF0aW9uOlNlY3VyaXR5JztcclxuICAgICAgICBleHBvcnQgY29uc3QgaW5zZXJ0UGVybWlzc2lvbiA9ICdBZG1pbmlzdHJhdGlvbjpTZWN1cml0eSc7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IHJlYWRQZXJtaXNzaW9uID0gJ0FkbWluaXN0cmF0aW9uOlNlY3VyaXR5JztcclxuICAgICAgICBleHBvcnQgY29uc3QgdXBkYXRlUGVybWlzc2lvbiA9ICdBZG1pbmlzdHJhdGlvbjpTZWN1cml0eSc7XHJcblxyXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGNvbnN0IGVudW0gRmllbGRzIHtcclxuICAgICAgICAgICAgUm9sZVBlcm1pc3Npb25JZCA9IFwiUm9sZVBlcm1pc3Npb25JZFwiLFxyXG4gICAgICAgICAgICBSb2xlSWQgPSBcIlJvbGVJZFwiLFxyXG4gICAgICAgICAgICBQZXJtaXNzaW9uS2V5ID0gXCJQZXJtaXNzaW9uS2V5XCIsXHJcbiAgICAgICAgICAgIFJvbGVSb2xlTmFtZSA9IFwiUm9sZVJvbGVOYW1lXCJcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwibmFtZXNwYWNlIFlheGllLkFkbWluaXN0cmF0aW9uIHtcclxuICAgIGV4cG9ydCBuYW1lc3BhY2UgUm9sZVBlcm1pc3Npb25TZXJ2aWNlIHtcclxuICAgICAgICBleHBvcnQgY29uc3QgYmFzZVVybCA9ICdBZG1pbmlzdHJhdGlvbi9Sb2xlUGVybWlzc2lvbic7XHJcblxyXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGZ1bmN0aW9uIFVwZGF0ZShyZXF1ZXN0OiBSb2xlUGVybWlzc2lvblVwZGF0ZVJlcXVlc3QsIG9uU3VjY2Vzcz86IChyZXNwb25zZTogU2VyZW5pdHkuU2F2ZVJlc3BvbnNlKSA9PiB2b2lkLCBvcHQ/OiBRLlNlcnZpY2VPcHRpb25zPGFueT4pOiBKUXVlcnlYSFI7XHJcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgZnVuY3Rpb24gTGlzdChyZXF1ZXN0OiBSb2xlUGVybWlzc2lvbkxpc3RSZXF1ZXN0LCBvblN1Y2Nlc3M/OiAocmVzcG9uc2U6IFJvbGVQZXJtaXNzaW9uTGlzdFJlc3BvbnNlKSA9PiB2b2lkLCBvcHQ/OiBRLlNlcnZpY2VPcHRpb25zPGFueT4pOiBKUXVlcnlYSFI7XHJcblxyXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGNvbnN0IGVudW0gTWV0aG9kcyB7XHJcbiAgICAgICAgICAgIFVwZGF0ZSA9IFwiQWRtaW5pc3RyYXRpb24vUm9sZVBlcm1pc3Npb24vVXBkYXRlXCIsXHJcbiAgICAgICAgICAgIExpc3QgPSBcIkFkbWluaXN0cmF0aW9uL1JvbGVQZXJtaXNzaW9uL0xpc3RcIlxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgW1xyXG4gICAgICAgICAgICAnVXBkYXRlJywgXHJcbiAgICAgICAgICAgICdMaXN0J1xyXG4gICAgICAgIF0uZm9yRWFjaCh4ID0+IHtcclxuICAgICAgICAgICAgKDxhbnk+Um9sZVBlcm1pc3Npb25TZXJ2aWNlKVt4XSA9IGZ1bmN0aW9uIChyLCBzLCBvKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gUS5zZXJ2aWNlUmVxdWVzdChiYXNlVXJsICsgJy8nICsgeCwgciwgcywgbyk7XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuIiwibmFtZXNwYWNlIFlheGllLkFkbWluaXN0cmF0aW9uIHtcclxuICAgIGV4cG9ydCBpbnRlcmZhY2UgUm9sZVBlcm1pc3Npb25VcGRhdGVSZXF1ZXN0IGV4dGVuZHMgU2VyZW5pdHkuU2VydmljZVJlcXVlc3Qge1xyXG4gICAgICAgIFJvbGVJRD86IG51bWJlcjtcclxuICAgICAgICBNb2R1bGU/OiBzdHJpbmc7XHJcbiAgICAgICAgU3VibW9kdWxlPzogc3RyaW5nO1xyXG4gICAgICAgIFBlcm1pc3Npb25zPzogc3RyaW5nW107XHJcbiAgICB9XHJcbn1cclxuXHJcbiIsIm5hbWVzcGFjZSBZYXhpZS5BZG1pbmlzdHJhdGlvbiB7XHJcbiAgICBleHBvcnQgaW50ZXJmYWNlIFJvbGVSb3cge1xyXG4gICAgICAgIFJvbGVJZD86IG51bWJlcjtcclxuICAgICAgICBSb2xlTmFtZT86IHN0cmluZztcclxuICAgIH1cclxuXHJcbiAgICBleHBvcnQgbmFtZXNwYWNlIFJvbGVSb3cge1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCBpZFByb3BlcnR5ID0gJ1JvbGVJZCc7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IG5hbWVQcm9wZXJ0eSA9ICdSb2xlTmFtZSc7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IGxvY2FsVGV4dFByZWZpeCA9ICdBZG1pbmlzdHJhdGlvbi5Sb2xlJztcclxuICAgICAgICBleHBvcnQgY29uc3QgbG9va3VwS2V5ID0gJ0FkbWluaXN0cmF0aW9uLlJvbGUnO1xyXG5cclxuICAgICAgICBleHBvcnQgZnVuY3Rpb24gZ2V0TG9va3VwKCk6IFEuTG9va3VwPFJvbGVSb3c+IHtcclxuICAgICAgICAgICAgcmV0dXJuIFEuZ2V0TG9va3VwPFJvbGVSb3c+KCdBZG1pbmlzdHJhdGlvbi5Sb2xlJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGV4cG9ydCBjb25zdCBkZWxldGVQZXJtaXNzaW9uID0gJ0FkbWluaXN0cmF0aW9uOlNlY3VyaXR5JztcclxuICAgICAgICBleHBvcnQgY29uc3QgaW5zZXJ0UGVybWlzc2lvbiA9ICdBZG1pbmlzdHJhdGlvbjpTZWN1cml0eSc7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IHJlYWRQZXJtaXNzaW9uID0gJ0FkbWluaXN0cmF0aW9uOlNlY3VyaXR5JztcclxuICAgICAgICBleHBvcnQgY29uc3QgdXBkYXRlUGVybWlzc2lvbiA9ICdBZG1pbmlzdHJhdGlvbjpTZWN1cml0eSc7XHJcblxyXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGNvbnN0IGVudW0gRmllbGRzIHtcclxuICAgICAgICAgICAgUm9sZUlkID0gXCJSb2xlSWRcIixcclxuICAgICAgICAgICAgUm9sZU5hbWUgPSBcIlJvbGVOYW1lXCJcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwibmFtZXNwYWNlIFlheGllLkFkbWluaXN0cmF0aW9uIHtcclxuICAgIGV4cG9ydCBuYW1lc3BhY2UgUm9sZVNlcnZpY2Uge1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCBiYXNlVXJsID0gJ0FkbWluaXN0cmF0aW9uL1JvbGUnO1xyXG5cclxuICAgICAgICBleHBvcnQgZGVjbGFyZSBmdW5jdGlvbiBDcmVhdGUocmVxdWVzdDogU2VyZW5pdHkuU2F2ZVJlcXVlc3Q8Um9sZVJvdz4sIG9uU3VjY2Vzcz86IChyZXNwb25zZTogU2VyZW5pdHkuU2F2ZVJlc3BvbnNlKSA9PiB2b2lkLCBvcHQ/OiBRLlNlcnZpY2VPcHRpb25zPGFueT4pOiBKUXVlcnlYSFI7XHJcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgZnVuY3Rpb24gVXBkYXRlKHJlcXVlc3Q6IFNlcmVuaXR5LlNhdmVSZXF1ZXN0PFJvbGVSb3c+LCBvblN1Y2Nlc3M/OiAocmVzcG9uc2U6IFNlcmVuaXR5LlNhdmVSZXNwb25zZSkgPT4gdm9pZCwgb3B0PzogUS5TZXJ2aWNlT3B0aW9uczxhbnk+KTogSlF1ZXJ5WEhSO1xyXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGZ1bmN0aW9uIERlbGV0ZShyZXF1ZXN0OiBTZXJlbml0eS5EZWxldGVSZXF1ZXN0LCBvblN1Y2Nlc3M/OiAocmVzcG9uc2U6IFNlcmVuaXR5LkRlbGV0ZVJlc3BvbnNlKSA9PiB2b2lkLCBvcHQ/OiBRLlNlcnZpY2VPcHRpb25zPGFueT4pOiBKUXVlcnlYSFI7XHJcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgZnVuY3Rpb24gUmV0cmlldmUocmVxdWVzdDogU2VyZW5pdHkuUmV0cmlldmVSZXF1ZXN0LCBvblN1Y2Nlc3M/OiAocmVzcG9uc2U6IFNlcmVuaXR5LlJldHJpZXZlUmVzcG9uc2U8Um9sZVJvdz4pID0+IHZvaWQsIG9wdD86IFEuU2VydmljZU9wdGlvbnM8YW55Pik6IEpRdWVyeVhIUjtcclxuICAgICAgICBleHBvcnQgZGVjbGFyZSBmdW5jdGlvbiBMaXN0KHJlcXVlc3Q6IFNlcmVuaXR5Lkxpc3RSZXF1ZXN0LCBvblN1Y2Nlc3M/OiAocmVzcG9uc2U6IFNlcmVuaXR5Lkxpc3RSZXNwb25zZTxSb2xlUm93PikgPT4gdm9pZCwgb3B0PzogUS5TZXJ2aWNlT3B0aW9uczxhbnk+KTogSlF1ZXJ5WEhSO1xyXG5cclxuICAgICAgICBleHBvcnQgZGVjbGFyZSBjb25zdCBlbnVtIE1ldGhvZHMge1xyXG4gICAgICAgICAgICBDcmVhdGUgPSBcIkFkbWluaXN0cmF0aW9uL1JvbGUvQ3JlYXRlXCIsXHJcbiAgICAgICAgICAgIFVwZGF0ZSA9IFwiQWRtaW5pc3RyYXRpb24vUm9sZS9VcGRhdGVcIixcclxuICAgICAgICAgICAgRGVsZXRlID0gXCJBZG1pbmlzdHJhdGlvbi9Sb2xlL0RlbGV0ZVwiLFxyXG4gICAgICAgICAgICBSZXRyaWV2ZSA9IFwiQWRtaW5pc3RyYXRpb24vUm9sZS9SZXRyaWV2ZVwiLFxyXG4gICAgICAgICAgICBMaXN0ID0gXCJBZG1pbmlzdHJhdGlvbi9Sb2xlL0xpc3RcIlxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgW1xyXG4gICAgICAgICAgICAnQ3JlYXRlJywgXHJcbiAgICAgICAgICAgICdVcGRhdGUnLCBcclxuICAgICAgICAgICAgJ0RlbGV0ZScsIFxyXG4gICAgICAgICAgICAnUmV0cmlldmUnLCBcclxuICAgICAgICAgICAgJ0xpc3QnXHJcbiAgICAgICAgXS5mb3JFYWNoKHggPT4ge1xyXG4gICAgICAgICAgICAoPGFueT5Sb2xlU2VydmljZSlbeF0gPSBmdW5jdGlvbiAociwgcywgbykge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFEuc2VydmljZVJlcXVlc3QoYmFzZVVybCArICcvJyArIHgsIHIsIHMsIG8pO1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcbiIsIm5hbWVzcGFjZSBZYXhpZS5BZG1pbmlzdHJhdGlvbiB7XHJcbiAgICBleHBvcnQgaW50ZXJmYWNlIFNlcmdlbkNvbm5lY3Rpb24ge1xyXG4gICAgICAgIEtleT86IHN0cmluZztcclxuICAgIH1cclxufVxyXG4iLCJuYW1lc3BhY2UgWWF4aWUuQWRtaW5pc3RyYXRpb24ge1xyXG4gICAgZXhwb3J0IGludGVyZmFjZSBTZXJnZW5HZW5lcmF0ZU9wdGlvbnMge1xyXG4gICAgICAgIFJvdz86IGJvb2xlYW47XHJcbiAgICAgICAgU2VydmljZT86IGJvb2xlYW47XHJcbiAgICAgICAgVUk/OiBib29sZWFuO1xyXG4gICAgfVxyXG59XHJcbiIsIm5hbWVzcGFjZSBZYXhpZS5BZG1pbmlzdHJhdGlvbiB7XHJcbiAgICBleHBvcnQgaW50ZXJmYWNlIFNlcmdlbkdlbmVyYXRlUmVxdWVzdCBleHRlbmRzIFNlcmVuaXR5LlNlcnZpY2VSZXF1ZXN0IHtcclxuICAgICAgICBDb25uZWN0aW9uS2V5Pzogc3RyaW5nO1xyXG4gICAgICAgIFRhYmxlPzogU2VyZ2VuVGFibGU7XHJcbiAgICAgICAgR2VuZXJhdGVPcHRpb25zPzogU2VyZ2VuR2VuZXJhdGVPcHRpb25zO1xyXG4gICAgfVxyXG59XHJcbiIsIm5hbWVzcGFjZSBZYXhpZS5BZG1pbmlzdHJhdGlvbiB7XHJcbiAgICBleHBvcnQgaW50ZXJmYWNlIFNlcmdlbkxpc3RUYWJsZXNSZXF1ZXN0IGV4dGVuZHMgU2VyZW5pdHkuU2VydmljZVJlcXVlc3Qge1xyXG4gICAgICAgIENvbm5lY3Rpb25LZXk/OiBzdHJpbmc7XHJcbiAgICB9XHJcbn1cclxuIiwibmFtZXNwYWNlIFlheGllLkFkbWluaXN0cmF0aW9uIHtcclxuICAgIGV4cG9ydCBuYW1lc3BhY2UgU2VyZ2VuU2VydmljZSB7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IGJhc2VVcmwgPSAnQWRtaW5pc3RyYXRpb24vU2VyZ2VuJztcclxuXHJcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgZnVuY3Rpb24gTGlzdENvbm5lY3Rpb25zKHJlcXVlc3Q6IFNlcmVuaXR5LlNlcnZpY2VSZXF1ZXN0LCBvblN1Y2Nlc3M/OiAocmVzcG9uc2U6IFNlcmVuaXR5Lkxpc3RSZXNwb25zZTxTZXJnZW5Db25uZWN0aW9uPikgPT4gdm9pZCwgb3B0PzogUS5TZXJ2aWNlT3B0aW9uczxhbnk+KTogSlF1ZXJ5WEhSO1xyXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGZ1bmN0aW9uIExpc3RUYWJsZXMocmVxdWVzdDogU2VyZ2VuTGlzdFRhYmxlc1JlcXVlc3QsIG9uU3VjY2Vzcz86IChyZXNwb25zZTogU2VyZW5pdHkuTGlzdFJlc3BvbnNlPFNlcmdlblRhYmxlPikgPT4gdm9pZCwgb3B0PzogUS5TZXJ2aWNlT3B0aW9uczxhbnk+KTogSlF1ZXJ5WEhSO1xyXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGZ1bmN0aW9uIEdlbmVyYXRlKHJlcXVlc3Q6IFNlcmdlbkdlbmVyYXRlUmVxdWVzdCwgb25TdWNjZXNzPzogKHJlc3BvbnNlOiBTZXJlbml0eS5TZXJ2aWNlUmVzcG9uc2UpID0+IHZvaWQsIG9wdD86IFEuU2VydmljZU9wdGlvbnM8YW55Pik6IEpRdWVyeVhIUjtcclxuXHJcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgY29uc3QgZW51bSBNZXRob2RzIHtcclxuICAgICAgICAgICAgTGlzdENvbm5lY3Rpb25zID0gXCJBZG1pbmlzdHJhdGlvbi9TZXJnZW4vTGlzdENvbm5lY3Rpb25zXCIsXHJcbiAgICAgICAgICAgIExpc3RUYWJsZXMgPSBcIkFkbWluaXN0cmF0aW9uL1Nlcmdlbi9MaXN0VGFibGVzXCIsXHJcbiAgICAgICAgICAgIEdlbmVyYXRlID0gXCJBZG1pbmlzdHJhdGlvbi9TZXJnZW4vR2VuZXJhdGVcIlxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgW1xyXG4gICAgICAgICAgICAnTGlzdENvbm5lY3Rpb25zJywgXHJcbiAgICAgICAgICAgICdMaXN0VGFibGVzJywgXHJcbiAgICAgICAgICAgICdHZW5lcmF0ZSdcclxuICAgICAgICBdLmZvckVhY2goeCA9PiB7XHJcbiAgICAgICAgICAgICg8YW55PlNlcmdlblNlcnZpY2UpW3hdID0gZnVuY3Rpb24gKHIsIHMsIG8pIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBRLnNlcnZpY2VSZXF1ZXN0KGJhc2VVcmwgKyAnLycgKyB4LCByLCBzLCBvKTtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG4iLCJuYW1lc3BhY2UgWWF4aWUuQWRtaW5pc3RyYXRpb24ge1xyXG4gICAgZXhwb3J0IGludGVyZmFjZSBTZXJnZW5UYWJsZSB7XHJcbiAgICAgICAgVGFibGVuYW1lPzogc3RyaW5nO1xyXG4gICAgICAgIElkZW50aWZpZXI/OiBzdHJpbmc7XHJcbiAgICAgICAgTW9kdWxlPzogc3RyaW5nO1xyXG4gICAgICAgIFBlcm1pc3Npb25LZXk/OiBzdHJpbmc7XHJcbiAgICB9XHJcbn1cclxuIiwibmFtZXNwYWNlIFlheGllLkFkbWluaXN0cmF0aW9uIHtcclxuICAgIGV4cG9ydCBpbnRlcmZhY2UgVHJhbnNsYXRpb25JdGVtIHtcclxuICAgICAgICBLZXk/OiBzdHJpbmc7XHJcbiAgICAgICAgU291cmNlVGV4dD86IHN0cmluZztcclxuICAgICAgICBUYXJnZXRUZXh0Pzogc3RyaW5nO1xyXG4gICAgICAgIEN1c3RvbVRleHQ/OiBzdHJpbmc7XHJcbiAgICB9XHJcbn1cclxuXHJcbiIsIm5hbWVzcGFjZSBZYXhpZS5BZG1pbmlzdHJhdGlvbiB7XHJcbiAgICBleHBvcnQgaW50ZXJmYWNlIFRyYW5zbGF0aW9uTGlzdFJlcXVlc3QgZXh0ZW5kcyBTZXJlbml0eS5MaXN0UmVxdWVzdCB7XHJcbiAgICAgICAgU291cmNlTGFuZ3VhZ2VJRD86IHN0cmluZztcclxuICAgICAgICBUYXJnZXRMYW5ndWFnZUlEPzogc3RyaW5nO1xyXG4gICAgfVxyXG59XHJcblxyXG4iLCJuYW1lc3BhY2UgWWF4aWUuQWRtaW5pc3RyYXRpb24ge1xyXG4gICAgZXhwb3J0IG5hbWVzcGFjZSBUcmFuc2xhdGlvblNlcnZpY2Uge1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCBiYXNlVXJsID0gJ0FkbWluaXN0cmF0aW9uL1RyYW5zbGF0aW9uJztcclxuXHJcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgZnVuY3Rpb24gTGlzdChyZXF1ZXN0OiBUcmFuc2xhdGlvbkxpc3RSZXF1ZXN0LCBvblN1Y2Nlc3M/OiAocmVzcG9uc2U6IFNlcmVuaXR5Lkxpc3RSZXNwb25zZTxUcmFuc2xhdGlvbkl0ZW0+KSA9PiB2b2lkLCBvcHQ/OiBRLlNlcnZpY2VPcHRpb25zPGFueT4pOiBKUXVlcnlYSFI7XHJcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgZnVuY3Rpb24gVXBkYXRlKHJlcXVlc3Q6IFRyYW5zbGF0aW9uVXBkYXRlUmVxdWVzdCwgb25TdWNjZXNzPzogKHJlc3BvbnNlOiBTZXJlbml0eS5TYXZlUmVzcG9uc2UpID0+IHZvaWQsIG9wdD86IFEuU2VydmljZU9wdGlvbnM8YW55Pik6IEpRdWVyeVhIUjtcclxuXHJcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgY29uc3QgZW51bSBNZXRob2RzIHtcclxuICAgICAgICAgICAgTGlzdCA9IFwiQWRtaW5pc3RyYXRpb24vVHJhbnNsYXRpb24vTGlzdFwiLFxyXG4gICAgICAgICAgICBVcGRhdGUgPSBcIkFkbWluaXN0cmF0aW9uL1RyYW5zbGF0aW9uL1VwZGF0ZVwiXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBbXHJcbiAgICAgICAgICAgICdMaXN0JywgXHJcbiAgICAgICAgICAgICdVcGRhdGUnXHJcbiAgICAgICAgXS5mb3JFYWNoKHggPT4ge1xyXG4gICAgICAgICAgICAoPGFueT5UcmFuc2xhdGlvblNlcnZpY2UpW3hdID0gZnVuY3Rpb24gKHIsIHMsIG8pIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBRLnNlcnZpY2VSZXF1ZXN0KGJhc2VVcmwgKyAnLycgKyB4LCByLCBzLCBvKTtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG4iLCJuYW1lc3BhY2UgWWF4aWUuQWRtaW5pc3RyYXRpb24ge1xyXG4gICAgZXhwb3J0IGludGVyZmFjZSBUcmFuc2xhdGlvblVwZGF0ZVJlcXVlc3QgZXh0ZW5kcyBTZXJlbml0eS5TZXJ2aWNlUmVxdWVzdCB7XHJcbiAgICAgICAgVGFyZ2V0TGFuZ3VhZ2VJRD86IHN0cmluZztcclxuICAgICAgICBUcmFuc2xhdGlvbnM/OiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9O1xyXG4gICAgfVxyXG59XHJcblxyXG4iLCJuYW1lc3BhY2UgWWF4aWUuQWRtaW5pc3RyYXRpb24ge1xyXG59XHJcblxyXG4iLCJuYW1lc3BhY2UgWWF4aWUuQWRtaW5pc3RyYXRpb24ge1xyXG4gICAgZXhwb3J0IGludGVyZmFjZSBVc2VyRm9ybSB7XHJcbiAgICAgICAgVXNlcm5hbWU6IFNlcmVuaXR5LlN0cmluZ0VkaXRvcjtcclxuICAgICAgICBEaXNwbGF5TmFtZTogU2VyZW5pdHkuU3RyaW5nRWRpdG9yO1xyXG4gICAgICAgIEVtYWlsOiBTZXJlbml0eS5FbWFpbEVkaXRvcjtcclxuICAgICAgICBVc2VySW1hZ2U6IFNlcmVuaXR5LkltYWdlVXBsb2FkRWRpdG9yO1xyXG4gICAgICAgIFBhc3N3b3JkOiBTZXJlbml0eS5QYXNzd29yZEVkaXRvcjtcclxuICAgICAgICBQYXNzd29yZENvbmZpcm06IFNlcmVuaXR5LlBhc3N3b3JkRWRpdG9yO1xyXG4gICAgICAgIFNvdXJjZTogU2VyZW5pdHkuU3RyaW5nRWRpdG9yO1xyXG4gICAgfVxyXG5cclxuICAgIGV4cG9ydCBjbGFzcyBVc2VyRm9ybSBleHRlbmRzIFNlcmVuaXR5LlByZWZpeGVkQ29udGV4dCB7XHJcbiAgICAgICAgc3RhdGljIGZvcm1LZXkgPSAnQWRtaW5pc3RyYXRpb24uVXNlcic7XHJcbiAgICAgICAgcHJpdmF0ZSBzdGF0aWMgaW5pdDogYm9vbGVhbjtcclxuXHJcbiAgICAgICAgY29uc3RydWN0b3IocHJlZml4OiBzdHJpbmcpIHtcclxuICAgICAgICAgICAgc3VwZXIocHJlZml4KTtcclxuXHJcbiAgICAgICAgICAgIGlmICghVXNlckZvcm0uaW5pdCkgIHtcclxuICAgICAgICAgICAgICAgIFVzZXJGb3JtLmluaXQgPSB0cnVlO1xyXG5cclxuICAgICAgICAgICAgICAgIHZhciBzID0gU2VyZW5pdHk7XHJcbiAgICAgICAgICAgICAgICB2YXIgdzAgPSBzLlN0cmluZ0VkaXRvcjtcclxuICAgICAgICAgICAgICAgIHZhciB3MSA9IHMuRW1haWxFZGl0b3I7XHJcbiAgICAgICAgICAgICAgICB2YXIgdzIgPSBzLkltYWdlVXBsb2FkRWRpdG9yO1xyXG4gICAgICAgICAgICAgICAgdmFyIHczID0gcy5QYXNzd29yZEVkaXRvcjtcclxuXHJcbiAgICAgICAgICAgICAgICBRLmluaXRGb3JtVHlwZShVc2VyRm9ybSwgW1xyXG4gICAgICAgICAgICAgICAgICAgICdVc2VybmFtZScsIHcwLFxyXG4gICAgICAgICAgICAgICAgICAgICdEaXNwbGF5TmFtZScsIHcwLFxyXG4gICAgICAgICAgICAgICAgICAgICdFbWFpbCcsIHcxLFxyXG4gICAgICAgICAgICAgICAgICAgICdVc2VySW1hZ2UnLCB3MixcclxuICAgICAgICAgICAgICAgICAgICAnUGFzc3dvcmQnLCB3MyxcclxuICAgICAgICAgICAgICAgICAgICAnUGFzc3dvcmRDb25maXJtJywgdzMsXHJcbiAgICAgICAgICAgICAgICAgICAgJ1NvdXJjZScsIHcwXHJcbiAgICAgICAgICAgICAgICBdKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCJuYW1lc3BhY2UgWWF4aWUuQWRtaW5pc3RyYXRpb24ge1xyXG4gICAgZXhwb3J0IGludGVyZmFjZSBVc2VyUGVybWlzc2lvbkxpc3RSZXF1ZXN0IGV4dGVuZHMgU2VyZW5pdHkuU2VydmljZVJlcXVlc3Qge1xyXG4gICAgICAgIFVzZXJJRD86IG51bWJlcjtcclxuICAgICAgICBNb2R1bGU/OiBzdHJpbmc7XHJcbiAgICAgICAgU3VibW9kdWxlPzogc3RyaW5nO1xyXG4gICAgfVxyXG59XHJcblxyXG4iLCJuYW1lc3BhY2UgWWF4aWUuQWRtaW5pc3RyYXRpb24ge1xyXG4gICAgZXhwb3J0IGludGVyZmFjZSBVc2VyUGVybWlzc2lvblJvdyB7XHJcbiAgICAgICAgVXNlclBlcm1pc3Npb25JZD86IG51bWJlcjtcclxuICAgICAgICBVc2VySWQ/OiBudW1iZXI7XHJcbiAgICAgICAgUGVybWlzc2lvbktleT86IHN0cmluZztcclxuICAgICAgICBHcmFudGVkPzogYm9vbGVhbjtcclxuICAgICAgICBVc2VybmFtZT86IHN0cmluZztcclxuICAgICAgICBVc2VyPzogc3RyaW5nO1xyXG4gICAgfVxyXG5cclxuICAgIGV4cG9ydCBuYW1lc3BhY2UgVXNlclBlcm1pc3Npb25Sb3cge1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCBpZFByb3BlcnR5ID0gJ1VzZXJQZXJtaXNzaW9uSWQnO1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCBuYW1lUHJvcGVydHkgPSAnUGVybWlzc2lvbktleSc7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IGxvY2FsVGV4dFByZWZpeCA9ICdBZG1pbmlzdHJhdGlvbi5Vc2VyUGVybWlzc2lvbic7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IGRlbGV0ZVBlcm1pc3Npb24gPSAnQWRtaW5pc3RyYXRpb246U2VjdXJpdHknO1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCBpbnNlcnRQZXJtaXNzaW9uID0gJ0FkbWluaXN0cmF0aW9uOlNlY3VyaXR5JztcclxuICAgICAgICBleHBvcnQgY29uc3QgcmVhZFBlcm1pc3Npb24gPSAnQWRtaW5pc3RyYXRpb246U2VjdXJpdHknO1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCB1cGRhdGVQZXJtaXNzaW9uID0gJ0FkbWluaXN0cmF0aW9uOlNlY3VyaXR5JztcclxuXHJcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgY29uc3QgZW51bSBGaWVsZHMge1xyXG4gICAgICAgICAgICBVc2VyUGVybWlzc2lvbklkID0gXCJVc2VyUGVybWlzc2lvbklkXCIsXHJcbiAgICAgICAgICAgIFVzZXJJZCA9IFwiVXNlcklkXCIsXHJcbiAgICAgICAgICAgIFBlcm1pc3Npb25LZXkgPSBcIlBlcm1pc3Npb25LZXlcIixcclxuICAgICAgICAgICAgR3JhbnRlZCA9IFwiR3JhbnRlZFwiLFxyXG4gICAgICAgICAgICBVc2VybmFtZSA9IFwiVXNlcm5hbWVcIixcclxuICAgICAgICAgICAgVXNlciA9IFwiVXNlclwiXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsIm5hbWVzcGFjZSBZYXhpZS5BZG1pbmlzdHJhdGlvbiB7XHJcbiAgICBleHBvcnQgbmFtZXNwYWNlIFVzZXJQZXJtaXNzaW9uU2VydmljZSB7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IGJhc2VVcmwgPSAnQWRtaW5pc3RyYXRpb24vVXNlclBlcm1pc3Npb24nO1xyXG5cclxuICAgICAgICBleHBvcnQgZGVjbGFyZSBmdW5jdGlvbiBVcGRhdGUocmVxdWVzdDogVXNlclBlcm1pc3Npb25VcGRhdGVSZXF1ZXN0LCBvblN1Y2Nlc3M/OiAocmVzcG9uc2U6IFNlcmVuaXR5LlNhdmVSZXNwb25zZSkgPT4gdm9pZCwgb3B0PzogUS5TZXJ2aWNlT3B0aW9uczxhbnk+KTogSlF1ZXJ5WEhSO1xyXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGZ1bmN0aW9uIExpc3QocmVxdWVzdDogVXNlclBlcm1pc3Npb25MaXN0UmVxdWVzdCwgb25TdWNjZXNzPzogKHJlc3BvbnNlOiBTZXJlbml0eS5MaXN0UmVzcG9uc2U8VXNlclBlcm1pc3Npb25Sb3c+KSA9PiB2b2lkLCBvcHQ/OiBRLlNlcnZpY2VPcHRpb25zPGFueT4pOiBKUXVlcnlYSFI7XHJcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgZnVuY3Rpb24gTGlzdFJvbGVQZXJtaXNzaW9ucyhyZXF1ZXN0OiBVc2VyUGVybWlzc2lvbkxpc3RSZXF1ZXN0LCBvblN1Y2Nlc3M/OiAocmVzcG9uc2U6IFNlcmVuaXR5Lkxpc3RSZXNwb25zZTxzdHJpbmc+KSA9PiB2b2lkLCBvcHQ/OiBRLlNlcnZpY2VPcHRpb25zPGFueT4pOiBKUXVlcnlYSFI7XHJcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgZnVuY3Rpb24gTGlzdFBlcm1pc3Npb25LZXlzKHJlcXVlc3Q6IFNlcmVuaXR5LlNlcnZpY2VSZXF1ZXN0LCBvblN1Y2Nlc3M/OiAocmVzcG9uc2U6IFNlcmVuaXR5Lkxpc3RSZXNwb25zZTxzdHJpbmc+KSA9PiB2b2lkLCBvcHQ/OiBRLlNlcnZpY2VPcHRpb25zPGFueT4pOiBKUXVlcnlYSFI7XHJcblxyXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGNvbnN0IGVudW0gTWV0aG9kcyB7XHJcbiAgICAgICAgICAgIFVwZGF0ZSA9IFwiQWRtaW5pc3RyYXRpb24vVXNlclBlcm1pc3Npb24vVXBkYXRlXCIsXHJcbiAgICAgICAgICAgIExpc3QgPSBcIkFkbWluaXN0cmF0aW9uL1VzZXJQZXJtaXNzaW9uL0xpc3RcIixcclxuICAgICAgICAgICAgTGlzdFJvbGVQZXJtaXNzaW9ucyA9IFwiQWRtaW5pc3RyYXRpb24vVXNlclBlcm1pc3Npb24vTGlzdFJvbGVQZXJtaXNzaW9uc1wiLFxyXG4gICAgICAgICAgICBMaXN0UGVybWlzc2lvbktleXMgPSBcIkFkbWluaXN0cmF0aW9uL1VzZXJQZXJtaXNzaW9uL0xpc3RQZXJtaXNzaW9uS2V5c1wiXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBbXHJcbiAgICAgICAgICAgICdVcGRhdGUnLCBcclxuICAgICAgICAgICAgJ0xpc3QnLCBcclxuICAgICAgICAgICAgJ0xpc3RSb2xlUGVybWlzc2lvbnMnLCBcclxuICAgICAgICAgICAgJ0xpc3RQZXJtaXNzaW9uS2V5cydcclxuICAgICAgICBdLmZvckVhY2goeCA9PiB7XHJcbiAgICAgICAgICAgICg8YW55PlVzZXJQZXJtaXNzaW9uU2VydmljZSlbeF0gPSBmdW5jdGlvbiAociwgcywgbykge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFEuc2VydmljZVJlcXVlc3QoYmFzZVVybCArICcvJyArIHgsIHIsIHMsIG8pO1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcbiIsIm5hbWVzcGFjZSBZYXhpZS5BZG1pbmlzdHJhdGlvbiB7XHJcbiAgICBleHBvcnQgaW50ZXJmYWNlIFVzZXJQZXJtaXNzaW9uVXBkYXRlUmVxdWVzdCBleHRlbmRzIFNlcmVuaXR5LlNlcnZpY2VSZXF1ZXN0IHtcclxuICAgICAgICBVc2VySUQ/OiBudW1iZXI7XHJcbiAgICAgICAgTW9kdWxlPzogc3RyaW5nO1xyXG4gICAgICAgIFN1Ym1vZHVsZT86IHN0cmluZztcclxuICAgICAgICBQZXJtaXNzaW9ucz86IFVzZXJQZXJtaXNzaW9uUm93W107XHJcbiAgICB9XHJcbn1cclxuXHJcbiIsIm5hbWVzcGFjZSBZYXhpZS5BZG1pbmlzdHJhdGlvbiB7XHJcbiAgICBleHBvcnQgaW50ZXJmYWNlIFVzZXJSb2xlTGlzdFJlcXVlc3QgZXh0ZW5kcyBTZXJlbml0eS5TZXJ2aWNlUmVxdWVzdCB7XHJcbiAgICAgICAgVXNlcklEPzogbnVtYmVyO1xyXG4gICAgfVxyXG59XHJcblxyXG4iLCJuYW1lc3BhY2UgWWF4aWUuQWRtaW5pc3RyYXRpb24ge1xyXG4gICAgZXhwb3J0IGludGVyZmFjZSBVc2VyUm9sZUxpc3RSZXNwb25zZSBleHRlbmRzIFNlcmVuaXR5Lkxpc3RSZXNwb25zZTxudW1iZXI+IHtcclxuICAgIH1cclxufVxyXG5cclxuIiwibmFtZXNwYWNlIFlheGllLkFkbWluaXN0cmF0aW9uIHtcclxuICAgIGV4cG9ydCBpbnRlcmZhY2UgVXNlclJvbGVSb3cge1xyXG4gICAgICAgIFVzZXJSb2xlSWQ/OiBudW1iZXI7XHJcbiAgICAgICAgVXNlcklkPzogbnVtYmVyO1xyXG4gICAgICAgIFJvbGVJZD86IG51bWJlcjtcclxuICAgICAgICBVc2VybmFtZT86IHN0cmluZztcclxuICAgICAgICBVc2VyPzogc3RyaW5nO1xyXG4gICAgfVxyXG5cclxuICAgIGV4cG9ydCBuYW1lc3BhY2UgVXNlclJvbGVSb3cge1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCBpZFByb3BlcnR5ID0gJ1VzZXJSb2xlSWQnO1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCBsb2NhbFRleHRQcmVmaXggPSAnQWRtaW5pc3RyYXRpb24uVXNlclJvbGUnO1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCBkZWxldGVQZXJtaXNzaW9uID0gJ0FkbWluaXN0cmF0aW9uOlNlY3VyaXR5JztcclxuICAgICAgICBleHBvcnQgY29uc3QgaW5zZXJ0UGVybWlzc2lvbiA9ICdBZG1pbmlzdHJhdGlvbjpTZWN1cml0eSc7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IHJlYWRQZXJtaXNzaW9uID0gJ0FkbWluaXN0cmF0aW9uOlNlY3VyaXR5JztcclxuICAgICAgICBleHBvcnQgY29uc3QgdXBkYXRlUGVybWlzc2lvbiA9ICdBZG1pbmlzdHJhdGlvbjpTZWN1cml0eSc7XHJcblxyXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGNvbnN0IGVudW0gRmllbGRzIHtcclxuICAgICAgICAgICAgVXNlclJvbGVJZCA9IFwiVXNlclJvbGVJZFwiLFxyXG4gICAgICAgICAgICBVc2VySWQgPSBcIlVzZXJJZFwiLFxyXG4gICAgICAgICAgICBSb2xlSWQgPSBcIlJvbGVJZFwiLFxyXG4gICAgICAgICAgICBVc2VybmFtZSA9IFwiVXNlcm5hbWVcIixcclxuICAgICAgICAgICAgVXNlciA9IFwiVXNlclwiXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsIm5hbWVzcGFjZSBZYXhpZS5BZG1pbmlzdHJhdGlvbiB7XHJcbiAgICBleHBvcnQgbmFtZXNwYWNlIFVzZXJSb2xlU2VydmljZSB7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IGJhc2VVcmwgPSAnQWRtaW5pc3RyYXRpb24vVXNlclJvbGUnO1xyXG5cclxuICAgICAgICBleHBvcnQgZGVjbGFyZSBmdW5jdGlvbiBVcGRhdGUocmVxdWVzdDogVXNlclJvbGVVcGRhdGVSZXF1ZXN0LCBvblN1Y2Nlc3M/OiAocmVzcG9uc2U6IFNlcmVuaXR5LlNhdmVSZXNwb25zZSkgPT4gdm9pZCwgb3B0PzogUS5TZXJ2aWNlT3B0aW9uczxhbnk+KTogSlF1ZXJ5WEhSO1xyXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGZ1bmN0aW9uIExpc3QocmVxdWVzdDogVXNlclJvbGVMaXN0UmVxdWVzdCwgb25TdWNjZXNzPzogKHJlc3BvbnNlOiBVc2VyUm9sZUxpc3RSZXNwb25zZSkgPT4gdm9pZCwgb3B0PzogUS5TZXJ2aWNlT3B0aW9uczxhbnk+KTogSlF1ZXJ5WEhSO1xyXG5cclxuICAgICAgICBleHBvcnQgZGVjbGFyZSBjb25zdCBlbnVtIE1ldGhvZHMge1xyXG4gICAgICAgICAgICBVcGRhdGUgPSBcIkFkbWluaXN0cmF0aW9uL1VzZXJSb2xlL1VwZGF0ZVwiLFxyXG4gICAgICAgICAgICBMaXN0ID0gXCJBZG1pbmlzdHJhdGlvbi9Vc2VyUm9sZS9MaXN0XCJcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIFtcclxuICAgICAgICAgICAgJ1VwZGF0ZScsIFxyXG4gICAgICAgICAgICAnTGlzdCdcclxuICAgICAgICBdLmZvckVhY2goeCA9PiB7XHJcbiAgICAgICAgICAgICg8YW55PlVzZXJSb2xlU2VydmljZSlbeF0gPSBmdW5jdGlvbiAociwgcywgbykge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFEuc2VydmljZVJlcXVlc3QoYmFzZVVybCArICcvJyArIHgsIHIsIHMsIG8pO1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcbiIsIm5hbWVzcGFjZSBZYXhpZS5BZG1pbmlzdHJhdGlvbiB7XHJcbiAgICBleHBvcnQgaW50ZXJmYWNlIFVzZXJSb2xlVXBkYXRlUmVxdWVzdCBleHRlbmRzIFNlcmVuaXR5LlNlcnZpY2VSZXF1ZXN0IHtcclxuICAgICAgICBVc2VySUQ/OiBudW1iZXI7XHJcbiAgICAgICAgUm9sZXM/OiBudW1iZXJbXTtcclxuICAgIH1cclxufVxyXG5cclxuIiwibmFtZXNwYWNlIFlheGllLkFkbWluaXN0cmF0aW9uIHtcclxuICAgIGV4cG9ydCBpbnRlcmZhY2UgVXNlclJvdyB7XHJcbiAgICAgICAgVXNlcklkPzogbnVtYmVyO1xyXG4gICAgICAgIFVzZXJuYW1lPzogc3RyaW5nO1xyXG4gICAgICAgIFNvdXJjZT86IHN0cmluZztcclxuICAgICAgICBQYXNzd29yZEhhc2g/OiBzdHJpbmc7XHJcbiAgICAgICAgUGFzc3dvcmRTYWx0Pzogc3RyaW5nO1xyXG4gICAgICAgIERpc3BsYXlOYW1lPzogc3RyaW5nO1xyXG4gICAgICAgIEVtYWlsPzogc3RyaW5nO1xyXG4gICAgICAgIFVzZXJJbWFnZT86IHN0cmluZztcclxuICAgICAgICBMYXN0RGlyZWN0b3J5VXBkYXRlPzogc3RyaW5nO1xyXG4gICAgICAgIElzQWN0aXZlPzogbnVtYmVyO1xyXG4gICAgICAgIFBhc3N3b3JkPzogc3RyaW5nO1xyXG4gICAgICAgIFBhc3N3b3JkQ29uZmlybT86IHN0cmluZztcclxuICAgICAgICBJbnNlcnRVc2VySWQ/OiBudW1iZXI7XHJcbiAgICAgICAgSW5zZXJ0RGF0ZT86IHN0cmluZztcclxuICAgICAgICBVcGRhdGVVc2VySWQ/OiBudW1iZXI7XHJcbiAgICAgICAgVXBkYXRlRGF0ZT86IHN0cmluZztcclxuICAgIH1cclxuXHJcbiAgICBleHBvcnQgbmFtZXNwYWNlIFVzZXJSb3cge1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCBpZFByb3BlcnR5ID0gJ1VzZXJJZCc7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IGlzQWN0aXZlUHJvcGVydHkgPSAnSXNBY3RpdmUnO1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCBuYW1lUHJvcGVydHkgPSAnVXNlcm5hbWUnO1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCBsb2NhbFRleHRQcmVmaXggPSAnQWRtaW5pc3RyYXRpb24uVXNlcic7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IGxvb2t1cEtleSA9ICdBZG1pbmlzdHJhdGlvbi5Vc2VyJztcclxuXHJcbiAgICAgICAgZXhwb3J0IGZ1bmN0aW9uIGdldExvb2t1cCgpOiBRLkxvb2t1cDxVc2VyUm93PiB7XHJcbiAgICAgICAgICAgIHJldHVybiBRLmdldExvb2t1cDxVc2VyUm93PignQWRtaW5pc3RyYXRpb24uVXNlcicpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBleHBvcnQgY29uc3QgZGVsZXRlUGVybWlzc2lvbiA9ICdBZG1pbmlzdHJhdGlvbjpTZWN1cml0eSc7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IGluc2VydFBlcm1pc3Npb24gPSAnQWRtaW5pc3RyYXRpb246U2VjdXJpdHknO1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCByZWFkUGVybWlzc2lvbiA9ICdBZG1pbmlzdHJhdGlvbjpTZWN1cml0eSc7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IHVwZGF0ZVBlcm1pc3Npb24gPSAnQWRtaW5pc3RyYXRpb246U2VjdXJpdHknO1xyXG5cclxuICAgICAgICBleHBvcnQgZGVjbGFyZSBjb25zdCBlbnVtIEZpZWxkcyB7XHJcbiAgICAgICAgICAgIFVzZXJJZCA9IFwiVXNlcklkXCIsXHJcbiAgICAgICAgICAgIFVzZXJuYW1lID0gXCJVc2VybmFtZVwiLFxyXG4gICAgICAgICAgICBTb3VyY2UgPSBcIlNvdXJjZVwiLFxyXG4gICAgICAgICAgICBQYXNzd29yZEhhc2ggPSBcIlBhc3N3b3JkSGFzaFwiLFxyXG4gICAgICAgICAgICBQYXNzd29yZFNhbHQgPSBcIlBhc3N3b3JkU2FsdFwiLFxyXG4gICAgICAgICAgICBEaXNwbGF5TmFtZSA9IFwiRGlzcGxheU5hbWVcIixcclxuICAgICAgICAgICAgRW1haWwgPSBcIkVtYWlsXCIsXHJcbiAgICAgICAgICAgIFVzZXJJbWFnZSA9IFwiVXNlckltYWdlXCIsXHJcbiAgICAgICAgICAgIExhc3REaXJlY3RvcnlVcGRhdGUgPSBcIkxhc3REaXJlY3RvcnlVcGRhdGVcIixcclxuICAgICAgICAgICAgSXNBY3RpdmUgPSBcIklzQWN0aXZlXCIsXHJcbiAgICAgICAgICAgIFBhc3N3b3JkID0gXCJQYXNzd29yZFwiLFxyXG4gICAgICAgICAgICBQYXNzd29yZENvbmZpcm0gPSBcIlBhc3N3b3JkQ29uZmlybVwiLFxyXG4gICAgICAgICAgICBJbnNlcnRVc2VySWQgPSBcIkluc2VydFVzZXJJZFwiLFxyXG4gICAgICAgICAgICBJbnNlcnREYXRlID0gXCJJbnNlcnREYXRlXCIsXHJcbiAgICAgICAgICAgIFVwZGF0ZVVzZXJJZCA9IFwiVXBkYXRlVXNlcklkXCIsXHJcbiAgICAgICAgICAgIFVwZGF0ZURhdGUgPSBcIlVwZGF0ZURhdGVcIlxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCJuYW1lc3BhY2UgWWF4aWUuQWRtaW5pc3RyYXRpb24ge1xyXG4gICAgZXhwb3J0IG5hbWVzcGFjZSBVc2VyU2VydmljZSB7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IGJhc2VVcmwgPSAnQWRtaW5pc3RyYXRpb24vVXNlcic7XHJcblxyXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGZ1bmN0aW9uIENyZWF0ZShyZXF1ZXN0OiBTZXJlbml0eS5TYXZlUmVxdWVzdDxVc2VyUm93Piwgb25TdWNjZXNzPzogKHJlc3BvbnNlOiBTZXJlbml0eS5TYXZlUmVzcG9uc2UpID0+IHZvaWQsIG9wdD86IFEuU2VydmljZU9wdGlvbnM8YW55Pik6IEpRdWVyeVhIUjtcclxuICAgICAgICBleHBvcnQgZGVjbGFyZSBmdW5jdGlvbiBVcGRhdGUocmVxdWVzdDogU2VyZW5pdHkuU2F2ZVJlcXVlc3Q8VXNlclJvdz4sIG9uU3VjY2Vzcz86IChyZXNwb25zZTogU2VyZW5pdHkuU2F2ZVJlc3BvbnNlKSA9PiB2b2lkLCBvcHQ/OiBRLlNlcnZpY2VPcHRpb25zPGFueT4pOiBKUXVlcnlYSFI7XHJcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgZnVuY3Rpb24gRGVsZXRlKHJlcXVlc3Q6IFNlcmVuaXR5LkRlbGV0ZVJlcXVlc3QsIG9uU3VjY2Vzcz86IChyZXNwb25zZTogU2VyZW5pdHkuRGVsZXRlUmVzcG9uc2UpID0+IHZvaWQsIG9wdD86IFEuU2VydmljZU9wdGlvbnM8YW55Pik6IEpRdWVyeVhIUjtcclxuICAgICAgICBleHBvcnQgZGVjbGFyZSBmdW5jdGlvbiBVbmRlbGV0ZShyZXF1ZXN0OiBTZXJlbml0eS5VbmRlbGV0ZVJlcXVlc3QsIG9uU3VjY2Vzcz86IChyZXNwb25zZTogU2VyZW5pdHkuVW5kZWxldGVSZXNwb25zZSkgPT4gdm9pZCwgb3B0PzogUS5TZXJ2aWNlT3B0aW9uczxhbnk+KTogSlF1ZXJ5WEhSO1xyXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGZ1bmN0aW9uIFJldHJpZXZlKHJlcXVlc3Q6IFNlcmVuaXR5LlJldHJpZXZlUmVxdWVzdCwgb25TdWNjZXNzPzogKHJlc3BvbnNlOiBTZXJlbml0eS5SZXRyaWV2ZVJlc3BvbnNlPFVzZXJSb3c+KSA9PiB2b2lkLCBvcHQ/OiBRLlNlcnZpY2VPcHRpb25zPGFueT4pOiBKUXVlcnlYSFI7XHJcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgZnVuY3Rpb24gTGlzdChyZXF1ZXN0OiBTZXJlbml0eS5MaXN0UmVxdWVzdCwgb25TdWNjZXNzPzogKHJlc3BvbnNlOiBTZXJlbml0eS5MaXN0UmVzcG9uc2U8VXNlclJvdz4pID0+IHZvaWQsIG9wdD86IFEuU2VydmljZU9wdGlvbnM8YW55Pik6IEpRdWVyeVhIUjtcclxuXHJcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgY29uc3QgZW51bSBNZXRob2RzIHtcclxuICAgICAgICAgICAgQ3JlYXRlID0gXCJBZG1pbmlzdHJhdGlvbi9Vc2VyL0NyZWF0ZVwiLFxyXG4gICAgICAgICAgICBVcGRhdGUgPSBcIkFkbWluaXN0cmF0aW9uL1VzZXIvVXBkYXRlXCIsXHJcbiAgICAgICAgICAgIERlbGV0ZSA9IFwiQWRtaW5pc3RyYXRpb24vVXNlci9EZWxldGVcIixcclxuICAgICAgICAgICAgVW5kZWxldGUgPSBcIkFkbWluaXN0cmF0aW9uL1VzZXIvVW5kZWxldGVcIixcclxuICAgICAgICAgICAgUmV0cmlldmUgPSBcIkFkbWluaXN0cmF0aW9uL1VzZXIvUmV0cmlldmVcIixcclxuICAgICAgICAgICAgTGlzdCA9IFwiQWRtaW5pc3RyYXRpb24vVXNlci9MaXN0XCJcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIFtcclxuICAgICAgICAgICAgJ0NyZWF0ZScsIFxyXG4gICAgICAgICAgICAnVXBkYXRlJywgXHJcbiAgICAgICAgICAgICdEZWxldGUnLCBcclxuICAgICAgICAgICAgJ1VuZGVsZXRlJywgXHJcbiAgICAgICAgICAgICdSZXRyaWV2ZScsIFxyXG4gICAgICAgICAgICAnTGlzdCdcclxuICAgICAgICBdLmZvckVhY2goeCA9PiB7XHJcbiAgICAgICAgICAgICg8YW55PlVzZXJTZXJ2aWNlKVt4XSA9IGZ1bmN0aW9uIChyLCBzLCBvKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gUS5zZXJ2aWNlUmVxdWVzdChiYXNlVXJsICsgJy8nICsgeCwgciwgcywgbyk7XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuIiwibmFtZXNwYWNlIFlheGllLkNvbW1vbiB7XHJcbiAgICBleHBvcnQgaW50ZXJmYWNlIEZpZWxkTWF0Y2gge1xyXG4gICAgICAgIFNvdXJjZUNvbHVtbk51bWJlcj86IG51bWJlcjtcclxuICAgICAgICBTb3VyY2VDb2x1bW5MYWJlbD86IHN0cmluZztcclxuICAgICAgICBTb3VyY2VGaWVsZE5hbWU/OiBzdHJpbmc7XHJcbiAgICAgICAgVGFibGVDb2x1bW5OdW1iZXI/OiBudW1iZXI7XHJcbiAgICAgICAgVGFibGVDb2x1bW5MYWJlbD86IHN0cmluZztcclxuICAgICAgICBUYWJsZUZpZWxkTmFtZT86IHN0cmluZztcclxuICAgIH1cclxufVxyXG4iLCJuYW1lc3BhY2UgWWF4aWUuQ29tbW9uIHtcclxuICAgIGV4cG9ydCBpbnRlcmZhY2UgR2V0RXhjZWxDb2x1bW5MaXN0UmVxdWVzdCBleHRlbmRzIFNlcmVuaXR5Lkxpc3RSZXF1ZXN0IHtcclxuICAgICAgICBJbXBvcnRGaWxlTGlzdD86IFVwbG9hZEZpbGVOYW1lc1tdO1xyXG4gICAgICAgIEZpbGVOYW1lPzogc3RyaW5nO1xyXG4gICAgfVxyXG59XHJcbiIsIm5hbWVzcGFjZSBZYXhpZS5Db21tb24ge1xyXG4gICAgZXhwb3J0IGludGVyZmFjZSBHZXRUYWJsZUhlYWRlckxpc3RSZXF1ZXN0IGV4dGVuZHMgU2VyZW5pdHkuTGlzdFJlcXVlc3Qge1xyXG4gICAgICAgIFRhYmxlTmFtZT86IHN0cmluZztcclxuICAgIH1cclxufVxyXG4iLCJuYW1lc3BhY2UgWWF4aWUuQ29tbW9uIHtcclxufVxyXG4iLCJuYW1lc3BhY2UgWWF4aWUuQ29tbW9uIHtcclxuICAgIGV4cG9ydCBpbnRlcmZhY2UgSW1wb3J0U291cmNlRm9ybSB7XHJcbiAgICAgICAgRGVzY3JpcHRpb246IFNlcmVuaXR5LlN0cmluZ0VkaXRvcjtcclxuICAgIH1cclxuXHJcbiAgICBleHBvcnQgY2xhc3MgSW1wb3J0U291cmNlRm9ybSBleHRlbmRzIFNlcmVuaXR5LlByZWZpeGVkQ29udGV4dCB7XHJcbiAgICAgICAgc3RhdGljIGZvcm1LZXkgPSAnQ29tbW9uLkltcG9ydFNvdXJjZSc7XHJcbiAgICAgICAgcHJpdmF0ZSBzdGF0aWMgaW5pdDogYm9vbGVhbjtcclxuXHJcbiAgICAgICAgY29uc3RydWN0b3IocHJlZml4OiBzdHJpbmcpIHtcclxuICAgICAgICAgICAgc3VwZXIocHJlZml4KTtcclxuXHJcbiAgICAgICAgICAgIGlmICghSW1wb3J0U291cmNlRm9ybS5pbml0KSAge1xyXG4gICAgICAgICAgICAgICAgSW1wb3J0U291cmNlRm9ybS5pbml0ID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgcyA9IFNlcmVuaXR5O1xyXG4gICAgICAgICAgICAgICAgdmFyIHcwID0gcy5TdHJpbmdFZGl0b3I7XHJcblxyXG4gICAgICAgICAgICAgICAgUS5pbml0Rm9ybVR5cGUoSW1wb3J0U291cmNlRm9ybSwgW1xyXG4gICAgICAgICAgICAgICAgICAgICdEZXNjcmlwdGlvbicsIHcwXHJcbiAgICAgICAgICAgICAgICBdKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCJuYW1lc3BhY2UgWWF4aWUuQ29tbW9uIHtcclxuICAgIGV4cG9ydCBpbnRlcmZhY2UgSW1wb3J0U291cmNlUm93IHtcclxuICAgICAgICBJbXBvcnRTb3VyY2VJZD86IG51bWJlcjtcclxuICAgICAgICBEZXNjcmlwdGlvbj86IHN0cmluZztcclxuICAgIH1cclxuXHJcbiAgICBleHBvcnQgbmFtZXNwYWNlIEltcG9ydFNvdXJjZVJvdyB7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IGlkUHJvcGVydHkgPSAnSW1wb3J0U291cmNlSWQnO1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCBuYW1lUHJvcGVydHkgPSAnRGVzY3JpcHRpb24nO1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCBsb2NhbFRleHRQcmVmaXggPSAnQ29tbW9uLkltcG9ydFNvdXJjZSc7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IGxvb2t1cEtleSA9ICdDb21tb24uSW1wb3J0U291cmNlJztcclxuXHJcbiAgICAgICAgZXhwb3J0IGZ1bmN0aW9uIGdldExvb2t1cCgpOiBRLkxvb2t1cDxJbXBvcnRTb3VyY2VSb3c+IHtcclxuICAgICAgICAgICAgcmV0dXJuIFEuZ2V0TG9va3VwPEltcG9ydFNvdXJjZVJvdz4oJ0NvbW1vbi5JbXBvcnRTb3VyY2UnKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IGRlbGV0ZVBlcm1pc3Npb24gPSAnQWRtaW5pc3RyYXRpb246R2VuZXJhbCc7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IGluc2VydFBlcm1pc3Npb24gPSAnQWRtaW5pc3RyYXRpb246R2VuZXJhbCc7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IHJlYWRQZXJtaXNzaW9uID0gJ0FkbWluaXN0cmF0aW9uOkdlbmVyYWwnO1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCB1cGRhdGVQZXJtaXNzaW9uID0gJ0FkbWluaXN0cmF0aW9uOkdlbmVyYWwnO1xyXG5cclxuICAgICAgICBleHBvcnQgZGVjbGFyZSBjb25zdCBlbnVtIEZpZWxkcyB7XHJcbiAgICAgICAgICAgIEltcG9ydFNvdXJjZUlkID0gXCJJbXBvcnRTb3VyY2VJZFwiLFxyXG4gICAgICAgICAgICBEZXNjcmlwdGlvbiA9IFwiRGVzY3JpcHRpb25cIlxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCJuYW1lc3BhY2UgWWF4aWUuQ29tbW9uIHtcclxuICAgIGV4cG9ydCBuYW1lc3BhY2UgSW1wb3J0U291cmNlU2VydmljZSB7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IGJhc2VVcmwgPSAnQ29tbW9uL0ltcG9ydFNvdXJjZSc7XHJcblxyXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGZ1bmN0aW9uIENyZWF0ZShyZXF1ZXN0OiBTZXJlbml0eS5TYXZlUmVxdWVzdDxJbXBvcnRTb3VyY2VSb3c+LCBvblN1Y2Nlc3M/OiAocmVzcG9uc2U6IFNlcmVuaXR5LlNhdmVSZXNwb25zZSkgPT4gdm9pZCwgb3B0PzogUS5TZXJ2aWNlT3B0aW9uczxhbnk+KTogSlF1ZXJ5WEhSO1xyXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGZ1bmN0aW9uIFVwZGF0ZShyZXF1ZXN0OiBTZXJlbml0eS5TYXZlUmVxdWVzdDxJbXBvcnRTb3VyY2VSb3c+LCBvblN1Y2Nlc3M/OiAocmVzcG9uc2U6IFNlcmVuaXR5LlNhdmVSZXNwb25zZSkgPT4gdm9pZCwgb3B0PzogUS5TZXJ2aWNlT3B0aW9uczxhbnk+KTogSlF1ZXJ5WEhSO1xyXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGZ1bmN0aW9uIERlbGV0ZShyZXF1ZXN0OiBTZXJlbml0eS5EZWxldGVSZXF1ZXN0LCBvblN1Y2Nlc3M/OiAocmVzcG9uc2U6IFNlcmVuaXR5LkRlbGV0ZVJlc3BvbnNlKSA9PiB2b2lkLCBvcHQ/OiBRLlNlcnZpY2VPcHRpb25zPGFueT4pOiBKUXVlcnlYSFI7XHJcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgZnVuY3Rpb24gUmV0cmlldmUocmVxdWVzdDogU2VyZW5pdHkuUmV0cmlldmVSZXF1ZXN0LCBvblN1Y2Nlc3M/OiAocmVzcG9uc2U6IFNlcmVuaXR5LlJldHJpZXZlUmVzcG9uc2U8SW1wb3J0U291cmNlUm93PikgPT4gdm9pZCwgb3B0PzogUS5TZXJ2aWNlT3B0aW9uczxhbnk+KTogSlF1ZXJ5WEhSO1xyXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGZ1bmN0aW9uIExpc3QocmVxdWVzdDogU2VyZW5pdHkuTGlzdFJlcXVlc3QsIG9uU3VjY2Vzcz86IChyZXNwb25zZTogU2VyZW5pdHkuTGlzdFJlc3BvbnNlPEltcG9ydFNvdXJjZVJvdz4pID0+IHZvaWQsIG9wdD86IFEuU2VydmljZU9wdGlvbnM8YW55Pik6IEpRdWVyeVhIUjtcclxuXHJcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgY29uc3QgZW51bSBNZXRob2RzIHtcclxuICAgICAgICAgICAgQ3JlYXRlID0gXCJDb21tb24vSW1wb3J0U291cmNlL0NyZWF0ZVwiLFxyXG4gICAgICAgICAgICBVcGRhdGUgPSBcIkNvbW1vbi9JbXBvcnRTb3VyY2UvVXBkYXRlXCIsXHJcbiAgICAgICAgICAgIERlbGV0ZSA9IFwiQ29tbW9uL0ltcG9ydFNvdXJjZS9EZWxldGVcIixcclxuICAgICAgICAgICAgUmV0cmlldmUgPSBcIkNvbW1vbi9JbXBvcnRTb3VyY2UvUmV0cmlldmVcIixcclxuICAgICAgICAgICAgTGlzdCA9IFwiQ29tbW9uL0ltcG9ydFNvdXJjZS9MaXN0XCJcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIFtcclxuICAgICAgICAgICAgJ0NyZWF0ZScsIFxyXG4gICAgICAgICAgICAnVXBkYXRlJywgXHJcbiAgICAgICAgICAgICdEZWxldGUnLCBcclxuICAgICAgICAgICAgJ1JldHJpZXZlJywgXHJcbiAgICAgICAgICAgICdMaXN0J1xyXG4gICAgICAgIF0uZm9yRWFjaCh4ID0+IHtcclxuICAgICAgICAgICAgKDxhbnk+SW1wb3J0U291cmNlU2VydmljZSlbeF0gPSBmdW5jdGlvbiAociwgcywgbykge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFEuc2VydmljZVJlcXVlc3QoYmFzZVVybCArICcvJyArIHgsIHIsIHMsIG8pO1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcbiIsIm5hbWVzcGFjZSBZYXhpZS5Db21tb24ge1xyXG59XHJcbiIsIm5hbWVzcGFjZSBZYXhpZS5Db21tb24ge1xyXG4gICAgZXhwb3J0IGludGVyZmFjZSBJbXBvcnRUeXBlRm9ybSB7XHJcbiAgICAgICAgRGVzY3JpcHRpb246IFNlcmVuaXR5LlN0cmluZ0VkaXRvcjtcclxuICAgIH1cclxuXHJcbiAgICBleHBvcnQgY2xhc3MgSW1wb3J0VHlwZUZvcm0gZXh0ZW5kcyBTZXJlbml0eS5QcmVmaXhlZENvbnRleHQge1xyXG4gICAgICAgIHN0YXRpYyBmb3JtS2V5ID0gJ0NvbW1vbi5JbXBvcnRUeXBlJztcclxuICAgICAgICBwcml2YXRlIHN0YXRpYyBpbml0OiBib29sZWFuO1xyXG5cclxuICAgICAgICBjb25zdHJ1Y3RvcihwcmVmaXg6IHN0cmluZykge1xyXG4gICAgICAgICAgICBzdXBlcihwcmVmaXgpO1xyXG5cclxuICAgICAgICAgICAgaWYgKCFJbXBvcnRUeXBlRm9ybS5pbml0KSAge1xyXG4gICAgICAgICAgICAgICAgSW1wb3J0VHlwZUZvcm0uaW5pdCA9IHRydWU7XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIHMgPSBTZXJlbml0eTtcclxuICAgICAgICAgICAgICAgIHZhciB3MCA9IHMuU3RyaW5nRWRpdG9yO1xyXG5cclxuICAgICAgICAgICAgICAgIFEuaW5pdEZvcm1UeXBlKEltcG9ydFR5cGVGb3JtLCBbXHJcbiAgICAgICAgICAgICAgICAgICAgJ0Rlc2NyaXB0aW9uJywgdzBcclxuICAgICAgICAgICAgICAgIF0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsIm5hbWVzcGFjZSBZYXhpZS5Db21tb24ge1xyXG4gICAgZXhwb3J0IGludGVyZmFjZSBJbXBvcnRUeXBlUm93IHtcclxuICAgICAgICBJbXBvcnRUeXBlSWQ/OiBudW1iZXI7XHJcbiAgICAgICAgRGVzY3JpcHRpb24/OiBzdHJpbmc7XHJcbiAgICB9XHJcblxyXG4gICAgZXhwb3J0IG5hbWVzcGFjZSBJbXBvcnRUeXBlUm93IHtcclxuICAgICAgICBleHBvcnQgY29uc3QgaWRQcm9wZXJ0eSA9ICdJbXBvcnRUeXBlSWQnO1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCBuYW1lUHJvcGVydHkgPSAnRGVzY3JpcHRpb24nO1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCBsb2NhbFRleHRQcmVmaXggPSAnQ29tbW9uLkltcG9ydFR5cGUnO1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCBsb29rdXBLZXkgPSAnQ29tbW9uLkltcG9ydFR5cGUnO1xyXG5cclxuICAgICAgICBleHBvcnQgZnVuY3Rpb24gZ2V0TG9va3VwKCk6IFEuTG9va3VwPEltcG9ydFR5cGVSb3c+IHtcclxuICAgICAgICAgICAgcmV0dXJuIFEuZ2V0TG9va3VwPEltcG9ydFR5cGVSb3c+KCdDb21tb24uSW1wb3J0VHlwZScpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBleHBvcnQgY29uc3QgZGVsZXRlUGVybWlzc2lvbiA9ICdBZG1pbmlzdHJhdGlvbjpHZW5lcmFsJztcclxuICAgICAgICBleHBvcnQgY29uc3QgaW5zZXJ0UGVybWlzc2lvbiA9ICdBZG1pbmlzdHJhdGlvbjpHZW5lcmFsJztcclxuICAgICAgICBleHBvcnQgY29uc3QgcmVhZFBlcm1pc3Npb24gPSAnQWRtaW5pc3RyYXRpb246R2VuZXJhbCc7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IHVwZGF0ZVBlcm1pc3Npb24gPSAnQWRtaW5pc3RyYXRpb246R2VuZXJhbCc7XHJcblxyXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGNvbnN0IGVudW0gRmllbGRzIHtcclxuICAgICAgICAgICAgSW1wb3J0VHlwZUlkID0gXCJJbXBvcnRUeXBlSWRcIixcclxuICAgICAgICAgICAgRGVzY3JpcHRpb24gPSBcIkRlc2NyaXB0aW9uXCJcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwibmFtZXNwYWNlIFlheGllLkNvbW1vbiB7XHJcbiAgICBleHBvcnQgbmFtZXNwYWNlIEltcG9ydFR5cGVTZXJ2aWNlIHtcclxuICAgICAgICBleHBvcnQgY29uc3QgYmFzZVVybCA9ICdDb21tb24vSW1wb3J0VHlwZSc7XHJcblxyXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGZ1bmN0aW9uIENyZWF0ZShyZXF1ZXN0OiBTZXJlbml0eS5TYXZlUmVxdWVzdDxJbXBvcnRUeXBlUm93Piwgb25TdWNjZXNzPzogKHJlc3BvbnNlOiBTZXJlbml0eS5TYXZlUmVzcG9uc2UpID0+IHZvaWQsIG9wdD86IFEuU2VydmljZU9wdGlvbnM8YW55Pik6IEpRdWVyeVhIUjtcclxuICAgICAgICBleHBvcnQgZGVjbGFyZSBmdW5jdGlvbiBVcGRhdGUocmVxdWVzdDogU2VyZW5pdHkuU2F2ZVJlcXVlc3Q8SW1wb3J0VHlwZVJvdz4sIG9uU3VjY2Vzcz86IChyZXNwb25zZTogU2VyZW5pdHkuU2F2ZVJlc3BvbnNlKSA9PiB2b2lkLCBvcHQ/OiBRLlNlcnZpY2VPcHRpb25zPGFueT4pOiBKUXVlcnlYSFI7XHJcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgZnVuY3Rpb24gRGVsZXRlKHJlcXVlc3Q6IFNlcmVuaXR5LkRlbGV0ZVJlcXVlc3QsIG9uU3VjY2Vzcz86IChyZXNwb25zZTogU2VyZW5pdHkuRGVsZXRlUmVzcG9uc2UpID0+IHZvaWQsIG9wdD86IFEuU2VydmljZU9wdGlvbnM8YW55Pik6IEpRdWVyeVhIUjtcclxuICAgICAgICBleHBvcnQgZGVjbGFyZSBmdW5jdGlvbiBSZXRyaWV2ZShyZXF1ZXN0OiBTZXJlbml0eS5SZXRyaWV2ZVJlcXVlc3QsIG9uU3VjY2Vzcz86IChyZXNwb25zZTogU2VyZW5pdHkuUmV0cmlldmVSZXNwb25zZTxJbXBvcnRUeXBlUm93PikgPT4gdm9pZCwgb3B0PzogUS5TZXJ2aWNlT3B0aW9uczxhbnk+KTogSlF1ZXJ5WEhSO1xyXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGZ1bmN0aW9uIExpc3QocmVxdWVzdDogU2VyZW5pdHkuTGlzdFJlcXVlc3QsIG9uU3VjY2Vzcz86IChyZXNwb25zZTogU2VyZW5pdHkuTGlzdFJlc3BvbnNlPEltcG9ydFR5cGVSb3c+KSA9PiB2b2lkLCBvcHQ/OiBRLlNlcnZpY2VPcHRpb25zPGFueT4pOiBKUXVlcnlYSFI7XHJcblxyXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGNvbnN0IGVudW0gTWV0aG9kcyB7XHJcbiAgICAgICAgICAgIENyZWF0ZSA9IFwiQ29tbW9uL0ltcG9ydFR5cGUvQ3JlYXRlXCIsXHJcbiAgICAgICAgICAgIFVwZGF0ZSA9IFwiQ29tbW9uL0ltcG9ydFR5cGUvVXBkYXRlXCIsXHJcbiAgICAgICAgICAgIERlbGV0ZSA9IFwiQ29tbW9uL0ltcG9ydFR5cGUvRGVsZXRlXCIsXHJcbiAgICAgICAgICAgIFJldHJpZXZlID0gXCJDb21tb24vSW1wb3J0VHlwZS9SZXRyaWV2ZVwiLFxyXG4gICAgICAgICAgICBMaXN0ID0gXCJDb21tb24vSW1wb3J0VHlwZS9MaXN0XCJcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIFtcclxuICAgICAgICAgICAgJ0NyZWF0ZScsIFxyXG4gICAgICAgICAgICAnVXBkYXRlJywgXHJcbiAgICAgICAgICAgICdEZWxldGUnLCBcclxuICAgICAgICAgICAgJ1JldHJpZXZlJywgXHJcbiAgICAgICAgICAgICdMaXN0J1xyXG4gICAgICAgIF0uZm9yRWFjaCh4ID0+IHtcclxuICAgICAgICAgICAgKDxhbnk+SW1wb3J0VHlwZVNlcnZpY2UpW3hdID0gZnVuY3Rpb24gKHIsIHMsIG8pIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBRLnNlcnZpY2VSZXF1ZXN0KGJhc2VVcmwgKyAnLycgKyB4LCByLCBzLCBvKTtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG4iLCJuYW1lc3BhY2UgWWF4aWUuQ29tbW9uIHtcclxufVxyXG4iLCJuYW1lc3BhY2UgWWF4aWUuQ29tbW9uIHtcclxuICAgIGV4cG9ydCBpbnRlcmZhY2UgSW1wb3J0V2l6YXJkRm9ybSB7XHJcbiAgICAgICAgSW1wb3J0V2l6YXJkSWQ6IFNlcmVuaXR5LkludGVnZXJFZGl0b3I7XHJcbiAgICAgICAgRGVzY3JpcHRpb246IFNlcmVuaXR5LlN0cmluZ0VkaXRvcjtcclxuICAgICAgICBJbXBvcnRUeXBlSWQ6IFNlcmVuaXR5Lkxvb2t1cEVkaXRvcjtcclxuICAgICAgICBUYXJnZXREYXRhYmFzZTogU2VyZW5pdHkuTG9va3VwRWRpdG9yO1xyXG4gICAgICAgIEltcG9ydEZpbGVMaXN0OiBTZXJlbml0eS5NdWx0aXBsZUltYWdlVXBsb2FkRWRpdG9yO1xyXG4gICAgICAgIFN0YXJ0QXRSb3c6IFNlcmVuaXR5LkludGVnZXJFZGl0b3I7XHJcbiAgICAgICAgRW5kQXRSb3c6IFNlcmVuaXR5LkludGVnZXJFZGl0b3I7XHJcbiAgICAgICAgRmllbGREZWxpbWl0ZXJJZDogU2VyZW5pdHkuUmFkaW9CdXR0b25FZGl0b3I7XHJcbiAgICAgICAgSW1wb3J0U291cmNlSWQ6IFNlcmVuaXR5Lkxvb2t1cEVkaXRvcjtcclxuICAgICAgICBSb3dFcnJvckNvdW50OiBTZXJlbml0eS5JbnRlZ2VyRWRpdG9yO1xyXG4gICAgICAgIENvbHVtbkVycm9yQ291bnQ6IFNlcmVuaXR5LkludGVnZXJFZGl0b3I7XHJcbiAgICAgICAgS2V5VHlwZTogU2VyZW5pdHkuU3RyaW5nRWRpdG9yO1xyXG4gICAgICAgIEtleUNvbHVtbjogU2VyZW5pdHkuSW50ZWdlckVkaXRvcjtcclxuICAgICAgICBNYXRjaE9uTGFiZWxzOiBTZXJlbml0eS5Cb29sZWFuRWRpdG9yO1xyXG4gICAgICAgIE1hdGNoT25GaWVsZE5hbWVzOiBTZXJlbml0eS5Cb29sZWFuRWRpdG9yO1xyXG4gICAgICAgIEZpZWxkTWF0Y2hEaXNwbGF5OiBTZXJlbml0eS5UZXh0QXJlYUVkaXRvcjtcclxuICAgICAgICBGaWVsZE1hdGNoTGlzdDogU2VyZW5pdHkuU3RyaW5nRWRpdG9yO1xyXG4gICAgICAgIEFyY2hpdmVGb2xkZXI6IFNlcmVuaXR5LlN0cmluZ0VkaXRvcjtcclxuICAgICAgICBTb3VyY2VEaXJlY3Rvcnk6IFNlcmVuaXR5LlN0cmluZ0VkaXRvcjtcclxuICAgICAgICBMYXN0UnVuRGF0ZTogU2VyZW5pdHkuRGF0ZVRpbWVFZGl0b3I7XHJcbiAgICAgICAgRXJyb3JMaXN0OiBTZXJlbml0eS5UZXh0QXJlYUVkaXRvcjtcclxuICAgIH1cclxuXHJcbiAgICBleHBvcnQgY2xhc3MgSW1wb3J0V2l6YXJkRm9ybSBleHRlbmRzIFNlcmVuaXR5LlByZWZpeGVkQ29udGV4dCB7XHJcbiAgICAgICAgc3RhdGljIGZvcm1LZXkgPSAnQ29tbW9uLkltcG9ydFdpemFyZCc7XHJcbiAgICAgICAgcHJpdmF0ZSBzdGF0aWMgaW5pdDogYm9vbGVhbjtcclxuXHJcbiAgICAgICAgY29uc3RydWN0b3IocHJlZml4OiBzdHJpbmcpIHtcclxuICAgICAgICAgICAgc3VwZXIocHJlZml4KTtcclxuXHJcbiAgICAgICAgICAgIGlmICghSW1wb3J0V2l6YXJkRm9ybS5pbml0KSAge1xyXG4gICAgICAgICAgICAgICAgSW1wb3J0V2l6YXJkRm9ybS5pbml0ID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgcyA9IFNlcmVuaXR5O1xyXG4gICAgICAgICAgICAgICAgdmFyIHcwID0gcy5JbnRlZ2VyRWRpdG9yO1xyXG4gICAgICAgICAgICAgICAgdmFyIHcxID0gcy5TdHJpbmdFZGl0b3I7XHJcbiAgICAgICAgICAgICAgICB2YXIgdzIgPSBzLkxvb2t1cEVkaXRvcjtcclxuICAgICAgICAgICAgICAgIHZhciB3MyA9IHMuTXVsdGlwbGVJbWFnZVVwbG9hZEVkaXRvcjtcclxuICAgICAgICAgICAgICAgIHZhciB3NCA9IHMuUmFkaW9CdXR0b25FZGl0b3I7XHJcbiAgICAgICAgICAgICAgICB2YXIgdzUgPSBzLkJvb2xlYW5FZGl0b3I7XHJcbiAgICAgICAgICAgICAgICB2YXIgdzYgPSBzLlRleHRBcmVhRWRpdG9yO1xyXG4gICAgICAgICAgICAgICAgdmFyIHc3ID0gcy5EYXRlVGltZUVkaXRvcjtcclxuXHJcbiAgICAgICAgICAgICAgICBRLmluaXRGb3JtVHlwZShJbXBvcnRXaXphcmRGb3JtLCBbXHJcbiAgICAgICAgICAgICAgICAgICAgJ0ltcG9ydFdpemFyZElkJywgdzAsXHJcbiAgICAgICAgICAgICAgICAgICAgJ0Rlc2NyaXB0aW9uJywgdzEsXHJcbiAgICAgICAgICAgICAgICAgICAgJ0ltcG9ydFR5cGVJZCcsIHcyLFxyXG4gICAgICAgICAgICAgICAgICAgICdUYXJnZXREYXRhYmFzZScsIHcyLFxyXG4gICAgICAgICAgICAgICAgICAgICdJbXBvcnRGaWxlTGlzdCcsIHczLFxyXG4gICAgICAgICAgICAgICAgICAgICdTdGFydEF0Um93JywgdzAsXHJcbiAgICAgICAgICAgICAgICAgICAgJ0VuZEF0Um93JywgdzAsXHJcbiAgICAgICAgICAgICAgICAgICAgJ0ZpZWxkRGVsaW1pdGVySWQnLCB3NCxcclxuICAgICAgICAgICAgICAgICAgICAnSW1wb3J0U291cmNlSWQnLCB3MixcclxuICAgICAgICAgICAgICAgICAgICAnUm93RXJyb3JDb3VudCcsIHcwLFxyXG4gICAgICAgICAgICAgICAgICAgICdDb2x1bW5FcnJvckNvdW50JywgdzAsXHJcbiAgICAgICAgICAgICAgICAgICAgJ0tleVR5cGUnLCB3MSxcclxuICAgICAgICAgICAgICAgICAgICAnS2V5Q29sdW1uJywgdzAsXHJcbiAgICAgICAgICAgICAgICAgICAgJ01hdGNoT25MYWJlbHMnLCB3NSxcclxuICAgICAgICAgICAgICAgICAgICAnTWF0Y2hPbkZpZWxkTmFtZXMnLCB3NSxcclxuICAgICAgICAgICAgICAgICAgICAnRmllbGRNYXRjaERpc3BsYXknLCB3NixcclxuICAgICAgICAgICAgICAgICAgICAnRmllbGRNYXRjaExpc3QnLCB3MSxcclxuICAgICAgICAgICAgICAgICAgICAnQXJjaGl2ZUZvbGRlcicsIHcxLFxyXG4gICAgICAgICAgICAgICAgICAgICdTb3VyY2VEaXJlY3RvcnknLCB3MSxcclxuICAgICAgICAgICAgICAgICAgICAnTGFzdFJ1bkRhdGUnLCB3NyxcclxuICAgICAgICAgICAgICAgICAgICAnRXJyb3JMaXN0JywgdzZcclxuICAgICAgICAgICAgICAgIF0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsIm5hbWVzcGFjZSBZYXhpZS5Db21tb24ge1xyXG4gICAgZXhwb3J0IGludGVyZmFjZSBJbXBvcnRXaXphcmRSb3cge1xyXG4gICAgICAgIEltcG9ydFdpemFyZElkPzogbnVtYmVyO1xyXG4gICAgICAgIEltcG9ydFR5cGVJZD86IG51bWJlcjtcclxuICAgICAgICBJbXBvcnRTb3VyY2VJZD86IG51bWJlcjtcclxuICAgICAgICBEZXNjcmlwdGlvbj86IHN0cmluZztcclxuICAgICAgICBMYXN0UnVuRGF0ZT86IHN0cmluZztcclxuICAgICAgICBGaWVsZERlbGltaXRlcklkPzogbnVtYmVyO1xyXG4gICAgICAgIFN0YXJ0QXRSb3c/OiBudW1iZXI7XHJcbiAgICAgICAgRW5kQXRSb3c/OiBudW1iZXI7XHJcbiAgICAgICAgUm93RXJyb3JDb3VudD86IG51bWJlcjtcclxuICAgICAgICBDb2x1bW5FcnJvckNvdW50PzogbnVtYmVyO1xyXG4gICAgICAgIEtleVR5cGU/OiBzdHJpbmc7XHJcbiAgICAgICAgS2V5Q29sdW1uPzogbnVtYmVyO1xyXG4gICAgICAgIE1hdGNoT25MYWJlbHM/OiBib29sZWFuO1xyXG4gICAgICAgIE1hdGNoT25GaWVsZE5hbWVzPzogYm9vbGVhbjtcclxuICAgICAgICBBcmNoaXZlRm9sZGVyPzogc3RyaW5nO1xyXG4gICAgICAgIFNvdXJjZURpcmVjdG9yeT86IHN0cmluZztcclxuICAgICAgICBUYXJnZXREYXRhYmFzZT86IHN0cmluZztcclxuICAgICAgICBFcnJvckxpc3Q/OiBzdHJpbmc7XHJcbiAgICAgICAgSW1wb3J0RmlsZUxpc3Q/OiBzdHJpbmc7XHJcbiAgICAgICAgRmllbGRNYXRjaExpc3Q/OiBzdHJpbmc7XHJcbiAgICAgICAgRmllbGRNYXRjaERpc3BsYXk/OiBzdHJpbmc7XHJcbiAgICAgICAgTm90ZUxpc3Q/OiBOb3RlUm93W107XHJcbiAgICAgICAgSW1wb3J0VHlwZURlc2NyaXB0aW9uPzogc3RyaW5nO1xyXG4gICAgfVxyXG5cclxuICAgIGV4cG9ydCBuYW1lc3BhY2UgSW1wb3J0V2l6YXJkUm93IHtcclxuICAgICAgICBleHBvcnQgY29uc3QgaWRQcm9wZXJ0eSA9ICdJbXBvcnRXaXphcmRJZCc7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IG5hbWVQcm9wZXJ0eSA9ICdEZXNjcmlwdGlvbic7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IGxvY2FsVGV4dFByZWZpeCA9ICdDb21tb24uSW1wb3J0V2l6YXJkJztcclxuICAgICAgICBleHBvcnQgY29uc3QgbG9va3VwS2V5ID0gJ0NvbW1vbi5JbXBvcnRXaXphcmQnO1xyXG5cclxuICAgICAgICBleHBvcnQgZnVuY3Rpb24gZ2V0TG9va3VwKCk6IFEuTG9va3VwPEltcG9ydFdpemFyZFJvdz4ge1xyXG4gICAgICAgICAgICByZXR1cm4gUS5nZXRMb29rdXA8SW1wb3J0V2l6YXJkUm93PignQ29tbW9uLkltcG9ydFdpemFyZCcpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBleHBvcnQgY29uc3QgZGVsZXRlUGVybWlzc2lvbiA9ICdBZG1pbmlzdHJhdGlvbjpHZW5lcmFsJztcclxuICAgICAgICBleHBvcnQgY29uc3QgaW5zZXJ0UGVybWlzc2lvbiA9ICdBZG1pbmlzdHJhdGlvbjpHZW5lcmFsJztcclxuICAgICAgICBleHBvcnQgY29uc3QgcmVhZFBlcm1pc3Npb24gPSAnQWRtaW5pc3RyYXRpb246R2VuZXJhbCc7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IHVwZGF0ZVBlcm1pc3Npb24gPSAnQWRtaW5pc3RyYXRpb246R2VuZXJhbCc7XHJcblxyXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGNvbnN0IGVudW0gRmllbGRzIHtcclxuICAgICAgICAgICAgSW1wb3J0V2l6YXJkSWQgPSBcIkltcG9ydFdpemFyZElkXCIsXHJcbiAgICAgICAgICAgIEltcG9ydFR5cGVJZCA9IFwiSW1wb3J0VHlwZUlkXCIsXHJcbiAgICAgICAgICAgIEltcG9ydFNvdXJjZUlkID0gXCJJbXBvcnRTb3VyY2VJZFwiLFxyXG4gICAgICAgICAgICBEZXNjcmlwdGlvbiA9IFwiRGVzY3JpcHRpb25cIixcclxuICAgICAgICAgICAgTGFzdFJ1bkRhdGUgPSBcIkxhc3RSdW5EYXRlXCIsXHJcbiAgICAgICAgICAgIEZpZWxkRGVsaW1pdGVySWQgPSBcIkZpZWxkRGVsaW1pdGVySWRcIixcclxuICAgICAgICAgICAgU3RhcnRBdFJvdyA9IFwiU3RhcnRBdFJvd1wiLFxyXG4gICAgICAgICAgICBFbmRBdFJvdyA9IFwiRW5kQXRSb3dcIixcclxuICAgICAgICAgICAgUm93RXJyb3JDb3VudCA9IFwiUm93RXJyb3JDb3VudFwiLFxyXG4gICAgICAgICAgICBDb2x1bW5FcnJvckNvdW50ID0gXCJDb2x1bW5FcnJvckNvdW50XCIsXHJcbiAgICAgICAgICAgIEtleVR5cGUgPSBcIktleVR5cGVcIixcclxuICAgICAgICAgICAgS2V5Q29sdW1uID0gXCJLZXlDb2x1bW5cIixcclxuICAgICAgICAgICAgTWF0Y2hPbkxhYmVscyA9IFwiTWF0Y2hPbkxhYmVsc1wiLFxyXG4gICAgICAgICAgICBNYXRjaE9uRmllbGROYW1lcyA9IFwiTWF0Y2hPbkZpZWxkTmFtZXNcIixcclxuICAgICAgICAgICAgQXJjaGl2ZUZvbGRlciA9IFwiQXJjaGl2ZUZvbGRlclwiLFxyXG4gICAgICAgICAgICBTb3VyY2VEaXJlY3RvcnkgPSBcIlNvdXJjZURpcmVjdG9yeVwiLFxyXG4gICAgICAgICAgICBUYXJnZXREYXRhYmFzZSA9IFwiVGFyZ2V0RGF0YWJhc2VcIixcclxuICAgICAgICAgICAgRXJyb3JMaXN0ID0gXCJFcnJvckxpc3RcIixcclxuICAgICAgICAgICAgSW1wb3J0RmlsZUxpc3QgPSBcIkltcG9ydEZpbGVMaXN0XCIsXHJcbiAgICAgICAgICAgIEZpZWxkTWF0Y2hMaXN0ID0gXCJGaWVsZE1hdGNoTGlzdFwiLFxyXG4gICAgICAgICAgICBGaWVsZE1hdGNoRGlzcGxheSA9IFwiRmllbGRNYXRjaERpc3BsYXlcIixcclxuICAgICAgICAgICAgTm90ZUxpc3QgPSBcIk5vdGVMaXN0XCIsXHJcbiAgICAgICAgICAgIEltcG9ydFR5cGVEZXNjcmlwdGlvbiA9IFwiSW1wb3J0VHlwZURlc2NyaXB0aW9uXCJcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwibmFtZXNwYWNlIFlheGllLkNvbW1vbiB7XHJcbiAgICBleHBvcnQgbmFtZXNwYWNlIEltcG9ydFdpemFyZFNlcnZpY2Uge1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCBiYXNlVXJsID0gJ0NvbW1vbi9JbXBvcnRXaXphcmQnO1xyXG5cclxuICAgICAgICBleHBvcnQgZGVjbGFyZSBmdW5jdGlvbiBDcmVhdGUocmVxdWVzdDogU2VyZW5pdHkuU2F2ZVJlcXVlc3Q8SW1wb3J0V2l6YXJkUm93Piwgb25TdWNjZXNzPzogKHJlc3BvbnNlOiBTZXJlbml0eS5TYXZlUmVzcG9uc2UpID0+IHZvaWQsIG9wdD86IFEuU2VydmljZU9wdGlvbnM8YW55Pik6IEpRdWVyeVhIUjtcclxuICAgICAgICBleHBvcnQgZGVjbGFyZSBmdW5jdGlvbiBVcGRhdGUocmVxdWVzdDogU2VyZW5pdHkuU2F2ZVJlcXVlc3Q8SW1wb3J0V2l6YXJkUm93Piwgb25TdWNjZXNzPzogKHJlc3BvbnNlOiBTZXJlbml0eS5TYXZlUmVzcG9uc2UpID0+IHZvaWQsIG9wdD86IFEuU2VydmljZU9wdGlvbnM8YW55Pik6IEpRdWVyeVhIUjtcclxuICAgICAgICBleHBvcnQgZGVjbGFyZSBmdW5jdGlvbiBEZWxldGUocmVxdWVzdDogU2VyZW5pdHkuRGVsZXRlUmVxdWVzdCwgb25TdWNjZXNzPzogKHJlc3BvbnNlOiBTZXJlbml0eS5EZWxldGVSZXNwb25zZSkgPT4gdm9pZCwgb3B0PzogUS5TZXJ2aWNlT3B0aW9uczxhbnk+KTogSlF1ZXJ5WEhSO1xyXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGZ1bmN0aW9uIFJldHJpZXZlKHJlcXVlc3Q6IFNlcmVuaXR5LlJldHJpZXZlUmVxdWVzdCwgb25TdWNjZXNzPzogKHJlc3BvbnNlOiBTZXJlbml0eS5SZXRyaWV2ZVJlc3BvbnNlPEltcG9ydFdpemFyZFJvdz4pID0+IHZvaWQsIG9wdD86IFEuU2VydmljZU9wdGlvbnM8YW55Pik6IEpRdWVyeVhIUjtcclxuICAgICAgICBleHBvcnQgZGVjbGFyZSBmdW5jdGlvbiBMaXN0KHJlcXVlc3Q6IFNlcmVuaXR5Lkxpc3RSZXF1ZXN0LCBvblN1Y2Nlc3M/OiAocmVzcG9uc2U6IFNlcmVuaXR5Lkxpc3RSZXNwb25zZTxJbXBvcnRXaXphcmRSb3c+KSA9PiB2b2lkLCBvcHQ/OiBRLlNlcnZpY2VPcHRpb25zPGFueT4pOiBKUXVlcnlYSFI7XHJcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgZnVuY3Rpb24gR2V0VGFibGVIZWFkZXJzKHJlcXVlc3Q6IEdldFRhYmxlSGVhZGVyTGlzdFJlcXVlc3QsIG9uU3VjY2Vzcz86IChyZXNwb25zZTogU2VyZW5pdHkuTGlzdFJlc3BvbnNlPFRhYmxlRmllbGRJbmZvPikgPT4gdm9pZCwgb3B0PzogUS5TZXJ2aWNlT3B0aW9uczxhbnk+KTogSlF1ZXJ5WEhSO1xyXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGZ1bmN0aW9uIEdldEV4Y2VsQ29sdW1uTGlzdChyZXF1ZXN0OiBHZXRFeGNlbENvbHVtbkxpc3RSZXF1ZXN0LCBvblN1Y2Nlc3M/OiAocmVzcG9uc2U6IFNlcmVuaXR5Lkxpc3RSZXNwb25zZTxzdHJpbmc+KSA9PiB2b2lkLCBvcHQ/OiBRLlNlcnZpY2VPcHRpb25zPGFueT4pOiBKUXVlcnlYSFI7XHJcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgZnVuY3Rpb24gU2VyaWFsaXplTGlzdChyZXF1ZXN0OiBTZXJpYWxpemVMaXN0UmVxdWVzdCwgb25TdWNjZXNzPzogKHJlc3BvbnNlOiBTZXJpYWxpemVMaXN0UmVzcG9uc2UpID0+IHZvaWQsIG9wdD86IFEuU2VydmljZU9wdGlvbnM8YW55Pik6IEpRdWVyeVhIUjtcclxuICAgICAgICBleHBvcnQgZGVjbGFyZSBmdW5jdGlvbiBFeGNlbEltcG9ydChyZXF1ZXN0OiBFeGNlbEltcG9ydFJlcXVlc3QsIG9uU3VjY2Vzcz86IChyZXNwb25zZTogRXhjZWxJbXBvcnRSZXNwb25zZSkgPT4gdm9pZCwgb3B0PzogUS5TZXJ2aWNlT3B0aW9uczxhbnk+KTogSlF1ZXJ5WEhSO1xyXG5cclxuICAgICAgICBleHBvcnQgZGVjbGFyZSBjb25zdCBlbnVtIE1ldGhvZHMge1xyXG4gICAgICAgICAgICBDcmVhdGUgPSBcIkNvbW1vbi9JbXBvcnRXaXphcmQvQ3JlYXRlXCIsXHJcbiAgICAgICAgICAgIFVwZGF0ZSA9IFwiQ29tbW9uL0ltcG9ydFdpemFyZC9VcGRhdGVcIixcclxuICAgICAgICAgICAgRGVsZXRlID0gXCJDb21tb24vSW1wb3J0V2l6YXJkL0RlbGV0ZVwiLFxyXG4gICAgICAgICAgICBSZXRyaWV2ZSA9IFwiQ29tbW9uL0ltcG9ydFdpemFyZC9SZXRyaWV2ZVwiLFxyXG4gICAgICAgICAgICBMaXN0ID0gXCJDb21tb24vSW1wb3J0V2l6YXJkL0xpc3RcIixcclxuICAgICAgICAgICAgR2V0VGFibGVIZWFkZXJzID0gXCJDb21tb24vSW1wb3J0V2l6YXJkL0dldFRhYmxlSGVhZGVyc1wiLFxyXG4gICAgICAgICAgICBHZXRFeGNlbENvbHVtbkxpc3QgPSBcIkNvbW1vbi9JbXBvcnRXaXphcmQvR2V0RXhjZWxDb2x1bW5MaXN0XCIsXHJcbiAgICAgICAgICAgIFNlcmlhbGl6ZUxpc3QgPSBcIkNvbW1vbi9JbXBvcnRXaXphcmQvU2VyaWFsaXplTGlzdFwiLFxyXG4gICAgICAgICAgICBFeGNlbEltcG9ydCA9IFwiQ29tbW9uL0ltcG9ydFdpemFyZC9FeGNlbEltcG9ydFwiXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBbXHJcbiAgICAgICAgICAgICdDcmVhdGUnLCBcclxuICAgICAgICAgICAgJ1VwZGF0ZScsIFxyXG4gICAgICAgICAgICAnRGVsZXRlJywgXHJcbiAgICAgICAgICAgICdSZXRyaWV2ZScsIFxyXG4gICAgICAgICAgICAnTGlzdCcsIFxyXG4gICAgICAgICAgICAnR2V0VGFibGVIZWFkZXJzJywgXHJcbiAgICAgICAgICAgICdHZXRFeGNlbENvbHVtbkxpc3QnLCBcclxuICAgICAgICAgICAgJ1NlcmlhbGl6ZUxpc3QnLCBcclxuICAgICAgICAgICAgJ0V4Y2VsSW1wb3J0J1xyXG4gICAgICAgIF0uZm9yRWFjaCh4ID0+IHtcclxuICAgICAgICAgICAgKDxhbnk+SW1wb3J0V2l6YXJkU2VydmljZSlbeF0gPSBmdW5jdGlvbiAociwgcywgbykge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFEuc2VydmljZVJlcXVlc3QoYmFzZVVybCArICcvJyArIHgsIHIsIHMsIG8pO1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcbiIsIm5hbWVzcGFjZSBZYXhpZS5Db21tb24ge1xyXG59XHJcbiIsIm5hbWVzcGFjZSBZYXhpZS5Db21tb24ge1xyXG4gICAgZXhwb3J0IGludGVyZmFjZSBOb3RlRm9ybSB7XHJcbiAgICAgICAgRW50aXR5VHlwZTogU2VyZW5pdHkuU3RyaW5nRWRpdG9yO1xyXG4gICAgICAgIEVudGl0eUlkOiBTZXJlbml0eS5TdHJpbmdFZGl0b3I7XHJcbiAgICAgICAgTm90ZVRleHQ6IFNlcmVuaXR5LlN0cmluZ0VkaXRvcjtcclxuICAgICAgICBJbnNlcnRVc2VySWQ6IFNlcmVuaXR5LkludGVnZXJFZGl0b3I7XHJcbiAgICAgICAgSW5zZXJ0RGF0ZTogU2VyZW5pdHkuRGF0ZUVkaXRvcjtcclxuICAgICAgICBJbnNlcnRVc2VyRGlzcGxheU5hbWU6IFNlcmVuaXR5LlN0cmluZ0VkaXRvcjtcclxuICAgIH1cclxuXHJcbiAgICBleHBvcnQgY2xhc3MgTm90ZUZvcm0gZXh0ZW5kcyBTZXJlbml0eS5QcmVmaXhlZENvbnRleHQge1xyXG4gICAgICAgIHN0YXRpYyBmb3JtS2V5ID0gJ0NvbW1vbi5Ob3RlJztcclxuICAgICAgICBwcml2YXRlIHN0YXRpYyBpbml0OiBib29sZWFuO1xyXG5cclxuICAgICAgICBjb25zdHJ1Y3RvcihwcmVmaXg6IHN0cmluZykge1xyXG4gICAgICAgICAgICBzdXBlcihwcmVmaXgpO1xyXG5cclxuICAgICAgICAgICAgaWYgKCFOb3RlRm9ybS5pbml0KSAge1xyXG4gICAgICAgICAgICAgICAgTm90ZUZvcm0uaW5pdCA9IHRydWU7XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIHMgPSBTZXJlbml0eTtcclxuICAgICAgICAgICAgICAgIHZhciB3MCA9IHMuU3RyaW5nRWRpdG9yO1xyXG4gICAgICAgICAgICAgICAgdmFyIHcxID0gcy5JbnRlZ2VyRWRpdG9yO1xyXG4gICAgICAgICAgICAgICAgdmFyIHcyID0gcy5EYXRlRWRpdG9yO1xyXG5cclxuICAgICAgICAgICAgICAgIFEuaW5pdEZvcm1UeXBlKE5vdGVGb3JtLCBbXHJcbiAgICAgICAgICAgICAgICAgICAgJ0VudGl0eVR5cGUnLCB3MCxcclxuICAgICAgICAgICAgICAgICAgICAnRW50aXR5SWQnLCB3MCxcclxuICAgICAgICAgICAgICAgICAgICAnTm90ZVRleHQnLCB3MCxcclxuICAgICAgICAgICAgICAgICAgICAnSW5zZXJ0VXNlcklkJywgdzEsXHJcbiAgICAgICAgICAgICAgICAgICAgJ0luc2VydERhdGUnLCB3MixcclxuICAgICAgICAgICAgICAgICAgICAnSW5zZXJ0VXNlckRpc3BsYXlOYW1lJywgdzBcclxuICAgICAgICAgICAgICAgIF0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsIm5hbWVzcGFjZSBZYXhpZS5Db21tb24ge1xyXG4gICAgZXhwb3J0IGludGVyZmFjZSBOb3RlUm93IHtcclxuICAgICAgICBOb3RlSWQ/OiBudW1iZXI7XHJcbiAgICAgICAgRW50aXR5VHlwZT86IHN0cmluZztcclxuICAgICAgICBFbnRpdHlJZD86IG51bWJlcjtcclxuICAgICAgICBOb3RlVGV4dD86IHN0cmluZztcclxuICAgICAgICBJbnNlcnRVc2VySWQ/OiBudW1iZXI7XHJcbiAgICAgICAgSW5zZXJ0RGF0ZT86IHN0cmluZztcclxuICAgICAgICBJbnNlcnRVc2VyRGlzcGxheU5hbWU/OiBzdHJpbmc7XHJcbiAgICB9XHJcblxyXG4gICAgZXhwb3J0IG5hbWVzcGFjZSBOb3RlUm93IHtcclxuICAgICAgICBleHBvcnQgY29uc3QgaWRQcm9wZXJ0eSA9ICdOb3RlSWQnO1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCBuYW1lUHJvcGVydHkgPSAnRW50aXR5VHlwZSc7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IGxvY2FsVGV4dFByZWZpeCA9ICdDb21tb24uTm90ZSc7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IGRlbGV0ZVBlcm1pc3Npb24gPSAnQWRtaW5pc3RyYXRpb246R2VuZXJhbCc7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IGluc2VydFBlcm1pc3Npb24gPSAnQWRtaW5pc3RyYXRpb246R2VuZXJhbCc7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IHJlYWRQZXJtaXNzaW9uID0gJ0FkbWluaXN0cmF0aW9uOkdlbmVyYWwnO1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCB1cGRhdGVQZXJtaXNzaW9uID0gJ0FkbWluaXN0cmF0aW9uOkdlbmVyYWwnO1xyXG5cclxuICAgICAgICBleHBvcnQgZGVjbGFyZSBjb25zdCBlbnVtIEZpZWxkcyB7XHJcbiAgICAgICAgICAgIE5vdGVJZCA9IFwiTm90ZUlkXCIsXHJcbiAgICAgICAgICAgIEVudGl0eVR5cGUgPSBcIkVudGl0eVR5cGVcIixcclxuICAgICAgICAgICAgRW50aXR5SWQgPSBcIkVudGl0eUlkXCIsXHJcbiAgICAgICAgICAgIE5vdGVUZXh0ID0gXCJOb3RlVGV4dFwiLFxyXG4gICAgICAgICAgICBJbnNlcnRVc2VySWQgPSBcIkluc2VydFVzZXJJZFwiLFxyXG4gICAgICAgICAgICBJbnNlcnREYXRlID0gXCJJbnNlcnREYXRlXCIsXHJcbiAgICAgICAgICAgIEluc2VydFVzZXJEaXNwbGF5TmFtZSA9IFwiSW5zZXJ0VXNlckRpc3BsYXlOYW1lXCJcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwibmFtZXNwYWNlIFlheGllLkNvbW1vbiB7XHJcbiAgICBleHBvcnQgbmFtZXNwYWNlIE5vdGVTZXJ2aWNlIHtcclxuICAgICAgICBleHBvcnQgY29uc3QgYmFzZVVybCA9ICdDb21tb24vTm90ZSc7XHJcblxyXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGZ1bmN0aW9uIENyZWF0ZShyZXF1ZXN0OiBTZXJlbml0eS5TYXZlUmVxdWVzdDxOb3RlUm93Piwgb25TdWNjZXNzPzogKHJlc3BvbnNlOiBTZXJlbml0eS5TYXZlUmVzcG9uc2UpID0+IHZvaWQsIG9wdD86IFEuU2VydmljZU9wdGlvbnM8YW55Pik6IEpRdWVyeVhIUjtcclxuICAgICAgICBleHBvcnQgZGVjbGFyZSBmdW5jdGlvbiBVcGRhdGUocmVxdWVzdDogU2VyZW5pdHkuU2F2ZVJlcXVlc3Q8Tm90ZVJvdz4sIG9uU3VjY2Vzcz86IChyZXNwb25zZTogU2VyZW5pdHkuU2F2ZVJlc3BvbnNlKSA9PiB2b2lkLCBvcHQ/OiBRLlNlcnZpY2VPcHRpb25zPGFueT4pOiBKUXVlcnlYSFI7XHJcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgZnVuY3Rpb24gRGVsZXRlKHJlcXVlc3Q6IFNlcmVuaXR5LkRlbGV0ZVJlcXVlc3QsIG9uU3VjY2Vzcz86IChyZXNwb25zZTogU2VyZW5pdHkuRGVsZXRlUmVzcG9uc2UpID0+IHZvaWQsIG9wdD86IFEuU2VydmljZU9wdGlvbnM8YW55Pik6IEpRdWVyeVhIUjtcclxuICAgICAgICBleHBvcnQgZGVjbGFyZSBmdW5jdGlvbiBSZXRyaWV2ZShyZXF1ZXN0OiBTZXJlbml0eS5SZXRyaWV2ZVJlcXVlc3QsIG9uU3VjY2Vzcz86IChyZXNwb25zZTogU2VyZW5pdHkuUmV0cmlldmVSZXNwb25zZTxOb3RlUm93PikgPT4gdm9pZCwgb3B0PzogUS5TZXJ2aWNlT3B0aW9uczxhbnk+KTogSlF1ZXJ5WEhSO1xyXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGZ1bmN0aW9uIExpc3QocmVxdWVzdDogU2VyZW5pdHkuTGlzdFJlcXVlc3QsIG9uU3VjY2Vzcz86IChyZXNwb25zZTogU2VyZW5pdHkuTGlzdFJlc3BvbnNlPE5vdGVSb3c+KSA9PiB2b2lkLCBvcHQ/OiBRLlNlcnZpY2VPcHRpb25zPGFueT4pOiBKUXVlcnlYSFI7XHJcblxyXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGNvbnN0IGVudW0gTWV0aG9kcyB7XHJcbiAgICAgICAgICAgIENyZWF0ZSA9IFwiQ29tbW9uL05vdGUvQ3JlYXRlXCIsXHJcbiAgICAgICAgICAgIFVwZGF0ZSA9IFwiQ29tbW9uL05vdGUvVXBkYXRlXCIsXHJcbiAgICAgICAgICAgIERlbGV0ZSA9IFwiQ29tbW9uL05vdGUvRGVsZXRlXCIsXHJcbiAgICAgICAgICAgIFJldHJpZXZlID0gXCJDb21tb24vTm90ZS9SZXRyaWV2ZVwiLFxyXG4gICAgICAgICAgICBMaXN0ID0gXCJDb21tb24vTm90ZS9MaXN0XCJcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIFtcclxuICAgICAgICAgICAgJ0NyZWF0ZScsIFxyXG4gICAgICAgICAgICAnVXBkYXRlJywgXHJcbiAgICAgICAgICAgICdEZWxldGUnLCBcclxuICAgICAgICAgICAgJ1JldHJpZXZlJywgXHJcbiAgICAgICAgICAgICdMaXN0J1xyXG4gICAgICAgIF0uZm9yRWFjaCh4ID0+IHtcclxuICAgICAgICAgICAgKDxhbnk+Tm90ZVNlcnZpY2UpW3hdID0gZnVuY3Rpb24gKHIsIHMsIG8pIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBRLnNlcnZpY2VSZXF1ZXN0KGJhc2VVcmwgKyAnLycgKyB4LCByLCBzLCBvKTtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG4iLCJuYW1lc3BhY2UgWWF4aWUuQ29tbW9uIHtcclxuICAgIGV4cG9ydCBpbnRlcmZhY2UgU2VyaWFsaXplTGlzdFJlcXVlc3QgZXh0ZW5kcyBTZXJlbml0eS5MaXN0UmVxdWVzdCB7XHJcbiAgICAgICAgRHJvcENvbHVtbkxpc3Q/OiBzdHJpbmdbXTtcclxuICAgICAgICBUYWJsZU5hbWU/OiBzdHJpbmc7XHJcbiAgICB9XHJcbn1cclxuIiwibmFtZXNwYWNlIFlheGllLkNvbW1vbiB7XHJcbiAgICBleHBvcnQgaW50ZXJmYWNlIFNlcmlhbGl6ZUxpc3RSZXNwb25zZSBleHRlbmRzIFNlcmVuaXR5Lkxpc3RSZXNwb25zZTxzdHJpbmc+IHtcclxuICAgICAgICBGaWVsZE1hdGNoSnNvbj86IHN0cmluZztcclxuICAgICAgICBGaWVsZE1hdGNoTGlzdD86IEZpZWxkTWF0Y2hbXTtcclxuICAgICAgICBGaWVsZE1hdGNoRGlzcGxheT86IHN0cmluZ1tdO1xyXG4gICAgfVxyXG59XHJcbiIsIm5hbWVzcGFjZSBZYXhpZS5Db21tb24ge1xyXG4gICAgZXhwb3J0IGludGVyZmFjZSBUYWJsZUZpZWxkSW5mbyB7XHJcbiAgICAgICAgTmFtZT86IHN0cmluZztcclxuICAgICAgICBUaXRsZT86IHN0cmluZztcclxuICAgICAgICBUeXBlPzogc3RyaW5nO1xyXG4gICAgICAgIENvbHVtbkFsaWFzPzogc3RyaW5nO1xyXG4gICAgICAgIENhcHRpb24/OiBzdHJpbmc7XHJcbiAgICAgICAgRGVmYXVsdFZhbHVlPzogYW55O1xyXG4gICAgICAgIFNpemU/OiBudW1iZXI7XHJcbiAgICB9XHJcbn1cclxuIiwibmFtZXNwYWNlIFlheGllLkNvbW1vbiB7XHJcbiAgICBleHBvcnQgaW50ZXJmYWNlIFVwbG9hZEZpbGVOYW1lcyB7XHJcbiAgICAgICAgT3JpZ2luYWxOYW1lPzogc3RyaW5nO1xyXG4gICAgICAgIEZpbGVuYW1lPzogc3RyaW5nO1xyXG4gICAgfVxyXG59XHJcbiIsIm5hbWVzcGFjZSBZYXhpZS5Db21tb24ge1xyXG4gICAgZXhwb3J0IGludGVyZmFjZSBVc2VyUHJlZmVyZW5jZVJldHJpZXZlUmVxdWVzdCBleHRlbmRzIFNlcmVuaXR5LlNlcnZpY2VSZXF1ZXN0IHtcclxuICAgICAgICBQcmVmZXJlbmNlVHlwZT86IHN0cmluZztcclxuICAgICAgICBOYW1lPzogc3RyaW5nO1xyXG4gICAgfVxyXG59XHJcblxyXG4iLCJuYW1lc3BhY2UgWWF4aWUuQ29tbW9uIHtcclxuICAgIGV4cG9ydCBpbnRlcmZhY2UgVXNlclByZWZlcmVuY2VSZXRyaWV2ZVJlc3BvbnNlIGV4dGVuZHMgU2VyZW5pdHkuU2VydmljZVJlc3BvbnNlIHtcclxuICAgICAgICBWYWx1ZT86IHN0cmluZztcclxuICAgIH1cclxufVxyXG5cclxuIiwibmFtZXNwYWNlIFlheGllLkNvbW1vbiB7XHJcbiAgICBleHBvcnQgaW50ZXJmYWNlIFVzZXJQcmVmZXJlbmNlUm93IHtcclxuICAgICAgICBVc2VyUHJlZmVyZW5jZUlkPzogbnVtYmVyO1xyXG4gICAgICAgIFVzZXJJZD86IG51bWJlcjtcclxuICAgICAgICBQcmVmZXJlbmNlVHlwZT86IHN0cmluZztcclxuICAgICAgICBOYW1lPzogc3RyaW5nO1xyXG4gICAgICAgIFZhbHVlPzogc3RyaW5nO1xyXG4gICAgfVxyXG5cclxuICAgIGV4cG9ydCBuYW1lc3BhY2UgVXNlclByZWZlcmVuY2VSb3cge1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCBpZFByb3BlcnR5ID0gJ1VzZXJQcmVmZXJlbmNlSWQnO1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCBuYW1lUHJvcGVydHkgPSAnTmFtZSc7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IGxvY2FsVGV4dFByZWZpeCA9ICdDb21tb24uVXNlclByZWZlcmVuY2UnO1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCBkZWxldGVQZXJtaXNzaW9uID0gJyc7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IGluc2VydFBlcm1pc3Npb24gPSAnJztcclxuICAgICAgICBleHBvcnQgY29uc3QgcmVhZFBlcm1pc3Npb24gPSAnJztcclxuICAgICAgICBleHBvcnQgY29uc3QgdXBkYXRlUGVybWlzc2lvbiA9ICcnO1xyXG5cclxuICAgICAgICBleHBvcnQgZGVjbGFyZSBjb25zdCBlbnVtIEZpZWxkcyB7XHJcbiAgICAgICAgICAgIFVzZXJQcmVmZXJlbmNlSWQgPSBcIlVzZXJQcmVmZXJlbmNlSWRcIixcclxuICAgICAgICAgICAgVXNlcklkID0gXCJVc2VySWRcIixcclxuICAgICAgICAgICAgUHJlZmVyZW5jZVR5cGUgPSBcIlByZWZlcmVuY2VUeXBlXCIsXHJcbiAgICAgICAgICAgIE5hbWUgPSBcIk5hbWVcIixcclxuICAgICAgICAgICAgVmFsdWUgPSBcIlZhbHVlXCJcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwibmFtZXNwYWNlIFlheGllLkNvbW1vbiB7XHJcbiAgICBleHBvcnQgbmFtZXNwYWNlIFVzZXJQcmVmZXJlbmNlU2VydmljZSB7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IGJhc2VVcmwgPSAnQ29tbW9uL1VzZXJQcmVmZXJlbmNlJztcclxuXHJcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgZnVuY3Rpb24gVXBkYXRlKHJlcXVlc3Q6IFVzZXJQcmVmZXJlbmNlVXBkYXRlUmVxdWVzdCwgb25TdWNjZXNzPzogKHJlc3BvbnNlOiBTZXJlbml0eS5TZXJ2aWNlUmVzcG9uc2UpID0+IHZvaWQsIG9wdD86IFEuU2VydmljZU9wdGlvbnM8YW55Pik6IEpRdWVyeVhIUjtcclxuICAgICAgICBleHBvcnQgZGVjbGFyZSBmdW5jdGlvbiBSZXRyaWV2ZShyZXF1ZXN0OiBVc2VyUHJlZmVyZW5jZVJldHJpZXZlUmVxdWVzdCwgb25TdWNjZXNzPzogKHJlc3BvbnNlOiBVc2VyUHJlZmVyZW5jZVJldHJpZXZlUmVzcG9uc2UpID0+IHZvaWQsIG9wdD86IFEuU2VydmljZU9wdGlvbnM8YW55Pik6IEpRdWVyeVhIUjtcclxuXHJcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgY29uc3QgZW51bSBNZXRob2RzIHtcclxuICAgICAgICAgICAgVXBkYXRlID0gXCJDb21tb24vVXNlclByZWZlcmVuY2UvVXBkYXRlXCIsXHJcbiAgICAgICAgICAgIFJldHJpZXZlID0gXCJDb21tb24vVXNlclByZWZlcmVuY2UvUmV0cmlldmVcIlxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgW1xyXG4gICAgICAgICAgICAnVXBkYXRlJywgXHJcbiAgICAgICAgICAgICdSZXRyaWV2ZSdcclxuICAgICAgICBdLmZvckVhY2goeCA9PiB7XHJcbiAgICAgICAgICAgICg8YW55PlVzZXJQcmVmZXJlbmNlU2VydmljZSlbeF0gPSBmdW5jdGlvbiAociwgcywgbykge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFEuc2VydmljZVJlcXVlc3QoYmFzZVVybCArICcvJyArIHgsIHIsIHMsIG8pO1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcbiIsIm5hbWVzcGFjZSBZYXhpZS5Db21tb24ge1xyXG4gICAgZXhwb3J0IGludGVyZmFjZSBVc2VyUHJlZmVyZW5jZVVwZGF0ZVJlcXVlc3QgZXh0ZW5kcyBTZXJlbml0eS5TZXJ2aWNlUmVxdWVzdCB7XHJcbiAgICAgICAgUHJlZmVyZW5jZVR5cGU/OiBzdHJpbmc7XHJcbiAgICAgICAgTmFtZT86IHN0cmluZztcclxuICAgICAgICBWYWx1ZT86IHN0cmluZztcclxuICAgIH1cclxufVxyXG5cclxuIiwibmFtZXNwYWNlIFlheGllIHtcclxuICAgIGV4cG9ydCBpbnRlcmZhY2UgRXhjZWxJbXBvcnRSZXF1ZXN0IGV4dGVuZHMgU2VyZW5pdHkuU2VydmljZVJlcXVlc3Qge1xyXG4gICAgICAgIEZpbGVOYW1lPzogc3RyaW5nO1xyXG4gICAgICAgIEltcG9ydFdpemFyZElEPzogbnVtYmVyO1xyXG4gICAgfVxyXG59XHJcbiIsIm5hbWVzcGFjZSBZYXhpZSB7XHJcbiAgICBleHBvcnQgaW50ZXJmYWNlIEV4Y2VsSW1wb3J0UmVzcG9uc2UgZXh0ZW5kcyBTZXJlbml0eS5TZXJ2aWNlUmVzcG9uc2Uge1xyXG4gICAgICAgIEluc2VydGVkPzogbnVtYmVyO1xyXG4gICAgICAgIFVwZGF0ZWQ/OiBudW1iZXI7XHJcbiAgICAgICAgRXJyb3JMaXN0Pzogc3RyaW5nW107XHJcbiAgICB9XHJcbn1cclxuXHJcbiIsIm5hbWVzcGFjZSBZYXhpZSB7XHJcbiAgICBleHBvcnQgaW50ZXJmYWNlIEdldE5leHROdW1iZXJSZXF1ZXN0IGV4dGVuZHMgU2VyZW5pdHkuU2VydmljZVJlcXVlc3Qge1xyXG4gICAgICAgIFByZWZpeD86IHN0cmluZztcclxuICAgICAgICBMZW5ndGg/OiBudW1iZXI7XHJcbiAgICB9XHJcbn1cclxuXHJcbiIsIm5hbWVzcGFjZSBZYXhpZSB7XHJcbiAgICBleHBvcnQgaW50ZXJmYWNlIEdldE5leHROdW1iZXJSZXNwb25zZSBleHRlbmRzIFNlcmVuaXR5LlNlcnZpY2VSZXNwb25zZSB7XHJcbiAgICAgICAgTnVtYmVyPzogbnVtYmVyO1xyXG4gICAgICAgIFNlcmlhbD86IHN0cmluZztcclxuICAgIH1cclxufVxyXG5cclxuIiwibmFtZXNwYWNlIFlheGllLk1lbWJlcnNoaXAge1xyXG4gICAgZXhwb3J0IGludGVyZmFjZSBDaGFuZ2VQYXNzd29yZEZvcm0ge1xyXG4gICAgICAgIE9sZFBhc3N3b3JkOiBTZXJlbml0eS5QYXNzd29yZEVkaXRvcjtcclxuICAgICAgICBOZXdQYXNzd29yZDogU2VyZW5pdHkuUGFzc3dvcmRFZGl0b3I7XHJcbiAgICAgICAgQ29uZmlybVBhc3N3b3JkOiBTZXJlbml0eS5QYXNzd29yZEVkaXRvcjtcclxuICAgIH1cclxuXHJcbiAgICBleHBvcnQgY2xhc3MgQ2hhbmdlUGFzc3dvcmRGb3JtIGV4dGVuZHMgU2VyZW5pdHkuUHJlZml4ZWRDb250ZXh0IHtcclxuICAgICAgICBzdGF0aWMgZm9ybUtleSA9ICdNZW1iZXJzaGlwLkNoYW5nZVBhc3N3b3JkJztcclxuICAgICAgICBwcml2YXRlIHN0YXRpYyBpbml0OiBib29sZWFuO1xyXG5cclxuICAgICAgICBjb25zdHJ1Y3RvcihwcmVmaXg6IHN0cmluZykge1xyXG4gICAgICAgICAgICBzdXBlcihwcmVmaXgpO1xyXG5cclxuICAgICAgICAgICAgaWYgKCFDaGFuZ2VQYXNzd29yZEZvcm0uaW5pdCkgIHtcclxuICAgICAgICAgICAgICAgIENoYW5nZVBhc3N3b3JkRm9ybS5pbml0ID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgcyA9IFNlcmVuaXR5O1xyXG4gICAgICAgICAgICAgICAgdmFyIHcwID0gcy5QYXNzd29yZEVkaXRvcjtcclxuXHJcbiAgICAgICAgICAgICAgICBRLmluaXRGb3JtVHlwZShDaGFuZ2VQYXNzd29yZEZvcm0sIFtcclxuICAgICAgICAgICAgICAgICAgICAnT2xkUGFzc3dvcmQnLCB3MCxcclxuICAgICAgICAgICAgICAgICAgICAnTmV3UGFzc3dvcmQnLCB3MCxcclxuICAgICAgICAgICAgICAgICAgICAnQ29uZmlybVBhc3N3b3JkJywgdzBcclxuICAgICAgICAgICAgICAgIF0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsIm5hbWVzcGFjZSBZYXhpZS5NZW1iZXJzaGlwIHtcclxuICAgIGV4cG9ydCBpbnRlcmZhY2UgQ2hhbmdlUGFzc3dvcmRSZXF1ZXN0IGV4dGVuZHMgU2VyZW5pdHkuU2VydmljZVJlcXVlc3Qge1xyXG4gICAgICAgIE9sZFBhc3N3b3JkPzogc3RyaW5nO1xyXG4gICAgICAgIE5ld1Bhc3N3b3JkPzogc3RyaW5nO1xyXG4gICAgICAgIENvbmZpcm1QYXNzd29yZD86IHN0cmluZztcclxuICAgIH1cclxufVxyXG5cclxuIiwibmFtZXNwYWNlIFlheGllLk1lbWJlcnNoaXAge1xyXG4gICAgZXhwb3J0IGludGVyZmFjZSBGb3Jnb3RQYXNzd29yZEZvcm0ge1xyXG4gICAgICAgIEVtYWlsOiBTZXJlbml0eS5FbWFpbEVkaXRvcjtcclxuICAgIH1cclxuXHJcbiAgICBleHBvcnQgY2xhc3MgRm9yZ290UGFzc3dvcmRGb3JtIGV4dGVuZHMgU2VyZW5pdHkuUHJlZml4ZWRDb250ZXh0IHtcclxuICAgICAgICBzdGF0aWMgZm9ybUtleSA9ICdNZW1iZXJzaGlwLkZvcmdvdFBhc3N3b3JkJztcclxuICAgICAgICBwcml2YXRlIHN0YXRpYyBpbml0OiBib29sZWFuO1xyXG5cclxuICAgICAgICBjb25zdHJ1Y3RvcihwcmVmaXg6IHN0cmluZykge1xyXG4gICAgICAgICAgICBzdXBlcihwcmVmaXgpO1xyXG5cclxuICAgICAgICAgICAgaWYgKCFGb3Jnb3RQYXNzd29yZEZvcm0uaW5pdCkgIHtcclxuICAgICAgICAgICAgICAgIEZvcmdvdFBhc3N3b3JkRm9ybS5pbml0ID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgcyA9IFNlcmVuaXR5O1xyXG4gICAgICAgICAgICAgICAgdmFyIHcwID0gcy5FbWFpbEVkaXRvcjtcclxuXHJcbiAgICAgICAgICAgICAgICBRLmluaXRGb3JtVHlwZShGb3Jnb3RQYXNzd29yZEZvcm0sIFtcclxuICAgICAgICAgICAgICAgICAgICAnRW1haWwnLCB3MFxyXG4gICAgICAgICAgICAgICAgXSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwibmFtZXNwYWNlIFlheGllLk1lbWJlcnNoaXAge1xyXG4gICAgZXhwb3J0IGludGVyZmFjZSBGb3Jnb3RQYXNzd29yZFJlcXVlc3QgZXh0ZW5kcyBTZXJlbml0eS5TZXJ2aWNlUmVxdWVzdCB7XHJcbiAgICAgICAgRW1haWw/OiBzdHJpbmc7XHJcbiAgICB9XHJcbn1cclxuXHJcbiIsIm5hbWVzcGFjZSBZYXhpZS5NZW1iZXJzaGlwIHtcclxuICAgIGV4cG9ydCBpbnRlcmZhY2UgTG9naW5Gb3JtIHtcclxuICAgICAgICBVc2VybmFtZTogU2VyZW5pdHkuU3RyaW5nRWRpdG9yO1xyXG4gICAgICAgIFBhc3N3b3JkOiBTZXJlbml0eS5QYXNzd29yZEVkaXRvcjtcclxuICAgIH1cclxuXHJcbiAgICBleHBvcnQgY2xhc3MgTG9naW5Gb3JtIGV4dGVuZHMgU2VyZW5pdHkuUHJlZml4ZWRDb250ZXh0IHtcclxuICAgICAgICBzdGF0aWMgZm9ybUtleSA9ICdNZW1iZXJzaGlwLkxvZ2luJztcclxuICAgICAgICBwcml2YXRlIHN0YXRpYyBpbml0OiBib29sZWFuO1xyXG5cclxuICAgICAgICBjb25zdHJ1Y3RvcihwcmVmaXg6IHN0cmluZykge1xyXG4gICAgICAgICAgICBzdXBlcihwcmVmaXgpO1xyXG5cclxuICAgICAgICAgICAgaWYgKCFMb2dpbkZvcm0uaW5pdCkgIHtcclxuICAgICAgICAgICAgICAgIExvZ2luRm9ybS5pbml0ID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgcyA9IFNlcmVuaXR5O1xyXG4gICAgICAgICAgICAgICAgdmFyIHcwID0gcy5TdHJpbmdFZGl0b3I7XHJcbiAgICAgICAgICAgICAgICB2YXIgdzEgPSBzLlBhc3N3b3JkRWRpdG9yO1xyXG5cclxuICAgICAgICAgICAgICAgIFEuaW5pdEZvcm1UeXBlKExvZ2luRm9ybSwgW1xyXG4gICAgICAgICAgICAgICAgICAgICdVc2VybmFtZScsIHcwLFxyXG4gICAgICAgICAgICAgICAgICAgICdQYXNzd29yZCcsIHcxXHJcbiAgICAgICAgICAgICAgICBdKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCJuYW1lc3BhY2UgWWF4aWUuTWVtYmVyc2hpcCB7XHJcbiAgICBleHBvcnQgaW50ZXJmYWNlIExvZ2luUmVxdWVzdCBleHRlbmRzIFNlcmVuaXR5LlNlcnZpY2VSZXF1ZXN0IHtcclxuICAgICAgICBVc2VybmFtZT86IHN0cmluZztcclxuICAgICAgICBQYXNzd29yZD86IHN0cmluZztcclxuICAgIH1cclxufVxyXG5cclxuIiwibmFtZXNwYWNlIFlheGllLk1lbWJlcnNoaXAge1xyXG4gICAgZXhwb3J0IGludGVyZmFjZSBSZXNldFBhc3N3b3JkRm9ybSB7XHJcbiAgICAgICAgTmV3UGFzc3dvcmQ6IFNlcmVuaXR5LlBhc3N3b3JkRWRpdG9yO1xyXG4gICAgICAgIENvbmZpcm1QYXNzd29yZDogU2VyZW5pdHkuUGFzc3dvcmRFZGl0b3I7XHJcbiAgICB9XHJcblxyXG4gICAgZXhwb3J0IGNsYXNzIFJlc2V0UGFzc3dvcmRGb3JtIGV4dGVuZHMgU2VyZW5pdHkuUHJlZml4ZWRDb250ZXh0IHtcclxuICAgICAgICBzdGF0aWMgZm9ybUtleSA9ICdNZW1iZXJzaGlwLlJlc2V0UGFzc3dvcmQnO1xyXG4gICAgICAgIHByaXZhdGUgc3RhdGljIGluaXQ6IGJvb2xlYW47XHJcblxyXG4gICAgICAgIGNvbnN0cnVjdG9yKHByZWZpeDogc3RyaW5nKSB7XHJcbiAgICAgICAgICAgIHN1cGVyKHByZWZpeCk7XHJcblxyXG4gICAgICAgICAgICBpZiAoIVJlc2V0UGFzc3dvcmRGb3JtLmluaXQpICB7XHJcbiAgICAgICAgICAgICAgICBSZXNldFBhc3N3b3JkRm9ybS5pbml0ID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgcyA9IFNlcmVuaXR5O1xyXG4gICAgICAgICAgICAgICAgdmFyIHcwID0gcy5QYXNzd29yZEVkaXRvcjtcclxuXHJcbiAgICAgICAgICAgICAgICBRLmluaXRGb3JtVHlwZShSZXNldFBhc3N3b3JkRm9ybSwgW1xyXG4gICAgICAgICAgICAgICAgICAgICdOZXdQYXNzd29yZCcsIHcwLFxyXG4gICAgICAgICAgICAgICAgICAgICdDb25maXJtUGFzc3dvcmQnLCB3MFxyXG4gICAgICAgICAgICAgICAgXSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwibmFtZXNwYWNlIFlheGllLk1lbWJlcnNoaXAge1xyXG4gICAgZXhwb3J0IGludGVyZmFjZSBSZXNldFBhc3N3b3JkUmVxdWVzdCBleHRlbmRzIFNlcmVuaXR5LlNlcnZpY2VSZXF1ZXN0IHtcclxuICAgICAgICBUb2tlbj86IHN0cmluZztcclxuICAgICAgICBOZXdQYXNzd29yZD86IHN0cmluZztcclxuICAgICAgICBDb25maXJtUGFzc3dvcmQ/OiBzdHJpbmc7XHJcbiAgICB9XHJcbn1cclxuXHJcbiIsIm5hbWVzcGFjZSBZYXhpZS5NZW1iZXJzaGlwIHtcclxuICAgIGV4cG9ydCBpbnRlcmZhY2UgU2lnblVwRm9ybSB7XHJcbiAgICAgICAgRGlzcGxheU5hbWU6IFNlcmVuaXR5LlN0cmluZ0VkaXRvcjtcclxuICAgICAgICBFbWFpbDogU2VyZW5pdHkuRW1haWxFZGl0b3I7XHJcbiAgICAgICAgQ29uZmlybUVtYWlsOiBTZXJlbml0eS5FbWFpbEVkaXRvcjtcclxuICAgICAgICBQYXNzd29yZDogU2VyZW5pdHkuUGFzc3dvcmRFZGl0b3I7XHJcbiAgICAgICAgQ29uZmlybVBhc3N3b3JkOiBTZXJlbml0eS5QYXNzd29yZEVkaXRvcjtcclxuICAgIH1cclxuXHJcbiAgICBleHBvcnQgY2xhc3MgU2lnblVwRm9ybSBleHRlbmRzIFNlcmVuaXR5LlByZWZpeGVkQ29udGV4dCB7XHJcbiAgICAgICAgc3RhdGljIGZvcm1LZXkgPSAnTWVtYmVyc2hpcC5TaWduVXAnO1xyXG4gICAgICAgIHByaXZhdGUgc3RhdGljIGluaXQ6IGJvb2xlYW47XHJcblxyXG4gICAgICAgIGNvbnN0cnVjdG9yKHByZWZpeDogc3RyaW5nKSB7XHJcbiAgICAgICAgICAgIHN1cGVyKHByZWZpeCk7XHJcblxyXG4gICAgICAgICAgICBpZiAoIVNpZ25VcEZvcm0uaW5pdCkgIHtcclxuICAgICAgICAgICAgICAgIFNpZ25VcEZvcm0uaW5pdCA9IHRydWU7XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIHMgPSBTZXJlbml0eTtcclxuICAgICAgICAgICAgICAgIHZhciB3MCA9IHMuU3RyaW5nRWRpdG9yO1xyXG4gICAgICAgICAgICAgICAgdmFyIHcxID0gcy5FbWFpbEVkaXRvcjtcclxuICAgICAgICAgICAgICAgIHZhciB3MiA9IHMuUGFzc3dvcmRFZGl0b3I7XHJcblxyXG4gICAgICAgICAgICAgICAgUS5pbml0Rm9ybVR5cGUoU2lnblVwRm9ybSwgW1xyXG4gICAgICAgICAgICAgICAgICAgICdEaXNwbGF5TmFtZScsIHcwLFxyXG4gICAgICAgICAgICAgICAgICAgICdFbWFpbCcsIHcxLFxyXG4gICAgICAgICAgICAgICAgICAgICdDb25maXJtRW1haWwnLCB3MSxcclxuICAgICAgICAgICAgICAgICAgICAnUGFzc3dvcmQnLCB3MixcclxuICAgICAgICAgICAgICAgICAgICAnQ29uZmlybVBhc3N3b3JkJywgdzJcclxuICAgICAgICAgICAgICAgIF0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsIm5hbWVzcGFjZSBZYXhpZS5NZW1iZXJzaGlwIHtcclxuICAgIGV4cG9ydCBpbnRlcmZhY2UgU2lnblVwUmVxdWVzdCBleHRlbmRzIFNlcmVuaXR5LlNlcnZpY2VSZXF1ZXN0IHtcclxuICAgICAgICBEaXNwbGF5TmFtZT86IHN0cmluZztcclxuICAgICAgICBFbWFpbD86IHN0cmluZztcclxuICAgICAgICBQYXNzd29yZD86IHN0cmluZztcclxuICAgIH1cclxufVxyXG5cclxuIiwibmFtZXNwYWNlIFlheGllLk5vcnRoV2luZCB7XHJcbn1cclxuIiwibmFtZXNwYWNlIFlheGllLk5vcnRoV2luZCB7XHJcbiAgICBleHBvcnQgaW50ZXJmYWNlIENhdGVnb3JpZXNGb3JtIHtcclxuICAgICAgICBDYXRlZ29yeU5hbWU6IFNlcmVuaXR5LlN0cmluZ0VkaXRvcjtcclxuICAgICAgICBEZXNjcmlwdGlvbjogU2VyZW5pdHkuU3RyaW5nRWRpdG9yO1xyXG4gICAgICAgIFBpY3R1cmU6IFNlcmVuaXR5LlN0cmluZ0VkaXRvcjtcclxuICAgIH1cclxuXHJcbiAgICBleHBvcnQgY2xhc3MgQ2F0ZWdvcmllc0Zvcm0gZXh0ZW5kcyBTZXJlbml0eS5QcmVmaXhlZENvbnRleHQge1xyXG4gICAgICAgIHN0YXRpYyBmb3JtS2V5ID0gJ05vcnRoV2luZC5DYXRlZ29yaWVzJztcclxuICAgICAgICBwcml2YXRlIHN0YXRpYyBpbml0OiBib29sZWFuO1xyXG5cclxuICAgICAgICBjb25zdHJ1Y3RvcihwcmVmaXg6IHN0cmluZykge1xyXG4gICAgICAgICAgICBzdXBlcihwcmVmaXgpO1xyXG5cclxuICAgICAgICAgICAgaWYgKCFDYXRlZ29yaWVzRm9ybS5pbml0KSAge1xyXG4gICAgICAgICAgICAgICAgQ2F0ZWdvcmllc0Zvcm0uaW5pdCA9IHRydWU7XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIHMgPSBTZXJlbml0eTtcclxuICAgICAgICAgICAgICAgIHZhciB3MCA9IHMuU3RyaW5nRWRpdG9yO1xyXG5cclxuICAgICAgICAgICAgICAgIFEuaW5pdEZvcm1UeXBlKENhdGVnb3JpZXNGb3JtLCBbXHJcbiAgICAgICAgICAgICAgICAgICAgJ0NhdGVnb3J5TmFtZScsIHcwLFxyXG4gICAgICAgICAgICAgICAgICAgICdEZXNjcmlwdGlvbicsIHcwLFxyXG4gICAgICAgICAgICAgICAgICAgICdQaWN0dXJlJywgdzBcclxuICAgICAgICAgICAgICAgIF0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsIm5hbWVzcGFjZSBZYXhpZS5Ob3J0aFdpbmQge1xyXG4gICAgZXhwb3J0IGludGVyZmFjZSBDYXRlZ29yaWVzUm93IHtcclxuICAgICAgICBDYXRlZ29yeUlkPzogbnVtYmVyO1xyXG4gICAgICAgIENhdGVnb3J5TmFtZT86IHN0cmluZztcclxuICAgICAgICBEZXNjcmlwdGlvbj86IHN0cmluZztcclxuICAgICAgICBQaWN0dXJlPzogbnVtYmVyW107XHJcbiAgICB9XHJcblxyXG4gICAgZXhwb3J0IG5hbWVzcGFjZSBDYXRlZ29yaWVzUm93IHtcclxuICAgICAgICBleHBvcnQgY29uc3QgaWRQcm9wZXJ0eSA9ICdDYXRlZ29yeUlkJztcclxuICAgICAgICBleHBvcnQgY29uc3QgbmFtZVByb3BlcnR5ID0gJ0NhdGVnb3J5TmFtZSc7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IGxvY2FsVGV4dFByZWZpeCA9ICdOb3J0aFdpbmQuQ2F0ZWdvcmllcyc7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IGRlbGV0ZVBlcm1pc3Npb24gPSAnQWRtaW5pc3RyYXRpb246R2VuZXJhbCc7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IGluc2VydFBlcm1pc3Npb24gPSAnQWRtaW5pc3RyYXRpb246R2VuZXJhbCc7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IHJlYWRQZXJtaXNzaW9uID0gJ0FkbWluaXN0cmF0aW9uOkdlbmVyYWwnO1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCB1cGRhdGVQZXJtaXNzaW9uID0gJ0FkbWluaXN0cmF0aW9uOkdlbmVyYWwnO1xyXG5cclxuICAgICAgICBleHBvcnQgZGVjbGFyZSBjb25zdCBlbnVtIEZpZWxkcyB7XHJcbiAgICAgICAgICAgIENhdGVnb3J5SWQgPSBcIkNhdGVnb3J5SWRcIixcclxuICAgICAgICAgICAgQ2F0ZWdvcnlOYW1lID0gXCJDYXRlZ29yeU5hbWVcIixcclxuICAgICAgICAgICAgRGVzY3JpcHRpb24gPSBcIkRlc2NyaXB0aW9uXCIsXHJcbiAgICAgICAgICAgIFBpY3R1cmUgPSBcIlBpY3R1cmVcIlxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCJuYW1lc3BhY2UgWWF4aWUuTm9ydGhXaW5kIHtcclxuICAgIGV4cG9ydCBuYW1lc3BhY2UgQ2F0ZWdvcmllc1NlcnZpY2Uge1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCBiYXNlVXJsID0gJ05vcnRoV2luZC9DYXRlZ29yaWVzJztcclxuXHJcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgZnVuY3Rpb24gQ3JlYXRlKHJlcXVlc3Q6IFNlcmVuaXR5LlNhdmVSZXF1ZXN0PENhdGVnb3JpZXNSb3c+LCBvblN1Y2Nlc3M/OiAocmVzcG9uc2U6IFNlcmVuaXR5LlNhdmVSZXNwb25zZSkgPT4gdm9pZCwgb3B0PzogUS5TZXJ2aWNlT3B0aW9uczxhbnk+KTogSlF1ZXJ5WEhSO1xyXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGZ1bmN0aW9uIFVwZGF0ZShyZXF1ZXN0OiBTZXJlbml0eS5TYXZlUmVxdWVzdDxDYXRlZ29yaWVzUm93Piwgb25TdWNjZXNzPzogKHJlc3BvbnNlOiBTZXJlbml0eS5TYXZlUmVzcG9uc2UpID0+IHZvaWQsIG9wdD86IFEuU2VydmljZU9wdGlvbnM8YW55Pik6IEpRdWVyeVhIUjtcclxuICAgICAgICBleHBvcnQgZGVjbGFyZSBmdW5jdGlvbiBEZWxldGUocmVxdWVzdDogU2VyZW5pdHkuRGVsZXRlUmVxdWVzdCwgb25TdWNjZXNzPzogKHJlc3BvbnNlOiBTZXJlbml0eS5EZWxldGVSZXNwb25zZSkgPT4gdm9pZCwgb3B0PzogUS5TZXJ2aWNlT3B0aW9uczxhbnk+KTogSlF1ZXJ5WEhSO1xyXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGZ1bmN0aW9uIFJldHJpZXZlKHJlcXVlc3Q6IFNlcmVuaXR5LlJldHJpZXZlUmVxdWVzdCwgb25TdWNjZXNzPzogKHJlc3BvbnNlOiBTZXJlbml0eS5SZXRyaWV2ZVJlc3BvbnNlPENhdGVnb3JpZXNSb3c+KSA9PiB2b2lkLCBvcHQ/OiBRLlNlcnZpY2VPcHRpb25zPGFueT4pOiBKUXVlcnlYSFI7XHJcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgZnVuY3Rpb24gTGlzdChyZXF1ZXN0OiBTZXJlbml0eS5MaXN0UmVxdWVzdCwgb25TdWNjZXNzPzogKHJlc3BvbnNlOiBTZXJlbml0eS5MaXN0UmVzcG9uc2U8Q2F0ZWdvcmllc1Jvdz4pID0+IHZvaWQsIG9wdD86IFEuU2VydmljZU9wdGlvbnM8YW55Pik6IEpRdWVyeVhIUjtcclxuXHJcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgY29uc3QgZW51bSBNZXRob2RzIHtcclxuICAgICAgICAgICAgQ3JlYXRlID0gXCJOb3J0aFdpbmQvQ2F0ZWdvcmllcy9DcmVhdGVcIixcclxuICAgICAgICAgICAgVXBkYXRlID0gXCJOb3J0aFdpbmQvQ2F0ZWdvcmllcy9VcGRhdGVcIixcclxuICAgICAgICAgICAgRGVsZXRlID0gXCJOb3J0aFdpbmQvQ2F0ZWdvcmllcy9EZWxldGVcIixcclxuICAgICAgICAgICAgUmV0cmlldmUgPSBcIk5vcnRoV2luZC9DYXRlZ29yaWVzL1JldHJpZXZlXCIsXHJcbiAgICAgICAgICAgIExpc3QgPSBcIk5vcnRoV2luZC9DYXRlZ29yaWVzL0xpc3RcIlxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgW1xyXG4gICAgICAgICAgICAnQ3JlYXRlJywgXHJcbiAgICAgICAgICAgICdVcGRhdGUnLCBcclxuICAgICAgICAgICAgJ0RlbGV0ZScsIFxyXG4gICAgICAgICAgICAnUmV0cmlldmUnLCBcclxuICAgICAgICAgICAgJ0xpc3QnXHJcbiAgICAgICAgXS5mb3JFYWNoKHggPT4ge1xyXG4gICAgICAgICAgICAoPGFueT5DYXRlZ29yaWVzU2VydmljZSlbeF0gPSBmdW5jdGlvbiAociwgcywgbykge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFEuc2VydmljZVJlcXVlc3QoYmFzZVVybCArICcvJyArIHgsIHIsIHMsIG8pO1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcbiIsIm5hbWVzcGFjZSBZYXhpZS5Ob3J0aFdpbmQge1xyXG59XHJcbiIsIm5hbWVzcGFjZSBZYXhpZS5Ob3J0aFdpbmQge1xyXG4gICAgZXhwb3J0IGludGVyZmFjZSBDYXRlZ29yeUxhbmdGb3JtIHtcclxuICAgICAgICBDYXRlZ29yeUlkOiBTZXJlbml0eS5JbnRlZ2VyRWRpdG9yO1xyXG4gICAgICAgIExhbmd1YWdlSWQ6IFNlcmVuaXR5LkludGVnZXJFZGl0b3I7XHJcbiAgICAgICAgQ2F0ZWdvcnlOYW1lOiBTZXJlbml0eS5TdHJpbmdFZGl0b3I7XHJcbiAgICAgICAgRGVzY3JpcHRpb246IFNlcmVuaXR5LlN0cmluZ0VkaXRvcjtcclxuICAgIH1cclxuXHJcbiAgICBleHBvcnQgY2xhc3MgQ2F0ZWdvcnlMYW5nRm9ybSBleHRlbmRzIFNlcmVuaXR5LlByZWZpeGVkQ29udGV4dCB7XHJcbiAgICAgICAgc3RhdGljIGZvcm1LZXkgPSAnTm9ydGhXaW5kLkNhdGVnb3J5TGFuZyc7XHJcbiAgICAgICAgcHJpdmF0ZSBzdGF0aWMgaW5pdDogYm9vbGVhbjtcclxuXHJcbiAgICAgICAgY29uc3RydWN0b3IocHJlZml4OiBzdHJpbmcpIHtcclxuICAgICAgICAgICAgc3VwZXIocHJlZml4KTtcclxuXHJcbiAgICAgICAgICAgIGlmICghQ2F0ZWdvcnlMYW5nRm9ybS5pbml0KSAge1xyXG4gICAgICAgICAgICAgICAgQ2F0ZWdvcnlMYW5nRm9ybS5pbml0ID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgcyA9IFNlcmVuaXR5O1xyXG4gICAgICAgICAgICAgICAgdmFyIHcwID0gcy5JbnRlZ2VyRWRpdG9yO1xyXG4gICAgICAgICAgICAgICAgdmFyIHcxID0gcy5TdHJpbmdFZGl0b3I7XHJcblxyXG4gICAgICAgICAgICAgICAgUS5pbml0Rm9ybVR5cGUoQ2F0ZWdvcnlMYW5nRm9ybSwgW1xyXG4gICAgICAgICAgICAgICAgICAgICdDYXRlZ29yeUlkJywgdzAsXHJcbiAgICAgICAgICAgICAgICAgICAgJ0xhbmd1YWdlSWQnLCB3MCxcclxuICAgICAgICAgICAgICAgICAgICAnQ2F0ZWdvcnlOYW1lJywgdzEsXHJcbiAgICAgICAgICAgICAgICAgICAgJ0Rlc2NyaXB0aW9uJywgdzFcclxuICAgICAgICAgICAgICAgIF0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsIm5hbWVzcGFjZSBZYXhpZS5Ob3J0aFdpbmQge1xyXG4gICAgZXhwb3J0IGludGVyZmFjZSBDYXRlZ29yeUxhbmdSb3cge1xyXG4gICAgICAgIElkPzogbnVtYmVyO1xyXG4gICAgICAgIENhdGVnb3J5SWQ/OiBudW1iZXI7XHJcbiAgICAgICAgTGFuZ3VhZ2VJZD86IG51bWJlcjtcclxuICAgICAgICBDYXRlZ29yeU5hbWU/OiBzdHJpbmc7XHJcbiAgICAgICAgRGVzY3JpcHRpb24/OiBzdHJpbmc7XHJcbiAgICB9XHJcblxyXG4gICAgZXhwb3J0IG5hbWVzcGFjZSBDYXRlZ29yeUxhbmdSb3cge1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCBpZFByb3BlcnR5ID0gJ0lkJztcclxuICAgICAgICBleHBvcnQgY29uc3QgbmFtZVByb3BlcnR5ID0gJ0NhdGVnb3J5TmFtZSc7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IGxvY2FsVGV4dFByZWZpeCA9ICdOb3J0aFdpbmQuQ2F0ZWdvcnlMYW5nJztcclxuICAgICAgICBleHBvcnQgY29uc3QgZGVsZXRlUGVybWlzc2lvbiA9ICdBZG1pbmlzdHJhdGlvbjpHZW5lcmFsJztcclxuICAgICAgICBleHBvcnQgY29uc3QgaW5zZXJ0UGVybWlzc2lvbiA9ICdBZG1pbmlzdHJhdGlvbjpHZW5lcmFsJztcclxuICAgICAgICBleHBvcnQgY29uc3QgcmVhZFBlcm1pc3Npb24gPSAnQWRtaW5pc3RyYXRpb246R2VuZXJhbCc7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IHVwZGF0ZVBlcm1pc3Npb24gPSAnQWRtaW5pc3RyYXRpb246R2VuZXJhbCc7XHJcblxyXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGNvbnN0IGVudW0gRmllbGRzIHtcclxuICAgICAgICAgICAgSWQgPSBcIklkXCIsXHJcbiAgICAgICAgICAgIENhdGVnb3J5SWQgPSBcIkNhdGVnb3J5SWRcIixcclxuICAgICAgICAgICAgTGFuZ3VhZ2VJZCA9IFwiTGFuZ3VhZ2VJZFwiLFxyXG4gICAgICAgICAgICBDYXRlZ29yeU5hbWUgPSBcIkNhdGVnb3J5TmFtZVwiLFxyXG4gICAgICAgICAgICBEZXNjcmlwdGlvbiA9IFwiRGVzY3JpcHRpb25cIlxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCJuYW1lc3BhY2UgWWF4aWUuTm9ydGhXaW5kIHtcclxuICAgIGV4cG9ydCBuYW1lc3BhY2UgQ2F0ZWdvcnlMYW5nU2VydmljZSB7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IGJhc2VVcmwgPSAnTm9ydGhXaW5kL0NhdGVnb3J5TGFuZyc7XHJcblxyXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGZ1bmN0aW9uIENyZWF0ZShyZXF1ZXN0OiBTZXJlbml0eS5TYXZlUmVxdWVzdDxDYXRlZ29yeUxhbmdSb3c+LCBvblN1Y2Nlc3M/OiAocmVzcG9uc2U6IFNlcmVuaXR5LlNhdmVSZXNwb25zZSkgPT4gdm9pZCwgb3B0PzogUS5TZXJ2aWNlT3B0aW9uczxhbnk+KTogSlF1ZXJ5WEhSO1xyXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGZ1bmN0aW9uIFVwZGF0ZShyZXF1ZXN0OiBTZXJlbml0eS5TYXZlUmVxdWVzdDxDYXRlZ29yeUxhbmdSb3c+LCBvblN1Y2Nlc3M/OiAocmVzcG9uc2U6IFNlcmVuaXR5LlNhdmVSZXNwb25zZSkgPT4gdm9pZCwgb3B0PzogUS5TZXJ2aWNlT3B0aW9uczxhbnk+KTogSlF1ZXJ5WEhSO1xyXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGZ1bmN0aW9uIERlbGV0ZShyZXF1ZXN0OiBTZXJlbml0eS5EZWxldGVSZXF1ZXN0LCBvblN1Y2Nlc3M/OiAocmVzcG9uc2U6IFNlcmVuaXR5LkRlbGV0ZVJlc3BvbnNlKSA9PiB2b2lkLCBvcHQ/OiBRLlNlcnZpY2VPcHRpb25zPGFueT4pOiBKUXVlcnlYSFI7XHJcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgZnVuY3Rpb24gUmV0cmlldmUocmVxdWVzdDogU2VyZW5pdHkuUmV0cmlldmVSZXF1ZXN0LCBvblN1Y2Nlc3M/OiAocmVzcG9uc2U6IFNlcmVuaXR5LlJldHJpZXZlUmVzcG9uc2U8Q2F0ZWdvcnlMYW5nUm93PikgPT4gdm9pZCwgb3B0PzogUS5TZXJ2aWNlT3B0aW9uczxhbnk+KTogSlF1ZXJ5WEhSO1xyXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGZ1bmN0aW9uIExpc3QocmVxdWVzdDogU2VyZW5pdHkuTGlzdFJlcXVlc3QsIG9uU3VjY2Vzcz86IChyZXNwb25zZTogU2VyZW5pdHkuTGlzdFJlc3BvbnNlPENhdGVnb3J5TGFuZ1Jvdz4pID0+IHZvaWQsIG9wdD86IFEuU2VydmljZU9wdGlvbnM8YW55Pik6IEpRdWVyeVhIUjtcclxuXHJcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgY29uc3QgZW51bSBNZXRob2RzIHtcclxuICAgICAgICAgICAgQ3JlYXRlID0gXCJOb3J0aFdpbmQvQ2F0ZWdvcnlMYW5nL0NyZWF0ZVwiLFxyXG4gICAgICAgICAgICBVcGRhdGUgPSBcIk5vcnRoV2luZC9DYXRlZ29yeUxhbmcvVXBkYXRlXCIsXHJcbiAgICAgICAgICAgIERlbGV0ZSA9IFwiTm9ydGhXaW5kL0NhdGVnb3J5TGFuZy9EZWxldGVcIixcclxuICAgICAgICAgICAgUmV0cmlldmUgPSBcIk5vcnRoV2luZC9DYXRlZ29yeUxhbmcvUmV0cmlldmVcIixcclxuICAgICAgICAgICAgTGlzdCA9IFwiTm9ydGhXaW5kL0NhdGVnb3J5TGFuZy9MaXN0XCJcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIFtcclxuICAgICAgICAgICAgJ0NyZWF0ZScsIFxyXG4gICAgICAgICAgICAnVXBkYXRlJywgXHJcbiAgICAgICAgICAgICdEZWxldGUnLCBcclxuICAgICAgICAgICAgJ1JldHJpZXZlJywgXHJcbiAgICAgICAgICAgICdMaXN0J1xyXG4gICAgICAgIF0uZm9yRWFjaCh4ID0+IHtcclxuICAgICAgICAgICAgKDxhbnk+Q2F0ZWdvcnlMYW5nU2VydmljZSlbeF0gPSBmdW5jdGlvbiAociwgcywgbykge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFEuc2VydmljZVJlcXVlc3QoYmFzZVVybCArICcvJyArIHgsIHIsIHMsIG8pO1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcbiIsIm5hbWVzcGFjZSBZYXhpZS5Ob3J0aFdpbmQge1xyXG59XHJcbiIsIm5hbWVzcGFjZSBZYXhpZS5Ob3J0aFdpbmQge1xyXG4gICAgZXhwb3J0IGludGVyZmFjZSBDdXN0b21lckRldGFpbHNGb3JtIHtcclxuICAgICAgICBMYXN0Q29udGFjdERhdGU6IFNlcmVuaXR5LkRhdGVFZGl0b3I7XHJcbiAgICAgICAgTGFzdENvbnRhY3RlZEJ5OiBTZXJlbml0eS5JbnRlZ2VyRWRpdG9yO1xyXG4gICAgICAgIEVtYWlsOiBTZXJlbml0eS5TdHJpbmdFZGl0b3I7XHJcbiAgICAgICAgU2VuZEJ1bGxldGluOiBTZXJlbml0eS5Cb29sZWFuRWRpdG9yO1xyXG4gICAgfVxyXG5cclxuICAgIGV4cG9ydCBjbGFzcyBDdXN0b21lckRldGFpbHNGb3JtIGV4dGVuZHMgU2VyZW5pdHkuUHJlZml4ZWRDb250ZXh0IHtcclxuICAgICAgICBzdGF0aWMgZm9ybUtleSA9ICdOb3J0aFdpbmQuQ3VzdG9tZXJEZXRhaWxzJztcclxuICAgICAgICBwcml2YXRlIHN0YXRpYyBpbml0OiBib29sZWFuO1xyXG5cclxuICAgICAgICBjb25zdHJ1Y3RvcihwcmVmaXg6IHN0cmluZykge1xyXG4gICAgICAgICAgICBzdXBlcihwcmVmaXgpO1xyXG5cclxuICAgICAgICAgICAgaWYgKCFDdXN0b21lckRldGFpbHNGb3JtLmluaXQpICB7XHJcbiAgICAgICAgICAgICAgICBDdXN0b21lckRldGFpbHNGb3JtLmluaXQgPSB0cnVlO1xyXG5cclxuICAgICAgICAgICAgICAgIHZhciBzID0gU2VyZW5pdHk7XHJcbiAgICAgICAgICAgICAgICB2YXIgdzAgPSBzLkRhdGVFZGl0b3I7XHJcbiAgICAgICAgICAgICAgICB2YXIgdzEgPSBzLkludGVnZXJFZGl0b3I7XHJcbiAgICAgICAgICAgICAgICB2YXIgdzIgPSBzLlN0cmluZ0VkaXRvcjtcclxuICAgICAgICAgICAgICAgIHZhciB3MyA9IHMuQm9vbGVhbkVkaXRvcjtcclxuXHJcbiAgICAgICAgICAgICAgICBRLmluaXRGb3JtVHlwZShDdXN0b21lckRldGFpbHNGb3JtLCBbXHJcbiAgICAgICAgICAgICAgICAgICAgJ0xhc3RDb250YWN0RGF0ZScsIHcwLFxyXG4gICAgICAgICAgICAgICAgICAgICdMYXN0Q29udGFjdGVkQnknLCB3MSxcclxuICAgICAgICAgICAgICAgICAgICAnRW1haWwnLCB3MixcclxuICAgICAgICAgICAgICAgICAgICAnU2VuZEJ1bGxldGluJywgdzNcclxuICAgICAgICAgICAgICAgIF0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsIm5hbWVzcGFjZSBZYXhpZS5Ob3J0aFdpbmQge1xyXG4gICAgZXhwb3J0IGludGVyZmFjZSBDdXN0b21lckRldGFpbHNSb3cge1xyXG4gICAgICAgIElkPzogbnVtYmVyO1xyXG4gICAgICAgIExhc3RDb250YWN0RGF0ZT86IHN0cmluZztcclxuICAgICAgICBMYXN0Q29udGFjdGVkQnk/OiBudW1iZXI7XHJcbiAgICAgICAgRW1haWw/OiBzdHJpbmc7XHJcbiAgICAgICAgU2VuZEJ1bGxldGluPzogYm9vbGVhbjtcclxuICAgICAgICBMYXN0Q29udGFjdGVkQnlMYXN0TmFtZT86IHN0cmluZztcclxuICAgICAgICBMYXN0Q29udGFjdGVkQnlGaXJzdE5hbWU/OiBzdHJpbmc7XHJcbiAgICAgICAgTGFzdENvbnRhY3RlZEJ5VGl0bGU/OiBzdHJpbmc7XHJcbiAgICAgICAgTGFzdENvbnRhY3RlZEJ5VGl0bGVPZkNvdXJ0ZXN5Pzogc3RyaW5nO1xyXG4gICAgICAgIExhc3RDb250YWN0ZWRCeUJpcnRoRGF0ZT86IHN0cmluZztcclxuICAgICAgICBMYXN0Q29udGFjdGVkQnlIaXJlRGF0ZT86IHN0cmluZztcclxuICAgICAgICBMYXN0Q29udGFjdGVkQnlBZGRyZXNzPzogc3RyaW5nO1xyXG4gICAgICAgIExhc3RDb250YWN0ZWRCeUNpdHk/OiBzdHJpbmc7XHJcbiAgICAgICAgTGFzdENvbnRhY3RlZEJ5UmVnaW9uPzogc3RyaW5nO1xyXG4gICAgICAgIExhc3RDb250YWN0ZWRCeVBvc3RhbENvZGU/OiBzdHJpbmc7XHJcbiAgICAgICAgTGFzdENvbnRhY3RlZEJ5Q291bnRyeT86IHN0cmluZztcclxuICAgICAgICBMYXN0Q29udGFjdGVkQnlIb21lUGhvbmU/OiBzdHJpbmc7XHJcbiAgICAgICAgTGFzdENvbnRhY3RlZEJ5RXh0ZW5zaW9uPzogc3RyaW5nO1xyXG4gICAgICAgIExhc3RDb250YWN0ZWRCeVBob3RvPzogbnVtYmVyW107XHJcbiAgICAgICAgTGFzdENvbnRhY3RlZEJ5Tm90ZXM/OiBzdHJpbmc7XHJcbiAgICAgICAgTGFzdENvbnRhY3RlZEJ5UmVwb3J0c1RvPzogbnVtYmVyO1xyXG4gICAgICAgIExhc3RDb250YWN0ZWRCeVBob3RvUGF0aD86IHN0cmluZztcclxuICAgIH1cclxuXHJcbiAgICBleHBvcnQgbmFtZXNwYWNlIEN1c3RvbWVyRGV0YWlsc1JvdyB7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IGlkUHJvcGVydHkgPSAnSWQnO1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCBuYW1lUHJvcGVydHkgPSAnRW1haWwnO1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCBsb2NhbFRleHRQcmVmaXggPSAnTm9ydGhXaW5kLkN1c3RvbWVyRGV0YWlscyc7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IGRlbGV0ZVBlcm1pc3Npb24gPSAnQWRtaW5pc3RyYXRpb246R2VuZXJhbCc7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IGluc2VydFBlcm1pc3Npb24gPSAnQWRtaW5pc3RyYXRpb246R2VuZXJhbCc7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IHJlYWRQZXJtaXNzaW9uID0gJ0FkbWluaXN0cmF0aW9uOkdlbmVyYWwnO1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCB1cGRhdGVQZXJtaXNzaW9uID0gJ0FkbWluaXN0cmF0aW9uOkdlbmVyYWwnO1xyXG5cclxuICAgICAgICBleHBvcnQgZGVjbGFyZSBjb25zdCBlbnVtIEZpZWxkcyB7XHJcbiAgICAgICAgICAgIElkID0gXCJJZFwiLFxyXG4gICAgICAgICAgICBMYXN0Q29udGFjdERhdGUgPSBcIkxhc3RDb250YWN0RGF0ZVwiLFxyXG4gICAgICAgICAgICBMYXN0Q29udGFjdGVkQnkgPSBcIkxhc3RDb250YWN0ZWRCeVwiLFxyXG4gICAgICAgICAgICBFbWFpbCA9IFwiRW1haWxcIixcclxuICAgICAgICAgICAgU2VuZEJ1bGxldGluID0gXCJTZW5kQnVsbGV0aW5cIixcclxuICAgICAgICAgICAgTGFzdENvbnRhY3RlZEJ5TGFzdE5hbWUgPSBcIkxhc3RDb250YWN0ZWRCeUxhc3ROYW1lXCIsXHJcbiAgICAgICAgICAgIExhc3RDb250YWN0ZWRCeUZpcnN0TmFtZSA9IFwiTGFzdENvbnRhY3RlZEJ5Rmlyc3ROYW1lXCIsXHJcbiAgICAgICAgICAgIExhc3RDb250YWN0ZWRCeVRpdGxlID0gXCJMYXN0Q29udGFjdGVkQnlUaXRsZVwiLFxyXG4gICAgICAgICAgICBMYXN0Q29udGFjdGVkQnlUaXRsZU9mQ291cnRlc3kgPSBcIkxhc3RDb250YWN0ZWRCeVRpdGxlT2ZDb3VydGVzeVwiLFxyXG4gICAgICAgICAgICBMYXN0Q29udGFjdGVkQnlCaXJ0aERhdGUgPSBcIkxhc3RDb250YWN0ZWRCeUJpcnRoRGF0ZVwiLFxyXG4gICAgICAgICAgICBMYXN0Q29udGFjdGVkQnlIaXJlRGF0ZSA9IFwiTGFzdENvbnRhY3RlZEJ5SGlyZURhdGVcIixcclxuICAgICAgICAgICAgTGFzdENvbnRhY3RlZEJ5QWRkcmVzcyA9IFwiTGFzdENvbnRhY3RlZEJ5QWRkcmVzc1wiLFxyXG4gICAgICAgICAgICBMYXN0Q29udGFjdGVkQnlDaXR5ID0gXCJMYXN0Q29udGFjdGVkQnlDaXR5XCIsXHJcbiAgICAgICAgICAgIExhc3RDb250YWN0ZWRCeVJlZ2lvbiA9IFwiTGFzdENvbnRhY3RlZEJ5UmVnaW9uXCIsXHJcbiAgICAgICAgICAgIExhc3RDb250YWN0ZWRCeVBvc3RhbENvZGUgPSBcIkxhc3RDb250YWN0ZWRCeVBvc3RhbENvZGVcIixcclxuICAgICAgICAgICAgTGFzdENvbnRhY3RlZEJ5Q291bnRyeSA9IFwiTGFzdENvbnRhY3RlZEJ5Q291bnRyeVwiLFxyXG4gICAgICAgICAgICBMYXN0Q29udGFjdGVkQnlIb21lUGhvbmUgPSBcIkxhc3RDb250YWN0ZWRCeUhvbWVQaG9uZVwiLFxyXG4gICAgICAgICAgICBMYXN0Q29udGFjdGVkQnlFeHRlbnNpb24gPSBcIkxhc3RDb250YWN0ZWRCeUV4dGVuc2lvblwiLFxyXG4gICAgICAgICAgICBMYXN0Q29udGFjdGVkQnlQaG90byA9IFwiTGFzdENvbnRhY3RlZEJ5UGhvdG9cIixcclxuICAgICAgICAgICAgTGFzdENvbnRhY3RlZEJ5Tm90ZXMgPSBcIkxhc3RDb250YWN0ZWRCeU5vdGVzXCIsXHJcbiAgICAgICAgICAgIExhc3RDb250YWN0ZWRCeVJlcG9ydHNUbyA9IFwiTGFzdENvbnRhY3RlZEJ5UmVwb3J0c1RvXCIsXHJcbiAgICAgICAgICAgIExhc3RDb250YWN0ZWRCeVBob3RvUGF0aCA9IFwiTGFzdENvbnRhY3RlZEJ5UGhvdG9QYXRoXCJcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwibmFtZXNwYWNlIFlheGllLk5vcnRoV2luZCB7XHJcbiAgICBleHBvcnQgbmFtZXNwYWNlIEN1c3RvbWVyRGV0YWlsc1NlcnZpY2Uge1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCBiYXNlVXJsID0gJ05vcnRoV2luZC9DdXN0b21lckRldGFpbHMnO1xyXG5cclxuICAgICAgICBleHBvcnQgZGVjbGFyZSBmdW5jdGlvbiBDcmVhdGUocmVxdWVzdDogU2VyZW5pdHkuU2F2ZVJlcXVlc3Q8Q3VzdG9tZXJEZXRhaWxzUm93Piwgb25TdWNjZXNzPzogKHJlc3BvbnNlOiBTZXJlbml0eS5TYXZlUmVzcG9uc2UpID0+IHZvaWQsIG9wdD86IFEuU2VydmljZU9wdGlvbnM8YW55Pik6IEpRdWVyeVhIUjtcclxuICAgICAgICBleHBvcnQgZGVjbGFyZSBmdW5jdGlvbiBVcGRhdGUocmVxdWVzdDogU2VyZW5pdHkuU2F2ZVJlcXVlc3Q8Q3VzdG9tZXJEZXRhaWxzUm93Piwgb25TdWNjZXNzPzogKHJlc3BvbnNlOiBTZXJlbml0eS5TYXZlUmVzcG9uc2UpID0+IHZvaWQsIG9wdD86IFEuU2VydmljZU9wdGlvbnM8YW55Pik6IEpRdWVyeVhIUjtcclxuICAgICAgICBleHBvcnQgZGVjbGFyZSBmdW5jdGlvbiBEZWxldGUocmVxdWVzdDogU2VyZW5pdHkuRGVsZXRlUmVxdWVzdCwgb25TdWNjZXNzPzogKHJlc3BvbnNlOiBTZXJlbml0eS5EZWxldGVSZXNwb25zZSkgPT4gdm9pZCwgb3B0PzogUS5TZXJ2aWNlT3B0aW9uczxhbnk+KTogSlF1ZXJ5WEhSO1xyXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGZ1bmN0aW9uIFJldHJpZXZlKHJlcXVlc3Q6IFNlcmVuaXR5LlJldHJpZXZlUmVxdWVzdCwgb25TdWNjZXNzPzogKHJlc3BvbnNlOiBTZXJlbml0eS5SZXRyaWV2ZVJlc3BvbnNlPEN1c3RvbWVyRGV0YWlsc1Jvdz4pID0+IHZvaWQsIG9wdD86IFEuU2VydmljZU9wdGlvbnM8YW55Pik6IEpRdWVyeVhIUjtcclxuICAgICAgICBleHBvcnQgZGVjbGFyZSBmdW5jdGlvbiBMaXN0KHJlcXVlc3Q6IFNlcmVuaXR5Lkxpc3RSZXF1ZXN0LCBvblN1Y2Nlc3M/OiAocmVzcG9uc2U6IFNlcmVuaXR5Lkxpc3RSZXNwb25zZTxDdXN0b21lckRldGFpbHNSb3c+KSA9PiB2b2lkLCBvcHQ/OiBRLlNlcnZpY2VPcHRpb25zPGFueT4pOiBKUXVlcnlYSFI7XHJcblxyXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGNvbnN0IGVudW0gTWV0aG9kcyB7XHJcbiAgICAgICAgICAgIENyZWF0ZSA9IFwiTm9ydGhXaW5kL0N1c3RvbWVyRGV0YWlscy9DcmVhdGVcIixcclxuICAgICAgICAgICAgVXBkYXRlID0gXCJOb3J0aFdpbmQvQ3VzdG9tZXJEZXRhaWxzL1VwZGF0ZVwiLFxyXG4gICAgICAgICAgICBEZWxldGUgPSBcIk5vcnRoV2luZC9DdXN0b21lckRldGFpbHMvRGVsZXRlXCIsXHJcbiAgICAgICAgICAgIFJldHJpZXZlID0gXCJOb3J0aFdpbmQvQ3VzdG9tZXJEZXRhaWxzL1JldHJpZXZlXCIsXHJcbiAgICAgICAgICAgIExpc3QgPSBcIk5vcnRoV2luZC9DdXN0b21lckRldGFpbHMvTGlzdFwiXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBbXHJcbiAgICAgICAgICAgICdDcmVhdGUnLCBcclxuICAgICAgICAgICAgJ1VwZGF0ZScsIFxyXG4gICAgICAgICAgICAnRGVsZXRlJywgXHJcbiAgICAgICAgICAgICdSZXRyaWV2ZScsIFxyXG4gICAgICAgICAgICAnTGlzdCdcclxuICAgICAgICBdLmZvckVhY2goeCA9PiB7XHJcbiAgICAgICAgICAgICg8YW55PkN1c3RvbWVyRGV0YWlsc1NlcnZpY2UpW3hdID0gZnVuY3Rpb24gKHIsIHMsIG8pIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBRLnNlcnZpY2VSZXF1ZXN0KGJhc2VVcmwgKyAnLycgKyB4LCByLCBzLCBvKTtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG4iLCJuYW1lc3BhY2UgWWF4aWUuTm9ydGhXaW5kIHtcclxufVxyXG4iLCJuYW1lc3BhY2UgWWF4aWUuTm9ydGhXaW5kIHtcclxuICAgIGV4cG9ydCBpbnRlcmZhY2UgQ3VzdG9tZXJzRm9ybSB7XHJcbiAgICAgICAgQ3VzdG9tZXJJZDogU2VyZW5pdHkuU3RyaW5nRWRpdG9yO1xyXG4gICAgICAgIENvbXBhbnlOYW1lOiBTZXJlbml0eS5TdHJpbmdFZGl0b3I7XHJcbiAgICAgICAgQ29udGFjdE5hbWU6IFNlcmVuaXR5LlN0cmluZ0VkaXRvcjtcclxuICAgICAgICBDb250YWN0VGl0bGU6IFNlcmVuaXR5LlN0cmluZ0VkaXRvcjtcclxuICAgICAgICBBZGRyZXNzOiBTZXJlbml0eS5TdHJpbmdFZGl0b3I7XHJcbiAgICAgICAgQ2l0eTogU2VyZW5pdHkuU3RyaW5nRWRpdG9yO1xyXG4gICAgICAgIFJlZ2lvbjogU2VyZW5pdHkuU3RyaW5nRWRpdG9yO1xyXG4gICAgICAgIFBvc3RhbENvZGU6IFNlcmVuaXR5LlN0cmluZ0VkaXRvcjtcclxuICAgICAgICBDb3VudHJ5OiBTZXJlbml0eS5TdHJpbmdFZGl0b3I7XHJcbiAgICAgICAgUGhvbmU6IFNlcmVuaXR5LlN0cmluZ0VkaXRvcjtcclxuICAgICAgICBGYXg6IFNlcmVuaXR5LlN0cmluZ0VkaXRvcjtcclxuICAgIH1cclxuXHJcbiAgICBleHBvcnQgY2xhc3MgQ3VzdG9tZXJzRm9ybSBleHRlbmRzIFNlcmVuaXR5LlByZWZpeGVkQ29udGV4dCB7XHJcbiAgICAgICAgc3RhdGljIGZvcm1LZXkgPSAnTm9ydGhXaW5kLkN1c3RvbWVycyc7XHJcbiAgICAgICAgcHJpdmF0ZSBzdGF0aWMgaW5pdDogYm9vbGVhbjtcclxuXHJcbiAgICAgICAgY29uc3RydWN0b3IocHJlZml4OiBzdHJpbmcpIHtcclxuICAgICAgICAgICAgc3VwZXIocHJlZml4KTtcclxuXHJcbiAgICAgICAgICAgIGlmICghQ3VzdG9tZXJzRm9ybS5pbml0KSAge1xyXG4gICAgICAgICAgICAgICAgQ3VzdG9tZXJzRm9ybS5pbml0ID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgcyA9IFNlcmVuaXR5O1xyXG4gICAgICAgICAgICAgICAgdmFyIHcwID0gcy5TdHJpbmdFZGl0b3I7XHJcblxyXG4gICAgICAgICAgICAgICAgUS5pbml0Rm9ybVR5cGUoQ3VzdG9tZXJzRm9ybSwgW1xyXG4gICAgICAgICAgICAgICAgICAgICdDdXN0b21lcklkJywgdzAsXHJcbiAgICAgICAgICAgICAgICAgICAgJ0NvbXBhbnlOYW1lJywgdzAsXHJcbiAgICAgICAgICAgICAgICAgICAgJ0NvbnRhY3ROYW1lJywgdzAsXHJcbiAgICAgICAgICAgICAgICAgICAgJ0NvbnRhY3RUaXRsZScsIHcwLFxyXG4gICAgICAgICAgICAgICAgICAgICdBZGRyZXNzJywgdzAsXHJcbiAgICAgICAgICAgICAgICAgICAgJ0NpdHknLCB3MCxcclxuICAgICAgICAgICAgICAgICAgICAnUmVnaW9uJywgdzAsXHJcbiAgICAgICAgICAgICAgICAgICAgJ1Bvc3RhbENvZGUnLCB3MCxcclxuICAgICAgICAgICAgICAgICAgICAnQ291bnRyeScsIHcwLFxyXG4gICAgICAgICAgICAgICAgICAgICdQaG9uZScsIHcwLFxyXG4gICAgICAgICAgICAgICAgICAgICdGYXgnLCB3MFxyXG4gICAgICAgICAgICAgICAgXSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwibmFtZXNwYWNlIFlheGllLk5vcnRoV2luZCB7XHJcbiAgICBleHBvcnQgaW50ZXJmYWNlIEN1c3RvbWVyc1JvdyB7XHJcbiAgICAgICAgQ3VzdG9tZXJJZD86IHN0cmluZztcclxuICAgICAgICBDb21wYW55TmFtZT86IHN0cmluZztcclxuICAgICAgICBDb250YWN0TmFtZT86IHN0cmluZztcclxuICAgICAgICBDb250YWN0VGl0bGU/OiBzdHJpbmc7XHJcbiAgICAgICAgQWRkcmVzcz86IHN0cmluZztcclxuICAgICAgICBDaXR5Pzogc3RyaW5nO1xyXG4gICAgICAgIFJlZ2lvbj86IHN0cmluZztcclxuICAgICAgICBQb3N0YWxDb2RlPzogc3RyaW5nO1xyXG4gICAgICAgIENvdW50cnk/OiBzdHJpbmc7XHJcbiAgICAgICAgUGhvbmU/OiBzdHJpbmc7XHJcbiAgICAgICAgRmF4Pzogc3RyaW5nO1xyXG4gICAgICAgIElkPzogbnVtYmVyO1xyXG4gICAgfVxyXG5cclxuICAgIGV4cG9ydCBuYW1lc3BhY2UgQ3VzdG9tZXJzUm93IHtcclxuICAgICAgICBleHBvcnQgY29uc3QgaWRQcm9wZXJ0eSA9ICdJZCc7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IG5hbWVQcm9wZXJ0eSA9ICdDdXN0b21lcklkJztcclxuICAgICAgICBleHBvcnQgY29uc3QgbG9jYWxUZXh0UHJlZml4ID0gJ05vcnRoV2luZC5DdXN0b21lcnMnO1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCBkZWxldGVQZXJtaXNzaW9uID0gJ0FkbWluaXN0cmF0aW9uOkdlbmVyYWwnO1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCBpbnNlcnRQZXJtaXNzaW9uID0gJ0FkbWluaXN0cmF0aW9uOkdlbmVyYWwnO1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCByZWFkUGVybWlzc2lvbiA9ICdBZG1pbmlzdHJhdGlvbjpHZW5lcmFsJztcclxuICAgICAgICBleHBvcnQgY29uc3QgdXBkYXRlUGVybWlzc2lvbiA9ICdBZG1pbmlzdHJhdGlvbjpHZW5lcmFsJztcclxuXHJcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgY29uc3QgZW51bSBGaWVsZHMge1xyXG4gICAgICAgICAgICBDdXN0b21lcklkID0gXCJDdXN0b21lcklkXCIsXHJcbiAgICAgICAgICAgIENvbXBhbnlOYW1lID0gXCJDb21wYW55TmFtZVwiLFxyXG4gICAgICAgICAgICBDb250YWN0TmFtZSA9IFwiQ29udGFjdE5hbWVcIixcclxuICAgICAgICAgICAgQ29udGFjdFRpdGxlID0gXCJDb250YWN0VGl0bGVcIixcclxuICAgICAgICAgICAgQWRkcmVzcyA9IFwiQWRkcmVzc1wiLFxyXG4gICAgICAgICAgICBDaXR5ID0gXCJDaXR5XCIsXHJcbiAgICAgICAgICAgIFJlZ2lvbiA9IFwiUmVnaW9uXCIsXHJcbiAgICAgICAgICAgIFBvc3RhbENvZGUgPSBcIlBvc3RhbENvZGVcIixcclxuICAgICAgICAgICAgQ291bnRyeSA9IFwiQ291bnRyeVwiLFxyXG4gICAgICAgICAgICBQaG9uZSA9IFwiUGhvbmVcIixcclxuICAgICAgICAgICAgRmF4ID0gXCJGYXhcIixcclxuICAgICAgICAgICAgSWQgPSBcIklkXCJcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwibmFtZXNwYWNlIFlheGllLk5vcnRoV2luZCB7XHJcbiAgICBleHBvcnQgbmFtZXNwYWNlIEN1c3RvbWVyc1NlcnZpY2Uge1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCBiYXNlVXJsID0gJ05vcnRoV2luZC9DdXN0b21lcnMnO1xyXG5cclxuICAgICAgICBleHBvcnQgZGVjbGFyZSBmdW5jdGlvbiBDcmVhdGUocmVxdWVzdDogU2VyZW5pdHkuU2F2ZVJlcXVlc3Q8Q3VzdG9tZXJzUm93Piwgb25TdWNjZXNzPzogKHJlc3BvbnNlOiBTZXJlbml0eS5TYXZlUmVzcG9uc2UpID0+IHZvaWQsIG9wdD86IFEuU2VydmljZU9wdGlvbnM8YW55Pik6IEpRdWVyeVhIUjtcclxuICAgICAgICBleHBvcnQgZGVjbGFyZSBmdW5jdGlvbiBVcGRhdGUocmVxdWVzdDogU2VyZW5pdHkuU2F2ZVJlcXVlc3Q8Q3VzdG9tZXJzUm93Piwgb25TdWNjZXNzPzogKHJlc3BvbnNlOiBTZXJlbml0eS5TYXZlUmVzcG9uc2UpID0+IHZvaWQsIG9wdD86IFEuU2VydmljZU9wdGlvbnM8YW55Pik6IEpRdWVyeVhIUjtcclxuICAgICAgICBleHBvcnQgZGVjbGFyZSBmdW5jdGlvbiBEZWxldGUocmVxdWVzdDogU2VyZW5pdHkuRGVsZXRlUmVxdWVzdCwgb25TdWNjZXNzPzogKHJlc3BvbnNlOiBTZXJlbml0eS5EZWxldGVSZXNwb25zZSkgPT4gdm9pZCwgb3B0PzogUS5TZXJ2aWNlT3B0aW9uczxhbnk+KTogSlF1ZXJ5WEhSO1xyXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGZ1bmN0aW9uIFJldHJpZXZlKHJlcXVlc3Q6IFNlcmVuaXR5LlJldHJpZXZlUmVxdWVzdCwgb25TdWNjZXNzPzogKHJlc3BvbnNlOiBTZXJlbml0eS5SZXRyaWV2ZVJlc3BvbnNlPEN1c3RvbWVyc1Jvdz4pID0+IHZvaWQsIG9wdD86IFEuU2VydmljZU9wdGlvbnM8YW55Pik6IEpRdWVyeVhIUjtcclxuICAgICAgICBleHBvcnQgZGVjbGFyZSBmdW5jdGlvbiBMaXN0KHJlcXVlc3Q6IFNlcmVuaXR5Lkxpc3RSZXF1ZXN0LCBvblN1Y2Nlc3M/OiAocmVzcG9uc2U6IFNlcmVuaXR5Lkxpc3RSZXNwb25zZTxDdXN0b21lcnNSb3c+KSA9PiB2b2lkLCBvcHQ/OiBRLlNlcnZpY2VPcHRpb25zPGFueT4pOiBKUXVlcnlYSFI7XHJcblxyXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGNvbnN0IGVudW0gTWV0aG9kcyB7XHJcbiAgICAgICAgICAgIENyZWF0ZSA9IFwiTm9ydGhXaW5kL0N1c3RvbWVycy9DcmVhdGVcIixcclxuICAgICAgICAgICAgVXBkYXRlID0gXCJOb3J0aFdpbmQvQ3VzdG9tZXJzL1VwZGF0ZVwiLFxyXG4gICAgICAgICAgICBEZWxldGUgPSBcIk5vcnRoV2luZC9DdXN0b21lcnMvRGVsZXRlXCIsXHJcbiAgICAgICAgICAgIFJldHJpZXZlID0gXCJOb3J0aFdpbmQvQ3VzdG9tZXJzL1JldHJpZXZlXCIsXHJcbiAgICAgICAgICAgIExpc3QgPSBcIk5vcnRoV2luZC9DdXN0b21lcnMvTGlzdFwiXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBbXHJcbiAgICAgICAgICAgICdDcmVhdGUnLCBcclxuICAgICAgICAgICAgJ1VwZGF0ZScsIFxyXG4gICAgICAgICAgICAnRGVsZXRlJywgXHJcbiAgICAgICAgICAgICdSZXRyaWV2ZScsIFxyXG4gICAgICAgICAgICAnTGlzdCdcclxuICAgICAgICBdLmZvckVhY2goeCA9PiB7XHJcbiAgICAgICAgICAgICg8YW55PkN1c3RvbWVyc1NlcnZpY2UpW3hdID0gZnVuY3Rpb24gKHIsIHMsIG8pIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBRLnNlcnZpY2VSZXF1ZXN0KGJhc2VVcmwgKyAnLycgKyB4LCByLCBzLCBvKTtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG4iLCJuYW1lc3BhY2UgWWF4aWUuTm9ydGhXaW5kIHtcclxufVxyXG4iLCJuYW1lc3BhY2UgWWF4aWUuTm9ydGhXaW5kIHtcclxuICAgIGV4cG9ydCBpbnRlcmZhY2UgRW1wbG95ZWVUZXJyaXRvcmllc0Zvcm0ge1xyXG4gICAgICAgIFRlcnJpdG9yeUlkOiBTZXJlbml0eS5TdHJpbmdFZGl0b3I7XHJcbiAgICB9XHJcblxyXG4gICAgZXhwb3J0IGNsYXNzIEVtcGxveWVlVGVycml0b3JpZXNGb3JtIGV4dGVuZHMgU2VyZW5pdHkuUHJlZml4ZWRDb250ZXh0IHtcclxuICAgICAgICBzdGF0aWMgZm9ybUtleSA9ICdOb3J0aFdpbmQuRW1wbG95ZWVUZXJyaXRvcmllcyc7XHJcbiAgICAgICAgcHJpdmF0ZSBzdGF0aWMgaW5pdDogYm9vbGVhbjtcclxuXHJcbiAgICAgICAgY29uc3RydWN0b3IocHJlZml4OiBzdHJpbmcpIHtcclxuICAgICAgICAgICAgc3VwZXIocHJlZml4KTtcclxuXHJcbiAgICAgICAgICAgIGlmICghRW1wbG95ZWVUZXJyaXRvcmllc0Zvcm0uaW5pdCkgIHtcclxuICAgICAgICAgICAgICAgIEVtcGxveWVlVGVycml0b3JpZXNGb3JtLmluaXQgPSB0cnVlO1xyXG5cclxuICAgICAgICAgICAgICAgIHZhciBzID0gU2VyZW5pdHk7XHJcbiAgICAgICAgICAgICAgICB2YXIgdzAgPSBzLlN0cmluZ0VkaXRvcjtcclxuXHJcbiAgICAgICAgICAgICAgICBRLmluaXRGb3JtVHlwZShFbXBsb3llZVRlcnJpdG9yaWVzRm9ybSwgW1xyXG4gICAgICAgICAgICAgICAgICAgICdUZXJyaXRvcnlJZCcsIHcwXHJcbiAgICAgICAgICAgICAgICBdKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCJuYW1lc3BhY2UgWWF4aWUuTm9ydGhXaW5kIHtcclxuICAgIGV4cG9ydCBpbnRlcmZhY2UgRW1wbG95ZWVUZXJyaXRvcmllc1JvdyB7XHJcbiAgICAgICAgRW1wbG95ZWVJZD86IG51bWJlcjtcclxuICAgICAgICBUZXJyaXRvcnlJZD86IHN0cmluZztcclxuICAgICAgICBFbXBsb3llZUxhc3ROYW1lPzogc3RyaW5nO1xyXG4gICAgICAgIEVtcGxveWVlRmlyc3ROYW1lPzogc3RyaW5nO1xyXG4gICAgICAgIEVtcGxveWVlVGl0bGU/OiBzdHJpbmc7XHJcbiAgICAgICAgRW1wbG95ZWVUaXRsZU9mQ291cnRlc3k/OiBzdHJpbmc7XHJcbiAgICAgICAgRW1wbG95ZWVCaXJ0aERhdGU/OiBzdHJpbmc7XHJcbiAgICAgICAgRW1wbG95ZWVIaXJlRGF0ZT86IHN0cmluZztcclxuICAgICAgICBFbXBsb3llZUFkZHJlc3M/OiBzdHJpbmc7XHJcbiAgICAgICAgRW1wbG95ZWVDaXR5Pzogc3RyaW5nO1xyXG4gICAgICAgIEVtcGxveWVlUmVnaW9uPzogc3RyaW5nO1xyXG4gICAgICAgIEVtcGxveWVlUG9zdGFsQ29kZT86IHN0cmluZztcclxuICAgICAgICBFbXBsb3llZUNvdW50cnk/OiBzdHJpbmc7XHJcbiAgICAgICAgRW1wbG95ZWVIb21lUGhvbmU/OiBzdHJpbmc7XHJcbiAgICAgICAgRW1wbG95ZWVFeHRlbnNpb24/OiBzdHJpbmc7XHJcbiAgICAgICAgRW1wbG95ZWVQaG90bz86IG51bWJlcltdO1xyXG4gICAgICAgIEVtcGxveWVlTm90ZXM/OiBzdHJpbmc7XHJcbiAgICAgICAgRW1wbG95ZWVSZXBvcnRzVG8/OiBudW1iZXI7XHJcbiAgICAgICAgRW1wbG95ZWVQaG90b1BhdGg/OiBzdHJpbmc7XHJcbiAgICAgICAgVGVycml0b3J5VGVycml0b3J5RGVzY3JpcHRpb24/OiBzdHJpbmc7XHJcbiAgICAgICAgVGVycml0b3J5UmVnaW9uSWQ/OiBudW1iZXI7XHJcbiAgICAgICAgVGVycml0b3J5SWQxPzogbnVtYmVyO1xyXG4gICAgfVxyXG5cclxuICAgIGV4cG9ydCBuYW1lc3BhY2UgRW1wbG95ZWVUZXJyaXRvcmllc1JvdyB7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IGlkUHJvcGVydHkgPSAnRW1wbG95ZWVJZCc7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IG5hbWVQcm9wZXJ0eSA9ICdUZXJyaXRvcnlJZCc7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IGxvY2FsVGV4dFByZWZpeCA9ICdOb3J0aFdpbmQuRW1wbG95ZWVUZXJyaXRvcmllcyc7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IGRlbGV0ZVBlcm1pc3Npb24gPSAnQWRtaW5pc3RyYXRpb246R2VuZXJhbCc7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IGluc2VydFBlcm1pc3Npb24gPSAnQWRtaW5pc3RyYXRpb246R2VuZXJhbCc7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IHJlYWRQZXJtaXNzaW9uID0gJ0FkbWluaXN0cmF0aW9uOkdlbmVyYWwnO1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCB1cGRhdGVQZXJtaXNzaW9uID0gJ0FkbWluaXN0cmF0aW9uOkdlbmVyYWwnO1xyXG5cclxuICAgICAgICBleHBvcnQgZGVjbGFyZSBjb25zdCBlbnVtIEZpZWxkcyB7XHJcbiAgICAgICAgICAgIEVtcGxveWVlSWQgPSBcIkVtcGxveWVlSWRcIixcclxuICAgICAgICAgICAgVGVycml0b3J5SWQgPSBcIlRlcnJpdG9yeUlkXCIsXHJcbiAgICAgICAgICAgIEVtcGxveWVlTGFzdE5hbWUgPSBcIkVtcGxveWVlTGFzdE5hbWVcIixcclxuICAgICAgICAgICAgRW1wbG95ZWVGaXJzdE5hbWUgPSBcIkVtcGxveWVlRmlyc3ROYW1lXCIsXHJcbiAgICAgICAgICAgIEVtcGxveWVlVGl0bGUgPSBcIkVtcGxveWVlVGl0bGVcIixcclxuICAgICAgICAgICAgRW1wbG95ZWVUaXRsZU9mQ291cnRlc3kgPSBcIkVtcGxveWVlVGl0bGVPZkNvdXJ0ZXN5XCIsXHJcbiAgICAgICAgICAgIEVtcGxveWVlQmlydGhEYXRlID0gXCJFbXBsb3llZUJpcnRoRGF0ZVwiLFxyXG4gICAgICAgICAgICBFbXBsb3llZUhpcmVEYXRlID0gXCJFbXBsb3llZUhpcmVEYXRlXCIsXHJcbiAgICAgICAgICAgIEVtcGxveWVlQWRkcmVzcyA9IFwiRW1wbG95ZWVBZGRyZXNzXCIsXHJcbiAgICAgICAgICAgIEVtcGxveWVlQ2l0eSA9IFwiRW1wbG95ZWVDaXR5XCIsXHJcbiAgICAgICAgICAgIEVtcGxveWVlUmVnaW9uID0gXCJFbXBsb3llZVJlZ2lvblwiLFxyXG4gICAgICAgICAgICBFbXBsb3llZVBvc3RhbENvZGUgPSBcIkVtcGxveWVlUG9zdGFsQ29kZVwiLFxyXG4gICAgICAgICAgICBFbXBsb3llZUNvdW50cnkgPSBcIkVtcGxveWVlQ291bnRyeVwiLFxyXG4gICAgICAgICAgICBFbXBsb3llZUhvbWVQaG9uZSA9IFwiRW1wbG95ZWVIb21lUGhvbmVcIixcclxuICAgICAgICAgICAgRW1wbG95ZWVFeHRlbnNpb24gPSBcIkVtcGxveWVlRXh0ZW5zaW9uXCIsXHJcbiAgICAgICAgICAgIEVtcGxveWVlUGhvdG8gPSBcIkVtcGxveWVlUGhvdG9cIixcclxuICAgICAgICAgICAgRW1wbG95ZWVOb3RlcyA9IFwiRW1wbG95ZWVOb3Rlc1wiLFxyXG4gICAgICAgICAgICBFbXBsb3llZVJlcG9ydHNUbyA9IFwiRW1wbG95ZWVSZXBvcnRzVG9cIixcclxuICAgICAgICAgICAgRW1wbG95ZWVQaG90b1BhdGggPSBcIkVtcGxveWVlUGhvdG9QYXRoXCIsXHJcbiAgICAgICAgICAgIFRlcnJpdG9yeVRlcnJpdG9yeURlc2NyaXB0aW9uID0gXCJUZXJyaXRvcnlUZXJyaXRvcnlEZXNjcmlwdGlvblwiLFxyXG4gICAgICAgICAgICBUZXJyaXRvcnlSZWdpb25JZCA9IFwiVGVycml0b3J5UmVnaW9uSWRcIixcclxuICAgICAgICAgICAgVGVycml0b3J5SWQxID0gXCJUZXJyaXRvcnlJZDFcIlxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCJuYW1lc3BhY2UgWWF4aWUuTm9ydGhXaW5kIHtcclxuICAgIGV4cG9ydCBuYW1lc3BhY2UgRW1wbG95ZWVUZXJyaXRvcmllc1NlcnZpY2Uge1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCBiYXNlVXJsID0gJ05vcnRoV2luZC9FbXBsb3llZVRlcnJpdG9yaWVzJztcclxuXHJcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgZnVuY3Rpb24gQ3JlYXRlKHJlcXVlc3Q6IFNlcmVuaXR5LlNhdmVSZXF1ZXN0PEVtcGxveWVlVGVycml0b3JpZXNSb3c+LCBvblN1Y2Nlc3M/OiAocmVzcG9uc2U6IFNlcmVuaXR5LlNhdmVSZXNwb25zZSkgPT4gdm9pZCwgb3B0PzogUS5TZXJ2aWNlT3B0aW9uczxhbnk+KTogSlF1ZXJ5WEhSO1xyXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGZ1bmN0aW9uIFVwZGF0ZShyZXF1ZXN0OiBTZXJlbml0eS5TYXZlUmVxdWVzdDxFbXBsb3llZVRlcnJpdG9yaWVzUm93Piwgb25TdWNjZXNzPzogKHJlc3BvbnNlOiBTZXJlbml0eS5TYXZlUmVzcG9uc2UpID0+IHZvaWQsIG9wdD86IFEuU2VydmljZU9wdGlvbnM8YW55Pik6IEpRdWVyeVhIUjtcclxuICAgICAgICBleHBvcnQgZGVjbGFyZSBmdW5jdGlvbiBEZWxldGUocmVxdWVzdDogU2VyZW5pdHkuRGVsZXRlUmVxdWVzdCwgb25TdWNjZXNzPzogKHJlc3BvbnNlOiBTZXJlbml0eS5EZWxldGVSZXNwb25zZSkgPT4gdm9pZCwgb3B0PzogUS5TZXJ2aWNlT3B0aW9uczxhbnk+KTogSlF1ZXJ5WEhSO1xyXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGZ1bmN0aW9uIFJldHJpZXZlKHJlcXVlc3Q6IFNlcmVuaXR5LlJldHJpZXZlUmVxdWVzdCwgb25TdWNjZXNzPzogKHJlc3BvbnNlOiBTZXJlbml0eS5SZXRyaWV2ZVJlc3BvbnNlPEVtcGxveWVlVGVycml0b3JpZXNSb3c+KSA9PiB2b2lkLCBvcHQ/OiBRLlNlcnZpY2VPcHRpb25zPGFueT4pOiBKUXVlcnlYSFI7XHJcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgZnVuY3Rpb24gTGlzdChyZXF1ZXN0OiBTZXJlbml0eS5MaXN0UmVxdWVzdCwgb25TdWNjZXNzPzogKHJlc3BvbnNlOiBTZXJlbml0eS5MaXN0UmVzcG9uc2U8RW1wbG95ZWVUZXJyaXRvcmllc1Jvdz4pID0+IHZvaWQsIG9wdD86IFEuU2VydmljZU9wdGlvbnM8YW55Pik6IEpRdWVyeVhIUjtcclxuXHJcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgY29uc3QgZW51bSBNZXRob2RzIHtcclxuICAgICAgICAgICAgQ3JlYXRlID0gXCJOb3J0aFdpbmQvRW1wbG95ZWVUZXJyaXRvcmllcy9DcmVhdGVcIixcclxuICAgICAgICAgICAgVXBkYXRlID0gXCJOb3J0aFdpbmQvRW1wbG95ZWVUZXJyaXRvcmllcy9VcGRhdGVcIixcclxuICAgICAgICAgICAgRGVsZXRlID0gXCJOb3J0aFdpbmQvRW1wbG95ZWVUZXJyaXRvcmllcy9EZWxldGVcIixcclxuICAgICAgICAgICAgUmV0cmlldmUgPSBcIk5vcnRoV2luZC9FbXBsb3llZVRlcnJpdG9yaWVzL1JldHJpZXZlXCIsXHJcbiAgICAgICAgICAgIExpc3QgPSBcIk5vcnRoV2luZC9FbXBsb3llZVRlcnJpdG9yaWVzL0xpc3RcIlxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgW1xyXG4gICAgICAgICAgICAnQ3JlYXRlJywgXHJcbiAgICAgICAgICAgICdVcGRhdGUnLCBcclxuICAgICAgICAgICAgJ0RlbGV0ZScsIFxyXG4gICAgICAgICAgICAnUmV0cmlldmUnLCBcclxuICAgICAgICAgICAgJ0xpc3QnXHJcbiAgICAgICAgXS5mb3JFYWNoKHggPT4ge1xyXG4gICAgICAgICAgICAoPGFueT5FbXBsb3llZVRlcnJpdG9yaWVzU2VydmljZSlbeF0gPSBmdW5jdGlvbiAociwgcywgbykge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFEuc2VydmljZVJlcXVlc3QoYmFzZVVybCArICcvJyArIHgsIHIsIHMsIG8pO1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcbiIsIm5hbWVzcGFjZSBZYXhpZS5Ob3J0aFdpbmQge1xyXG59XHJcbiIsIm5hbWVzcGFjZSBZYXhpZS5Ob3J0aFdpbmQge1xyXG4gICAgZXhwb3J0IGludGVyZmFjZSBFbXBsb3llZXNGb3JtIHtcclxuICAgICAgICBMYXN0TmFtZTogU2VyZW5pdHkuU3RyaW5nRWRpdG9yO1xyXG4gICAgICAgIEZpcnN0TmFtZTogU2VyZW5pdHkuU3RyaW5nRWRpdG9yO1xyXG4gICAgICAgIFRpdGxlOiBTZXJlbml0eS5TdHJpbmdFZGl0b3I7XHJcbiAgICAgICAgVGl0bGVPZkNvdXJ0ZXN5OiBTZXJlbml0eS5TdHJpbmdFZGl0b3I7XHJcbiAgICAgICAgQmlydGhEYXRlOiBTZXJlbml0eS5EYXRlRWRpdG9yO1xyXG4gICAgICAgIEhpcmVEYXRlOiBTZXJlbml0eS5EYXRlRWRpdG9yO1xyXG4gICAgICAgIEFkZHJlc3M6IFNlcmVuaXR5LlN0cmluZ0VkaXRvcjtcclxuICAgICAgICBDaXR5OiBTZXJlbml0eS5TdHJpbmdFZGl0b3I7XHJcbiAgICAgICAgUmVnaW9uOiBTZXJlbml0eS5TdHJpbmdFZGl0b3I7XHJcbiAgICAgICAgUG9zdGFsQ29kZTogU2VyZW5pdHkuU3RyaW5nRWRpdG9yO1xyXG4gICAgICAgIENvdW50cnk6IFNlcmVuaXR5LlN0cmluZ0VkaXRvcjtcclxuICAgICAgICBIb21lUGhvbmU6IFNlcmVuaXR5LlN0cmluZ0VkaXRvcjtcclxuICAgICAgICBFeHRlbnNpb246IFNlcmVuaXR5LlN0cmluZ0VkaXRvcjtcclxuICAgICAgICBQaG90bzogU2VyZW5pdHkuU3RyaW5nRWRpdG9yO1xyXG4gICAgICAgIE5vdGVzOiBTZXJlbml0eS5TdHJpbmdFZGl0b3I7XHJcbiAgICAgICAgUmVwb3J0c1RvOiBTZXJlbml0eS5JbnRlZ2VyRWRpdG9yO1xyXG4gICAgICAgIFBob3RvUGF0aDogU2VyZW5pdHkuU3RyaW5nRWRpdG9yO1xyXG4gICAgfVxyXG5cclxuICAgIGV4cG9ydCBjbGFzcyBFbXBsb3llZXNGb3JtIGV4dGVuZHMgU2VyZW5pdHkuUHJlZml4ZWRDb250ZXh0IHtcclxuICAgICAgICBzdGF0aWMgZm9ybUtleSA9ICdOb3J0aFdpbmQuRW1wbG95ZWVzJztcclxuICAgICAgICBwcml2YXRlIHN0YXRpYyBpbml0OiBib29sZWFuO1xyXG5cclxuICAgICAgICBjb25zdHJ1Y3RvcihwcmVmaXg6IHN0cmluZykge1xyXG4gICAgICAgICAgICBzdXBlcihwcmVmaXgpO1xyXG5cclxuICAgICAgICAgICAgaWYgKCFFbXBsb3llZXNGb3JtLmluaXQpICB7XHJcbiAgICAgICAgICAgICAgICBFbXBsb3llZXNGb3JtLmluaXQgPSB0cnVlO1xyXG5cclxuICAgICAgICAgICAgICAgIHZhciBzID0gU2VyZW5pdHk7XHJcbiAgICAgICAgICAgICAgICB2YXIgdzAgPSBzLlN0cmluZ0VkaXRvcjtcclxuICAgICAgICAgICAgICAgIHZhciB3MSA9IHMuRGF0ZUVkaXRvcjtcclxuICAgICAgICAgICAgICAgIHZhciB3MiA9IHMuSW50ZWdlckVkaXRvcjtcclxuXHJcbiAgICAgICAgICAgICAgICBRLmluaXRGb3JtVHlwZShFbXBsb3llZXNGb3JtLCBbXHJcbiAgICAgICAgICAgICAgICAgICAgJ0xhc3ROYW1lJywgdzAsXHJcbiAgICAgICAgICAgICAgICAgICAgJ0ZpcnN0TmFtZScsIHcwLFxyXG4gICAgICAgICAgICAgICAgICAgICdUaXRsZScsIHcwLFxyXG4gICAgICAgICAgICAgICAgICAgICdUaXRsZU9mQ291cnRlc3knLCB3MCxcclxuICAgICAgICAgICAgICAgICAgICAnQmlydGhEYXRlJywgdzEsXHJcbiAgICAgICAgICAgICAgICAgICAgJ0hpcmVEYXRlJywgdzEsXHJcbiAgICAgICAgICAgICAgICAgICAgJ0FkZHJlc3MnLCB3MCxcclxuICAgICAgICAgICAgICAgICAgICAnQ2l0eScsIHcwLFxyXG4gICAgICAgICAgICAgICAgICAgICdSZWdpb24nLCB3MCxcclxuICAgICAgICAgICAgICAgICAgICAnUG9zdGFsQ29kZScsIHcwLFxyXG4gICAgICAgICAgICAgICAgICAgICdDb3VudHJ5JywgdzAsXHJcbiAgICAgICAgICAgICAgICAgICAgJ0hvbWVQaG9uZScsIHcwLFxyXG4gICAgICAgICAgICAgICAgICAgICdFeHRlbnNpb24nLCB3MCxcclxuICAgICAgICAgICAgICAgICAgICAnUGhvdG8nLCB3MCxcclxuICAgICAgICAgICAgICAgICAgICAnTm90ZXMnLCB3MCxcclxuICAgICAgICAgICAgICAgICAgICAnUmVwb3J0c1RvJywgdzIsXHJcbiAgICAgICAgICAgICAgICAgICAgJ1Bob3RvUGF0aCcsIHcwXHJcbiAgICAgICAgICAgICAgICBdKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCJuYW1lc3BhY2UgWWF4aWUuTm9ydGhXaW5kIHtcclxuICAgIGV4cG9ydCBpbnRlcmZhY2UgRW1wbG95ZWVzUm93IHtcclxuICAgICAgICBFbXBsb3llZUlkPzogbnVtYmVyO1xyXG4gICAgICAgIExhc3ROYW1lPzogc3RyaW5nO1xyXG4gICAgICAgIEZpcnN0TmFtZT86IHN0cmluZztcclxuICAgICAgICBUaXRsZT86IHN0cmluZztcclxuICAgICAgICBUaXRsZU9mQ291cnRlc3k/OiBzdHJpbmc7XHJcbiAgICAgICAgQmlydGhEYXRlPzogc3RyaW5nO1xyXG4gICAgICAgIEhpcmVEYXRlPzogc3RyaW5nO1xyXG4gICAgICAgIEFkZHJlc3M/OiBzdHJpbmc7XHJcbiAgICAgICAgQ2l0eT86IHN0cmluZztcclxuICAgICAgICBSZWdpb24/OiBzdHJpbmc7XHJcbiAgICAgICAgUG9zdGFsQ29kZT86IHN0cmluZztcclxuICAgICAgICBDb3VudHJ5Pzogc3RyaW5nO1xyXG4gICAgICAgIEhvbWVQaG9uZT86IHN0cmluZztcclxuICAgICAgICBFeHRlbnNpb24/OiBzdHJpbmc7XHJcbiAgICAgICAgUGhvdG8/OiBudW1iZXJbXTtcclxuICAgICAgICBOb3Rlcz86IHN0cmluZztcclxuICAgICAgICBSZXBvcnRzVG8/OiBudW1iZXI7XHJcbiAgICAgICAgUGhvdG9QYXRoPzogc3RyaW5nO1xyXG4gICAgICAgIFJlcG9ydHNUb0xhc3ROYW1lPzogc3RyaW5nO1xyXG4gICAgICAgIFJlcG9ydHNUb0ZpcnN0TmFtZT86IHN0cmluZztcclxuICAgICAgICBSZXBvcnRzVG9UaXRsZT86IHN0cmluZztcclxuICAgICAgICBSZXBvcnRzVG9UaXRsZU9mQ291cnRlc3k/OiBzdHJpbmc7XHJcbiAgICAgICAgUmVwb3J0c1RvQmlydGhEYXRlPzogc3RyaW5nO1xyXG4gICAgICAgIFJlcG9ydHNUb0hpcmVEYXRlPzogc3RyaW5nO1xyXG4gICAgICAgIFJlcG9ydHNUb0FkZHJlc3M/OiBzdHJpbmc7XHJcbiAgICAgICAgUmVwb3J0c1RvQ2l0eT86IHN0cmluZztcclxuICAgICAgICBSZXBvcnRzVG9SZWdpb24/OiBzdHJpbmc7XHJcbiAgICAgICAgUmVwb3J0c1RvUG9zdGFsQ29kZT86IHN0cmluZztcclxuICAgICAgICBSZXBvcnRzVG9Db3VudHJ5Pzogc3RyaW5nO1xyXG4gICAgICAgIFJlcG9ydHNUb0hvbWVQaG9uZT86IHN0cmluZztcclxuICAgICAgICBSZXBvcnRzVG9FeHRlbnNpb24/OiBzdHJpbmc7XHJcbiAgICAgICAgUmVwb3J0c1RvUGhvdG8/OiBudW1iZXJbXTtcclxuICAgICAgICBSZXBvcnRzVG9Ob3Rlcz86IHN0cmluZztcclxuICAgICAgICBSZXBvcnRzVG8xPzogbnVtYmVyO1xyXG4gICAgICAgIFJlcG9ydHNUb1Bob3RvUGF0aD86IHN0cmluZztcclxuICAgIH1cclxuXHJcbiAgICBleHBvcnQgbmFtZXNwYWNlIEVtcGxveWVlc1JvdyB7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IGlkUHJvcGVydHkgPSAnRW1wbG95ZWVJZCc7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IG5hbWVQcm9wZXJ0eSA9ICdMYXN0TmFtZSc7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IGxvY2FsVGV4dFByZWZpeCA9ICdOb3J0aFdpbmQuRW1wbG95ZWVzJztcclxuICAgICAgICBleHBvcnQgY29uc3QgZGVsZXRlUGVybWlzc2lvbiA9ICdBZG1pbmlzdHJhdGlvbjpHZW5lcmFsJztcclxuICAgICAgICBleHBvcnQgY29uc3QgaW5zZXJ0UGVybWlzc2lvbiA9ICdBZG1pbmlzdHJhdGlvbjpHZW5lcmFsJztcclxuICAgICAgICBleHBvcnQgY29uc3QgcmVhZFBlcm1pc3Npb24gPSAnQWRtaW5pc3RyYXRpb246R2VuZXJhbCc7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IHVwZGF0ZVBlcm1pc3Npb24gPSAnQWRtaW5pc3RyYXRpb246R2VuZXJhbCc7XHJcblxyXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGNvbnN0IGVudW0gRmllbGRzIHtcclxuICAgICAgICAgICAgRW1wbG95ZWVJZCA9IFwiRW1wbG95ZWVJZFwiLFxyXG4gICAgICAgICAgICBMYXN0TmFtZSA9IFwiTGFzdE5hbWVcIixcclxuICAgICAgICAgICAgRmlyc3ROYW1lID0gXCJGaXJzdE5hbWVcIixcclxuICAgICAgICAgICAgVGl0bGUgPSBcIlRpdGxlXCIsXHJcbiAgICAgICAgICAgIFRpdGxlT2ZDb3VydGVzeSA9IFwiVGl0bGVPZkNvdXJ0ZXN5XCIsXHJcbiAgICAgICAgICAgIEJpcnRoRGF0ZSA9IFwiQmlydGhEYXRlXCIsXHJcbiAgICAgICAgICAgIEhpcmVEYXRlID0gXCJIaXJlRGF0ZVwiLFxyXG4gICAgICAgICAgICBBZGRyZXNzID0gXCJBZGRyZXNzXCIsXHJcbiAgICAgICAgICAgIENpdHkgPSBcIkNpdHlcIixcclxuICAgICAgICAgICAgUmVnaW9uID0gXCJSZWdpb25cIixcclxuICAgICAgICAgICAgUG9zdGFsQ29kZSA9IFwiUG9zdGFsQ29kZVwiLFxyXG4gICAgICAgICAgICBDb3VudHJ5ID0gXCJDb3VudHJ5XCIsXHJcbiAgICAgICAgICAgIEhvbWVQaG9uZSA9IFwiSG9tZVBob25lXCIsXHJcbiAgICAgICAgICAgIEV4dGVuc2lvbiA9IFwiRXh0ZW5zaW9uXCIsXHJcbiAgICAgICAgICAgIFBob3RvID0gXCJQaG90b1wiLFxyXG4gICAgICAgICAgICBOb3RlcyA9IFwiTm90ZXNcIixcclxuICAgICAgICAgICAgUmVwb3J0c1RvID0gXCJSZXBvcnRzVG9cIixcclxuICAgICAgICAgICAgUGhvdG9QYXRoID0gXCJQaG90b1BhdGhcIixcclxuICAgICAgICAgICAgUmVwb3J0c1RvTGFzdE5hbWUgPSBcIlJlcG9ydHNUb0xhc3ROYW1lXCIsXHJcbiAgICAgICAgICAgIFJlcG9ydHNUb0ZpcnN0TmFtZSA9IFwiUmVwb3J0c1RvRmlyc3ROYW1lXCIsXHJcbiAgICAgICAgICAgIFJlcG9ydHNUb1RpdGxlID0gXCJSZXBvcnRzVG9UaXRsZVwiLFxyXG4gICAgICAgICAgICBSZXBvcnRzVG9UaXRsZU9mQ291cnRlc3kgPSBcIlJlcG9ydHNUb1RpdGxlT2ZDb3VydGVzeVwiLFxyXG4gICAgICAgICAgICBSZXBvcnRzVG9CaXJ0aERhdGUgPSBcIlJlcG9ydHNUb0JpcnRoRGF0ZVwiLFxyXG4gICAgICAgICAgICBSZXBvcnRzVG9IaXJlRGF0ZSA9IFwiUmVwb3J0c1RvSGlyZURhdGVcIixcclxuICAgICAgICAgICAgUmVwb3J0c1RvQWRkcmVzcyA9IFwiUmVwb3J0c1RvQWRkcmVzc1wiLFxyXG4gICAgICAgICAgICBSZXBvcnRzVG9DaXR5ID0gXCJSZXBvcnRzVG9DaXR5XCIsXHJcbiAgICAgICAgICAgIFJlcG9ydHNUb1JlZ2lvbiA9IFwiUmVwb3J0c1RvUmVnaW9uXCIsXHJcbiAgICAgICAgICAgIFJlcG9ydHNUb1Bvc3RhbENvZGUgPSBcIlJlcG9ydHNUb1Bvc3RhbENvZGVcIixcclxuICAgICAgICAgICAgUmVwb3J0c1RvQ291bnRyeSA9IFwiUmVwb3J0c1RvQ291bnRyeVwiLFxyXG4gICAgICAgICAgICBSZXBvcnRzVG9Ib21lUGhvbmUgPSBcIlJlcG9ydHNUb0hvbWVQaG9uZVwiLFxyXG4gICAgICAgICAgICBSZXBvcnRzVG9FeHRlbnNpb24gPSBcIlJlcG9ydHNUb0V4dGVuc2lvblwiLFxyXG4gICAgICAgICAgICBSZXBvcnRzVG9QaG90byA9IFwiUmVwb3J0c1RvUGhvdG9cIixcclxuICAgICAgICAgICAgUmVwb3J0c1RvTm90ZXMgPSBcIlJlcG9ydHNUb05vdGVzXCIsXHJcbiAgICAgICAgICAgIFJlcG9ydHNUbzEgPSBcIlJlcG9ydHNUbzFcIixcclxuICAgICAgICAgICAgUmVwb3J0c1RvUGhvdG9QYXRoID0gXCJSZXBvcnRzVG9QaG90b1BhdGhcIlxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCJuYW1lc3BhY2UgWWF4aWUuTm9ydGhXaW5kIHtcclxuICAgIGV4cG9ydCBuYW1lc3BhY2UgRW1wbG95ZWVzU2VydmljZSB7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IGJhc2VVcmwgPSAnTm9ydGhXaW5kL0VtcGxveWVlcyc7XHJcblxyXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGZ1bmN0aW9uIENyZWF0ZShyZXF1ZXN0OiBTZXJlbml0eS5TYXZlUmVxdWVzdDxFbXBsb3llZXNSb3c+LCBvblN1Y2Nlc3M/OiAocmVzcG9uc2U6IFNlcmVuaXR5LlNhdmVSZXNwb25zZSkgPT4gdm9pZCwgb3B0PzogUS5TZXJ2aWNlT3B0aW9uczxhbnk+KTogSlF1ZXJ5WEhSO1xyXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGZ1bmN0aW9uIFVwZGF0ZShyZXF1ZXN0OiBTZXJlbml0eS5TYXZlUmVxdWVzdDxFbXBsb3llZXNSb3c+LCBvblN1Y2Nlc3M/OiAocmVzcG9uc2U6IFNlcmVuaXR5LlNhdmVSZXNwb25zZSkgPT4gdm9pZCwgb3B0PzogUS5TZXJ2aWNlT3B0aW9uczxhbnk+KTogSlF1ZXJ5WEhSO1xyXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGZ1bmN0aW9uIERlbGV0ZShyZXF1ZXN0OiBTZXJlbml0eS5EZWxldGVSZXF1ZXN0LCBvblN1Y2Nlc3M/OiAocmVzcG9uc2U6IFNlcmVuaXR5LkRlbGV0ZVJlc3BvbnNlKSA9PiB2b2lkLCBvcHQ/OiBRLlNlcnZpY2VPcHRpb25zPGFueT4pOiBKUXVlcnlYSFI7XHJcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgZnVuY3Rpb24gUmV0cmlldmUocmVxdWVzdDogU2VyZW5pdHkuUmV0cmlldmVSZXF1ZXN0LCBvblN1Y2Nlc3M/OiAocmVzcG9uc2U6IFNlcmVuaXR5LlJldHJpZXZlUmVzcG9uc2U8RW1wbG95ZWVzUm93PikgPT4gdm9pZCwgb3B0PzogUS5TZXJ2aWNlT3B0aW9uczxhbnk+KTogSlF1ZXJ5WEhSO1xyXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGZ1bmN0aW9uIExpc3QocmVxdWVzdDogU2VyZW5pdHkuTGlzdFJlcXVlc3QsIG9uU3VjY2Vzcz86IChyZXNwb25zZTogU2VyZW5pdHkuTGlzdFJlc3BvbnNlPEVtcGxveWVlc1Jvdz4pID0+IHZvaWQsIG9wdD86IFEuU2VydmljZU9wdGlvbnM8YW55Pik6IEpRdWVyeVhIUjtcclxuXHJcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgY29uc3QgZW51bSBNZXRob2RzIHtcclxuICAgICAgICAgICAgQ3JlYXRlID0gXCJOb3J0aFdpbmQvRW1wbG95ZWVzL0NyZWF0ZVwiLFxyXG4gICAgICAgICAgICBVcGRhdGUgPSBcIk5vcnRoV2luZC9FbXBsb3llZXMvVXBkYXRlXCIsXHJcbiAgICAgICAgICAgIERlbGV0ZSA9IFwiTm9ydGhXaW5kL0VtcGxveWVlcy9EZWxldGVcIixcclxuICAgICAgICAgICAgUmV0cmlldmUgPSBcIk5vcnRoV2luZC9FbXBsb3llZXMvUmV0cmlldmVcIixcclxuICAgICAgICAgICAgTGlzdCA9IFwiTm9ydGhXaW5kL0VtcGxveWVlcy9MaXN0XCJcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIFtcclxuICAgICAgICAgICAgJ0NyZWF0ZScsIFxyXG4gICAgICAgICAgICAnVXBkYXRlJywgXHJcbiAgICAgICAgICAgICdEZWxldGUnLCBcclxuICAgICAgICAgICAgJ1JldHJpZXZlJywgXHJcbiAgICAgICAgICAgICdMaXN0J1xyXG4gICAgICAgIF0uZm9yRWFjaCh4ID0+IHtcclxuICAgICAgICAgICAgKDxhbnk+RW1wbG95ZWVzU2VydmljZSlbeF0gPSBmdW5jdGlvbiAociwgcywgbykge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFEuc2VydmljZVJlcXVlc3QoYmFzZVVybCArICcvJyArIHgsIHIsIHMsIG8pO1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcbiIsIm5hbWVzcGFjZSBZYXhpZS5Ob3J0aFdpbmQge1xyXG59XHJcbiIsIm5hbWVzcGFjZSBZYXhpZS5Ob3J0aFdpbmQge1xyXG4gICAgZXhwb3J0IGludGVyZmFjZSBJbnZvaWNlc0Zvcm0ge1xyXG4gICAgICAgIFNoaXBBZGRyZXNzOiBTZXJlbml0eS5TdHJpbmdFZGl0b3I7XHJcbiAgICAgICAgU2hpcENpdHk6IFNlcmVuaXR5LlN0cmluZ0VkaXRvcjtcclxuICAgICAgICBTaGlwUmVnaW9uOiBTZXJlbml0eS5TdHJpbmdFZGl0b3I7XHJcbiAgICAgICAgU2hpcFBvc3RhbENvZGU6IFNlcmVuaXR5LlN0cmluZ0VkaXRvcjtcclxuICAgICAgICBTaGlwQ291bnRyeTogU2VyZW5pdHkuU3RyaW5nRWRpdG9yO1xyXG4gICAgICAgIEN1c3RvbWVySWQ6IFNlcmVuaXR5LlN0cmluZ0VkaXRvcjtcclxuICAgICAgICBDdXN0b21lck5hbWU6IFNlcmVuaXR5LlN0cmluZ0VkaXRvcjtcclxuICAgICAgICBBZGRyZXNzOiBTZXJlbml0eS5TdHJpbmdFZGl0b3I7XHJcbiAgICAgICAgQ2l0eTogU2VyZW5pdHkuU3RyaW5nRWRpdG9yO1xyXG4gICAgICAgIFJlZ2lvbjogU2VyZW5pdHkuU3RyaW5nRWRpdG9yO1xyXG4gICAgICAgIFBvc3RhbENvZGU6IFNlcmVuaXR5LlN0cmluZ0VkaXRvcjtcclxuICAgICAgICBDb3VudHJ5OiBTZXJlbml0eS5TdHJpbmdFZGl0b3I7XHJcbiAgICAgICAgU2FsZXNwZXJzb246IFNlcmVuaXR5LlN0cmluZ0VkaXRvcjtcclxuICAgICAgICBPcmRlcklkOiBTZXJlbml0eS5JbnRlZ2VyRWRpdG9yO1xyXG4gICAgICAgIE9yZGVyRGF0ZTogU2VyZW5pdHkuRGF0ZUVkaXRvcjtcclxuICAgICAgICBSZXF1aXJlZERhdGU6IFNlcmVuaXR5LkRhdGVFZGl0b3I7XHJcbiAgICAgICAgU2hpcHBlZERhdGU6IFNlcmVuaXR5LkRhdGVFZGl0b3I7XHJcbiAgICAgICAgU2hpcHBlck5hbWU6IFNlcmVuaXR5LlN0cmluZ0VkaXRvcjtcclxuICAgICAgICBQcm9kdWN0SWQ6IFNlcmVuaXR5LkludGVnZXJFZGl0b3I7XHJcbiAgICAgICAgUHJvZHVjdE5hbWU6IFNlcmVuaXR5LlN0cmluZ0VkaXRvcjtcclxuICAgICAgICBVbml0UHJpY2U6IFNlcmVuaXR5LkRlY2ltYWxFZGl0b3I7XHJcbiAgICAgICAgUXVhbnRpdHk6IFNlcmVuaXR5LkludGVnZXJFZGl0b3I7XHJcbiAgICAgICAgRGlzY291bnQ6IFNlcmVuaXR5LkRlY2ltYWxFZGl0b3I7XHJcbiAgICAgICAgRXh0ZW5kZWRQcmljZTogU2VyZW5pdHkuRGVjaW1hbEVkaXRvcjtcclxuICAgICAgICBGcmVpZ2h0OiBTZXJlbml0eS5EZWNpbWFsRWRpdG9yO1xyXG4gICAgfVxyXG5cclxuICAgIGV4cG9ydCBjbGFzcyBJbnZvaWNlc0Zvcm0gZXh0ZW5kcyBTZXJlbml0eS5QcmVmaXhlZENvbnRleHQge1xyXG4gICAgICAgIHN0YXRpYyBmb3JtS2V5ID0gJ05vcnRoV2luZC5JbnZvaWNlcyc7XHJcbiAgICAgICAgcHJpdmF0ZSBzdGF0aWMgaW5pdDogYm9vbGVhbjtcclxuXHJcbiAgICAgICAgY29uc3RydWN0b3IocHJlZml4OiBzdHJpbmcpIHtcclxuICAgICAgICAgICAgc3VwZXIocHJlZml4KTtcclxuXHJcbiAgICAgICAgICAgIGlmICghSW52b2ljZXNGb3JtLmluaXQpICB7XHJcbiAgICAgICAgICAgICAgICBJbnZvaWNlc0Zvcm0uaW5pdCA9IHRydWU7XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIHMgPSBTZXJlbml0eTtcclxuICAgICAgICAgICAgICAgIHZhciB3MCA9IHMuU3RyaW5nRWRpdG9yO1xyXG4gICAgICAgICAgICAgICAgdmFyIHcxID0gcy5JbnRlZ2VyRWRpdG9yO1xyXG4gICAgICAgICAgICAgICAgdmFyIHcyID0gcy5EYXRlRWRpdG9yO1xyXG4gICAgICAgICAgICAgICAgdmFyIHczID0gcy5EZWNpbWFsRWRpdG9yO1xyXG5cclxuICAgICAgICAgICAgICAgIFEuaW5pdEZvcm1UeXBlKEludm9pY2VzRm9ybSwgW1xyXG4gICAgICAgICAgICAgICAgICAgICdTaGlwQWRkcmVzcycsIHcwLFxyXG4gICAgICAgICAgICAgICAgICAgICdTaGlwQ2l0eScsIHcwLFxyXG4gICAgICAgICAgICAgICAgICAgICdTaGlwUmVnaW9uJywgdzAsXHJcbiAgICAgICAgICAgICAgICAgICAgJ1NoaXBQb3N0YWxDb2RlJywgdzAsXHJcbiAgICAgICAgICAgICAgICAgICAgJ1NoaXBDb3VudHJ5JywgdzAsXHJcbiAgICAgICAgICAgICAgICAgICAgJ0N1c3RvbWVySWQnLCB3MCxcclxuICAgICAgICAgICAgICAgICAgICAnQ3VzdG9tZXJOYW1lJywgdzAsXHJcbiAgICAgICAgICAgICAgICAgICAgJ0FkZHJlc3MnLCB3MCxcclxuICAgICAgICAgICAgICAgICAgICAnQ2l0eScsIHcwLFxyXG4gICAgICAgICAgICAgICAgICAgICdSZWdpb24nLCB3MCxcclxuICAgICAgICAgICAgICAgICAgICAnUG9zdGFsQ29kZScsIHcwLFxyXG4gICAgICAgICAgICAgICAgICAgICdDb3VudHJ5JywgdzAsXHJcbiAgICAgICAgICAgICAgICAgICAgJ1NhbGVzcGVyc29uJywgdzAsXHJcbiAgICAgICAgICAgICAgICAgICAgJ09yZGVySWQnLCB3MSxcclxuICAgICAgICAgICAgICAgICAgICAnT3JkZXJEYXRlJywgdzIsXHJcbiAgICAgICAgICAgICAgICAgICAgJ1JlcXVpcmVkRGF0ZScsIHcyLFxyXG4gICAgICAgICAgICAgICAgICAgICdTaGlwcGVkRGF0ZScsIHcyLFxyXG4gICAgICAgICAgICAgICAgICAgICdTaGlwcGVyTmFtZScsIHcwLFxyXG4gICAgICAgICAgICAgICAgICAgICdQcm9kdWN0SWQnLCB3MSxcclxuICAgICAgICAgICAgICAgICAgICAnUHJvZHVjdE5hbWUnLCB3MCxcclxuICAgICAgICAgICAgICAgICAgICAnVW5pdFByaWNlJywgdzMsXHJcbiAgICAgICAgICAgICAgICAgICAgJ1F1YW50aXR5JywgdzEsXHJcbiAgICAgICAgICAgICAgICAgICAgJ0Rpc2NvdW50JywgdzMsXHJcbiAgICAgICAgICAgICAgICAgICAgJ0V4dGVuZGVkUHJpY2UnLCB3MyxcclxuICAgICAgICAgICAgICAgICAgICAnRnJlaWdodCcsIHczXHJcbiAgICAgICAgICAgICAgICBdKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCJuYW1lc3BhY2UgWWF4aWUuTm9ydGhXaW5kIHtcclxuICAgIGV4cG9ydCBpbnRlcmZhY2UgSW52b2ljZXNSb3cge1xyXG4gICAgICAgIFNoaXBOYW1lPzogc3RyaW5nO1xyXG4gICAgICAgIFNoaXBBZGRyZXNzPzogc3RyaW5nO1xyXG4gICAgICAgIFNoaXBDaXR5Pzogc3RyaW5nO1xyXG4gICAgICAgIFNoaXBSZWdpb24/OiBzdHJpbmc7XHJcbiAgICAgICAgU2hpcFBvc3RhbENvZGU/OiBzdHJpbmc7XHJcbiAgICAgICAgU2hpcENvdW50cnk/OiBzdHJpbmc7XHJcbiAgICAgICAgQ3VzdG9tZXJJZD86IHN0cmluZztcclxuICAgICAgICBDdXN0b21lck5hbWU/OiBzdHJpbmc7XHJcbiAgICAgICAgQWRkcmVzcz86IHN0cmluZztcclxuICAgICAgICBDaXR5Pzogc3RyaW5nO1xyXG4gICAgICAgIFJlZ2lvbj86IHN0cmluZztcclxuICAgICAgICBQb3N0YWxDb2RlPzogc3RyaW5nO1xyXG4gICAgICAgIENvdW50cnk/OiBzdHJpbmc7XHJcbiAgICAgICAgU2FsZXNwZXJzb24/OiBzdHJpbmc7XHJcbiAgICAgICAgT3JkZXJJZD86IG51bWJlcjtcclxuICAgICAgICBPcmRlckRhdGU/OiBzdHJpbmc7XHJcbiAgICAgICAgUmVxdWlyZWREYXRlPzogc3RyaW5nO1xyXG4gICAgICAgIFNoaXBwZWREYXRlPzogc3RyaW5nO1xyXG4gICAgICAgIFNoaXBwZXJOYW1lPzogc3RyaW5nO1xyXG4gICAgICAgIFByb2R1Y3RJZD86IG51bWJlcjtcclxuICAgICAgICBQcm9kdWN0TmFtZT86IHN0cmluZztcclxuICAgICAgICBVbml0UHJpY2U/OiBudW1iZXI7XHJcbiAgICAgICAgUXVhbnRpdHk/OiBudW1iZXI7XHJcbiAgICAgICAgRGlzY291bnQ/OiBudW1iZXI7XHJcbiAgICAgICAgRXh0ZW5kZWRQcmljZT86IG51bWJlcjtcclxuICAgICAgICBGcmVpZ2h0PzogbnVtYmVyO1xyXG4gICAgfVxyXG5cclxuICAgIGV4cG9ydCBuYW1lc3BhY2UgSW52b2ljZXNSb3cge1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCBpZFByb3BlcnR5ID0gJ1NoaXBOYW1lJztcclxuICAgICAgICBleHBvcnQgY29uc3QgbmFtZVByb3BlcnR5ID0gJ1NoaXBOYW1lJztcclxuICAgICAgICBleHBvcnQgY29uc3QgbG9jYWxUZXh0UHJlZml4ID0gJ05vcnRoV2luZC5JbnZvaWNlcyc7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IGRlbGV0ZVBlcm1pc3Npb24gPSAnQWRtaW5pc3RyYXRpb246R2VuZXJhbCc7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IGluc2VydFBlcm1pc3Npb24gPSAnQWRtaW5pc3RyYXRpb246R2VuZXJhbCc7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IHJlYWRQZXJtaXNzaW9uID0gJ0FkbWluaXN0cmF0aW9uOkdlbmVyYWwnO1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCB1cGRhdGVQZXJtaXNzaW9uID0gJ0FkbWluaXN0cmF0aW9uOkdlbmVyYWwnO1xyXG5cclxuICAgICAgICBleHBvcnQgZGVjbGFyZSBjb25zdCBlbnVtIEZpZWxkcyB7XHJcbiAgICAgICAgICAgIFNoaXBOYW1lID0gXCJTaGlwTmFtZVwiLFxyXG4gICAgICAgICAgICBTaGlwQWRkcmVzcyA9IFwiU2hpcEFkZHJlc3NcIixcclxuICAgICAgICAgICAgU2hpcENpdHkgPSBcIlNoaXBDaXR5XCIsXHJcbiAgICAgICAgICAgIFNoaXBSZWdpb24gPSBcIlNoaXBSZWdpb25cIixcclxuICAgICAgICAgICAgU2hpcFBvc3RhbENvZGUgPSBcIlNoaXBQb3N0YWxDb2RlXCIsXHJcbiAgICAgICAgICAgIFNoaXBDb3VudHJ5ID0gXCJTaGlwQ291bnRyeVwiLFxyXG4gICAgICAgICAgICBDdXN0b21lcklkID0gXCJDdXN0b21lcklkXCIsXHJcbiAgICAgICAgICAgIEN1c3RvbWVyTmFtZSA9IFwiQ3VzdG9tZXJOYW1lXCIsXHJcbiAgICAgICAgICAgIEFkZHJlc3MgPSBcIkFkZHJlc3NcIixcclxuICAgICAgICAgICAgQ2l0eSA9IFwiQ2l0eVwiLFxyXG4gICAgICAgICAgICBSZWdpb24gPSBcIlJlZ2lvblwiLFxyXG4gICAgICAgICAgICBQb3N0YWxDb2RlID0gXCJQb3N0YWxDb2RlXCIsXHJcbiAgICAgICAgICAgIENvdW50cnkgPSBcIkNvdW50cnlcIixcclxuICAgICAgICAgICAgU2FsZXNwZXJzb24gPSBcIlNhbGVzcGVyc29uXCIsXHJcbiAgICAgICAgICAgIE9yZGVySWQgPSBcIk9yZGVySWRcIixcclxuICAgICAgICAgICAgT3JkZXJEYXRlID0gXCJPcmRlckRhdGVcIixcclxuICAgICAgICAgICAgUmVxdWlyZWREYXRlID0gXCJSZXF1aXJlZERhdGVcIixcclxuICAgICAgICAgICAgU2hpcHBlZERhdGUgPSBcIlNoaXBwZWREYXRlXCIsXHJcbiAgICAgICAgICAgIFNoaXBwZXJOYW1lID0gXCJTaGlwcGVyTmFtZVwiLFxyXG4gICAgICAgICAgICBQcm9kdWN0SWQgPSBcIlByb2R1Y3RJZFwiLFxyXG4gICAgICAgICAgICBQcm9kdWN0TmFtZSA9IFwiUHJvZHVjdE5hbWVcIixcclxuICAgICAgICAgICAgVW5pdFByaWNlID0gXCJVbml0UHJpY2VcIixcclxuICAgICAgICAgICAgUXVhbnRpdHkgPSBcIlF1YW50aXR5XCIsXHJcbiAgICAgICAgICAgIERpc2NvdW50ID0gXCJEaXNjb3VudFwiLFxyXG4gICAgICAgICAgICBFeHRlbmRlZFByaWNlID0gXCJFeHRlbmRlZFByaWNlXCIsXHJcbiAgICAgICAgICAgIEZyZWlnaHQgPSBcIkZyZWlnaHRcIlxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCJuYW1lc3BhY2UgWWF4aWUuTm9ydGhXaW5kIHtcclxuICAgIGV4cG9ydCBuYW1lc3BhY2UgSW52b2ljZXNTZXJ2aWNlIHtcclxuICAgICAgICBleHBvcnQgY29uc3QgYmFzZVVybCA9ICdOb3J0aFdpbmQvSW52b2ljZXMnO1xyXG5cclxuICAgICAgICBleHBvcnQgZGVjbGFyZSBmdW5jdGlvbiBDcmVhdGUocmVxdWVzdDogU2VyZW5pdHkuU2F2ZVJlcXVlc3Q8SW52b2ljZXNSb3c+LCBvblN1Y2Nlc3M/OiAocmVzcG9uc2U6IFNlcmVuaXR5LlNhdmVSZXNwb25zZSkgPT4gdm9pZCwgb3B0PzogUS5TZXJ2aWNlT3B0aW9uczxhbnk+KTogSlF1ZXJ5WEhSO1xyXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGZ1bmN0aW9uIFVwZGF0ZShyZXF1ZXN0OiBTZXJlbml0eS5TYXZlUmVxdWVzdDxJbnZvaWNlc1Jvdz4sIG9uU3VjY2Vzcz86IChyZXNwb25zZTogU2VyZW5pdHkuU2F2ZVJlc3BvbnNlKSA9PiB2b2lkLCBvcHQ/OiBRLlNlcnZpY2VPcHRpb25zPGFueT4pOiBKUXVlcnlYSFI7XHJcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgZnVuY3Rpb24gRGVsZXRlKHJlcXVlc3Q6IFNlcmVuaXR5LkRlbGV0ZVJlcXVlc3QsIG9uU3VjY2Vzcz86IChyZXNwb25zZTogU2VyZW5pdHkuRGVsZXRlUmVzcG9uc2UpID0+IHZvaWQsIG9wdD86IFEuU2VydmljZU9wdGlvbnM8YW55Pik6IEpRdWVyeVhIUjtcclxuICAgICAgICBleHBvcnQgZGVjbGFyZSBmdW5jdGlvbiBSZXRyaWV2ZShyZXF1ZXN0OiBTZXJlbml0eS5SZXRyaWV2ZVJlcXVlc3QsIG9uU3VjY2Vzcz86IChyZXNwb25zZTogU2VyZW5pdHkuUmV0cmlldmVSZXNwb25zZTxJbnZvaWNlc1Jvdz4pID0+IHZvaWQsIG9wdD86IFEuU2VydmljZU9wdGlvbnM8YW55Pik6IEpRdWVyeVhIUjtcclxuICAgICAgICBleHBvcnQgZGVjbGFyZSBmdW5jdGlvbiBMaXN0KHJlcXVlc3Q6IFNlcmVuaXR5Lkxpc3RSZXF1ZXN0LCBvblN1Y2Nlc3M/OiAocmVzcG9uc2U6IFNlcmVuaXR5Lkxpc3RSZXNwb25zZTxJbnZvaWNlc1Jvdz4pID0+IHZvaWQsIG9wdD86IFEuU2VydmljZU9wdGlvbnM8YW55Pik6IEpRdWVyeVhIUjtcclxuXHJcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgY29uc3QgZW51bSBNZXRob2RzIHtcclxuICAgICAgICAgICAgQ3JlYXRlID0gXCJOb3J0aFdpbmQvSW52b2ljZXMvQ3JlYXRlXCIsXHJcbiAgICAgICAgICAgIFVwZGF0ZSA9IFwiTm9ydGhXaW5kL0ludm9pY2VzL1VwZGF0ZVwiLFxyXG4gICAgICAgICAgICBEZWxldGUgPSBcIk5vcnRoV2luZC9JbnZvaWNlcy9EZWxldGVcIixcclxuICAgICAgICAgICAgUmV0cmlldmUgPSBcIk5vcnRoV2luZC9JbnZvaWNlcy9SZXRyaWV2ZVwiLFxyXG4gICAgICAgICAgICBMaXN0ID0gXCJOb3J0aFdpbmQvSW52b2ljZXMvTGlzdFwiXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBbXHJcbiAgICAgICAgICAgICdDcmVhdGUnLCBcclxuICAgICAgICAgICAgJ1VwZGF0ZScsIFxyXG4gICAgICAgICAgICAnRGVsZXRlJywgXHJcbiAgICAgICAgICAgICdSZXRyaWV2ZScsIFxyXG4gICAgICAgICAgICAnTGlzdCdcclxuICAgICAgICBdLmZvckVhY2goeCA9PiB7XHJcbiAgICAgICAgICAgICg8YW55Pkludm9pY2VzU2VydmljZSlbeF0gPSBmdW5jdGlvbiAociwgcywgbykge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFEuc2VydmljZVJlcXVlc3QoYmFzZVVybCArICcvJyArIHgsIHIsIHMsIG8pO1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcbiIsIm5hbWVzcGFjZSBZYXhpZS5Ob3J0aFdpbmQge1xyXG59XHJcbiIsIm5hbWVzcGFjZSBZYXhpZS5Ob3J0aFdpbmQge1xyXG4gICAgZXhwb3J0IGludGVyZmFjZSBOb3Rlc0Zvcm0ge1xyXG4gICAgICAgIEVudGl0eVR5cGU6IFNlcmVuaXR5LlN0cmluZ0VkaXRvcjtcclxuICAgICAgICBFbnRpdHlJZDogU2VyZW5pdHkuU3RyaW5nRWRpdG9yO1xyXG4gICAgICAgIFRleHQ6IFNlcmVuaXR5LlN0cmluZ0VkaXRvcjtcclxuICAgICAgICBJbnNlcnRVc2VySWQ6IFNlcmVuaXR5LkludGVnZXJFZGl0b3I7XHJcbiAgICAgICAgSW5zZXJ0RGF0ZTogU2VyZW5pdHkuRGF0ZUVkaXRvcjtcclxuICAgIH1cclxuXHJcbiAgICBleHBvcnQgY2xhc3MgTm90ZXNGb3JtIGV4dGVuZHMgU2VyZW5pdHkuUHJlZml4ZWRDb250ZXh0IHtcclxuICAgICAgICBzdGF0aWMgZm9ybUtleSA9ICdOb3J0aFdpbmQuTm90ZXMnO1xyXG4gICAgICAgIHByaXZhdGUgc3RhdGljIGluaXQ6IGJvb2xlYW47XHJcblxyXG4gICAgICAgIGNvbnN0cnVjdG9yKHByZWZpeDogc3RyaW5nKSB7XHJcbiAgICAgICAgICAgIHN1cGVyKHByZWZpeCk7XHJcblxyXG4gICAgICAgICAgICBpZiAoIU5vdGVzRm9ybS5pbml0KSAge1xyXG4gICAgICAgICAgICAgICAgTm90ZXNGb3JtLmluaXQgPSB0cnVlO1xyXG5cclxuICAgICAgICAgICAgICAgIHZhciBzID0gU2VyZW5pdHk7XHJcbiAgICAgICAgICAgICAgICB2YXIgdzAgPSBzLlN0cmluZ0VkaXRvcjtcclxuICAgICAgICAgICAgICAgIHZhciB3MSA9IHMuSW50ZWdlckVkaXRvcjtcclxuICAgICAgICAgICAgICAgIHZhciB3MiA9IHMuRGF0ZUVkaXRvcjtcclxuXHJcbiAgICAgICAgICAgICAgICBRLmluaXRGb3JtVHlwZShOb3Rlc0Zvcm0sIFtcclxuICAgICAgICAgICAgICAgICAgICAnRW50aXR5VHlwZScsIHcwLFxyXG4gICAgICAgICAgICAgICAgICAgICdFbnRpdHlJZCcsIHcwLFxyXG4gICAgICAgICAgICAgICAgICAgICdUZXh0JywgdzAsXHJcbiAgICAgICAgICAgICAgICAgICAgJ0luc2VydFVzZXJJZCcsIHcxLFxyXG4gICAgICAgICAgICAgICAgICAgICdJbnNlcnREYXRlJywgdzJcclxuICAgICAgICAgICAgICAgIF0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsIm5hbWVzcGFjZSBZYXhpZS5Ob3J0aFdpbmQge1xyXG4gICAgZXhwb3J0IGludGVyZmFjZSBOb3Rlc1JvdyB7XHJcbiAgICAgICAgTm90ZUlkPzogbnVtYmVyO1xyXG4gICAgICAgIEVudGl0eVR5cGU/OiBzdHJpbmc7XHJcbiAgICAgICAgRW50aXR5SWQ/OiBudW1iZXI7XHJcbiAgICAgICAgVGV4dD86IHN0cmluZztcclxuICAgICAgICBJbnNlcnRVc2VySWQ/OiBudW1iZXI7XHJcbiAgICAgICAgSW5zZXJ0RGF0ZT86IHN0cmluZztcclxuICAgIH1cclxuXHJcbiAgICBleHBvcnQgbmFtZXNwYWNlIE5vdGVzUm93IHtcclxuICAgICAgICBleHBvcnQgY29uc3QgaWRQcm9wZXJ0eSA9ICdOb3RlSWQnO1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCBuYW1lUHJvcGVydHkgPSAnRW50aXR5VHlwZSc7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IGxvY2FsVGV4dFByZWZpeCA9ICdOb3J0aFdpbmQuTm90ZXMnO1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCBkZWxldGVQZXJtaXNzaW9uID0gJ0FkbWluaXN0cmF0aW9uOkdlbmVyYWwnO1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCBpbnNlcnRQZXJtaXNzaW9uID0gJ0FkbWluaXN0cmF0aW9uOkdlbmVyYWwnO1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCByZWFkUGVybWlzc2lvbiA9ICdBZG1pbmlzdHJhdGlvbjpHZW5lcmFsJztcclxuICAgICAgICBleHBvcnQgY29uc3QgdXBkYXRlUGVybWlzc2lvbiA9ICdBZG1pbmlzdHJhdGlvbjpHZW5lcmFsJztcclxuXHJcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgY29uc3QgZW51bSBGaWVsZHMge1xyXG4gICAgICAgICAgICBOb3RlSWQgPSBcIk5vdGVJZFwiLFxyXG4gICAgICAgICAgICBFbnRpdHlUeXBlID0gXCJFbnRpdHlUeXBlXCIsXHJcbiAgICAgICAgICAgIEVudGl0eUlkID0gXCJFbnRpdHlJZFwiLFxyXG4gICAgICAgICAgICBUZXh0ID0gXCJUZXh0XCIsXHJcbiAgICAgICAgICAgIEluc2VydFVzZXJJZCA9IFwiSW5zZXJ0VXNlcklkXCIsXHJcbiAgICAgICAgICAgIEluc2VydERhdGUgPSBcIkluc2VydERhdGVcIlxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCJuYW1lc3BhY2UgWWF4aWUuTm9ydGhXaW5kIHtcclxuICAgIGV4cG9ydCBuYW1lc3BhY2UgTm90ZXNTZXJ2aWNlIHtcclxuICAgICAgICBleHBvcnQgY29uc3QgYmFzZVVybCA9ICdOb3J0aFdpbmQvTm90ZXMnO1xyXG5cclxuICAgICAgICBleHBvcnQgZGVjbGFyZSBmdW5jdGlvbiBDcmVhdGUocmVxdWVzdDogU2VyZW5pdHkuU2F2ZVJlcXVlc3Q8Tm90ZXNSb3c+LCBvblN1Y2Nlc3M/OiAocmVzcG9uc2U6IFNlcmVuaXR5LlNhdmVSZXNwb25zZSkgPT4gdm9pZCwgb3B0PzogUS5TZXJ2aWNlT3B0aW9uczxhbnk+KTogSlF1ZXJ5WEhSO1xyXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGZ1bmN0aW9uIFVwZGF0ZShyZXF1ZXN0OiBTZXJlbml0eS5TYXZlUmVxdWVzdDxOb3Rlc1Jvdz4sIG9uU3VjY2Vzcz86IChyZXNwb25zZTogU2VyZW5pdHkuU2F2ZVJlc3BvbnNlKSA9PiB2b2lkLCBvcHQ/OiBRLlNlcnZpY2VPcHRpb25zPGFueT4pOiBKUXVlcnlYSFI7XHJcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgZnVuY3Rpb24gRGVsZXRlKHJlcXVlc3Q6IFNlcmVuaXR5LkRlbGV0ZVJlcXVlc3QsIG9uU3VjY2Vzcz86IChyZXNwb25zZTogU2VyZW5pdHkuRGVsZXRlUmVzcG9uc2UpID0+IHZvaWQsIG9wdD86IFEuU2VydmljZU9wdGlvbnM8YW55Pik6IEpRdWVyeVhIUjtcclxuICAgICAgICBleHBvcnQgZGVjbGFyZSBmdW5jdGlvbiBSZXRyaWV2ZShyZXF1ZXN0OiBTZXJlbml0eS5SZXRyaWV2ZVJlcXVlc3QsIG9uU3VjY2Vzcz86IChyZXNwb25zZTogU2VyZW5pdHkuUmV0cmlldmVSZXNwb25zZTxOb3Rlc1Jvdz4pID0+IHZvaWQsIG9wdD86IFEuU2VydmljZU9wdGlvbnM8YW55Pik6IEpRdWVyeVhIUjtcclxuICAgICAgICBleHBvcnQgZGVjbGFyZSBmdW5jdGlvbiBMaXN0KHJlcXVlc3Q6IFNlcmVuaXR5Lkxpc3RSZXF1ZXN0LCBvblN1Y2Nlc3M/OiAocmVzcG9uc2U6IFNlcmVuaXR5Lkxpc3RSZXNwb25zZTxOb3Rlc1Jvdz4pID0+IHZvaWQsIG9wdD86IFEuU2VydmljZU9wdGlvbnM8YW55Pik6IEpRdWVyeVhIUjtcclxuXHJcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgY29uc3QgZW51bSBNZXRob2RzIHtcclxuICAgICAgICAgICAgQ3JlYXRlID0gXCJOb3J0aFdpbmQvTm90ZXMvQ3JlYXRlXCIsXHJcbiAgICAgICAgICAgIFVwZGF0ZSA9IFwiTm9ydGhXaW5kL05vdGVzL1VwZGF0ZVwiLFxyXG4gICAgICAgICAgICBEZWxldGUgPSBcIk5vcnRoV2luZC9Ob3Rlcy9EZWxldGVcIixcclxuICAgICAgICAgICAgUmV0cmlldmUgPSBcIk5vcnRoV2luZC9Ob3Rlcy9SZXRyaWV2ZVwiLFxyXG4gICAgICAgICAgICBMaXN0ID0gXCJOb3J0aFdpbmQvTm90ZXMvTGlzdFwiXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBbXHJcbiAgICAgICAgICAgICdDcmVhdGUnLCBcclxuICAgICAgICAgICAgJ1VwZGF0ZScsIFxyXG4gICAgICAgICAgICAnRGVsZXRlJywgXHJcbiAgICAgICAgICAgICdSZXRyaWV2ZScsIFxyXG4gICAgICAgICAgICAnTGlzdCdcclxuICAgICAgICBdLmZvckVhY2goeCA9PiB7XHJcbiAgICAgICAgICAgICg8YW55Pk5vdGVzU2VydmljZSlbeF0gPSBmdW5jdGlvbiAociwgcywgbykge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFEuc2VydmljZVJlcXVlc3QoYmFzZVVybCArICcvJyArIHgsIHIsIHMsIG8pO1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcbiIsIm5hbWVzcGFjZSBZYXhpZS5Ob3J0aFdpbmQge1xyXG59XHJcbiIsIm5hbWVzcGFjZSBZYXhpZS5Ob3J0aFdpbmQge1xyXG4gICAgZXhwb3J0IGludGVyZmFjZSBPcmRlckRldGFpbHNGb3JtIHtcclxuICAgICAgICBPcmRlcklkOiBTZXJlbml0eS5JbnRlZ2VyRWRpdG9yO1xyXG4gICAgICAgIFByb2R1Y3RJZDogU2VyZW5pdHkuSW50ZWdlckVkaXRvcjtcclxuICAgICAgICBVbml0UHJpY2U6IFNlcmVuaXR5LkRlY2ltYWxFZGl0b3I7XHJcbiAgICAgICAgUXVhbnRpdHk6IFNlcmVuaXR5LkludGVnZXJFZGl0b3I7XHJcbiAgICAgICAgRGlzY291bnQ6IFNlcmVuaXR5LkRlY2ltYWxFZGl0b3I7XHJcbiAgICB9XHJcblxyXG4gICAgZXhwb3J0IGNsYXNzIE9yZGVyRGV0YWlsc0Zvcm0gZXh0ZW5kcyBTZXJlbml0eS5QcmVmaXhlZENvbnRleHQge1xyXG4gICAgICAgIHN0YXRpYyBmb3JtS2V5ID0gJ05vcnRoV2luZC5PcmRlckRldGFpbHMnO1xyXG4gICAgICAgIHByaXZhdGUgc3RhdGljIGluaXQ6IGJvb2xlYW47XHJcblxyXG4gICAgICAgIGNvbnN0cnVjdG9yKHByZWZpeDogc3RyaW5nKSB7XHJcbiAgICAgICAgICAgIHN1cGVyKHByZWZpeCk7XHJcblxyXG4gICAgICAgICAgICBpZiAoIU9yZGVyRGV0YWlsc0Zvcm0uaW5pdCkgIHtcclxuICAgICAgICAgICAgICAgIE9yZGVyRGV0YWlsc0Zvcm0uaW5pdCA9IHRydWU7XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIHMgPSBTZXJlbml0eTtcclxuICAgICAgICAgICAgICAgIHZhciB3MCA9IHMuSW50ZWdlckVkaXRvcjtcclxuICAgICAgICAgICAgICAgIHZhciB3MSA9IHMuRGVjaW1hbEVkaXRvcjtcclxuXHJcbiAgICAgICAgICAgICAgICBRLmluaXRGb3JtVHlwZShPcmRlckRldGFpbHNGb3JtLCBbXHJcbiAgICAgICAgICAgICAgICAgICAgJ09yZGVySWQnLCB3MCxcclxuICAgICAgICAgICAgICAgICAgICAnUHJvZHVjdElkJywgdzAsXHJcbiAgICAgICAgICAgICAgICAgICAgJ1VuaXRQcmljZScsIHcxLFxyXG4gICAgICAgICAgICAgICAgICAgICdRdWFudGl0eScsIHcwLFxyXG4gICAgICAgICAgICAgICAgICAgICdEaXNjb3VudCcsIHcxXHJcbiAgICAgICAgICAgICAgICBdKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCJuYW1lc3BhY2UgWWF4aWUuTm9ydGhXaW5kIHtcclxuICAgIGV4cG9ydCBpbnRlcmZhY2UgT3JkZXJEZXRhaWxzUm93IHtcclxuICAgICAgICBPcmRlcklkPzogbnVtYmVyO1xyXG4gICAgICAgIFByb2R1Y3RJZD86IG51bWJlcjtcclxuICAgICAgICBVbml0UHJpY2U/OiBudW1iZXI7XHJcbiAgICAgICAgUXVhbnRpdHk/OiBudW1iZXI7XHJcbiAgICAgICAgRGlzY291bnQ/OiBudW1iZXI7XHJcbiAgICAgICAgRGV0YWlsSWQ/OiBudW1iZXI7XHJcbiAgICAgICAgT3JkZXJDdXN0b21lcklkPzogc3RyaW5nO1xyXG4gICAgICAgIE9yZGVyRW1wbG95ZWVJZD86IG51bWJlcjtcclxuICAgICAgICBPcmRlck9yZGVyRGF0ZT86IHN0cmluZztcclxuICAgICAgICBPcmRlclJlcXVpcmVkRGF0ZT86IHN0cmluZztcclxuICAgICAgICBPcmRlclNoaXBwZWREYXRlPzogc3RyaW5nO1xyXG4gICAgICAgIE9yZGVyU2hpcFZpYT86IG51bWJlcjtcclxuICAgICAgICBPcmRlckZyZWlnaHQ/OiBudW1iZXI7XHJcbiAgICAgICAgT3JkZXJTaGlwTmFtZT86IHN0cmluZztcclxuICAgICAgICBPcmRlclNoaXBBZGRyZXNzPzogc3RyaW5nO1xyXG4gICAgICAgIE9yZGVyU2hpcENpdHk/OiBzdHJpbmc7XHJcbiAgICAgICAgT3JkZXJTaGlwUmVnaW9uPzogc3RyaW5nO1xyXG4gICAgICAgIE9yZGVyU2hpcFBvc3RhbENvZGU/OiBzdHJpbmc7XHJcbiAgICAgICAgT3JkZXJTaGlwQ291bnRyeT86IHN0cmluZztcclxuICAgICAgICBQcm9kdWN0UHJvZHVjdE5hbWU/OiBzdHJpbmc7XHJcbiAgICAgICAgUHJvZHVjdFN1cHBsaWVySWQ/OiBudW1iZXI7XHJcbiAgICAgICAgUHJvZHVjdENhdGVnb3J5SWQ/OiBudW1iZXI7XHJcbiAgICAgICAgUHJvZHVjdFF1YW50aXR5UGVyVW5pdD86IHN0cmluZztcclxuICAgICAgICBQcm9kdWN0VW5pdFByaWNlPzogbnVtYmVyO1xyXG4gICAgICAgIFByb2R1Y3RVbml0c0luU3RvY2s/OiBudW1iZXI7XHJcbiAgICAgICAgUHJvZHVjdFVuaXRzT25PcmRlcj86IG51bWJlcjtcclxuICAgICAgICBQcm9kdWN0UmVvcmRlckxldmVsPzogbnVtYmVyO1xyXG4gICAgICAgIFByb2R1Y3REaXNjb250aW51ZWQ/OiBib29sZWFuO1xyXG4gICAgICAgIFByb2R1Y3RQcm9kdWN0SW1hZ2U/OiBzdHJpbmc7XHJcbiAgICB9XHJcblxyXG4gICAgZXhwb3J0IG5hbWVzcGFjZSBPcmRlckRldGFpbHNSb3cge1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCBpZFByb3BlcnR5ID0gJ0RldGFpbElkJztcclxuICAgICAgICBleHBvcnQgY29uc3QgbG9jYWxUZXh0UHJlZml4ID0gJ05vcnRoV2luZC5PcmRlckRldGFpbHMnO1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCBkZWxldGVQZXJtaXNzaW9uID0gJ0FkbWluaXN0cmF0aW9uOkdlbmVyYWwnO1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCBpbnNlcnRQZXJtaXNzaW9uID0gJ0FkbWluaXN0cmF0aW9uOkdlbmVyYWwnO1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCByZWFkUGVybWlzc2lvbiA9ICdBZG1pbmlzdHJhdGlvbjpHZW5lcmFsJztcclxuICAgICAgICBleHBvcnQgY29uc3QgdXBkYXRlUGVybWlzc2lvbiA9ICdBZG1pbmlzdHJhdGlvbjpHZW5lcmFsJztcclxuXHJcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgY29uc3QgZW51bSBGaWVsZHMge1xyXG4gICAgICAgICAgICBPcmRlcklkID0gXCJPcmRlcklkXCIsXHJcbiAgICAgICAgICAgIFByb2R1Y3RJZCA9IFwiUHJvZHVjdElkXCIsXHJcbiAgICAgICAgICAgIFVuaXRQcmljZSA9IFwiVW5pdFByaWNlXCIsXHJcbiAgICAgICAgICAgIFF1YW50aXR5ID0gXCJRdWFudGl0eVwiLFxyXG4gICAgICAgICAgICBEaXNjb3VudCA9IFwiRGlzY291bnRcIixcclxuICAgICAgICAgICAgRGV0YWlsSWQgPSBcIkRldGFpbElkXCIsXHJcbiAgICAgICAgICAgIE9yZGVyQ3VzdG9tZXJJZCA9IFwiT3JkZXJDdXN0b21lcklkXCIsXHJcbiAgICAgICAgICAgIE9yZGVyRW1wbG95ZWVJZCA9IFwiT3JkZXJFbXBsb3llZUlkXCIsXHJcbiAgICAgICAgICAgIE9yZGVyT3JkZXJEYXRlID0gXCJPcmRlck9yZGVyRGF0ZVwiLFxyXG4gICAgICAgICAgICBPcmRlclJlcXVpcmVkRGF0ZSA9IFwiT3JkZXJSZXF1aXJlZERhdGVcIixcclxuICAgICAgICAgICAgT3JkZXJTaGlwcGVkRGF0ZSA9IFwiT3JkZXJTaGlwcGVkRGF0ZVwiLFxyXG4gICAgICAgICAgICBPcmRlclNoaXBWaWEgPSBcIk9yZGVyU2hpcFZpYVwiLFxyXG4gICAgICAgICAgICBPcmRlckZyZWlnaHQgPSBcIk9yZGVyRnJlaWdodFwiLFxyXG4gICAgICAgICAgICBPcmRlclNoaXBOYW1lID0gXCJPcmRlclNoaXBOYW1lXCIsXHJcbiAgICAgICAgICAgIE9yZGVyU2hpcEFkZHJlc3MgPSBcIk9yZGVyU2hpcEFkZHJlc3NcIixcclxuICAgICAgICAgICAgT3JkZXJTaGlwQ2l0eSA9IFwiT3JkZXJTaGlwQ2l0eVwiLFxyXG4gICAgICAgICAgICBPcmRlclNoaXBSZWdpb24gPSBcIk9yZGVyU2hpcFJlZ2lvblwiLFxyXG4gICAgICAgICAgICBPcmRlclNoaXBQb3N0YWxDb2RlID0gXCJPcmRlclNoaXBQb3N0YWxDb2RlXCIsXHJcbiAgICAgICAgICAgIE9yZGVyU2hpcENvdW50cnkgPSBcIk9yZGVyU2hpcENvdW50cnlcIixcclxuICAgICAgICAgICAgUHJvZHVjdFByb2R1Y3ROYW1lID0gXCJQcm9kdWN0UHJvZHVjdE5hbWVcIixcclxuICAgICAgICAgICAgUHJvZHVjdFN1cHBsaWVySWQgPSBcIlByb2R1Y3RTdXBwbGllcklkXCIsXHJcbiAgICAgICAgICAgIFByb2R1Y3RDYXRlZ29yeUlkID0gXCJQcm9kdWN0Q2F0ZWdvcnlJZFwiLFxyXG4gICAgICAgICAgICBQcm9kdWN0UXVhbnRpdHlQZXJVbml0ID0gXCJQcm9kdWN0UXVhbnRpdHlQZXJVbml0XCIsXHJcbiAgICAgICAgICAgIFByb2R1Y3RVbml0UHJpY2UgPSBcIlByb2R1Y3RVbml0UHJpY2VcIixcclxuICAgICAgICAgICAgUHJvZHVjdFVuaXRzSW5TdG9jayA9IFwiUHJvZHVjdFVuaXRzSW5TdG9ja1wiLFxyXG4gICAgICAgICAgICBQcm9kdWN0VW5pdHNPbk9yZGVyID0gXCJQcm9kdWN0VW5pdHNPbk9yZGVyXCIsXHJcbiAgICAgICAgICAgIFByb2R1Y3RSZW9yZGVyTGV2ZWwgPSBcIlByb2R1Y3RSZW9yZGVyTGV2ZWxcIixcclxuICAgICAgICAgICAgUHJvZHVjdERpc2NvbnRpbnVlZCA9IFwiUHJvZHVjdERpc2NvbnRpbnVlZFwiLFxyXG4gICAgICAgICAgICBQcm9kdWN0UHJvZHVjdEltYWdlID0gXCJQcm9kdWN0UHJvZHVjdEltYWdlXCJcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwibmFtZXNwYWNlIFlheGllLk5vcnRoV2luZCB7XHJcbiAgICBleHBvcnQgbmFtZXNwYWNlIE9yZGVyRGV0YWlsc1NlcnZpY2Uge1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCBiYXNlVXJsID0gJ05vcnRoV2luZC9PcmRlckRldGFpbHMnO1xyXG5cclxuICAgICAgICBleHBvcnQgZGVjbGFyZSBmdW5jdGlvbiBDcmVhdGUocmVxdWVzdDogU2VyZW5pdHkuU2F2ZVJlcXVlc3Q8T3JkZXJEZXRhaWxzUm93Piwgb25TdWNjZXNzPzogKHJlc3BvbnNlOiBTZXJlbml0eS5TYXZlUmVzcG9uc2UpID0+IHZvaWQsIG9wdD86IFEuU2VydmljZU9wdGlvbnM8YW55Pik6IEpRdWVyeVhIUjtcclxuICAgICAgICBleHBvcnQgZGVjbGFyZSBmdW5jdGlvbiBVcGRhdGUocmVxdWVzdDogU2VyZW5pdHkuU2F2ZVJlcXVlc3Q8T3JkZXJEZXRhaWxzUm93Piwgb25TdWNjZXNzPzogKHJlc3BvbnNlOiBTZXJlbml0eS5TYXZlUmVzcG9uc2UpID0+IHZvaWQsIG9wdD86IFEuU2VydmljZU9wdGlvbnM8YW55Pik6IEpRdWVyeVhIUjtcclxuICAgICAgICBleHBvcnQgZGVjbGFyZSBmdW5jdGlvbiBEZWxldGUocmVxdWVzdDogU2VyZW5pdHkuRGVsZXRlUmVxdWVzdCwgb25TdWNjZXNzPzogKHJlc3BvbnNlOiBTZXJlbml0eS5EZWxldGVSZXNwb25zZSkgPT4gdm9pZCwgb3B0PzogUS5TZXJ2aWNlT3B0aW9uczxhbnk+KTogSlF1ZXJ5WEhSO1xyXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGZ1bmN0aW9uIFJldHJpZXZlKHJlcXVlc3Q6IFNlcmVuaXR5LlJldHJpZXZlUmVxdWVzdCwgb25TdWNjZXNzPzogKHJlc3BvbnNlOiBTZXJlbml0eS5SZXRyaWV2ZVJlc3BvbnNlPE9yZGVyRGV0YWlsc1Jvdz4pID0+IHZvaWQsIG9wdD86IFEuU2VydmljZU9wdGlvbnM8YW55Pik6IEpRdWVyeVhIUjtcclxuICAgICAgICBleHBvcnQgZGVjbGFyZSBmdW5jdGlvbiBMaXN0KHJlcXVlc3Q6IFNlcmVuaXR5Lkxpc3RSZXF1ZXN0LCBvblN1Y2Nlc3M/OiAocmVzcG9uc2U6IFNlcmVuaXR5Lkxpc3RSZXNwb25zZTxPcmRlckRldGFpbHNSb3c+KSA9PiB2b2lkLCBvcHQ/OiBRLlNlcnZpY2VPcHRpb25zPGFueT4pOiBKUXVlcnlYSFI7XHJcblxyXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGNvbnN0IGVudW0gTWV0aG9kcyB7XHJcbiAgICAgICAgICAgIENyZWF0ZSA9IFwiTm9ydGhXaW5kL09yZGVyRGV0YWlscy9DcmVhdGVcIixcclxuICAgICAgICAgICAgVXBkYXRlID0gXCJOb3J0aFdpbmQvT3JkZXJEZXRhaWxzL1VwZGF0ZVwiLFxyXG4gICAgICAgICAgICBEZWxldGUgPSBcIk5vcnRoV2luZC9PcmRlckRldGFpbHMvRGVsZXRlXCIsXHJcbiAgICAgICAgICAgIFJldHJpZXZlID0gXCJOb3J0aFdpbmQvT3JkZXJEZXRhaWxzL1JldHJpZXZlXCIsXHJcbiAgICAgICAgICAgIExpc3QgPSBcIk5vcnRoV2luZC9PcmRlckRldGFpbHMvTGlzdFwiXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBbXHJcbiAgICAgICAgICAgICdDcmVhdGUnLCBcclxuICAgICAgICAgICAgJ1VwZGF0ZScsIFxyXG4gICAgICAgICAgICAnRGVsZXRlJywgXHJcbiAgICAgICAgICAgICdSZXRyaWV2ZScsIFxyXG4gICAgICAgICAgICAnTGlzdCdcclxuICAgICAgICBdLmZvckVhY2goeCA9PiB7XHJcbiAgICAgICAgICAgICg8YW55Pk9yZGVyRGV0YWlsc1NlcnZpY2UpW3hdID0gZnVuY3Rpb24gKHIsIHMsIG8pIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBRLnNlcnZpY2VSZXF1ZXN0KGJhc2VVcmwgKyAnLycgKyB4LCByLCBzLCBvKTtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG4iLCJuYW1lc3BhY2UgWWF4aWUuTm9ydGhXaW5kIHtcclxufVxyXG4iLCJuYW1lc3BhY2UgWWF4aWUuTm9ydGhXaW5kIHtcclxuICAgIGV4cG9ydCBpbnRlcmZhY2UgT3JkZXJzRm9ybSB7XHJcbiAgICAgICAgQ3VzdG9tZXJJZDogU2VyZW5pdHkuU3RyaW5nRWRpdG9yO1xyXG4gICAgICAgIEVtcGxveWVlSWQ6IFNlcmVuaXR5LkludGVnZXJFZGl0b3I7XHJcbiAgICAgICAgT3JkZXJEYXRlOiBTZXJlbml0eS5EYXRlRWRpdG9yO1xyXG4gICAgICAgIFJlcXVpcmVkRGF0ZTogU2VyZW5pdHkuRGF0ZUVkaXRvcjtcclxuICAgICAgICBTaGlwcGVkRGF0ZTogU2VyZW5pdHkuRGF0ZUVkaXRvcjtcclxuICAgICAgICBTaGlwVmlhOiBTZXJlbml0eS5JbnRlZ2VyRWRpdG9yO1xyXG4gICAgICAgIEZyZWlnaHQ6IFNlcmVuaXR5LkRlY2ltYWxFZGl0b3I7XHJcbiAgICAgICAgU2hpcE5hbWU6IFNlcmVuaXR5LlN0cmluZ0VkaXRvcjtcclxuICAgICAgICBTaGlwQWRkcmVzczogU2VyZW5pdHkuU3RyaW5nRWRpdG9yO1xyXG4gICAgICAgIFNoaXBDaXR5OiBTZXJlbml0eS5TdHJpbmdFZGl0b3I7XHJcbiAgICAgICAgU2hpcFJlZ2lvbjogU2VyZW5pdHkuU3RyaW5nRWRpdG9yO1xyXG4gICAgICAgIFNoaXBQb3N0YWxDb2RlOiBTZXJlbml0eS5TdHJpbmdFZGl0b3I7XHJcbiAgICAgICAgU2hpcENvdW50cnk6IFNlcmVuaXR5LlN0cmluZ0VkaXRvcjtcclxuICAgIH1cclxuXHJcbiAgICBleHBvcnQgY2xhc3MgT3JkZXJzRm9ybSBleHRlbmRzIFNlcmVuaXR5LlByZWZpeGVkQ29udGV4dCB7XHJcbiAgICAgICAgc3RhdGljIGZvcm1LZXkgPSAnTm9ydGhXaW5kLk9yZGVycyc7XHJcbiAgICAgICAgcHJpdmF0ZSBzdGF0aWMgaW5pdDogYm9vbGVhbjtcclxuXHJcbiAgICAgICAgY29uc3RydWN0b3IocHJlZml4OiBzdHJpbmcpIHtcclxuICAgICAgICAgICAgc3VwZXIocHJlZml4KTtcclxuXHJcbiAgICAgICAgICAgIGlmICghT3JkZXJzRm9ybS5pbml0KSAge1xyXG4gICAgICAgICAgICAgICAgT3JkZXJzRm9ybS5pbml0ID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgcyA9IFNlcmVuaXR5O1xyXG4gICAgICAgICAgICAgICAgdmFyIHcwID0gcy5TdHJpbmdFZGl0b3I7XHJcbiAgICAgICAgICAgICAgICB2YXIgdzEgPSBzLkludGVnZXJFZGl0b3I7XHJcbiAgICAgICAgICAgICAgICB2YXIgdzIgPSBzLkRhdGVFZGl0b3I7XHJcbiAgICAgICAgICAgICAgICB2YXIgdzMgPSBzLkRlY2ltYWxFZGl0b3I7XHJcblxyXG4gICAgICAgICAgICAgICAgUS5pbml0Rm9ybVR5cGUoT3JkZXJzRm9ybSwgW1xyXG4gICAgICAgICAgICAgICAgICAgICdDdXN0b21lcklkJywgdzAsXHJcbiAgICAgICAgICAgICAgICAgICAgJ0VtcGxveWVlSWQnLCB3MSxcclxuICAgICAgICAgICAgICAgICAgICAnT3JkZXJEYXRlJywgdzIsXHJcbiAgICAgICAgICAgICAgICAgICAgJ1JlcXVpcmVkRGF0ZScsIHcyLFxyXG4gICAgICAgICAgICAgICAgICAgICdTaGlwcGVkRGF0ZScsIHcyLFxyXG4gICAgICAgICAgICAgICAgICAgICdTaGlwVmlhJywgdzEsXHJcbiAgICAgICAgICAgICAgICAgICAgJ0ZyZWlnaHQnLCB3MyxcclxuICAgICAgICAgICAgICAgICAgICAnU2hpcE5hbWUnLCB3MCxcclxuICAgICAgICAgICAgICAgICAgICAnU2hpcEFkZHJlc3MnLCB3MCxcclxuICAgICAgICAgICAgICAgICAgICAnU2hpcENpdHknLCB3MCxcclxuICAgICAgICAgICAgICAgICAgICAnU2hpcFJlZ2lvbicsIHcwLFxyXG4gICAgICAgICAgICAgICAgICAgICdTaGlwUG9zdGFsQ29kZScsIHcwLFxyXG4gICAgICAgICAgICAgICAgICAgICdTaGlwQ291bnRyeScsIHcwXHJcbiAgICAgICAgICAgICAgICBdKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCJuYW1lc3BhY2UgWWF4aWUuTm9ydGhXaW5kIHtcclxuICAgIGV4cG9ydCBpbnRlcmZhY2UgT3JkZXJzUm93IHtcclxuICAgICAgICBPcmRlcklkPzogbnVtYmVyO1xyXG4gICAgICAgIEN1c3RvbWVySWQ/OiBzdHJpbmc7XHJcbiAgICAgICAgRW1wbG95ZWVJZD86IG51bWJlcjtcclxuICAgICAgICBPcmRlckRhdGU/OiBzdHJpbmc7XHJcbiAgICAgICAgUmVxdWlyZWREYXRlPzogc3RyaW5nO1xyXG4gICAgICAgIFNoaXBwZWREYXRlPzogc3RyaW5nO1xyXG4gICAgICAgIFNoaXBWaWE/OiBudW1iZXI7XHJcbiAgICAgICAgRnJlaWdodD86IG51bWJlcjtcclxuICAgICAgICBTaGlwTmFtZT86IHN0cmluZztcclxuICAgICAgICBTaGlwQWRkcmVzcz86IHN0cmluZztcclxuICAgICAgICBTaGlwQ2l0eT86IHN0cmluZztcclxuICAgICAgICBTaGlwUmVnaW9uPzogc3RyaW5nO1xyXG4gICAgICAgIFNoaXBQb3N0YWxDb2RlPzogc3RyaW5nO1xyXG4gICAgICAgIFNoaXBDb3VudHJ5Pzogc3RyaW5nO1xyXG4gICAgICAgIEN1c3RvbWVyQ29tcGFueU5hbWU/OiBzdHJpbmc7XHJcbiAgICAgICAgQ3VzdG9tZXJDb250YWN0TmFtZT86IHN0cmluZztcclxuICAgICAgICBDdXN0b21lckNvbnRhY3RUaXRsZT86IHN0cmluZztcclxuICAgICAgICBDdXN0b21lckFkZHJlc3M/OiBzdHJpbmc7XHJcbiAgICAgICAgQ3VzdG9tZXJDaXR5Pzogc3RyaW5nO1xyXG4gICAgICAgIEN1c3RvbWVyUmVnaW9uPzogc3RyaW5nO1xyXG4gICAgICAgIEN1c3RvbWVyUG9zdGFsQ29kZT86IHN0cmluZztcclxuICAgICAgICBDdXN0b21lckNvdW50cnk/OiBzdHJpbmc7XHJcbiAgICAgICAgQ3VzdG9tZXJQaG9uZT86IHN0cmluZztcclxuICAgICAgICBDdXN0b21lckZheD86IHN0cmluZztcclxuICAgICAgICBDdXN0b21lcklkMT86IG51bWJlcjtcclxuICAgICAgICBFbXBsb3llZUxhc3ROYW1lPzogc3RyaW5nO1xyXG4gICAgICAgIEVtcGxveWVlRmlyc3ROYW1lPzogc3RyaW5nO1xyXG4gICAgICAgIEVtcGxveWVlVGl0bGU/OiBzdHJpbmc7XHJcbiAgICAgICAgRW1wbG95ZWVUaXRsZU9mQ291cnRlc3k/OiBzdHJpbmc7XHJcbiAgICAgICAgRW1wbG95ZWVCaXJ0aERhdGU/OiBzdHJpbmc7XHJcbiAgICAgICAgRW1wbG95ZWVIaXJlRGF0ZT86IHN0cmluZztcclxuICAgICAgICBFbXBsb3llZUFkZHJlc3M/OiBzdHJpbmc7XHJcbiAgICAgICAgRW1wbG95ZWVDaXR5Pzogc3RyaW5nO1xyXG4gICAgICAgIEVtcGxveWVlUmVnaW9uPzogc3RyaW5nO1xyXG4gICAgICAgIEVtcGxveWVlUG9zdGFsQ29kZT86IHN0cmluZztcclxuICAgICAgICBFbXBsb3llZUNvdW50cnk/OiBzdHJpbmc7XHJcbiAgICAgICAgRW1wbG95ZWVIb21lUGhvbmU/OiBzdHJpbmc7XHJcbiAgICAgICAgRW1wbG95ZWVFeHRlbnNpb24/OiBzdHJpbmc7XHJcbiAgICAgICAgRW1wbG95ZWVQaG90bz86IG51bWJlcltdO1xyXG4gICAgICAgIEVtcGxveWVlTm90ZXM/OiBzdHJpbmc7XHJcbiAgICAgICAgRW1wbG95ZWVSZXBvcnRzVG8/OiBudW1iZXI7XHJcbiAgICAgICAgRW1wbG95ZWVQaG90b1BhdGg/OiBzdHJpbmc7XHJcbiAgICAgICAgU2hpcFZpYUNvbXBhbnlOYW1lPzogc3RyaW5nO1xyXG4gICAgICAgIFNoaXBWaWFQaG9uZT86IHN0cmluZztcclxuICAgIH1cclxuXHJcbiAgICBleHBvcnQgbmFtZXNwYWNlIE9yZGVyc1JvdyB7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IGlkUHJvcGVydHkgPSAnT3JkZXJJZCc7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IG5hbWVQcm9wZXJ0eSA9ICdDdXN0b21lcklkJztcclxuICAgICAgICBleHBvcnQgY29uc3QgbG9jYWxUZXh0UHJlZml4ID0gJ05vcnRoV2luZC5PcmRlcnMnO1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCBkZWxldGVQZXJtaXNzaW9uID0gJ0FkbWluaXN0cmF0aW9uOkdlbmVyYWwnO1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCBpbnNlcnRQZXJtaXNzaW9uID0gJ0FkbWluaXN0cmF0aW9uOkdlbmVyYWwnO1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCByZWFkUGVybWlzc2lvbiA9ICdBZG1pbmlzdHJhdGlvbjpHZW5lcmFsJztcclxuICAgICAgICBleHBvcnQgY29uc3QgdXBkYXRlUGVybWlzc2lvbiA9ICdBZG1pbmlzdHJhdGlvbjpHZW5lcmFsJztcclxuXHJcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgY29uc3QgZW51bSBGaWVsZHMge1xyXG4gICAgICAgICAgICBPcmRlcklkID0gXCJPcmRlcklkXCIsXHJcbiAgICAgICAgICAgIEN1c3RvbWVySWQgPSBcIkN1c3RvbWVySWRcIixcclxuICAgICAgICAgICAgRW1wbG95ZWVJZCA9IFwiRW1wbG95ZWVJZFwiLFxyXG4gICAgICAgICAgICBPcmRlckRhdGUgPSBcIk9yZGVyRGF0ZVwiLFxyXG4gICAgICAgICAgICBSZXF1aXJlZERhdGUgPSBcIlJlcXVpcmVkRGF0ZVwiLFxyXG4gICAgICAgICAgICBTaGlwcGVkRGF0ZSA9IFwiU2hpcHBlZERhdGVcIixcclxuICAgICAgICAgICAgU2hpcFZpYSA9IFwiU2hpcFZpYVwiLFxyXG4gICAgICAgICAgICBGcmVpZ2h0ID0gXCJGcmVpZ2h0XCIsXHJcbiAgICAgICAgICAgIFNoaXBOYW1lID0gXCJTaGlwTmFtZVwiLFxyXG4gICAgICAgICAgICBTaGlwQWRkcmVzcyA9IFwiU2hpcEFkZHJlc3NcIixcclxuICAgICAgICAgICAgU2hpcENpdHkgPSBcIlNoaXBDaXR5XCIsXHJcbiAgICAgICAgICAgIFNoaXBSZWdpb24gPSBcIlNoaXBSZWdpb25cIixcclxuICAgICAgICAgICAgU2hpcFBvc3RhbENvZGUgPSBcIlNoaXBQb3N0YWxDb2RlXCIsXHJcbiAgICAgICAgICAgIFNoaXBDb3VudHJ5ID0gXCJTaGlwQ291bnRyeVwiLFxyXG4gICAgICAgICAgICBDdXN0b21lckNvbXBhbnlOYW1lID0gXCJDdXN0b21lckNvbXBhbnlOYW1lXCIsXHJcbiAgICAgICAgICAgIEN1c3RvbWVyQ29udGFjdE5hbWUgPSBcIkN1c3RvbWVyQ29udGFjdE5hbWVcIixcclxuICAgICAgICAgICAgQ3VzdG9tZXJDb250YWN0VGl0bGUgPSBcIkN1c3RvbWVyQ29udGFjdFRpdGxlXCIsXHJcbiAgICAgICAgICAgIEN1c3RvbWVyQWRkcmVzcyA9IFwiQ3VzdG9tZXJBZGRyZXNzXCIsXHJcbiAgICAgICAgICAgIEN1c3RvbWVyQ2l0eSA9IFwiQ3VzdG9tZXJDaXR5XCIsXHJcbiAgICAgICAgICAgIEN1c3RvbWVyUmVnaW9uID0gXCJDdXN0b21lclJlZ2lvblwiLFxyXG4gICAgICAgICAgICBDdXN0b21lclBvc3RhbENvZGUgPSBcIkN1c3RvbWVyUG9zdGFsQ29kZVwiLFxyXG4gICAgICAgICAgICBDdXN0b21lckNvdW50cnkgPSBcIkN1c3RvbWVyQ291bnRyeVwiLFxyXG4gICAgICAgICAgICBDdXN0b21lclBob25lID0gXCJDdXN0b21lclBob25lXCIsXHJcbiAgICAgICAgICAgIEN1c3RvbWVyRmF4ID0gXCJDdXN0b21lckZheFwiLFxyXG4gICAgICAgICAgICBDdXN0b21lcklkMSA9IFwiQ3VzdG9tZXJJZDFcIixcclxuICAgICAgICAgICAgRW1wbG95ZWVMYXN0TmFtZSA9IFwiRW1wbG95ZWVMYXN0TmFtZVwiLFxyXG4gICAgICAgICAgICBFbXBsb3llZUZpcnN0TmFtZSA9IFwiRW1wbG95ZWVGaXJzdE5hbWVcIixcclxuICAgICAgICAgICAgRW1wbG95ZWVUaXRsZSA9IFwiRW1wbG95ZWVUaXRsZVwiLFxyXG4gICAgICAgICAgICBFbXBsb3llZVRpdGxlT2ZDb3VydGVzeSA9IFwiRW1wbG95ZWVUaXRsZU9mQ291cnRlc3lcIixcclxuICAgICAgICAgICAgRW1wbG95ZWVCaXJ0aERhdGUgPSBcIkVtcGxveWVlQmlydGhEYXRlXCIsXHJcbiAgICAgICAgICAgIEVtcGxveWVlSGlyZURhdGUgPSBcIkVtcGxveWVlSGlyZURhdGVcIixcclxuICAgICAgICAgICAgRW1wbG95ZWVBZGRyZXNzID0gXCJFbXBsb3llZUFkZHJlc3NcIixcclxuICAgICAgICAgICAgRW1wbG95ZWVDaXR5ID0gXCJFbXBsb3llZUNpdHlcIixcclxuICAgICAgICAgICAgRW1wbG95ZWVSZWdpb24gPSBcIkVtcGxveWVlUmVnaW9uXCIsXHJcbiAgICAgICAgICAgIEVtcGxveWVlUG9zdGFsQ29kZSA9IFwiRW1wbG95ZWVQb3N0YWxDb2RlXCIsXHJcbiAgICAgICAgICAgIEVtcGxveWVlQ291bnRyeSA9IFwiRW1wbG95ZWVDb3VudHJ5XCIsXHJcbiAgICAgICAgICAgIEVtcGxveWVlSG9tZVBob25lID0gXCJFbXBsb3llZUhvbWVQaG9uZVwiLFxyXG4gICAgICAgICAgICBFbXBsb3llZUV4dGVuc2lvbiA9IFwiRW1wbG95ZWVFeHRlbnNpb25cIixcclxuICAgICAgICAgICAgRW1wbG95ZWVQaG90byA9IFwiRW1wbG95ZWVQaG90b1wiLFxyXG4gICAgICAgICAgICBFbXBsb3llZU5vdGVzID0gXCJFbXBsb3llZU5vdGVzXCIsXHJcbiAgICAgICAgICAgIEVtcGxveWVlUmVwb3J0c1RvID0gXCJFbXBsb3llZVJlcG9ydHNUb1wiLFxyXG4gICAgICAgICAgICBFbXBsb3llZVBob3RvUGF0aCA9IFwiRW1wbG95ZWVQaG90b1BhdGhcIixcclxuICAgICAgICAgICAgU2hpcFZpYUNvbXBhbnlOYW1lID0gXCJTaGlwVmlhQ29tcGFueU5hbWVcIixcclxuICAgICAgICAgICAgU2hpcFZpYVBob25lID0gXCJTaGlwVmlhUGhvbmVcIlxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCJuYW1lc3BhY2UgWWF4aWUuTm9ydGhXaW5kIHtcclxuICAgIGV4cG9ydCBuYW1lc3BhY2UgT3JkZXJzU2VydmljZSB7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IGJhc2VVcmwgPSAnTm9ydGhXaW5kL09yZGVycyc7XHJcblxyXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGZ1bmN0aW9uIENyZWF0ZShyZXF1ZXN0OiBTZXJlbml0eS5TYXZlUmVxdWVzdDxPcmRlcnNSb3c+LCBvblN1Y2Nlc3M/OiAocmVzcG9uc2U6IFNlcmVuaXR5LlNhdmVSZXNwb25zZSkgPT4gdm9pZCwgb3B0PzogUS5TZXJ2aWNlT3B0aW9uczxhbnk+KTogSlF1ZXJ5WEhSO1xyXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGZ1bmN0aW9uIFVwZGF0ZShyZXF1ZXN0OiBTZXJlbml0eS5TYXZlUmVxdWVzdDxPcmRlcnNSb3c+LCBvblN1Y2Nlc3M/OiAocmVzcG9uc2U6IFNlcmVuaXR5LlNhdmVSZXNwb25zZSkgPT4gdm9pZCwgb3B0PzogUS5TZXJ2aWNlT3B0aW9uczxhbnk+KTogSlF1ZXJ5WEhSO1xyXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGZ1bmN0aW9uIERlbGV0ZShyZXF1ZXN0OiBTZXJlbml0eS5EZWxldGVSZXF1ZXN0LCBvblN1Y2Nlc3M/OiAocmVzcG9uc2U6IFNlcmVuaXR5LkRlbGV0ZVJlc3BvbnNlKSA9PiB2b2lkLCBvcHQ/OiBRLlNlcnZpY2VPcHRpb25zPGFueT4pOiBKUXVlcnlYSFI7XHJcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgZnVuY3Rpb24gUmV0cmlldmUocmVxdWVzdDogU2VyZW5pdHkuUmV0cmlldmVSZXF1ZXN0LCBvblN1Y2Nlc3M/OiAocmVzcG9uc2U6IFNlcmVuaXR5LlJldHJpZXZlUmVzcG9uc2U8T3JkZXJzUm93PikgPT4gdm9pZCwgb3B0PzogUS5TZXJ2aWNlT3B0aW9uczxhbnk+KTogSlF1ZXJ5WEhSO1xyXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGZ1bmN0aW9uIExpc3QocmVxdWVzdDogU2VyZW5pdHkuTGlzdFJlcXVlc3QsIG9uU3VjY2Vzcz86IChyZXNwb25zZTogU2VyZW5pdHkuTGlzdFJlc3BvbnNlPE9yZGVyc1Jvdz4pID0+IHZvaWQsIG9wdD86IFEuU2VydmljZU9wdGlvbnM8YW55Pik6IEpRdWVyeVhIUjtcclxuXHJcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgY29uc3QgZW51bSBNZXRob2RzIHtcclxuICAgICAgICAgICAgQ3JlYXRlID0gXCJOb3J0aFdpbmQvT3JkZXJzL0NyZWF0ZVwiLFxyXG4gICAgICAgICAgICBVcGRhdGUgPSBcIk5vcnRoV2luZC9PcmRlcnMvVXBkYXRlXCIsXHJcbiAgICAgICAgICAgIERlbGV0ZSA9IFwiTm9ydGhXaW5kL09yZGVycy9EZWxldGVcIixcclxuICAgICAgICAgICAgUmV0cmlldmUgPSBcIk5vcnRoV2luZC9PcmRlcnMvUmV0cmlldmVcIixcclxuICAgICAgICAgICAgTGlzdCA9IFwiTm9ydGhXaW5kL09yZGVycy9MaXN0XCJcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIFtcclxuICAgICAgICAgICAgJ0NyZWF0ZScsIFxyXG4gICAgICAgICAgICAnVXBkYXRlJywgXHJcbiAgICAgICAgICAgICdEZWxldGUnLCBcclxuICAgICAgICAgICAgJ1JldHJpZXZlJywgXHJcbiAgICAgICAgICAgICdMaXN0J1xyXG4gICAgICAgIF0uZm9yRWFjaCh4ID0+IHtcclxuICAgICAgICAgICAgKDxhbnk+T3JkZXJzU2VydmljZSlbeF0gPSBmdW5jdGlvbiAociwgcywgbykge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFEuc2VydmljZVJlcXVlc3QoYmFzZVVybCArICcvJyArIHgsIHIsIHMsIG8pO1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcbiIsIm5hbWVzcGFjZSBZYXhpZS5Ob3J0aFdpbmQge1xyXG59XHJcbiIsIm5hbWVzcGFjZSBZYXhpZS5Ob3J0aFdpbmQge1xyXG4gICAgZXhwb3J0IGludGVyZmFjZSBQcm9kdWN0TGFuZ0Zvcm0ge1xyXG4gICAgICAgIFByb2R1Y3RJZDogU2VyZW5pdHkuSW50ZWdlckVkaXRvcjtcclxuICAgICAgICBMYW5ndWFnZUlkOiBTZXJlbml0eS5JbnRlZ2VyRWRpdG9yO1xyXG4gICAgICAgIFByb2R1Y3ROYW1lOiBTZXJlbml0eS5TdHJpbmdFZGl0b3I7XHJcbiAgICB9XHJcblxyXG4gICAgZXhwb3J0IGNsYXNzIFByb2R1Y3RMYW5nRm9ybSBleHRlbmRzIFNlcmVuaXR5LlByZWZpeGVkQ29udGV4dCB7XHJcbiAgICAgICAgc3RhdGljIGZvcm1LZXkgPSAnTm9ydGhXaW5kLlByb2R1Y3RMYW5nJztcclxuICAgICAgICBwcml2YXRlIHN0YXRpYyBpbml0OiBib29sZWFuO1xyXG5cclxuICAgICAgICBjb25zdHJ1Y3RvcihwcmVmaXg6IHN0cmluZykge1xyXG4gICAgICAgICAgICBzdXBlcihwcmVmaXgpO1xyXG5cclxuICAgICAgICAgICAgaWYgKCFQcm9kdWN0TGFuZ0Zvcm0uaW5pdCkgIHtcclxuICAgICAgICAgICAgICAgIFByb2R1Y3RMYW5nRm9ybS5pbml0ID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgcyA9IFNlcmVuaXR5O1xyXG4gICAgICAgICAgICAgICAgdmFyIHcwID0gcy5JbnRlZ2VyRWRpdG9yO1xyXG4gICAgICAgICAgICAgICAgdmFyIHcxID0gcy5TdHJpbmdFZGl0b3I7XHJcblxyXG4gICAgICAgICAgICAgICAgUS5pbml0Rm9ybVR5cGUoUHJvZHVjdExhbmdGb3JtLCBbXHJcbiAgICAgICAgICAgICAgICAgICAgJ1Byb2R1Y3RJZCcsIHcwLFxyXG4gICAgICAgICAgICAgICAgICAgICdMYW5ndWFnZUlkJywgdzAsXHJcbiAgICAgICAgICAgICAgICAgICAgJ1Byb2R1Y3ROYW1lJywgdzFcclxuICAgICAgICAgICAgICAgIF0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsIm5hbWVzcGFjZSBZYXhpZS5Ob3J0aFdpbmQge1xyXG4gICAgZXhwb3J0IGludGVyZmFjZSBQcm9kdWN0TGFuZ1JvdyB7XHJcbiAgICAgICAgSWQ/OiBudW1iZXI7XHJcbiAgICAgICAgUHJvZHVjdElkPzogbnVtYmVyO1xyXG4gICAgICAgIExhbmd1YWdlSWQ/OiBudW1iZXI7XHJcbiAgICAgICAgUHJvZHVjdE5hbWU/OiBzdHJpbmc7XHJcbiAgICB9XHJcblxyXG4gICAgZXhwb3J0IG5hbWVzcGFjZSBQcm9kdWN0TGFuZ1JvdyB7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IGlkUHJvcGVydHkgPSAnSWQnO1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCBuYW1lUHJvcGVydHkgPSAnUHJvZHVjdE5hbWUnO1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCBsb2NhbFRleHRQcmVmaXggPSAnTm9ydGhXaW5kLlByb2R1Y3RMYW5nJztcclxuICAgICAgICBleHBvcnQgY29uc3QgZGVsZXRlUGVybWlzc2lvbiA9ICdBZG1pbmlzdHJhdGlvbjpHZW5lcmFsJztcclxuICAgICAgICBleHBvcnQgY29uc3QgaW5zZXJ0UGVybWlzc2lvbiA9ICdBZG1pbmlzdHJhdGlvbjpHZW5lcmFsJztcclxuICAgICAgICBleHBvcnQgY29uc3QgcmVhZFBlcm1pc3Npb24gPSAnQWRtaW5pc3RyYXRpb246R2VuZXJhbCc7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IHVwZGF0ZVBlcm1pc3Npb24gPSAnQWRtaW5pc3RyYXRpb246R2VuZXJhbCc7XHJcblxyXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGNvbnN0IGVudW0gRmllbGRzIHtcclxuICAgICAgICAgICAgSWQgPSBcIklkXCIsXHJcbiAgICAgICAgICAgIFByb2R1Y3RJZCA9IFwiUHJvZHVjdElkXCIsXHJcbiAgICAgICAgICAgIExhbmd1YWdlSWQgPSBcIkxhbmd1YWdlSWRcIixcclxuICAgICAgICAgICAgUHJvZHVjdE5hbWUgPSBcIlByb2R1Y3ROYW1lXCJcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwibmFtZXNwYWNlIFlheGllLk5vcnRoV2luZCB7XHJcbiAgICBleHBvcnQgbmFtZXNwYWNlIFByb2R1Y3RMYW5nU2VydmljZSB7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IGJhc2VVcmwgPSAnTm9ydGhXaW5kL1Byb2R1Y3RMYW5nJztcclxuXHJcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgZnVuY3Rpb24gQ3JlYXRlKHJlcXVlc3Q6IFNlcmVuaXR5LlNhdmVSZXF1ZXN0PFByb2R1Y3RMYW5nUm93Piwgb25TdWNjZXNzPzogKHJlc3BvbnNlOiBTZXJlbml0eS5TYXZlUmVzcG9uc2UpID0+IHZvaWQsIG9wdD86IFEuU2VydmljZU9wdGlvbnM8YW55Pik6IEpRdWVyeVhIUjtcclxuICAgICAgICBleHBvcnQgZGVjbGFyZSBmdW5jdGlvbiBVcGRhdGUocmVxdWVzdDogU2VyZW5pdHkuU2F2ZVJlcXVlc3Q8UHJvZHVjdExhbmdSb3c+LCBvblN1Y2Nlc3M/OiAocmVzcG9uc2U6IFNlcmVuaXR5LlNhdmVSZXNwb25zZSkgPT4gdm9pZCwgb3B0PzogUS5TZXJ2aWNlT3B0aW9uczxhbnk+KTogSlF1ZXJ5WEhSO1xyXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGZ1bmN0aW9uIERlbGV0ZShyZXF1ZXN0OiBTZXJlbml0eS5EZWxldGVSZXF1ZXN0LCBvblN1Y2Nlc3M/OiAocmVzcG9uc2U6IFNlcmVuaXR5LkRlbGV0ZVJlc3BvbnNlKSA9PiB2b2lkLCBvcHQ/OiBRLlNlcnZpY2VPcHRpb25zPGFueT4pOiBKUXVlcnlYSFI7XHJcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgZnVuY3Rpb24gUmV0cmlldmUocmVxdWVzdDogU2VyZW5pdHkuUmV0cmlldmVSZXF1ZXN0LCBvblN1Y2Nlc3M/OiAocmVzcG9uc2U6IFNlcmVuaXR5LlJldHJpZXZlUmVzcG9uc2U8UHJvZHVjdExhbmdSb3c+KSA9PiB2b2lkLCBvcHQ/OiBRLlNlcnZpY2VPcHRpb25zPGFueT4pOiBKUXVlcnlYSFI7XHJcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgZnVuY3Rpb24gTGlzdChyZXF1ZXN0OiBTZXJlbml0eS5MaXN0UmVxdWVzdCwgb25TdWNjZXNzPzogKHJlc3BvbnNlOiBTZXJlbml0eS5MaXN0UmVzcG9uc2U8UHJvZHVjdExhbmdSb3c+KSA9PiB2b2lkLCBvcHQ/OiBRLlNlcnZpY2VPcHRpb25zPGFueT4pOiBKUXVlcnlYSFI7XHJcblxyXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGNvbnN0IGVudW0gTWV0aG9kcyB7XHJcbiAgICAgICAgICAgIENyZWF0ZSA9IFwiTm9ydGhXaW5kL1Byb2R1Y3RMYW5nL0NyZWF0ZVwiLFxyXG4gICAgICAgICAgICBVcGRhdGUgPSBcIk5vcnRoV2luZC9Qcm9kdWN0TGFuZy9VcGRhdGVcIixcclxuICAgICAgICAgICAgRGVsZXRlID0gXCJOb3J0aFdpbmQvUHJvZHVjdExhbmcvRGVsZXRlXCIsXHJcbiAgICAgICAgICAgIFJldHJpZXZlID0gXCJOb3J0aFdpbmQvUHJvZHVjdExhbmcvUmV0cmlldmVcIixcclxuICAgICAgICAgICAgTGlzdCA9IFwiTm9ydGhXaW5kL1Byb2R1Y3RMYW5nL0xpc3RcIlxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgW1xyXG4gICAgICAgICAgICAnQ3JlYXRlJywgXHJcbiAgICAgICAgICAgICdVcGRhdGUnLCBcclxuICAgICAgICAgICAgJ0RlbGV0ZScsIFxyXG4gICAgICAgICAgICAnUmV0cmlldmUnLCBcclxuICAgICAgICAgICAgJ0xpc3QnXHJcbiAgICAgICAgXS5mb3JFYWNoKHggPT4ge1xyXG4gICAgICAgICAgICAoPGFueT5Qcm9kdWN0TGFuZ1NlcnZpY2UpW3hdID0gZnVuY3Rpb24gKHIsIHMsIG8pIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBRLnNlcnZpY2VSZXF1ZXN0KGJhc2VVcmwgKyAnLycgKyB4LCByLCBzLCBvKTtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG4iLCJuYW1lc3BhY2UgWWF4aWUuTm9ydGhXaW5kIHtcclxufVxyXG4iLCJuYW1lc3BhY2UgWWF4aWUuTm9ydGhXaW5kIHtcclxuICAgIGV4cG9ydCBpbnRlcmZhY2UgUHJvZHVjdHNGb3JtIHtcclxuICAgICAgICBQcm9kdWN0TmFtZTogU2VyZW5pdHkuU3RyaW5nRWRpdG9yO1xyXG4gICAgICAgIFN1cHBsaWVySWQ6IFNlcmVuaXR5LkludGVnZXJFZGl0b3I7XHJcbiAgICAgICAgQ2F0ZWdvcnlJZDogU2VyZW5pdHkuSW50ZWdlckVkaXRvcjtcclxuICAgICAgICBRdWFudGl0eVBlclVuaXQ6IFNlcmVuaXR5LlN0cmluZ0VkaXRvcjtcclxuICAgICAgICBVbml0UHJpY2U6IFNlcmVuaXR5LkRlY2ltYWxFZGl0b3I7XHJcbiAgICAgICAgVW5pdHNJblN0b2NrOiBTZXJlbml0eS5JbnRlZ2VyRWRpdG9yO1xyXG4gICAgICAgIFVuaXRzT25PcmRlcjogU2VyZW5pdHkuSW50ZWdlckVkaXRvcjtcclxuICAgICAgICBSZW9yZGVyTGV2ZWw6IFNlcmVuaXR5LkludGVnZXJFZGl0b3I7XHJcbiAgICAgICAgRGlzY29udGludWVkOiBTZXJlbml0eS5Cb29sZWFuRWRpdG9yO1xyXG4gICAgICAgIFByb2R1Y3RJbWFnZTogU2VyZW5pdHkuU3RyaW5nRWRpdG9yO1xyXG4gICAgfVxyXG5cclxuICAgIGV4cG9ydCBjbGFzcyBQcm9kdWN0c0Zvcm0gZXh0ZW5kcyBTZXJlbml0eS5QcmVmaXhlZENvbnRleHQge1xyXG4gICAgICAgIHN0YXRpYyBmb3JtS2V5ID0gJ05vcnRoV2luZC5Qcm9kdWN0cyc7XHJcbiAgICAgICAgcHJpdmF0ZSBzdGF0aWMgaW5pdDogYm9vbGVhbjtcclxuXHJcbiAgICAgICAgY29uc3RydWN0b3IocHJlZml4OiBzdHJpbmcpIHtcclxuICAgICAgICAgICAgc3VwZXIocHJlZml4KTtcclxuXHJcbiAgICAgICAgICAgIGlmICghUHJvZHVjdHNGb3JtLmluaXQpICB7XHJcbiAgICAgICAgICAgICAgICBQcm9kdWN0c0Zvcm0uaW5pdCA9IHRydWU7XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIHMgPSBTZXJlbml0eTtcclxuICAgICAgICAgICAgICAgIHZhciB3MCA9IHMuU3RyaW5nRWRpdG9yO1xyXG4gICAgICAgICAgICAgICAgdmFyIHcxID0gcy5JbnRlZ2VyRWRpdG9yO1xyXG4gICAgICAgICAgICAgICAgdmFyIHcyID0gcy5EZWNpbWFsRWRpdG9yO1xyXG4gICAgICAgICAgICAgICAgdmFyIHczID0gcy5Cb29sZWFuRWRpdG9yO1xyXG5cclxuICAgICAgICAgICAgICAgIFEuaW5pdEZvcm1UeXBlKFByb2R1Y3RzRm9ybSwgW1xyXG4gICAgICAgICAgICAgICAgICAgICdQcm9kdWN0TmFtZScsIHcwLFxyXG4gICAgICAgICAgICAgICAgICAgICdTdXBwbGllcklkJywgdzEsXHJcbiAgICAgICAgICAgICAgICAgICAgJ0NhdGVnb3J5SWQnLCB3MSxcclxuICAgICAgICAgICAgICAgICAgICAnUXVhbnRpdHlQZXJVbml0JywgdzAsXHJcbiAgICAgICAgICAgICAgICAgICAgJ1VuaXRQcmljZScsIHcyLFxyXG4gICAgICAgICAgICAgICAgICAgICdVbml0c0luU3RvY2snLCB3MSxcclxuICAgICAgICAgICAgICAgICAgICAnVW5pdHNPbk9yZGVyJywgdzEsXHJcbiAgICAgICAgICAgICAgICAgICAgJ1Jlb3JkZXJMZXZlbCcsIHcxLFxyXG4gICAgICAgICAgICAgICAgICAgICdEaXNjb250aW51ZWQnLCB3MyxcclxuICAgICAgICAgICAgICAgICAgICAnUHJvZHVjdEltYWdlJywgdzBcclxuICAgICAgICAgICAgICAgIF0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsIm5hbWVzcGFjZSBZYXhpZS5Ob3J0aFdpbmQge1xyXG4gICAgZXhwb3J0IGludGVyZmFjZSBQcm9kdWN0c1JvdyB7XHJcbiAgICAgICAgUHJvZHVjdElkPzogbnVtYmVyO1xyXG4gICAgICAgIFByb2R1Y3ROYW1lPzogc3RyaW5nO1xyXG4gICAgICAgIFN1cHBsaWVySWQ/OiBudW1iZXI7XHJcbiAgICAgICAgQ2F0ZWdvcnlJZD86IG51bWJlcjtcclxuICAgICAgICBRdWFudGl0eVBlclVuaXQ/OiBzdHJpbmc7XHJcbiAgICAgICAgVW5pdFByaWNlPzogbnVtYmVyO1xyXG4gICAgICAgIFVuaXRzSW5TdG9jaz86IG51bWJlcjtcclxuICAgICAgICBVbml0c09uT3JkZXI/OiBudW1iZXI7XHJcbiAgICAgICAgUmVvcmRlckxldmVsPzogbnVtYmVyO1xyXG4gICAgICAgIERpc2NvbnRpbnVlZD86IGJvb2xlYW47XHJcbiAgICAgICAgUHJvZHVjdEltYWdlPzogc3RyaW5nO1xyXG4gICAgICAgIFN1cHBsaWVyQ29tcGFueU5hbWU/OiBzdHJpbmc7XHJcbiAgICAgICAgU3VwcGxpZXJDb250YWN0TmFtZT86IHN0cmluZztcclxuICAgICAgICBTdXBwbGllckNvbnRhY3RUaXRsZT86IHN0cmluZztcclxuICAgICAgICBTdXBwbGllckFkZHJlc3M/OiBzdHJpbmc7XHJcbiAgICAgICAgU3VwcGxpZXJDaXR5Pzogc3RyaW5nO1xyXG4gICAgICAgIFN1cHBsaWVyUmVnaW9uPzogc3RyaW5nO1xyXG4gICAgICAgIFN1cHBsaWVyUG9zdGFsQ29kZT86IHN0cmluZztcclxuICAgICAgICBTdXBwbGllckNvdW50cnk/OiBzdHJpbmc7XHJcbiAgICAgICAgU3VwcGxpZXJQaG9uZT86IHN0cmluZztcclxuICAgICAgICBTdXBwbGllckZheD86IHN0cmluZztcclxuICAgICAgICBTdXBwbGllckhvbWVQYWdlPzogc3RyaW5nO1xyXG4gICAgICAgIENhdGVnb3J5Q2F0ZWdvcnlOYW1lPzogc3RyaW5nO1xyXG4gICAgICAgIENhdGVnb3J5RGVzY3JpcHRpb24/OiBzdHJpbmc7XHJcbiAgICAgICAgQ2F0ZWdvcnlQaWN0dXJlPzogbnVtYmVyW107XHJcbiAgICB9XHJcblxyXG4gICAgZXhwb3J0IG5hbWVzcGFjZSBQcm9kdWN0c1JvdyB7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IGlkUHJvcGVydHkgPSAnUHJvZHVjdElkJztcclxuICAgICAgICBleHBvcnQgY29uc3QgbmFtZVByb3BlcnR5ID0gJ1Byb2R1Y3ROYW1lJztcclxuICAgICAgICBleHBvcnQgY29uc3QgbG9jYWxUZXh0UHJlZml4ID0gJ05vcnRoV2luZC5Qcm9kdWN0cyc7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IGRlbGV0ZVBlcm1pc3Npb24gPSAnQWRtaW5pc3RyYXRpb246R2VuZXJhbCc7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IGluc2VydFBlcm1pc3Npb24gPSAnQWRtaW5pc3RyYXRpb246R2VuZXJhbCc7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IHJlYWRQZXJtaXNzaW9uID0gJ0FkbWluaXN0cmF0aW9uOkdlbmVyYWwnO1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCB1cGRhdGVQZXJtaXNzaW9uID0gJ0FkbWluaXN0cmF0aW9uOkdlbmVyYWwnO1xyXG5cclxuICAgICAgICBleHBvcnQgZGVjbGFyZSBjb25zdCBlbnVtIEZpZWxkcyB7XHJcbiAgICAgICAgICAgIFByb2R1Y3RJZCA9IFwiUHJvZHVjdElkXCIsXHJcbiAgICAgICAgICAgIFByb2R1Y3ROYW1lID0gXCJQcm9kdWN0TmFtZVwiLFxyXG4gICAgICAgICAgICBTdXBwbGllcklkID0gXCJTdXBwbGllcklkXCIsXHJcbiAgICAgICAgICAgIENhdGVnb3J5SWQgPSBcIkNhdGVnb3J5SWRcIixcclxuICAgICAgICAgICAgUXVhbnRpdHlQZXJVbml0ID0gXCJRdWFudGl0eVBlclVuaXRcIixcclxuICAgICAgICAgICAgVW5pdFByaWNlID0gXCJVbml0UHJpY2VcIixcclxuICAgICAgICAgICAgVW5pdHNJblN0b2NrID0gXCJVbml0c0luU3RvY2tcIixcclxuICAgICAgICAgICAgVW5pdHNPbk9yZGVyID0gXCJVbml0c09uT3JkZXJcIixcclxuICAgICAgICAgICAgUmVvcmRlckxldmVsID0gXCJSZW9yZGVyTGV2ZWxcIixcclxuICAgICAgICAgICAgRGlzY29udGludWVkID0gXCJEaXNjb250aW51ZWRcIixcclxuICAgICAgICAgICAgUHJvZHVjdEltYWdlID0gXCJQcm9kdWN0SW1hZ2VcIixcclxuICAgICAgICAgICAgU3VwcGxpZXJDb21wYW55TmFtZSA9IFwiU3VwcGxpZXJDb21wYW55TmFtZVwiLFxyXG4gICAgICAgICAgICBTdXBwbGllckNvbnRhY3ROYW1lID0gXCJTdXBwbGllckNvbnRhY3ROYW1lXCIsXHJcbiAgICAgICAgICAgIFN1cHBsaWVyQ29udGFjdFRpdGxlID0gXCJTdXBwbGllckNvbnRhY3RUaXRsZVwiLFxyXG4gICAgICAgICAgICBTdXBwbGllckFkZHJlc3MgPSBcIlN1cHBsaWVyQWRkcmVzc1wiLFxyXG4gICAgICAgICAgICBTdXBwbGllckNpdHkgPSBcIlN1cHBsaWVyQ2l0eVwiLFxyXG4gICAgICAgICAgICBTdXBwbGllclJlZ2lvbiA9IFwiU3VwcGxpZXJSZWdpb25cIixcclxuICAgICAgICAgICAgU3VwcGxpZXJQb3N0YWxDb2RlID0gXCJTdXBwbGllclBvc3RhbENvZGVcIixcclxuICAgICAgICAgICAgU3VwcGxpZXJDb3VudHJ5ID0gXCJTdXBwbGllckNvdW50cnlcIixcclxuICAgICAgICAgICAgU3VwcGxpZXJQaG9uZSA9IFwiU3VwcGxpZXJQaG9uZVwiLFxyXG4gICAgICAgICAgICBTdXBwbGllckZheCA9IFwiU3VwcGxpZXJGYXhcIixcclxuICAgICAgICAgICAgU3VwcGxpZXJIb21lUGFnZSA9IFwiU3VwcGxpZXJIb21lUGFnZVwiLFxyXG4gICAgICAgICAgICBDYXRlZ29yeUNhdGVnb3J5TmFtZSA9IFwiQ2F0ZWdvcnlDYXRlZ29yeU5hbWVcIixcclxuICAgICAgICAgICAgQ2F0ZWdvcnlEZXNjcmlwdGlvbiA9IFwiQ2F0ZWdvcnlEZXNjcmlwdGlvblwiLFxyXG4gICAgICAgICAgICBDYXRlZ29yeVBpY3R1cmUgPSBcIkNhdGVnb3J5UGljdHVyZVwiXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsIm5hbWVzcGFjZSBZYXhpZS5Ob3J0aFdpbmQge1xyXG4gICAgZXhwb3J0IG5hbWVzcGFjZSBQcm9kdWN0c1NlcnZpY2Uge1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCBiYXNlVXJsID0gJ05vcnRoV2luZC9Qcm9kdWN0cyc7XHJcblxyXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGZ1bmN0aW9uIENyZWF0ZShyZXF1ZXN0OiBTZXJlbml0eS5TYXZlUmVxdWVzdDxQcm9kdWN0c1Jvdz4sIG9uU3VjY2Vzcz86IChyZXNwb25zZTogU2VyZW5pdHkuU2F2ZVJlc3BvbnNlKSA9PiB2b2lkLCBvcHQ/OiBRLlNlcnZpY2VPcHRpb25zPGFueT4pOiBKUXVlcnlYSFI7XHJcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgZnVuY3Rpb24gVXBkYXRlKHJlcXVlc3Q6IFNlcmVuaXR5LlNhdmVSZXF1ZXN0PFByb2R1Y3RzUm93Piwgb25TdWNjZXNzPzogKHJlc3BvbnNlOiBTZXJlbml0eS5TYXZlUmVzcG9uc2UpID0+IHZvaWQsIG9wdD86IFEuU2VydmljZU9wdGlvbnM8YW55Pik6IEpRdWVyeVhIUjtcclxuICAgICAgICBleHBvcnQgZGVjbGFyZSBmdW5jdGlvbiBEZWxldGUocmVxdWVzdDogU2VyZW5pdHkuRGVsZXRlUmVxdWVzdCwgb25TdWNjZXNzPzogKHJlc3BvbnNlOiBTZXJlbml0eS5EZWxldGVSZXNwb25zZSkgPT4gdm9pZCwgb3B0PzogUS5TZXJ2aWNlT3B0aW9uczxhbnk+KTogSlF1ZXJ5WEhSO1xyXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGZ1bmN0aW9uIFJldHJpZXZlKHJlcXVlc3Q6IFNlcmVuaXR5LlJldHJpZXZlUmVxdWVzdCwgb25TdWNjZXNzPzogKHJlc3BvbnNlOiBTZXJlbml0eS5SZXRyaWV2ZVJlc3BvbnNlPFByb2R1Y3RzUm93PikgPT4gdm9pZCwgb3B0PzogUS5TZXJ2aWNlT3B0aW9uczxhbnk+KTogSlF1ZXJ5WEhSO1xyXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGZ1bmN0aW9uIExpc3QocmVxdWVzdDogU2VyZW5pdHkuTGlzdFJlcXVlc3QsIG9uU3VjY2Vzcz86IChyZXNwb25zZTogU2VyZW5pdHkuTGlzdFJlc3BvbnNlPFByb2R1Y3RzUm93PikgPT4gdm9pZCwgb3B0PzogUS5TZXJ2aWNlT3B0aW9uczxhbnk+KTogSlF1ZXJ5WEhSO1xyXG5cclxuICAgICAgICBleHBvcnQgZGVjbGFyZSBjb25zdCBlbnVtIE1ldGhvZHMge1xyXG4gICAgICAgICAgICBDcmVhdGUgPSBcIk5vcnRoV2luZC9Qcm9kdWN0cy9DcmVhdGVcIixcclxuICAgICAgICAgICAgVXBkYXRlID0gXCJOb3J0aFdpbmQvUHJvZHVjdHMvVXBkYXRlXCIsXHJcbiAgICAgICAgICAgIERlbGV0ZSA9IFwiTm9ydGhXaW5kL1Byb2R1Y3RzL0RlbGV0ZVwiLFxyXG4gICAgICAgICAgICBSZXRyaWV2ZSA9IFwiTm9ydGhXaW5kL1Byb2R1Y3RzL1JldHJpZXZlXCIsXHJcbiAgICAgICAgICAgIExpc3QgPSBcIk5vcnRoV2luZC9Qcm9kdWN0cy9MaXN0XCJcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIFtcclxuICAgICAgICAgICAgJ0NyZWF0ZScsIFxyXG4gICAgICAgICAgICAnVXBkYXRlJywgXHJcbiAgICAgICAgICAgICdEZWxldGUnLCBcclxuICAgICAgICAgICAgJ1JldHJpZXZlJywgXHJcbiAgICAgICAgICAgICdMaXN0J1xyXG4gICAgICAgIF0uZm9yRWFjaCh4ID0+IHtcclxuICAgICAgICAgICAgKDxhbnk+UHJvZHVjdHNTZXJ2aWNlKVt4XSA9IGZ1bmN0aW9uIChyLCBzLCBvKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gUS5zZXJ2aWNlUmVxdWVzdChiYXNlVXJsICsgJy8nICsgeCwgciwgcywgbyk7XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuIiwibmFtZXNwYWNlIFlheGllLk5vcnRoV2luZCB7XHJcbn1cclxuIiwibmFtZXNwYWNlIFlheGllLk5vcnRoV2luZCB7XHJcbiAgICBleHBvcnQgaW50ZXJmYWNlIFByb2R1Y3RzYnlDYXRlZ29yeUZvcm0ge1xyXG4gICAgICAgIFByb2R1Y3ROYW1lOiBTZXJlbml0eS5TdHJpbmdFZGl0b3I7XHJcbiAgICAgICAgUXVhbnRpdHlQZXJVbml0OiBTZXJlbml0eS5TdHJpbmdFZGl0b3I7XHJcbiAgICAgICAgVW5pdHNJblN0b2NrOiBTZXJlbml0eS5JbnRlZ2VyRWRpdG9yO1xyXG4gICAgICAgIERpc2NvbnRpbnVlZDogU2VyZW5pdHkuQm9vbGVhbkVkaXRvcjtcclxuICAgIH1cclxuXHJcbiAgICBleHBvcnQgY2xhc3MgUHJvZHVjdHNieUNhdGVnb3J5Rm9ybSBleHRlbmRzIFNlcmVuaXR5LlByZWZpeGVkQ29udGV4dCB7XHJcbiAgICAgICAgc3RhdGljIGZvcm1LZXkgPSAnTm9ydGhXaW5kLlByb2R1Y3RzYnlDYXRlZ29yeSc7XHJcbiAgICAgICAgcHJpdmF0ZSBzdGF0aWMgaW5pdDogYm9vbGVhbjtcclxuXHJcbiAgICAgICAgY29uc3RydWN0b3IocHJlZml4OiBzdHJpbmcpIHtcclxuICAgICAgICAgICAgc3VwZXIocHJlZml4KTtcclxuXHJcbiAgICAgICAgICAgIGlmICghUHJvZHVjdHNieUNhdGVnb3J5Rm9ybS5pbml0KSAge1xyXG4gICAgICAgICAgICAgICAgUHJvZHVjdHNieUNhdGVnb3J5Rm9ybS5pbml0ID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgcyA9IFNlcmVuaXR5O1xyXG4gICAgICAgICAgICAgICAgdmFyIHcwID0gcy5TdHJpbmdFZGl0b3I7XHJcbiAgICAgICAgICAgICAgICB2YXIgdzEgPSBzLkludGVnZXJFZGl0b3I7XHJcbiAgICAgICAgICAgICAgICB2YXIgdzIgPSBzLkJvb2xlYW5FZGl0b3I7XHJcblxyXG4gICAgICAgICAgICAgICAgUS5pbml0Rm9ybVR5cGUoUHJvZHVjdHNieUNhdGVnb3J5Rm9ybSwgW1xyXG4gICAgICAgICAgICAgICAgICAgICdQcm9kdWN0TmFtZScsIHcwLFxyXG4gICAgICAgICAgICAgICAgICAgICdRdWFudGl0eVBlclVuaXQnLCB3MCxcclxuICAgICAgICAgICAgICAgICAgICAnVW5pdHNJblN0b2NrJywgdzEsXHJcbiAgICAgICAgICAgICAgICAgICAgJ0Rpc2NvbnRpbnVlZCcsIHcyXHJcbiAgICAgICAgICAgICAgICBdKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCJuYW1lc3BhY2UgWWF4aWUuTm9ydGhXaW5kIHtcclxuICAgIGV4cG9ydCBpbnRlcmZhY2UgUHJvZHVjdHNieUNhdGVnb3J5Um93IHtcclxuICAgICAgICBDYXRlZ29yeU5hbWU/OiBzdHJpbmc7XHJcbiAgICAgICAgUHJvZHVjdE5hbWU/OiBzdHJpbmc7XHJcbiAgICAgICAgUXVhbnRpdHlQZXJVbml0Pzogc3RyaW5nO1xyXG4gICAgICAgIFVuaXRzSW5TdG9jaz86IG51bWJlcjtcclxuICAgICAgICBEaXNjb250aW51ZWQ/OiBib29sZWFuO1xyXG4gICAgfVxyXG5cclxuICAgIGV4cG9ydCBuYW1lc3BhY2UgUHJvZHVjdHNieUNhdGVnb3J5Um93IHtcclxuICAgICAgICBleHBvcnQgY29uc3QgaWRQcm9wZXJ0eSA9ICdDYXRlZ29yeU5hbWUnO1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCBuYW1lUHJvcGVydHkgPSAnQ2F0ZWdvcnlOYW1lJztcclxuICAgICAgICBleHBvcnQgY29uc3QgbG9jYWxUZXh0UHJlZml4ID0gJ05vcnRoV2luZC5Qcm9kdWN0c2J5Q2F0ZWdvcnknO1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCBkZWxldGVQZXJtaXNzaW9uID0gJ0FkbWluaXN0cmF0aW9uOkdlbmVyYWwnO1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCBpbnNlcnRQZXJtaXNzaW9uID0gJ0FkbWluaXN0cmF0aW9uOkdlbmVyYWwnO1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCByZWFkUGVybWlzc2lvbiA9ICdBZG1pbmlzdHJhdGlvbjpHZW5lcmFsJztcclxuICAgICAgICBleHBvcnQgY29uc3QgdXBkYXRlUGVybWlzc2lvbiA9ICdBZG1pbmlzdHJhdGlvbjpHZW5lcmFsJztcclxuXHJcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgY29uc3QgZW51bSBGaWVsZHMge1xyXG4gICAgICAgICAgICBDYXRlZ29yeU5hbWUgPSBcIkNhdGVnb3J5TmFtZVwiLFxyXG4gICAgICAgICAgICBQcm9kdWN0TmFtZSA9IFwiUHJvZHVjdE5hbWVcIixcclxuICAgICAgICAgICAgUXVhbnRpdHlQZXJVbml0ID0gXCJRdWFudGl0eVBlclVuaXRcIixcclxuICAgICAgICAgICAgVW5pdHNJblN0b2NrID0gXCJVbml0c0luU3RvY2tcIixcclxuICAgICAgICAgICAgRGlzY29udGludWVkID0gXCJEaXNjb250aW51ZWRcIlxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCJuYW1lc3BhY2UgWWF4aWUuTm9ydGhXaW5kIHtcclxuICAgIGV4cG9ydCBuYW1lc3BhY2UgUHJvZHVjdHNieUNhdGVnb3J5U2VydmljZSB7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IGJhc2VVcmwgPSAnTm9ydGhXaW5kL1Byb2R1Y3RzYnlDYXRlZ29yeSc7XHJcblxyXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGZ1bmN0aW9uIENyZWF0ZShyZXF1ZXN0OiBTZXJlbml0eS5TYXZlUmVxdWVzdDxQcm9kdWN0c2J5Q2F0ZWdvcnlSb3c+LCBvblN1Y2Nlc3M/OiAocmVzcG9uc2U6IFNlcmVuaXR5LlNhdmVSZXNwb25zZSkgPT4gdm9pZCwgb3B0PzogUS5TZXJ2aWNlT3B0aW9uczxhbnk+KTogSlF1ZXJ5WEhSO1xyXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGZ1bmN0aW9uIFVwZGF0ZShyZXF1ZXN0OiBTZXJlbml0eS5TYXZlUmVxdWVzdDxQcm9kdWN0c2J5Q2F0ZWdvcnlSb3c+LCBvblN1Y2Nlc3M/OiAocmVzcG9uc2U6IFNlcmVuaXR5LlNhdmVSZXNwb25zZSkgPT4gdm9pZCwgb3B0PzogUS5TZXJ2aWNlT3B0aW9uczxhbnk+KTogSlF1ZXJ5WEhSO1xyXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGZ1bmN0aW9uIERlbGV0ZShyZXF1ZXN0OiBTZXJlbml0eS5EZWxldGVSZXF1ZXN0LCBvblN1Y2Nlc3M/OiAocmVzcG9uc2U6IFNlcmVuaXR5LkRlbGV0ZVJlc3BvbnNlKSA9PiB2b2lkLCBvcHQ/OiBRLlNlcnZpY2VPcHRpb25zPGFueT4pOiBKUXVlcnlYSFI7XHJcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgZnVuY3Rpb24gUmV0cmlldmUocmVxdWVzdDogU2VyZW5pdHkuUmV0cmlldmVSZXF1ZXN0LCBvblN1Y2Nlc3M/OiAocmVzcG9uc2U6IFNlcmVuaXR5LlJldHJpZXZlUmVzcG9uc2U8UHJvZHVjdHNieUNhdGVnb3J5Um93PikgPT4gdm9pZCwgb3B0PzogUS5TZXJ2aWNlT3B0aW9uczxhbnk+KTogSlF1ZXJ5WEhSO1xyXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGZ1bmN0aW9uIExpc3QocmVxdWVzdDogU2VyZW5pdHkuTGlzdFJlcXVlc3QsIG9uU3VjY2Vzcz86IChyZXNwb25zZTogU2VyZW5pdHkuTGlzdFJlc3BvbnNlPFByb2R1Y3RzYnlDYXRlZ29yeVJvdz4pID0+IHZvaWQsIG9wdD86IFEuU2VydmljZU9wdGlvbnM8YW55Pik6IEpRdWVyeVhIUjtcclxuXHJcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgY29uc3QgZW51bSBNZXRob2RzIHtcclxuICAgICAgICAgICAgQ3JlYXRlID0gXCJOb3J0aFdpbmQvUHJvZHVjdHNieUNhdGVnb3J5L0NyZWF0ZVwiLFxyXG4gICAgICAgICAgICBVcGRhdGUgPSBcIk5vcnRoV2luZC9Qcm9kdWN0c2J5Q2F0ZWdvcnkvVXBkYXRlXCIsXHJcbiAgICAgICAgICAgIERlbGV0ZSA9IFwiTm9ydGhXaW5kL1Byb2R1Y3RzYnlDYXRlZ29yeS9EZWxldGVcIixcclxuICAgICAgICAgICAgUmV0cmlldmUgPSBcIk5vcnRoV2luZC9Qcm9kdWN0c2J5Q2F0ZWdvcnkvUmV0cmlldmVcIixcclxuICAgICAgICAgICAgTGlzdCA9IFwiTm9ydGhXaW5kL1Byb2R1Y3RzYnlDYXRlZ29yeS9MaXN0XCJcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIFtcclxuICAgICAgICAgICAgJ0NyZWF0ZScsIFxyXG4gICAgICAgICAgICAnVXBkYXRlJywgXHJcbiAgICAgICAgICAgICdEZWxldGUnLCBcclxuICAgICAgICAgICAgJ1JldHJpZXZlJywgXHJcbiAgICAgICAgICAgICdMaXN0J1xyXG4gICAgICAgIF0uZm9yRWFjaCh4ID0+IHtcclxuICAgICAgICAgICAgKDxhbnk+UHJvZHVjdHNieUNhdGVnb3J5U2VydmljZSlbeF0gPSBmdW5jdGlvbiAociwgcywgbykge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFEuc2VydmljZVJlcXVlc3QoYmFzZVVybCArICcvJyArIHgsIHIsIHMsIG8pO1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcbiIsIm5hbWVzcGFjZSBZYXhpZS5Ob3J0aFdpbmQge1xyXG59XHJcbiIsIm5hbWVzcGFjZSBZYXhpZS5Ob3J0aFdpbmQge1xyXG4gICAgZXhwb3J0IGludGVyZmFjZSBSZWdpb25Gb3JtIHtcclxuICAgICAgICBSZWdpb25EZXNjcmlwdGlvbjogU2VyZW5pdHkuU3RyaW5nRWRpdG9yO1xyXG4gICAgfVxyXG5cclxuICAgIGV4cG9ydCBjbGFzcyBSZWdpb25Gb3JtIGV4dGVuZHMgU2VyZW5pdHkuUHJlZml4ZWRDb250ZXh0IHtcclxuICAgICAgICBzdGF0aWMgZm9ybUtleSA9ICdOb3J0aFdpbmQuUmVnaW9uJztcclxuICAgICAgICBwcml2YXRlIHN0YXRpYyBpbml0OiBib29sZWFuO1xyXG5cclxuICAgICAgICBjb25zdHJ1Y3RvcihwcmVmaXg6IHN0cmluZykge1xyXG4gICAgICAgICAgICBzdXBlcihwcmVmaXgpO1xyXG5cclxuICAgICAgICAgICAgaWYgKCFSZWdpb25Gb3JtLmluaXQpICB7XHJcbiAgICAgICAgICAgICAgICBSZWdpb25Gb3JtLmluaXQgPSB0cnVlO1xyXG5cclxuICAgICAgICAgICAgICAgIHZhciBzID0gU2VyZW5pdHk7XHJcbiAgICAgICAgICAgICAgICB2YXIgdzAgPSBzLlN0cmluZ0VkaXRvcjtcclxuXHJcbiAgICAgICAgICAgICAgICBRLmluaXRGb3JtVHlwZShSZWdpb25Gb3JtLCBbXHJcbiAgICAgICAgICAgICAgICAgICAgJ1JlZ2lvbkRlc2NyaXB0aW9uJywgdzBcclxuICAgICAgICAgICAgICAgIF0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsIm5hbWVzcGFjZSBZYXhpZS5Ob3J0aFdpbmQge1xyXG4gICAgZXhwb3J0IGludGVyZmFjZSBSZWdpb25Sb3cge1xyXG4gICAgICAgIFJlZ2lvbklkPzogbnVtYmVyO1xyXG4gICAgICAgIFJlZ2lvbkRlc2NyaXB0aW9uPzogc3RyaW5nO1xyXG4gICAgfVxyXG5cclxuICAgIGV4cG9ydCBuYW1lc3BhY2UgUmVnaW9uUm93IHtcclxuICAgICAgICBleHBvcnQgY29uc3QgaWRQcm9wZXJ0eSA9ICdSZWdpb25JZCc7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IG5hbWVQcm9wZXJ0eSA9ICdSZWdpb25EZXNjcmlwdGlvbic7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IGxvY2FsVGV4dFByZWZpeCA9ICdOb3J0aFdpbmQuUmVnaW9uJztcclxuICAgICAgICBleHBvcnQgY29uc3QgZGVsZXRlUGVybWlzc2lvbiA9ICdBZG1pbmlzdHJhdGlvbjpHZW5lcmFsJztcclxuICAgICAgICBleHBvcnQgY29uc3QgaW5zZXJ0UGVybWlzc2lvbiA9ICdBZG1pbmlzdHJhdGlvbjpHZW5lcmFsJztcclxuICAgICAgICBleHBvcnQgY29uc3QgcmVhZFBlcm1pc3Npb24gPSAnQWRtaW5pc3RyYXRpb246R2VuZXJhbCc7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IHVwZGF0ZVBlcm1pc3Npb24gPSAnQWRtaW5pc3RyYXRpb246R2VuZXJhbCc7XHJcblxyXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGNvbnN0IGVudW0gRmllbGRzIHtcclxuICAgICAgICAgICAgUmVnaW9uSWQgPSBcIlJlZ2lvbklkXCIsXHJcbiAgICAgICAgICAgIFJlZ2lvbkRlc2NyaXB0aW9uID0gXCJSZWdpb25EZXNjcmlwdGlvblwiXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsIm5hbWVzcGFjZSBZYXhpZS5Ob3J0aFdpbmQge1xyXG4gICAgZXhwb3J0IG5hbWVzcGFjZSBSZWdpb25TZXJ2aWNlIHtcclxuICAgICAgICBleHBvcnQgY29uc3QgYmFzZVVybCA9ICdOb3J0aFdpbmQvUmVnaW9uJztcclxuXHJcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgZnVuY3Rpb24gQ3JlYXRlKHJlcXVlc3Q6IFNlcmVuaXR5LlNhdmVSZXF1ZXN0PFJlZ2lvblJvdz4sIG9uU3VjY2Vzcz86IChyZXNwb25zZTogU2VyZW5pdHkuU2F2ZVJlc3BvbnNlKSA9PiB2b2lkLCBvcHQ/OiBRLlNlcnZpY2VPcHRpb25zPGFueT4pOiBKUXVlcnlYSFI7XHJcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgZnVuY3Rpb24gVXBkYXRlKHJlcXVlc3Q6IFNlcmVuaXR5LlNhdmVSZXF1ZXN0PFJlZ2lvblJvdz4sIG9uU3VjY2Vzcz86IChyZXNwb25zZTogU2VyZW5pdHkuU2F2ZVJlc3BvbnNlKSA9PiB2b2lkLCBvcHQ/OiBRLlNlcnZpY2VPcHRpb25zPGFueT4pOiBKUXVlcnlYSFI7XHJcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgZnVuY3Rpb24gRGVsZXRlKHJlcXVlc3Q6IFNlcmVuaXR5LkRlbGV0ZVJlcXVlc3QsIG9uU3VjY2Vzcz86IChyZXNwb25zZTogU2VyZW5pdHkuRGVsZXRlUmVzcG9uc2UpID0+IHZvaWQsIG9wdD86IFEuU2VydmljZU9wdGlvbnM8YW55Pik6IEpRdWVyeVhIUjtcclxuICAgICAgICBleHBvcnQgZGVjbGFyZSBmdW5jdGlvbiBSZXRyaWV2ZShyZXF1ZXN0OiBTZXJlbml0eS5SZXRyaWV2ZVJlcXVlc3QsIG9uU3VjY2Vzcz86IChyZXNwb25zZTogU2VyZW5pdHkuUmV0cmlldmVSZXNwb25zZTxSZWdpb25Sb3c+KSA9PiB2b2lkLCBvcHQ/OiBRLlNlcnZpY2VPcHRpb25zPGFueT4pOiBKUXVlcnlYSFI7XHJcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgZnVuY3Rpb24gTGlzdChyZXF1ZXN0OiBTZXJlbml0eS5MaXN0UmVxdWVzdCwgb25TdWNjZXNzPzogKHJlc3BvbnNlOiBTZXJlbml0eS5MaXN0UmVzcG9uc2U8UmVnaW9uUm93PikgPT4gdm9pZCwgb3B0PzogUS5TZXJ2aWNlT3B0aW9uczxhbnk+KTogSlF1ZXJ5WEhSO1xyXG5cclxuICAgICAgICBleHBvcnQgZGVjbGFyZSBjb25zdCBlbnVtIE1ldGhvZHMge1xyXG4gICAgICAgICAgICBDcmVhdGUgPSBcIk5vcnRoV2luZC9SZWdpb24vQ3JlYXRlXCIsXHJcbiAgICAgICAgICAgIFVwZGF0ZSA9IFwiTm9ydGhXaW5kL1JlZ2lvbi9VcGRhdGVcIixcclxuICAgICAgICAgICAgRGVsZXRlID0gXCJOb3J0aFdpbmQvUmVnaW9uL0RlbGV0ZVwiLFxyXG4gICAgICAgICAgICBSZXRyaWV2ZSA9IFwiTm9ydGhXaW5kL1JlZ2lvbi9SZXRyaWV2ZVwiLFxyXG4gICAgICAgICAgICBMaXN0ID0gXCJOb3J0aFdpbmQvUmVnaW9uL0xpc3RcIlxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgW1xyXG4gICAgICAgICAgICAnQ3JlYXRlJywgXHJcbiAgICAgICAgICAgICdVcGRhdGUnLCBcclxuICAgICAgICAgICAgJ0RlbGV0ZScsIFxyXG4gICAgICAgICAgICAnUmV0cmlldmUnLCBcclxuICAgICAgICAgICAgJ0xpc3QnXHJcbiAgICAgICAgXS5mb3JFYWNoKHggPT4ge1xyXG4gICAgICAgICAgICAoPGFueT5SZWdpb25TZXJ2aWNlKVt4XSA9IGZ1bmN0aW9uIChyLCBzLCBvKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gUS5zZXJ2aWNlUmVxdWVzdChiYXNlVXJsICsgJy8nICsgeCwgciwgcywgbyk7XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuIiwibmFtZXNwYWNlIFlheGllLk5vcnRoV2luZCB7XHJcbn1cclxuIiwibmFtZXNwYWNlIFlheGllLk5vcnRoV2luZCB7XHJcbiAgICBleHBvcnQgaW50ZXJmYWNlIFNoaXBwZXJzRm9ybSB7XHJcbiAgICAgICAgQ29tcGFueU5hbWU6IFNlcmVuaXR5LlN0cmluZ0VkaXRvcjtcclxuICAgICAgICBQaG9uZTogU2VyZW5pdHkuU3RyaW5nRWRpdG9yO1xyXG4gICAgfVxyXG5cclxuICAgIGV4cG9ydCBjbGFzcyBTaGlwcGVyc0Zvcm0gZXh0ZW5kcyBTZXJlbml0eS5QcmVmaXhlZENvbnRleHQge1xyXG4gICAgICAgIHN0YXRpYyBmb3JtS2V5ID0gJ05vcnRoV2luZC5TaGlwcGVycyc7XHJcbiAgICAgICAgcHJpdmF0ZSBzdGF0aWMgaW5pdDogYm9vbGVhbjtcclxuXHJcbiAgICAgICAgY29uc3RydWN0b3IocHJlZml4OiBzdHJpbmcpIHtcclxuICAgICAgICAgICAgc3VwZXIocHJlZml4KTtcclxuXHJcbiAgICAgICAgICAgIGlmICghU2hpcHBlcnNGb3JtLmluaXQpICB7XHJcbiAgICAgICAgICAgICAgICBTaGlwcGVyc0Zvcm0uaW5pdCA9IHRydWU7XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIHMgPSBTZXJlbml0eTtcclxuICAgICAgICAgICAgICAgIHZhciB3MCA9IHMuU3RyaW5nRWRpdG9yO1xyXG5cclxuICAgICAgICAgICAgICAgIFEuaW5pdEZvcm1UeXBlKFNoaXBwZXJzRm9ybSwgW1xyXG4gICAgICAgICAgICAgICAgICAgICdDb21wYW55TmFtZScsIHcwLFxyXG4gICAgICAgICAgICAgICAgICAgICdQaG9uZScsIHcwXHJcbiAgICAgICAgICAgICAgICBdKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCJuYW1lc3BhY2UgWWF4aWUuTm9ydGhXaW5kIHtcclxuICAgIGV4cG9ydCBpbnRlcmZhY2UgU2hpcHBlcnNSb3cge1xyXG4gICAgICAgIFNoaXBwZXJJZD86IG51bWJlcjtcclxuICAgICAgICBDb21wYW55TmFtZT86IHN0cmluZztcclxuICAgICAgICBQaG9uZT86IHN0cmluZztcclxuICAgIH1cclxuXHJcbiAgICBleHBvcnQgbmFtZXNwYWNlIFNoaXBwZXJzUm93IHtcclxuICAgICAgICBleHBvcnQgY29uc3QgaWRQcm9wZXJ0eSA9ICdTaGlwcGVySWQnO1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCBuYW1lUHJvcGVydHkgPSAnQ29tcGFueU5hbWUnO1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCBsb2NhbFRleHRQcmVmaXggPSAnTm9ydGhXaW5kLlNoaXBwZXJzJztcclxuICAgICAgICBleHBvcnQgY29uc3QgZGVsZXRlUGVybWlzc2lvbiA9ICdBZG1pbmlzdHJhdGlvbjpHZW5lcmFsJztcclxuICAgICAgICBleHBvcnQgY29uc3QgaW5zZXJ0UGVybWlzc2lvbiA9ICdBZG1pbmlzdHJhdGlvbjpHZW5lcmFsJztcclxuICAgICAgICBleHBvcnQgY29uc3QgcmVhZFBlcm1pc3Npb24gPSAnQWRtaW5pc3RyYXRpb246R2VuZXJhbCc7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IHVwZGF0ZVBlcm1pc3Npb24gPSAnQWRtaW5pc3RyYXRpb246R2VuZXJhbCc7XHJcblxyXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGNvbnN0IGVudW0gRmllbGRzIHtcclxuICAgICAgICAgICAgU2hpcHBlcklkID0gXCJTaGlwcGVySWRcIixcclxuICAgICAgICAgICAgQ29tcGFueU5hbWUgPSBcIkNvbXBhbnlOYW1lXCIsXHJcbiAgICAgICAgICAgIFBob25lID0gXCJQaG9uZVwiXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsIm5hbWVzcGFjZSBZYXhpZS5Ob3J0aFdpbmQge1xyXG4gICAgZXhwb3J0IG5hbWVzcGFjZSBTaGlwcGVyc1NlcnZpY2Uge1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCBiYXNlVXJsID0gJ05vcnRoV2luZC9TaGlwcGVycyc7XHJcblxyXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGZ1bmN0aW9uIENyZWF0ZShyZXF1ZXN0OiBTZXJlbml0eS5TYXZlUmVxdWVzdDxTaGlwcGVyc1Jvdz4sIG9uU3VjY2Vzcz86IChyZXNwb25zZTogU2VyZW5pdHkuU2F2ZVJlc3BvbnNlKSA9PiB2b2lkLCBvcHQ/OiBRLlNlcnZpY2VPcHRpb25zPGFueT4pOiBKUXVlcnlYSFI7XHJcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgZnVuY3Rpb24gVXBkYXRlKHJlcXVlc3Q6IFNlcmVuaXR5LlNhdmVSZXF1ZXN0PFNoaXBwZXJzUm93Piwgb25TdWNjZXNzPzogKHJlc3BvbnNlOiBTZXJlbml0eS5TYXZlUmVzcG9uc2UpID0+IHZvaWQsIG9wdD86IFEuU2VydmljZU9wdGlvbnM8YW55Pik6IEpRdWVyeVhIUjtcclxuICAgICAgICBleHBvcnQgZGVjbGFyZSBmdW5jdGlvbiBEZWxldGUocmVxdWVzdDogU2VyZW5pdHkuRGVsZXRlUmVxdWVzdCwgb25TdWNjZXNzPzogKHJlc3BvbnNlOiBTZXJlbml0eS5EZWxldGVSZXNwb25zZSkgPT4gdm9pZCwgb3B0PzogUS5TZXJ2aWNlT3B0aW9uczxhbnk+KTogSlF1ZXJ5WEhSO1xyXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGZ1bmN0aW9uIFJldHJpZXZlKHJlcXVlc3Q6IFNlcmVuaXR5LlJldHJpZXZlUmVxdWVzdCwgb25TdWNjZXNzPzogKHJlc3BvbnNlOiBTZXJlbml0eS5SZXRyaWV2ZVJlc3BvbnNlPFNoaXBwZXJzUm93PikgPT4gdm9pZCwgb3B0PzogUS5TZXJ2aWNlT3B0aW9uczxhbnk+KTogSlF1ZXJ5WEhSO1xyXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGZ1bmN0aW9uIExpc3QocmVxdWVzdDogU2VyZW5pdHkuTGlzdFJlcXVlc3QsIG9uU3VjY2Vzcz86IChyZXNwb25zZTogU2VyZW5pdHkuTGlzdFJlc3BvbnNlPFNoaXBwZXJzUm93PikgPT4gdm9pZCwgb3B0PzogUS5TZXJ2aWNlT3B0aW9uczxhbnk+KTogSlF1ZXJ5WEhSO1xyXG5cclxuICAgICAgICBleHBvcnQgZGVjbGFyZSBjb25zdCBlbnVtIE1ldGhvZHMge1xyXG4gICAgICAgICAgICBDcmVhdGUgPSBcIk5vcnRoV2luZC9TaGlwcGVycy9DcmVhdGVcIixcclxuICAgICAgICAgICAgVXBkYXRlID0gXCJOb3J0aFdpbmQvU2hpcHBlcnMvVXBkYXRlXCIsXHJcbiAgICAgICAgICAgIERlbGV0ZSA9IFwiTm9ydGhXaW5kL1NoaXBwZXJzL0RlbGV0ZVwiLFxyXG4gICAgICAgICAgICBSZXRyaWV2ZSA9IFwiTm9ydGhXaW5kL1NoaXBwZXJzL1JldHJpZXZlXCIsXHJcbiAgICAgICAgICAgIExpc3QgPSBcIk5vcnRoV2luZC9TaGlwcGVycy9MaXN0XCJcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIFtcclxuICAgICAgICAgICAgJ0NyZWF0ZScsIFxyXG4gICAgICAgICAgICAnVXBkYXRlJywgXHJcbiAgICAgICAgICAgICdEZWxldGUnLCBcclxuICAgICAgICAgICAgJ1JldHJpZXZlJywgXHJcbiAgICAgICAgICAgICdMaXN0J1xyXG4gICAgICAgIF0uZm9yRWFjaCh4ID0+IHtcclxuICAgICAgICAgICAgKDxhbnk+U2hpcHBlcnNTZXJ2aWNlKVt4XSA9IGZ1bmN0aW9uIChyLCBzLCBvKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gUS5zZXJ2aWNlUmVxdWVzdChiYXNlVXJsICsgJy8nICsgeCwgciwgcywgbyk7XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuIiwibmFtZXNwYWNlIFlheGllLk5vcnRoV2luZCB7XHJcbn1cclxuIiwibmFtZXNwYWNlIFlheGllLk5vcnRoV2luZCB7XHJcbiAgICBleHBvcnQgaW50ZXJmYWNlIFN1cHBsaWVyc0Zvcm0ge1xyXG4gICAgICAgIENvbXBhbnlOYW1lOiBTZXJlbml0eS5TdHJpbmdFZGl0b3I7XHJcbiAgICAgICAgQ29udGFjdE5hbWU6IFNlcmVuaXR5LlN0cmluZ0VkaXRvcjtcclxuICAgICAgICBDb250YWN0VGl0bGU6IFNlcmVuaXR5LlN0cmluZ0VkaXRvcjtcclxuICAgICAgICBBZGRyZXNzOiBTZXJlbml0eS5TdHJpbmdFZGl0b3I7XHJcbiAgICAgICAgQ2l0eTogU2VyZW5pdHkuU3RyaW5nRWRpdG9yO1xyXG4gICAgICAgIFJlZ2lvbjogU2VyZW5pdHkuU3RyaW5nRWRpdG9yO1xyXG4gICAgICAgIFBvc3RhbENvZGU6IFNlcmVuaXR5LlN0cmluZ0VkaXRvcjtcclxuICAgICAgICBDb3VudHJ5OiBTZXJlbml0eS5TdHJpbmdFZGl0b3I7XHJcbiAgICAgICAgUGhvbmU6IFNlcmVuaXR5LlN0cmluZ0VkaXRvcjtcclxuICAgICAgICBGYXg6IFNlcmVuaXR5LlN0cmluZ0VkaXRvcjtcclxuICAgICAgICBIb21lUGFnZTogU2VyZW5pdHkuU3RyaW5nRWRpdG9yO1xyXG4gICAgfVxyXG5cclxuICAgIGV4cG9ydCBjbGFzcyBTdXBwbGllcnNGb3JtIGV4dGVuZHMgU2VyZW5pdHkuUHJlZml4ZWRDb250ZXh0IHtcclxuICAgICAgICBzdGF0aWMgZm9ybUtleSA9ICdOb3J0aFdpbmQuU3VwcGxpZXJzJztcclxuICAgICAgICBwcml2YXRlIHN0YXRpYyBpbml0OiBib29sZWFuO1xyXG5cclxuICAgICAgICBjb25zdHJ1Y3RvcihwcmVmaXg6IHN0cmluZykge1xyXG4gICAgICAgICAgICBzdXBlcihwcmVmaXgpO1xyXG5cclxuICAgICAgICAgICAgaWYgKCFTdXBwbGllcnNGb3JtLmluaXQpICB7XHJcbiAgICAgICAgICAgICAgICBTdXBwbGllcnNGb3JtLmluaXQgPSB0cnVlO1xyXG5cclxuICAgICAgICAgICAgICAgIHZhciBzID0gU2VyZW5pdHk7XHJcbiAgICAgICAgICAgICAgICB2YXIgdzAgPSBzLlN0cmluZ0VkaXRvcjtcclxuXHJcbiAgICAgICAgICAgICAgICBRLmluaXRGb3JtVHlwZShTdXBwbGllcnNGb3JtLCBbXHJcbiAgICAgICAgICAgICAgICAgICAgJ0NvbXBhbnlOYW1lJywgdzAsXHJcbiAgICAgICAgICAgICAgICAgICAgJ0NvbnRhY3ROYW1lJywgdzAsXHJcbiAgICAgICAgICAgICAgICAgICAgJ0NvbnRhY3RUaXRsZScsIHcwLFxyXG4gICAgICAgICAgICAgICAgICAgICdBZGRyZXNzJywgdzAsXHJcbiAgICAgICAgICAgICAgICAgICAgJ0NpdHknLCB3MCxcclxuICAgICAgICAgICAgICAgICAgICAnUmVnaW9uJywgdzAsXHJcbiAgICAgICAgICAgICAgICAgICAgJ1Bvc3RhbENvZGUnLCB3MCxcclxuICAgICAgICAgICAgICAgICAgICAnQ291bnRyeScsIHcwLFxyXG4gICAgICAgICAgICAgICAgICAgICdQaG9uZScsIHcwLFxyXG4gICAgICAgICAgICAgICAgICAgICdGYXgnLCB3MCxcclxuICAgICAgICAgICAgICAgICAgICAnSG9tZVBhZ2UnLCB3MFxyXG4gICAgICAgICAgICAgICAgXSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwibmFtZXNwYWNlIFlheGllLk5vcnRoV2luZCB7XHJcbiAgICBleHBvcnQgaW50ZXJmYWNlIFN1cHBsaWVyc1JvdyB7XHJcbiAgICAgICAgU3VwcGxpZXJJZD86IG51bWJlcjtcclxuICAgICAgICBDb21wYW55TmFtZT86IHN0cmluZztcclxuICAgICAgICBDb250YWN0TmFtZT86IHN0cmluZztcclxuICAgICAgICBDb250YWN0VGl0bGU/OiBzdHJpbmc7XHJcbiAgICAgICAgQWRkcmVzcz86IHN0cmluZztcclxuICAgICAgICBDaXR5Pzogc3RyaW5nO1xyXG4gICAgICAgIFJlZ2lvbj86IHN0cmluZztcclxuICAgICAgICBQb3N0YWxDb2RlPzogc3RyaW5nO1xyXG4gICAgICAgIENvdW50cnk/OiBzdHJpbmc7XHJcbiAgICAgICAgUGhvbmU/OiBzdHJpbmc7XHJcbiAgICAgICAgRmF4Pzogc3RyaW5nO1xyXG4gICAgICAgIEhvbWVQYWdlPzogc3RyaW5nO1xyXG4gICAgfVxyXG5cclxuICAgIGV4cG9ydCBuYW1lc3BhY2UgU3VwcGxpZXJzUm93IHtcclxuICAgICAgICBleHBvcnQgY29uc3QgaWRQcm9wZXJ0eSA9ICdTdXBwbGllcklkJztcclxuICAgICAgICBleHBvcnQgY29uc3QgbmFtZVByb3BlcnR5ID0gJ0NvbXBhbnlOYW1lJztcclxuICAgICAgICBleHBvcnQgY29uc3QgbG9jYWxUZXh0UHJlZml4ID0gJ05vcnRoV2luZC5TdXBwbGllcnMnO1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCBkZWxldGVQZXJtaXNzaW9uID0gJ0FkbWluaXN0cmF0aW9uOkdlbmVyYWwnO1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCBpbnNlcnRQZXJtaXNzaW9uID0gJ0FkbWluaXN0cmF0aW9uOkdlbmVyYWwnO1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCByZWFkUGVybWlzc2lvbiA9ICdBZG1pbmlzdHJhdGlvbjpHZW5lcmFsJztcclxuICAgICAgICBleHBvcnQgY29uc3QgdXBkYXRlUGVybWlzc2lvbiA9ICdBZG1pbmlzdHJhdGlvbjpHZW5lcmFsJztcclxuXHJcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgY29uc3QgZW51bSBGaWVsZHMge1xyXG4gICAgICAgICAgICBTdXBwbGllcklkID0gXCJTdXBwbGllcklkXCIsXHJcbiAgICAgICAgICAgIENvbXBhbnlOYW1lID0gXCJDb21wYW55TmFtZVwiLFxyXG4gICAgICAgICAgICBDb250YWN0TmFtZSA9IFwiQ29udGFjdE5hbWVcIixcclxuICAgICAgICAgICAgQ29udGFjdFRpdGxlID0gXCJDb250YWN0VGl0bGVcIixcclxuICAgICAgICAgICAgQWRkcmVzcyA9IFwiQWRkcmVzc1wiLFxyXG4gICAgICAgICAgICBDaXR5ID0gXCJDaXR5XCIsXHJcbiAgICAgICAgICAgIFJlZ2lvbiA9IFwiUmVnaW9uXCIsXHJcbiAgICAgICAgICAgIFBvc3RhbENvZGUgPSBcIlBvc3RhbENvZGVcIixcclxuICAgICAgICAgICAgQ291bnRyeSA9IFwiQ291bnRyeVwiLFxyXG4gICAgICAgICAgICBQaG9uZSA9IFwiUGhvbmVcIixcclxuICAgICAgICAgICAgRmF4ID0gXCJGYXhcIixcclxuICAgICAgICAgICAgSG9tZVBhZ2UgPSBcIkhvbWVQYWdlXCJcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwibmFtZXNwYWNlIFlheGllLk5vcnRoV2luZCB7XHJcbiAgICBleHBvcnQgbmFtZXNwYWNlIFN1cHBsaWVyc1NlcnZpY2Uge1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCBiYXNlVXJsID0gJ05vcnRoV2luZC9TdXBwbGllcnMnO1xyXG5cclxuICAgICAgICBleHBvcnQgZGVjbGFyZSBmdW5jdGlvbiBDcmVhdGUocmVxdWVzdDogU2VyZW5pdHkuU2F2ZVJlcXVlc3Q8U3VwcGxpZXJzUm93Piwgb25TdWNjZXNzPzogKHJlc3BvbnNlOiBTZXJlbml0eS5TYXZlUmVzcG9uc2UpID0+IHZvaWQsIG9wdD86IFEuU2VydmljZU9wdGlvbnM8YW55Pik6IEpRdWVyeVhIUjtcclxuICAgICAgICBleHBvcnQgZGVjbGFyZSBmdW5jdGlvbiBVcGRhdGUocmVxdWVzdDogU2VyZW5pdHkuU2F2ZVJlcXVlc3Q8U3VwcGxpZXJzUm93Piwgb25TdWNjZXNzPzogKHJlc3BvbnNlOiBTZXJlbml0eS5TYXZlUmVzcG9uc2UpID0+IHZvaWQsIG9wdD86IFEuU2VydmljZU9wdGlvbnM8YW55Pik6IEpRdWVyeVhIUjtcclxuICAgICAgICBleHBvcnQgZGVjbGFyZSBmdW5jdGlvbiBEZWxldGUocmVxdWVzdDogU2VyZW5pdHkuRGVsZXRlUmVxdWVzdCwgb25TdWNjZXNzPzogKHJlc3BvbnNlOiBTZXJlbml0eS5EZWxldGVSZXNwb25zZSkgPT4gdm9pZCwgb3B0PzogUS5TZXJ2aWNlT3B0aW9uczxhbnk+KTogSlF1ZXJ5WEhSO1xyXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGZ1bmN0aW9uIFJldHJpZXZlKHJlcXVlc3Q6IFNlcmVuaXR5LlJldHJpZXZlUmVxdWVzdCwgb25TdWNjZXNzPzogKHJlc3BvbnNlOiBTZXJlbml0eS5SZXRyaWV2ZVJlc3BvbnNlPFN1cHBsaWVyc1Jvdz4pID0+IHZvaWQsIG9wdD86IFEuU2VydmljZU9wdGlvbnM8YW55Pik6IEpRdWVyeVhIUjtcclxuICAgICAgICBleHBvcnQgZGVjbGFyZSBmdW5jdGlvbiBMaXN0KHJlcXVlc3Q6IFNlcmVuaXR5Lkxpc3RSZXF1ZXN0LCBvblN1Y2Nlc3M/OiAocmVzcG9uc2U6IFNlcmVuaXR5Lkxpc3RSZXNwb25zZTxTdXBwbGllcnNSb3c+KSA9PiB2b2lkLCBvcHQ/OiBRLlNlcnZpY2VPcHRpb25zPGFueT4pOiBKUXVlcnlYSFI7XHJcblxyXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGNvbnN0IGVudW0gTWV0aG9kcyB7XHJcbiAgICAgICAgICAgIENyZWF0ZSA9IFwiTm9ydGhXaW5kL1N1cHBsaWVycy9DcmVhdGVcIixcclxuICAgICAgICAgICAgVXBkYXRlID0gXCJOb3J0aFdpbmQvU3VwcGxpZXJzL1VwZGF0ZVwiLFxyXG4gICAgICAgICAgICBEZWxldGUgPSBcIk5vcnRoV2luZC9TdXBwbGllcnMvRGVsZXRlXCIsXHJcbiAgICAgICAgICAgIFJldHJpZXZlID0gXCJOb3J0aFdpbmQvU3VwcGxpZXJzL1JldHJpZXZlXCIsXHJcbiAgICAgICAgICAgIExpc3QgPSBcIk5vcnRoV2luZC9TdXBwbGllcnMvTGlzdFwiXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBbXHJcbiAgICAgICAgICAgICdDcmVhdGUnLCBcclxuICAgICAgICAgICAgJ1VwZGF0ZScsIFxyXG4gICAgICAgICAgICAnRGVsZXRlJywgXHJcbiAgICAgICAgICAgICdSZXRyaWV2ZScsIFxyXG4gICAgICAgICAgICAnTGlzdCdcclxuICAgICAgICBdLmZvckVhY2goeCA9PiB7XHJcbiAgICAgICAgICAgICg8YW55PlN1cHBsaWVyc1NlcnZpY2UpW3hdID0gZnVuY3Rpb24gKHIsIHMsIG8pIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBRLnNlcnZpY2VSZXF1ZXN0KGJhc2VVcmwgKyAnLycgKyB4LCByLCBzLCBvKTtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG4iLCJuYW1lc3BhY2UgWWF4aWUuTm9ydGhXaW5kIHtcclxufVxyXG4iLCJuYW1lc3BhY2UgWWF4aWUuTm9ydGhXaW5kIHtcclxuICAgIGV4cG9ydCBpbnRlcmZhY2UgVGVycml0b3JpZXNGb3JtIHtcclxuICAgICAgICBUZXJyaXRvcnlJZDogU2VyZW5pdHkuU3RyaW5nRWRpdG9yO1xyXG4gICAgICAgIFRlcnJpdG9yeURlc2NyaXB0aW9uOiBTZXJlbml0eS5TdHJpbmdFZGl0b3I7XHJcbiAgICAgICAgUmVnaW9uSWQ6IFNlcmVuaXR5LkludGVnZXJFZGl0b3I7XHJcbiAgICB9XHJcblxyXG4gICAgZXhwb3J0IGNsYXNzIFRlcnJpdG9yaWVzRm9ybSBleHRlbmRzIFNlcmVuaXR5LlByZWZpeGVkQ29udGV4dCB7XHJcbiAgICAgICAgc3RhdGljIGZvcm1LZXkgPSAnTm9ydGhXaW5kLlRlcnJpdG9yaWVzJztcclxuICAgICAgICBwcml2YXRlIHN0YXRpYyBpbml0OiBib29sZWFuO1xyXG5cclxuICAgICAgICBjb25zdHJ1Y3RvcihwcmVmaXg6IHN0cmluZykge1xyXG4gICAgICAgICAgICBzdXBlcihwcmVmaXgpO1xyXG5cclxuICAgICAgICAgICAgaWYgKCFUZXJyaXRvcmllc0Zvcm0uaW5pdCkgIHtcclxuICAgICAgICAgICAgICAgIFRlcnJpdG9yaWVzRm9ybS5pbml0ID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgcyA9IFNlcmVuaXR5O1xyXG4gICAgICAgICAgICAgICAgdmFyIHcwID0gcy5TdHJpbmdFZGl0b3I7XHJcbiAgICAgICAgICAgICAgICB2YXIgdzEgPSBzLkludGVnZXJFZGl0b3I7XHJcblxyXG4gICAgICAgICAgICAgICAgUS5pbml0Rm9ybVR5cGUoVGVycml0b3JpZXNGb3JtLCBbXHJcbiAgICAgICAgICAgICAgICAgICAgJ1RlcnJpdG9yeUlkJywgdzAsXHJcbiAgICAgICAgICAgICAgICAgICAgJ1RlcnJpdG9yeURlc2NyaXB0aW9uJywgdzAsXHJcbiAgICAgICAgICAgICAgICAgICAgJ1JlZ2lvbklkJywgdzFcclxuICAgICAgICAgICAgICAgIF0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsIm5hbWVzcGFjZSBZYXhpZS5Ob3J0aFdpbmQge1xyXG4gICAgZXhwb3J0IGludGVyZmFjZSBUZXJyaXRvcmllc1JvdyB7XHJcbiAgICAgICAgVGVycml0b3J5SWQ/OiBzdHJpbmc7XHJcbiAgICAgICAgVGVycml0b3J5RGVzY3JpcHRpb24/OiBzdHJpbmc7XHJcbiAgICAgICAgUmVnaW9uSWQ/OiBudW1iZXI7XHJcbiAgICAgICAgSWQ/OiBudW1iZXI7XHJcbiAgICAgICAgUmVnaW9uUmVnaW9uRGVzY3JpcHRpb24/OiBzdHJpbmc7XHJcbiAgICB9XHJcblxyXG4gICAgZXhwb3J0IG5hbWVzcGFjZSBUZXJyaXRvcmllc1JvdyB7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IGlkUHJvcGVydHkgPSAnSWQnO1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCBuYW1lUHJvcGVydHkgPSAnVGVycml0b3J5SWQnO1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCBsb2NhbFRleHRQcmVmaXggPSAnTm9ydGhXaW5kLlRlcnJpdG9yaWVzJztcclxuICAgICAgICBleHBvcnQgY29uc3QgZGVsZXRlUGVybWlzc2lvbiA9ICdBZG1pbmlzdHJhdGlvbjpHZW5lcmFsJztcclxuICAgICAgICBleHBvcnQgY29uc3QgaW5zZXJ0UGVybWlzc2lvbiA9ICdBZG1pbmlzdHJhdGlvbjpHZW5lcmFsJztcclxuICAgICAgICBleHBvcnQgY29uc3QgcmVhZFBlcm1pc3Npb24gPSAnQWRtaW5pc3RyYXRpb246R2VuZXJhbCc7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IHVwZGF0ZVBlcm1pc3Npb24gPSAnQWRtaW5pc3RyYXRpb246R2VuZXJhbCc7XHJcblxyXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGNvbnN0IGVudW0gRmllbGRzIHtcclxuICAgICAgICAgICAgVGVycml0b3J5SWQgPSBcIlRlcnJpdG9yeUlkXCIsXHJcbiAgICAgICAgICAgIFRlcnJpdG9yeURlc2NyaXB0aW9uID0gXCJUZXJyaXRvcnlEZXNjcmlwdGlvblwiLFxyXG4gICAgICAgICAgICBSZWdpb25JZCA9IFwiUmVnaW9uSWRcIixcclxuICAgICAgICAgICAgSWQgPSBcIklkXCIsXHJcbiAgICAgICAgICAgIFJlZ2lvblJlZ2lvbkRlc2NyaXB0aW9uID0gXCJSZWdpb25SZWdpb25EZXNjcmlwdGlvblwiXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsIm5hbWVzcGFjZSBZYXhpZS5Ob3J0aFdpbmQge1xyXG4gICAgZXhwb3J0IG5hbWVzcGFjZSBUZXJyaXRvcmllc1NlcnZpY2Uge1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCBiYXNlVXJsID0gJ05vcnRoV2luZC9UZXJyaXRvcmllcyc7XHJcblxyXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGZ1bmN0aW9uIENyZWF0ZShyZXF1ZXN0OiBTZXJlbml0eS5TYXZlUmVxdWVzdDxUZXJyaXRvcmllc1Jvdz4sIG9uU3VjY2Vzcz86IChyZXNwb25zZTogU2VyZW5pdHkuU2F2ZVJlc3BvbnNlKSA9PiB2b2lkLCBvcHQ/OiBRLlNlcnZpY2VPcHRpb25zPGFueT4pOiBKUXVlcnlYSFI7XHJcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgZnVuY3Rpb24gVXBkYXRlKHJlcXVlc3Q6IFNlcmVuaXR5LlNhdmVSZXF1ZXN0PFRlcnJpdG9yaWVzUm93Piwgb25TdWNjZXNzPzogKHJlc3BvbnNlOiBTZXJlbml0eS5TYXZlUmVzcG9uc2UpID0+IHZvaWQsIG9wdD86IFEuU2VydmljZU9wdGlvbnM8YW55Pik6IEpRdWVyeVhIUjtcclxuICAgICAgICBleHBvcnQgZGVjbGFyZSBmdW5jdGlvbiBEZWxldGUocmVxdWVzdDogU2VyZW5pdHkuRGVsZXRlUmVxdWVzdCwgb25TdWNjZXNzPzogKHJlc3BvbnNlOiBTZXJlbml0eS5EZWxldGVSZXNwb25zZSkgPT4gdm9pZCwgb3B0PzogUS5TZXJ2aWNlT3B0aW9uczxhbnk+KTogSlF1ZXJ5WEhSO1xyXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGZ1bmN0aW9uIFJldHJpZXZlKHJlcXVlc3Q6IFNlcmVuaXR5LlJldHJpZXZlUmVxdWVzdCwgb25TdWNjZXNzPzogKHJlc3BvbnNlOiBTZXJlbml0eS5SZXRyaWV2ZVJlc3BvbnNlPFRlcnJpdG9yaWVzUm93PikgPT4gdm9pZCwgb3B0PzogUS5TZXJ2aWNlT3B0aW9uczxhbnk+KTogSlF1ZXJ5WEhSO1xyXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGZ1bmN0aW9uIExpc3QocmVxdWVzdDogU2VyZW5pdHkuTGlzdFJlcXVlc3QsIG9uU3VjY2Vzcz86IChyZXNwb25zZTogU2VyZW5pdHkuTGlzdFJlc3BvbnNlPFRlcnJpdG9yaWVzUm93PikgPT4gdm9pZCwgb3B0PzogUS5TZXJ2aWNlT3B0aW9uczxhbnk+KTogSlF1ZXJ5WEhSO1xyXG5cclxuICAgICAgICBleHBvcnQgZGVjbGFyZSBjb25zdCBlbnVtIE1ldGhvZHMge1xyXG4gICAgICAgICAgICBDcmVhdGUgPSBcIk5vcnRoV2luZC9UZXJyaXRvcmllcy9DcmVhdGVcIixcclxuICAgICAgICAgICAgVXBkYXRlID0gXCJOb3J0aFdpbmQvVGVycml0b3JpZXMvVXBkYXRlXCIsXHJcbiAgICAgICAgICAgIERlbGV0ZSA9IFwiTm9ydGhXaW5kL1RlcnJpdG9yaWVzL0RlbGV0ZVwiLFxyXG4gICAgICAgICAgICBSZXRyaWV2ZSA9IFwiTm9ydGhXaW5kL1RlcnJpdG9yaWVzL1JldHJpZXZlXCIsXHJcbiAgICAgICAgICAgIExpc3QgPSBcIk5vcnRoV2luZC9UZXJyaXRvcmllcy9MaXN0XCJcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIFtcclxuICAgICAgICAgICAgJ0NyZWF0ZScsIFxyXG4gICAgICAgICAgICAnVXBkYXRlJywgXHJcbiAgICAgICAgICAgICdEZWxldGUnLCBcclxuICAgICAgICAgICAgJ1JldHJpZXZlJywgXHJcbiAgICAgICAgICAgICdMaXN0J1xyXG4gICAgICAgIF0uZm9yRWFjaCh4ID0+IHtcclxuICAgICAgICAgICAgKDxhbnk+VGVycml0b3JpZXNTZXJ2aWNlKVt4XSA9IGZ1bmN0aW9uIChyLCBzLCBvKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gUS5zZXJ2aWNlUmVxdWVzdChiYXNlVXJsICsgJy8nICsgeCwgciwgcywgbyk7XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuIiwibmFtZXNwYWNlIFlheGllIHtcclxuICAgIGV4cG9ydCBpbnRlcmZhY2UgU2NyaXB0VXNlckRlZmluaXRpb24ge1xyXG4gICAgICAgIFVzZXJuYW1lPzogc3RyaW5nO1xyXG4gICAgICAgIERpc3BsYXlOYW1lPzogc3RyaW5nO1xyXG4gICAgICAgIElzQWRtaW4/OiBib29sZWFuO1xyXG4gICAgICAgIFBlcm1pc3Npb25zPzogeyBba2V5OiBzdHJpbmddOiBib29sZWFuIH07XHJcbiAgICB9XHJcbn1cclxuXHJcbiIsIm5hbWVzcGFjZSBZYXhpZS5UZXh0cyB7XHJcblxyXG4gICAgZGVjbGFyZSBuYW1lc3BhY2UgRGIge1xyXG5cclxuICAgICAgICBuYW1lc3BhY2UgQWRtaW5pc3RyYXRpb24ge1xyXG5cclxuICAgICAgICAgICAgbmFtZXNwYWNlIExhbmd1YWdlIHtcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBJZDogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IExhbmd1YWdlSWQ6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBMYW5ndWFnZU5hbWU6IHN0cmluZztcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgbmFtZXNwYWNlIFJvbGUge1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFJvbGVJZDogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFJvbGVOYW1lOiBzdHJpbmc7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIG5hbWVzcGFjZSBSb2xlUGVybWlzc2lvbiB7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgUGVybWlzc2lvbktleTogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFJvbGVJZDogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFJvbGVQZXJtaXNzaW9uSWQ6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBSb2xlUm9sZU5hbWU6IHN0cmluZztcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgbmFtZXNwYWNlIFRyYW5zbGF0aW9uIHtcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBDdXN0b21UZXh0OiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgRW50aXR5UGx1cmFsOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgS2V5OiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgT3ZlcnJpZGVDb25maXJtYXRpb246IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBTYXZlQ2hhbmdlc0J1dHRvbjogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFNvdXJjZUxhbmd1YWdlOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgU291cmNlVGV4dDogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFRhcmdldExhbmd1YWdlOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgVGFyZ2V0VGV4dDogc3RyaW5nO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBuYW1lc3BhY2UgVXNlciB7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgRGlzcGxheU5hbWU6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBFbWFpbDogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IEluc2VydERhdGU6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBJbnNlcnRVc2VySWQ6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBJc0FjdGl2ZTogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IExhc3REaXJlY3RvcnlVcGRhdGU6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBQYXNzd29yZDogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFBhc3N3b3JkQ29uZmlybTogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFBhc3N3b3JkSGFzaDogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFBhc3N3b3JkU2FsdDogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFNvdXJjZTogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFVwZGF0ZURhdGU6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBVcGRhdGVVc2VySWQ6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBVc2VySWQ6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBVc2VySW1hZ2U6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBVc2VybmFtZTogc3RyaW5nO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBuYW1lc3BhY2UgVXNlclBlcm1pc3Npb24ge1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IEdyYW50ZWQ6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBQZXJtaXNzaW9uS2V5OiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgVXNlcjogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFVzZXJJZDogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFVzZXJQZXJtaXNzaW9uSWQ6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBVc2VybmFtZTogc3RyaW5nO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBuYW1lc3BhY2UgVXNlclJvbGUge1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFJvbGVJZDogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFVzZXI6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBVc2VySWQ6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBVc2VyUm9sZUlkOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgVXNlcm5hbWU6IHN0cmluZztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbmFtZXNwYWNlIENvbW1vbiB7XHJcblxyXG4gICAgICAgICAgICBuYW1lc3BhY2UgSW1wb3J0U291cmNlIHtcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBEZXNjcmlwdGlvbjogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IEltcG9ydFNvdXJjZUlkOiBzdHJpbmc7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIG5hbWVzcGFjZSBJbXBvcnRUeXBlIHtcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBEZXNjcmlwdGlvbjogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IEltcG9ydFR5cGVJZDogc3RyaW5nO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBuYW1lc3BhY2UgSW1wb3J0V2l6YXJkIHtcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBBcmNoaXZlRm9sZGVyOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgQ29sdW1uRXJyb3JDb3VudDogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IERlc2NyaXB0aW9uOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgRW5kQXRSb3c6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBFcnJvckxpc3Q6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBGaWVsZERlbGltaXRlcklkOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgRmllbGRNYXRjaERpc3BsYXk6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBGaWVsZE1hdGNoTGlzdDogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IEltcG9ydEZpbGVMaXN0OiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgSW1wb3J0U291cmNlSWQ6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBJbXBvcnRUeXBlRGVzY3JpcHRpb246IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBJbXBvcnRUeXBlSWQ6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBJbXBvcnRXaXphcmRJZDogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IEtleUNvbHVtbjogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IEtleVR5cGU6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBMYXN0UnVuRGF0ZTogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IE1hdGNoT25GaWVsZE5hbWVzOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgTWF0Y2hPbkxhYmVsczogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IE5vdGVMaXN0OiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgUm93RXJyb3JDb3VudDogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFNvdXJjZURpcmVjdG9yeTogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFN0YXJ0QXRSb3c6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBUYXJnZXREYXRhYmFzZTogc3RyaW5nO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBuYW1lc3BhY2UgTm90ZSB7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgRW50aXR5SWQ6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBFbnRpdHlUeXBlOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgSW5zZXJ0RGF0ZTogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IEluc2VydFVzZXJEaXNwbGF5TmFtZTogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IEluc2VydFVzZXJJZDogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IE5vdGVJZDogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IE5vdGVUZXh0OiBzdHJpbmc7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIG5hbWVzcGFjZSBVc2VyUHJlZmVyZW5jZSB7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgTmFtZTogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFByZWZlcmVuY2VUeXBlOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgVXNlcklkOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgVXNlclByZWZlcmVuY2VJZDogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFZhbHVlOiBzdHJpbmc7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIG5hbWVzcGFjZSBOb3J0aFdpbmQge1xyXG5cclxuICAgICAgICAgICAgbmFtZXNwYWNlIENhdGVnb3JpZXMge1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IENhdGVnb3J5SWQ6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBDYXRlZ29yeU5hbWU6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBEZXNjcmlwdGlvbjogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFBpY3R1cmU6IHN0cmluZztcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgbmFtZXNwYWNlIENhdGVnb3J5TGFuZyB7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgQ2F0ZWdvcnlJZDogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IENhdGVnb3J5TmFtZTogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IERlc2NyaXB0aW9uOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgSWQ6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBMYW5ndWFnZUlkOiBzdHJpbmc7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIG5hbWVzcGFjZSBDdXN0b21lckRldGFpbHMge1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IEVtYWlsOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgSWQ6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBMYXN0Q29udGFjdERhdGU6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBMYXN0Q29udGFjdGVkQnk6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBMYXN0Q29udGFjdGVkQnlBZGRyZXNzOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgTGFzdENvbnRhY3RlZEJ5QmlydGhEYXRlOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgTGFzdENvbnRhY3RlZEJ5Q2l0eTogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IExhc3RDb250YWN0ZWRCeUNvdW50cnk6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBMYXN0Q29udGFjdGVkQnlFeHRlbnNpb246IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBMYXN0Q29udGFjdGVkQnlGaXJzdE5hbWU6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBMYXN0Q29udGFjdGVkQnlIaXJlRGF0ZTogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IExhc3RDb250YWN0ZWRCeUhvbWVQaG9uZTogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IExhc3RDb250YWN0ZWRCeUxhc3ROYW1lOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgTGFzdENvbnRhY3RlZEJ5Tm90ZXM6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBMYXN0Q29udGFjdGVkQnlQaG90bzogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IExhc3RDb250YWN0ZWRCeVBob3RvUGF0aDogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IExhc3RDb250YWN0ZWRCeVBvc3RhbENvZGU6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBMYXN0Q29udGFjdGVkQnlSZWdpb246IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBMYXN0Q29udGFjdGVkQnlSZXBvcnRzVG86IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBMYXN0Q29udGFjdGVkQnlUaXRsZTogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IExhc3RDb250YWN0ZWRCeVRpdGxlT2ZDb3VydGVzeTogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFNlbmRCdWxsZXRpbjogc3RyaW5nO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBuYW1lc3BhY2UgQ3VzdG9tZXJzIHtcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBBZGRyZXNzOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgQ2l0eTogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IENvbXBhbnlOYW1lOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgQ29udGFjdE5hbWU6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBDb250YWN0VGl0bGU6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBDb3VudHJ5OiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgQ3VzdG9tZXJJZDogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IEZheDogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IElkOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgUGhvbmU6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBQb3N0YWxDb2RlOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgUmVnaW9uOiBzdHJpbmc7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIG5hbWVzcGFjZSBFbXBsb3llZVRlcnJpdG9yaWVzIHtcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBFbXBsb3llZUFkZHJlc3M6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBFbXBsb3llZUJpcnRoRGF0ZTogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IEVtcGxveWVlQ2l0eTogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IEVtcGxveWVlQ291bnRyeTogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IEVtcGxveWVlRXh0ZW5zaW9uOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgRW1wbG95ZWVGaXJzdE5hbWU6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBFbXBsb3llZUhpcmVEYXRlOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgRW1wbG95ZWVIb21lUGhvbmU6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBFbXBsb3llZUlkOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgRW1wbG95ZWVMYXN0TmFtZTogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IEVtcGxveWVlTm90ZXM6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBFbXBsb3llZVBob3RvOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgRW1wbG95ZWVQaG90b1BhdGg6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBFbXBsb3llZVBvc3RhbENvZGU6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBFbXBsb3llZVJlZ2lvbjogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IEVtcGxveWVlUmVwb3J0c1RvOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgRW1wbG95ZWVUaXRsZTogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IEVtcGxveWVlVGl0bGVPZkNvdXJ0ZXN5OiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgVGVycml0b3J5SWQ6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBUZXJyaXRvcnlJZDE6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBUZXJyaXRvcnlSZWdpb25JZDogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFRlcnJpdG9yeVRlcnJpdG9yeURlc2NyaXB0aW9uOiBzdHJpbmc7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIG5hbWVzcGFjZSBFbXBsb3llZXMge1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IEFkZHJlc3M6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBCaXJ0aERhdGU6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBDaXR5OiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgQ291bnRyeTogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IEVtcGxveWVlSWQ6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBFeHRlbnNpb246IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBGaXJzdE5hbWU6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBIaXJlRGF0ZTogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IEhvbWVQaG9uZTogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IExhc3ROYW1lOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgTm90ZXM6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBQaG90bzogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFBob3RvUGF0aDogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFBvc3RhbENvZGU6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBSZWdpb246IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBSZXBvcnRzVG86IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBSZXBvcnRzVG8xOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgUmVwb3J0c1RvQWRkcmVzczogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFJlcG9ydHNUb0JpcnRoRGF0ZTogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFJlcG9ydHNUb0NpdHk6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBSZXBvcnRzVG9Db3VudHJ5OiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgUmVwb3J0c1RvRXh0ZW5zaW9uOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgUmVwb3J0c1RvRmlyc3ROYW1lOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgUmVwb3J0c1RvSGlyZURhdGU6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBSZXBvcnRzVG9Ib21lUGhvbmU6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBSZXBvcnRzVG9MYXN0TmFtZTogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFJlcG9ydHNUb05vdGVzOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgUmVwb3J0c1RvUGhvdG86IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBSZXBvcnRzVG9QaG90b1BhdGg6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBSZXBvcnRzVG9Qb3N0YWxDb2RlOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgUmVwb3J0c1RvUmVnaW9uOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgUmVwb3J0c1RvVGl0bGU6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBSZXBvcnRzVG9UaXRsZU9mQ291cnRlc3k6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBUaXRsZTogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFRpdGxlT2ZDb3VydGVzeTogc3RyaW5nO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBuYW1lc3BhY2UgSW52b2ljZXMge1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IEFkZHJlc3M6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBDaXR5OiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgQ291bnRyeTogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IEN1c3RvbWVySWQ6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBDdXN0b21lck5hbWU6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBEaXNjb3VudDogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IEV4dGVuZGVkUHJpY2U6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBGcmVpZ2h0OiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgT3JkZXJEYXRlOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgT3JkZXJJZDogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFBvc3RhbENvZGU6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBQcm9kdWN0SWQ6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBQcm9kdWN0TmFtZTogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFF1YW50aXR5OiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgUmVnaW9uOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgUmVxdWlyZWREYXRlOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgU2FsZXNwZXJzb246IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBTaGlwQWRkcmVzczogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFNoaXBDaXR5OiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgU2hpcENvdW50cnk6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBTaGlwTmFtZTogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFNoaXBQb3N0YWxDb2RlOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgU2hpcFJlZ2lvbjogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFNoaXBwZWREYXRlOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgU2hpcHBlck5hbWU6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBVbml0UHJpY2U6IHN0cmluZztcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgbmFtZXNwYWNlIE5vdGVzIHtcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBFbnRpdHlJZDogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IEVudGl0eVR5cGU6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBJbnNlcnREYXRlOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgSW5zZXJ0VXNlcklkOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgTm90ZUlkOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgVGV4dDogc3RyaW5nO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBuYW1lc3BhY2UgT3JkZXJEZXRhaWxzIHtcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBEZXRhaWxJZDogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IERpc2NvdW50OiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgT3JkZXJDdXN0b21lcklkOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgT3JkZXJFbXBsb3llZUlkOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgT3JkZXJGcmVpZ2h0OiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgT3JkZXJJZDogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IE9yZGVyT3JkZXJEYXRlOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgT3JkZXJSZXF1aXJlZERhdGU6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBPcmRlclNoaXBBZGRyZXNzOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgT3JkZXJTaGlwQ2l0eTogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IE9yZGVyU2hpcENvdW50cnk6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBPcmRlclNoaXBOYW1lOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgT3JkZXJTaGlwUG9zdGFsQ29kZTogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IE9yZGVyU2hpcFJlZ2lvbjogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IE9yZGVyU2hpcFZpYTogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IE9yZGVyU2hpcHBlZERhdGU6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBQcm9kdWN0Q2F0ZWdvcnlJZDogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFByb2R1Y3REaXNjb250aW51ZWQ6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBQcm9kdWN0SWQ6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBQcm9kdWN0UHJvZHVjdEltYWdlOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgUHJvZHVjdFByb2R1Y3ROYW1lOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgUHJvZHVjdFF1YW50aXR5UGVyVW5pdDogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFByb2R1Y3RSZW9yZGVyTGV2ZWw6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBQcm9kdWN0U3VwcGxpZXJJZDogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFByb2R1Y3RVbml0UHJpY2U6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBQcm9kdWN0VW5pdHNJblN0b2NrOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgUHJvZHVjdFVuaXRzT25PcmRlcjogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFF1YW50aXR5OiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgVW5pdFByaWNlOiBzdHJpbmc7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIG5hbWVzcGFjZSBPcmRlcnMge1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IEN1c3RvbWVyQWRkcmVzczogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IEN1c3RvbWVyQ2l0eTogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IEN1c3RvbWVyQ29tcGFueU5hbWU6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBDdXN0b21lckNvbnRhY3ROYW1lOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgQ3VzdG9tZXJDb250YWN0VGl0bGU6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBDdXN0b21lckNvdW50cnk6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBDdXN0b21lckZheDogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IEN1c3RvbWVySWQ6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBDdXN0b21lcklkMTogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IEN1c3RvbWVyUGhvbmU6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBDdXN0b21lclBvc3RhbENvZGU6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBDdXN0b21lclJlZ2lvbjogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IEVtcGxveWVlQWRkcmVzczogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IEVtcGxveWVlQmlydGhEYXRlOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgRW1wbG95ZWVDaXR5OiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgRW1wbG95ZWVDb3VudHJ5OiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgRW1wbG95ZWVFeHRlbnNpb246IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBFbXBsb3llZUZpcnN0TmFtZTogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IEVtcGxveWVlSGlyZURhdGU6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBFbXBsb3llZUhvbWVQaG9uZTogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IEVtcGxveWVlSWQ6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBFbXBsb3llZUxhc3ROYW1lOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgRW1wbG95ZWVOb3Rlczogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IEVtcGxveWVlUGhvdG86IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBFbXBsb3llZVBob3RvUGF0aDogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IEVtcGxveWVlUG9zdGFsQ29kZTogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IEVtcGxveWVlUmVnaW9uOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgRW1wbG95ZWVSZXBvcnRzVG86IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBFbXBsb3llZVRpdGxlOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgRW1wbG95ZWVUaXRsZU9mQ291cnRlc3k6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBGcmVpZ2h0OiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgT3JkZXJEYXRlOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgT3JkZXJJZDogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFJlcXVpcmVkRGF0ZTogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFNoaXBBZGRyZXNzOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgU2hpcENpdHk6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBTaGlwQ291bnRyeTogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFNoaXBOYW1lOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgU2hpcFBvc3RhbENvZGU6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBTaGlwUmVnaW9uOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgU2hpcFZpYTogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFNoaXBWaWFDb21wYW55TmFtZTogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFNoaXBWaWFQaG9uZTogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFNoaXBwZWREYXRlOiBzdHJpbmc7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIG5hbWVzcGFjZSBQcm9kdWN0TGFuZyB7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgSWQ6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBMYW5ndWFnZUlkOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgUHJvZHVjdElkOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgUHJvZHVjdE5hbWU6IHN0cmluZztcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgbmFtZXNwYWNlIFByb2R1Y3RzIHtcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBDYXRlZ29yeUNhdGVnb3J5TmFtZTogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IENhdGVnb3J5RGVzY3JpcHRpb246IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBDYXRlZ29yeUlkOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgQ2F0ZWdvcnlQaWN0dXJlOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgRGlzY29udGludWVkOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgUHJvZHVjdElkOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgUHJvZHVjdEltYWdlOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgUHJvZHVjdE5hbWU6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBRdWFudGl0eVBlclVuaXQ6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBSZW9yZGVyTGV2ZWw6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBTdXBwbGllckFkZHJlc3M6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBTdXBwbGllckNpdHk6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBTdXBwbGllckNvbXBhbnlOYW1lOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgU3VwcGxpZXJDb250YWN0TmFtZTogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFN1cHBsaWVyQ29udGFjdFRpdGxlOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgU3VwcGxpZXJDb3VudHJ5OiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgU3VwcGxpZXJGYXg6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBTdXBwbGllckhvbWVQYWdlOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgU3VwcGxpZXJJZDogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFN1cHBsaWVyUGhvbmU6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBTdXBwbGllclBvc3RhbENvZGU6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBTdXBwbGllclJlZ2lvbjogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFVuaXRQcmljZTogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFVuaXRzSW5TdG9jazogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFVuaXRzT25PcmRlcjogc3RyaW5nO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBuYW1lc3BhY2UgUHJvZHVjdHNieUNhdGVnb3J5IHtcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBDYXRlZ29yeU5hbWU6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBEaXNjb250aW51ZWQ6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBQcm9kdWN0TmFtZTogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFF1YW50aXR5UGVyVW5pdDogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFVuaXRzSW5TdG9jazogc3RyaW5nO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBuYW1lc3BhY2UgUmVnaW9uIHtcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBSZWdpb25EZXNjcmlwdGlvbjogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFJlZ2lvbklkOiBzdHJpbmc7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIG5hbWVzcGFjZSBTaGlwcGVycyB7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgQ29tcGFueU5hbWU6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBQaG9uZTogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFNoaXBwZXJJZDogc3RyaW5nO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBuYW1lc3BhY2UgU3VwcGxpZXJzIHtcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBBZGRyZXNzOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgQ2l0eTogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IENvbXBhbnlOYW1lOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgQ29udGFjdE5hbWU6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBDb250YWN0VGl0bGU6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBDb3VudHJ5OiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgRmF4OiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgSG9tZVBhZ2U6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBQaG9uZTogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFBvc3RhbENvZGU6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBSZWdpb246IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBTdXBwbGllcklkOiBzdHJpbmc7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIG5hbWVzcGFjZSBUZXJyaXRvcmllcyB7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgSWQ6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBSZWdpb25JZDogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFJlZ2lvblJlZ2lvbkRlc2NyaXB0aW9uOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgVGVycml0b3J5RGVzY3JpcHRpb246IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBUZXJyaXRvcnlJZDogc3RyaW5nO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGRlY2xhcmUgbmFtZXNwYWNlIEZvcm1zIHtcclxuXHJcbiAgICAgICAgbmFtZXNwYWNlIE1lbWJlcnNoaXAge1xyXG5cclxuICAgICAgICAgICAgbmFtZXNwYWNlIENoYW5nZVBhc3N3b3JkIHtcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBGb3JtVGl0bGU6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBTdWJtaXRCdXR0b246IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBTdWNjZXNzOiBzdHJpbmc7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIG5hbWVzcGFjZSBGb3Jnb3RQYXNzd29yZCB7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgQmFja1RvTG9naW46IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBGb3JtSW5mbzogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IEZvcm1UaXRsZTogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFN1Ym1pdEJ1dHRvbjogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFN1Y2Nlc3M6IHN0cmluZztcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgbmFtZXNwYWNlIExvZ2luIHtcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBGYWNlYm9va0J1dHRvbjogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IEZvcmdvdFBhc3N3b3JkOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgRm9ybVRpdGxlOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgR29vZ2xlQnV0dG9uOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgT1I6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBSZW1lbWJlck1lOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgU2lnbkluQnV0dG9uOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgU2lnblVwQnV0dG9uOiBzdHJpbmc7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIG5hbWVzcGFjZSBSZXNldFBhc3N3b3JkIHtcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBCYWNrVG9Mb2dpbjogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IEVtYWlsU3ViamVjdDogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IEZvcm1UaXRsZTogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFN1Ym1pdEJ1dHRvbjogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFN1Y2Nlc3M6IHN0cmluZztcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgbmFtZXNwYWNlIFNpZ25VcCB7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgQWNjZXB0VGVybXM6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBBY3RpdmF0ZUVtYWlsU3ViamVjdDogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IEFjdGl2YXRpb25Db21wbGV0ZU1lc3NhZ2U6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBCYWNrVG9Mb2dpbjogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IENvbmZpcm1FbWFpbDogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IENvbmZpcm1QYXNzd29yZDogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IERpc3BsYXlOYW1lOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgRW1haWw6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBGb3JtSW5mbzogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IEZvcm1UaXRsZTogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFBhc3N3b3JkOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgU3VibWl0QnV0dG9uOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgU3VjY2Vzczogc3RyaW5nO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGRlY2xhcmUgbmFtZXNwYWNlIFNpdGUge1xyXG5cclxuICAgICAgICBuYW1lc3BhY2UgQWNjZXNzRGVuaWVkIHtcclxuICAgICAgICAgICAgZXhwb3J0IGNvbnN0IENsaWNrVG9DaGFuZ2VVc2VyOiBzdHJpbmc7XHJcbiAgICAgICAgICAgIGV4cG9ydCBjb25zdCBDbGlja1RvTG9naW46IHN0cmluZztcclxuICAgICAgICAgICAgZXhwb3J0IGNvbnN0IExhY2tQZXJtaXNzaW9uczogc3RyaW5nO1xyXG4gICAgICAgICAgICBleHBvcnQgY29uc3QgTm90TG9nZ2VkSW46IHN0cmluZztcclxuICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFBhZ2VUaXRsZTogc3RyaW5nO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbmFtZXNwYWNlIEJhc2ljUHJvZ3Jlc3NEaWFsb2cge1xyXG4gICAgICAgICAgICBleHBvcnQgY29uc3QgQ2FuY2VsVGl0bGU6IHN0cmluZztcclxuICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFBsZWFzZVdhaXQ6IHN0cmluZztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIG5hbWVzcGFjZSBCdWxrU2VydmljZUFjdGlvbiB7XHJcbiAgICAgICAgICAgIGV4cG9ydCBjb25zdCBBbGxIYWRFcnJvcnNGb3JtYXQ6IHN0cmluZztcclxuICAgICAgICAgICAgZXhwb3J0IGNvbnN0IEFsbFN1Y2Nlc3NGb3JtYXQ6IHN0cmluZztcclxuICAgICAgICAgICAgZXhwb3J0IGNvbnN0IENvbmZpcm1hdGlvbkZvcm1hdDogc3RyaW5nO1xyXG4gICAgICAgICAgICBleHBvcnQgY29uc3QgRXJyb3JDb3VudDogc3RyaW5nO1xyXG4gICAgICAgICAgICBleHBvcnQgY29uc3QgTm90aGluZ1RvUHJvY2Vzczogc3RyaW5nO1xyXG4gICAgICAgICAgICBleHBvcnQgY29uc3QgU29tZUhhZEVycm9yc0Zvcm1hdDogc3RyaW5nO1xyXG4gICAgICAgICAgICBleHBvcnQgY29uc3QgU3VjY2Vzc0NvdW50OiBzdHJpbmc7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBuYW1lc3BhY2UgRGFzaGJvYXJkIHtcclxuICAgICAgICAgICAgZXhwb3J0IGNvbnN0IENvbnRlbnREZXNjcmlwdGlvbjogc3RyaW5nO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbmFtZXNwYWNlIExheW91dCB7XHJcbiAgICAgICAgICAgIGV4cG9ydCBjb25zdCBGb290ZXJDb3B5cmlnaHQ6IHN0cmluZztcclxuICAgICAgICAgICAgZXhwb3J0IGNvbnN0IEZvb3RlckluZm86IHN0cmluZztcclxuICAgICAgICAgICAgZXhwb3J0IGNvbnN0IEZvb3RlclJpZ2h0czogc3RyaW5nO1xyXG4gICAgICAgICAgICBleHBvcnQgY29uc3QgR2VuZXJhbFNldHRpbmdzOiBzdHJpbmc7XHJcbiAgICAgICAgICAgIGV4cG9ydCBjb25zdCBMYW5ndWFnZTogc3RyaW5nO1xyXG4gICAgICAgICAgICBleHBvcnQgY29uc3QgVGhlbWU6IHN0cmluZztcclxuICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFRoZW1lQmxhY2s6IHN0cmluZztcclxuICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFRoZW1lQmxhY2tMaWdodDogc3RyaW5nO1xyXG4gICAgICAgICAgICBleHBvcnQgY29uc3QgVGhlbWVCbHVlOiBzdHJpbmc7XHJcbiAgICAgICAgICAgIGV4cG9ydCBjb25zdCBUaGVtZUJsdWVMaWdodDogc3RyaW5nO1xyXG4gICAgICAgICAgICBleHBvcnQgY29uc3QgVGhlbWVHcmVlbjogc3RyaW5nO1xyXG4gICAgICAgICAgICBleHBvcnQgY29uc3QgVGhlbWVHcmVlbkxpZ2h0OiBzdHJpbmc7XHJcbiAgICAgICAgICAgIGV4cG9ydCBjb25zdCBUaGVtZVB1cnBsZTogc3RyaW5nO1xyXG4gICAgICAgICAgICBleHBvcnQgY29uc3QgVGhlbWVQdXJwbGVMaWdodDogc3RyaW5nO1xyXG4gICAgICAgICAgICBleHBvcnQgY29uc3QgVGhlbWVSZWQ6IHN0cmluZztcclxuICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFRoZW1lUmVkTGlnaHQ6IHN0cmluZztcclxuICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFRoZW1lWWVsbG93OiBzdHJpbmc7XHJcbiAgICAgICAgICAgIGV4cG9ydCBjb25zdCBUaGVtZVllbGxvd0xpZ2h0OiBzdHJpbmc7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBuYW1lc3BhY2UgUm9sZVBlcm1pc3Npb25EaWFsb2cge1xyXG4gICAgICAgICAgICBleHBvcnQgY29uc3QgRGlhbG9nVGl0bGU6IHN0cmluZztcclxuICAgICAgICAgICAgZXhwb3J0IGNvbnN0IEVkaXRCdXR0b246IHN0cmluZztcclxuICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFNhdmVTdWNjZXNzOiBzdHJpbmc7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBuYW1lc3BhY2UgVXNlckRpYWxvZyB7XHJcbiAgICAgICAgICAgIGV4cG9ydCBjb25zdCBFZGl0UGVybWlzc2lvbnNCdXR0b246IHN0cmluZztcclxuICAgICAgICAgICAgZXhwb3J0IGNvbnN0IEVkaXRSb2xlc0J1dHRvbjogc3RyaW5nO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbmFtZXNwYWNlIFVzZXJQZXJtaXNzaW9uRGlhbG9nIHtcclxuICAgICAgICAgICAgZXhwb3J0IGNvbnN0IERpYWxvZ1RpdGxlOiBzdHJpbmc7XHJcbiAgICAgICAgICAgIGV4cG9ydCBjb25zdCBHcmFudDogc3RyaW5nO1xyXG4gICAgICAgICAgICBleHBvcnQgY29uc3QgUGVybWlzc2lvbjogc3RyaW5nO1xyXG4gICAgICAgICAgICBleHBvcnQgY29uc3QgUmV2b2tlOiBzdHJpbmc7XHJcbiAgICAgICAgICAgIGV4cG9ydCBjb25zdCBTYXZlU3VjY2Vzczogc3RyaW5nO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbmFtZXNwYWNlIFVzZXJSb2xlRGlhbG9nIHtcclxuICAgICAgICAgICAgZXhwb3J0IGNvbnN0IERpYWxvZ1RpdGxlOiBzdHJpbmc7XHJcbiAgICAgICAgICAgIGV4cG9ydCBjb25zdCBTYXZlU3VjY2Vzczogc3RyaW5nO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbmFtZXNwYWNlIFZhbGlkYXRpb25FcnJvciB7XHJcbiAgICAgICAgICAgIGV4cG9ydCBjb25zdCBUaXRsZTogc3RyaW5nO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBkZWNsYXJlIG5hbWVzcGFjZSBWYWxpZGF0aW9uIHtcclxuICAgICAgICBleHBvcnQgY29uc3QgQXV0aGVudGljYXRpb25FcnJvcjogc3RyaW5nO1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCBDYW50RmluZFVzZXJXaXRoRW1haWw6IHN0cmluZztcclxuICAgICAgICBleHBvcnQgY29uc3QgQ3VycmVudFBhc3N3b3JkTWlzbWF0Y2g6IHN0cmluZztcclxuICAgICAgICBleHBvcnQgY29uc3QgRGVsZXRlRm9yZWlnbktleUVycm9yOiBzdHJpbmc7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IEVtYWlsQ29uZmlybTogc3RyaW5nO1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCBFbWFpbEluVXNlOiBzdHJpbmc7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IEludmFsaWRBY3RpdmF0ZVRva2VuOiBzdHJpbmc7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IEludmFsaWRSZXNldFRva2VuOiBzdHJpbmc7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IE1pblJlcXVpcmVkUGFzc3dvcmRMZW5ndGg6IHN0cmluZztcclxuICAgICAgICBleHBvcnQgY29uc3QgU2F2ZVByaW1hcnlLZXlFcnJvcjogc3RyaW5nO1xyXG4gICAgfVxyXG5cclxuICAgIFlheGllWydUZXh0cyddID0gUS5wcm94eVRleHRzKFRleHRzLCAnJywge0RiOntBZG1pbmlzdHJhdGlvbjp7TGFuZ3VhZ2U6e0lkOjEsTGFuZ3VhZ2VJZDoxLExhbmd1YWdlTmFtZToxfSxSb2xlOntSb2xlSWQ6MSxSb2xlTmFtZToxfSxSb2xlUGVybWlzc2lvbjp7UGVybWlzc2lvbktleToxLFJvbGVJZDoxLFJvbGVQZXJtaXNzaW9uSWQ6MSxSb2xlUm9sZU5hbWU6MX0sVHJhbnNsYXRpb246e0N1c3RvbVRleHQ6MSxFbnRpdHlQbHVyYWw6MSxLZXk6MSxPdmVycmlkZUNvbmZpcm1hdGlvbjoxLFNhdmVDaGFuZ2VzQnV0dG9uOjEsU291cmNlTGFuZ3VhZ2U6MSxTb3VyY2VUZXh0OjEsVGFyZ2V0TGFuZ3VhZ2U6MSxUYXJnZXRUZXh0OjF9LFVzZXI6e0Rpc3BsYXlOYW1lOjEsRW1haWw6MSxJbnNlcnREYXRlOjEsSW5zZXJ0VXNlcklkOjEsSXNBY3RpdmU6MSxMYXN0RGlyZWN0b3J5VXBkYXRlOjEsUGFzc3dvcmQ6MSxQYXNzd29yZENvbmZpcm06MSxQYXNzd29yZEhhc2g6MSxQYXNzd29yZFNhbHQ6MSxTb3VyY2U6MSxVcGRhdGVEYXRlOjEsVXBkYXRlVXNlcklkOjEsVXNlcklkOjEsVXNlckltYWdlOjEsVXNlcm5hbWU6MX0sVXNlclBlcm1pc3Npb246e0dyYW50ZWQ6MSxQZXJtaXNzaW9uS2V5OjEsVXNlcjoxLFVzZXJJZDoxLFVzZXJQZXJtaXNzaW9uSWQ6MSxVc2VybmFtZToxfSxVc2VyUm9sZTp7Um9sZUlkOjEsVXNlcjoxLFVzZXJJZDoxLFVzZXJSb2xlSWQ6MSxVc2VybmFtZToxfX0sQ29tbW9uOntJbXBvcnRTb3VyY2U6e0Rlc2NyaXB0aW9uOjEsSW1wb3J0U291cmNlSWQ6MX0sSW1wb3J0VHlwZTp7RGVzY3JpcHRpb246MSxJbXBvcnRUeXBlSWQ6MX0sSW1wb3J0V2l6YXJkOntBcmNoaXZlRm9sZGVyOjEsQ29sdW1uRXJyb3JDb3VudDoxLERlc2NyaXB0aW9uOjEsRW5kQXRSb3c6MSxFcnJvckxpc3Q6MSxGaWVsZERlbGltaXRlcklkOjEsRmllbGRNYXRjaERpc3BsYXk6MSxGaWVsZE1hdGNoTGlzdDoxLEltcG9ydEZpbGVMaXN0OjEsSW1wb3J0U291cmNlSWQ6MSxJbXBvcnRUeXBlRGVzY3JpcHRpb246MSxJbXBvcnRUeXBlSWQ6MSxJbXBvcnRXaXphcmRJZDoxLEtleUNvbHVtbjoxLEtleVR5cGU6MSxMYXN0UnVuRGF0ZToxLE1hdGNoT25GaWVsZE5hbWVzOjEsTWF0Y2hPbkxhYmVsczoxLE5vdGVMaXN0OjEsUm93RXJyb3JDb3VudDoxLFNvdXJjZURpcmVjdG9yeToxLFN0YXJ0QXRSb3c6MSxUYXJnZXREYXRhYmFzZToxfSxOb3RlOntFbnRpdHlJZDoxLEVudGl0eVR5cGU6MSxJbnNlcnREYXRlOjEsSW5zZXJ0VXNlckRpc3BsYXlOYW1lOjEsSW5zZXJ0VXNlcklkOjEsTm90ZUlkOjEsTm90ZVRleHQ6MX0sVXNlclByZWZlcmVuY2U6e05hbWU6MSxQcmVmZXJlbmNlVHlwZToxLFVzZXJJZDoxLFVzZXJQcmVmZXJlbmNlSWQ6MSxWYWx1ZToxfX0sTm9ydGhXaW5kOntDYXRlZ29yaWVzOntDYXRlZ29yeUlkOjEsQ2F0ZWdvcnlOYW1lOjEsRGVzY3JpcHRpb246MSxQaWN0dXJlOjF9LENhdGVnb3J5TGFuZzp7Q2F0ZWdvcnlJZDoxLENhdGVnb3J5TmFtZToxLERlc2NyaXB0aW9uOjEsSWQ6MSxMYW5ndWFnZUlkOjF9LEN1c3RvbWVyRGV0YWlsczp7RW1haWw6MSxJZDoxLExhc3RDb250YWN0RGF0ZToxLExhc3RDb250YWN0ZWRCeToxLExhc3RDb250YWN0ZWRCeUFkZHJlc3M6MSxMYXN0Q29udGFjdGVkQnlCaXJ0aERhdGU6MSxMYXN0Q29udGFjdGVkQnlDaXR5OjEsTGFzdENvbnRhY3RlZEJ5Q291bnRyeToxLExhc3RDb250YWN0ZWRCeUV4dGVuc2lvbjoxLExhc3RDb250YWN0ZWRCeUZpcnN0TmFtZToxLExhc3RDb250YWN0ZWRCeUhpcmVEYXRlOjEsTGFzdENvbnRhY3RlZEJ5SG9tZVBob25lOjEsTGFzdENvbnRhY3RlZEJ5TGFzdE5hbWU6MSxMYXN0Q29udGFjdGVkQnlOb3RlczoxLExhc3RDb250YWN0ZWRCeVBob3RvOjEsTGFzdENvbnRhY3RlZEJ5UGhvdG9QYXRoOjEsTGFzdENvbnRhY3RlZEJ5UG9zdGFsQ29kZToxLExhc3RDb250YWN0ZWRCeVJlZ2lvbjoxLExhc3RDb250YWN0ZWRCeVJlcG9ydHNUbzoxLExhc3RDb250YWN0ZWRCeVRpdGxlOjEsTGFzdENvbnRhY3RlZEJ5VGl0bGVPZkNvdXJ0ZXN5OjEsU2VuZEJ1bGxldGluOjF9LEN1c3RvbWVyczp7QWRkcmVzczoxLENpdHk6MSxDb21wYW55TmFtZToxLENvbnRhY3ROYW1lOjEsQ29udGFjdFRpdGxlOjEsQ291bnRyeToxLEN1c3RvbWVySWQ6MSxGYXg6MSxJZDoxLFBob25lOjEsUG9zdGFsQ29kZToxLFJlZ2lvbjoxfSxFbXBsb3llZVRlcnJpdG9yaWVzOntFbXBsb3llZUFkZHJlc3M6MSxFbXBsb3llZUJpcnRoRGF0ZToxLEVtcGxveWVlQ2l0eToxLEVtcGxveWVlQ291bnRyeToxLEVtcGxveWVlRXh0ZW5zaW9uOjEsRW1wbG95ZWVGaXJzdE5hbWU6MSxFbXBsb3llZUhpcmVEYXRlOjEsRW1wbG95ZWVIb21lUGhvbmU6MSxFbXBsb3llZUlkOjEsRW1wbG95ZWVMYXN0TmFtZToxLEVtcGxveWVlTm90ZXM6MSxFbXBsb3llZVBob3RvOjEsRW1wbG95ZWVQaG90b1BhdGg6MSxFbXBsb3llZVBvc3RhbENvZGU6MSxFbXBsb3llZVJlZ2lvbjoxLEVtcGxveWVlUmVwb3J0c1RvOjEsRW1wbG95ZWVUaXRsZToxLEVtcGxveWVlVGl0bGVPZkNvdXJ0ZXN5OjEsVGVycml0b3J5SWQ6MSxUZXJyaXRvcnlJZDE6MSxUZXJyaXRvcnlSZWdpb25JZDoxLFRlcnJpdG9yeVRlcnJpdG9yeURlc2NyaXB0aW9uOjF9LEVtcGxveWVlczp7QWRkcmVzczoxLEJpcnRoRGF0ZToxLENpdHk6MSxDb3VudHJ5OjEsRW1wbG95ZWVJZDoxLEV4dGVuc2lvbjoxLEZpcnN0TmFtZToxLEhpcmVEYXRlOjEsSG9tZVBob25lOjEsTGFzdE5hbWU6MSxOb3RlczoxLFBob3RvOjEsUGhvdG9QYXRoOjEsUG9zdGFsQ29kZToxLFJlZ2lvbjoxLFJlcG9ydHNUbzoxLFJlcG9ydHNUbzE6MSxSZXBvcnRzVG9BZGRyZXNzOjEsUmVwb3J0c1RvQmlydGhEYXRlOjEsUmVwb3J0c1RvQ2l0eToxLFJlcG9ydHNUb0NvdW50cnk6MSxSZXBvcnRzVG9FeHRlbnNpb246MSxSZXBvcnRzVG9GaXJzdE5hbWU6MSxSZXBvcnRzVG9IaXJlRGF0ZToxLFJlcG9ydHNUb0hvbWVQaG9uZToxLFJlcG9ydHNUb0xhc3ROYW1lOjEsUmVwb3J0c1RvTm90ZXM6MSxSZXBvcnRzVG9QaG90bzoxLFJlcG9ydHNUb1Bob3RvUGF0aDoxLFJlcG9ydHNUb1Bvc3RhbENvZGU6MSxSZXBvcnRzVG9SZWdpb246MSxSZXBvcnRzVG9UaXRsZToxLFJlcG9ydHNUb1RpdGxlT2ZDb3VydGVzeToxLFRpdGxlOjEsVGl0bGVPZkNvdXJ0ZXN5OjF9LEludm9pY2VzOntBZGRyZXNzOjEsQ2l0eToxLENvdW50cnk6MSxDdXN0b21lcklkOjEsQ3VzdG9tZXJOYW1lOjEsRGlzY291bnQ6MSxFeHRlbmRlZFByaWNlOjEsRnJlaWdodDoxLE9yZGVyRGF0ZToxLE9yZGVySWQ6MSxQb3N0YWxDb2RlOjEsUHJvZHVjdElkOjEsUHJvZHVjdE5hbWU6MSxRdWFudGl0eToxLFJlZ2lvbjoxLFJlcXVpcmVkRGF0ZToxLFNhbGVzcGVyc29uOjEsU2hpcEFkZHJlc3M6MSxTaGlwQ2l0eToxLFNoaXBDb3VudHJ5OjEsU2hpcE5hbWU6MSxTaGlwUG9zdGFsQ29kZToxLFNoaXBSZWdpb246MSxTaGlwcGVkRGF0ZToxLFNoaXBwZXJOYW1lOjEsVW5pdFByaWNlOjF9LE5vdGVzOntFbnRpdHlJZDoxLEVudGl0eVR5cGU6MSxJbnNlcnREYXRlOjEsSW5zZXJ0VXNlcklkOjEsTm90ZUlkOjEsVGV4dDoxfSxPcmRlckRldGFpbHM6e0RldGFpbElkOjEsRGlzY291bnQ6MSxPcmRlckN1c3RvbWVySWQ6MSxPcmRlckVtcGxveWVlSWQ6MSxPcmRlckZyZWlnaHQ6MSxPcmRlcklkOjEsT3JkZXJPcmRlckRhdGU6MSxPcmRlclJlcXVpcmVkRGF0ZToxLE9yZGVyU2hpcEFkZHJlc3M6MSxPcmRlclNoaXBDaXR5OjEsT3JkZXJTaGlwQ291bnRyeToxLE9yZGVyU2hpcE5hbWU6MSxPcmRlclNoaXBQb3N0YWxDb2RlOjEsT3JkZXJTaGlwUmVnaW9uOjEsT3JkZXJTaGlwVmlhOjEsT3JkZXJTaGlwcGVkRGF0ZToxLFByb2R1Y3RDYXRlZ29yeUlkOjEsUHJvZHVjdERpc2NvbnRpbnVlZDoxLFByb2R1Y3RJZDoxLFByb2R1Y3RQcm9kdWN0SW1hZ2U6MSxQcm9kdWN0UHJvZHVjdE5hbWU6MSxQcm9kdWN0UXVhbnRpdHlQZXJVbml0OjEsUHJvZHVjdFJlb3JkZXJMZXZlbDoxLFByb2R1Y3RTdXBwbGllcklkOjEsUHJvZHVjdFVuaXRQcmljZToxLFByb2R1Y3RVbml0c0luU3RvY2s6MSxQcm9kdWN0VW5pdHNPbk9yZGVyOjEsUXVhbnRpdHk6MSxVbml0UHJpY2U6MX0sT3JkZXJzOntDdXN0b21lckFkZHJlc3M6MSxDdXN0b21lckNpdHk6MSxDdXN0b21lckNvbXBhbnlOYW1lOjEsQ3VzdG9tZXJDb250YWN0TmFtZToxLEN1c3RvbWVyQ29udGFjdFRpdGxlOjEsQ3VzdG9tZXJDb3VudHJ5OjEsQ3VzdG9tZXJGYXg6MSxDdXN0b21lcklkOjEsQ3VzdG9tZXJJZDE6MSxDdXN0b21lclBob25lOjEsQ3VzdG9tZXJQb3N0YWxDb2RlOjEsQ3VzdG9tZXJSZWdpb246MSxFbXBsb3llZUFkZHJlc3M6MSxFbXBsb3llZUJpcnRoRGF0ZToxLEVtcGxveWVlQ2l0eToxLEVtcGxveWVlQ291bnRyeToxLEVtcGxveWVlRXh0ZW5zaW9uOjEsRW1wbG95ZWVGaXJzdE5hbWU6MSxFbXBsb3llZUhpcmVEYXRlOjEsRW1wbG95ZWVIb21lUGhvbmU6MSxFbXBsb3llZUlkOjEsRW1wbG95ZWVMYXN0TmFtZToxLEVtcGxveWVlTm90ZXM6MSxFbXBsb3llZVBob3RvOjEsRW1wbG95ZWVQaG90b1BhdGg6MSxFbXBsb3llZVBvc3RhbENvZGU6MSxFbXBsb3llZVJlZ2lvbjoxLEVtcGxveWVlUmVwb3J0c1RvOjEsRW1wbG95ZWVUaXRsZToxLEVtcGxveWVlVGl0bGVPZkNvdXJ0ZXN5OjEsRnJlaWdodDoxLE9yZGVyRGF0ZToxLE9yZGVySWQ6MSxSZXF1aXJlZERhdGU6MSxTaGlwQWRkcmVzczoxLFNoaXBDaXR5OjEsU2hpcENvdW50cnk6MSxTaGlwTmFtZToxLFNoaXBQb3N0YWxDb2RlOjEsU2hpcFJlZ2lvbjoxLFNoaXBWaWE6MSxTaGlwVmlhQ29tcGFueU5hbWU6MSxTaGlwVmlhUGhvbmU6MSxTaGlwcGVkRGF0ZToxfSxQcm9kdWN0TGFuZzp7SWQ6MSxMYW5ndWFnZUlkOjEsUHJvZHVjdElkOjEsUHJvZHVjdE5hbWU6MX0sUHJvZHVjdHM6e0NhdGVnb3J5Q2F0ZWdvcnlOYW1lOjEsQ2F0ZWdvcnlEZXNjcmlwdGlvbjoxLENhdGVnb3J5SWQ6MSxDYXRlZ29yeVBpY3R1cmU6MSxEaXNjb250aW51ZWQ6MSxQcm9kdWN0SWQ6MSxQcm9kdWN0SW1hZ2U6MSxQcm9kdWN0TmFtZToxLFF1YW50aXR5UGVyVW5pdDoxLFJlb3JkZXJMZXZlbDoxLFN1cHBsaWVyQWRkcmVzczoxLFN1cHBsaWVyQ2l0eToxLFN1cHBsaWVyQ29tcGFueU5hbWU6MSxTdXBwbGllckNvbnRhY3ROYW1lOjEsU3VwcGxpZXJDb250YWN0VGl0bGU6MSxTdXBwbGllckNvdW50cnk6MSxTdXBwbGllckZheDoxLFN1cHBsaWVySG9tZVBhZ2U6MSxTdXBwbGllcklkOjEsU3VwcGxpZXJQaG9uZToxLFN1cHBsaWVyUG9zdGFsQ29kZToxLFN1cHBsaWVyUmVnaW9uOjEsVW5pdFByaWNlOjEsVW5pdHNJblN0b2NrOjEsVW5pdHNPbk9yZGVyOjF9LFByb2R1Y3RzYnlDYXRlZ29yeTp7Q2F0ZWdvcnlOYW1lOjEsRGlzY29udGludWVkOjEsUHJvZHVjdE5hbWU6MSxRdWFudGl0eVBlclVuaXQ6MSxVbml0c0luU3RvY2s6MX0sUmVnaW9uOntSZWdpb25EZXNjcmlwdGlvbjoxLFJlZ2lvbklkOjF9LFNoaXBwZXJzOntDb21wYW55TmFtZToxLFBob25lOjEsU2hpcHBlcklkOjF9LFN1cHBsaWVyczp7QWRkcmVzczoxLENpdHk6MSxDb21wYW55TmFtZToxLENvbnRhY3ROYW1lOjEsQ29udGFjdFRpdGxlOjEsQ291bnRyeToxLEZheDoxLEhvbWVQYWdlOjEsUGhvbmU6MSxQb3N0YWxDb2RlOjEsUmVnaW9uOjEsU3VwcGxpZXJJZDoxfSxUZXJyaXRvcmllczp7SWQ6MSxSZWdpb25JZDoxLFJlZ2lvblJlZ2lvbkRlc2NyaXB0aW9uOjEsVGVycml0b3J5RGVzY3JpcHRpb246MSxUZXJyaXRvcnlJZDoxfX19LEZvcm1zOntNZW1iZXJzaGlwOntDaGFuZ2VQYXNzd29yZDp7Rm9ybVRpdGxlOjEsU3VibWl0QnV0dG9uOjEsU3VjY2VzczoxfSxGb3Jnb3RQYXNzd29yZDp7QmFja1RvTG9naW46MSxGb3JtSW5mbzoxLEZvcm1UaXRsZToxLFN1Ym1pdEJ1dHRvbjoxLFN1Y2Nlc3M6MX0sTG9naW46e0ZhY2Vib29rQnV0dG9uOjEsRm9yZ290UGFzc3dvcmQ6MSxGb3JtVGl0bGU6MSxHb29nbGVCdXR0b246MSxPUjoxLFJlbWVtYmVyTWU6MSxTaWduSW5CdXR0b246MSxTaWduVXBCdXR0b246MX0sUmVzZXRQYXNzd29yZDp7QmFja1RvTG9naW46MSxFbWFpbFN1YmplY3Q6MSxGb3JtVGl0bGU6MSxTdWJtaXRCdXR0b246MSxTdWNjZXNzOjF9LFNpZ25VcDp7QWNjZXB0VGVybXM6MSxBY3RpdmF0ZUVtYWlsU3ViamVjdDoxLEFjdGl2YXRpb25Db21wbGV0ZU1lc3NhZ2U6MSxCYWNrVG9Mb2dpbjoxLENvbmZpcm1FbWFpbDoxLENvbmZpcm1QYXNzd29yZDoxLERpc3BsYXlOYW1lOjEsRW1haWw6MSxGb3JtSW5mbzoxLEZvcm1UaXRsZToxLFBhc3N3b3JkOjEsU3VibWl0QnV0dG9uOjEsU3VjY2VzczoxfX19LFNpdGU6e0FjY2Vzc0RlbmllZDp7Q2xpY2tUb0NoYW5nZVVzZXI6MSxDbGlja1RvTG9naW46MSxMYWNrUGVybWlzc2lvbnM6MSxOb3RMb2dnZWRJbjoxLFBhZ2VUaXRsZToxfSxCYXNpY1Byb2dyZXNzRGlhbG9nOntDYW5jZWxUaXRsZToxLFBsZWFzZVdhaXQ6MX0sQnVsa1NlcnZpY2VBY3Rpb246e0FsbEhhZEVycm9yc0Zvcm1hdDoxLEFsbFN1Y2Nlc3NGb3JtYXQ6MSxDb25maXJtYXRpb25Gb3JtYXQ6MSxFcnJvckNvdW50OjEsTm90aGluZ1RvUHJvY2VzczoxLFNvbWVIYWRFcnJvcnNGb3JtYXQ6MSxTdWNjZXNzQ291bnQ6MX0sRGFzaGJvYXJkOntDb250ZW50RGVzY3JpcHRpb246MX0sTGF5b3V0OntGb290ZXJDb3B5cmlnaHQ6MSxGb290ZXJJbmZvOjEsRm9vdGVyUmlnaHRzOjEsR2VuZXJhbFNldHRpbmdzOjEsTGFuZ3VhZ2U6MSxUaGVtZToxLFRoZW1lQmxhY2s6MSxUaGVtZUJsYWNrTGlnaHQ6MSxUaGVtZUJsdWU6MSxUaGVtZUJsdWVMaWdodDoxLFRoZW1lR3JlZW46MSxUaGVtZUdyZWVuTGlnaHQ6MSxUaGVtZVB1cnBsZToxLFRoZW1lUHVycGxlTGlnaHQ6MSxUaGVtZVJlZDoxLFRoZW1lUmVkTGlnaHQ6MSxUaGVtZVllbGxvdzoxLFRoZW1lWWVsbG93TGlnaHQ6MX0sUm9sZVBlcm1pc3Npb25EaWFsb2c6e0RpYWxvZ1RpdGxlOjEsRWRpdEJ1dHRvbjoxLFNhdmVTdWNjZXNzOjF9LFVzZXJEaWFsb2c6e0VkaXRQZXJtaXNzaW9uc0J1dHRvbjoxLEVkaXRSb2xlc0J1dHRvbjoxfSxVc2VyUGVybWlzc2lvbkRpYWxvZzp7RGlhbG9nVGl0bGU6MSxHcmFudDoxLFBlcm1pc3Npb246MSxSZXZva2U6MSxTYXZlU3VjY2VzczoxfSxVc2VyUm9sZURpYWxvZzp7RGlhbG9nVGl0bGU6MSxTYXZlU3VjY2VzczoxfSxWYWxpZGF0aW9uRXJyb3I6e1RpdGxlOjF9fSxWYWxpZGF0aW9uOntBdXRoZW50aWNhdGlvbkVycm9yOjEsQ2FudEZpbmRVc2VyV2l0aEVtYWlsOjEsQ3VycmVudFBhc3N3b3JkTWlzbWF0Y2g6MSxEZWxldGVGb3JlaWduS2V5RXJyb3I6MSxFbWFpbENvbmZpcm06MSxFbWFpbEluVXNlOjEsSW52YWxpZEFjdGl2YXRlVG9rZW46MSxJbnZhbGlkUmVzZXRUb2tlbjoxLE1pblJlcXVpcmVkUGFzc3dvcmRMZW5ndGg6MSxTYXZlUHJpbWFyeUtleUVycm9yOjF9fSk7XHJcbn1cclxuIiwibmFtZXNwYWNlIFlheGllLkFkbWluaXN0cmF0aW9uIHtcclxuXHJcbiAgICBAU2VyZW5pdHkuRGVjb3JhdG9ycy5yZWdpc3RlckNsYXNzKClcclxuICAgIGV4cG9ydCBjbGFzcyBMYW5ndWFnZURpYWxvZyBleHRlbmRzIFNlcmVuaXR5LkVudGl0eURpYWxvZzxMYW5ndWFnZVJvdywgYW55PiB7XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldEZvcm1LZXkoKSB7IHJldHVybiBMYW5ndWFnZUZvcm0uZm9ybUtleTsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRJZFByb3BlcnR5KCkgeyByZXR1cm4gTGFuZ3VhZ2VSb3cuaWRQcm9wZXJ0eTsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRMb2NhbFRleHRQcmVmaXgoKSB7IHJldHVybiBMYW5ndWFnZVJvdy5sb2NhbFRleHRQcmVmaXg7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0TmFtZVByb3BlcnR5KCkgeyByZXR1cm4gTGFuZ3VhZ2VSb3cubmFtZVByb3BlcnR5OyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldFNlcnZpY2UoKSB7IHJldHVybiBMYW5ndWFnZVNlcnZpY2UuYmFzZVVybDsgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgZm9ybSA9IG5ldyBMYW5ndWFnZUZvcm0odGhpcy5pZFByZWZpeCk7XHJcbiAgICB9XHJcbn0iLCJuYW1lc3BhY2UgWWF4aWUuQWRtaW5pc3RyYXRpb24ge1xyXG5cclxuICAgIEBTZXJlbml0eS5EZWNvcmF0b3JzLnJlZ2lzdGVyQ2xhc3MoKVxyXG4gICAgZXhwb3J0IGNsYXNzIExhbmd1YWdlR3JpZCBleHRlbmRzIFNlcmVuaXR5LkVudGl0eUdyaWQ8TGFuZ3VhZ2VSb3csIGFueT4ge1xyXG4gICAgICAgIHByb3RlY3RlZCBnZXRDb2x1bW5zS2V5KCkgeyByZXR1cm4gXCJBZG1pbmlzdHJhdGlvbi5MYW5ndWFnZVwiOyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldERpYWxvZ1R5cGUoKSB7IHJldHVybiBMYW5ndWFnZURpYWxvZzsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRJZFByb3BlcnR5KCkgeyByZXR1cm4gTGFuZ3VhZ2VSb3cuaWRQcm9wZXJ0eTsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRMb2NhbFRleHRQcmVmaXgoKSB7IHJldHVybiBMYW5ndWFnZVJvdy5sb2NhbFRleHRQcmVmaXg7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0U2VydmljZSgpIHsgcmV0dXJuIExhbmd1YWdlU2VydmljZS5iYXNlVXJsOyB9XHJcblxyXG4gICAgICAgIGNvbnN0cnVjdG9yKGNvbnRhaW5lcjogSlF1ZXJ5KSB7XHJcbiAgICAgICAgICAgIHN1cGVyKGNvbnRhaW5lcik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0RGVmYXVsdFNvcnRCeSgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIFtMYW5ndWFnZVJvdy5GaWVsZHMuTGFuZ3VhZ2VOYW1lXTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCJuYW1lc3BhY2UgWWF4aWUuQWRtaW5pc3RyYXRpb24ge1xyXG5cclxuICAgIEBTZXJlbml0eS5EZWNvcmF0b3JzLnJlZ2lzdGVyQ2xhc3MoKVxyXG4gICAgZXhwb3J0IGNsYXNzIFJvbGVEaWFsb2cgZXh0ZW5kcyBTZXJlbml0eS5FbnRpdHlEaWFsb2c8Um9sZVJvdywgYW55PiB7XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldEZvcm1LZXkoKSB7IHJldHVybiBSb2xlRm9ybS5mb3JtS2V5OyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldElkUHJvcGVydHkoKSB7IHJldHVybiBSb2xlUm93LmlkUHJvcGVydHk7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0TG9jYWxUZXh0UHJlZml4KCkgeyByZXR1cm4gUm9sZVJvdy5sb2NhbFRleHRQcmVmaXg7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0TmFtZVByb3BlcnR5KCkgeyByZXR1cm4gUm9sZVJvdy5uYW1lUHJvcGVydHk7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0U2VydmljZSgpIHsgcmV0dXJuIFJvbGVTZXJ2aWNlLmJhc2VVcmw7IH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIGZvcm0gPSBuZXcgUm9sZUZvcm0odGhpcy5pZFByZWZpeCk7XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRUb29sYmFyQnV0dG9ucygpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBsZXQgYnV0dG9ucyA9IHN1cGVyLmdldFRvb2xiYXJCdXR0b25zKCk7XHJcblxyXG4gICAgICAgICAgICBidXR0b25zLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgdGl0bGU6IFEudGV4dCgnU2l0ZS5Sb2xlUGVybWlzc2lvbkRpYWxvZy5FZGl0QnV0dG9uJyksXHJcbiAgICAgICAgICAgICAgICBjc3NDbGFzczogJ2VkaXQtcGVybWlzc2lvbnMtYnV0dG9uJyxcclxuICAgICAgICAgICAgICAgIGljb246ICdmYS1sb2NrIHRleHQtZ3JlZW4nLFxyXG4gICAgICAgICAgICAgICAgb25DbGljazogKCkgPT5cclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBuZXcgUm9sZVBlcm1pc3Npb25EaWFsb2coe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByb2xlSUQ6IHRoaXMuZW50aXR5LlJvbGVJZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6IHRoaXMuZW50aXR5LlJvbGVOYW1lXHJcbiAgICAgICAgICAgICAgICAgICAgfSkuZGlhbG9nT3BlbigpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiBidXR0b25zO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIHVwZGF0ZUludGVyZmFjZSgpIHtcclxuICAgICAgICAgICAgc3VwZXIudXBkYXRlSW50ZXJmYWNlKCk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLnRvb2xiYXIuZmluZEJ1dHRvbihcImVkaXQtcGVybWlzc2lvbnMtYnV0dG9uXCIpLnRvZ2dsZUNsYXNzKFwiZGlzYWJsZWRcIiwgdGhpcy5pc05ld09yRGVsZXRlZCgpKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCJuYW1lc3BhY2UgWWF4aWUuQWRtaW5pc3RyYXRpb24ge1xyXG5cclxuICAgIEBTZXJlbml0eS5EZWNvcmF0b3JzLnJlZ2lzdGVyQ2xhc3MoKVxyXG4gICAgZXhwb3J0IGNsYXNzIFJvbGVHcmlkIGV4dGVuZHMgU2VyZW5pdHkuRW50aXR5R3JpZDxSb2xlUm93LCBhbnk+IHtcclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0Q29sdW1uc0tleSgpIHsgcmV0dXJuIFwiQWRtaW5pc3RyYXRpb24uUm9sZVwiOyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldERpYWxvZ1R5cGUoKSB7IHJldHVybiBSb2xlRGlhbG9nOyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldElkUHJvcGVydHkoKSB7IHJldHVybiBSb2xlUm93LmlkUHJvcGVydHk7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0TG9jYWxUZXh0UHJlZml4KCkgeyByZXR1cm4gUm9sZVJvdy5sb2NhbFRleHRQcmVmaXg7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0U2VydmljZSgpIHsgcmV0dXJuIFJvbGVTZXJ2aWNlLmJhc2VVcmw7IH1cclxuXHJcbiAgICAgICAgY29uc3RydWN0b3IoY29udGFpbmVyOiBKUXVlcnkpIHtcclxuICAgICAgICAgICAgc3VwZXIoY29udGFpbmVyKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCBnZXREZWZhdWx0U29ydEJ5KCkge1xyXG4gICAgICAgICAgICByZXR1cm4gW1JvbGVSb3cuRmllbGRzLlJvbGVOYW1lXTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCJuYW1lc3BhY2UgWWF4aWUuQWRtaW5pc3RyYXRpb24ge1xyXG5cclxuICAgIEBTZXJlbml0eS5EZWNvcmF0b3JzLnJlZ2lzdGVyQ2xhc3MoKVxyXG4gICAgZXhwb3J0IGNsYXNzIFJvbGVQZXJtaXNzaW9uRGlhbG9nIGV4dGVuZHMgU2VyZW5pdHkuVGVtcGxhdGVkRGlhbG9nPFJvbGVQZXJtaXNzaW9uRGlhbG9nT3B0aW9ucz4ge1xyXG5cclxuICAgICAgICBwcml2YXRlIHBlcm1pc3Npb25zOiBQZXJtaXNzaW9uQ2hlY2tFZGl0b3I7XHJcblxyXG4gICAgICAgIGNvbnN0cnVjdG9yKG9wdDogUm9sZVBlcm1pc3Npb25EaWFsb2dPcHRpb25zKSB7XHJcbiAgICAgICAgICAgIHN1cGVyKG9wdCk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLnBlcm1pc3Npb25zID0gbmV3IFBlcm1pc3Npb25DaGVja0VkaXRvcih0aGlzLmJ5SWQoJ1Blcm1pc3Npb25zJyksIHtcclxuICAgICAgICAgICAgICAgIHNob3dSZXZva2U6IGZhbHNlXHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgUm9sZVBlcm1pc3Npb25TZXJ2aWNlLkxpc3Qoe1xyXG4gICAgICAgICAgICAgICAgUm9sZUlEOiB0aGlzLm9wdGlvbnMucm9sZUlELFxyXG4gICAgICAgICAgICAgICAgTW9kdWxlOiBudWxsLFxyXG4gICAgICAgICAgICAgICAgU3VibW9kdWxlOiBudWxsXHJcbiAgICAgICAgICAgIH0sIHJlc3BvbnNlID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMucGVybWlzc2lvbnMudmFsdWUgPSByZXNwb25zZS5FbnRpdGllcy5tYXAoeCA9PiAoPFVzZXJQZXJtaXNzaW9uUm93PnsgUGVybWlzc2lvbktleTogeCB9KSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5wZXJtaXNzaW9ucy5pbXBsaWNpdFBlcm1pc3Npb25zID0gUS5nZXRSZW1vdGVEYXRhKCdBZG1pbmlzdHJhdGlvbi5JbXBsaWNpdFBlcm1pc3Npb25zJyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0RGlhbG9nT3B0aW9ucygpOiBKUXVlcnlVSS5EaWFsb2dPcHRpb25zIHtcclxuICAgICAgICAgICAgbGV0IG9wdCA9IHN1cGVyLmdldERpYWxvZ09wdGlvbnMoKTtcclxuXHJcbiAgICAgICAgICAgIG9wdC5idXR0b25zID0gW1xyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHQ6IFEudGV4dCgnRGlhbG9ncy5Pa0J1dHRvbicpLFxyXG4gICAgICAgICAgICAgICAgICAgIGNsaWNrOiBlID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgUm9sZVBlcm1pc3Npb25TZXJ2aWNlLlVwZGF0ZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBSb2xlSUQ6IHRoaXMub3B0aW9ucy5yb2xlSUQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBQZXJtaXNzaW9uczogdGhpcy5wZXJtaXNzaW9ucy52YWx1ZS5tYXAoeCA9PiB4LlBlcm1pc3Npb25LZXkpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgTW9kdWxlOiBudWxsLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgU3VibW9kdWxlOiBudWxsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sIHJlc3BvbnNlID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZGlhbG9nQ2xvc2UoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5zZXRUaW1lb3V0KCgpID0+IFEubm90aWZ5U3VjY2VzcyhRLnRleHQoJ1NpdGUuUm9sZVBlcm1pc3Npb25EaWFsb2cuU2F2ZVN1Y2Nlc3MnKSksIDApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dDogUS50ZXh0KCdEaWFsb2dzLkNhbmNlbEJ1dHRvbicpLFxyXG4gICAgICAgICAgICAgICAgICAgIGNsaWNrOiAoKSA9PiB0aGlzLmRpYWxvZ0Nsb3NlKClcclxuICAgICAgICAgICAgICAgIH1dO1xyXG5cclxuICAgICAgICAgICAgb3B0LnRpdGxlID0gUS5mb3JtYXQoUS50ZXh0KCdTaXRlLlJvbGVQZXJtaXNzaW9uRGlhbG9nLkRpYWxvZ1RpdGxlJyksXHJcbiAgICAgICAgICAgICAgICB0aGlzLm9wdGlvbnMudGl0bGUpO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIG9wdDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRUZW1wbGF0ZSgpOiBzdHJpbmcge1xyXG4gICAgICAgICAgICByZXR1cm4gJzxkaXYgaWQ9XCJ+X1Blcm1pc3Npb25zXCI+PC9kaXY+JztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZXhwb3J0IGludGVyZmFjZSBSb2xlUGVybWlzc2lvbkRpYWxvZ09wdGlvbnMge1xyXG4gICAgICAgIHJvbGVJRD86IG51bWJlcjtcclxuICAgICAgICB0aXRsZT86IHN0cmluZztcclxuICAgIH1cclxufSIsImRlY2xhcmUgdmFyIFZ1ZTtcclxuXHJcbm5hbWVzcGFjZSBZYXhpZS5BZG1pbmlzdHJhdGlvbiB7XHJcbiAgICBleHBvcnQgY2xhc3MgU2VyZ2VuUGFuZWwgZXh0ZW5kcyBTZXJlbml0eS5XaWRnZXQ8YW55PiB7XHJcblxyXG4gICAgICAgIGNvbnN0cnVjdG9yKGNvbnRhaW5lcjogSlF1ZXJ5KSB7XHJcbiAgICAgICAgICAgIHN1cGVyKGNvbnRhaW5lcik7XHJcblxyXG4gICAgICAgICAgICB2YXIgdm0gPSBuZXcgVnVlKHtcclxuICAgICAgICAgICAgICAgIGVsOiAkKCc8ZGl2Lz4nKS5hcHBlbmRUbyh0aGlzLmVsZW1lbnQpWzBdLFxyXG4gICAgICAgICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbm5lY3Rpb246IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgY29ubmVjdGlvbnM6IFtdLFxyXG4gICAgICAgICAgICAgICAgICAgIHRhYmxlczogW10sXHJcbiAgICAgICAgICAgICAgICAgICAgZ2VuZXJhdGU6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgUm93OiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBTZXJ2aWNlOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBVSTogdHJ1ZVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBtZXRob2RzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZ2VuZXJhdGVDb2RlOiBmdW5jdGlvbiAodGFibGUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCF0YWJsZS5JZGVudGlmaWVyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBRLm5vdGlmeUVycm9yKFwiSWRlbnRpZmllciBjYW5ub3QgYmUgZW1wdHkhXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIXRhYmxlLk1vZHVsZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgUS5ub3RpZnlFcnJvcihcIk1vZHVsZSBjYW5ub3QgYmUgZW1wdHkhXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBTZXJnZW5TZXJ2aWNlLkdlbmVyYXRlKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIENvbm5lY3Rpb25LZXk6IHRoaXMuY29ubmVjdGlvbixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFRhYmxlOiB0YWJsZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEdlbmVyYXRlT3B0aW9uczogdGhpcy5nZW5lcmF0ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LCByID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFEubm90aWZ5U3VjY2VzcyhcIkNvZGUgZm9yIHNlbGVjdGVkIHRhYmxlIGlzIGdlbmVyYXRlZC4gWW91J2xsIG5lZWQgdG8gcmVidWlsZCB5b3VyIHByb2plY3QuXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgd2F0Y2g6IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25uZWN0aW9uOiBmdW5jdGlvbiAodmFsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghdmFsIHx8ICF2YWwubGVuZ3RoKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdm0udGFibGVzID0gW107XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFNlcmdlblNlcnZpY2UuTGlzdFRhYmxlcyh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQ29ubmVjdGlvbktleTogdmFsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LCByZXNwb25zZSA9PiB2bS50YWJsZXMgPSByZXNwb25zZS5FbnRpdGllcylcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgdGVtcGxhdGU6IFEuZ2V0VGVtcGxhdGUoJ0FkbWluaXN0cmF0aW9uLlNlcmdlblBhbmVsJylcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICBTZXJnZW5TZXJ2aWNlLkxpc3RDb25uZWN0aW9ucyh7fSwgcmVzcG9uc2UgPT4gdm0uY29ubmVjdGlvbnMgPSByZXNwb25zZS5FbnRpdGllcyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwibmFtZXNwYWNlIFlheGllLkFkbWluaXN0cmF0aW9uIHtcclxuXHJcbiAgICBAU2VyZW5pdHkuRGVjb3JhdG9ycy5yZWdpc3RlckNsYXNzKClcclxuICAgIGV4cG9ydCBjbGFzcyBUcmFuc2xhdGlvbkdyaWQgZXh0ZW5kcyBTZXJlbml0eS5FbnRpdHlHcmlkPFRyYW5zbGF0aW9uSXRlbSwgYW55PiB7XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldElkUHJvcGVydHkoKSB7IHJldHVybiBcIktleVwiOyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldExvY2FsVGV4dFByZWZpeCgpIHsgcmV0dXJuIFwiQWRtaW5pc3RyYXRpb24uVHJhbnNsYXRpb25cIjsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRTZXJ2aWNlKCkgeyByZXR1cm4gVHJhbnNsYXRpb25TZXJ2aWNlLmJhc2VVcmw7IH1cclxuXHJcbiAgICAgICAgcHJpdmF0ZSBoYXNDaGFuZ2VzOiBib29sZWFuO1xyXG4gICAgICAgIHByaXZhdGUgc2VhcmNoVGV4dDogc3RyaW5nO1xyXG4gICAgICAgIHByaXZhdGUgc291cmNlTGFuZ3VhZ2U6IFNlcmVuaXR5Lkxvb2t1cEVkaXRvcjsgXHJcbiAgICAgICAgcHJpdmF0ZSB0YXJnZXRMYW5ndWFnZTogU2VyZW5pdHkuTG9va3VwRWRpdG9yO1xyXG4gICAgICAgIHByaXZhdGUgdGFyZ2V0TGFuZ3VhZ2VLZXk6IHN0cmluZztcclxuXHJcbiAgICAgICAgY29uc3RydWN0b3IoY29udGFpbmVyOiBKUXVlcnkpIHtcclxuICAgICAgICAgICAgc3VwZXIoY29udGFpbmVyKTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudC5vbigna2V5dXAuJyArIHRoaXMudW5pcXVlTmFtZSArICcgY2hhbmdlLicgKyB0aGlzLnVuaXF1ZU5hbWUsXHJcbiAgICAgICAgICAgICAgICAnaW5wdXQuY3VzdG9tLXRleHQnLCBlID0+XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHZhciB2YWx1ZSA9IFEudHJpbVRvTnVsbCgkKGUudGFyZ2V0KS52YWwoKSk7XHJcbiAgICAgICAgICAgICAgICBpZiAodmFsdWUgPT09ICcnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdGhpcy52aWV3LmdldEl0ZW1CeUlkKCQoZS50YXJnZXQpLmRhdGEoJ2tleScpKS5DdXN0b21UZXh0ID0gdmFsdWU7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmhhc0NoYW5nZXMgPSB0cnVlO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCBvbkNsaWNrKGU6IEpRdWVyeUV2ZW50T2JqZWN0LCByb3c6IG51bWJlciwgY2VsbDogbnVtYmVyKTogYW55IHtcclxuICAgICAgICAgICAgc3VwZXIub25DbGljayhlLCByb3csIGNlbGwpO1xyXG5cclxuICAgICAgICAgICAgaWYgKGUuaXNEZWZhdWx0UHJldmVudGVkKCkpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgbGV0IGl0ZW0gPSB0aGlzLml0ZW1BdChyb3cpO1xyXG4gICAgICAgICAgICBsZXQgZG9uZTogKCkgPT4gdm9pZDtcclxuXHJcbiAgICAgICAgICAgIGlmICgkKGUudGFyZ2V0KS5oYXNDbGFzcygnc291cmNlLXRleHQnKSkge1xyXG4gICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBkb25lID0gKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGl0ZW0uQ3VzdG9tVGV4dCA9IGl0ZW0uU291cmNlVGV4dDtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnZpZXcudXBkYXRlSXRlbShpdGVtLktleSwgaXRlbSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5oYXNDaGFuZ2VzID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKFEuaXNUcmltbWVkRW1wdHkoaXRlbS5DdXN0b21UZXh0KSB8fFxyXG4gICAgICAgICAgICAgICAgICAgIChRLnRyaW1Ub0VtcHR5KGl0ZW0uQ3VzdG9tVGV4dCkgPT09IFEudHJpbVRvRW1wdHkoaXRlbS5Tb3VyY2VUZXh0KSkpIHtcclxuICAgICAgICAgICAgICAgICAgICBkb25lKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIFEuY29uZmlybShRLnRleHQoJ0RiLkFkbWluaXN0cmF0aW9uLlRyYW5zbGF0aW9uLk92ZXJyaWRlQ29uZmlybWF0aW9uJyksIGRvbmUpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoJChlLnRhcmdldCkuaGFzQ2xhc3MoJ3RhcmdldC10ZXh0JykpIHtcclxuICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgICAgICAgICAgICBkb25lID0gKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGl0ZW0uQ3VzdG9tVGV4dCA9IGl0ZW0uVGFyZ2V0VGV4dDtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnZpZXcudXBkYXRlSXRlbShpdGVtLktleSwgaXRlbSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5oYXNDaGFuZ2VzID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKFEuaXNUcmltbWVkRW1wdHkoaXRlbS5DdXN0b21UZXh0KSB8fFxyXG4gICAgICAgICAgICAgICAgICAgIChRLnRyaW1Ub0VtcHR5KGl0ZW0uQ3VzdG9tVGV4dCkgPT09IFEudHJpbVRvRW1wdHkoaXRlbS5UYXJnZXRUZXh0KSkpIHtcclxuICAgICAgICAgICAgICAgICAgICBkb25lKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIFEuY29uZmlybShRLnRleHQoJ0RiLkFkbWluaXN0cmF0aW9uLlRyYW5zbGF0aW9uLk92ZXJyaWRlQ29uZmlybWF0aW9uJyksIGRvbmUpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0Q29sdW1ucygpOiBTbGljay5Db2x1bW5bXSB7XHJcblxyXG4gICAgICAgICAgICB2YXIgY29sdW1uczogU2xpY2suQ29sdW1uW10gPSBbXTtcclxuICAgICAgICAgICAgY29sdW1ucy5wdXNoKHsgZmllbGQ6ICdLZXknLCB3aWR0aDogMzAwLCBzb3J0YWJsZTogZmFsc2UgfSk7XHJcblxyXG4gICAgICAgICAgICBjb2x1bW5zLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgZmllbGQ6ICdTb3VyY2VUZXh0JyxcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAzMDAsXHJcbiAgICAgICAgICAgICAgICBzb3J0YWJsZTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBmb3JtYXQ6IGN0eCA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFEub3V0ZXJIdG1sKCQoJzxhLz4nKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuYWRkQ2xhc3MoJ3NvdXJjZS10ZXh0JylcclxuICAgICAgICAgICAgICAgICAgICAgICAgLnRleHQoY3R4LnZhbHVlIHx8ICcnKSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgY29sdW1ucy5wdXNoKHtcclxuICAgICAgICAgICAgICAgIGZpZWxkOiAnQ3VzdG9tVGV4dCcsXHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMzAwLFxyXG4gICAgICAgICAgICAgICAgc29ydGFibGU6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgZm9ybWF0OiBjdHggPT4gUS5vdXRlckh0bWwoJCgnPGlucHV0Lz4nKVxyXG4gICAgICAgICAgICAgICAgICAgIC5hZGRDbGFzcygnY3VzdG9tLXRleHQnKVxyXG4gICAgICAgICAgICAgICAgICAgIC5hdHRyKCd2YWx1ZScsIGN0eC52YWx1ZSlcclxuICAgICAgICAgICAgICAgICAgICAuYXR0cigndHlwZScsICd0ZXh0JylcclxuICAgICAgICAgICAgICAgICAgICAuYXR0cignZGF0YS1rZXknLCBjdHguaXRlbS5LZXkpKVxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIGNvbHVtbnMucHVzaCh7XHJcbiAgICAgICAgICAgICAgICBmaWVsZDogJ1RhcmdldFRleHQnLFxyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDMwMCxcclxuICAgICAgICAgICAgICAgIHNvcnRhYmxlOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIGZvcm1hdDogY3R4ID0+IFEub3V0ZXJIdG1sKCQoJzxhLz4nKVxyXG4gICAgICAgICAgICAgICAgICAgIC5hZGRDbGFzcygndGFyZ2V0LXRleHQnKVxyXG4gICAgICAgICAgICAgICAgICAgIC50ZXh0KGN0eC52YWx1ZSB8fCAnJykpXHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIGNvbHVtbnM7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgY3JlYXRlVG9vbGJhckV4dGVuc2lvbnMoKTogdm9pZCB7XHJcbiAgICAgICAgICAgIHN1cGVyLmNyZWF0ZVRvb2xiYXJFeHRlbnNpb25zKCk7XHJcblxyXG4gICAgICAgICAgICBsZXQgb3B0OiBTZXJlbml0eS5Mb29rdXBFZGl0b3JPcHRpb25zID0ge1xyXG4gICAgICAgICAgICAgICAgbG9va3VwS2V5OiAnQWRtaW5pc3RyYXRpb24uTGFuZ3VhZ2UnXHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICB0aGlzLnNvdXJjZUxhbmd1YWdlID0gU2VyZW5pdHkuV2lkZ2V0LmNyZWF0ZSh7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiBTZXJlbml0eS5Mb29rdXBFZGl0b3IsXHJcbiAgICAgICAgICAgICAgICBlbGVtZW50OiBlbCA9PiBlbC5hcHBlbmRUbyh0aGlzLnRvb2xiYXIuZWxlbWVudCkuYXR0cigncGxhY2Vob2xkZXInLCAnLS0tICcgK1xyXG4gICAgICAgICAgICAgICAgICAgIFEudGV4dCgnRGIuQWRtaW5pc3RyYXRpb24uVHJhbnNsYXRpb24uU291cmNlTGFuZ3VhZ2UnKSArICcgLS0tJyksXHJcbiAgICAgICAgICAgICAgICBvcHRpb25zOiBvcHRcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLnNvdXJjZUxhbmd1YWdlLmNoYW5nZVNlbGVjdDIoZSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5oYXNDaGFuZ2VzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zYXZlQ2hhbmdlcyh0aGlzLnRhcmdldExhbmd1YWdlS2V5KS50aGVuKCgpID0+IHRoaXMucmVmcmVzaCgpKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmVmcmVzaCgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMudGFyZ2V0TGFuZ3VhZ2UgPSBTZXJlbml0eS5XaWRnZXQuY3JlYXRlKHtcclxuICAgICAgICAgICAgICAgIHR5cGU6IFNlcmVuaXR5Lkxvb2t1cEVkaXRvcixcclxuICAgICAgICAgICAgICAgIGVsZW1lbnQ6IGVsID0+IGVsLmFwcGVuZFRvKHRoaXMudG9vbGJhci5lbGVtZW50KS5hdHRyKCdwbGFjZWhvbGRlcicsICctLS0gJyArXHJcbiAgICAgICAgICAgICAgICAgICAgUS50ZXh0KCdEYi5BZG1pbmlzdHJhdGlvbi5UcmFuc2xhdGlvbi5UYXJnZXRMYW5ndWFnZScpICsgJyAtLS0nKSxcclxuICAgICAgICAgICAgICAgIG9wdGlvbnM6IG9wdFxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMudGFyZ2V0TGFuZ3VhZ2UuY2hhbmdlU2VsZWN0MihlID0+IHtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmhhc0NoYW5nZXMpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNhdmVDaGFuZ2VzKHRoaXMudGFyZ2V0TGFuZ3VhZ2VLZXkpLnRoZW4oKCkgPT4gdGhpcy5yZWZyZXNoKCkpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yZWZyZXNoKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIHNhdmVDaGFuZ2VzKGxhbmd1YWdlOiBzdHJpbmcpOiBQcm9taXNlTGlrZTxhbnk+IHtcclxuICAgICAgICAgICAgdmFyIHRyYW5zbGF0aW9uczogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfSA9IHt9O1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpdGVtIG9mIHRoaXMuZ2V0SXRlbXMoKSkge1xyXG4gICAgICAgICAgICAgICAgdHJhbnNsYXRpb25zW2l0ZW0uS2V5XSA9IGl0ZW0uQ3VzdG9tVGV4dDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShUcmFuc2xhdGlvblNlcnZpY2UuVXBkYXRlKHtcclxuICAgICAgICAgICAgICAgIFRhcmdldExhbmd1YWdlSUQ6IGxhbmd1YWdlLFxyXG4gICAgICAgICAgICAgICAgVHJhbnNsYXRpb25zOiB0cmFuc2xhdGlvbnNcclxuICAgICAgICAgICAgfSkpLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5oYXNDaGFuZ2VzID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBsYW5ndWFnZSA9IFEudHJpbVRvTnVsbChsYW5ndWFnZSkgfHwgJ2ludmFyaWFudCc7XHJcbiAgICAgICAgICAgICAgICBRLm5vdGlmeVN1Y2Nlc3MoJ1VzZXIgdHJhbnNsYXRpb25zIGluIFwiJyArIGxhbmd1YWdlICtcclxuICAgICAgICAgICAgICAgICAgICAnXCIgbGFuZ3VhZ2UgYXJlIHNhdmVkIHRvIFwidXNlci50ZXh0cy4nICtcclxuICAgICAgICAgICAgICAgICAgICBsYW5ndWFnZSArICcuanNvblwiICcgKyAnZmlsZSB1bmRlciBcIn4vQXBwX0RhdGEvdGV4dHMvXCInLCAnJyk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIG9uVmlld1N1Ym1pdCgpOiBib29sZWFuIHtcclxuICAgICAgICAgICAgdmFyIHJlcXVlc3QgPSB0aGlzLnZpZXcucGFyYW1zO1xyXG4gICAgICAgICAgICByZXF1ZXN0LlNvdXJjZUxhbmd1YWdlSUQgPSB0aGlzLnNvdXJjZUxhbmd1YWdlLnZhbHVlO1xyXG4gICAgICAgICAgICB0aGlzLnRhcmdldExhbmd1YWdlS2V5ID0gdGhpcy50YXJnZXRMYW5ndWFnZS52YWx1ZSB8fCAnJztcclxuICAgICAgICAgICAgcmVxdWVzdC5UYXJnZXRMYW5ndWFnZUlEID0gdGhpcy50YXJnZXRMYW5ndWFnZUtleTtcclxuICAgICAgICAgICAgdGhpcy5oYXNDaGFuZ2VzID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHJldHVybiBzdXBlci5vblZpZXdTdWJtaXQoKTtcclxuICAgICAgICB9XHJcbiAgICBcclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0QnV0dG9ucygpOiBTZXJlbml0eS5Ub29sQnV0dG9uW10ge1xyXG4gICAgICAgICAgICByZXR1cm4gW3tcclxuICAgICAgICAgICAgICAgIHRpdGxlOiBRLnRleHQoJ0RiLkFkbWluaXN0cmF0aW9uLlRyYW5zbGF0aW9uLlNhdmVDaGFuZ2VzQnV0dG9uJyksXHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrOiBlID0+IHRoaXMuc2F2ZUNoYW5nZXModGhpcy50YXJnZXRMYW5ndWFnZUtleSkudGhlbigoKSA9PiB0aGlzLnJlZnJlc2goKSksXHJcbiAgICAgICAgICAgICAgICBjc3NDbGFzczogJ2FwcGx5LWNoYW5nZXMtYnV0dG9uJ1xyXG4gICAgICAgICAgICB9XTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCBjcmVhdGVRdWlja1NlYXJjaElucHV0KCkge1xyXG4gICAgICAgICAgICBTZXJlbml0eS5HcmlkVXRpbHMuYWRkUXVpY2tTZWFyY2hJbnB1dEN1c3RvbSh0aGlzLnRvb2xiYXIuZWxlbWVudCxcclxuICAgICAgICAgICAgICAgIChmaWVsZCwgc2VhcmNoVGV4dCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2VhcmNoVGV4dCA9IHNlYXJjaFRleHQ7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy52aWV3LnNldEl0ZW1zKHRoaXMudmlldy5nZXRJdGVtcygpLCB0cnVlKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIG9uVmlld0ZpbHRlcihpdGVtOiBUcmFuc2xhdGlvbkl0ZW0pIHtcclxuICAgICAgICAgICAgaWYgKCFzdXBlci5vblZpZXdGaWx0ZXIoaXRlbSkpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKCF0aGlzLnNlYXJjaFRleHQpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB2YXIgc2QgPSBTZWxlY3QyLnV0aWwuc3RyaXBEaWFjcml0aWNzO1xyXG4gICAgICAgICAgICB2YXIgc2VhcmNoaW5nID0gc2QodGhpcy5zZWFyY2hUZXh0KS50b0xvd2VyQ2FzZSgpO1xyXG5cclxuICAgICAgICAgICAgZnVuY3Rpb24gbWF0Y2goc3RyOiBzdHJpbmcpIHtcclxuICAgICAgICAgICAgICAgIGlmICghc3RyKVxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gc3RyLnRvTG93ZXJDYXNlKCkuaW5kZXhPZihzZWFyY2hpbmcpID49IDA7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHJldHVybiBRLmlzRW1wdHlPck51bGwoc2VhcmNoaW5nKSB8fCBtYXRjaChpdGVtLktleSkgfHwgbWF0Y2goaXRlbS5Tb3VyY2VUZXh0KSB8fFxyXG4gICAgICAgICAgICAgICAgbWF0Y2goaXRlbS5UYXJnZXRUZXh0KSB8fCBtYXRjaChpdGVtLkN1c3RvbVRleHQpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIHVzZVBhZ2VyKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwibmFtZXNwYWNlIFlheGllLkFkbWluaXN0cmF0aW9uIHtcclxuXHJcbiAgICBAU2VyZW5pdHkuRGVjb3JhdG9ycy5yZWdpc3RlckNsYXNzKClcclxuICAgIGV4cG9ydCBjbGFzcyBVc2VyRGlhbG9nIGV4dGVuZHMgU2VyZW5pdHkuRW50aXR5RGlhbG9nPFVzZXJSb3csIGFueT4ge1xyXG4gICAgICAgIHByb3RlY3RlZCBnZXRGb3JtS2V5KCkgeyByZXR1cm4gVXNlckZvcm0uZm9ybUtleTsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRJZFByb3BlcnR5KCkgeyByZXR1cm4gVXNlclJvdy5pZFByb3BlcnR5OyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldElzQWN0aXZlUHJvcGVydHkoKSB7IHJldHVybiBVc2VyUm93LmlzQWN0aXZlUHJvcGVydHk7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0TG9jYWxUZXh0UHJlZml4KCkgeyByZXR1cm4gVXNlclJvdy5sb2NhbFRleHRQcmVmaXg7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0TmFtZVByb3BlcnR5KCkgeyByZXR1cm4gVXNlclJvdy5uYW1lUHJvcGVydHk7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0U2VydmljZSgpIHsgcmV0dXJuIFVzZXJTZXJ2aWNlLmJhc2VVcmw7IH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIGZvcm0gPSBuZXcgVXNlckZvcm0odGhpcy5pZFByZWZpeCk7XHJcblxyXG4gICAgICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgICAgICBzdXBlcigpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5mb3JtLlBhc3N3b3JkLmFkZFZhbGlkYXRpb25SdWxlKHRoaXMudW5pcXVlTmFtZSwgZSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5mb3JtLlBhc3N3b3JkLnZhbHVlLmxlbmd0aCA8IDcpXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFwiUGFzc3dvcmQgbXVzdCBiZSBhdCBsZWFzdCA3IGNoYXJhY3RlcnMhXCI7XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5mb3JtLlBhc3N3b3JkQ29uZmlybS5hZGRWYWxpZGF0aW9uUnVsZSh0aGlzLnVuaXF1ZU5hbWUsIGUgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuZm9ybS5QYXNzd29yZC52YWx1ZSAhPSB0aGlzLmZvcm0uUGFzc3dvcmRDb25maXJtLnZhbHVlKVxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBcIlRoZSBwYXNzd29yZHMgZW50ZXJlZCBkb2Vzbid0IG1hdGNoIVwiO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRUb29sYmFyQnV0dG9ucygpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBsZXQgYnV0dG9ucyA9IHN1cGVyLmdldFRvb2xiYXJCdXR0b25zKCk7XHJcblxyXG4gICAgICAgICAgICBidXR0b25zLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgdGl0bGU6IFEudGV4dCgnU2l0ZS5Vc2VyRGlhbG9nLkVkaXRSb2xlc0J1dHRvbicpLFxyXG4gICAgICAgICAgICAgICAgY3NzQ2xhc3M6ICdlZGl0LXJvbGVzLWJ1dHRvbicsXHJcbiAgICAgICAgICAgICAgICBpY29uOiAnZmEtdXNlcnMgdGV4dC1ibHVlJyxcclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s6ICgpID0+XHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmV3IFVzZXJSb2xlRGlhbG9nKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdXNlcklEOiB0aGlzLmVudGl0eS5Vc2VySWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHVzZXJuYW1lOiB0aGlzLmVudGl0eS5Vc2VybmFtZVxyXG4gICAgICAgICAgICAgICAgICAgIH0pLmRpYWxvZ09wZW4oKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICBidXR0b25zLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgdGl0bGU6IFEudGV4dCgnU2l0ZS5Vc2VyRGlhbG9nLkVkaXRQZXJtaXNzaW9uc0J1dHRvbicpLFxyXG4gICAgICAgICAgICAgICAgY3NzQ2xhc3M6ICdlZGl0LXBlcm1pc3Npb25zLWJ1dHRvbicsXHJcbiAgICAgICAgICAgICAgICBpY29uOiAnZmEtbG9jayB0ZXh0LWdyZWVuJyxcclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s6ICgpID0+XHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmV3IFVzZXJQZXJtaXNzaW9uRGlhbG9nKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdXNlcklEOiB0aGlzLmVudGl0eS5Vc2VySWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHVzZXJuYW1lOiB0aGlzLmVudGl0eS5Vc2VybmFtZVxyXG4gICAgICAgICAgICAgICAgICAgIH0pLmRpYWxvZ09wZW4oKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gYnV0dG9ucztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCB1cGRhdGVJbnRlcmZhY2UoKSB7XHJcbiAgICAgICAgICAgIHN1cGVyLnVwZGF0ZUludGVyZmFjZSgpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy50b29sYmFyLmZpbmRCdXR0b24oJ2VkaXQtcm9sZXMtYnV0dG9uJykudG9nZ2xlQ2xhc3MoJ2Rpc2FibGVkJywgdGhpcy5pc05ld09yRGVsZXRlZCgpKTtcclxuICAgICAgICAgICAgdGhpcy50b29sYmFyLmZpbmRCdXR0b24oXCJlZGl0LXBlcm1pc3Npb25zLWJ1dHRvblwiKS50b2dnbGVDbGFzcyhcImRpc2FibGVkXCIsIHRoaXMuaXNOZXdPckRlbGV0ZWQoKSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgYWZ0ZXJMb2FkRW50aXR5KCkge1xyXG4gICAgICAgICAgICBzdXBlci5hZnRlckxvYWRFbnRpdHkoKTtcclxuXHJcbiAgICAgICAgICAgIC8vIHRoZXNlIGZpZWxkcyBhcmUgb25seSByZXF1aXJlZCBpbiBuZXcgcmVjb3JkIG1vZGVcclxuICAgICAgICAgICAgdGhpcy5mb3JtLlBhc3N3b3JkLmVsZW1lbnQudG9nZ2xlQ2xhc3MoJ3JlcXVpcmVkJywgdGhpcy5pc05ldygpKVxyXG4gICAgICAgICAgICAgICAgLmNsb3Nlc3QoJy5maWVsZCcpLmZpbmQoJ3N1cCcpLnRvZ2dsZSh0aGlzLmlzTmV3KCkpO1xyXG4gICAgICAgICAgICB0aGlzLmZvcm0uUGFzc3dvcmRDb25maXJtLmVsZW1lbnQudG9nZ2xlQ2xhc3MoJ3JlcXVpcmVkJywgdGhpcy5pc05ldygpKVxyXG4gICAgICAgICAgICAgICAgLmNsb3Nlc3QoJy5maWVsZCcpLmZpbmQoJ3N1cCcpLnRvZ2dsZSh0aGlzLmlzTmV3KCkpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsIm5hbWVzcGFjZSBZYXhpZS5BZG1pbmlzdHJhdGlvbiB7XHJcblxyXG4gICAgQFNlcmVuaXR5LkRlY29yYXRvcnMucmVnaXN0ZXJDbGFzcygpXHJcbiAgICBleHBvcnQgY2xhc3MgVXNlckdyaWQgZXh0ZW5kcyBTZXJlbml0eS5FbnRpdHlHcmlkPFVzZXJSb3csIGFueT4ge1xyXG4gICAgICAgIHByb3RlY3RlZCBnZXRDb2x1bW5zS2V5KCkgeyByZXR1cm4gXCJBZG1pbmlzdHJhdGlvbi5Vc2VyXCI7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0RGlhbG9nVHlwZSgpIHsgcmV0dXJuIFVzZXJEaWFsb2c7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0SWRQcm9wZXJ0eSgpIHsgcmV0dXJuIFVzZXJSb3cuaWRQcm9wZXJ0eTsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRJc0FjdGl2ZVByb3BlcnR5KCkgeyByZXR1cm4gVXNlclJvdy5pc0FjdGl2ZVByb3BlcnR5OyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldExvY2FsVGV4dFByZWZpeCgpIHsgcmV0dXJuIFVzZXJSb3cubG9jYWxUZXh0UHJlZml4OyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldFNlcnZpY2UoKSB7IHJldHVybiBVc2VyU2VydmljZS5iYXNlVXJsOyB9XHJcblxyXG4gICAgICAgIGNvbnN0cnVjdG9yKGNvbnRhaW5lcjogSlF1ZXJ5KSB7XHJcbiAgICAgICAgICAgIHN1cGVyKGNvbnRhaW5lcik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0RGVmYXVsdFNvcnRCeSgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIFtVc2VyUm93LkZpZWxkcy5Vc2VybmFtZV07XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwibmFtZXNwYWNlIFlheGllLkF1dGhvcml6YXRpb24ge1xyXG4gICAgZXhwb3J0IGRlY2xhcmUgbGV0IHVzZXJEZWZpbml0aW9uOiBTY3JpcHRVc2VyRGVmaW5pdGlvbjtcclxuXHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoQXV0aG9yaXphdGlvbiwgJ3VzZXJEZWZpbml0aW9uJywge1xyXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gUS5nZXRSZW1vdGVEYXRhKCdVc2VyRGF0YScpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIGV4cG9ydCBmdW5jdGlvbiBoYXNQZXJtaXNzaW9uKHBlcm1pc3Npb25LZXk6IHN0cmluZykge1xyXG4gICAgICAgIGxldCB1ZCA9IHVzZXJEZWZpbml0aW9uO1xyXG4gICAgICAgIHJldHVybiB1ZC5Vc2VybmFtZSA9PT0gJ2FkbWluJyB8fCAhIXVkLlBlcm1pc3Npb25zW3Blcm1pc3Npb25LZXldO1xyXG4gICAgfVxyXG59IiwibmFtZXNwYWNlIFlheGllLkFkbWluaXN0cmF0aW9uIHtcclxuXHJcbiAgICBAU2VyZW5pdHkuRGVjb3JhdG9ycy5yZWdpc3RlckVkaXRvcihbU2VyZW5pdHkuSUdldEVkaXRWYWx1ZSwgU2VyZW5pdHkuSVNldEVkaXRWYWx1ZV0pXHJcbiAgICBleHBvcnQgY2xhc3MgUGVybWlzc2lvbkNoZWNrRWRpdG9yIGV4dGVuZHMgU2VyZW5pdHkuRGF0YUdyaWQ8UGVybWlzc2lvbkNoZWNrSXRlbSwgUGVybWlzc2lvbkNoZWNrRWRpdG9yT3B0aW9ucz4ge1xyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0SWRQcm9wZXJ0eSgpIHsgcmV0dXJuIFwiS2V5XCI7IH1cclxuXHJcbiAgICAgICAgcHJpdmF0ZSBzZWFyY2hUZXh0OiBzdHJpbmc7XHJcbiAgICAgICAgcHJpdmF0ZSBieVBhcmVudEtleTogUS5Hcm91cGluZzxQZXJtaXNzaW9uQ2hlY2tJdGVtPjtcclxuXHJcbiAgICAgICAgY29uc3RydWN0b3IoY29udGFpbmVyOiBKUXVlcnksIG9wdDogUGVybWlzc2lvbkNoZWNrRWRpdG9yT3B0aW9ucykge1xyXG4gICAgICAgICAgICBzdXBlcihjb250YWluZXIsIG9wdCk7XHJcblxyXG4gICAgICAgICAgICBsZXQgdGl0bGVCeUtleTogUS5EaWN0aW9uYXJ5PHN0cmluZz4gPSB7fTtcclxuICAgICAgICAgICAgbGV0IHBlcm1pc3Npb25LZXlzID0gdGhpcy5nZXRTb3J0ZWRHcm91cEFuZFBlcm1pc3Npb25LZXlzKHRpdGxlQnlLZXkpO1xyXG4gICAgICAgICAgICBsZXQgaXRlbXMgPSBwZXJtaXNzaW9uS2V5cy5tYXAoa2V5ID0+IDxQZXJtaXNzaW9uQ2hlY2tJdGVtPntcclxuICAgICAgICAgICAgICAgIEtleToga2V5LFxyXG4gICAgICAgICAgICAgICAgUGFyZW50S2V5OiB0aGlzLmdldFBhcmVudEtleShrZXkpLFxyXG4gICAgICAgICAgICAgICAgVGl0bGU6IHRpdGxlQnlLZXlba2V5XSxcclxuICAgICAgICAgICAgICAgIEdyYW50UmV2b2tlOiBudWxsLFxyXG4gICAgICAgICAgICAgICAgSXNHcm91cDoga2V5LmNoYXJBdChrZXkubGVuZ3RoIC0gMSkgPT09ICc6J1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuYnlQYXJlbnRLZXkgPSBRLnRvR3JvdXBpbmcoaXRlbXMsIHggPT4geC5QYXJlbnRLZXkpO1xyXG4gICAgICAgICAgICB0aGlzLnNldEl0ZW1zKGl0ZW1zKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByaXZhdGUgZ2V0SXRlbUdyYW50UmV2b2tlQ2xhc3MoaXRlbTogUGVybWlzc2lvbkNoZWNrSXRlbSwgZ3JhbnQ6IGJvb2xlYW4pOiBzdHJpbmcge1xyXG4gICAgICAgICAgICBpZiAoIWl0ZW0uSXNHcm91cCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuICgoaXRlbS5HcmFudFJldm9rZSA9PT0gZ3JhbnQpID8gJyBjaGVja2VkJyA6ICcnKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgbGV0IGRlc2MgPSB0aGlzLmdldERlc2NlbmRhbnRzKGl0ZW0sIHRydWUpO1xyXG4gICAgICAgICAgICBsZXQgZ3JhbnRlZCA9IGRlc2MuZmlsdGVyKHggPT4geC5HcmFudFJldm9rZSA9PT0gZ3JhbnQpO1xyXG5cclxuICAgICAgICAgICAgaWYgKCFncmFudGVkLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuICcnO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoZGVzYy5sZW5ndGggPT09IGdyYW50ZWQubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gJ2NoZWNrZWQnO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gJ2NoZWNrZWQgcGFydGlhbCc7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcml2YXRlIHJvbGVPckltcGxpY2l0KGtleSk6IGJvb2xlYW4ge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5fcm9sZVBlcm1pc3Npb25zW2tleV0pXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuXHJcbiAgICAgICAgICAgIGZvciAodmFyIGsgb2YgT2JqZWN0LmtleXModGhpcy5fcm9sZVBlcm1pc3Npb25zKSkge1xyXG4gICAgICAgICAgICAgICAgdmFyIGQgPSB0aGlzLl9pbXBsaWNpdFBlcm1pc3Npb25zW2tdO1xyXG4gICAgICAgICAgICAgICAgaWYgKGQgJiYgZFtrZXldKVxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBmb3IgKHZhciBpIG9mIE9iamVjdC5rZXlzKHRoaXMuX2ltcGxpY2l0UGVybWlzc2lvbnMpKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgaXRlbSA9IHRoaXMudmlldy5nZXRJdGVtQnlJZChpKTtcclxuICAgICAgICAgICAgICAgIGlmIChpdGVtICYmIGl0ZW0uR3JhbnRSZXZva2UgPT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBkID0gdGhpcy5faW1wbGljaXRQZXJtaXNzaW9uc1tpXTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoZCAmJiBkW2tleV0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcml2YXRlIGdldEl0ZW1FZmZlY3RpdmVDbGFzcyhpdGVtOiBQZXJtaXNzaW9uQ2hlY2tJdGVtKTogc3RyaW5nIHtcclxuXHJcbiAgICAgICAgICAgIGlmIChpdGVtLklzR3JvdXApIHtcclxuICAgICAgICAgICAgICAgIGxldCBkZXNjID0gdGhpcy5nZXREZXNjZW5kYW50cyhpdGVtLCB0cnVlKTtcclxuICAgICAgICAgICAgICAgIGxldCBncmFudENvdW50ID0gUS5jb3VudChkZXNjLCB4ID0+IHguR3JhbnRSZXZva2UgPT09IHRydWUgfHxcclxuICAgICAgICAgICAgICAgICAgICAoeC5HcmFudFJldm9rZSA9PSBudWxsICYmIHRoaXMucm9sZU9ySW1wbGljaXQoeC5LZXkpKSk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKGdyYW50Q291bnQgPT09IGRlc2MubGVuZ3RoIHx8IGRlc2MubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuICdhbGxvdyc7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKGdyYW50Q291bnQgPT09IDApIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gJ2RlbnknO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIHJldHVybiAncGFydGlhbCc7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGxldCBncmFudGVkID0gaXRlbS5HcmFudFJldm9rZSA9PT0gdHJ1ZSB8fFxyXG4gICAgICAgICAgICAgICAgKGl0ZW0uR3JhbnRSZXZva2UgPT0gbnVsbCAmJiB0aGlzLnJvbGVPckltcGxpY2l0KGl0ZW0uS2V5KSk7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gKGdyYW50ZWQgPyAnIGFsbG93JyA6ICcgZGVueScpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIGdldENvbHVtbnMoKTogU2xpY2suQ29sdW1uW10ge1xyXG4gICAgICAgICAgICBsZXQgY29sdW1uczogU2xpY2suQ29sdW1uW10gPSBbe1xyXG4gICAgICAgICAgICAgICAgbmFtZTogUS50ZXh0KCdTaXRlLlVzZXJQZXJtaXNzaW9uRGlhbG9nLlBlcm1pc3Npb24nKSxcclxuICAgICAgICAgICAgICAgIGZpZWxkOiAnVGl0bGUnLFxyXG4gICAgICAgICAgICAgICAgZm9ybWF0OiBTZXJlbml0eS5TbGlja0Zvcm1hdHRpbmcudHJlZVRvZ2dsZSgoKSA9PiB0aGlzLnZpZXcsIHggPT4geC5LZXksIGN0eCA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGl0ZW0gPSBjdHguaXRlbTtcclxuICAgICAgICAgICAgICAgICAgICBsZXQga2xhc3MgPSB0aGlzLmdldEl0ZW1FZmZlY3RpdmVDbGFzcyhpdGVtKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gJzxzcGFuIGNsYXNzPVwiZWZmZWN0aXZlLXBlcm1pc3Npb24gJyArIGtsYXNzICsgJ1wiPicgKyBRLmh0bWxFbmNvZGUoY3R4LnZhbHVlKSArICc8L3NwYW4+JztcclxuICAgICAgICAgICAgICAgIH0pLFxyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDQ5NSxcclxuICAgICAgICAgICAgICAgIHNvcnRhYmxlOiBmYWxzZVxyXG4gICAgICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICAgICBuYW1lOiBRLnRleHQoJ1NpdGUuVXNlclBlcm1pc3Npb25EaWFsb2cuR3JhbnQnKSwgZmllbGQ6ICdHcmFudCcsXHJcbiAgICAgICAgICAgICAgICBmb3JtYXQ6IGN0eCA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGl0ZW0xID0gY3R4Lml0ZW07XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGtsYXNzMSA9IHRoaXMuZ2V0SXRlbUdyYW50UmV2b2tlQ2xhc3MoaXRlbTEsIHRydWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBcIjxzcGFuIGNsYXNzPSdjaGVjay1ib3ggZ3JhbnQgbm8tZmxvYXQgXCIgKyBrbGFzczEgKyBcIic+PC9zcGFuPlwiO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHdpZHRoOiA2NSxcclxuICAgICAgICAgICAgICAgIHNvcnRhYmxlOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIGhlYWRlckNzc0NsYXNzOiAnYWxpZ24tY2VudGVyJyxcclxuICAgICAgICAgICAgICAgIGNzc0NsYXNzOiAnYWxpZ24tY2VudGVyJ1xyXG4gICAgICAgICAgICB9XTtcclxuXHJcbiAgICAgICAgICAgIGlmICh0aGlzLm9wdGlvbnMuc2hvd1Jldm9rZSkge1xyXG4gICAgICAgICAgICAgICAgY29sdW1ucy5wdXNoKHtcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiBRLnRleHQoJ1NpdGUuVXNlclBlcm1pc3Npb25EaWFsb2cuUmV2b2tlJyksIGZpZWxkOiAnUmV2b2tlJyxcclxuICAgICAgICAgICAgICAgICAgICBmb3JtYXQ6IGN0eCA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBpdGVtMiA9IGN0eC5pdGVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQga2xhc3MyID0gdGhpcy5nZXRJdGVtR3JhbnRSZXZva2VDbGFzcyhpdGVtMiwgZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gJzxzcGFuIGNsYXNzPVwiY2hlY2stYm94IHJldm9rZSBuby1mbG9hdCAnICsga2xhc3MyICsgJ1wiPjwvc3Bhbj4nO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDY1LFxyXG4gICAgICAgICAgICAgICAgICAgIHNvcnRhYmxlOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICBoZWFkZXJDc3NDbGFzczogJ2FsaWduLWNlbnRlcicsXHJcbiAgICAgICAgICAgICAgICAgICAgY3NzQ2xhc3M6ICdhbGlnbi1jZW50ZXInXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcmV0dXJuIGNvbHVtbnM7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgc2V0SXRlbXMoaXRlbXM6IFBlcm1pc3Npb25DaGVja0l0ZW1bXSk6IHZvaWQge1xyXG4gICAgICAgICAgICBTZXJlbml0eS5TbGlja1RyZWVIZWxwZXIuc2V0SW5kZW50cyhpdGVtcywgeCA9PiB4LktleSwgeCA9PiB4LlBhcmVudEtleSwgZmFsc2UpO1xyXG4gICAgICAgICAgICB0aGlzLnZpZXcuc2V0SXRlbXMoaXRlbXMsIHRydWUpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIG9uVmlld1N1Ym1pdCgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIG9uVmlld0ZpbHRlcihpdGVtOiBQZXJtaXNzaW9uQ2hlY2tJdGVtKTogYm9vbGVhbiB7XHJcbiAgICAgICAgICAgIGlmICghc3VwZXIub25WaWV3RmlsdGVyKGl0ZW0pKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmICghU2VyZW5pdHkuU2xpY2tUcmVlSGVscGVyLmZpbHRlckJ5SWQoaXRlbSwgdGhpcy52aWV3LCB4ID0+IHguUGFyZW50S2V5KSlcclxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuXHJcbiAgICAgICAgICAgIGlmICh0aGlzLnNlYXJjaFRleHQpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLm1hdGNoQ29udGFpbnMoaXRlbSkgfHwgaXRlbS5Jc0dyb3VwICYmIFEuYW55KHRoaXMuZ2V0RGVzY2VuZGFudHMoaXRlbSwgZmFsc2UpLCB4ID0+IHRoaXMubWF0Y2hDb250YWlucyh4KSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJpdmF0ZSBtYXRjaENvbnRhaW5zKGl0ZW06IFBlcm1pc3Npb25DaGVja0l0ZW0pOiBib29sZWFuIHtcclxuICAgICAgICAgICAgcmV0dXJuIFNlbGVjdDIudXRpbC5zdHJpcERpYWNyaXRpY3MoaXRlbS5UaXRsZSB8fCAnJykudG9Mb3dlckNhc2UoKS5pbmRleE9mKHRoaXMuc2VhcmNoVGV4dCkgPj0gMDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByaXZhdGUgZ2V0RGVzY2VuZGFudHMoaXRlbTogUGVybWlzc2lvbkNoZWNrSXRlbSwgZXhjbHVkZUdyb3VwczogYm9vbGVhbik6IFBlcm1pc3Npb25DaGVja0l0ZW1bXSB7XHJcbiAgICAgICAgICAgIGxldCByZXN1bHQ6IFBlcm1pc3Npb25DaGVja0l0ZW1bXSA9IFtdO1xyXG4gICAgICAgICAgICBsZXQgc3RhY2sgPSBbaXRlbV07XHJcbiAgICAgICAgICAgIHdoaWxlIChzdGFjay5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgaSA9IHN0YWNrLnBvcCgpO1xyXG4gICAgICAgICAgICAgICAgbGV0IGNoaWxkcmVuID0gdGhpcy5ieVBhcmVudEtleVtpLktleV07XHJcbiAgICAgICAgICAgICAgICBpZiAoIWNoaWxkcmVuKVxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG5cclxuICAgICAgICAgICAgICAgIGZvciAobGV0IGNoaWxkIG9mIGNoaWxkcmVuKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFleGNsdWRlR3JvdXBzIHx8ICFjaGlsZC5Jc0dyb3VwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdC5wdXNoKGNoaWxkKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHN0YWNrLnB1c2goY2hpbGQpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIG9uQ2xpY2soZSwgcm93LCBjZWxsKTogdm9pZCB7XHJcbiAgICAgICAgICAgIHN1cGVyLm9uQ2xpY2soZSwgcm93LCBjZWxsKTtcclxuXHJcbiAgICAgICAgICAgIGlmICghZS5pc0RlZmF1bHRQcmV2ZW50ZWQoKSkge1xyXG4gICAgICAgICAgICAgICAgU2VyZW5pdHkuU2xpY2tUcmVlSGVscGVyLnRvZ2dsZUNsaWNrKGUsIHJvdywgY2VsbCwgdGhpcy52aWV3LCB4ID0+IHguS2V5KTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKGUuaXNEZWZhdWx0UHJldmVudGVkKCkpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgbGV0IHRhcmdldCA9ICQoZS50YXJnZXQpO1xyXG4gICAgICAgICAgICBsZXQgZ3JhbnQgPSB0YXJnZXQuaGFzQ2xhc3MoJ2dyYW50Jyk7XHJcblxyXG4gICAgICAgICAgICBpZiAoZ3JhbnQgfHwgdGFyZ2V0Lmhhc0NsYXNzKCdyZXZva2UnKSkge1xyXG4gICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgICAgICAgICAgIGxldCBpdGVtID0gdGhpcy5pdGVtQXQocm93KTtcclxuICAgICAgICAgICAgICAgIGxldCBjaGVja2VkT3JQYXJ0aWFsID0gdGFyZ2V0Lmhhc0NsYXNzKCdjaGVja2VkJykgfHwgdGFyZ2V0Lmhhc0NsYXNzKCdwYXJ0aWFsJyk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKGNoZWNrZWRPclBhcnRpYWwpIHtcclxuICAgICAgICAgICAgICAgICAgICBncmFudCA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBncmFudCA9IGdyYW50ICE9PSBjaGVja2VkT3JQYXJ0aWFsO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGlmIChpdGVtLklzR3JvdXApIHtcclxuICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBkIG9mIHRoaXMuZ2V0RGVzY2VuZGFudHMoaXRlbSwgdHJ1ZSkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZC5HcmFudFJldm9rZSA9IGdyYW50O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgICAgICBpdGVtLkdyYW50UmV2b2tlID0gZ3JhbnQ7XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5zbGlja0dyaWQuaW52YWxpZGF0ZSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcml2YXRlIGdldFBhcmVudEtleShrZXkpOiBzdHJpbmcge1xyXG4gICAgICAgICAgICBpZiAoa2V5LmNoYXJBdChrZXkubGVuZ3RoIC0gMSkgPT09ICc6Jykge1xyXG4gICAgICAgICAgICAgICAga2V5ID0ga2V5LnN1YnN0cigwLCBrZXkubGVuZ3RoIC0gMSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGxldCBpZHggPSBrZXkubGFzdEluZGV4T2YoJzonKTtcclxuICAgICAgICAgICAgaWYgKGlkeCA+PSAwKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4ga2V5LnN1YnN0cigwLCBpZHggKyAxKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRCdXR0b25zKCk6IFNlcmVuaXR5LlRvb2xCdXR0b25bXSB7XHJcbiAgICAgICAgICAgIHJldHVybiBbXTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCBjcmVhdGVUb29sYmFyRXh0ZW5zaW9ucygpOiB2b2lkIHtcclxuICAgICAgICAgICAgc3VwZXIuY3JlYXRlVG9vbGJhckV4dGVuc2lvbnMoKTtcclxuICAgICAgICAgICAgU2VyZW5pdHkuR3JpZFV0aWxzLmFkZFF1aWNrU2VhcmNoSW5wdXRDdXN0b20odGhpcy50b29sYmFyLmVsZW1lbnQsIChmaWVsZCwgdGV4dCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZWFyY2hUZXh0ID0gU2VsZWN0Mi51dGlsLnN0cmlwRGlhY3JpdGljcyhRLnRyaW1Ub051bGwodGV4dCkgfHwgJycpLnRvTG93ZXJDYXNlKCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnZpZXcuc2V0SXRlbXModGhpcy52aWV3LmdldEl0ZW1zKCksIHRydWUpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByaXZhdGUgZ2V0U29ydGVkR3JvdXBBbmRQZXJtaXNzaW9uS2V5cyh0aXRsZUJ5S2V5OiBRLkRpY3Rpb25hcnk8c3RyaW5nPik6IHN0cmluZ1tdIHtcclxuICAgICAgICAgICAgbGV0IGtleXMgPSA8c3RyaW5nW10+US5nZXRSZW1vdGVEYXRhKCdBZG1pbmlzdHJhdGlvbi5QZXJtaXNzaW9uS2V5cycpLkVudGl0aWVzO1xyXG4gICAgICAgICAgICBsZXQgdGl0bGVXaXRoR3JvdXAgPSB7fTtcclxuICAgICAgICAgICAgZm9yICh2YXIgayBvZiBrZXlzKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgcyA9IGs7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKCFzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKHMuY2hhckF0KHMubGVuZ3RoIC0gMSkgPT0gJzonKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcyA9IHMuc3Vic3RyKDAsIHMubGVuZ3RoIC0gMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHMubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBpZiAodGl0bGVCeUtleVtzXSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIHRpdGxlQnlLZXlbc10gPSBRLmNvYWxlc2NlKFEudHJ5R2V0VGV4dCgnUGVybWlzc2lvbi4nICsgcyksIHMpO1xyXG4gICAgICAgICAgICAgICAgbGV0IHBhcnRzID0gcy5zcGxpdCgnOicpO1xyXG4gICAgICAgICAgICAgICAgbGV0IGdyb3VwID0gJyc7XHJcbiAgICAgICAgICAgICAgICBsZXQgZ3JvdXBUaXRsZSA9ICcnO1xyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwYXJ0cy5sZW5ndGggLSAxOyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICBncm91cCA9IGdyb3VwICsgcGFydHNbaV0gKyAnOic7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHR4dCA9IFEudHJ5R2V0VGV4dCgnUGVybWlzc2lvbi4nICsgZ3JvdXApO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0eHQgPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eHQgPSBwYXJ0c1tpXTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGVCeUtleVtncm91cF0gPSB0eHQ7XHJcbiAgICAgICAgICAgICAgICAgICAgZ3JvdXBUaXRsZSA9IGdyb3VwVGl0bGUgKyB0aXRsZUJ5S2V5W2dyb3VwXSArICc6JztcclxuICAgICAgICAgICAgICAgICAgICB0aXRsZVdpdGhHcm91cFtncm91cF0gPSBncm91cFRpdGxlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIHRpdGxlV2l0aEdyb3VwW3NdID0gZ3JvdXBUaXRsZSArIHRpdGxlQnlLZXlbc107XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGtleXMgPSBPYmplY3Qua2V5cyh0aXRsZUJ5S2V5KTtcclxuICAgICAgICAgICAga2V5cyA9IGtleXMuc29ydCgoeCwgeSkgPT4gUS50dXJraXNoTG9jYWxlQ29tcGFyZSh0aXRsZVdpdGhHcm91cFt4XSwgdGl0bGVXaXRoR3JvdXBbeV0pKTtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiBrZXlzO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZ2V0IHZhbHVlKCk6IFVzZXJQZXJtaXNzaW9uUm93W10ge1xyXG5cclxuICAgICAgICAgICAgbGV0IHJlc3VsdDogVXNlclBlcm1pc3Npb25Sb3dbXSA9IFtdO1xyXG5cclxuICAgICAgICAgICAgZm9yIChsZXQgaXRlbSBvZiB0aGlzLnZpZXcuZ2V0SXRlbXMoKSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKGl0ZW0uR3JhbnRSZXZva2UgIT0gbnVsbCAmJiBpdGVtLktleS5jaGFyQXQoaXRlbS5LZXkubGVuZ3RoIC0gMSkgIT0gJzonKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0LnB1c2goeyBQZXJtaXNzaW9uS2V5OiBpdGVtLktleSwgR3JhbnRlZDogaXRlbS5HcmFudFJldm9rZSB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHNldCB2YWx1ZSh2YWx1ZTogVXNlclBlcm1pc3Npb25Sb3dbXSkge1xyXG5cclxuICAgICAgICAgICAgZm9yIChsZXQgaXRlbSBvZiB0aGlzLnZpZXcuZ2V0SXRlbXMoKSkge1xyXG4gICAgICAgICAgICAgICAgaXRlbS5HcmFudFJldm9rZSA9IG51bGw7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmICh2YWx1ZSAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCByb3cgb2YgdmFsdWUpIHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgciA9IHRoaXMudmlldy5nZXRJdGVtQnlJZChyb3cuUGVybWlzc2lvbktleSk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgci5HcmFudFJldm9rZSA9IFEuY29hbGVzY2Uocm93LkdyYW50ZWQsIHRydWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdGhpcy5zZXRJdGVtcyh0aGlzLmdldEl0ZW1zKCkpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJpdmF0ZSBfcm9sZVBlcm1pc3Npb25zOiBRLkRpY3Rpb25hcnk8Ym9vbGVhbj4gPSB7fTtcclxuXHJcbiAgICAgICAgZ2V0IHJvbGVQZXJtaXNzaW9ucygpOiBzdHJpbmdbXSB7XHJcbiAgICAgICAgICAgIHJldHVybiBPYmplY3Qua2V5cyh0aGlzLl9yb2xlUGVybWlzc2lvbnMpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgc2V0IHJvbGVQZXJtaXNzaW9ucyh2YWx1ZTogc3RyaW5nW10pIHtcclxuICAgICAgICAgICAgdGhpcy5fcm9sZVBlcm1pc3Npb25zID0ge307XHJcblxyXG4gICAgICAgICAgICBpZiAodmFsdWUpIHtcclxuICAgICAgICAgICAgICAgIGZvciAobGV0IGsgb2YgdmFsdWUpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9yb2xlUGVybWlzc2lvbnNba10gPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB0aGlzLnNldEl0ZW1zKHRoaXMuZ2V0SXRlbXMoKSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcml2YXRlIF9pbXBsaWNpdFBlcm1pc3Npb25zOiBRLkRpY3Rpb25hcnk8US5EaWN0aW9uYXJ5PGJvb2xlYW4+PiA9IHt9O1xyXG5cclxuICAgICAgICBzZXQgaW1wbGljaXRQZXJtaXNzaW9ucyh2YWx1ZTogUS5EaWN0aW9uYXJ5PHN0cmluZ1tdPikge1xyXG4gICAgICAgICAgICB0aGlzLl9pbXBsaWNpdFBlcm1pc3Npb25zID0ge307XHJcblxyXG4gICAgICAgICAgICBpZiAodmFsdWUpIHtcclxuICAgICAgICAgICAgICAgIGZvciAodmFyIGsgb2YgT2JqZWN0LmtleXModmFsdWUpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5faW1wbGljaXRQZXJtaXNzaW9uc1trXSA9IHRoaXMuX2ltcGxpY2l0UGVybWlzc2lvbnNba10gfHwge307XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGwgPSB2YWx1ZVtrXTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAobCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBzIG9mIGwpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9pbXBsaWNpdFBlcm1pc3Npb25zW2tdW3NdID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZXhwb3J0IGludGVyZmFjZSBQZXJtaXNzaW9uQ2hlY2tFZGl0b3JPcHRpb25zIHtcclxuICAgICAgICBzaG93UmV2b2tlPzogYm9vbGVhbjtcclxuICAgIH1cclxuXHJcbiAgICBleHBvcnQgaW50ZXJmYWNlIFBlcm1pc3Npb25DaGVja0l0ZW0ge1xyXG4gICAgICAgIFBhcmVudEtleT86IHN0cmluZztcclxuICAgICAgICBLZXk/OiBzdHJpbmc7XHJcbiAgICAgICAgVGl0bGU/OiBzdHJpbmc7XHJcbiAgICAgICAgSXNHcm91cD86IGJvb2xlYW47XHJcbiAgICAgICAgR3JhbnRSZXZva2U/OiBib29sZWFuO1xyXG4gICAgfVxyXG59IiwibmFtZXNwYWNlIFlheGllLkFkbWluaXN0cmF0aW9uIHtcclxuXHJcbiAgICBAU2VyZW5pdHkuRGVjb3JhdG9ycy5yZWdpc3RlckNsYXNzKClcclxuICAgIGV4cG9ydCBjbGFzcyBVc2VyUGVybWlzc2lvbkRpYWxvZyBleHRlbmRzIFNlcmVuaXR5LlRlbXBsYXRlZERpYWxvZzxVc2VyUGVybWlzc2lvbkRpYWxvZ09wdGlvbnM+IHtcclxuXHJcbiAgICAgICAgcHJpdmF0ZSBwZXJtaXNzaW9uczogUGVybWlzc2lvbkNoZWNrRWRpdG9yO1xyXG5cclxuICAgICAgICBjb25zdHJ1Y3RvcihvcHQ6IFVzZXJQZXJtaXNzaW9uRGlhbG9nT3B0aW9ucykge1xyXG4gICAgICAgICAgICBzdXBlcihvcHQpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5wZXJtaXNzaW9ucyA9IG5ldyBQZXJtaXNzaW9uQ2hlY2tFZGl0b3IodGhpcy5ieUlkKCdQZXJtaXNzaW9ucycpLCB7XHJcbiAgICAgICAgICAgICAgICBzaG93UmV2b2tlOiB0cnVlXHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgVXNlclBlcm1pc3Npb25TZXJ2aWNlLkxpc3Qoe1xyXG4gICAgICAgICAgICAgICAgVXNlcklEOiB0aGlzLm9wdGlvbnMudXNlcklELFxyXG4gICAgICAgICAgICAgICAgTW9kdWxlOiBudWxsLFxyXG4gICAgICAgICAgICAgICAgU3VibW9kdWxlOiBudWxsXHJcbiAgICAgICAgICAgIH0sIHJlc3BvbnNlID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMucGVybWlzc2lvbnMudmFsdWUgPSByZXNwb25zZS5FbnRpdGllcztcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICBVc2VyUGVybWlzc2lvblNlcnZpY2UuTGlzdFJvbGVQZXJtaXNzaW9ucyh7XHJcbiAgICAgICAgICAgICAgICBVc2VySUQ6IHRoaXMub3B0aW9ucy51c2VySUQsXHJcbiAgICAgICAgICAgICAgICBNb2R1bGU6IG51bGwsXHJcbiAgICAgICAgICAgICAgICBTdWJtb2R1bGU6IG51bGwsXHJcbiAgICAgICAgICAgIH0sIHJlc3BvbnNlID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMucGVybWlzc2lvbnMucm9sZVBlcm1pc3Npb25zID0gcmVzcG9uc2UuRW50aXRpZXM7XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5wZXJtaXNzaW9ucy5pbXBsaWNpdFBlcm1pc3Npb25zID0gUS5nZXRSZW1vdGVEYXRhKCdBZG1pbmlzdHJhdGlvbi5JbXBsaWNpdFBlcm1pc3Npb25zJyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0RGlhbG9nT3B0aW9ucygpOiBKUXVlcnlVSS5EaWFsb2dPcHRpb25zIHtcclxuICAgICAgICAgICAgbGV0IG9wdCA9IHN1cGVyLmdldERpYWxvZ09wdGlvbnMoKTtcclxuXHJcbiAgICAgICAgICAgIG9wdC5idXR0b25zID0gW1xyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHQ6IFEudGV4dCgnRGlhbG9ncy5Pa0J1dHRvbicpLFxyXG4gICAgICAgICAgICAgICAgICAgIGNsaWNrOiBlID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgVXNlclBlcm1pc3Npb25TZXJ2aWNlLlVwZGF0ZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBVc2VySUQ6IHRoaXMub3B0aW9ucy51c2VySUQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBQZXJtaXNzaW9uczogdGhpcy5wZXJtaXNzaW9ucy52YWx1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIE1vZHVsZTogbnVsbCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFN1Ym1vZHVsZTogbnVsbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LCByZXNwb25zZSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRpYWxvZ0Nsb3NlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cuc2V0VGltZW91dCgoKSA9PiBRLm5vdGlmeVN1Y2Nlc3MoUS50ZXh0KCdTaXRlLlVzZXJQZXJtaXNzaW9uRGlhbG9nLlNhdmVTdWNjZXNzJykpLCAwKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSwge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHQ6IFEudGV4dCgnRGlhbG9ncy5DYW5jZWxCdXR0b24nKSxcclxuICAgICAgICAgICAgICAgICAgICBjbGljazogKCkgPT4gdGhpcy5kaWFsb2dDbG9zZSgpXHJcbiAgICAgICAgICAgICAgICB9XTtcclxuXHJcbiAgICAgICAgICAgIG9wdC50aXRsZSA9IFEuZm9ybWF0KFEudGV4dCgnU2l0ZS5Vc2VyUGVybWlzc2lvbkRpYWxvZy5EaWFsb2dUaXRsZScpLFxyXG4gICAgICAgICAgICAgICAgdGhpcy5vcHRpb25zLnVzZXJuYW1lKTtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiBvcHQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0VGVtcGxhdGUoKTogc3RyaW5nIHtcclxuICAgICAgICAgICAgcmV0dXJuICc8ZGl2IGlkPVwifl9QZXJtaXNzaW9uc1wiPjwvZGl2Pic7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGV4cG9ydCBpbnRlcmZhY2UgVXNlclBlcm1pc3Npb25EaWFsb2dPcHRpb25zIHtcclxuICAgICAgICB1c2VySUQ/OiBudW1iZXI7XHJcbiAgICAgICAgdXNlcm5hbWU/OiBzdHJpbmc7XHJcbiAgICB9XHJcbn0iLCJuYW1lc3BhY2UgWWF4aWUuQWRtaW5pc3RyYXRpb24ge1xyXG5cclxuICAgIEBTZXJlbml0eS5EZWNvcmF0b3JzLnJlZ2lzdGVyRWRpdG9yKClcclxuICAgIGV4cG9ydCBjbGFzcyBSb2xlQ2hlY2tFZGl0b3IgZXh0ZW5kcyBTZXJlbml0eS5DaGVja1RyZWVFZGl0b3I8U2VyZW5pdHkuQ2hlY2tUcmVlSXRlbTxhbnk+LCBhbnk+IHtcclxuXHJcbiAgICAgICAgcHJpdmF0ZSBzZWFyY2hUZXh0OiBzdHJpbmc7XHJcblxyXG4gICAgICAgIGNvbnN0cnVjdG9yKGRpdjogSlF1ZXJ5KSB7XHJcbiAgICAgICAgICAgIHN1cGVyKGRpdik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgY3JlYXRlVG9vbGJhckV4dGVuc2lvbnMoKSB7XHJcbiAgICAgICAgICAgIHN1cGVyLmNyZWF0ZVRvb2xiYXJFeHRlbnNpb25zKCk7XHJcblxyXG4gICAgICAgICAgICBTZXJlbml0eS5HcmlkVXRpbHMuYWRkUXVpY2tTZWFyY2hJbnB1dEN1c3RvbSh0aGlzLnRvb2xiYXIuZWxlbWVudCwgKGZpZWxkLCB0ZXh0KSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNlYXJjaFRleHQgPSBTZWxlY3QyLnV0aWwuc3RyaXBEaWFjcml0aWNzKHRleHQgfHwgJycpLnRvVXBwZXJDYXNlKCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnZpZXcuc2V0SXRlbXModGhpcy52aWV3LmdldEl0ZW1zKCksIHRydWUpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRCdXR0b25zKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gW107XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0VHJlZUl0ZW1zKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gUm9sZVJvdy5nZXRMb29rdXAoKS5pdGVtcy5tYXAocm9sZSA9PiA8U2VyZW5pdHkuQ2hlY2tUcmVlSXRlbTxhbnk+PntcclxuICAgICAgICAgICAgICAgIGlkOiByb2xlLlJvbGVJZC50b1N0cmluZygpLFxyXG4gICAgICAgICAgICAgICAgdGV4dDogcm9sZS5Sb2xlTmFtZVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCBvblZpZXdGaWx0ZXIoaXRlbSkge1xyXG4gICAgICAgICAgICByZXR1cm4gc3VwZXIub25WaWV3RmlsdGVyKGl0ZW0pICYmXHJcbiAgICAgICAgICAgICAgICAoUS5pc0VtcHR5T3JOdWxsKHRoaXMuc2VhcmNoVGV4dCkgfHxcclxuICAgICAgICAgICAgICAgICBTZWxlY3QyLnV0aWwuc3RyaXBEaWFjcml0aWNzKGl0ZW0udGV4dCB8fCAnJylcclxuICAgICAgICAgICAgICAgICAgICAgLnRvVXBwZXJDYXNlKCkuaW5kZXhPZih0aGlzLnNlYXJjaFRleHQpID49IDApO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsIm5hbWVzcGFjZSBZYXhpZS5BZG1pbmlzdHJhdGlvbiB7XHJcblxyXG4gICAgQFNlcmVuaXR5LkRlY29yYXRvcnMucmVnaXN0ZXJDbGFzcygpXHJcbiAgICBleHBvcnQgY2xhc3MgVXNlclJvbGVEaWFsb2cgZXh0ZW5kcyBTZXJlbml0eS5UZW1wbGF0ZWREaWFsb2c8VXNlclJvbGVEaWFsb2dPcHRpb25zPiB7XHJcblxyXG4gICAgICAgIHByaXZhdGUgcGVybWlzc2lvbnM6IFJvbGVDaGVja0VkaXRvcjtcclxuXHJcbiAgICAgICAgY29uc3RydWN0b3Iob3B0OiBVc2VyUm9sZURpYWxvZ09wdGlvbnMpIHtcclxuICAgICAgICAgICAgc3VwZXIob3B0KTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMucGVybWlzc2lvbnMgPSBuZXcgUm9sZUNoZWNrRWRpdG9yKHRoaXMuYnlJZCgnUm9sZXMnKSk7XHJcblxyXG4gICAgICAgICAgICBVc2VyUm9sZVNlcnZpY2UuTGlzdCh7XHJcbiAgICAgICAgICAgICAgICBVc2VySUQ6IHRoaXMub3B0aW9ucy51c2VySURcclxuICAgICAgICAgICAgfSwgcmVzcG9uc2UgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wZXJtaXNzaW9ucy52YWx1ZSA9IHJlc3BvbnNlLkVudGl0aWVzLm1hcCh4ID0+IHgudG9TdHJpbmcoKSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIGdldERpYWxvZ09wdGlvbnMoKSB7XHJcbiAgICAgICAgICAgIHZhciBvcHQgPSBzdXBlci5nZXREaWFsb2dPcHRpb25zKCk7XHJcblxyXG4gICAgICAgICAgICBvcHQuYnV0dG9ucyA9IFt7XHJcbiAgICAgICAgICAgICAgICB0ZXh0OiBRLnRleHQoJ0RpYWxvZ3MuT2tCdXR0b24nKSxcclxuICAgICAgICAgICAgICAgIGNsaWNrOiAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgUS5zZXJ2aWNlUmVxdWVzdCgnQWRtaW5pc3RyYXRpb24vVXNlclJvbGUvVXBkYXRlJywge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBVc2VySUQ6IHRoaXMub3B0aW9ucy51c2VySUQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFJvbGVzOiB0aGlzLnBlcm1pc3Npb25zLnZhbHVlLm1hcCh4ID0+IHBhcnNlSW50KHgsIDEwKSlcclxuICAgICAgICAgICAgICAgICAgICB9LCByZXNwb25zZSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZGlhbG9nQ2xvc2UoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgUS5ub3RpZnlTdWNjZXNzKFEudGV4dCgnU2l0ZS5Vc2VyUm9sZURpYWxvZy5TYXZlU3VjY2VzcycpKTtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSwge1xyXG4gICAgICAgICAgICAgICAgdGV4dDogUS50ZXh0KCdEaWFsb2dzLkNhbmNlbEJ1dHRvbicpLFxyXG4gICAgICAgICAgICAgICAgY2xpY2s6ICgpID0+IHRoaXMuZGlhbG9nQ2xvc2UoKVxyXG4gICAgICAgICAgICB9XTtcclxuXHJcbiAgICAgICAgICAgIG9wdC50aXRsZSA9IFEuZm9ybWF0KFEudGV4dCgnU2l0ZS5Vc2VyUm9sZURpYWxvZy5EaWFsb2dUaXRsZScpLCB0aGlzLm9wdGlvbnMudXNlcm5hbWUpO1xyXG4gICAgICAgICAgICByZXR1cm4gb3B0O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIGdldFRlbXBsYXRlKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gXCI8ZGl2IGlkPSd+X1JvbGVzJz48L2Rpdj5cIjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZXhwb3J0IGludGVyZmFjZSBVc2VyUm9sZURpYWxvZ09wdGlvbnMge1xyXG4gICAgICAgIHVzZXJJRDogbnVtYmVyO1xyXG4gICAgICAgIHVzZXJuYW1lOiBzdHJpbmc7XHJcbiAgICB9XHJcbn0iLCJuYW1lc3BhY2UgWWF4aWUuTGFuZ3VhZ2VMaXN0IHtcclxuICAgIGV4cG9ydCBmdW5jdGlvbiBnZXRWYWx1ZSgpIHtcclxuICAgICAgICB2YXIgcmVzdWx0OiBzdHJpbmdbXVtdID0gW107XHJcbiAgICAgICAgZm9yICh2YXIgayBvZiBBZG1pbmlzdHJhdGlvbi5MYW5ndWFnZVJvdy5nZXRMb29rdXAoKS5pdGVtcykge1xyXG4gICAgICAgICAgICBpZiAoay5MYW5ndWFnZUlkICE9PSAnZW4nKSB7XHJcbiAgICAgICAgICAgICAgICByZXN1bHQucHVzaChbay5JZC50b1N0cmluZygpLCBrLkxhbmd1YWdlTmFtZV0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICB9XHJcbn1cclxuIiwiLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uL0NvbW1vbi9IZWxwZXJzL0xhbmd1YWdlTGlzdC50c1wiIC8+XHJcblxyXG5uYW1lc3BhY2UgWWF4aWUuU2NyaXB0SW5pdGlhbGl6YXRpb24ge1xyXG4gICAgUS5Db25maWcucmVzcG9uc2l2ZURpYWxvZ3MgPSB0cnVlO1xyXG4gICAgUS5Db25maWcucm9vdE5hbWVzcGFjZXMucHVzaCgnWWF4aWUnKTtcclxuICAgIFNlcmVuaXR5LkVudGl0eURpYWxvZy5kZWZhdWx0TGFuZ3VhZ2VMaXN0ID0gTGFuZ3VhZ2VMaXN0LmdldFZhbHVlO1xyXG5cclxuICAgIGlmICgkLmZuWydjb2xvcmJveCddKSB7XHJcbiAgICAgICAgJC5mblsnY29sb3Jib3gnXS5zZXR0aW5ncy5tYXhXaWR0aCA9IFwiOTUlXCI7XHJcbiAgICAgICAgJC5mblsnY29sb3Jib3gnXS5zZXR0aW5ncy5tYXhIZWlnaHQgPSBcIjk1JVwiO1xyXG4gICAgfVxyXG5cclxuICAgIHdpbmRvdy5vbmVycm9yID0gUS5FcnJvckhhbmRsaW5nLnJ1bnRpbWVFcnJvckhhbmRsZXI7XHJcbn0iLCJuYW1lc3BhY2UgWWF4aWUge1xyXG5cclxuICAgIGV4cG9ydCBjbGFzcyBCYXNpY1Byb2dyZXNzRGlhbG9nIGV4dGVuZHMgU2VyZW5pdHkuVGVtcGxhdGVkRGlhbG9nPGFueT4ge1xyXG5cclxuICAgICAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICAgICAgc3VwZXIoKTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuYnlJZCgnUHJvZ3Jlc3NCYXInKS5wcm9ncmVzc2Jhcih7XHJcbiAgICAgICAgICAgICAgICBtYXg6IDEwMCxcclxuICAgICAgICAgICAgICAgIHZhbHVlOiAwLFxyXG4gICAgICAgICAgICAgICAgY2hhbmdlOiAoZSwgdikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYnlJZCgnUHJvZ3Jlc3NMYWJlbCcpLnRleHQodGhpcy52YWx1ZSArICcgLyAnICsgdGhpcy5tYXgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBjYW5jZWxsZWQ6IGJvb2xlYW47XHJcblxyXG4gICAgICAgIHB1YmxpYyBnZXQgbWF4KCk6IG51bWJlciB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmJ5SWQoJ1Byb2dyZXNzQmFyJykucHJvZ3Jlc3NiYXIoKS5wcm9ncmVzc2Jhcignb3B0aW9uJywgJ21heCcpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIHNldCBtYXgodmFsdWU6IG51bWJlcikge1xyXG4gICAgICAgICAgICB0aGlzLmJ5SWQoJ1Byb2dyZXNzQmFyJykucHJvZ3Jlc3NiYXIoKS5wcm9ncmVzc2Jhcignb3B0aW9uJywgJ21heCcsIHZhbHVlKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBnZXQgdmFsdWUoKTogbnVtYmVyIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuYnlJZCgnUHJvZ3Jlc3NCYXInKS5wcm9ncmVzc2JhcigndmFsdWUnKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBzZXQgdmFsdWUodmFsdWU6IG51bWJlcikge1xyXG4gICAgICAgICAgICB0aGlzLmJ5SWQoJ1Byb2dyZXNzQmFyJykucHJvZ3Jlc3NiYXIoKS5wcm9ncmVzc2JhcigndmFsdWUnLCB2YWx1ZSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgZ2V0IHRpdGxlKCk6IHN0cmluZyB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmVsZW1lbnQuZGlhbG9nKCkuZGlhbG9nKCdvcHRpb24nLCAndGl0bGUnKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBzZXQgdGl0bGUodmFsdWU6IHN0cmluZykge1xyXG4gICAgICAgICAgICB0aGlzLmVsZW1lbnQuZGlhbG9nKCkuZGlhbG9nKCdvcHRpb24nLCAndGl0bGUnLCB2YWx1ZSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgY2FuY2VsVGl0bGU6IHN0cmluZztcclxuXHJcbiAgICAgICAgZ2V0RGlhbG9nT3B0aW9ucygpIHtcclxuICAgICAgICAgICAgdmFyIG9wdCA9IHN1cGVyLmdldERpYWxvZ09wdGlvbnMoKTtcclxuICAgICAgICAgICAgb3B0LnRpdGxlID0gUS50ZXh0KCdTaXRlLkJhc2ljUHJvZ3Jlc3NEaWFsb2cuUGxlYXNlV2FpdCcpO1xyXG4gICAgICAgICAgICBvcHQud2lkdGggPSA2MDA7XHJcbiAgICAgICAgICAgIG9wdC5idXR0b25zID0gW3tcclxuICAgICAgICAgICAgICAgIHRleHQ6IFEudGV4dCgnRGlhbG9ncy5DYW5jZWxCdXR0b24nKSxcclxuICAgICAgICAgICAgICAgIGNsaWNrOiAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jYW5jZWxsZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZWxlbWVudC5jbG9zZXN0KCcudWktZGlhbG9nJylcclxuICAgICAgICAgICAgICAgICAgICAgICAgLmZpbmQoJy51aS1kaWFsb2ctYnV0dG9ucGFuZSAudWktYnV0dG9uJylcclxuICAgICAgICAgICAgICAgICAgICAgICAgLmF0dHIoJ2Rpc2FibGVkJywgJ2Rpc2FibGVkJylcclxuICAgICAgICAgICAgICAgICAgICAgICAgLmNzcygnb3BhY2l0eScsICcwLjUnKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5lbGVtZW50LmRpYWxvZygnb3B0aW9uJywgJ3RpdGxlJywgUS50cmltVG9OdWxsKHRoaXMuY2FuY2VsVGl0bGUpIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFEudGV4dCgnU2l0ZS5CYXNpY1Byb2dyZXNzRGlhbG9nLkNhbmNlbFRpdGxlJykpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XTtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiBvcHQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpbml0RGlhbG9nKCkge1xyXG4gICAgICAgICAgICBzdXBlci5pbml0RGlhbG9nKCk7XHJcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudC5jbG9zZXN0KCcudWktZGlhbG9nJykuZmluZCgnLnVpLWRpYWxvZy10aXRsZWJhci1jbG9zZScpLmhpZGUoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGdldFRlbXBsYXRlKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgXCI8ZGl2IGNsYXNzPSdzLURpYWxvZ0NvbnRlbnQgcy1CYXNpY1Byb2dyZXNzRGlhbG9nQ29udGVudCc+XCIgK1xyXG4gICAgICAgICAgICAgICAgICAgIFwiPGRpdiBpZD0nfl9TdGF0dXNUZXh0JyBjbGFzcz0nc3RhdHVzLXRleHQnID48L2Rpdj5cIiArXHJcbiAgICAgICAgICAgICAgICAgICAgXCI8ZGl2IGlkPSd+X1Byb2dyZXNzQmFyJyBjbGFzcz0ncHJvZ3Jlc3MtYmFyJz5cIiArXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiPGRpdiBpZD0nfl9Qcm9ncmVzc0xhYmVsJyBjbGFzcz0ncHJvZ3Jlc3MtbGFiZWwnID48L2Rpdj5cIiArXHJcbiAgICAgICAgICAgICAgICAgICAgXCI8L2Rpdj5cIiArXHJcbiAgICAgICAgICAgICAgICBcIjwvZGl2PlwiKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCJuYW1lc3BhY2UgWWF4aWUuQ29tbW9uIHtcclxuXHJcbiAgICBleHBvcnQgY2xhc3MgQnVsa1NlcnZpY2VBY3Rpb24ge1xyXG5cclxuICAgICAgICBwcm90ZWN0ZWQga2V5czogc3RyaW5nW107XHJcbiAgICAgICAgcHJvdGVjdGVkIHF1ZXVlOiBzdHJpbmdbXTtcclxuICAgICAgICBwcm90ZWN0ZWQgcXVldWVJbmRleDogbnVtYmVyO1xyXG4gICAgICAgIHByb3RlY3RlZCBwcm9ncmVzc0RpYWxvZzogQmFzaWNQcm9ncmVzc0RpYWxvZztcclxuICAgICAgICBwcm90ZWN0ZWQgcGVuZGluZ1JlcXVlc3RzOiBudW1iZXI7XHJcbiAgICAgICAgcHJvdGVjdGVkIGNvbXBsZXRlZFJlcXVlc3RzOiBudW1iZXI7XHJcbiAgICAgICAgcHJvdGVjdGVkIGVycm9yQnlLZXk6IFEuRGljdGlvbmFyeTxTZXJlbml0eS5TZXJ2aWNlRXJyb3I+O1xyXG4gICAgICAgIHByaXZhdGUgc3VjY2Vzc0NvdW50O1xyXG4gICAgICAgIHByaXZhdGUgZXJyb3JDb3VudDtcclxuICAgICAgICBwdWJsaWMgZG9uZTogKCkgPT4gdm9pZDtcclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIGNyZWF0ZVByb2dyZXNzRGlhbG9nKCkge1xyXG4gICAgICAgICAgICB0aGlzLnByb2dyZXNzRGlhbG9nID0gbmV3IEJhc2ljUHJvZ3Jlc3NEaWFsb2coKTtcclxuICAgICAgICAgICAgdGhpcy5wcm9ncmVzc0RpYWxvZy5kaWFsb2dPcGVuKCk7XHJcbiAgICAgICAgICAgIHRoaXMucHJvZ3Jlc3NEaWFsb2cubWF4ID0gdGhpcy5rZXlzLmxlbmd0aDtcclxuICAgICAgICAgICAgdGhpcy5wcm9ncmVzc0RpYWxvZy52YWx1ZSA9IDA7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0Q29uZmlybWF0aW9uRm9ybWF0KCkge1xyXG4gICAgICAgICAgICByZXR1cm4gUS50ZXh0KCdTaXRlLkJ1bGtTZXJ2aWNlQWN0aW9uLkNvbmZpcm1hdGlvbkZvcm1hdCcpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIGdldENvbmZpcm1hdGlvbk1lc3NhZ2UodGFyZ2V0Q291bnQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIFEuZm9ybWF0KHRoaXMuZ2V0Q29uZmlybWF0aW9uRm9ybWF0KCksIHRhcmdldENvdW50KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCBjb25maXJtKHRhcmdldENvdW50LCBhY3Rpb24pIHtcclxuICAgICAgICAgICAgUS5jb25maXJtKHRoaXMuZ2V0Q29uZmlybWF0aW9uTWVzc2FnZSh0YXJnZXRDb3VudCksIGFjdGlvbik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0Tm90aGluZ1RvUHJvY2Vzc01lc3NhZ2UoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBRLnRleHQoJ1NpdGUuQnVsa1NlcnZpY2VBY3Rpb24uTm90aGluZ1RvUHJvY2VzcycpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIG5vdGhpbmdUb1Byb2Nlc3MoKSB7XHJcbiAgICAgICAgICAgIFEubm90aWZ5RXJyb3IodGhpcy5nZXROb3RoaW5nVG9Qcm9jZXNzTWVzc2FnZSgpKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRQYXJhbGxlbFJlcXVlc3RzKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gMTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRCYXRjaFNpemUoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiAxO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIHN0YXJ0UGFyYWxsZWxFeGVjdXRpb24oKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY3JlYXRlUHJvZ3Jlc3NEaWFsb2coKTtcclxuICAgICAgICAgICAgdGhpcy5zdWNjZXNzQ291bnQgPSAwO1xyXG4gICAgICAgICAgICB0aGlzLmVycm9yQ291bnQgPSAwO1xyXG4gICAgICAgICAgICB0aGlzLnBlbmRpbmdSZXF1ZXN0cyA9IDA7XHJcbiAgICAgICAgICAgIHRoaXMuY29tcGxldGVkUmVxdWVzdHMgPSAwO1xyXG4gICAgICAgICAgICB0aGlzLmVycm9yQ291bnQgPSAwO1xyXG4gICAgICAgICAgICB0aGlzLmVycm9yQnlLZXkgPSB7fTtcclxuICAgICAgICAgICAgdGhpcy5xdWV1ZSA9IHRoaXMua2V5cy5zbGljZSgpO1xyXG4gICAgICAgICAgICB0aGlzLnF1ZXVlSW5kZXggPSAwO1xyXG4gICAgICAgICAgICB2YXIgcGFyYWxsZWxSZXF1ZXN0cyA9IHRoaXMuZ2V0UGFyYWxsZWxSZXF1ZXN0cygpO1xyXG4gICAgICAgICAgICB3aGlsZSAocGFyYWxsZWxSZXF1ZXN0cy0tID4gMCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5leGVjdXRlTmV4dEJhdGNoKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCBzZXJ2aWNlQ2FsbENsZWFudXAoKSB7XHJcbiAgICAgICAgICAgIHRoaXMucGVuZGluZ1JlcXVlc3RzLS07XHJcbiAgICAgICAgICAgIHRoaXMuY29tcGxldGVkUmVxdWVzdHMrKztcclxuXHJcbiAgICAgICAgICAgIHZhciB0aXRsZSA9IFEudGV4dCgodGhpcy5wcm9ncmVzc0RpYWxvZy5jYW5jZWxsZWQgP1xyXG4gICAgICAgICAgICAgICAgJ1NpdGUuQmFzaWNQcm9ncmVzc0RpYWxvZy5DYW5jZWxUaXRsZScgOiAnU2l0ZS5CYXNpY1Byb2dyZXNzRGlhbG9nLlBsZWFzZVdhaXQnKSk7XHJcblxyXG4gICAgICAgICAgICB0aXRsZSArPSAnICgnO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5zdWNjZXNzQ291bnQgPiAwKSB7XHJcbiAgICAgICAgICAgICAgICB0aXRsZSArPSBRLmZvcm1hdChRLnRleHQoJ1NpdGUuQnVsa1NlcnZpY2VBY3Rpb24uU3VjY2Vzc0NvdW50JyksIHRoaXMuc3VjY2Vzc0NvdW50KTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKHRoaXMuZXJyb3JDb3VudCA+IDApIHtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnN1Y2Nlc3NDb3VudCA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICB0aXRsZSArPSAnLCAnO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIHRpdGxlICs9IFEuZm9ybWF0KFEudGV4dCgnU2l0ZS5CdWxrU2VydmljZUFjdGlvbi5FcnJvckNvdW50JyksIHRoaXMuZXJyb3JDb3VudCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHRoaXMucHJvZ3Jlc3NEaWFsb2cudGl0bGUgPSB0aXRsZSArICcpJztcclxuICAgICAgICAgICAgdGhpcy5wcm9ncmVzc0RpYWxvZy52YWx1ZSA9IHRoaXMuc3VjY2Vzc0NvdW50ICsgdGhpcy5lcnJvckNvdW50O1xyXG4gICAgICAgICAgICBpZiAoIXRoaXMucHJvZ3Jlc3NEaWFsb2cuY2FuY2VsbGVkICYmIHRoaXMucHJvZ3Jlc3NEaWFsb2cudmFsdWUgPCB0aGlzLmtleXMubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmV4ZWN1dGVOZXh0QmF0Y2goKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgZWxzZSBpZiAodGhpcy5wZW5kaW5nUmVxdWVzdHMgPT09IDApIHtcclxuICAgICAgICAgICAgICAgIHRoaXMucHJvZ3Jlc3NEaWFsb2cuZGlhbG9nQ2xvc2UoKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2hvd1Jlc3VsdHMoKTtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmRvbmUpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmRvbmUoKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmRvbmUgPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgZXhlY3V0ZUZvckJhdGNoKGJhdGNoOiBzdHJpbmdbXSkge1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIGV4ZWN1dGVOZXh0QmF0Y2goKSB7XHJcbiAgICAgICAgICAgIHZhciBiYXRjaFNpemUgPSB0aGlzLmdldEJhdGNoU2l6ZSgpO1xyXG4gICAgICAgICAgICB2YXIgYmF0Y2ggPSBbXTtcclxuICAgICAgICAgICAgd2hpbGUgKHRydWUpIHtcclxuICAgICAgICAgICAgICAgIGlmIChiYXRjaC5sZW5ndGggPj0gYmF0Y2hTaXplKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMucXVldWVJbmRleCA+PSB0aGlzLnF1ZXVlLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGJhdGNoLnB1c2godGhpcy5xdWV1ZVt0aGlzLnF1ZXVlSW5kZXgrK10pO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoYmF0Y2gubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wZW5kaW5nUmVxdWVzdHMrKztcclxuICAgICAgICAgICAgICAgIHRoaXMuZXhlY3V0ZUZvckJhdGNoKGJhdGNoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIGdldEFsbEhhZEVycm9yc0Zvcm1hdCgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIFEudGV4dCgnU2l0ZS5CdWxrU2VydmljZUFjdGlvbi5BbGxIYWRFcnJvcnNGb3JtYXQnKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCBzaG93QWxsSGFkRXJyb3JzKCkge1xyXG4gICAgICAgICAgICBRLm5vdGlmeUVycm9yKFEuZm9ybWF0KHRoaXMuZ2V0QWxsSGFkRXJyb3JzRm9ybWF0KCksIHRoaXMuZXJyb3JDb3VudCkpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIGdldFNvbWVIYWRFcnJvcnNGb3JtYXQoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBRLnRleHQoJ1NpdGUuQnVsa1NlcnZpY2VBY3Rpb24uU29tZUhhZEVycm9yc0Zvcm1hdCcpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIHNob3dTb21lSGFkRXJyb3JzKCkge1xyXG4gICAgICAgICAgICBRLm5vdGlmeVdhcm5pbmcoUS5mb3JtYXQodGhpcy5nZXRTb21lSGFkRXJyb3JzRm9ybWF0KCksIHRoaXMuc3VjY2Vzc0NvdW50LCB0aGlzLmVycm9yQ291bnQpKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRBbGxTdWNjZXNzRm9ybWF0KCkge1xyXG4gICAgICAgICAgICByZXR1cm4gUS50ZXh0KCdTaXRlLkJ1bGtTZXJ2aWNlQWN0aW9uLkFsbFN1Y2Nlc3NGb3JtYXQnKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCBzaG93QWxsU3VjY2VzcygpIHtcclxuICAgICAgICAgICAgUS5ub3RpZnlTdWNjZXNzKFEuZm9ybWF0KHRoaXMuZ2V0QWxsU3VjY2Vzc0Zvcm1hdCgpLCB0aGlzLnN1Y2Nlc3NDb3VudCkpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIHNob3dSZXN1bHRzKCkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5lcnJvckNvdW50ID09PSAwICYmIHRoaXMuc3VjY2Vzc0NvdW50ID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm5vdGhpbmdUb1Byb2Nlc3MoKTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKHRoaXMuZXJyb3JDb3VudCA+IDAgJiYgdGhpcy5zdWNjZXNzQ291bnQgPT09IDApIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2hvd0FsbEhhZEVycm9ycygpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAodGhpcy5lcnJvckNvdW50ID4gMCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zaG93U29tZUhhZEVycm9ycygpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB0aGlzLnNob3dBbGxTdWNjZXNzKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgZXhlY3V0ZShrZXlzOiBzdHJpbmdbXSkge1xyXG4gICAgICAgICAgICB0aGlzLmtleXMgPSBrZXlzO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5rZXlzLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5ub3RoaW5nVG9Qcm9jZXNzKCk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5jb25maXJtKHRoaXMua2V5cy5sZW5ndGgsICgpID0+IHRoaXMuc3RhcnRQYXJhbGxlbEV4ZWN1dGlvbigpKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGdldF9zdWNjZXNzQ291bnQoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnN1Y2Nlc3NDb3VudDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHNldF9zdWNjZXNzQ291bnQodmFsdWU6IG51bWJlcikge1xyXG4gICAgICAgICAgICB0aGlzLnN1Y2Nlc3NDb3VudCA9IHZhbHVlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZ2V0X2Vycm9yQ291bnQoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmVycm9yQ291bnQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBzZXRfZXJyb3JDb3VudCh2YWx1ZTogbnVtYmVyKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZXJyb3JDb3VudCA9IHZhbHVlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsIm5hbWVzcGFjZSBZYXhpZS5EaWFsb2dVdGlscyB7XHJcbiAgICBleHBvcnQgZnVuY3Rpb24gcGVuZGluZ0NoYW5nZXNDb25maXJtYXRpb24oZWxlbWVudDogSlF1ZXJ5LCBoYXNQZW5kaW5nQ2hhbmdlczogKCkgPT4gYm9vbGVhbikge1xyXG4gICAgICAgIGVsZW1lbnQub24oJ2RpYWxvZ2JlZm9yZWNsb3NlIHBhbmVsYmVmb3JlY2xvc2UnLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICBpZiAoIVNlcmVuaXR5LldYLmhhc09yaWdpbmFsRXZlbnQoZSkgfHwgIWhhc1BlbmRpbmdDaGFuZ2VzKCkpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICBRLmNvbmZpcm0oJ1lvdSBoYXZlIHBlbmRpbmcgY2hhbmdlcy4gU2F2ZSB0aGVtPycsXHJcbiAgICAgICAgICAgICAgICAoKSA9PiBlbGVtZW50LmZpbmQoJ2Rpdi5zYXZlLWFuZC1jbG9zZS1idXR0b24nKS5jbGljaygpLFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIG9uTm86IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGVsZW1lbnQuaGFzQ2xhc3MoJ3VpLWRpYWxvZy1jb250ZW50JykpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50LmRpYWxvZygnY2xvc2UnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoZWxlbWVudC5oYXNDbGFzcygncy1QYW5lbCcpKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgU2VyZW5pdHkuVGVtcGxhdGVkRGlhbG9nLmNsb3NlUGFuZWwoZWxlbWVudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuIiwibmFtZXNwYWNlIFlheGllLkNvbW1vbiB7XHJcblxyXG4gICAgQFNlcmVuaXR5LkRlY29yYXRvcnMucmVnaXN0ZXJGb3JtYXR0ZXIoKVxyXG4gICAgZXhwb3J0IGNsYXNzIEVudW1TZWxlY3RGb3JtYXR0ZXIgaW1wbGVtZW50cyBTbGljay5Gb3JtYXR0ZXIge1xyXG4gICAgICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgICAgICB0aGlzLmFsbG93Q2xlYXIgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZm9ybWF0KGN0eDogU2xpY2suRm9ybWF0dGVyQ29udGV4dCkge1xyXG4gICAgICAgICAgICB2YXIgZW51bVR5cGUgPSBTZXJlbml0eS5FbnVtVHlwZVJlZ2lzdHJ5LmdldCh0aGlzLmVudW1LZXkpO1xyXG5cclxuICAgICAgICAgICAgdmFyIHNiID0gXCI8c2VsZWN0PlwiO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5hbGxvd0NsZWFyKSB7XHJcbiAgICAgICAgICAgICAgICBzYiArPSAnPG9wdGlvbiB2YWx1ZT1cIlwiPic7XHJcbiAgICAgICAgICAgICAgICBzYiArPSBRLmh0bWxFbmNvZGUodGhpcy5lbXB0eUl0ZW1UZXh0IHx8IFEudGV4dChcIkNvbnRyb2xzLlNlbGVjdEVkaXRvci5FbXB0eUl0ZW1UZXh0XCIpKTtcclxuICAgICAgICAgICAgICAgIHNiICs9ICc8L29wdGlvbj4nO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBmb3IgKHZhciB4IG9mIE9iamVjdC5rZXlzKGVudW1UeXBlKS5maWx0ZXIodiA9PiAhaXNOYU4ocGFyc2VJbnQodiwgMTApKSkpIHtcclxuICAgICAgICAgICAgICAgIHNiICs9ICc8b3B0aW9uIHZhbHVlPVwiJyArIHggKyAnXCInO1xyXG4gICAgICAgICAgICAgICAgaWYgKHggPT0gY3R4LnZhbHVlKVxyXG4gICAgICAgICAgICAgICAgICAgIHNiICs9IFwiIHNlbGVjdGVkXCI7XHJcbiAgICAgICAgICAgICAgICB2YXIgbmFtZSA9IGVudW1UeXBlW3hdO1xyXG4gICAgICAgICAgICAgICAgc2IgKz0gXCI+XCI7XHJcbiAgICAgICAgICAgICAgICBzYiArPSBRLmh0bWxFbmNvZGUoUS50cnlHZXRUZXh0KFwiRW51bXMuXCIgKyB0aGlzLmVudW1LZXkgKyBcIi5cIiArIG5hbWUpIHx8IG5hbWUpO1xyXG4gICAgICAgICAgICAgICAgc2IgKz0gXCI8L29wdGlvbj5cIjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgc2IgKz0gXCI8L3NlbGVjdD5cIjtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiBzYjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIEBTZXJlbml0eS5EZWNvcmF0b3JzLm9wdGlvbigpXHJcbiAgICAgICAgcHVibGljIGVudW1LZXk6IHN0cmluZztcclxuXHJcbiAgICAgICAgQFNlcmVuaXR5LkRlY29yYXRvcnMub3B0aW9uKClcclxuICAgICAgICBwdWJsaWMgYWxsb3dDbGVhcjogYm9vbGVhbjtcclxuXHJcbiAgICAgICAgQFNlcmVuaXR5LkRlY29yYXRvcnMub3B0aW9uKClcclxuICAgICAgICBwdWJsaWMgZW1wdHlJdGVtVGV4dDogc3RyaW5nO1xyXG4gICAgfVxyXG59IiwibmFtZXNwYWNlIFlheGllLkNvbW1vbiB7XHJcblxyXG4gICAgZXhwb3J0IGludGVyZmFjZSBFeGNlbEV4cG9ydE9wdGlvbnMge1xyXG4gICAgICAgIGdyaWQ6IFNlcmVuaXR5LkRhdGFHcmlkPGFueSwgYW55PjtcclxuICAgICAgICBzZXJ2aWNlOiBzdHJpbmc7XHJcbiAgICAgICAgb25WaWV3U3VibWl0OiAoKSA9PiBib29sZWFuO1xyXG4gICAgICAgIHRpdGxlPzogc3RyaW5nO1xyXG4gICAgICAgIGhpbnQ/OiBzdHJpbmc7XHJcbiAgICAgICAgc2VwYXJhdG9yPzogYm9vbGVhbjtcclxuICAgIH1cclxuXHJcbiAgICBleHBvcnQgbmFtZXNwYWNlIEV4Y2VsRXhwb3J0SGVscGVyIHtcclxuXHJcbiAgICAgICAgZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVRvb2xCdXR0b24ob3B0aW9uczogRXhjZWxFeHBvcnRPcHRpb25zKTogU2VyZW5pdHkuVG9vbEJ1dHRvbiB7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgaGludDogUS5jb2FsZXNjZShvcHRpb25zLmhpbnQsICdFeGNlbCcpLFxyXG4gICAgICAgICAgICAgICAgdGl0bGU6IFEuY29hbGVzY2Uob3B0aW9ucy50aXRsZSwgJycpLFxyXG4gICAgICAgICAgICAgICAgY3NzQ2xhc3M6ICdleHBvcnQteGxzeC1idXR0b24nLFxyXG4gICAgICAgICAgICAgICAgb25DbGljazogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICghb3B0aW9ucy5vblZpZXdTdWJtaXQoKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBsZXQgZ3JpZCA9IG9wdGlvbnMuZ3JpZDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHJlcXVlc3QgPSBRLmRlZXBDbG9uZShncmlkLmdldFZpZXcoKS5wYXJhbXMpIGFzIFNlcmVuaXR5Lkxpc3RSZXF1ZXN0O1xyXG4gICAgICAgICAgICAgICAgICAgIHJlcXVlc3QuVGFrZSA9IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVxdWVzdC5Ta2lwID0gMDtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgc29ydEJ5ID0gZ3JpZC5nZXRWaWV3KCkuc29ydEJ5O1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChzb3J0QnkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWVzdC5Tb3J0ID0gc29ydEJ5O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgcmVxdWVzdC5JbmNsdWRlQ29sdW1ucyA9IFtdO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBjb2x1bW5zID0gZ3JpZC5nZXRHcmlkKCkuZ2V0Q29sdW1ucygpO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGNvbHVtbiBvZiBjb2x1bW5zKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVlc3QuSW5jbHVkZUNvbHVtbnMucHVzaChjb2x1bW4uaWQgfHwgY29sdW1uLmZpZWxkKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgUS5wb3N0VG9TZXJ2aWNlKHsgc2VydmljZTogb3B0aW9ucy5zZXJ2aWNlLCByZXF1ZXN0OiByZXF1ZXN0LCB0YXJnZXQ6ICdfYmxhbmsnIH0pO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHNlcGFyYXRvcjogb3B0aW9ucy5zZXBhcmF0b3JcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCJuYW1lc3BhY2UgWWF4aWUuQ29tbW9uIHtcclxuXHJcbiAgICBAU2VyZW5pdHkuRGVjb3JhdG9ycy5yZWdpc3RlckNsYXNzKFtTZXJlbml0eS5JR2V0RWRpdFZhbHVlLCBTZXJlbml0eS5JU2V0RWRpdFZhbHVlXSlcclxuICAgIEBTZXJlbml0eS5EZWNvcmF0b3JzLmVkaXRvcigpXHJcbiAgICBAU2VyZW5pdHkuRGVjb3JhdG9ycy5lbGVtZW50KFwiPGRpdi8+XCIpXHJcbiAgICBleHBvcnQgY2xhc3MgR3JpZEVkaXRvckJhc2U8VEVudGl0eT4gZXh0ZW5kcyBTZXJlbml0eS5FbnRpdHlHcmlkPFRFbnRpdHksIGFueT5cclxuICAgICAgICBpbXBsZW1lbnRzIFNlcmVuaXR5LklHZXRFZGl0VmFsdWUsIFNlcmVuaXR5LklTZXRFZGl0VmFsdWUge1xyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0SWRQcm9wZXJ0eSgpIHsgcmV0dXJuIFwiX19pZFwiOyB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCBuZXh0SWQgPSAxO1xyXG5cclxuICAgICAgICBjb25zdHJ1Y3Rvcihjb250YWluZXI6IEpRdWVyeSkge1xyXG4gICAgICAgICAgICBzdXBlcihjb250YWluZXIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIGlkKGVudGl0eTogVEVudGl0eSkge1xyXG4gICAgICAgICAgICByZXR1cm4gKGVudGl0eSBhcyBhbnkpW3RoaXMuZ2V0SWRQcm9wZXJ0eSgpXTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCBnZXROZXh0SWQoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBcImBcIiArIHRoaXMubmV4dElkKys7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgc2V0TmV3SWQoZW50aXR5OiBURW50aXR5KSB7XHJcbiAgICAgICAgICAgIGVudGl0eVt0aGlzLmdldElkUHJvcGVydHkoKV0gPSB0aGlzLmdldE5leHRJZCgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIHNhdmUob3B0OiBTZXJlbml0eS5TZXJ2aWNlT3B0aW9uczxhbnk+LCBjYWxsYmFjazogKHI6IFNlcmVuaXR5LlNlcnZpY2VSZXNwb25zZSkgPT4gdm9pZCkge1xyXG4gICAgICAgICAgICB2YXIgcmVxdWVzdCA9IG9wdC5yZXF1ZXN0IGFzIFNlcmVuaXR5LlNhdmVSZXF1ZXN0PFRFbnRpdHk+O1xyXG4gICAgICAgICAgICB2YXIgcm93ID0gUS5kZWVwQ2xvbmUocmVxdWVzdC5FbnRpdHkpO1xyXG5cclxuICAgICAgICAgICAgdmFyIGlkID0gdGhpcy5pZChyb3cpO1xyXG4gICAgICAgICAgICBpZiAoaWQgPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgKHJvdyBhcyBhbnkpW3RoaXMuZ2V0SWRQcm9wZXJ0eSgpXSA9IHRoaXMuZ2V0TmV4dElkKCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmICghdGhpcy52YWxpZGF0ZUVudGl0eShyb3csIGlkKSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB2YXIgaXRlbXMgPSB0aGlzLnZpZXcuZ2V0SXRlbXMoKS5zbGljZSgpO1xyXG4gICAgICAgICAgICBpZiAoaWQgPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgaXRlbXMucHVzaChyb3cpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdmFyIGluZGV4ID0gUS5pbmRleE9mKGl0ZW1zLCB4ID0+IHRoaXMuaWQoeCkgPT09IGlkKTtcclxuICAgICAgICAgICAgICAgIGl0ZW1zW2luZGV4XSA9IFEuZGVlcENsb25lKHt9IGFzIFRFbnRpdHksIGl0ZW1zW2luZGV4XSwgcm93KTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdGhpcy5zZXRFbnRpdGllcyhpdGVtcyk7XHJcbiAgICAgICAgICAgIGNhbGxiYWNrKHt9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCBkZWxldGVFbnRpdHkoaWQ6IG51bWJlcikge1xyXG4gICAgICAgICAgICB0aGlzLnZpZXcuZGVsZXRlSXRlbShpZCk7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIHZhbGlkYXRlRW50aXR5KHJvdzogVEVudGl0eSwgaWQ6IG51bWJlcikge1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCBzZXRFbnRpdGllcyhpdGVtczogVEVudGl0eVtdKSB7XHJcbiAgICAgICAgICAgIHRoaXMudmlldy5zZXRJdGVtcyhpdGVtcywgdHJ1ZSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0TmV3RW50aXR5KCk6IFRFbnRpdHkge1xyXG4gICAgICAgICAgICByZXR1cm4ge30gYXMgVEVudGl0eTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRCdXR0b25zKCk6IFNlcmVuaXR5LlRvb2xCdXR0b25bXSB7XHJcbiAgICAgICAgICAgIHZhciBidXR0b25zID0gc3VwZXIuZ2V0QnV0dG9ucygpO1xyXG4gICAgICAgICAgICB2YXIgYWRkQnV0dG9uID0gUS50cnlGaXJzdChidXR0b25zLCB4ID0+IHguY3NzQ2xhc3MgPT0gJ2FkZC1idXR0b24nKTtcclxuICAgICAgICAgICAgaWYgKGFkZEJ1dHRvbiAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICBhZGRCdXR0b24ub25DbGljayA9ICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNyZWF0ZUVudGl0eURpYWxvZyh0aGlzLmdldEl0ZW1UeXBlKCksIGRsZyA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBkaWFsb2cgPSBkbGcgYXMgR3JpZEVkaXRvckRpYWxvZzxURW50aXR5PjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlhbG9nLm9uU2F2ZSA9IChvcHQsIGNhbGxiYWNrKSA9PiB0aGlzLnNhdmUob3B0LCBjYWxsYmFjayk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudHJhbnNmZXJEaWFsb2dSZWFkT25seShkaWFsb2cpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaWFsb2cubG9hZEVudGl0eUFuZE9wZW5EaWFsb2codGhpcy5nZXROZXdFbnRpdHkoKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHJldHVybiBidXR0b25zLmZpbHRlcih4ID0+IHguY3NzQ2xhc3MgIT0gXCJyZWZyZXNoLWJ1dHRvblwiKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCBlZGl0SXRlbShlbnRpdHlPcklkOiBhbnkpOiB2b2lkIHtcclxuXHJcbiAgICAgICAgICAgIHZhciBpZCA9IGVudGl0eU9ySWQ7XHJcbiAgICAgICAgICAgIHZhciBpdGVtID0gdGhpcy52aWV3LmdldEl0ZW1CeUlkKGlkKTtcclxuICAgICAgICAgICAgdGhpcy5jcmVhdGVFbnRpdHlEaWFsb2codGhpcy5nZXRJdGVtVHlwZSgpLCBkbGcgPT4ge1xyXG4gICAgICAgICAgICAgICAgdmFyIGRpYWxvZyA9IGRsZyBhcyBHcmlkRWRpdG9yRGlhbG9nPFRFbnRpdHk+O1xyXG4gICAgICAgICAgICAgICAgZGlhbG9nLm9uRGVsZXRlID0gKG9wdCwgY2FsbGJhY2spID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIXRoaXMuZGVsZXRlRW50aXR5KGlkKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrKHt9KTtcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRyYW5zZmVyRGlhbG9nUmVhZE9ubHkoZGlhbG9nKTtcclxuICAgICAgICAgICAgICAgIGRpYWxvZy5vblNhdmUgPSAob3B0LCBjYWxsYmFjaykgPT4gdGhpcy5zYXZlKG9wdCwgY2FsbGJhY2spO1xyXG4gICAgICAgICAgICAgICAgZGlhbG9nLmxvYWRFbnRpdHlBbmRPcGVuRGlhbG9nKGl0ZW0pO1xyXG4gICAgICAgICAgICB9KTs7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgZ2V0RWRpdFZhbHVlKHByb3BlcnR5LCB0YXJnZXQpIHtcclxuICAgICAgICAgICAgdGFyZ2V0W3Byb3BlcnR5Lm5hbWVdID0gdGhpcy52YWx1ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBzZXRFZGl0VmFsdWUoc291cmNlLCBwcm9wZXJ0eSkge1xyXG4gICAgICAgICAgICB0aGlzLnZhbHVlID0gc291cmNlW3Byb3BlcnR5Lm5hbWVdO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIGdldCB2YWx1ZSgpOiBURW50aXR5W10ge1xyXG4gICAgICAgICAgICB2YXIgcCA9IHRoaXMuZ2V0SWRQcm9wZXJ0eSgpO1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy52aWV3LmdldEl0ZW1zKCkubWFwKHggPT4ge1xyXG4gICAgICAgICAgICAgICAgdmFyIHkgPSBRLmRlZXBDbG9uZSh4KTtcclxuICAgICAgICAgICAgICAgIHZhciBpZCA9IHlbcF07XHJcbiAgICAgICAgICAgICAgICBpZiAoaWQgJiYgaWQudG9TdHJpbmcoKS5jaGFyQXQoMCkgPT0gJ2AnKVxyXG4gICAgICAgICAgICAgICAgICAgIGRlbGV0ZSB5W3BdO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIHNldCB2YWx1ZSh2YWx1ZTogVEVudGl0eVtdKSB7XHJcbiAgICAgICAgICAgIHZhciBwID0gdGhpcy5nZXRJZFByb3BlcnR5KCk7XHJcbiAgICAgICAgICAgIHRoaXMudmlldy5zZXRJdGVtcygodmFsdWUgfHwgW10pLm1hcCh4ID0+IHtcclxuICAgICAgICAgICAgICAgIHZhciB5ID0gUS5kZWVwQ2xvbmUoeCk7XHJcbiAgICAgICAgICAgICAgICBpZiAoKHkgYXMgYW55KVtwXSA9PSBudWxsKVxyXG4gICAgICAgICAgICAgICAgICAgICh5IGFzIGFueSlbcF0gPSBcImBcIiArIHRoaXMuZ2V0TmV4dElkKCk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4geTtcclxuICAgICAgICAgICAgfSksIHRydWUpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIGdldEdyaWRDYW5Mb2FkKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgdXNlUGFnZXIoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRJbml0aWFsVGl0bGUoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIGNyZWF0ZVF1aWNrU2VhcmNoSW5wdXQoKSB7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgZW5hYmxlRGVsZXRlQ29sdW1uKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0Q29sdW1ucygpIHtcclxuICAgICAgICAgICAgdmFyIGNvbHVtbnMgPSBzdXBlci5nZXRDb2x1bW5zKCk7XHJcblxyXG4gICAgICAgICAgICBpZiAodGhpcy5lbmFibGVEZWxldGVDb2x1bW4oKSkge1xyXG4gICAgICAgICAgICAgICAgY29sdW1ucy51bnNoaWZ0KHtcclxuICAgICAgICAgICAgICAgICAgICBmaWVsZDogJ0RlbGV0ZSBSb3cnLFxyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGZvcm1hdDogY3R4ID0+ICc8YSBjbGFzcz1cImlubGluZS1hY3Rpb24gZGVsZXRlLXJvd1wiIHRpdGxlPVwiZGVsZXRlXCI+JyArXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICc8aSBjbGFzcz1cImZhIGZhLXRyYXNoLW8gdGV4dC1yZWRcIj48L2k+PC9hPicsXHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDI0LFxyXG4gICAgICAgICAgICAgICAgICAgIG1pbldpZHRoOiAyNCxcclxuICAgICAgICAgICAgICAgICAgICBtYXhXaWR0aDogMjRcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gY29sdW1ucztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCBvbkNsaWNrKGU6IEpRdWVyeUV2ZW50T2JqZWN0LCByb3c6IG51bWJlciwgY2VsbDogbnVtYmVyKSB7XHJcbiAgICAgICAgICAgIHN1cGVyLm9uQ2xpY2soZSwgcm93LCBjZWxsKTtcclxuXHJcbiAgICAgICAgICAgIGlmIChlLmlzRGVmYXVsdFByZXZlbnRlZCgpKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG5cclxuICAgICAgICAgICAgdmFyIGl0ZW06IFRFbnRpdHkgPSB0aGlzLml0ZW1BdChyb3cpO1xyXG4gICAgICAgICAgICB2YXIgdGFyZ2V0ID0gJChlLnRhcmdldCk7XHJcblxyXG4gICAgICAgICAgICAvLyBpZiB1c2VyIGNsaWNrcyBcImlcIiBlbGVtZW50LCBlLmcuIGljb25cclxuICAgICAgICAgICAgaWYgKHRhcmdldC5wYXJlbnQoKS5oYXNDbGFzcygnaW5saW5lLWFjdGlvbicpKVxyXG4gICAgICAgICAgICAgICAgdGFyZ2V0ID0gdGFyZ2V0LnBhcmVudCgpO1xyXG5cclxuICAgICAgICAgICAgaWYgKHRhcmdldC5oYXNDbGFzcygnaW5saW5lLWFjdGlvbicpKSB7XHJcbiAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuZW5hYmxlRGVsZXRlQ29sdW1uKCkpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodGFyZ2V0Lmhhc0NsYXNzKCdkZWxldGUtcm93JykpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgUS5jb25maXJtKFEudGV4dCgnQ29udHJvbHMuRW50aXR5RGlhbG9nLkRlbGV0ZUNvbmZpcm1hdGlvbicpLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRlbGV0ZUVudGl0eShpdGVtW3RoaXMuZ2V0SWRQcm9wZXJ0eSgpXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsIm5hbWVzcGFjZSBZYXhpZS5Db21tb24ge1xyXG5cclxuICAgIEBTZXJlbml0eS5EZWNvcmF0b3JzLnJlZ2lzdGVyQ2xhc3MoKVxyXG4gICAgZXhwb3J0IGNsYXNzIEdyaWRFZGl0b3JEaWFsb2c8VEVudGl0eT4gZXh0ZW5kcyBTZXJlbml0eS5FbnRpdHlEaWFsb2c8VEVudGl0eSwgYW55PiB7XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldElkUHJvcGVydHkoKSB7IHJldHVybiBcIl9faWRcIjsgfVxyXG5cclxuICAgICAgICBwdWJsaWMgb25TYXZlOiAob3B0aW9uczogU2VyZW5pdHkuU2VydmljZU9wdGlvbnM8U2VyZW5pdHkuU2F2ZVJlc3BvbnNlPixcclxuICAgICAgICAgICAgY2FsbGJhY2s6IChyZXNwb25zZTogU2VyZW5pdHkuU2F2ZVJlc3BvbnNlKSA9PiB2b2lkKSA9PiB2b2lkO1xyXG5cclxuICAgICAgICBwdWJsaWMgb25EZWxldGU6IChvcHRpb25zOiBTZXJlbml0eS5TZXJ2aWNlT3B0aW9uczxTZXJlbml0eS5EZWxldGVSZXNwb25zZT4sXHJcbiAgICAgICAgICAgIGNhbGxiYWNrOiAocmVzcG9uc2U6IFNlcmVuaXR5LkRlbGV0ZVJlc3BvbnNlKSA9PiB2b2lkKSA9PiB2b2lkO1xyXG5cclxuICAgICAgICBwdWJsaWMgZGVzdHJveSgpIHtcclxuICAgICAgICAgICAgdGhpcy5vblNhdmUgPSBudWxsO1xyXG4gICAgICAgICAgICB0aGlzLm9uRGVsZXRlID0gbnVsbDtcclxuICAgICAgICAgICAgc3VwZXIuZGVzdHJveSgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIHVwZGF0ZUludGVyZmFjZSgpIHtcclxuICAgICAgICAgICAgc3VwZXIudXBkYXRlSW50ZXJmYWNlKCk7XHJcblxyXG4gICAgICAgICAgICAvLyBhcHBseSBjaGFuZ2VzIGJ1dHRvbiBkb2Vzbid0IHdvcmsgcHJvcGVybHkgd2l0aCBpbi1tZW1vcnkgZ3JpZHMgeWV0XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmFwcGx5Q2hhbmdlc0J1dHRvbikge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hcHBseUNoYW5nZXNCdXR0b24uaGlkZSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgc2F2ZUhhbmRsZXIob3B0aW9uczogU2VyZW5pdHkuU2VydmljZU9wdGlvbnM8U2VyZW5pdHkuU2F2ZVJlc3BvbnNlPixcclxuICAgICAgICAgICAgY2FsbGJhY2s6IChyZXNwb25zZTogU2VyZW5pdHkuU2F2ZVJlc3BvbnNlKSA9PiB2b2lkKTogdm9pZCB7XHJcbiAgICAgICAgICAgIHRoaXMub25TYXZlICYmIHRoaXMub25TYXZlKG9wdGlvbnMsIGNhbGxiYWNrKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCBkZWxldGVIYW5kbGVyKG9wdGlvbnM6IFNlcmVuaXR5LlNlcnZpY2VPcHRpb25zPFNlcmVuaXR5LkRlbGV0ZVJlc3BvbnNlPixcclxuICAgICAgICAgICAgY2FsbGJhY2s6IChyZXNwb25zZTogU2VyZW5pdHkuRGVsZXRlUmVzcG9uc2UpID0+IHZvaWQpOiB2b2lkIHtcclxuICAgICAgICAgICAgdGhpcy5vbkRlbGV0ZSAmJiB0aGlzLm9uRGVsZXRlKG9wdGlvbnMsIGNhbGxiYWNrKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCJcclxubmFtZXNwYWNlIFlheGllIHtcclxuXHJcbiAgICAvKipcclxuICAgICAqIFRoaXMgaXMgYW4gZWRpdG9yIHdpZGdldCBidXQgaXQgb25seSBkaXNwbGF5cyBhIHRleHQsIG5vdCBlZGl0cyBpdC5cclxuICAgICAqICBcclxuICAgICAqL1xyXG4gICAgQFNlcmVuaXR5LkRlY29yYXRvcnMuZWxlbWVudChcIjxkaXYvPlwiKVxyXG4gICAgQFNlcmVuaXR5LkRlY29yYXRvcnMucmVnaXN0ZXJFZGl0b3IoW1NlcmVuaXR5LklTZXRFZGl0VmFsdWVdKVxyXG4gICAgZXhwb3J0IGNsYXNzIFN0YXRpY1RleHRCbG9jayBleHRlbmRzIFNlcmVuaXR5LldpZGdldDxTdGF0aWNUZXh0QmxvY2tPcHRpb25zPlxyXG4gICAgICAgIGltcGxlbWVudHMgU2VyZW5pdHkuSVNldEVkaXRWYWx1ZSB7XHJcblxyXG4gICAgICAgIHByaXZhdGUgdmFsdWU6IHN0cmluZztcclxuXHJcbiAgICAgICAgY29uc3RydWN0b3IoY29udGFpbmVyOiBKUXVlcnksIG9wdGlvbnM6IFN0YXRpY1RleHRCbG9ja09wdGlvbnMpIHtcclxuICAgICAgICAgICAgc3VwZXIoY29udGFpbmVyLCBvcHRpb25zKTtcclxuXHJcbiAgICAgICAgICAgIC8vIGhpZGUgdGhlIGNhcHRpb24gbGFiZWwgZm9yIHRoaXMgZWRpdG9yIGlmIGluIGEgZm9ybS4gdWdseSBoYWNrXHJcbiAgICAgICAgICAgIGlmICh0aGlzLm9wdGlvbnMuaGlkZUxhYmVsKVxyXG4gICAgICAgICAgICAgICAgdGhpcy5lbGVtZW50LmNsb3Nlc3QoJy5maWVsZCcpLmZpbmQoJy5jYXB0aW9uJykuaGlkZSgpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy51cGRhdGVFbGVtZW50Q29udGVudCgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJpdmF0ZSB1cGRhdGVFbGVtZW50Q29udGVudCgpIHtcclxuICAgICAgICAgICAgdmFyIHRleHQgPSBRLmNvYWxlc2NlKHRoaXMub3B0aW9ucy50ZXh0LCB0aGlzLnZhbHVlKTtcclxuXHJcbiAgICAgICAgICAgIC8vIGlmIGlzTG9jYWxUZXh0IGlzIHNldCwgdGV4dCBpcyBhY3R1YWxseSBhIGxvY2FsIHRleHQga2V5XHJcbiAgICAgICAgICAgIGlmICh0aGlzLm9wdGlvbnMuaXNMb2NhbFRleHQpXHJcbiAgICAgICAgICAgICAgICB0ZXh0ID0gUS50ZXh0KHRleHQpO1xyXG5cclxuICAgICAgICAgICAgLy8gZG9uJ3QgaHRtbCBlbmNvZGUgaWYgaXNIdG1sIG9wdGlvbiBpcyB0cnVlXHJcbiAgICAgICAgICAgIGlmICh0aGlzLm9wdGlvbnMuaXNIdG1sKVxyXG4gICAgICAgICAgICAgICAgdGhpcy5lbGVtZW50Lmh0bWwodGV4dCk7XHJcbiAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgIHRoaXMuZWxlbWVudC50ZXh0KHRleHQpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogQnkgaW1wbGVtZW50aW5nIElTZXRFZGl0VmFsdWUgaW50ZXJmYWNlLCB3ZSBhbGxvdyB0aGlzIGVkaXRvciB0byBkaXNwbGF5IGl0cyBmaWVsZCB2YWx1ZS5cclxuICAgICAgICAgKiBCdXQgb25seSBkbyB0aGlzIHdoZW4gb3VyIHRleHQgY29udGVudCBpcyBub3QgZXhwbGljaXRseSBzZXQgaW4gb3B0aW9uc1xyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHB1YmxpYyBzZXRFZGl0VmFsdWUoc291cmNlOiBhbnksIHByb3BlcnR5OiBTZXJlbml0eS5Qcm9wZXJ0eUl0ZW0pIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMub3B0aW9ucy50ZXh0ID09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMudmFsdWUgPSBRLmNvYWxlc2NlKHRoaXMub3B0aW9ucy50ZXh0LCBzb3VyY2VbcHJvcGVydHkubmFtZV0pO1xyXG4gICAgICAgICAgICAgICAgdGhpcy51cGRhdGVFbGVtZW50Q29udGVudCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGV4cG9ydCBpbnRlcmZhY2UgU3RhdGljVGV4dEJsb2NrT3B0aW9ucyB7XHJcbiAgICAgICAgdGV4dDogc3RyaW5nO1xyXG4gICAgICAgIGlzSHRtbDogYm9vbGVhbjtcclxuICAgICAgICBpc0xvY2FsVGV4dDogYm9vbGVhbjtcclxuICAgICAgICBoaWRlTGFiZWw6IGJvb2xlYW47XHJcbiAgICB9XHJcbn0iLCJcclxubmFtZXNwYWNlIFlheGllLkNvbW1vbiB7XHJcblxyXG4gICAgQFNlcmVuaXR5LkRlY29yYXRvcnMucmVnaXN0ZXJDbGFzcygpXHJcbiAgICBleHBvcnQgY2xhc3MgSW1wb3J0U291cmNlRGlhbG9nIGV4dGVuZHMgU2VyZW5pdHkuRW50aXR5RGlhbG9nPEltcG9ydFNvdXJjZVJvdywgYW55PiB7XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldEZvcm1LZXkoKSB7IHJldHVybiBJbXBvcnRTb3VyY2VGb3JtLmZvcm1LZXk7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0SWRQcm9wZXJ0eSgpIHsgcmV0dXJuIEltcG9ydFNvdXJjZVJvdy5pZFByb3BlcnR5OyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldExvY2FsVGV4dFByZWZpeCgpIHsgcmV0dXJuIEltcG9ydFNvdXJjZVJvdy5sb2NhbFRleHRQcmVmaXg7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0TmFtZVByb3BlcnR5KCkgeyByZXR1cm4gSW1wb3J0U291cmNlUm93Lm5hbWVQcm9wZXJ0eTsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRTZXJ2aWNlKCkgeyByZXR1cm4gSW1wb3J0U291cmNlU2VydmljZS5iYXNlVXJsOyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldERlbGV0ZVBlcm1pc3Npb24oKSB7IHJldHVybiBJbXBvcnRTb3VyY2VSb3cuZGVsZXRlUGVybWlzc2lvbjsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRJbnNlcnRQZXJtaXNzaW9uKCkgeyByZXR1cm4gSW1wb3J0U291cmNlUm93Lmluc2VydFBlcm1pc3Npb247IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0VXBkYXRlUGVybWlzc2lvbigpIHsgcmV0dXJuIEltcG9ydFNvdXJjZVJvdy51cGRhdGVQZXJtaXNzaW9uOyB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCBmb3JtID0gbmV3IEltcG9ydFNvdXJjZUZvcm0odGhpcy5pZFByZWZpeCk7XHJcblxyXG4gICAgfVxyXG59IiwiXHJcbm5hbWVzcGFjZSBZYXhpZS5Db21tb24ge1xyXG5cclxuICAgIEBTZXJlbml0eS5EZWNvcmF0b3JzLnJlZ2lzdGVyQ2xhc3MoKVxyXG4gICAgZXhwb3J0IGNsYXNzIEltcG9ydFNvdXJjZUdyaWQgZXh0ZW5kcyBTZXJlbml0eS5FbnRpdHlHcmlkPEltcG9ydFNvdXJjZVJvdywgYW55PiB7XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldENvbHVtbnNLZXkoKSB7IHJldHVybiAnQ29tbW9uLkltcG9ydFNvdXJjZSc7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0RGlhbG9nVHlwZSgpIHsgcmV0dXJuIEltcG9ydFNvdXJjZURpYWxvZzsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRJZFByb3BlcnR5KCkgeyByZXR1cm4gSW1wb3J0U291cmNlUm93LmlkUHJvcGVydHk7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0SW5zZXJ0UGVybWlzc2lvbigpIHsgcmV0dXJuIEltcG9ydFNvdXJjZVJvdy5pbnNlcnRQZXJtaXNzaW9uOyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldExvY2FsVGV4dFByZWZpeCgpIHsgcmV0dXJuIEltcG9ydFNvdXJjZVJvdy5sb2NhbFRleHRQcmVmaXg7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0U2VydmljZSgpIHsgcmV0dXJuIEltcG9ydFNvdXJjZVNlcnZpY2UuYmFzZVVybDsgfVxyXG5cclxuICAgICAgICBjb25zdHJ1Y3Rvcihjb250YWluZXI6IEpRdWVyeSkge1xyXG4gICAgICAgICAgICBzdXBlcihjb250YWluZXIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsIlxyXG5uYW1lc3BhY2UgWWF4aWUuQ29tbW9uIHtcclxuXHJcbiAgICBAU2VyZW5pdHkuRGVjb3JhdG9ycy5yZWdpc3RlckNsYXNzKClcclxuICAgIGV4cG9ydCBjbGFzcyBJbXBvcnRUeXBlRGlhbG9nIGV4dGVuZHMgU2VyZW5pdHkuRW50aXR5RGlhbG9nPEltcG9ydFR5cGVSb3csIGFueT4ge1xyXG4gICAgICAgIHByb3RlY3RlZCBnZXRGb3JtS2V5KCkgeyByZXR1cm4gSW1wb3J0VHlwZUZvcm0uZm9ybUtleTsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRJZFByb3BlcnR5KCkgeyByZXR1cm4gSW1wb3J0VHlwZVJvdy5pZFByb3BlcnR5OyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldExvY2FsVGV4dFByZWZpeCgpIHsgcmV0dXJuIEltcG9ydFR5cGVSb3cubG9jYWxUZXh0UHJlZml4OyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldE5hbWVQcm9wZXJ0eSgpIHsgcmV0dXJuIEltcG9ydFR5cGVSb3cubmFtZVByb3BlcnR5OyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldFNlcnZpY2UoKSB7IHJldHVybiBJbXBvcnRUeXBlU2VydmljZS5iYXNlVXJsOyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldERlbGV0ZVBlcm1pc3Npb24oKSB7IHJldHVybiBJbXBvcnRUeXBlUm93LmRlbGV0ZVBlcm1pc3Npb247IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0SW5zZXJ0UGVybWlzc2lvbigpIHsgcmV0dXJuIEltcG9ydFR5cGVSb3cuaW5zZXJ0UGVybWlzc2lvbjsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRVcGRhdGVQZXJtaXNzaW9uKCkgeyByZXR1cm4gSW1wb3J0VHlwZVJvdy51cGRhdGVQZXJtaXNzaW9uOyB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCBmb3JtID0gbmV3IEltcG9ydFR5cGVGb3JtKHRoaXMuaWRQcmVmaXgpO1xyXG5cclxuICAgIH1cclxufSIsIlxyXG5uYW1lc3BhY2UgWWF4aWUuQ29tbW9uIHtcclxuXHJcbiAgICBAU2VyZW5pdHkuRGVjb3JhdG9ycy5yZWdpc3RlckNsYXNzKClcclxuICAgIGV4cG9ydCBjbGFzcyBJbXBvcnRUeXBlR3JpZCBleHRlbmRzIFNlcmVuaXR5LkVudGl0eUdyaWQ8SW1wb3J0VHlwZVJvdywgYW55PiB7XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldENvbHVtbnNLZXkoKSB7IHJldHVybiAnQ29tbW9uLkltcG9ydFR5cGUnOyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldERpYWxvZ1R5cGUoKSB7IHJldHVybiBJbXBvcnRUeXBlRGlhbG9nOyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldElkUHJvcGVydHkoKSB7IHJldHVybiBJbXBvcnRUeXBlUm93LmlkUHJvcGVydHk7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0SW5zZXJ0UGVybWlzc2lvbigpIHsgcmV0dXJuIEltcG9ydFR5cGVSb3cuaW5zZXJ0UGVybWlzc2lvbjsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRMb2NhbFRleHRQcmVmaXgoKSB7IHJldHVybiBJbXBvcnRUeXBlUm93LmxvY2FsVGV4dFByZWZpeDsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRTZXJ2aWNlKCkgeyByZXR1cm4gSW1wb3J0VHlwZVNlcnZpY2UuYmFzZVVybDsgfVxyXG5cclxuICAgICAgICBjb25zdHJ1Y3Rvcihjb250YWluZXI6IEpRdWVyeSkge1xyXG4gICAgICAgICAgICBzdXBlcihjb250YWluZXIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsIlxyXG5uYW1lc3BhY2UgWWF4aWUuQ29tbW9uIHtcclxuXHJcbiAgICBAU2VyZW5pdHkuRGVjb3JhdG9ycy5yZWdpc3RlckNsYXNzKClcclxuICAgIEBTZXJlbml0eS5EZWNvcmF0b3JzLnJlc3BvbnNpdmUoKVxyXG4gICAgQFNlcmVuaXR5LkRlY29yYXRvcnMubWF4aW1pemFibGUoKVxyXG4gICAgZXhwb3J0IGNsYXNzIEltcG9ydFdpemFyZERpYWxvZyBleHRlbmRzIFNlcmVuaXR5LkVudGl0eURpYWxvZzxJbXBvcnRXaXphcmRSb3csIGFueT4ge1xyXG4gICAgICAgIHByb3RlY3RlZCBnZXRGb3JtS2V5KCkgeyByZXR1cm4gSW1wb3J0V2l6YXJkRm9ybS5mb3JtS2V5OyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldElkUHJvcGVydHkoKSB7IHJldHVybiBJbXBvcnRXaXphcmRSb3cuaWRQcm9wZXJ0eTsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRMb2NhbFRleHRQcmVmaXgoKSB7IHJldHVybiBJbXBvcnRXaXphcmRSb3cubG9jYWxUZXh0UHJlZml4OyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldE5hbWVQcm9wZXJ0eSgpIHsgcmV0dXJuIEltcG9ydFdpemFyZFJvdy5uYW1lUHJvcGVydHk7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0U2VydmljZSgpIHsgcmV0dXJuIEltcG9ydFdpemFyZFNlcnZpY2UuYmFzZVVybDsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXREZWxldGVQZXJtaXNzaW9uKCkgeyByZXR1cm4gSW1wb3J0V2l6YXJkUm93LmRlbGV0ZVBlcm1pc3Npb247IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0SW5zZXJ0UGVybWlzc2lvbigpIHsgcmV0dXJuIEltcG9ydFdpemFyZFJvdy5pbnNlcnRQZXJtaXNzaW9uOyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldFVwZGF0ZVBlcm1pc3Npb24oKSB7IHJldHVybiBJbXBvcnRXaXphcmRSb3cudXBkYXRlUGVybWlzc2lvbjsgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgZm9ybSA9IG5ldyBJbXBvcnRXaXphcmRGb3JtKHRoaXMuaWRQcmVmaXgpO1xyXG4gICAgICAgIHByb3RlY3RlZCBJbXBvcnRGaWxlOiBzdHJpbmc7XHJcblxyXG4gICAgICAgIHByaXZhdGUgbG9hZGVkU3RhdGU6IHN0cmluZztcclxuXHJcbiAgICAgICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgICAgICQoJzxhIGNsYXNzPVwiaW5wbGFjZS1idXR0b24gaW5wbGFjZS1hY3Rpb25cIj48Yj48aSBjbGFzcz1cImZhIGZhLW1hZ2ljIHRleHQtcmVkXCI+PC9pPjwvYj48L2E+JylcclxuICAgICAgICAgICAgICAgIC5hdHRyKFwidGl0bGVcIiwgXCJNYXRjaCBFeGNlbCBDb2x1bW5zIHRvIFRhYmxlIENvbHVtbnNcIilcclxuICAgICAgICAgICAgICAgIC5pbnNlcnRCZWZvcmUodGhpcy5mb3JtLkZpZWxkTWF0Y2hEaXNwbGF5LmVsZW1lbnQpXHJcbiAgICAgICAgICAgICAgICAuY2xpY2soZSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGV4Y2VsQ29sdW1uTGlzdCA9IFtdO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBkcm9wQ29sdW1uTGlzdCA9IFtdO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciB0YWJsZUNvbHVtbkxpc3QgPSBbXTtcclxuICAgICAgICAgICAgICAgICAgICBZYXhpZS5Db21tb24uSW1wb3J0V2l6YXJkU2VydmljZS5HZXRFeGNlbENvbHVtbkxpc3Qoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBJbXBvcnRGaWxlTGlzdDogdGhpcy5mb3JtLkltcG9ydEZpbGVMaXN0LnZhbHVlXHJcbiAgICAgICAgICAgICAgICAgICAgfSwgcmVzcG9uc2UgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBleGNlbENvbHVtbkxpc3QgPSByZXNwb25zZS5FbnRpdGllcztcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhc3luYzogZmFsc2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIFlheGllLkNvbW1vbi5JbXBvcnRXaXphcmRTZXJ2aWNlLkdldFRhYmxlSGVhZGVycyhcclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgVGFibGVOYW1lOiB0aGlzLmZvcm0uVGFyZ2V0RGF0YWJhc2UudmFsdWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2UgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFibGVDb2x1bW5MaXN0ID0gcmVzcG9uc2UuRW50aXRpZXM7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFzeW5jOiBmYWxzZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGRpYWxvZyA9IG5ldyBJbXBvcnRXaXphcmRGaWVsZE1hdGNoRGlhbG9nKGV4Y2VsQ29sdW1uTGlzdCwgdGFibGVDb2x1bW5MaXN0KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgZGlhbG9nLmVsZW1lbnQub24oJ2RpYWxvZ2Nsb3NlJywgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgZHJvcENvbHVtbkVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZHJvcGNvbHVtbnMnKS5nZXRFbGVtZW50c0J5VGFnTmFtZShcImxpXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGRyb3BDb2x1bW5FbGVtZW50Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmZvcm0uRmllbGRNYXRjaERpc3BsYXlbaV0gPSBkcm9wQ29sdW1uRWxlbWVudFtpXS5pbm5lclRleHQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkcm9wQ29sdW1uTGlzdFtpXSA9IGRyb3BDb2x1bW5FbGVtZW50W2ldLmlubmVyVGV4dDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBZYXhpZS5Db21tb24uSW1wb3J0V2l6YXJkU2VydmljZS5TZXJpYWxpemVMaXN0KHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIERyb3BDb2x1bW5MaXN0OiBkcm9wQ29sdW1uTGlzdCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFRhYmxlTmFtZTogdGhpcy5mb3JtLlRhcmdldERhdGFiYXNlLnZhbHVlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sIHJlc3BvbnNlID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBmaWVsZE1hdGNoSnNvbiA9IHJlc3BvbnNlLkZpZWxkTWF0Y2hKc29uO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGZpZWxkTWF0Y2hMaXN0ID0gcmVzcG9uc2UuRmllbGRNYXRjaExpc3Q7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgZmllbGRNYXRjaERpc3BsYXkgPSByZXNwb25zZS5GaWVsZE1hdGNoRGlzcGxheTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZmllbGRNYXRjaERpc3BsYXkubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmZvcm0uRmllbGRNYXRjaERpc3BsYXkudmFsdWUgPSB0aGlzLmZvcm0uRmllbGRNYXRjaERpc3BsYXkudmFsdWUgKyBmaWVsZE1hdGNoRGlzcGxheVtpXSArIFwiXFxuXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZm9ybS5GaWVsZE1hdGNoTGlzdC52YWx1ZSA9IGZpZWxkTWF0Y2hKc29uO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFzeW5jOiBmYWxzZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpYWxvZyA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlhbG9nLmRpYWxvZ09wZW4oKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgdGhpcy50YWJzLm9uKCd0YWJzYWN0aXZhdGUnLCAoZSwgaSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hcnJhbmdlKCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB0aGlzLmJ5SWQoJ05vdGVMaXN0JykuY2xvc2VzdCgnLmZpZWxkJykuaGlkZSgpLmVuZCgpLmFwcGVuZFRvKHRoaXMuYnlJZCgnVGFiTm90ZXMnKSk7XHJcbiAgICAgICAgICAgIERpYWxvZ1V0aWxzLnBlbmRpbmdDaGFuZ2VzQ29uZmlybWF0aW9uKHRoaXMuZWxlbWVudCwgKCkgPT4gdGhpcy5nZXRTYXZlU3RhdGUoKSAhPSB0aGlzLmxvYWRlZFN0YXRlKTtcclxuICAgICAgICAgICAgdGhpcy50YWJzLmJpbmQoJ3RhYnNhY3RpdmF0ZScsICgpID0+IHRoaXMuYXJyYW5nZSgpKTtcclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0VG9vbGJhckJ1dHRvbnMoKSB7XHJcbiAgICAgICAgICAgIHZhciBidXR0b25zID0gc3VwZXIuZ2V0VG9vbGJhckJ1dHRvbnMoKTtcclxuICAgICAgICAgICAgYnV0dG9ucy5wdXNoKHtcclxuICAgICAgICAgICAgICAgIHRpdGxlOiAnRXhlY3V0ZSBJbXBvcnQnLFxyXG4gICAgICAgICAgICAgICAgY3NzQ2xhc3M6ICdzZW5kLWJ1dHRvbicsXHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrOiAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCF0aGlzLmZvcm0uSW1wb3J0RmlsZUxpc3QpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgUS5hbGVydChcIllvdSBtdXN0IGVudGVyIGEgdmFsaWQgZmlsZSBuYW1lIGJlZm9yZSB5b3UgY2FuIGltcG9ydCBpdC5cIilcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgQ29tbW9uLkltcG9ydFdpemFyZFNlcnZpY2UuRXhjZWxJbXBvcnQoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBJbXBvcnRXaXphcmRJRDogdGhpcy5nZXRXaXphcmRJRCgpXHJcbiAgICAgICAgICAgICAgICAgICAgfSwgcmVzcG9uc2UgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRpYWxvZ0Nsb3NlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICByZXR1cm4gYnV0dG9ucztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRXaXphcmRJRCgpOiBudW1iZXIge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5mb3JtLkltcG9ydFdpemFyZElkLnZhbHVlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZ2V0U2F2ZVN0YXRlKCkge1xyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuICQudG9KU09OKHRoaXMuZ2V0U2F2ZUVudGl0eSgpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCJcclxubmFtZXNwYWNlIFlheGllLkNvbW1vblxyXG57XHJcbiAgICBAU2VyZW5pdHkuRGVjb3JhdG9ycy5yZWdpc3RlckNsYXNzKClcclxuICAgIEBTZXJlbml0eS5EZWNvcmF0b3JzLnJlc3BvbnNpdmUoKVxyXG4gICAgQFNlcmVuaXR5LkRlY29yYXRvcnMubWF4aW1pemFibGUoKVxyXG5cclxuICAgIGV4cG9ydCBjbGFzcyBJbXBvcnRXaXphcmRGaWVsZE1hdGNoRGlhbG9nIGV4dGVuZHMgU2VyZW5pdHkuVGVtcGxhdGVkRGlhbG9nPGFueT4ge1xyXG5cclxuICAgICAgICBwdWJsaWMgSW1wb3J0RmlsZTogc3RyaW5nO1xyXG4gICAgICAgIHB1YmxpYyBpbXBvcnRGaWxlTGlzdDogYW55O1xyXG4gICAgICAgIHB1YmxpYyB0YWJsZU5hbWU6IHN0cmluZztcclxuXHJcbiAgICAgICAgcHVibGljIGV4Y2VsQ29sdW1uTGlzdCA9IFtdO1xyXG4gICAgICAgIHB1YmxpYyB0YWJsZUNvbHVtbkxpc3QgPSBbXTtcclxuICAgICAgICBwdWJsaWMgZHJvcENvbHVtbkxpc3QgPSBbXTtcclxuXHJcbiAgICAgICAgcHVibGljIG1hdGNoTGlzdCA9IFtdO1xyXG5cclxuICAgICAgICBjb25zdHJ1Y3RvcihFeGNlbENvbHVtbkxpc3QsIFRhYmxlQ29sdW1uTGlzdClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHN1cGVyKCk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmV4Y2VsQ29sdW1uTGlzdCA9IEV4Y2VsQ29sdW1uTGlzdFxyXG4gICAgICAgICAgICB0aGlzLnRhYmxlQ29sdW1uTGlzdCA9IFRhYmxlQ29sdW1uTGlzdDsgICAgICAgICAgICBcclxuXHJcbiAgICAgICAgfSAgICAgICAgXHJcblxyXG4gICAgICAgIHByb3RlY3RlZCBvbkRpYWxvZ09wZW4oKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgc3VwZXIub25EaWFsb2dPcGVuKCk7ICAgICAgICAgICAgICAgICAgICAgIFxyXG5cclxuICAgICAgICAgICAgdmFyIGV4Y2VsQ29sdW1ucyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZXhjZWxjb2x1bW5zXCIpO1xyXG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuZXhjZWxDb2x1bW5MaXN0Lmxlbmd0aDsgaSsrKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB2YXIgbGlFeGNlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcclxuICAgICAgICAgICAgICAgIHZhciBmaWVsZE5hbWUgPSB0aGlzLmV4Y2VsQ29sdW1uTGlzdFtpXTtcclxuICAgICAgICAgICAgICAgIGxpRXhjZWwuaWQgPSBcIkV4Y2VsXCIgKyBpO1xyXG4gICAgICAgICAgICAgICAgbGlFeGNlbC52YWx1ZSA9IGk7XHJcbiAgICAgICAgICAgICAgICBsaUV4Y2VsLmNsYXNzTGlzdC5hZGQoXCJkcmFnZ2FibGVcIik7XHJcbiAgICAgICAgICAgICAgICBsaUV4Y2VsLmNsYXNzTGlzdC5hZGQoXCJpdGVtXCIpO1xyXG4gICAgICAgICAgICAgICAgbGlFeGNlbC5pbm5lclRleHQgPSBmaWVsZE5hbWU7XHJcbiAgICAgICAgICAgICAgICBleGNlbENvbHVtbnMuYXBwZW5kKGxpRXhjZWwpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB2YXIgZHJvcERpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZHJvcGNvbHVtbnNcIik7XHJcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy50YWJsZUNvbHVtbkxpc3QubGVuZ3RoOyBpKyspXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHZhciBsaURyb3AgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XHJcbiAgICAgICAgICAgICAgICBsaURyb3AuaWQgPSBcIkRyb3BcIiArIGk7XHJcbiAgICAgICAgICAgICAgICBsaURyb3AudmFsdWUgPSBpO1xyXG4gICAgICAgICAgICAgICAgbGlEcm9wLmNsYXNzTGlzdC5hZGQoXCJkcm9wcGFibGVcIik7XHJcbiAgICAgICAgICAgICAgICBsaURyb3AuY2xhc3NMaXN0LmFkZChcIml0ZW1cIik7XHJcbiAgICAgICAgICAgICAgICB2YXIgZm91bmQgPSB0aGlzLmV4Y2VsQ29sdW1uTGlzdC5maWx0ZXIoY29sID0+IHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gY29sID09PSB0aGlzLnRhYmxlQ29sdW1uTGlzdFtpXS5OYW1lIHx8IGNvbCA9PT0gdGhpcy50YWJsZUNvbHVtbkxpc3RbaV0uVGl0bGU7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIGlmIChmb3VuZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGxpRHJvcC5pbm5lclRleHQgPSBmb3VuZFswXTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGxpRHJvcC5pbm5lclRleHQgPSBcIkRyb3AgTWF0Y2hpbmcgRmllbGQgSGVyZVwiO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgbGlEcm9wLmRyYWdnYWJsZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBkcm9wRGl2LmFwcGVuZChsaURyb3ApO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB2YXIgdGFibGVEaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRhYmxlY29sdW1uc1wiKTtcclxuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLnRhYmxlQ29sdW1uTGlzdC5sZW5ndGg7IGkrKylcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdmFyIGxpVGFibGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XHJcbiAgICAgICAgICAgICAgICBsaVRhYmxlLmlkID0gXCJUYWJsZVwiICsgaTtcclxuICAgICAgICAgICAgICAgIGxpVGFibGUudmFsdWUgPSBpO1xyXG4gICAgICAgICAgICAgICAgbGlUYWJsZS5jbGFzc0xpc3QuYWRkKFwiaXRlbVwiKTtcclxuICAgICAgICAgICAgICAgIGxpVGFibGUuaW5uZXJUZXh0ID0gdGhpcy50YWJsZUNvbHVtbkxpc3RbaV0uTmFtZSArIFwiIDogXCIgKyB0aGlzLnRhYmxlQ29sdW1uTGlzdFtpXS5UaXRsZSArIFwiIChcIiArIHRoaXMudGFibGVDb2x1bW5MaXN0W2ldLlR5cGUgKyBcIikgXCI7XHJcbiAgICAgICAgICAgICAgICB0YWJsZURpdi5hcHBlbmQobGlUYWJsZSk7XHJcbiAgICAgICAgICAgIH0gICAgICAgICAgXHJcblxyXG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuZXhjZWxDb2x1bW5MaXN0Lmxlbmd0aDsgaSsrKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAkKFwiI1wiICsgXCJFeGNlbFwiICsgaSkuZHJhZ2dhYmxlKHtcclxuICAgICAgICAgICAgICAgICAgICByZXZlcnQ6IFwiaW52YWxpZFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGhlbHBlcjogXCJjbG9uZVwiXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICQoXCIjXCIgKyBcIkV4Y2VsXCIgKyBpKS5kYXRhKCdtYXRjaFJvdycsIHsga2V5OiBpLCB2YWx1ZTogdGhpcy5leGNlbENvbHVtbkxpc3RbaV0gfSk7XHJcbiAgICAgICAgICAgICAgICAkKFwiI1wiICsgXCJFeGNlbFwiICsgaSkuZHJvcHBhYmxlKHtcclxuICAgICAgICAgICAgICAgICAgICBkcm9wOiBmdW5jdGlvbiAoZXZlbnQsIHVpKVxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJCh0aGlzKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmFkZENsYXNzKFwidWktc3RhdGUtaGlnaGxpZ2h0XCIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuaHRtbChcImV4Y2VsIGlkIFwiICsgdWkuZHJhZ2dhYmxlLmZpbmQoJ3NlbGVjdCcpLmF0dHIoJ2lkJykgKyBcIiBkcm9wcGVkIFwiKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSAgICAgICAgICAgICAgICBcclxuXHJcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy50YWJsZUNvbHVtbkxpc3QubGVuZ3RoOyBpKyspXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICQoXCIjXCIgKyBcIkRyb3BcIiArIGkpLmRyYWdnYWJsZSgpO1xyXG4gICAgICAgICAgICAgICAgJChcIiNcIiArIFwiRHJvcFwiICsgaSkuZHJvcHBhYmxlKHtcclxuICAgICAgICAgICAgICAgICAgICBkcm9wOiBmdW5jdGlvbiAoZXZlbnQsIHVpKVxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHh4ID0gdWkuZHJhZ2dhYmxlLmRhdGEoJ21hdGNoUm93Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBjbG9uZUl0ZW0gPSB1aS5kcmFnZ2FibGUuY2xvbmUoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGV4Y2VsQ29sdW1uTmFtZSA9IGNsb25lSXRlbS5odG1sKClcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGV4Y2VsQ29sdW1uTnVtYmVyID0gY2xvbmVJdGVtLnZhbCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgdGFibGVDb2x1bW5OYW1lID0gJCh0aGlzKS5odG1sKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciB0YWJsZUNvbHVtbk51bWJlciA9ICQodGhpcykudmFsKCk7ICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBtZXNzYWdlID0gXCJFeGNlbCBDb2x1bW4gXCIgKyBleGNlbENvbHVtbk51bWJlciArIFwiIDogXCIgKyBleGNlbENvbHVtbk5hbWUgKyBcIiBkcm9wcGVkIG9uIFRhYmxlIENvbHVtbiBcIiArIHRhYmxlQ29sdW1uTnVtYmVyICsgXCIgOiBcIiArIHRhYmxlQ29sdW1uTmFtZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy9RLmFsZXJ0KG1lc3NhZ2UpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAkKHRoaXMpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuYWRkQ2xhc3MoXCJ1aS1zdGF0ZS1oaWdobGlnaHRcIilcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5hZGRDbGFzcygnaGFzLWRyb3AnKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmh0bWwoY2xvbmVJdGVtLmh0bWwoKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0gICAgICBcclxuICAgICAgICB9ICBcclxuICAgICAgXHJcbiAgICAgICAgcHJvdGVjdGVkIGFycmFuZ2UoKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgc3VwZXIuYXJyYW5nZSgpO1xyXG4gICAgICAgIH0gICAgICAgXHJcblxyXG4gICAgICAgIHByb3RlY3RlZCBnZXREaWFsb2dPcHRpb25zKClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHZhciBvcHQgPSBzdXBlci5nZXREaWFsb2dPcHRpb25zKCk7XHJcbiAgICAgICAgICAgIG9wdC50aXRsZSA9ICdGaWVsZCBOYW1lJztcclxuICAgICAgICAgICAgcmV0dXJuIG9wdDtcclxuICAgICAgICB9ICAgICAgICAgXHJcbiAgICB9XHJcbn0iLCJcclxubmFtZXNwYWNlIFlheGllLkNvbW1vbiB7XHJcblxyXG4gICAgQFNlcmVuaXR5LkRlY29yYXRvcnMucmVnaXN0ZXJDbGFzcygpXHJcbiAgICBleHBvcnQgY2xhc3MgSW1wb3J0V2l6YXJkRmllbGRNYXRjaEdyaWQgZXh0ZW5kcyBTZXJlbml0eS5FbnRpdHlHcmlkPEltcG9ydFdpemFyZFJvdywgYW55PiB7XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldENvbHVtbnNLZXkoKSB7IHJldHVybiAnQ29tbW9uLkltcG9ydFdpemFyZCc7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0RGlhbG9nVHlwZSgpIHsgcmV0dXJuIEltcG9ydFdpemFyZERpYWxvZzsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRJZFByb3BlcnR5KCkgeyByZXR1cm4gSW1wb3J0V2l6YXJkUm93LmlkUHJvcGVydHk7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0TG9jYWxUZXh0UHJlZml4KCkgeyByZXR1cm4gSW1wb3J0V2l6YXJkUm93LmxvY2FsVGV4dFByZWZpeDsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRTZXJ2aWNlKCkgeyByZXR1cm4gSW1wb3J0V2l6YXJkU2VydmljZS5iYXNlVXJsOyB9XHJcblxyXG4gICAgICAgIGNvbnN0cnVjdG9yKGNvbnRhaW5lcjogSlF1ZXJ5KSB7XHJcbiAgICAgICAgICAgIHN1cGVyKGNvbnRhaW5lcik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiXHJcbm5hbWVzcGFjZSBZYXhpZS5Db21tb24ge1xyXG5cclxuICAgIEBTZXJlbml0eS5EZWNvcmF0b3JzLnJlZ2lzdGVyQ2xhc3MoKVxyXG4gICAgZXhwb3J0IGNsYXNzIEltcG9ydFdpemFyZEdyaWQgZXh0ZW5kcyBTZXJlbml0eS5FbnRpdHlHcmlkPEltcG9ydFdpemFyZFJvdywgYW55PiB7XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldENvbHVtbnNLZXkoKSB7IHJldHVybiAnQ29tbW9uLkltcG9ydFdpemFyZCc7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0RGlhbG9nVHlwZSgpIHsgcmV0dXJuIEltcG9ydFdpemFyZERpYWxvZzsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRJZFByb3BlcnR5KCkgeyByZXR1cm4gSW1wb3J0V2l6YXJkUm93LmlkUHJvcGVydHk7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0SW5zZXJ0UGVybWlzc2lvbigpIHsgcmV0dXJuIEltcG9ydFdpemFyZFJvdy5pbnNlcnRQZXJtaXNzaW9uOyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldExvY2FsVGV4dFByZWZpeCgpIHsgcmV0dXJuIEltcG9ydFdpemFyZFJvdy5sb2NhbFRleHRQcmVmaXg7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0U2VydmljZSgpIHsgcmV0dXJuIEltcG9ydFdpemFyZFNlcnZpY2UuYmFzZVVybDsgfVxyXG5cclxuICAgICAgICBjb25zdHJ1Y3Rvcihjb250YWluZXI6IEpRdWVyeSkge1xyXG4gICAgICAgICAgICBzdXBlcihjb250YWluZXIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsIm5hbWVzcGFjZSBZYXhpZS5Db21tb24ge1xyXG4gICAgZXhwb3J0IGNsYXNzIExhbmd1YWdlU2VsZWN0aW9uIGV4dGVuZHMgU2VyZW5pdHkuV2lkZ2V0PGFueT4ge1xyXG4gICAgICAgIGNvbnN0cnVjdG9yKHNlbGVjdDogSlF1ZXJ5LCBjdXJyZW50TGFuZ3VhZ2U6IHN0cmluZykge1xyXG4gICAgICAgICAgICBzdXBlcihzZWxlY3QpO1xyXG5cclxuICAgICAgICAgICAgY3VycmVudExhbmd1YWdlID0gUS5jb2FsZXNjZShjdXJyZW50TGFuZ3VhZ2UsICdlbicpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5jaGFuZ2UoZSA9PiB7XHJcbiAgICAgICAgICAgICAgICB2YXIgcGF0aCA9IFEuQ29uZmlnLmFwcGxpY2F0aW9uUGF0aDtcclxuICAgICAgICAgICAgICAgIGlmIChwYXRoICYmIHBhdGggIT0gJy8nICYmIFEuZW5kc1dpdGgocGF0aCwgJy8nKSlcclxuICAgICAgICAgICAgICAgICAgICBwYXRoID0gcGF0aC5zdWJzdHIoMCwgcGF0aC5sZW5ndGggLSAxKTtcclxuICAgICAgICAgICAgICAgICQuY29va2llKCdMYW5ndWFnZVByZWZlcmVuY2UnLCBzZWxlY3QudmFsKCksIHtcclxuICAgICAgICAgICAgICAgICAgICBwYXRoOiBwYXRoLFxyXG4gICAgICAgICAgICAgICAgICAgIGV4cGlyZXM6IDM2NVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKHRydWUpO1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIFEuZ2V0TG9va3VwQXN5bmM8QWRtaW5pc3RyYXRpb24uTGFuZ3VhZ2VSb3c+KCdBZG1pbmlzdHJhdGlvbi5MYW5ndWFnZScpLnRoZW4oeCA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIVEuYW55KHguaXRlbXMsIHogPT4gei5MYW5ndWFnZUlkID09PSBjdXJyZW50TGFuZ3VhZ2UpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGlkeCA9IGN1cnJlbnRMYW5ndWFnZS5sYXN0SW5kZXhPZignLScpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChpZHggPj0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50TGFuZ3VhZ2UgPSBjdXJyZW50TGFuZ3VhZ2Uuc3Vic3RyKDAsIGlkeCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghUS5hbnkoeC5pdGVtcywgeSA9PiB5Lkxhbmd1YWdlSWQgPT09IGN1cnJlbnRMYW5ndWFnZSkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnRMYW5ndWFnZSA9ICdlbic7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnRMYW5ndWFnZSA9ICdlbic7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGZvciAodmFyIGwgb2YgeC5pdGVtcykge1xyXG4gICAgICAgICAgICAgICAgICAgIFEuYWRkT3B0aW9uKHNlbGVjdCwgbC5MYW5ndWFnZUlkLCBsLkxhbmd1YWdlTmFtZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgc2VsZWN0LnZhbChjdXJyZW50TGFuZ3VhZ2UpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCJuYW1lc3BhY2UgWWF4aWUuQ29tbW9uIHtcclxuICAgIGV4cG9ydCBjbGFzcyBTaWRlYmFyU2VhcmNoIGV4dGVuZHMgU2VyZW5pdHkuV2lkZ2V0PGFueT4ge1xyXG4gICAgICAgIHByaXZhdGUgbWVudVVMOiBKUXVlcnk7XHJcblxyXG4gICAgICAgIGNvbnN0cnVjdG9yKGlucHV0OiBKUXVlcnksIG1lbnVVTDogSlF1ZXJ5KSB7XHJcbiAgICAgICAgICAgIHN1cGVyKGlucHV0KTtcclxuXHJcbiAgICAgICAgICAgIG5ldyBTZXJlbml0eS5RdWlja1NlYXJjaElucHV0KGlucHV0LCB7XHJcbiAgICAgICAgICAgICAgICBvblNlYXJjaDogKGZpZWxkLCB0ZXh0LCBzdWNjZXNzKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy51cGRhdGVNYXRjaEZsYWdzKHRleHQpO1xyXG4gICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3ModHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5tZW51VUwgPSBtZW51VUw7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgdXBkYXRlTWF0Y2hGbGFncyh0ZXh0OiBzdHJpbmcpIHtcclxuICAgICAgICAgICAgdmFyIGxpTGlzdCA9IHRoaXMubWVudVVMLmZpbmQoJ2xpJykucmVtb3ZlQ2xhc3MoJ25vbi1tYXRjaCcpO1xyXG5cclxuICAgICAgICAgICAgdGV4dCA9IFEudHJpbVRvTnVsbCh0ZXh0KTtcclxuXHJcbiAgICAgICAgICAgIGlmICh0ZXh0ID09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgIGxpTGlzdC5zaG93KCk7XHJcbiAgICAgICAgICAgICAgICBsaUxpc3QucmVtb3ZlQ2xhc3MoJ2V4cGFuZGVkJyk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHZhciBwYXJ0cyA9IHRleHQucmVwbGFjZSgnLCcsICcgJykuc3BsaXQoJyAnKS5maWx0ZXIoeCA9PiAhUS5pc1RyaW1tZWRFbXB0eSh4KSk7XHJcblxyXG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHBhcnRzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBwYXJ0c1tpXSA9IFEudHJpbVRvTnVsbChTZWxlY3QyLnV0aWwuc3RyaXBEaWFjcml0aWNzKHBhcnRzW2ldKS50b1VwcGVyQ2FzZSgpKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdmFyIGl0ZW1zID0gbGlMaXN0O1xyXG4gICAgICAgICAgICBpdGVtcy5lYWNoKGZ1bmN0aW9uIChpZHgsIGUpIHtcclxuICAgICAgICAgICAgICAgIHZhciB4ID0gJChlKTtcclxuICAgICAgICAgICAgICAgIHZhciB0aXRsZSA9IFNlbGVjdDIudXRpbC5zdHJpcERpYWNyaXRpY3MoUS5jb2FsZXNjZSh4LnRleHQoKSwgJycpLnRvVXBwZXJDYXNlKCkpO1xyXG4gICAgICAgICAgICAgICAgZm9yICh2YXIgcCBvZiBwYXJ0cykge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChwICE9IG51bGwgJiYgISh0aXRsZS5pbmRleE9mKHApICE9PSAtMSkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgeC5hZGRDbGFzcygnbm9uLW1hdGNoJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICB2YXIgbWF0Y2hpbmdJdGVtcyA9IGl0ZW1zLm5vdCgnLm5vbi1tYXRjaCcpO1xyXG5cclxuICAgICAgICAgICAgdmFyIHZpc2libGVzID0gbWF0Y2hpbmdJdGVtcy5wYXJlbnRzKCdsaScpLmFkZChtYXRjaGluZ0l0ZW1zKTtcclxuXHJcbiAgICAgICAgICAgIHZhciBub25WaXNpYmxlcyA9IGxpTGlzdC5ub3QodmlzaWJsZXMpO1xyXG4gICAgICAgICAgICBub25WaXNpYmxlcy5oaWRlKCkuYWRkQ2xhc3MoJ25vbi1tYXRjaCcpO1xyXG5cclxuICAgICAgICAgICAgdmlzaWJsZXMuc2hvdygpO1xyXG4gICAgICAgICAgICBsaUxpc3QuYWRkQ2xhc3MoJ2V4cGFuZGVkJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwibmFtZXNwYWNlIFlheGllLkNvbW1vbiB7XHJcbiAgICBleHBvcnQgY2xhc3MgVGhlbWVTZWxlY3Rpb24gZXh0ZW5kcyBTZXJlbml0eS5XaWRnZXQ8YW55PiB7XHJcbiAgICAgICAgY29uc3RydWN0b3Ioc2VsZWN0OiBKUXVlcnkpIHtcclxuICAgICAgICAgICAgc3VwZXIoc2VsZWN0KTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuY2hhbmdlKGUgPT4ge1xyXG4gICAgICAgICAgICAgICAgdmFyIHBhdGggPSBRLkNvbmZpZy5hcHBsaWNhdGlvblBhdGg7XHJcbiAgICAgICAgICAgICAgICBpZiAocGF0aCAmJiBwYXRoICE9ICcvJyAmJiBRLmVuZHNXaXRoKHBhdGgsICcvJykpXHJcbiAgICAgICAgICAgICAgICAgICAgcGF0aCA9IHBhdGguc3Vic3RyKDAsIHBhdGgubGVuZ3RoIC0gMSk7XHJcblxyXG4gICAgICAgICAgICAgICAgJC5jb29raWUoJ1RoZW1lUHJlZmVyZW5jZScsIHNlbGVjdC52YWwoKSwge1xyXG4gICAgICAgICAgICAgICAgICAgIHBhdGg6IHBhdGgsXHJcbiAgICAgICAgICAgICAgICAgICAgZXhwaXJlczogMzY1XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgdGhlbWUgPSBzZWxlY3QudmFsKCkgfHwgJyc7XHJcbiAgICAgICAgICAgICAgICB2YXIgZGFya1NpZGViYXIgPSB0aGVtZS5pbmRleE9mKCdsaWdodCcpIDwgMDtcclxuICAgICAgICAgICAgICAgICQoJ2JvZHknKS5yZW1vdmVDbGFzcygnc2tpbi0nICsgdGhpcy5nZXRDdXJyZW50VGhlbWUoKSk7XHJcbiAgICAgICAgICAgICAgICAkKCdib2R5JykuYWRkQ2xhc3MoJ3NraW4tJyArIHRoZW1lKVxyXG4gICAgICAgICAgICAgICAgICAgIC50b2dnbGVDbGFzcygnZGFyay1zaWRlYmFyJywgZGFya1NpZGViYXIpXHJcbiAgICAgICAgICAgICAgICAgICAgLnRvZ2dsZUNsYXNzKCdsaWdodC1zaWRlYmFyJywgIWRhcmtTaWRlYmFyKTtcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICBRLmFkZE9wdGlvbihzZWxlY3QsICdibHVlJywgUS50ZXh0KCdTaXRlLkxheW91dC5UaGVtZUJsdWUnKSk7XHJcbiAgICAgICAgICAgIFEuYWRkT3B0aW9uKHNlbGVjdCwgJ2JsdWUtbGlnaHQnLCBRLnRleHQoJ1NpdGUuTGF5b3V0LlRoZW1lQmx1ZUxpZ2h0JykpO1xyXG4gICAgICAgICAgICBRLmFkZE9wdGlvbihzZWxlY3QsICdwdXJwbGUnLCBRLnRleHQoJ1NpdGUuTGF5b3V0LlRoZW1lUHVycGxlJykpO1xyXG4gICAgICAgICAgICBRLmFkZE9wdGlvbihzZWxlY3QsICdwdXJwbGUtbGlnaHQnLCBRLnRleHQoJ1NpdGUuTGF5b3V0LlRoZW1lUHVycGxlTGlnaHQnKSk7XHJcbiAgICAgICAgICAgIFEuYWRkT3B0aW9uKHNlbGVjdCwgJ3JlZCcsIFEudGV4dCgnU2l0ZS5MYXlvdXQuVGhlbWVSZWQnKSk7XHJcbiAgICAgICAgICAgIFEuYWRkT3B0aW9uKHNlbGVjdCwgJ3JlZC1saWdodCcsIFEudGV4dCgnU2l0ZS5MYXlvdXQuVGhlbWVSZWRMaWdodCcpKTtcclxuICAgICAgICAgICAgUS5hZGRPcHRpb24oc2VsZWN0LCAnZ3JlZW4nLCBRLnRleHQoJ1NpdGUuTGF5b3V0LlRoZW1lR3JlZW4nKSk7XHJcbiAgICAgICAgICAgIFEuYWRkT3B0aW9uKHNlbGVjdCwgJ2dyZWVuLWxpZ2h0JywgUS50ZXh0KCdTaXRlLkxheW91dC5UaGVtZUdyZWVuTGlnaHQnKSk7XHJcbiAgICAgICAgICAgIFEuYWRkT3B0aW9uKHNlbGVjdCwgJ3llbGxvdycsIFEudGV4dCgnU2l0ZS5MYXlvdXQuVGhlbWVZZWxsb3cnKSk7XHJcbiAgICAgICAgICAgIFEuYWRkT3B0aW9uKHNlbGVjdCwgJ3llbGxvdy1saWdodCcsIFEudGV4dCgnU2l0ZS5MYXlvdXQuVGhlbWVZZWxsb3dMaWdodCcpKTtcclxuICAgICAgICAgICAgUS5hZGRPcHRpb24oc2VsZWN0LCAnYmxhY2snLCBRLnRleHQoJ1NpdGUuTGF5b3V0LlRoZW1lQmxhY2snKSk7XHJcbiAgICAgICAgICAgIFEuYWRkT3B0aW9uKHNlbGVjdCwgJ2JsYWNrLWxpZ2h0JywgUS50ZXh0KCdTaXRlLkxheW91dC5UaGVtZUJsYWNrTGlnaHQnKSk7XHJcblxyXG4gICAgICAgICAgICBzZWxlY3QudmFsKHRoaXMuZ2V0Q3VycmVudFRoZW1lKCkpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIGdldEN1cnJlbnRUaGVtZSgpIHtcclxuICAgICAgICAgICAgdmFyIHNraW5DbGFzcyA9IFEuZmlyc3QoKCQoJ2JvZHknKS5hdHRyKCdjbGFzcycpIHx8ICcnKS5zcGxpdCgnICcpLCB4ID0+IFEuc3RhcnRzV2l0aCh4LCAnc2tpbi0nKSk7XHJcbiAgICAgICAgICAgIGlmIChza2luQ2xhc3MpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBza2luQ2xhc3Muc3Vic3RyKDUpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gJ2JsdWUnO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsIlxyXG5uYW1lc3BhY2UgWWF4aWUuQ29tbW9uIHtcclxuXHJcbiAgICBAU2VyZW5pdHkuRGVjb3JhdG9ycy5yZWdpc3RlckNsYXNzKClcclxuICAgIGV4cG9ydCBjbGFzcyBOb3RlRGlhbG9nIGV4dGVuZHMgU2VyZW5pdHkuRW50aXR5RGlhbG9nPE5vdGVSb3csIGFueT4ge1xyXG4gICAgICAgIHByb3RlY3RlZCBnZXRGb3JtS2V5KCkgeyByZXR1cm4gTm90ZUZvcm0uZm9ybUtleTsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRJZFByb3BlcnR5KCkgeyByZXR1cm4gTm90ZVJvdy5pZFByb3BlcnR5OyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldExvY2FsVGV4dFByZWZpeCgpIHsgcmV0dXJuIE5vdGVSb3cubG9jYWxUZXh0UHJlZml4OyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldE5hbWVQcm9wZXJ0eSgpIHsgcmV0dXJuIE5vdGVSb3cubmFtZVByb3BlcnR5OyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldFNlcnZpY2UoKSB7IHJldHVybiBOb3RlU2VydmljZS5iYXNlVXJsOyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldERlbGV0ZVBlcm1pc3Npb24oKSB7IHJldHVybiBOb3RlUm93LmRlbGV0ZVBlcm1pc3Npb247IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0SW5zZXJ0UGVybWlzc2lvbigpIHsgcmV0dXJuIE5vdGVSb3cuaW5zZXJ0UGVybWlzc2lvbjsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRVcGRhdGVQZXJtaXNzaW9uKCkgeyByZXR1cm4gTm90ZVJvdy51cGRhdGVQZXJtaXNzaW9uOyB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCBmb3JtID0gbmV3IE5vdGVGb3JtKHRoaXMuaWRQcmVmaXgpO1xyXG5cclxuICAgIH1cclxufSIsIlxyXG5uYW1lc3BhY2UgWWF4aWUuQ29tbW9uIHtcclxuXHJcbiAgICBAU2VyZW5pdHkuRGVjb3JhdG9ycy5yZWdpc3RlckNsYXNzKClcclxuICAgIGV4cG9ydCBjbGFzcyBOb3RlR3JpZCBleHRlbmRzIFNlcmVuaXR5LkVudGl0eUdyaWQ8Tm90ZVJvdywgYW55PiB7XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldENvbHVtbnNLZXkoKSB7IHJldHVybiAnQ29tbW9uLk5vdGUnOyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldERpYWxvZ1R5cGUoKSB7IHJldHVybiBOb3RlRGlhbG9nOyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldElkUHJvcGVydHkoKSB7IHJldHVybiBOb3RlUm93LmlkUHJvcGVydHk7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0SW5zZXJ0UGVybWlzc2lvbigpIHsgcmV0dXJuIE5vdGVSb3cuaW5zZXJ0UGVybWlzc2lvbjsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRMb2NhbFRleHRQcmVmaXgoKSB7IHJldHVybiBOb3RlUm93LmxvY2FsVGV4dFByZWZpeDsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRTZXJ2aWNlKCkgeyByZXR1cm4gTm90ZVNlcnZpY2UuYmFzZVVybDsgfVxyXG5cclxuICAgICAgICBjb25zdHJ1Y3Rvcihjb250YWluZXI6IEpRdWVyeSkge1xyXG4gICAgICAgICAgICBzdXBlcihjb250YWluZXIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsImRlY2xhcmUgdmFyIGpzUERGO1xyXG5cclxubmFtZXNwYWNlIFlheGllLkNvbW1vbiB7XHJcbiAgICBleHBvcnQgaW50ZXJmYWNlIFBkZkV4cG9ydE9wdGlvbnMge1xyXG4gICAgICAgIGdyaWQ6IFNlcmVuaXR5LkRhdGFHcmlkPGFueSwgYW55PjtcclxuICAgICAgICBvblZpZXdTdWJtaXQ6ICgpID0+IGJvb2xlYW47XHJcbiAgICAgICAgdGl0bGU/OiBzdHJpbmc7XHJcbiAgICAgICAgaGludD86IHN0cmluZztcclxuICAgICAgICBzZXBhcmF0b3I/OiBib29sZWFuO1xyXG4gICAgICAgIHJlcG9ydFRpdGxlPzogc3RyaW5nO1xyXG4gICAgICAgIHRpdGxlVG9wPzogbnVtYmVyO1xyXG4gICAgICAgIHRpdGxlRm9udFNpemU/OiBudW1iZXI7XHJcbiAgICAgICAgZmlsZU5hbWU/OiBzdHJpbmc7XHJcbiAgICAgICAgcGFnZU51bWJlcnM/OiBib29sZWFuO1xyXG4gICAgICAgIGNvbHVtblRpdGxlcz86IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH07XHJcbiAgICAgICAgdGFibGVPcHRpb25zPzoganNQREYuQXV0b1RhYmxlT3B0aW9ucztcclxuICAgICAgICBvdXRwdXQ/OiBzdHJpbmc7XHJcbiAgICAgICAgYXV0b1ByaW50PzogYm9vbGVhbjtcclxuICAgICAgICBwcmludERhdGVUaW1lSGVhZGVyPzogYm9vbGVhbjtcclxuICAgIH1cclxuXHJcbiAgICBleHBvcnQgbmFtZXNwYWNlIFBkZkV4cG9ydEhlbHBlciB7XHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIHRvQXV0b1RhYmxlQ29sdW1ucyhzcmNDb2x1bW5zOiBTbGljay5Db2x1bW5bXSwgY29sdW1uU3R5bGVzOiB7IFtkYXRhS2V5OiBzdHJpbmddOiBqc1BERi5BdXRvVGFibGVTdHlsZXM7IH0sXHJcbiAgICAgICAgICAgICAgICBjb2x1bW5UaXRsZXM6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0pIHtcclxuICAgICAgICAgICAgcmV0dXJuIHNyY0NvbHVtbnMubWFwKHNyYyA9PiB7XHJcbiAgICAgICAgICAgICAgICBsZXQgY29sOiBqc1BERi5BdXRvVGFibGVDb2x1bW4gPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YUtleTogc3JjLmlkIHx8IHNyYy5maWVsZCxcclxuICAgICAgICAgICAgICAgICAgICB0aXRsZTogc3JjLm5hbWUgfHwgJydcclxuICAgICAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKGNvbHVtblRpdGxlcyAmJiBjb2x1bW5UaXRsZXNbY29sLmRhdGFLZXldICE9IG51bGwpXHJcbiAgICAgICAgICAgICAgICAgICAgY29sLnRpdGxlID0gY29sdW1uVGl0bGVzW2NvbC5kYXRhS2V5XTtcclxuXHJcbiAgICAgICAgICAgICAgICBsZXQgc3R5bGU6IGpzUERGLkF1dG9UYWJsZVN0eWxlcyA9IHt9O1xyXG4gICAgICAgICAgICAgICAgaWYgKChzcmMuY3NzQ2xhc3MgfHwgJycpLmluZGV4T2YoXCJhbGlnbi1yaWdodFwiKSA+PSAwKVxyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlLmhhbGlnbiA9ICdyaWdodCc7XHJcbiAgICAgICAgICAgICAgICBlbHNlIGlmICgoc3JjLmNzc0NsYXNzIHx8ICcnKS5pbmRleE9mKFwiYWxpZ24tY2VudGVyXCIpID49IDApXHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGUuaGFsaWduID0gJ2NlbnRlcic7XHJcblxyXG4gICAgICAgICAgICAgICAgY29sdW1uU3R5bGVzW2NvbC5kYXRhS2V5XSA9IHN0eWxlO1xyXG5cclxuICAgICAgICAgICAgICAgIHJldHVybiBjb2w7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZnVuY3Rpb24gdG9BdXRvVGFibGVEYXRhKGVudGl0aWVzOiBhbnlbXSwga2V5czogc3RyaW5nW10sIHNyY0NvbHVtbnM6IFNsaWNrLkNvbHVtbltdICkge1xyXG4gICAgICAgICAgICBsZXQgZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XHJcbiAgICAgICAgICAgIGxldCByb3cgPSAwO1xyXG4gICAgICAgICAgICByZXR1cm4gZW50aXRpZXMubWFwKGl0ZW0gPT4ge1xyXG4gICAgICAgICAgICAgICAgbGV0IGRzdCA9IHt9O1xyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgY2VsbCA9IDA7IGNlbGwgPCBzcmNDb2x1bW5zLmxlbmd0aDsgY2VsbCsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHNyYyA9IHNyY0NvbHVtbnNbY2VsbF07XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGZsZCA9IHNyYy5maWVsZCB8fCAnJztcclxuICAgICAgICAgICAgICAgICAgICBsZXQga2V5ID0ga2V5c1tjZWxsXTtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgdHh0O1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBodG1sOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHNyYy5mb3JtYXR0ZXIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaHRtbCA9IHNyYy5mb3JtYXR0ZXIocm93LCBjZWxsLCBpdGVtW2ZsZF0sIHNyYywgaXRlbSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKHNyYy5mb3JtYXQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaHRtbCA9IHNyYy5mb3JtYXQoeyByb3c6IHJvdywgY2VsbDogY2VsbCwgaXRlbTogaXRlbSwgdmFsdWU6IGl0ZW1bZmxkXSB9KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRzdFtrZXldID0gaXRlbVtmbGRdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmICghaHRtbCB8fCAoaHRtbC5pbmRleE9mKCc8JykgPCAwICYmIGh0bWwuaW5kZXhPZignJicpIDwgMCkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRzdFtrZXldID0gaHRtbDtcclxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZWwuaW5uZXJIVE1MID0gaHRtbDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGVsLmNoaWxkcmVuLmxlbmd0aCA9PSAxICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKGVsLmNoaWxkcmVuWzBdKS5pcyhcIjppbnB1dFwiKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZHN0W2tleV0gPSAkKGVsLmNoaWxkcmVuWzBdKS52YWwoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChlbC5jaGlsZHJlbi5sZW5ndGggPT0gMSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJChlbC5jaGlsZHJlbikuaXMoJy5jaGVjay1ib3gnKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZHN0W2tleV0gPSAkKGVsLmNoaWxkcmVuKS5oYXNDbGFzcyhcImNoZWNrZWRcIikgPyBcIlhcIiA6IFwiXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkc3Rba2V5XSA9IGVsLnRleHRDb250ZW50IHx8ICcnO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJvdysrO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGRzdDtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBleHBvcnQgZnVuY3Rpb24gZXhwb3J0VG9QZGYob3B0aW9uczogUGRmRXhwb3J0T3B0aW9ucyk6IHZvaWQge1xyXG5cclxuICAgICAgICAgICAgdmFyIGcgPSBvcHRpb25zLmdyaWQ7XHJcblxyXG4gICAgICAgICAgICBpZiAoIW9wdGlvbnMub25WaWV3U3VibWl0KCkpXHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcblxyXG4gICAgICAgICAgICBpbmNsdWRlQXV0b1RhYmxlKCk7XHJcblxyXG4gICAgICAgICAgICB2YXIgcmVxdWVzdCA9IFEuZGVlcENsb25lKGcudmlldy5wYXJhbXMpIGFzIFNlcmVuaXR5Lkxpc3RSZXF1ZXN0O1xyXG4gICAgICAgICAgICByZXF1ZXN0LlRha2UgPSAwO1xyXG4gICAgICAgICAgICByZXF1ZXN0LlNraXAgPSAwO1xyXG5cclxuICAgICAgICAgICAgdmFyIHNvcnRCeSA9IGcudmlldy5zb3J0Qnk7XHJcbiAgICAgICAgICAgIGlmIChzb3J0QnkgIT0gbnVsbClcclxuICAgICAgICAgICAgICAgIHJlcXVlc3QuU29ydCA9IHNvcnRCeTtcclxuXHJcbiAgICAgICAgICAgIHZhciBncmlkQ29sdW1ucyA9IGcuc2xpY2tHcmlkLmdldENvbHVtbnMoKTtcclxuICAgICAgICAgICAgZ3JpZENvbHVtbnMgPSBncmlkQ29sdW1ucy5maWx0ZXIoeCA9PiB4LmlkICE9PSBcIl9fc2VsZWN0X19cIik7XHJcblxyXG4gICAgICAgICAgICByZXF1ZXN0LkluY2x1ZGVDb2x1bW5zID0gW107XHJcbiAgICAgICAgICAgIGZvciAodmFyIGNvbHVtbiBvZiBncmlkQ29sdW1ucylcclxuICAgICAgICAgICAgICAgIHJlcXVlc3QuSW5jbHVkZUNvbHVtbnMucHVzaChjb2x1bW4uaWQgfHwgY29sdW1uLmZpZWxkKTtcclxuXHJcbiAgICAgICAgICAgIFEuc2VydmljZUNhbGwoe1xyXG4gICAgICAgICAgICAgICAgdXJsOiBnLnZpZXcudXJsLFxyXG4gICAgICAgICAgICAgICAgcmVxdWVzdDogcmVxdWVzdCxcclxuICAgICAgICAgICAgICAgIG9uU3VjY2VzczogcmVzcG9uc2UgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBkb2MgPSBuZXcganNQREYoJ2wnLCAncHQnKTtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgc3JjQ29sdW1ucyA9IGdyaWRDb2x1bW5zO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBjb2x1bW5TdHlsZXM6IHsgW2RhdGFLZXk6IHN0cmluZ106IGpzUERGLkF1dG9UYWJsZVN0eWxlczsgfSA9IHt9O1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBjb2x1bW5zID0gdG9BdXRvVGFibGVDb2x1bW5zKHNyY0NvbHVtbnMsIGNvbHVtblN0eWxlcywgb3B0aW9ucy5jb2x1bW5UaXRsZXMpO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBrZXlzID0gY29sdW1ucy5tYXAoeCA9PiB4LmRhdGFLZXkpO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBlbnRpdGllcyA9ICg8U2VyZW5pdHkuTGlzdFJlc3BvbnNlPGFueT4+cmVzcG9uc2UpLkVudGl0aWVzIHx8IFtdO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBkYXRhID0gdG9BdXRvVGFibGVEYXRhKGVudGl0aWVzLCBrZXlzLCBzcmNDb2x1bW5zKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgZG9jLnNldEZvbnRTaXplKG9wdGlvbnMudGl0bGVGb250U2l6ZSB8fCAxMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgZG9jLnNldEZvbnRTdHlsZSgnYm9sZCcpO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCByZXBvcnRUaXRsZSA9IG9wdGlvbnMucmVwb3J0VGl0bGUgfHwgZy5nZXRUaXRsZSgpIHx8IFwiUmVwb3J0XCI7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGRvYy5hdXRvVGFibGVUZXh0KHJlcG9ydFRpdGxlLCBkb2MuaW50ZXJuYWwucGFnZVNpemUud2lkdGggLyAyLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25zLnRpdGxlVG9wIHx8IDI1LCB7IGhhbGlnbjogJ2NlbnRlcicgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHZhciB0b3RhbFBhZ2VzRXhwID0gXCJ7e1R9fVwiO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBsZXQgcGFnZU51bWJlcnMgPSBvcHRpb25zLnBhZ2VOdW1iZXJzID09IG51bGwgfHwgb3B0aW9ucy5wYWdlTnVtYmVycztcclxuICAgICAgICAgICAgICAgICAgICB2YXIgYXV0b09wdGlvbnMgPSAkLmV4dGVuZCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogeyB0b3A6IDI1LCBsZWZ0OiAyNSwgcmlnaHQ6IDI1LCBib3R0b206IHBhZ2VOdW1iZXJzID8gMjUgOiAzMCB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdGFydFk6IDYwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZXM6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiA4LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3ZlcmZsb3c6ICdsaW5lYnJlYWsnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2VsbFBhZGRpbmc6IDIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWxpZ246ICdtaWRkbGUnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbHVtblN0eWxlczogY29sdW1uU3R5bGVzXHJcbiAgICAgICAgICAgICAgICAgICAgfSwgb3B0aW9ucy50YWJsZU9wdGlvbnMpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAocGFnZU51bWJlcnMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGZvb3RlciA9IGZ1bmN0aW9uIChkYXRhKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgc3RyID0gZGF0YS5wYWdlQ291bnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBUb3RhbCBwYWdlIG51bWJlciBwbHVnaW4gb25seSBhdmFpbGFibGUgaW4ganNwZGYgdjEuMCtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgZG9jLnB1dFRvdGFsUGFnZXMgPT09ICdmdW5jdGlvbicpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHIgPSBzdHIgKyBcIiAvIFwiICsgdG90YWxQYWdlc0V4cDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvYy5hdXRvVGFibGVUZXh0KHN0ciwgZG9jLmludGVybmFsLnBhZ2VTaXplLndpZHRoIC8gMixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb2MuaW50ZXJuYWwucGFnZVNpemUuaGVpZ2h0IC0gYXV0b09wdGlvbnMubWFyZ2luLmJvdHRvbSwge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoYWxpZ246ICdjZW50ZXInXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGF1dG9PcHRpb25zLmFmdGVyUGFnZUNvbnRlbnQgPSBmb290ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIC8vIFByaW50IGhlYWRlciBvZiBwYWdlXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wdGlvbnMucHJpbnREYXRlVGltZUhlYWRlciA9PSBudWxsIHx8IG9wdGlvbnMucHJpbnREYXRlVGltZUhlYWRlcikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgYmVmb3JlUGFnZSA9IGZ1bmN0aW9uIChkYXRhKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb2Muc2V0Rm9udFN0eWxlKCdub3JtYWwnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvYy5zZXRGb250U2l6ZSg4KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBEYXRlIGFuZCB0aW1lIG9mIHRoZSByZXBvcnRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvYy5hdXRvVGFibGVUZXh0KFEuZm9ybWF0RGF0ZShuZXcgRGF0ZSgpLCBcImRkLU1NLXl5eXkgSEg6bW1cIiksIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvYy5pbnRlcm5hbC5wYWdlU2l6ZS53aWR0aCAtIGF1dG9PcHRpb25zLm1hcmdpbi5yaWdodCwgMTMsIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGFsaWduOiAncmlnaHQnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGF1dG9PcHRpb25zLmJlZm9yZVBhZ2VDb250ZW50ID0gYmVmb3JlUGFnZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGRvYy5hdXRvVGFibGUoY29sdW1ucywgZGF0YSwgYXV0b09wdGlvbnMpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGRvYy5wdXRUb3RhbFBhZ2VzID09PSAnZnVuY3Rpb24nKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvYy5wdXRUb3RhbFBhZ2VzKHRvdGFsUGFnZXNFeHApO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmICghb3B0aW9ucy5vdXRwdXQgfHwgb3B0aW9ucy5vdXRwdXQgPT0gXCJmaWxlXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGZpbGVOYW1lID0gb3B0aW9ucy5maWxlTmFtZSB8fCBvcHRpb25zLnJlcG9ydFRpdGxlIHx8IFwiezB9X3sxfS5wZGZcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmlsZU5hbWUgPSBRLmZvcm1hdChmaWxlTmFtZSwgZy5nZXRUaXRsZSgpIHx8IFwicmVwb3J0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBRLmZvcm1hdERhdGUobmV3IERhdGUoKSwgXCJ5eXl5TU1kZF9ISG1tXCIpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZG9jLnNhdmUoZmlsZU5hbWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAob3B0aW9ucy5hdXRvUHJpbnQpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvYy5hdXRvUHJpbnQoKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIG91dHB1dCA9IG9wdGlvbnMub3V0cHV0O1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvdXRwdXQgPT0gJ25ld3dpbmRvdycgfHwgJ19ibGFuaycpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG91dHB1dCA9ICdkYXRhdXJsbmV3d2luZG93JztcclxuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChvdXRwdXQgPT0gJ3dpbmRvdycpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG91dHB1dCA9ICdkYXRhdXJpJztcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgZG9jLm91dHB1dChvdXRwdXQpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTsgXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBleHBvcnQgZnVuY3Rpb24gY3JlYXRlVG9vbEJ1dHRvbihvcHRpb25zOiBQZGZFeHBvcnRPcHRpb25zKSB7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gPFNlcmVuaXR5LlRvb2xCdXR0b24+e1xyXG4gICAgICAgICAgICAgICAgdGl0bGU6IG9wdGlvbnMudGl0bGUgfHwgJycsXHJcbiAgICAgICAgICAgICAgICBoaW50OiBvcHRpb25zLmhpbnQgfHwgJ1BERicsXHJcbiAgICAgICAgICAgICAgICBjc3NDbGFzczogJ2V4cG9ydC1wZGYtYnV0dG9uJyxcclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s6ICgpID0+IGV4cG9ydFRvUGRmKG9wdGlvbnMpLFxyXG4gICAgICAgICAgICAgICAgc2VwYXJhdG9yOiBvcHRpb25zLnNlcGFyYXRvclxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZnVuY3Rpb24gaW5jbHVkZUpzUERGKCkge1xyXG4gICAgICAgICAgICBpZiAodHlwZW9mIGpzUERGICE9PSBcInVuZGVmaW5lZFwiKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG5cclxuICAgICAgICAgICAgdmFyIHNjcmlwdCA9ICQoXCJqc1BERlNjcmlwdFwiKTtcclxuICAgICAgICAgICAgaWYgKHNjcmlwdC5sZW5ndGggPiAwKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG5cclxuICAgICAgICAgICAgJChcIjxzY3JpcHQvPlwiKVxyXG4gICAgICAgICAgICAgICAgLmF0dHIoXCJ0eXBlXCIsIFwidGV4dC9qYXZhc2NyaXB0XCIpXHJcbiAgICAgICAgICAgICAgICAuYXR0cihcImlkXCIsIFwianNQREZTY3JpcHRcIilcclxuICAgICAgICAgICAgICAgIC5hdHRyKFwic3JjXCIsIFEucmVzb2x2ZVVybChcIn4vU2NyaXB0cy9qc3BkZi5taW4uanNcIikpXHJcbiAgICAgICAgICAgICAgICAuYXBwZW5kVG8oZG9jdW1lbnQuaGVhZCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmdW5jdGlvbiBpbmNsdWRlQXV0b1RhYmxlKCkge1xyXG4gICAgICAgICAgICBpbmNsdWRlSnNQREYoKTtcclxuXHJcbiAgICAgICAgICAgIGlmICh0eXBlb2YganNQREYgPT09IFwidW5kZWZpbmVkXCIgfHxcclxuICAgICAgICAgICAgICAgIHR5cGVvZiAoanNQREYgYXMgYW55KS5BUEkgPT0gXCJ1bmRlZmluZWRcIiB8fFxyXG4gICAgICAgICAgICAgICAgdHlwZW9mIChqc1BERiBhcyBhbnkpLkFQSS5hdXRvVGFibGUgIT09IFwidW5kZWZpbmVkXCIpXHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcblxyXG4gICAgICAgICAgICB2YXIgc2NyaXB0ID0gJChcImpzUERGQXV0b1RhYmxlU2NyaXB0XCIpO1xyXG4gICAgICAgICAgICBpZiAoc2NyaXB0Lmxlbmd0aCA+IDApXHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcblxyXG4gICAgICAgICAgICAkKFwiPHNjcmlwdC8+XCIpXHJcbiAgICAgICAgICAgICAgICAuYXR0cihcInR5cGVcIiwgXCJ0ZXh0L2phdmFzY3JpcHRcIilcclxuICAgICAgICAgICAgICAgIC5hdHRyKFwiaWRcIiwgXCJqc1BERkF1dG9UYWJsZVNjcmlwdFwiKVxyXG4gICAgICAgICAgICAgICAgLmF0dHIoXCJzcmNcIiwgUS5yZXNvbHZlVXJsKFwifi9TY3JpcHRzL2pzcGRmLnBsdWdpbi5hdXRvdGFibGUubWluLmpzXCIpKVxyXG4gICAgICAgICAgICAgICAgLmFwcGVuZFRvKGRvY3VtZW50LmhlYWQpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCJkZWNsYXJlIHZhciBqc1BERjtcclxuXHJcbm5hbWVzcGFjZSBZYXhpZS5Db21tb24ge1xyXG4gICAgZXhwb3J0IGNsYXNzIFJlcG9ydERpYWxvZyBleHRlbmRzIFNlcmVuaXR5LlRlbXBsYXRlZERpYWxvZzxSZXBvcnREaWFsb2dPcHRpb25zPiB7XHJcblxyXG4gICAgICAgIHByaXZhdGUgcmVwb3J0OiBTZXJlbml0eS5SZXBvcnRpbmcuUmVwb3J0UmV0cmlldmVSZXNwb25zZTtcclxuICAgICAgICBwcml2YXRlIHByb3BlcnR5R3JpZDogU2VyZW5pdHkuUHJvcGVydHlHcmlkO1xyXG5cclxuICAgICAgICBjb25zdHJ1Y3RvcihvcHRpb25zOiBSZXBvcnREaWFsb2dPcHRpb25zKSB7XHJcbiAgICAgICAgICAgIHN1cGVyKG9wdGlvbnMpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy51cGRhdGVJbnRlcmZhY2UoKTtcclxuICAgICAgICAgICAgdGhpcy5sb2FkUmVwb3J0KHRoaXMub3B0aW9ucy5yZXBvcnRLZXkpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIGdldERpYWxvZ0J1dHRvbnMoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIGNyZWF0ZVByb3BlcnR5R3JpZCgpIHtcclxuICAgICAgICAgICAgdGhpcy5wcm9wZXJ0eUdyaWQgJiYgdGhpcy5ieUlkKCdQcm9wZXJ0eUdyaWQnKS5odG1sKCcnKS5hdHRyKCdjbGFzcycsICcnKTtcclxuICAgICAgICAgICAgdGhpcy5wcm9wZXJ0eUdyaWQgPSBuZXcgU2VyZW5pdHkuUHJvcGVydHlHcmlkKHRoaXMuYnlJZCgnUHJvcGVydHlHcmlkJyksIHtcclxuICAgICAgICAgICAgICAgIGlkUHJlZml4OiB0aGlzLmlkUHJlZml4LFxyXG4gICAgICAgICAgICAgICAgdXNlQ2F0ZWdvcmllczogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIGl0ZW1zOiB0aGlzLnJlcG9ydC5Qcm9wZXJ0aWVzXHJcbiAgICAgICAgICAgIH0pLmluaXQobnVsbCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgbG9hZFJlcG9ydChyZXBvcnRLZXk6IHN0cmluZykge1xyXG4gICAgICAgICAgICBRLnNlcnZpY2VDYWxsKHtcclxuICAgICAgICAgICAgICAgIHVybDogUS5yZXNvbHZlVXJsKCd+L1JlcG9ydC9SZXRyaWV2ZScpLFxyXG4gICAgICAgICAgICAgICAgcmVxdWVzdDoge1xyXG4gICAgICAgICAgICAgICAgICAgIFJlcG9ydEtleTogcmVwb3J0S2V5XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgb25TdWNjZXNzOiByZXNwb25zZSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yZXBvcnQgPSByZXNwb25zZSBhcyBTZXJlbml0eS5SZXBvcnRpbmcuUmVwb3J0UmV0cmlldmVSZXNwb25zZTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmVsZW1lbnQuZGlhbG9nKCkuZGlhbG9nKCdvcHRpb24nLCAndGl0bGUnLCB0aGlzLnJlcG9ydC5UaXRsZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jcmVhdGVQcm9wZXJ0eUdyaWQoKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BlcnR5R3JpZC5sb2FkKHRoaXMucmVwb3J0LkluaXRpYWxTZXR0aW5ncyB8fCB7fSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy51cGRhdGVJbnRlcmZhY2UoKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmRpYWxvZ09wZW4oKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgdXBkYXRlSW50ZXJmYWNlKCkge1xyXG4gICAgICAgICAgICB0aGlzLnRvb2xiYXIuZmluZEJ1dHRvbigncHJpbnQtcHJldmlldy1idXR0b24nKVxyXG4gICAgICAgICAgICAgICAgLnRvZ2dsZSh0aGlzLnJlcG9ydCAmJiAhdGhpcy5yZXBvcnQuSXNEYXRhT25seVJlcG9ydCk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLnRvb2xiYXIuZmluZEJ1dHRvbignZXhwb3J0LXBkZi1idXR0b24nKVxyXG4gICAgICAgICAgICAgICAgLnRvZ2dsZSh0aGlzLnJlcG9ydCAmJiAhdGhpcy5yZXBvcnQuSXNEYXRhT25seVJlcG9ydCk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLnRvb2xiYXIuZmluZEJ1dHRvbignZXhwb3J0LXhsc3gtYnV0dG9uJylcclxuICAgICAgICAgICAgICAgIC50b2dnbGUodGhpcy5yZXBvcnQgJiYgdGhpcy5yZXBvcnQuSXNEYXRhT25seVJlcG9ydCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBleGVjdXRlUmVwb3J0KHRhcmdldDogc3RyaW5nLCBleHQ6IHN0cmluZywgZG93bmxvYWQ6IGJvb2xlYW4pIHtcclxuICAgICAgICAgICAgaWYgKCF0aGlzLnZhbGlkYXRlRm9ybSgpKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHZhciBvcHQgPSB7fTtcclxuICAgICAgICAgICAgdGhpcy5wcm9wZXJ0eUdyaWQuc2F2ZShvcHQpO1xyXG4gICAgICAgICAgICBSZXBvcnRIZWxwZXIuZXhlY3V0ZSh7XHJcbiAgICAgICAgICAgICAgICBkb3dubG9hZDogZG93bmxvYWQsXHJcbiAgICAgICAgICAgICAgICByZXBvcnRLZXk6IHRoaXMucmVwb3J0LlJlcG9ydEtleSxcclxuICAgICAgICAgICAgICAgIGV4dGVuc2lvbjogZXh0IGFzIGFueSxcclxuICAgICAgICAgICAgICAgIHRhcmdldDogdGFyZ2V0LFxyXG4gICAgICAgICAgICAgICAgcGFyYW1zOiBvcHRcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgXHJcbiAgICAgICAgZ2V0VG9vbGJhckJ1dHRvbnMoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBbXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICdQcmV2aWV3JyxcclxuICAgICAgICAgICAgICAgICAgICBjc3NDbGFzczogJ3ByaW50LXByZXZpZXctYnV0dG9uJyxcclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrOiAoKSA9PiB0aGlzLmV4ZWN1dGVSZXBvcnQoJ19ibGFuaycsIG51bGwsIGZhbHNlKVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ1BERicsXHJcbiAgICAgICAgICAgICAgICAgICAgY3NzQ2xhc3M6ICdleHBvcnQtcGRmLWJ1dHRvbicsXHJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljazogKCkgPT4gdGhpcy5leGVjdXRlUmVwb3J0KCdfYmxhbmsnLCAncGRmJywgdHJ1ZSlcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICdFeGNlbCcsXHJcbiAgICAgICAgICAgICAgICAgICAgY3NzQ2xhc3M6ICdleHBvcnQteGxzeC1idXR0b24nLFxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s6ICgpID0+IHRoaXMuZXhlY3V0ZVJlcG9ydCgnX2JsYW5rJywgJ3hsc3gnLCB0cnVlKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBdO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBleHBvcnQgaW50ZXJmYWNlIFJlcG9ydERpYWxvZ09wdGlvbnMge1xyXG4gICAgICAgIHJlcG9ydEtleTogc3RyaW5nO1xyXG4gICAgfVxyXG59XHJcbiIsIm5hbWVzcGFjZSBZYXhpZS5Db21tb24ge1xyXG5cclxuICAgIGV4cG9ydCBpbnRlcmZhY2UgUmVwb3J0RXhlY3V0ZU9wdGlvbnMge1xyXG4gICAgICAgIHJlcG9ydEtleTogc3RyaW5nO1xyXG4gICAgICAgIGRvd25sb2FkPzogYm9vbGVhbjtcclxuICAgICAgICBleHRlbnNpb24/OiAncGRmJyB8ICdodG0nIHwgJ2h0bWwnIHwgJ3hsc3gnIHwgJ2RvY3gnO1xyXG4gICAgICAgIGdldFBhcmFtcz86ICgpID0+IGFueTtcclxuICAgICAgICBwYXJhbXM/OiB7IFtrZXk6IHN0cmluZ106IGFueSB9XHJcbiAgICAgICAgdGFyZ2V0Pzogc3RyaW5nO1xyXG4gICAgfVxyXG5cclxuICAgIGV4cG9ydCBpbnRlcmZhY2UgUmVwb3J0QnV0dG9uT3B0aW9ucyBleHRlbmRzIFJlcG9ydEV4ZWN1dGVPcHRpb25zIHtcclxuICAgICAgICB0aXRsZT86IHN0cmluZztcclxuICAgICAgICBjc3NDbGFzcz86IHN0cmluZztcclxuICAgICAgICBpY29uPzogc3RyaW5nO1xyXG4gICAgfVxyXG5cclxuICAgIGV4cG9ydCBuYW1lc3BhY2UgUmVwb3J0SGVscGVyIHtcclxuXHJcbiAgICAgICAgZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVRvb2xCdXR0b24ob3B0aW9uczogUmVwb3J0QnV0dG9uT3B0aW9ucyk6IFNlcmVuaXR5LlRvb2xCdXR0b24ge1xyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgdGl0bGU6IFEuY29hbGVzY2Uob3B0aW9ucy50aXRsZSwgJ1JlcG9ydCcpLFxyXG4gICAgICAgICAgICAgICAgY3NzQ2xhc3M6IFEuY29hbGVzY2Uob3B0aW9ucy5jc3NDbGFzcywgJ3ByaW50LWJ1dHRvbicpLFxyXG4gICAgICAgICAgICAgICAgaWNvbjogb3B0aW9ucy5pY29uLFxyXG4gICAgICAgICAgICAgICAgb25DbGljazogKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIFJlcG9ydEhlbHBlci5leGVjdXRlKG9wdGlvbnMpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZXhwb3J0IGZ1bmN0aW9uIGV4ZWN1dGUob3B0aW9uczogUmVwb3J0RXhlY3V0ZU9wdGlvbnMpIHtcclxuICAgICAgICAgICAgdmFyIG9wdCA9IG9wdGlvbnMuZ2V0UGFyYW1zID8gb3B0aW9ucy5nZXRQYXJhbXMoKSA6IG9wdGlvbnMucGFyYW1zO1xyXG5cclxuICAgICAgICAgICAgUS5wb3N0VG9Vcmwoe1xyXG4gICAgICAgICAgICAgICAgdXJsOiAnfi9SZXBvcnQvJyArIChvcHRpb25zLmRvd25sb2FkID8gJ0Rvd25sb2FkJyA6ICdSZW5kZXInKSxcclxuICAgICAgICAgICAgICAgIHBhcmFtczoge1xyXG4gICAgICAgICAgICAgICAgICAgIGtleTogb3B0aW9ucy5yZXBvcnRLZXksXHJcbiAgICAgICAgICAgICAgICAgICAgZXh0OiBRLmNvYWxlc2NlKG9wdGlvbnMuZXh0ZW5zaW9uLCAncGRmJyksXHJcbiAgICAgICAgICAgICAgICAgICAgb3B0OiBvcHQgPyAkLnRvSlNPTihvcHQpIDogJydcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB0YXJnZXQ6IFEuY29hbGVzY2Uob3B0aW9ucy50YXJnZXQsICdfYmxhbmsnKVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCJkZWNsYXJlIHZhciBqc1BERjtcclxuXHJcbm5hbWVzcGFjZSBZYXhpZS5Db21tb24ge1xyXG4gICAgZXhwb3J0IGNsYXNzIFJlcG9ydFBhZ2UgZXh0ZW5kcyBTZXJlbml0eS5XaWRnZXQ8YW55PiB7XHJcblxyXG4gICAgICAgIHByaXZhdGUgcmVwb3J0S2V5OiBzdHJpbmc7XHJcbiAgICAgICAgcHJpdmF0ZSBwcm9wZXJ0eUl0ZW1zOiBTZXJlbml0eS5Qcm9wZXJ0eUl0ZW1bXTtcclxuICAgICAgICBwcml2YXRlIHByb3BlcnR5R3JpZDogU2VyZW5pdHkuUHJvcGVydHlHcmlkO1xyXG5cclxuICAgICAgICBjb25zdHJ1Y3RvcihlbGVtZW50OiBKUXVlcnkpIHtcclxuICAgICAgICAgICAgc3VwZXIoZWxlbWVudCk7XHJcblxyXG4gICAgICAgICAgICAkKCcucmVwb3J0LWxpbmsnLCBlbGVtZW50KS5jbGljayhlID0+IHRoaXMucmVwb3J0TGlua0NsaWNrKGUpKTtcclxuICAgICAgICAgICAgJCgnZGl2LmxpbmUnLCBlbGVtZW50KS5jbGljayhlID0+IHRoaXMuY2F0ZWdvcnlDbGljayhlKSk7XHJcbiAgICAgICAgICAgIG5ldyBTZXJlbml0eS5RdWlja1NlYXJjaElucHV0KCQoJy5zLVF1aWNrU2VhcmNoQmFyIGlucHV0JywgZWxlbWVudCksIHtcclxuICAgICAgICAgICAgICAgIG9uU2VhcmNoOiAoZmllbGQsIHRleHQsIGRvbmUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZU1hdGNoRmxhZ3ModGV4dCk7XHJcbiAgICAgICAgICAgICAgICAgICAgZG9uZSh0cnVlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgdXBkYXRlTWF0Y2hGbGFncyh0ZXh0OiBzdHJpbmcpIHtcclxuICAgICAgICAgICAgdmFyIGxpTGlzdCA9ICQoJy5yZXBvcnQtbGlzdCcsIHRoaXMuZWxlbWVudCkuZmluZCgnbGknKS5yZW1vdmVDbGFzcygnbm9uLW1hdGNoJyk7XHJcbiAgICAgICAgICAgIHRleHQgPSBRLnRyaW1Ub051bGwodGV4dCk7XHJcbiAgICAgICAgICAgIGlmICghdGV4dCkge1xyXG4gICAgICAgICAgICAgICAgbGlMaXN0LmNoaWxkcmVuKCd1bCcpLmhpZGUoKTtcclxuICAgICAgICAgICAgICAgIGxpTGlzdC5zaG93KCkucmVtb3ZlQ2xhc3MoJ2V4cGFuZGVkJyk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHRleHQgPSBTZWxlY3QyLnV0aWwuc3RyaXBEaWFjcml0aWNzKHRleHQpLnRvVXBwZXJDYXNlKCk7XHJcblxyXG4gICAgICAgICAgICB2YXIgcmVwb3J0SXRlbXMgPSBsaUxpc3QuZmlsdGVyKCcucmVwb3J0LWl0ZW0nKTtcclxuICAgICAgICAgICAgcmVwb3J0SXRlbXMuZWFjaChmdW5jdGlvbiAoaXgsIGUpIHtcclxuICAgICAgICAgICAgICAgIHZhciB4ID0gJChlKTtcclxuICAgICAgICAgICAgICAgIHZhciB0aXRsZSA9IFNlbGVjdDIudXRpbC5zdHJpcERpYWNyaXRpY3MoUS5jb2FsZXNjZSh4LnRleHQoKSwgJycpLnRvVXBwZXJDYXNlKCkpO1xyXG4gICAgICAgICAgICAgICAgaWYgKHRpdGxlLmluZGV4T2YodGV4dCkgPCAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgeC5hZGRDbGFzcygnbm9uLW1hdGNoJyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgdmFyIG1hdGNoaW5nSXRlbXMgPSByZXBvcnRJdGVtcy5ub3QoJy5ub24tbWF0Y2gnKTtcclxuICAgICAgICAgICAgdmFyIHZpc2libGVzID0gbWF0Y2hpbmdJdGVtcy5wYXJlbnRzKCdsaScpLmFkZChtYXRjaGluZ0l0ZW1zKTtcclxuICAgICAgICAgICAgdmFyIG5vblZpc2libGVzID0gbGlMaXN0Lm5vdCh2aXNpYmxlcyk7XHJcbiAgICAgICAgICAgIG5vblZpc2libGVzLmhpZGUoKS5hZGRDbGFzcygnbm9uLW1hdGNoJyk7XHJcbiAgICAgICAgICAgIHZpc2libGVzLnNob3coKTtcclxuICAgICAgICAgICAgaWYgKHZpc2libGVzLmxlbmd0aCA8PSAxMDApIHtcclxuICAgICAgICAgICAgICAgIGxpTGlzdC5jaGlsZHJlbigndWwnKS5zaG93KCk7XHJcbiAgICAgICAgICAgICAgICBsaUxpc3QuYWRkQ2xhc3MoJ2V4cGFuZGVkJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCBjYXRlZ29yeUNsaWNrKGUpIHtcclxuICAgICAgICAgICAgdmFyIGxpID0gJChlLnRhcmdldCkuY2xvc2VzdCgnbGknKTtcclxuICAgICAgICAgICAgaWYgKGxpLmhhc0NsYXNzKCdleHBhbmRlZCcpKSB7XHJcbiAgICAgICAgICAgICAgICBsaS5maW5kKCd1bCcpLmhpZGUoJ2Zhc3QnKTtcclxuICAgICAgICAgICAgICAgIGxpLnJlbW92ZUNsYXNzKCdleHBhbmRlZCcpO1xyXG4gICAgICAgICAgICAgICAgbGkuZmluZCgnbGknKS5yZW1vdmVDbGFzcygnZXhwYW5kZWQnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGxpLmFkZENsYXNzKCdleHBhbmRlZCcpO1xyXG4gICAgICAgICAgICAgICAgbGkuY2hpbGRyZW4oJ3VsJykuc2hvdygnZmFzdCcpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGxpLmNoaWxkcmVuKCd1bCcpLmNoaWxkcmVuKCdsaScpLmxlbmd0aCA9PT0gMSAmJiAhbGkuY2hpbGRyZW4oJ3VsJykuY2hpbGRyZW4oJ2xpJykuaGFzQ2xhc3MoJ2V4cGFuZGVkJykpIHtcclxuICAgICAgICAgICAgICAgICAgICBsaS5jaGlsZHJlbigndWwnKS5jaGlsZHJlbignbGknKS5jaGlsZHJlbignLmxpbmUnKS5jbGljaygpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgcmVwb3J0TGlua0NsaWNrKGUpIHtcclxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICBuZXcgUmVwb3J0RGlhbG9nKHtcclxuICAgICAgICAgICAgICAgIHJlcG9ydEtleTogJChlLnRhcmdldCkuZGF0YSgna2V5JylcclxuICAgICAgICAgICAgfSkuZGlhbG9nT3BlbigpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCJuYW1lc3BhY2UgWWF4aWUuQ29tbW9uIHtcclxuICAgIGV4cG9ydCBjbGFzcyBVc2VyUHJlZmVyZW5jZVN0b3JhZ2UgaW1wbGVtZW50cyBTZXJlbml0eS5TZXR0aW5nU3RvcmFnZSB7XHJcbiAgICAgICAgZ2V0SXRlbShrZXk6IHN0cmluZyk6IHN0cmluZyB7XHJcbiAgICAgICAgICAgIGxldCB2YWx1ZTogc3RyaW5nO1xyXG5cclxuICAgICAgICAgICAgVXNlclByZWZlcmVuY2VTZXJ2aWNlLlJldHJpZXZlKHtcclxuICAgICAgICAgICAgICAgIFByZWZlcmVuY2VUeXBlOiBcIlVzZXJQcmVmZXJlbmNlU3RvcmFnZVwiLFxyXG4gICAgICAgICAgICAgICAgTmFtZToga2V5XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHJlc3BvbnNlID0+IHZhbHVlID0gcmVzcG9uc2UuVmFsdWUsXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGFzeW5jOiBmYWxzZVxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHNldEl0ZW0oa2V5OiBzdHJpbmcsIGRhdGE6IHN0cmluZyk6IHZvaWQge1xyXG4gICAgICAgICAgICBVc2VyUHJlZmVyZW5jZVNlcnZpY2UuVXBkYXRlKHtcclxuICAgICAgICAgICAgICAgIFByZWZlcmVuY2VUeXBlOiBcIlVzZXJQcmVmZXJlbmNlU3RvcmFnZVwiLFxyXG4gICAgICAgICAgICAgICAgTmFtZToga2V5LFxyXG4gICAgICAgICAgICAgICAgVmFsdWU6IGRhdGFcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwibmFtZXNwYWNlIFlheGllLk1lbWJlcnNoaXAge1xyXG5cclxuICAgIEBTZXJlbml0eS5EZWNvcmF0b3JzLnJlZ2lzdGVyQ2xhc3MoKVxyXG4gICAgZXhwb3J0IGNsYXNzIExvZ2luUGFuZWwgZXh0ZW5kcyBTZXJlbml0eS5Qcm9wZXJ0eVBhbmVsPExvZ2luUmVxdWVzdCwgYW55PiB7XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRGb3JtS2V5KCkgeyByZXR1cm4gTG9naW5Gb3JtLmZvcm1LZXk7IH1cclxuXHJcbiAgICAgICAgY29uc3RydWN0b3IoY29udGFpbmVyOiBKUXVlcnkpIHtcclxuICAgICAgICAgICAgc3VwZXIoY29udGFpbmVyKTtcclxuXHJcbiAgICAgICAgICAgICQuZm5bJ3ZlZ2FzJ10gJiYgJCgnYm9keScpWyd2ZWdhcyddKHtcclxuICAgICAgICAgICAgICAgIGRlbGF5OiAzMDAwMCxcclxuICAgICAgICAgICAgICAgIGNvdmVyOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgb3ZlcmxheTogXCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUFJQUFBQUNBUU1BQUFCSWVKOW5BQUFBQTNOQ1NWUUlDQWpiNFVcIiArXHJcbiAgICAgICAgICAgICAgICAgICAgXCIvZ0FBQUFCbEJNVkVYLy8vOEFBQUJWd3ROK0FBQUFBblJTVGxNQS8xdVJJclVBQUFBSmNFaFpjd0FBQXNRQUFBTEVBVnVSblFzQUFBQVdkRVZZZEVOeVpXRjBcIiArXHJcbiAgICAgICAgICAgICAgICAgICAgXCJhVzl1SUZScGJXVUFNRFF2TVRNdk1UR3JXMFQ2QUFBQUhIUkZXSFJUYjJaMGQyRnlaUUJCWkc5aVpTQkdhWEpsZDI5eWEzTWdRMU0xY2JYak5nQUFBQXhKUkVGVUNKbGphR0JnQUFBQmhBQ0JyT05JUGdBQUFBQkpSVTVFcmtKZ2dnPT1cIixcclxuICAgICAgICAgICAgICAgIHNsaWRlczogW1xyXG4gICAgICAgICAgICAgICAgICAgIHsgc3JjOiBRLnJlc29sdmVVcmwoXCJ+L0NvbnRlbnQvc2l0ZS9zbGlkZXMvc2xpZGUxLmpwZ1wiKSwgdHJhbnNpdGlvbjogJ2ZhZGUnIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgeyBzcmM6IFEucmVzb2x2ZVVybChcIn4vQ29udGVudC9zaXRlL3NsaWRlcy9zbGlkZTIuanBnXCIpLCB0cmFuc2l0aW9uOiAnem9vbU91dCcgfSxcclxuICAgICAgICAgICAgICAgICAgICB7IHNyYzogUS5yZXNvbHZlVXJsKFwifi9Db250ZW50L3NpdGUvc2xpZGVzL3NsaWRlMy5qcGdcIiksIHRyYW5zaXRpb246ICdzd2lybExlZnQnIH1cclxuICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmJ5SWQoJ0xvZ2luQnV0dG9uJykuY2xpY2soZSA9PiB7XHJcbiAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLnZhbGlkYXRlRm9ybSgpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIHZhciByZXF1ZXN0ID0gdGhpcy5nZXRTYXZlRW50aXR5KCk7XHJcblxyXG4gICAgICAgICAgICAgICAgUS5zZXJ2aWNlQ2FsbCh7XHJcbiAgICAgICAgICAgICAgICAgICAgdXJsOiBRLnJlc29sdmVVcmwoJ34vQWNjb3VudC9Mb2dpbicpLFxyXG4gICAgICAgICAgICAgICAgICAgIHJlcXVlc3Q6IHJlcXVlc3QsXHJcbiAgICAgICAgICAgICAgICAgICAgb25TdWNjZXNzOiByZXNwb25zZSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucmVkaXJlY3RUb1JldHVyblVybCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgb25FcnJvcjogKHJlc3BvbnNlOiBTZXJlbml0eS5TZXJ2aWNlUmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlICE9IG51bGwgJiYgcmVzcG9uc2UuRXJyb3IgIT0gbnVsbCAmJiByZXNwb25zZS5FcnJvci5Db2RlID09IFwiUmVkaXJlY3RVc2VyVG9cIikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSByZXNwb25zZS5FcnJvci5Bcmd1bWVudHM7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZSAhPSBudWxsICYmIHJlc3BvbnNlLkVycm9yICE9IG51bGwgJiYgIVEuaXNFbXB0eU9yTnVsbChyZXNwb25zZS5FcnJvci5NZXNzYWdlKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgUS5ub3RpZnlFcnJvcihyZXNwb25zZS5FcnJvci5NZXNzYWdlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICQoJyNQYXNzd29yZCcpLmZvY3VzKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBRLkVycm9ySGFuZGxpbmcuc2hvd1NlcnZpY2VFcnJvcihyZXNwb25zZS5FcnJvcik7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIHJlZGlyZWN0VG9SZXR1cm5VcmwoKSB7XHJcbiAgICAgICAgICAgIHZhciBxID0gUS5wYXJzZVF1ZXJ5U3RyaW5nKCk7XHJcbiAgICAgICAgICAgIHZhciByZXR1cm5VcmwgPSBxWydyZXR1cm5VcmwnXSB8fCBxWydSZXR1cm5VcmwnXTtcclxuICAgICAgICAgICAgaWYgKHJldHVyblVybCkge1xyXG4gICAgICAgICAgICAgICAgdmFyIGhhc2ggPSB3aW5kb3cubG9jYXRpb24uaGFzaDtcclxuICAgICAgICAgICAgICAgIGlmIChoYXNoICE9IG51bGwgJiYgaGFzaCAhPSAnIycpXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuVXJsICs9IGhhc2g7XHJcbiAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IHJldHVyblVybDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gUS5yZXNvbHZlVXJsKCd+LycpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0VGVtcGxhdGUoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBgXHJcbjxkaXYgY2xhc3M9XCJmbGV4LWxheW91dFwiPlxyXG4gICAgPGRpdiBjbGFzcz1cImxvZ29cIj48L2Rpdj5cclxuICAgIDxoMz4ke1EudGV4dChcIkZvcm1zLk1lbWJlcnNoaXAuTG9naW4uRm9ybVRpdGxlXCIpfTwvaDM+XHJcbiAgICA8Zm9ybSBpZD1cIn5fRm9ybVwiIGFjdGlvbj1cIlwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJzLUZvcm1cIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZpZWxkc2V0IHVpLXdpZGdldCB1aS13aWRnZXQtY29udGVudCB1aS1jb3JuZXItYWxsXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGlkPVwifl9Qcm9wZXJ0eUdyaWRcIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjbGVhclwiPjwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImJ1dHRvbnNcIj5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gaWQ9XCJ+X0xvZ2luQnV0dG9uXCIgdHlwZT1cInN1Ym1pdFwiIGNsYXNzPVwiYnRuIGJ0bi1wcmltYXJ5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgJHtRLnRleHQoXCJGb3Jtcy5NZW1iZXJzaGlwLkxvZ2luLlNpZ25JbkJ1dHRvblwiKX1cclxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImFjdGlvbnNcIj5cclxuICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIke1EucmVzb2x2ZVVybCgnfi9BY2NvdW50L0ZvcmdvdFBhc3N3b3JkJyl9XCI+PGkgY2xhc3M9XCJmYSBmYS1hbmdsZS1yaWdodFwiPjwvaT4mbmJzcDske1EudGV4dChcIkZvcm1zLk1lbWJlcnNoaXAuTG9naW4uRm9yZ290UGFzc3dvcmRcIil9PC9hPlxyXG4gICAgICAgICAgICAgICAgPGEgaHJlZj1cIiR7US5yZXNvbHZlVXJsKCd+L0FjY291bnQvU2lnblVwJyl9XCI+PGkgY2xhc3M9XCJmYSBmYS1hbmdsZS1yaWdodFwiPjwvaT4mbmJzcDske1EudGV4dChcIkZvcm1zLk1lbWJlcnNoaXAuTG9naW4uU2lnblVwQnV0dG9uXCIpfTwvYT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjbGVhclwiPjwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIDwvZm9ybT5cclxuPC9kaXY+XHJcbmA7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwibmFtZXNwYWNlIFlheGllLk1lbWJlcnNoaXAge1xyXG5cclxuICAgIEBTZXJlbml0eS5EZWNvcmF0b3JzLnJlZ2lzdGVyQ2xhc3MoKVxyXG4gICAgZXhwb3J0IGNsYXNzIENoYW5nZVBhc3N3b3JkUGFuZWwgZXh0ZW5kcyBTZXJlbml0eS5Qcm9wZXJ0eVBhbmVsPENoYW5nZVBhc3N3b3JkUmVxdWVzdCwgYW55PiB7XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRGb3JtS2V5KCkgeyByZXR1cm4gQ2hhbmdlUGFzc3dvcmRGb3JtLmZvcm1LZXk7IH1cclxuXHJcbiAgICAgICAgcHJpdmF0ZSBmb3JtOiBDaGFuZ2VQYXNzd29yZEZvcm07XHJcblxyXG4gICAgICAgIGNvbnN0cnVjdG9yKGNvbnRhaW5lcjogSlF1ZXJ5KSB7XHJcbiAgICAgICAgICAgIHN1cGVyKGNvbnRhaW5lcik7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmZvcm0gPSBuZXcgQ2hhbmdlUGFzc3dvcmRGb3JtKHRoaXMuaWRQcmVmaXgpO1xyXG4gICAgICAgICAgICB0aGlzLmZvcm0uTmV3UGFzc3dvcmQuYWRkVmFsaWRhdGlvblJ1bGUodGhpcy51bmlxdWVOYW1lLCBlID0+IHtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmZvcm0udygnQ29uZmlybVBhc3N3b3JkJywgU2VyZW5pdHkuUGFzc3dvcmRFZGl0b3IpLnZhbHVlLmxlbmd0aCA8IDcpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gUS5mb3JtYXQoUS50ZXh0KCdWYWxpZGF0aW9uLk1pblJlcXVpcmVkUGFzc3dvcmRMZW5ndGgnKSwgNyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5mb3JtLkNvbmZpcm1QYXNzd29yZC5hZGRWYWxpZGF0aW9uUnVsZSh0aGlzLnVuaXF1ZU5hbWUsIGUgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuZm9ybS5Db25maXJtUGFzc3dvcmQudmFsdWUgIT09IHRoaXMuZm9ybS5OZXdQYXNzd29yZC52YWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBRLnRleHQoJ1ZhbGlkYXRpb24uUGFzc3dvcmRDb25maXJtJyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5ieUlkKCdTdWJtaXRCdXR0b24nKS5jbGljayhlID0+IHtcclxuICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMudmFsaWRhdGVGb3JtKCkpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIHJlcXVlc3QgPSB0aGlzLmdldFNhdmVFbnRpdHkoKTtcclxuICAgICAgICAgICAgICAgIFEuc2VydmljZUNhbGwoe1xyXG4gICAgICAgICAgICAgICAgICAgIHVybDogUS5yZXNvbHZlVXJsKCd+L0FjY291bnQvQ2hhbmdlUGFzc3dvcmQnKSxcclxuICAgICAgICAgICAgICAgICAgICByZXF1ZXN0OiByZXF1ZXN0LFxyXG4gICAgICAgICAgICAgICAgICAgIG9uU3VjY2VzczogcmVzcG9uc2UgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBRLmluZm9ybWF0aW9uKFEudGV4dCgnRm9ybXMuTWVtYmVyc2hpcC5DaGFuZ2VQYXNzd29yZC5TdWNjZXNzJyksICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gUS5yZXNvbHZlVXJsKCd+LycpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwibmFtZXNwYWNlIFlheGllLk1lbWJlcnNoaXAge1xyXG5cclxuICAgIEBTZXJlbml0eS5EZWNvcmF0b3JzLnJlZ2lzdGVyQ2xhc3MoKVxyXG4gICAgZXhwb3J0IGNsYXNzIEZvcmdvdFBhc3N3b3JkUGFuZWwgZXh0ZW5kcyBTZXJlbml0eS5Qcm9wZXJ0eVBhbmVsPEZvcmdvdFBhc3N3b3JkUmVxdWVzdCwgYW55PiB7XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRGb3JtS2V5KCkgeyByZXR1cm4gRm9yZ290UGFzc3dvcmRGb3JtLmZvcm1LZXk7IH1cclxuXHJcbiAgICAgICAgcHJpdmF0ZSBmb3JtOiBGb3Jnb3RQYXNzd29yZEZvcm07XHJcblxyXG4gICAgICAgIGNvbnN0cnVjdG9yKGNvbnRhaW5lcjogSlF1ZXJ5KSB7XHJcbiAgICAgICAgICAgIHN1cGVyKGNvbnRhaW5lcik7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmZvcm0gPSBuZXcgRm9yZ290UGFzc3dvcmRGb3JtKHRoaXMuaWRQcmVmaXgpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5ieUlkKCdTdWJtaXRCdXR0b24nKS5jbGljayhlID0+IHtcclxuICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMudmFsaWRhdGVGb3JtKCkpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIHJlcXVlc3QgPSB0aGlzLmdldFNhdmVFbnRpdHkoKTtcclxuICAgICAgICAgICAgICAgIFEuc2VydmljZUNhbGwoe1xyXG4gICAgICAgICAgICAgICAgICAgIHVybDogUS5yZXNvbHZlVXJsKCd+L0FjY291bnQvRm9yZ290UGFzc3dvcmQnKSxcclxuICAgICAgICAgICAgICAgICAgICByZXF1ZXN0OiByZXF1ZXN0LFxyXG4gICAgICAgICAgICAgICAgICAgIG9uU3VjY2VzczogcmVzcG9uc2UgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBRLmluZm9ybWF0aW9uKFEudGV4dCgnRm9ybXMuTWVtYmVyc2hpcC5Gb3Jnb3RQYXNzd29yZC5TdWNjZXNzJyksICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gUS5yZXNvbHZlVXJsKCd+LycpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwibmFtZXNwYWNlIFlheGllLk1lbWJlcnNoaXAge1xyXG5cclxuICAgIEBTZXJlbml0eS5EZWNvcmF0b3JzLnJlZ2lzdGVyQ2xhc3MoKVxyXG4gICAgZXhwb3J0IGNsYXNzIFJlc2V0UGFzc3dvcmRQYW5lbCBleHRlbmRzIFNlcmVuaXR5LlByb3BlcnR5UGFuZWw8UmVzZXRQYXNzd29yZFJlcXVlc3QsIGFueT4ge1xyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0Rm9ybUtleSgpIHsgcmV0dXJuIFJlc2V0UGFzc3dvcmRGb3JtLmZvcm1LZXk7IH1cclxuXHJcbiAgICAgICAgcHJpdmF0ZSBmb3JtOiBSZXNldFBhc3N3b3JkRm9ybTtcclxuXHJcbiAgICAgICAgY29uc3RydWN0b3IoY29udGFpbmVyOiBKUXVlcnkpIHtcclxuICAgICAgICAgICAgc3VwZXIoY29udGFpbmVyKTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuZm9ybSA9IG5ldyBSZXNldFBhc3N3b3JkRm9ybSh0aGlzLmlkUHJlZml4KTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuZm9ybS5OZXdQYXNzd29yZC5hZGRWYWxpZGF0aW9uUnVsZSh0aGlzLnVuaXF1ZU5hbWUsIGUgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuZm9ybS5Db25maXJtUGFzc3dvcmQudmFsdWUubGVuZ3RoIDwgNykge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBRLmZvcm1hdChRLnRleHQoJ1ZhbGlkYXRpb24uTWluUmVxdWlyZWRQYXNzd29yZExlbmd0aCcpLCA3KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmZvcm0uQ29uZmlybVBhc3N3b3JkLmFkZFZhbGlkYXRpb25SdWxlKHRoaXMudW5pcXVlTmFtZSwgZSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5mb3JtLkNvbmZpcm1QYXNzd29yZC52YWx1ZSAhPT0gdGhpcy5mb3JtLk5ld1Bhc3N3b3JkLnZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFEudGV4dCgnVmFsaWRhdGlvbi5QYXNzd29yZENvbmZpcm0nKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmJ5SWQoJ1N1Ym1pdEJ1dHRvbicpLmNsaWNrKGUgPT4ge1xyXG4gICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmICghdGhpcy52YWxpZGF0ZUZvcm0oKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgcmVxdWVzdCA9IHRoaXMuZ2V0U2F2ZUVudGl0eSgpO1xyXG4gICAgICAgICAgICAgICAgcmVxdWVzdC5Ub2tlbiA9IHRoaXMuYnlJZCgnVG9rZW4nKS52YWwoKTtcclxuICAgICAgICAgICAgICAgIFEuc2VydmljZUNhbGwoe1xyXG4gICAgICAgICAgICAgICAgICAgIHVybDogUS5yZXNvbHZlVXJsKCd+L0FjY291bnQvUmVzZXRQYXNzd29yZCcpLFxyXG4gICAgICAgICAgICAgICAgICAgIHJlcXVlc3Q6IHJlcXVlc3QsXHJcbiAgICAgICAgICAgICAgICAgICAgb25TdWNjZXNzOiByZXNwb25zZSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFEuaW5mb3JtYXRpb24oUS50ZXh0KCdGb3Jtcy5NZW1iZXJzaGlwLlJlc2V0UGFzc3dvcmQuU3VjY2VzcycpLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IFEucmVzb2x2ZVVybCgnfi9BY2NvdW50L0xvZ2luJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwibmFtZXNwYWNlIFlheGllLk1lbWJlcnNoaXAge1xyXG5cclxuICAgIEBTZXJlbml0eS5EZWNvcmF0b3JzLnJlZ2lzdGVyQ2xhc3MoKVxyXG4gICAgZXhwb3J0IGNsYXNzIFNpZ25VcFBhbmVsIGV4dGVuZHMgU2VyZW5pdHkuUHJvcGVydHlQYW5lbDxTaWduVXBSZXF1ZXN0LCBhbnk+IHtcclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIGdldEZvcm1LZXkoKSB7IHJldHVybiBTaWduVXBGb3JtLmZvcm1LZXk7IH1cclxuXHJcbiAgICAgICAgcHJpdmF0ZSBmb3JtOiBTaWduVXBGb3JtO1xyXG5cclxuICAgICAgICBjb25zdHJ1Y3Rvcihjb250YWluZXI6IEpRdWVyeSkge1xyXG4gICAgICAgICAgICBzdXBlcihjb250YWluZXIpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5mb3JtID0gbmV3IFNpZ25VcEZvcm0odGhpcy5pZFByZWZpeCk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmZvcm0uQ29uZmlybUVtYWlsLmFkZFZhbGlkYXRpb25SdWxlKHRoaXMudW5pcXVlTmFtZSwgZSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5mb3JtLkNvbmZpcm1FbWFpbC52YWx1ZSAhPT0gdGhpcy5mb3JtLkVtYWlsLnZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFEudGV4dCgnVmFsaWRhdGlvbi5FbWFpbENvbmZpcm0nKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmZvcm0uQ29uZmlybVBhc3N3b3JkLmFkZFZhbGlkYXRpb25SdWxlKHRoaXMudW5pcXVlTmFtZSwgZSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5mb3JtLkNvbmZpcm1QYXNzd29yZC52YWx1ZSAhPT0gdGhpcy5mb3JtLlBhc3N3b3JkLnZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFEudGV4dCgnVmFsaWRhdGlvbi5QYXNzd29yZENvbmZpcm0nKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmJ5SWQoJ1N1Ym1pdEJ1dHRvbicpLmNsaWNrKGUgPT4ge1xyXG4gICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmICghdGhpcy52YWxpZGF0ZUZvcm0oKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBRLnNlcnZpY2VDYWxsKHtcclxuICAgICAgICAgICAgICAgICAgICB1cmw6IFEucmVzb2x2ZVVybCgnfi9BY2NvdW50L1NpZ25VcCcpLFxyXG4gICAgICAgICAgICAgICAgICAgIHJlcXVlc3Q6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgRGlzcGxheU5hbWU6IHRoaXMuZm9ybS5EaXNwbGF5TmFtZS52YWx1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgRW1haWw6IHRoaXMuZm9ybS5FbWFpbC52YWx1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgUGFzc3dvcmQ6IHRoaXMuZm9ybS5QYXNzd29yZC52YWx1ZVxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgb25TdWNjZXNzOiByZXNwb25zZSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFEuaW5mb3JtYXRpb24oUS50ZXh0KCdGb3Jtcy5NZW1iZXJzaGlwLlNpZ25VcC5TdWNjZXNzJyksICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gUS5yZXNvbHZlVXJsKCd+LycpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsIlxyXG5uYW1lc3BhY2UgWWF4aWUuTm9ydGhXaW5kIHtcclxuXHJcbiAgICBAU2VyZW5pdHkuRGVjb3JhdG9ycy5yZWdpc3RlckNsYXNzKClcclxuICAgIGV4cG9ydCBjbGFzcyBDYXRlZ29yaWVzRGlhbG9nIGV4dGVuZHMgU2VyZW5pdHkuRW50aXR5RGlhbG9nPENhdGVnb3JpZXNSb3csIGFueT4ge1xyXG4gICAgICAgIHByb3RlY3RlZCBnZXRGb3JtS2V5KCkgeyByZXR1cm4gQ2F0ZWdvcmllc0Zvcm0uZm9ybUtleTsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRJZFByb3BlcnR5KCkgeyByZXR1cm4gQ2F0ZWdvcmllc1Jvdy5pZFByb3BlcnR5OyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldExvY2FsVGV4dFByZWZpeCgpIHsgcmV0dXJuIENhdGVnb3JpZXNSb3cubG9jYWxUZXh0UHJlZml4OyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldE5hbWVQcm9wZXJ0eSgpIHsgcmV0dXJuIENhdGVnb3JpZXNSb3cubmFtZVByb3BlcnR5OyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldFNlcnZpY2UoKSB7IHJldHVybiBDYXRlZ29yaWVzU2VydmljZS5iYXNlVXJsOyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldERlbGV0ZVBlcm1pc3Npb24oKSB7IHJldHVybiBDYXRlZ29yaWVzUm93LmRlbGV0ZVBlcm1pc3Npb247IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0SW5zZXJ0UGVybWlzc2lvbigpIHsgcmV0dXJuIENhdGVnb3JpZXNSb3cuaW5zZXJ0UGVybWlzc2lvbjsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRVcGRhdGVQZXJtaXNzaW9uKCkgeyByZXR1cm4gQ2F0ZWdvcmllc1Jvdy51cGRhdGVQZXJtaXNzaW9uOyB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCBmb3JtID0gbmV3IENhdGVnb3JpZXNGb3JtKHRoaXMuaWRQcmVmaXgpO1xyXG5cclxuICAgIH1cclxufSIsIlxyXG5uYW1lc3BhY2UgWWF4aWUuTm9ydGhXaW5kIHtcclxuXHJcbiAgICBAU2VyZW5pdHkuRGVjb3JhdG9ycy5yZWdpc3RlckNsYXNzKClcclxuICAgIGV4cG9ydCBjbGFzcyBDYXRlZ29yaWVzR3JpZCBleHRlbmRzIFNlcmVuaXR5LkVudGl0eUdyaWQ8Q2F0ZWdvcmllc1JvdywgYW55PiB7XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldENvbHVtbnNLZXkoKSB7IHJldHVybiAnTm9ydGhXaW5kLkNhdGVnb3JpZXMnOyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldERpYWxvZ1R5cGUoKSB7IHJldHVybiBDYXRlZ29yaWVzRGlhbG9nOyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldElkUHJvcGVydHkoKSB7IHJldHVybiBDYXRlZ29yaWVzUm93LmlkUHJvcGVydHk7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0SW5zZXJ0UGVybWlzc2lvbigpIHsgcmV0dXJuIENhdGVnb3JpZXNSb3cuaW5zZXJ0UGVybWlzc2lvbjsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRMb2NhbFRleHRQcmVmaXgoKSB7IHJldHVybiBDYXRlZ29yaWVzUm93LmxvY2FsVGV4dFByZWZpeDsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRTZXJ2aWNlKCkgeyByZXR1cm4gQ2F0ZWdvcmllc1NlcnZpY2UuYmFzZVVybDsgfVxyXG5cclxuICAgICAgICBjb25zdHJ1Y3Rvcihjb250YWluZXI6IEpRdWVyeSkge1xyXG4gICAgICAgICAgICBzdXBlcihjb250YWluZXIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsIlxyXG5uYW1lc3BhY2UgWWF4aWUuTm9ydGhXaW5kIHtcclxuXHJcbiAgICBAU2VyZW5pdHkuRGVjb3JhdG9ycy5yZWdpc3RlckNsYXNzKClcclxuICAgIGV4cG9ydCBjbGFzcyBDYXRlZ29yeUxhbmdEaWFsb2cgZXh0ZW5kcyBTZXJlbml0eS5FbnRpdHlEaWFsb2c8Q2F0ZWdvcnlMYW5nUm93LCBhbnk+IHtcclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0Rm9ybUtleSgpIHsgcmV0dXJuIENhdGVnb3J5TGFuZ0Zvcm0uZm9ybUtleTsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRJZFByb3BlcnR5KCkgeyByZXR1cm4gQ2F0ZWdvcnlMYW5nUm93LmlkUHJvcGVydHk7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0TG9jYWxUZXh0UHJlZml4KCkgeyByZXR1cm4gQ2F0ZWdvcnlMYW5nUm93LmxvY2FsVGV4dFByZWZpeDsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXROYW1lUHJvcGVydHkoKSB7IHJldHVybiBDYXRlZ29yeUxhbmdSb3cubmFtZVByb3BlcnR5OyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldFNlcnZpY2UoKSB7IHJldHVybiBDYXRlZ29yeUxhbmdTZXJ2aWNlLmJhc2VVcmw7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0RGVsZXRlUGVybWlzc2lvbigpIHsgcmV0dXJuIENhdGVnb3J5TGFuZ1Jvdy5kZWxldGVQZXJtaXNzaW9uOyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldEluc2VydFBlcm1pc3Npb24oKSB7IHJldHVybiBDYXRlZ29yeUxhbmdSb3cuaW5zZXJ0UGVybWlzc2lvbjsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRVcGRhdGVQZXJtaXNzaW9uKCkgeyByZXR1cm4gQ2F0ZWdvcnlMYW5nUm93LnVwZGF0ZVBlcm1pc3Npb247IH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIGZvcm0gPSBuZXcgQ2F0ZWdvcnlMYW5nRm9ybSh0aGlzLmlkUHJlZml4KTtcclxuXHJcbiAgICB9XHJcbn0iLCJcclxubmFtZXNwYWNlIFlheGllLk5vcnRoV2luZCB7XHJcblxyXG4gICAgQFNlcmVuaXR5LkRlY29yYXRvcnMucmVnaXN0ZXJDbGFzcygpXHJcbiAgICBleHBvcnQgY2xhc3MgQ2F0ZWdvcnlMYW5nR3JpZCBleHRlbmRzIFNlcmVuaXR5LkVudGl0eUdyaWQ8Q2F0ZWdvcnlMYW5nUm93LCBhbnk+IHtcclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0Q29sdW1uc0tleSgpIHsgcmV0dXJuICdOb3J0aFdpbmQuQ2F0ZWdvcnlMYW5nJzsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXREaWFsb2dUeXBlKCkgeyByZXR1cm4gQ2F0ZWdvcnlMYW5nRGlhbG9nOyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldElkUHJvcGVydHkoKSB7IHJldHVybiBDYXRlZ29yeUxhbmdSb3cuaWRQcm9wZXJ0eTsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRJbnNlcnRQZXJtaXNzaW9uKCkgeyByZXR1cm4gQ2F0ZWdvcnlMYW5nUm93Lmluc2VydFBlcm1pc3Npb247IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0TG9jYWxUZXh0UHJlZml4KCkgeyByZXR1cm4gQ2F0ZWdvcnlMYW5nUm93LmxvY2FsVGV4dFByZWZpeDsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRTZXJ2aWNlKCkgeyByZXR1cm4gQ2F0ZWdvcnlMYW5nU2VydmljZS5iYXNlVXJsOyB9XHJcblxyXG4gICAgICAgIGNvbnN0cnVjdG9yKGNvbnRhaW5lcjogSlF1ZXJ5KSB7XHJcbiAgICAgICAgICAgIHN1cGVyKGNvbnRhaW5lcik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiXHJcbm5hbWVzcGFjZSBZYXhpZS5Ob3J0aFdpbmQge1xyXG5cclxuICAgIEBTZXJlbml0eS5EZWNvcmF0b3JzLnJlZ2lzdGVyQ2xhc3MoKVxyXG4gICAgZXhwb3J0IGNsYXNzIEN1c3RvbWVyRGV0YWlsc0RpYWxvZyBleHRlbmRzIFNlcmVuaXR5LkVudGl0eURpYWxvZzxDdXN0b21lckRldGFpbHNSb3csIGFueT4ge1xyXG4gICAgICAgIHByb3RlY3RlZCBnZXRGb3JtS2V5KCkgeyByZXR1cm4gQ3VzdG9tZXJEZXRhaWxzRm9ybS5mb3JtS2V5OyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldElkUHJvcGVydHkoKSB7IHJldHVybiBDdXN0b21lckRldGFpbHNSb3cuaWRQcm9wZXJ0eTsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRMb2NhbFRleHRQcmVmaXgoKSB7IHJldHVybiBDdXN0b21lckRldGFpbHNSb3cubG9jYWxUZXh0UHJlZml4OyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldE5hbWVQcm9wZXJ0eSgpIHsgcmV0dXJuIEN1c3RvbWVyRGV0YWlsc1Jvdy5uYW1lUHJvcGVydHk7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0U2VydmljZSgpIHsgcmV0dXJuIEN1c3RvbWVyRGV0YWlsc1NlcnZpY2UuYmFzZVVybDsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXREZWxldGVQZXJtaXNzaW9uKCkgeyByZXR1cm4gQ3VzdG9tZXJEZXRhaWxzUm93LmRlbGV0ZVBlcm1pc3Npb247IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0SW5zZXJ0UGVybWlzc2lvbigpIHsgcmV0dXJuIEN1c3RvbWVyRGV0YWlsc1Jvdy5pbnNlcnRQZXJtaXNzaW9uOyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldFVwZGF0ZVBlcm1pc3Npb24oKSB7IHJldHVybiBDdXN0b21lckRldGFpbHNSb3cudXBkYXRlUGVybWlzc2lvbjsgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgZm9ybSA9IG5ldyBDdXN0b21lckRldGFpbHNGb3JtKHRoaXMuaWRQcmVmaXgpO1xyXG5cclxuICAgIH1cclxufSIsIlxyXG5uYW1lc3BhY2UgWWF4aWUuTm9ydGhXaW5kIHtcclxuXHJcbiAgICBAU2VyZW5pdHkuRGVjb3JhdG9ycy5yZWdpc3RlckNsYXNzKClcclxuICAgIGV4cG9ydCBjbGFzcyBDdXN0b21lckRldGFpbHNHcmlkIGV4dGVuZHMgU2VyZW5pdHkuRW50aXR5R3JpZDxDdXN0b21lckRldGFpbHNSb3csIGFueT4ge1xyXG4gICAgICAgIHByb3RlY3RlZCBnZXRDb2x1bW5zS2V5KCkgeyByZXR1cm4gJ05vcnRoV2luZC5DdXN0b21lckRldGFpbHMnOyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldERpYWxvZ1R5cGUoKSB7IHJldHVybiBDdXN0b21lckRldGFpbHNEaWFsb2c7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0SWRQcm9wZXJ0eSgpIHsgcmV0dXJuIEN1c3RvbWVyRGV0YWlsc1Jvdy5pZFByb3BlcnR5OyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldEluc2VydFBlcm1pc3Npb24oKSB7IHJldHVybiBDdXN0b21lckRldGFpbHNSb3cuaW5zZXJ0UGVybWlzc2lvbjsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRMb2NhbFRleHRQcmVmaXgoKSB7IHJldHVybiBDdXN0b21lckRldGFpbHNSb3cubG9jYWxUZXh0UHJlZml4OyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldFNlcnZpY2UoKSB7IHJldHVybiBDdXN0b21lckRldGFpbHNTZXJ2aWNlLmJhc2VVcmw7IH1cclxuXHJcbiAgICAgICAgY29uc3RydWN0b3IoY29udGFpbmVyOiBKUXVlcnkpIHtcclxuICAgICAgICAgICAgc3VwZXIoY29udGFpbmVyKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCJcclxubmFtZXNwYWNlIFlheGllLk5vcnRoV2luZCB7XHJcblxyXG4gICAgQFNlcmVuaXR5LkRlY29yYXRvcnMucmVnaXN0ZXJDbGFzcygpXHJcbiAgICBleHBvcnQgY2xhc3MgQ3VzdG9tZXJzRGlhbG9nIGV4dGVuZHMgU2VyZW5pdHkuRW50aXR5RGlhbG9nPEN1c3RvbWVyc1JvdywgYW55PiB7XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldEZvcm1LZXkoKSB7IHJldHVybiBDdXN0b21lcnNGb3JtLmZvcm1LZXk7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0SWRQcm9wZXJ0eSgpIHsgcmV0dXJuIEN1c3RvbWVyc1Jvdy5pZFByb3BlcnR5OyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldExvY2FsVGV4dFByZWZpeCgpIHsgcmV0dXJuIEN1c3RvbWVyc1Jvdy5sb2NhbFRleHRQcmVmaXg7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0TmFtZVByb3BlcnR5KCkgeyByZXR1cm4gQ3VzdG9tZXJzUm93Lm5hbWVQcm9wZXJ0eTsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRTZXJ2aWNlKCkgeyByZXR1cm4gQ3VzdG9tZXJzU2VydmljZS5iYXNlVXJsOyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldERlbGV0ZVBlcm1pc3Npb24oKSB7IHJldHVybiBDdXN0b21lcnNSb3cuZGVsZXRlUGVybWlzc2lvbjsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRJbnNlcnRQZXJtaXNzaW9uKCkgeyByZXR1cm4gQ3VzdG9tZXJzUm93Lmluc2VydFBlcm1pc3Npb247IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0VXBkYXRlUGVybWlzc2lvbigpIHsgcmV0dXJuIEN1c3RvbWVyc1Jvdy51cGRhdGVQZXJtaXNzaW9uOyB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCBmb3JtID0gbmV3IEN1c3RvbWVyc0Zvcm0odGhpcy5pZFByZWZpeCk7XHJcblxyXG4gICAgfVxyXG59IiwiXHJcbm5hbWVzcGFjZSBZYXhpZS5Ob3J0aFdpbmQge1xyXG5cclxuICAgIEBTZXJlbml0eS5EZWNvcmF0b3JzLnJlZ2lzdGVyQ2xhc3MoKVxyXG4gICAgZXhwb3J0IGNsYXNzIEN1c3RvbWVyc0dyaWQgZXh0ZW5kcyBTZXJlbml0eS5FbnRpdHlHcmlkPEN1c3RvbWVyc1JvdywgYW55PiB7XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldENvbHVtbnNLZXkoKSB7IHJldHVybiAnTm9ydGhXaW5kLkN1c3RvbWVycyc7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0RGlhbG9nVHlwZSgpIHsgcmV0dXJuIEN1c3RvbWVyc0RpYWxvZzsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRJZFByb3BlcnR5KCkgeyByZXR1cm4gQ3VzdG9tZXJzUm93LmlkUHJvcGVydHk7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0SW5zZXJ0UGVybWlzc2lvbigpIHsgcmV0dXJuIEN1c3RvbWVyc1Jvdy5pbnNlcnRQZXJtaXNzaW9uOyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldExvY2FsVGV4dFByZWZpeCgpIHsgcmV0dXJuIEN1c3RvbWVyc1Jvdy5sb2NhbFRleHRQcmVmaXg7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0U2VydmljZSgpIHsgcmV0dXJuIEN1c3RvbWVyc1NlcnZpY2UuYmFzZVVybDsgfVxyXG5cclxuICAgICAgICBwcml2YXRlIHJvd1NlbGVjdGlvbjogU2VyZW5pdHkuR3JpZFJvd1NlbGVjdGlvbk1peGluO1xyXG5cclxuICAgICAgICBjb25zdHJ1Y3Rvcihjb250YWluZXI6IEpRdWVyeSkge1xyXG4gICAgICAgICAgICBzdXBlcihjb250YWluZXIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIGNyZWF0ZVRvb2xiYXJFeHRlbnNpb25zKCkge1xyXG4gICAgICAgICAgICBzdXBlci5jcmVhdGVUb29sYmFyRXh0ZW5zaW9ucygpO1xyXG4gICAgICAgICAgICB0aGlzLnJvd1NlbGVjdGlvbiA9IG5ldyBTZXJlbml0eS5HcmlkUm93U2VsZWN0aW9uTWl4aW4odGhpcyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0QnV0dG9ucygpIHtcclxuICAgICAgICAgICAgdmFyIGJ1dHRvbnMgPSBzdXBlci5nZXRCdXR0b25zKCk7XHJcblxyXG4gICAgICAgICAgICBpZiAoQXV0aG9yaXphdGlvbi5oYXNQZXJtaXNzaW9uKFwiQWNjb3VudGluZzpFeGNlbFwiKSkge1xyXG4gICAgICAgICAgICAgICAgYnV0dG9ucy5wdXNoKENvbW1vbi5FeGNlbEV4cG9ydEhlbHBlci5jcmVhdGVUb29sQnV0dG9uKHtcclxuICAgICAgICAgICAgICAgICAgICBncmlkOiB0aGlzLFxyXG4gICAgICAgICAgICAgICAgICAgIHNlcnZpY2U6IEN1c3RvbWVyc1NlcnZpY2UuYmFzZVVybCArICcvTGlzdEV4Y2VsJyxcclxuICAgICAgICAgICAgICAgICAgICBvblZpZXdTdWJtaXQ6ICgpID0+IHRoaXMub25WaWV3U3VibWl0KCksXHJcbiAgICAgICAgICAgICAgICAgICAgc2VwYXJhdG9yOiB0cnVlXHJcbiAgICAgICAgICAgICAgICB9KSlcclxuICAgICAgICAgICAgfTtcclxuXHJcblxyXG4gICAgICAgICAgICBidXR0b25zLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgdGl0bGU6ICdJbXBvcnQgZnJvbSBRdWlja0Jvb2tzJyxcclxuICAgICAgICAgICAgICAgIGNzc0NsYXNzOiAnc2VuZC1idXR0b24nLFxyXG4gICAgICAgICAgICAgICAgb25DbGljazogKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICghdGhpcy5vblZpZXdTdWJtaXQoKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gUS5yZXNvbHZlVXJsKFwifi9RdWlja0Jvb2tzL1F1aWNrQm9va3NcIikgKyAnL1F1aWNrQm9va3NMb2dpbj9mdW5jdGlvbj1pbXBvcnQmZW50aXR5PWFjY291bnQnO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KVxyXG5cclxuXHJcbiAgICAgICAgICAgIGJ1dHRvbnMucHVzaCh7XHJcbiAgICAgICAgICAgICAgICB0aXRsZTogJ0V4cG9ydCB0byBRdWlja0Jvb2tzJyxcclxuICAgICAgICAgICAgICAgIGNzc0NsYXNzOiAnc2VuZC1idXR0b24nLFxyXG4gICAgICAgICAgICAgICAgb25DbGljazogKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICghdGhpcy5vblZpZXdTdWJtaXQoKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHZhciBzZWxlY3RlZCA9IHRoaXMucm93U2VsZWN0aW9uLmdldFNlbGVjdGVkS2V5cygpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAoc2VsZWN0ZWQubGVuZ3RoID09IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgUS53YXJuaW5nKFEudGV4dChcIlBsZWFzZSBzZWxlY3Qgc29tZSByZWNvcmRzXCIpKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBrZXlzID0gc2VsZWN0ZWQudG9TdHJpbmcoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLnJlcGxhY2UoJy9RdWlja0Jvb2tzL1F1aWNrQm9va3MvUXVpY2tCb29rc0xvZ2luP2Z1bmN0aW9uPWV4cG9ydCZlbnRpdHk9YWNjb3VudCZrZXlzPScgKyBrZXlzKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yb3dTZWxlY3Rpb24ucmVzZXRDaGVja2VkQW5kUmVmcmVzaCgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KVxyXG5cclxuICAgICAgICAgICAgcmV0dXJuIGJ1dHRvbnM7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0Q29sdW1ucygpIHtcclxuICAgICAgICAgICAgdmFyIGNvbHVtbnMgPSBzdXBlci5nZXRDb2x1bW5zKCk7XHJcbiAgICAgICAgICAgIGNvbHVtbnMuc3BsaWNlKDAsIDAsIFNlcmVuaXR5LkdyaWRSb3dTZWxlY3Rpb25NaXhpbi5jcmVhdGVTZWxlY3RDb2x1bW4oKCkgPT4gdGhpcy5yb3dTZWxlY3Rpb24pKTtcclxuICAgICAgICAgICAgcmV0dXJuIGNvbHVtbnM7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0Vmlld09wdGlvbnMoKSB7XHJcbiAgICAgICAgICAgIHZhciBvcHQgPSBzdXBlci5nZXRWaWV3T3B0aW9ucygpO1xyXG4gICAgICAgICAgICBvcHQucm93c1BlclBhZ2UgPSAxMDA7XHJcbiAgICAgICAgICAgIHJldHVybiBvcHQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiXHJcbm5hbWVzcGFjZSBZYXhpZS5Ob3J0aFdpbmQge1xyXG5cclxuICAgIEBTZXJlbml0eS5EZWNvcmF0b3JzLnJlZ2lzdGVyQ2xhc3MoKVxyXG4gICAgZXhwb3J0IGNsYXNzIEVtcGxveWVlVGVycml0b3JpZXNEaWFsb2cgZXh0ZW5kcyBTZXJlbml0eS5FbnRpdHlEaWFsb2c8RW1wbG95ZWVUZXJyaXRvcmllc1JvdywgYW55PiB7XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldEZvcm1LZXkoKSB7IHJldHVybiBFbXBsb3llZVRlcnJpdG9yaWVzRm9ybS5mb3JtS2V5OyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldElkUHJvcGVydHkoKSB7IHJldHVybiBFbXBsb3llZVRlcnJpdG9yaWVzUm93LmlkUHJvcGVydHk7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0TG9jYWxUZXh0UHJlZml4KCkgeyByZXR1cm4gRW1wbG95ZWVUZXJyaXRvcmllc1Jvdy5sb2NhbFRleHRQcmVmaXg7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0TmFtZVByb3BlcnR5KCkgeyByZXR1cm4gRW1wbG95ZWVUZXJyaXRvcmllc1Jvdy5uYW1lUHJvcGVydHk7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0U2VydmljZSgpIHsgcmV0dXJuIEVtcGxveWVlVGVycml0b3JpZXNTZXJ2aWNlLmJhc2VVcmw7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0RGVsZXRlUGVybWlzc2lvbigpIHsgcmV0dXJuIEVtcGxveWVlVGVycml0b3JpZXNSb3cuZGVsZXRlUGVybWlzc2lvbjsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRJbnNlcnRQZXJtaXNzaW9uKCkgeyByZXR1cm4gRW1wbG95ZWVUZXJyaXRvcmllc1Jvdy5pbnNlcnRQZXJtaXNzaW9uOyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldFVwZGF0ZVBlcm1pc3Npb24oKSB7IHJldHVybiBFbXBsb3llZVRlcnJpdG9yaWVzUm93LnVwZGF0ZVBlcm1pc3Npb247IH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIGZvcm0gPSBuZXcgRW1wbG95ZWVUZXJyaXRvcmllc0Zvcm0odGhpcy5pZFByZWZpeCk7XHJcblxyXG4gICAgfVxyXG59IiwiXHJcbm5hbWVzcGFjZSBZYXhpZS5Ob3J0aFdpbmQge1xyXG5cclxuICAgIEBTZXJlbml0eS5EZWNvcmF0b3JzLnJlZ2lzdGVyQ2xhc3MoKVxyXG4gICAgZXhwb3J0IGNsYXNzIEVtcGxveWVlVGVycml0b3JpZXNHcmlkIGV4dGVuZHMgU2VyZW5pdHkuRW50aXR5R3JpZDxFbXBsb3llZVRlcnJpdG9yaWVzUm93LCBhbnk+IHtcclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0Q29sdW1uc0tleSgpIHsgcmV0dXJuICdOb3J0aFdpbmQuRW1wbG95ZWVUZXJyaXRvcmllcyc7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0RGlhbG9nVHlwZSgpIHsgcmV0dXJuIEVtcGxveWVlVGVycml0b3JpZXNEaWFsb2c7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0SWRQcm9wZXJ0eSgpIHsgcmV0dXJuIEVtcGxveWVlVGVycml0b3JpZXNSb3cuaWRQcm9wZXJ0eTsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRJbnNlcnRQZXJtaXNzaW9uKCkgeyByZXR1cm4gRW1wbG95ZWVUZXJyaXRvcmllc1Jvdy5pbnNlcnRQZXJtaXNzaW9uOyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldExvY2FsVGV4dFByZWZpeCgpIHsgcmV0dXJuIEVtcGxveWVlVGVycml0b3JpZXNSb3cubG9jYWxUZXh0UHJlZml4OyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldFNlcnZpY2UoKSB7IHJldHVybiBFbXBsb3llZVRlcnJpdG9yaWVzU2VydmljZS5iYXNlVXJsOyB9XHJcblxyXG4gICAgICAgIGNvbnN0cnVjdG9yKGNvbnRhaW5lcjogSlF1ZXJ5KSB7XHJcbiAgICAgICAgICAgIHN1cGVyKGNvbnRhaW5lcik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiXHJcbm5hbWVzcGFjZSBZYXhpZS5Ob3J0aFdpbmQge1xyXG5cclxuICAgIEBTZXJlbml0eS5EZWNvcmF0b3JzLnJlZ2lzdGVyQ2xhc3MoKVxyXG4gICAgZXhwb3J0IGNsYXNzIEVtcGxveWVlc0RpYWxvZyBleHRlbmRzIFNlcmVuaXR5LkVudGl0eURpYWxvZzxFbXBsb3llZXNSb3csIGFueT4ge1xyXG4gICAgICAgIHByb3RlY3RlZCBnZXRGb3JtS2V5KCkgeyByZXR1cm4gRW1wbG95ZWVzRm9ybS5mb3JtS2V5OyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldElkUHJvcGVydHkoKSB7IHJldHVybiBFbXBsb3llZXNSb3cuaWRQcm9wZXJ0eTsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRMb2NhbFRleHRQcmVmaXgoKSB7IHJldHVybiBFbXBsb3llZXNSb3cubG9jYWxUZXh0UHJlZml4OyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldE5hbWVQcm9wZXJ0eSgpIHsgcmV0dXJuIEVtcGxveWVlc1Jvdy5uYW1lUHJvcGVydHk7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0U2VydmljZSgpIHsgcmV0dXJuIEVtcGxveWVlc1NlcnZpY2UuYmFzZVVybDsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXREZWxldGVQZXJtaXNzaW9uKCkgeyByZXR1cm4gRW1wbG95ZWVzUm93LmRlbGV0ZVBlcm1pc3Npb247IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0SW5zZXJ0UGVybWlzc2lvbigpIHsgcmV0dXJuIEVtcGxveWVlc1Jvdy5pbnNlcnRQZXJtaXNzaW9uOyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldFVwZGF0ZVBlcm1pc3Npb24oKSB7IHJldHVybiBFbXBsb3llZXNSb3cudXBkYXRlUGVybWlzc2lvbjsgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgZm9ybSA9IG5ldyBFbXBsb3llZXNGb3JtKHRoaXMuaWRQcmVmaXgpO1xyXG5cclxuICAgIH1cclxufSIsIlxyXG5uYW1lc3BhY2UgWWF4aWUuTm9ydGhXaW5kIHtcclxuXHJcbiAgICBAU2VyZW5pdHkuRGVjb3JhdG9ycy5yZWdpc3RlckNsYXNzKClcclxuICAgIGV4cG9ydCBjbGFzcyBFbXBsb3llZXNHcmlkIGV4dGVuZHMgU2VyZW5pdHkuRW50aXR5R3JpZDxFbXBsb3llZXNSb3csIGFueT4ge1xyXG4gICAgICAgIHByb3RlY3RlZCBnZXRDb2x1bW5zS2V5KCkgeyByZXR1cm4gJ05vcnRoV2luZC5FbXBsb3llZXMnOyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldERpYWxvZ1R5cGUoKSB7IHJldHVybiBFbXBsb3llZXNEaWFsb2c7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0SWRQcm9wZXJ0eSgpIHsgcmV0dXJuIEVtcGxveWVlc1Jvdy5pZFByb3BlcnR5OyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldEluc2VydFBlcm1pc3Npb24oKSB7IHJldHVybiBFbXBsb3llZXNSb3cuaW5zZXJ0UGVybWlzc2lvbjsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRMb2NhbFRleHRQcmVmaXgoKSB7IHJldHVybiBFbXBsb3llZXNSb3cubG9jYWxUZXh0UHJlZml4OyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldFNlcnZpY2UoKSB7IHJldHVybiBFbXBsb3llZXNTZXJ2aWNlLmJhc2VVcmw7IH1cclxuXHJcbiAgICAgICAgY29uc3RydWN0b3IoY29udGFpbmVyOiBKUXVlcnkpIHtcclxuICAgICAgICAgICAgc3VwZXIoY29udGFpbmVyKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCJcclxubmFtZXNwYWNlIFlheGllLk5vcnRoV2luZCB7XHJcblxyXG4gICAgQFNlcmVuaXR5LkRlY29yYXRvcnMucmVnaXN0ZXJDbGFzcygpXHJcbiAgICBleHBvcnQgY2xhc3MgSW52b2ljZXNEaWFsb2cgZXh0ZW5kcyBTZXJlbml0eS5FbnRpdHlEaWFsb2c8SW52b2ljZXNSb3csIGFueT4ge1xyXG4gICAgICAgIHByb3RlY3RlZCBnZXRGb3JtS2V5KCkgeyByZXR1cm4gSW52b2ljZXNGb3JtLmZvcm1LZXk7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0SWRQcm9wZXJ0eSgpIHsgcmV0dXJuIEludm9pY2VzUm93LmlkUHJvcGVydHk7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0TG9jYWxUZXh0UHJlZml4KCkgeyByZXR1cm4gSW52b2ljZXNSb3cubG9jYWxUZXh0UHJlZml4OyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldE5hbWVQcm9wZXJ0eSgpIHsgcmV0dXJuIEludm9pY2VzUm93Lm5hbWVQcm9wZXJ0eTsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRTZXJ2aWNlKCkgeyByZXR1cm4gSW52b2ljZXNTZXJ2aWNlLmJhc2VVcmw7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0RGVsZXRlUGVybWlzc2lvbigpIHsgcmV0dXJuIEludm9pY2VzUm93LmRlbGV0ZVBlcm1pc3Npb247IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0SW5zZXJ0UGVybWlzc2lvbigpIHsgcmV0dXJuIEludm9pY2VzUm93Lmluc2VydFBlcm1pc3Npb247IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0VXBkYXRlUGVybWlzc2lvbigpIHsgcmV0dXJuIEludm9pY2VzUm93LnVwZGF0ZVBlcm1pc3Npb247IH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIGZvcm0gPSBuZXcgSW52b2ljZXNGb3JtKHRoaXMuaWRQcmVmaXgpO1xyXG5cclxuICAgIH1cclxufSIsIlxyXG5uYW1lc3BhY2UgWWF4aWUuTm9ydGhXaW5kIHtcclxuXHJcbiAgICBAU2VyZW5pdHkuRGVjb3JhdG9ycy5yZWdpc3RlckNsYXNzKClcclxuICAgIGV4cG9ydCBjbGFzcyBJbnZvaWNlc0dyaWQgZXh0ZW5kcyBTZXJlbml0eS5FbnRpdHlHcmlkPEludm9pY2VzUm93LCBhbnk+IHtcclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0Q29sdW1uc0tleSgpIHsgcmV0dXJuICdOb3J0aFdpbmQuSW52b2ljZXMnOyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldERpYWxvZ1R5cGUoKSB7IHJldHVybiBJbnZvaWNlc0RpYWxvZzsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRJZFByb3BlcnR5KCkgeyByZXR1cm4gSW52b2ljZXNSb3cuaWRQcm9wZXJ0eTsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRJbnNlcnRQZXJtaXNzaW9uKCkgeyByZXR1cm4gSW52b2ljZXNSb3cuaW5zZXJ0UGVybWlzc2lvbjsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRMb2NhbFRleHRQcmVmaXgoKSB7IHJldHVybiBJbnZvaWNlc1Jvdy5sb2NhbFRleHRQcmVmaXg7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0U2VydmljZSgpIHsgcmV0dXJuIEludm9pY2VzU2VydmljZS5iYXNlVXJsOyB9XHJcblxyXG4gICAgICAgIGNvbnN0cnVjdG9yKGNvbnRhaW5lcjogSlF1ZXJ5KSB7XHJcbiAgICAgICAgICAgIHN1cGVyKGNvbnRhaW5lcik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiXHJcbm5hbWVzcGFjZSBZYXhpZS5Ob3J0aFdpbmQge1xyXG5cclxuICAgIEBTZXJlbml0eS5EZWNvcmF0b3JzLnJlZ2lzdGVyQ2xhc3MoKVxyXG4gICAgZXhwb3J0IGNsYXNzIE5vdGVzRGlhbG9nIGV4dGVuZHMgU2VyZW5pdHkuRW50aXR5RGlhbG9nPE5vdGVzUm93LCBhbnk+IHtcclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0Rm9ybUtleSgpIHsgcmV0dXJuIE5vdGVzRm9ybS5mb3JtS2V5OyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldElkUHJvcGVydHkoKSB7IHJldHVybiBOb3Rlc1Jvdy5pZFByb3BlcnR5OyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldExvY2FsVGV4dFByZWZpeCgpIHsgcmV0dXJuIE5vdGVzUm93LmxvY2FsVGV4dFByZWZpeDsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXROYW1lUHJvcGVydHkoKSB7IHJldHVybiBOb3Rlc1Jvdy5uYW1lUHJvcGVydHk7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0U2VydmljZSgpIHsgcmV0dXJuIE5vdGVzU2VydmljZS5iYXNlVXJsOyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldERlbGV0ZVBlcm1pc3Npb24oKSB7IHJldHVybiBOb3Rlc1Jvdy5kZWxldGVQZXJtaXNzaW9uOyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldEluc2VydFBlcm1pc3Npb24oKSB7IHJldHVybiBOb3Rlc1Jvdy5pbnNlcnRQZXJtaXNzaW9uOyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldFVwZGF0ZVBlcm1pc3Npb24oKSB7IHJldHVybiBOb3Rlc1Jvdy51cGRhdGVQZXJtaXNzaW9uOyB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCBmb3JtID0gbmV3IE5vdGVzRm9ybSh0aGlzLmlkUHJlZml4KTtcclxuXHJcbiAgICB9XHJcbn0iLCJcclxubmFtZXNwYWNlIFlheGllLk5vcnRoV2luZCB7XHJcblxyXG4gICAgQFNlcmVuaXR5LkRlY29yYXRvcnMucmVnaXN0ZXJDbGFzcygpXHJcbiAgICBleHBvcnQgY2xhc3MgTm90ZXNHcmlkIGV4dGVuZHMgU2VyZW5pdHkuRW50aXR5R3JpZDxOb3Rlc1JvdywgYW55PiB7XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldENvbHVtbnNLZXkoKSB7IHJldHVybiAnTm9ydGhXaW5kLk5vdGVzJzsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXREaWFsb2dUeXBlKCkgeyByZXR1cm4gTm90ZXNEaWFsb2c7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0SWRQcm9wZXJ0eSgpIHsgcmV0dXJuIE5vdGVzUm93LmlkUHJvcGVydHk7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0SW5zZXJ0UGVybWlzc2lvbigpIHsgcmV0dXJuIE5vdGVzUm93Lmluc2VydFBlcm1pc3Npb247IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0TG9jYWxUZXh0UHJlZml4KCkgeyByZXR1cm4gTm90ZXNSb3cubG9jYWxUZXh0UHJlZml4OyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldFNlcnZpY2UoKSB7IHJldHVybiBOb3Rlc1NlcnZpY2UuYmFzZVVybDsgfVxyXG5cclxuICAgICAgICBjb25zdHJ1Y3Rvcihjb250YWluZXI6IEpRdWVyeSkge1xyXG4gICAgICAgICAgICBzdXBlcihjb250YWluZXIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsIlxyXG5uYW1lc3BhY2UgWWF4aWUuTm9ydGhXaW5kIHtcclxuXHJcbiAgICBAU2VyZW5pdHkuRGVjb3JhdG9ycy5yZWdpc3RlckNsYXNzKClcclxuICAgIGV4cG9ydCBjbGFzcyBPcmRlckRldGFpbHNEaWFsb2cgZXh0ZW5kcyBTZXJlbml0eS5FbnRpdHlEaWFsb2c8T3JkZXJEZXRhaWxzUm93LCBhbnk+IHtcclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0Rm9ybUtleSgpIHsgcmV0dXJuIE9yZGVyRGV0YWlsc0Zvcm0uZm9ybUtleTsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRJZFByb3BlcnR5KCkgeyByZXR1cm4gT3JkZXJEZXRhaWxzUm93LmlkUHJvcGVydHk7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0TG9jYWxUZXh0UHJlZml4KCkgeyByZXR1cm4gT3JkZXJEZXRhaWxzUm93LmxvY2FsVGV4dFByZWZpeDsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRTZXJ2aWNlKCkgeyByZXR1cm4gT3JkZXJEZXRhaWxzU2VydmljZS5iYXNlVXJsOyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldERlbGV0ZVBlcm1pc3Npb24oKSB7IHJldHVybiBPcmRlckRldGFpbHNSb3cuZGVsZXRlUGVybWlzc2lvbjsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRJbnNlcnRQZXJtaXNzaW9uKCkgeyByZXR1cm4gT3JkZXJEZXRhaWxzUm93Lmluc2VydFBlcm1pc3Npb247IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0VXBkYXRlUGVybWlzc2lvbigpIHsgcmV0dXJuIE9yZGVyRGV0YWlsc1Jvdy51cGRhdGVQZXJtaXNzaW9uOyB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCBmb3JtID0gbmV3IE9yZGVyRGV0YWlsc0Zvcm0odGhpcy5pZFByZWZpeCk7XHJcblxyXG4gICAgfVxyXG59IiwiXHJcbm5hbWVzcGFjZSBZYXhpZS5Ob3J0aFdpbmQge1xyXG5cclxuICAgIEBTZXJlbml0eS5EZWNvcmF0b3JzLnJlZ2lzdGVyQ2xhc3MoKVxyXG4gICAgZXhwb3J0IGNsYXNzIE9yZGVyRGV0YWlsc0dyaWQgZXh0ZW5kcyBTZXJlbml0eS5FbnRpdHlHcmlkPE9yZGVyRGV0YWlsc1JvdywgYW55PiB7XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldENvbHVtbnNLZXkoKSB7IHJldHVybiAnTm9ydGhXaW5kLk9yZGVyRGV0YWlscyc7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0RGlhbG9nVHlwZSgpIHsgcmV0dXJuIE9yZGVyRGV0YWlsc0RpYWxvZzsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRJZFByb3BlcnR5KCkgeyByZXR1cm4gT3JkZXJEZXRhaWxzUm93LmlkUHJvcGVydHk7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0SW5zZXJ0UGVybWlzc2lvbigpIHsgcmV0dXJuIE9yZGVyRGV0YWlsc1Jvdy5pbnNlcnRQZXJtaXNzaW9uOyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldExvY2FsVGV4dFByZWZpeCgpIHsgcmV0dXJuIE9yZGVyRGV0YWlsc1Jvdy5sb2NhbFRleHRQcmVmaXg7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0U2VydmljZSgpIHsgcmV0dXJuIE9yZGVyRGV0YWlsc1NlcnZpY2UuYmFzZVVybDsgfVxyXG5cclxuICAgICAgICBjb25zdHJ1Y3Rvcihjb250YWluZXI6IEpRdWVyeSkge1xyXG4gICAgICAgICAgICBzdXBlcihjb250YWluZXIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsIlxyXG5uYW1lc3BhY2UgWWF4aWUuTm9ydGhXaW5kIHtcclxuXHJcbiAgICBAU2VyZW5pdHkuRGVjb3JhdG9ycy5yZWdpc3RlckNsYXNzKClcclxuICAgIGV4cG9ydCBjbGFzcyBPcmRlcnNEaWFsb2cgZXh0ZW5kcyBTZXJlbml0eS5FbnRpdHlEaWFsb2c8T3JkZXJzUm93LCBhbnk+IHtcclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0Rm9ybUtleSgpIHsgcmV0dXJuIE9yZGVyc0Zvcm0uZm9ybUtleTsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRJZFByb3BlcnR5KCkgeyByZXR1cm4gT3JkZXJzUm93LmlkUHJvcGVydHk7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0TG9jYWxUZXh0UHJlZml4KCkgeyByZXR1cm4gT3JkZXJzUm93LmxvY2FsVGV4dFByZWZpeDsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXROYW1lUHJvcGVydHkoKSB7IHJldHVybiBPcmRlcnNSb3cubmFtZVByb3BlcnR5OyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldFNlcnZpY2UoKSB7IHJldHVybiBPcmRlcnNTZXJ2aWNlLmJhc2VVcmw7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0RGVsZXRlUGVybWlzc2lvbigpIHsgcmV0dXJuIE9yZGVyc1Jvdy5kZWxldGVQZXJtaXNzaW9uOyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldEluc2VydFBlcm1pc3Npb24oKSB7IHJldHVybiBPcmRlcnNSb3cuaW5zZXJ0UGVybWlzc2lvbjsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRVcGRhdGVQZXJtaXNzaW9uKCkgeyByZXR1cm4gT3JkZXJzUm93LnVwZGF0ZVBlcm1pc3Npb247IH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIGZvcm0gPSBuZXcgT3JkZXJzRm9ybSh0aGlzLmlkUHJlZml4KTtcclxuXHJcbiAgICB9XHJcbn0iLCJcclxubmFtZXNwYWNlIFlheGllLk5vcnRoV2luZCB7XHJcblxyXG4gICAgQFNlcmVuaXR5LkRlY29yYXRvcnMucmVnaXN0ZXJDbGFzcygpXHJcbiAgICBleHBvcnQgY2xhc3MgT3JkZXJzR3JpZCBleHRlbmRzIFNlcmVuaXR5LkVudGl0eUdyaWQ8T3JkZXJzUm93LCBhbnk+IHtcclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0Q29sdW1uc0tleSgpIHsgcmV0dXJuICdOb3J0aFdpbmQuT3JkZXJzJzsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXREaWFsb2dUeXBlKCkgeyByZXR1cm4gT3JkZXJzRGlhbG9nOyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldElkUHJvcGVydHkoKSB7IHJldHVybiBPcmRlcnNSb3cuaWRQcm9wZXJ0eTsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRJbnNlcnRQZXJtaXNzaW9uKCkgeyByZXR1cm4gT3JkZXJzUm93Lmluc2VydFBlcm1pc3Npb247IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0TG9jYWxUZXh0UHJlZml4KCkgeyByZXR1cm4gT3JkZXJzUm93LmxvY2FsVGV4dFByZWZpeDsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRTZXJ2aWNlKCkgeyByZXR1cm4gT3JkZXJzU2VydmljZS5iYXNlVXJsOyB9XHJcblxyXG4gICAgICAgIGNvbnN0cnVjdG9yKGNvbnRhaW5lcjogSlF1ZXJ5KSB7XHJcbiAgICAgICAgICAgIHN1cGVyKGNvbnRhaW5lcik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiXHJcbm5hbWVzcGFjZSBZYXhpZS5Ob3J0aFdpbmQge1xyXG5cclxuICAgIEBTZXJlbml0eS5EZWNvcmF0b3JzLnJlZ2lzdGVyQ2xhc3MoKVxyXG4gICAgZXhwb3J0IGNsYXNzIFByb2R1Y3RMYW5nRGlhbG9nIGV4dGVuZHMgU2VyZW5pdHkuRW50aXR5RGlhbG9nPFByb2R1Y3RMYW5nUm93LCBhbnk+IHtcclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0Rm9ybUtleSgpIHsgcmV0dXJuIFByb2R1Y3RMYW5nRm9ybS5mb3JtS2V5OyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldElkUHJvcGVydHkoKSB7IHJldHVybiBQcm9kdWN0TGFuZ1Jvdy5pZFByb3BlcnR5OyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldExvY2FsVGV4dFByZWZpeCgpIHsgcmV0dXJuIFByb2R1Y3RMYW5nUm93LmxvY2FsVGV4dFByZWZpeDsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXROYW1lUHJvcGVydHkoKSB7IHJldHVybiBQcm9kdWN0TGFuZ1Jvdy5uYW1lUHJvcGVydHk7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0U2VydmljZSgpIHsgcmV0dXJuIFByb2R1Y3RMYW5nU2VydmljZS5iYXNlVXJsOyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldERlbGV0ZVBlcm1pc3Npb24oKSB7IHJldHVybiBQcm9kdWN0TGFuZ1Jvdy5kZWxldGVQZXJtaXNzaW9uOyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldEluc2VydFBlcm1pc3Npb24oKSB7IHJldHVybiBQcm9kdWN0TGFuZ1Jvdy5pbnNlcnRQZXJtaXNzaW9uOyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldFVwZGF0ZVBlcm1pc3Npb24oKSB7IHJldHVybiBQcm9kdWN0TGFuZ1Jvdy51cGRhdGVQZXJtaXNzaW9uOyB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCBmb3JtID0gbmV3IFByb2R1Y3RMYW5nRm9ybSh0aGlzLmlkUHJlZml4KTtcclxuXHJcbiAgICB9XHJcbn0iLCJcclxubmFtZXNwYWNlIFlheGllLk5vcnRoV2luZCB7XHJcblxyXG4gICAgQFNlcmVuaXR5LkRlY29yYXRvcnMucmVnaXN0ZXJDbGFzcygpXHJcbiAgICBleHBvcnQgY2xhc3MgUHJvZHVjdExhbmdHcmlkIGV4dGVuZHMgU2VyZW5pdHkuRW50aXR5R3JpZDxQcm9kdWN0TGFuZ1JvdywgYW55PiB7XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldENvbHVtbnNLZXkoKSB7IHJldHVybiAnTm9ydGhXaW5kLlByb2R1Y3RMYW5nJzsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXREaWFsb2dUeXBlKCkgeyByZXR1cm4gUHJvZHVjdExhbmdEaWFsb2c7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0SWRQcm9wZXJ0eSgpIHsgcmV0dXJuIFByb2R1Y3RMYW5nUm93LmlkUHJvcGVydHk7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0SW5zZXJ0UGVybWlzc2lvbigpIHsgcmV0dXJuIFByb2R1Y3RMYW5nUm93Lmluc2VydFBlcm1pc3Npb247IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0TG9jYWxUZXh0UHJlZml4KCkgeyByZXR1cm4gUHJvZHVjdExhbmdSb3cubG9jYWxUZXh0UHJlZml4OyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldFNlcnZpY2UoKSB7IHJldHVybiBQcm9kdWN0TGFuZ1NlcnZpY2UuYmFzZVVybDsgfVxyXG5cclxuICAgICAgICBjb25zdHJ1Y3Rvcihjb250YWluZXI6IEpRdWVyeSkge1xyXG4gICAgICAgICAgICBzdXBlcihjb250YWluZXIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsIlxyXG5uYW1lc3BhY2UgWWF4aWUuTm9ydGhXaW5kIHtcclxuXHJcbiAgICBAU2VyZW5pdHkuRGVjb3JhdG9ycy5yZWdpc3RlckNsYXNzKClcclxuICAgIGV4cG9ydCBjbGFzcyBQcm9kdWN0c0RpYWxvZyBleHRlbmRzIFNlcmVuaXR5LkVudGl0eURpYWxvZzxQcm9kdWN0c1JvdywgYW55PiB7XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldEZvcm1LZXkoKSB7IHJldHVybiBQcm9kdWN0c0Zvcm0uZm9ybUtleTsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRJZFByb3BlcnR5KCkgeyByZXR1cm4gUHJvZHVjdHNSb3cuaWRQcm9wZXJ0eTsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRMb2NhbFRleHRQcmVmaXgoKSB7IHJldHVybiBQcm9kdWN0c1Jvdy5sb2NhbFRleHRQcmVmaXg7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0TmFtZVByb3BlcnR5KCkgeyByZXR1cm4gUHJvZHVjdHNSb3cubmFtZVByb3BlcnR5OyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldFNlcnZpY2UoKSB7IHJldHVybiBQcm9kdWN0c1NlcnZpY2UuYmFzZVVybDsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXREZWxldGVQZXJtaXNzaW9uKCkgeyByZXR1cm4gUHJvZHVjdHNSb3cuZGVsZXRlUGVybWlzc2lvbjsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRJbnNlcnRQZXJtaXNzaW9uKCkgeyByZXR1cm4gUHJvZHVjdHNSb3cuaW5zZXJ0UGVybWlzc2lvbjsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRVcGRhdGVQZXJtaXNzaW9uKCkgeyByZXR1cm4gUHJvZHVjdHNSb3cudXBkYXRlUGVybWlzc2lvbjsgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgZm9ybSA9IG5ldyBQcm9kdWN0c0Zvcm0odGhpcy5pZFByZWZpeCk7XHJcblxyXG4gICAgfVxyXG59IiwiXHJcbm5hbWVzcGFjZSBZYXhpZS5Ob3J0aFdpbmQge1xyXG5cclxuICAgIEBTZXJlbml0eS5EZWNvcmF0b3JzLnJlZ2lzdGVyQ2xhc3MoKVxyXG4gICAgZXhwb3J0IGNsYXNzIFByb2R1Y3RzR3JpZCBleHRlbmRzIFNlcmVuaXR5LkVudGl0eUdyaWQ8UHJvZHVjdHNSb3csIGFueT4ge1xyXG4gICAgICAgIHByb3RlY3RlZCBnZXRDb2x1bW5zS2V5KCkgeyByZXR1cm4gJ05vcnRoV2luZC5Qcm9kdWN0cyc7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0RGlhbG9nVHlwZSgpIHsgcmV0dXJuIFByb2R1Y3RzRGlhbG9nOyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldElkUHJvcGVydHkoKSB7IHJldHVybiBQcm9kdWN0c1Jvdy5pZFByb3BlcnR5OyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldEluc2VydFBlcm1pc3Npb24oKSB7IHJldHVybiBQcm9kdWN0c1Jvdy5pbnNlcnRQZXJtaXNzaW9uOyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldExvY2FsVGV4dFByZWZpeCgpIHsgcmV0dXJuIFByb2R1Y3RzUm93LmxvY2FsVGV4dFByZWZpeDsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRTZXJ2aWNlKCkgeyByZXR1cm4gUHJvZHVjdHNTZXJ2aWNlLmJhc2VVcmw7IH1cclxuXHJcbiAgICAgICAgY29uc3RydWN0b3IoY29udGFpbmVyOiBKUXVlcnkpIHtcclxuICAgICAgICAgICAgc3VwZXIoY29udGFpbmVyKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCJcclxubmFtZXNwYWNlIFlheGllLk5vcnRoV2luZCB7XHJcblxyXG4gICAgQFNlcmVuaXR5LkRlY29yYXRvcnMucmVnaXN0ZXJDbGFzcygpXHJcbiAgICBleHBvcnQgY2xhc3MgUHJvZHVjdHNieUNhdGVnb3J5RGlhbG9nIGV4dGVuZHMgU2VyZW5pdHkuRW50aXR5RGlhbG9nPFByb2R1Y3RzYnlDYXRlZ29yeVJvdywgYW55PiB7XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldEZvcm1LZXkoKSB7IHJldHVybiBQcm9kdWN0c2J5Q2F0ZWdvcnlGb3JtLmZvcm1LZXk7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0SWRQcm9wZXJ0eSgpIHsgcmV0dXJuIFByb2R1Y3RzYnlDYXRlZ29yeVJvdy5pZFByb3BlcnR5OyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldExvY2FsVGV4dFByZWZpeCgpIHsgcmV0dXJuIFByb2R1Y3RzYnlDYXRlZ29yeVJvdy5sb2NhbFRleHRQcmVmaXg7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0TmFtZVByb3BlcnR5KCkgeyByZXR1cm4gUHJvZHVjdHNieUNhdGVnb3J5Um93Lm5hbWVQcm9wZXJ0eTsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRTZXJ2aWNlKCkgeyByZXR1cm4gUHJvZHVjdHNieUNhdGVnb3J5U2VydmljZS5iYXNlVXJsOyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldERlbGV0ZVBlcm1pc3Npb24oKSB7IHJldHVybiBQcm9kdWN0c2J5Q2F0ZWdvcnlSb3cuZGVsZXRlUGVybWlzc2lvbjsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRJbnNlcnRQZXJtaXNzaW9uKCkgeyByZXR1cm4gUHJvZHVjdHNieUNhdGVnb3J5Um93Lmluc2VydFBlcm1pc3Npb247IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0VXBkYXRlUGVybWlzc2lvbigpIHsgcmV0dXJuIFByb2R1Y3RzYnlDYXRlZ29yeVJvdy51cGRhdGVQZXJtaXNzaW9uOyB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCBmb3JtID0gbmV3IFByb2R1Y3RzYnlDYXRlZ29yeUZvcm0odGhpcy5pZFByZWZpeCk7XHJcblxyXG4gICAgfVxyXG59IiwiXHJcbm5hbWVzcGFjZSBZYXhpZS5Ob3J0aFdpbmQge1xyXG5cclxuICAgIEBTZXJlbml0eS5EZWNvcmF0b3JzLnJlZ2lzdGVyQ2xhc3MoKVxyXG4gICAgZXhwb3J0IGNsYXNzIFByb2R1Y3RzYnlDYXRlZ29yeUdyaWQgZXh0ZW5kcyBTZXJlbml0eS5FbnRpdHlHcmlkPFByb2R1Y3RzYnlDYXRlZ29yeVJvdywgYW55PiB7XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldENvbHVtbnNLZXkoKSB7IHJldHVybiAnTm9ydGhXaW5kLlByb2R1Y3RzYnlDYXRlZ29yeSc7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0RGlhbG9nVHlwZSgpIHsgcmV0dXJuIFByb2R1Y3RzYnlDYXRlZ29yeURpYWxvZzsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRJZFByb3BlcnR5KCkgeyByZXR1cm4gUHJvZHVjdHNieUNhdGVnb3J5Um93LmlkUHJvcGVydHk7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0SW5zZXJ0UGVybWlzc2lvbigpIHsgcmV0dXJuIFByb2R1Y3RzYnlDYXRlZ29yeVJvdy5pbnNlcnRQZXJtaXNzaW9uOyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldExvY2FsVGV4dFByZWZpeCgpIHsgcmV0dXJuIFByb2R1Y3RzYnlDYXRlZ29yeVJvdy5sb2NhbFRleHRQcmVmaXg7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0U2VydmljZSgpIHsgcmV0dXJuIFByb2R1Y3RzYnlDYXRlZ29yeVNlcnZpY2UuYmFzZVVybDsgfVxyXG5cclxuICAgICAgICBjb25zdHJ1Y3Rvcihjb250YWluZXI6IEpRdWVyeSkge1xyXG4gICAgICAgICAgICBzdXBlcihjb250YWluZXIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsIlxyXG5uYW1lc3BhY2UgWWF4aWUuTm9ydGhXaW5kIHtcclxuXHJcbiAgICBAU2VyZW5pdHkuRGVjb3JhdG9ycy5yZWdpc3RlckNsYXNzKClcclxuICAgIGV4cG9ydCBjbGFzcyBSZWdpb25EaWFsb2cgZXh0ZW5kcyBTZXJlbml0eS5FbnRpdHlEaWFsb2c8UmVnaW9uUm93LCBhbnk+IHtcclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0Rm9ybUtleSgpIHsgcmV0dXJuIFJlZ2lvbkZvcm0uZm9ybUtleTsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRJZFByb3BlcnR5KCkgeyByZXR1cm4gUmVnaW9uUm93LmlkUHJvcGVydHk7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0TG9jYWxUZXh0UHJlZml4KCkgeyByZXR1cm4gUmVnaW9uUm93LmxvY2FsVGV4dFByZWZpeDsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXROYW1lUHJvcGVydHkoKSB7IHJldHVybiBSZWdpb25Sb3cubmFtZVByb3BlcnR5OyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldFNlcnZpY2UoKSB7IHJldHVybiBSZWdpb25TZXJ2aWNlLmJhc2VVcmw7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0RGVsZXRlUGVybWlzc2lvbigpIHsgcmV0dXJuIFJlZ2lvblJvdy5kZWxldGVQZXJtaXNzaW9uOyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldEluc2VydFBlcm1pc3Npb24oKSB7IHJldHVybiBSZWdpb25Sb3cuaW5zZXJ0UGVybWlzc2lvbjsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRVcGRhdGVQZXJtaXNzaW9uKCkgeyByZXR1cm4gUmVnaW9uUm93LnVwZGF0ZVBlcm1pc3Npb247IH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIGZvcm0gPSBuZXcgUmVnaW9uRm9ybSh0aGlzLmlkUHJlZml4KTtcclxuXHJcbiAgICB9XHJcbn0iLCJcclxubmFtZXNwYWNlIFlheGllLk5vcnRoV2luZCB7XHJcblxyXG4gICAgQFNlcmVuaXR5LkRlY29yYXRvcnMucmVnaXN0ZXJDbGFzcygpXHJcbiAgICBleHBvcnQgY2xhc3MgUmVnaW9uR3JpZCBleHRlbmRzIFNlcmVuaXR5LkVudGl0eUdyaWQ8UmVnaW9uUm93LCBhbnk+IHtcclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0Q29sdW1uc0tleSgpIHsgcmV0dXJuICdOb3J0aFdpbmQuUmVnaW9uJzsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXREaWFsb2dUeXBlKCkgeyByZXR1cm4gUmVnaW9uRGlhbG9nOyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldElkUHJvcGVydHkoKSB7IHJldHVybiBSZWdpb25Sb3cuaWRQcm9wZXJ0eTsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRJbnNlcnRQZXJtaXNzaW9uKCkgeyByZXR1cm4gUmVnaW9uUm93Lmluc2VydFBlcm1pc3Npb247IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0TG9jYWxUZXh0UHJlZml4KCkgeyByZXR1cm4gUmVnaW9uUm93LmxvY2FsVGV4dFByZWZpeDsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRTZXJ2aWNlKCkgeyByZXR1cm4gUmVnaW9uU2VydmljZS5iYXNlVXJsOyB9XHJcblxyXG4gICAgICAgIGNvbnN0cnVjdG9yKGNvbnRhaW5lcjogSlF1ZXJ5KSB7XHJcbiAgICAgICAgICAgIHN1cGVyKGNvbnRhaW5lcik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiXHJcbm5hbWVzcGFjZSBZYXhpZS5Ob3J0aFdpbmQge1xyXG5cclxuICAgIEBTZXJlbml0eS5EZWNvcmF0b3JzLnJlZ2lzdGVyQ2xhc3MoKVxyXG4gICAgZXhwb3J0IGNsYXNzIFNoaXBwZXJzRGlhbG9nIGV4dGVuZHMgU2VyZW5pdHkuRW50aXR5RGlhbG9nPFNoaXBwZXJzUm93LCBhbnk+IHtcclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0Rm9ybUtleSgpIHsgcmV0dXJuIFNoaXBwZXJzRm9ybS5mb3JtS2V5OyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldElkUHJvcGVydHkoKSB7IHJldHVybiBTaGlwcGVyc1Jvdy5pZFByb3BlcnR5OyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldExvY2FsVGV4dFByZWZpeCgpIHsgcmV0dXJuIFNoaXBwZXJzUm93LmxvY2FsVGV4dFByZWZpeDsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXROYW1lUHJvcGVydHkoKSB7IHJldHVybiBTaGlwcGVyc1Jvdy5uYW1lUHJvcGVydHk7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0U2VydmljZSgpIHsgcmV0dXJuIFNoaXBwZXJzU2VydmljZS5iYXNlVXJsOyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldERlbGV0ZVBlcm1pc3Npb24oKSB7IHJldHVybiBTaGlwcGVyc1Jvdy5kZWxldGVQZXJtaXNzaW9uOyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldEluc2VydFBlcm1pc3Npb24oKSB7IHJldHVybiBTaGlwcGVyc1Jvdy5pbnNlcnRQZXJtaXNzaW9uOyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldFVwZGF0ZVBlcm1pc3Npb24oKSB7IHJldHVybiBTaGlwcGVyc1Jvdy51cGRhdGVQZXJtaXNzaW9uOyB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCBmb3JtID0gbmV3IFNoaXBwZXJzRm9ybSh0aGlzLmlkUHJlZml4KTtcclxuXHJcbiAgICB9XHJcbn0iLCJcclxubmFtZXNwYWNlIFlheGllLk5vcnRoV2luZCB7XHJcblxyXG4gICAgQFNlcmVuaXR5LkRlY29yYXRvcnMucmVnaXN0ZXJDbGFzcygpXHJcbiAgICBleHBvcnQgY2xhc3MgU2hpcHBlcnNHcmlkIGV4dGVuZHMgU2VyZW5pdHkuRW50aXR5R3JpZDxTaGlwcGVyc1JvdywgYW55PiB7XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldENvbHVtbnNLZXkoKSB7IHJldHVybiAnTm9ydGhXaW5kLlNoaXBwZXJzJzsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXREaWFsb2dUeXBlKCkgeyByZXR1cm4gU2hpcHBlcnNEaWFsb2c7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0SWRQcm9wZXJ0eSgpIHsgcmV0dXJuIFNoaXBwZXJzUm93LmlkUHJvcGVydHk7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0SW5zZXJ0UGVybWlzc2lvbigpIHsgcmV0dXJuIFNoaXBwZXJzUm93Lmluc2VydFBlcm1pc3Npb247IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0TG9jYWxUZXh0UHJlZml4KCkgeyByZXR1cm4gU2hpcHBlcnNSb3cubG9jYWxUZXh0UHJlZml4OyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldFNlcnZpY2UoKSB7IHJldHVybiBTaGlwcGVyc1NlcnZpY2UuYmFzZVVybDsgfVxyXG5cclxuICAgICAgICBjb25zdHJ1Y3Rvcihjb250YWluZXI6IEpRdWVyeSkge1xyXG4gICAgICAgICAgICBzdXBlcihjb250YWluZXIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsIlxyXG5uYW1lc3BhY2UgWWF4aWUuTm9ydGhXaW5kIHtcclxuXHJcbiAgICBAU2VyZW5pdHkuRGVjb3JhdG9ycy5yZWdpc3RlckNsYXNzKClcclxuICAgIGV4cG9ydCBjbGFzcyBTdXBwbGllcnNEaWFsb2cgZXh0ZW5kcyBTZXJlbml0eS5FbnRpdHlEaWFsb2c8U3VwcGxpZXJzUm93LCBhbnk+IHtcclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0Rm9ybUtleSgpIHsgcmV0dXJuIFN1cHBsaWVyc0Zvcm0uZm9ybUtleTsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRJZFByb3BlcnR5KCkgeyByZXR1cm4gU3VwcGxpZXJzUm93LmlkUHJvcGVydHk7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0TG9jYWxUZXh0UHJlZml4KCkgeyByZXR1cm4gU3VwcGxpZXJzUm93LmxvY2FsVGV4dFByZWZpeDsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXROYW1lUHJvcGVydHkoKSB7IHJldHVybiBTdXBwbGllcnNSb3cubmFtZVByb3BlcnR5OyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldFNlcnZpY2UoKSB7IHJldHVybiBTdXBwbGllcnNTZXJ2aWNlLmJhc2VVcmw7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0RGVsZXRlUGVybWlzc2lvbigpIHsgcmV0dXJuIFN1cHBsaWVyc1Jvdy5kZWxldGVQZXJtaXNzaW9uOyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldEluc2VydFBlcm1pc3Npb24oKSB7IHJldHVybiBTdXBwbGllcnNSb3cuaW5zZXJ0UGVybWlzc2lvbjsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRVcGRhdGVQZXJtaXNzaW9uKCkgeyByZXR1cm4gU3VwcGxpZXJzUm93LnVwZGF0ZVBlcm1pc3Npb247IH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIGZvcm0gPSBuZXcgU3VwcGxpZXJzRm9ybSh0aGlzLmlkUHJlZml4KTtcclxuXHJcbiAgICB9XHJcbn0iLCJcclxubmFtZXNwYWNlIFlheGllLk5vcnRoV2luZCB7XHJcblxyXG4gICAgQFNlcmVuaXR5LkRlY29yYXRvcnMucmVnaXN0ZXJDbGFzcygpXHJcbiAgICBleHBvcnQgY2xhc3MgU3VwcGxpZXJzR3JpZCBleHRlbmRzIFNlcmVuaXR5LkVudGl0eUdyaWQ8U3VwcGxpZXJzUm93LCBhbnk+IHtcclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0Q29sdW1uc0tleSgpIHsgcmV0dXJuICdOb3J0aFdpbmQuU3VwcGxpZXJzJzsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXREaWFsb2dUeXBlKCkgeyByZXR1cm4gU3VwcGxpZXJzRGlhbG9nOyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldElkUHJvcGVydHkoKSB7IHJldHVybiBTdXBwbGllcnNSb3cuaWRQcm9wZXJ0eTsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRJbnNlcnRQZXJtaXNzaW9uKCkgeyByZXR1cm4gU3VwcGxpZXJzUm93Lmluc2VydFBlcm1pc3Npb247IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0TG9jYWxUZXh0UHJlZml4KCkgeyByZXR1cm4gU3VwcGxpZXJzUm93LmxvY2FsVGV4dFByZWZpeDsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRTZXJ2aWNlKCkgeyByZXR1cm4gU3VwcGxpZXJzU2VydmljZS5iYXNlVXJsOyB9XHJcblxyXG4gICAgICAgIGNvbnN0cnVjdG9yKGNvbnRhaW5lcjogSlF1ZXJ5KSB7XHJcbiAgICAgICAgICAgIHN1cGVyKGNvbnRhaW5lcik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiXHJcbm5hbWVzcGFjZSBZYXhpZS5Ob3J0aFdpbmQge1xyXG5cclxuICAgIEBTZXJlbml0eS5EZWNvcmF0b3JzLnJlZ2lzdGVyQ2xhc3MoKVxyXG4gICAgZXhwb3J0IGNsYXNzIFRlcnJpdG9yaWVzRGlhbG9nIGV4dGVuZHMgU2VyZW5pdHkuRW50aXR5RGlhbG9nPFRlcnJpdG9yaWVzUm93LCBhbnk+IHtcclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0Rm9ybUtleSgpIHsgcmV0dXJuIFRlcnJpdG9yaWVzRm9ybS5mb3JtS2V5OyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldElkUHJvcGVydHkoKSB7IHJldHVybiBUZXJyaXRvcmllc1Jvdy5pZFByb3BlcnR5OyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldExvY2FsVGV4dFByZWZpeCgpIHsgcmV0dXJuIFRlcnJpdG9yaWVzUm93LmxvY2FsVGV4dFByZWZpeDsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXROYW1lUHJvcGVydHkoKSB7IHJldHVybiBUZXJyaXRvcmllc1Jvdy5uYW1lUHJvcGVydHk7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0U2VydmljZSgpIHsgcmV0dXJuIFRlcnJpdG9yaWVzU2VydmljZS5iYXNlVXJsOyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldERlbGV0ZVBlcm1pc3Npb24oKSB7IHJldHVybiBUZXJyaXRvcmllc1Jvdy5kZWxldGVQZXJtaXNzaW9uOyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldEluc2VydFBlcm1pc3Npb24oKSB7IHJldHVybiBUZXJyaXRvcmllc1Jvdy5pbnNlcnRQZXJtaXNzaW9uOyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldFVwZGF0ZVBlcm1pc3Npb24oKSB7IHJldHVybiBUZXJyaXRvcmllc1Jvdy51cGRhdGVQZXJtaXNzaW9uOyB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCBmb3JtID0gbmV3IFRlcnJpdG9yaWVzRm9ybSh0aGlzLmlkUHJlZml4KTtcclxuXHJcbiAgICB9XHJcbn0iLCJcclxubmFtZXNwYWNlIFlheGllLk5vcnRoV2luZCB7XHJcblxyXG4gICAgQFNlcmVuaXR5LkRlY29yYXRvcnMucmVnaXN0ZXJDbGFzcygpXHJcbiAgICBleHBvcnQgY2xhc3MgVGVycml0b3JpZXNHcmlkIGV4dGVuZHMgU2VyZW5pdHkuRW50aXR5R3JpZDxUZXJyaXRvcmllc1JvdywgYW55PiB7XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldENvbHVtbnNLZXkoKSB7IHJldHVybiAnTm9ydGhXaW5kLlRlcnJpdG9yaWVzJzsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXREaWFsb2dUeXBlKCkgeyByZXR1cm4gVGVycml0b3JpZXNEaWFsb2c7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0SWRQcm9wZXJ0eSgpIHsgcmV0dXJuIFRlcnJpdG9yaWVzUm93LmlkUHJvcGVydHk7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0SW5zZXJ0UGVybWlzc2lvbigpIHsgcmV0dXJuIFRlcnJpdG9yaWVzUm93Lmluc2VydFBlcm1pc3Npb247IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0TG9jYWxUZXh0UHJlZml4KCkgeyByZXR1cm4gVGVycml0b3JpZXNSb3cubG9jYWxUZXh0UHJlZml4OyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldFNlcnZpY2UoKSB7IHJldHVybiBUZXJyaXRvcmllc1NlcnZpY2UuYmFzZVVybDsgfVxyXG5cclxuICAgICAgICBjb25zdHJ1Y3Rvcihjb250YWluZXI6IEpRdWVyeSkge1xyXG4gICAgICAgICAgICBzdXBlcihjb250YWluZXIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSJdfQ==