/*
 * Public API Surface of core-framework-angular
 */

export * from 'projects/core-framework-angular/src/lib/Core/Module';
export * from 'projects/core-framework-angular/src/lib/Core/Validators/Settings';
export * from 'projects/core-framework-angular/src/lib/Core/ServiceLocator';
// Actions
export * from 'projects/core-framework-angular/src/lib/Core/Actions/Predefined/PCollectionBulkRemoveAction';
export * from 'projects/core-framework-angular/src/lib/Core/Actions/Predefined/PLinkAction';
export * from 'projects/core-framework-angular/src/lib/Core/Actions/Predefined/PModalAction';
export * from 'projects/core-framework-angular/src/lib/Core/Actions/Predefined/PModelBulkRemoveAction';
export * from 'projects/core-framework-angular/src/lib/Core/Actions/Predefined/PSearchAction';
export * from 'projects/core-framework-angular/src/lib/Core/Actions/AModelBulkActon';
// Adapters
export * from 'projects/core-framework-angular/src/lib/Core/Adapters/DurationValueAdapter';
export * from 'projects/core-framework-angular/src/lib/Core/Adapters/NopValueAdapter';
// Data Providers
export * from 'projects/core-framework-angular/src/lib/Core/DataProviders/CollectionProviderDecorator';
export * from 'projects/core-framework-angular/src/lib/Core/DataProviders/ModelProviderDecorator';
// Data Structures
export * from 'projects/core-framework-angular/src/lib/Core/DataStructures/Attribute';
export * from 'projects/core-framework-angular/src/lib/Core/DataStructures/AutoAttribute';
export * from 'projects/core-framework-angular/src/lib/Core/DataStructures/ReadOnlyAttribute';
export * from 'projects/core-framework-angular/src/lib/Core/DataStructures/SimpleAttribute';
export * from 'projects/core-framework-angular/src/lib/Core/DataStructures/Collections/BaseCollection';
export * from 'projects/core-framework-angular/src/lib/Core/DataStructures/Collections/Collection';
export * from 'projects/core-framework-angular/src/lib/Core/DataStructures/Models/BaseModel';
export * from 'projects/core-framework-angular/src/lib/Core/DataStructures/Models/Model';
export * from 'projects/core-framework-angular/src/lib/Core/DataStructures/Queries/BaseQuery';
export * from 'projects/core-framework-angular/src/lib/Core/DataStructures/Queries/SearchJSONQuery';
// Helpers
export * from 'projects/core-framework-angular/src/lib/Core/Helpers/UUIDv4';
// Interfaces
export * from 'projects/core-framework-angular/src/lib/Core/Interfaces/DataProvider/ICollectionDataProvider';
export * from 'projects/core-framework-angular/src/lib/Core/Interfaces/DataProvider/IDataProviderFactory';
export * from 'projects/core-framework-angular/src/lib/Core/Interfaces/DataProvider/IModelDataProvider';
export * from 'projects/core-framework-angular/src/lib/Core/Interfaces/IModelBulkActon';
export * from 'projects/core-framework-angular/src/lib/Core/Interfaces/IValueAdapter';
export * from 'projects/core-framework-angular/src/lib/Core/Interfaces/DataStructures/IAttribute';
export * from 'projects/core-framework-angular/src/lib/Core/Interfaces/DataStructures/IEndpoint';
export * from 'projects/core-framework-angular/src/lib/Core/Interfaces/DataStructures/Collections/IBaseCollection';
export * from 'projects/core-framework-angular/src/lib/Core/Interfaces/DataStructures/Collections/ICollection';
export * from 'projects/core-framework-angular/src/lib/Core/Interfaces/DataStructures/Models/IBaseModel';
export * from 'projects/core-framework-angular/src/lib/Core/Interfaces/DataStructures/Models/IModel';
export * from 'projects/core-framework-angular/src/lib/Core/Interfaces/DataStructures/Queries/ICollectionQuery';
// Pipes
export * from 'projects/core-framework-angular/src/lib/Core/Pipes/EnumPipe';
export * from 'projects/core-framework-angular/src/lib/Core/Pipes/QuickSearchPipe';
// Providers
export * from 'projects/core-framework-angular/src/lib/Core/Providers/CollectionQuery';
export * from 'projects/core-framework-angular/src/lib/Core/Providers/ModelList';
// Services
export * from 'projects/core-framework-angular/src/lib/Core/Services/BreadCrumbs';
export * from 'projects/core-framework-angular/src/lib/Core/Services/GlobalSearch';
export * from 'projects/core-framework-angular/src/lib/Core/Services/UploadFileService';
// UI
export * from 'projects/core-framework-angular/src/lib/Core/Ui/Module';
// UI Abstract classes
export * from 'projects/core-framework-angular/src/lib/Core/Ui/Modules/Abstract/Module';
export *
    from 'projects/core-framework-angular/src/lib/Core/Ui/Modules/Abstract/Components/BreadCrumb/ABreadCrumbComponent';
export * from 'projects/core-framework-angular/src/lib/Core/Ui/Modules/Abstract/Components/List/AListComponent';
export * from 'projects/core-framework-angular/src/lib/Core/Ui/Modules/Abstract/Components/Manage/AManageComponent';
// UI Forms Modules and Components
export * from 'projects/core-framework-angular/src/lib/Core/Ui/Modules/Forms/Module';
export * from 'projects/core-framework-angular/src/lib/Core/Ui/Modules/Forms/Components/CheckBox/CheckBoxComponent';
export * from 'projects/core-framework-angular/src/lib/Core/Ui/Modules/Forms/Components/Color/ColorComponent';
export * from 'projects/core-framework-angular/src/lib/Core/Ui/Modules/Forms/Components/DateTime/DateTimeComponent';
export *
    from 'projects/core-framework-angular/src/lib/Core/Ui/Modules/Forms/Components/ErrorsOutPut/ErrorsOutPutComponent';
export * from 'projects/core-framework-angular/src/lib/Core/Ui/Modules/Forms/Components/File/FileComponent';
export * from 'projects/core-framework-angular/src/lib/Core/Ui/Modules/Forms/Components/ImageUrl/ImageUrlComponent';
export *
    from 'projects/core-framework-angular/src/lib/Core/Ui/Modules/Forms/Components/ManageHeader/ManageHeaderComponent';
export * from 'projects/core-framework-angular/src/lib/Core/Ui/Modules/Forms/Components/MMYY/MMYYComponent';
export * from 'projects/core-framework-angular/src/lib/Core/Ui/Modules/Forms/Components/Number/NumberComponent';
export * from 'projects/core-framework-angular/src/lib/Core/Ui/Modules/Forms/Components/Password/PasswordComponent';
export * from 'projects/core-framework-angular/src/lib/Core/Ui/Modules/Forms/Components/Range/RangeComponent';
export * from 'projects/core-framework-angular/src/lib/Core/Ui/Modules/Forms/Components/RichText/RichTextComponent';
export * from 'projects/core-framework-angular/src/lib/Core/Ui/Modules/Forms/Components/SelectEnum/SelectEnumComponent';
export *
    from 'projects/core-framework-angular/src/lib/Core/Ui/Modules/Forms/Components/SelectIdModelList/SelectIdModelListComponent';
export *
    from 'projects/core-framework-angular/src/lib/Core/Ui/Modules/Forms/Components/SelectIdsCollection/SelectIdsCollectionComponent';
export *
    from 'projects/core-framework-angular/src/lib/Core/Ui/Modules/Forms/Components/SelectSearchCollection/SelectSearchCollectionComponent';
export *
    from 'projects/core-framework-angular/src/lib/Core/Ui/Modules/Forms/Components/SelectStrings/SelectStringsComponent';

// @todo check
// export * from 'projects/core-framework-angular/src/lib/Core/Ui/Modules/Forms/Components/Text/TextComponent';
export * from 'projects/core-framework-angular/src/lib/Core/Ui/Modules/Forms/Components/TextList/TextListComponent';
// UI Grid Modules and Components
export * from 'projects/core-framework-angular/src/lib/Core/Ui/Modules/Grid/Module';
export * from 'projects/core-framework-angular/src/lib/Core/Ui/Modules/Grid/Components/Columns/Bool/BoolComponent';
export * from 'projects/core-framework-angular/src/lib/Core/Ui/Modules/Grid/Components/Columns/Cell/CellDirective';
export *
    from 'projects/core-framework-angular/src/lib/Core/Ui/Modules/Grid/Components/Columns/Checkable/CheckableComponent';
export * from 'projects/core-framework-angular/src/lib/Core/Ui/Modules/Grid/Components/Columns/Enum/EnumComponent';
export * from 'projects/core-framework-angular/src/lib/Core/Ui/Modules/Grid/Components/Columns/Json/JsonComponent';
export * from 'projects/core-framework-angular/src/lib/Core/Ui/Modules/Grid/Components/Columns/Link/LinkComponent';
export *
    from 'projects/core-framework-angular/src/lib/Core/Ui/Modules/Grid/Components/Columns/RawText/RawTextComponent';
export * from 'projects/core-framework-angular/src/lib/Core/Ui/Modules/Grid/Components/Columns/Text/TextComponent';
export * from 'projects/core-framework-angular/src/lib/Core/Ui/Modules/Grid/Components/Columns/Time/TimeComponent';
export * from 'projects/core-framework-angular/src/lib/Core/Ui/Modules/Grid/Components/Paginator/PaginatorComponent';
export * from 'projects/core-framework-angular/src/lib/Core/Ui/Modules/Grid/Components/Table/TableComponent';
// UI Links Modules and Components
export * from 'projects/core-framework-angular/src/lib/Core/Ui/Modules/Links/Module';
export *
    from 'projects/core-framework-angular/src/lib/Core/Ui/Modules/Links/Components/ManageModel/ManageModelComponent';
// UI Modals Modules and Components
export * from 'projects/core-framework-angular/src/lib/Core/Ui/Modules/Modals/Module'
export *
    from 'projects/core-framework-angular/src/lib/Core/Ui/Modules/Modals/Components/BasicModal/BasicModalComponent';
export *
    from 'projects/core-framework-angular/src/lib/Core/Ui/Modules/Modals/Components/ConfirmModal/ConfirmModalComponent';
export * from 'projects/core-framework-angular/src/lib/Core/Ui/Modules/Modals/Interfaces/IModalManager';
export * from 'projects/core-framework-angular/src/lib/Core/Ui/Modules/Modals/Services/BasicModalService';
export * from 'projects/core-framework-angular/src/lib/Core/Ui/Modules/Modals/Services/ModalMager';
// UI Tabs Modules and Components
export * from 'projects/core-framework-angular/src/lib/Core/Ui/Modules/Tabs/Module';
export * from 'projects/core-framework-angular/src/lib/Core/Ui/Modules/Tabs/Components/Tab/TabComponent';
export * from 'projects/core-framework-angular/src/lib/Core/Ui/Modules/Tabs/Components/TabSet/TabSetComponent';
// UI Toolbar Modules and Components
export * from 'projects/core-framework-angular/src/lib/Core/Ui/Modules/Toolbar/Module';
export * from 'projects/core-framework-angular/src/lib/Core/Ui/Modules/Toolbar/Components/Toolbar/ToolbarComponent';
export *
    from 'projects/core-framework-angular/src/lib/Core/Ui/Modules/Toolbar/Components/SimpleAction/SimpleActionComponent';
// UI Views Modules and Components
export * from 'projects/core-framework-angular/src/lib/Core/Ui/Modules/View/Module';
export *
    from 'projects/core-framework-angular/src/lib/Core/Ui/Modules/View/Components/GoogleSearchResults/GoogleSearchResultsComponent';
// UI Waiters Modules and Components
export * from 'projects/core-framework-angular/src/lib/Core/Ui/Modules/Waiters/Module';
export * from 'projects/core-framework-angular/src/lib/Core/Ui/Modules/Waiters/Components/Common/CommonComponent';
