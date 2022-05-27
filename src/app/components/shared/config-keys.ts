export class SysMessages {
    public static RecordSaved = "Record saved successfully.";
    public static RecordDeleted = "Record deleted successfully.";
    public static OperationError = "Error in performing operation. Check system logs for more details";
    public static Unauthorized = "You are not authorized to perform this action.";
    public static BadGateway = "Error connecting to server. Please check your internet connection.";
    public static NotFound = "Not Found. The resource you requested can not be found.";
    public static NotAllowed = "Response to preflight request doesn't pass access control check: No 'Access-Control-Allow-Origin' header is present on the requested resource.";
    public static ConnectionLost = "Connection to server was lost.";
}

export class StoreKeys {
    public static CurrentUser = "cmVzdQ==";
    public static Token = "c2FuZmlsMw==";
    public static DefaultView = "defaultview";
    public static TotalRecords = "total_rec";
}