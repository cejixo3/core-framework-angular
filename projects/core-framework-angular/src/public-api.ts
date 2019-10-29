/*
 * Public API Surface of core-framework-angular
 */

export * from 'lib/Core/Module';
export * from 'lib/Core/Validators/Settings';
export * from 'lib/Core/ServiceLocator';
// Actions
export * from 'lib/Core/Actions/Predefined/PCollectionBulkRemoveAction';
export * from 'lib/Core/Actions/Predefined/PLinkAction';
export * from 'lib/Core/Actions/Predefined/PModalAction';
export * from 'lib/Core/Actions/Predefined/PModelBulkRemoveAction';
export * from 'lib/Core/Actions/Predefined/PSearchAction';
export * from 'lib/Core/Actions/AModelBulkActon';
// Adapters
export * from 'lib/Core/Adapters/DurationValueAdapter';
export * from 'lib/Core/Adapters/NopValueAdapter';
// Data Providers
export * from 'lib/Core/DataProviders/CollectionProviderDecorator';
export * from 'lib/Core/DataProviders/ModelProviderDecorator';
// Data Structures
export * from 'lib/Core/DataStructures/Attribute';
export * from 'lib/Core/DataStructures/AutoAttribute';
export * from 'lib/Core/DataStructures/ReadOnlyAttribute';
export * from 'lib/Core/DataStructures/SimpleAttribute';
export * from 'lib/Core/DataStructures/Collections/BaseCollection';
export * from 'lib/Core/DataStructures/Collections/Collection';
export * from 'lib/Core/DataStructures/Models/BaseModel';
export * from 'lib/Core/DataStructures/Models/Model';
export * from 'lib/Core/DataStructures/Queries/BaseQuery';
export * from 'lib/Core/DataStructures/Queries/SearchJSONQuery';
// Helpers
export * from 'lib/Core/Helpers/UUIDv4';
// Interfaces
export * from 'lib/Core/Interfaces/DataProvider/ICollectionDataProvider';
export * from 'lib/Core/Interfaces/DataProvider/IDataProviderFactory';
export * from 'lib/Core/Interfaces/DataProvider/IModelDataProvider';
export * from 'lib/Core/Interfaces/IModelBulkActon';
export * from 'lib/Core/Interfaces/IValueAdapter';
export * from 'lib/Core/Interfaces/DataStructures/IAttribute';
export * from 'lib/Core/Interfaces/DataStructures/IEndpoint';
export * from 'lib/Core/Interfaces/DataStructures/Collections/IBaseCollection';
export * from 'lib/Core/Interfaces/DataStructures/Collections/ICollection';
export * from 'lib/Core/Interfaces/DataStructures/Models/IBaseModel';
export * from 'lib/Core/Interfaces/DataStructures/Models/IModel';
export * from 'lib/Core/Interfaces/DataStructures/Queries/ICollectionQuery';
// Pipes
export * from 'lib/Core/Pipes/EnumPipe';
export * from 'lib/Core/Pipes/QuickSearchPipe';
// Providers
export * from 'lib/Core/Providers/CollectionQuery';
export * from 'lib/Core/Providers/ModelList';
// Services
export * from 'lib/Core/Services/BreadCrumbs';
export * from 'lib/Core/Services/GlobalSearch';
export * from 'lib/Core/Services/UploadFileService';
// UI
export * from 'lib/Core/Ui/Module';
// UI Abstract classes
export * from 'lib/Core/Ui/Modules/Abstract/Module';
export *
    from 'lib/Core/Ui/Modules/Abstract/Components/BreadCrumb/ABreadCrumbComponent';
export * from 'lib/Core/Ui/Modules/Abstract/Components/List/AListComponent';
export * from 'lib/Core/Ui/Modules/Abstract/Components/Manage/AManageComponent';
// UI Forms Modules and Components
export * from 'lib/Core/Ui/Modules/Forms/Module';
export * from 'lib/Core/Ui/Modules/Forms/Components/CheckBox/CheckBoxComponent';
export * from 'lib/Core/Ui/Modules/Forms/Components/Color/ColorComponent';
export * from 'lib/Core/Ui/Modules/Forms/Components/DateTime/DateTimeComponent';
export *
    from 'lib/Core/Ui/Modules/Forms/Components/ErrorsOutPut/ErrorsOutPutComponent';
export * from 'lib/Core/Ui/Modules/Forms/Components/File/FileComponent';
export * from 'lib/Core/Ui/Modules/Forms/Components/ImageUrl/ImageUrlComponent';
export *
    from 'lib/Core/Ui/Modules/Forms/Components/ManageHeader/ManageHeaderComponent';
export * from 'lib/Core/Ui/Modules/Forms/Components/MMYY/MMYYComponent';
export * from 'lib/Core/Ui/Modules/Forms/Components/Number/NumberComponent';
export * from 'lib/Core/Ui/Modules/Forms/Components/Password/PasswordComponent';
export * from 'lib/Core/Ui/Modules/Forms/Components/Range/RangeComponent';
export * from 'lib/Core/Ui/Modules/Forms/Components/RichText/RichTextComponent';
export * from 'lib/Core/Ui/Modules/Forms/Components/SelectEnum/SelectEnumComponent';
export *
    from 'lib/Core/Ui/Modules/Forms/Components/SelectIdModelList/SelectIdModelListComponent';
export *
    from 'lib/Core/Ui/Modules/Forms/Components/SelectIdsCollection/SelectIdsCollectionComponent';
export *
    from 'lib/Core/Ui/Modules/Forms/Components/SelectSearchCollection/SelectSearchCollectionComponent';
export *
    from 'lib/Core/Ui/Modules/Forms/Components/SelectStrings/SelectStringsComponent';

// @todo check
// export * from 'lib/Core/Ui/Modules/Forms/Components/Text/TextComponent';
export * from 'lib/Core/Ui/Modules/Forms/Components/TextList/TextListComponent';
// UI Grid Modules and Components
export * from 'lib/Core/Ui/Modules/Grid/Module';
export * from 'lib/Core/Ui/Modules/Grid/Components/Columns/Bool/BoolComponent';
export * from 'lib/Core/Ui/Modules/Grid/Components/Columns/Cell/CellDirective';
export *
    from 'lib/Core/Ui/Modules/Grid/Components/Columns/Checkable/CheckableComponent';
export * from 'lib/Core/Ui/Modules/Grid/Components/Columns/Enum/EnumComponent';
export * from 'lib/Core/Ui/Modules/Grid/Components/Columns/Json/JsonComponent';
export * from 'lib/Core/Ui/Modules/Grid/Components/Columns/Link/LinkComponent';
export *
    from 'lib/Core/Ui/Modules/Grid/Components/Columns/RawText/RawTextComponent';
export * from 'lib/Core/Ui/Modules/Grid/Components/Columns/Text/TextComponent';
export * from 'lib/Core/Ui/Modules/Grid/Components/Columns/Time/TimeComponent';
export * from 'lib/Core/Ui/Modules/Grid/Components/Paginator/PaginatorComponent';
export * from 'lib/Core/Ui/Modules/Grid/Components/Table/TableComponent';
// UI Links Modules and Components
export * from 'lib/Core/Ui/Modules/Links/Module';
export *
    from 'lib/Core/Ui/Modules/Links/Components/ManageModel/ManageModelComponent';
// UI Modals Modules and Components
export * from 'lib/Core/Ui/Modules/Modals/Module';
export *
    from 'lib/Core/Ui/Modules/Modals/Components/BasicModal/BasicModalComponent';
export *
    from 'lib/Core/Ui/Modules/Modals/Components/ConfirmModal/ConfirmModalComponent';
export * from 'lib/Core/Ui/Modules/Modals/Interfaces/IModalManager';
export * from 'lib/Core/Ui/Modules/Modals/Services/BasicModalService';
export * from 'lib/Core/Ui/Modules/Modals/Services/ModalMager';
// UI Tabs Modules and Components
export * from 'lib/Core/Ui/Modules/Tabs/Module';
export * from 'lib/Core/Ui/Modules/Tabs/Components/Tab/TabComponent';
export * from 'lib/Core/Ui/Modules/Tabs/Components/TabSet/TabSetComponent';
// UI Toolbar Modules and Components
export * from 'lib/Core/Ui/Modules/Toolbar/Module';
export * from 'lib/Core/Ui/Modules/Toolbar/Components/Toolbar/ToolbarComponent';
export *
    from 'lib/Core/Ui/Modules/Toolbar/Components/SimpleAction/SimpleActionComponent';
// UI Views Modules and Components
export * from 'lib/Core/Ui/Modules/View/Module';
export *
    from 'lib/Core/Ui/Modules/View/Components/GoogleSearchResults/GoogleSearchResultsComponent';
// UI Waiters Modules and Components
export * from 'lib/Core/Ui/Modules/Waiters/Module';
export * from 'lib/Core/Ui/Modules/Waiters/Components/Common/CommonComponent';
