# XaynBackOfficeSdk.BackOfficeApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deleteDocument**](BackOfficeApi.md#deleteDocument) | **DELETE** /documents/{document_id} | Delete the document from the system.
[**deleteDocumentProperties**](BackOfficeApi.md#deleteDocumentProperties) | **DELETE** /documents/{document_id}/properties | Delete all document properties
[**deleteDocumentProperty**](BackOfficeApi.md#deleteDocumentProperty) | **DELETE** /documents/{document_id}/properties/{property_id} | Delete a document property
[**deleteDocuments**](BackOfficeApi.md#deleteDocuments) | **DELETE** /documents | Delete all listed documents.
[**getDocumentProperties**](BackOfficeApi.md#getDocumentProperties) | **GET** /documents/{document_id}/properties | Get all document properties
[**getDocumentProperty**](BackOfficeApi.md#getDocumentProperty) | **GET** /documents/{document_id}/properties/{property_id} | Get a document property
[**ingestDocuments**](BackOfficeApi.md#ingestDocuments) | **POST** /documents | Add documents to the system
[**setDocumentProperties**](BackOfficeApi.md#setDocumentProperties) | **PUT** /documents/{document_id}/properties | Set all document properties
[**setDocumentProperty**](BackOfficeApi.md#setDocumentProperty) | **PUT** /documents/{document_id}/properties/{property_id} | Set a document property



## deleteDocument

> deleteDocument(documentId)

Delete the document from the system.

Permanently deletes the document from the system. The endpoint is idempotent. Deleting a non-existing document does not produce an error.

### Example

```javascript
import XaynBackOfficeSdk from 'xayn_back_office_sdk';
let defaultClient = XaynBackOfficeSdk.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new XaynBackOfficeSdk.BackOfficeApi();
let documentId = "documentId_example"; // String | Id of the document
apiInstance.deleteDocument(documentId).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **documentId** | **String**| Id of the document | 

### Return type

null (empty response body)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## deleteDocumentProperties

> deleteDocumentProperties(documentId)

Delete all document properties

Deletes all the properties of the document.

### Example

```javascript
import XaynBackOfficeSdk from 'xayn_back_office_sdk';
let defaultClient = XaynBackOfficeSdk.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new XaynBackOfficeSdk.BackOfficeApi();
let documentId = "documentId_example"; // String | Id of the document
apiInstance.deleteDocumentProperties(documentId).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **documentId** | **String**| Id of the document | 

### Return type

null (empty response body)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## deleteDocumentProperty

> deleteDocumentProperty(documentId, propertyId)

Delete a document property

Deletes the property of the document.

### Example

```javascript
import XaynBackOfficeSdk from 'xayn_back_office_sdk';
let defaultClient = XaynBackOfficeSdk.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new XaynBackOfficeSdk.BackOfficeApi();
let documentId = "documentId_example"; // String | Id of the document
let propertyId = "propertyId_example"; // String | Id of the document property
apiInstance.deleteDocumentProperty(documentId, propertyId).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **documentId** | **String**| Id of the document | 
 **propertyId** | **String**| Id of the document property | 

### Return type

null (empty response body)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## deleteDocuments

> deleteDocuments(opts)

Delete all listed documents.

Delete all documents listed in the request body. The endpoint is idempotent. I.e. if the list contains one or multiple non-existing documents, no error is produced.

### Example

```javascript
import XaynBackOfficeSdk from 'xayn_back_office_sdk';
let defaultClient = XaynBackOfficeSdk.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new XaynBackOfficeSdk.BackOfficeApi();
let opts = {
  'deleteDocumentsRequest': new XaynBackOfficeSdk.DeleteDocumentsRequest() // DeleteDocumentsRequest | 
};
apiInstance.deleteDocuments(opts).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **deleteDocumentsRequest** | [**DeleteDocumentsRequest**](DeleteDocumentsRequest.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: Not defined


## getDocumentProperties

> DocumentPropertiesResponse getDocumentProperties(documentId)

Get all document properties

Gets all the properties of the document.

### Example

```javascript
import XaynBackOfficeSdk from 'xayn_back_office_sdk';
let defaultClient = XaynBackOfficeSdk.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new XaynBackOfficeSdk.BackOfficeApi();
let documentId = "documentId_example"; // String | Id of the document
apiInstance.getDocumentProperties(documentId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **documentId** | **String**| Id of the document | 

### Return type

[**DocumentPropertiesResponse**](DocumentPropertiesResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getDocumentProperty

> DocumentPropertyResponse getDocumentProperty(documentId, propertyId)

Get a document property

Gets the property of the document.

### Example

```javascript
import XaynBackOfficeSdk from 'xayn_back_office_sdk';
let defaultClient = XaynBackOfficeSdk.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new XaynBackOfficeSdk.BackOfficeApi();
let documentId = "documentId_example"; // String | Id of the document
let propertyId = "propertyId_example"; // String | Id of the document property
apiInstance.getDocumentProperty(documentId, propertyId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **documentId** | **String**| Id of the document | 
 **propertyId** | **String**| Id of the document property | 

### Return type

[**DocumentPropertyResponse**](DocumentPropertyResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## ingestDocuments

> ingestDocuments(opts)

Add documents to the system

Add documents to the system. The system will create a representation of the document that will be used to match it against the preferences of a user.

### Example

```javascript
import XaynBackOfficeSdk from 'xayn_back_office_sdk';
let defaultClient = XaynBackOfficeSdk.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new XaynBackOfficeSdk.BackOfficeApi();
let opts = {
  'ingestionRequest': new XaynBackOfficeSdk.IngestionRequest() // IngestionRequest | 
};
apiInstance.ingestDocuments(opts).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ingestionRequest** | [**IngestionRequest**](IngestionRequest.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## setDocumentProperties

> setDocumentProperties(documentId, opts)

Set all document properties

Sets or replaces all the properties of the document.

### Example

```javascript
import XaynBackOfficeSdk from 'xayn_back_office_sdk';
let defaultClient = XaynBackOfficeSdk.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new XaynBackOfficeSdk.BackOfficeApi();
let documentId = "documentId_example"; // String | Id of the document
let opts = {
  'documentPropertiesRequest': new XaynBackOfficeSdk.DocumentPropertiesRequest() // DocumentPropertiesRequest | 
};
apiInstance.setDocumentProperties(documentId, opts).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **documentId** | **String**| Id of the document | 
 **documentPropertiesRequest** | [**DocumentPropertiesRequest**](DocumentPropertiesRequest.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: Not defined


## setDocumentProperty

> setDocumentProperty(documentId, propertyId, opts)

Set a document property

Sets or replaces the property of the document.

### Example

```javascript
import XaynBackOfficeSdk from 'xayn_back_office_sdk';
let defaultClient = XaynBackOfficeSdk.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new XaynBackOfficeSdk.BackOfficeApi();
let documentId = "documentId_example"; // String | Id of the document
let propertyId = "propertyId_example"; // String | Id of the document property
let opts = {
  'documentPropertyRequest': new XaynBackOfficeSdk.DocumentPropertyRequest() // DocumentPropertyRequest | 
};
apiInstance.setDocumentProperty(documentId, propertyId, opts).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **documentId** | **String**| Id of the document | 
 **propertyId** | **String**| Id of the document property | 
 **documentPropertyRequest** | [**DocumentPropertyRequest**](DocumentPropertyRequest.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: Not defined

